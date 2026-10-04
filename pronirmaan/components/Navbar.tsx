'use client';

import React, { useState } from 'react';
import StonewayLogo from './StonewayLogo';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenSearch: () => void;
}

export default function Navbar({
  activeSection,
  onNavigate,
  onOpenSearch,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'company', label: 'Company' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-20 sm:h-22">
        {/* ProNirmaan Solutions Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99] py-1"
        >
          <StonewayLogo size="md" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul className="flex items-center gap-7 lg:gap-9 text-[13px] font-semibold tracking-wide">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`transition-colors py-1 relative cursor-pointer ${
                      isActive
                        ? 'text-[#0f8a3c] font-bold'
                        : 'text-slate-700 hover:text-[#0f8a3c]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0f8a3c] -mb-1 rounded-full" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="text-slate-600 hover:text-[#0f8a3c] transition-colors p-2 cursor-pointer rounded-full hover:bg-slate-100"
          >
            <Search className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

        {/* Mobile menu & search toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="p-2 text-slate-600 hover:text-[#0f8a3c]"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 hover:text-[#0f8a3c]"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left py-2 text-sm font-semibold tracking-wide ${
                      isActive
                        ? 'text-[#0f8a3c]'
                        : 'text-slate-700 hover:text-[#0f8a3c]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
