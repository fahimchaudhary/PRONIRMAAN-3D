'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, Wrench, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section id="company-overview" className="relative bg-[#f6f4f0] py-18 sm:py-24 border-b border-stone-200/80 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Executive Summary & Corporate Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/10 border border-[#0f8a3c]/30 text-[#0f8a3c] text-xs font-bold uppercase tracking-widest font-heading">
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              <span>ISO 9001 · 14001 · 45001 CERTIFIED GOVERNANCE</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 uppercase tracking-tight leading-tight">
              Engineering Maharashtra’s Infrastructure with{' '}
              <span className="text-[#0f8a3c]">Controlled Precision</span>
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Founded and managed by Mr. Mobin Chaudhary, Mr. Amin Chaudhary, and Mr. Asiullah Chaudhary, 
              <strong> ProNirmaan Solutions</strong> brings 15+ years of institutional rigor to high-risk civil construction, 
              controlled mechanical demolition, chemical cracking, and industrial plant dismantling.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              With an unblemished zero-incident track record across 500+ commercial, industrial, and infrastructure undertakings, 
              we operate our own heavy machinery fleet—ensuring seamless project timelines without dependence on third-party equipment.
            </p>

            {/* 3 Value Badges with soft rounded edges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/90 border border-stone-200/90 p-4 rounded-2xl shadow-2xs hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-[#0f8a3c] font-bold text-lg font-heading">
                  <Award className="w-5 h-5" />
                  <span>15+ Years</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">Proven civil &amp; demolition experience across Western India</p>
              </div>

              <div className="bg-white/90 border border-stone-200/90 p-4 rounded-2xl shadow-2xs hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-[#0f8a3c] font-bold text-lg font-heading">
                  <Wrench className="w-5 h-5" />
                  <span>Owned Fleet</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">Tata Hitachi EX210 excavators, breakers &amp; diamond saws</p>
              </div>

              <div className="bg-white/90 border border-stone-200/90 p-4 rounded-2xl shadow-2xs hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-[#0f8a3c] font-bold text-lg font-heading">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Zero Incident</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">Strict adherence to ISO &amp; OSHA safety compliance</p>
              </div>
            </div>

            {/* Clear Multi-Page Gateway Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-6 py-3.5 rounded-xl font-bold tracking-wider text-xs uppercase transition-all shadow-md hover:shadow-lg font-nav"
              >
                <span>EXPLORE COMPANY STORY &amp; PROCESS</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/about-us#leadership"
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 px-6 py-3.5 rounded-xl font-bold tracking-wider text-xs uppercase transition-all shadow-2xs font-nav"
              >
                <span>MEET LEADERSHIP &amp; PARTNERS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Feature Card with Smooth Curves */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative architectural frame */}
              <div className="relative rounded-3xl overflow-hidden border border-stone-300 shadow-2xl bg-stone-900">
                <div className="relative h-[380px] sm:h-[440px] w-full">
                  <Image
                    src="/Construction_projects/IMG-20260207-WA0004-640w.avif"
                    alt="ProNirmaan Heavy Civil Construction"
                    fill
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white bg-gradient-to-t from-black/95 to-black/40 backdrop-blur-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2.5 h-2.5 bg-[#0f8a3c] rounded-full animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0f8a3c] font-nav">
                      Institutional Execution
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
                    Specialized Demolition &amp; Turnkey Civil Builds
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 font-body">
                    Serving industrial leaders including Dalmia Bharat, Prism Cement, MP Birla, and Jaypee Group.
                  </p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -right-4 bg-white border border-stone-200 px-5 py-3.5 shadow-xl rounded-2xl hidden sm:flex items-center gap-3">
                <div className="relative h-9 w-12 shrink-0">
                  <Image
                    src="/iso/iso-.avif"
                    alt="ISO Certified"
                    fill
                    unoptimized
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider font-nav">Certified</div>
                  <div className="text-xs font-black text-stone-900 font-heading">ISO 9001 · 14001 · 45001</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
