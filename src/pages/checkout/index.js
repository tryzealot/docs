import { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useQuery } from "@tanstack/react-query";
import { useHistory } from "@docusaurus/router";
import { usePaddleClient } from "@site/src/hooks/usePaddlePrices";
import { useGateway } from "@site/src/hooks/useGateway";
import { getCountryCodeFromLocale } from "@site/src/lib/utils";

function CheckoutClient() {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();

  const urlParams = useMemo(
    () =>
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null,
    []
  );

  const priceId = urlParams?.get("id");
  const discountCode = urlParams?.get("code");
  const quantity = urlParams?.get("quantity") || 1;

  const [userEmail, setUserEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const basePath = i18n.currentLocale !== "en" ? `/${i18n.currentLocale}` : "";
  const countryCode = getCountryCodeFromLocale(i18n.currentLocale);

const checkoutOptions = {
    checkout: {
      settings: {
        variant: "multi-page",
        locale: i18n.currentLocale,
        theme: "dark",
        allowLogout: false,
        showAddTaxId: false,
        successUrl: `${basePath}/checkout/success`,
        // displayMode: "inline",
        // frameTarget: "checkout-container",
        // frameStyle: "min-width: 286px; width: 600px; max-width: 600px;",
        // frameInitialHeight: "450",
      },
    },
    eventCallback: (data) => {
      switch (data.name) {
        case "checkout.completed":
          // 支付成功完成
          console.log("Payment completed:", data);
          // 将交易数据存储到 sessionStorage
          const transactionData = {
            transactionId: data.data.transaction_id,
            checkoutId: data.data.id,
            customerEmail: data.data.customer?.email,
            priceId: data.data.items?.[0]?.price_id,
            amount: data.data.totals?.total,
          };
          sessionStorage.setItem("paddleTransaction", JSON.stringify(transactionData));
          // 手动跳转到 success 页面
          history.push(`${basePath}/checkout/success`);
          break;

        case "checkout.payment.failed":
          // 支付失败
          console.error("Payment failed:", data);
          // 存储错误信息并跳转到失败页面
          const errorData = {
            errorCode: data.data?.error?.code,
            errorMessage: data.data?.error?.message,
          };
          sessionStorage.setItem("paddleError", JSON.stringify(errorData));
          history.push(`${basePath}/checkout/failed`);
          break;

        case "checkout.closed":
          // 用户关闭了 checkout（可能是取消支付）
          console.log("Checkout closed");
          history.push(`${basePath}/pricing`);
          break;

        case "checkout.customer.updated":
          // 客户信息更新
          console.log("Customer updated:", data);
          break;

        default:
          console.log("Unknown event:", data.name);
      }
    },
  };

  const { paddle } = usePaddleClient(checkoutOptions);
  const { gateway } = useGateway();

  const getCustomerOrders = async () => {
    return gateway.orders(submittedEmail);
  };

  const query = useQuery({
    queryKey: ["customerOrders", submittedEmail],
    queryFn: getCustomerOrders,
    enabled: !!submittedEmail && !!gateway && hasSubmitted,
  });

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (userEmail.trim()) {
      setSubmittedEmail(userEmail.trim());
      setHasSubmitted(true);
    }
  };

  useEffect(() => {
    if (
      query.data &&
      query.data.orders.length === 0 &&
      paddle?.Initialized &&
      priceId
    ) {
      const options = {
        customer: { email: submittedEmail, address: { countryCode } },
        discountCode,
        items: [
          {
            priceId,
            quantity,
          },
        ],
        customData: {
          customerEmail: submittedEmail,
          priceId: priceId,
        },
      };
      console.log("Opening Paddle checkout with options:", options);
      paddle.Checkout.open(options);
      paddle.Spinner.show();
    }
  }, [query.data, paddle, priceId, quantity, discountCode, submittedEmail, countryCode]);

  return (
    <main className="flex flex-col items-center px-4 py-8 gap-10">
      <div className="checkout-container"></div>

      {!hasSubmitted ? (
        <form onSubmit={handleEmailSubmit} className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Enter your email to continue</h1>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="your@email.com"
            className="px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-white"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </form>
      ) : (
        <>
          {(query.isLoading || !query.data) && <div>Preparing checkout ...</div>}
          {query.isError && <div>Error loading your orders.</div>}

          {query.data && query.data.orders.length > 0 && (
            <>
              <h1>Your Orders</h1>
              <ul>
                {query.data.orders.map((order) => (
                  <li key={order.id}>
                    Order ID: {order.id}, Amount: {order.amount}, Status:{" "}
                    {order.status}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Layout title="Checkout">
      <BrowserOnly fallback={<div>Loading checkout...</div>}>
        {() => <CheckoutClient />}
      </BrowserOnly>
    </Layout>
  );
}
