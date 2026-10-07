'use client';

import React from 'react';
import HeroScrollSection from '@/components/HeroScrollSection';
import FeaturesPillars from '@/components/FeaturesPillars';
import CompanyOverview from '@/components/CompanyOverview';
import HomeCapabilities from '@/components/HomeCapabilities';
import StatsClientsSection from '@/components/StatsClientsSection';
import ProjectsSection from '@/components/ProjectsSection';
import HomeCtaBanner from '@/components/HomeCtaBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4f0] text-stone-900 selection:bg-[#0f8a3c] selection:text-white">
      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Scroll Section with Canvas 300-Frame Animation & Scrollytelling Phases */}
        <HeroScrollSection
          onStartProject={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
        />

        {/* 2. Client Marquee Slider - Trusted by Industry Leaders */}
        <StatsClientsSection />

        {/* 3. Core Architectural Pillars (Trusted Work, Built to Last, Smart Value) */}
        <FeaturesPillars />

        {/* 4. Executive Company Overview (15+ Years, ISO Certified, Zero-Incident Track Record) */}
        <CompanyOverview />

        {/* 5. Core Capabilities Gateway Grid (Controlled Demolition, Civil Infrastructure, Fleet Rental) */}
        <HomeCapabilities onOpenQuote={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))} />

        {/* 6. Landmark Projects Portfolio (Curated Civil & Industrial Works) */}
        <ProjectsSection />

        {/* 7. Executive RFP Consultation Desk (Direct Gateway without repeating Contact page form) */}
        <HomeCtaBanner onOpenQuote={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))} />

        {/* 8. Institutional Footer & Legal Disclosures */}
        
      </main>

      {/* Interactive Modals */}
    </div>
  );
}
