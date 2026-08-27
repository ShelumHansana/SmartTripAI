/* ==========================================================================
   SMARTTRIPAI — APPLICATION ENGINE (POWERED BY GOOGLE GEMINI AI)
   Clean, user-friendly 4-screen flow:
   Home (wizard) → Plan (consolidated) → Explore (map) → Profile
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. TRIP PRESET DATA (FALLBACK / DEMO DATASETS)
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
// 2. GLOBAL STATE & CONFIG
// --------------------------------------------------------------------------
const GEMINI_MODELS = (typeof window !== 'undefined' && window.CONFIG && window.CONFIG.GEMINI_MODELS) 
  ? window.CONFIG.GEMINI_MODELS 
  : ["gemini-3.7-flash", "gemini-3.6-flash", "gemini-2.5-flash-lite", "gemini-flash-latest"];
const GEMINI_MODEL = GEMINI_MODELS[0];

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
  voicePlaying: false,
  lastAssistantSpeech: ""
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
// 3. INITIALIZATION & STORAGE
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  updateGreeting();
  updateGeminiStatusUI();
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

function getGeminiApiKey() {
  if (typeof window !== 'undefined' && window.CONFIG && window.CONFIG.GEMINI_API_KEY) {
    return window.CONFIG.GEMINI_API_KEY;
  }
  return localStorage.getItem('smarttrip_gemini_api_key') || '';
}

function hasGeminiApiKey() {
  const key = getGeminiApiKey();
  return Boolean(key && key.length > 5);
}

function updateGeminiStatusUI() {
  // Built-in active status - zero user configuration needed
}

// --------------------------------------------------------------------------
// 4. TOAST NOTIFICATIONS
// --------------------------------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const icon = type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info';
  toast.className = `toast-msg toast-${type}`;
  toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --------------------------------------------------------------------------
// 5. SCREEN NAVIGATION
// --------------------------------------------------------------------------
function switchScreen(screenId) {
  state.activeScreen = screenId;

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-screen') === screenId);
  });

  // Initialize or invalidate map when Explore is active
  if (screenId === 'screen-explore') {
    if (!state.mapInstance) {
      setTimeout(initMap, 100);
    } else {
      setTimeout(() => state.mapInstance.invalidateSize(), 200);
    }
  }
}

// --------------------------------------------------------------------------
// 6. WIZARD FLOW
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

  for (let i = 1; i <= 3; i++) {
    const stepEl = document.getElementById(`wizardStep${i}`);
    if (stepEl) stepEl.classList.toggle('active', i === step);
  }

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

  const line1 = document.getElementById('wLine1');
  const line2 = document.getElementById('wLine2');
  if (line1) line1.classList.toggle('completed', step > 1);
  if (line2) line2.classList.toggle('completed', step > 2);
}

// --------------------------------------------------------------------------
// 7. TRIP SETUP CONTROLS
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
// 8. GOOGLE GEMINI AI TRIP GENERATION ENGINE
// --------------------------------------------------------------------------
async function generateAIItinerary() {
  const origin = document.getElementById('originInput').value || "Colombo, Sri Lanka";
  const dest = document.getElementById('destInput').value || "Kandy & Ella, Sri Lanka";
  const days = state.data.days || 3;
  const adults = state.data.adults || 2;
  const kids = state.data.kids || 0;
  const pets = state.data.pets || 0;
  const budget = state.data.budget || 'mid';

  // Gather active vibe tags
  const activeVibes = [];
  document.querySelectorAll('#vibeTags .vibe-tag.active').forEach(tag => {
    activeVibes.push(tag.textContent.replace(/^[^\w]+/, '').trim());
  });
  const vibeString = activeVibes.join(', ') || "Scenic, Cultural, Culinary";

  // Check if user has provided Gemini API key
  if (hasGeminiApiKey()) {
    const loadingOverlay = document.getElementById('aiLoadingOverlay');
    const loadingStatus = document.getElementById('aiLoadingStatus');
    if (loadingOverlay) loadingOverlay.classList.add('active');

    try {
      if (loadingStatus) loadingStatus.textContent = `Connecting to Google Gemini AI...`;

      // Status rotation animation
      const statusTimer = setInterval(() => {
        const msgs = [
          `Calculating driving distance & optimal routes...`,
          `Finding authentic viewpoints & cultural sights for ${dest}...`,
          `Curating top-rated stays & local cuisine...`,
          `Estimating fuel consumption and budget breakdown...`
        ];
        if (loadingStatus) {
          loadingStatus.textContent = msgs[Math.floor(Math.random() * msgs.length)];
        }
      }, 1500);

      const generatedPlan = await callGeminiTripAPI(origin, dest, days, adults, kids, pets, budget, vibeString);
      clearInterval(statusTimer);

      if (generatedPlan && generatedPlan.daysData && generatedPlan.daysData.length) {
        state.data = generatedPlan;
        state.activeDay = 1;
        showToast("✨ Google Gemini AI generated your customized itinerary!", "success");
      } else {
        throw new Error("Invalid format from Gemini");
      }
    } catch (err) {
      console.warn("Gemini API call failed, falling back to local engine:", err);
      showToast(`⚠️ Gemini: ${err.message || 'Error'}. Using Smart Template mode.`, "warning");
      generateSmartLocalFallback(origin, dest, days, adults, kids, pets, budget);
    } finally {
      if (loadingOverlay) loadingOverlay.classList.remove('active');
    }
  } else {
    // Demo Mode without API Key
    showToast("💡 Pro-Tip: Add your free Gemini API key in Profile to plan worldwide trips!", "info");
    generateSmartLocalFallback(origin, dest, days, adults, kids, pets, budget);
  }

  // Render newly prepared data across screens
  renderPlanScreen();
  renderExploreItems();
  updateMapWithCurrentRoute();
  switchScreen('screen-plan');
}

async function callGeminiTripAPI(origin, destination, days, adults, kids, pets, budget, vibes) {
  const apiKey = getGeminiApiKey();
  const models = GEMINI_MODELS;

  const systemPrompt = `You are SmartTripAI, an expert travel route planner. Generate a detailed, highly accurate, and engaging travel itinerary JSON from ${origin} to ${destination} for ${days} days.
Travelers: ${adults} Adults, ${kids} Kids, ${pets} Pets. Budget tier: ${budget}. Vibes: ${vibes}.

Respond ONLY with a valid JSON object strictly matching this schema:
{
  "title": "${origin.split(',')[0]} → ${destination.split(',')[0]}",
  "origin": "${origin}",
  "destination": "${destination}",
  "days": ${days},
  "adults": ${adults},
  "kids": ${kids},
  "pets": ${pets},
  "budget": "${budget}",
  "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "distance": "e.g. 380 km",
  "travelTime": "e.g. 6h 30m driving",
  "baseCost": 580,
  "vehicle": {
    "name": "7-Seater Luxury SUV",
    "type": "SUV / AWD",
    "pricePerDay": 65,
    "image": "assets/luxury_suv.png"
  },
  "daysData": [
    {
      "day": 1,
      "title": "Day 1 Highlights",
      "items": [
        {
          "id": "g1",
          "time": "09:00 AM",
          "title": "Specific Attraction / Viewpoint Name",
          "category": "Nature | Culture | Food | Photography | Adventure",
          "duration": "2h",
          "fee": 15,
          "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
          "aiTip": "Practical local tip with emoji",
          "hiddenGem": false,
          "lat": 6.9271,
          "lng": 79.8612
        }
      ]
    }
  ],
  "stays": [
    {
      "id": "h1",
      "name": "Real or curated Boutique Hotel/Resort Name",
      "type": "hotel | villa | resort",
      "price": 140,
      "rating": 4.9,
      "reviews": 340,
      "offRoute": "0.4 km off route",
      "image": "assets/boutique_villa.png",
      "amenities": ["Pool", "Wi-Fi", "Mountain View", "Breakfast"]
    }
  ],
  "dining": [
    {
      "id": "d1",
      "time": "Breakfast | Lunch | Dinner",
      "name": "Real restaurant / cafe name",
      "specialty": "Authentic regional specialty dish",
      "detour": "On route | 3 min detour",
      "rating": 4.8,
      "price": "$10-$20"
    }
  ]
}

Ensure all latitude/longitude (lat, lng) are geographically realistic for ${destination}. Include at least 2-3 stops per day, 2-3 stays, and 3 dining spots.`;

  let lastError = null;
  for (const model of models) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.7
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
      }

      const result = await response.json();
      const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) throw new Error("Empty response from Gemini");

      return JSON.parse(rawText);
    } catch (err) {
      lastError = err;
      console.warn(`Model ${model} failed, trying next model:`, err);
    }
  }

  throw lastError || new Error("All Gemini models failed");
}

function generateSmartLocalFallback(origin, dest, days, adults, kids, pets, budget) {
  // Check if destination matches one of our known presets
  const destLower = dest.toLowerCase();
  let basePreset = TRIP_PRESETS.srilanka;

  if (destLower.includes('japan') || destLower.includes('kyoto') || destLower.includes('tokyo')) {
    basePreset = TRIP_PRESETS.japan;
  } else if (destLower.includes('europe') || destLower.includes('swiss') || destLower.includes('paris') || destLower.includes('alps') || destLower.includes('amalfi')) {
    basePreset = TRIP_PRESETS.europe;
  }

  state.data = JSON.parse(JSON.stringify(basePreset));
  state.data.origin = origin;
  state.data.destination = dest;
  state.data.title = `${origin.split(',')[0]} → ${dest.split(',')[0]}`;
  state.data.days = days;
  state.data.adults = adults;
  state.data.kids = kids;
  state.data.pets = pets;
  state.data.budget = budget;
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

  document.querySelectorAll('#budgetCards .style-card').forEach(c => {
    c.classList.toggle('active', c.getAttribute('data-value') === state.data.budget);
  });
  const multipliers = { economy: 0.6, mid: 1.0, luxury: 1.8 };
  state.budgetMultiplier = multipliers[state.data.budget] || 1.0;

  renderPlanScreen();
  renderExploreItems();
  updateMapWithCurrentRoute();
}

function loadAndGo(key) {
  loadPreset(key);
  switchScreen('screen-plan');
}

// --------------------------------------------------------------------------
// 9. PLAN SCREEN RENDERING
// --------------------------------------------------------------------------
function renderPlanScreen() {
  const data = state.data;
  const mult = state.budgetMultiplier;

  // Hero
  const heroImg = document.getElementById('heroDestImage');
  if (heroImg) heroImg.src = data.heroImage || 'assets/hero_kandy.png';

  const heroTitle = document.getElementById('heroTripTitle');
  if (heroTitle) heroTitle.textContent = data.title;

  const heroMeta = document.getElementById('heroTripMeta');
  if (heroMeta) {
    heroMeta.innerHTML = `
      <span><i class="fa-regular fa-calendar"></i> ${data.days} Days</span>
      <span><i class="fa-solid fa-user-group"></i> ${data.adults} Adults${data.kids ? `, ${data.kids} Kids` : ''}</span>
      <span><i class="fa-solid fa-car-side"></i> ${data.distance || '340 km'}</span>
    `;
  }

  // Quick stats
  document.getElementById('statDistance').textContent = data.distance || '340 km';
  const estCost = Math.round((data.baseCost || 540) * mult);
  document.getElementById('statCost').textContent = `~$${estCost}`;
  document.getElementById('statVehicle').textContent = (data.vehicle?.name || 'SUV').split(' ').slice(-1)[0];

  // Day tabs & timeline
  renderDayTabs();
  switchDayTab(state.activeDay || 1);

  // Collapsibles
  renderTransportSection();
  renderStaysSection();
  renderDiningSection();
  renderBudgetSection();
}

function renderDayTabs() {
  const container = document.getElementById('dayTabsNav');
  if (!container) return;
  const daysData = state.data.daysData || [];
  container.innerHTML = daysData.map(d => `
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

  const daysData = state.data.daysData || [];
  const dayObj = daysData.find(d => d.day === dayNum) || daysData[0];
  if (!dayObj || !dayObj.items || !dayObj.items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📋</div><div class="empty-state-title">No activities yet</div><div class="empty-state-desc">Tap "Add a stop" to add custom viewpoints.</div></div>`;
    return;
  }

  const categoryIcons = { 'Nature': '🌲', 'Culture': '⛩️', 'Food': '🍜', 'Photography': '📸', 'Adventure': '🧗', 'Beach': '🏖️' };

  container.innerHTML = dayObj.items.map(item => {
    const icon = categoryIcons[item.category] || '📍';
    return `
    <div class="timeline-item">
      <div class="timeline-dot ${item.hiddenGem ? 'gem' : ''}">${icon}</div>
      <div class="timeline-card ${item.hiddenGem ? 'hidden-gem' : ''}">
        <img src="${item.image}" alt="${item.title}" class="timeline-card-img" onerror="this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'">
        <div class="timeline-card-body">
          <div class="timeline-card-time"><i class="fa-regular fa-clock"></i> ${item.time}</div>
          <div class="timeline-card-title">${item.title}</div>
          <div class="timeline-card-meta">
            <span><i class="fa-solid fa-hourglass-half"></i> ${item.duration}</span>
            <span>•</span>
            <span>${item.fee ? `$${item.fee}` : 'Free Entry'}</span>
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
// 10. COLLAPSIBLE SECTIONS
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
  const vehicle = data.vehicle || { name: "7-Seater Luxury SUV", type: "SUV", pricePerDay: 65, image: "assets/luxury_suv.png" };

  document.getElementById('transportSummary').textContent = `${vehicle.name} · ~$${Math.round(fuelCost)} fuel`;

  const container = document.getElementById('transportContent');
  if (!container) return;

  container.innerHTML = `
    <div class="vehicle-pick">
      <img src="${vehicle.image || 'assets/luxury_suv.png'}" alt="${vehicle.name}" class="vehicle-pick-img" onerror="this.src='assets/luxury_suv.png'">
      <div class="vehicle-pick-info">
        <div class="vehicle-pick-name">${vehicle.name}</div>
        <div class="vehicle-pick-spec">${vehicle.type} · $${vehicle.pricePerDay}/day</div>
        <span class="badge badge-primary mt-1">AI Recommended</span>
      </div>
    </div>

    <div style="font-size: 13px; font-weight: 600; margin-bottom: 6px; color: var(--text-secondary);">Other options</div>
    <div class="vehicle-alt-scroll">
      ${VEHICLE_OPTIONS.map(v => `
        <button class="vehicle-alt ${v.name === vehicle.name ? 'active' : ''}" onclick="selectVehicle('${v.name}')">
          <div class="vehicle-alt-name">${v.name.split(' ').slice(-2).join(' ')}</div>
          <div class="vehicle-alt-price">${v.price}</div>
        </button>
      `).join('')}
    </div>

    <div class="fuel-summary">
      <div class="fuel-row"><span>Total distance</span><span>${data.distance || '340 km'}</span></div>
      <div class="fuel-row"><span>Est. fuel needed</span><span>${fuelLiters.toFixed(1)} L</span></div>
      <div class="fuel-row total"><span>Est. fuel cost</span><span>$${fuelCost.toFixed(0)}</span></div>
    </div>

    <button class="btn btn-primary btn-block mt-3" onclick="openVehicleBookingModal('${vehicle.name}', '$${vehicle.pricePerDay}/day')">
      Hire Vehicle <i class="fa-solid fa-arrow-right"></i>
    </button>
  `;
}

function selectVehicle(name) {
  const match = VEHICLE_OPTIONS.find(v => v.name === name);
  if (match) {
    if (!state.data.vehicle) state.data.vehicle = {};
    state.data.vehicle.name = match.name;
    const priceStr = match.price.replace('$', '').replace('/day', '');
    state.data.vehicle.pricePerDay = parseInt(priceStr);
    renderTransportSection();
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
    const price = Math.round((s.price || 120) * mult);
    return `
    <div class="stay-card">
      <img src="${s.image}" alt="${s.name}" class="stay-card-img" onerror="this.src='assets/boutique_villa.png'">
      <div class="stay-card-info">
        <div class="stay-card-name">${s.name}</div>
        <div class="stay-card-price">$${price} <span>/ night</span></div>
        <div class="stay-card-detail"><i class="fa-solid fa-location-arrow"></i> ${s.offRoute || 'Near route'} · ⭐ ${s.rating || 4.8}</div>
        <div class="stay-card-tags">
          ${(s.amenities || ["Wi-Fi", "View"]).slice(0, 3).map(a => `<span class="badge badge-outline">${a}</span>`).join('')}
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
        <div class="badge badge-amber mb-2">${d.time || 'Dining'}</div>
        <div class="dining-name">${d.name}</div>
        <div class="dining-specialty">🍲 ${d.specialty || 'Local Cuisine'}</div>
      </div>
      <div class="dining-right">
        <div class="dining-rating">⭐ ${d.rating || 4.8}</div>
        <div class="dining-detour">${d.detour || 'On route'}</div>
        <div class="text-xs font-semibold mt-1">${d.price || '$10-$20'}</div>
      </div>
    </div>
  `).join('');
}

function renderBudgetSection() {
  const base = state.data.baseCost || 540;
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
// 11. EXPLORE SCREEN: MAP & BOTTOM SHEET
// --------------------------------------------------------------------------
function initMap() {
  const mapEl = document.getElementById('routeMap');
  if (!mapEl || state.mapInstance) return;

  const defaultCenter = [7.2906, 80.6337];
  const map = L.map('routeMap', { zoomControl: false }).setView(defaultCenter, 9);

  activeMapLayer = L.tileLayer(MAP_LAYERS.streets, {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; Google Maps'
  }).addTo(map);

  state.mapInstance = map;
  updateMapWithCurrentRoute();
}

function updateMapWithCurrentRoute() {
  if (!state.mapInstance) return;
  const map = state.mapInstance;

  // Clear existing markers & layers except tileLayer
  map.eachLayer(layer => {
    if (layer instanceof L.Marker || layer instanceof L.Polyline) {
      map.removeLayer(layer);
    }
  });

  const allCoords = [];
  (state.data.daysData || []).forEach(day => {
    (day.items || []).forEach(item => {
      if (item.lat && item.lng && !isNaN(item.lat) && !isNaN(item.lng)) {
        allCoords.push({ coord: [item.lat, item.lng], title: item.title, category: item.category });
      }
    });
  });

  if (allCoords.length > 0) {
    const latLngs = allCoords.map(c => c.coord);

    if (latLngs.length > 1) {
      const polyline = L.polyline(latLngs, { color: '#2563EB', weight: 5, opacity: 0.85 }).addTo(map);
      map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
    } else {
      map.setView(latLngs[0], 11);
    }

    allCoords.forEach((point, idx) => {
      const marker = L.marker(point.coord).addTo(map);
      marker.bindPopup(`
        <div style="font-family:var(--font-body); min-width:140px;">
          <b style="color:#2563EB;">${point.title}</b>
          <div style="margin-top:6px;">
            <button onclick="openStopInGoogleMaps('${point.title.replace(/'/g, "\\'")}', ${point.coord[0]}, ${point.coord[1]})" style="background:#2563EB; color:#fff; border:none; padding:4px 10px; border-radius:6px; font-size:11px; font-weight:600; cursor:pointer;">
              🗺️ Google Maps
            </button>
          </div>
        </div>
      `);
    });
  }
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
  (state.data.daysData || []).forEach(day => {
    (day.items || []).forEach(item => {
      items.push({ type: 'sights', icon: '📸', name: item.title, detail: `Day ${day.day} · ${item.time}`, lat: item.lat, lng: item.lng });
    });
  });
  (state.data.stays || []).forEach(s => {
    items.push({ type: 'stays', icon: '🏨', name: s.name, detail: `$${s.price}/night · ⭐${s.rating}` });
  });
  (state.data.dining || []).forEach(d => {
    items.push({ type: 'dining', icon: '🍜', name: d.name, detail: `${d.time} · ${d.price}` });
  });

  items.push({ type: 'gas', icon: '⛽', name: `${state.data.destination.split(',')[0]} Highway Rest Hub`, detail: 'Petrol & EV Fast Charging (100 kW)' });

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
// 12. AI VOICE & CHAT ASSISTANT (GEMINI INTEGRATED)
// --------------------------------------------------------------------------
function openVoiceModal() {
  document.getElementById('voiceModal').classList.add('active');
  const wave = document.getElementById('voiceWaveAnimation');
  if (wave) wave.style.opacity = '1';
}

async function askAiQuery(queryText) {
  const bubble = document.getElementById('aiAssistantBubbleText');
  const wave = document.getElementById('voiceWaveAnimation');
  if (bubble) bubble.textContent = `Analyzing: "${queryText}"...`;
  if (wave) wave.style.opacity = '1';

  let answer = "";

  if (hasGeminiApiKey()) {
    const apiKey = getGeminiApiKey();
    const context = `The user is on a ${state.data.days}-day trip from ${state.data.origin} to ${state.data.destination}. Answer this concise travel query in 1-2 friendly, helpful sentences: "${queryText}"`;

    for (const model of GEMINI_MODELS) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: context }] }],
            generationConfig: { maxOutputTokens: 120, temperature: 0.7 }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (candidateText) {
            answer = candidateText;
            break;
          }
        }
      } catch (e) {
        console.warn(`AI voice query on model ${model} error:`, e);
      }
    }
  }

  if (!answer) {
    const fallbackAnswers = {
      'Tell me the history and cultural tips for this trip': `This region is rich with historic heritage dating back centuries. Remember to wear modest attire covering knees and shoulders when visiting sacred sites!`,
      'What are the best food specialties to try?': `Be sure to try local spice curries, tropical street fruits, fresh Ceylon tea, and regional pancakes at morning stalls!`,
      'What should I pack for this trip?': `Bring breathable cotton layers, sturdy walking shoes for viewpoint trails, rain poncho, and a lightweight jacket for cooler hill nights!`
    };
    answer = fallbackAnswers[queryText] || `For ${state.data.destination}, we recommend starting early morning to beat the afternoon mountain mist and stay hydrated!`;
  }

  state.lastAssistantSpeech = answer;
  if (bubble) bubble.textContent = `"${answer}"`;
  speakText(answer);
}

function submitAiQuery() {
  const input = document.getElementById('assistantUserInput');
  if (!input || !input.value.trim()) return;
  const q = input.value.trim();
  input.value = "";
  askAiQuery(q);
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.onend = () => {
      const wave = document.getElementById('voiceWaveAnimation');
      if (wave) wave.style.opacity = '0.3';
    };
    window.speechSynthesis.speak(utterance);
  }
}

function toggleAssistantSpeech() {
  const text = state.lastAssistantSpeech || document.getElementById('aiAssistantBubbleText')?.textContent || "";
  speakText(text.replace(/^"|"$/g, ''));
}

// --------------------------------------------------------------------------
// 13. GOOGLE MAPS NAVIGATION & MODALS
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

  const daysData = state.data.daysData || [];
  const dayObj = daysData.find(d => d.day === state.activeDay) || daysData[0];
  if (dayObj) {
    if (!dayObj.items) dayObj.items = [];
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
  }

  closeModal('addStopModal');
  renderTimeline(state.activeDay);
  showToast("Stop added to itinerary", "success");
}

function openVehicleBookingModal(title, price) {
  document.getElementById('modalVehicleTitle').textContent = title;
  document.getElementById('modalVehiclePrice').textContent = `${price} · Verified Partner`;
  document.getElementById('vehicleModal').classList.add('active');
}

function confirmVehicleBooking() {
  closeModal('vehicleModal');
  showToast("🎉 Vehicle reserved! Driver details sent to your email.", "success");
}

function openShareModal() {
  document.getElementById('shareModal').classList.add('active');
}

function shareTripAction(type) {
  closeModal('shareModal');
  const title = state.data.title;
  if (type === 'link') {
    navigator.clipboard.writeText(window.location.href);
    showToast(`🔗 Link for "${title}" copied to clipboard!`, "success");
  } else if (type === 'pdf') {
    window.print();
  } else {
    showToast(`Exporting "${title}"...`, "info");
  }
}

// --------------------------------------------------------------------------
// 14. PROFILE: DARK MODE
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
