'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface TopBarProps {
  onOpenQuote: () => void;
}

export default function TopBar({ onOpenQuote }: TopBarProps) {
  return (
    <header className="bg-[#1c2938] text-slate-200 text-xs sm:text-[13px] py-2.5 px-4 sm:px-6 lg:px-8 border-b border-[#283747] z-30 relative font-nav">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Contact info left */}
        <div className="flex items-center gap-4 sm:gap-7 text-slate-300 min-w-0">
          <div className="hidden sm:flex items-center gap-2 hover:text-white transition-colors cursor-pointer group truncate">
            <MapPin className="w-4 h-4 text-[#0f8a3c] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-semibold tracking-wide truncate">Mumbai, Maharashtra</span>
          </div>

          <a
            href="tel:+919594511900"
            className="flex items-center gap-2 hover:text-white transition-colors group shrink-0"
          >
            <Phone className="w-4 h-4 text-[#0f8a3c] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xs sm:text-[13px] tracking-wide">+91 95945 11900</span>
          </a>

          <a
            href="mailto:contact@pronirmaansolutions.com"
            className="hidden md:flex items-center gap-2 hover:text-white transition-colors group"
          >
            <Mail className="w-4 h-4 text-[#0f8a3c] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-semibold tracking-wide">contact@pronirmaansolutions.com</span>
          </a>
        </div>

        {/* WhatsApp & Request Estimate button */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <a
            href="https://wa.me/919594511900"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#0f8a3c]">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-4 sm:px-6 py-2 rounded-lg font-bold tracking-wider uppercase text-xs sm:text-[13px] transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap active:scale-95"
          >
            REQUEST ESTIMATE
          </button>
        </div>
      </div>
    </header>
  );
}
