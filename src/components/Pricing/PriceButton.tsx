import Link from "@docusaurus/Link";
import type { PricingTierItem } from "../../types";

interface PricingButtonProps {
  tier: PricingTierItem;
}

export function PricingButton({ tier }: PricingButtonProps): JSX.Element {
  return (
    <Link
      id={tier.button.id}
      className="hover:cursor-pointer w-full rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-lg font-medium text-gray-900 transition-all duration-200 hover:no-underline hover:border-yellow-500 hover:bg-yellow-500 hover:text-white dark:border-gray-600 dark:bg-gray-800 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-gray-900"
      to={
        tier.button.type === "link"
          ? tier.button.href
          : `/checkout/?id=${tier.priceId}`
      }
    >
      {tier.button.text}
    </Link>
  );
}