"use strict";

// Module: out-build/vs/base/browser/fonts.js
// Offset: 1679109 (bundle byte offset)
// Size: 458 bytes
iu();
_r();
c3t = Sc ? "\"Segoe WPC\", \"Segoe UI\", sans-serif" : Fs ? "-apple-system, BlinkMacSystemFont, sans-serif" : "system-ui, \"Ubuntu\", \"Droid Sans\", sans-serif";
WAh = async () => {
  try {
    return [...(await bi.queryLocalFonts())].map(i => i.family);
  } catch (n) {
    console.error(`Failed to query fonts: ${n}`);
    return [];
  }
};
VTc = async () => gih ? (await WAh()).map(t => ({
  body: `${t}`
})) : [];
