import type { Metadata } from 'next';
import { generateRouteMetadata } from '@/SEO/metadata';
import SEO from '@/components/SEO';

export const metadata: Metadata = generateRouteMetadata('/our-team');

export default function OurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO path="/our-team" />
      {children}
    </>
  );
}
