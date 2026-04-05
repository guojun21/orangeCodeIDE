// Module: out-build/external/sentry/core/tracing/trace.js
// Offset: 62732 (bundle byte offset)
// Size: 3042 bytes

NMn(), gbe(), aT(), ZT(), y6(), Q2t(), US(), vNo(), j2t(), WMn(), tze(), wpt(), iW(), cNo(), cze(), byc(), ZKd(), fNo(), wyc(), W2t(), JMn(), KMn="__SENTRY_SUPPRESS_TRACING__", xyc=(n, e)=>{
  const t=lSe(), i=nze(t);
  if(i.continueTrace)return i.continueTrace(n, e);
  const{
    sentryTrace:r, baggage:s
  }
  =n, o=sm(), a=sNo(s);
  return o&&!NKd(o, a?.org_id)?Cyc(e):AH(l=>{
    const u=oNo(r, s);
    return l.setPropagationContext(u), e()
  })
}
}
});
function YMn(n, e={
  
}){
  const t=new Map;
  let i=!1, r, s, o=rYd, a=!e.disableAutoFinish;
  const l=[], {
    idleTimeout:u=Ipt.idleTimeout, finalTimeout:d=Ipt.finalTimeout, childSpanTimeout:m=Ipt.childSpanTimeout, beforeSpanEnd:p, trimIdleSpanEndTimestamp:g=!0
  }
  =e, f=sm();
  if(!f||!yH()){
    const $=new bbe, H={
      sample_rate:"0",sampled:"false",...cde($)
    };
    return pNo($, H), $
  }
  const A=ry(), w=HP(), C=izv(n);
  C.end=new Proxy(C.end, {
    apply($, H, W){
      if(p&&p(C),H instanceof bbe)return;
      const[z,...Y]=W,j=z||MR(),X=oze(j),ee=kpt(C).filter(be=>be!==C),re=jA(C);
      if(!ee.length||!g)return O(X),Reflect.apply($,H,[X,...Y]);
      const ne=f.getOptions().ignoreSpans,pe=ee?.reduce((be,fe)=>{
        const ke=jA(fe);
        return!ke.timestamp||ne&&hNo(ke,ne)?be:be?Math.max(be,ke.timestamp):ke.timestamp
      },void 0),le=re.start_timestamp,he=Math.min(le?le+d/1e3:1/0,Math.max(le||-1/0,Math.min(X,pe||1/0)));
      return O(he),Reflect.apply($,H,[he,...Y])
    }
  });
  function x(){
    r&&(clearTimeout(r), r=void 0)
  }
  function I(){
    s&&(clearTimeout(s), s=void 0)
  }
  function B($){
    x(), r=setTimeout(()=>{
      !i&&t.size===0&&a&&(o=nYd,C.end($))
    }, u)
  }
  function R($){
    I(), r=setTimeout(()=>{
      !i&&a&&(o=tYd,C.end($))
    }, m)
  }
  function N($){
    x(), t.set($, !0);
    const H=MR();
    R(H+m/1e3)
  }
  function M($){
    if(t.has($)&&t.delete($), t.size===0){
      const H=MR();
      B(H+u/1e3),I()
    }
  }
  function O($){
    i=!0, t.clear(), l.forEach(X=>X()), fbe(A, w);
    const H=jA(C), {
      start_timestamp:W
    }
    =H;
    if(!W)return;
    H.data[gBe]||C.setAttribute(gBe, o), Jo.log(`[Tracing] Idle span "${H.op}" finished`);
    const Y=kpt(C).filter(X=>X!==C);
    let j=0;
    Y.forEach(X=>{
      X.isRecording()&&(X.setStatus({
        code:nE,message:"cancelled"
      }),X.end($),Lg&&Jo.log("[Tracing] Cancelling span since span ended early",JSON.stringify(X,void 0,2)));
      const ee=jA(X),{
        timestamp:re=0,start_timestamp:ne=0
      }
      =ee,pe=ne<=$,le=(d+u)/1e3,he=re-ne<=le;
      if(Lg){
        const be=JSON.stringify(X,void 0,2);
        pe?he||Jo.log("[Tracing] Discarding span since it finished after idle span final timeout",be):Jo.log("[Tracing] Discarding span since it happened after idle span was finished",be)
      }
      (!he||!pe)&&($jv(C,X),j++)
    }), j>0&&C.setAttribute("sentry.idle_span_discarded_spans", j)
  }
  return l.push(f.on("spanStart", $=>{
    if(i||$===C||jA($).timestamp||$ instanceof K2t&&$.isStandaloneSpan())return;
    kpt(C).includes($)&&N($.spanContext().spanId)
  })), l.push(f.on("spanEnd", $=>{
    i||M($.spanContext().spanId)
  })), l.push(f.on("idleSpanEnableAutoFinish", $=>{
    $===C&&(a=!0, B(), t.size&&R())
  })), e.disableAutoFinish||B(), setTimeout(()=>{
    i||(C.setStatus({
      code:nE,message:"deadline_exceeded"
    }), o=iYd, C.end())
  }, d), C
}
function izv(n){
  const e=pSe(n);
  return fbe(ry(), e), Lg&&Jo.log("[Tracing] Started span is an idle span"), e
}
var Ipt, tYd, nYd, iYd, rYd, rzv=