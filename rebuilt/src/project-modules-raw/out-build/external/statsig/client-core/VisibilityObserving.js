// Module: out-build/external/statsig/client-core/VisibilityObserving.js
// Offset: 26679448 (bundle byte offset)
// Size: 444 bytes

fSt(), jpa="foreground", zpa="background", Htu=[], Jtu=jpa, Vpa=!1, Gtu=()=>Vpa, o2g=n=>{
  Htu.unshift(n)
}, qbi=n=>{
  n!==Jtu&&(Jtu=n, Htu.forEach(e=>e(n)))
}, $pa("focus", ()=>{
  Vpa=!1, qbi(jpa)
}), $pa("blur", ()=>qbi(zpa)), VMg("visibilitychange", ()=>{
  qbi(document.visibilityState==="visible"?jpa:zpa)
}), $pa(YMg(), ()=>{
  Vpa=!0, qbi(zpa)
})
}
}), a2g, c2g, l2g, u2g, d2g, Qtu, Mhn, Hbi, h2g, m2g=