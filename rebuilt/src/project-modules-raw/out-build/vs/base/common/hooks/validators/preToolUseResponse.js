// Module: out-build/vs/base/common/hooks/validators/preToolUseResponse.js
// Offset: 28064986 (bundle byte offset)
// Size: 798 bytes

yce(), xJ(), NYg=n=>{
  const e=[], t=Uq(n);
  if(!t.isValid)return t;
  if(n.permission!==void 0){
    const i=["allow", "deny", "ask"];
    i.includes(n.permission)||e.push(`Invalid permission value. Expected one of: ${i.join(", ")}, or undefined`)
  }
  return n.user_message!==void 0&&typeof n.user_message!="string"&&e.push("Invalid user_message value. Expected a string if provided"), n.agent_message!==void 0&&typeof n.agent_message!="string"&&e.push("Invalid agent_message value. Expected a string if provided"), n.updated_input!==void 0&&(typeof n.updated_input!="object"||n.updated_input===null||Array.isArray(n.updated_input))&&e.push("Invalid updated_input value. Expected a plain object if provided"), oO(e.length===0, e)
}
}
}), MYg, g3A=