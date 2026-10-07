'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cookie, ChevronRight } from 'lucide-react';

export default function CookiePolicyPage() {

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4f0] text-stone-900 selection:bg-[#0f8a3c] selection:text-white">
      

      {/* Hero Strip */}
      <section className="relative bg-[#131c26] text-white py-12 lg:py-16 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#0f8a3c] font-bold">Cookie Policy</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/20 border border-[#0f8a3c]/40 text-[#0f8a3c] text-[11px] font-bold uppercase tracking-widest mb-3">
            <Cookie className="w-3.5 h-3.5" />
            <span>BROWSER TELEMETRY &amp; PREFERENCES</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight">
            Cookie Policy
          </h1>
          <p className="font-body text-xs text-slate-400 mt-2">
            Last Updated: January 2026 · Transparent cookie declaration
          </p>
        </div>
      </section>

      {/* Editorial Content */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-12 border border-stone-200 rounded-xs shadow-xs space-y-8 font-body text-sm sm:text-base text-stone-700 leading-relaxed">
            
            <div>
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small encrypted alphanumeric files saved on your computer or mobile device when you browse our website. They enable technical session continuity, remember your inquiry inputs during multi-page browsing, and maintain smooth site performance.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                2. Categories of Cookies We Deploy
              </h2>
              <div className="space-y-4 text-sm text-stone-600">
                <div className="p-4 bg-[#f6f4f0] border border-stone-200 rounded-xs">
                  <div className="font-heading font-bold text-xs uppercase text-stone-900 mb-1">
                    A. Strictly Essential Cookies
                  </div>
                  <p>
                    Required for core system security, form submission CSRF token verification, and modal overlay state management. Cannot be disabled without breaking website functionality.
                  </p>
                </div>

                <div className="p-4 bg-[#f6f4f0] border border-stone-200 rounded-xs">
                  <div className="font-heading font-bold text-xs uppercase text-stone-900 mb-1">
                    B. Performance &amp; Analytics Cookies
                  </div>
                  <p>
                    Provide anonymous aggregate statistics regarding page load speed, canvas sequence rendering times, and navigation drop-off rates to optimize user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                3. Third-Party Integrations
              </h2>
              <p>
                Our site incorporates verified third-party technical modules, specifically Google Maps for office geolocation and Web3Forms for secure inquiry transmission. These providers may set technical cookies subject to their independent privacy standards. We do not host third-party advertisement or behavioral tracking cookies.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                4. Managing &amp; Disabling Cookies
              </h2>
              <p>
                You can manage or clear stored cookies at any time via your browser settings (Chrome, Safari, Edge, Firefox). Note that disabling all cookies may impair the interactive RFQ calculator or form submission features.
              </p>
            </div>

          </div>
        </div>
      </main>

      
    </div>
  );
}
