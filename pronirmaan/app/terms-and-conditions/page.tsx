'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function TermsConditionsPage() {

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4f0] text-stone-900 selection:bg-[#0f8a3c] selection:text-white">
      

      {/* Hero Strip */}
      <section className="relative bg-[#131c26] text-white py-12 lg:py-16 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#0f8a3c] font-bold">Terms &amp; Conditions</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/20 border border-[#0f8a3c]/40 text-[#0f8a3c] text-[11px] font-bold uppercase tracking-widest mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>CONTRACTUAL &amp; OPERATIONAL FRAMEWORK</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="font-body text-xs text-slate-400 mt-2">
            Effective Date: January 2026 · Governing Civil Engineering, Demolition &amp; Machine Rental Works
          </p>
        </div>
      </section>

      {/* Editorial Content */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-12 border border-stone-200 rounded-xs shadow-xs space-y-8 font-body text-sm sm:text-base text-stone-700 leading-relaxed">
            
            <div>
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                1. Service Estimates &amp; Site Inspections
              </h2>
              <p className="mb-2">
                All preliminary quotations and verbal estimates provided via our digital forms, email, or telephone are non-binding estimates based on initial client descriptions.
              </p>
              <p>
                Final, legally binding contracts and Bill of Quantities (BOQ) are issued solely after an on-site structural engineering inspection, utility line confirmation, and site hazard audit conducted by an authorized ProNirmaan Senior Estimator. Quotations remain valid for 30 calendar days from issuance.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                2. Heavy Machine Rental Terms
              </h2>
              <p className="mb-2">
                Deployment of heavy equipment, including the Tata Hitachi Ex210 LC hydraulic excavator, rock breakers, and boom placers, is governed under our standard Heavy Machinery Lease Protocol:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600 text-sm">
                <li>Certified machine operators are provided by ProNirmaan and remain under technical site command.</li>
                <li>Mobilization/demobilization freight charges and statutory transport permits are billed as agreed in the rental schedule.</li>
                <li>Daily, weekly, and monthly rates exclude client-specified overtime or non-standard fuel arrangements unless stipulated in writing.</li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                3. Safety, Permits &amp; Site Access
              </h2>
              <p className="mb-2">
                The client is strictly responsible for providing:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600 text-sm">
                <li>Lawful, undisputed site ownership or valid municipal demolition authorization.</li>
                <li>Clearance and isolation certificates for all electrical, gas, sewer, and telecommunications mains before mechanical deconstruction begins.</li>
                <li>Unrestricted, stable access pathways capable of bearing 25+ ton heavy vehicle traffic.</li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                4. Limitation of Liability
              </h2>
              <p>
                ProNirmaan Solutions executes all projects adhering strictly to ISO 45001 safety frameworks. We shall not be held liable for damages, project delays, or structural settling arising from undisclosed underground utilities, hidden asbestos or chemical hazards, unnotified structural defects, or Force Majeure events (floods, earthquakes, government moratoriums).
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All site photography, architectural diagrams, engineering method statements, and website code are the exclusive intellectual property of ProNirmaan Solutions. Unauthorized reproduction or commercial copying is prohibited under copyright law.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                6. Jurisdiction &amp; Dispute Resolution
              </h2>
              <p>
                Any contractual dispute arising out of works or services executed by ProNirmaan Solutions shall be governed exclusively under the laws of the State of Maharashtra and subject to the exclusive jurisdiction of the competent civil courts in Mumbai, India.
              </p>
            </div>

          </div>
        </div>
      </main>

      
    </div>
  );
}
