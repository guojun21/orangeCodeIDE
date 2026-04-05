// Module: out-build/external/sentry/core/tracing/sentryNonRecordingSpan.js
// Offset: 46083 (bundle byte offset)
// Size: 2715 bytes

tze(), iW(), bbe=class{
  constructor(n={
    
  }){
    this._traceId=n.traceId||rde(), this._spanId=n.spanId||sde()
  }
  spanContext(){
    return{
      spanId:this._spanId,traceId:this._traceId,traceFlags:syc
    }
  }
  end(n){
    
  }
  setAttribute(n, e){
    return this
  }
  setAttributes(n){
    return this
  }
  setStatus(n){
    return this
  }
  updateName(n){
    return this
  }
  isRecording(){
    return!1
  }
  addEvent(n, e, t){
    return this
  }
  addLink(n){
    return this
  }
  addLinks(n){
    return this
  }
  recordException(n, e){
    
  }
}
}
});
function jj(n, e=100, t=1/0){
  try{
    return dyc("", n, e, t)
  }
  catch(i){
    return{
      ERROR:`**non-serializable** (${i})`
    }
  }
}
function jMn(n, e=3, t=100*1024){
  const i=jj(n, e);
  return jjv(i)>t?jMn(n, e-1, t):i
}
function dyc(n, e, t=1/0, i=1/0, r=Vjv()){
  const[s, o]=r;
  if(e==null||["boolean", "string"].includes(typeof e)||typeof e=="number"&&Number.isFinite(e))return e;
  const a=Gjv(n, e);
  if(!a.startsWith("[object "))return a;
  if(e.__sentry_skip_normalization__)return e;
  const l=typeof e.__sentry_override_normalization_depth__=="number"?e.__sentry_override_normalization_depth__:t;
  if(l===0)return a.replace("object ", "");
  if(s(e))return"[Circular ~]";
  const u=e;
  if(u&&typeof u.toJSON=="function")try{
    const g=u.toJSON();
    return dyc("", g, l-1, i, r)
  }
  catch{
    
  }
  const d=Array.isArray(e)?[]:{
    
  };
  let m=0;
  const p=PAc(e);
  for(const g in p){
    if(!Object.prototype.hasOwnProperty.call(p, g))continue;
    if(m>=i){
      d[g]="[MaxProperties ~]";
      break
    }
    const f=p[g];
    d[g]=dyc(g, f, l-1, i, r), m++
  }
  return o(e), d
}
function Gjv(n, e){
  try{
    if(n==="domain"&&e&&typeof e=="object"&&e._events)return"[Domain]";
    if(n==="domainEmitter")return"[DomainEmitter]";
    if(typeof global<"u"&&e===global)return"[Global]";
    if(typeof window<"u"&&e===window)return"[Window]";
    if(typeof document<"u"&&e===document)return"[Document]";
    if(BAc(e))return"[VueViewModel]";
    if(rKd(e))return"[SyntheticEvent]";
    if(typeof e=="number"&&!Number.isFinite(e))return`[${e}]`;
    if(typeof e=="function")return`[Function: ${fY(e)}]`;
    if(typeof e=="symbol")return`[${String(e)}]`;
    if(typeof e=="bigint")return`[BigInt: ${String(e)}]`;
    const t=Wjv(e);
    return/^HTML(\w*)Element$/.test(t)?`[HTMLElement: ${t}]`:`[object ${t}]`
  }
  catch(t){
    return`**non-serializable** (${t})`
  }
}
function Wjv(n){
  const e=Object.getPrototypeOf(n);
  return e?.constructor?e.constructor.name:"null prototype"
}
function Qjv(n){
  return~-encodeURI(n).split(/%..|./).length
}
function jjv(n){
  return Qjv(JSON.stringify(n))
}
function zjv(n, e){
  const t=e.replace(/\\/g, "/").replace(/[|\\{
    
  }
  ()[\]^$+*?.]/g, "\\$&");
  let i=n;
  try{
    i=decodeURI(n)
  }
  catch{
    
  }
  return i.replace(/\\/g, "/").replace(/webpack:\/?/g, "").replace(new RegExp(`(file://)?/*${t}/*`, "ig"), "app:///")
}
function Vjv(){
  const n=new WeakSet;
  function e(i){
    return n.has(i)?!0:(n.add(i), !1)
  }
  function t(i){
    n.delete(i)
  }
  return[e, t]
}
var xpt=