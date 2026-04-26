import type { PricingTierItem } from "@site/src/types";

interface PriceTitleProps {
  tier: PricingTierItem;
}

export function PriceTitle({ tier }: PriceTitleProps): JSX.Element {
  return (
    <div className="text-4xl mb-3 mt-2 font-medium text-[var(--color-base-content)]">
      {tier.icon} {tier.name}
    </div>
  );
}
