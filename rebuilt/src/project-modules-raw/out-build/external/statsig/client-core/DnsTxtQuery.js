// Module: out-build/external/statsig/client-core/DnsTxtQuery.js
// Offset: 26694486 (bundle byte offset)
// Size: 872 bytes

I2g=new Uint8Array([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101, 116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1]), D2g="https://cloudflare-dns.com/dns-query", B2g=["i", "e", "d"], R2g=200
}
});
function fMA(n, e){
  const t=n?.toLowerCase()??"";
  return e||t.includes("uncaught exception")||t.includes("failed to fetch")||t.includes("networkerror when attempting to fetch resource")
}
function P2g(n){
  return`statsig.network_fallback.${Itt(n)}`
}
function nnu(n, e){
  const t=P2g(n);
  if(!e||Object.keys(e).length===0){
    j3.removeItem(t);
    return
  }
  j3.setItem(t, JSON.stringify(e))
}
function bMA(n){
  const e=P2g(n), t=j3.getItem(e);
  if(!t)return null;
  try{
    return JSON.parse(t)
  }
  catch{
    return CI.error("Failed to parse FallbackInfo"), null
  }
}
function vMA(n){
  try{
    return new URL(n).pathname
  }
  catch{
    return null
  }
}
var inu, L2g, N2g, AMA=