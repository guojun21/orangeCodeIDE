// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/observe.js
// Offset: 203667 (bundle byte offset)
// Size: 325 bytes

Qpt=(n, e, t={
  
})=>{
  try{
    if(PerformanceObserver.supportedEntryTypes.includes(n)){
      const i=new PerformanceObserver(r=>{
        Promise.resolve().then(()=>{
          e(r.getEntries())
        })
      });
      return i.observe({
        type:n,buffered:!0,...t
      }),i
    }
  }
  catch{
    
  }
}
}
}), gMo, I_c=