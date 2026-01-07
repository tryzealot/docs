import { useEffect, useState } from "react";
import { PricingTier } from "@site/src/constants/pricing-tier";

function getLineItems() {
  const priceId = PricingTier.map((tier) => tier.priceId);
  return priceId.flat().map((priceId) => ({ priceId, quantity: 1 }));
}

function getPriceAmounts(prices) {
  return prices.data.details.lineItems.reduce((acc, item) => {
    acc[item.price.id] = item.formattedTotals.total;
    return acc;
  }, {});
}

export function usePaddlePrices(paddle, country) {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const paddlePricePreviewRequest = {
      items: getLineItems(),
      ...(country !== "OTHERS" && { address: { countryCode: country } }),
    };

    setLoading(true);

    paddle?.PricePreview(paddlePricePreviewRequest).then((prices) => {
      setPrices((prevState) => ({ ...prevState, ...getPriceAmounts(prices) }));
      setLoading(false);
    });
  }, [country, paddle]);
  return { prices, loading };
}
