import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import styles from './pricing.module.css';
import clsx from 'clsx';

const plans = [
  {
    name: translate({ id: 'pricing.plan.free', message: 'Free' }),
    icon: '🚀',
    subtitle: translate({ id: 'pricing.plan.free.subtitle', message: 'Community Edition (Open Source)' }),
    price: translate({ id: 'pricing.plan.free.price', message: '$0' }),
    features: [
      translate({ id: 'pricing.plan.free.unlimited_users', message: 'Unlimited users' }),
      translate({ id: 'pricing.plan.free.unlimited_apps_and_team_members', message: 'Unlimited apps and team members' }),
      translate({ id: 'pricing.plan.free.unlimited_app_version_uploads', message: 'Unlimited app version uploads' }),
      translate({ id: 'pricing.plan.free.unlimited_app_installations', message: 'Unlimited app installations' }),
      translate({ id: 'pricing.plan.free.self_hosted_no_storage_limits', message: 'Self-hosted, no storage limits' }),
      translate({ id: 'pricing.plan.free.community_support', message: 'Community support' }),
      translate({ id: 'pricing.plan.free.open_source_license', message: 'Open source license' }),
    ],
    button: {
      text: translate({ id: 'pricing.plan.free.button', message: 'Get Started' }),
      id: 'github-btn',
      href: 'https://github.com/tryzealot/zealot',
      type: 'link',
    },
    highlight: false,
  },
  {
    name: translate({ id: 'pricing.plan.pro', message: 'Pro' }),
    icon: '⭐',
    subtitle: translate({ id: 'pricing.plan.pro.subtitle', message: 'Professional Edition' }),
    price: translate({ id: 'pricing.plan.pro.price', message: '$499 / year' }),
    priceSuffix: '',
    trial: translate({ id: 'pricing.plan.pro.trial', message: 'with a 14 days trial' }),
    save: translate({ id: 'pricing.plan.pro.save', message: 'Save 40%' }),
    features: [
      translate({ id: 'pricing.plan.pro.all_community_edition_features', message: 'All Community Edition features' }),
      translate({ id: 'pricing.plan.pro.unlimited_organizations', message: 'Unlimited organizations' }),
      translate({ id: 'pricing.plan.pro.detailed_session_logs_and_overviews', message: 'Detailed session logs and overviews' }),
      translate({ id: 'pricing.plan.pro.missing_email_notifications', message: 'Missing email notifications' }),
      translate({ id: 'pricing.plan.pro.more_storage_options', message: 'More storage options' }),
      translate({ id: 'pricing.plan.pro.custom_branding', message: 'Custom branding' }),
      translate({ id: 'pricing.plan.pro.priority_support', message: 'Priority support' }),
    ],
    button: {
      text: translate({ id: 'pricing.plan.pro.button', message: 'Buy Now' }),
      id: 'paddle-buy-btn',
      type: 'paddle',
    },
    highlight: true,
  },
];

const enterprise = {
  title: translate({ id: 'pricing.enterprise.title', message: 'Enterprise' }),
  description: translate({ id: 'pricing.enterprise.desc', message: 'Need a custom solution or service level agreement? Get in touch for a tailored offer for your company or team.' }),
  button: {
    text: translate({ id: 'pricing.enterprise.button', message: 'Get in touch' }),
    href: 'mailto:zealot@ews.im',
  },
};


function PricingCard({ plan }) {
  return (
    <div
      className={clsx(styles.card, plan.highlight && styles.cardHighlight)}
      tabIndex={0}
      role="region"
      aria-label={plan.name + ' plan'}
    >
      {plan.mostPopular && (
        <div className={styles.mostPopular}>Most Popular</div>
      )}
      <div className={styles.icon}>{plan.icon}</div>
      <div className={styles.name}>{plan.name}</div>
      <div className={styles.priceRow}>
        <span className={styles.price}>{plan.price}</span>
        {plan.priceSuffix && <span className={styles.priceSuffix}>{plan.priceSuffix}</span>}
      </div>
      {plan.save && <div className={styles.save}>{plan.save}</div>}
      <div className={styles.trial}>{plan.trial}</div>
      <div className={styles.features}>
        <ul style={{ color: 'var(--ifm-color-emphasis-700, #444)', textAlign: 'left', margin: '1.2rem 0 1.7rem 0', fontSize: '1.05rem', lineHeight: 1.7, width: '100%', paddingLeft: '1.2em' }}>
          {plan.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      <button
        id={plan.button.id}
        className={styles.button}
        onClick={() => {
          // Paddle integration placeholder
          // if type is link, redirect to href
          if (plan.button.type === 'link') {
            window.location.href = plan.button.href;
            return;
          }
          plan.button.id !== 'github-btn' && alert(translate({ id: 'pricing.plan.pro.payment_integration_coming_soon', message: 'Payment integration coming soon!' }));
        }}
      >
        {plan.button.text}
      </button>
    </div>
  );
}

function EnterpriseCard({ enterprise }) {
  return (
    <div className={styles.enterpriseCard}>
      <div className={styles.icon}>🏢</div>
      <div className={styles.name}>{enterprise.title}</div>
      <div style={{ color: 'var(--ifm-color-emphasis-700, #444)', fontSize: '1.05rem', margin: '1.2rem 0 1.7rem 0', textAlign: 'center' }}>{enterprise.description}</div>
      <button
        className={styles.button}
        onClick={() => {
          // Open mailto link
          window.location.href = enterprise.button.href;
        }}
      >
        {enterprise.button.text}
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <Layout title="Pricing" description="Zealot pricing plans">
      <main className={styles.main}>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <div className={styles.enterpriseRow}>
          <EnterpriseCard enterprise={enterprise} />
        </div>
      </main>
    </Layout>
  );
}
