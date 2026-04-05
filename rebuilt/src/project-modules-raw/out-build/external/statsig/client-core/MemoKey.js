// Module: out-build/external/statsig/client-core/MemoKey.js
// Offset: 26693609 (bundle byte offset)
// Size: 877 bytes

vSt={
  _gate:"g", _dynamicConfig:"c", _experiment:"e", _configList:"cl", _layer:"l", _paramStore:"p"
}, E2g=new Set([]), x2g=new Set(["userPersistedValues"])
}
});
async function mMA(n){
  const e=await n(D2g, {
    method:"POST", headers:{
      "Content-Type":"application/dns-message",Accept:"application/dns-message"
    }, body:I2g
  });
  if(!e.ok){
    const r=new Error("Failed to fetch TXT records from DNS");
    throw r.name="DnsTxtFetchError", r
  }
  const t=await e.arrayBuffer(), i=new Uint8Array(t);
  return pMA(i)
}
function pMA(n){
  const e=n.findIndex((i, r)=>r<R2g&&String.fromCharCode(i)==="="&&B2g.includes(String.fromCharCode(n[r-1])));
  if(e===-1){
    const i=new Error("Failed to parse TXT records from DNS");
    throw i.name="DnsTxtParseError", i
  }
  let t="";
  for(let i=e-1;
  i<n.length;
  i++)t+=String.fromCharCode(n[i]);
  return t.split(",")
}
var I2g, D2g, B2g, R2g, gMA=