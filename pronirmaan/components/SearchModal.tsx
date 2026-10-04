'use client';

import React, { useState } from 'react';
import { Search, X, ArrowRight, Building, Hammer, Shield, HardHat } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (target: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectResult,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchableItems = [
    {
      title: 'Commercial Construction & Framing',
      category: 'Services',
      desc: 'Multi-story office, institutional structures, structural steel, deep concrete foundation works.',
      target: 'services',
      icon: Building,
    },
    {
      title: 'Commercial Renovation & Retrofitting',
      category: 'Services',
      desc: 'Tenant finish-outs, adaptive reuse, seismic upgrading, MEP modernization.',
      target: 'services',
      icon: Hammer,
    },
    {
      title: 'Pre-Construction & 3D BIM Planning',
      category: 'Services',
      desc: 'Clash detection, zoning feasibility, budget modeling, virtual project coordination.',
      target: 'services',
      icon: Search,
    },
    {
      title: 'Cast-In-Place Concrete Works',
      category: 'Services',
      desc: 'Laser-screed flat slabs, tilt-up walls, post-tensioned foundations, civil earthworks.',
      target: 'services',
      icon: HardHat,
    },
    {
      title: 'Our Story (Since 1998)',
      category: 'Company',
      desc: 'Over 28 years building the Southwestern corridor across 450+ milestone projects.',
      target: 'company',
      icon: Shield,
    },
    {
      title: 'Our Approach & BIM Integration',
      category: 'Company',
      desc: 'Self-performed core trades, direct equipment fleet, and lean construction management.',
      target: 'company',
      icon: Shield,
    },
    {
      title: 'Zero-Incident Safety Standards',
      category: 'Standards',
      desc: 'OSHA 30-hr site supervisors, ISO-9001 compliance, and 50-year structural assurance.',
      target: 'company',
      icon: HardHat,
    },
  ];

  const filtered = query.trim()
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchableItems.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white max-w-xl w-full shadow-2xl border border-stone-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 bg-stone-100 flex items-center gap-3 border-b border-stone-200">
          <Search className="w-5 h-5 text-stone-500 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search ProNirmaan services, projects, standards..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-stone-900 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-700 text-xs px-1 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-3 max-h-96 overflow-y-auto space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            {query.trim() ? `Found ${filtered.length} results` : 'Popular Searches'}
          </div>

          {filtered.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => {
                  onSelectResult(item.target);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 rounded-xs hover:bg-[#f6f4f0] cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-stone-200 group-hover:bg-[#0f8a3c] text-stone-700 group-hover:text-white transition-colors rounded-xs shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-stone-900 group-hover:text-[#0f8a3c] transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">
                        · {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#0f8a3c] group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            );
          })}
        </div>

        <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-[11px] text-stone-400">
          ProNirmaan Solutions Search Directory
        </div>
      </div>
    </div>
  );
}
