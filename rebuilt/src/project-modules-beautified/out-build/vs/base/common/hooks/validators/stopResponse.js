"use strict";

// Module: out-build/vs/base/common/hooks/validators/stopResponse.js
// Offset: 28062294 (bundle byte offset)
// Size: 306 bytes
yce();
xJ();
SYg = n => {
  const e = Uq(n);
  if (!e.isValid) {
    return e;
  }
  const t = [];
  if (n.followup_message !== undefined && typeof n.followup_message != "string") {
    t.push("followup_message must be a string if provided");
  }
  return oO(t.length === 0, t);
};
