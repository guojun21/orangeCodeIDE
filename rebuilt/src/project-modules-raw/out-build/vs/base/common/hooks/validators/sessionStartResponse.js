// Module: out-build/vs/base/common/hooks/validators/sessionStartResponse.js
// Offset: 28063203 (bundle byte offset)
// Size: 735 bytes

yce(), xJ(), IYg=n=>{
  const e=Uq(n);
  if(!e.isValid)return e;
  const t=[];
  if(n.env!==void 0)if(!skt(n.env))t.push("env must be an object if provided");
  else for(const[i, r]of Object.entries(n.env))zNe(i)||t.push(`env key "${i}" must be a string`), zNe(r)||t.push(`env value for "${i}" must be a string`);
  return n.additional_context!==void 0&&!zNe(n.additional_context)&&t.push("additional_context must be a string if provided"), n.continue!==void 0&&typeof n.continue!="boolean"&&t.push("continue must be a boolean if provided"), n.user_message!==void 0&&!zNe(n.user_message)&&t.push("user_message must be a string if provided"), oO(t.length===0, t)
}
}
}), DYg, u3A=