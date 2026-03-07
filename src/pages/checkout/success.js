import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useGateway } from "@site/src/hooks/useGateway";

function SuccessClient() {
  const { gateway } = useGateway();
  const [isLoading, setIsLoading] = useState(true);
  const [license, setLicense] = useState(null);
  const [error, setError] = useState(null);
  const [transactionInfo, setTransactionInfo] = useState(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    // 从 sessionStorage 读取交易数据
    const storedData = sessionStorage.getItem("paddleTransaction");
    if (storedData) {
      const transactionData = JSON.parse(storedData);
      setTransactionInfo(transactionData);
      // 清除 sessionStorage 中的数据
      // sessionStorage.removeItem("paddleTransaction");
    } else {
      setError("No transaction information found");
      setIsLoading(false);
    }
  }, []);

  // 当 gateway 初始化完成且有交易数据时，生成 license
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
            setIsLoading(false);
          } else {
            setError(result.message || "Failed to generate license");
            setIsLoading(false);
          }
        })
        .catch((err) => {
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
          <h1 className="text-3xl font-bold">Processing your payment...</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we generate your license.
          </p>
        </>
      ) : error ? (
        <>
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-yellow-600">License Generation Failed</h1>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Your payment was successful, but we encountered an issue generating your license.
            Please contact support with your transaction ID.
          </p>
          {transactionInfo?.transactionId && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Transaction ID</p>
              <code className="text-sm">{transactionInfo.transactionId}</code>
            </div>
          )}
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </>
      ) : (
        <>
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold">Payment Successful!</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Thank you for your purchase. Your order has been processed successfully.
          </p>

          {license && (
            <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg w-full max-w-2xl">
              <h2 className="text-xl font-semibold mb-4">Your License</h2>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg mb-4 relative">
                <p className="text-xs text-gray-500 mb-1">License Key</p>
                <code className="text-sm break-all pr-20">{license.license?.key}</code>
                <button
                  onClick={() => copyToClipboard(license.license?.key)}
                  className="absolute top-3 right-3 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Order ID:</span>
                  <span className="text-sm">{license.purchase?.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Email:</span>
                  <span className="text-sm">{license.customer?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Plan:</span>
                  <span className="text-sm">{license.purchase?.planType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Type:</span>
                  <span className="text-sm">{license.purchase?.productType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Expires:</span>
                  <span className="text-sm">
                    {new Date(license.license?.expiredAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Please save your license key in a safe place.
              </p>
            </div>
          )}

          <button
            onClick={() => window.location.href = "/"}
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return Home
          </button>
        </>
      )}
    </main>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Layout title="Checkout Success">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <SuccessClient />}
      </BrowserOnly>
    </Layout>
  );
}
