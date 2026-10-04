'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Building2,
  CheckCircle2,
  HardHat,
  ShieldCheck,
  Target,
  Users,
  Wrench,
  ChevronRight,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Calendar,
  FileCheck2,
  Maximize2,
  X,
} from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years Of Field Experience', sub: 'Established Track Record' },
  { value: '150+', label: 'Projects Completed', sub: 'Construction & Demolition' },
  { value: '100%', label: 'Safety Compliance Record', sub: 'Zero High-Risk Incidents' },
  { value: '24/7', label: 'Emergency Site Response', sub: 'Rapid Mobilization' },
];

const leadership = [
  {
    name: 'Mr. Mobin Chaudhary',
    role: 'Managing Director & Partner',
    bio: 'Visionary co-founder who drives organizational expansion, client governance, and comprehensive commercial operations across large-scale civil and demolition undertakings.',
  },
  {
    name: 'Mr. Amin Chaudhary',
    role: 'Managing Director & Partner',
    bio: 'Master strategist overseeing cost engineering, dismantling sequencing, specialized machinery procurement, and rigorous site-level health & safety compliance.',
  },
  {
    name: 'Mr. Asiullah Chaudhary',
    role: 'Demolition Planner & Head Project Manager',
    bio: 'Veteran demolition field commander managing on-site execution teams, hazardous structural dismantling, technical load mitigation, and equipment logistics.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Information Gathering',
    desc: 'Collect comprehensive site blueprints, structural schematics, surrounding zoning restrictions, and client project timelines.',
  },
  {
    step: '02',
    title: 'Site Visit & Engineering Assessment',
    desc: 'Conduct meticulous on-site structural inspections, utility line scanning, hazardous material surveys, and safety risk audits.',
  },
  {
    step: '03',
    title: 'Client Consultation & BOQ Finalization',
    desc: 'Review inspection findings, advise on demolition/construction methodologies, and prepare clear, transparent BOQ estimates.',
  },
  {
    step: '04',
    title: 'Internal Planning & Machinery Mobilization',
    desc: 'Formulate detailed phase-wise method statements, mobilize heavy excavators, diamond wire saws, and deploy certified safety crews.',
  },
  {
    step: '05',
    title: 'Precision Execution & Safe Handover',
    desc: 'Execute work under real-time senior engineering supervision with daily milestone reports, strict debris recycling, and clean site clearance.',
  },
];

const strengths = [
  {
    icon: Award,
    title: 'Over 20 Years Experience',
    desc: 'Deep institutional knowledge tackling complex, high-risk industrial demolitions and commercial civil builds.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Safety Culture',
    desc: 'Strict adherence to ISO 45001 safety frameworks, OSHA guidelines, and comprehensive workforce PPE protocols.',
  },
  {
    icon: Wrench,
    title: 'Owned Heavy Machinery Fleet',
    desc: 'Fleet of Tata Hitachi Ex210 LC excavators, hydraulic rock breakers, and Hilti diamond wire saws ready for instant mobilization.',
  },
  {
    icon: Users,
    title: 'Expert In-House Crew',
    desc: 'Licensed heavy plant operators, structural engineers, and certified gas cutters with specialized dismantling training.',
  },
  {
    icon: Target,
    title: 'Milestone Precision',
    desc: 'Transparent timelines and rigorous project management that keeps construction and deconstruction on schedule.',
  },
  {
    icon: FileCheck2,
    title: 'Regulatory & Clearance Support',
    desc: 'Complete assistance with municipal deconstruction permissions, environmental debris disposal, and pollution board compliance.',
  },
];

export default function AboutUsPage() {
  const [activeCert, setActiveCert] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4f0] text-stone-900 selection:bg-[#0f8a3c] selection:text-white">
      {/* Standard Header */}
      

      {/* Architectural Dark Hero Strip */}
      <section className="relative bg-[#131c26] text-white py-14 lg:py-22 border-b border-stone-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0f8a3c_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Large Architectural Background Typography */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden flex items-end justify-end px-4 sm:px-8 lg:px-12 leading-none"
        >
          <span 
            className="font-heading font-black text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] xl:text-[170px] 2xl:text-[210px] tracking-tight uppercase whitespace-nowrap"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.18)',
              color: 'transparent',
              lineHeight: 0.85,
            }}
          >
            ABOUT US
          </span>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#0f8a3c] font-bold">About Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/20 border border-[#0f8a3c]/40 text-[#0f8a3c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>PRO NIRMAAN SOLUTIONS — ESTABLISHED EXCELLENCE</span>
            </div>
            
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight mb-6">
              Engineered For Impact, <span className="text-[#0f8a3c]">Built With Precision</span>
            </h1>

            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Founded on rigorous civil standards and controlled demolition expertise, ProNirmaan Solutions delivers turnkey infrastructure, structural deconstruction, and heavy machine rentals across Mumbai, Maharashtra, and beyond.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-8 py-3.5 rounded-xs font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Request Consultation
              </button>
              <a
                href="https://wa.me/919594511900?text=Hello%20ProNirmaan%20Solutions,%20I%20would%20like%20to%20learn%20more%20about%20your%20company."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-slate-200 px-6 py-3.5 rounded-xs font-heading font-bold text-xs uppercase tracking-wider transition-colors border border-stone-700"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0f8a3c]" />
                <span>Direct WhatsApp Inquiries</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-white border-b border-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s, idx) => (
              <div key={idx} className="border-l-2 border-[#0f8a3c] pl-4">
                <div className="font-heading font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
                  {s.value}
                </div>
                <div className="font-heading font-bold text-xs uppercase tracking-wide text-stone-700 mt-1">
                  {s.label}
                </div>
                <div className="font-body text-[11px] text-stone-600 mt-0.5">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="flex-1 py-16 lg:py-24 space-y-20">

        {/* Section 1: Company Profile & Core Philosophy */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-2">
                OVER TWO DECADES OF DEDICATION
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-stone-900 uppercase tracking-tight leading-snug mb-6">
                Redefining Civil Engineering &amp; High-Risk Deconstruction
              </h2>
              <div className="space-y-4 font-body text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  ProNirmaan Solutions was founded with a single mission: to provide India&apos;s commercial, industrial, and infrastructure developers with safe, technologically superior, and deadline-committed execution.
                </p>
                <p>
                  Whether dismantling multi-story reinforced concrete structures surrounded by sensitive urban density or pouring laser-levelled foundational concrete for heavy industrial manufacturing plants, we balance cutting-edge hydraulic equipment with zero-accident safety compliance.
                </p>
                <p>
                  Operating out of Kurla Andheri Road, Mumbai, our team services both public-sector civil works and private-sector factory turnarounds, ensuring full legal adherence, debris management, and environmentally sound recycling practices.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-stone-200/90 rounded-2xl shadow-2xs">
                  <div className="font-heading font-bold text-xs uppercase tracking-wide text-stone-900">
                    Quality Management
                  </div>
                  <div className="font-body text-xs text-stone-600 mt-1">
                    ISO 9001:2015 Certified System
                  </div>
                </div>
                <div className="p-5 bg-white border border-stone-200/90 rounded-2xl shadow-2xs">
                  <div className="font-heading font-bold text-xs uppercase tracking-wide text-stone-900">
                    Health &amp; Safety Standard
                  </div>
                  <div className="font-body text-xs text-stone-600 mt-1">
                    ISO 45001:2018 Certified Protocols
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Operations & Headquarters Highlights Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#131c26] text-white p-7 sm:p-8 rounded-3xl border border-stone-800 shadow-xl space-y-6">
                <div>
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-1">
                    CENTRAL REGISTERED YARD
                  </span>
                  <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight">
                    Headquarters &amp; Fleet Dispatch
                  </h3>
                  <p className="font-body text-xs text-slate-300 mt-2 leading-relaxed">
                    M.K Compound, Near Maxus Cinema Jarimari, Kurla Andheri Road, Mumbai – 400072.
                  </p>
                </div>

                <div className="space-y-3 border-t border-stone-800/80 pt-5 text-xs font-body">
                  <div className="flex items-center justify-between py-1 border-b border-stone-800/40">
                    <span className="text-slate-400">Operational Reach</span>
                    <span className="font-bold text-white">Mumbai, Maharashtra &amp; Gujarat</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-stone-800/40">
                    <span className="text-slate-400">Emergency Response</span>
                    <span className="font-bold text-[#0f8a3c]">24/7 Rapid Mobilization</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Fleet Availability</span>
                    <span className="font-bold text-white">Tata Hitachi 21-Ton Excavators</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/919594511900?text=Hello%20ProNirmaan%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20company."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0f8a3c] hover:bg-[#0b7331] text-white py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <span>Contact Operations Yard</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Leadership Team */}
        <section id="leadership" className="bg-white border-y border-stone-200 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-2">
                EXECUTIVE GOVERNANCE
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-stone-900 uppercase tracking-tight">
                Meet Our Leadership
              </h2>
              <p className="font-body text-sm text-stone-600 mt-3">
                Decades of hands-on field experience guiding engineering foresight, technical execution, and client trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, i) => (
                <div key={i} className="bg-[#f6f4f0] border border-stone-200/90 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div>
                    {/* Executive Icon matching screenshot */}
                    <div className="w-13 h-13 rounded-2xl bg-[#eaf6ed] border border-[#cbeed8] flex items-center justify-center mb-5 text-[#0f8a3c] group-hover:scale-105 transition-transform shadow-2xs">
                      <Users className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h3 className="font-heading font-black text-xl text-stone-900 tracking-tight leading-snug">
                      {leader.name}
                    </h3>

                    <div className="font-heading font-bold text-xs text-[#0f8a3c] uppercase tracking-wider mt-1.5 mb-5 font-nav">
                      {leader.role}
                    </div>

                    <p className="font-body text-xs sm:text-sm text-stone-600 leading-relaxed pt-4 border-t border-stone-300/60">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 5-Step Process (How We Work) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-2">
              PROVEN METHODOLOGY
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-stone-900 uppercase tracking-tight">
              Our 5-Stage Project Workflow
            </h2>
            <p className="font-body text-sm text-stone-600 mt-3">
              From site feasibility scans to final clearance certificates, every step is rigorously governed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-stone-200/90 p-6 rounded-2xl relative group hover:border-[#0f8a3c] shadow-2xs hover:shadow-md transition-all">
                <div className="font-heading font-black text-3xl text-stone-300 group-hover:text-[#0f8a3c] transition-colors mb-4">
                  {step.step}
                </div>
                <h4 className="font-heading font-bold text-sm text-stone-900 uppercase tracking-tight mb-2">
                  {step.title}
                </h4>
                <p className="font-body text-xs text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Core Strengths */}
        <section className="bg-white border-y border-stone-200 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-2">
                WHY LEADING ENTERPRISES TRUST US
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-stone-900 uppercase tracking-tight">
                Our Core Operational Strengths
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {strengths.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-6 bg-[#f6f4f0] border border-stone-200/90 rounded-2xl flex gap-4 shadow-2xs hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#0f8a3c]/10 text-[#0f8a3c] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-stone-900 uppercase tracking-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-xs text-stone-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Institutional Certifications & Empty Slots */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#131c26] text-white p-8 sm:p-12 border border-stone-800 rounded-3xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-2">
                  COMPLIANCE &amp; ACCREDITATIONS
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight mb-4">
                  ISO Certified for Quality, Safety &amp; Environmental Protection
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  ProNirmaan operates in accordance with internationally recognized standards for quality management and occupational health. Our practices protect property, preserve human life, and satisfy all municipal norms.
                </p>
                <div className="space-y-2 text-xs font-heading font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0f8a3c]" />
                    <span>ISO 9001:2015 — Quality Management Systems Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0f8a3c]" />
                    <span>ISO 45001:2018 — Occupational Health &amp; Safety Management</span>
                  </div>
                </div>
              </div>

              {/* Official Certificates Display */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {/* ISO 9001 Certificate */}
                <div
                  onClick={() => setActiveCert({ src: '/certificates/iso-9001.avif', title: 'ISO 9001:2015 Quality Management Certificate' })}
                  className="bg-white/5 border border-slate-700/80 hover:border-[#0f8a3c] rounded-xl overflow-hidden p-2.5 transition-all duration-300 hover:shadow-2xl group cursor-pointer flex flex-col"
                >
                  <div className="relative w-full aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-inner">
                    <Image
                      src="/certificates/iso-9001.avif"
                      alt="ISO 9001:2015 Certificate"
                      fill
                      unoptimized
                      loading="lazy"
                      className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f8a3c] text-white text-[11px] font-heading font-bold uppercase rounded-md shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5" /> View
                      </span>
                    </div>
                  </div>
                  <div className="pt-2.5 pb-1 px-1 text-center">
                    <div className="font-heading font-bold text-xs uppercase tracking-wide text-white group-hover:text-[#0f8a3c] transition-colors">
                      ISO 9001:2015
                    </div>
                    <div className="font-body text-[10px] text-slate-400 mt-0.5">
                      Quality Management System
                    </div>
                  </div>
                </div>

                {/* ISO 45001 Certificate */}
                <div
                  onClick={() => setActiveCert({ src: '/certificates/iso-45001.avif', title: 'ISO 45001:2018 Occupational Health & Safety Certificate' })}
                  className="bg-white/5 border border-slate-700/80 hover:border-[#0f8a3c] rounded-xl overflow-hidden p-2.5 transition-all duration-300 hover:shadow-2xl group cursor-pointer flex flex-col"
                >
                  <div className="relative w-full aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-inner">
                    <Image
                      src="/certificates/iso-45001.avif"
                      alt="ISO 45001:2018 Certificate"
                      fill
                      unoptimized
                      loading="lazy"
                      className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f8a3c] text-white text-[11px] font-heading font-bold uppercase rounded-md shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5" /> View
                      </span>
                    </div>
                  </div>
                  <div className="pt-2.5 pb-1 px-1 text-center">
                    <div className="font-heading font-bold text-xs uppercase tracking-wide text-white group-hover:text-[#0f8a3c] transition-colors">
                      ISO 45001:2018
                    </div>
                    <div className="font-body text-[10px] text-slate-400 mt-0.5">
                      Occupational Health & Safety
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Bottom Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0f8a3c] to-[#0c7031] text-white p-8 sm:p-12 text-center rounded-xs shadow-lg">
            <h3 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight mb-4">
              Have an Upcoming Civil or Demolition Requirement?
            </h3>
            <p className="font-body text-sm text-emerald-100 max-w-2xl mx-auto mb-8">
              Speak directly with our chief estimators for feasibility assessments, site risk evaluations, and preliminary pricing proposals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-3.5 rounded-xs font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                Submit Project RFP
              </button>
              <Link
                href="/contact"
                className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3.5 rounded-xs font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Contact Kurla Office
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Fullscreen Certificate Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center bg-stone-900 border border-stone-800 rounded-2xl p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 transition-colors cursor-pointer rounded-full hover:bg-white/10"
              aria-label="Close certificate"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[70vh] bg-white rounded-lg overflow-hidden shadow-inner mt-6">
              <Image
                src={activeCert.src}
                alt={activeCert.title}
                fill
                unoptimized
                priority
                className="object-contain p-2"
                sizes="(max-width: 1024px) 90vw, 800px"
              />
            </div>
            <div className="text-center text-white mt-4 font-heading font-bold text-sm sm:text-base uppercase tracking-wider">
              {activeCert.title}
            </div>
          </div>
        </div>
      )}

      {/* Standard Dark 4-Column Footer */}
      

      {/* RFP Quote Modal */}
    </div>
  );
}
