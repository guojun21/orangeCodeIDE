// Module: out-build/external/sentry/core/client.js
// Offset: 86373 (bundle byte offset)
// Size: 7534 bytes

Gyc(), mNo(), aT(), ZT(), fyc(), sW(), i2n(), Yyc(), nNo(), cze(), xYd(), US(), hSe(), lde(), IYd(), h9(), qAc(), loe(), WMn(), Lyc(), cyc(), iW(), ZMn(), $zv(), ewc="Not capturing exception because it's already been captured.", twc="Discarded session because of missing or non-string release", nwc=Symbol.for("SentryInternalError"), iwc=Symbol.for("SentryDoNotSendEventError"), MYd=5e3, s2n=class{
  constructor(n){
    if(this._options=n, this._integrations={
      
    }, this._numProcessing=0, this._outcomes={
      
    }, this._hooks={
      
    }, this._eventProcessors=[], n.dsn?this._dsn=YAc(n.dsn):Lg&&Jo.warn("No DSN provided, client will not send events."), this._dsn){
      const t=Hyc(this._dsn,n.tunnel,n._metadata?n._metadata.sdk:void 0);
      this._transport=n.transport({
        tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...n.transportOptions,url:t
      })
    }
    this._options.enableLogs&&RYd(this, "afterCaptureLog", "flushLogs", Gzv, n2n), (this._options.enableMetrics??this._options._experiments?.enableMetrics??!0)&&RYd(this, "afterCaptureMetric", "flushMetrics", Jzv, r2n)
  }
  captureException(n, e, t){
    const i=NB();
    if(FAc(n))return Lg&&Jo.log(ewc), i;
    const r={
      event_id:i,...e
    };
    return this._process(this.eventFromException(n, r).then(s=>this._captureEvent(s, r, t))), r.event_id
  }
  captureMessage(n, e, t, i){
    const r={
      event_id:NB(),...t
    }, s=Apt(n)?n:String(n), o=tde(n)?this.eventFromMessage(s, e, r):this.eventFromException(n, r);
    return this._process(o.then(a=>this._captureEvent(a, r, i))), r.event_id
  }
  captureEvent(n, e, t){
    const i=NB();
    if(e?.originalException&&FAc(e.originalException))return Lg&&Jo.log(ewc), i;
    const r={
      event_id:i,...e
    }, s=n.sdkProcessingMetadata||{
      
    }, o=s.capturedSpanScope, a=s.capturedSpanIsolationScope;
    return this._process(this._captureEvent(n, r, o||t, a)), r.event_id
  }
  captureSession(n){
    this.sendSession(n), ypt(n, {
      init:!1
    })
  }
  getDsn(){
    return this._dsn
  }
  getOptions(){
    return this._options
  }
  getSdkMetadata(){
    return this._options._metadata
  }
  getTransport(){
    return this._transport
  }
  async flush(n){
    const e=this._transport;
    if(!e)return!0;
    this.emit("flush");
    const t=await this._isClientDoneProcessing(n), i=await e.flush(n);
    return t&&i
  }
  async close(n){
    const e=await this.flush(n);
    return this.getOptions().enabled=!1, this.emit("close"), e
  }
  getEventProcessors(){
    return this._eventProcessors
  }
  addEventProcessor(n){
    this._eventProcessors.push(n)
  }
  init(){
    (this._isEnabled()||this._options.integrations.some(({
      name:n
    })=>n.startsWith("Spotlight")))&&this._setupIntegrations()
  }
  getIntegrationByName(n){
    return this._integrations[n]
  }
  addIntegration(n){
    const e=this._integrations[n.name];
    bYd(this, n, this._integrations), e||fYd(this, [n])
  }
  sendEvent(n, e={
    
  }){
    this.emit("beforeSendEvent", n, e);
    let t=GKd(n, this._dsn, this._options._metadata, this._options.tunnel);
    for(const i of e.attachments||[])t=UKd(t, qKd(i));
    this.sendEnvelope(t).then(i=>this.emit("afterSendEvent", n, i))
  }
  sendSession(n){
    const{
      release:e,environment:t=Ept
    }
    =this._options;
    if("aggregates"in n){
      const r=n.attrs||{
        
      };
      if(!r.release&&!e){
        Lg&&Jo.warn(twc);
        return
      }
      r.release=r.release||e,r.environment=r.environment||t,n.attrs=r
    }
    else{
      if(!n.release&&!e){
        Lg&&Jo.warn(twc);
        return
      }
      n.release=n.release||e,n.environment=n.environment||t
    }
    this.emit("beforeSendSession", n);
    const i=JKd(n, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(i)
  }
  recordDroppedEvent(n, e, t=1){
    if(this._options.sendClientReports){
      const i=`${n}:${e}`;
      Lg&&Jo.log(`Recording outcome: "${i}"${t>1?` (${
        t
      }
       times)`:""}`),this._outcomes[i]=(this._outcomes[i]||0)+t
    }
  }
  on(n, e){
    const t=this._hooks[n]=this._hooks[n]||new Set, i=(...r)=>e(...r);
    return t.add(i), ()=>{
      t.delete(i)
    }
  }
  emit(n, ...e){
    const t=this._hooks[n];
    t&&t.forEach(i=>i(...e))
  }
  async sendEnvelope(n){
    if(this.emit("beforeEnvelope", n), this._isEnabled()&&this._transport)try{
      return await this._transport.send(n)
    }
    catch(e){
      return Lg&&Jo.error("Error while sending envelope:",e),{
        
      }
    }
    return Lg&&Jo.error("Transport disabled"), {
      
    }
  }
  _setupIntegrations(){
    const{
      integrations:n
    }
    =this._options;
    this._integrations=Czv(this, n), fYd(this, n)
  }
  _updateSessionFromEvent(n, e){
    let t=e.level==="fatal", i=!1;
    const r=e.exception?.values;
    if(r){
      i=!0,t=!1;
      for(const a of r)if(a.mechanism?.handled===!1){
        t=!0;
        break
      }
    }
    const s=n.status==="ok";
    (s&&n.errors===0||s&&t)&&(ypt(n, {
      ...t&&{
        status:"crashed"
      },errors:n.errors||Number(i||t)
    }), this.captureSession(n))
  }
  async _isClientDoneProcessing(n){
    let e=0;
    for(;
    !n||e<n;
    ){
      if(await new Promise(t=>setTimeout(t,1)),!this._numProcessing)return!0;
      e++
    }
    return!1
  }
  _isEnabled(){
    return this.getOptions().enabled!==!1&&this._transport!==void 0
  }
  _prepareEvent(n, e, t, i){
    const r=this.getOptions(), s=Object.keys(this._integrations);
    return!e.integrations&&s?.length&&(e.integrations=s), this.emit("preprocessEvent", n, e), n.type||i.setLastEventId(n.event_id||e.event_id), Pyc(r, n, e, t, this, i).then(o=>{
      if(o===null)return o;
      this.emit("postprocessEvent",o,e),o.contexts={
        trace:HAc(t),...o.contexts
      };
      const a=gNo(this,t);
      return o.sdkProcessingMetadata={
        dynamicSamplingContext:a,...o.sdkProcessingMetadata
      },o
    })
  }
  _captureEvent(n, e={
    
  }, t=ry(), i=MB()){
    return Lg&&Xyc(n)&&Jo.log(`Captured error event \`${TYd(n)[0]||"<unknown>"}\``), this._processEvent(n, e, t, i).then(r=>r.event_id, r=>{
      Lg&&(BYd(r)?Jo.log(r.message):DYd(r)?Jo.warn(r.message):Jo.warn(r))
    })
  }
  _processEvent(n, e, t, i){
    const r=this.getOptions(), {
      sampleRate:s
    }
    =r, o=PYd(n), a=Xyc(n), l=n.type||"error", u=`before send for type \`${l}\``, d=typeof s>"u"?void 0:sze(s);
    if(a&&typeof d=="number"&&Math.random()>d)return this.recordDroppedEvent("sample_rate", "error"), ANo(Zyc(`Discarding event because it's not included in the random sample (sampling rate = ${s})`));
    const m=l==="replay_event"?"replay":l;
    return this._prepareEvent(n, e, t, i).then(p=>{
      if(p===null)throw this.recordDroppedEvent("event_processor",m),Zyc("An event processor returned `null`, will not send event.");
      if(e.data&&e.data.__sentry__===!0)return p;
      const f=Hzv(this,r,p,e);
      return qzv(f,u)
    }).then(p=>{
      if(p===null){
        if(this.recordDroppedEvent("before_send",m),o){
          const w=1+(n.spans||[]).length;
          this.recordDroppedEvent("before_send","span",w)
        }
        throw Zyc(`${u} returned \`null\`, will not send event.`)
      }
      const g=t.getSession()||i.getSession();
      if(a&&g&&this._updateSessionFromEvent(g,p),o){
        const A=p.sdkProcessingMetadata?.spanCountBeforeProcessing||0,w=p.spans?p.spans.length:0,C=A-w;
        C>0&&this.recordDroppedEvent("before_send","span",C)
      }
      const f=p.transaction_info;
      if(o&&f&&p.transaction!==n.transaction){
        const A="custom";
        p.transaction_info={
          ...f,source:A
        }
      }
      return this.sendEvent(p,e),p
    }).then(null, p=>{
      throw BYd(p)||DYd(p)?p:(this.captureException(p,{
        mechanism:{
          handled:!1,type:"internal"
        },data:{
          __sentry__:!0
        },originalException:p
      }),xNo(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${p}`))
    })
  }
  _process(n){
    this._numProcessing++, n.then(e=>(this._numProcessing--, e), e=>(this._numProcessing--, e))
  }
  _clearOutcomes(){
    const n=this._outcomes;
    return this._outcomes={
      
    }, Object.entries(n).map(([e, t])=>{
      const[i,r]=e.split(":");
      return{
        reason:i,category:r,quantity:t
      }
    })
  }
  _flushOutcomes(){
    Lg&&Jo.log("Flushing outcomes...");
    const n=this._clearOutcomes();
    if(n.length===0){
      Lg&&Jo.log("No outcomes to send");
      return
    }
    if(!this._dsn){
      Lg&&Jo.log("No dsn provided, will not send outcomes");
      return
    }
    Lg&&Jo.log("Sending outcomes:", n);
    const e=EYd(n, this._options.tunnel&&ade(this._dsn));
    this.sendEnvelope(e)
  }
}
}
});
function OYd(n, e, t, i, r){
  const s={
    sent_at:new Date().toISOString()
  };
  t?.sdk&&(s.sdk={
    name:t.sdk.name, version:t.sdk.version
  }), i&&r&&(s.dsn=ade(r)), e&&(s.trace=e);
  const o=Wzv(n);
  return fte(s, [o])
}
function Wzv(n){
  return[{
    type:"check_in"
  }, n]
}
var UYd=