// Module: out-build/external/sentry/browser-utils/metrics/instrument.js
// Offset: 211724 (bundle byte offset)
// Size: 1644 bytes

lm(), C2n(), WXv(), jXv(), VXv(), fFt(), KXv(), vFt={
  
}, D2n={
  
}
}
});
function U_c(n){
  return typeof n=="number"&&isFinite(n)
}
function bze(n, e, t, {
  ...i
}){
  const r=jA(n).start_timestamp;
  return r&&r>e&&typeof n.updateStartTime=="function"&&n.updateStartTime(e), Tpt(n, ()=>{
    const s=pSe({
      startTime:e,...i
    });
    return s&&s.end(t), s
  })
}
function $_c(n){
  const e=sm();
  if(!e)return;
  const{
    name:t, transaction:i, attributes:r, startTime:s
  }
  =n, {
    release:o, environment:a, sendDefaultPii:l
  }
  =e.getOptions(), d=e.getIntegrationByName("Replay")?.getReplayId(), m=ry(), p=m.getUser(), g=p!==void 0?p.email||p.id||p.ip_address:void 0;
  let f;
  try{
    f=m.getScopeData().contexts.profile.profile_id
  }
  catch{
    
  }
  const A={
    release:o, environment:a, user:g||void 0, profile_id:f||void 0, replay_id:d||void 0, transaction:i, "user_agent.original":zC.navigator?.userAgent, "client.address":l?"{{auto}}":void 0, ...r
  };
  return pSe({
    name:t, attributes:A, startTime:s, experimental:{
      standalone:!0
    }
  })
}
function B2n(){
  return zC.addEventListener&&zC.performance
}
function m9(n){
  return n/1e3
}
function reA(n){
  let e="unknown", t="unknown", i="";
  for(const r of n){
    if(r==="/"){
      [e,t]=n.split("/");
      break
    }
    if(!isNaN(Number(r))){
      e=i==="h"?"http":i,t=n.split(i)[1];
      break
    }
    i+=r
  }
  return i===n&&(e=i), {
    name:e, version:t
  }
}
function Yth(n){
  try{
    return PerformanceObserver.supportedEntryTypes.includes(n)
  }
  catch{
    return!1
  }
}
function Zth(n, e){
  let t, i=!1;
  function r(a){
    !i&&t&&e(a, t), i=!0
  }
  yMo(()=>{
    r("pagehide")
  });
  const s=n.on("beforeStartNavigationSpan", (a, l)=>{
    l?.isRedirect||(r("navigation"), s(), o())
  }), o=n.on("afterStartPageLoadSpan", a=>{
    t=a.spanContext().spanId, o()
  })
}
var jpt=