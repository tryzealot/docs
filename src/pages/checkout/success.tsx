import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useEffect, useState } from "react";
import { useGateway } from "@site/src/hooks/useGateway";
import { PrimaryButton } from "@site/src/components/ui/Button";
import type { LicenseResponse, TransactionData } from "@site/src/types";

function SuccessClient(): JSX.Element {
  const { gateway } = useGateway();
  const [isLoading, setIsLoading] = useState(true);
  const [license, setLicense] = useState<LicenseResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [transactionInfo, setTransactionInfo] = useState<TransactionData | null>(null);
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
      setError("No transaction information found");
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

      console.log("Generating license with data:", data);
      gateway
        .generateLicense(data)
        .then((result) => {
          console.log("License API response:", result);
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
          <h1 className="text-3xl font-bold text-[var(--color-base-content)]">Processing your payment...</h1>
          <p className="text-[var(--semantic-text-muted)]">
            Please wait while we generate your license.
          </p>
        </>
      ) : error ? (
        <>
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-[var(--color-warning)]">License Generation Failed</h1>
          <p className="text-[var(--semantic-text-muted)]">{error}</p>
          <p className="text-[var(--semantic-text-muted)] mt-2">
            Your payment was successful, but we encountered an issue generating your license.
            Please contact support with your transaction ID.
          </p>
          {transactionInfo?.transactionId && (
            <div className="mt-4 p-4 bg-[var(--color-base-200)] rounded-lg">
              <p className="text-xs text-[var(--semantic-text-muted)] mb-1">Transaction ID</p>
              <code className="text-sm text-[var(--color-base-content)]">{transactionInfo.transactionId}</code>
            </div>
          )}
          <PrimaryButton onClick={() => window.location.reload()}>
            Try Again
          </PrimaryButton>
        </>
      ) : (
        <>
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-[var(--color-base-content)]">Payment Successful!</h1>
          <p className="text-[var(--semantic-text-muted)]">
            Thank you for your purchase. Your order has been processed successfully.
          </p>

          {license && (
            <div className="mt-8 p-6 bg-[var(--color-base-200)] rounded-lg w-full max-w-2xl">
              <h2 className="text-xl font-semibold mb-4 text-[var(--color-base-content)]">Your License</h2>

              <div className="bg-[var(--color-base-100)] p-4 rounded-lg mb-4 relative border border-[var(--color-base-300)]">
                <p className="text-xs text-[var(--semantic-text-muted)] mb-1">License Key</p>
                <code className="text-sm break-all pr-20 text-[var(--color-base-content)]">{license.license?.key}</code>
                <button
                  onClick={() => license.license?.key && copyToClipboard(license.license.key)}
                  className="absolute top-3 right-3 px-3 py-1 text-xs bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded hover:opacity-90 transition-opacity"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">Order ID:</span>
                  <span className="text-sm text-[var(--color-base-content)]">{license.purchase?.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">Email:</span>
                  <span className="text-sm text-[var(--color-base-content)]">{license.customer?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">Plan:</span>
                  <span className="text-sm text-[var(--color-base-content)]">{license.purchase?.planType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">Type:</span>
                  <span className="text-sm text-[var(--color-base-content)]">{license.purchase?.productType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--semantic-text-muted)]">Expires:</span>
                  <span className="text-sm text-[var(--color-base-content)]">
                    {license.license?.expiredAt ? new Date(license.license.expiredAt).toLocaleDateString() : '-'}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--semantic-text-muted)]">
                Please save your license key in a safe place.
              </p>
            </div>
          )}

          <PrimaryButton onClick={() => window.location.href = "/"}>
            Return Home
          </PrimaryButton>
        </>
      )}
    </main>
  );
}

export default function CheckoutSuccessPage(): JSX.Element {
  return (
    <Layout title="Checkout Success">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <SuccessClient />}
      </BrowserOnly>
    </Layout>
  );
}
