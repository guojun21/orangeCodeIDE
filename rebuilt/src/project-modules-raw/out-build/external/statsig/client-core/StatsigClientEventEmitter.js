// Module: out-build/external/statsig/client-core/StatsigClientEventEmitter.js
// Offset: 26699052 (bundle byte offset)
// Size: 1178 bytes

U2g={
  NetworkError:"NetworkError"
}
}
});
function xMA(n, e){
  if(!n.isCompressable||Etu("no-compress")!=null||typeof CompressionStream>"u"||typeof TextEncoder>"u")return!1;
  const t=n.urlConfig.customUrl!=null||n.urlConfig.fallbackUrls!=null, i=snu.get(n.sdkKey, "enable_log_event_compression")===!0;
  switch(e.logEventCompressionMode){
    case Dtt.Disabled:return!1;
    case Dtt.Enabled:return!(t&&!i);
    case Dtt.Forced:return!0;
    default:return!1
  }
}
function TMA(n, e){
  return n?.signal.aborted&&typeof n.signal.reason=="string"?n.signal.reason:typeof e=="string"?e:e instanceof Error?`${e.name}: ${e.message}`:"Unknown Error"
}
function IMA(n){
  return n?.signal.aborted&&typeof n.signal.reason=="string"&&n.signal.reason.includes("Timeout")||!1
}
function DMA(n, e){
  n.urlConfig.endpoint===Cme._initialize&&lye._markInitNetworkReqStart(n.sdkKey, {
    attempt:e
  })
}
function q2g(n, e, t, i, r){
  n.urlConfig.endpoint===Cme._initialize&&lye._markInitNetworkReqEnd(n.sdkKey, lye._getDiagnosticsData(e, t, i, r))
}
async function BMA(n){
  await new Promise(e=>setTimeout(e, Math.min(J2g*(n*n), G2g)))
}
var H2g, J2g, G2g, W2g, unu, Q2g, j2g, z2g, dnu, V2g, RMA=