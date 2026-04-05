"use strict";

// Module: out-build/vs/base/common/hooks/validators/postToolUseResponse.js
// Offset: 28064219 (bundle byte offset)
// Size: 324 bytes
yce();
xJ();
RYg = n => {
  const e = [];
  const t = Uq(n);
  if (t.isValid) {
    if (n.additional_context !== undefined && typeof n.additional_context != "string") {
      e.push("Invalid additional_context value. Expected a string if provided");
    }
    return oO(e.length === 0, e);
  } else {
    return t;
  }
};
