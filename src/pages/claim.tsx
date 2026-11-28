import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import Translate, { translate } from "@docusaurus/Translate";
import { useGateway } from "@site/src/hooks/useGateway";
import { GatewayError } from "@site/src/lib/gateway";
import { useCustomerOrders } from "@site/src/lib/query";
import { parseDeliveryTokenEmail } from "@site/src/lib/delivery-token";
import {
  OutlineButton,
  PrimaryButton,
  SecondaryButton,
} from "@site/src/components/ui/Button";
import type { Order } from "@site/src/types";

interface ClaimStatusCardProps {
  title: ReactNode;
  description: ReactNode;
  tone?: "danger" | "neutral";
  onRetry?: () => void;
  onBack: () => void;
}

function ClaimStatusCard({
  title,
  description,
  tone = "danger",
  onRetry,
  onBack,
}: ClaimStatusCardProps): ReactNode {
  const cardClasses =
    tone === "danger"
      ? "bg-[rgba(var(--ifm-color-danger-rgb),0.1)] border-[var(--ifm-color-danger)]"
      : "bg-[var(--ifm-background-surface-color)] border-[var(--ifm-color-gray-300)]";
  const titleClasses =
    tone === "danger"
      ? "text-[var(--ifm-color-danger)]"
      : "text-[var(--ifm-font-color-base)]";
  const descClasses =
    tone === "danger"
      ? "text-[var(--ifm-font-color-base)]"
      : "text-[var(--ifm-color-gray-600)]";

  return (
    <main className="flex flex-col items-center px-4 py-12 gap-6 min-h-screen">
      <div
        className={`flex flex-col items-center gap-4 w-full max-w-lg text-center px-6 py-8 border-2 rounded-xl ${cardClasses}`}
      >
        <h1 className={`m-0 text-2xl font-bold ${titleClasses}`}>{title}</h1>
        <p className={`m-0 text-base ${descClasses}`}>{description}</p>
      </div>
      <div className="flex items-center gap-4">
        {onRetry && (
          <SecondaryButton type="button" onClick={onRetry}>
            <Translate id="claim.error.tryAgain">Try Again</Translate>
          </SecondaryButton>
        )}
        <OutlineButton type="button" onClick={onBack}>
          <Translate id="claim.backToPricing">Back to Pricing</Translate>
        </OutlineButton>
      </div>
    </main>
  );
}

function resolveQueryErrorState(error: Error | null): {
  title: ReactNode;
  description: ReactNode;
  tone: "danger" | "neutral";
  canRetry: boolean;
} {
  const status = error instanceof GatewayError ? error.status : undefined;

  if (status === 403) {
    return {
      title: (
        <Translate id="claim.error.forbidden.title">
          Invalid or Expired Delivery Link
        </Translate>
      ),
      description: (
        <Translate id="claim.error.forbidden.desc">
          This delivery link is invalid, expired, or does not match this
          environment. Delivery links are valid for 30 days.
        </Translate>
      ),
      tone: "danger",
      canRetry: false,
    };
  }

  if (status === 404) {
    return {
      title: (
        <Translate id="claim.error.notFound.title">License Not Found</Translate>
      ),
      description: (
        <Translate id="claim.error.notFound.desc">
          We could not find a license for this email address.
        </Translate>
      ),
      tone: "neutral",
      canRetry: false,
    };
  }

  return {
    title: (
      <Translate id="claim.error.generic.title">
        Unable to Retrieve License
      </Translate>
    ),
    description: (
      <Translate id="claim.error.generic.desc">
        Something went wrong while loading your license. Please try again.
      </Translate>
    ),
    tone: "danger",
    canRetry: true,
  };
}

function renderOrderStatus(status: Order["status"]): {
  badgeClasses: string;
  label: string;
} {
  switch (status) {
    case "completed":
      return {
        badgeClasses:
          "bg-[rgba(var(--ifm-color-success-rgb),0.15)] text-[var(--ifm-color-success)]",
        label: translate({
          id: "claim.order.status.completed",
          message: "Completed",
        }),
      };
    case "failed":
      return {
        badgeClasses:
          "bg-[rgba(var(--ifm-color-danger-rgb),0.15)] text-[var(--ifm-color-danger)]",
        label: translate({
          id: "claim.order.status.failed",
          message: "Failed",
        }),
      };
    default:
      return {
        badgeClasses:
          "bg-[rgba(var(--ifm-color-warning-rgb),0.15)] text-[var(--ifm-color-warning)]",
        label: translate({
          id: "claim.order.status.pending",
          message: "Pending",
        }),
      };
  }
}

function ClaimClient(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const basePath = i18n.currentLocale !== "en" ? `/${i18n.currentLocale}` : "";

  const token = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("token")?.trim() ?? "";
  }, []);

  const tokenEmail = useMemo(
    () => (token ? parseDeliveryTokenEmail(token) : null),
    [token],
  );

  const { gateway, error: gatewayError } = useGateway();
  const query = useCustomerOrders(
    gateway,
    tokenEmail ?? "",
    token,
    Boolean(token && tokenEmail),
  );

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleBackToPricing = () => {
    history.push(`${basePath}/pricing`);
  };

  if (!token) {
    return (
      <ClaimStatusCard
        title={
          <Translate id="claim.error.missingToken.title">
            Missing Delivery Token
          </Translate>
        }
        description={
          <Translate id="claim.error.missingToken.desc">
            This link does not contain a delivery token. Please open the claim
            link directly from your purchase confirmation email.
          </Translate>
        }
        onBack={handleBackToPricing}
      />
    );
  }

  if (!tokenEmail) {
    return (
      <ClaimStatusCard
        title={
          <Translate id="claim.error.invalidToken.title">
            Invalid Delivery Link
          </Translate>
        }
        description={
          <Translate id="claim.error.invalidToken.desc">
            This delivery link is invalid or malformed. Please check the link in
            your purchase confirmation email.
          </Translate>
        }
        onBack={handleBackToPricing}
      />
    );
  }

  if (gatewayError) {
    return (
      <ClaimStatusCard
        title={
          <Translate id="claim.error.generic.title">
            Unable to Retrieve License
          </Translate>
        }
        description={
          <Translate id="claim.error.generic.desc">
            Something went wrong while loading your license. Please try again.
          </Translate>
        }
        onBack={handleBackToPricing}
      />
    );
  }

  if (query.isError) {
    const errorState = resolveQueryErrorState(query.error);
    return (
      <ClaimStatusCard
        title={errorState.title}
        description={errorState.description}
        tone={errorState.tone}
        onRetry={errorState.canRetry ? () => query.refetch() : undefined}
        onBack={handleBackToPricing}
      />
    );
  }

  if (query.isLoading || !query.data) {
    return (
      <main className="flex flex-col items-center px-4 py-12 gap-6 min-h-screen">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="w-12 h-12 border-4 border-[var(--ifm-color-primary)] border-t-transparent rounded-full animate-spin" />
          <p className="text-xl font-medium text-[var(--ifm-color-primary)]">
            <Translate id="claim.loading.text">
              Retrieving your license...
            </Translate>
          </p>
        </div>
      </main>
    );
  }

  const licenseKey = query.data.license?.key;
  if (!licenseKey) {
    return (
      <ClaimStatusCard
        title={
          <Translate id="claim.error.notFound.title">
            License Not Found
          </Translate>
        }
        description={
          <Translate id="claim.error.notFound.desc">
            We could not find a license for this email address.
          </Translate>
        }
        tone="neutral"
        onBack={handleBackToPricing}
      />
    );
  }

  return (
    <main className="flex flex-col items-center px-4 py-8 gap-8 min-h-screen">
      <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-2 w-full">
          <h1 className="m-0 text-3xl font-bold text-[var(--ifm-font-color-base)]">
            <Translate id="claim.license.heading">Your License</Translate>
          </h1>
          <span className="text-sm text-[var(--ifm-color-gray-600)]">
            {query.data.customer?.email || tokenEmail}
          </span>
        </div>

        {/* License Token Card */}
        <div className="w-full px-6 py-6 bg-[var(--ifm-background-color)] border-2 border-[var(--ifm-color-gray-300)] rounded-xl shadow-sm dark:bg-[var(--ifm-background-surface-color)] dark:border-[var(--ifm-color-gray-700)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="m-0 text-lg font-bold text-[var(--ifm-font-color-base)]">
              <Translate id="claim.license.tokenLabel">License Token</Translate>
            </h2>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                query.data.license?.active
                  ? "bg-[rgba(var(--ifm-color-success-rgb),0.15)] text-[var(--ifm-color-success)]"
                  : "bg-[rgba(var(--ifm-color-danger-rgb),0.15)] text-[var(--ifm-color-danger)]"
              }`}
            >
              {query.data.license?.active
                ? translate({
                    id: "claim.license.status.active",
                    message: "Active",
                  })
                : translate({
                    id: "claim.license.status.inactive",
                    message: "Inactive",
                  })}
            </span>
          </div>

          <div className="relative p-4 rounded-lg bg-[var(--ifm-background-surface-color)] dark:bg-[var(--ifm-background-color)] border border-[var(--ifm-color-gray-300)] dark:border-[var(--ifm-color-gray-700)]">
            <code className="block text-sm font-mono break-all pr-20 text-[var(--ifm-color-primary)]">
              {licenseKey}
            </code>
            <button
              type="button"
              onClick={() => copyToClipboard(licenseKey)}
              className="absolute top-3 right-3 px-3 py-1 text-xs font-medium bg-[var(--ifm-color-primary)] text-white rounded hover:opacity-90 transition-opacity cursor-pointer border-0"
            >
              {copied
                ? translate({
                    id: "claim.license.copied",
                    message: "Copied!",
                  })
                : translate({
                    id: "claim.license.copy",
                    message: "Copy",
                  })}
            </button>
          </div>

          <p className="mt-4 mb-0 text-sm text-[var(--ifm-color-gray-600)]">
            <Translate id="claim.license.saveReminder">
              Please save your license token in a safe place.
            </Translate>
          </p>
        </div>

        {/* Customer, Orders & Subscription Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {query.data.customer && (
            <div className="px-6 py-5 bg-[var(--ifm-background-color)] border-2 border-[var(--ifm-color-gray-300)] rounded-xl shadow-sm dark:bg-[var(--ifm-background-surface-color)] dark:border-[var(--ifm-color-gray-700)]">
              <h3 className="text-lg font-bold text-[var(--ifm-font-color-base)] mb-4">
                <Translate id="claim.customer.title">Customer</Translate>
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                  <Translate id="claim.customer.email">Email</Translate>
                </span>
                <span className="text-sm font-semibold text-[var(--ifm-font-color-base)]">
                  {query.data.customer.email}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                  <Translate id="claim.customer.id">Customer ID</Translate>
                </span>
                <span className="text-sm font-mono text-[var(--ifm-color-gray-600)]">
                  {query.data.customer.id}
                </span>
              </div>
            </div>
          )}

          {query.data.subscription && (
            <div className="px-6 py-5 bg-[var(--ifm-background-color)] border-2 border-[var(--ifm-color-gray-300)] rounded-xl shadow-sm dark:bg-[var(--ifm-background-surface-color)] dark:border-[var(--ifm-color-gray-700)]">
              <h3 className="text-lg font-bold text-[var(--ifm-font-color-base)] mb-4">
                <Translate id="claim.subscription.title">
                  Subscription
                </Translate>
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                  <Translate id="claim.subscription.status">Status</Translate>
                </span>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    query.data.subscription.status === "active"
                      ? "bg-[rgba(var(--ifm-color-success-rgb),0.15)] text-[var(--ifm-color-success)]"
                      : "bg-[var(--ifm-color-gray-300)] text-[var(--ifm-color-gray-600)]"
                  }`}
                >
                  {query.data.subscription.status.charAt(0).toUpperCase() +
                    query.data.subscription.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                  <Translate id="claim.subscription.activeAt">
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
                  <Translate id="claim.subscription.expiresAt">
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
                  <p className="m-0 text-sm text-[var(--ifm-color-warning)]">
                    <Translate id="claim.subscription.cancelWarning">
                      Will cancel at period end
                    </Translate>
                  </p>
                </div>
              )}
            </div>
          )}

          {query.data.orders.map((order: Order) => {
            const orderStatus = renderOrderStatus(order.status);
            return (
              <div
                key={order.id}
                className="px-6 py-5 bg-[var(--ifm-background-color)] border-2 border-[var(--ifm-color-gray-300)] rounded-xl shadow-sm dark:bg-[var(--ifm-background-surface-color)] dark:border-[var(--ifm-color-gray-700)]"
              >
                <h3 className="text-lg font-bold text-[var(--ifm-font-color-base)] mb-4">
                  <Translate id="claim.order.title">Order</Translate>
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                    <Translate id="claim.order.id">Order ID</Translate>
                  </span>
                  <span className="text-sm font-semibold text-[var(--ifm-font-color-base)]">
                    {order.id}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                    <Translate id="claim.order.amount">Amount</Translate>
                  </span>
                  <span className="text-lg font-bold text-[var(--ifm-color-primary)]">
                    {(order.totalAmount / 100).toFixed(2)} {order.currency}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                    <Translate id="claim.order.created">Created</Translate>
                  </span>
                  <span className="text-sm text-[var(--ifm-font-color-base)]">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                    <Translate id="claim.order.paidAt">Paid At</Translate>
                  </span>
                  <span className="text-sm text-[var(--ifm-font-color-base)]">
                    {order.paidAt
                      ? new Date(order.paidAt).toLocaleDateString()
                      : "-"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--ifm-color-gray-600)]">
                    <Translate id="claim.order.status">Status</Translate>
                  </span>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${orderStatus.badgeClasses}`}
                  >
                    {orderStatus.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 w-full">
          <OutlineButton
            type="button"
            onClick={() => query.refetch()}
            disabled={query.isFetching}
            className="flex-1"
          >
            {query.isFetching
              ? translate({
                  id: "claim.refreshing",
                  message: "Refreshing...",
                })
              : translate({
                  id: "claim.refresh",
                  message: "Refresh",
                })}
          </OutlineButton>
          <PrimaryButton
            type="button"
            onClick={() => history.push(`${basePath}/`)}
            className="flex-1"
          >
            <Translate id="claim.returnHome">Return Home</Translate>
          </PrimaryButton>
        </div>
      </div>
    </main>
  );
}

export default function ClaimPage(): ReactNode {
  return (
    <Layout
      title={translate({
        id: "claim.title",
        message: "Claim Your License",
      })}
    >
      <BrowserOnly
        fallback={
          <main className="flex flex-col items-center px-4 py-12 min-h-screen">
            <p className="text-lg text-[var(--ifm-color-gray-600)]">
              {translate({
                id: "claim.loading",
                message: "Loading...",
              })}
            </p>
          </main>
        }
      >
        {() => <ClaimClient />}
      </BrowserOnly>
    </Layout>
  );
}
