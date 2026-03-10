import { translate, type TranslateResult } from "@docusaurus/Translate";
import type { PricingTierItem, EnterpriseTierItem } from "../types";

export const PricingTier: PricingTierItem[] = [
  {
    key: "free",
    name: translate({ id: "pricing.plan.free", message: "Open Source" }) as string,
    icon: "🚀",
    price: translate({ id: "pricing.plan.free.price", message: "Free" }) as string,
    features: [
      translate({
        id: "pricing.plan.free.unlimited_users",
        message: "Unlimited users",
      }) as string,
      translate({
        id: "pricing.plan.free.unlimited_apps_and_team_members",
        message: "Unlimited apps and team members",
      }) as string,
      translate({
        id: "pricing.plan.free.unlimited_app_version_uploads",
        message: "Unlimited app version uploads",
      }) as string,
      translate({
        id: "pricing.plan.free.unlimited_app_installations",
        message: "Unlimited app installations",
      }) as string,
      translate({
        id: "pricing.plan.free.self_hosted_no_storage_limits",
        message: "Self-hosted, no storage limits",
      }) as string,
      translate({
        id: "pricing.plan.free.community_support",
        message: "Community support",
      }) as string,
      translate({
        id: "pricing.plan.free.open_source_license",
        message: "Open source license",
      }) as string,
    ],
    button: {
      text: translate({
        id: "pricing.plan.free.button",
        message: "Get Started",
      }) as string,
      id: "github-btn",
      href: "https://github.com/tryzealot/zealot",
      type: "link",
    },
    highlight: false,
  },
  {
    key: "pro",
    name: translate({ id: "pricing.plan.pro", message: "Pro" }) as string,
    icon: "⭐",
    priceId: "pri_01kecep9wgsx1v52eam2gdnnxy",
    frequency: translate({
      id: "pricing.plan.pro.frequency",
      message: "yearly",
    }) as string,
    trial: translate({
      id: "pricing.plan.pro.trial",
      message: "with a 14 days trial",
    }) as string,
    save: translate({ id: "pricing.plan.pro.save", message: "Save 43%" }) as string,
    features: [
      translate({
        id: "pricing.plan.pro.all_community_edition_features",
        message: "All Community Edition features",
      }) as string,
      translate({
        id: "pricing.plan.pro.unlimited_organizations",
        message: "Unlimited organizations",
      }) as string,
      translate({
        id: "pricing.plan.pro.detailed_session_logs_and_overviews",
        message: "Detailed session logs and overviews",
      }) as string,
      translate({
        id: "pricing.plan.pro.missing_email_notifications",
        message: "Missing email notifications",
      }) as string,
      translate({
        id: "pricing.plan.pro.more_storage_options",
        message: "More storage options",
      }) as string,
      translate({
        id: "pricing.plan.pro.custom_branding",
        message: "Custom branding",
      }) as string,
      translate({
        id: "pricing.plan.pro.priority_support",
        message: "Priority support",
      }) as string,
    ],
    button: {
      text: translate({ id: "pricing.plan.pro.button", message: "Buy Now" }) as string,
      id: "paddle-buy-btn",
      type: "paddle",
    },
    highlight: true,
  },
];

export const EnterpriseTier: EnterpriseTierItem = {
  title: translate({ id: "pricing.enterprise.title", message: "Enterprise" }) as string,
  description: translate({
    id: "pricing.enterprise.desc",
    message:
      "Need a custom solution or service level agreement? Get in touch for a tailored offer for your company or team.",
  }) as string,
  button: {
    text: translate({
      id: "pricing.enterprise.button",
      message: "Get in touch",
    }) as string,
    href: "mailto:zealot@ews.im",
  },
};