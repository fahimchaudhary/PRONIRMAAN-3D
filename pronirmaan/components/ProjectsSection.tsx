'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'construction' | 'demolition' | 'dismantling';
  categoryLabel: string;
  location: string;
  desc: string;
  image: string;
}

const projectsList: Project[] = [
  {
    id: 1,
    title: 'Urban Tower, Mumbai',
    category: 'construction',
    categoryLabel: 'Civil Construction',
    location: 'Mumbai, Maharashtra',
    desc: 'Multi-story commercial framing with deep foundation piling and turnkey structural execution.',
    image: '/portfolio/apartment-640w.avif',
  },
  {
    id: 2,
    title: 'Power Plant, Gujarat',
    category: 'dismantling',
    categoryLabel: 'Plant Dismantling',
    location: 'Gujarat Industrial Corridor',
    desc: '7-meter heavy steel bunker and 3-column top structure dismantled safely without downtime to adjacent units.',
    image: '/portfolio/desmelting-640w.avif',
  },
  {
    id: 3,
    title: 'Refinery Complex Deconstruction',
    category: 'demolition',
    categoryLabel: 'Controlled Demolition',
    location: 'Gujarat',
    desc: 'High-precision mechanical demolition using excavator-mounted shear cutters and dust misting cannons.',
    image: '/portfolio/workers_tanks-640w.avif',
  },
  {
    id: 4,
    title: 'Heavy Lifting & Erection',
    category: 'construction',
    categoryLabel: 'Heavy Engineering',
    location: 'Bengaluru, Karnataka',
    desc: 'Industrial gantry truss installation and precast structural beam assembly with multi-crane rigging.',
    image: '/portfolio/crane_lift.avif',
  },
  {
    id: 5,
    title: 'Civil Infrastructure Hub',
    category: 'construction',
    categoryLabel: 'Civil Works',
    location: 'Mumbai, Maharashtra',
    desc: 'Heavy reinforced concrete foundation slab casting with high-tolerance laser-screed flatness standards.',
    image: '/portfolio/construction-640w.avif',
  },
  {
    id: 6,
    title: 'The Industrial Plant, Kolkata',
    category: 'demolition',
    categoryLabel: 'Diamond Wire Sawing',
    location: 'West Bengal',
    desc: 'Zero-vibration wire cutting through thick RCC equipment foundation blocks in an active production facility.',
    image: '/portfolio/steel_frame-640w.avif',
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'construction' | 'demolition' | 'dismantling'>('all');

  const filtered = filter === 'all'
    ? projectsList
    : projectsList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#f6f4f0] border-b border-stone-200/80 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#1c2938]">
            PROJECT <span className="text-[#0f8a3c]">PORTFOLIO</span>
          </h2>
          <div className="w-12 h-[3px] bg-[#0f8a3c] mx-auto mt-3 mb-3" />
          <p className="text-stone-600 max-w-xl mx-auto text-sm sm:text-base font-body">
            Landmark Civil Infrastructure &amp; Controlled Demolitions Delivered Across India
          </p>
        </div>

        {/* Filter Buttons with Smooth Rounded Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 font-nav">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-full ${
              filter === 'all'
                ? 'bg-[#0f8a3c] text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('construction')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-full ${
              filter === 'construction'
                ? 'bg-[#0f8a3c] text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Civil Construction
          </button>
          <button
            onClick={() => setFilter('demolition')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-full ${
              filter === 'demolition'
                ? 'bg-[#0f8a3c] text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Controlled Demolition
          </button>
          <button
            onClick={() => setFilter('dismantling')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-full ${
              filter === 'dismantling'
                ? 'bg-[#0f8a3c] text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Plant Dismantling
          </button>
        </div>

        {/* Projects Grid with Smooth Curved Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-stone-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col transform hover:-translate-y-1"
            >
              {/* Image Box */}
              <div className="relative h-56 sm:h-64 w-full bg-stone-900 overflow-hidden rounded-t-3xl">
                {/* Skeleton placeholder while loading */}
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-800 via-stone-700 to-stone-800 animate-pulse pointer-events-none" />
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  unoptimized
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 right-3 bg-[#0f8a3c] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full font-nav shadow-xs">
                  {proj.categoryLabel}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-stone-900 mb-2 group-hover:text-[#0f8a3c] transition-colors">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-semibold mb-3 font-nav">
                    <MapPin className="w-3.5 h-3.5 text-[#0f8a3c] shrink-0" />
                    <span>{proj.location}</span>
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-body">
                    {proj.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Subpages */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-nav">
          <Link
            href="/construction-services"
            className="group inline-flex items-center gap-2 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-7 py-3.5 rounded-xl font-bold tracking-wider text-xs uppercase transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore Construction Gallery</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/demolition-services"
            className="group inline-flex items-center gap-2 bg-[#1c2938] hover:bg-[#131c26] text-white px-7 py-3.5 rounded-xl font-bold tracking-wider text-xs uppercase transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore Demolition Gallery</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
