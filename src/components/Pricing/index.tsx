import { useEffect, useState } from "react";
import { initializePaddle } from "@paddle/paddle-js";
import { usePaddlePrices } from "@site/src/hooks/usePaddlePrices";
import { PriceCards } from "@site/src/components/Pricing/PriceCards";
import { EnterpriseCard } from "@site/src/components/Pricing/EnterpriseCard";
import { PricingTier, EnterpriseTier } from "@site/src/constants/pricing-tier";
import { PriceTitle } from "@site/src/components/Pricing/PriceTitle";
import { PriceAmount } from "@site/src/components/Pricing/PriceAmount";
import { FeaturesList } from "@site/src/components/Pricing/FeaturesList";
import { PricingButton } from "@site/src/components/Pricing/PriceButton";
import type { PaddleInstance, PricingTierItem, PaddleCheckoutItem } from "../../types";

interface PricingCardProps {
  tier: PricingTierItem;
  paddlePrice: string | null;
  loading: boolean;
  paddle?: PaddleInstance;
}

function PricingCard({ tier, paddlePrice, loading }: PricingCardProps): JSX.Element {
  return (
    <div
      className={`flex flex-col min-h-80 w-full md:max-w-md lg:flex-1 rounded-2xl border-2 border-gray-300 bg-white p-10 transition-all duration-200 dark:border-gray-600 dark:bg-gray-900 ${
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

interface PricingProps {
  country?: PaddleCheckoutItem[];
}

export function Pricing({ country }: PricingProps): JSX.Element {
  console.log("Rendering Pricing component", country);
  const [paddle, setPaddle] = useState<PaddleInstance | undefined>(undefined);
  const { prices, loading } = usePaddlePrices(paddle, country || []);

  useEffect(() => {
    if (process.env.PADDLE_CLIENT_TOKEN && process.env.PADDLE_ENV) {
      initializePaddle({
        token: process.env.PADDLE_CLIENT_TOKEN,
        environment: process.env.PADDLE_ENV,
      }).then((paddle) => {
        if (paddle) {
          setPaddle(paddle as unknown as PaddleInstance);
          console.log("Paddle initialized");
        }
      });
    }
  }, []);

  return (
    <main className="flex flex-col items-center px-4 py-8 gap-10">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {PricingTier.map((tier) => {
            const paddlePrice = tier.priceId && prices[tier.priceId]
              ? prices[tier.priceId].replace(/\.00$/, "")
              : null;
            return (
              <div
                className="flex flex-col min-h-80 w-full md:max-w-md lg:flex-1"
                key={tier.name}
              >
                <PricingCard
                  tier={tier}
                  paddlePrice={paddlePrice}
                  loading={loading}
                  paddle={paddle}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4">
        <EnterpriseCard enterprise={EnterpriseTier} />
      </div>
    </main>
  );
}