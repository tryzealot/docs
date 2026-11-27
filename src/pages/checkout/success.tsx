import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useEffect, useState } from "react";
import { useGateway } from "@site/src/hooks/useGateway";
import { PrimaryButton } from "@site/src/components/ui/Button";
import Translate, { translate } from "@docusaurus/Translate";
import type { LicenseResponse, TransactionData } from "@site/src/types";

function SuccessClient(): ReactNode {
  const { gateway } = useGateway();
  const [isLoading, setIsLoading] = useState(true);
  const [license, setLicense] = useState<LicenseResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [transactionInfo, setTransactionInfo] =
    useState<TransactionData | null>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem("paddleTransaction");
    if (storedData) {
      const transactionData: TransactionData = JSON.parse(storedData);
      setTransactionInfo(transactionData);
    } else {
      setError(
        translate({
          id: "checkout.success.noTransaction",
          message: "No transaction information found",
        }),
      );
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (gateway && transactionInfo && !license && !error && isLoading) {
      const data = {
        transactionId: transactionInfo.transactionId,
        checkoutId: transactionInfo.checkoutId,
        customerEmail: transactionInfo.customerEmail,
        priceId: transactionInfo.priceId,
      };

      gateway
        .generateLicense(data)
        .then((result) => {
          if (result.success) {
            setLicense(result);
          } else {
            setError(result.message || "Failed to generate license");
          }
          setIsLoading(false);
        })
        .catch((err: Error) => {
          console.error("Failed to generate license:", err);
          setError(err.message || "Failed to generate license");
          setIsLoading(false);
        });
    }
  }, [gateway, transactionInfo, license, error, isLoading]);

  return (
    <main className="flex flex-col items-center px-4 py-8 gap-6">
      {isLoading ? (
        <>
          <div className="text-6xl mb-4">⏳</div>
          <h1 className="text-3xl font-bold text-[var(--color-base-content)]">
            <Translate id="checkout.success.processing">
              Processing your payment...
            </Translate>
          </h1>
          <p className="text-[var(--semantic-text-muted)]">
            <Translate id="checkout.success.processingDesc">
              Please wait while we generate your license.
            </Translate>
          </p>
        </>
      ) : error ? (
        <>
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-[var(--color-warning)]">
            <Translate id="checkout.success.failed.title">
              License Generation Failed
            </Translate>
          </h1>
          <p className="text-[var(--semantic-text-muted)]">{error}</p>
          <p className="text-[var(--semantic-text-muted)] mt-2">
            <Translate id="checkout.success.failed.desc">
              Your payment was successful, but we encountered an issue
              generating your license. Please contact support with your
              transaction ID.
            </Translate>
          </p>
          {transactionInfo?.transactionId && (
            <div className="mt-4 p-4 bg-[var(--color-base-200)] rounded-lg">
              <p className="text-xs text-[var(--semantic-text-muted)] mb-1">
                <Translate id="checkout.success.transactionId">
                  Transaction ID
                </Translate>
              </p>
              <code className="text-sm text-[var(--color-base-content)]">
                {transactionInfo.transactionId}
              </code>
            </div>
          )}
          <PrimaryButton onClick={() => window.location.reload()}>
            <Translate id="checkout.success.failed.tryAgain">
              Try Again
            </Translate>
          </PrimaryButton>
        </>
      ) : (
        <>
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-[var(--color-base-content)]">
            <Translate id="checkout.success.successTitle">
              Payment Successful!
            </Translate>
          </h1>
          <p className="text-[var(--semantic-text-muted)]">
            <Translate id="checkout.success.successDesc">
              Thank you for your purchase. Your order has been processed
              successfully.
            </Translate>
          </p>

          {license && (
            <div className="mt-8 p-6 bg-[var(--color-base-200)] rounded-lg w-full max-w-2xl">
              <h2 className="text-xl font-semibold mb-4 text-[var(--color-base-content)]">
                <Translate id="checkout.success.license.title">
                  Your License
                </Translate>
              </h2>

              <div className="bg-[var(--color-base-100)] p-4 rounded-lg mb-4 relative border border-[var(--color-base-300)]">
                <p className="text-xs text-[var(--semantic-text-muted)] mb-1">
                  <Translate id="checkout.success.license.key">
                    License Key
                  </Translate>
                </p>
                <code className="text-sm break-all pr-20 text-[var(--color-base-content)]">
                  {license.license?.key}
                </code>
                <button
                  onClick={() =>
                    license.license?.key && copyToClipboard(license.license.key)
                  }
                  className="absolute top-3 right-3 px-3 py-1 text-xs bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded hover:opacity-90 transition-opacity"
                >
                  {copied
                    ? translate({
                        id: "checkout.success.license.copied",
                        message: "Copied!",
                      })
                    : translate({
                        id: "checkout.success.license.copy",
                        message: "Copy",
                      })}
                </button>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">
                    <Translate id="checkout.success.order.id">
                      Order ID:
                    </Translate>
                  </span>
                  <span className="text-sm text-[var(--color-base-content)]">
                    {license.order?.id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">
                    <Translate id="checkout.success.order.email">
                      Email:
                    </Translate>
                  </span>
                  <span className="text-sm text-[var(--color-base-content)]">
                    {license.customer?.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">
                    <Translate id="checkout.success.order.amount">
                      Amount:
                    </Translate>
                  </span>
                  <span className="text-sm text-[var(--color-base-content)]">
                    {license.order
                      ? `$${(license.order.totalAmount / 100).toFixed(2)} ${license.order.currency}`
                      : "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">
                    <Translate id="checkout.success.order.status">
                      Status:
                    </Translate>
                  </span>
                  <span className="text-sm text-[var(--color-base-content)]">
                    {license.license?.active ? "Active" : "Inactive"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">
                    <Translate id="checkout.success.order.expires">
                      Expires:
                    </Translate>
                  </span>
                  <span className="text-sm text-[var(--color-base-content)]">
                    {license.license?.expiredAt
                      ? new Date(license.license.expiredAt).toLocaleDateString()
                      : "-"}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--semantic-text-muted)]">
                <Translate id="checkout.success.license.saveReminder">
                  Please save your license key in a safe place.
                </Translate>
              </p>
            </div>
          )}

          <PrimaryButton onClick={() => (window.location.href = "/")}>
            <Translate id="checkout.success.returnHome">Return Home</Translate>
          </PrimaryButton>
        </>
      )}
    </main>
  );
}

export default function CheckoutSuccessPage(): ReactNode {
  return (
    <Layout
      title={translate({
        id: "checkout.success.title",
        message: "Checkout Success",
      })}
    >
      <BrowserOnly
        fallback={
          <div>
            {translate({
              id: "checkout.success.loading",
              message: "Loading...",
            })}
          </div>
        }
      >
        {() => <SuccessClient />}
      </BrowserOnly>
    </Layout>
  );
}
