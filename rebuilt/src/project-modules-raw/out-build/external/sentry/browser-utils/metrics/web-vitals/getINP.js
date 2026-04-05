// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/getINP.js
// Offset: 208551 (bundle byte offset)
// Size: 688 bytes

S2n(), k2n(), T_c(), QXv(), fFt(), N_c(), Rth(), bMo(), Nth(), Mth=[200, 500], Fth=40, Oth=(n, e={
  
})=>{
  globalThis.PerformanceEventTiming&&"interactionId"in PerformanceEventTiming.prototype&&x2n(()=>{
    Bth();
    const t=gFt("INP");
    let i;
    const r=x_c(e, Lth), s=a=>{
      M_c(()=>{
        for(const u of a)r._processEntry(u);
        const l=r._estimateP98LongestInteraction();
        l&&l._latency!==t.value&&(t.value=l._latency,t.entries=l.entries,i())
      })
    }, o=Qpt("event", s, {
      durationThreshold:e.durationThreshold??Fth
    });
    i=hFt(n, t, Mth, e.reportAllChanges), o&&(o.observe({
      type:"first-input",buffered:!0
    }), yMo(()=>{
      s(o.takeRecords()),i(!0)
    }))
  })
}
}
}), Uth, zXv=