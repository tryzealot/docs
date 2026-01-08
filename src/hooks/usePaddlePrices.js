import { useEffect, useState } from "react";
import { initializePaddle } from "@paddle/paddle-js";

function getPriceAmounts(prices) {
  if (!prices?.data?.details?.lineItems) {
    console.error("Invalid prices structure:", prices);
    return {};
  }
  return prices.data.details.lineItems.reduce((acc, item) => {
    acc[item.price.id] = item.formattedTotals.total;
    return acc;
  }, {});
}

export function usePaddle(options) {
  const [paddle, setPaddle] = useState(undefined);

  useEffect(() => {
    if (process.env.PADDLE_CLIENT_TOKEN && process.env.PADDLE_ENV) {
      const a = {
        token: process.env.PADDLE_CLIENT_TOKEN,
        environment: process.env.PADDLE_ENV,
        ...options,
      };

      console.log("Initializing Paddle with options:", a);
      initializePaddle(a).then((paddle) => {
        if (paddle) {
          setPaddle(paddle);
        }
      });
    }
  }, []);

  return { paddle };
}

export function usePaddlePrices(paddle, country, items) {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Don't fetch if paddle is not ready or no items
    if (!paddle || !items || items.length === 0) {
      setLoading(false);
      return;
    }

    // Build the request payload
    const paddlePricePreviewRequest = {
      items: items,
      ...(country &&
        country !== "OTHERS" && { address: { countryCode: country } }),
    };

    setLoading(true);

    // Make the request
    paddle
      ?.PricePreview(paddlePricePreviewRequest)
      .then((pricesResponse) => {
        const amounts = getPriceAmounts(pricesResponse);
        setPrices(amounts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Paddle PricePreview error:", error);
        // Set empty prices on error but don't loop
        setPrices({});
        setLoading(false);
      });
  }, [country, paddle, items]);

  return { prices, loading };
}
