"use strict";

// Module: out-build/vs/base/common/hooks/validators/subagentStartResponse.js
// Offset: 28065784 (bundle byte offset)
// Size: 462 bytes
yce();
xJ();
MYg = n => {
  const e = Uq(n);
  if (!e.isValid) {
    return e;
  }
  const t = [];
  const i = n;
  if (i.permission !== undefined) {
    const r = ["allow", "deny", "ask"];
    if (!r.includes(i.permission)) {
      t.push(`Invalid permission value. Expected one of: ${r.join(", ")}, or undefined`);
    }
  }
  if (i.user_message !== undefined && !zNe(i.user_message)) {
    t.push("user_message must be a string if provided");
  }
  return oO(t.length === 0, t);
};
