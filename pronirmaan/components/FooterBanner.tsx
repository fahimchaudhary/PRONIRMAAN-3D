'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

interface FooterBannerProps {
  onOpenQuote?: () => void;
  onNavigate?: (section: string) => void;
}

export default function FooterBanner({
  onOpenQuote,
  onNavigate,
}: FooterBannerProps) {
  const handleNav = (sec: string) => {
    if (onNavigate) {
      onNavigate(sec);
    } else {
      const el = document.getElementById(sec);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="relative bg-[#0e1622] text-white pt-16 pb-12 overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand & Logo + Bio (lg:col-span-4) */}
          <div className="lg:col-span-4">
            {/* White/Inverted Brand Area: Logo + Vertical Line + ISO Badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.png"
                  alt="Pronirmaan Solutions"
                  fill
                  unoptimized
                  loading="lazy"
                  className="object-contain object-left brightness-0 invert"
                />
              </div>

              <div className="h-7 w-[1.5px] bg-slate-700 shrink-0" />

              <div className="relative h-9 w-14 shrink-0">
                <Image
                  src="/iso/iso-.avif"
                  alt="ISO Verified"
                  fill
                  unoptimized
                  loading="lazy"
                  className="object-contain brightness-0 invert opacity-90"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-body leading-relaxed max-w-sm">
              Pronirmaan Solution is a leading infrastructure construction and demolition company services and project inspections.
            </p>
          </div>

          {/* Column 2: Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm sm:text-base text-white tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-body">
              <li>
                <Link
                  href="/construction-services"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  All Types of Civil Work
                </Link>
              </li>
              <li>
                <Link
                  href="/demolition-services"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Control Demolition
                </Link>
              </li>
              <li>
                <Link
                  href="/demolition-services"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Dismantling All Types of MS &amp; RCC Structure
                </Link>
              </li>
              <li>
                <Link
                  href="/demolition-services"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Concrete Cutting with Diamond Wire Rope
                </Link>
              </li>
              <li>
                <Link
                  href="/demolition-services"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Building &amp; Plant Demolition
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm sm:text-base text-white tracking-wide mb-4">
              Contact Information
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-body">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full border border-[#0f8a3c] flex items-center justify-center text-[#0f8a3c] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <a
                  href="https://maps.google.com/?q=19.093806,72.883250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug hover:text-white transition-colors"
                  title="Open location in Google Maps (19°05'37.7&quot;N 72°52'59.7&quot;E)"
                >
                  Shop No 7, 2 floor, M.k compound, near Maxus Cinema Jarimari, Kurla Andheri road, Mumbai -400072
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-[#0f8a3c] flex items-center justify-center text-[#0f8a3c] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a
                  href="tel:+919594511900"
                  className="hover:text-white transition-colors"
                >
                  +91 9594511900 / 9833366632
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-[#0f8a3c] flex items-center justify-center text-[#0f8a3c] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href="mailto:contact@pronirmaansolutions.com"
                  className="hover:text-white transition-colors truncate"
                >
                  contact@pronirmaansolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm sm:text-base text-white tracking-wide mb-4">
              Social Media
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/40 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0f8a3c] hover:bg-[#0f8a3c] transition-all cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/40 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0f8a3c] hover:bg-[#0f8a3c] transition-all cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/40 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0f8a3c] hover:bg-[#0f8a3c] transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/40 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0f8a3c] hover:bg-[#0f8a3c] transition-all cursor-pointer"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-800/80 my-8" />

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-body">
          <p>© 2026 Pronirmaan Solution. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/cookie-policy" className="hover:text-slate-200 transition-colors">
              Cookie Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/disclaimer" className="hover:text-slate-200 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
