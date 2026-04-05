// Module: out-build/vs/base/common/hooks/validators/preCompactResponse.js
// Offset: 28064543 (bundle byte offset)
// Size: 443 bytes

yce(), xJ(), PYg=n=>typeof n=="string", LYg=n=>{
  const e=Uq(n);
  if(!e.isValid)return e;
  if(n==null||Object.keys(n).length===0)return oO(!0, []);
  const t=[];
  if(!skt(n))return t.push("PreCompact response must be an object"), oO(!1, t);
  const i=n;
  return i.user_message!==void 0&&!PYg(i.user_message)&&t.push("user_message must be a string"), oO(t.length===0, t)
}
}
}), NYg, p3A=