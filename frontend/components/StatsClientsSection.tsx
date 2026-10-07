'use client';

import React from 'react';
import Image from 'next/image';

const clientLogos = [
  { name: 'Dalmia Bharat Limited', src: '/clients/dalmia.avif', scale: 'scale-[1.0]' },
  { name: 'Prism Johnson Cement', src: '/clients/prism-cement.avif', scale: 'scale-[0.95]' },
  { name: 'Jaypee Cement', src: '/clients/jaypee-cement.avif', scale: 'scale-[1.0]' },
  { name: 'MP Birla Group', src: '/clients/mp-birla.avif', scale: 'scale-[1.0]' },
  { name: 'Shree Cement Limited', src: '/clients/shree-cement.avif', scale: 'scale-[0.95]' },
  { name: 'JK Cement Ltd.', src: '/clients/jk-cement.avif', scale: 'scale-[1.0]' },
];

export default function StatsClientsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f6f4f0] border-b border-stone-200/80 overflow-hidden font-body relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f8a3c]/10 border border-[#0f8a3c]/25 text-[#0f8a3c] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3 font-nav">
          <span className="w-2 h-2 rounded-full bg-[#0f8a3c] animate-pulse" />
          <span>OUR CLIENTELE</span>
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
          Trusted by <span className="text-[#0f8a3c]">Industry Leaders</span>
        </h2>

        <p className="text-stone-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed font-body">
          Delivering high-precision civil engineering, controlled demolition, and plant deconstruction for premier enterprises across India.
        </p>
      </div>

      {/* Infinite Logo Marquee with Gradient Fade Edges */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        {/* Left Edge Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#f6f4f0] to-transparent z-10 pointer-events-none" />

        {/* Right Edge Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#f6f4f0] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-5 sm:gap-8">
          {/* First Set of Logos */}
          {clientLogos.map((client, idx) => (
            <div
              key={`client-1-${idx}`}
              className="bg-white border border-stone-200/90 rounded-2xl px-6 py-3 w-56 sm:w-64 lg:w-72 h-24 sm:h-28 lg:h-32 flex items-center justify-center shrink-0 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              <div className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${client.scale}`}>
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  unoptimized
                  loading="lazy"
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 224px, 288px"
                />
              </div>
            </div>
          ))}

          {/* Duplicate Set for Seamless Infinite Loop */}
          {clientLogos.map((client, idx) => (
            <div
              key={`client-2-${idx}`}
              className="bg-white border border-stone-200/90 rounded-2xl px-6 py-3 w-56 sm:w-64 lg:w-72 h-24 sm:h-28 lg:h-32 flex items-center justify-center shrink-0 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              <div className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${client.scale}`}>
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  unoptimized
                  loading="lazy"
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 224px, 288px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
