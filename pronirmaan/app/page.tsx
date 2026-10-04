'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesPillars from '@/components/FeaturesPillars';
import AboutSection from '@/components/AboutSection';
import ServicesSection, {
  servicesData,
  ServiceItem,
} from '@/components/ServicesSection';
import FooterBanner from '@/components/FooterBanner';
import QuoteModal from '@/components/QuoteModal';
import SearchModal from '@/components/SearchModal';
import ServiceDetailModal from '@/components/ServiceDetailModal';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteDefaultService, setQuoteDefaultService] = useState<string>('construction');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteWithService = (serviceId: string) => {
    setQuoteDefaultService(serviceId);
    setQuoteModalOpen(true);
  };

  const handleViewAllServices = () => {
    // Open the first service by default or scroll to services
    setSelectedService(servicesData[0]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4f0] text-stone-900 selection:bg-[#0f8a3c] selection:text-white">
      {/* 1. Top Bar */}
      <TopBar onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* 2. Main Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Content Area containing all reference components */}
      <main className="flex-1">
        {/* 3. Hero Section with Excavator, Bold Typography & Chevron Cut */}
        <HeroSection onStartProject={() => setQuoteModalOpen(true)} />

        {/* 4. Value Pillars (Trusted Work, Built to Last, Smart Value) */}
        <FeaturesPillars />

        {/* 5. About Stoneway (Our Story, Our Approach, Our Standards) */}
        <AboutSection onLearnMore={() => handleNavigate('services')} />

        {/* 6. Our Services (Featured Worker + 4 Angled Cards + View Service CTA) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onViewAllServices={handleViewAllServices}
        />

        {/* 7. Bottom Banner & Footer (Building Better + Quality / People / Progress) */}
        <FooterBanner
          onOpenQuote={() => setQuoteModalOpen(true)}
          onNavigate={handleNavigate}
        />
      </main>

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={quoteDefaultService}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectResult={handleNavigate}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuoteForService={handleOpenQuoteWithService}
      />
    </div>
  );
}
