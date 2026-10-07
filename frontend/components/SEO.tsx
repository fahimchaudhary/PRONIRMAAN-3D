import React from 'react';
import { getRouteMeta, type RouteMeta } from '../SEO/routes';
import { buildGraph } from '../SEO/schema';
import { SITE } from '../SEO/config';

interface SEOProps {
  /** Route path, e.g. "/contact" or "/construction-services". Used to generate JSON-LD schema graph. */
  path: string;
}

/**
 * SEO — Injects Google-recommended Schema.org JSON-LD structured data (@graph)
 * directly into the SSR HTML stream.
 *
 * Includes Organization, LocalBusiness (GeneralContractor with Mumbai coordinates),
 * WebSite, Service, BreadcrumbList, and FAQPage schemas.
 */
export default function SEO({ path }: SEOProps) {
  const meta: RouteMeta | undefined = getRouteMeta(path);

  const fallbackMeta: RouteMeta = {
    path,
    title: SITE.name,
    description: SITE.description,
    priority: 0.5,
    changefreq: 'monthly',
  };

  const graph = buildGraph(meta ?? fallbackMeta);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph),
      }}
    />
  );
}
