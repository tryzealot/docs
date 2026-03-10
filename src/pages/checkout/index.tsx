import { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import { usePaddleClient } from "@site/src/hooks/usePaddlePrices";
import { useGateway } from "@site/src/hooks/useGateway";
import { getCountryCodeFromLocale } from "@site/src/lib/utils";
import { useCustomerOrders } from "@site/src/lib/query";
import { encrypt } from "@site/src/lib/crypto";
import { PrimaryButton } from "@site/src/components/ui/Button";
import type {
  PaddleCheckoutOptions,
  PaddleEvent,
  PaddleCheckoutOpenOptions,
} from "@site/src/types";

function CheckoutClient(): JSX.Element {
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
  const quantity = parseInt(urlParams?.get("quantity") || "1", 10);

  const [userEmail, setUserEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const basePath = i18n.currentLocale !== "en" ? `/${i18n.currentLocale}` : "";
  const countryCode = getCountryCodeFromLocale(i18n.currentLocale);

  const checkoutOptions: PaddleCheckoutOptions = {
    checkout: {
      settings: {
        variant: "multi-page",
        locale: i18n.currentLocale,
        theme: "dark",
        allowLogout: false,
        showAddTaxId: false,
        successUrl: `${basePath}/checkout/success`,
      },
    },
    eventCallback: (data: PaddleEvent) => {
      switch (data.name) {
        case "checkout.completed":
          console.log("Payment completed:", data);
          const transactionData = {
            transactionId: data.data.transaction_id || "",
            checkoutId: data.data.id,
            customerEmail: data.data.customer?.email || "",
            priceId: data.data.items?.[0]?.price_id || "",
            amount: data.data.totals?.total,
          };
          sessionStorage.setItem("paddleTransaction", JSON.stringify(transactionData));
          history.push(`${basePath}/checkout/success`);
          break;

        case "checkout.payment.failed":
          console.error("Payment failed:", data);
          const errorData = {
            errorCode: data.data?.error?.code || "unknown",
            errorMessage: data.data?.error?.message || "Payment failed",
          };
          sessionStorage.setItem("paddleError", JSON.stringify(errorData));
          history.push(`${basePath}/checkout/failed`);
          break;

        case "checkout.closed":
          console.log("Checkout closed");
          history.push(`${basePath}/pricing`);
          break;

        case "checkout.customer.updated":
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

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userEmail.trim()) {
      setSubmittedEmail(userEmail.trim());
      setHasSubmitted(true);
    }
  };

  useEffect(() => {
    // 如果用户已有订单，跳转到 orders 页面
    if (query.data && query.data.orders.length > 0) {
      const secretKey = process.env.ZEALOT_ENCRYPTION_KEY;
      if (secretKey) {
        encrypt(submittedEmail, secretKey).then((encryptedEmail) => {
          sessionStorage.setItem("ordersEmail", encryptedEmail);
          history.push(`${basePath}/orders`);
        });
      } else {
        sessionStorage.setItem("ordersEmail", submittedEmail);
        history.push(`${basePath}/orders`);
      }
      return;
    }

    if (
      query.data &&
      query.data.orders.length === 0 &&
      paddle?.Initialized &&
      priceId
    ) {
      const name = submittedEmail.split("@")[0] || "";
      const options: PaddleCheckoutOpenOptions = {
        customer: { email: submittedEmail, name, address: { countryCode } },
        discountCode: discountCode || undefined,
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
          <PrimaryButton type="submit">Continue</PrimaryButton>
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
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[--ifm-color-primary] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xl font-medium text-[--ifm-color-primary]">Redirecting to your orders...</p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default function CheckoutPage(): JSX.Element {
  return (
    <Layout title="Checkout">
      <BrowserOnly fallback={<div>Loading checkout...</div>}>
        {() => <CheckoutClient />}
      </BrowserOnly>
    </Layout>
  );
}