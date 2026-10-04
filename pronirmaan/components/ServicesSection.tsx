'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  scope: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'construction',
    title: 'CONSTRUCTION',
    subtitle: 'Commercial & Multi-Story Framing',
    image:
      'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=800&q=80',
    description:
      'Turnkey commercial, institutional, and industrial building construction. We engineer structural steel frames, post-tensioned slabs, and precast concrete envelopes with unmatched precision.',
    scope: [
      'Multi-story commercial office & retail buildings',
      'Industrial warehouses & logistics facilities',
      'Civil infrastructure & institutional structures',
      'Seismic-rated foundation engineering',
    ],
  },
  {
    id: 'renovation',
    title: 'RENOVATION',
    subtitle: 'Adaptive Reuse & Modernization',
    image:
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    description:
      'Transforming existing footprints into modern, energy-efficient spaces. Complete tenant finish-outs, structural retrofitting, and historic restorations executed with minimal tenant disruption.',
    scope: [
      'Commercial tenant improvements & build-outs',
      'Historic masonry & structural seismic retrofitting',
      'HVAC, MEP, and electrical system modernization',
      'Interior architectural space reconfiguration',
    ],
  },
  {
    id: 'planning',
    title: 'PLANNING',
    subtitle: 'Pre-Construction & 3D BIM Design',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    description:
      'Flawless execution begins with rigorous pre-construction planning. Utilizing BIM level-300 digital modeling, clash detection, budget modeling, and municipal permit facilitation.',
    scope: [
      '3D Building Information Modeling (BIM)',
      'Clash detection & value engineering analysis',
      'Comprehensive zoning, permitting & code review',
      'Life-cycle cost optimization & procurement schedules',
    ],
  },
  {
    id: 'concrete-works',
    title: 'CONCRETE WORKS',
    subtitle: 'Cast-In-Place & High-Strength Pouring',
    image:
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80',
    description:
      'Specialized in deep foundation piling, continuous slab pours, tilt-up walls, and polished architectural finishes with laser-screed flatness standards and lab-verified cure strengths.',
    scope: [
      'High-tolerance laser-screed concrete slabs',
      'Reinforced post-tensioned foundation pours',
      'Precast tilt-up walls & architectural columns',
      'Retaining walls & heavy civil earthworks',
    ],
  },
];

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onViewAllServices: () => void;
}

export default function ServicesSection({
  onSelectService,
  onViewAllServices,
}: ServicesSectionProps) {
  return (
    <section id="services" className="relative bg-[#f6f4f0] py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#1c2938]">
            OUR <span className="text-[#0f8a3c]">SERVICES</span>
          </h2>
          <div className="w-12 h-[3px] bg-[#0f8a3c] mx-auto mt-3" />
        </div>

        {/* Services Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Featured Engineer/Supervisor with angled cut */}
          <div className="lg:col-span-4 relative group">
            <div className="relative h-[420px] sm:h-[480px] lg:h-full min-h-[420px] w-full overflow-hidden shadow-lg bg-[#16202c] worker-angled-clip">
              {/* Construction supervisor in safety gear */}
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"
                alt="Stoneway construction supervisor reviewing engineering plans on jobsite"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom information card over image */}
              <div className="absolute bottom-6 left-6 right-8 text-white z-10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-[#0f8a3c] rounded-full animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#0f8a3c]">
                    Field Leadership
                  </span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                  Certified Site Supervisors
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  100% OSHA 30-Hour certified leadership present on every Stoneway job site every single day.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Angled Service Cards Grid */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => onSelectService(service)}
                  className="group flex flex-col bg-white border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
                >
                  {/* Image container with angled trapezoid clip */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-stone-900 service-card-clip">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* Step indicator number */}
                    <div className="absolute top-2 right-2 bg-black/60 text-white font-heading text-[10px] font-bold px-2 py-0.5 backdrop-blur-xs">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Title banner */}
                  <div className="p-4 text-center bg-white border-t border-stone-100 flex-1 flex flex-col items-center justify-center">
                    <h3 className="font-heading font-extrabold text-xs sm:text-sm text-stone-900 tracking-wider uppercase group-hover:text-[#0f8a3c] transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-[10px] text-stone-500 mt-1 uppercase tracking-wide group-hover:text-stone-700 transition-colors line-clamp-1">
                      {service.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Centered CTA button: VIEW SERVICE */}
            <div className="flex justify-center mt-2">
              <button
                onClick={onViewAllServices}
                className="group inline-flex items-center gap-2 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-8 py-3.5 font-bold tracking-widest text-xs uppercase transition-all duration-200 shadow-md cursor-pointer hover:shadow-lg"
              >
                <span>VIEW SERVICE</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
