'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Hammer, 
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
  AlertTriangle,
  Recycle
} from 'lucide-react';

const demolitionImages = [
  { src: '/Demolition/Image1.avif', title: 'High-Reach Excavator Breaking Concrete Slab' },
  { src: '/Demolition/Image2.avif', title: 'Controlled Structural Beam Dismantling' },
  { src: '/Demolition/Image3.avif', title: 'Hydraulic Breaker Crushing Reinforced Column' },
  { src: '/Demolition/Image4.avif', title: 'Commercial Multi-Level Selective Teardown' },
  { src: '/Demolition/Image5.avif', title: 'Industrial Factory Floor Concrete Pulverizing' },
  { src: '/Demolition/Image6.avif', title: 'Debris Sorting, Segregation & Material Hauling' },
  { src: '/Demolition/Image7.avif', title: 'Heavy Foundation Breaking with Hydraulic Attachment' },
  { src: '/Demolition/Image8.avif', title: 'Tata Hitachi Tracked Excavator at Active Demolition Site' },
  { src: '/Demolition/Image9.avif', title: 'Precision Shear Cutting of Industrial Steel Truss' },
  { src: '/Demolition/Image10.avif', title: 'Diamond Core Stitch Drilling on Heavy Shear Wall' },
  { src: '/Demolition/Image11.avif', title: 'Silent Chemical Demolition Grout Injection Site' },
  { src: '/Demolition/Image12.avif', title: 'Controlled Facade Stripping & Safety Netting' },
  { src: '/Demolition/Image13.avif', title: 'Mass Concrete Rubble Crushing & Loading' },
  { src: '/Demolition/Image14.avif', title: 'Industrial Storage Tank & Vessel Decommissioning' },
  { src: '/Demolition/Image15.avif', title: 'Interior Strip-Out & Architectural Stripping' },
  { src: '/Demolition/Image16.avif', title: 'Site Ground Clearing & Final Grade Restoration' },
  { src: '/Demolition/Image17.avif', title: 'Heavy Reinforced Pedestal Demolition' },
  { src: '/Demolition/Image18.avif', title: 'Zero-Incident Controlled Urban Demolition Completed' },
];

export default function DemolitionServicesPage() {
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
            className="font-heading font-black text-[12vw] sm:text-[9.5vw] md:text-[8.5vw] lg:text-[7.5vw] xl:text-[155px] 2xl:text-[190px] tracking-tight uppercase whitespace-nowrap"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.18)',
              color: 'transparent',
              lineHeight: 0.85,
            }}
          >
            DEMOLITION
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/20 border border-[#0f8a3c]/40 text-[#0f8a3c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <Hammer className="w-3.5 h-3.5" />
              <span>DIVISION 02 — CONTROLLED DEMOLITION &amp; DISMANTLING</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-6">
              Precision Controlled Demolition &amp; <span className="text-[#0f8a3c]">Plant Dismantling</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-body leading-relaxed mb-8 max-w-2xl">
              Engineered structural demolition, industrial decommissioning, diamond wire sawing, and silent chemical rock splitting across Mumbai, Thane, and Maharashtra. Executed with institutional safety protocols, zero collateral damage, and company-owned heavy hydraulic machinery.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Request Demolition Site Survey
              </button>
              <a
                href="https://wa.me/919594511900?text=Hello%20ProNirmaan%20Solutions,%20I%20am%20interested%20in%20your%20Controlled%20Demolition%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demolition Disciplines Cards with Curved Borders */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0f8a3c] block mb-2 font-condensed">
            DISCIPLINE &amp; METHODOLOGY
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-stone-900">
            Engineered Demolition Methodologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-7 sm:p-8 border border-stone-200/90 rounded-3xl shadow-2xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
            <div className="w-11 h-11 bg-[#0f8a3c]/10 text-[#0f8a3c] flex items-center justify-center rounded-2xl mb-4">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg uppercase text-stone-900 mb-2">
              Mechanical High-Reach Demolition
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-body mb-4">
              Company-owned Tata Hitachi EX210 LC excavators equipped with hydraulic rock breakers, steel shears, and pulverizers for multi-level structures.
            </p>
            <ul className="space-y-1.5 text-[11px] text-stone-700 font-body">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Top-Down Floor-by-Floor Deconstruction</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> High-Velocity Mist Dust Suppression</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Heavy Reinforced Concrete Breaking</li>
            </ul>
          </div>

          <div className="bg-white p-7 sm:p-8 border border-stone-200/90 rounded-3xl shadow-2xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
            <div className="w-11 h-11 bg-[#0f8a3c]/10 text-[#0f8a3c] flex items-center justify-center rounded-2xl mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg uppercase text-stone-900 mb-2">
              Diamond Core Cutting &amp; Wire Sawing
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-body mb-4">
              Vibration-free surgical concrete cutting for retrofits, opening cutouts, and massive structural member removal without micro-fracturing adjacent structures.
            </p>
            <ul className="space-y-1.5 text-[11px] text-stone-700 font-body">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Core Drilling from 25mm to 600mm dia</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Diamond Wire Slicing up to 5-meter Depth</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Zero Vibration Impact on Sensitive Zones</li>
            </ul>
          </div>

          <div className="bg-white p-7 sm:p-8 border border-stone-200/90 rounded-3xl shadow-2xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
            <div className="w-11 h-11 bg-[#0f8a3c]/10 text-[#0f8a3c] flex items-center justify-center rounded-2xl mb-4">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg uppercase text-stone-900 mb-2">
              Silent Chemical Rock Splitting
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-body mb-4">
              Non-explosive chemical soundless cracking agent (Expansive Mortar) generating 18,000 psi expansive pressure to crack massive bedrock and concrete safely.
            </p>
            <ul className="space-y-1.5 text-[11px] text-stone-700 font-body">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Safe for Dense Urban &amp; Hospital Vicinities</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Zero Flying Rocks, Noise or Vibration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> No Explosive Permits Required</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Demolition Photo Gallery (18 Photos) */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 border-t border-stone-300/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0f8a3c] block mb-2 font-condensed">
              FIELD PHOTOGRAPHIC EVIDENCE
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-stone-900">
              Demolition &amp; Dismantling Gallery ({demolitionImages.length} Photos)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-body mt-2 max-w-2xl">
              Authentic on-site photographs highlighting controlled mechanical demolition, diamond cutting, and industrial plant teardowns across residential, commercial, and manufacturing facilities.
            </p>
          </div>
          <div className="text-xs text-stone-500 font-medium">
            Click any photo to view full-resolution
          </div>
        </div>

        {/* Gallery Grid with Smooth Curved Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {demolitionImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImage(img.src)}
              className="group relative h-64 bg-stone-900 rounded-3xl overflow-hidden cursor-pointer border border-stone-300/80 hover:border-[#0f8a3c] transition-all shadow-xs hover:shadow-xl transform hover:-translate-y-1"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] text-[#0f8a3c] font-bold uppercase tracking-wider block font-condensed">
                  Demolition Photo #{idx + 1}
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

      {/* Safety & Recycling Assurance with Soft Curved Cards */}
      <section className="bg-stone-200/60 py-12 border-t border-stone-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex items-start gap-4 bg-white/70 p-5 rounded-2xl border border-stone-300/80 shadow-2xs">
            <ShieldCheck className="w-8 h-8 text-[#0f8a3c] shrink-0 mt-1" />
            <div>
              <h4 className="font-heading font-bold text-sm uppercase text-stone-900 mb-1">
                Zero Collateral Damage Protocol
              </h4>
              <p className="text-xs text-stone-600 font-body leading-relaxed">
                Comprehensive pre-demolition dilapidation surveys, seismograph vibration monitoring, and safety barrier rigging to protect neighboring properties.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/70 p-5 rounded-2xl border border-stone-300/80 shadow-2xs">
            <Recycle className="w-8 h-8 text-[#0f8a3c] shrink-0 mt-1" />
            <div>
              <h4 className="font-heading font-bold text-sm uppercase text-stone-900 mb-1">
                90%+ Material Reclamation (ISO 14001)
              </h4>
              <p className="text-xs text-stone-600 font-body leading-relaxed">
                On-site rebar extraction, concrete crushing into reusable sub-base aggregate, and certified metal recycling to minimize landfill impact.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/70 p-5 rounded-2xl border border-stone-300/80 shadow-2xs">
            <Truck className="w-8 h-8 text-[#0f8a3c] shrink-0 mt-1" />
            <div>
              <h4 className="font-heading font-bold text-sm uppercase text-stone-900 mb-1">
                Rapid Debris Evacuation Fleet
              </h4>
              <p className="text-xs text-stone-600 font-body leading-relaxed">
                Dedicated dumper trucks, wheel loaders, and municipal-approved disposal tracking for timely and pollution-free site clearance.
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
              PLANNING A BUILDING TEARDOWN OR PLANT DISMANTLING?
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Request a free engineer site inspection &amp; risk assessment.
            </h3>
            <p className="text-xs text-slate-400 font-body mt-2 max-w-xl">
              Our safety engineers will survey structural loads, adjacent utility lines, and provide a fixed-price demolition and material salvage proposal.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
              className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Request Demolition RFP
            </button>
            <Link
              href="/construction-services"
              className="border border-slate-600 hover:border-white text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Civil Construction</span>
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
