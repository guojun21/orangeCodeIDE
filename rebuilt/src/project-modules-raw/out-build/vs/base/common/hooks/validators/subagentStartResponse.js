// Module: out-build/vs/base/common/hooks/validators/subagentStartResponse.js
// Offset: 28065784 (bundle byte offset)
// Size: 462 bytes

yce(), xJ(), MYg=n=>{
  const e=Uq(n);
  if(!e.isValid)return e;
  const t=[], i=n;
  if(i.permission!==void 0){
    const r=["allow", "deny", "ask"];
    r.includes(i.permission)||t.push(`Invalid permission value. Expected one of: ${r.join(", ")}, or undefined`)
  }
  return i.user_message!==void 0&&!zNe(i.user_message)&&t.push("user_message must be a string if provided"), oO(t.length===0, t)
}
}
}), FYg, f3A=