"use strict";

// Module: out-build/vs/base/common/hooks/validators/sessionStartResponse.js
// Offset: 28063203 (bundle byte offset)
// Size: 735 bytes
yce();
xJ();
IYg = n => {
  const e = Uq(n);
  if (!e.isValid) {
    return e;
  }
  const t = [];
  if (n.env !== undefined) {
    if (!skt(n.env)) {
      t.push("env must be an object if provided");
    } else {
      for (const [i, r] of Object.entries(n.env)) {
        if (!zNe(i)) {
          t.push(`env key "${i}" must be a string`);
        }
        if (!zNe(r)) {
          t.push(`env value for "${i}" must be a string`);
        }
      }
    }
  }
  if (n.additional_context !== undefined && !zNe(n.additional_context)) {
    t.push("additional_context must be a string if provided");
  }
  if (n.continue !== undefined && typeof n.continue != "boolean") {
    t.push("continue must be a boolean if provided");
  }
  if (n.user_message !== undefined && !zNe(n.user_message)) {
    t.push("user_message must be a string if provided");
  }
  return oO(t.length === 0, t);
};
