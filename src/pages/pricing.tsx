import React from 'react';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import { EnterpriseTier } from '@site/src/constants/pricing-tier';
import { EnterpriseCard } from '@site/src/components/Pricing/EnterpriseCard';
import { PriceCards } from '@site/src/components/Pricing/PriceCards';

export default function PricingPage(): JSX.Element {
  return (
    <Layout
      title={translate({
        id: 'pricing.seo.title',
        message: 'Pricing',
      })}
      description={translate({
        id: 'pricing.seo.description',
        message:
          'Affordable pricing plans for beta app distribution on Android, iOS, macOS, Windows, and Linux.',
      })}
    >
      <main className="flex flex-col items-center p-10 gap-10">
        <PriceCards />
        <EnterpriseCard enterprise={EnterpriseTier} />
      </main>
    </Layout>
  );
}
