// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/getVisibilityWatcher.js
// Offset: 204162 (bundle byte offset)
// Size: 794 bytes

AY(), pFt(), bFt=-1, Cth=()=>zC.document?.visibilityState==="hidden"&&!zC.document?.prerendering?0:1/0, E2n=n=>{
  zC.document.visibilityState==="hidden"&&bFt>-1&&(bFt=n.type==="visibilitychange"?n.timeStamp:0, kth())
}, Sth=()=>{
  addEventListener("visibilitychange", E2n, !0), addEventListener("prerenderingchange", E2n, !0)
}, kth=()=>{
  removeEventListener("visibilitychange", E2n, !0), removeEventListener("prerenderingchange", E2n, !0)
}, fMo=()=>{
  if(zC.document&&bFt<0){
    const n=Wpt();
    bFt=(zC.document.prerendering?void 0:globalThis.performance.getEntriesByType("visibility-state").filter(t=>t.name==="hidden"&&t.startTime>n)[0]?.startTime)??Cth(), Sth()
  }
  return{
    get firstHiddenTime(){
      return bFt
    }
  }
}
}
}), x2n, bMo=