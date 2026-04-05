// Module: out-build/external/sentry/core/logs/envelope.js
// Offset: 77844 (bundle byte offset)
// Size: 2443 bytes

hSe(), lde()
}
});
function Izv(n){
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
function vBe(n, e, t, i=!0){
  t&&(!n[e]||i)&&(n[e]=t)
}
function AYd(n, e){
  const t=Vyc(), i=yYd(n);
  i===void 0?t.set(n, [e]):(t.set(n, [...i, e]), i.length>=wYd&&n2n(n, i))
}
function X2t(n, e=ry(), t=AYd){
  const i=e?.getClient()??sm();
  if(!i){
    Lg&&Jo.warn("No client available to capture log.");
    return
  }
  const{
    release:r, environment:s, enableLogs:o=!1, beforeSendLog:a
  }
  =i.getOptions();
  if(!o){
    Lg&&Jo.warn("logging option not enabled, log will not be captured.");
    return
  }
  const[, l]=jyc(i, e), u={
    ...n.attributes
  }, {
    user:{
      id:d,email:m,username:p
    }
  }
  =Dzv(e);
  vBe(u, "user.id", d, !1), vBe(u, "user.email", m, !1), vBe(u, "user.name", p, !1), vBe(u, "sentry.release", r), vBe(u, "sentry.environment", s);
  const{
    name:g, version:f
  }
  =i.getSdkMetadata()?.sdk??{
    
  };
  vBe(u, "sentry.sdk.name", g), vBe(u, "sentry.sdk.version", f);
  const A=i.getIntegrationByName("Replay"), w=A?.getReplayId(!0);
  vBe(u, "sentry.replay_id", w), w&&A?.getRecordingMode()==="buffer"&&vBe(u, "sentry._internal.replay_is_buffering", !0);
  const C=n.message;
  if(Apt(C)){
    const{
      __sentry_template_string__:H,__sentry_template_values__:W=[]
    }
    =C;
    W?.length&&(u["sentry.message.template"]=H), W.forEach((z, Y)=>{
      u[`sentry.message.parameter.${Y}`]=z
    })
  }
  const x=H2t(e);
  vBe(u, "sentry.trace.parent_span_id", x?.spanContext().spanId);
  const I={
    ...n, attributes:u
  };
  i.emit("beforeCaptureLog", I);
  const B=a?dBe(()=>a(I)):I;
  if(!B){
    i.recordDroppedEvent("before_send", "log_item", 1), Lg&&Jo.warn("beforeSendLog returned null, log will not be captured.");
    return
  }
  const{
    level:R, message:N, attributes:M={
      
    }, severityNumber:O
  }
  =B, $={
    timestamp:MR(), level:R, body:N, trace_id:l?.trace_id, severity_number:O??vYd[R], attributes:Object.keys(M).reduce((H, W)=>(H[W]=Izv(M[W]), H), {
      
    })
  };
  t(i, $), i.emit("afterCaptureLog", B)
}
function n2n(n, e){
  const t=e??yYd(n)??[];
  if(t.length===0)return;
  const i=n.getOptions(), r=xzv(t, i._metadata, i.tunnel, n.getDsn());
  Vyc().set(n, []), n.emit("flushLogs"), n.sendEnvelope(r)
}
function yYd(n){
  return Vyc().get(n)
}
function Dzv(n){
  const e=ode().getScopeData();
  return t5e(e, MB().getScopeData()), t5e(e, n.getScopeData()), e
}
function Vyc(){
  return fpt("clientToLogBufferMap", ()=>new WeakMap)
}
var wYd, i2n=