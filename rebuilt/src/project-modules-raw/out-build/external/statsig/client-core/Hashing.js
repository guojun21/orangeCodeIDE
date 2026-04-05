// Module: out-build/external/statsig/client-core/Hashing.js
// Offset: 26673620 (bundle byte offset)
// Size: 697 bytes

Rtu(), Itt=n=>{
  let e=0;
  for(let t=0;
  t<n.length;
  t++){
    const i=n.charCodeAt(t);
    e=(e<<5)-e+i, e=e&e
  }
  return String(e>>>0)
}, Ptu=(n, e)=>Itt(JSON.stringify(Ltu(n, e))), Ltu=(n, e)=>{
  if(n==null)return null;
  const t=Object.keys(n).sort(), i={
    
  };
  return t.forEach(r=>{
    const s=n[r];
    if(e===0||WMg(s)!=="object"){
      i[r]=s;
      return
    }
    i[r]=Ltu(s, e!=null?e-1:e)
  }), i
}
}
});
function jMg(n, e, t){
  if(t)return t(n, e);
  const i=e&&e.customIDs?e.customIDs:{
    
  }, r=[`uid:${e?.userID??""}`, `cids:${Object.keys(i).sort((s,o)=>s.localeCompare(o)).map(s=>`${
    s
  }
  -${
    i[s]
  }
  `).join(",")}`, `k:${n}`];
  return Itt(r.join("|"))
}
function Mpa(n, e, t){
  return e?jMg(n, e, t):Itt(`k:${n}`)
}
var Fpa=