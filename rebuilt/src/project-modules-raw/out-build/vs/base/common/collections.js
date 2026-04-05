// Module: out-build/vs/base/common/collections.js
// Offset: 232499 (bundle byte offset)
// Size: 2128 bytes

Anh=class{
  static{
    vnh=Symbol.toStringTag
  }
  constructor(n, e){
    this.toKey=e, this._map=new Map, this[vnh]="SetWithKey";
    for(const t of n)this.add(t)
  }
  get size(){
    return this._map.size
  }
  add(n){
    const e=this.toKey(n);
    return this._map.set(e, n), this
  }
  delete(n){
    return this._map.delete(this.toKey(n))
  }
  has(n){
    return this._map.has(this.toKey(n))
  }
  *entries(){
    for(const n of this._map.values())yield[n, n]
  }
  keys(){
    return this.values()
  }
  *values(){
    for(const n of this._map.values())yield n
  }
  clear(){
    this._map.clear()
  }
  forEach(n, e){
    this._map.forEach(t=>n.call(e, t, t, this))
  }
  [Symbol.iterator](){
    return this.values()
  }
}
}
});
function GeA(n){
  Kpt.setUnexpectedErrorHandler(n)
}
function IMo(n){
  Kpt.onUnexpectedError(n)
}
function Gc(n){
  bf(n)||Kpt.onUnexpectedError(n)
}
function JE(n){
  bf(n)||Kpt.onUnexpectedExternalError(n)
}
function CFt(n){
  if(n instanceof Error){
    const{
      name:e,message:t,cause:i
    }
    =n, r=n.stacktrace||n.stack;
    return{
      $isError:!0,name:e,message:t,stack:r,noTelemetry:cT.isErrorNoTelemetry(n),cause:i?CFt(i):void 0,code:n.code
    }
  }
  return n
}
function SFt(n){
  let e;
  return n.noTelemetry?e=new cT:(e=new Error, e.name=n.name), e.message=n.message, e.stack=n.stack, n.code&&(e.code=n.code), n.cause&&(e.cause=SFt(n.cause)), e
}
function bf(n){
  return n instanceof vf?!0:n instanceof Error&&n.name===F2n&&n.message===F2n
}
function _be(){
  const n=new Error(F2n);
  return n.name=n.message, n
}
function uw(n){
  return n?new Error(`Illegal argument: ${n}`):new Error("Illegal argument")
}
function z_c(n){
  return n?new Error(`Illegal state: ${n}`):new Error("Illegal state")
}
function ov(n){
  return n?n.message?n.message:n.stack?n.stack.split(`
`)[0]:String(n):"Error"
}
function ynh(n){
  let e=n;
  for(;
  e;
  ){
    if(e instanceof DOMException&&e.name==="TimeoutError")return!0;
    if(e instanceof Error&&e.cause)e=e.cause;
    else break
  }
  return!1
}
function kFt(n, e, t){
  t?.throwIfAborted();
  const i=new Error(e);
  return new Promise((r, s)=>{
    const o=()=>{
      i.cause=t?.reason,s(i)
    };
    t?.addEventListener("abort", o), n.then(r, s).finally(()=>{
      t?.removeEventListener("abort",o)
    })
  })
}
function WeA(n){
  n&&(DMo=!0)
}
function QeA(){
  return DMo
}
var wnh, Kpt, F2n, vf, O2n, cT, _m, V_c, DMo, _s=