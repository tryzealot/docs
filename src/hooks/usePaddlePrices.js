import { useEffect, useState } from "react";
import { initializePaddle } from "@paddle/paddle-js";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { getCountryCodeFromLocale } from "@site/src/lib/utils";

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

export function usePaddleClient(options) {
  const [paddle, setPaddle] = useState(undefined);

  useEffect(() => {
    const token = process.env.PADDLE_CLIENT_TOKEN;
    const env = process.env.PADDLE_ENV;
    if (token && process.env.PADDLE_ENV) {
      const defaults = {
        token: token,
        environment: env,
        ...options,
      };

      initializePaddle(defaults).then((paddle) => {
        if (paddle) {
          setPaddle(paddle);
        }
      });
    }
  }, [process.env.PADDLE_CLIENT_TOKEN, process.env.PADDLE_ENV]);

  return { paddle };
}

export function usePaddlePrices(paddle, items) {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("US");
  const { i18n } = useDocusaurusContext();

  useEffect(() => {
    setCountry(getCountryCodeFromLocale(i18n.currentLocale));
  }, [i18n.currentLocale]);

  useEffect(() => {
    if (!paddle || !items || items.length === 0) {
      setLoading(false);
      return;
    }

    // Build the request payload
    const paddlePricePreviewRequest = {
      items,
      country,
    };

    setLoading(true);

    paddle
      .PricePreview(paddlePricePreviewRequest)
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
