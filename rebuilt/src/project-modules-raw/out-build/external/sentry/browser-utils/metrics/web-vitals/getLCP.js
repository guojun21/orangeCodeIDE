// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/getLCP.js
// Offset: 209421 (bundle byte offset)
// Size: 690 bytes

AY(), S2n(), pFt(), D_c(), k2n(), T_c(), zXv(), fFt(), I_c(), bMo(), Nth(), $th=[2500, 4e3], qth=(n, e={
  
})=>{
  x2n(()=>{
    const t=fMo(), i=gFt("LCP");
    let r;
    const s=x_c(e, Uth), o=l=>{
      e.reportAllChanges||(l=l.slice(-1));
      for(const u of l)s._processEntry(u),u.startTime<t.firstHiddenTime&&(i.value=Math.max(u.startTime-Wpt(),0),i.entries=[u],r())
    }, a=Qpt("largest-contentful-paint", o);
    if(a){
      r=hFt(n,i,$th,e.reportAllChanges);
      const l=gMo(()=>{
        o(a.takeRecords()),a.disconnect(),r(!0)
      });
      for(const u of["keydown","click","visibilitychange"])zC.document&&addEventListener(u,()=>M_c(l),{
        capture:!0,once:!0
      })
    }
  })
}
}
}), Hth, wMo, Jth, KXv=