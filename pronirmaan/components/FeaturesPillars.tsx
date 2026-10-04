'use client';

import React, { useState } from 'react';
import { HardHat, ShieldCheck, Coins, Check, Info } from 'lucide-react';

interface PillarDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  stats: string;
  bullets: string[];
}

export default function FeaturesPillars() {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const pillars: PillarDetail[] = [
    {
      id: 'trusted-work',
      icon: (
        <div className="w-12 h-12 flex items-center justify-center text-slate-800">
          <HardHat className="w-9 h-9 stroke-[1.4]" />
        </div>
      ),
      title: 'TRUSTED WORK',
      subtitle: 'Safety, Certifications & Integrity',
      description:
        'With over 28 years of zero-incident milestone projects, our certified master craftsmen and project engineers operate under strict ISO-9001 and OSHA standards.',
      stats: '99.8% On-Schedule Rate',
      bullets: [
        'Master licensed general contractors & engineers',
        'OSHA-compliant job sites with dedicated safety officers',
        'Transparent daily progress logs & milestone validation',
      ],
    },
    {
      id: 'built-to-last',
      icon: (
        <div className="w-12 h-12 flex items-center justify-center text-slate-800">
          <ShieldCheck className="w-9 h-9 stroke-[1.4]" />
        </div>
      ),
      title: 'BUILT TO LAST',
      subtitle: 'Structural Engineering & Longevity',
      description:
        'We engineer structures meant to endure generations. From seismic-rated reinforced foundations to climate-resilient building envelopes, quality is uncompromised.',
      stats: '50-Year Structural Assurance',
      bullets: [
        'ASTM-tested high-performance concrete & structural steel',
        'Advanced thermal & moisture barrier envelope systems',
        'Comprehensive 10-year post-construction warranty',
      ],
    },
    {
      id: 'smart-value',
      icon: (
        <div className="w-12 h-12 flex items-center justify-center text-slate-800">
          <Coins className="w-9 h-9 stroke-[1.4]" />
        </div>
      ),
      title: 'SMART VALUE',
      subtitle: 'Cost Efficiency & Clear Pricing',
      description:
        'Value engineering is in our DNA. We maximize your capital with direct quarry and steel mill sourcing, eliminating middleman markups without sacrificing caliber.',
      stats: '14% Average Capital Savings',
      bullets: [
        'Guaranteed maximum price (GMP) contracting models',
        'Lean procurement with direct manufacturer supply chains',
        'Zero surprise change orders through BIM pre-planning',
      ],
    },
  ];

  return (
    <section className="relative bg-[#f6f4f0] pt-12 sm:pt-16 pb-14 border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Value Columns with subtle vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-300/70">
          {pillars.map((pillar) => {
            const isExpanded = selectedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() =>
                  setSelectedPillar(isExpanded ? null : pillar.id)
                }
                className="group flex flex-col items-center text-center px-4 sm:px-8 py-6 md:py-4 cursor-pointer transition-all duration-200 rounded-sm hover:bg-stone-200/40"
              >
                {/* Clean architectural line icon */}
                <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-200 text-stone-800 group-hover:text-[#0f8a3c]">
                  {pillar.icon}
                </div>

                {/* Title in bold uppercase */}
                <h3 className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-stone-900 group-hover:text-[#0f8a3c] transition-colors">
                  {pillar.title}
                </h3>

                {/* Subtle indicator hint */}
                <span className="mt-1 text-[11px] font-medium text-stone-500 uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Info className="w-3 h-3 text-[#0f8a3c]" /> View Standards
                </span>
              </div>
            );
          })}
        </div>

        {/* Expandable detail card if a user clicks one of the pillars */}
        {selectedPillar && (
          <div className="mt-8 bg-white border border-stone-300 p-6 sm:p-8 shadow-md relative animate-in fade-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 text-xs font-bold uppercase tracking-wider px-2 py-1 bg-stone-100 rounded-xs"
            >
              Close ✕
            </button>

            {(() => {
              const active = pillars.find((p) => p.id === selectedPillar);
              if (!active) return null;
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-[#0f8a3c] rounded-full" />
                      <span className="text-xs font-bold uppercase text-[#0f8a3c] tracking-widest">
                        {active.subtitle}
                      </span>
                    </div>
                    <h4 className="font-heading text-xl sm:text-2xl font-black text-stone-900 mb-3">
                      {active.title}
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      {active.description}
                    </p>
                    <ul className="space-y-2">
                      {active.bullets.map((b, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-stone-700"
                        >
                          <Check className="w-4 h-4 text-[#0f8a3c] shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#f6f4f0] border-l-4 border-[#0f8a3c] p-5 text-center flex flex-col justify-center items-center">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
                      Benchmark Record
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-stone-900 font-heading">
                      {active.stats}
                    </span>
                    <span className="text-[11px] text-stone-500 mt-2">
                      Third-Party Audited (Austin Regional HQ)
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
