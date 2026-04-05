"use strict";

// Module: out-build/external/statsig/client-core/UUID.js
// Offset: 26685616 (bundle byte offset)
// Size: 720 bytes
Ae({
  "out-build/external/statsig/client-core/UUID.js"() {
    "use strict";
  }
});
function p2g(n) {
  return `statsig.stable_id.${Mpa(n)}`;
}
function Vtu(n, e) {
  const t = p2g(e);
  try {
    Gpa(t, n);
  } catch {
    CI.warn("Failed to save StableID to storage");
  }
}
function nMA(n) {
  const e = p2g(n);
  return Jpa(e);
}
function iMA(n) {
  if (!ega[n] || Upa() == null) {
    return null;
  }
  const e = document.cookie.split(";");
  for (const t of e) {
    const [i, r] = t.trim().split("=");
    if (i === f2g(n)) {
      return decodeURIComponent(r);
    }
  }
  return null;
}
function g2g(n, e) {
  if (!ega[e] || !document) {
    return;
  }
  const t = new Date();
  t.setFullYear(t.getFullYear() + 1);
  document.cookie = `${f2g(e)}=${encodeURIComponent(n)}; expires=${t.toUTCString()}; path=/`;
}
function f2g(n) {
  return `statsig.stable_id.${Mpa(n)}`;
}
