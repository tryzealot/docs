import { PricingTier } from "@site/src/constants/pricing-tier";
import { PriceTitle } from "@site/src/components/Pricing/PriceTitle";
import { PriceAmount } from "@site/src/components/Pricing/PriceAmount";
import { cn } from "@site/src/lib/utils";

export function PriceCards({ loading, priceMap }) {
  return (
    <div className="isolate mx-auto grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {PricingTier.map((tier) => (
        <div
          key={tier.id}
          className={cn(
            "rounded-lg bg-background/70 backdrop-blur-[6px] overflow-hidden"
          )}
        >
          <div className="flex gap-5 flex-col rounded-lg rounded-b-none pricing-card-border">
            {/* {tier.featured && <FeaturedCardGradient />} */}
            <PriceTitle tier={tier} />
            <PriceAmount loading={loading} tier={tier} priceMap={priceMap} />
            {/* <div className={"px-8"}>
              <Separator className={"bg-border"} />
            </div> */}
            <div className={"px-8 text-[16px]"}>{tier.description}</div>
          </div>
          <div className={"px-8 mt-8"}>
            {/* <Button className={"w-full"} variant={"secondary"} asChild={true}>
              <Link href={`/checkout/${tier.priceId}`}>Get started</Link>
            </Button> */}
          </div>
          {/* <FeaturesList tier={tier} /> */}
        </div>
      ))}
    </div>
  );
}
