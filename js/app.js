document.addEventListener('DOMContentLoaded', () => {
    const galleryHeader = document.getElementById('gallery-header');
    const mapListSection = document.getElementById('map-list');
    const mapDetailSection = document.getElementById('map-detail');
    const backBtn = document.getElementById('back-btn');
    const resetViewBtn = document.getElementById('reset-view-btn');
    const langBtnZh = document.getElementById('lang-btn-zh');
    const langBtnEn = document.getElementById('lang-btn-en');

    let leafletMapInstance = null;
    let currentMarker = null;
    let currentMapId = null;

    function getStoredLang() {
        try {
            return localStorage.getItem('preferred_lang') || 'zh';
        } catch (e) {
            return 'zh';
        }
    }

    function setStoredLang(lang) {
        try {
            localStorage.setItem('preferred_lang', lang);
        } catch (e) {}
    }

    let currentLang = getStoredLang();

    function getT() {
        return (typeof i18n !== 'undefined' && i18n[currentLang]) ? i18n[currentLang] : ((typeof i18n !== 'undefined' && i18n.zh) ? i18n.zh : {});
    }

    function getMaps() {
        return (typeof mapsData !== 'undefined' && mapsData[currentLang]) ? mapsData[currentLang] : ((typeof mapsData !== 'undefined' && mapsData.zh) ? mapsData.zh : []);
    }

    function getCurrentMap() {
        if (!currentMapId) return null;
        return getMaps().find(m => m.id === currentMapId);
    }

    // Update all static UI strings on the page
    function updateUIStrings() {
        const t = getT();

        // Header
        const siteSubtitle = document.getElementById('site-subtitle');
        if (siteSubtitle && t.siteSubtitle) siteSubtitle.textContent = t.siteSubtitle;
        const siteTitle = document.getElementById('site-title');
        if (siteTitle && t.siteTitle) siteTitle.textContent = t.siteTitle;
        const siteTagline = document.getElementById('site-tagline');
        if (siteTagline && t.siteTagline) siteTagline.textContent = t.siteTagline;

        // Gallery Header
        const galleryBadge = document.getElementById('gallery-badge');
        if (galleryBadge && t.galleryBadge) galleryBadge.textContent = t.galleryBadge;
        const galleryTitle = document.getElementById('gallery-title');
        if (galleryTitle && t.galleryTitle) galleryTitle.textContent = t.galleryTitle;
        const galleryDesc = document.getElementById('gallery-desc');
        if (galleryDesc && t.galleryDesc) galleryDesc.textContent = t.galleryDesc;

        // Back Button
        const backBtnText = document.getElementById('back-btn-text');
        if (backBtnText && t.backToGallery) backBtnText.textContent = t.backToGallery;

        // Quick Guide Bar
        const quickBadge = document.getElementById('quick-guide-badge');
        if (quickBadge && t.quickGuideBadge) quickBadge.textContent = t.quickGuideBadge;
        const quickTip = document.getElementById('quick-guide-tip');
        if (quickTip && t.quickGuideTip) quickTip.textContent = t.quickGuideTip;

        // Hints & Reset
        const hintText = document.getElementById('viewer-hint-text');
        if (hintText && t.fullscreenTip) hintText.innerHTML = t.fullscreenTip;
        if (resetViewBtn && t.resetView) resetViewBtn.textContent = t.resetView;

        // Overview & Focal Areas Section Headers
        const overviewBadge = document.getElementById('overview-badge');
        if (overviewBadge && t.overviewBadge) overviewBadge.textContent = t.overviewBadge;
        const focalBadge = document.getElementById('focal-badge');
        if (focalBadge && t.focalBadge) focalBadge.textContent = t.focalBadge;
        const focalTitle = document.getElementById('focal-title');
        if (focalTitle && t.focalTitle) focalTitle.textContent = t.focalTitle;
        const focalSubtitle = document.getElementById('focal-subtitle');
        if (focalSubtitle && t.focalSubtitle) focalSubtitle.textContent = t.focalSubtitle;

        // Footer
        const footerTagline = document.getElementById('footer-tagline');
        if (footerTagline && t.footerTagline) footerTagline.textContent = t.footerTagline;
        const footerCopyText = document.getElementById('footer-copy-text');
        if (footerCopyText && t.footerCopyText) footerCopyText.textContent = t.footerCopyText;

        updateFullscreenUI();
    }

    // Set Language handler
    function setLanguage(lang) {
        currentLang = lang;
        setStoredLang(lang);
        document.documentElement.lang = (lang === 'zh' ? 'zh-CN' : 'en');

        // Update toggle button states
        if (lang === 'zh') {
            langBtnZh?.classList.add('bg-sepia-600', 'text-white', 'shadow-xs');
            langBtnZh?.classList.remove('text-sepia-300', 'hover:text-white');
            langBtnEn?.classList.remove('bg-sepia-600', 'text-white', 'shadow-xs');
            langBtnEn?.classList.add('text-sepia-300', 'hover:text-white');
        } else {
            langBtnEn?.classList.add('bg-sepia-600', 'text-white', 'shadow-xs');
            langBtnEn?.classList.remove('text-sepia-300', 'hover:text-white');
            langBtnZh?.classList.remove('bg-sepia-600', 'text-white', 'shadow-xs');
            langBtnZh?.classList.add('text-sepia-300', 'hover:text-white');
        }

        updateUIStrings();

        // Re-render currently active view
        if (!mapDetailSection.classList.contains('hidden') && currentMapId) {
            const activeMap = getCurrentMap();
            if (activeMap) {
                let prevCenter = null;
                let prevZoom = null;
                if (leafletMapInstance) {
                    prevCenter = leafletMapInstance.getCenter();
                    prevZoom = leafletMapInstance.getZoom();
                }
                showMapDetail(activeMap, false);
                if (prevCenter && leafletMapInstance) {
                    leafletMapInstance.setView(prevCenter, prevZoom, { animate: false });
                }
            }
        } else {
            renderMapList();
        }
    }

    // Render Map List View
    function renderMapList() {
        if (galleryHeader) galleryHeader.classList.remove('hidden');
        mapListSection.innerHTML = '';
        currentMapId = null;

        const maps = getMaps();
        const t = getT();

        maps.forEach(map => {
            const card = document.createElement('div');
            card.className = 'card-container bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition border border-sepia-200 flex flex-col group';
            card.innerHTML = `
                <div class="h-64 overflow-hidden relative border-b-2 border-sepia-300">
                    <img src="${map.image}" alt="${map.title}" class="card-zoom-image w-full h-full object-cover object-center">
                    <div class="absolute inset-0 bg-sepia-900 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-xs">
                        <span class="text-white text-base font-bold bg-sepia-700 bg-opacity-90 px-5 py-2.5 rounded-full border border-sepia-300 shadow-lg tracking-wider">
                            ${t.exploreMapBtn}
                        </span>
                    </div>
                    <span class="absolute top-3 left-3 bg-sepia-900 text-sepia-100 text-xs px-2.5 py-1 rounded shadow">
                        ${map.year}
                    </span>
                </div>
                <div class="p-6 flex-grow flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-1">
                            <h3 class="text-2xl font-bold text-sepia-900">${map.title}</h3>
                        </div>
                        <p class="text-sepia-600 text-sm mb-3 italic">${map.author}</p>
                        <p class="text-stone-600 text-sm leading-relaxed mb-4">${map.shortDescription}</p>
                    </div>
                    <div class="pt-3 border-t border-sepia-100 flex items-center justify-between text-xs text-sepia-500 font-sans">
                        <span>${map.cardTag || '高清历史地图'}</span>
                        <span class="text-sepia-700 font-semibold group-hover:underline">${t.clickToExplore}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => showMapDetail(map, true));
            mapListSection.appendChild(card);
        });
    }

    // Helper: Fly to coordinates on map and show a styled popup
    function flyToCoords(xPercent, yPercent, zoomLevel, title, description, w0, h0) {
        if (!leafletMapInstance) return;

        const targetX = (xPercent / 100) * w0;
        const targetY = (yPercent / 100) * h0;
        const latLng = [-targetY, targetX];

        // Smooth flight
        leafletMapInstance.flyTo(latLng, zoomLevel, {
            animate: true,
            duration: 1.2
        });

        // Add or update popup marker
        if (currentMarker) {
            leafletMapInstance.removeLayer(currentMarker);
        }

        currentMarker = L.popup({ closeButton: true, offset: [0, -5] })
            .setLatLng(latLng)
            .setContent(`
                <div class="p-1 max-w-xs font-serif">
                    <h4 class="font-bold text-sm text-sepia-900 border-b border-sepia-200 pb-1 mb-1">${title}</h4>
                    <p class="text-xs text-sepia-700 leading-normal">${description || ''}</p>
                </div>
            `)
            .openOn(leafletMapInstance);

        // Scroll smoothly to map view
        const viewerEl = document.getElementById('viewer-container');
        if (viewerEl) {
            viewerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Show Map Detail
    function showMapDetail(map, shouldFitBounds = true) {
        currentMapId = map.id;
        const t = getT();

        // Toggle views
        if (galleryHeader) galleryHeader.classList.add('hidden');
        mapListSection.classList.add('hidden');
        mapDetailSection.classList.remove('hidden');
        if (shouldFitBounds) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Header info
        document.getElementById('detail-title').textContent = map.title;
        document.getElementById('detail-subtitle').textContent = `${map.subtitle} · ${map.author}`;
        const badgeEl = document.getElementById('detail-badge');
        if (badgeEl) badgeEl.textContent = map.badge || `${map.year}`;

        // Initialize or update Leaflet Map
        const mapW = map.tiles.width;
        const mapH = map.tiles.height;
        const maxZ = map.tiles.maxZoom;

        // Leaflet L.CRS.Simple: 1 unit = 1 pixel at zoom level 0
        const w0 = mapW / Math.pow(2, maxZ);
        const h0 = mapH / Math.pow(2, maxZ);
        const bounds = [[-h0, 0], [0, w0]];

        if (leafletMapInstance) {
            leafletMapInstance.remove();
            leafletMapInstance = null;
        }

        const container = document.getElementById('viewer-container');
        container.innerHTML = '<div id="leaflet-map" style="width:100%; height:100%; background: #1c1917;"></div>';

        const leafletMap = L.map('leaflet-map', {
            crs: L.CRS.Simple,
            minZoom: 0,
            maxZoom: maxZ,
            maxBounds: bounds,
            maxBoundsViscosity: 0.9,
            attributionControl: false
        });

        L.tileLayer(map.tiles.url, {
            minZoom: 0,
            maxZoom: maxZ,
            noWrap: true,
            tms: false,
            bounds: bounds
        }).addTo(leafletMap);

        if (shouldFitBounds) {
            leafletMap.fitBounds(bounds);
        }
        leafletMapInstance = leafletMap;

        // Invalidate size to guarantee rendering
        setTimeout(() => {
            leafletMap.invalidateSize();
            if (shouldFitBounds) {
                leafletMap.fitBounds(bounds);
            }
        }, 150);

        // Reset view button
        if (resetViewBtn) {
            resetViewBtn.onclick = () => {
                if (currentMarker) {
                    leafletMap.removeLayer(currentMarker);
                    currentMarker = null;
                }
                leafletMap.flyToBounds(bounds, { duration: 1.0 });
            };
        }

        // 1. Populate Quick Jump Pills
        const pillsContainer = document.getElementById('quick-jump-pills');
        pillsContainer.innerHTML = '';
        const quickNavTargets = map.quickNavTargets || [];

        quickNavTargets.forEach(target => {
            const btn = document.createElement('button');
            btn.className = 'whitespace-nowrap px-3 py-1 rounded bg-white hover:bg-sepia-200 text-sepia-900 border border-sepia-300 font-sans text-xs transition shadow-2xs hover:shadow cursor-pointer';
            btn.textContent = target.label;
            btn.addEventListener('click', () => {
                flyToCoords(target.x, target.y, target.z, target.label, target.desc, w0, h0);
            });
            pillsContainer.appendChild(btn);
        });

        // 2. Populate Section 1: Overview Grid
        const overviewGrid = document.getElementById('overview-grid');
        overviewGrid.innerHTML = `
            <div class="bg-sepia-50 p-6 rounded-lg border-t-4 border-sepia-600 shadow-sm">
                <div class="flex items-center space-x-2 mb-3">
                    <span class="text-xl">📜</span>
                    <h4 class="text-lg font-bold text-sepia-900">${t.overviewCol1Title}</h4>
                </div>
                <p class="text-sm text-stone-700 leading-relaxed text-justify">${map.overview.background}</p>
            </div>
            <div class="bg-sepia-50 p-6 rounded-lg border-t-4 border-sepia-500 shadow-sm">
                <div class="flex items-center space-x-2 mb-3">
                    <span class="text-xl">🌐</span>
                    <h4 class="text-lg font-bold text-sepia-900">${t.overviewCol2Title}</h4>
                </div>
                <p class="text-sm text-stone-700 leading-relaxed text-justify">${map.overview.projection}</p>
            </div>
            <div class="bg-sepia-50 p-6 rounded-lg border-t-4 border-sepia-700 shadow-sm">
                <div class="flex items-center space-x-2 mb-3">
                    <span class="text-xl">🏛️</span>
                    <h4 class="text-lg font-bold text-sepia-900">${t.overviewCol3Title}</h4>
                </div>
                <p class="text-sm text-stone-700 leading-relaxed text-justify">${map.overview.legacy}</p>
            </div>
        `;

        // 3. Populate Section 2: Core Focal Areas (图文细读)
        const focalGrid = document.getElementById('focal-areas-grid');
        focalGrid.innerHTML = '';
        map.focalAreas.forEach(area => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-xl shadow-md border border-sepia-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition';
            
            let sectionsHtml = area.sections.map(s => `
                <div class="mb-3">
                    <span class="inline-block text-xs font-bold text-sepia-800 bg-sepia-100 px-2 py-0.5 rounded mr-1">${s.label}</span>
                    <span class="text-sm text-stone-700 leading-relaxed">${s.text}</span>
                </div>
            `).join('');

            card.innerHTML = `
                <div>
                    <!-- Header -->
                    <div class="p-6 border-b border-sepia-100 flex items-start justify-between">
                        <div>
                            <span class="seal-badge mb-1">${area.badge}</span>
                            <h4 class="text-xl font-bold text-sepia-900">${area.name}</h4>
                            <p class="text-xs text-sepia-600 italic mt-0.5">${area.subtitle}</p>
                        </div>
                        <button class="fly-btn shrink-0 ml-3 inline-flex items-center text-xs bg-sepia-700 hover:bg-sepia-800 text-white px-3 py-1.5 rounded-full shadow transition cursor-pointer" title="${t.locateOnMap}">
                            <span>${t.locateOnMap}</span>
                            <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                    </div>

                    <!-- Ancient Quote -->
                    <div class="px-6 pt-4 pb-2">
                        <blockquote class="quote-ancient rounded text-xs">
                            ${area.quote}
                        </blockquote>
                    </div>

                    <!-- Explanations -->
                    <div class="p-6 pt-3 space-y-3">
                        ${sectionsHtml}
                    </div>
                </div>

                <!-- Preview Thumbnail / Jump footer -->
                <div class="p-6 pt-0">
                    <div class="local-view cursor-pointer" style="background-image: url('${map.image}'); background-position: ${area.bgPosition}; background-size: ${area.bgSize};" title="${t.clickToFlyHint}">
                        <div class="w-full h-full flex items-end p-2 bg-gradient-to-t from-black/60 to-transparent rounded">
                            <span class="text-white text-xs font-sans tracking-wide">${t.clickToFlyHint}</span>
                        </div>
                    </div>
                </div>
            `;

            // Bind click to fly
            const flyHandler = () => {
                flyToCoords(area.coords.x, area.coords.y, area.coords.zoom, area.name, area.subtitle, w0, h0);
            };
            card.querySelector('.fly-btn').addEventListener('click', flyHandler);
            card.querySelector('.local-view').addEventListener('click', flyHandler);

            focalGrid.appendChild(card);
        });

        // 4. Populate Section 3: Scientific Gems
        if (map.scientificSection) {
            if (map.scientificSection.badge && document.getElementById('scientific-badge'))
                document.getElementById('scientific-badge').textContent = map.scientificSection.badge;
            if (map.scientificSection.title && document.getElementById('scientific-title'))
                document.getElementById('scientific-title').textContent = map.scientificSection.title;
            if (map.scientificSection.desc && document.getElementById('scientific-desc'))
                document.getElementById('scientific-desc').textContent = map.scientificSection.desc;
        }

        const sciGrid = document.getElementById('scientific-grid');
        sciGrid.innerHTML = '';
        (map.scientificGems || []).forEach(gem => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg p-5 border border-sepia-300 shadow-sm flex flex-col justify-between hover:border-sepia-500 transition group';
            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-sepia-600 font-sans">${gem.tag}</span>
                        <span class="text-xs bg-sepia-100 text-sepia-800 px-1.5 py-0.5 rounded font-mono">${gem.dateTag || map.year}</span>
                    </div>
                    <h5 class="text-base font-bold text-sepia-900 mb-1">${gem.name}</h5>
                    <p class="text-xs text-sepia-700 italic mb-2 font-medium">${gem.summary}</p>
                    <p class="text-xs text-stone-600 leading-relaxed mb-4">${gem.desc}</p>
                </div>
                <button class="w-full py-1.5 text-xs text-center border border-sepia-400 hover:bg-sepia-700 hover:text-white rounded transition text-sepia-800 font-medium cursor-pointer">
                    ${t.locateViewBtn}
                </button>
            `;
            card.querySelector('button').addEventListener('click', () => {
                flyToCoords(gem.coords.x, gem.coords.y, gem.coords.zoom, gem.name, gem.summary, w0, h0);
            });
            sciGrid.appendChild(card);
        });

        // 5. Populate Section 4: Special Features / Mythical Beasts
        const beastsGrid = document.getElementById('beasts-grid');
        beastsGrid.innerHTML = '';
        if (map.specialFeaturesBadge && document.getElementById('beasts-badge'))
            document.getElementById('beasts-badge').textContent = map.specialFeaturesBadge;
        if (map.specialFeaturesTitle && document.getElementById('beasts-title'))
            document.getElementById('beasts-title').textContent = map.specialFeaturesTitle;

        const features = map.specialFeatures || map.mythicalBeasts || [];
        features.forEach(beast => {
            const div = document.createElement('div');
            div.className = 'p-6 rounded-lg bg-sepia-50 border-l-4 border-sepia-600 space-y-2';
            div.innerHTML = `
                <h4 class="text-lg font-bold text-sepia-900">${beast.name}</h4>
                <p class="text-sm text-stone-700 leading-relaxed">${beast.desc}</p>
            `;
            beastsGrid.appendChild(div);
        });

        // 6. Populate Section 5: Etymology Glossary
        if (map.etymologySection) {
            if (map.etymologySection.badge && document.getElementById('etymology-badge'))
                document.getElementById('etymology-badge').textContent = map.etymologySection.badge;
            if (map.etymologySection.title && document.getElementById('etymology-title'))
                document.getElementById('etymology-title').textContent = map.etymologySection.title;
            if (map.etymologySection.subtitle && document.getElementById('etymology-subtitle'))
                document.getElementById('etymology-subtitle').textContent = map.etymologySection.subtitle;
        }

        const etymContainer = document.getElementById('etymology-container');
        etymContainer.innerHTML = '';
        (map.etymologyGlossary || []).forEach(item => {
            const card = document.createElement('div');
            card.className = 'etym-card p-4 rounded-lg flex flex-col justify-between';
            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-base font-bold text-sepia-900 font-serif">${item.ancient}</span>
                        <span class="text-xs font-bold text-sepia-800 bg-sepia-100 px-2 py-0.5 rounded">${t.modernTag}${item.modern}</span>
                    </div>
                    <div class="text-xs text-stone-500 font-mono mb-2">${item.foreign}</div>
                    <p class="text-xs text-stone-600 mb-2 font-sans font-medium"><span class="text-sepia-700 font-bold">${t.etymMeaningTag}</span>${item.meaning}</p>
                </div>
                <div class="pt-2 border-t border-sepia-100 text-xs text-sepia-700 italic">
                    ${item.note}
                </div>
            `;
            etymContainer.appendChild(card);
        });
    }

    // Back to catalog list
    backBtn.addEventListener('click', () => {
        mapDetailSection.classList.add('hidden');
        mapListSection.classList.remove('hidden');
        if (galleryHeader) galleryHeader.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (leafletMapInstance) {
            leafletMapInstance.remove();
            leafletMapInstance = null;
        }
        currentMarker = null;
        currentMapId = null;
    });

    // Fullscreen Controller
    const viewerCard = document.getElementById('viewer-card');
    const floatingFsBtn = document.getElementById('floating-fullscreen-btn');
    const footerFsBtn = document.getElementById('footer-fullscreen-btn');
    const fsIconEnter = document.getElementById('fullscreen-icon-enter');
    const fsIconExit = document.getElementById('fullscreen-icon-exit');
    const fsBtnText = document.getElementById('fullscreen-btn-text');

    function isFullscreenActive() {
        return !!(
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            viewerCard?.classList.contains('fullscreen-fallback')
        );
    }

    function updateFullscreenUI() {
        const active = isFullscreenActive();
        const t = getT();
        if (active) {
            fsIconEnter?.classList.add('hidden');
            fsIconExit?.classList.remove('hidden');
            if (fsBtnText) fsBtnText.textContent = t.fullscreenExit || '退出全屏 (ESC)';
            if (footerFsBtn) footerFsBtn.textContent = t.fullscreenBtnFooterExit || '✕ 退出全屏';
        } else {
            fsIconEnter?.classList.remove('hidden');
            fsIconExit?.classList.add('hidden');
            if (fsBtnText) fsBtnText.textContent = t.fullscreenEnter || '全屏沉浸浏览';
            if (footerFsBtn) footerFsBtn.textContent = t.fullscreenBtnFooter || '⛶ 全屏显示';
            viewerCard?.classList.remove('fullscreen-fallback');
        }

        setTimeout(() => {
            if (leafletMapInstance) {
                leafletMapInstance.invalidateSize();
            }
        }, 150);
    }

    function toggleFullscreen() {
        if (!viewerCard) return;

        if (isFullscreenActive()) {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else {
                viewerCard.classList.remove('fullscreen-fallback');
                updateFullscreenUI();
            }
        } else {
            if (viewerCard.requestFullscreen) {
                viewerCard.requestFullscreen().catch(() => {
                    viewerCard.classList.add('fullscreen-fallback');
                    updateFullscreenUI();
                });
            } else if (viewerCard.webkitRequestFullscreen) {
                viewerCard.webkitRequestFullscreen();
            } else {
                viewerCard.classList.add('fullscreen-fallback');
                updateFullscreenUI();
            }
        }
    }

    if (floatingFsBtn) floatingFsBtn.addEventListener('click', toggleFullscreen);
    if (footerFsBtn) footerFsBtn.addEventListener('click', toggleFullscreen);

    document.addEventListener('fullscreenchange', updateFullscreenUI);
    document.addEventListener('webkitfullscreenchange', updateFullscreenUI);

    // Keyboard shortcut: Press 'F' to toggle fullscreen, 'ESC' to exit fallback
    document.addEventListener('keydown', (e) => {
        if (mapDetailSection.classList.contains('hidden')) return;
        const targetTag = e.target.tagName.toLowerCase();
        if (targetTag === 'input' || targetTag === 'textarea') return;

        if (e.key === 'f' || e.key === 'F') {
            e.preventDefault();
            toggleFullscreen();
        } else if (e.key === 'Escape' && viewerCard?.classList.contains('fullscreen-fallback')) {
            viewerCard.classList.remove('fullscreen-fallback');
            updateFullscreenUI();
        }
    });

    // Language toggle event listeners
    if (langBtnZh) {
        langBtnZh.addEventListener('click', () => setLanguage('zh'));
    }
    if (langBtnEn) {
        langBtnEn.addEventListener('click', () => setLanguage('en'));
    }

    // Initialize Language & View
    setLanguage(currentLang);
});
