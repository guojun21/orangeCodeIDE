// Module: out-build/external/sentry/core/tracing/measurement.js
// Offset: 53643 (bundle byte offset)
// Size: 486 bytes

ZT(), y6(), US(), iW()
}
});
function VKd(n){
  return n&&typeof n=="number"||n instanceof Date||Array.isArray(n)
}
function KKd(n){
  return!!n.start_timestamp&&!!n.timestamp&&!!n.span_id&&!!n.trace_id
}
function Xjv(n){
  return n instanceof K2t&&n.isStandaloneSpan()
}
function ezv(n){
  const e=sm();
  if(!e)return;
  const t=n[1];
  if(!t||t.length===0){
    e.recordDroppedEvent("before_send", "span");
    return
  }
  e.sendEnvelope(n)
}
var yyc, K2t, wyc=