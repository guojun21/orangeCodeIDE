"use strict";

// Module: out-build/external/statsig/client-core/ClientInterfaces.js
// Offset: 26685092 (bundle byte offset)
// Size: 524 bytes
Ae({
  "out-build/external/statsig/client-core/ClientInterfaces.js"() {
    "use strict";
  }
});
function Xpa() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID == "function") {
    return crypto.randomUUID();
  }
  let n = new Date().getTime();
  let e = typeof performance !== "undefined" && performance.now && performance.now() * 1000 || 0;
  return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(/[xy]/g, i => {
    let r = Math.random() * 16;
    if (n > 0) {
      r = (n + r) % 16 | 0;
      n = Math.floor(n / 16);
    } else {
      r = (e + r) % 16 | 0;
      e = Math.floor(e / 16);
    }
    return (i === "x" ? r : r & 7 | 8).toString(16);
  });
}
