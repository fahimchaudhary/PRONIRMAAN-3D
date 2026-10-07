'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ChevronRight, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface HomeCtaBannerProps {
  onOpenQuote: () => void;
}

export default function HomeCtaBanner({ onOpenQuote }: HomeCtaBannerProps) {
  return (
    <section className="relative bg-[#131c26] text-white py-18 sm:py-24 overflow-hidden border-b border-stone-800 font-body">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0f8a3c_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/20 border border-[#0f8a3c]/40 text-[#0f8a3c] text-xs font-bold uppercase tracking-widest font-heading">
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              <span>COMMERCIAL &amp; INDUSTRIAL RFP DESK</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-tight">
              Ready to Execute Your Next <span className="text-[#0f8a3c]">Landmark Project</span>?
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Connect directly with our principal project directors in Mumbai and Thane. Whether you need controlled high-reach building demolition, silent chemical cracking, or heavy industrial civil execution, our certified engineers deliver on-time with zero-incident governance.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-7 py-3.5 rounded-xl font-bold tracking-wider text-xs uppercase transition-all shadow-lg hover:shadow-xl font-nav cursor-pointer"
              >
                <span>REQUEST DETAILED ESTIMATE / RFP</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold tracking-wider text-xs uppercase transition-all font-nav"
              >
                <span>VIEW CONTACT &amp; OFFICE LOCATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Fast Contact Card & Offices with Smooth Curved Borders */}
          <div className="lg:col-span-5">
            <div className="bg-[#1c2938] border border-stone-700/80 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <h3 className="font-heading font-bold text-lg text-white border-b border-stone-700 pb-3 flex items-center justify-between">
                <span>Direct Engineering Desk</span>
                <span className="text-[10px] font-bold text-[#0f8a3c] uppercase tracking-widest font-nav bg-[#0f8a3c]/15 px-3 py-1 rounded-full">
                  24/7 Response
                </span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300 font-body">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0f8a3c]/20 text-[#0f8a3c] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-stone-400 uppercase font-nav">Phone &amp; WhatsApp</div>
                    <a href="tel:+919594511900" className="text-white hover:text-[#0f8a3c] font-semibold transition-colors">
                      +91 9594511900 / 9833366632
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0f8a3c]/20 text-[#0f8a3c] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-stone-400 uppercase font-nav">Official Inquiries</div>
                    <a href="mailto:contact@pronirmaansolutions.com" className="text-white hover:text-[#0f8a3c] font-semibold transition-colors">
                      contact@pronirmaansolutions.com
                    </a>
                  </div>
                </div>

                {/* Locations */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0f8a3c]/20 text-[#0f8a3c] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-stone-400 uppercase font-nav">Mumbai &amp; Thane Offices</div>
                    <p className="text-stone-300 text-xs leading-relaxed mt-0.5">
                      Kurla-Andheri Rd, Kurla (W), Mumbai &amp; Shilphata Yard, Thane
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified ISO Note */}
              <div className="border-t border-stone-700/80 pt-4 flex items-center gap-2 text-stone-400 text-xs">
                <Clock className="w-3.5 h-3.5 text-[#0f8a3c]" />
                <span>Immediate site inspection mobilization across Maharashtra.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
