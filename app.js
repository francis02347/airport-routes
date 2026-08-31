// Lógica principal de la aplicación FlightConnections Clone

// 1. Configuración e Inicialización del Mapa
const map = L.map('map', {
  center: [20, 0],
  zoom: 2,
  minZoom: 2,
  maxZoom: 10,
  zoomControl: false, // Ocultamos el control por defecto para una interfaz más limpia
  worldCopyJump: true,
  preferCanvas: true // Renderizado por GPU ultra-fluido (Canvas) para 0 lag con cientos de aeropuertos
});

// Añadimos el control de zoom en la esquina superior derecha
L.control.zoom({ position: 'topright' }).addTo(map);

// Capa de mapa oscuro (ESRI World Dark Gray Base - 100% gratuita y sin marcas de agua)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
  maxZoom: 16
}).addTo(map);

// 2. Procesamiento de Datos de Conexiones
// Crearemos un mapa de adyacencia (lista de conexiones) bidireccional
const adjacencyList = {};

// Inicializar la lista de adyacencia para cada aeropuerto
AIRPORTS.forEach(airport => {
  adjacencyList[airport.iata] = new Set();
});

// Registrar las rutas como bidireccionales
ROUTES.forEach(([from, to]) => {
  if (adjacencyList[from] && adjacencyList[to]) {
    adjacencyList[from].add(to);
    adjacencyList[to].add(from);
  }
});

// Guardar referencias globales de marcadores y líneas de rutas activas
const markers = {};          // IATA -> Array of L.circleMarker (para soporte multi-mundo)
let activeRouteLayer = L.featureGroup().addTo(map);
let selectedAirportIata = null;

// Estilos de marcadores
const markerStyles = {
  default: {
    radius: 4.5,
    fillColor: '#22d3ee', // Cyan 400
    color: '#0891b2',     // Cyan 600
    weight: 1.5,
    opacity: 0.85,
    fillOpacity: 0.85
  },
  top50: {
    radius: 6.5,
    fillColor: '#ef4444', // Red 500 (Rojo vibrante para los Top 50 Hubs)
    color: '#fecaca',     // Red 200 (Borde luminoso)
    weight: 2,
    opacity: 1,
    fillOpacity: 0.95
  },
  top50Destination: {
    radius: 7.5,
    fillColor: '#ef4444', // Red 500 (Rojo vibrante cuando es un destino conectado)
    color: '#ffffff',     // Blanco brillante en el borde
    weight: 2.5,
    opacity: 1,
    fillOpacity: 1
  },
  dimmed: {
    radius: 3.5,
    fillColor: '#475569', // Slate 600
    color: '#334155',     // Slate 700
    weight: 1,
    opacity: 0.25,
    fillOpacity: 0.25
  },
  destination: {
    radius: 6.5,
    fillColor: '#38bdf8', // Sky 400
    color: '#ffffff',     // White
    weight: 2,
    opacity: 1,
    fillOpacity: 0.95
  },
  selected: {
    radius: 9,
    fillColor: '#facc15', // Yellow 400
    color: '#ffffff',     // White
    weight: 3,
    opacity: 1,
    fillOpacity: 1
  },
  hidden: {
    opacity: 0,
    fillOpacity: 0
  }
};

// Función emergente para celulares: Muestra ficha previa y botón 'Mostrar rutas'
function showAirportMobilePreview(airport, latlng) {
  const destCount = (adjacencyList[airport.iata] || []).size || 0;
  const top50Badge = airport.isTop50 
    ? '<span class="bg-red-500/20 text-red-400 border border-red-500/40 text-[10px] font-bold px-1.5 py-0.5 rounded ml-1">⭐ TOP 50</span>' 
    : '';

  const popupContent = `
    <div class="p-1 font-sans text-slate-100 min-w-[210px]">
      <div class="flex items-center justify-between gap-2 mb-1">
        <span class="font-bold text-sm text-white">${airport.city} (${airport.iata})</span>
        ${top50Badge}
      </div>
      <div class="text-xs text-slate-400 mb-2 leading-tight">${airport.name} (${airport.country})</div>
      <div class="text-xs text-cyan-400 font-semibold mb-3 flex items-center gap-1.5">
        <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        <span>${destCount} ${destCount === 1 ? 'destino directo' : 'destinos directos'}</span>
      </div>
      <button onclick="window.selectAirportFromPopup('${airport.iata}')" 
              class="w-full text-center text-xs bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-2 px-3 rounded-lg transition duration-150 shadow-md flex items-center justify-center gap-1.5 cursor-pointer">
        <svg class="w-3.5 h-3.5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
        Mostrar rutas
      </button>
    </div>
  `;

  L.popup({
    maxWidth: 260,
    closeButton: true,
    autoPan: true,
    offset: [0, -8]
  })
  .setLatLng(latlng)
  .setContent(popupContent)
  .openOn(map);
}

// Hook global para activar la selección desde el botón del popup
window.selectAirportFromPopup = function(iata) {
  map.closePopup();
  selectAirport(iata);
};

// 3. Renderizado y Jerarquía por Nivel de Detalle (LOD) de Aeropuertos
const isHoverDevice = window.matchMedia('(hover: hover)').matches;

AIRPORTS.forEach(airport => {
  markers[airport.iata] = [];
  [-360, 0, 360].forEach(offset => {
    const marker = L.circleMarker([airport.lat, airport.lng + offset], airport.isTop50 ? markerStyles.top50 : markerStyles.default);
    
    // Solo activamos tooltip hover en computadoras (para evitar solapamiento en móviles)
    if (isHoverDevice) {
      const tooltipHtml = airport.isTop50
        ? `<b>${airport.city} (${airport.iata})</b> <span class="bg-red-500/20 text-red-400 border border-red-500/40 text-[10px] font-bold px-1.5 py-0.5 rounded ml-1">⭐ TOP 50</span><br><span class="text-xs text-slate-300">${airport.name}</span>`
        : `<b>${airport.city} (${airport.iata})</b><br><span class="text-xs text-slate-300">${airport.name}</span>`;

      marker.bindTooltip(tooltipHtml, {
        direction: 'top',
        offset: [0, -5],
        opacity: 0.95,
        className: 'bg-slate-900 text-white border-slate-700 rounded-lg shadow-md p-2 text-xs font-sans font-medium'
      });
    }

    // Evento click del marcador
    marker.on('click', (e) => {
      L.DomEvent.stopPropagation(e); // Evita que el click se propague al mapa de fondo
      if (marker.closeTooltip) marker.closeTooltip();
      if (window.innerWidth < 768) {
        showAirportMobilePreview(airport, e.latlng);
      } else {
        selectAirport(airport.iata);
      }
    });

    markers[airport.iata].push(marker);
    marker.addTo(map);
  });
});

// Función de control de visibilidad y estilos según el nivel de zoom (LOD)
function updateMarkerStylesAndVisibility() {
  const currentZoom = map.getZoom();
  let maxTierAllowed = 1;
  if (currentZoom >= 6) {
    maxTierAllowed = 3; // Mostrar todos los 3.250+ aeropuertos
  } else if (currentZoom >= 4) {
    maxTierAllowed = 2; // Mostrar hubs y aeropuertos medianos
  } else {
    maxTierAllowed = 1; // Vista global: solo hubs principales
  }

  const activeDestinations = selectedAirportIata ? (adjacencyList[selectedAirportIata] || new Set()) : null;

  AIRPORTS.forEach(ap => {
    const markerList = markers[ap.iata] || [];
    const isSelected = ap.iata === selectedAirportIata;
    const isDestination = activeDestinations && activeDestinations.has(ap.iata);
    const isTierVisible = ap.tier <= maxTierAllowed || ap.isTop50;

    markerList.forEach(marker => {
      if (selectedAirportIata) {
        if (isSelected) {
          marker.setStyle(markerStyles.selected);
          marker.bringToFront();
        } else if (isDestination) {
          // Si el destino conectado es Top 50, se mantiene de color rojo brillante con borde blanco
          if (ap.isTop50) {
            marker.setStyle(markerStyles.top50Destination);
          } else {
            marker.setStyle(markerStyles.destination);
          }
          marker.bringToFront();
        } else if (isTierVisible) {
          marker.setStyle(markerStyles.dimmed);
        } else {
          marker.setStyle(markerStyles.hidden);
        }
      } else {
        if (ap.isTop50) {
          marker.setStyle(markerStyles.top50);
          marker.bringToFront();
        } else if (isTierVisible) {
          marker.setStyle(markerStyles.default);
        } else {
          marker.setStyle(markerStyles.hidden);
        }
      }
    });
  });
}

// Escuchar cambios de zoom para actualizar el nivel de detalle
map.on('zoomend', updateMarkerStylesAndVisibility);

// Inicializar visibilidad con el zoom actual
updateMarkerStylesAndVisibility();

// 4. Algoritmo de Trazado de Rutas Ortodrómicas Reales (Great Circle 3D como Flightradar24)
/**
 * Calcula la trayectoria geodésica real (círculo máximo / Great Circle) en una esfera 3D.
 * Sigue con exactitud física la curvatura de la Tierra:
 * - Rutas transatlánticas/transpolares (ej. Dubai -> EE.UU.) se elevan hacia el Ártico/Groenlandia.
 * - Rutas transpacíficas (ej. Santiago -> Oceanía) cruzan el Pacífico Sur de forma continua e ininterrumpida.
 */
function getGreatCirclePoints(p0, p1) {
  const toRad = deg => (deg * Math.PI) / 180;
  const toDeg = rad => (rad * 180) / Math.PI;

  const lat1 = toRad(p0.lat);
  const lon1 = toRad(p0.lng);
  const lat2 = toRad(p1.lat);
  const lon2 = toRad(p1.lng);

  // Vectores unitarios 3D
  const v1 = [Math.cos(lat1) * Math.cos(lon1), Math.cos(lat1) * Math.sin(lon1), Math.sin(lat1)];
  const v2 = [Math.cos(lat2) * Math.cos(lon2), Math.cos(lat2) * Math.sin(lon2), Math.sin(lat2)];

  // Distancia angular ortodrómica
  const dot = v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
  const d = Math.acos(Math.min(Math.max(dot, -1), 1));

  if (d < 1e-6) {
    return [[p0.lat, p0.lng], [p1.lat, p1.lng]];
  }

  const sinD = Math.sin(d);
  const numSteps = Math.max(35, Math.round(d * 32));
  const points = [];

  let prevRawLon = p0.lng;
  let continuousLon = p0.lng;

  for (let i = 0; i <= numSteps; i++) {
    const f = i / numSteps;
    const A = Math.sin((1 - f) * d) / sinD;
    const B = Math.sin(f * d) / sinD;

    const x = A * v1[0] + B * v2[0];
    const y = A * v1[1] + B * v2[1];
    const z = A * v1[2] + B * v2[2];

    const lat = toDeg(Math.atan2(z, Math.sqrt(x * x + y * y)));
    const rawLon = toDeg(Math.atan2(y, x));

    if (i === 0) {
      continuousLon = p0.lng;
    } else {
      let dLon = rawLon - prevRawLon;
      while (dLon > 180) dLon -= 360;
      while (dLon < -180) dLon += 360;
      continuousLon += dLon;
    }

    prevRawLon = rawLon;
    points.push([lat, continuousLon]);
  }

  return points;
}

// 5. Lógica de Selección y Filtrado de Rutas
function selectAirport(iata, flyToSelected = true) {
  const airport = AIRPORTS.find(a => a.iata === iata);
  if (!airport) return;

  selectedAirportIata = iata;

  // A. Limpiar capas de líneas anteriores
  activeRouteLayer.clearLayers();

  // B. Obtener destinos
  const destinationsIata = Array.from(adjacencyList[iata] || []);
  
  // C. Actualizar estilos y visibilidad de marcadores
  updateMarkerStylesAndVisibility();

  // D. Dibujar rutas curvas hacia destinos
  destinationsIata.forEach(destIata => {
    const destAirport = AIRPORTS.find(a => a.iata === destIata);
    if (!destAirport) return;

    // Calcular puntos de la trayectoria ortodrómica real continua
    const gcPoints = getGreatCirclePoints(airport, destAirport);

    // Creamos las polilíneas continuas (incluyendo la versión duplicada para el otro lado del mundo si cruza el antimeridiano)
    const polylinesData = [gcPoints];
    
    const hasUnderflow = gcPoints.some(p => p[1] < -180);
    const hasOverflow = gcPoints.some(p => p[1] > 180);
    if (hasUnderflow) {
      polylinesData.push(gcPoints.map(p => [p[0], p[1] + 360]));
    } else if (hasOverflow) {
      polylinesData.push(gcPoints.map(p => [p[0], p[1] - 360]));
    }

    // Calcular punto medio geodésico para situar el popup centrado sobre la curvatura
    const midIdx = Math.floor(gcPoints.length / 2);
    let midLat = gcPoints[midIdx][0];
    let midLng = gcPoints[midIdx][1];
    while (midLng > 180) midLng -= 360;
    while (midLng < -180) midLng += 360;

    const routeBounds = L.latLngBounds([
      [airport.lat, airport.lng],
      [destAirport.lat, destAirport.lng],
      [midLat, midLng]
    ]);

    const visibleList = [];

    polylinesData.forEach(points => {
      // 1. Crear la línea visible
      const visiblePolyline = L.polyline(points, {
        color: '#facc15', // Amarillo 400
        weight: 2,
        opacity: 0.7,
        lineCap: 'round',
        lineJoin: 'round',
        interactive: false
      });

      // 2. Crear una línea invisible y mucho más gruesa para capturar clics (zona táctil)
      const touchTargetPolyline = L.polyline(points, {
        color: 'transparent',
        weight: 22,
        opacity: 0,
        interactive: true
      });

      // Efecto hover sobre la ruta (solo en dispositivos con ratón)
      touchTargetPolyline.on('mouseover', () => {
        if (selectedDestIata !== destAirport.iata) {
          visiblePolyline.setStyle({ color: '#38bdf8', weight: 3.5, opacity: 0.95 });
        }
        if (isHoverDevice) {
          touchTargetPolyline.bindTooltip(`<b>${airport.city} (${airport.iata}) → ${destAirport.city} (${destAirport.iata})</b>`, {
            sticky: true,
            className: 'bg-slate-900 text-white border-slate-700 rounded-lg p-2 text-xs font-semibold'
          }).openTooltip();
        }
      });

      touchTargetPolyline.on('mouseout', () => {
        if (selectedDestIata !== destAirport.iata) {
          const isAnotherSelected = selectedDestIata !== null;
          visiblePolyline.setStyle({ color: '#facc15', weight: 2, opacity: isAnotherSelected ? 0.25 : 0.7 });
        }
      });

      // Al hacer clic en la línea del mapa -> selecciona y abre la información de la ruta
      touchTargetPolyline.on('click', (e) => {
        L.DomEvent.stopPropagation(e);
        if (touchTargetPolyline.closeTooltip) touchTargetPolyline.closeTooltip();
        showRouteDetails(airport, destAirport, e.latlng);
      });

      visibleList.push(visiblePolyline);
      activeRouteLayer.addLayer(visiblePolyline);
      activeRouteLayer.addLayer(touchTargetPolyline);
    });

    currentRouteMap[destIata] = {
      visiblePolylines: visibleList,
      destAirport: destAirport,
      midpoint: [midLat, midLng],
      bounds: routeBounds
    };
  });

  // E. Actualizar el Panel Lateral
  updateSidebar(airport, destinationsIata);
  if (window.innerWidth >= 768) {
    openSidebar(); // Solo abrir automáticamente en pantallas de escritorio
  }

  // F. Hacer zoom y centrar si se solicita
  if (flyToSelected) {
    map.flyTo([airport.lat, airport.lng], 4, {
      animate: true,
      duration: 1.5
    });
  }
}

// Variables de estado de ruta seleccionada
let selectedDestIata = null;
let currentRouteMap = {}; // destIata -> { visiblePolylines, destAirport, midpoint, bounds }

/**
 * Selecciona una ruta específica, la resalta en el mapa y abre la tarjeta con su información.
 */
function showRouteDetails(originAp, destAp, atLatLng = null) {
  selectedDestIata = destAp.iata;

  // 1. Resaltar la polilínea de la ruta seleccionada y atenuar todas las demás
  Object.keys(currentRouteMap).forEach(dIata => {
    const rInfo = currentRouteMap[dIata];
    const isThisRoute = (dIata === destAp.iata);
    rInfo.visiblePolylines.forEach(poly => {
      if (isThisRoute) {
        poly.setStyle({ color: '#38bdf8', weight: 4.5, opacity: 1 });
        poly.bringToFront();
      } else {
        poly.setStyle({ color: '#facc15', weight: 1.5, opacity: 0.25 });
      }
    });
  });

  // 2. Resaltar el elemento correspondiente en la lista del panel lateral
  document.querySelectorAll('.dest-item').forEach(el => {
    if (el.dataset.iata === destAp.iata) {
      el.classList.add('bg-cyan-950/60', 'border-cyan-400');
      el.classList.remove('border-transparent');
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      el.classList.remove('bg-cyan-950/60', 'border-cyan-400');
      el.classList.add('border-transparent');
    }
  });

  // 3. Calcular datos de la ruta
  const distance = Math.round(getDistance(originAp.lat, originAp.lng, destAp.lat, destAp.lng));
  const hours = Math.floor(distance / 800);
  const minutes = Math.round(((distance % 800) / 800) * 60);
  const timeStr = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  const searchQuery = encodeURIComponent(`${originAp.city} (${originAp.iata}) to ${destAp.city} (${destAp.iata})`);

  const popupContent = `
    <div class="p-1 font-sans text-slate-100 min-w-[200px]">
      <div class="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-1">Información de Ruta</div>
      <div class="flex items-center gap-2 font-bold text-sm mb-2 text-white">
        <span>${originAp.city}</span>
        <span class="text-slate-400 font-normal">➔</span>
        <span>${destAp.city}</span>
      </div>
      <div class="space-y-1 text-xs text-slate-300 border-t border-slate-700/60 pt-2 mb-3">
        <div class="flex justify-between gap-4">
          <span class="text-slate-400">Distancia:</span>
          <span class="font-semibold text-white">${distance.toLocaleString()} km</span>
        </div>
        <div class="flex justify-between gap-4">
          <span class="text-slate-400">Tiempo de Vuelo:</span>
          <span class="font-semibold text-white">~ ${timeStr}</span>
        </div>
      </div>
      <a href="https://www.google.com/search?q=${searchQuery}" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="block w-full text-center text-xs bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-1.5 px-3 rounded-lg transition duration-150 shadow-md">
         Buscar vuelos
      </a>
    </div>
  `;

  // Ubicación donde mostrar el popup (clic exacto o punto medio geodésico de la ruta)
  const routeInfo = currentRouteMap[destAp.iata];
  const targetLatLng = atLatLng || (routeInfo ? routeInfo.midpoint : [destAp.lat, destAp.lng]);

  L.popup({
    maxWidth: 260,
    closeButton: true,
    autoPan: true
  })
  .setLatLng(targetLatLng)
  .setContent(popupContent)
  .openOn(map);

  // 4. Ajustar el mapa para englobar ambos aeropuertos suavemente
  if (routeInfo && !atLatLng) {
    const leftPad = (window.innerWidth >= 768) ? 380 : 50;
    map.fitBounds(routeInfo.bounds, {
      paddingTopLeft: [leftPad, 50],
      paddingBottomRight: [50, 50],
      maxZoom: 6,
      animate: true,
      duration: 1.2
    });
  }
}

// 6. Limpieza de Selección
function clearSelection() {
  selectedAirportIata = null;
  selectedDestIata = null;
  currentRouteMap = {};
  activeRouteLayer.clearLayers();
  
  // Restaurar visibilidad y estilos según nivel de zoom
  updateMarkerStylesAndVisibility();

  // Cambiar vistas del panel lateral
  document.getElementById('empty-state').classList.remove('hidden');
  document.getElementById('detail-state').classList.add('hidden');

  // Auto-cerrar el panel en móvil al limpiar selección
  if (window.innerWidth < 768) {
    closeSidebar();
  }
}

// Restablecer la cámara a la visión global
function resetMapView() {
  map.setView([20, 0], 2, {
    animate: true,
    duration: 1.2
  });
}

// 7. Actualización dinámica del Panel de Detalles (Sidebar)
function updateSidebar(airport, destinationsIata) {
  document.getElementById('empty-state').classList.add('hidden');
  document.getElementById('detail-state').classList.remove('hidden');

  document.getElementById('airport-iata').textContent = airport.iata;
  document.getElementById('airport-name').textContent = airport.name;
  document.getElementById('airport-location').textContent = `${airport.city}, ${airport.country}`;
  document.getElementById('route-count').textContent = `${destinationsIata.length} ${destinationsIata.length === 1 ? 'destino' : 'destinos'}`;

  const destListEl = document.getElementById('destinations-list');
  destListEl.innerHTML = '';

  // Ordenar destinos alfabéticamente por ciudad
  const sortedDestinations = destinationsIata
    .map(iata => AIRPORTS.find(a => a.iata === iata))
    .filter(Boolean)
    .sort((a, b) => a.city.localeCompare(b.city));

  sortedDestinations.forEach(dest => {
    const item = document.createElement('div');
    item.className = 'dest-item p-4 hover:bg-slate-800/60 cursor-pointer transition flex items-center justify-between group border-l-4 border-transparent';
    item.dataset.iata = dest.iata;
    item.innerHTML = `
      <div>
        <h4 class="font-semibold text-sm group-hover:text-cyan-400 transition flex items-center gap-1.5">
          ${dest.city}
          ${dest.isTop50 ? '<span class="bg-red-500/20 text-red-400 border border-red-500/40 text-[9px] font-bold px-1.5 py-0.5 rounded leading-none">TOP 50</span>' : ''}
        </h4>
        <p class="text-xs text-slate-400 mt-0.5">${dest.name} (${dest.country})</p>
      </div>
      <span class="text-xs font-mono font-bold ${dest.isTop50 ? 'bg-red-500/15 text-red-300 border-red-500/30' : 'bg-slate-800 text-slate-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 border-slate-700/60 group-hover:border-cyan-500/30'} border px-2 py-1 rounded transition">${dest.iata}</span>
    `;

    // Clic en un destino de la lista del panel lateral -> Selecciona y muestra la información de la ruta
    item.addEventListener('click', () => {
      showRouteDetails(airport, dest);
    });

    destListEl.appendChild(item);
  });
}

// 8. Sistema de Búsqueda y Autocompletado
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const clearSearchBtn = document.getElementById('clear-search');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  
  if (query === '') {
    hideSearchResults();
    clearSearchBtn.classList.add('hidden');
    return;
  }

  clearSearchBtn.classList.remove('hidden');

  // Filtrado de aeropuertos (ordenando con prioridad a Top 50 y coincidencias exactas)
  const matches = AIRPORTS.filter(ap => 
    ap.iata.toLowerCase().includes(query) ||
    ap.city.toLowerCase().includes(query) ||
    ap.country.toLowerCase().includes(query) ||
    ap.name.toLowerCase().includes(query)
  ).sort((a, b) => {
    // Si uno es Top 50 y el otro no, priorizar en la búsqueda
    if (a.isTop50 && !b.isTop50) return -1;
    if (!a.isTop50 && b.isTop50) return 1;
    return a.city.localeCompare(b.city);
  });

  renderSearchResults(matches);
});

function renderSearchResults(matches) {
  searchResults.innerHTML = '';
  
  if (matches.length === 0) {
    searchResults.innerHTML = '<div class="p-3 text-sm text-slate-400 text-center">No se encontraron aeropuertos</div>';
    searchResults.classList.remove('hidden');
    return;
  }

  const topMatches = matches.slice(0, 25);

  topMatches.forEach(ap => {
    const item = document.createElement('div');
    item.className = 'px-4 py-2.5 hover:bg-slate-700 cursor-pointer text-sm transition flex justify-between items-center border-b border-slate-700/30 last:border-b-0';
    item.innerHTML = `
      <div class="truncate mr-2">
        <span class="font-bold text-white">${ap.city}</span>
        ${ap.isTop50 ? '<span class="bg-red-500/20 text-red-400 border border-red-500/40 text-[9px] font-bold px-1.5 py-0.5 rounded ml-1.5">TOP 50</span>' : ''}
        <span class="text-xs text-slate-400 block truncate">${ap.name} (${ap.country})</span>
      </div>
      <span class="text-xs font-mono font-bold ${ap.isTop50 ? 'bg-red-500/20 text-red-300 border-red-500/40' : 'bg-slate-900/40 text-cyan-400 border-cyan-500/20'} border px-1.5 py-0.5 rounded shrink-0">${ap.iata}</span>
    `;

    item.addEventListener('click', () => {
      selectAirport(ap.iata);
      searchInput.value = '';
      hideSearchResults();
      clearSearchBtn.classList.add('hidden');
      if (window.innerWidth < 768) {
        closeSidebar();
      }
    });

    searchResults.appendChild(item);
  });

  searchResults.classList.remove('hidden');
}

function hideSearchResults() {
  searchResults.classList.add('hidden');
  searchResults.innerHTML = '';
}

// Limpiar el buscador
clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  hideSearchResults();
  clearSearchBtn.classList.add('hidden');
  searchInput.focus();
});

// Cerrar resultados al hacer clic fuera del panel de búsqueda
document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
    hideSearchResults();
  }
});

// 9. Funciones para Colapsar/Mostrar Panel Lateral
function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggle-sidebar-btn');
  sidebar.classList.remove('translate-x-0');
  sidebar.classList.add('translate-x-[-110%]');
  toggleBtn.classList.remove('hidden');
}

function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggle-sidebar-btn');
  sidebar.classList.remove('translate-x-[-110%]');
  sidebar.classList.add('translate-x-0');
  toggleBtn.classList.add('hidden');
}

// 10. Manejadores de Eventos Generales
document.getElementById('reset-view').addEventListener('click', resetMapView);
document.getElementById('close-details').addEventListener('click', clearSelection);
map.on('click', clearSelection);

// Eventos de colapso de panel
document.getElementById('close-sidebar-btn').addEventListener('click', closeSidebar);
document.getElementById('toggle-sidebar-btn').addEventListener('click', openSidebar);

// Auto-colapsar en móviles al iniciar la aplicación
if (window.innerWidth < 768) {
  closeSidebar();
}

// 11. Funciones Matemáticas de Utilidad (Haversine para Distancias)
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distancia en km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// Hacer selectAirport accesible globalmente para el onclick del popup de Leaflet
window.selectAirport = selectAirport;
