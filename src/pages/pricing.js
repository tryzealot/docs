import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import { useEffect, useState, useMemo } from "react";
import { usePaddle, usePaddlePrices } from "@site/src/hooks/usePaddlePrices";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { PricingTier, EnterpriseTier } from "@site/src/constants/pricing-tier";

function PricingCard({ tier, paddlePrice, loading, paddle }) {
  return (
    <div
      className={`w-full flex flex-col items-center min-h-full p-10 rounded-2xl border-2 border-gray-300 bg-white p-10 transition-all duration-200 dark:border-gray-600 dark:bg-gray-900 ${
        tier.highlight
          ? "border-yellow-500 shadow-lg shadow-yellow-500/10 dark:shadow-gray-900/20"
          : ""
      } hover:border-yellow-500 hover:shadow-[0_0_0_3px_rgba(1,1,100,0.18),0_4px_24px_0_rgba(27,28,95,0.1)] dark:hover:border-yellow-400 dark:hover:shadow-[0_0_0_3px_rgba(4,5,107,0.28),0_4px_24px_0_rgba(2,6,20,0.18)]`}
      tabIndex={0}
      role="region"
      aria-label={tier.name + " plan"}
    >
      {tier.mostPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-4 py-1 text-sm font-semibold text-white dark:from-yellow-400 dark:to-pink-500 dark:text-gray-900">
          Most Popular
        </div>
      )}
      <div className="mb-3 mt-2 text-4xl">{tier.icon}</div>
      <div className="text-xl font-medium text-gray-900 dark:text-yellow-300">
        {tier.name}
      </div>
      <div className="mb-2 flex items-baseline gap-1">
        {loading ? (
          <div className="h-12 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        ) : (
          <>
            <span className="text-4xl font-bold text-gray-900 dark:text-yellow-200">
              {paddlePrice || tier.price}
            </span>
            {tier.priceSuffix && (
              <span className="text-lg text-gray-600 dark:text-gray-400">
                {tier.priceSuffix}
              </span>
            )}
          </>
        )}
      </div>
      {tier.save && (
        <div className="mb-2 rounded-lg bg-green-100 px-3 py-1 text-base font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
          {tier.save}
        </div>
      )}
      <div className="mb-7 text-lg text-gray-600 dark:text-gray-400">
        {tier.trial}
      </div>
      <div className="flex flex-1 flex-col justify-end w-full">
        <ul className="mb-7 ml-3 list-disc space-y-1 text-left text-lg leading-relaxed text-gray-700 dark:text-gray-400">
          {tier.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      <Link
        id={tier.button.id}
        className="hover:cursor-pointer w-full rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-lg font-medium text-gray-900 transition-all duration-200 hover:no-underline hover:border-yellow-500 hover:bg-yellow-500 hover:text-white dark:border-gray-600 dark:bg-gray-800 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-gray-900"
        to={
          tier.button.type === "link"
            ? tier.button.href
            : `/checkout?id=${tier.priceId}`
        }
      >
        {tier.button.text}
      </Link>
      {/* {tier.button.type === "link" ? (
        <Link
          id={tier.button.id}
          className="hover:cursor-pointer w-full rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-lg font-medium text-gray-900 transition-all duration-200 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white dark:border-gray-600 dark:bg-gray-800 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-gray-900"
          to={tier.button.href}
        >
          {tier.button.text}
        </Link>
      ) : (
        
        <button
          id={tier.button.id}
          className="hover:cursor-pointer w-full rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-lg font-medium text-gray-900 transition-all duration-200 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white dark:border-gray-600 dark:bg-gray-800 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-gray-900"
          onClick={() => {
            if (tier.button.type === "paddle" && paddle) {
              paddle.Checkout.open({
                items: [{ priceId: tier.priceId, quantity: 1 }],
              });
              return;
            }
            alert(
              translate({
                id: "pricing.tier.pro.payment_integration_coming_soon",
                message: "Payment integration coming soon!",
              })
            );
          }}
        >
          {tier.button.text}
        </button>
      )} */}
    </div>
  );
}

function EnterpriseCard({ enterprise }) {
  return (
    <div className="w-full rounded-2xl border-2 border-gray-700 bg-gray-800 p-10 flex flex-col items-center transition-all duration-200 hover:border-yellow-500 hover:shadow-[0_0_0_3px_rgba(4,5,107,0.28),0_4px_24px_0_rgba(2,6,20,0.18)] dark:border-gray-700 dark:bg-gray-900 dark:hover:border-yellow-400">
      <div className="mb-3 text-4xl">🏢</div>
      <div className="text-xl font-medium text-white">{enterprise.title}</div>
      <div className="mb-7 mt-5 text-center text-lg leading-relaxed text-gray-300">
        {enterprise.description}
      </div>
      <button
        className="w-full rounded-lg border-2 border-gray-600 bg-gray-700 px-6 py-3 text-lg font-medium text-white transition-all duration-200 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-gray-900"
        onClick={() => {
          window.location.href = enterprise.button.href;
        }}
      >
        {enterprise.button.text}
      </button>
    </div>
  );
}

export default function PricingPage() {
  const [country, setCountry] = useState("US");

  // Create items array for Paddle from plans - memoized to prevent infinite requests
  const items = useMemo(
    () =>
      PricingTier.filter((tier) => tier.priceId).map((tier) => ({
        priceId: tier.priceId,
        quantity: 1,
      })),
    []
  );

  const { paddle } = usePaddle();
  const { prices, loading } = usePaddlePrices(paddle, country, items);
  const { i18n } = useDocusaurusContext();

  return (
    <Layout title="Pricing" description="Zealot pricing plans">
      <main className="flex flex-col items-center px-4 py-8 gap-10">
        {/* Tiers container aligned with enterprise card width */}
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {PricingTier.map((tier) => {
              const paddlePrice = prices[tier.priceId]
                ? prices[tier.priceId].replace(/\.00$/, "")
                : null;
              return (
                <div
                  className="flex flex-col min-h-80 w-full md:max-w-md lg:flex-1"
                  key={tier.name}
                >
                  <PricingCard
                    tier={tier}
                    paddlePrice={paddlePrice}
                    loading={loading}
                    paddle={paddle}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* Enterprise card wrapped in same width container */}
        <div className="w-full max-w-6xl mx-auto px-4">
          <EnterpriseCard enterprise={EnterpriseTier} />
        </div>
      </main>
    </Layout>
  );
}
