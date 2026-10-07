'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4f0] text-stone-900 selection:bg-[#0f8a3c] selection:text-white">
      

      {/* Hero Strip */}
      <section className="relative bg-[#131c26] text-white py-12 lg:py-16 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#0f8a3c] font-bold">Privacy Policy</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/20 border border-[#0f8a3c]/40 text-[#0f8a3c] text-[11px] font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LEGAL &amp; DATA GOVERNANCE</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-body text-xs text-slate-400 mt-2">
            Last Updated: January 2026 · Governed by Indian Information Technology Act &amp; SPDI Rules
          </p>
        </div>
      </section>

      {/* Editorial Content */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-12 border border-stone-200 rounded-xs shadow-xs space-y-8 font-body text-sm sm:text-base text-stone-700 leading-relaxed">
            
            <div>
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-2">
                ProNirmaan Solutions (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;) collects data essential to evaluate civil engineering works, structural demolition projects, and heavy equipment logistics:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600 text-sm">
                <li><strong>Contact Identifiers:</strong> Name, professional title, corporate email address, and verified 10-digit mobile number.</li>
                <li><strong>Project Specifications:</strong> Site address, structural drawings, square footage, CAD files, photographs of structures, and equipment access parameters.</li>
                <li><strong>Technical Telemetry:</strong> Standard non-identifying browser logs, device types, and page access timestamps.</li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-2">
                Collected information is strictly utilized to deliver contractual engineering and contracting services:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600 text-sm">
                <li>Conducting comprehensive on-site structural feasibility and hazard audits.</li>
                <li>Preparing binding Bill of Quantities (BOQ) and method statements.</li>
                <li>Deploying certified heavy equipment (Tata Hitachi Ex210, wire saws) and workforce teams.</li>
                <li>Submitting statutory municipal notifications and debris transport manifests.</li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                3. Data Sharing &amp; Client Non-Disclosure
              </h2>
              <p>
                We do not sell, rent, or monetize client data under any circumstances. Information is disclosed solely to authorized project managers, structural consultants, and government or municipal authorities when mandated by safety and building regulations.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                4. Data Security &amp; Retention
              </h2>
              <p>
                All structural blueprints, quotation records, and communication histories are archived within secured cloud databases with role-based encryption. Data is retained for the statutory period required under Indian construction contract laws.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="font-heading font-black text-xl text-stone-900 uppercase tracking-tight mb-3">
                5. Contact Administrative Office
              </h2>
              <p className="mb-2">
                For data access requests or privacy inquiries, contact our central Mumbai office:
              </p>
              <div className="p-4 bg-[#f6f4f0] border border-stone-200 text-xs font-heading font-semibold text-stone-800 space-y-1">
                <div>ProNirmaan Solutions Compliance Officer</div>
                <div>Shop No 7, 2nd Floor, M.K Compound, Kurla Andheri Road, Mumbai – 400072</div>
                <div>Email: <a href="mailto:contact@pronirmaansolutions.com" className="text-[#0f8a3c] underline">contact@pronirmaansolutions.com</a></div>
                <div>Phone: +91 9594511900</div>
              </div>
            </div>

          </div>
        </div>
      </main>

      
    </div>
  );
}
