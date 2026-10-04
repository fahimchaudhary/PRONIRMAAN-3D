'use client';

import React from 'react';
import StonewayLogo from './StonewayLogo';
import { MapPin, Phone, Mail, ArrowUpRight, Shield, Award, HardHat } from 'lucide-react';

interface FooterBannerProps {
  onOpenQuote: () => void;
  onNavigate: (section: string) => void;
}

export default function FooterBanner({
  onOpenQuote,
  onNavigate,
}: FooterBannerProps) {
  return (
    <footer id="contact" className="relative bg-[#131c26] text-white overflow-hidden">
      {/* Dynamic Faceted Geometric Top Silhouette matching the screenshot */}
      <div className="relative pt-12 pb-14 border-b border-slate-800">
        {/* Silhouette overlay with architectural crane/scaffolding skyline */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1440 200"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full text-slate-700 stroke-current stroke-[1.2]"
          >
            {/* Structural crane 1 */}
            <line x1="820" y1="180" x2="880" y2="40" />
            <line x1="880" y1="40" x2="1020" y2="40" />
            <line x1="880" y1="40" x2="820" y2="20" />
            <line x1="850" y1="40" x2="820" y2="20" />
            <line x1="950" y1="40" x2="950" y2="90" strokeDasharray="3 3" />

            {/* Structural crane 2 */}
            <line x1="1200" y1="180" x2="1240" y2="60" />
            <line x1="1240" y1="60" x2="1360" y2="60" />
            <line x1="1240" y1="60" x2="1200" y2="45" />

            {/* Building framework wireframe */}
            <rect x="680" y="70" width="80" height="130" strokeDasharray="4 4" />
            <line x1="680" y1="100" x2="760" y2="100" />
            <line x1="680" y1="130" x2="760" y2="130" />
            <line x1="680" y1="160" x2="760" y2="160" />

            <rect x="1080" y="90" width="70" height="110" strokeDasharray="4 4" />
            <line x1="1080" y1="120" x2="1150" y2="120" />
            <line x1="1080" y1="150" x2="1150" y2="150" />
          </svg>
        </div>

        {/* The Exact Banner Layout from the Screenshot */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left: BUILDING BETTER / FROM THE GROUND UP */}
          <div>
            <div className="w-10 h-[2px] bg-[#0f8a3c] mb-3" />
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-none mb-2">
              <span className="text-white">BUILDING </span>
              <span className="text-[#0f8a3c]">BETTER</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-400 tracking-[0.25em] uppercase font-condensed">
              FROM THE GROUND UP
            </p>
          </div>

          {/* Right: QUALITY / PEOPLE / PROGRESS */}
          <div className="text-left md:text-right">
            <p className="text-xs sm:text-sm font-bold text-slate-300 tracking-[0.22em] uppercase font-condensed">
              <span className="hover:text-white transition-colors cursor-default">QUALITY</span>
              <span className="mx-2 sm:mx-3 text-[#0f8a3c] font-light">/</span>
              <span className="hover:text-white transition-colors cursor-default">PEOPLE</span>
              <span className="mx-2 sm:mx-3 text-[#0f8a3c] font-light">/</span>
              <span className="hover:text-white transition-colors cursor-default">PROGRESS</span>
            </p>
          </div>
        </div>
      </div>

      {/* Expanded Full-Site Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Bio */}
          <div>
            <StonewayLogo lightMode size="md" className="mb-4" />
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Leading civil infrastructure, heavy earthwork, and precision controlled demolition with institutional safety, dedicated heavy fleets, and engineering mastery.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-slate-800 flex items-center justify-center text-[#0f8a3c] text-xs font-bold" title="OSHA Certified">
                <HardHat className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xs bg-slate-800 flex items-center justify-center text-[#0f8a3c] text-xs font-bold" title="AGC Member">
                <Award className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xs bg-slate-800 flex items-center justify-center text-[#0f8a3c] text-xs font-bold" title="ISO 9001 Compliant">
                <Shield className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f8a3c] mb-4 font-condensed">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('company')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Company & Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Commercial Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Leadership Team
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Regional HQ */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f8a3c] mb-4 font-condensed">
              Regional Operations
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0f8a3c] shrink-0 mt-0.5" />
                <span>1234 Maple Ave, Austin, TX 78701</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0f8a3c] shrink-0" />
                <span>+1 (512) 555-0199</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0f8a3c] shrink-0" />
                <span>contact@pronirmaan.com</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2">
                Mon - Fri: 6:30 AM - 6:00 PM CST<br />
                Emergency Site Response: 24/7
              </p>
            </div>
          </div>

          {/* Col 4: Project Estimator CTA */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f8a3c] mb-4 font-condensed">
              Start Your Build
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Schedule a preliminary site review or request competitive bids for your upcoming RFP.
            </p>
            <button
              onClick={onOpenQuote}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-5 py-3 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
            >
              <span>REQUEST A BID</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} ProNirmaan Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Safety Guidelines (OSHA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
