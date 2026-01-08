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
    <div className="mx-auto max-w-7xl relative px-[32px] flex flex-col items-center justify-between">
      <PriceCards loading={loading} priceMap={prices} />
    </div>
  );
}
