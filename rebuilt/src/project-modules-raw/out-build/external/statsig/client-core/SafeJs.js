// Module: out-build/external/statsig/client-core/SafeJs.js
// Offset: 26674902 (bundle byte offset)
// Size: 757 bytes

gSt=()=>typeof window<"u"?window:null, Upa=()=>gSt()?.document??null, Ubi=()=>{
  if(Upa()!==null)return!1;
  const n=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;
  return typeof EdgeRuntime=="string"||n
}, $pa=(n, e)=>{
  const t=gSt();
  typeof t?.addEventListener=="function"&&t.addEventListener(n, e)
}, VMg=(n, e)=>{
  const t=Upa();
  typeof t?.addEventListener=="function"&&t.addEventListener(n, e)
}, KMg=()=>{
  try{
    return gSt()?.location.href.split(/[?#]/)[0]
  }
  catch{
    return
  }
}, YMg=()=>{
  const n=gSt();
  return n&&"onpagehide"in n?"pagehide":"beforeunload"
}
}
});
function qpa(n, e){
  return n.map(t=>typeof t=="string"?(e??{
    
  })[t]:t).filter(t=>t!=null)
}
var Ntu, Mtu, Ftu, Hpa, ZMg, XMg, Otu, e2g, t2g, n2g=