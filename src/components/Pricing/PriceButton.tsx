import Link from "@docusaurus/Link";
import type { PricingTierItem } from "@site/src/types";

interface PricingButtonProps {
  tier: PricingTierItem;
}

export function PricingButton({ tier }: PricingButtonProps): JSX.Element {
  return (
    <Link
      id={tier.button.id}
      className="hover:cursor-pointer w-full rounded-lg border-2 border-transparent bg-[var(--color-primary)] px-6 py-3 text-lg font-semibold text-[var(--color-primary-content)] transition-all duration-200 hover:no-underline hover:opacity-90 hover:shadow-xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 dark:focus:ring-offset-[var(--color-base-100)] shadow-lg"
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
