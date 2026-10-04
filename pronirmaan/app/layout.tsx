import type { Metadata } from 'next';
import './globals.css';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://pronirmaansolutions.com'),
  title: 'ProNirmaan Solutions — Civil Works & Control Demolition',
  description:
    'ProNirmaan Solutions is Maharashtra’s premier infrastructure contractor specializing in turnkey civil construction, controlled demolition, plant dismantling, and diamond core cutting.',
  keywords: [
    'civil construction',
    'controlled demolition',
    'plant dismantling',
    'diamond core cutting',
    'excavator rental',
    'Mumbai construction contractor',
    'Thane civil works',
  ],
  openGraph: {
    title: 'ProNirmaan Solutions — Civil Works & Control Demolition',
    description:
      'Turnkey civil infrastructure, controlled demolition, and heavy equipment rentals across Mumbai and Maharashtra.',
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProNirmaan Solutions — Civil Works & Control Demolition',
    description:
      'Turnkey civil infrastructure, controlled demolition, and heavy equipment rentals across Mumbai and Maharashtra.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="font-body selection:bg-[#0f8a3c] selection:text-white">
        <SiteLayout>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}
