// Module: out-build/external/sentry/core/tracing/sampling.js
// Offset: 58949 (bundle byte offset)
// Size: 3783 bytes

ZT(), US(), j2t(), WMn()
}
});
function X3e(n, e){
  const t=VMn();
  if(t.startSpan)return t.startSpan(n, e);
  const i=kyc(n), {
    forceTransaction:r, parentSpan:s, scope:o
  }
  =n, a=o?.clone();
  return AH(a, ()=>eYd(s)(()=>{
    const u=ry(), d=Eyc(u, s), p=n.onlyIfParent&&!d?new bbe:Syc({
      parentSpan:d,spanArguments:i,forceTransaction:r,scope:u
    });
    return fbe(u, p), zMn(()=>e(p), ()=>{
      const{
        status:g
      }
      =jA(p);
      p.isRecording()&&(!g||g==="ok")&&p.setStatus({
        code:nE,message:"internal_error"
      })
    }, ()=>{
      p.end()
    })
  }))
}
function mSe(n, e){
  const t=VMn();
  if(t.startSpanManual)return t.startSpanManual(n, e);
  const i=kyc(n), {
    forceTransaction:r, parentSpan:s, scope:o
  }
  =n, a=o?.clone();
  return AH(a, ()=>eYd(s)(()=>{
    const u=ry(), d=Eyc(u, s), p=n.onlyIfParent&&!d?new bbe:Syc({
      parentSpan:d,spanArguments:i,forceTransaction:r,scope:u
    });
    return fbe(u, p), zMn(()=>e(p, ()=>p.end()), ()=>{
      const{
        status:g
      }
      =jA(p);
      p.isRecording()&&(!g||g==="ok")&&p.setStatus({
        code:nE,message:"internal_error"
      })
    })
  }))
}
function pSe(n){
  const e=VMn();
  if(e.startInactiveSpan)return e.startInactiveSpan(n);
  const t=kyc(n), {
    forceTransaction:i, parentSpan:r
  }
  =n;
  return(n.scope?o=>AH(n.scope, o):r!==void 0?o=>Tpt(r, o):o=>o())(()=>{
    const o=ry(), a=Eyc(o, r);
    return n.onlyIfParent&&!a?new bbe:Syc({
      parentSpan:a,spanArguments:t,forceTransaction:i,scope:o
    })
  })
}
function Tpt(n, e){
  const t=VMn();
  return t.withActiveSpan?t.withActiveSpan(n, e):AH(i=>(fbe(i, n||void 0), e(i)))
}
function _yc(n){
  const e=VMn();
  return e.suppressTracing?e.suppressTracing(n):AH(t=>{
    t.setSDKProcessingMetadata({
      [KMn]:!0
    });
    const i=n();
    return t.setSDKProcessingMetadata({
      [KMn]:void 0
    }), i
  })
}
function Cyc(n){
  return AH(e=>(e.setPropagationContext({
    traceId:rde(), sampleRand:Math.random()
  }), Lg&&Jo.log(`Starting a new trace with id ${e.getPropagationContext().traceId}`), Tpt(null, n)))
}
function Syc({
  parentSpan:n, spanArguments:e, forceTransaction:t, scope:i
}){
  if(!yH()){
    const o=new bbe;
    if(t||!n){
      const a={
        sampled:"false",sample_rate:"0",transaction:e.name,...cde(o)
      };
      pNo(o,a)
    }
    return o
  }
  const r=MB();
  let s;
  if(n&&!t)s=nzv(n, i, e), nyc(n, s);
  else if(n){
    const o=cde(n), {
      traceId:a,spanId:l
    }
    =n.spanContext(), u=fBe(n);
    s=XKd({
      traceId:a,parentSpanId:l,...e
    }, i, u), pNo(s, o)
  }
  else{
    const{
      traceId:o,dsc:a,parentSpanId:l,sampled:u
    }
    ={
      ...r.getPropagationContext(),...i.getPropagationContext()
    };
    s=XKd({
      traceId:o,parentSpanId:l,...e
    }, i, u), a&&pNo(s, a)
  }
  return QKd(s), kKd(s, i, r), s
}
function kyc(n){
  const t={
    isStandalone:(n.experimental||{
      
    }).standalone, ...n
  };
  if(n.startTime){
    const i={
      ...t
    };
    return i.startTimestamp=oze(n.startTime), delete i.startTime, i
  }
  return t
}
function VMn(){
  const n=lSe();
  return nze(n)
}
function XKd(n, e, t){
  const i=sm(), r=i?.getOptions()||{
    
  }, {
    name:s=""
  }
  =n, o={
    spanAttributes:{
      ...n.attributes
    }, spanName:s, parentSampled:t
  };
  i?.emit("beforeSampling", o, {
    decision:!1
  });
  const a=o.parentSampled??t, l=o.spanAttributes, u=e.getPropagationContext(), [d, m, p]=e.getScopeData().sdkProcessingMetadata[KMn]?[!1]:YKd(r, {
    name:s, parentSampled:a, attributes:l, parentSampleRate:sze(u.dsc?.sample_rate)
  }, u.sampleRand), g=new K2t({
    ...n, attributes:{
      [c2]:"custom",[ize]:m!==void 0&&p?m:void 0,...l
    }, sampled:d
  });
  return!d&&i&&(Lg&&Jo.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), i.recordDroppedEvent("sample_rate", "transaction")), i&&i.emit("spanStart", g), g
}
function nzv(n, e, t){
  const{
    spanId:i, traceId:r
  }
  =n.spanContext(), s=e.getScopeData().sdkProcessingMetadata[KMn]?!1:fBe(n), o=s?new K2t({
    ...t, parentSpanId:i, traceId:r, sampled:s
  }):new bbe({
    traceId:r
  });
  nyc(n, o);
  const a=sm();
  return a&&(a.emit("spanStart", o), t.endTimestamp&&a.emit("spanEnd", o)), o
}
function Eyc(n, e){
  if(e)return e;
  if(e===null)return;
  const t=H2t(n);
  if(!t)return;
  const i=sm();
  return(i?i.getOptions():{
    
  }).parentSpanIsAlwaysRootSpan?qP(t):t
}
function eYd(n){
  return n!==void 0?e=>Tpt(n, e):e=>e()
}
var KMn, xyc, Y2t=