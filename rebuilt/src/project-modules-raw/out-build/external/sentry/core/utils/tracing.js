// Module: out-build/external/sentry/core/utils/tracing.js
// Offset: 40717 (bundle byte offset)
// Size: 2626 bytes

US(), Q2t(), hSe(), WMn(), tze(), aNo=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$")
}
});
function Mjv(n){
  const{
    spanId:e, traceId:t
  }
  =n.spanContext(), {
    data:i, op:r, parent_span_id:s, status:o, origin:a, links:l
  }
  =jA(n);
  return{
    parent_span_id:s, span_id:e, trace_id:t, data:i, op:r, status:o, origin:a, links:l
  }
}
function XAc(n){
  const{
    spanId:e, traceId:t, isRemote:i
  }
  =n.spanContext(), r=i?e:jA(n).parent_span_id, s=HMn(n).scope, o=i?s?.getPropagationContext().propagationSpanId||sde():e;
  return{
    parent_span_id:r, span_id:o, trace_id:t
  }
}
function lNo(n){
  const{
    traceId:e, spanId:t
  }
  =n.spanContext(), i=fBe(n);
  return ZAc(e, t, i)
}
function Fjv(n){
  const{
    traceId:e, spanId:t
  }
  =n.spanContext(), i=fBe(n);
  return LKd(e, t, i)
}
function eyc(n){
  if(n&&n.length>0)return n.map(({
    context:{
      spanId:e,traceId:t,traceFlags:i,...r
    }, attributes:s
  })=>({
    span_id:e, trace_id:t, sampled:i===uNo, attributes:s, ...r
  }))
}
function oze(n){
  return typeof n=="number"?MKd(n):Array.isArray(n)?n[0]+n[1]/1e9:n instanceof Date?MKd(n.getTime()):MR()
}
function MKd(n){
  return n>9999999999?n/1e3:n
}
function jA(n){
  if(Ujv(n))return n.getSpanJSON();
  const{
    spanId:e, traceId:t
  }
  =n.spanContext();
  if(Ojv(n)){
    const{
      attributes:i,startTime:r,name:s,endTime:o,status:a,links:l
    }
    =n, u="parentSpanId"in n?n.parentSpanId:"parentSpanContext"in n?n.parentSpanContext?.spanId:void 0;
    return{
      span_id:e,trace_id:t,data:i,description:s,parent_span_id:u,start_timestamp:oze(r),timestamp:oze(o)||void 0,status:tyc(a),op:i[HE],origin:i[w1],links:eyc(l)
    }
  }
  return{
    span_id:e, trace_id:t, start_timestamp:0, data:{
      
    }
  }
}
function Ojv(n){
  const e=n;
  return!!e.attributes&&!!e.startTime&&!!e.name&&!!e.endTime&&!!e.status
}
function Ujv(n){
  return typeof n.getSpanJSON=="function"
}
function fBe(n){
  const{
    traceFlags:e
  }
  =n.spanContext();
  return e===uNo
}
function tyc(n){
  if(!(!n||n.code===GAc))return n.code===qMn?"ok":n.message||"internal_error"
}
function nyc(n, e){
  const t=n[dNo]||n;
  tW(e, dNo, t), n[aze]?n[aze].add(e):tW(n, aze, new Set([e]))
}
function $jv(n, e){
  n[aze]&&n[aze].delete(e)
}
function kpt(n){
  const e=new Set;
  function t(i){
    if(!e.has(i)&&fBe(i)){
      e.add(i);
      const r=i[aze]?Array.from(i[aze]):[];
      for(const s of r)t(s)
    }
  }
  return t(n), Array.from(e)
}
function qP(n){
  return n[dNo]||n
}
function HP(){
  const n=lSe(), e=nze(n);
  return e.getActiveSpan?e.getActiveSpan():H2t(ry())
}
function iyc(){
  oyc||(dBe(()=>{
    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
  }), oyc=!0)
}
function ryc(n, e){
  n.updateName(e), n.setAttributes({
    [c2]:"custom", [FMn]:e
  })
}
var syc, uNo, oyc, aze, dNo, iW=