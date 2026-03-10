import { useState } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import { useGateway } from "@site/src/hooks/useGateway";
import { useCustomerOrders } from "@site/src/lib/query";

function OrdersClient() {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();

  const [userEmail, setUserEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const basePath = i18n.currentLocale !== "en" ? `/${i18n.currentLocale}` : "";

  const { gateway } = useGateway();
  const query = useCustomerOrders(gateway, submittedEmail, hasSubmitted);

  const handleEmailSubmit = (e) => {
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
          <button
            type="submit"
            className="hover:cursor-pointer w-full px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[--ifm-color-primary] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            style={{
              background: `linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)`
            }}
          >
            View Orders
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="hover:cursor-pointer w-full px-6 py-3 text-lg font-semibold text-[--ifm-color-primary] bg-white border-2 border-[--ifm-color-primary] rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Back to Pricing
          </button>
        </form>
      ) : (
        <>
          {query.isError ? (
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
              <div className="px-6 py-4 bg-red-50 border-2 border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-800 w-full">
                <p className="text-lg font-medium text-red-700 dark:text-red-400">Error loading your orders.</p>
              </div>
              <button
                onClick={() => setHasSubmitted(false)}
                className="hover:cursor-pointer w-full px-6 py-3 text-lg font-semibold text-[--ifm-color-primary] bg-white border-2 border-[--ifm-color-primary] rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Try Again
              </button>
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

              {query.data.orders?.length === 0 ? (
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="px-6 py-8 bg-gray-50 border-2 border-gray-200 rounded-lg dark:bg-gray-800/50 dark:border-gray-700 w-full text-center">
                    <p className="text-lg text-gray-600 dark:text-gray-400">No orders found for this email.</p>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <button
                      onClick={() => setHasSubmitted(false)}
                      className="hover:cursor-pointer flex-1 px-6 py-3 text-lg font-semibold text-[--ifm-color-primary] bg-white border-2 border-[--ifm-color-primary] rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      Search Another Email
                    </button>
                    <button
                      onClick={handleBack}
                      className="hover:cursor-pointer flex-1 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[--ifm-color-primary] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                      style={{
                        background: `linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)`
                      }}
                    >
                      Back to Pricing
                    </button>
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
                    {query.data.orders.map((order) => (
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
                    <button
                      onClick={() => query.refetch()}
                      disabled={query.isFetching}
                      className="hover:cursor-pointer flex-1 px-6 py-3 text-lg font-semibold text-[--ifm-color-primary] bg-white border-2 border-[--ifm-color-primary] rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      {query.isFetching ? 'Refreshing...' : 'Refresh'}
                    </button>
                    <button
                      onClick={() => setHasSubmitted(false)}
                      className="hover:cursor-pointer flex-1 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[--ifm-color-primary] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                      style={{
                        background: `linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)`
                      }}
                    >
                      Search Another Email
                    </button>
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

export default function OrdersPage() {
  return (
    <Layout title="My Orders">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <OrdersClient />}
      </BrowserOnly>
    </Layout>
  );
}
