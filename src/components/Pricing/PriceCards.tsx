import { useMemo } from "react";
import {
  usePaddleClient,
  usePaddlePrices,
} from "@site/src/hooks/usePaddlePrices";
import { PricingTier } from "@site/src/constants/pricing-tier";
import { PriceTitle } from "@site/src/components/Pricing/PriceTitle";
import { PriceAmount } from "@site/src/components/Pricing/PriceAmount";
import { FeaturesList } from "@site/src/components/Pricing/FeaturesList";
import { PricingButton } from "@site/src/components/Pricing/PriceButton";
import type { PricingTierItem, PaddleInstance } from "../../types";

interface PriceCardProps {
  tier: PricingTierItem;
  paddlePrice: string | null;
  loading: boolean;
  paddle?: PaddleInstance;
}

function PriceCard({ tier, paddlePrice, loading }: PriceCardProps): JSX.Element {
  return (
    <div
      className={`w-100 max-w-100 flex flex-col items-center min-h-full rounded-2xl border-2 border-gray-300 bg-white p-10 transition-all duration-200 dark:border-gray-600 dark:bg-gray-900 ${
        tier.highlight
          ? "border-yellow-500 shadow-lg shadow-yellow-500/10 dark:shadow-gray-900/20"
          : ""
      } hover:border-yellow-500 hover:shadow-[0_0_0_3px_rgba(1,1,100,0.18),0_4px_24px_0_rgba(27,28,95,0.1)] dark:hover:border-yellow-400 dark:hover:shadow-[0_0_0_3px_rgba(4,5,107,0.28),0_4px_24px_0_rgba(2,6,20,0.18)]`}
    >
      <PriceTitle tier={tier} />
      <PriceAmount loading={loading} tier={tier} paddlePrice={paddlePrice} />
      <FeaturesList features={tier.features} />
      <PricingButton tier={tier} />
    </div>
  );
}

export function PriceCards(): JSX.Element {
  const items = useMemo(
    () =>
      PricingTier.filter((tier) => tier.priceId).map((tier) => ({
        priceId: tier.priceId!,
        quantity: 1,
      })),
    []
  );

  const { paddle } = usePaddleClient({} as Parameters<typeof usePaddleClient>[0]);
  const { prices, loading } = usePaddlePrices(paddle, items);

  return (
    <div className="flex flex-row justify-between gap-8">
      {PricingTier.map((tier) => {
        const paddlePrice = tier.priceId && prices[tier.priceId]
          ? prices[tier.priceId].replace(/\.00$/, "")
          : null;
        return (
          <PriceCard
            key={tier.key}
            tier={tier}
            paddlePrice={paddlePrice}
            loading={loading}
            paddle={paddle}
          />
        );
      })}
    </div>
  );
}