import { Skeleton } from "@site/src/components/ui/Skeleton";
import type { PricingTierItem } from "../../types";

interface PriceAmountProps {
  loading: boolean;
  paddlePrice: string | null;
  tier: PricingTierItem;
}

export function PriceAmount({ loading, paddlePrice, tier }: PriceAmountProps): JSX.Element {
  return (
    <>
      <div className="mb-2 flex items-baseline gap-1">
        {loading ? (
          <Skeleton className="h-10 w-50" />
        ) : (
          <span className="text-4xl font-bold text-gray-900 dark:text-yellow-200">
            {paddlePrice || tier.price}{" "}
            {paddlePrice && tier.frequency && ` / ${tier.frequency}`}
          </span>
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
    </>
  );
}