// Module: out-build/vs/base/common/hooks/validators/beforeTabFileReadResponse.js
// Offset: 28061305 (bundle byte offset)
// Size: 461 bytes

yce(), xJ(), wYg=n=>{
  const e=[], t=Uq(n);
  if(!t.isValid)return t;
  if(n.permission!==void 0){
    const i=["allow", "deny"];
    i.includes(n.permission)||e.push(`Invalid permission value. Expected one of: ${i.join(", ")}, or undefined`)
  }
  return n.user_message!==void 0&&typeof n.user_message!="string"&&e.push("user_message must be a string if provided"), oO(e.length===0, e)
}
}
}), _Yg, n3A=