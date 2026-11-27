import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import Translate, { translate } from "@docusaurus/Translate";
import { usePaddleClient } from "@site/src/hooks/usePaddlePrices";
import { useGateway } from "@site/src/hooks/useGateway";
import { useCustomerOrders } from "@site/src/lib/query";
import { encrypt } from "@site/src/lib/crypto";
import { PrimaryButton } from "@site/src/components/ui/Button";
import type {
  PaddleCheckoutOptions,
  PaddleEvent,
  PaddleCheckoutOpenOptions,
} from "@site/src/types";

// 「没有找到订单」不一定以 404 返回：网关/代理可能给出 400、500，或带
// "No customers found..." 文案的非 JSON 响应。这些都等价于没有订单，应继续结账。
function isNoOrdersError(error: Error | null): boolean {
  if (!error) return false;
  if ((error as any)?.status === 404) return true;
  return /no (customer|order)s? found|order not found|\bnot found\b/i.test(
    error.message || "",
  );
}

function CheckoutClient(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();

  const urlParams = useMemo(
    () =>
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null,
    [],
  );

  const priceId = urlParams?.get("id");
  const discountCode = urlParams?.get("code");
  const quantity = parseInt(urlParams?.get("quantity") || "1", 10);

  const [userEmail, setUserEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const basePath = i18n.currentLocale !== "en" ? `/${i18n.currentLocale}` : "";
  const successUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${basePath}/checkout/success`
      : `${basePath}/checkout/success`;

  const checkoutOptions: PaddleCheckoutOptions = {
    checkout: {
      settings: {
        variant: "multi-page",
        locale: i18n.currentLocale,
        theme: "dark",
        allowLogout: false,
        showAddTaxId: false,
        successUrl,
      },
    },
    eventCallback: (data: PaddleEvent) => {
      switch (data.name) {
        case "checkout.completed":
          const transactionData = {
            transactionId: data.data.transaction_id || "",
            checkoutId: data.data.id,
            customerEmail: data.data.customer?.email || "",
            priceId: data.data.items?.[0]?.price_id || "",
            amount: data.data.totals?.total,
          };
          sessionStorage.setItem(
            "paddleTransaction",
            JSON.stringify(transactionData),
          );
          history.push(`${basePath}/checkout/success`);
          break;

        case "checkout.payment.failed":
          console.error("Payment failed:", data);
          const errorData = {
            errorCode: data.data?.error?.code || "unknown",
            errorMessage: data.data?.error?.message || "Payment failed",
            priceId: data.data?.items?.[0]?.price_id,
          };
          sessionStorage.setItem("paddleError", JSON.stringify(errorData));
          history.push(`${basePath}/checkout/failed`);
          break;

        case "checkout.closed":
          history.push(`${basePath}/pricing`);
          break;

        case "checkout.customer.updated":
          break;

        default:
          break;
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
    if (query.data && query.data.orders?.length > 0) {
      const secretKey = process.env.ZEALOT_ENCRYPTION_KEY;
      if (secretKey) {
        encrypt(submittedEmail, secretKey).then((encryptedEmail) => {
          history.push(
            `${basePath}/orders?email=${encodeURIComponent(encryptedEmail)}`,
          );
        });
      } else {
        history.push(
          `${basePath}/orders?email=${encodeURIComponent(submittedEmail)}`,
        );
      }
      return;
    }

    // 没有订单或 404 错误时，允许继续结账；其他错误不打开 checkout
    const shouldOpenCheckout =
      (query.data && query.data.orders?.length === 0) ||
      (query.isError && isNoOrdersError(query.error));

    if (shouldOpenCheckout && paddle?.Initialized && priceId) {
      const name = submittedEmail.split("@")[0] || "";
      const options: PaddleCheckoutOpenOptions = {
        customer: { email: submittedEmail, name },
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
      paddle.Checkout.open(options);
      paddle.Spinner.show();
    }
  }, [
    query.data,
    query.isError,
    paddle,
    priceId,
    quantity,
    discountCode,
    submittedEmail,
    history,
    basePath,
  ]);

  return (
    <main className="flex flex-col items-center px-4 py-8 gap-10">
      <div className="checkout-container"></div>

      {!hasSubmitted ? (
        <form
          onSubmit={handleEmailSubmit}
          className="flex flex-col items-center gap-4 w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-[var(--color-base-content)]">
            <Translate id="checkout.email.title">
              Enter your email to continue
            </Translate>
          </h1>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder={translate({
              id: "checkout.email.placeholder",
              message: "your@email.com",
            })}
            className="w-full px-5 py-3 text-lg border-2 border-[var(--color-base-300)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] bg-[var(--color-base-100)] text-[var(--color-base-content)] placeholder:text-[var(--semantic-text-muted)] transition-colors"
            required
          />
          <PrimaryButton type="submit">
            <Translate id="checkout.email.continue">Continue</Translate>
          </PrimaryButton>
        </form>
      ) : (
        <>
          {query.isError && !isNoOrdersError(query.error) ? (
            <div className="flex flex-col items-center gap-4 px-6 py-4 bg-[var(--semantic-error-bg)] border-2 border-[var(--color-error)] rounded-lg">
              <p className="text-lg font-medium text-[var(--color-error)]">
                <Translate id="checkout.error.loadingOrders">
                  Error loading your checkout.
                </Translate>
              </p>
              <PrimaryButton
                onClick={() => {
                  setHasSubmitted(false);
                  setSubmittedEmail("");
                }}
              >
                <Translate id="checkout.error.goBack">Go Back</Translate>
              </PrimaryButton>
            </div>
          ) : (
            (query.isLoading ||
              !query.data ||
              (query.isError && isNoOrdersError(query.error))) && (
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xl font-medium text-[var(--color-primary)]">
                  <Translate id="checkout.loading.preparing">
                    Preparing checkout...
                  </Translate>
                </p>
              </div>
            )
          )}

          {query.data && query.data.orders?.length > 0 && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xl font-medium text-[var(--color-primary)]">
                <Translate id="checkout.loading.redirecting">
                  Redirecting to your orders...
                </Translate>
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default function CheckoutPage(): ReactNode {
  return (
    <Layout title={translate({ id: "checkout.title", message: "Checkout" })}>
      <CheckoutClient />
    </Layout>
  );
}
