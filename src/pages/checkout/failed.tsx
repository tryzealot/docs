import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { PrimaryButton, OutlineButton } from '@site/src/components/ui/Button';

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
      <h1 className="text-3xl font-bold text-[var(--color-error)]">Payment Failed</h1>
      <p className="text-[var(--semantic-text-muted)]">
        We&apos;re sorry, but your payment could not be processed.
      </p>

      {errorInfo?.errorMessage && (
        <div className="mt-4 p-4 bg-[var(--semantic-error-bg)] rounded-lg border border-[var(--color-error)]">
          <p className="text-sm text-[var(--color-error)]">
            Error: {errorInfo.errorMessage}
          </p>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        <OutlineButton
          onClick={() => history.goBack()}
          fullWidth={false}
        >
          Try Again
        </OutlineButton>
        <PrimaryButton
          onClick={() => window.location.href = `${basePath}/pricing`}
          fullWidth={false}
        >
          Return to Pricing
        </PrimaryButton>
      </div>

      <div className="mt-8 p-6 bg-[var(--color-base-200)] rounded-lg max-w-md">
        <h2 className="text-lg font-semibold mb-2 text-[var(--color-base-content)]">Need Help?</h2>
        <p className="text-sm text-[var(--semantic-text-muted)]">
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