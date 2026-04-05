// Module: out-build/external/sentry/core/tracing/sentrySpan.js
// Offset: 54129 (bundle byte offset)
// Size: 3742 bytes

aT(), ZT(), fyc(), y6(), US(), tze(), iW(), ide(), cze(), byc(), zKd(), JMn(), yyc=1e3, K2t=class{
  constructor(n={
    
  }){
    this._traceId=n.traceId||rde(), this._spanId=n.spanId||sde(), this._startTime=n.startTimestamp||MR(), this._links=n.links, this._attributes={
      
    }, this.setAttributes({
      [w1]:"manual",[HE]:n.op,...n.attributes
    }), this._name=n.name, n.parentSpanId&&(this._parentSpanId=n.parentSpanId), "sampled"in n&&(this._sampled=n.sampled), n.endTimestamp&&(this._endTime=n.endTimestamp), this._events=[], this._isStandaloneSpan=n.isStandalone, this._endTime&&this._onSpanEnded()
  }
  addLink(n){
    return this._links?this._links.push(n):this._links=[n], this
  }
  addLinks(n){
    return this._links?this._links.push(...n):this._links=n, this
  }
  recordException(n, e){
    
  }
  spanContext(){
    const{
      _spanId:n,_traceId:e,_sampled:t
    }
    =this;
    return{
      spanId:n,traceId:e,traceFlags:t?uNo:syc
    }
  }
  setAttribute(n, e){
    return e===void 0?delete this._attributes[n]:this._attributes[n]=e, this
  }
  setAttributes(n){
    return Object.keys(n).forEach(e=>this.setAttribute(e, n[e])), this
  }
  updateStartTime(n){
    this._startTime=oze(n)
  }
  setStatus(n){
    return this._status=n, this
  }
  updateName(n){
    return this._name=n, this.setAttribute(c2, "custom"), this
  }
  end(n){
    this._endTime||(this._endTime=oze(n), jKd(this), this._onSpanEnded())
  }
  getSpanJSON(){
    return{
      data:this._attributes,description:this._name,op:this._attributes[HE],parent_span_id:this._parentSpanId,span_id:this._spanId,start_timestamp:this._startTime,status:tyc(this._status),timestamp:this._endTime,trace_id:this._traceId,origin:this._attributes[w1],profile_id:this._attributes[OMn],exclusive_time:this._attributes[rze],measurements:Ayc(this._events),is_segment:this._isStandaloneSpan&&qP(this)===this||void 0,segment_id:this._isStandaloneSpan?qP(this).spanContext().spanId:void 0,links:eyc(this._links)
    }
  }
  isRecording(){
    return!this._endTime&&!!this._sampled
  }
  addEvent(n, e, t){
    Lg&&Jo.log("[Tracing] Adding an event to span:", n);
    const i=VKd(e)?e:t||MR(), r=VKd(e)?{
      
    }
    :e||{
      
    }, s={
      name:n,time:oze(i),attributes:r
    };
    return this._events.push(s), this
  }
  isStandaloneSpan(){
    return!!this._isStandaloneSpan
  }
  _onSpanEnded(){
    const n=sm();
    if(n&&n.emit("spanEnd", this), !(this._isStandaloneSpan||this===qP(this)))return;
    if(this._isStandaloneSpan){
      this._sampled?ezv(WKd([this],n)):(Lg&&Jo.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),n&&n.recordDroppedEvent("sample_rate","span"));
      return
    }
    const t=this._convertSpanToTransaction();
    t&&(HMn(this).scope||ry()).captureEvent(t)
  }
  _convertSpanToTransaction(){
    if(!KKd(jA(this)))return;
    this._name||(Lg&&Jo.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name="<unlabeled transaction>");
    const{
      scope:n,isolationScope:e
    }
    =HMn(this), t=n?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
    if(this._sampled!==!0)return;
    const r=kpt(this).filter(u=>u!==this&&!Xjv(u)).map(u=>jA(u)).filter(KKd), s=this._attributes[c2];
    delete this._attributes[FMn], r.forEach(u=>{
      delete u.data[FMn]
    });
    const o={
      contexts:{
        trace:Mjv(this)
      },spans:r.length>yyc?r.sort((u,d)=>u.start_timestamp-d.start_timestamp).slice(0,yyc):r,start_timestamp:this._startTime,timestamp:this._endTime,transaction:this._name,type:"transaction",sdkProcessingMetadata:{
        capturedSpanScope:n,capturedSpanIsolationScope:e,dynamicSamplingContext:cde(this)
      },request:t,...s&&{
        transaction_info:{
          source:s
        }
      }
    }, a=Ayc(this._events);
    return a&&Object.keys(a).length&&(Lg&&Jo.log("[Measurements] Adding measurements to transaction event", JSON.stringify(a, void 0, 2)), o.measurements=a), o
  }
}
}
});
function zMn(n, e, t=()=>{
  
}, i=()=>{
  
}){
  let r;
  try{
    r=n()
  }
  catch(s){
    throw e(s), t(), s
  }
  return tzv(r, e, t, i)
}
function tzv(n, e, t, i){
  return Zje(n)?n.then(r=>(t(), i(r), r), r=>{
    throw e(r), t(), r
  }):(t(), i(n), n)
}
var vNo=