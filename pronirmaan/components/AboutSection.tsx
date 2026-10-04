'use client';

import React, { useState } from 'react';
import { Users, Target, Award, ArrowRight, ShieldCheck, Clock, Building2 } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<'story' | 'approach' | 'standards'>('approach');

  const tabContents = {
    story: {
      tagline: 'FROM HUMBLE ROOTS TO REGIONAL BENCHMARK',
      heading: '28 Years of Shaping the Built Environment',
      description:
        'Founded in 1998 in Austin, Texas, Stoneway Construction began with a single flatbed truck and an unwavering dedication to integrity. Over three decades, we have grown into one of the most respected general contracting and civil infrastructure firms in the Southwest, delivering over 450 residential, commercial, and municipal projects.',
      metrics: [
        { label: 'Founded In', value: '1998' },
        { label: 'Completed Projects', value: '450+' },
        { label: 'Craftsmen & Staff', value: '120+' },
      ],
    },
    approach: {
      tagline: 'COLLABORATIVE PRECISION & LEAN EXECUTION',
      heading: 'Integrated Design-Build & Direct Control',
      description:
        'We do not outsource our accountability. By combining in-house BIM 3D spatial modeling, dedicated heavy equipment fleets, and self-performed concrete and structural framing, Stoneway eliminates friction, minimizes schedule creep, and guarantees architectural intent from groundbreaking to final handover.',
      metrics: [
        { label: 'In-House Trades', value: '85%' },
        { label: 'Average Timeline Delivery', value: '99.4%' },
        { label: 'BIM Spatial Accuracy', value: '±2mm' },
      ],
    },
    standards: {
      tagline: 'ZERO-COMPROMISE QUALITY & SAFETY GOVERNANCE',
      heading: 'Engineered for 50+ Years of Resilient Performance',
      description:
        'Every Stoneway job site enforces peer-reviewed QA/QC checkpoints and zero-incident OSHA protocols. We partner with leading material scientists, utilizing low-carbon high-strength concrete mixes and precision laser-guided grading to construct assets that stand strong against time and climate.',
      metrics: [
        { label: 'Safety Incident Rate', value: '0.00' },
        { label: 'Structural Assurance', value: '50 Yrs' },
        { label: 'LEED Certified Builds', value: '64' },
      ],
    },
  };

  const current = tabContents[activeTab];

  return (
    <section id="company" className="relative bg-[#f6f4f0] py-20 sm:py-24 overflow-hidden border-b border-stone-200/70">
      {/* Left Vertical Watermark Text as seen in screenshot */}
      <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden md:flex items-center gap-2 opacity-25">
        <span className="font-heading font-black text-6xl lg:text-7xl tracking-[0.25em] text-stone-400 writing-mode-vertical">
          PRONIRMAAN
        </span>
        <span className="text-[10px] font-bold text-[#0f8a3c] uppercase tracking-[0.3em] writing-mode-vertical pl-1">
          CIVIL WORKS &nbsp;·&nbsp; CONTROL DEMOLITION &nbsp;·&nbsp; EXCAVATION
        </span>
      </div>

      {/* Right Background Architectural Blueprint Technical Wireframe */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden lg:block overflow-hidden">
        <svg
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-stone-800 stroke-current stroke-[0.8]"
        >
          {/* Blueprint grid */}
          <line x1="20" y1="0" x2="20" y2="600" strokeDasharray="4 4" />
          <line x1="80" y1="0" x2="80" y2="600" />
          <line x1="140" y1="0" x2="140" y2="600" strokeDasharray="2 2" />
          <line x1="200" y1="0" x2="200" y2="600" />
          <line x1="260" y1="0" x2="260" y2="600" strokeDasharray="4 4" />
          <line x1="320" y1="0" x2="320" y2="600" />

          {/* Floors */}
          <line x1="0" y1="80" x2="400" y2="80" />
          <line x1="0" y1="160" x2="400" y2="160" />
          <line x1="0" y1="240" x2="400" y2="240" />
          <line x1="0" y1="320" x2="400" y2="320" />
          <line x1="0" y1="400" x2="400" y2="400" />
          <line x1="0" y1="480" x2="400" y2="480" />

          {/* Diagonals / trusses */}
          <line x1="80" y1="80" x2="200" y2="160" />
          <line x1="200" y1="80" x2="80" y2="160" />
          <line x1="200" y1="80" x2="320" y2="160" />
          <line x1="320" y1="80" x2="200" y2="160" />

          <line x1="80" y1="160" x2="200" y2="240" />
          <line x1="200" y1="160" x2="80" y2="240" />
          <line x1="200" y1="160" x2="320" y2="240" />
          <line x1="320" y1="160" x2="200" y2="240" />

          {/* Dimension markings */}
          <circle cx="80" cy="80" r="3" fill="currentColor" />
          <circle cx="200" cy="80" r="3" fill="currentColor" />
          <circle cx="320" cy="80" r="3" fill="currentColor" />
          <circle cx="80" cy="240" r="3" fill="currentColor" />
          <circle cx="200" cy="240" r="3" fill="currentColor" />
          <circle cx="320" cy="240" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#1c2938]">
            ABOUT <span className="text-[#0f8a3c]">PRONIRMAAN</span>
          </h2>
          <div className="w-12 h-[3px] bg-[#0f8a3c] mx-auto mt-3" />
        </div>

        {/* 3 Interactive Cards Row matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {/* Card 1: OUR STORY */}
          <button
            onClick={() => setActiveTab('story')}
            className={`cursor-pointer transition-all duration-200 py-10 px-6 sm:px-8 flex flex-col items-center justify-center text-center shadow-xs ${
              activeTab === 'story'
                ? 'bg-[#0f8a3c] text-white shadow-lg scale-102 z-10'
                : 'bg-white hover:bg-white/90 text-stone-800 border border-stone-200/80 hover:shadow-md'
            }`}
          >
            <div
              className={`mb-4 transition-colors ${
                activeTab === 'story' ? 'text-white' : 'text-stone-800'
              }`}
            >
              <Users className="w-10 h-10 stroke-[1.4]" />
            </div>
            <span
              className={`font-heading font-bold text-sm sm:text-base tracking-widest uppercase ${
                activeTab === 'story' ? 'text-white' : 'text-stone-900'
              }`}
            >
              OUR STORY
            </span>
          </button>

          {/* Card 2: OUR APPROACH (Default active in screenshot) */}
          <button
            onClick={() => setActiveTab('approach')}
            className={`cursor-pointer transition-all duration-200 py-10 px-6 sm:px-8 flex flex-col items-center justify-center text-center shadow-xs ${
              activeTab === 'approach'
                ? 'bg-[#0f8a3c] text-white shadow-lg scale-102 z-10'
                : 'bg-white hover:bg-white/90 text-stone-800 border border-stone-200/80 hover:shadow-md'
            }`}
          >
            <div
              className={`mb-4 transition-colors ${
                activeTab === 'approach' ? 'text-white' : 'text-stone-800'
              }`}
            >
              <Target className="w-10 h-10 stroke-[1.4]" />
            </div>
            <span
              className={`font-heading font-bold text-sm sm:text-base tracking-widest uppercase ${
                activeTab === 'approach' ? 'text-white' : 'text-stone-900'
              }`}
            >
              OUR APPROACH
            </span>
          </button>

          {/* Card 3: OUR STANDARDS */}
          <button
            onClick={() => setActiveTab('standards')}
            className={`cursor-pointer transition-all duration-200 py-10 px-6 sm:px-8 flex flex-col items-center justify-center text-center shadow-xs ${
              activeTab === 'standards'
                ? 'bg-[#0f8a3c] text-white shadow-lg scale-102 z-10'
                : 'bg-white hover:bg-white/90 text-stone-800 border border-stone-200/80 hover:shadow-md'
            }`}
          >
            <div
              className={`mb-4 transition-colors ${
                activeTab === 'standards' ? 'text-white' : 'text-stone-800'
              }`}
            >
              <Award className="w-10 h-10 stroke-[1.4]" />
            </div>
            <span
              className={`font-heading font-bold text-sm sm:text-base tracking-widest uppercase ${
                activeTab === 'standards' ? 'text-white' : 'text-stone-900'
              }`}
            >
              OUR STANDARDS
            </span>
          </button>
        </div>

        {/* Content area reflecting the selected tab */}
        <div className="bg-white border border-stone-200 p-8 sm:p-10 shadow-sm relative animate-in fade-in duration-200">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="md:w-2/3">
              <span className="text-xs font-bold uppercase text-[#0f8a3c] tracking-widest block mb-2 font-condensed">
                {current.tagline}
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-4 leading-tight">
                {current.heading}
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-stone-700">
                <span className="inline-flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-xs">
                  <Building2 className="w-3.5 h-3.5 text-[#0f8a3c]" /> Civil Works & Demolition
                </span>
                <span className="inline-flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0f8a3c]" /> Licensed & Insured
                </span>
                <span className="inline-flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-xs">
                  <Clock className="w-3.5 h-3.5 text-[#0f8a3c]" /> Heavy Plant Equipment
                </span>
              </div>
            </div>

            {/* Metrics column */}
            <div className="md:w-1/3 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stone-200 pt-6 md:pt-0 md:pl-8">
              <div className="space-y-6">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="border-b border-stone-100 pb-3 last:border-none">
                    <span className="block font-heading font-black text-2xl sm:text-3xl text-[#0f8a3c]">
                      {m.value}
                    </span>
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {onLearnMore && (
                <button
                  onClick={onLearnMore}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f8a3c] hover:text-[#0b7331] group cursor-pointer"
                >
                  <span>Company Profile & Certifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
