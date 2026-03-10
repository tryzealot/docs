import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface ErrorInfo {
  errorCode?: string;
  errorMessage?: string;
}

function FailedClient(): JSX.Element {
  const history = useHistory();
  const { i18n } = useDocusaurusContext();
  const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);

  useEffect(() => {
    // 从 sessionStorage 读取错误信息
    const storedData = sessionStorage.getItem('paddleError');
    if (storedData) {
      const errorData = JSON.parse(storedData) as ErrorInfo;
      setErrorInfo(errorData);
      console.log('Payment failed:', errorData);
      // 清除 sessionStorage 中的数据
      sessionStorage.removeItem('paddleError');
    } else {
      setErrorInfo({ errorCode: 'unknown', errorMessage: 'Payment failed' });
    }
  }, []);

  const basePath = i18n.currentLocale !== 'en' ? `/${i18n.currentLocale}` : '';

  return (
    <main className="flex flex-col items-center px-4 py-8 gap-6">
      <div className="text-6xl mb-4">❌</div>
      <h1 className="text-3xl font-bold text-red-600">Payment Failed</h1>
      <p className="text-gray-600 dark:text-gray-400">
        We&apos;re sorry, but your payment could not be processed.
      </p>

      {errorInfo?.errorMessage && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <p className="text-sm text-red-700 dark:text-red-300">
            Error: {errorInfo.errorMessage}
          </p>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => history.goBack()}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.href = `${basePath}/pricing`}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Pricing
        </button>
      </div>

      <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-md">
        <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          If you continue to experience issues, please contact our support team
          with details about your purchase attempt.
        </p>
      </div>
    </main>
  );
}

export default function CheckoutFailedPage(): JSX.Element {
  return (
    <Layout title="Checkout Failed">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <FailedClient />}
      </BrowserOnly>
    </Layout>
  );
}
