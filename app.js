(() => {
  /* =========================================================
     1. HERO SCROLL-BASED FRAME ANIMATION ENGINE (300 FRAMES)
     ========================================================= */
  const TOTAL_FRAMES = 300;
  const CONCURRENCY_LIMIT = 16;
  const LERP_FACTOR = 0.25;

  const canvas = document.getElementById('animation-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const loaderBar = document.getElementById('loader-bar');
  const heroTrack = document.getElementById('hero-scroll-container');
  const siteHeader = document.getElementById('site-header');
  const scrollPrompt = document.getElementById('scroll-prompt');
  const heroPctText = document.getElementById('hero-pct-text');
  const heroFrameClipped = document.getElementById('hero-frame-clipped');
  const heroChevronBorder = document.getElementById('hero-chevron-border');

  const frames = new Array(TOTAL_FRAMES);
  let loadedCount = 0;
  let width = window.innerWidth;
  let height = window.innerHeight;

  let targetProgress = 0;
  let currentProgress = 0;
  let lastRenderedIndex = -1;
  let isTicking = false;
  let currentActivePhase = 'phase-engineer';

  function getFrameUrl(index) {
    const frameNum = String(index + 1).padStart(4, '0');
    return `/mnt/data/frames_30fps_jpg_new/frame_${frameNum}.jpg`;
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    renderCurrent(true);
  }

  function drawCover(img) {
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

  function getNearestFrame(targetIndex) {
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

    if (!force && targetIndex === lastRenderedIndex) {
      return;
    }

    const frameToDraw = getNearestFrame(targetIndex);
    if (frameToDraw) {
      drawCover(frameToDraw);
      lastRenderedIndex = targetIndex;
    }
  }

  /* Compute Phase: 1. WE ENGINEER -> 2. WE DEMOLISH -> 3. WE CONSTRUCT -> 4. WE BUILD */
  function updateStoryPhase(progress) {
    let nextPhase = 'phase-engineer';
    let phaseNum = '01';
    let barWidth = '25%';

    if (progress < 0.22) {
      nextPhase = 'phase-engineer';
      phaseNum = '01';
      barWidth = '25%';
    } else if (progress < 0.52) {
      nextPhase = 'phase-demolish';
      phaseNum = '02';
      barWidth = '50%';
    } else if (progress < 0.82) {
      nextPhase = 'phase-construct';
      phaseNum = '03';
      barWidth = '75%';
    } else {
      nextPhase = 'phase-build';
      phaseNum = '04';
      barWidth = '100%';
    }

    if (nextPhase !== currentActivePhase) {
      document.querySelectorAll('.story-phase').forEach(p => p.classList.remove('active'));
      const activeEl = document.getElementById(nextPhase);
      if (activeEl) activeEl.classList.add('active');
      currentActivePhase = nextPhase;
    }

    if (heroPctText) heroPctText.textContent = `${Math.round(progress * 100)}%`;

    // Slanted bottom appears only after full scroll animation completes
    const isSlantActive = progress >= 0.94;
    if (heroFrameClipped) {
      if (isSlantActive) {
        heroFrameClipped.classList.add('hero-chevron-clip');
      } else {
        heroFrameClipped.classList.remove('hero-chevron-clip');
      }
    }
    if (heroChevronBorder) {
      if (isSlantActive) {
        heroChevronBorder.classList.add('visible');
      } else {
        heroChevronBorder.classList.remove('visible');
      }
    }
  }

  function updatePhysics() {
    const diff = targetProgress - currentProgress;

    if (Math.abs(diff) > 0.0001) {
      currentProgress += diff * LERP_FACTOR;
      isTicking = true;
    } else {
      currentProgress = targetProgress;
      isTicking = false;
    }

    renderCurrent();
    updateStoryPhase(currentProgress);

    if (isTicking) {
      requestAnimationFrame(updatePhysics);
    }
  }

  function getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
  }

  function calculateHeroScrollProgress() {
    if (!heroTrack) return 0;
    const heroDist = Math.max(1, heroTrack.offsetHeight - window.innerHeight);
    const scrollY = getScrollPosition();
    return Math.min(1, Math.max(0, scrollY / heroDist));
  }

  function handleScroll() {
    const scrollY = getScrollPosition();
    const heroDist = heroTrack ? Math.max(1, heroTrack.offsetHeight - window.innerHeight) : 1000;

    // 1. Calculate Hero animation progress
    targetProgress = Math.min(1, Math.max(0, scrollY / heroDist));

    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updatePhysics);
    }

    // 2. Header Appearance: Hidden during Hero scroll, appears smoothly when animation finishes
    if (siteHeader) {
      if (scrollY >= heroDist - 40) {
        siteHeader.classList.add('visible');
      } else {
        siteHeader.classList.remove('visible');
      }
    }

    // 3. Scroll Prompt Fade Out
    if (scrollPrompt) {
      if (scrollY > 50) {
        scrollPrompt.classList.add('fade-out');
      } else {
        scrollPrompt.classList.remove('fade-out');
      }
    }

    // 4. Slant bottom appearance when scrolling past hero
    const isSlantPastHero = targetProgress >= 0.94 || scrollY >= heroDist - 60;
    if (heroFrameClipped) {
      if (isSlantPastHero) {
        heroFrameClipped.classList.add('hero-chevron-clip');
      } else {
        heroFrameClipped.classList.remove('hero-chevron-clip');
      }
    }
    if (heroChevronBorder) {
      if (isSlantPastHero) {
        heroChevronBorder.classList.add('visible');
      } else {
        heroChevronBorder.classList.remove('visible');
      }
    }
  }

  function preloadImage(index) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        frames[index] = img;
        loadedCount++;
        if (loaderBar) {
          loaderBar.style.width = `${(loadedCount / TOTAL_FRAMES) * 100}%`;
        }
        const currentTarget = Math.round(currentProgress * (TOTAL_FRAMES - 1));
        if (currentTarget === index) {
          renderCurrent(true);
        }
        resolve(img);
      };
      img.onerror = () => {
        loadedCount++;
        resolve(null);
      };
      img.src = getFrameUrl(index);
    });
  }

  async function loadSequence() {
    await preloadImage(0);
    renderCurrent(true);

    const queue = [];
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      queue.push(i);
    }

    async function worker() {
      while (queue.length > 0) {
        const nextIndex = queue.shift();
        if (nextIndex === undefined) break;
        await preloadImage(nextIndex);
      }
    }

    const workers = [];
    for (let w = 0; w < CONCURRENCY_LIMIT; w++) {
      workers.push(worker());
    }

    await Promise.all(workers);

    if (loaderBar) {
      loaderBar.style.width = '100%';
      setTimeout(() => {
        loaderBar.classList.add('done');
      }, 300);
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  document.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('wheel', handleScroll, { passive: true });
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('orientationchange', resizeCanvas);

  targetProgress = calculateHeroScrollProgress();
  currentProgress = targetProgress;
  resizeCanvas();
  loadSequence();
  handleScroll();

  /* =========================================================
     2. HERO CTA ACTION (Phase 4 button)
     ========================================================= */
  document.getElementById('btn-hero-explore')?.addEventListener('click', () => {
    openQuoteModal('construction');
  });

  /* =========================================================
     3. VALUE PILLARS INTERACTIVE DETAIL CARD
     ========================================================= */
  const pillarDetails = {
    'trusted-work': {
      title: 'TRUSTED WORK',
      subtitle: 'Safety, Certifications & Integrity',
      description: 'With over 28 years of zero-incident milestone projects, our certified master craftsmen and project engineers operate under strict ISO-9001 and OSHA standards.',
      stats: '99.8% On-Schedule Rate',
      bullets: [
        'Master licensed general contractors & engineers',
        'OSHA-compliant job sites with dedicated safety officers',
        'Transparent daily progress logs & milestone validation',
      ],
    },
    'built-to-last': {
      title: 'BUILT TO LAST',
      subtitle: 'Structural Engineering & Longevity',
      description: 'We engineer structures meant to endure generations. From seismic-rated reinforced foundations to climate-resilient building envelopes, quality is uncompromised.',
      stats: '50-Year Structural Assurance',
      bullets: [
        'ASTM-tested high-performance concrete & structural steel',
        'Advanced thermal & moisture barrier envelope systems',
        'Comprehensive 10-year post-construction warranty',
      ],
    },
    'smart-value': {
      title: 'SMART VALUE',
      subtitle: 'Cost Efficiency & Clear Pricing',
      description: 'Value engineering is in our DNA. We maximize your capital with direct quarry and steel mill sourcing, eliminating middleman markups without sacrificing caliber.',
      stats: '14% Average Capital Savings',
      bullets: [
        'Guaranteed maximum price (GMP) contracting models',
        'Lean procurement with direct manufacturer supply chains',
        'Zero surprise change orders through BIM pre-planning',
      ],
    },
  };

  const pillarCard = document.getElementById('pillar-detail-card');
  const cardTitle = document.getElementById('pillar-card-title');
  const cardSub = document.getElementById('pillar-card-subtitle');
  const cardDesc = document.getElementById('pillar-card-desc');
  const cardStat = document.getElementById('pillar-card-stat');
  const cardBullets = document.getElementById('pillar-card-bullets');

  let activePillar = null;

  document.querySelectorAll('.pillar-item').forEach((item) => {
    item.addEventListener('click', () => {
      const pillarKey = item.getAttribute('data-pillar');
      if (activePillar === pillarKey) {
        pillarCard.classList.add('hidden');
        activePillar = null;
        return;
      }
      activePillar = pillarKey;
      const data = pillarDetails[pillarKey];
      if (!data) return;

      cardTitle.textContent = data.title;
      cardSub.textContent = data.subtitle;
      cardDesc.textContent = data.description;
      cardStat.textContent = data.stats;

      cardBullets.innerHTML = data.bullets.map(b => `
        <li class="card-bullet-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-4 h-4 text-green shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${b}</span>
        </li>
      `).join('');

      pillarCard.classList.remove('hidden');
    });
  });

  document.getElementById('btn-close-pillar')?.addEventListener('click', () => {
    pillarCard.classList.add('hidden');
    activePillar = null;
  });

  /* =========================================================
     4. ABOUT SECTION TABS CONTROLLER
     ========================================================= */
  const aboutTabsData = {
    story: {
      tagline: 'FROM HUMBLE ROOTS TO REGIONAL BENCHMARK',
      heading: '28 Years of Shaping the Built Environment',
      description: 'Founded in 1998 in Austin, Texas, Stoneway Construction began with a single flatbed truck and an unwavering dedication to integrity. Over three decades, we have grown into one of the most respected general contracting and civil infrastructure firms in the Southwest, delivering over 450 residential, commercial, and municipal projects.',
      metrics: [
        { label: 'Founded In', value: '1998' },
        { label: 'Completed Projects', value: '450+' },
        { label: 'Craftsmen & Staff', value: '120+' },
      ],
    },
    approach: {
      tagline: 'COLLABORATIVE PRECISION & LEAN EXECUTION',
      heading: 'Integrated Design-Build & Direct Control',
      description: 'We do not outsource our accountability. By combining in-house BIM 3D spatial modeling, dedicated heavy equipment fleets, and self-performed concrete and structural framing, Stoneway eliminates friction, minimizes schedule creep, and guarantees architectural intent from groundbreaking to final handover.',
      metrics: [
        { label: 'In-House Trades', value: '85%' },
        { label: 'Average Timeline Delivery', value: '99.4%' },
        { label: 'BIM Spatial Accuracy', value: '±2mm' },
      ],
    },
    standards: {
      tagline: 'ZERO-COMPROMISE QUALITY & SAFETY GOVERNANCE',
      heading: 'Engineered for 50+ Years of Resilient Performance',
      description: 'Every Stoneway job site enforces peer-reviewed QA/QC checkpoints and zero-incident OSHA protocols. We partner with leading material scientists, utilizing low-carbon high-strength concrete mixes and precision laser-guided grading to construct assets that stand strong against time and climate.',
      metrics: [
        { label: 'Safety Incident Rate', value: '0.00' },
        { label: 'Structural Assurance', value: '50 Yrs' },
        { label: 'LEED Certified Builds', value: '64' },
      ],
    },
  };

  const aboutTagline = document.getElementById('about-tagline');
  const aboutHeading = document.getElementById('about-heading');
  const aboutDesc = document.getElementById('about-desc');
  const aboutMetrics = document.getElementById('about-metrics-container');

  function renderAboutTab(tabKey) {
    const data = aboutTabsData[tabKey];
    if (!data) return;

    if (aboutTagline) aboutTagline.textContent = data.tagline;
    if (aboutHeading) aboutHeading.textContent = data.heading;
    if (aboutDesc) aboutDesc.textContent = data.description;

    if (aboutMetrics) {
      aboutMetrics.innerHTML = data.metrics.map(m => `
        <div class="metric-item">
          <span class="metric-val">${m.value}</span>
          <span class="metric-lbl">${m.label}</span>
        </div>
      `).join('');
    }

    document.querySelectorAll('.about-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  document.querySelectorAll('.about-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      renderAboutTab(tabKey);
    });
  });

  renderAboutTab('approach');

  document.getElementById('btn-about-learn-more')?.addEventListener('click', () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* =========================================================
     5. SERVICES SECTION & DETAIL MODAL
     ========================================================= */
  const servicesList = [
    {
      id: 'construction',
      title: 'CONSTRUCTION',
      subtitle: 'Commercial & Multi-Story Framing',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=800&q=80',
      description: 'Turnkey commercial, institutional, and industrial building construction. We engineer structural steel frames, post-tensioned slabs, and precast concrete envelopes with unmatched precision.',
      scope: [
        'Multi-story commercial office & retail buildings',
        'Industrial warehouses & logistics facilities',
        'Civil infrastructure & institutional structures',
        'Seismic-rated foundation engineering',
      ],
    },
    {
      id: 'renovation',
      title: 'RENOVATION',
      subtitle: 'Adaptive Reuse & Modernization',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
      description: 'Transforming existing footprints into modern, energy-efficient spaces. Complete tenant finish-outs, structural retrofitting, and historic restorations executed with minimal tenant disruption.',
      scope: [
        'Commercial tenant improvements & build-outs',
        'Historic masonry & structural seismic retrofitting',
        'HVAC, MEP, and electrical system modernization',
        'Interior architectural space reconfiguration',
      ],
    },
    {
      id: 'planning',
      title: 'PLANNING',
      subtitle: 'Pre-Construction & 3D BIM Design',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      description: 'Flawless execution begins with rigorous pre-construction planning. Utilizing BIM level-300 digital modeling, clash detection, budget modeling, and municipal permit facilitation.',
      scope: [
        '3D Building Information Modeling (BIM)',
        'Clash detection & value engineering analysis',
        'Comprehensive zoning, permitting & code review',
        'Life-cycle cost optimization & procurement schedules',
      ],
    },
    {
      id: 'concrete-works',
      title: 'CONCRETE WORKS',
      subtitle: 'Cast-In-Place & High-Strength Pouring',
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80',
      description: 'Specialized in deep foundation piling, continuous slab pours, tilt-up walls, and polished architectural finishes with laser-screed flatness standards and lab-verified cure strengths.',
      scope: [
        'High-tolerance laser-screed concrete slabs',
        'Reinforced post-tensioned foundation pours',
        'Precast tilt-up walls & architectural columns',
        'Retaining walls & heavy civil earthworks',
      ],
    },
  ];

  const modalDetail = document.getElementById('modal-service-detail');
  const detailImg = document.getElementById('detail-img');
  const detailTitle = document.getElementById('detail-title');
  const detailSub = document.getElementById('detail-subtitle');
  const detailDesc = document.getElementById('detail-desc');
  const detailScope = document.getElementById('detail-scope-grid');
  const detailBidBtn = document.getElementById('btn-detail-request-bid');
  const detailBidText = document.getElementById('detail-bid-text');

  let selectedServiceObj = null;

  function openServiceModal(service) {
    selectedServiceObj = service;
    detailImg.src = service.image;
    detailTitle.textContent = service.title;
    detailSub.textContent = service.subtitle;
    detailDesc.textContent = service.description;
    detailBidText.textContent = `Request Bid for ${service.title}`;

    detailScope.innerHTML = service.scope.map(item => `
      <div class="detail-scope-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-green shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span>${item}</span>
      </div>
    `).join('');

    modalDetail.classList.remove('hidden');
  }

  function closeServiceModal() {
    modalDetail.classList.add('hidden');
    selectedServiceObj = null;
  }

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const sId = card.getAttribute('data-service');
      const found = servicesList.find(s => s.id === sId);
      if (found) openServiceModal(found);
    });
  });

  document.getElementById('btn-view-service')?.addEventListener('click', () => {
    openServiceModal(servicesList[0]);
  });

  document.getElementById('btn-close-detail')?.addEventListener('click', closeServiceModal);
  document.getElementById('btn-back-services')?.addEventListener('click', closeServiceModal);

  /* =========================================================
     6. QUOTE ESTIMATOR MODAL
     ========================================================= */
  const modalQuote = document.getElementById('modal-quote');
  const quoteForm = document.getElementById('quote-form');
  const quoteSuccess = document.getElementById('quote-success-view');

  const sqftSlider = document.getElementById('sqft-slider');
  const sqftDisplay = document.getElementById('sqft-display');
  const bracketDisplay = document.getElementById('bracket-display');

  const serviceCostMap = {
    'construction': 180,
    'renovation': 120,
    'planning': 25,
    'concrete-works': 95,
  };

  let selectedType = 'construction';
  let activeBaseCost = 180;

  function updateEstimate() {
    const sqft = Number(sqftSlider.value);
    sqftDisplay.textContent = `${sqft.toLocaleString()} SQ. FT.`;
    const min = Math.round(sqft * activeBaseCost * 0.85);
    const max = Math.round(sqft * activeBaseCost * 1.15);
    bracketDisplay.textContent = `$${Math.round(min / 1000).toLocaleString()}k – $${Math.round(max / 1000).toLocaleString()}k`;
  }

  document.querySelectorAll('.btn-service-type').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-service-type').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedType = btn.getAttribute('data-type');
      activeBaseCost = Number(btn.getAttribute('data-cost')) || 180;
      updateEstimate();
    });
  });

  sqftSlider?.addEventListener('input', updateEstimate);

  function openQuoteModal(preselectedServiceId = null) {
    if (preselectedServiceId) {
      const matchBtn = document.querySelector(`.btn-service-type[data-type="${preselectedServiceId}"]`);
      if (matchBtn) matchBtn.click();
    }
    quoteForm.classList.remove('hidden');
    quoteSuccess.classList.add('hidden');
    modalQuote.classList.remove('hidden');
  }

  function closeQuoteModal() {
    modalQuote.classList.add('hidden');
  }

  document.getElementById('btn-top-quote')?.addEventListener('click', () => openQuoteModal());
  document.getElementById('btn-footer-quote')?.addEventListener('click', () => openQuoteModal());
  document.getElementById('btn-close-quote')?.addEventListener('click', closeQuoteModal);
  document.getElementById('btn-cancel-quote')?.addEventListener('click', closeQuoteModal);
  document.getElementById('btn-close-success')?.addEventListener('click', closeQuoteModal);

  detailBidBtn?.addEventListener('click', () => {
    const sId = selectedServiceObj ? selectedServiceObj.id : null;
    closeServiceModal();
    openQuoteModal(sId);
  });

  quoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('quote-name').value || 'Client';
    const sqft = Number(sqftSlider.value);
    const min = Math.round(sqft * activeBaseCost * 0.85);
    const max = Math.round(sqft * activeBaseCost * 1.15);
    const refId = `STW-${Math.floor(100000 + Math.random() * 900000)}`;

    document.getElementById('success-client-name').textContent = name;
    document.getElementById('success-service-name').textContent = selectedType.toUpperCase();
    document.getElementById('success-sqft').textContent = sqft.toLocaleString();
    document.getElementById('success-range').textContent = `$${min.toLocaleString()} - $${max.toLocaleString()}`;
    document.getElementById('success-ref-id').textContent = refId;

    quoteForm.classList.add('hidden');
    quoteSuccess.classList.remove('hidden');
  });

  /* =========================================================
     7. SEARCH MODAL CONTROLLER
     ========================================================= */
  const modalSearch = document.getElementById('modal-search');
  const searchInput = document.getElementById('search-input');
  const searchResultsList = document.getElementById('search-results-list');
  const searchStatusLabel = document.getElementById('search-status-label');

  const searchableItems = [
    {
      title: 'Commercial Construction & Framing',
      category: 'Services',
      desc: 'Multi-story office, institutional structures, structural steel, deep concrete foundation works.',
      target: 'services',
    },
    {
      title: 'Commercial Renovation & Retrofitting',
      category: 'Services',
      desc: 'Tenant finish-outs, adaptive reuse, seismic upgrading, MEP modernization.',
      target: 'services',
    },
    {
      title: 'Pre-Construction & 3D BIM Planning',
      category: 'Services',
      desc: 'Clash detection, zoning feasibility, budget modeling, virtual project coordination.',
      target: 'services',
    },
    {
      title: 'Cast-In-Place Concrete Works',
      category: 'Services',
      desc: 'Laser-screed flat slabs, tilt-up walls, post-tensioned foundations, civil earthworks.',
      target: 'services',
    },
    {
      title: 'Our Story (Since 1998)',
      category: 'Company',
      desc: 'Over 28 years building the Southwestern corridor across 450+ milestone projects.',
      target: 'company',
    },
    {
      title: 'Our Approach & BIM Integration',
      category: 'Company',
      desc: 'Self-performed core trades, direct equipment fleet, and lean construction management.',
      target: 'company',
    },
    {
      title: 'Zero-Incident Safety Standards',
      category: 'Standards',
      desc: 'OSHA 30-hr site supervisors, ISO-9001 compliance, and 50-year structural assurance.',
      target: 'company',
    },
  ];

  function renderSearchResults(q) {
    const term = q.trim().toLowerCase();
    const filtered = term
      ? searchableItems.filter(i =>
          i.title.toLowerCase().includes(term) ||
          i.desc.toLowerCase().includes(term) ||
          i.category.toLowerCase().includes(term)
        )
      : searchableItems.slice(0, 4);

    searchStatusLabel.textContent = term ? `Found ${filtered.length} results` : 'Popular Searches';

    searchResultsList.innerHTML = filtered.map(item => `
      <div class="search-result-item" data-target="${item.target}">
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-stone-900">${item.title}</span>
            <span class="text-[10px] text-stone-400 font-semibold uppercase">· ${item.category}</span>
          </div>
          <p class="text-[11px] text-stone-500 mt-1">${item.desc}</p>
        </div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-stone-300 shrink-0"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>
    `).join('');

    document.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const targetId = el.getAttribute('data-target');
        closeSearchModal();
        const elem = document.getElementById(targetId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function openSearchModal() {
    modalSearch.classList.remove('hidden');
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeSearchModal() {
    modalSearch.classList.add('hidden');
  }

  document.getElementById('btn-open-search')?.addEventListener('click', openSearchModal);
  document.getElementById('btn-mobile-search')?.addEventListener('click', openSearchModal);
  document.getElementById('btn-close-search')?.addEventListener('click', closeSearchModal);
  document.getElementById('btn-clear-search')?.addEventListener('click', () => {
    searchInput.value = '';
    renderSearchResults('');
    searchInput.focus();
  });

  searchInput?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  /* =========================================================
     8. GLOBAL NAVIGATION & MOBILE MENU
     ========================================================= */
  const mobileMenu = document.getElementById('mobile-menu');
  const iconBars = document.getElementById('menu-icon-bars');
  const iconClose = document.getElementById('menu-icon-close');

  document.getElementById('btn-mobile-menu')?.addEventListener('click', () => {
    const isClosed = mobileMenu.classList.contains('hidden');
    if (isClosed) {
      mobileMenu.classList.remove('hidden');
      iconBars.classList.add('hidden');
      iconClose.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      iconBars.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.add('hidden');
        iconBars.classList.remove('hidden');
        iconClose.classList.add('hidden');

        document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
        const matched = document.querySelector(`.nav-link[data-target="${targetId}"]`);
        if (matched) matched.classList.add('active');
      }
    });
  });

  // Close modals on Escape key or backdrop click
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuoteModal();
      closeSearchModal();
      closeServiceModal();
    }
  });

  [modalQuote, modalSearch, modalDetail].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeQuoteModal();
        closeSearchModal();
        closeServiceModal();
      }
    });
  });

  // Dynamic Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
