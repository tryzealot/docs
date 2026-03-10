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
import type { PricingTierItem, PaddleInstance } from "@site/src/types";

interface PriceCardProps {
  tier: PricingTierItem;
  paddlePrice: string | null;
  loading: boolean;
  paddle?: PaddleInstance;
}

function PriceCard({ tier, paddlePrice, loading }: PriceCardProps): JSX.Element {
  return (
    <div
      className={`w-100 max-w-100 flex flex-col items-center min-h-full rounded-2xl border-2 border-[var(--color-base-300)] bg-[var(--color-base-100)] p-10 transition-all duration-200 hover:border-[var(--color-primary)] hover:shadow-[0_0_0_3px_rgba(75,107,251,0.15),0_4px_24px_0_rgba(75,107,251,0.1)] dark:border-[var(--color-base-300)] dark:bg-[var(--color-base-200)] dark:hover:border-[var(--color-primary)] dark:hover:shadow-[0_0_0_3px_rgba(75,107,251,0.25),0_4px_24px_0_rgba(0,0,0,0.3)] ${
        tier.highlight
          ? "border-[var(--color-accent)] shadow-lg shadow-[var(--color-accent)]/10 dark:shadow-[var(--color-accent)]/20"
          : ""
      }`}
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
