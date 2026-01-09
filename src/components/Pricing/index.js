import { useEffect, useState } from "react";
import { initializePaddle } from "@paddle/paddle-js";
import { usePaddlePrices } from "@site/src/hooks/usePaddlePrices";
import { PriceCards } from "@site/src/components/Pricing/PriceCards";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Insipred by https://github.com/PaddleHQ/paddle-nextjs-starter-kit

export function Pricing({ country }) {
  console.log("Rendering Pricing component", country);
  const [paddle, setPaddle] = useState(undefined);
  const { prices, loading } = usePaddlePrices(paddle, country);

  useEffect(() => {
    if (process.env.PADDLE_CLIENT_TOKEN && process.env.PADDLE_ENV) {
      initializePaddle({
        token: process.env.PADDLE_CLIENT_TOKEN,
        environment: process.env.PADDLE_ENV,
      }).then((paddle) => {
        if (paddle) {
          setPaddle(paddle);
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
            const paddlePrice = prices[tier.priceId]
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
