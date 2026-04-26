import { Skeleton } from "@site/src/components/ui/Skeleton";
import type { PricingTierItem } from "@site/src/types";

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
          <span className="text-4xl font-bold text-[var(--color-primary)]">
            {paddlePrice || tier.price}{" "}
            {paddlePrice && tier.frequency && ` / ${tier.frequency}`}
          </span>
        )}
      </div>
      {tier.save && (
        <div className="mb-2 rounded-lg bg-[var(--semantic-success-bg)] px-3 py-1 text-base font-medium text-[var(--color-success)]">
          {tier.save}
        </div>
      )}
      <div className="mb-7 text-lg text-[var(--semantic-text-muted)]">
        {tier.trial}
      </div>
    </>
  );
}
