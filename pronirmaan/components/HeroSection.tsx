'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroSectionProps {
  onStartProject: () => void;
}

const slides = [
  {
    id: 1,
    eyebrow: 'BUILDING SINCE 1998',
    headlineWhite: 'STRONG FOUNDATIONS',
    headlineOrange: 'LASTING RESULTS',
    buttonText: 'START A PROJECT',
    // High-resolution image of heavy excavator on construction site with concrete structure
    image:
      'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=2000&q=85',
    alt: 'Heavy excavator at Stoneway construction site with building framework',
  },
  {
    id: 2,
    eyebrow: 'SAFETY & INTEGRITY FIRST',
    headlineWhite: 'COMMERCIAL MASTERY',
    headlineOrange: 'ENGINEERED TO LAST',
    buttonText: 'VIEW OUR PROJECTS',
    image:
      'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=2000&q=85',
    alt: 'Modern commercial construction infrastructure and equipment',
  },
  {
    id: 3,
    eyebrow: 'COMMUNITY & SUSTAINABILITY',
    headlineWhite: 'CIVIL EXCELLENCE',
    headlineOrange: 'BUILDING THE FUTURE',
    buttonText: 'GET IN TOUCH',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85',
    alt: 'High-rise structural steel and concrete engineering work',
  },
];

export default function HeroSection({ onStartProject }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Optional subtle auto-rotate with pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden select-none">
      {/* Container with the downward chevron clip */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] w-full hero-chevron-clip bg-[#16202c]">
        {/* Background Image with warm dusk/sunset construction ambiance */}
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority
            referrerPolicy="no-referrer"
            className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Authentic film grain and industrial contrast darkening gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 lg:pt-40 pb-36">
          <div className="max-w-2xl text-left">
            {/* Eyebrow with horizontal accent bar */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.25em] drop-shadow-sm font-condensed">
                {slide.eyebrow}
              </span>
              <span className="h-[2px] w-12 sm:w-16 bg-[#0f8a3c]" />
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-8">
              <span className="block text-white drop-shadow-md">
                {slide.headlineWhite}
              </span>
              <span className="block text-[#0f8a3c] drop-shadow-md">
                {slide.headlineOrange}
              </span>
            </h1>

            {/* CTA Button */}
            <div>
              <button
                onClick={onStartProject}
                className="group inline-flex items-center gap-3 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-7 sm:px-8 py-3.5 sm:py-4 font-bold tracking-widest text-xs sm:text-sm uppercase transition-all duration-200 shadow-xl cursor-pointer hover:shadow-2xl"
              >
                <span>{slide.buttonText}</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Left Slider Arrow (<) */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-11 sm:w-10 sm:h-12 bg-black/40 hover:bg-black/75 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs rounded-xs"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </button>

        {/* Right Slider Arrow (>) */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-11 sm:w-10 sm:h-12 bg-black/40 hover:bg-black/75 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs rounded-xs"
        >
          <ChevronRight className="w-6 h-6 stroke-[2]" />
        </button>
      </div>

      {/* Brand Green Angular Chevron Stripe Border matching the screenshot cut exactly */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 flex justify-center">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-12 text-[#0f8a3c]"
        >
          {/* Outline angled line */}
          <polyline
            points="0,2 720,46 1440,2"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </section>
  );
}
