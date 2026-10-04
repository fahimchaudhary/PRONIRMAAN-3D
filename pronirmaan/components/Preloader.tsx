'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface PreloaderProps {
  duration?: number;
}

export default function Preloader({ duration = 2400 }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hasUnmounted, setHasUnmounted] = useState(false);

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setHasUnmounted(true);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    }, 700);
  }, []);

  useEffect(() => {
    // Lock scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Preload hero frame 1 and logo in the background
    try {
      const img1 = new Image();
      img1.src = '/mnt/data/frames_30fps_jpg_new/frame_0001.jpg';
      const logoImg = new Image();
      logoImg.src = '/logo.png';
    } catch (_) {}

    const timer = setTimeout(() => {
      handleDismiss();
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, [duration, handleDismiss]);

  if (hasUnmounted) return null;

  return (
    <div
      id="site-preloader"
      onClick={handleDismiss}
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-white text-slate-900 overflow-hidden select-none cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-90 pointer-events-none'
      }`}
    >
      {/* Background Decorative Architecture Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle corner geometric accents */}
        <div className="absolute -left-36 -top-36 w-72 h-72 border-[20px] border-green-700/10 rotate-45" />
        <div className="absolute -right-36 -bottom-36 w-72 h-72 border-[20px] border-green-700/10 rotate-45" />

        <div className="absolute -left-12 top-12 w-48 h-2.5 bg-green-700 -rotate-45" />
        <div className="absolute -right-12 bottom-12 w-48 h-2.5 bg-green-700 -rotate-45" />

        {/* City Silhouette Backdrop */}
        <div
          className="absolute left-0 right-0 bottom-0 h-32 sm:h-44 opacity-[0.06] pointer-events-none"
          style={{
            background: `
              linear-gradient(to top, #0c6823 0 10%, transparent 10%) 2% 100%/9% 100% no-repeat,
              linear-gradient(to top, #0c6823 0 25%, transparent 25%) 13% 100%/7% 100% no-repeat,
              linear-gradient(to top, #0c6823 0 18%, transparent 18%) 22% 100%/10% 100% no-repeat,
              linear-gradient(to top, #0c6823 0 35%, transparent 35%) 34% 100%/7% 100% no-repeat,
              linear-gradient(to top, #0c6823 0 20%, transparent 20%) 44% 100%/9% 100% no-repeat,
              linear-gradient(to top, #0c6823 0 32%, transparent 32%) 57% 100%/8% 100% no-repeat,
              linear-gradient(to top, #0c6823 0 15%, transparent 15%) 67% 100%/7% 100% no-repeat,
              linear-gradient(to top, #0c6823 0 42%, transparent 42%) 79% 100%/9% 100% no-repeat,
              linear-gradient(to top, #0c6823 0 22%, transparent 22%) 91% 100%/10% 100% no-repeat
            `,
          }}
        />
      </div>

      {/* Main Preloader Content */}
      <div className="relative z-10 w-[92vw] max-w-[960px] flex flex-col items-center justify-center px-4">
        {/* Animated Logo & Machines SVG */}
        <svg
          className="w-full max-h-[44vh] sm:max-h-[50vh] overflow-visible"
          viewBox="0 0 1160 360"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="ProNirmaan Solutions"
        >
          <defs>
            <linearGradient id="proNirmaanGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="55%" stopColor="#0c6823" />
              <stop offset="100%" stopColor="#064817" />
            </linearGradient>

            <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* ================= LEFT CRANE ================= */}
          <g className="preloader-machine-left">
            {/* Crane Base & Mast */}
            <rect x="10" y="278" width="225" height="12" rx="3" fill="#1e293b" />
            <rect x="68" y="35" width="12" height="243" fill="#1e293b" />

            {/* Truss Cross Braces */}
            <g stroke="#1e293b" strokeWidth="2.5" opacity="0.85">
              <line x1="68" y1="40" x2="80" y2="60" />
              <line x1="80" y1="60" x2="68" y2="80" />
              <line x1="68" y1="80" x2="80" y2="100" />
              <line x1="80" y1="100" x2="68" y2="120" />
              <line x1="68" y1="120" x2="80" y2="140" />
              <line x1="80" y1="140" x2="68" y2="160" />
              <line x1="68" y1="160" x2="80" y2="180" />
              <line x1="80" y1="180" x2="68" y2="200" />
            </g>

            {/* Crane Top & Jib Boom */}
            <polygon points="74,10 60,35 88,35" fill="#1e293b" />
            <line x1="74" y1="10" x2="220" y2="40" stroke="#1e293b" strokeWidth="3" />
            <line x1="0" y1="40" x2="220" y2="40" stroke="#1e293b" strokeWidth="4" />

            {/* Swinging Trolley & Hook Block */}
            <g className="preloader-hanging">
              <rect x="145" y="38" width="14" height="6" fill="#15803d" />
              <line x1="152" y1="44" x2="152" y2="108" stroke="#1e293b" strokeWidth="2" strokeDasharray="3,2" />
              <rect x="138" y="108" width="28" height="22" rx="2" fill="url(#proNirmaanGreenGrad)" stroke="#1e293b" strokeWidth="1.5" />
            </g>

            {/* Building Blocks */}
            <rect x="96" y="246" width="28" height="30" fill="url(#proNirmaanGreenGrad)" />
            <rect x="126" y="246" width="28" height="30" fill="url(#proNirmaanGreenGrad)" />
            <rect x="156" y="246" width="28" height="30" fill="url(#proNirmaanGreenGrad)" />
            <rect x="186" y="246" width="28" height="30" fill="url(#proNirmaanGreenGrad)" />
            <rect x="126" y="214" width="28" height="30" fill="#1e293b" />
            <rect x="156" y="214" width="28" height="30" fill="#1e293b" />
            <rect x="186" y="214" width="28" height="30" fill="url(#proNirmaanGreenGrad)" />
            <rect x="156" y="182" width="28" height="30" fill="url(#proNirmaanGreenGrad)" />
            <rect x="186" y="182" width="28" height="30" fill="#1e293b" />
            <rect x="186" y="150" width="28" height="30" fill="url(#proNirmaanGreenGrad)" />
          </g>

          {/* ================= RIGHT EXCAVATOR ================= */}
          <g className="preloader-machine-right">
            {/* Construction Building Pillar */}
            <polygon points="905,65 905,278 965,278 965,100 945,65" fill="#1e293b" />
            <rect x="918" y="180" width="12" height="15" rx="1" fill="#16a34a" />
            <rect x="918" y="210" width="12" height="15" rx="1" fill="#16a34a" />

            {/* Excavator Tracks & Wheels */}
            <rect x="1025" y="235" width="125" height="30" rx="15" fill="#1e293b" />
            <rect x="1030" y="240" width="115" height="20" rx="10" fill="#334155" />

            <circle cx="1042" cy="250" r="7" fill="#94a3b8" />
            <circle cx="1065" cy="250" r="7" fill="#94a3b8" />
            <circle cx="1088" cy="250" r="7" fill="#94a3b8" />
            <circle cx="1111" cy="250" r="7" fill="#94a3b8" />

            {/* Excavator Cab & Body */}
            <path d="M1030 235 L1030 180 L1090 180 L1120 205 L1135 235Z" fill="url(#proNirmaanGreenGrad)" />
            <path d="M1045 188 L1082 188 L1082 215 L1045 215Z" fill="#1e293b" />
            <path d="M1048 191 L1079 191 L1079 212 L1048 212Z" fill="#86efac" />

            {/* Boom Arm & Hydraulic Piston */}
            <path d="M1035 225 L975 145 L940 195Z" fill="url(#proNirmaanGreenGrad)" stroke="#064817" strokeWidth="2" />
            <line x1="1020" y1="200" x2="970" y2="165" stroke="#cbd5e1" strokeWidth="5" />
            <path d="M940 195 L910 240 L928 255 L950 220Z" fill="#064817" />
            {/* Bucket */}
            <path d="M910 240 L880 250 L870 230 L905 225Z" fill="url(#proNirmaanGreenGrad)" stroke="#1e293b" strokeWidth="1.5" />
          </g>

          {/* ================= BRAND TEXT ================= */}
          <g className="preloader-brand-text">
            <g className="preloader-row-1">
              <text
                x="580"
                y="155"
                textAnchor="middle"
                fontFamily="'Geist', 'Montserrat', sans-serif"
                fontWeight="900"
                fontSize="82"
                letterSpacing="4"
              >
                <tspan className="preloader-text-pro" fill="#0f172a">
                  PRO{' '}
                </tspan>
                <tspan className="preloader-text-nirmaan" fill="url(#proNirmaanGreenGrad)">
                  NIRMAAN
                </tspan>
              </text>
            </g>

            <g className="preloader-row-2">
              <text
                x="580"
                y="235"
                textAnchor="middle"
                fontFamily="'Geist', 'Montserrat', sans-serif"
                fontWeight="900"
                fontSize="52"
                letterSpacing="14"
                fill="#0f172a"
                className="preloader-text-solutions"
              >
                SOLUTIONS
              </text>
            </g>
          </g>

          {/* ================= BADGE PILL ================= */}
          <g className="preloader-badge" filter="url(#subtleShadow)">
            <rect
              x="200"
              y="268"
              width="760"
              height="42"
              rx="21"
              fill="url(#proNirmaanGreenGrad)"
              stroke="#064817"
              strokeWidth="2"
            />
          </g>

          <text
            x="580"
            y="294"
            className="preloader-badge-text"
            fill="#ffffff"
            fontFamily="'Geist', 'Montserrat', sans-serif"
            fontWeight="800"
            fontSize="14"
            letterSpacing="2"
            textAnchor="middle"
          >
            ALL TYPES OF CIVIL WORKS &amp; CONTROL DEMOLITION
          </text>
        </svg>

        {/* Subtle skip cue */}
        <div className="mt-8 text-[11px] uppercase tracking-widest text-slate-400 font-semibold opacity-60">
          Loading Experience • Tap anywhere to enter
        </div>
      </div>

      {/* Embedded Styles for SVG Sequential Animation */}
      <style>{`
        .preloader-machine-left {
          opacity: 0;
          transform: translateX(-150px);
          animation: preloaderMachineLeft 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
        }
        .preloader-machine-right {
          opacity: 0;
          transform: translateX(150px);
          animation: preloaderMachineRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
        }
        @keyframes preloaderMachineLeft {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes preloaderMachineRight {
          to { opacity: 1; transform: translateX(0); }
        }

        .preloader-hanging {
          transform-box: fill-box;
          transform-origin: center;
          animation: preloaderSwing 1.3s ease-in-out 0.8s infinite alternate;
        }
        @keyframes preloaderSwing {
          from { transform: translateY(-7px); }
          to { transform: translateY(6px); }
        }

        .preloader-row-1 {
          transform-box: fill-box;
          transform-origin: center;
          animation: preloaderRowFloat 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
        }
        .preloader-row-2 {
          transform-box: fill-box;
          transform-origin: center;
          animation: preloaderRowFloat 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both;
        }
        @keyframes preloaderRowFloat {
          0% {
            transform: translateY(14px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .preloader-text-pro {
          opacity: 0;
          filter: blur(4px);
          animation: preloaderGentleReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards;
        }
        .preloader-text-nirmaan {
          opacity: 0;
          filter: blur(4px);
          animation: preloaderGentleReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
        }
        .preloader-text-solutions {
          opacity: 0;
          filter: blur(4px);
          animation: preloaderGentleReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
        }
        @keyframes preloaderGentleReveal {
          0% {
            opacity: 0;
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }

        .preloader-badge {
          opacity: 0;
          transform: scaleX(0.08);
          transform-origin: center;
          animation: preloaderBadgeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 1.25s forwards;
        }
        @keyframes preloaderBadgeIn {
          to { opacity: 1; transform: scaleX(1); }
        }

        .preloader-badge-text {
          opacity: 0;
          animation: preloaderFade 0.4s ease 1.45s forwards;
        }
        @keyframes preloaderFade {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
