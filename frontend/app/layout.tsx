import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteLayout from '@/components/SiteLayout';
import { generateRouteMetadata } from '@/SEO/metadata';
import SEO from '@/components/SEO';
import { SITE } from '@/SEO/config';

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = generateRouteMetadata('/');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body suppressHydrationWarning className="font-body selection:bg-[#0f8a3c] selection:text-white">
        <SEO path="/" />
        <SiteLayout>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}
