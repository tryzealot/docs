import { translate } from "@docusaurus/Translate";

// export interface Tier {
//   name: string;
//   id: 'starter' | 'pro' | 'advanced';
//   icon: string;
//   description: string;
//   features: string[];
//   featured: boolean;
//   priceId: Record<string, string>;
// }

export const PricingTier = [
  {
    name: translate({ id: "pricing.plan.free", message: "Free" }),
    icon: "🚀",
    subtitle: translate({
      id: "pricing.plan.free.subtitle",
      message: "Community Edition (Open Source)",
    }),
    price: translate({ id: "pricing.plan.free.price", message: "$0" }),
    priceId: "pri_01kecm0y2j5c0e3hak064t62mx",
    features: [
      translate({
        id: "pricing.plan.free.unlimited_users",
        message: "Unlimited users",
      }),
      translate({
        id: "pricing.plan.free.unlimited_apps_and_team_members",
        message: "Unlimited apps and team members",
      }),
      translate({
        id: "pricing.plan.free.unlimited_app_version_uploads",
        message: "Unlimited app version uploads",
      }),
      translate({
        id: "pricing.plan.free.unlimited_app_installations",
        message: "Unlimited app installations",
      }),
      translate({
        id: "pricing.plan.free.self_hosted_no_storage_limits",
        message: "Self-hosted, no storage limits",
      }),
      translate({
        id: "pricing.plan.free.community_support",
        message: "Community support",
      }),
      translate({
        id: "pricing.plan.free.open_source_license",
        message: "Open source license",
      }),
    ],
    button: {
      text: translate({
        id: "pricing.plan.free.button",
        message: "Get Started",
      }),
      id: "github-btn",
      href: "https://github.com/tryzealot/zealot",
      type: "link",
    },
    highlight: false,
  },
  {
    name: translate({ id: "pricing.plan.pro", message: "Pro" }),
    icon: "⭐",
    subtitle: translate({
      id: "pricing.plan.pro.subtitle",
      message: "Professional Edition",
    }),
    price: translate({ id: "pricing.plan.pro.price", message: "$499 / year" }),
    priceId: "pri_01kecev08pfk50j8k9p0bs7ag8",
    priceSuffix: "",
    trial: translate({
      id: "pricing.plan.pro.trial",
      message: "with a 14 days trial",
    }),
    save: translate({ id: "pricing.plan.pro.save", message: "Save 40%" }),
    features: [
      translate({
        id: "pricing.plan.pro.all_community_edition_features",
        message: "All Community Edition features",
      }),
      translate({
        id: "pricing.plan.pro.unlimited_organizations",
        message: "Unlimited organizations",
      }),
      translate({
        id: "pricing.plan.pro.detailed_session_logs_and_overviews",
        message: "Detailed session logs and overviews",
      }),
      translate({
        id: "pricing.plan.pro.missing_email_notifications",
        message: "Missing email notifications",
      }),
      translate({
        id: "pricing.plan.pro.more_storage_options",
        message: "More storage options",
      }),
      translate({
        id: "pricing.plan.pro.custom_branding",
        message: "Custom branding",
      }),
      translate({
        id: "pricing.plan.pro.priority_support",
        message: "Priority support",
      }),
    ],
    button: {
      text: translate({ id: "pricing.plan.pro.button", message: "Buy Now" }),
      id: "paddle-buy-btn",
      type: "paddle",
    },
    highlight: true,
  },
];

export const EnterpriseTier = {
  title: translate({ id: "pricing.enterprise.title", message: "Enterprise" }),
  description: translate({
    id: "pricing.enterprise.desc",
    message:
      "Need a custom solution or service level agreement? Get in touch for a tailored offer for your company or team.",
  }),
  button: {
    text: translate({
      id: "pricing.enterprise.button",
      message: "Get in touch",
    }),
    href: "mailto:zealot@ews.im",
  },
};
