// import { Tier } from "@site/src/constants/pricing-tier";
import { cn } from "@site/src/lib/utils";

export function PriceTitle({ tier }) {
  const { name, featured, icon } = tier;
  return (
    <div
      className={cn("flex justify-between items-center px-8 pt-8", {
        "featured-price-title": featured,
      })}
    >
      <div className={"flex items-center gap-2"}>
        <div
          className={
            "text-[20px] size-10 justify-center align-center rounded-full bg-amber-400"
          }
        >
          {icon}
        </div>
        <p className={"text-[20px] font-semibold"}>{name}</p>
      </div>
      {featured && (
        <div
          className={
            "flex items-center px-3 py-1 rounded-xs border border-secondary-foreground/10 text-[14px] h-[29px] leading-[21px] featured-card-badge"
          }
        >
          Most popular
        </div>
      )}
    </div>
  );
}
