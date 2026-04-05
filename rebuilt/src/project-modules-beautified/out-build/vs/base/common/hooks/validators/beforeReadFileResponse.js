"use strict";

// Module: out-build/vs/base/common/hooks/validators/beforeReadFileResponse.js
// Offset: 28060701 (bundle byte offset)
// Size: 458 bytes
yce();
xJ();
AYg = n => {
  const e = [];
  const t = Uq(n);
  if (!t.isValid) {
    return t;
  }
  if (n.permission !== undefined) {
    const i = ["allow", "deny"];
    if (!i.includes(n.permission)) {
      e.push(`Invalid permission value. Expected one of: ${i.join(", ")}, or undefined`);
    }
  }
  if (n.user_message !== undefined && typeof n.user_message != "string") {
    e.push("user_message must be a string if provided");
  }
  return oO(e.length === 0, e);
};
