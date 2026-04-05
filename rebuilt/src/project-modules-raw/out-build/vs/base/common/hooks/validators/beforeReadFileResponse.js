// Module: out-build/vs/base/common/hooks/validators/beforeReadFileResponse.js
// Offset: 28060701 (bundle byte offset)
// Size: 458 bytes

yce(), xJ(), AYg=n=>{
  const e=[], t=Uq(n);
  if(!t.isValid)return t;
  if(n.permission!==void 0){
    const i=["allow", "deny"];
    i.includes(n.permission)||e.push(`Invalid permission value. Expected one of: ${i.join(", ")}, or undefined`)
  }
  return n.user_message!==void 0&&typeof n.user_message!="string"&&e.push("user_message must be a string if provided"), oO(e.length===0, e)
}
}
}), yYg, e3A=