// Module: out-build/external/sentry/core/utils/eventbuilder.js
// Offset: 96038 (bundle byte offset)
// Size: 300 bytes

h9(), loe(), xpt(), Wj()
}
});
function HYd(n){
  const e=MB().getScopeData().sdkProcessingMetadata.requestSession;
  if(e){
    const t=n?.mechanism?.handled??!0;
    t&&e.status!=="crashed"?e.status="errored":t||(e.status="crashed")
  }
}
var JYd, Zzv=