'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Hammer, Building2, Truck, ShieldAlert } from 'lucide-react';

interface HomeCapabilitiesProps {
  onOpenQuote?: () => void;
}

export default function HomeCapabilities({ onOpenQuote }: HomeCapabilitiesProps) {
  const capabilities = [
    {
      id: 'demolition',
      tag: 'CORE SPECIALIZATION',
      title: 'Controlled Demolition & Dismantling',
      icon: Hammer,
      image: '/Demolition/Image12-640w.avif',
      pageUrl: '/demolition-services',
      description:
        'Controlled mechanical demolition, silent chemical expansive demolition, diamond wire cutting, and 7m+ industrial silo and bunker dismantling with zero collateral vibration.',
      highlights: [
        'Commercial & industrial high-reach dismantling',
        'Chemical non-explosive silent cracking',
        'Diamond wire sawing for reinforced RCC',
        'Industrial plant decommissioning & scrap buyback',
      ],
      ctaText: 'EXPLORE DEMOLITION SERVICES',
    },
    {
      id: 'construction',
      tag: 'TURNKEY INFRASTRUCTURE',
      title: 'Civil & Commercial Construction',
      icon: Building2,
      image: '/portfolio/apartment-640w.avif',
      pageUrl: '/construction-services',
      description:
        'From deep foundation piling and raft footings to structural fabrication and precast erection. We deliver heavy industrial warehouses, factory sheds, and commercial towers.',
      highlights: [
        'Industrial sheds, factories & heavy warehouses',
        'Seismic Zone III/IV compliant RCC structures',
        'Deep foundation piling & retention walls',
        'Turnkey architectural & MEP execution',
      ],
      ctaText: 'EXPLORE CONSTRUCTION SERVICES',
    },
    {
      id: 'fleet-rental',
      tag: 'PROPRIETARY MACHINERY',
      title: 'Heavy Equipment & Fleet Rental',
      icon: Truck,
      image: '/RentMachine/image-640w.webp',
      pageUrl: '/contact',
      description:
        'Immediate mobilization of our dedicated fleet of Tata Hitachi EX210 LC excavators with rock breaker attachments, hydraulic shear cutters, and experienced certified operators.',
      highlights: [
        'Tata Hitachi EX210 LC heavy excavators',
        'Hydraulic rock breakers & shear attachments',
        'Daily, weekly & monthly project rental plans',
        'Fully certified operators & site technicians',
      ],
      ctaText: 'INQUIRE ABOUT FLEET MOBILIZATION',
    },
  ];

  return (
    <section id="capabilities" className="py-20 sm:py-24 bg-white border-b border-stone-200/80 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f8a3c] uppercase tracking-widest font-heading mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0f8a3c]" />
              <span>CORE SECTOR CAPABILITIES</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 uppercase tracking-tight">
              Specialized Engineering <span className="text-[#0f8a3c]">Solutions</span>
            </h2>
            <p className="text-stone-600 max-w-2xl text-sm sm:text-base mt-2">
              Comprehensive turnkey capabilities backed by in-house heavy machinery, certified site engineers, and strict ISO compliance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg font-nav cursor-pointer"
            >
              <span>REQUEST ESTIMATION / RFP</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 3 Executive Gateway Cards styled like MSV Freight (Light green card background on hover, dark stable text) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col bg-white hover:bg-[#eaf7ee] border border-stone-200/90 hover:border-[#0f8a3c]/35 p-4 sm:p-5 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 isolate"
              >
                {/* Image Banner (Nested inside card with clean rounded frame) */}
                <div className="relative h-56 sm:h-64 w-full bg-stone-900 overflow-hidden rounded-2xl border-2 border-white shadow-sm mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 font-nav border border-white/10 rounded-full">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title + Icon Row (Title stays dark, NOT green; Icon on the right) */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-heading font-black text-xl sm:text-2xl text-stone-900 leading-snug tracking-tight">
                        {item.title}
                      </h3>
                      <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/80 group-hover:border-[#0f8a3c]/30 group-hover:bg-[#0f8a3c] text-stone-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>
                    
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 font-body">
                      {item.description}
                    </p>

                    {/* Highlight Chips / Badges (Styled like MSV Freight's rounded tags) */}
                    <div className="flex flex-wrap gap-2 mb-6 pt-3 border-t border-stone-200/70 group-hover:border-[#0f8a3c]/20 transition-colors">
                      {item.highlights.map((bullet, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider bg-white text-stone-700 px-3 py-1 rounded-full border border-stone-200/80 group-hover:border-[#0f8a3c]/30 shadow-2xs transition-all"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Gateway Navigation Link */}
                  <Link
                    href={item.pageUrl}
                    className="mt-auto inline-flex items-center justify-between w-full bg-white group-hover:bg-[#0f8a3c] text-stone-800 group-hover:text-white border border-stone-200/90 group-hover:border-[#0f8a3c] px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 font-nav shadow-2xs group-hover:shadow-md cursor-pointer"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
