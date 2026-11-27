import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Translate, { translate } from "@docusaurus/Translate";
import { PrimaryButton, SecondaryButton } from "@site/src/components/ui/Button";
import type { ErrorData } from "@site/src/types";

function FailedClient(): ReactNode {
  const [error, setError] = useState<ErrorData | null>(null);

  useEffect(() => {
    const storedError = sessionStorage.getItem("paddleError");
    if (storedError) {
      try {
        setError(JSON.parse(storedError));
      } catch {
        // Ignore malformed payloads and fall back to the generic message.
      }
    }
  }, []);

  return (
    <main className="flex flex-col items-center px-4 py-8 gap-6">
      <div className="text-6xl mb-4">⚠️</div>
      <h1 className="text-3xl font-bold text-[var(--color-base-content)]">
        <Translate id="checkout.failed.title">Payment Failed</Translate>
      </h1>
      <p className="text-[var(--semantic-text-muted)]">
        {error?.errorMessage ??
          translate({
            id: "checkout.failed.desc",
            message:
              "We were unable to complete your payment. No charge has been made.",
          })}
      </p>
      <p className="text-[var(--semantic-text-muted)]">
        <Translate id="checkout.failed.retryHint">
          Please try again, or contact support if the problem persists.
        </Translate>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <PrimaryButton
          type="button"
          onClick={() => {
            window.location.href = error?.priceId
              ? `/checkout/?id=${encodeURIComponent(error.priceId)}`
              : "/pricing";
          }}
        >
          <Translate id="checkout.failed.tryAgain">Try Again</Translate>
        </PrimaryButton>
        <SecondaryButton
          type="button"
          onClick={() => {
            window.location.href = "/pricing";
          }}
        >
          <Translate id="checkout.failed.backToPricing">
            Back to Pricing
          </Translate>
        </SecondaryButton>
      </div>
    </main>
  );
}

export default function CheckoutFailedPage(): ReactNode {
  return (
    <Layout
      title={translate({
        id: "checkout.failed.pageTitle",
        message: "Payment Failed",
      })}
    >
      <BrowserOnly
        fallback={
          <div>
            {translate({
              id: "checkout.failed.loading",
              message: "Loading...",
            })}
          </div>
        }
      >
        {() => <FailedClient />}
      </BrowserOnly>
    </Layout>
  );
}
