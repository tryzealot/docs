import { Skeleton } from "@site/src/components/ui/Skeleton";

export function PriceAmount({ loading, paddlePrice, tier }) {
  console.log("PriceAmount", { loading, paddlePrice, tier });
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

  // return (
  //   <div className="mt-6 flex flex-col px-8">
  //     {loading ? (
  //       <Skeleton className="h-[96px] w-full bg-border" />
  //     ) : (
  //       <>
  //         <div
  //           className={cn(
  //             "text-[80px] leading-[96px] tracking-[-1.6px] font-medium"
  //           )}
  //         >
  //           {priceMap[tier.priceId].replace(/\.00$/, "")}
  //         </div>
  //         <div className={cn("font-medium leading-[12px] text-[12px]")}>
  //           {priceSuffix}
  //         </div>
  //       </>
  //     )}
  //   </div>
  // );
}
