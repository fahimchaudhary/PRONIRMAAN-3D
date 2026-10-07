/**
 * Central SEO / site configuration.
 * Single source of truth for the production domain, business NAP details,
 * and social profiles. Everything else (meta tags, canonical URLs, sitemap,
 * robots.txt and JSON-LD structured data) is derived from these values, so
 * changing the brand or domain only requires editing this file.
 */

export const SITE = {
  /** Canonical production origin — no trailing slash. */
  url: "https://pronirmaansolutions.com",
  name: "Pronirmaan Solution",
  legalName: "Pronirmaan Solution",
  shortName: "Pronirmaan",
  /** Used as the default social-share / Open Graph image (absolute path). */
  ogImage: "/og-image.jpg",
  logo: "/logo.png",
  icon: "/icon.png",
  themeColor: "#15803d",
  locale: "en_IN",
  lang: "en",
  twitterHandle: "@pronirmaan",
  description:
    "Pronirmaan Solution is a leading construction and demolition contractor in India delivering civil works, industrial demolition, structural dismantling, diamond-wire concrete cutting and heavy-machinery rental.",
  email: "contact@pronirmaansolutions.com",
  telephone: "+91-9594511900",
  altTelephone: "+91-9833366632",
  foundingYear: "2004",
  priceRange: "₹₹",
  address: {
    streetAddress:
      "Shop No 7, 2nd Floor, M.K. Compound, near Maxus Cinema Jarimari, Kurla Andheri Road",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400072",
    addressCountry: "IN",
  },
  geo: {
    latitude: 19.0937,
    longitude: 72.8833,
  },
  /** Real, verified social URLs. Replace "#" links once profiles exist. */
  social: [
    "https://www.facebook.com/pronirmaan",
    "https://www.linkedin.com/company/pronirmaan",
  ],
  /** Areas the business serves — strengthens local SEO relevance. */
  areasServed: [
    "Mumbai",
    "Maharashtra",
    "Gujarat",
    "Karnataka",
    "Tamil Nadu",
    "West Bengal",
    "India",
  ],
} as const;

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
