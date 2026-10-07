'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, ChevronRight } from 'lucide-react';

export default function DisclaimerPage() {

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4f0] text-stone-900 selection:bg-[#0f8a3c] selection:text-white">
      

      {/* Hero Strip */}
      <section className="relative bg-[#131c26] text-white py-12 lg:py-16 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#0f8a3c] font-bold">Disclaimer</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/20 border border-[#0f8a3c]/40 text-[#0f8a3c] text-[11px] font-bold uppercase tracking-widest mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>STATUTORY LEGAL NOTICE</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight">
            Legal &amp; Engineering Disclaimer
          </h1>
          <p className="font-body text-xs text-slate-400 mt-2">
            Last Updated: January 2026 · Scope of Digital Information &amp; Technical Capabilities
          </p>
        </div>
      </section>

      {/* Editorial Content */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-12 border border-stone-200 rounded-xs shadow-xs space-y-8 font-body text-sm sm:text-base text-stone-700 leading-relaxed">
            
            <div>
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                1. No Formal Engineering Advice
              </h2>
              <p>
                The materials, photographic records, and service outlines presented on this website are published solely for general informational and marketing demonstration purposes. Nothing on this website constitutes formal structural engineering certification, architectural endorsement, or statutory demolition approval until an official contract and method statement have been executed by ProNirmaan Solutions.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                2. Site-Specific Engineering Variables
              </h2>
              <p>
                Controlled demolition, high-reach dismantling, and deep civil excavations involve inherent engineering complexities. Outcomes, timelines, and vibration thresholds vary according to ground geology, age of concrete, proximity to adjacent structures, and underground utility grids. Actual site methodologies are determined strictly following physical on-site core testing and structural surveying.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                3. Heavy Equipment Fleet Availability
              </h2>
              <p>
                Machinery specifications, including the Tata Hitachi Ex210 LC excavator and diamond wire saw assemblies, represent our standard active fleet. Deployment schedules, rental terms, and mobilization availability are subject to active commercial commitments and transit permissions across Maharashtra and Gujarat.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                4. Third-Party Links &amp; References
              </h2>
              <p>
                Any references or hyperlinks to external municipal bodies, certification registries, or software providers are provided for user convenience only. ProNirmaan Solutions exercises no control over third-party website contents and assumes no responsibility for their policies or actions.
              </p>
            </div>

          </div>
        </div>
      </main>

      
    </div>
  );
}
