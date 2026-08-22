/* ==========================================================================
   SMARTTRIPAI - MASTER APPLICATION ENGINE
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. PRESET TRIP DATASETS & GLOBAL STATE
// --------------------------------------------------------------------------
const TRIP_PRESETS = {
  srilanka: {
    title: "Colombo ➔ Kandy ➔ Ella",
    origin: "Colombo, Sri Lanka",
    destination: "Kandy & Ella, Sri Lanka",
    days: 3,
    adults: 4,
    kids: 0,
    pets: 0,
    budget: "mid",
    pace: "balanced",
    vibes: ["Nature & Wildlife", "Culture & Heritage", "Culinary & Dining"],
    heroImage: "assets/hero_kandy.png",
    distance: "340 km",
    travelTime: "7h 45m driving",
    baseCost: 540,
    vehicle: {
      name: "7-Seater Luxury SUV",
      type: "SUV / AWD",
      pricePerDay: 65,
      image: "assets/luxury_suv.png"
    },
    daysData: [
      {
        day: 1,
        title: "Colombo ➔ Kandy (Scenic Highway & Spice Gardens)",
        items: [
          {
            id: "s1",
            time: "08:30 AM",
            title: "Pinnawala Elephant Sanctuary",
            category: "Nature & Wildlife",
            duration: "2h 00m",
            fee: 15,
            image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=300&q=80",
            aiTip: "📸 Best photo spot at river bank during bath time (10:00 AM).",
            hiddenGem: false,
            lat: 7.3014, lng: 80.3867
          },
          {
            id: "s2",
            time: "01:00 PM",
            title: "Ranweli Spice Garden & Local Lunch",
            category: "Culinary & Dining",
            duration: "1h 30m",
            fee: 10,
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
            aiTip: "🌿 Recommended Ceylon Cinnamon & Herbal Tea tasting.",
            hiddenGem: true,
            lat: 7.4667, lng: 80.6167
          },
          {
            id: "s3",
            time: "04:30 PM",
            title: "Temple of the Sacred Tooth Relic (Kandy)",
            category: "Culture & Heritage",
            duration: "2h 00m",
            fee: 12,
            image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=300&q=80",
            aiTip: "🙏 Dress code: Cover shoulders & knees. Evening ceremony starts at 6:30 PM.",
            hiddenGem: false,
            lat: 7.2936, lng: 80.6413
          }
        ]
      },
      {
        day: 2,
        title: "Kandy Highlights & Mountain Drive to Nuwara Eliya",
        items: [
          {
            id: "s4",
            time: "09:00 AM",
            title: "Royal Botanical Gardens (Peradeniya)",
            category: "Nature & Wildlife",
            duration: "2h 15m",
            fee: 8,
            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=300&q=80",
            aiTip: "🌸 Don't miss the Orchid House and Giant Bamboo avenue.",
            hiddenGem: false,
            lat: 7.2683, lng: 80.5966
          },
          {
            id: "s5",
            time: "02:00 PM",
            title: "Damro Ceylon Tea Factory & Viewpoint",
            category: "View Point",
            duration: "1h 45m",
            fee: 5,
            image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80",
            aiTip: "☕ Complimentary fresh BOP tea tasting with panoramic waterfall view.",
            hiddenGem: true,
            lat: 6.9497, lng: 80.6865
          }
        ]
      },
      {
        day: 3,
        title: "Ella Express: Nine Arch Bridge & Little Adam's Peak",
        items: [
          {
            id: "s6",
            time: "08:00 AM",
            title: "Nine Arch Bridge Train Crossing",
            category: "Photography & View Point",
            duration: "2h 30m",
            fee: 0,
            image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=300&q=80",
            aiTip: "🚂 Blue Express train passes over bridge exactly at 09:15 AM!",
            hiddenGem: false,
            lat: 6.8768, lng: 81.0608
          },
          {
            id: "s7",
            time: "02:30 PM",
            title: "Little Adam's Peak Sunset Hike",
            category: "Adventure & Hiking",
            duration: "2h 00m",
            fee: 0,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
            aiTip: "🌅 Easy 30-min summit walk. Stunning 360° Ella Gap sunset valley view.",
            hiddenGem: false,
            lat: 6.8667, lng: 81.0500
          }
        ]
      }
    ],
    stays: [
      {
        id: "h1",
        name: "Santani Ceylon Eco Villa & Spa",
        type: "villa",
        price: 180,
        rating: 4.9,
        reviews: 240,
        offRoute: "0.8 km off route",
        image: "assets/boutique_villa.png",
        amenities: ["Pool", "Wi-Fi", "Spa", "Mountain View", "Breakfast"]
      },
      {
        id: "h2",
        name: "Grand Hotel Nuwara Eliya",
        type: "hotel",
        price: 130,
        rating: 4.8,
        reviews: 512,
        offRoute: "0.2 km off route",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80",
        amenities: ["Heritage Bar", "Golf", "Wi-Fi", "High Tea"]
      },
      {
        id: "h3",
        name: "9 Arch Horizon Eco Resort (Ella)",
        type: "resort",
        price: 95,
        rating: 4.7,
        reviews: 180,
        offRoute: "0.5 km off route",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=300&q=80",
        amenities: ["Balcony View", "Free Parking", "Organic Dining"]
      }
    ],
    dining: [
      {
        id: "d1",
        time: "Breakfast / Coffee",
        name: "Café Aroma Kandy",
        specialty: "Fresh Cinnamon Pancakes & Ceylon Espresso",
        detour: "2 mins detour",
        rating: 4.8,
        price: "$8 - $14"
      },
      {
        id: "d2",
        time: "Lunch Stop",
        name: "Slightly Chilled Lounge & Restaurant",
        specialty: "Traditional 15-Curry Rice Feast",
        detour: "On route",
        rating: 4.9,
        price: "$12 - $20"
      },
      {
        id: "d3",
        time: "Dinner Stop",
        name: "Café Chill Ella",
        specialty: "Ceylon Spiced Lamprais & Craft Cocktails",
        detour: "On route",
        rating: 4.9,
        price: "$15 - $25"
      }
    ]
  },

  japan: {
    title: "Tokyo ➔ Kyoto ➔ Nara",
    origin: "Tokyo (Shinjuku), Japan",
    destination: "Kyoto & Nara, Japan",
    days: 5,
    adults: 2,
    kids: 0,
    pets: 0,
    budget: "mid",
    pace: "balanced",
    vibes: ["Culture & Heritage", "Culinary & Dining"],
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    distance: "460 km",
    travelTime: "2h 15m Bullet Train / 5h Drive",
    baseCost: 820,
    vehicle: {
      name: "Tesla Model Y EV Sedan",
      type: "Electric EV",
      pricePerDay: 75,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=300&q=80"
    },
    daysData: [
      {
        day: 1,
        title: "Tokyo ➔ Hakone & Mount Fuji Views",
        items: [
          {
            id: "j1",
            time: "09:00 AM",
            title: "Hakone Ropeway & Owakudani Valley",
            category: "Nature & View",
            duration: "2h 30m",
            fee: 20,
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=300&q=80",
            aiTip: "🌋 Try the famous Owakudani Black Eggs (adds 7 years to life!).",
            hiddenGem: false,
            lat: 35.2428, lng: 139.0205
          }
        ]
      },
      {
        day: 2,
        title: "Kyoto Arashiyama Bamboo Grove & Fushimi Inari",
        items: [
          {
            id: "j2",
            time: "08:00 AM",
            title: "Fushimi Inari Taisha (10,000 Torii Gates)",
            category: "Culture & Heritage",
            duration: "2h 30m",
            fee: 0,
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80",
            aiTip: "⛩️ Early morning recommended before crowds arrive at 9:30 AM.",
            hiddenGem: false,
            lat: 34.9671, lng: 135.7727
          }
        ]
      }
    ],
    stays: [
      {
        id: "jh1",
        name: "Kyoto Ryokan Gion Soba Luxury",
        type: "hotel",
        price: 260,
        rating: 4.9,
        reviews: 410,
        offRoute: "0.1 km off route",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=300&q=80",
        amenities: ["Private Onsen", "Kaiseki Breakfast", "Tatami Rooms"]
      }
    ],
    dining: [
      {
        id: "jd1",
        time: "Dinner Stop",
        name: "Gion Duck Noodles",
        specialty: "Ramen with French Fusion Duck Broth",
        detour: "On route",
        rating: 4.9,
        price: "$18 - $28"
      }
    ]
  },

  europe: {
    title: "Paris ➔ Interlaken ➔ Venice",
    origin: "Paris, France",
    destination: "Interlaken, Switzerland",
    days: 7,
    adults: 2,
    kids: 1,
    pets: 0,
    budget: "luxury",
    pace: "relaxed",
    vibes: ["Nature & Wildlife", "Photography Spots"],
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80",
    distance: "620 km",
    travelTime: "6h 30m Scenic Highway",
    baseCost: 1250,
    vehicle: {
      name: "Mercedes V-Class Luxury Van",
      type: "Luxury Van",
      pricePerDay: 110,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80"
    },
    daysData: [
      {
        day: 1,
        title: "Interlaken & Lauterbrunnen Valley of 72 Waterfalls",
        items: [
          {
            id: "e1",
            time: "10:00 AM",
            title: "Staubbach Falls Viewpoint",
            category: "Nature & View",
            duration: "2h 00m",
            fee: 0,
            image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=300&q=80",
            aiTip: "📸 Take the walkway behind the waterfall cliff spray.",
            hiddenGem: false,
            lat: 46.5947, lng: 7.9080
          }
        ]
      }
    ],
    stays: [
      {
        id: "eh1",
        name: "Victoria-Jungfrau Grand Hotel & Spa",
        type: "hotel",
        price: 450,
        rating: 4.95,
        reviews: 620,
        offRoute: "0.0 km off route",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80",
        amenities: ["Jungfrau Glacier View", "Thermal Spa", "Michelin Dining"]
      }
    ],
    dining: [
      {
        id: "ed1",
        time: "Lunch Stop",
        name: "Restaurant 360° Piz Gloria",
        specialty: "Revolving Summit Fondue Feast",
        detour: "Cable car link",
        rating: 4.9,
        price: "$45 - $80"
      }
    ]
  }
};

// Current Active State Object
let currentTripState = {
  activePresetKey: 'srilanka',
  data: JSON.parse(JSON.stringify(TRIP_PRESETS.srilanka)),
  activeDay: 1,
  activeScreen: 'screen-1',
  viewMode: 'frame', // 'frame' or 'fullscreen'
  themeMode: 'light',
  globalBudgetMultiplier: 1.0, // 0.6 for economy, 1.0 for mid, 1.8 for luxury
  voiceAudioPlaying: false,
  mapInstance: null,
  hudMapInstance: null,
  donutChartInstance: null
};

// --------------------------------------------------------------------------
// 2. INITIALIZATION & CORE SETUP
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Detect if running inside Capacitor native Android container or standalone PWA
  const isCapacitorNative = (typeof window.Capacitor !== 'undefined' && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) || 
                            window.location.href.startsWith('https://localhost') ||
                            window.location.protocol === 'capacitor:' ||
                            window.matchMedia('(display-mode: standalone)').matches;

  if (isCapacitorNative) {
    document.body.classList.remove('mode-frame', 'mode-fullscreen');
    document.body.classList.add('native-app');
  }

  initClock();
  initLeafletMaps();
  loadTripPreset('srilanka');
  setupEventListeners();
});

// Live Status Bar Clock Updater
function initClock() {
  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clockEl = document.getElementById('liveClock');
    if (clockEl) clockEl.textContent = `${hours}:${minutes}`;
  };
  updateTime();
  setInterval(updateTime, 10000);
}

// Global Event Listeners
function setupEventListeners() {
  // Budget level segment listener sync
  window.selectSegment = function(containerId, btn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  };

  // Vibe tags multi selector
  window.toggleVibeTag = function(pill) {
    pill.classList.toggle('active');
  };
}

// Setup Step Switcher (Step 1 & Step 2)
function goToSetupStep(stepNum) {
  const step1 = document.getElementById('setupStep1');
  const step2 = document.getElementById('setupStep2');
  if (!step1 || !step2) return;
  if (stepNum === 1) {
    step1.classList.add('active');
    step2.classList.remove('active');
  } else {
    step1.classList.remove('active');
    step2.classList.add('active');
  }
}

// --------------------------------------------------------------------------
// 3. SCREEN ROUTING & VIEW CONTROLS
// --------------------------------------------------------------------------
function switchScreen(screenId) {
  currentTripState.activeScreen = screenId;

  // Toggle active screen visibility
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) targetScreen.classList.add('active');

  // Update bottom tab buttons active status
  document.querySelectorAll('.tab-item').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-screen') === screenId);
  });

  // Update top header subtitle
  const subtitles = {
    'screen-1': 'Onboarding & Trip Setup',
    'screen-2': 'Trip Dashboard & Itinerary',
    'screen-3': 'Transport & Fuel Estimator',
    'screen-4': 'Route Stays & Dining',
    'screen-5': 'Budget Analytics & Costs',
    'screen-6': 'Live AI Navigation HUD'
  };
  const subEl = document.getElementById('screenSubtitle');
  if (subEl) subEl.textContent = subtitles[screenId] || 'Your AI Travel Companion';

  // Resize Leaflet maps if switching to map screens
  if (screenId === 'screen-4' && currentTripState.mapInstance) {
    setTimeout(() => currentTripState.mapInstance.invalidateSize(), 200);
  }
  if (screenId === 'screen-6' && currentTripState.hudMapInstance) {
    setTimeout(() => currentTripState.hudMapInstance.invalidateSize(), 200);
  }

  // Render screen specific widgets
  if (screenId === 'screen-5') {
    setTimeout(renderBudgetChart, 100);
  }
}

// Toggle Mobile Simulator Frame vs Full Screen View
function toggleViewMode() {
  const body = document.body;
  const btn = document.getElementById('viewModeToggle');
  if (body.classList.contains('mode-frame')) {
    body.classList.remove('mode-frame');
    body.classList.add('mode-fullscreen');
    btn.innerHTML = '<i class="fa-solid fa-mobile"></i> Device View';
    currentTripState.viewMode = 'fullscreen';
  } else {
    body.classList.remove('mode-fullscreen');
    body.classList.add('mode-frame');
    btn.innerHTML = '<i class="fa-solid fa-mobile-screen-button"></i> Frame View';
    currentTripState.viewMode = 'frame';
  }
}

// Toggle Light / Dark Mode
function toggleDarkMode() {
  const html = document.documentElement;
  const btn = document.getElementById('themeToggleBtn');
  const currentTheme = html.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'light');
    btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    currentTripState.themeMode = 'light';
  } else {
    html.setAttribute('data-theme', 'dark');
    btn.innerHTML = '<i class="fa-solid fa-sun text-warning"></i> Light Mode';
    currentTripState.themeMode = 'dark';
  }
  // Re-render map tiles to match theme if needed
}

// --------------------------------------------------------------------------
// 4. SCREEN 1: TRIP SETUP ENGINE
// --------------------------------------------------------------------------
function loadTripPreset(key) {
  if (!TRIP_PRESETS[key]) return;
  currentTripState.activePresetKey = key;
  currentTripState.data = JSON.parse(JSON.stringify(TRIP_PRESETS[key]));

  // Update preset buttons styling
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(key));
  });

  // Populate Screen 1 fields
  const data = currentTripState.data;
  document.getElementById('originInput').value = data.origin;
  document.getElementById('destInput').value = data.destination;
  document.getElementById('durationValue').textContent = `${data.days} Days`;
  document.getElementById('adultsCount').textContent = data.adults;
  document.getElementById('kidsCount').textContent = data.kids;
  document.getElementById('petsCount').textContent = data.pets;

  // Render all dependent screens with preset data
  renderTripDashboard();
  renderTransportScreen();
  renderStaysAndDiningScreen();
  renderCostBreakdownScreen();
}

function detectGPSLocation() {
  const originInput = document.getElementById('originInput');
  originInput.value = "📍 Bandaranaike International Airport (CMB)";
  originInput.style.borderColor = "var(--primary)";
  setTimeout(() => originInput.style.borderColor = "var(--border-color)", 1500);
}

function setDestination(val) {
  document.getElementById('destInput').value = val;
}

function adjustDuration(delta) {
  let val = currentTripState.data.days + delta;
  if (val < 1) val = 1;
  if (val > 14) val = 14;
  currentTripState.data.days = val;
  document.getElementById('durationValue').textContent = `${val} Days`;
}

function adjustGroup(type, delta) {
  let val = (currentTripState.data[type] || 0) + delta;
  if (val < 0) val = 0;
  if (type === 'adults' && val < 1) val = 1;
  currentTripState.data[type] = val;
  const countEl = document.getElementById(`${type}Count`);
  if (countEl) countEl.textContent = val;
}

function generateAIItinerary() {
  // Read current inputs
  const origin = document.getElementById('originInput').value;
  const dest = document.getElementById('destInput').value;
  currentTripState.data.origin = origin;
  currentTripState.data.destination = dest;
  currentTripState.data.title = `${origin.split(',')[0]} ➔ ${dest.split(',')[0]}`;

  // Update UI and jump to Screen 2 Itinerary
  renderTripDashboard();
  renderTransportScreen();
  renderStaysAndDiningScreen();
  switchScreen('screen-2');
}

// --------------------------------------------------------------------------
// 5. SCREEN 2: TRIP DASHBOARD & ITINERARY
// --------------------------------------------------------------------------
function renderTripDashboard() {
  const data = currentTripState.data;

  // Hero section
  const heroImg = document.getElementById('heroDestImage');
  if (heroImg) heroImg.src = data.heroImage;
  
  const heroTitle = document.getElementById('heroTripTitle');
  if (heroTitle) heroTitle.textContent = data.title;

  const heroMeta = document.getElementById('heroTripMeta');
  if (heroMeta) {
    heroMeta.innerHTML = `
      <span><i class="fa-regular fa-calendar"></i> ${data.days} Days</span>
      <span>•</span>
      <span><i class="fa-solid fa-user-group"></i> ${data.adults} Adults${data.kids ? `, ${data.kids} Kids` : ''}</span>
      <span>•</span>
      <span><i class="fa-solid fa-car-side"></i> ${data.distance}</span>
    `;
  }

  // Key Stats
  document.getElementById('statDistance').textContent = data.distance;
  const estCost = Math.round(data.baseCost * currentTripState.globalBudgetMultiplier);
  document.getElementById('statCost').textContent = `$${estCost - 50} - $${estCost + 80}`;
  document.getElementById('statVehicle').textContent = data.vehicle.name;

  // Day Tabs
  renderDayTabs();
  switchDayTab(1);
}

function renderDayTabs() {
  const container = document.getElementById('dayTabsNav');
  if (!container) return;
  const days = currentTripState.data.daysData;

  container.innerHTML = days.map((d, index) => `
    <button class="day-tab ${d.day === currentTripState.activeDay ? 'active' : ''}" onclick="switchDayTab(${d.day})">
      <span class="day-num">Day ${d.day}</span>
      <span class="day-name">${d.title.split('(')[0]}</span>
    </button>
  `).join('');
}

function switchDayTab(dayNum) {
  currentTripState.activeDay = dayNum;
  renderDayTabs();
  renderTimelineItems(dayNum);
}

function renderTimelineItems(dayNum) {
  const container = document.getElementById('timelineList');
  if (!container) return;

  const daysData = currentTripState.data.daysData;
  const dayObj = daysData.find(d => d.day === dayNum) || daysData[0];

  if (!dayObj || !dayObj.items.length) {
    container.innerHTML = `<div class="card text-center p-4"><p class="text-muted">No activities added for Day ${dayNum} yet.</p></div>`;
    return;
  }

  container.innerHTML = dayObj.items.map(item => `
    <div class="timeline-card ${item.hiddenGem ? 'hidden-gem' : ''}">
      <img src="${item.image}" alt="${item.title}" class="t-thumb">
      <div class="t-content">
        <div class="t-header">
          <span class="t-time"><i class="fa-regular fa-clock"></i> ${item.time}</span>
          ${item.hiddenGem ? '<span class="badge badge-secondary"><i class="fa-solid fa-gem"></i> Hidden Gem</span>' : ''}
        </div>
        <h4 class="t-title">${item.title}</h4>
        <div class="t-meta">
          <span><i class="fa-solid fa-hourglass-half"></i> ${item.duration}</span>
          <span>•</span>
          <span><i class="fa-solid fa-ticket"></i> ${item.fee ? `$${item.fee}` : 'Free Entry'}</span>
        </div>
        <div class="t-ai-tip">${item.aiTip}</div>
        <div class="t-actions">
          <span class="badge badge-primary">${item.category}</span>
          <div class="d-flex align-items-center gap-2">
            <button class="t-btn-gmaps" onclick="openStopInGoogleMaps('${item.title.replace(/'/g, "\\'")}', ${item.lat || 0}, ${item.lng || 0})" title="Navigate in Google Maps">
              <i class="fa-brands fa-google"></i> Maps
            </button>
            <button class="t-btn-icon" onclick="removeTimelineStop('${item.id}')" title="Remove stop"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function removeTimelineStop(id) {
  const dayObj = currentTripState.data.daysData.find(d => d.day === currentTripState.activeDay);
  if (dayObj) {
    dayObj.items = dayObj.items.filter(item => item.id !== id);
    renderTimelineItems(currentTripState.activeDay);
  }
}

// Modal logic for adding custom stops
function openAddStopModal() {
  document.getElementById('addStopModal').classList.add('active');
}

function submitCustomStop() {
  const name = document.getElementById('newStopName').value || "Custom Scenic Stop";
  const cat = document.getElementById('newStopCategory').value;
  const duration = document.getElementById('newStopDuration').value || 45;
  const fee = parseInt(document.getElementById('newStopFee').value || 0);

  const dayObj = currentTripState.data.daysData.find(d => d.day === currentTripState.activeDay) || currentTripState.data.daysData[0];
  dayObj.items.push({
    id: `custom_${Date.now()}`,
    time: "03:30 PM",
    title: name,
    category: cat.toUpperCase(),
    duration: `${duration} mins`,
    fee: fee,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
    aiTip: "✨ Custom added stop by user.",
    hiddenGem: true
  });

  closeModal('addStopModal');
  renderTimelineItems(currentTripState.activeDay);
}

// --------------------------------------------------------------------------
// 6. SCREEN 3: TRANSPORT & FUEL CALCULATOR
// --------------------------------------------------------------------------
const VEHICLE_OPTIONS = [
  { name: "7-Seater Luxury SUV", type: "SUV", price: "$65/day", img: "assets/luxury_suv.png", cons: "Higher fuel usage" },
  { name: "Tesla Model Y EV Sedan", type: "EV", price: "$75/day", img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=300&q=80", cons: "Requires EV stops" },
  { name: "Toyota Camry Hybrid", type: "Sedan", price: "$45/day", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80", cons: "Compact luggage space" },
  { name: "Mercedes V-Class Van", type: "Van", price: "$110/day", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80", cons: "Larger turning radius" }
];

const RENTAL_AGENCIES = [
  { name: "Hertz Sri Lanka Express", rating: 4.9, price: "$65/day", badge: "Airport Delivery", logo: "fa-car" },
  { name: "Avis Luxury Rentals", rating: 4.8, price: "$70/day", badge: "Free Cancellation", logo: "fa-key" },
  { name: "Island Chauffeur & Self-Drive", rating: 4.95, price: "$85/day", badge: "Driver Option", logo: "fa-user-tie" }
];

function renderTransportScreen() {
  // Render carousel
  const carousel = document.getElementById('vehicleCarousel');
  if (carousel) {
    carousel.innerHTML = VEHICLE_OPTIONS.map(v => `
      <div class="v-card ${v.name === currentTripState.data.vehicle.name ? 'active' : ''}" onclick="selectVehicle('${v.name}')">
        <div class="v-card-name">${v.name}</div>
        <div class="v-card-price">${v.price}</div>
      </div>
    `).join('');
  }

  // Render agencies
  const agencies = document.getElementById('rentalAgenciesList');
  if (agencies) {
    agencies.innerHTML = RENTAL_AGENCIES.map(a => `
      <div class="card mb-2 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <div class="stat-icon bg-primary-light text-primary"><i class="fa-solid ${a.logo}"></i></div>
          <div>
            <h4 class="text-sm">${a.name}</h4>
            <span class="text-xs text-muted">⭐ ${a.rating} • ${a.badge}</span>
          </div>
        </div>
        <button class="btn btn-sm btn-outline" onclick="openVehicleBookingModal('${a.name}', '${a.price}')">Hire Now</button>
      </div>
    `).join('');
  }

  updateFuelCalculator();
}

function selectVehicle(name) {
  const match = VEHICLE_OPTIONS.find(v => v.name === name);
  if (match) {
    currentTripState.data.vehicle.name = match.name;
    renderTransportScreen();
    renderTripDashboard();
  }
}

function updateFuelCalculator() {
  const effSlider = document.getElementById('efficiencySlider');
  const priceSlider = document.getElementById('fuelPriceSlider');
  if (!effSlider || !priceSlider) return;

  const effVal = parseFloat(effSlider.value);
  const priceVal = parseFloat(priceSlider.value);

  document.getElementById('efficiencyVal').textContent = `${effVal.toFixed(1)} L / 100km`;
  document.getElementById('fuelPriceVal').textContent = `$${priceVal.toFixed(2)} / L`;

  const distKm = parseInt(currentTripState.data.distance) || 340;
  const totalLiters = (distKm / 100) * effVal;
  const totalCost = totalLiters * priceVal;

  document.getElementById('fuelLitersResult').textContent = `${totalLiters.toFixed(1)} Liters`;
  document.getElementById('fuelCostResult').textContent = `$${totalCost.toFixed(2)}`;
  document.getElementById('fuelEstimateTotalBadge').textContent = `Est. Fuel: ${Math.round(totalLiters)}L (~$${totalCost.toFixed(0)})`;
}

function openVehicleBookingModal(title, price) {
  document.getElementById('modalVehicleTitle').textContent = title;
  document.getElementById('modalVehiclePrice').textContent = `${price} • Verified Partner`;
  document.getElementById('vehicleModal').classList.add('active');
}

function confirmVehicleBooking() {
  closeModal('vehicleModal');
  alert("🎉 Reservation request sent! Check your email for driver confirmation code.");
}

// --------------------------------------------------------------------------
// 7. SCREEN 4 & SCREEN 6: GOOGLE MAPS ENGINE & LAYERS
// --------------------------------------------------------------------------
const GOOGLE_MAP_LAYERS = {
  streets: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  hybrid: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
  satellite: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  terrain: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
  traffic: 'https://mt1.google.com/vt/lyrs=m,traffic&x={x}&y={y}&z={z}',
  dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
};

let activeGoogleLayer = null;
let activeHudLayer = null;

function initLeafletMaps() {
  // Screen 4 Stays & Route Map with Google Maps
  const mapEl = document.getElementById('routeMap');
  if (mapEl && !currentTripState.mapInstance) {
    const map = L.map('routeMap', { zoomControl: false }).setView([7.2906, 80.6337], 9);
    
    // Default Google Streets Tile Layer
    activeGoogleLayer = L.tileLayer(GOOGLE_MAP_LAYERS.streets, {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Maps'
    }).addTo(map);

    // Route Polyline
    const routeCoords = [
      [6.9271, 79.8612], // Colombo
      [7.3014, 80.3867], // Pinnawala
      [7.2936, 80.6413], // Kandy
      [6.9497, 80.6865], // Nuwara Eliya
      [6.8768, 81.0608]  // Ella
    ];
    const polyline = L.polyline(routeCoords, { color: '#1A5CFF', weight: 6, opacity: 0.85 }).addTo(map);
    map.fitBounds(polyline.getBounds(), { padding: [30, 30] });

    // Custom Google-Styled Markers
    routeCoords.forEach((coord, idx) => {
      const labels = ["Origin: Colombo", "Pinnawala Elephants", "Kandy Heritage", "Nuwara Eliya Hills", "Destination: Ella"];
      const marker = L.marker(coord).addTo(map);
      marker.bindPopup(`
        <div style="font-family:sans-serif; min-width:140px;">
          <b style="color:#1A5CFF;">${labels[idx]}</b>
          <div style="margin-top:6px;">
            <button onclick="openStopInGoogleMaps('${labels[idx]}', ${coord[0]}, ${coord[1]})" style="background:#4285F4; color:#fff; border:none; padding:4px 8px; border-radius:4px; font-size:11px; font-weight:bold; cursor:pointer;">
              🗺️ Open in Google Maps
            </button>
          </div>
        </div>
      `);
    });

    currentTripState.mapInstance = map;
  }

  // Screen 6 HUD Live GPS Navigation Map
  const hudMapEl = document.getElementById('hudMap');
  if (hudMapEl && !currentTripState.hudMapInstance) {
    const hudMap = L.map('hudMap', { zoomControl: false }).setView([7.15, 80.60], 10);
    
    activeHudLayer = L.tileLayer(GOOGLE_MAP_LAYERS.dark, {
      maxZoom: 18,
      attribution: '&copy; Google Maps & CartoDB'
    }).addTo(hudMap);

    const hudCoords = [
      [7.2936, 80.6413], // Kandy
      [7.15, 80.62],
      [6.9497, 80.6865]  // Nuwara Eliya
    ];
    L.polyline(hudCoords, { color: '#FF6B4A', weight: 6, opacity: 0.95, dashArray: '8, 8' }).addTo(hudMap);

    // Live Vehicle GPS Marker with Pulse
    const carIcon = L.divIcon({
      className: 'hud-car-marker',
      html: '<div style="background:#4285F4; width:26px; height:26px; border-radius:50%; border:3px solid #FFF; box-shadow:0 0 18px #4285F4; display:flex; align-items:center; justify-content:center; color:#fff; font-size:12px;">📍</div>',
      iconSize: [26, 26]
    });
    L.marker([7.15, 80.62], { icon: carIcon }).addTo(hudMap).bindPopup("<b>Current GPS Position</b>");

    currentTripState.hudMapInstance = hudMap;
  }
}

// Google Maps Layer Switcher
function setGoogleMapLayer(type, btn) {
  if (btn) {
    document.querySelectorAll('.gmaps-layer-bar .layer-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  if (!currentTripState.mapInstance) return;

  if (activeGoogleLayer) {
    currentTripState.mapInstance.removeLayer(activeGoogleLayer);
  }

  const url = GOOGLE_MAP_LAYERS[type] || GOOGLE_MAP_LAYERS.streets;
  activeGoogleLayer = L.tileLayer(url, {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; Google Maps'
  }).addTo(currentTripState.mapInstance);
}

// Google Maps Action Launchers
function openCurrentRouteInGoogleMaps() {
  const data = currentTripState.data;
  const origin = encodeURIComponent(data.origin);
  const dest = encodeURIComponent(data.destination);
  const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`;
  window.open(url, '_blank');
}

function openStopInGoogleMaps(title, lat, lng) {
  let url;
  if (lat && lng && lat !== 0) {
    url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  } else {
    url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title + ', ' + currentTripState.data.destination)}`;
  }
  window.open(url, '_blank');
}

function launchGoogleMapsNavigation() {
  const data = currentTripState.data;
  const dest = encodeURIComponent(data.destination);
  const origin = encodeURIComponent(data.origin);
  const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving&dir_action=navigate`;
  window.open(url, '_blank');
}

function renderStaysAndDiningScreen() {
  const stays = currentTripState.data.stays || [];
  const dining = currentTripState.data.dining || [];

  // Render Stays
  const staysGrid = document.getElementById('staysGrid');
  if (staysGrid) {
    staysGrid.innerHTML = stays.map(s => {
      const price = Math.round(s.price * currentTripState.globalBudgetMultiplier);
      const safeName = s.name.replace(/'/g, "\\'");
      return `
        <div class="stay-card">
          <img src="${s.image}" alt="${s.name}" class="stay-img">
          <div class="stay-info">
            <h4 class="stay-title">${s.name}</h4>
            <div class="stay-price">$${price} <span class="text-xs text-muted">/ night</span></div>
            <div class="text-xs text-muted"><i class="fa-solid fa-location-arrow"></i> ${s.offRoute} • ⭐ ${s.rating}</div>
            <div class="stay-amenities">
              ${s.amenities.map(a => `<span class="badge badge-glass">${a}</span>`).join('')}
            </div>
            <div class="d-flex gap-2 mt-2">
              <button class="btn btn-sm btn-primary flex-1" onclick="alert('Reserving ${safeName} at $${price}/night!')">Book Stay</button>
              <button class="btn btn-sm btn-outline" onclick="openStopInGoogleMaps('${safeName}', 0, 0)" title="View on Google Maps">
                <i class="fa-brands fa-google text-primary"></i> Maps
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Dining
  const diningList = document.getElementById('diningList');
  if (diningList) {
    diningList.innerHTML = dining.map(d => {
      const safeName = d.name.replace(/'/g, "\\'");
      return `
        <div class="dining-card">
          <div>
            <span class="badge badge-secondary mb-1">${d.time}</span>
            <h4 class="text-sm font-bold">${d.name}</h4>
            <p class="text-xs text-muted">🍲 Specialty: <strong>${d.specialty}</strong></p>
          </div>
          <div class="text-right">
            <span class="badge badge-success">${d.rating} ⭐</span>
            <div class="text-xs text-muted mt-1">${d.detour}</div>
            <button class="t-btn-gmaps mt-1" onclick="openStopInGoogleMaps('${safeName}', 0, 0)" title="Open in Google Maps">
              <i class="fa-brands fa-google"></i> Maps
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

function filterStays(type, btn) {
  document.querySelectorAll('#stayFilters .pill-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const stays = currentTripState.data.stays || [];
  const filtered = (type === 'all') ? stays : stays.filter(s => s.type === type);
  
  const staysGrid = document.getElementById('staysGrid');
  if (staysGrid) {
    staysGrid.innerHTML = filtered.map(s => {
      const safeName = s.name.replace(/'/g, "\\'");
      const price = Math.round(s.price * currentTripState.globalBudgetMultiplier);
      return `
        <div class="stay-card">
          <img src="${s.image}" alt="${s.name}" class="stay-img">
          <div class="stay-info">
            <h4 class="stay-title">${s.name}</h4>
            <div class="stay-price">$${price} / night</div>
            <div class="d-flex gap-2 mt-2">
              <button class="btn btn-sm btn-primary flex-1">Book Stay</button>
              <button class="btn btn-sm btn-outline" onclick="openStopInGoogleMaps('${safeName}', 0, 0)"><i class="fa-brands fa-google text-primary"></i> Maps</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

function filterMapNodes(cat, btn) {
  document.querySelectorAll('.map-filter-chips .m-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
}

// --------------------------------------------------------------------------
// 8. SCREEN 5: BUDGET ANALYTICS & COST ENGINE
// --------------------------------------------------------------------------
function renderCostBreakdownScreen() {
  const base = currentTripState.data.baseCost;
  const mult = currentTripState.globalBudgetMultiplier;
  
  const transport = Math.round(base * 0.28 * mult);
  const stays = Math.round(base * 0.44 * mult);
  const food = Math.round(base * 0.18 * mult);
  const activities = Math.round(base * 0.10 * mult);
  const total = transport + stays + food + activities;

  document.getElementById('grandTotalDisplay').textContent = `$${total}`;

  // Breakdown List
  const list = document.getElementById('costBreakdownList');
  if (list) {
    list.innerHTML = `
      <div class="cost-cat-item">
        <div class="d-flex align-items-center gap-2">
          <span class="legend-color-dot" style="background: #1A5CFF;"></span>
          <span>Transport & Fuel (28%)</span>
        </div>
        <strong>$${transport}</strong>
      </div>
      <div class="cost-cat-item">
        <div class="d-flex align-items-center gap-2">
          <span class="legend-color-dot" style="background: #FF6B4A;"></span>
          <span>Accommodations & Stays (44%)</span>
        </div>
        <strong>$${stays}</strong>
      </div>
      <div class="cost-cat-item">
        <div class="d-flex align-items-center gap-2">
          <span class="legend-color-dot" style="background: #10B981;"></span>
          <span>Food & Dining (18%)</span>
        </div>
        <strong>$${food}</strong>
      </div>
      <div class="cost-cat-item">
        <div class="d-flex align-items-center gap-2">
          <span class="legend-color-dot" style="background: #F59E0B;"></span>
          <span>Activities & Entry Fees (10%)</span>
        </div>
        <strong>$${activities}</strong>
      </div>
    `;
  }
}

function renderBudgetChart() {
  const canvas = document.getElementById('budgetDonutChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const base = currentTripState.data.baseCost;
  const mult = currentTripState.globalBudgetMultiplier;

  const transport = Math.round(base * 0.28 * mult);
  const stays = Math.round(base * 0.44 * mult);
  const food = Math.round(base * 0.18 * mult);
  const activities = Math.round(base * 0.10 * mult);

  if (currentTripState.donutChartInstance) {
    currentTripState.donutChartInstance.destroy();
  }

  currentTripState.donutChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Transport & Fuel', 'Stays', 'Food & Dining', 'Activities'],
      datasets: [{
        data: [transport, stays, food, activities],
        backgroundColor: ['#1A5CFF', '#FF6B4A', '#10B981', '#F59E0B'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '72%',
      plugins: {
        legend: { display: false }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // Legend box
  const legendBox = document.getElementById('chartLegend');
  if (legendBox) {
    legendBox.innerHTML = `
      <div class="legend-item"><span><span class="legend-color-dot" style="background:#1A5CFF;"></span>Transport</span> <strong>$${transport}</strong></div>
      <div class="legend-item"><span><span class="legend-color-dot" style="background:#FF6B4A;"></span>Stays</span> <strong>$${stays}</strong></div>
      <div class="legend-item"><span><span class="legend-color-dot" style="background:#10B981;"></span>Dining</span> <strong>$${food}</strong></div>
      <div class="legend-item"><span><span class="legend-color-dot" style="background:#F59E0B;"></span>Activities</span> <strong>$${activities}</strong></div>
    `;
  }
}

function onGlobalBudgetSliderChange(val) {
  const tiers = {
    "1": { mult: 0.6, label: "Tier: Economy ($)" },
    "2": { mult: 1.0, label: "Tier: Mid-Range ($$)" },
    "3": { mult: 1.8, label: "Tier: Luxury ($$$)" }
  };
  const tier = tiers[val] || tiers["2"];
  currentTripState.globalBudgetMultiplier = tier.mult;
  document.getElementById('sliderBudgetTierLabel').textContent = tier.label;

  renderCostBreakdownScreen();
  renderBudgetChart();
  renderStaysAndDiningScreen();
  renderTripDashboard();
}

// --------------------------------------------------------------------------
// 9. SCREEN 6: LIVE AI NAVIGATION HUD & AUDIO GUIDE
// --------------------------------------------------------------------------
function toggleVoiceAudio() {
  const btn = document.getElementById('audioToggleBtn');
  const textBubble = document.getElementById('hudCompanionText').textContent;

  if (currentTripState.voiceAudioPlaying) {
    window.speechSynthesis.cancel();
    currentTripState.voiceAudioPlaying = false;
    btn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Listen';
  } else {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textBubble);
      utterance.rate = 1.0;
      utterance.onend = () => {
        currentTripState.voiceAudioPlaying = false;
        btn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Listen';
      };
      window.speechSynthesis.speak(utterance);
      currentTripState.voiceAudioPlaying = true;
      btn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
    } else {
      alert("Voice Synthesizer: " + textBubble);
    }
  }
}

function askAIVoicePrompt(promptText) {
  const bubble = document.getElementById('hudCompanionText');
  const responses = {
    'Tell me history of Kandy': '"Kandy was the last royal capital of Sri Lanka. The Sacred Tooth Relic Temple was built in 1595 and survived major historical sieges."',
    'Nearest coffee stop': '"In 1.8 km: High Forest Organic Ceylon Coffee lounge is on your right with 4.9 star rating."',
    'Weather ahead': '"Weather update: Sunny mountain mist ahead at Nuwara Eliya with comfortable 18°C temperature."'
  };
  bubble.textContent = responses[promptText] || `SmartTrip AI: Analyzing "${promptText}" for your active route...`;
  
  if (currentTripState.voiceAudioPlaying) {
    toggleVoiceAudio(); // restart speech
    toggleVoiceAudio();
  }
}

function triggerHUDQuickAction(type) {
  const actions = {
    gas: "⛽ Found 2 Gas Stations within 3 km along route.",
    food: "☕ Rest Stop: Ceylon Tea Lounge coming up in 4.1 km.",
    hospital: "🏥 Nearest General Hospital: Kandy Central (8 km away).",
    mechanic: "🛠️ 24/7 Roadside Mechanic dispatched call center: +94 81 222 3456."
  };
  alert(actions[type] || "Searching nearby utilities...");
}

// --------------------------------------------------------------------------
// 10. MODALS & UTILITIES
// --------------------------------------------------------------------------
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

function openShareModal() {
  document.getElementById('shareModal').classList.add('active');
}

function openVoiceModal() {
  document.getElementById('voiceModal').classList.add('active');
}

function shareTripAction(type) {
  closeModal('shareModal');
  const title = currentTripState.data.title;
  if (type === 'link') {
    navigator.clipboard.writeText(window.location.href);
    alert(`🔗 Direct trip link for "${title}" copied to clipboard!`);
  } else if (type === 'pdf') {
    window.print();
  } else {
    alert(`Exporting "${title}" itinerary...`);
  }
}
