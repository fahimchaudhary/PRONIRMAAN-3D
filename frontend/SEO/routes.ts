/**
 * Per-route SEO metadata. Drives the <SEO> component, the sitemap generator
 * and the prerender script — one definition, used everywhere.
 *
 * `priority` and `changefreq` feed sitemap.xml. `noindex` removes a route from
 * the index (used for legal/utility pages we don't want ranking).
 */

export type FaqItem = { question: string; answer: string };

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  /** Page-type schema to emit in addition to the global graph. */
  schema?: "WebPage" | "Service" | "AboutPage" | "ContactPage";
  /** Service-specific fields (only used when schema === "Service"). */
  serviceType?: string;
  faq?: FaqItem[];
  priority: number;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  noindex?: boolean;
}

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "Construction & Demolition Contractor in Mumbai",
    description:
      "Pronirmaan Solution is an ISO-certified construction and demolition contractor in India offering civil works, industrial demolition, structural dismantling and heavy-machinery rental. Get a free site inspection.",
    keywords:
      "construction company Mumbai, demolition contractor India, industrial demolition, civil work contractor, excavator rental Mumbai",
    schema: "WebPage",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    path: "/about-us",
    title: "About Us — 20+ Years in Construction & Demolition",
    description:
      "Learn about Pronirmaan Solution: 20+ years delivering safe, ISO-certified construction and demolition projects for leading cement and infrastructure brands across India.",
    keywords:
      "about Pronirmaan Solution, construction company history, ISO certified demolition contractor, infrastructure company India",
    schema: "AboutPage",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/construction-services",
    title: "Construction Services & Civil Work Contractor",
    description:
      "Professional construction services: residential, commercial and industrial civil works, RCC structures, and turnkey infrastructure delivered with engineering precision and safety.",
    keywords:
      "construction services, civil work contractor, commercial construction India, RCC structure, industrial construction Mumbai",
    schema: "Service",
    serviceType: "Construction & Civil Works",
    faq: [
      {
        question: "What construction services does Pronirmaan Solution offer?",
        answer:
          "We deliver all types of civil work including residential, commercial and industrial construction, RCC and MS structures, and turnkey infrastructure projects across India.",
      },
      {
        question: "Do you provide a free site inspection and quote?",
        answer:
          "Yes. Our engineering team conducts a free site inspection and provides a detailed, transparent project estimate before any work begins.",
      },
      {
        question: "Which regions do you serve?",
        answer:
          "We operate across Mumbai, Maharashtra, Gujarat, Karnataka, Tamil Nadu, West Bengal and other parts of India for large-scale projects.",
      },
    ],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/demolition-services",
    title: "Industrial Demolition & Dismantling Contractor",
    description:
      "Expert industrial demolition and dismantling: controlled demolition, MS & RCC structure dismantling, diamond-wire concrete cutting, plant teardown and safe debris management.",
    keywords:
      "demolition contractor, industrial demolition, controlled demolition, structural dismantling, diamond wire cutting, plant demolition India",
    schema: "Service",
    serviceType: "Industrial Demolition & Dismantling",
    faq: [
      {
        question: "What types of demolition do you handle?",
        answer:
          "Controlled building and plant demolition, dismantling of all MS and RCC structures, concrete cutting with diamond wire rope, and complete site clearance with debris management.",
      },
      {
        question: "How do you ensure safety during demolition?",
        answer:
          "We follow ISO 45001 safety protocols, conduct structural surveys, use trained operators and heavy machinery, and implement controlled sequencing to protect people and surrounding structures.",
      },
      {
        question: "Can you handle large industrial plant demolition?",
        answer:
          "Yes. We specialise in large-scale industrial demolition including boilers, bunkers, beams and full plant teardown for cement and power facilities.",
      },
    ],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/our-team",
    title: "Our Team & Machinery — Tata Hitachi Ex210 on Rent",
    description:
      "Meet the Pronirmaan Solution team: skilled engineers, operators and labourers backed by heavy machinery including the Tata Hitachi Ex210 LC excavator, available on rent.",
    keywords:
      "construction team Mumbai, Tata Hitachi Ex210 LC rent, excavator rental Mumbai, construction workforce India, machinery on rent",
    schema: "WebPage",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/contact",
    title: "Contact Us — Free Site Inspection & Project Quote",
    description:
      "Contact Pronirmaan Solution for a free site inspection and detailed quote on your construction or demolition project. Call +91 95945 11900 or send us a message.",
    keywords:
      "contact construction company, demolition quote, site inspection Mumbai, construction contractor contact India",
    schema: "ContactPage",
    faq: [
      {
        question: "How can I get a quote for my project?",
        answer:
          "Call +91 95945 11900 / +91 98333 66632, email contact@pronirmaansolutions.com, or submit the contact form. We respond with a free site inspection and estimate.",
      },
      {
        question: "What are your working hours?",
        answer:
          "Our office is open Monday to Friday, 9:00 AM to 6:00 PM. Project and emergency demolition enquiries can be arranged outside these hours.",
      },
    ],
    priority: 0.8,
    changefreq: "yearly",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "Privacy Policy of Pronirmaan Solution explaining what information we collect, how we use it, and how your data is protected.",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    path: "/terms-and-conditions",
    title: "Terms & Conditions",
    description:
      "Terms and Conditions governing the use of Pronirmaan Solution services, machine rentals, estimates and site inspections.",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    path: "/cookie-policy",
    title: "Cookie Policy",
    description:
      "Cookie Policy of Pronirmaan Solution describing how and why cookies are used on this website and how you can manage them.",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    path: "/disclaimer",
    title: "Disclaimer",
    description:
      "Disclaimer for Pronirmaan Solution covering professional advice, accuracy of information, site risks and external links.",
    priority: 0.3,
    changefreq: "yearly",
  },
];

/** Human-readable breadcrumb label for a path segment. */
const SEGMENT_LABELS: Record<string, string> = {
  "about-us": "About Us",
  "construction-services": "Construction Services",
  "demolition-services": "Demolition Services",
  "our-team": "Our Team",
  contact: "Contact",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms & Conditions",
  "cookie-policy": "Cookie Policy",
  disclaimer: "Disclaimer",
};

export function getRouteMeta(path: string): RouteMeta | undefined {
  return ROUTES.find((r) => r.path === path);
}

export function labelForSegment(segment: string): string {
  return (
    SEGMENT_LABELS[segment] ||
    segment
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}

/** Build breadcrumb trail (Home → … → current) for a given path. */
export function breadcrumbsFor(
  path: string,
): { name: string; path: string }[] {
  const crumbs = [{ name: "Home", path: "/" }];
  if (path === "/") return crumbs;
  const segments = path.split("/").filter(Boolean);
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    crumbs.push({ name: labelForSegment(seg), path: acc });
  }
  return crumbs;
}
