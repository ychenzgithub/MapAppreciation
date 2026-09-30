document.addEventListener('DOMContentLoaded', () => {
    const mapListSection = document.getElementById('map-list');
    const mapDetailSection = document.getElementById('map-detail');
    const backBtn = document.getElementById('back-btn');
    let panzoomInstance = null;

    // Render Map List
    function renderMapList() {
        mapListSection.innerHTML = '';
        mapsData.forEach(map => {
            const card = document.createElement('div');
            card.className = 'card-container bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition flex flex-col';
            card.innerHTML = `
                <div class="h-64 overflow-hidden relative border-b-4 border-sepia-200">
                    <img src="${map.image}" alt="${map.title}" class="card-zoom-image w-full h-full object-cover object-center">
                    <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <span class="text-white text-lg font-bold bg-black bg-opacity-50 px-4 py-2 rounded">查看详情</span>
                    </div>
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-2xl font-bold mb-1">${map.title}</h3>
                    <p class="text-sepia-600 text-sm mb-4 italic">${map.author} | ${map.year}</p>
                    <p class="text-stone-600 flex-grow">${map.shortDescription}</p>
                </div>
            `;
            card.addEventListener('click', () => showMapDetail(map));
            mapListSection.appendChild(card);
        });
    }

    // Show Map Detail
    function showMapDetail(map) {
        // Hide list, show detail
        mapListSection.classList.add('hidden');
        mapDetailSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Populate detail view
        document.getElementById('detail-title').textContent = map.title;
        document.getElementById('detail-subtitle').textContent = `${map.author} · ${map.year}`;
        document.getElementById('detail-background').textContent = map.background;

        // Initialize Leaflet Map
        if (panzoomInstance) {
            panzoomInstance.remove(); // We repurpose panzoomInstance to hold the Leaflet map object
            panzoomInstance = null;
        }

        const container = document.getElementById('viewer-container');
        container.innerHTML = '<div id="leaflet-map" style="width:100%; height:100%; background: #1c1917;"></div>';
        
        const mapW = map.tiles.width;
        const mapH = map.tiles.height;
        const maxZ = map.tiles.maxZoom;
        
        // Leaflet L.CRS.Simple expects coordinates in [y, x]. 
        // 1 unit = 1 pixel at zoom level 0.
        // So W0 = W / 2^maxZ, H0 = H / 2^maxZ
        const w0 = mapW / Math.pow(2, maxZ);
        const h0 = mapH / Math.pow(2, maxZ);
        
        // Bounds in [lat, lng] = [-y, x]
        const bounds = [[-h0, 0], [0, w0]];

        const leafletMap = L.map('leaflet-map', {
            crs: L.CRS.Simple,
            minZoom: 0,
            maxZoom: maxZ,
            maxBounds: bounds,
            maxBoundsViscosity: 1.0,
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
        panzoomInstance = leafletMap; // Save ref to destroy later

        // Ensure Leaflet calculates dimensions properly after container becomes visible
        setTimeout(() => {
            leafletMap.invalidateSize();
            leafletMap.fitBounds(bounds);
        }, 150);

        // Populate Stories
        const storiesContainer = document.getElementById('detail-stories');
        storiesContainer.innerHTML = '';
        map.stories.forEach(story => {
            const div = document.createElement('div');
            div.className = 'bg-sepia-50 p-6 rounded-lg border-l-4 border-sepia-500 shadow-sm';
            div.innerHTML = `
                <h4 class="text-xl font-bold mb-2 text-sepia-800">${story.title}</h4>
                <p class="text-stone-700 leading-relaxed">${story.content}</p>
            `;
            storiesContainer.appendChild(div);
        });

        // Populate Local Areas
        const localAreasContainer = document.getElementById('detail-local-areas');
        localAreasContainer.innerHTML = '';
        map.localAreas.forEach(area => {
            const div = document.createElement('div');
            div.className = 'bg-white rounded-lg shadow-md p-4';
            div.innerHTML = `
                <div class="local-view mb-4" style="background-image: url('${map.image}'); background-position: ${area.bgPosition}; background-size: ${area.bgSize};" title="点击在上方大图中查看"></div>
                <h4 class="text-lg font-bold mb-2 text-sepia-800">${area.name}</h4>
                <p class="text-stone-600 text-sm leading-relaxed">${area.description}</p>
            `;
            // Add click to pan to specific area in the Leaflet map
            div.querySelector('.local-view').addEventListener('click', () => {
                if (panzoomInstance) { // panzoomInstance is the leafletMap
                    const bgPos = area.bgPosition.split(' ');
                    const xPercent = parseFloat(bgPos[0]);
                    const yPercent = parseFloat(bgPos[1] || bgPos[0]);
                    
                    const targetX = (xPercent / 100) * w0;
                    const targetY = (yPercent / 100) * h0;
                    
                    panzoomInstance.flyTo([-targetY, targetX], maxZ - 1, {
                        animate: true,
                        duration: 1.5
                    });
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            localAreasContainer.appendChild(div);
        });
    }

    // Back to list
    backBtn.addEventListener('click', () => {
        mapDetailSection.classList.add('hidden');
        mapListSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (panzoomInstance) {
            panzoomInstance.remove();
            panzoomInstance = null;
        }
    });

    // Initialize app
    renderMapList();
});
