// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/components/artifacts/artifactUtils.js
// Offset: 30758180 (bundle byte offset)
// Size: 1007 bytes

qkf=[".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp", ".svg", ".ico"], Hkf=[".mp4", ".mov", ".avi", ".webm", ".mkv", ".flv", ".wmv", ".m4v", ".3gp", ".ogv"], Jkf="/opt/cursor/artifacts/"
}
});
function Gkf(n, e){
  return`${n}:${e}`
}
function Nny(n){
  return Pny(n)||Lny(n)
}
function Wkf(n){
  return Date.now()-n.savedAt>Emu
}
function Mny(n, e){
  if(n.byteLength!==e.byteLength)return!1;
  const t=new Uint8Array(n), i=new Uint8Array(e);
  for(let r=0;
  r<t.length;
  r++)if(t[r]!==i[r])return!1;
  return!0
}
function Qkf(n, e){
  return URL.createObjectURL(new Blob([n], {
    type:e
  }))
}
function Fny(n, e){
  if(n.length===1){
    const a=n[0], l=new ArrayBuffer(a.byteLength);
    return new Uint8Array(l).set(a), l
  }
  let t=0;
  for(const a of n)t+=a.byteLength;
  const i=e>0?Math.max(e, t):Math.max(Vkf, t), r=new ArrayBuffer(i), s=new Uint8Array(r);
  let o=0;
  for(const a of n)s.set(a, o), o+=a.byteLength;
  return t<i?r.slice(0, t):r
}
var jkf, zkf, r1t, Emu, xmu, Vkf, Tmu, Kkf, S0a, Ony=