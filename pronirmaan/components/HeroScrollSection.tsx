'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroScrollSectionProps {
  onStartProject: () => void;
  onAnimationComplete?: (completed: boolean) => void;
}

const TOTAL_FRAMES = 300;
const LERP_FACTOR = 0.25;

export default function HeroScrollSection({ onStartProject, onAnimationComplete }: HeroScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onAnimationCompleteRef = useRef(onAnimationComplete);

  useEffect(() => {
    onAnimationCompleteRef.current = onAnimationComplete;
  }, [onAnimationComplete]);

  const [activePhase, setActivePhase] = useState<'engineer' | 'demolish' | 'construct' | 'build'>('engineer');
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [loadedPercent, setLoadedPercent] = useState<number>(0);
  const [slantActive, setSlantActive] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rawCtx = canvas.getContext('2d', { alpha: false });
    if (!rawCtx) return;
    const ctx: CanvasRenderingContext2D = rawCtx;

    let animationFrameId: number;
    const frames: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let lastRenderedIndex = -1;
    let isDestroyed = false;

    let width = window.innerWidth;
    let height = window.innerHeight;

    function getFrameUrl(index: number) {
      const frameNum = String(index + 1).padStart(4, '0');
      return `/mnt/data/frames_30fps_jpg_new/frame_${frameNum}.jpg`;
    }

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      if (!canvas) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      renderCurrent(true);
    }

    function drawCover(img: HTMLImageElement) {
      if (!img) return;
      const imgWidth = img.naturalWidth || img.width || 1920;
      const imgHeight = img.naturalHeight || img.height || 1080;
      const imgRatio = imgWidth / imgHeight;
      const screenRatio = width / height;

      let dw, dh, dx, dy;
      if (screenRatio > imgRatio) {
        dw = width;
        dh = width / imgRatio;
        dx = 0;
        dy = (height - dh) / 2;
      } else {
        dh = height;
        dw = height * imgRatio;
        dx = (width - dw) / 2;
        dy = 0;
      }

      ctx.drawImage(img, dx, dy, dw, dh);
    }

    function getNearestFrame(targetIndex: number) {
      if (frames[targetIndex] && (frames[targetIndex].complete || frames[targetIndex].naturalWidth > 0)) {
        return frames[targetIndex];
      }
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const left = targetIndex - offset;
        if (left >= 0 && frames[left] && (frames[left].complete || frames[left].naturalWidth > 0)) {
          return frames[left];
        }
        const right = targetIndex + offset;
        if (right < TOTAL_FRAMES && frames[right] && (frames[right].complete || frames[right].naturalWidth > 0)) {
          return frames[right];
        }
      }
      return null;
    }

    function renderCurrent(force = false) {
      const frameFloat = currentProgress * (TOTAL_FRAMES - 1);
      const targetIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameFloat)));

      if (!force && targetIndex === lastRenderedIndex) return;
      lastRenderedIndex = targetIndex;

      const img = getNearestFrame(targetIndex);
      if (img) {
        drawCover(img);
      }
    }

    function updateActivePhase(p: number) {
      if (p < 0.25) {
        setActivePhase('engineer');
      } else if (p < 0.50) {
        setActivePhase('demolish');
      } else if (p < 0.75) {
        setActivePhase('construct');
      } else {
        setActivePhase('build');
      }
    }

    function tick() {
      if (isDestroyed) return;
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0002) {
        currentProgress += diff * LERP_FACTOR;
        renderCurrent();
        updateActivePhase(currentProgress);
        setProgressPercent(Math.round(currentProgress * 100));
        setSlantActive(currentProgress >= 0.94);
        if (onAnimationCompleteRef.current) {
          onAnimationCompleteRef.current(currentProgress >= 0.95);
        }
      } else if (currentProgress !== targetProgress) {
        currentProgress = targetProgress;
        renderCurrent();
        updateActivePhase(currentProgress);
        setProgressPercent(Math.round(currentProgress * 100));
        setSlantActive(currentProgress >= 0.94);
        if (onAnimationCompleteRef.current) {
          onAnimationCompleteRef.current(currentProgress >= 0.95);
        }
      }
      animationFrameId = requestAnimationFrame(tick);
    }

    function handleScroll() {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight || 800;
      const scrollableDist = rect.height - viewportH;
      if (scrollableDist <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDist));
      targetProgress = progress;
      setSlantActive(progress >= 0.94);

      if (onAnimationCompleteRef.current) {
        onAnimationCompleteRef.current(progress >= 0.95);
      }
    }

    // Preload frames in chunks
    function preloadFrames() {
      const step = Math.ceil(TOTAL_FRAMES / 30);
      const priorityIndices: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i += step) priorityIndices.push(i);
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!priorityIndices.includes(i)) priorityIndices.push(i);
      }

      let currentIndex = 0;
      function loadNextBatch(concurrency = 12) {
        for (let c = 0; c < concurrency && currentIndex < priorityIndices.length; c++) {
          const idx = priorityIndices[currentIndex++];
          const img = new Image();
          img.src = getFrameUrl(idx);
          img.onload = () => {
            frames[idx] = img;
            loadedCount++;
            setLoadedPercent(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            if (idx === 0 || idx === lastRenderedIndex) renderCurrent(true);
            if (currentIndex < priorityIndices.length) loadNextBatch(1);
          };
          img.onerror = () => {
            if (currentIndex < priorityIndices.length) loadNextBatch(1);
          };
        }
      }
      loadNextBatch(12);
    }

    const onResize = () => {
      resizeCanvas();
      handleScroll();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    resizeCanvas();
    handleScroll();
    preloadFrames();
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="hero-scroll-container"
      ref={containerRef}
      className="relative w-full h-[450vh] bg-[#f6f4f0]"
    >
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 left-0 w-full h-screen sm:h-screen h-[100dvh] overflow-hidden bg-[#f6f4f0] relative">
        {/* Clipped Frame Container (Canvas + Gradient + dynamic bottom chevron cut that activates after hero scroll) */}
        <div
          className={`relative w-full h-full bg-[#0b0f15] transition-[clip-path] duration-500 ease-out ${slantActive ? 'hero-chevron-clip' : 'hero-chevron-flat'
            }`}
        >
          {/* Canvas for 300-frame video sequence */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block"
          />

          {/* Soft, natural left vignette gradient for clean typography contrast without dark black shades */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />
        </div>

        {/* Cinematic Scrollytelling Typography Overlay */}
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-2xl relative min-h-[300px] flex items-center pointer-events-auto">
              {/* Phase 1: WE ENGINEER */}
              <div
                className={`transition-all duration-500 absolute left-0 w-full ${activePhase === 'engineer'
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-6 invisible pointer-events-none'
                  }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    STRUCTURAL PLANNING
                  </span>
                  <span className="h-[2px] w-12 bg-[#0f8a3c]" />
                </div>
                <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl leading-tight text-white mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  WE <span className="text-[#0f8a3c]">ENGINEER</span>
                </h1>
                <p className="text-slate-100 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed font-body drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  Forensic structural analysis, 3D BIM spatial coordination, and pre-demolition site engineering.
                </p>
              </div>

              {/* Phase 2: WE DEMOLISH */}
              <div
                className={`transition-all duration-500 absolute left-0 w-full ${activePhase === 'demolish'
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-6 invisible pointer-events-none'
                  }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    CONTROLLED DEMOLITION
                  </span>
                  <span className="h-[2px] w-12 bg-[#0f8a3c]" />
                </div>
                <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl leading-tight text-white mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  WE <span className="text-[#0f8a3c]">DEMOLISH</span>
                </h1>
                <p className="text-slate-100 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed font-body drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  Surgical hydraulic clearance, mechanical dismantlement, and zero-incident site remediation.
                </p>
              </div>

              {/* Phase 3: WE CONSTRUCT */}
              <div
                className={`transition-all duration-500 absolute left-0 w-full ${activePhase === 'construct'
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-6 invisible pointer-events-none'
                  }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    CIVIL INFRASTRUCTURE
                  </span>
                  <span className="h-[2px] w-12 bg-[#0f8a3c]" />
                </div>
                <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl leading-tight text-white mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  WE <span className="text-[#0f8a3c]">CONSTRUCT</span>
                </h1>
                <p className="text-slate-100 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed font-body drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  High-strength cast-in-place concrete foundations, post-tensioned slabs, and structural steel framing.
                </p>
              </div>

              {/* Phase 4: WE BUILD */}
              <div
                className={`transition-all duration-500 absolute left-0 w-full ${activePhase === 'build'
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-6 invisible pointer-events-none'
                  }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    TURNKEY ARCHITECTURE
                  </span>
                  <span className="h-[2px] w-12 bg-[#0f8a3c]" />
                </div>
                <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl leading-tight text-white mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  WE <span className="text-[#0f8a3c]">BUILD</span>
                </h1>
                <p className="text-slate-100 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed mb-6 font-body drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  Iconic, enduring commercial facilities and civil landmarks engineered for generations.
                </p>
                <button
                  onClick={onStartProject}
                  className="inline-flex items-center gap-3 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-7 py-3.5 font-bold tracking-widest text-xs uppercase transition-all shadow-xl hover:shadow-2xl cursor-pointer"
                >
                  <span>START A PROJECT</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div
          className="
            absolute
            bottom-24 right-4
            sm:bottom-[60px] sm:right-[105px]
            z-30
            flex items-center
            bg-black/80
            backdrop-blur-md
            px-4 py-2
            rounded-full
            border border-white/15
            shadow-xl
            pointer-events-none
          "
        >
          <span className="text-[11px] font-bold text-white tracking-widest font-nav whitespace-nowrap">
            {progressPercent}% SCROLLED
          </span>
        </div>

        {/* Chevron Border SVG at Bottom (Appears smoothly only when hero scroll finishes) */}
        <div
          className={`absolute bottom-0 left-0 right-0 pointer-events-none z-20 flex justify-center transition-all duration-500 ease-out ${slantActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <svg
            viewBox="0 0 1440 50"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-10 sm:h-12 text-[#0f8a3c]"
          >
            {/* Warm cream (#f6f4f0) fill matching website background below the slant cut */}
            <polygon
              points="0,2 720,46 1440,2 1440,50 0,50"
              fill="#f6f4f0"
            />
            <polyline
              points="0,2 720,46 1440,2"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
