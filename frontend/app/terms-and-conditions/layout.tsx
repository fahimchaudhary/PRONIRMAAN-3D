import type { Metadata } from 'next';
import { generateRouteMetadata } from '@/SEO/metadata';
import SEO from '@/components/SEO';

export const metadata: Metadata = generateRouteMetadata('/terms-and-conditions');

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO path="/terms-and-conditions" />
      {children}
    </>
  );
}
