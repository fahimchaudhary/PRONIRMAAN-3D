'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
  onOpenSearch?: () => void;
  onOpenQuote?: () => void;
}

export default function Navbar({
  activeSection = 'home',
  onOpenQuote,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleQuoteClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      window.location.href = '/contact';
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-xs border-b border-stone-200/90 font-nav select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-22 sm:h-24">
        {/* Brand Area: Logo + Vertical Line + ISO Badge */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 min-w-0">
          <Link
            href="/"
            className="flex items-center cursor-pointer transition-transform hover:scale-[1.01]"
          >
            <div className="relative h-12 sm:h-14 w-44 sm:w-56 shrink-0">
              <Image
                src="/logo.png"
                alt="ProNirmaan Solutions"
                fill
                priority
                unoptimized
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Thin Vertical Separator */}
          <div className="h-9 sm:h-11 w-[1.5px] bg-stone-300/80 shrink-0 mx-0.5 sm:mx-1" />

          {/* ISO Verified Badge */}
          <div className="relative h-10 sm:h-12 w-12 sm:w-16 shrink-0">
            <Image
              src="/iso/iso-.avif"
              alt="ISO Verified"
              fill
              priority
              unoptimized
              className="object-contain"
            />
          </div>
        </div>

        {/* Center Desktop Navigation Links (Direct Multipage Routes) */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9 text-[14px] font-bold tracking-normal font-heading">
          <Link
            href="/"
            className={`transition-colors py-1 cursor-pointer ${
              activeSection === 'home'
                ? 'text-[#0f8a3c] font-black'
                : 'text-stone-800 hover:text-[#0f8a3c]'
            }`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`transition-colors py-1 cursor-pointer ${
              activeSection === 'about'
                ? 'text-[#0f8a3c] font-black'
                : 'text-stone-800 hover:text-[#0f8a3c]'
            }`}
          >
            About Us
          </Link>

          <Link
            href="/construction-services"
            className={`transition-colors py-1 cursor-pointer ${
              activeSection === 'construction'
                ? 'text-[#0f8a3c] font-black'
                : 'text-stone-800 hover:text-[#0f8a3c]'
            }`}
          >
            Construction
          </Link>

          <Link
            href="/demolition-services"
            className={`transition-colors py-1 cursor-pointer ${
              activeSection === 'demolition'
                ? 'text-[#0f8a3c] font-black'
                : 'text-stone-800 hover:text-[#0f8a3c]'
            }`}
          >
            Demolition
          </Link>

          <Link
            href="/our-team"
            className={`transition-colors py-1 cursor-pointer ${
              activeSection === 'team'
                ? 'text-[#0f8a3c] font-black'
                : 'text-stone-800 hover:text-[#0f8a3c]'
            }`}
          >
            Our Team
          </Link>

          <Link
            href="/contact"
            className={`transition-colors py-1 cursor-pointer ${
              activeSection === 'contact'
                ? 'text-[#0f8a3c] font-black'
                : 'text-stone-800 hover:text-[#0f8a3c]'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right CTA Button: Rounded Green Pill "Get in Touch" */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={handleQuoteClick}
            className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-7 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-12 h-12 rounded-xl bg-stone-100 hover:bg-[#0f8a3c]/10 text-stone-800 hover:text-[#0f8a3c] flex items-center justify-center border border-stone-200/90 shadow-2xs transition-all active:scale-95 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 stroke-[2.5]" />
            ) : (
              <Menu className="w-7 h-7 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Exact match to First Design) */}
      {mounted && mobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-[99999] lg:hidden flex">
          {/* Backdrop overlay (dimming right side) */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Left Slide Drawer panel */}
          <div className="relative w-[84%] max-w-[340px] h-[100dvh] bg-white flex flex-col justify-between shadow-2xl z-10 overflow-y-auto animate-in slide-in-from-left duration-300">
            {/* Top Section with Close Button & Centered Circular Brand Badge */}
            <div className="pt-4 px-4 pb-4 shrink-0">
              {/* Close Button top-right */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 stroke-[2]" />
                </button>
              </div>

              {/* Centered Circular Brand Badge with Green Halo Ring */}
              <div className="text-center px-4 -mt-1">
                <div className="relative w-[96px] h-[96px] mx-auto mb-3 rounded-full bg-[#ecf8f1] border border-[#cbeed8] flex items-center justify-center shadow-xs">
                  <div className="relative w-[74px] h-[74px] rounded-full border-2 border-[#0f8a3c] bg-white flex items-center justify-center p-3 shadow-2xs">
                    <div className="relative w-full h-full">
                      <Image
                        src="/icon.png"
                        alt="ProNirmaan Solutions Logo"
                        fill
                        priority
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="font-heading font-black text-[15px] uppercase tracking-wider text-[#1e293b]">
                  PRONIRMAAN SOLUTIONS
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mt-1 font-nav">
                  CIVIL WORKS &amp; CONTROL DEMOLITION
                </p>
              </div>
            </div>

            {/* Navigation Items List with Chevron and Active Indicator */}
            <div className="border-t border-stone-100 flex-1 overflow-y-auto">
              <ul className="flex flex-col font-heading">
                {[
                  { href: '/', label: 'Home', key: 'home' },
                  { href: '/about-us', label: 'About Us', key: 'about' },
                  { href: '/construction-services', label: 'Construction', key: 'construction' },
                  { href: '/demolition-services', label: 'Demolition', key: 'demolition' },
                  { href: '/our-team', label: 'Our Team', key: 'team' },
                  { href: '/contact', label: 'Contact', key: 'contact' },
                ].map((item) => {
                  const isActive = activeSection === item.key;
                  return (
                    <li key={item.href} className="border-b border-stone-100">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-4 py-3.5 px-6 font-bold text-[15px] transition-colors ${
                          isActive
                            ? 'border-l-[3.5px] border-[#0f8a3c] bg-[#f0fbf4] text-[#0f8a3c]'
                            : 'border-l-[3.5px] border-transparent text-[#1e293b] hover:text-[#0f8a3c] hover:bg-stone-50'
                        }`}
                      >
                        <ChevronRight
                          className={`w-4 h-4 stroke-[2.2] shrink-0 ${
                            isActive ? 'text-[#0f8a3c]' : 'text-stone-400'
                          }`}
                        />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottom Action Pill Button & ISO */}
            <div className="p-5 border-t border-stone-100 bg-white shrink-0">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleQuoteClick();
                }}
                className="w-full bg-[#0f8a3c] hover:bg-[#0b7331] active:scale-[0.98] text-white py-3.5 rounded-xl font-heading font-bold text-[15px] tracking-wide shadow-md transition-all cursor-pointer"
              >
                Get in Touch
              </button>
              
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src="/iso/iso-.avif"
                    alt="ISO Verified"
                    fill
                    unoptimized
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <span className="text-[10.5px] font-bold uppercase tracking-widest text-stone-500 font-nav">
                  ISO VERIFIED COMPANY
                </span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}
