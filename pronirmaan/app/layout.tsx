import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Stoneway Construction Co. | Strong Foundations, Lasting Results',
  description: 'Strong foundations, lasting results. Commercial, civil, and residential construction services building communities since 1998.',
  openGraph: {
    title: 'Stoneway Construction Co. | Strong Foundations, Lasting Results',
    description: 'Strong foundations, lasting results. Commercial, civil, and residential construction services building communities since 1998.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stoneway Construction Co. | Strong Foundations, Lasting Results',
    description: 'Strong foundations, lasting results. Commercial, civil, and residential construction services building communities since 1998.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
