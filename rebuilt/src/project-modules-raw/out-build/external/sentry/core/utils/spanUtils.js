// Module: out-build/external/sentry/core/utils/spanUtils.js
// Offset: 43343 (bundle byte offset)
// Size: 472 bytes

NMn(), gbe(), aT(), y6(), W2t(), JMn(), Wj(), tze(), ide(), cNo(), US(), wpt(), syc=0, uNo=1, oyc=!1, aze="_sentryChildSpans", dNo="_sentryRootSpan"
}
});
function QMn(){
  if(ayc)return;
  function n(){
    const e=HP(), t=e&&qP(e);
    if(t){
      const i="internal_error";
      Lg&&Jo.log(`[Tracing] Root span: ${i} -> Global error occurred`),t.setStatus({
        code:nE,message:i
      })
    }
  }
  n.tag="sentry_tracingErrorCallback", ayc=!0, jLo(n), VLo(n)
}
var ayc, qjv=