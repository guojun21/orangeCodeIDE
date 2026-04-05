// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/onFCP.js
// Offset: 205166 (bundle byte offset)
// Size: 444 bytes

S2n(), pFt(), D_c(), k2n(), fFt(), bMo(), Eth=[1800, 3e3], xth=(n, e={
  
})=>{
  x2n(()=>{
    const t=fMo(), i=gFt("FCP");
    let r;
    const o=Qpt("paint", a=>{
      for(const l of a)l.name==="first-contentful-paint"&&(o.disconnect(),l.startTime<t.firstHiddenTime&&(i.value=Math.max(l.startTime-Wpt(),0),i.entries.push(l),r(!0)))
    });
    o&&(r=hFt(n, i, Eth, e.reportAllChanges))
  })
}
}
}), Tth, Ith, WXv=