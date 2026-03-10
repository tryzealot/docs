import { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import { usePaddleClient } from "@site/src/hooks/usePaddlePrices";
import { useGateway } from "@site/src/hooks/useGateway";
import { getCountryCodeFromLocale } from "@site/src/lib/utils";
import { useCustomerOrders } from "@site/src/lib/query";

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

  const query = useCustomerOrders(gateway, submittedEmail, hasSubmitted);

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
      const name = submittedEmail.split('@')[0];
      const options = {
        customer: { email: submittedEmail, name, address: { countryCode } },
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
        <form onSubmit={handleEmailSubmit} className="flex flex-col items-center gap-4 w-full max-w-md">
          <h1 className="text-2xl font-bold">Enter your email to continue</h1>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-5 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[--ifm-color-primary] dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-[--ifm-color-primary] transition-colors"
            required
          />
          <button
            type="submit"
            className="hover:cursor-pointer w-full px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[--ifm-color-primary] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            style={{
              background: `linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)`
            }}
          >
            Continue
          </button>
        </form>
      ) : (
        <>
          {query.isError ? (
            <div className="px-6 py-4 bg-red-50 border-2 border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-800">
              <p className="text-lg font-medium text-red-700 dark:text-red-400">Error loading your orders.</p>
            </div>
          ) : (query.isLoading || !query.data) && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[--ifm-color-primary] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xl font-medium text-[--ifm-color-primary]">Preparing checkout...</p>
            </div>
          )}

          {query.data && query.data.orders?.length > 0 && (
            <div className="flex flex-col items-center gap-6 w-full max-w-md">
              <div className="w-full px-6 py-6 bg-green-50 border-2 border-green-200 rounded-xl dark:bg-green-900/20 dark:border-green-800">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-400">Existing Orders Found</h3>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                  You have {query.data.orders.length} order(s) associated with this email. View your complete order history, license details, and subscription information.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => history.push(`${basePath}/orders`)}
                    className="hover:cursor-pointer flex-1 px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    style={{
                      background: `linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)`
                    }}
                  >
                    View My Orders
                  </button>
                  <button
                    onClick={() => history.push(`${basePath}/pricing`)}
                    className="hover:cursor-pointer px-4 py-2 text-sm font-semibold text-green-700 bg-white border border-green-300 rounded-lg hover:bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-700 dark:hover:bg-gray-700"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
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
