"use strict";

// Module: out-build/vs/base/common/hooks/validators/beforeCommandExecutionHookResponse.js
// Offset: 28060080 (bundle byte offset)
// Size: 621 bytes
yce();
xJ();
Lou = n => {
  const e = [];
  const t = Uq(n);
  if (!t.isValid) {
    return t;
  }
  if (n.permission !== undefined) {
    const i = ["allow", "deny", "ask"];
    if (!i.includes(n.permission)) {
      e.push(`Invalid permission value. Expected one of: ${i.join(", ")}, or undefined`);
    }
  }
  if (n.user_message !== undefined && typeof n.user_message != "string") {
    e.push("Invalid user_message value. Expected a string if provided");
  }
  if (n.agent_message !== undefined && typeof n.agent_message != "string") {
    e.push("Invalid agent_message value. Expected a string if provided");
  }
  return oO(e.length === 0, e);
};
