"use strict";

// Module: out-build/vs/base/common/hooks/validators/subagentStopResponse.js
// Offset: 28066246 (bundle byte offset)
// Size: 1905 bytes
yce();
xJ();
FYg = n => {
  const e = Uq(n);
  if (!e.isValid) {
    return e;
  }
  const t = [];
  if (n !== undefined && typeof n == "object" && n !== null && n.followup_message !== undefined && typeof n.followup_message != "string") {
    t.push("followup_message must be a string if provided");
  }
  return oO(t.length === 0, t);
};
