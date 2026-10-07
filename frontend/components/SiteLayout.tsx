'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import TopBar from './TopBar';
import Navbar from './Navbar';
import FooterBanner from './FooterBanner';
import QuoteModal from './QuoteModal';
import SearchModal from './SearchModal';
import Preloader from './Preloader';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(!isHome);
  
  // Determine active section based on pathname
  let activeSection = 'home';
  if (pathname.includes('/about-us')) activeSection = 'about';
  else if (pathname.includes('/construction')) activeSection = 'construction';
  else if (pathname.includes('/demolition')) activeSection = 'demolition';
  else if (pathname.includes('/our-team')) activeSection = 'team';
  else if (pathname.includes('/contact')) activeSection = 'contact';

  const handleSearchSelect = (targetId: string) => {
    if (pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  useEffect(() => {
    const handleOpenQuote = () => setQuoteOpen(true);
    const handleOpenSearch = () => setSearchOpen(true);
    window.addEventListener('openQuoteModal', handleOpenQuote);
    window.addEventListener('openSearchModal', handleOpenSearch);

    // Scale-to-fit resize listener matching MSV Freight architecture
    const DESIGN_W = 1280;
    const applyScale = () => {
      const root = document.documentElement;
      const w = root.clientWidth || window.innerWidth;
      if (window.matchMedia('(min-width: 761px)').matches) {
        root.style.setProperty('--fs', (w / DESIGN_W).toFixed(4));
      } else {
        root.style.setProperty('--fs', '1');
      }
    };
    applyScale();
    window.addEventListener('resize', applyScale, { passive: true });

    return () => {
      window.removeEventListener('openQuoteModal', handleOpenQuote);
      window.removeEventListener('openSearchModal', handleOpenSearch);
      window.removeEventListener('resize', applyScale);
    };
  }, []);

  useEffect(() => {
    if (!isHome) {
      setNavbarVisible(true);
      return;
    }

    const handleScroll = () => {
      const hero = document.getElementById('hero-scroll-container');
      if (!hero) {
        setNavbarVisible(true);
        return;
      }
      const rect = hero.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;
      if (scrollableDist <= 0) {
        setNavbarVisible(true);
        return;
      }

      const scrolled = -rect.top;
      const progress = scrolled / scrollableDist;

      if (progress >= 0.95 || rect.bottom <= window.innerHeight + 60) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHome, pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      {/* Header Container */}
      <div
        id="site-header"
        className={
          isHome
            ? `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                navbarVisible
                  ? 'translate-y-0 opacity-100 pointer-events-auto shadow-md'
                  : '-translate-y-full opacity-0 pointer-events-none'
              }`
            : 'sticky top-0 z-50 shadow-md'
        }
      >
        <TopBar onOpenQuote={() => setQuoteOpen(true)} />
        <Navbar 
          activeSection={activeSection} 
          onOpenQuote={() => setQuoteOpen(true)} 
          onOpenSearch={() => setSearchOpen(true)} 
        />
      </div>
      
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <FooterBanner onOpenQuote={() => setQuoteOpen(true)} />
      
      <QuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
      />
      
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onSelectResult={handleSearchSelect} 
      />

      <FloatingWhatsApp />
    </div>
  );
}
