import type { Metadata } from 'next';
import { generateRouteMetadata } from '@/SEO/metadata';
import SEO from '@/components/SEO';

export const metadata: Metadata = generateRouteMetadata('/privacy-policy');

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO path="/privacy-policy" />
      {children}
    </>
  );
}
