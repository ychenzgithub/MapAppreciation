document.addEventListener('DOMContentLoaded', () => {
    const mapListSection = document.getElementById('map-list');
    const mapDetailSection = document.getElementById('map-detail');
    const backBtn = document.getElementById('back-btn');
    const resetViewBtn = document.getElementById('reset-view-btn');
    let leafletMapInstance = null;
    let currentMarker = null;

    // Render Map List View
    function renderMapList() {
        mapListSection.innerHTML = '';
        mapsData.forEach(map => {
            const card = document.createElement('div');
            card.className = 'card-container bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition border border-sepia-200 flex flex-col group';
            card.innerHTML = `
                <div class="h-64 overflow-hidden relative border-b-2 border-sepia-300">
                    <img src="${map.image}" alt="${map.title}" class="card-zoom-image w-full h-full object-cover object-center">
                    <div class="absolute inset-0 bg-sepia-900 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-xs">
                        <span class="text-white text-base font-bold bg-sepia-700 bg-opacity-90 px-5 py-2.5 rounded-full border border-sepia-300 shadow-lg tracking-wider">
                            进入深度赏析 →
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
                        <span>彭纳投影 · 六条屏刻本</span>
                        <span class="text-sepia-700 font-semibold group-hover:underline">点击开启探索</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => showMapDetail(map));
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
    function showMapDetail(map) {
        // Toggle view
        mapListSection.classList.add('hidden');
        mapDetailSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Header info
        document.getElementById('detail-title').textContent = map.title;
        document.getElementById('detail-subtitle').textContent = `${map.subtitle} · ${map.author}`;

        // Initialize Leaflet Map
        if (leafletMapInstance) {
            leafletMapInstance.remove();
            leafletMapInstance = null;
        }

        const container = document.getElementById('viewer-container');
        container.innerHTML = '<div id="leaflet-map" style="width:100%; height:100%; background: #1c1917;"></div>';

        const mapW = map.tiles.width;
        const mapH = map.tiles.height;
        const maxZ = map.tiles.maxZoom;

        // Leaflet L.CRS.Simple: 1 unit = 1 pixel at zoom level 0
        const w0 = mapW / Math.pow(2, maxZ);
        const h0 = mapH / Math.pow(2, maxZ);
        const bounds = [[-h0, 0], [0, w0]];

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

        leafletMap.fitBounds(bounds);
        leafletMapInstance = leafletMap;

        // Invalidate size to guarantee rendering
        setTimeout(() => {
            leafletMap.invalidateSize();
            leafletMap.fitBounds(bounds);
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
        const quickNavTargets = [
            { label: "🇯🇵 日本战国茶道", x: 48.0, y: 34.0, z: 5, desc: "权常在强臣 · 只重金银及古窑器" },
            { label: "🇧🇷 巴西与苏木", x: 90.2, y: 56.3, z: 5, desc: "“此言苏木” · 早期词源学实录" },
            { label: "🪶 北美部族", x: 75.0, y: 29.5, z: 5, desc: "甘那陀村落与东部林地部族" },
            { label: "🌋 太平洋别山", x: 65.0, y: 38.0, z: 5, desc: "西语 Volcán 对音借字 · 赤色火山岛" },
            { label: "🏯 大明京省一统", x: 42.0, y: 36.0, z: 4, desc: "大明居世界中心 · 两京十三布政使司" },
            { label: "🧭 极南假说", x: 50.0, y: 88.0, z: 4, desc: "墨瓦蜡泥加 · 南北半球平衡假说" },
            { label: "🌌 九重天图(右上)", x: 88.5, y: 12.0, z: 5, desc: "右上角 · 托勒密地心说九重宇宙模型" },
            { label: "🌐 北极半球与日蚀(左上)", x: 12.0, y: 14.0, z: 5, desc: "左上角 · 赤道北半地球之图与日月蚀" },
            { label: "🌐 南极半球与节气(左下)", x: 12.0, y: 84.0, z: 5, desc: "左下角 · 赤道南半地球之图与黄赤交角" },
            { label: "🔭 天地仪(右下)", x: 86.0, y: 84.0, z: 5, desc: "右下角 · 浑天仪演象与利玛窦自撰跋文" }
        ];

        quickNavTargets.forEach(target => {
            const btn = document.createElement('button');
            btn.className = 'whitespace-nowrap px-3 py-1 rounded bg-white hover:bg-sepia-200 text-sepia-900 border border-sepia-300 font-sans text-xs transition shadow-2xs hover:shadow';
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
                    <h4 class="text-lg font-bold text-sepia-900">创制背景</h4>
                </div>
                <p class="text-sm text-stone-700 leading-relaxed text-justify">${map.overview.background}</p>
            </div>
            <div class="bg-sepia-50 p-6 rounded-lg border-t-4 border-sepia-500 shadow-sm">
                <div class="flex items-center space-x-2 mb-3">
                    <span class="text-xl">🌐</span>
                    <h4 class="text-lg font-bold text-sepia-900">投影与格局</h4>
                </div>
                <p class="text-sm text-stone-700 leading-relaxed text-justify">${map.overview.projection}</p>
            </div>
            <div class="bg-sepia-50 p-6 rounded-lg border-t-4 border-sepia-700 shadow-sm">
                <div class="flex items-center space-x-2 mb-3">
                    <span class="text-xl">🏛️</span>
                    <h4 class="text-lg font-bold text-sepia-900">文献与译名地位</h4>
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
                        <button class="fly-btn shrink-0 ml-3 inline-flex items-center text-xs bg-sepia-700 hover:bg-sepia-800 text-white px-3 py-1.5 rounded-full shadow transition" title="在全景地图中直接定位">
                            <span>在图中定位</span>
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
                    <div class="local-view" style="background-image: url('${map.image}'); background-position: ${area.bgPosition}; background-size: ${area.bgSize};" title="点击在上方大图中飞往此处">
                        <div class="w-full h-full flex items-end p-2 bg-gradient-to-t from-black/60 to-transparent rounded">
                            <span class="text-white text-xs font-sans tracking-wide">📍 点击局部切片，平滑飞行至该区域</span>
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
        const sciGrid = document.getElementById('scientific-grid');
        sciGrid.innerHTML = '';
        map.scientificGems.forEach(gem => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg p-5 border border-sepia-300 shadow-sm flex flex-col justify-between hover:border-sepia-500 transition group';
            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-sepia-600 font-sans">${gem.tag}</span>
                        <span class="text-xs bg-sepia-100 text-sepia-800 px-1.5 py-0.5 rounded font-mono">1602测绘</span>
                    </div>
                    <h5 class="text-base font-bold text-sepia-900 mb-1">${gem.name}</h5>
                    <p class="text-xs text-sepia-700 italic mb-2 font-medium">${gem.summary}</p>
                    <p class="text-xs text-stone-600 leading-relaxed mb-4">${gem.desc}</p>
                </div>
                <button class="w-full py-1.5 text-xs text-center border border-sepia-400 hover:bg-sepia-700 hover:text-white rounded transition text-sepia-800 font-medium">
                    在地图中定位查看
                </button>
            `;
            card.querySelector('button').addEventListener('click', () => {
                flyToCoords(gem.coords.x, gem.coords.y, gem.coords.zoom, gem.name, gem.summary, w0, h0);
            });
            sciGrid.appendChild(card);
        });

        // 5. Populate Section 4: Mythical Beasts
        const beastsGrid = document.getElementById('beasts-grid');
        beastsGrid.innerHTML = '';
        map.mythicalBeasts.forEach(beast => {
            const div = document.createElement('div');
            div.className = 'p-6 rounded-lg bg-sepia-50 border-l-4 border-sepia-600 space-y-2';
            div.innerHTML = `
                <h4 class="text-lg font-bold text-sepia-900">${beast.name}</h4>
                <p class="text-sm text-stone-700 leading-relaxed">${beast.desc}</p>
            `;
            beastsGrid.appendChild(div);
        });

        // 6. Populate Section 5: Etymology Glossary
        const etymContainer = document.getElementById('etymology-container');
        etymContainer.innerHTML = '';
        map.etymologyGlossary.forEach(item => {
            const card = document.createElement('div');
            card.className = 'etym-card p-4 rounded-lg flex flex-col justify-between';
            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-base font-bold text-sepia-900 font-serif">${item.ancient}</span>
                        <span class="text-xs font-bold text-sepia-800 bg-sepia-100 px-2 py-0.5 rounded">现代：${item.modern}</span>
                    </div>
                    <div class="text-xs text-stone-500 font-mono mb-2">${item.foreign}</div>
                    <p class="text-xs text-stone-600 mb-2 font-sans font-medium"><span class="text-sepia-700 font-bold">词源涵义：</span>${item.meaning}</p>
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (leafletMapInstance) {
            leafletMapInstance.remove();
            leafletMapInstance = null;
        }
        currentMarker = null;
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
        if (active) {
            fsIconEnter?.classList.add('hidden');
            fsIconExit?.classList.remove('hidden');
            if (fsBtnText) fsBtnText.textContent = '退出全屏 (ESC)';
            if (footerFsBtn) footerFsBtn.textContent = '✕ 退出全屏';
        } else {
            fsIconEnter?.classList.remove('hidden');
            fsIconExit?.classList.add('hidden');
            if (fsBtnText) fsBtnText.textContent = '全屏沉浸浏览';
            if (footerFsBtn) footerFsBtn.textContent = '⛶ 全屏显示';
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
                    // Fallback to CSS fullscreen if browser blocks requestFullscreen
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

    // Initial render
    renderMapList();
});
