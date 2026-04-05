// Module: out-build/vs/platform/tracing/common/global.js
// Offset: 562171 (bundle byte offset)
// Size: 890 bytes

C4t(), M4(), rah="https://80ec2259ebfad12d8aa2afe6eb4f6dd5@metrics.cursor.sh/4508016051945472", sah="https://0a7b82d23ca5f4635708bc8e9957e4bd@o4504648565915648.ingest.us.sentry.io/4509635758522369", globalThis._CURSOR_SENTRY===void 0&&(globalThis._CURSOR_SENTRY={
  buffer:[], enabled:!0, allowCrashReportsWhenDisabled:!1, loggerSampleRate:1, sentry:void 0, tracesSampleRate:Ube.developmentTooling?1:.01, trace2SampleRate:Ube.developmentTooling?1:.01, profilesSampleRate:0, jsonStringifySampleRate:0, replaysSessionSampleRate:0, isInternalUser:!1, transport:LiA()
})
}
});
function FiA(){
  const n=new Uint8Array(16);
  return crypto.getRandomValues(n), Array.from(n, e=>e.toString(16).padStart(2, "0")).join("")
}
function OiA(){
  const n=new Uint8Array(8);
  return crypto.getRandomValues(n), Array.from(n, e=>e.toString(16).padStart(2, "0")).join("")
}
var UiA=