// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/polyfills/interactionCountPolyfill.js
// Offset: 206206 (bundle byte offset)
// Size: 474 bytes

fFt(), B_c=0, vMo=1/0, T2n=0, Dth=n=>{
  n.forEach(e=>{
    e.interactionId&&(vMo=Math.min(vMo, e.interactionId), T2n=Math.max(T2n, e.interactionId), B_c=T2n?(T2n-vMo)/7+1:0)
  })
}, P_c=()=>R_c?B_c:performance.interactionCount||0, Bth=()=>{
  "interactionCount"in performance||R_c||(R_c=Qpt("event", Dth, {
    type:"event", buffered:!0, durationThreshold:0
  }))
}
}
}), AMo, L_c, Pth, Lth, QXv=