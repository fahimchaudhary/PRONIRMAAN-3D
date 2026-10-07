import type { Metadata } from 'next';
import { generateRouteMetadata } from '@/SEO/metadata';
import SEO from '@/components/SEO';

export const metadata: Metadata = generateRouteMetadata('/construction-services');

export default function ConstructionServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO path="/construction-services" />
      {children}
    </>
  );
}
