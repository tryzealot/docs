import { cn } from "@site/src/lib/utils";
import { Skeleton } from "@site/src/components/ui/Skeleton";

// interface Props {
//   loading: boolean;
//   tier: Tier;
//   priceMap: Record<string, string>;
//   value: string;
//   priceSuffix: string;
// }

export function PriceAmount({ loading, priceMap, priceSuffix, tier }) {
  return (
    <div className="mt-6 flex flex-col px-8">
      {loading ? (
        <Skeleton className="h-[96px] w-full bg-border" />
      ) : (
        <>
          <div
            className={cn(
              "text-[80px] leading-[96px] tracking-[-1.6px] font-medium"
            )}
          >
            {priceMap[tier.priceId].replace(/\.00$/, "")}
          </div>
          <div className={cn("font-medium leading-[12px] text-[12px]")}>
            {priceSuffix}
          </div>
        </>
      )}
    </div>
  );
}
