'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  HardHat,
  Target,
  Award,
  Users,
  Wrench,
  Truck,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  X,
  FileCheck2,
} from 'lucide-react';

const teamCrews = [
  {
    image: '/OurTeam/T1-640w.avif',
    full: '/OurTeam/T1.avif',
    title: 'On-site Operations Crew',
    subtitle: 'Controlled Demolition & Plant Dismantling',
    desc: 'Frontline specialists executing controlled building deconstruction, heavy steel cutting, and structural load isolation under senior safety command.',
  },
  {
    image: '/OurTeam/T2-640w.avif',
    full: '/OurTeam/T2.avif',
    title: 'Technical Engineering Team',
    subtitle: 'Structural Analysis & CAD Planning',
    desc: 'Civil engineers responsible for feasibility studies, load distribution modeling, temporary shoring designs, and method statements.',
  },
  {
    image: '/OurTeam/T3-640w.avif',
    full: '/OurTeam/T3.avif',
    title: 'Project Supervisors',
    subtitle: 'Site Logistics & Milestone Tracking',
    desc: 'On-ground superintendents ensuring zero-tolerance adherence to project timelines, labor safety gear, and daily client status reporting.',
  },
  {
    image: '/OurTeam/T4-640w.avif',
    full: '/OurTeam/T4.avif',
    title: 'Heavy Machinery Operators',
    subtitle: 'Tata Hitachi Ex210, Rock Breakers & Excavators',
    desc: 'Govt-licensed, certified hydraulic plant operators with thousands of operating hours handling heavy excavators and high-reach shears.',
  },
  {
    image: '/OurTeam/T5-640w.avif',
    full: '/OurTeam/T5.avif',
    title: 'Dismantling Specialists',
    subtitle: 'MS, PEB & Industrial Structure Removal',
    desc: 'Specialized thermal cutting and unbolting technicians handling massive boiler bays, turbine rooms, and old industrial factories.',
  },
  {
    image: '/OurTeam/T6-640w.avif',
    full: '/OurTeam/T6.avif',
    title: 'Site Safety Crew',
    subtitle: 'OSHA & ISO 45001 Compliance Officers',
    desc: 'Dedicated safety marshals managing dust suppression water mist cannons, perimeter barricading, and hazardous substance protocols.',
  },
];

const values = [
  {
    title: 'Safety First',
    desc: 'Every project begins and ends with the safety of our workers and the public. Zero-compromise safety protocols on every site.',
    icon: ShieldCheck,
  },
  {
    title: 'Skilled Workforce',
    desc: 'Our team includes certified engineers, experienced operators, and skilled labourers with decades of on-field expertise.',
    icon: HardHat,
  },
  {
    title: 'Mission Driven',
    desc: "We aim to deliver India's most reliable infrastructure solutions — on time, on budget, and beyond expectations.",
    icon: Target,
  },
  {
    title: 'Proven Track Record',
    desc: '150+ successfully completed projects across Mumbai, Gujarat, and beyond. Our results speak louder than words.',
    icon: Award,
  },
];

const machineSpecs = [
  { label: 'Machine Name', value: 'Tata Hitachi Ex210 LC' },
  { label: 'Classification', value: 'Heavy-Duty Hydraulic Excavator' },
  { label: 'Operating Weight', value: '~21,000 kg (21 Tonnes)' },
  { label: 'Bucket Capacity', value: '0.8 – 1.0 m³ Standard Heavy Rock' },
  { label: 'Operators Provided', value: 'Certified Heavy Plant Operators Included' },
  { label: 'Rental Flexible Plans', value: 'Daily, Weekly, Monthly & Turnkey Contract' },
];

export default function OurTeamPage() {
  const [activeModalImg, setActiveModalImg] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4f0] text-stone-900 selection:bg-[#0f8a3c] selection:text-white">
      {/* Standard Header */}
      

      {/* Hero Strip */}
      <section className="relative bg-[#131c26] text-white py-14 lg:py-22 border-b border-stone-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0f8a3c_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Large Architectural Background Typography */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden flex items-end justify-end px-4 sm:px-8 lg:px-12 leading-none"
        >
          <span 
            className="font-heading font-black text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] xl:text-[170px] 2xl:text-[210px] tracking-tight uppercase whitespace-nowrap"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.18)',
              color: 'transparent',
              lineHeight: 0.85,
            }}
          >
            OUR TEAM
          </span>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#0f8a3c] font-bold">Our Team</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f8a3c]/20 border border-[#0f8a3c]/40 text-[#0f8a3c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>THE HUMAN FORCE BEHIND EVERY PROJECT</span>
            </div>
            
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight mb-6">
              The Team Behind <span className="text-[#0f8a3c]">The Work</span>
            </h1>

            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Experienced engineers, certified heavy plant operators, and rigorous site safety officers who turn complex demolition engineering and infrastructure blueprints into solid realities.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-8 py-3.5 rounded-xs font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Inquire For Your Project
              </button>
              <a
                href="tel:+919594511900"
                className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-slate-200 px-6 py-3.5 rounded-xs font-heading font-bold text-xs uppercase tracking-wider transition-colors border border-stone-700"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0f8a3c]" />
                <span>Call Dispatch: +91 9594511900</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16 lg:py-24 space-y-20">

        {/* Section 1: Meet Our Crew Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-2">
                DEPLOYED ON GROUND
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-stone-900 uppercase tracking-tight">
                Our Operational Divisions
              </h2>
            </div>
            <p className="font-body text-xs sm:text-sm text-stone-600 max-w-md">
              Every on-site technician is background-verified, health-screened, and certified in high-risk structural engineering environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamCrews.map((crew, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col transform hover:-translate-y-1"
              >
                {/* Photo Area */}
                <div
                  className="relative h-64 w-full bg-stone-900 cursor-pointer overflow-hidden rounded-t-3xl"
                  onClick={() => setActiveModalImg({ src: crew.full || crew.image, title: crew.title })}
                >
                  <Image
                    src={crew.image}
                    alt={crew.title}
                    fill
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/70 text-white text-[11px] font-heading font-bold uppercase rounded-full">
                      <Maximize2 className="w-3 h-3 text-[#0f8a3c]" /> View Photo
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-heading font-bold text-[11px] text-[#0f8a3c] uppercase tracking-wider block mb-1">
                      {crew.subtitle}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                      {crew.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {crew.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Core Values ("What Drives Us") */}
        <section className="bg-white border-y border-stone-200 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-2">
                FOUNDATIONAL PRINCIPLES
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-stone-900 uppercase tracking-tight">
                What Drives Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="p-6 sm:p-7 bg-[#f6f4f0] border border-stone-200/90 rounded-3xl flex flex-col justify-between shadow-2xs hover:shadow-md transition-all hover:-translate-y-1">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#0f8a3c]/10 text-[#0f8a3c] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-heading font-bold text-base text-stone-900 uppercase tracking-tight mb-2">
                        {v.title}
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Our Heavy Equipment & Rental Fleet */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-2">
              EQUIPMENT ROSTER &amp; RENTAL SOLUTIONS
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-stone-900 uppercase tracking-tight">
              Owned Heavy Machinery Fleet
            </h2>
            <p className="font-body text-sm text-stone-600 mt-3">
              We own and deploy heavy-duty machinery that powers every project we undertake — also available on flexible commercial lease with certified operators.
            </p>
          </div>

          {/* Featured Machine Card: Tata Hitachi Ex210 LC with Smooth Curved Borders */}
          <div className="bg-white border border-stone-200/90 shadow-md rounded-3xl overflow-hidden mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              <div className="lg:col-span-6 relative h-72 sm:h-96 w-full bg-stone-900 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/RentMachine/image-640w.webp"
                  alt="Tata Hitachi Ex210 LC Excavator ProNirmaan"
                  fill
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0f8a3c] text-white px-3.5 py-1 font-heading font-bold text-xs uppercase tracking-wider rounded-full shadow-xs">
                  Available On Rent
                </div>
              </div>

              <div className="lg:col-span-6">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0f8a3c] block mb-1">
                  FLAGSHIP EXCAVATOR
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-stone-900 uppercase tracking-tight mb-4">
                  Tata Hitachi Ex210 LC
                </h3>
                <p className="font-body text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  The Tata Hitachi Ex210 LC is a powerful 21-ton class hydraulic excavator engineered for heavy-duty earthmoving, deep basement trenching, industrial deconstruction, and mass material handling. Equipped with superior breakout digging force, fuel efficiency, and reinforced undercarriage shoring.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {machineSpecs.map((spec, sidx) => (
                    <div key={sidx} className="p-3 bg-[#f6f4f0] border border-stone-200/80 rounded-xl">
                      <div className="text-[10px] font-heading font-bold text-stone-600 uppercase">
                        {spec.label}
                      </div>
                      <div className="text-xs font-heading font-black text-stone-900">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="tel:+919594511900"
                    className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Get Rental Quote: +91 9594511900</span>
                  </a>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                    className="border border-stone-300 hover:border-stone-800 text-stone-800 px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Request Spec Sheet
                  </button>
                </div>
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Lightbox Modal for Full View */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImg(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#0f8a3c] p-2"
              aria-label="Close photo"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full h-[65vh]">
              <Image
                src={activeModalImg.src}
                alt={activeModalImg.title}
                fill
                unoptimized
                priority
                className="object-contain"
              />
            </div>
            <div className="text-center text-white mt-4 font-heading font-bold text-base uppercase">
              {activeModalImg.title}
            </div>
          </div>
        </div>
      )}

      {/* Standard Footer */}
      

      {/* RFP Quote Modal */}
    </div>
  );
}
