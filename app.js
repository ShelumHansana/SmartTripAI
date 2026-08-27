/* ==========================================================================
   SMARTTRIPAI — REDESIGNED APPLICATION ENGINE
   Clean, user-friendly 4-screen flow:
   Home (wizard) → Plan (consolidated) → Explore (map) → Profile
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. TRIP PRESET DATA (unchanged from original)
// --------------------------------------------------------------------------
const TRIP_PRESETS = {
  srilanka: {
    title: "Colombo → Kandy → Ella",
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
        title: "Colombo → Kandy",
        items: [
          { id: "s1", time: "08:30 AM", title: "Pinnawala Elephant Sanctuary", category: "Nature", duration: "2h", fee: 15, image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&q=80", aiTip: "📸 Best photos at river bank during bath time (10:00 AM).", hiddenGem: false, lat: 7.3014, lng: 80.3867 },
          { id: "s2", time: "01:00 PM", title: "Ranweli Spice Garden & Lunch", category: "Food", duration: "1h 30m", fee: 10, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80", aiTip: "🌿 Try the Ceylon Cinnamon & Herbal Tea tasting.", hiddenGem: true, lat: 7.4667, lng: 80.6167 },
          { id: "s3", time: "04:30 PM", title: "Temple of the Sacred Tooth Relic", category: "Culture", duration: "2h", fee: 12, image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=400&q=80", aiTip: "🙏 Cover shoulders & knees. Evening ceremony at 6:30 PM.", hiddenGem: false, lat: 7.2936, lng: 80.6413 }
        ]
      },
      {
        day: 2,
        title: "Kandy Highlights",
        items: [
          { id: "s4", time: "09:00 AM", title: "Royal Botanical Gardens", category: "Nature", duration: "2h 15m", fee: 8, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80", aiTip: "🌸 Don't miss the Orchid House and Giant Bamboo avenue.", hiddenGem: false, lat: 7.2683, lng: 80.5966 },
          { id: "s5", time: "02:00 PM", title: "Ceylon Tea Factory & Viewpoint", category: "Photography", duration: "1h 45m", fee: 5, image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80", aiTip: "☕ Free BOP tea tasting with panoramic waterfall view.", hiddenGem: true, lat: 6.9497, lng: 80.6865 }
        ]
      },
      {
        day: 3,
        title: "Ella Scenic Express",
        items: [
          { id: "s6", time: "08:00 AM", title: "Nine Arch Bridge", category: "Photography", duration: "2h 30m", fee: 0, image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=400&q=80", aiTip: "🚂 Blue Express crosses bridge at 09:15 AM!", hiddenGem: false, lat: 6.8768, lng: 81.0608 },
          { id: "s7", time: "02:30 PM", title: "Little Adam's Peak Sunset Hike", category: "Adventure", duration: "2h", fee: 0, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", aiTip: "🌅 Easy 30-min summit. Stunning 360° Ella Gap sunset.", hiddenGem: false, lat: 6.8667, lng: 81.0500 }
        ]
      }
    ],
    stays: [
      { id: "h1", name: "Santani Ceylon Eco Villa & Spa", type: "villa", price: 180, rating: 4.9, reviews: 240, offRoute: "0.8 km off route", image: "assets/boutique_villa.png", amenities: ["Pool", "Wi-Fi", "Spa", "Mountain View", "Breakfast"] },
      { id: "h2", name: "Grand Hotel Nuwara Eliya", type: "hotel", price: 130, rating: 4.8, reviews: 512, offRoute: "0.2 km off route", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80", amenities: ["Heritage Bar", "Golf", "Wi-Fi", "High Tea"] },
      { id: "h3", name: "9 Arch Horizon Eco Resort (Ella)", type: "resort", price: 95, rating: 4.7, reviews: 180, offRoute: "0.5 km off route", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=300&q=80", amenities: ["Balcony View", "Free Parking", "Organic Dining"] }
    ],
    dining: [
      { id: "d1", time: "Breakfast", name: "Café Aroma Kandy", specialty: "Cinnamon Pancakes & Ceylon Espresso", detour: "2 min detour", rating: 4.8, price: "$8-$14" },
      { id: "d2", time: "Lunch", name: "Slightly Chilled Lounge", specialty: "Traditional 15-Curry Rice Feast", detour: "On route", rating: 4.9, price: "$12-$20" },
      { id: "d3", time: "Dinner", name: "Café Chill Ella", specialty: "Ceylon Spiced Lamprais & Cocktails", detour: "On route", rating: 4.9, price: "$15-$25" }
    ]
  },

  japan: {
    title: "Tokyo → Kyoto → Nara",
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
    travelTime: "2h 15m Bullet Train",
    baseCost: 820,
    vehicle: { name: "Tesla Model Y EV", type: "Electric EV", pricePerDay: 75, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=300&q=80" },
    daysData: [
      { day: 1, title: "Tokyo → Hakone", items: [
        { id: "j1", time: "09:00 AM", title: "Hakone Ropeway & Owakudani", category: "Nature", duration: "2h 30m", fee: 20, image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80", aiTip: "🌋 Try the famous Black Eggs!", hiddenGem: false, lat: 35.2428, lng: 139.0205 }
      ]},
      { day: 2, title: "Kyoto Temples", items: [
        { id: "j2", time: "08:00 AM", title: "Fushimi Inari (10,000 Torii Gates)", category: "Culture", duration: "2h 30m", fee: 0, image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80", aiTip: "⛩️ Go early before 9:30 AM crowds.", hiddenGem: false, lat: 34.9671, lng: 135.7727 }
      ]}
    ],
    stays: [
      { id: "jh1", name: "Kyoto Ryokan Gion Soba Luxury", type: "hotel", price: 260, rating: 4.9, reviews: 410, offRoute: "0.1 km", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=300&q=80", amenities: ["Private Onsen", "Kaiseki Breakfast", "Tatami Rooms"] }
    ],
    dining: [
      { id: "jd1", time: "Dinner", name: "Gion Duck Noodles", specialty: "Ramen with French Fusion Duck Broth", detour: "On route", rating: 4.9, price: "$18-$28" }
    ]
  },

  europe: {
    title: "Paris → Interlaken → Venice",
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
    vehicle: { name: "Mercedes V-Class", type: "Luxury Van", pricePerDay: 110, image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80" },
    daysData: [
      { day: 1, title: "Lauterbrunnen Valley", items: [
        { id: "e1", time: "10:00 AM", title: "Staubbach Falls Viewpoint", category: "Nature", duration: "2h", fee: 0, image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=400&q=80", aiTip: "📸 Walk behind the waterfall cliff spray!", hiddenGem: false, lat: 46.5947, lng: 7.9080 }
      ]}
    ],
    stays: [
      { id: "eh1", name: "Victoria-Jungfrau Grand Hotel", type: "hotel", price: 450, rating: 4.95, reviews: 620, offRoute: "On route", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80", amenities: ["Glacier View", "Thermal Spa", "Michelin Dining"] }
    ],
    dining: [
      { id: "ed1", time: "Lunch", name: "Restaurant 360° Piz Gloria", specialty: "Revolving Summit Fondue Feast", detour: "Cable car", rating: 4.9, price: "$45-$80" }
    ]
  }
};

// --------------------------------------------------------------------------
// 2. GLOBAL STATE
// --------------------------------------------------------------------------
let state = {
  presetKey: 'srilanka',
  data: JSON.parse(JSON.stringify(TRIP_PRESETS.srilanka)),
  activeDay: 1,
  activeScreen: 'screen-home',
  wizardStep: 1,
  theme: 'light',
  budgetMultiplier: 1.0,
  mapInstance: null,
  chartInstance: null,
  voicePlaying: false
};

const VEHICLE_OPTIONS = [
  { name: "7-Seater Luxury SUV", type: "SUV", price: "$65/day" },
  { name: "Tesla Model Y EV", type: "EV", price: "$75/day" },
  { name: "Toyota Camry Hybrid", type: "Sedan", price: "$45/day" },
  { name: "Mercedes V-Class", type: "Van", price: "$110/day" }
];

const MAP_LAYERS = {
  streets: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  satellite: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
  terrain: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
};

let activeMapLayer = null;

// --------------------------------------------------------------------------
// 3. INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  updateGreeting();
  loadPreset('srilanka');
});

function updateGreeting() {
  const h = new Date().getHours();
  let greeting = 'Good evening';
  if (h < 12) greeting = 'Good morning';
  else if (h < 17) greeting = 'Good afternoon';
  const el = document.getElementById('homeGreeting');
  if (el) el.textContent = greeting + ' 👋';
}

// --------------------------------------------------------------------------
// 4. SCREEN NAVIGATION
// --------------------------------------------------------------------------
function switchScreen(screenId) {
  state.activeScreen = screenId;

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-screen') === screenId);
  });

  // Initialize map when Explore is first opened
  if (screenId === 'screen-explore' && !state.mapInstance) {
    setTimeout(initMap, 100);
  } else if (screenId === 'screen-explore' && state.mapInstance) {
    setTimeout(() => state.mapInstance.invalidateSize(), 200);
  }
}

// --------------------------------------------------------------------------
// 5. WIZARD FLOW
// --------------------------------------------------------------------------
function wizardNext() {
  if (state.wizardStep >= 3) return;
  state.wizardStep++;
  updateWizardUI();
}

function wizardPrev() {
  if (state.wizardStep <= 1) return;
  state.wizardStep--;
  updateWizardUI();
}

function updateWizardUI() {
  const step = state.wizardStep;

  // Hide all steps, show current
  for (let i = 1; i <= 3; i++) {
    const stepEl = document.getElementById(`wizardStep${i}`);
    if (stepEl) stepEl.classList.toggle('active', i === step);
  }

  // Update dots
  for (let i = 1; i <= 3; i++) {
    const dot = document.getElementById(`wDot${i}`);
    const label = document.getElementById(`wLabel${i}`);
    if (!dot) continue;

    dot.classList.remove('active', 'completed');
    label.classList.remove('active', 'completed');

    if (i < step) {
      dot.classList.add('completed');
      dot.innerHTML = '<i class="fa-solid fa-check" style="font-size:13px;"></i>';
      label.classList.add('completed');
    } else if (i === step) {
      dot.classList.add('active');
      dot.textContent = i;
      label.classList.add('active');
    } else {
      dot.textContent = i;
    }
  }

  // Update lines
  const line1 = document.getElementById('wLine1');
  const line2 = document.getElementById('wLine2');
  if (line1) line1.classList.toggle('completed', step > 1);
  if (line2) line2.classList.toggle('completed', step > 2);
}

// --------------------------------------------------------------------------
// 6. TRIP SETUP CONTROLS
// --------------------------------------------------------------------------
function detectGPSLocation() {
  const el = document.getElementById('originInput');
  el.value = "📍 Bandaranaike Airport (CMB)";
  el.style.borderColor = "var(--primary)";
  setTimeout(() => el.style.borderColor = "var(--border)", 1500);
}

function setDestination(val) {
  document.getElementById('destInput').value = val;
}

function adjustDuration(delta) {
  let val = state.data.days + delta;
  if (val < 1) val = 1;
  if (val > 14) val = 14;
  state.data.days = val;
  document.getElementById('durationValue').textContent = val;
}

function adjustGroup(type, delta) {
  let val = (state.data[type] || 0) + delta;
  if (val < 0) val = 0;
  if (type === 'adults' && val < 1) val = 1;
  state.data[type] = val;
  const el = document.getElementById(`${type}Count`);
  if (el) el.textContent = val;
}

function selectBudget(btn) {
  document.querySelectorAll('#budgetCards .style-card').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const val = btn.getAttribute('data-value');
  state.data.budget = val;
  const multipliers = { economy: 0.6, mid: 1.0, luxury: 1.8 };
  state.budgetMultiplier = multipliers[val] || 1.0;
}

function toggleVibe(btn) {
  btn.classList.toggle('active');
}

// --------------------------------------------------------------------------
// 7. GENERATE ITINERARY & LOAD PRESET
// --------------------------------------------------------------------------
function generateAIItinerary() {
  const origin = document.getElementById('originInput').value;
  const dest = document.getElementById('destInput').value;
  state.data.origin = origin;
  state.data.destination = dest;
  state.data.title = `${origin.split(',')[0]} → ${dest.split(',')[0]}`;

  renderPlanScreen();
  renderExploreItems();
  switchScreen('screen-plan');
}

function loadPreset(key) {
  if (!TRIP_PRESETS[key]) return;
  state.presetKey = key;
  state.data = JSON.parse(JSON.stringify(TRIP_PRESETS[key]));

  // Sync form fields
  document.getElementById('originInput').value = state.data.origin;
  document.getElementById('destInput').value = state.data.destination;
  document.getElementById('durationValue').textContent = state.data.days;
  document.getElementById('adultsCount').textContent = state.data.adults;
  document.getElementById('kidsCount').textContent = state.data.kids;
  document.getElementById('petsCount').textContent = state.data.pets;

  // Set budget cards
  document.querySelectorAll('#budgetCards .style-card').forEach(c => {
    c.classList.toggle('active', c.getAttribute('data-value') === state.data.budget);
  });
  const multipliers = { economy: 0.6, mid: 1.0, luxury: 1.8 };
  state.budgetMultiplier = multipliers[state.data.budget] || 1.0;

  renderPlanScreen();
  renderExploreItems();
}

function loadAndGo(key) {
  loadPreset(key);
  switchScreen('screen-plan');
}

// --------------------------------------------------------------------------
// 8. PLAN SCREEN RENDERING
// --------------------------------------------------------------------------
function renderPlanScreen() {
  const data = state.data;
  const mult = state.budgetMultiplier;

  // Hero
  const heroImg = document.getElementById('heroDestImage');
  if (heroImg) heroImg.src = data.heroImage;

  const heroTitle = document.getElementById('heroTripTitle');
  if (heroTitle) heroTitle.textContent = data.title;

  const heroMeta = document.getElementById('heroTripMeta');
  if (heroMeta) {
    heroMeta.innerHTML = `
      <span><i class="fa-regular fa-calendar"></i> ${data.days} Days</span>
      <span><i class="fa-solid fa-user-group"></i> ${data.adults} Adults${data.kids ? `, ${data.kids} Kids` : ''}</span>
      <span><i class="fa-solid fa-car-side"></i> ${data.distance}</span>
    `;
  }

  // Quick stats
  document.getElementById('statDistance').textContent = data.distance;
  const estCost = Math.round(data.baseCost * mult);
  document.getElementById('statCost').textContent = `~$${estCost}`;
  document.getElementById('statVehicle').textContent = data.vehicle.name.split(' ').slice(-1)[0]; // last word

  // Day tabs
  renderDayTabs();
  switchDayTab(1);

  // Collapsible sections
  renderTransportSection();
  renderStaysSection();
  renderDiningSection();
  renderBudgetSection();
}

function renderDayTabs() {
  const container = document.getElementById('dayTabsNav');
  if (!container) return;
  container.innerHTML = state.data.daysData.map(d => `
    <button class="day-tab ${d.day === state.activeDay ? 'active' : ''}" onclick="switchDayTab(${d.day})">
      <span class="day-tab-num">Day ${d.day}</span>
      <span class="day-tab-name">${d.title}</span>
    </button>
  `).join('');
}

function switchDayTab(dayNum) {
  state.activeDay = dayNum;
  renderDayTabs();
  renderTimeline(dayNum);
}

function renderTimeline(dayNum) {
  const container = document.getElementById('timelineList');
  if (!container) return;

  const dayObj = state.data.daysData.find(d => d.day === dayNum) || state.data.daysData[0];
  if (!dayObj || !dayObj.items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📋</div><div class="empty-state-title">No activities yet</div><div class="empty-state-desc">Tap "Add a stop" to get started.</div></div>`;
    return;
  }

  const categoryIcons = { 'Nature': '🌲', 'Culture': '⛩️', 'Food': '🍜', 'Photography': '📸', 'Adventure': '🧗', 'Beach': '🏖️' };

  container.innerHTML = dayObj.items.map(item => {
    const icon = categoryIcons[item.category] || '📍';
    return `
    <div class="timeline-item">
      <div class="timeline-dot ${item.hiddenGem ? 'gem' : ''}">${icon}</div>
      <div class="timeline-card ${item.hiddenGem ? 'hidden-gem' : ''}">
        <img src="${item.image}" alt="${item.title}" class="timeline-card-img">
        <div class="timeline-card-body">
          <div class="timeline-card-time"><i class="fa-regular fa-clock"></i> ${item.time}</div>
          <div class="timeline-card-title">${item.title}</div>
          <div class="timeline-card-meta">
            <span><i class="fa-solid fa-hourglass-half"></i> ${item.duration}</span>
            <span>•</span>
            <span>${item.fee ? `$${item.fee}` : 'Free'}</span>
          </div>
          <div class="timeline-ai-tip">${item.aiTip}</div>
          <div class="timeline-card-footer">
            <span class="badge badge-primary">${item.category}</span>
            <div class="timeline-action-btns">
              <button class="t-btn gmaps" onclick="openStopInGoogleMaps('${item.title.replace(/'/g, "\\'")}', ${item.lat || 0}, ${item.lng || 0})" title="Google Maps"><i class="fa-brands fa-google"></i></button>
              <button class="t-btn" onclick="removeStop('${item.id}')" title="Remove"><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function removeStop(id) {
  const dayObj = state.data.daysData.find(d => d.day === state.activeDay);
  if (dayObj) {
    dayObj.items = dayObj.items.filter(item => item.id !== id);
    renderTimeline(state.activeDay);
  }
}

// --------------------------------------------------------------------------
// 9. COLLAPSIBLE SECTIONS
// --------------------------------------------------------------------------
function toggleCollapsible(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('open');
}

function renderTransportSection() {
  const data = state.data;
  const distKm = parseInt(data.distance) || 340;
  const fuelLiters = (distKm / 100) * 9.0;
  const fuelCost = fuelLiters * 1.45;

  document.getElementById('transportSummary').textContent = `${data.vehicle.name} · ~$${Math.round(fuelCost)} fuel`;

  const container = document.getElementById('transportContent');
  if (!container) return;

  container.innerHTML = `
    <div class="vehicle-pick">
      <img src="${data.vehicle.image}" alt="${data.vehicle.name}" class="vehicle-pick-img">
      <div class="vehicle-pick-info">
        <div class="vehicle-pick-name">${data.vehicle.name}</div>
        <div class="vehicle-pick-spec">${data.vehicle.type} · $${data.vehicle.pricePerDay}/day</div>
        <span class="badge badge-primary mt-1">AI Recommended</span>
      </div>
    </div>

    <div style="font-size: 13px; font-weight: 600; margin-bottom: 6px; color: var(--text-secondary);">Other options</div>
    <div class="vehicle-alt-scroll">
      ${VEHICLE_OPTIONS.map(v => `
        <button class="vehicle-alt ${v.name === data.vehicle.name ? 'active' : ''}" onclick="selectVehicle('${v.name}')">
          <div class="vehicle-alt-name">${v.name.split(' ').slice(-2).join(' ')}</div>
          <div class="vehicle-alt-price">${v.price}</div>
        </button>
      `).join('')}
    </div>

    <div class="fuel-summary">
      <div class="fuel-row"><span>Total distance</span><span>${data.distance}</span></div>
      <div class="fuel-row"><span>Est. fuel needed</span><span>${fuelLiters.toFixed(1)} L</span></div>
      <div class="fuel-row total"><span>Est. fuel cost</span><span>$${fuelCost.toFixed(0)}</span></div>
    </div>

    <button class="btn btn-primary btn-block mt-3" onclick="openVehicleBookingModal('${data.vehicle.name}', '$${data.vehicle.pricePerDay}/day')">
      Hire Vehicle <i class="fa-solid fa-arrow-right"></i>
    </button>
  `;
}

function selectVehicle(name) {
  const match = VEHICLE_OPTIONS.find(v => v.name === name);
  if (match) {
    state.data.vehicle.name = match.name;
    const priceStr = match.price.replace('$','').replace('/day','');
    state.data.vehicle.pricePerDay = parseInt(priceStr);
    renderTransportSection();
    // Also update stat
    document.getElementById('statVehicle').textContent = name.split(' ').slice(-1)[0];
  }
}

function renderStaysSection() {
  const stays = state.data.stays || [];
  const mult = state.budgetMultiplier;

  document.getElementById('staysSummary').textContent = `${stays.length} curated option${stays.length !== 1 ? 's' : ''}`;

  const container = document.getElementById('staysContent');
  if (!container) return;

  if (!stays.length) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-desc">No stays data for this trip.</div></div>';
    return;
  }

  container.innerHTML = stays.map(s => {
    const price = Math.round(s.price * mult);
    return `
    <div class="stay-card">
      <img src="${s.image}" alt="${s.name}" class="stay-card-img">
      <div class="stay-card-info">
        <div class="stay-card-name">${s.name}</div>
        <div class="stay-card-price">$${price} <span>/ night</span></div>
        <div class="stay-card-detail"><i class="fa-solid fa-location-arrow"></i> ${s.offRoute} · ⭐ ${s.rating}</div>
        <div class="stay-card-tags">
          ${s.amenities.slice(0, 3).map(a => `<span class="badge badge-outline">${a}</span>`).join('')}
        </div>
        <div class="stay-card-actions">
          <button class="btn btn-sm btn-primary flex-1" onclick="alert('Reserving ${s.name.replace(/'/g, "\\'")} at $${price}/night!')">Book</button>
          <button class="btn btn-sm btn-outline" onclick="openStopInGoogleMaps('${s.name.replace(/'/g, "\\'")}', 0, 0)"><i class="fa-brands fa-google"></i></button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderDiningSection() {
  const dining = state.data.dining || [];

  document.getElementById('diningSummary').textContent = `${dining.length} local recommendation${dining.length !== 1 ? 's' : ''}`;

  const container = document.getElementById('diningContent');
  if (!container) return;

  if (!dining.length) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-desc">No dining data for this trip.</div></div>';
    return;
  }

  container.innerHTML = dining.map(d => `
    <div class="dining-item">
      <div class="dining-left">
        <div class="badge badge-amber mb-2">${d.time}</div>
        <div class="dining-name">${d.name}</div>
        <div class="dining-specialty">🍲 ${d.specialty}</div>
      </div>
      <div class="dining-right">
        <div class="dining-rating">⭐ ${d.rating}</div>
        <div class="dining-detour">${d.detour}</div>
        <div class="text-xs font-semibold mt-1">${d.price}</div>
      </div>
    </div>
  `).join('');
}

function renderBudgetSection() {
  const base = state.data.baseCost;
  const mult = state.budgetMultiplier;

  const transport = Math.round(base * 0.28 * mult);
  const stays = Math.round(base * 0.44 * mult);
  const food = Math.round(base * 0.18 * mult);
  const activities = Math.round(base * 0.10 * mult);
  const total = transport + stays + food + activities;

  document.getElementById('budgetSummaryText').textContent = `Total: ~$${total}`;

  const container = document.getElementById('budgetContent');
  if (!container) return;

  container.innerHTML = `
    <div class="budget-overview">
      <div class="budget-chart-box">
        <canvas id="budgetDonutChart" width="120" height="120"></canvas>
        <div class="budget-chart-center">
          <span class="budget-chart-total-label">Total</span>
          <span class="budget-chart-total">$${total}</span>
        </div>
      </div>
      <div class="budget-legend">
        <div class="budget-legend-item">
          <div class="budget-legend-left"><div class="legend-dot" style="background:#2563EB;"></div><span>Transport</span></div>
          <span class="budget-legend-val">$${transport}</span>
        </div>
        <div class="budget-legend-item">
          <div class="budget-legend-left"><div class="legend-dot" style="background:#F97066;"></div><span>Stays</span></div>
          <span class="budget-legend-val">$${stays}</span>
        </div>
        <div class="budget-legend-item">
          <div class="budget-legend-left"><div class="legend-dot" style="background:#10B981;"></div><span>Food</span></div>
          <span class="budget-legend-val">$${food}</span>
        </div>
        <div class="budget-legend-item">
          <div class="budget-legend-left"><div class="legend-dot" style="background:#F59E0B;"></div><span>Activities</span></div>
          <span class="budget-legend-val">$${activities}</span>
        </div>
      </div>
    </div>
  `;

  // Render chart after DOM update
  setTimeout(() => {
    const canvas = document.getElementById('budgetDonutChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (state.chartInstance) state.chartInstance.destroy();

    state.chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Transport', 'Stays', 'Food', 'Activities'],
        datasets: [{
          data: [transport, stays, food, activities],
          backgroundColor: ['#2563EB', '#F97066', '#10B981', '#F59E0B'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '70%',
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: true
      }
    });
  }, 50);
}

// --------------------------------------------------------------------------
// 10. EXPLORE SCREEN: MAP + BOTTOM SHEET
// --------------------------------------------------------------------------
function initMap() {
  const mapEl = document.getElementById('routeMap');
  if (!mapEl || state.mapInstance) return;

  const data = state.data;
  const allCoords = [];
  data.daysData.forEach(day => {
    day.items.forEach(item => {
      if (item.lat && item.lng) allCoords.push([item.lat, item.lng]);
    });
  });

  const defaultCenter = allCoords.length ? allCoords[0] : [7.2906, 80.6337];
  const map = L.map('routeMap', { zoomControl: false }).setView(defaultCenter, 9);

  activeMapLayer = L.tileLayer(MAP_LAYERS.streets, {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; Google Maps'
  }).addTo(map);

  // Route polyline
  if (allCoords.length > 1) {
    const polyline = L.polyline(allCoords, { color: '#2563EB', weight: 5, opacity: 0.85 }).addTo(map);
    map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
  }

  // Markers
  allCoords.forEach((coord, idx) => {
    const items = [];
    data.daysData.forEach(day => {
      day.items.forEach(item => {
        if (item.lat === coord[0] && item.lng === coord[1]) items.push(item);
      });
    });
    const label = items[0]?.title || `Stop ${idx + 1}`;
    const marker = L.marker(coord).addTo(map);
    marker.bindPopup(`
      <div style="font-family:var(--font-body); min-width:140px;">
        <b style="color:#2563EB;">${label}</b>
        <div style="margin-top:6px;">
          <button onclick="openStopInGoogleMaps('${label.replace(/'/g, "\\'")}', ${coord[0]}, ${coord[1]})" style="background:#2563EB; color:#fff; border:none; padding:4px 10px; border-radius:6px; font-size:11px; font-weight:600; cursor:pointer;">
            🗺️ Google Maps
          </button>
        </div>
      </div>
    `);
  });

  state.mapInstance = map;
}

function setMapLayer(type, btn) {
  if (btn) {
    document.querySelectorAll('.map-layer-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  if (!state.mapInstance) return;
  if (activeMapLayer) state.mapInstance.removeLayer(activeMapLayer);

  activeMapLayer = L.tileLayer(MAP_LAYERS[type] || MAP_LAYERS.streets, {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; Google Maps'
  }).addTo(state.mapInstance);
}

function renderExploreItems() {
  const container = document.getElementById('exploreItemsList');
  if (!container) return;

  const items = [];
  // Add all stops
  state.data.daysData.forEach(day => {
    day.items.forEach(item => {
      items.push({ type: 'sights', icon: '📸', name: item.title, detail: `Day ${day.day} · ${item.time}`, lat: item.lat, lng: item.lng });
    });
  });
  // Add stays
  (state.data.stays || []).forEach(s => {
    items.push({ type: 'stays', icon: '🏨', name: s.name, detail: `$${s.price}/night · ⭐${s.rating}` });
  });
  // Add dining
  (state.data.dining || []).forEach(d => {
    items.push({ type: 'dining', icon: '🍜', name: d.name, detail: `${d.time} · ${d.price}` });
  });
  // Add gas stations
  items.push({ type: 'gas', icon: '⛽', name: 'Colombo Highway Rest Stop', detail: 'EV Fast Charging · 50 kW' });
  items.push({ type: 'gas', icon: '⛽', name: 'Kandy City Center Station', detail: 'Petrol & EV · 150 kW' });

  window._exploreAllItems = items;
  renderExploreFilteredItems(items);
}

function renderExploreFilteredItems(items) {
  const container = document.getElementById('exploreItemsList');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="bs-item" onclick="${item.lat ? `openStopInGoogleMaps('${item.name.replace(/'/g, "\\'")}', ${item.lat}, ${item.lng})` : `openStopInGoogleMaps('${item.name.replace(/'/g, "\\'")}', 0, 0)`}">
      <div class="bs-item-icon">${item.icon}</div>
      <div class="bs-item-info">
        <div class="bs-item-name">${item.name}</div>
        <div class="bs-item-detail">${item.detail}</div>
      </div>
      <i class="fa-solid fa-chevron-right bs-item-arrow"></i>
    </div>
  `).join('');
}

function filterExploreItems(type, btn) {
  document.querySelectorAll('.bs-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const items = window._exploreAllItems || [];
  const filtered = type === 'all' ? items : items.filter(i => i.type === type);
  renderExploreFilteredItems(filtered);
}

function dismissAiTip() {
  const el = document.getElementById('aiFloatTip');
  if (el) el.classList.add('hidden');
}

// --------------------------------------------------------------------------
// 11. GOOGLE MAPS INTEGRATION
// --------------------------------------------------------------------------
function openCurrentRouteInGoogleMaps() {
  const d = state.data;
  const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(d.origin)}&destination=${encodeURIComponent(d.destination)}&travelmode=driving`;
  window.open(url, '_blank');
}

function openStopInGoogleMaps(title, lat, lng) {
  let url;
  if (lat && lng && lat !== 0) {
    url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  } else {
    url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title + ', ' + state.data.destination)}`;
  }
  window.open(url, '_blank');
}

// --------------------------------------------------------------------------
// 12. MODALS
// --------------------------------------------------------------------------
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

function openAddStopModal() {
  document.getElementById('addStopModal').classList.add('active');
}

function submitCustomStop() {
  const name = document.getElementById('newStopName').value || "Custom Scenic Stop";
  const cat = document.getElementById('newStopCategory').value;
  const duration = document.getElementById('newStopDuration').value || 45;
  const fee = parseInt(document.getElementById('newStopFee').value || 0);

  const dayObj = state.data.daysData.find(d => d.day === state.activeDay) || state.data.daysData[0];
  dayObj.items.push({
    id: `custom_${Date.now()}`,
    time: "03:30 PM",
    title: name,
    category: cat === 'viewpoint' ? 'Photography' : cat === 'food' ? 'Food' : cat === 'activity' ? 'Adventure' : 'Culture',
    duration: `${duration} mins`,
    fee: fee,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    aiTip: "✨ Custom stop added by you.",
    hiddenGem: true
  });

  closeModal('addStopModal');
  renderTimeline(state.activeDay);
}

function openVehicleBookingModal(title, price) {
  document.getElementById('modalVehicleTitle').textContent = title;
  document.getElementById('modalVehiclePrice').textContent = `${price} · Verified Partner`;
  document.getElementById('vehicleModal').classList.add('active');
}

function confirmVehicleBooking() {
  closeModal('vehicleModal');
  alert("🎉 Reservation request sent! Check your email for confirmation.");
}

function openShareModal() {
  document.getElementById('shareModal').classList.add('active');
}

function openVoiceModal() {
  document.getElementById('voiceModal').classList.add('active');
}

function shareTripAction(type) {
  closeModal('shareModal');
  const title = state.data.title;
  if (type === 'link') {
    navigator.clipboard.writeText(window.location.href);
    alert(`🔗 Trip link for "${title}" copied!`);
  } else if (type === 'pdf') {
    window.print();
  } else {
    alert(`Exporting "${title}"...`);
  }
}

// --------------------------------------------------------------------------
// 13. PROFILE: DARK MODE
// --------------------------------------------------------------------------
function toggleDarkMode() {
  const html = document.documentElement;
  const toggle = document.getElementById('darkModeToggle');

  if (state.theme === 'dark') {
    html.setAttribute('data-theme', 'light');
    state.theme = 'light';
    if (toggle) toggle.classList.remove('on');
  } else {
    html.setAttribute('data-theme', 'dark');
    state.theme = 'dark';
    if (toggle) toggle.classList.add('on');
  }
}
