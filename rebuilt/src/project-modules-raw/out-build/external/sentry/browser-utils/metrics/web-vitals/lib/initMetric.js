// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/initMetric.js
// Offset: 202524 (bundle byte offset)
// Size: 460 bytes

AY(), HXv(), pFt(), mMo(), gFt=(n, e=-1)=>{
  const t=mFt();
  let i="navigate";
  return t&&(zC.document?.prerendering||Wpt()>0?i="prerender":zC.document?.wasDiscarded?i="restore":t.type&&(i=t.type.replace(/_/g, "-"))), {
    name:n, value:e, rating:"good", delta:0, entries:[], id:wth(), navigationType:i
  }
}
}
});
function x_c(n, e){
  return pMo.get(n)||pMo.set(n, new e), pMo.get(n)
}
var pMo, T_c=