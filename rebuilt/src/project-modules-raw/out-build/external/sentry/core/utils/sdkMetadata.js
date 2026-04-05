// Module: out-build/external/sentry/core/utils/sdkMetadata.js
// Offset: 105919 (bundle byte offset)
// Size: 728 bytes

wAc()
}
});
function Lpt(n={
  
}){
  const e=n.client||sm();
  if(!kNo()||!e)return{
    
  };
  const t=lSe(), i=nze(t);
  if(i.getTraceData)return i.getTraceData(n);
  const r=n.scope||ry(), s=n.span||HP(), o=s?lNo(s):mVv(r), a=s?cde(s):gNo(e, r), l=jAc(a);
  if(!aNo.test(o))return Jo.warn("Invalid sentry-trace data. Cannot generate trace data"), {
    
  };
  const d={
    "sentry-trace":o, baggage:l
  };
  if(n.propagateTraceparent){
    const m=s?Fjv(s):pVv(r);
    m&&(d.traceparent=m)
  }
  return d
}
function mVv(n){
  const{
    traceId:e, sampled:t, propagationSpanId:i
  }
  =n.getPropagationContext();
  return ZAc(e, i, t)
}
function pVv(n){
  const{
    traceId:e, sampled:t, propagationSpanId:i
  }
  =n.getPropagationContext();
  return LKd(e, i, t)
}
var bwc=