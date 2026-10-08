'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

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

    let width = 0;
    let height = 0;

    function getFrameUrl(index: number) {
      const frameNum = String(index + 1).padStart(4, '0');
      return `/frames_30fps_jpg_new/frame_${frameNum}.jpg`;
    }

    function resizeCanvas() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const container = canvas.parentElement || canvas;
      const fs = (typeof window !== 'undefined' && parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--fs'))) || 1;
      
      const viewportW = typeof window !== 'undefined' ? window.innerWidth : 1280;
      const viewportH = typeof window !== 'undefined' ? window.innerHeight : 800;
      const isMobile = viewportW <= 760;

      // On mobile, the fullscreen frame MUST always match viewport width & height (never a 150px unrendered container)
      const newWidth = isMobile
        ? viewportW
        : (container.clientWidth && container.clientWidth > 300 ? container.clientWidth : Math.round(viewportW / fs));

      const newHeight = isMobile
        ? viewportH
        : (container.clientHeight && container.clientHeight > 300 ? container.clientHeight : Math.round(viewportH / fs));

      if (newWidth <= 0 || newHeight <= 0) return;

      const targetW = Math.round(newWidth * dpr);
      const targetH = Math.round(newHeight * dpr);

      // Only skip if already matching target buffer dimensions
      if (canvas.width === targetW && canvas.height === targetH && width === newWidth && height === newHeight) {
        return;
      }

      width = newWidth;
      height = newHeight;

      canvas.width = targetW;
      canvas.height = targetH;
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      renderCurrent(true);
    }

    function drawCover(img: HTMLImageElement) {
      if (!img || width <= 0 || height <= 0) return;
      const imgWidth = img.naturalWidth || img.width || 1920;
      const imgHeight = img.naturalHeight || img.height || 1080;
      const imgRatio = imgWidth / imgHeight;
      const screenRatio = width / height;

      let dw: number, dh: number, dx: number, dy: number;
      if (screenRatio > imgRatio) {
        dw = width;
        dh = width / imgRatio;
        dx = 0;
        // Anchor to bottom so active ground construction, foundations, and machinery are 100% visible
        dy = height - dh;
      } else {
        dh = height;
        dw = height * imgRatio;
        dx = (width - dw) / 2;
        dy = 0;
      }

      ctx.clearRect(0, 0, width, height);
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
      const absDiff = Math.abs(diff);

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const baseLerp = isMobile ? 0.42 : LERP_FACTOR;

      if (absDiff > 0.0001) {
        // Fast scroll: dynamically increases so frames keep up with quick finger flicks on mobile
        const activeLerp = absDiff > 0.06 ? Math.min(0.92, baseLerp + absDiff * 1.8) : baseLerp;
        currentProgress += diff * activeLerp;
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

    // Preload frames in chunks (Anchor keyframes every 4th frame loaded first for instant response during fast scrolls)
    function preloadFrames() {
      const step = 4;
      const priorityIndices: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i += step) priorityIndices.push(i);
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!priorityIndices.includes(i)) priorityIndices.push(i);
      }

      let currentIndex = 0;
      function loadNextBatch(concurrency = 8) {
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
      loadNextBatch(8);
    }

    // Disable automatic browser scroll restoration so reload starts at top cleanly
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      try {
        window.history.scrollRestoration = 'manual';
      } catch (_) {}
    }

    const onResize = () => {
      resizeCanvas();
      handleScroll();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
        handleScroll();
      });
      resizeObserver.observe(canvas.parentElement);
    }

    resizeCanvas();
    handleScroll();

    // Immediately load and paint frame 0 if available in cache (already preloaded by Preloader)
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      frames[0] = firstImg;
      if (lastRenderedIndex <= 0) {
        renderCurrent(true);
      }
    };
    if (firstImg.complete && firstImg.naturalWidth > 0) {
      frames[0] = firstImg;
      renderCurrent(true);
    }

    preloadFrames();
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const jumpToPhase = (phaseIndex: number) => {
    const container = containerRef.current;
    if (!container) return;
    const viewportH = window.innerHeight || 800;
    const scrollableDist = container.offsetHeight - viewportH;
    const targets = [0.06, 0.35, 0.65, 0.92];
    const targetY = container.offsetTop + scrollableDist * targets[phaseIndex];
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section
      id="hero-scroll-container"
      ref={containerRef}
      className="relative w-full h-[460vh] sm:h-[480vh] md:h-[450vh] bg-[#0b0f15]"
    >
      {/* Sticky Fullscreen Frame */}
      <div
        className={`sticky top-0 left-0 w-full hero-sticky-frame overflow-hidden z-10 transition-colors duration-500 ${
          slantActive ? 'bg-[#f6f4f0]' : 'bg-[#0b0f15]'
        }`}
      >
        {/* Clipped Frame Container (Canvas + Gradient + dynamic bottom chevron cut that activates after hero scroll) */}
        <div
          className={`relative w-full h-full bg-[#0b0f15] transition-[clip-path] duration-500 ease-out ${
            slantActive ? 'hero-chevron-clip' : 'hero-chevron-flat'
          }`}
        >
          {/* Canvas for 300-frame video sequence */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block"
          />

          {/* Cinematic vignette gradients for clean typography contrast and controls separation */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10 sm:from-black/60 sm:via-black/25 sm:to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 sm:hidden pointer-events-none" />
        </div>

        {/* Cinematic Scrollytelling Typography Overlay */}
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl lg:max-w-4xl relative min-h-[280px] sm:min-h-[360px] flex items-center pointer-events-auto">
              {/* Phase 1: WE ENGINEER */}
              <div
                className={`transition-all duration-500 absolute left-0 w-full ${activePhase === 'engineer'
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-6 invisible pointer-events-none'
                  }`}
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <span
                    style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.85rem)' }}
                    className="text-white font-bold uppercase tracking-[0.22em] font-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                  >
                    STRUCTURAL PLANNING
                  </span>
                  <span className="h-[2px] w-10 sm:w-14 bg-[#0f8a3c]" />
                </div>
                <h1
                  style={{ fontSize: 'clamp(2.1rem, 4.2vw, 4.2rem)', lineHeight: 1.08 }}
                  className="font-heading font-black text-white mb-2 sm:mb-4 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] tracking-tight"
                >
                  WE <span className="text-[#0f8a3c]">ENGINEER</span>
                </h1>
                <p
                  style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)' }}
                  className="text-slate-100 max-w-xl leading-relaxed font-body drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
                >
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
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <span
                    style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.85rem)' }}
                    className="text-white font-bold uppercase tracking-[0.22em] font-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                  >
                    CONTROLLED DEMOLITION
                  </span>
                  <span className="h-[2px] w-10 sm:w-14 bg-[#0f8a3c]" />
                </div>
                <h1
                  style={{ fontSize: 'clamp(2.1rem, 4.2vw, 4.2rem)', lineHeight: 1.08 }}
                  className="font-heading font-black text-white mb-2 sm:mb-4 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] tracking-tight"
                >
                  WE <span className="text-[#0f8a3c]">DEMOLISH</span>
                </h1>
                <p
                  style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)' }}
                  className="text-slate-100 max-w-xl leading-relaxed font-body drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
                >
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
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <span
                    style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.85rem)' }}
                    className="text-white font-bold uppercase tracking-[0.22em] font-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                  >
                    CIVIL INFRASTRUCTURE
                  </span>
                  <span className="h-[2px] w-10 sm:w-14 bg-[#0f8a3c]" />
                </div>
                <h1
                  style={{ fontSize: 'clamp(2.1rem, 4.2vw, 4.2rem)', lineHeight: 1.08 }}
                  className="font-heading font-black text-white mb-2 sm:mb-4 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] tracking-tight"
                >
                  WE <span className="text-[#0f8a3c]">CONSTRUCT</span>
                </h1>
                <p
                  style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)' }}
                  className="text-slate-100 max-w-xl leading-relaxed font-body drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
                >
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
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <span
                    style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.85rem)' }}
                    className="text-white font-bold uppercase tracking-[0.22em] font-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                  >
                    TURNKEY ARCHITECTURE
                  </span>
                  <span className="h-[2px] w-10 sm:w-14 bg-[#0f8a3c]" />
                </div>
                <h1
                  style={{ fontSize: 'clamp(2.1rem, 4.2vw, 4.2rem)', lineHeight: 1.08 }}
                  className="font-heading font-black text-white mb-2 sm:mb-4 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] tracking-tight"
                >
                  WE <span className="text-[#0f8a3c]">BUILD</span>
                </h1>
                <p
                  style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)' }}
                  className="text-slate-100 max-w-xl leading-relaxed mb-3 sm:mb-5 font-body drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
                >
                  Iconic, enduring commercial facilities and civil landmarks engineered for generations.
                </p>
                <button
                  onClick={onStartProject}
                  className="inline-flex items-center gap-3 bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-7 sm:px-9 py-3.5 sm:py-4 font-bold tracking-widest uppercase transition-all shadow-xl hover:shadow-2xl cursor-pointer"
                  style={{ fontSize: 'clamp(0.75rem, 0.95vw, 0.9rem)' }}
                >
                  <span>START A PROJECT</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Phase Indicator & Scrubber (Words Loader) */}
        <div className="absolute left-3.5 sm:left-12 lg:left-16 bottom-4 sm:bottom-10 z-30 flex items-center gap-1.5 sm:gap-2.5 bg-black/85 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-2xl">
          {([
            { id: 'engineer', label: 'PLAN' },
            { id: 'demolish', label: 'DEMOLISH' },
            { id: 'construct', label: 'CONSTRUCT' },
            { id: 'build', label: 'BUILD' },
          ] as const).map((phase, idx) => (
            <button
              key={phase.id}
              onClick={() => jumpToPhase(idx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activePhase === phase.id
                ? 'w-5 sm:w-8 bg-[#0f8a3c]'
                : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              title={`Jump to ${phase.label}`}
              aria-label={`Jump to phase ${idx + 1}: ${phase.label}`}
            />
          ))}
          <span
            className="ml-1 font-bold text-white/90 font-condensed tracking-wider uppercase text-[10px] sm:text-xs"
          >
            {activePhase.toUpperCase()}
          </span>
        </div>

        {/* First-time Scroll Cue: Float cleanly above bottom controls on mobile, centered at bottom on desktop */}
        {progressPercent < 6 && (
          <div className="absolute bottom-18 sm:bottom-6 left-1/2 -translate-x-1/2 z-25 pointer-events-none flex flex-col items-center gap-1.5 transition-opacity duration-300">
            <span
              style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }}
              className="font-bold tracking-[0.22em] uppercase text-white/90 font-nav drop-shadow-md select-none whitespace-nowrap"
            >
              Scroll to explore
            </span>
            {/* Desktop: Animated mouse scroll icon */}
            <div className="hidden sm:flex w-3.5 h-6 rounded-full border border-white/70 items-start justify-center p-0.5 animate-bounce">
              <div className="w-1 h-1.5 bg-[#0f8a3c] rounded-full animate-pulse" />
            </div>
            {/* Mobile: Sleek animated chevron down indicating scroll/swipe */}
            <div className="sm:hidden flex items-center justify-center animate-bounce">
              <ChevronDown className="w-4 h-4 text-[#0f8a3c] drop-shadow-md stroke-[2.5]" />
            </div>
          </div>
        )}

        {/* Scroll Progress Indicator (Hidden on mobile devices, shown on tablet/desktop) */}
        <div
          className="
            hidden sm:flex
            absolute
            bottom-6 right-4
            sm:bottom-27 sm:right-16
            z-30
            items-center
            bg-black/80
            backdrop-blur-md
            px-3 sm:px-4 py-1.5 sm:py-2
            rounded-full
            border border-white/15
            shadow-xl
            pointer-events-none
          "
        >
          <span
            className="font-bold text-white tracking-wider font-nav whitespace-nowrap text-[11px] sm:text-xs"
          >
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
