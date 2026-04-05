// Module: out-build/vs/platform/uriIdentity/common/uriIdentity.js
// Offset: 933106 (bundle byte offset)
// Size: 803 bytes

Wt(), xl=xi("IUriIdentityService")
}
});
function Z4n(n){
  return ihh.test(n)
}
function XsA(n){
  const e=n.replace(/-/g, "").toLowerCase();
  if(e.length!==32)throw new Error(`Invalid UUID: ${n}`);
  const t=new Uint8Array(16);
  for(let i=0;
  i<16;
  i++)t[i]=parseInt(e.slice(i*2, i*2+2), 16);
  return t
}
function eoA(n){
  if(n.length!==16)throw new Error("Invalid UUID byte length");
  let e="";
  for(let t=0;
  t<16;
  t++)(t===4||t===6||t===8||t===10)&&(e+="-"), e+=OH[n[t]];
  return e
}
async function X1c(n, e){
  const t=XsA(e), i=new TextEncoder().encode(n), r=new Uint8Array(t.length+i.length);
  r.set(t, 0), r.set(i, t.length);
  const s=await crypto.subtle.digest("SHA-1", r), a=new Uint8Array(s).slice(0, 16);
  return a[6]=a[6]&15|80, a[8]=a[8]&63|128, eoA(a)
}
var ihh, rhh, OH, Wr, Bc=