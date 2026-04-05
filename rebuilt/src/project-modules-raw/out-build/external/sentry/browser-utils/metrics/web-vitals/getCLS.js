// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/getCLS.js
// Offset: 205610 (bundle byte offset)
// Size: 596 bytes

AY(), S2n(), k2n(), T_c(), JXv(), fFt(), I_c(), GXv(), Tth=[.1, .25], Ith=(n, e={
  
})=>{
  xth(gMo(()=>{
    const t=gFt("CLS", 0);
    let i;
    const r=x_c(e, _th), s=a=>{
      for(const l of a)r._processEntry(l);
      r._sessionValue>t.value&&(t.value=r._sessionValue,t.entries=r._sessionEntries,i())
    }, o=Qpt("layout-shift", s);
    o&&(i=hFt(n, t, Tth, e.reportAllChanges), zC.document?.addEventListener("visibilitychange", ()=>{
      zC.document?.visibilityState==="hidden"&&(s(o.takeRecords()),i(!0))
    }), zC?.setTimeout?.(i))
  }))
}
}
}), B_c, vMo, T2n, Dth, R_c, P_c, Bth, Rth=