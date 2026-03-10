import { useEffect, useState } from "react";
import { initializePaddle } from "@paddle/paddle-js";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { getCountryCodeFromLocale } from "@site/src/lib/utils";
import type {
  PaddleCheckoutOptions,
  PaddleInstance,
  PaddlePricePreviewResponse,
  PaddleCheckoutItem,
} from "@site/src/types";

function getPriceAmounts(prices: PaddlePricePreviewResponse): Record<string, string> {
  if (!prices?.data?.details?.lineItems) {
    console.error("Invalid prices structure:", prices);
    return {};
  }
  return prices.data.details.lineItems.reduce((acc, item) => {
    acc[item.price.id] = item.formattedTotals.total;
    return acc;
  }, {} as Record<string, string>);
}

export function usePaddleClient(
  options: PaddleCheckoutOptions
): { paddle: PaddleInstance | undefined } {
  const [paddle, setPaddle] = useState<PaddleInstance | undefined>(undefined);

  useEffect(() => {
    const token = process.env.PADDLE_CLIENT_TOKEN;
    const env = process.env.PADDLE_ENV;
    if (token && env) {
      const defaults = {
        token: token,
        environment: env,
        ...options,
      };

      initializePaddle(defaults).then((paddle) => {
        if (paddle) {
          setPaddle(paddle as unknown as PaddleInstance);
        }
      });
    }
  }, [options]);

  return { paddle };
}

export function usePaddlePrices(
  paddle: PaddleInstance | undefined,
  items: PaddleCheckoutItem[]
): { prices: Record<string, string>; loading: boolean } {
  const [prices, setPrices] = useState<Record<string, string>>({});
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

    const paddlePricePreviewRequest = {
      items,
      country,
    };

    setLoading(true);

    paddle
      .PricePreview(paddlePricePreviewRequest)
      .then((pricesResponse) => {
        const amounts = getPriceAmounts(pricesResponse as PaddlePricePreviewResponse);
        setPrices(amounts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Paddle PricePreview error:", error);
        setPrices({});
        setLoading(false);
      });
  }, [country, paddle, items]);

  return { prices, loading };
}