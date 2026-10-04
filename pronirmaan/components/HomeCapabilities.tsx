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
      image: '/RentMachine/image.png',
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

        {/* 3 Executive Gateway Cards with Modern Curved Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col bg-white border border-stone-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Banner */}
                <div className="relative h-56 sm:h-64 w-full bg-stone-900 overflow-hidden rounded-t-3xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 font-nav border border-white/10 rounded-full">
                    {item.tag}
                  </div>

                  {/* Icon on bottom right */}
                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-2xl bg-[#0f8a3c] text-white flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-black text-xl text-stone-900 group-hover:text-[#0f8a3c] transition-colors mb-3 leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-6 border-t border-stone-200/80 pt-4">
                      {item.highlights.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0f8a3c] mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gateway Navigation Link */}
                  <Link
                    href={item.pageUrl}
                    className="inline-flex items-center justify-between w-full bg-stone-50 hover:bg-[#0f8a3c] text-stone-800 hover:text-white border border-stone-200 hover:border-[#0f8a3c] px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 font-nav shadow-2xs"
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
