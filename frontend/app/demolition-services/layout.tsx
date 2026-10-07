import type { Metadata } from 'next';
import { generateRouteMetadata } from '@/SEO/metadata';
import SEO from '@/components/SEO';

export const metadata: Metadata = generateRouteMetadata('/demolition-services');

export default function DemolitionServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO path="/demolition-services" />
      {children}
    </>
  );
}
