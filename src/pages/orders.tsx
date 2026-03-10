import { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import { useGateway } from "@site/src/hooks/useGateway";
import { useCustomerOrders } from "@site/src/lib/query";
import { decrypt } from "@site/src/lib/crypto";
import { PrimaryButton, SecondaryButton } from "@site/src/components/ui/Button";
import type { Order, License, Subscription, Customer } from "@site/src/types";

function OrdersClient(): JSX.Element {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();

  const [userEmail, setUserEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [fromCheckout, setFromCheckout] = useState(false);

  // 从 sessionStorage 读取预填充的 email（从 checkout 页面跳转过来）
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("ordersEmail");
    if (storedEmail) {
      const secretKey = process.env.ZEALOT_ENCRYPTION_KEY;
      if (secretKey) {
        decrypt(storedEmail, secretKey)
          .then((decryptedEmail) => {
            setUserEmail(decryptedEmail);
            setSubmittedEmail(decryptedEmail);
            setHasSubmitted(true);
            setFromCheckout(true);
            sessionStorage.removeItem("ordersEmail");
          })
          .catch(() => {
            // 解密失败，可能是未加密的旧数据
            setUserEmail(storedEmail);
            setSubmittedEmail(storedEmail);
            setHasSubmitted(true);
            setFromCheckout(true);
            sessionStorage.removeItem("ordersEmail");
          });
      } else {
        setUserEmail(storedEmail);
        setSubmittedEmail(storedEmail);
        setHasSubmitted(true);
        setFromCheckout(true);
        sessionStorage.removeItem("ordersEmail");
      }
    }
  }, []);

  const basePath = i18n.currentLocale !== "en" ? `/${i18n.currentLocale}` : "";

  const { gateway } = useGateway();
  const query = useCustomerOrders(gateway, submittedEmail, hasSubmitted);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userEmail.trim()) {
      setSubmittedEmail(userEmail.trim());
      setHasSubmitted(true);
    }
  };

  const handleBack = () => {
    history.push(`${basePath}/pricing`);
  };

  return (
    <main className="flex flex-col items-center px-4 py-8 gap-10 min-h-screen">
      {!hasSubmitted ? (
        <form onSubmit={handleEmailSubmit} className="flex flex-col items-center gap-4 w-full max-w-md">
          <h1 className="text-2xl font-bold">Enter your email to view orders</h1>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-5 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[--ifm-color-primary] dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-[--ifm-color-primary] transition-colors"
            required
          />
          <PrimaryButton type="submit">View Orders</PrimaryButton>
          <SecondaryButton type="button" onClick={handleBack}>
            Back to Pricing
          </SecondaryButton>
        </form>
      ) : (
        <>
          {query.isError ? (
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
              <div className="px-6 py-4 bg-red-50 border-2 border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-800 w-full">
                <p className="text-lg font-medium text-red-700 dark:text-red-400">Error loading your orders.</p>
              </div>
              <SecondaryButton onClick={() => setHasSubmitted(false)}>
                Try Again
              </SecondaryButton>
            </div>
          ) : (query.isLoading || !query.data) && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[--ifm-color-primary] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xl font-medium text-[--ifm-color-primary]">Loading your orders...</p>
            </div>
          )}

          {query.data && (
            <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Orders</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">{submittedEmail}</span>
              </div>
              {fromCheckout && query.data.orders && query.data.orders.length > 0 && (
                <div className="w-full px-6 py-2 bg-blue-50 border-2 border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800">
                  <p className="p-0 m-0 text-lg font-medium text-blue-700 dark:text-blue-400">
                    You already have an order associated with this email.
                  </p>
                </div>
              )}

              {query.data.orders?.length === 0 ? (
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="px-6 py-8 bg-gray-50 border-2 border-gray-200 rounded-lg dark:bg-gray-800/50 dark:border-gray-700 w-full text-center">
                    <p className="text-lg text-gray-600 dark:text-gray-400">No orders found for this email.</p>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <SecondaryButton onClick={() => setHasSubmitted(false)} flex-1>
                      Search Another Email
                    </SecondaryButton>
                    <PrimaryButton onClick={handleBack} className="flex-1">
                      Back to Pricing
                    </PrimaryButton>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {/* Customer Info */}
                    {query.data.customer && (
                      <div className="px-6 py-5 bg-white border-2 border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Customer</h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</span>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{query.data.customer.email}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Customer ID</span>
                          <span className="text-sm font-mono text-gray-600 dark:text-gray-300">{query.data.customer.id}</span>
                        </div>
                      </div>
                    )}

                    {/* License Info */}
                    {query.data.license && (
                      <div className="px-6 py-5 bg-white border-2 border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">License</h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">License Key</span>
                          <span className="text-sm font-mono font-semibold text-[--ifm-color-primary]">{query.data.license.key}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</span>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            query.data.license.active
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                            {query.data.license.active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Orders */}
                    {query.data.orders.map((order: Order) => (
                      <div
                        key={order.id}
                        className="px-6 py-5 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700"
                      >
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Order</h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Order ID
                          </span>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {order.id}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Amount
                          </span>
                          <span className="text-lg font-bold text-[--ifm-color-primary]">
                            {(order.totalAmount).toFixed(2)} {order.currency}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Created
                          </span>
                          <span className="text-sm text-gray-900 dark:text-white">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Paid At
                          </span>
                          <span className="text-sm text-gray-900 dark:text-white">
                            {order.paidAt ? new Date(order.paidAt).toLocaleDateString() : '-'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Status
                          </span>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            order.status === 'completed'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    ))}


                    {/* Subscription Info */}
                    {query.data.subscription && (
                      <div className="px-6 py-5 bg-white border-2 border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Subscription</h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</span>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            query.data.subscription.status === 'active'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                          }`}>
                            {query.data.subscription.status.charAt(0).toUpperCase() + query.data.subscription.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Active At</span>
                          <span className="text-sm text-gray-900 dark:text-white">
                            {new Date(query.data.subscription.currentPeriodStart).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Expires At</span>
                          <span className="text-sm text-gray-900 dark:text-white">
                            {new Date(query.data.subscription.currentPeriodEnd).toLocaleDateString()}
                          </span>
                        </div>
                        {query.data.subscription.cancelAtPeriodEnd && (
                          <div className="mt-3 px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-800">
                            <p className="text-sm text-yellow-700 dark:text-yellow-400">Will cancel at period end</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 w-full">
                    <SecondaryButton
                      onClick={() => query.refetch()}
                      disabled={query.isFetching}
                      className="flex-1 dark:border-0"
                    >
                      {query.isFetching ? 'Refreshing...' : 'Refresh'}
                    </SecondaryButton>
                    <PrimaryButton
                      onClick={() => setHasSubmitted(false)}
                      className="flex-1"
                    >
                      Search Another Email
                    </PrimaryButton>
                  </div>
                </>
              )}
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default function OrdersPage(): JSX.Element {
  return (
    <Layout title="My Orders">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <OrdersClient />}
      </BrowserOnly>
    </Layout>
  );
}