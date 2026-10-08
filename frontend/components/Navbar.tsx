'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronRight, PhoneCall } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18 lg:h-20">
        {/* Brand Area: Logo + Vertical Line + ISO Badge */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 min-w-0">
          <Link
            href="/"
            className="flex items-center cursor-pointer transition-transform hover:scale-[1.01]"
          >
            <div className="relative h-11 sm:h-13 lg:h-[58px] w-44 sm:w-56 lg:w-68 shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="ProNirmaan Solutions"
                width={300}
                height={65}
                priority
                unoptimized
                className="h-11 sm:h-13 lg:h-[58px] w-auto object-contain object-left max-w-full"
              />
            </div>
          </Link>

          {/* Thin Vertical Separator - Shown on sm+ screens */}
          <div className="hidden sm:block h-7 sm:h-9 lg:h-10 w-[1.5px] bg-stone-300/80 shrink-0 mx-1 sm:mx-2" />

          {/* ISO Verified Badge - Shown on sm+ screens (on phone it's in the mobile drawer) */}
          <div className="hidden sm:flex relative h-9 sm:h-11 lg:h-12 w-11 sm:w-14 lg:w-16 shrink-0 items-center">
            <Image
              src="/iso/iso-.avif"
              alt="ISO Verified"
              width={70}
              height={52}
              priority
              unoptimized
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain max-w-full"
            />
          </div>
        </div>

        {/* Center Desktop Navigation Links (Direct Multipage Routes) */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-[15px] xl:text-[16px] font-semibold tracking-normal font-heading">
          <Link
            href="/"
            className={`transition-colors py-1 cursor-pointer whitespace-nowrap ${
              activeSection === 'home'
                ? 'text-[#0f8a3c] font-bold'
                : 'text-stone-700 hover:text-[#0f8a3c]'
            }`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`transition-colors py-1 cursor-pointer whitespace-nowrap ${
              activeSection === 'about'
                ? 'text-[#0f8a3c] font-bold'
                : 'text-stone-700 hover:text-[#0f8a3c]'
            }`}
          >
            About Us
          </Link>

          <Link
            href="/construction-services"
            className={`transition-colors py-1 cursor-pointer whitespace-nowrap ${
              activeSection === 'construction'
                ? 'text-[#0f8a3c] font-bold'
                : 'text-stone-700 hover:text-[#0f8a3c]'
            }`}
          >
            Construction
          </Link>

          <Link
            href="/demolition-services"
            className={`transition-colors py-1 cursor-pointer whitespace-nowrap ${
              activeSection === 'demolition'
                ? 'text-[#0f8a3c] font-bold'
                : 'text-stone-700 hover:text-[#0f8a3c]'
            }`}
          >
            Demolition
          </Link>

          <Link
            href="/our-team"
            className={`transition-colors py-1 cursor-pointer whitespace-nowrap ${
              activeSection === 'team'
                ? 'text-[#0f8a3c] font-bold'
                : 'text-stone-700 hover:text-[#0f8a3c]'
            }`}
          >
            Our Team
          </Link>

          <Link
            href="/contact"
            className={`transition-colors py-1 cursor-pointer whitespace-nowrap ${
              activeSection === 'contact'
                ? 'text-[#0f8a3c] font-bold'
                : 'text-stone-700 hover:text-[#0f8a3c]'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right CTA Button: Rounded Green Pill "Get in Touch" */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={handleQuoteClick}
            className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-6 py-2.5 rounded-full font-bold text-[14px] sm:text-[15px] tracking-wide shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button with hover feedback */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-stone-100 hover:bg-[#e4f7ea] text-stone-800 hover:text-[#0f8a3c] flex items-center justify-center border border-stone-200/90 shadow-2xs transition-all duration-200 active:scale-90 cursor-pointer group"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.5] transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Exact match to First Design + MSV Freight Interactive Hover) */}
      {mounted && mobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-[99999] lg:hidden flex">
          {/* Backdrop overlay (dimming right side) */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Left Slide Drawer panel */}
          <div className="relative w-[86%] max-w-[340px] h-[100dvh] bg-white flex flex-col justify-between shadow-2xl z-10 overflow-y-auto animate-in slide-in-from-left duration-300">
            {/* Top Section with Close Button & Centered Circular Brand Badge */}
            <div className="pt-4 px-4 pb-4 shrink-0 bg-gradient-to-b from-stone-50/80 to-white border-b border-stone-100">
              {/* Close Button top-right */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 rounded-full bg-stone-100 hover:bg-[#e4f7ea] text-stone-600 hover:text-[#0f8a3c] flex items-center justify-center transition-all duration-300 hover:rotate-90 cursor-pointer active:scale-90"
                >
                  <X className="w-5 h-5 stroke-[2.2]" />
                </button>
              </div>

              {/* Centered Circular Brand Badge with Green Halo Ring */}
              <div
                className="text-center px-4 -mt-1 group cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = '/';
                }}
              >
                <div className="relative w-[92px] h-[92px] mx-auto mb-3 rounded-full bg-[#ecf8f1] border border-[#cbeed8] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <div className="relative w-[72px] h-[72px] rounded-full border-2 border-[#0f8a3c] bg-white flex items-center justify-center p-3 shadow-2xs">
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
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0f8a3c] mt-0.5 font-nav">
                  CIVIL WORKS &amp; CONTROL DEMOLITION
                </p>
              </div>
            </div>

            {/* Navigation Items List with MSV Freight style sliding green hover animation */}
            <div className="flex-1 overflow-y-auto py-2">
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
                    <li key={item.href} className="border-b border-stone-100/80 last:border-b-0">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group relative overflow-hidden isolate flex items-center justify-between py-4 px-6 font-bold text-[17px] transition-all duration-300 select-none ${
                          isActive
                            ? 'text-[#0f8a3c] font-black'
                            : 'text-stone-800 hover:text-stone-950 active:bg-[#e4f7ea]/50'
                        }`}
                      >
                        {/* Soft light green sliding sheet from left on hover / tap */}
                        <div
                          className={`absolute inset-0 bg-[#e4f7ea] -z-10 transition-transform duration-300 ease-out pointer-events-none ${
                            isActive
                              ? 'translate-x-0'
                              : '-translate-x-full group-hover:translate-x-0'
                          }`}
                          aria-hidden="true"
                        />

                        {/* Left green active indicator pill */}
                        <div
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-7 rounded-r-full bg-[#0f8a3c] transition-all duration-300 ${
                            isActive
                              ? 'opacity-100 scale-y-100'
                              : 'opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100'
                          }`}
                        />

                        {/* Label with smooth shift right */}
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                          {item.label}
                        </span>

                        {/* Chevron pill with rotation & scale */}
                        <div className="w-8 h-8 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-2xs transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-8deg] group-hover:scale-110">
                          <ChevronRight
                            className={`w-4 h-4 stroke-[2.5] transition-colors ${
                              isActive ? 'text-[#0f8a3c]' : 'text-stone-400 group-hover:text-[#0f8a3c]'
                            }`}
                          />
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottom Action Pill Button & Phone & ISO */}
            <div className="p-5 border-t border-stone-100 bg-stone-50/50 shrink-0 space-y-3">
              {/* Direct Call Quick Action */}
              <a
                href="tel:+919594511900"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-stone-200/80 hover:border-[#0f8a3c] text-stone-700 hover:text-[#0f8a3c] text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0f8a3c]" />
                <span>Call: +91 9594511900</span>
              </a>

              {/* Get in Touch CTA */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleQuoteClick();
                }}
                className="w-full bg-[#0f8a3c] hover:bg-[#0b7331] active:scale-[0.98] text-white py-3.5 rounded-xl font-heading font-bold text-[15px] tracking-wide shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
              </button>
              
              {/* ISO Badge */}
              <div className="pt-1 flex items-center justify-center gap-2">
                <div className="relative w-5 h-5 shrink-0 flex items-center" style={{ maxWidth: '20px', maxHeight: '20px' }}>
                  <Image
                    src="/iso/iso-.avif"
                    alt="ISO Verified"
                    width={20}
                    height={20}
                    unoptimized
                    loading="lazy"
                    className="w-5 h-5 object-contain"
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
