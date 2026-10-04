'use client';

import React from 'react';

interface StonewayLogoProps {
  className?: string;
  lightMode?: boolean; // if true, white text for dark backgrounds
  size?: 'sm' | 'md' | 'lg';
}

export default function StonewayLogo({
  className = '',
  lightMode = false,
  size = 'md',
}: StonewayLogoProps) {
  const heights = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-14 lg:h-16',
    lg: 'h-16 sm:h-20',
  };

  const primaryDark = lightMode ? '#ffffff' : '#111827';
  const green = '#0f8a3c';
  const bgCut = lightMode ? '#131c26' : '#ffffff';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* High-fidelity SVG representing the exact ProNirmaan Solutions logo */}
      <svg
        viewBox="0 0 560 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heights[size]} w-auto drop-shadow-xs`}
      >
        {/* === LEFT: CRANE & BRICKS === */}
        {/* Tower Crane Base & Mast */}
        <line x1="50" y1="126" x2="50" y2="16" stroke={primaryDark} strokeWidth="3.5" />
        <line x1="32" y1="126" x2="68" y2="126" stroke={primaryDark} strokeWidth="4" strokeLinecap="round" />
        {/* Crane lattice cross-braces */}
        <line x1="50" y1="26" x2="42" y2="40" stroke={primaryDark} strokeWidth="1.5" />
        <line x1="50" y1="40" x2="42" y2="54" stroke={primaryDark} strokeWidth="1.5" />
        <line x1="50" y1="54" x2="42" y2="68" stroke={primaryDark} strokeWidth="1.5" />
        {/* Crane Jib (horizontal arm) */}
        <line x1="26" y1="26" x2="126" y2="26" stroke={primaryDark} strokeWidth="3.5" />
        {/* Counter-weight */}
        <rect x="25" y="30" width="16" height="18" fill={primaryDark} rx="1" />
        {/* Crane Apex Peak */}
        <path d="M50 12L28 26M50 12L110 26M50 12V26" stroke={primaryDark} strokeWidth="2.5" />
        {/* Green Operator Cab */}
        <rect x="53" y="24" width="10" height="12" fill={green} rx="1" />
        <line x1="55" y1="27" x2="61" y2="27" stroke="#ffffff" strokeWidth="1" />
        {/* Cable & Hoist Hook */}
        <rect x="98" y="24" width="7" height="4" fill={primaryDark} />
        <line x1="101.5" y1="28" x2="101.5" y2="46" stroke={primaryDark} strokeWidth="1.5" />
        {/* Hoisted green block */}
        <rect x="93" y="46" width="17" height="11" fill={green} rx="1" stroke={primaryDark} strokeWidth="0.8" />

        {/* Stacked masonry blocks / bricks (alternating black and green) */}
        {/* Column 1 */}
        <rect x="74" y="65" width="22" height="10" fill={green} rx="1" />
        <rect x="74" y="78" width="22" height="10" fill={primaryDark} rx="1" />
        <rect x="74" y="90" width="22" height="10" fill={primaryDark} rx="1" />
        <rect x="74" y="103" width="22" height="10" fill={green} rx="1" />
        <rect x="74" y="115" width="22" height="10" fill={green} rx="1" />

        {/* Column 2 */}
        <rect x="100" y="78" width="22" height="10" fill={green} rx="1" />
        <rect x="100" y="90" width="22" height="10" fill={primaryDark} rx="1" />
        <rect x="100" y="103" width="22" height="10" fill={green} rx="1" />
        <rect x="100" y="115" width="22" height="10" fill={green} rx="1" />

        {/* Column 3 */}
        <rect x="126" y="42" width="22" height="10" fill={green} rx="1" />
        <rect x="126" y="54" width="22" height="10" fill={green} rx="1" />
        <rect x="126" y="66" width="22" height="10" fill={green} rx="1" />
        <rect x="126" y="78" width="22" height="10" fill={primaryDark} rx="1" />
        <rect x="126" y="90" width="22" height="10" fill={primaryDark} rx="1" />
        <rect x="126" y="103" width="22" height="10" fill={green} rx="1" />
        <rect x="126" y="115" width="22" height="10" fill={green} rx="1" />

        {/* === CENTER: PRONIRMAAN SOLUTIONS === */}
        {/* PRO (in dark) & NIRMAAN (in green) */}
        <g>
          {/* PRO */}
          <text
            x="158"
            y="65"
            fill={primaryDark}
            fontFamily="'Montserrat', 'Barlow Condensed', sans-serif"
            fontWeight="900"
            fontSize="43"
            letterSpacing="-0.02em"
          >
            PRO
          </text>

          {/* NIRMAAN */}
          <text
            x="262"
            y="65"
            fill={green}
            fontFamily="'Montserrat', 'Barlow Condensed', sans-serif"
            fontWeight="900"
            fontSize="43"
            letterSpacing="-0.02em"
          >
            NIRMAAN
          </text>

          {/* Stencil horizontal cut accent across NIRMAAN */}
          <line x1="264" y1="52" x2="455" y2="52" stroke={bgCut} strokeWidth="3" />
        </g>

        {/* SOLUTIONS (in dark stencil caps) */}
        <g>
          <text
            x="238"
            y="99"
            fill={primaryDark}
            fontFamily="'Montserrat', 'Barlow Condensed', sans-serif"
            fontWeight="900"
            fontSize="32"
            letterSpacing="0.09em"
          >
            SOLUTIONS
          </text>
        </g>

        {/* Green pill capsule badge underneath: ALL TYPES OF CIVIL WORKS & CONTROL DEMOLITION */}
        <g>
          <rect
            x="152"
            y="107"
            width="336"
            height="23"
            rx="11.5"
            fill={green}
          />
          <text
            x="320"
            y="122.5"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="'Inter', 'Montserrat', sans-serif"
            fontWeight="800"
            fontSize="10"
            letterSpacing="0.05em"
          >
            ALL TYPES OF CIVIL WORKS &amp; CONTROL DEMOLITION
          </text>
        </g>

        {/* === RIGHT: BUILDING & HYDRAULIC EXCAVATOR === */}
        {/* Building silhouette */}
        <path
          d="M450 126V28L470 44V126H450Z"
          fill={primaryDark}
        />
        <rect x="455" y="58" width="5" height="7" fill={green} />
        <rect x="455" y="73" width="5" height="7" fill={green} />
        <rect x="455" y="88" width="5" height="7" fill={green} />
        <rect x="455" y="103" width="5" height="7" fill={green} />

        {/* Hydraulic Excavator (Green & Dark) */}
        <g transform="translate(468, 48)">
          {/* Boom / Arm */}
          <path
            d="M32 44L14 18L-2 36L4 48"
            stroke={green}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Hydraulic Cylinder */}
          <line x1="22" y1="46" x2="9" y2="28" stroke={primaryDark} strokeWidth="2.5" />
          {/* Bucket */}
          <path
            d="M-2 36L-14 44L-10 54L2 50Z"
            fill={green}
          />
          {/* Bucket teeth */}
          <line x1="-14" y1="48" x2="-18" y2="49" stroke={primaryDark} strokeWidth="1.5" />
          <line x1="-12" y1="52" x2="-16" y2="53" stroke={primaryDark} strokeWidth="1.5" />

          {/* Cab / Body */}
          <rect x="24" y="35" width="24" height="22" rx="3" fill={green} />
          {/* Cab window */}
          <rect x="27" y="38" width="11" height="11" fill={primaryDark} rx="1" />
          {/* Engine housing & exhaust */}
          <rect x="38" y="42" width="16" height="15" fill={green} />
          <line x1="48" y1="40" x2="48" y2="32" stroke={primaryDark} strokeWidth="2.5" strokeLinecap="round" />

          {/* Crawler Tracks / Undercarriage */}
          <rect x="18" y="59" width="40" height="13" rx="4" fill={primaryDark} />
          <rect x="21" y="61" width="34" height="9" rx="3" fill="#374151" />
          {/* Track rollers */}
          <circle cx="27" cy="65.5" r="2.5" fill={green} />
          <circle cx="38" cy="65.5" r="2.5" fill={green} />
          <circle cx="49" cy="65.5" r="2.5" fill={green} />
        </g>
      </svg>
    </div>
  );
}
