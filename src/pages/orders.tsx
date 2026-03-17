import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import { useGateway } from "@site/src/hooks/useGateway";
import { useCustomerOrders } from "@site/src/lib/query";
import { decrypt, encrypt } from "@site/src/lib/crypto";
import {
  OutlineButton,
  PrimaryButton,
  SecondaryButton,
} from "@site/src/components/ui/Button";
import Translate, { translate } from "@docusaurus/Translate";
import type { Order } from "@site/src/types";

function OrdersClient(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();

  const urlParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  const [userEmail, setUserEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [fromCheckout, setFromCheckout] = useState(false);
  const [queryError, setQueryError] = useState<string | null>(null);

  // 从 URL query 参数读取预填充的 email（从 checkout 页面跳转过来）
  useEffect(() => {
    const emailParam = urlParams?.get("email");
    if (emailParam) {
      const secretKey = process.env.ZEALOT_ENCRYPTION_KEY;
      if (secretKey) {
        decrypt(emailParam, secretKey)
          .then((decryptedEmail) => {
            setUserEmail(decryptedEmail);
            setSubmittedEmail(decryptedEmail);
            setHasSubmitted(true);
            setFromCheckout(true);
          })
          .catch(() => {
            // 解密失败，显示错误提示
            setQueryError(
              translate({
                id: "orders.queryError.invalid",
                message:
                  "Invalid email parameter. Please enter your email to view orders.",
              }),
            );
          });
      } else {
        // 没有加密密钥，无法解密
        setQueryError(
          translate({
            id: "orders.queryError.config",
            message:
              "Configuration error. Please enter your email to view orders.",
          }),
        );
      }
    }
  }, []);

  const basePath = i18n.currentLocale !== "en" ? `/${i18n.currentLocale}` : "";

  const { gateway } = useGateway();
  const query = useCustomerOrders(gateway, submittedEmail, hasSubmitted);

  // 当成功获取到订单数据后，更新 URL 添加 email 参数
  useEffect(() => {
    if (
      query.data &&
      query.data.orders.length > 0 &&
      submittedEmail &&
      !fromCheckout
    ) {
      const secretKey = process.env.ZEALOT_ENCRYPTION_KEY;
      if (secretKey) {
        encrypt(submittedEmail, secretKey).then((encryptedEmail) => {
          const newUrl = `${window.location.pathname}?email=${encodeURIComponent(encryptedEmail)}`;
          window.history.replaceState({}, "", newUrl);
        });
      }
    }
  }, [query.data, submittedEmail, fromCheckout]);

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
        <form
          onSubmit={handleEmailSubmit}
          className="flex flex-col items-center gap-4 w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-[var(--ifm-font-color-base)]">
            <Translate id="orders.email.title">
              Enter your email to view orders
            </Translate>
          </h1>
          {queryError && (
            <div className="w-full px-4 py-3 bg-[rgba(var(--ifm-color-warning-rgb),0.15)] border border-[var(--ifm-color-warning)] rounded-lg">
              <p className="text-sm text-[var(--ifm-color-warning)]">
                {queryError}
              </p>
            </div>
          )}
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder={translate({
              id: "orders.email.placeholder",
              message: "your@email.com",
            })}
            className="w-full px-5 py-3 text-lg border-2 border-[var(--ifm-color-gray-300)] rounded-lg focus:outline-none focus:border-[var(--ifm-color-primary)] bg-[var(--ifm-background-color)] text-[var(--ifm-font-color-base)] placeholder:text-[var(--ifm-color-gray-600)] transition-colors"
            required
          />
          <PrimaryButton type="submit">
            <Translate id="orders.email.viewOrders">View Orders</Translate>
          </PrimaryButton>
          <OutlineButton type="button" onClick={handleBack}>
            <Translate id="orders.backToPricing">Back to Pricing</Translate>
          </OutlineButton>
        </form>
      ) : (
        <>
          {query.isError ? (
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
              <div className="px-6 py-4 bg-[rgba(var(--ifm-color-danger-rgb),0.15)] border-2 border-[var(--ifm-color-danger)] rounded-lg w-full">
                <p className="text-lg font-medium text-[var(--ifm-color-danger)]">
                  <Translate id="orders.error.loading">
                    Error loading your orders.
                  </Translate>
                </p>
              </div>
              <SecondaryButton onClick={() => setHasSubmitted(false)}>
                <Translate id="orders.error.tryAgain">Try Again</Translate>
              </SecondaryButton>
            </div>
          ) : (
            (query.isLoading || !query.data) && (
              <div className="flex flex-col items-center gap-4 animate-pulse">
                <div className="w-12 h-12 border-4 border-[var(--ifm-color-primary)] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xl font-medium text-[var(--ifm-color-primary)]">
                  <Translate id="orders.loading.text">
                    Loading your orders...
                  </Translate>
                </p>
              </div>
            )
          )}

          {query.data && (
            <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-3xl font-bold text-[var(--ifm-font-color-base)]">
                  <Translate id="orders.yourOrders.title">
                    Your Orders
                  </Translate>
                </h2>
                <span className="text-sm text-[var(--ifm-color-gray-600)]">
                  {submittedEmail}
                </span>
              </div>
              {fromCheckout &&
                query.data.orders &&
                query.data.orders.length > 0 && (
                  <div className="w-full px-6 py-2 border-info border-2 border-[var(--ifm-color-info)] rounded-lg">
                    <p className="p-0 m-0 text-lg font-medium text-[var(--ifm-color-info)]">
                      <Translate id="orders.existingOrder.warning">
                        You already have an order associated with this email.
                      </Translate>
                    </p>
                  </div>
                )}

              {query.data.orders?.length === 0 ? (
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="px-6 py-8 bg-[var(--ifm-background-surface-color)] border-2 border-[var(--ifm-color-gray-300)] rounded-lg w-full text-center">
                    <p className="text-lg text-[var(--ifm-color-gray-600)]">
                      <Translate id="orders.noOrders">
                        No orders found for this email.
                      </Translate>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <OutlineButton onClick={handleBack} className="flex-1">
                      <Translate id="orders.backToPricing">
                        Back to Pricing
                      </Translate>
                    </OutlineButton>
                    <SecondaryButton
                      onClick={() => setHasSubmitted(false)}
                      className="flex-1"
                    >
                      <Translate id="orders.searchAnother">
                        Search Another Email
                      </Translate>
                    </SecondaryButton>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {/* Customer Info */}
                    {query.data.customer && (
                      <div className="px-6 py-5 bg-[var(--ifm-background-color)] border-2 border-[var(--ifm-color-gray-300)] rounded-xl shadow-sm dark:bg-[var(--ifm-background-surface-color)] dark:border-[var(--ifm-color-gray-700)]">
                        <h3 className="text-lg font-bold text-[var(--ifm-font-color-base)] mb-4">
                          <Translate id="orders.customer.title">
                            Customer
                          </Translate>
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.customer.email">
                              Email
                            </Translate>
                          </span>
                          <span className="text-sm font-semibold text-[var(--ifm-font-color-base)]">
                            {query.data.customer.email}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.customer.id">
                              Customer ID
                            </Translate>
                          </span>
                          <span className="text-sm font-mono text-[var(--ifm-color-gray-600)]">
                            {query.data.customer.id}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* License Info */}
                    {query.data.license && (
                      <div className="px-6 py-5 bg-[var(--ifm-background-color)] border-2 border-[var(--ifm-color-gray-300)] rounded-xl shadow-sm dark:bg-[var(--ifm-background-surface-color)] dark:border-[var(--ifm-color-gray-700)]">
                        <h3 className="text-lg font-bold text-[var(--ifm-font-color-base)] mb-4">
                          <Translate id="orders.license.title">
                            License
                          </Translate>
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.license.key">
                              License Key
                            </Translate>
                          </span>
                          <span className="text-sm font-mono font-semibold text-[var(--ifm-color-primary)]">
                            {query.data.license.key}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.license.status">
                              Status
                            </Translate>
                          </span>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              query.data.license.active
                                ? "bg-[rgba(var(--ifm-color-success-rgb),0.15)] text-[var(--ifm-color-success)]"
                                : "bg-[rgba(var(--ifm-color-danger-rgb),0.15)] text-[var(--ifm-color-danger)]"
                            }`}
                          >
                            {query.data.license.active
                              ? translate({
                                  id: "orders.license.status.active",
                                  message: "Active",
                                })
                              : translate({
                                  id: "orders.license.status.inactive",
                                  message: "Inactive",
                                })}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Orders */}
                    {query.data.orders.map((order: Order) => (
                      <div
                        key={order.id}
                        className="px-6 py-5 bg-[var(--ifm-background-color)] border-2 border-[var(--ifm-color-gray-300)] rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-[var(--ifm-background-surface-color)] dark:border-[var(--ifm-color-gray-700)]"
                      >
                        <h3 className="text-lg font-bold text-[var(--ifm-font-color-base)] mb-4">
                          <Translate id="orders.order.title">Order</Translate>
                        </h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.order.id">Order ID</Translate>
                          </span>
                          <span className="text-sm font-semibold text-[var(--ifm-font-color-base)]">
                            {order.id}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.order.amount">
                              Amount
                            </Translate>
                          </span>
                          <span className="text-lg font-bold text-[var(--ifm-color-primary)]">
                            {order.totalAmount.toFixed(2) / 100}{" "}
                            {order.currency}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.order.created">
                              Created
                            </Translate>
                          </span>
                          <span className="text-sm text-[var(--ifm-font-color-base)]">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.order.paidAt">
                              Paid At
                            </Translate>
                          </span>
                          <span className="text-sm text-[var(--ifm-font-color-base)]">
                            {order.paidAt
                              ? new Date(order.paidAt).toLocaleDateString()
                              : "-"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.order.status">
                              Status
                            </Translate>
                          </span>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === "completed"
                                ? "bg-[rgba(var(--ifm-color-success-rgb),0.15)] text-[var(--ifm-color-success)]"
                                : "bg-[rgba(var(--ifm-color-warning-rgb),0.15)] text-[var(--ifm-color-warning)]"
                            }`}
                          >
                            {order.status === "completed"
                              ? translate({
                                  id: "orders.order.status.completed",
                                  message: "Completed",
                                })
                              : translate({
                                  id: "orders.order.status.pending",
                                  message: "Pending",
                                })}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Subscription Info */}
                    {query.data.subscription && (
                      <div className="px-6 py-5 bg-[var(--ifm-background-color)] border-2 border-[var(--ifm-color-gray-300)] rounded-xl shadow-sm dark:bg-[var(--ifm-background-surface-color)]  dark:border-[var(--ifm-color-gray-700)]">
                        <h3 className="text-lg font-bold text-[var(--ifm-font-color-base)] mb-4">
                          <Translate id="orders.subscription.title">
                            Subscription
                          </Translate>
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.subscription.status">
                              Status
                            </Translate>
                          </span>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              query.data.subscription.status === "active"
                                ? "bg-[rgba(var(--ifm-color-success-rgb),0.15)] text-[var(--ifm-color-success)]"
                                : "bg-[var(--ifm-color-gray-300)] text-[var(--ifm-color-gray-600)]"
                            }`}
                          >
                            {query.data.subscription.status
                              .charAt(0)
                              .toUpperCase() +
                              query.data.subscription.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.subscription.activeAt">
                              Active At
                            </Translate>
                          </span>
                          <span className="text-sm text-[var(--ifm-font-color-base)]">
                            {new Date(
                              query.data.subscription.currentPeriodStart,
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                            <Translate id="orders.subscription.expiresAt">
                              Expires At
                            </Translate>
                          </span>
                          <span className="text-sm text-[var(--ifm-font-color-base)]">
                            {new Date(
                              query.data.subscription.currentPeriodEnd,
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        {query.data.subscription.cancelAtPeriodEnd && (
                          <div className="mt-3 px-3 py-2 bg-[rgba(var(--ifm-color-warning-rgb),0.15)] border border-[var(--ifm-color-warning)] rounded-lg">
                            <p className="text-sm text-[var(--ifm-color-warning)]">
                              <Translate id="orders.subscription.cancelWarning">
                                Will cancel at period end
                              </Translate>
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 w-full">
                    <OutlineButton
                      onClick={() => query.refetch()}
                      disabled={query.isFetching}
                      className="flex-1"
                    >
                      {query.isFetching
                        ? translate({
                            id: "orders.refreshing",
                            message: "Refreshing...",
                          })
                        : translate({
                            id: "orders.refresh",
                            message: "Refresh",
                          })}
                    </OutlineButton>
                    <PrimaryButton
                      onClick={() => {
                        setUserEmail("");
                        setHasSubmitted(false);
                      }}
                      className="flex-1"
                    >
                      <Translate id="orders.searchAnother">
                        Search Another Email
                      </Translate>
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

export default function OrdersPage(): ReactNode {
  return (
    <Layout title={translate({ id: "orders.title", message: "My Orders" })}>
      <OrdersClient />
    </Layout>
  );
}
