/**
 * JSON-LD structured-data builders (schema.org).
 *
 * `buildGraph()` returns a single @graph array combining the global entities
 * (Organization, WebSite, LocalBusiness) with the page-specific entities
 * (WebPage / Service / AboutPage / ContactPage, BreadcrumbList, FAQPage).
 * Emitting one connected graph (with @id cross-references) is the modern,
 * Google-recommended way to express structured data.
 */

import { SITE, absoluteUrl } from "./config";
import { breadcrumbsFor, type FaqItem, type RouteMeta } from "./routes";

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const LOCALBUSINESS_ID = `${SITE.url}/#localbusiness`;

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.icon),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    foundingDate: SITE.foundingYear,
    email: SITE.email,
    telephone: SITE.telephone,
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    sameAs: SITE.social,
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: SITE.lang,
  };
}

function localBusinessNode() {
  return {
    "@type": "GeneralContractor",
    "@id": LOCALBUSINESS_ID,
    name: SITE.name,
    image: absoluteUrl(SITE.ogImage),
    logo: absoluteUrl(SITE.icon),
    url: SITE.url,
    telephone: SITE.telephone,
    email: SITE.email,
    priceRange: SITE.priceRange,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: SITE.areasServed.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: SITE.social,
  };
}

function webPageNode(
  url: string,
  title: string,
  description: string,
  type = "WebPage",
) {
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: SITE.lang,
    primaryImageOfPage: absoluteUrl(SITE.ogImage),
  };
}

function serviceNode(
  url: string,
  serviceType: string,
  description: string,
) {
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType,
    name: serviceType,
    description,
    provider: { "@id": ORG_ID },
    areaServed: SITE.areasServed.map((name) => ({ "@type": "Place", name })),
    url,
  };
}

function breadcrumbNode(path: string) {
  const crumbs = breadcrumbsFor(path);
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

function faqNode(url: string, faq: FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/**
 * Build the full JSON-LD @graph for a route.
 */
export function buildGraph(meta: RouteMeta): Record<string, unknown> {
  const url = absoluteUrl(meta.path);
  const fullTitle = `${meta.title} | ${SITE.name}`;

  const pageType =
    meta.schema === "AboutPage"
      ? "AboutPage"
      : meta.schema === "ContactPage"
        ? "ContactPage"
        : "WebPage";

  const graph: Record<string, unknown>[] = [
    organizationNode(),
    websiteNode(),
    localBusinessNode(),
    webPageNode(url, fullTitle, meta.description, pageType),
    breadcrumbNode(meta.path),
  ];

  if (meta.schema === "Service" && meta.serviceType) {
    graph.push(serviceNode(url, meta.serviceType, meta.description));
  }

  if (meta.faq && meta.faq.length > 0) {
    graph.push(faqNode(url, meta.faq));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
