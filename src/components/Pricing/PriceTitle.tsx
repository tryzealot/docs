import type { PricingTierItem } from "../../types";

interface PriceTitleProps {
  tier: PricingTierItem;
}

export function PriceTitle({ tier }: PriceTitleProps): JSX.Element {
  return (
    <div className="text-4xl mb-3 mt-2 font-medium item- text-gray-900 dark:text-yellow-300">
      {tier.icon} {tier.name}
    </div>
  );
}