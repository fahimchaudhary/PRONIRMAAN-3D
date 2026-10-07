'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building, 
  CheckCircle2, 
  ArrowLeft, 
  HardHat, 
  ShieldCheck, 
  Layers, 
  Truck, 
  Maximize2, 
  X, 
  ChevronRight, 
  MessageSquare,
  FileCheck2
} from 'lucide-react';

const constructionImages = [
  { thumb: '/Construction_projects/IMG-20260207-WA0000-640w.avif', full: '/Construction_projects/IMG-20260207-WA0000.avif', title: 'Reinforced Concrete Framework Casting' },
  { thumb: '/Construction_projects/IMG-20260207-WA0002-640w.avif', full: '/Construction_projects/IMG-20260207-WA0002.avif', title: 'Heavy Foundation Reinforcement & Steel Tying' },
  { thumb: '/Construction_projects/IMG-20260207-WA0003-640w.avif', full: '/Construction_projects/IMG-20260207-WA0003.avif', title: 'Deep Ground Excavation & Trench Shoring' },
  { thumb: '/Construction_projects/IMG-20260207-WA0004-640w.avif', full: '/Construction_projects/IMG-20260207-WA0004.avif', title: 'Structural Column Erection & Alignment' },
  { thumb: '/Construction_projects/IMG-20260207-WA0006-640w.avif', full: '/Construction_projects/IMG-20260207-WA0006.avif', title: 'Industrial Floor Slab Casting & Laser Screeding' },
  { thumb: '/Construction_projects/IMG-20260207-WA0007-640w.avif', full: '/Construction_projects/IMG-20260207-WA0007.avif', title: 'Retaining Wall & Earth Stabilization Works' },
  { thumb: '/Construction_projects/IMG-20260207-WA0008-640w.avif', full: '/Construction_projects/IMG-20260207-WA0008.avif', title: 'Mass Earthwork & Site Grading Operations' },
  { thumb: '/Construction_projects/IMG-20260207-WA0009-640w.avif', full: '/Construction_projects/IMG-20260207-WA0009.avif', title: 'Substructure Waterproofing & Backfilling' },
  { thumb: '/Construction_projects/IMG-20260207-WA0010-640w.avif', full: '/Construction_projects/IMG-20260207-WA0010.avif', title: 'Pre-Engineered Building (PEB) Structural Erection' },
  { thumb: '/Construction_projects/IMG-20260207-WA0011-640w.avif', full: '/Construction_projects/IMG-20260207-WA0011.avif', title: 'Heavy Machinery Site Mobilization' },
  { thumb: '/Construction_projects/IMG-20260207-WA0012-640w.avif', full: '/Construction_projects/IMG-20260207-WA0012.avif', title: 'High-Strength Concrete Pouring with Boom Placer' },
  { thumb: '/Construction_projects/IMG-20260207-WA0013-640w.avif', full: '/Construction_projects/IMG-20260207-WA0013.avif', title: 'Underground Drainage & Utility Conduit Network' },
  { thumb: '/Construction_projects/IMG-20260207-WA0014-640w.avif', full: '/Construction_projects/IMG-20260207-WA0014.avif', title: 'Steel Truss Assembly & Crane Lifts' },
  { thumb: '/Construction_projects/IMG-20260207-WA0015-640w.avif', full: '/Construction_projects/IMG-20260207-WA0015.avif', title: 'Commercial Multi-Level Framing & Formwork' },
  { thumb: '/Construction_projects/IMG-20260207-WA0017-640w.avif', full: '/Construction_projects/IMG-20260207-WA0017.avif', title: 'Highway Sub-Base Compaction & Grading' },
  { thumb: '/Construction_projects/IMG-20260207-WA0018-640w.avif', full: '/Construction_projects/IMG-20260207-WA0018.avif', title: 'Foundational Piling Rig & Soil Stabilization' },
  { thumb: '/Construction_projects/IMG-20260207-WA0019-640w.avif', full: '/Construction_projects/IMG-20260207-WA0019.avif', title: 'Industrial Plant Foundation Base Pour' },
  { thumb: '/Construction_projects/Dismentalling work in progress-640w.avif', full: '/Construction_projects/Dismentalling work in progress.avif', title: 'Structural Civil Decommissioning & Modification' },
  { thumb: '/Construction_projects/Desmelting-640w.avif', full: '/Construction_projects/Desmelting.avif', title: 'Thermal Modification & Heavy Plant Civil Prep' },
  { thumb: '/Construction_projects/Beam removed-640w.avif', full: '/Construction_projects/Beam removed.avif', title: 'Heavy Pre-Stressed Concrete Girder Installation' },
  { thumb: '/Construction_projects/Boiler RHS side sheets removed completely-640w.avif', full: '/Construction_projects/Boiler RHS side sheets removed completely.avif', title: 'Industrial Boiler Bay Civil Structuring' },
  { thumb: '/Construction_projects/Bunker top (TG Building side) 3 columns dismantled-640w.avif', full: '/Construction_projects/Bunker top (TG Building side) 3 columns dismantled.avif', title: 'TG Building Civil Framework Overhaul' },
  { thumb: '/Construction_projects/7 mtr bunker Dismelted safely-640w.avif', full: '/Construction_projects/7 mtr bunker Dismelted safely.avif', title: '7-Meter Bunker High-Elevation Civil Works' },
];

export default function ConstructionServicesPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4f0] text-stone-900 selection:bg-[#0f8a3c] selection:text-white">

      {/* Hero Banner */}
      <section className="relative bg-[#131c26] text-white py-16 lg:py-24 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0f8a3c_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Large Architectural Background Typography */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden flex items-end justify-end px-4 sm:px-8 lg:px-12 leading-none"
        >
          <span 
            className="font-heading font-black text-[10.5vw] sm:text-[8.5vw] md:text-[7.5vw] lg:text-[6.8vw] xl:text-[140px] 2xl:text-[170px] tracking-tight uppercase whitespace-nowrap"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.18)',
              color: 'transparent',
              lineHeight: 0.85,
            }}
          >
            CONSTRUCTION
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/20 border border-[#0f8a3c]/40 text-[#0f8a3c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <Building className="w-3.5 h-3.5" />
              <span>DIVISION 01 — CIVIL ENGINEERING &amp; INFRASTRUCTURE</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-6">
              Precision Civil Construction &amp; <span className="text-[#0f8a3c]">Heavy Earthwork</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-body leading-relaxed mb-8 max-w-2xl">
              Turnkey civil engineering solutions for commercial, industrial, and infrastructure developments. From deep foundation piling to laser-screeded heavy industrial floors and multistory RCC structural frameworks, ProNirmaan executes with zero-tolerance precision and ISO 9001 compliance.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Submit Project BOQ / RFP
              </button>
              <a
                href="https://wa.me/919594511900?text=Hello%20ProNirmaan%20Solutions,%20I%20am%20interested%20in%20your%20Civil%20Construction%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Cards */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0f8a3c] block mb-2 font-condensed">
            TECHNICAL DOMAINS
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-stone-900">
            Comprehensive Civil Construction Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative bg-white p-7 sm:p-8 border border-stone-200/90 hover:border-[#0f8a3c]/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 isolate">
            {/* Bottom-to-Top Sliding Light Green Sheet */}
            <div
              className="absolute inset-0 bg-[#e4f7ea] -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
              aria-hidden="true"
            />
            <div className="w-11 h-11 bg-[#0f8a3c]/10 text-[#0f8a3c] flex items-center justify-center rounded-2xl mb-4 group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg uppercase text-stone-900 mb-2 group-hover:translate-x-1.5 transition-transform duration-300">
              Deep Foundation &amp; Shoring
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-body mb-4 group-hover:text-stone-800 transition-colors">
              Bored cast-in-situ piles, driven piles, raft foundations, and contiguous pile retaining walls engineered for challenging soil strata.
            </p>
            <ul className="space-y-1.5 text-[11px] text-stone-700 font-body">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Bored Pile Diams up to 1200mm</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Soldier Pile &amp; Lagging Systems</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Ground Anchor Tiebacks</li>
            </ul>
          </div>

          <div className="group relative bg-white p-7 sm:p-8 border border-stone-200/90 hover:border-[#0f8a3c]/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 isolate">
            {/* Bottom-to-Top Sliding Light Green Sheet */}
            <div
              className="absolute inset-0 bg-[#e4f7ea] -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
              aria-hidden="true"
            />
            <div className="w-11 h-11 bg-[#0f8a3c]/10 text-[#0f8a3c] flex items-center justify-center rounded-2xl mb-4 group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform duration-300">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg uppercase text-stone-900 mb-2 group-hover:translate-x-1.5 transition-transform duration-300">
              RCC Structural Superstructures
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-body mb-4 group-hover:text-stone-800 transition-colors">
              Monolithic reinforced concrete frames, shear walls, heavy columns, and post-tensioned beam systems for commercial &amp; industrial complexes.
            </p>
            <ul className="space-y-1.5 text-[11px] text-stone-700 font-body">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> M25 to M60 Controlled Grade Concrete</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Aluminum &amp; Doka Formwork Systems</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Seismic Zone III &amp; IV Compliant</li>
            </ul>
          </div>

          <div className="group relative bg-white p-7 sm:p-8 border border-stone-200/90 hover:border-[#0f8a3c]/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 isolate">
            {/* Bottom-to-Top Sliding Light Green Sheet */}
            <div
              className="absolute inset-0 bg-[#e4f7ea] -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
              aria-hidden="true"
            />
            <div className="w-11 h-11 bg-[#0f8a3c]/10 text-[#0f8a3c] flex items-center justify-center rounded-2xl mb-4 group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform duration-300">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg uppercase text-stone-900 mb-2 group-hover:translate-x-1.5 transition-transform duration-300">
              Heavy Industrial Flooring &amp; Pavements
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-body mb-4 group-hover:text-stone-800 transition-colors">
              Jointless laser-screeded concrete floors, FM2/DM2 flatness tolerances, metallic surface hardeners, and heavy logistics yard paving.
            </p>
            <ul className="space-y-1.5 text-[11px] text-stone-700 font-body">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Superflat Warehouse Flooring</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> High Wear Non-Metallic Shakes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Heavy Axle Rigid Pavement Slabs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Construction Photo Gallery (23 Photos) */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 border-t border-stone-300/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0f8a3c] block mb-2 font-condensed">
              REAL SITE DOCUMENTATION
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-stone-900">
              On-Site Construction &amp; Industrial Gallery ({constructionImages.length} Photos)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-body mt-2 max-w-2xl">
              Authentic field photographic documentation from ongoing and completed civil, structural framing, and industrial plant modification projects executed across Maharashtra.
            </p>
          </div>
          <div className="text-xs text-stone-500 font-medium">
            Click any image to enlarge high-resolution view
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {constructionImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImage(img.full || img.thumb)}
              className="group relative h-64 bg-stone-900 rounded-3xl overflow-hidden cursor-pointer border border-stone-300/80 hover:border-[#0f8a3c] transition-all shadow-xs hover:shadow-xl transform hover:-translate-y-1"
            >
              {/* Skeleton placeholder while loading */}
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-800 via-stone-700 to-stone-800 animate-pulse pointer-events-none" />
              <Image
                src={img.thumb}
                alt={img.title}
                fill
                unoptimized
                priority={idx < 4}
                loading={idx < 4 ? undefined : 'lazy'}
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:rotate-[-2.5deg] group-hover:scale-108 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] text-[#0f8a3c] font-bold uppercase tracking-wider block font-condensed">
                  Project Image #{idx + 1}
                </span>
                <p className="text-xs font-semibold leading-tight line-clamp-2">
                  {img.title}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Quality & Safety Assurance */}
      <section className="bg-stone-200/60 py-12 border-t border-stone-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="group relative flex items-start gap-4 bg-white p-6 rounded-2xl border border-stone-300/80 hover:border-[#0f8a3c]/40 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 isolate">
            <div
              className="absolute inset-0 bg-[#e4f7ea] -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
              aria-hidden="true"
            />
            <ShieldCheck className="w-8 h-8 text-[#0f8a3c] shrink-0 mt-1 group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h4 className="font-heading font-bold text-sm uppercase text-stone-900 mb-1 group-hover:translate-x-1 transition-transform duration-300">
                ISO 9001:2015 QA/QC Testing
              </h4>
              <p className="text-xs text-stone-600 font-body leading-relaxed group-hover:text-stone-800 transition-colors">
                Mandatory slump cone, cube compression test reports (7 &amp; 28 days), rebar tensile certification, and batch mix plant calibration records.
              </p>
            </div>
          </div>

          <div className="group relative flex items-start gap-4 bg-white p-6 rounded-2xl border border-stone-300/80 hover:border-[#0f8a3c]/40 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 isolate">
            <div
              className="absolute inset-0 bg-[#e4f7ea] -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
              aria-hidden="true"
            />
            <HardHat className="w-8 h-8 text-[#0f8a3c] shrink-0 mt-1 group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h4 className="font-heading font-bold text-sm uppercase text-stone-900 mb-1 group-hover:translate-x-1 transition-transform duration-300">
                Zero-Incident Site Safety (ISO 45001)
              </h4>
              <p className="text-xs text-stone-600 font-body leading-relaxed group-hover:text-stone-800 transition-colors">
                Full PPE compliance, certified scaffolding inspectors, daily tool-box talks, and hazard identification protocol on every active project.
              </p>
            </div>
          </div>

          <div className="group relative flex items-start gap-4 bg-white p-6 rounded-2xl border border-stone-300/80 hover:border-[#0f8a3c]/40 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 isolate">
            <div
              className="absolute inset-0 bg-[#e4f7ea] -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
              aria-hidden="true"
            />
            <FileCheck2 className="w-8 h-8 text-[#0f8a3c] shrink-0 mt-1 group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h4 className="font-heading font-bold text-sm uppercase text-stone-900 mb-1 group-hover:translate-x-1 transition-transform duration-300">
                Dedicated Machinery Fleet
              </h4>
              <p className="text-xs text-stone-600 font-body leading-relaxed group-hover:text-stone-800 transition-colors">
                Company-owned 20-ton Tata Hitachi EX210 excavators, mobile concrete batching, transit mixers, and vibration rollers for zero mobilization delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-50 text-white hover:text-[#0f8a3c] p-2 cursor-pointer transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={lightboxImage}
              alt="Enlarged view"
              fill
              unoptimized
              priority
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <section className="bg-[#131c26] text-white py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f8a3c] block mb-2 font-condensed">
              START YOUR PROJECT WITH PRONIRMAAN
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Ready to submit your architectural drawings or civil BOQ?
            </h3>
            <p className="text-xs text-slate-400 font-body mt-2 max-w-xl">
              Our engineering estimating desk provides turnkey pricing, bar-bending schedules, and project milestone Gantt charts within 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
              className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Request Civil RFP
            </button>
            <Link
              href="/demolition-services"
              className="border border-slate-600 hover:border-white text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Demolition Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      

      {/* RFP Quote Modal */}
    </div>
  );
}
