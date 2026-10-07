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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  var DESIGN_W = 1280;
  var root = document.documentElement;
  function viewportW() {
    return root.clientWidth || window.innerWidth;
  }
  function applyScale() {
    if (window.matchMedia("(min-width: 761px)").matches) {
      root.style.setProperty("--fs", (viewportW() / DESIGN_W).toFixed(4));
    } else {
      root.style.setProperty("--fs", "1");
    }
  }
  applyScale();
  window.addEventListener("resize", applyScale, { passive: true });
})();
`,
          }}
        />
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
