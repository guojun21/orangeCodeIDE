"use strict";

// Module: out-build/vs/base/common/hooks/validators/preCompactResponse.js
// Offset: 28064543 (bundle byte offset)
// Size: 443 bytes
yce();
xJ();
PYg = n => typeof n == "string";
LYg = n => {
  const e = Uq(n);
  if (!e.isValid) {
    return e;
  }
  if (n == null || Object.keys(n).length === 0) {
    return oO(true, []);
  }
  const t = [];
  if (!skt(n)) {
    t.push("PreCompact response must be an object");
    return oO(false, t);
  }
  const i = n;
  if (i.user_message !== undefined && !PYg(i.user_message)) {
    t.push("user_message must be a string");
  }
  return oO(t.length === 0, t);
};
