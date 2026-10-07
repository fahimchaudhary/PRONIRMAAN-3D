'use client';

import React, { useState } from 'react';
import { Search, X, ArrowRight, Building, Hammer, Shield, HardHat, Truck, FileText } from 'lucide-react';

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
      title: 'Controlled Demolition Services',
      category: 'Services',
      desc: 'Selective, manual, and heavy mechanical building demolition with dust suppression.',
      target: 'services',
      icon: Hammer,
    },
    {
      title: 'Civil Construction & Infrastructure',
      category: 'Services',
      desc: 'Earthworks, deep excavation, structural RCC framing, industrial floors, and roads.',
      target: 'services',
      icon: Building,
    },
    {
      title: 'Industrial Plant & Factory Dismantling',
      category: 'Services',
      desc: 'Turnkey decommissioning, chemical plants, structural steel dismantling, and asset recovery.',
      target: 'services',
      icon: Truck,
    },
    {
      title: 'Diamond Core Cutting & Wire Sawing',
      category: 'Services',
      desc: 'Vibration-free heavy reinforced concrete section slicing for modifications and openings.',
      target: 'services',
      icon: Hammer,
    },
    {
      title: 'Chemical Rock Splitting / Silent Demolition',
      category: 'Services',
      desc: 'Non-explosive chemical expansive grout splitting for sensitive foundation and rock excavation.',
      target: 'services',
      icon: Shield,
    },
    {
      title: 'Tata Hitachi EX210 LC Excavator Rental',
      category: 'Equipment',
      desc: '20-ton tracked hydraulic excavator with rock breaker attachment and skilled operators.',
      target: 'team',
      icon: Truck,
    },
    {
      title: 'Leadership & Engineering Team',
      category: 'Leadership',
      desc: 'Led by Mr. Mobin Chaudhary, Mr. Amin Chaudhary, and Mr. Asiullah Chaudhary with 15+ years experience.',
      target: 'team',
      icon: HardHat,
    },
    {
      title: 'Certified ISO 9001, 14001 & 45001 Standards',
      category: 'Certifications',
      desc: 'Institutional quality, environmental compliance, and zero-accident occupational safety.',
      target: 'about',
      icon: Shield,
    },
    {
      title: 'Construction Photo Gallery (23 Photos)',
      category: 'Gallery',
      desc: 'View on-site civil construction, reinforced concrete casting, and infrastructure execution.',
      target: 'construction-gallery',
      icon: FileText,
      url: '/construction-services',
    },
    {
      title: 'Demolition Photo Gallery (17 Photos)',
      category: 'Gallery',
      desc: 'High-reach excavator rock breaking, diamond wire cutting, and controlled structural teardowns.',
      target: 'demolition-gallery',
      icon: FileText,
      url: '/demolition-services',
    },
    {
      title: 'Regional Offices in Mumbai & Thane',
      category: 'Contact',
      desc: 'Branch 1 in Evershine City, Vasai East; Branch 2 in Valivali Gaon, Badlapur West.',
      target: 'contact',
      icon: Building,
    },
  ];

  const filtered = query.trim()
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchableItems.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white max-w-xl w-full shadow-2xl border border-stone-200 rounded-3xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 bg-stone-100 flex items-center gap-3 border-b border-stone-200">
          <Search className="w-5 h-5 text-stone-500 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search ProNirmaan services, projects, machinery, contacts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-stone-900 focus:outline-none font-medium font-body"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-700 text-xs px-1 cursor-pointer font-body"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-3 max-h-96 overflow-y-auto space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400 font-condensed">
            {query.trim() ? `Found ${filtered.length} matches` : 'Quick Directory'}
          </div>

          {filtered.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => {
                  if (item.url) {
                    window.location.href = item.url;
                  } else {
                    onSelectResult(item.target);
                    onClose();
                  }
                }}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-[#f6f4f0] cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-stone-200 group-hover:bg-[#0f8a3c] text-stone-700 group-hover:text-white transition-colors rounded-xl shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-stone-900 group-hover:text-[#0f8a3c] transition-colors font-heading">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold font-condensed">
                        · {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5 font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#0f8a3c] group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            );
          })}
        </div>

        <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-[11px] text-stone-400 font-body">
          ProNirmaan Solutions — Civil Engineering &amp; Controlled Demolition Directory
        </div>
      </div>
    </div>
  );
}
