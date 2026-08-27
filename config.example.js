// ==========================================================================
// SMARTTRIPAI — CONFIGURATION TEMPLATE
// Copy this file to config.js and insert your Google Gemini API Key
// ==========================================================================
const CONFIG = {
  GEMINI_API_KEY: "YOUR_GEMINI_API_KEY_HERE",
  GEMINI_MODELS: ["gemini-3.7-flash", "gemini-3.6-flash", "gemini-2.5-flash-lite", "gemini-flash-latest"]
};

if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
