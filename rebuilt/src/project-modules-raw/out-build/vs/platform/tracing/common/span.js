// Module: out-build/vs/platform/tracing/common/span.js
// Offset: 564672 (bundle byte offset)
// Size: 4309 bytes

(function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.INTERNAL=1]="INTERNAL", n[n.SERVER=2]="SERVER", n[n.CLIENT=3]="CLIENT", n[n.PRODUCER=4]="PRODUCER", n[n.CONSUMER=5]="CONSUMER"
})(t4n||(t4n={
  
})), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.OK=1]="OK", n[n.ERROR=2]="ERROR"
})(n4n||(n4n={
  
})), pFo=new Array(256);
for(let n=0;
n<256;
n++)pFo[n]=(n<16?"0":"")+n.toString(16);
gFo=4096, fFo=gFo*2, skc="", k4t=fFo, bFo=class cJb{
  constructor(e){
    this._attributes={
      
    }, this._kind=t4n.INTERNAL, this._links=[], this._traceFlags=1, this._ended=!1, this._name=e.name, this._traceId=e.traceId||this._generateTraceId(), this._spanId=e.spanId||this._generateSpanId(), this._parentSpanId=e.parentSpanId, this._kind=e.kind||t4n.INTERNAL, this._startTime=e.startTime||Date.now(), this._traceFlags=e.traceFlags||1
  }
  spanContext(){
    return{
      traceId:this._traceId,spanId:this._spanId,traceFlags:this._traceFlags,traceState:this._traceState,isRemote:!1
    }
  }
  end(e){
    this._ended||(this._endTime=e||Date.now(), this._ended=!0)
  }
  setAttribute(e, t){
    return t===void 0?delete this._attributes[e]:this._attributes[e]=String(t), this
  }
  setAttributes(e){
    for(const[t, i]of Object.entries(e))this.setAttribute(t, i);
    return this
  }
  setStatus(e){
    return this._status=e, this
  }
  updateName(e){
    return this._name=e, this
  }
  isRecording(){
    return!this._ended
  }
  addLink(e){
    return this._links.push(e), this
  }
  createChild(e, t){
    return new cJb({
      name:e,traceId:this._traceId,parentSpanId:this._spanId,kind:t||t4n.INTERNAL
    })
  }
  get name(){
    return this._name
  }
  get traceId(){
    return this._traceId
  }
  get spanId(){
    return this._spanId
  }
  get parentSpanId(){
    return this._parentSpanId
  }
  get startTime(){
    return this._startTime
  }
  get endTime(){
    return this._endTime
  }
  get attributes(){
    return{
      ...this._attributes
    }
  }
  get status(){
    return this._status
  }
  get kind(){
    return this._kind
  }
  get links(){
    return[...this._links]
  }
  get traceState(){
    return this._traceState
  }
  get traceFlags(){
    return this._traceFlags
  }
  get ended(){
    return this._ended
  }
  _generateTraceId(){
    return lah(32)
  }
  _generateSpanId(){
    return lah(16)
  }
  addEvent(e){
    return this
  }
  addLinks(e){
    return this
  }
  recordException(e, t){
    
  }
}
}
});
function R5e(){
  return!kx().enabled
}
function vFo(n, e, t){
  if(n.setAttribute("cursor.eventType", e), !!t)for(const[i, r]of Object.entries(t))n.setAttribute(i, r===void 0?"undefined":r)
}
function VP(n, e, t){
  if(R5e())return new x4t(void 0);
  e===void 0&&(e=AFo());
  let i;
  return Math.random()<e&&(t?i=mFo(t, n):i=S4t(n), i.setAttribute("sentry.sample_rate", e)), new x4t(i)
}
function nz(n, e){
  if(R5e())return;
  const t=S4t(n);
  vFo(t, "event", e), t.end(), B5e.collect(t)
}
function HBe(n, e){
  if(R5e())return;
  const t=S4t("exception");
  let i="internal_error", r="", s="Error";
  n instanceof Error?(i=n.message||i, r=n.stack??"", s=n.name??n.constructor?.name??s):(i=String(n), s="StringError"), vFo(t, "error", e), t.setAttribute("error.message", i), t.setAttribute("error.stack", r), t.setAttribute("error.type", s), t.setStatus({
    code:n4n.ERROR, message:i
  }), t.end(), B5e.collect(t)
}
function AFo(){
  const n=kx();
  return n.isInternalUser?1:n.trace2SampleRate
}
function okc(n, e){
  let t;
  return e?t=mFo(e, n):t=S4t(n), new x4t(t)
}
function $be(n, e){
  const t=VP(n);
  return akc(t, e)
}
function akc(n, e){
  try{
    const t=e(n);
    return kgt(t)?Promise.resolve(t).catch(i=>{
      throw n.setError(i instanceof Error?i:String(i)),i
    }).finally(()=>{
      n.end()
    }):(n.end(), t)
  }
  catch(t){
    throw n.setError(t instanceof Error?t:String(t)), n.end(), t
  }
}
function Gs(n){
  return function(e, t, i){
    const r=i.value, s=n??t;
    return i.value=function(...o){
      return $be(s,()=>r.apply(this,o))
    }, i
  }
}
function P5e(n){
  R5e()||w6(n)
}
function SSe(n, e){
  R5e()||bf(n)||cT.isErrorNoTelemetry(n)||Sw(n, e)
}
function E4t(n){
  const e=n?.spanContext(), t=e?.traceId??FiA(), i=e?.spanId??OiA(), r=e?.traceFlags===1?"01":"00";
  return`00-${t}-${i}-${r}`
}
function HiA(n, e, t){
  if(t===void 0&&(t=AFo()), Math.random()>=t)return akc(L5e, e);
  const i=okc(n);
  return akc(i, e)
}
function ckc(n){
  return function(e, t, i){
    const r=i.value;
    return i.value=function(...s){
      return HiA(n,o=>r.apply(this,[...s,o]))
    }, i
  }
}
function lkc(n){
  const{
    traceId:e, parentSpanId:t, name:i
  }
  =n;
  if(R5e()||!e||!t)return L5e;
  const r=AFo();
  if(Math.random()>=r)return L5e;
  const s=new bFo({
    name:i, traceId:e, parentSpanId:t
  });
  return new x4t(s)
}
function uah(n){
  if(R5e())return L5e;
  const e=AFo();
  if(Math.random()>=e)return L5e;
  const t=new bFo({
    name:n
  });
  return new x4t(t)
}
var dah, hah, jgt, ukc, mah, L5e, x4t, VA=