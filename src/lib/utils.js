import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Map Docusaurus locale to country code for payment services
 * @param {string} locale - The Docusaurus locale (e.g., 'en', 'zh-Hans', 'ja')
 * @returns {string} - The country code (e.g., 'US', 'CN', 'JP')
 */
export function getCountryCodeFromLocale(locale) {
  const localeToCountryMap = {
    en: "US",
    "zh-Hans": "CN",
    "zh-Hant": "TW",
    ja: "JP",
    ko: "KR",
    de: "DE",
    fr: "FR",
    es: "ES",
    ru: "RU",
    it: "IT",
    pt: "PT",
    nl: "NL",
    pl: "PL",
    tr: "TR",
    ar: "SA",
    th: "TH",
    vi: "VN",
    id: "ID",
    ms: "MY",
  };
  return localeToCountryMap[locale] || "US"; // Default to US
}
