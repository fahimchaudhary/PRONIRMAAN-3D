'use client';

import React from 'react';
import Image from 'next/image';
import { X, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from './ServicesSection';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuoteForService: (serviceId: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onRequestQuoteForService,
}: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image in modal with angled header accent */}
        <div className="relative h-64 sm:h-72 w-full bg-[#1c2938]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            referrerPolicy="no-referrer"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase text-[#0f8a3c] tracking-widest font-condensed">
              {service.subtitle}
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white mt-1">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-heading font-bold text-base text-stone-900 uppercase tracking-wider mb-2">
              Division Overview
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-stone-500 mb-3">
              Standard Scope of Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.scope.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 bg-[#f6f4f0] border border-stone-200/80 rounded-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0f8a3c] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-stone-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Assurance Strip */}
          <div className="p-4 bg-stone-100 border-l-4 border-[#0f8a3c] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0f8a3c] shrink-0" />
              <div className="text-xs text-stone-700">
                <strong>ProNirmaan Quality Commitment:</strong> Rigorous engineering inspection & 100% OSHA certified operators & crews on site.
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
            <button
              onClick={onClose}
              className="text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              Back to Services
            </button>
            <button
              onClick={() => {
                onRequestQuoteForService(service.id);
                onClose();
              }}
              className="inline-flex items-center gap-2 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-7 py-3 text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              <span>Request Bid for {service.title}</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
