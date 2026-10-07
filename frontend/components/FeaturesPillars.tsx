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
        <div className="w-16 h-16 flex items-center justify-center text-slate-800">
          <HardHat className="w-12 h-12 stroke-[1.5]" />
        </div>
      ),
      title: 'TRUSTED WORK',
      subtitle: 'Safety, Certifications & Integrity',
      description:
        'With over 15+ years of zero-incident milestone projects, our certified engineers and licensed operators adhere strictly to ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 quality, environmental, and occupational safety standards.',
      stats: '100% Zero-Incident Rate',
      bullets: [
        'ISO 9001:2015, 14001:2015 & 45001:2018 Certified company',
        'Certified diamond wire cutting specialists & demolition experts',
        'Rigorous PPE protocols, hazard mapping & site barricading',
      ],
    },
    {
      id: 'built-to-last',
      icon: (
        <div className="w-16 h-16 flex items-center justify-center text-slate-800">
          <ShieldCheck className="w-12 h-12 stroke-[1.5]" />
        </div>
      ),
      title: 'BUILT TO LAST',
      subtitle: 'Civil Construction & Engineering Longevity',
      description:
        'We construct residential, commercial, and industrial facilities engineered for longevity. From seismic-compliant RCC foundations to precision structural fabrication, every project meets the highest Indian Standards (IS codes).',
      stats: '500+ Landmark Deliveries',
      bullets: [
        'High-grade M25-M60 concrete mixes with certified lab batch reports',
        'Seismic Zone III/IV compliant structural reinforcement design',
        'Turnkey execution: from excavation and plinth to final finishing',
      ],
    },
    {
      id: 'smart-value',
      icon: (
        <div className="w-16 h-16 flex items-center justify-center text-slate-800">
          <Coins className="w-12 h-12 stroke-[1.5]" />
        </div>
      ),
      title: 'SMART VALUE',
      subtitle: 'Transparent Estimation & Dedicated Equipment Fleet',
      description:
        'We own and deploy our proprietary heavy machinery—including Tata Hitachi EX200 LC Super excavators, diamond wire saws, and concrete crushers—eliminating intermediary rental markups.',
      stats: '15-20% Direct Cost Savings',
      bullets: [
        'Zero middleman equipment markups via our dedicated heavy fleet',
        'Transparent itemized BOQ with zero surprise change orders',
        'Controlled recycling and scrap buyback value optimization',
      ],
    },
  ];

  return (
    <section className="relative bg-[#f6f4f0] pt-14 sm:pt-20 pb-16 sm:pb-20 border-b border-stone-200/60 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Value Pillars with soft curved cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const isExpanded = selectedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() =>
                  setSelectedPillar(isExpanded ? null : pillar.id)
                }
                className={`group flex flex-col items-center text-center px-8 py-8 sm:py-10 cursor-pointer transition-all duration-300 rounded-2xl border ${
                  isExpanded
                    ? 'bg-[#eaf7ee] border-[#0f8a3c] shadow-xl -translate-y-1.5'
                    : 'bg-white hover:bg-[#eaf7ee] border-stone-200/90 hover:border-[#0f8a3c]/35 shadow-xs hover:shadow-lg hover:-translate-y-1.5'
                }`}
              >
                {/* Clean architectural line icon */}
                <div className="mb-5 transform group-hover:-translate-y-1 transition-transform duration-200 text-stone-800 group-hover:text-[#0f8a3c]">
                  {pillar.icon}
                </div>

                {/* Title in bold uppercase (Stays dark text, not green) */}
                <h3 className="font-heading font-black text-xl sm:text-2xl tracking-wide text-stone-900 transition-colors">
                  {pillar.title}
                </h3>

                {/* Subtle indicator hint */}
                <span className="mt-3 text-xs sm:text-sm font-semibold text-stone-500 uppercase tracking-widest flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Info className="w-3.5 h-3.5 text-[#0f8a3c]" /> View Standards
                </span>
              </div>
            );
          })}
        </div>

        {/* Expandable detail card if a user clicks one of the pillars */}
        {selectedPillar && (
          <div className="mt-8 bg-white border border-stone-300 p-6 sm:p-8 rounded-2xl shadow-xl relative animate-in fade-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-full cursor-pointer transition-colors"
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
                      <span className="text-xs font-bold uppercase text-[#0f8a3c] tracking-widest font-heading">
                        {active.subtitle}
                      </span>
                    </div>
                    <h4 className="font-heading text-xl sm:text-2xl font-black text-stone-900 mb-3">
                      {active.title}
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4 font-body">
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

                  <div className="bg-[#f6f4f0] border-l-4 border-[#0f8a3c] p-6 text-center flex flex-col justify-center items-center rounded-xl">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
                      Benchmark Record
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-stone-900 font-heading">
                      {active.stats}
                    </span>
                    <span className="text-[11px] text-stone-500 mt-2">
                      ISO 9001:2015 Audited (Mumbai / Thane HQ)
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
