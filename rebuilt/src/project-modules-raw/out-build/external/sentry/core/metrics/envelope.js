// Module: out-build/external/sentry/core/metrics/envelope.js
// Offset: 80708 (bundle byte offset)
// Size: 2412 bytes

hSe(), lde()
}
});
function Lzv(n){
  switch(typeof n){
    case"number":return Number.isInteger(n)?{
      value:n,type:"integer"
    }
    :{
      value:n,type:"double"
    };
    case"boolean":return{
      value:n,type:"boolean"
    };
    case"string":return{
      value:n,type:"string"
    };
    default:{
      let e="";
      try{
        e=JSON.stringify(n)??""
      }
      catch{
        
      }
      return{
        value:e,type:"string"
      }
    }
  }
}
function n5e(n, e, t, i=!0){
  t&&(i||!(e in n))&&(n[e]=t)
}
function _Yd(n, e){
  const t=Kyc(), i=SYd(n);
  i===void 0?t.set(n, [e]):(t.set(n, [...i, e]), i.length>=kYd&&r2n(n, i))
}
function Nzv(n, e, t){
  const{
    release:i, environment:r
  }
  =e.getOptions(), s={
    ...n.attributes
  }, {
    user:{
      id:o,email:a,username:l
    }
  }
  =Fzv(t);
  n5e(s, "user.id", o, !1), n5e(s, "user.email", a, !1), n5e(s, "user.name", l, !1), n5e(s, "sentry.release", i), n5e(s, "sentry.environment", r);
  const{
    name:u, version:d
  }
  =e.getSdkMetadata()?.sdk??{
    
  };
  n5e(s, "sentry.sdk.name", u), n5e(s, "sentry.sdk.version", d);
  const m=e.getIntegrationByName("Replay"), p=m?.getReplayId(!0);
  return n5e(s, "sentry.replay_id", p), p&&m?.getRecordingMode()==="buffer"&&n5e(s, "sentry._internal.replay_is_buffering", !0), {
    ...n, attributes:s
  }
}
function Mzv(n, e, t){
  const i={
    
  };
  for(const l in n.attributes)n.attributes[l]!==void 0&&(i[l]=Lzv(n.attributes[l]));
  const[, r]=jyc(e, t), s=H2t(t), o=s?s.spanContext().traceId:r?.trace_id, a=s?s.spanContext().spanId:void 0;
  return{
    timestamp:MR(), trace_id:o??"", span_id:a, name:n.name, type:n.type, unit:n.unit, value:n.value, attributes:i
  }
}
function CYd(n, e){
  const t=e?.scope??ry(), i=e?.captureSerializedMetric??_Yd, r=t?.getClient()??sm();
  if(!r){
    Lg&&Jo.warn("No client available to capture metric.");
    return
  }
  const{
    _experiments:s, enableMetrics:o, beforeSendMetric:a
  }
  =r.getOptions();
  if(!(o??s?.enableMetrics??!0)){
    Lg&&Jo.warn("metrics option not enabled, metric will not be captured.");
    return
  }
  const u=Nzv(n, r, t), d=a||s?.beforeSendMetric, m=d?d(u):u;
  if(!m){
    Lg&&Jo.log("`beforeSendMetric` returned `null`, will not send metric.");
    return
  }
  const p=Mzv(m, r, t);
  Lg&&Jo.log("[Metric]", p), i(r, p), r.emit("afterCaptureMetric", u)
}
function r2n(n, e){
  const t=e??SYd(n)??[];
  if(t.length===0)return;
  const i=n.getOptions(), r=Rzv(t, i._metadata, i.tunnel, n.getDsn());
  Kyc().set(n, []), n.emit("flushMetrics"), n.sendEnvelope(r)
}
function SYd(n){
  return Kyc().get(n)
}
function Fzv(n){
  const e=ode().getScopeData();
  return t5e(e, MB().getScopeData()), t5e(e, n.getScopeData()), e
}
function Kyc(){
  return fpt("clientToMetricBufferMap", ()=>new WeakMap)
}
var kYd, Yyc=