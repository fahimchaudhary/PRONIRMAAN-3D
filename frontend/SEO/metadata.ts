import type { Metadata } from 'next';
import { SITE, absoluteUrl } from './config';
import { getRouteMeta, type RouteMeta } from './routes';

export function generateRouteMetadata(
  path: string,
  overrides?: Partial<Metadata>
): Metadata {
  const meta: RouteMeta | undefined = getRouteMeta(path);

  const resolvedTitle = meta?.title ?? SITE.name;
  const fullTitle =
    path === '/'
      ? `${SITE.name} — Civil Works & Controlled Demolition Contractor in Mumbai`
      : `${resolvedTitle} | ${SITE.name}`;
  const resolvedDescription = meta?.description ?? SITE.description;
  const canonical = absoluteUrl(path);
  const ogImageUrl = absoluteUrl(SITE.ogImage);

  const keywordsList = meta?.keywords
    ? meta.keywords.split(',').map((k) => k.trim())
    : [
        'civil construction contractor Mumbai',
        'controlled demolition services India',
        'structural dismantling contractor',
        'diamond core cutting Mumbai',
        'excavator machinery rental Mumbai',
        'ISO certified construction company',
      ];

  const isNoIndex = meta?.noindex ?? false;

  const baseMetadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: fullTitle,
    description: resolvedDescription,
    keywords: keywordsList,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.legalName,
    applicationName: SITE.name,
    category: 'Construction & Civil Engineering',
    formatDetection: {
      telephone: true,
      address: true,
      email: true,
    },
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: fullTitle,
      description: resolvedDescription,
      url: canonical,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${resolvedTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: resolvedDescription,
      site: SITE.twitterHandle,
      creator: SITE.twitterHandle,
      images: [ogImageUrl],
    },
    robots: isNoIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png' }],
    },
  };

  return {
    ...baseMetadata,
    ...overrides,
    openGraph: {
      ...baseMetadata.openGraph,
      ...overrides?.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...overrides?.twitter,
    },
  };
}
