// Module: out-build/vs/base/common/hooks/validators/beforePromptSubmitResponse.js
// Offset: 28061886 (bundle byte offset)
// Size: 408 bytes

yce(), xJ(), CYg=n=>{
  const e=Uq(n);
  if(!e.isValid)return e;
  const t=[];
  return n.continue!==void 0&&typeof n.continue!="boolean"&&t.push("continue must be a boolean if provided"), n.user_message!==void 0&&typeof n.user_message!="string"&&t.push("user_message must be a string if provided"), oO(t.length===0, t)
}
}
}), SYg, r3A=