// Module: out-build/vs/platform/tracing/common/spanCollector.js
// Offset: 563154 (bundle byte offset)
// Size: 1518 bytes

oah=1e3, aah=class{
  constructor(){
    this._buffer=[], this._dropped=0, this._maxBuffer=oah
  }
  configure(n){
    n.maxBuffer!==void 0&&(this._maxBuffer=n.maxBuffer)
  }
  collect(n){
    if(!n)return;
    const e="traceId"in n&&typeof n.traceId=="string"&&!("createChild"in n)?n:this._convert(n);
    this._buffer.length<this._maxBuffer?this._buffer.push(e):this._dropped++
  }
  takeAll(){
    const n=this._buffer, e=this._dropped;
    return this._buffer=[], this._dropped=0, {
      spans:n,dropped:e
    }
  }
  _convert(n){
    return{
      traceId:n.traceId,spanId:n.spanId,parentSpanId:n.parentSpanId,name:n.name,startTime:n.startTime,endTime:n.endTime??Date.now(),attributes:n.attributes,error:n.status?.code===2,traceState:n.traceState,flags:n.traceFlags,kind:n.kind,statusCode:n.status?.code,statusMessage:n.status?.message,links:n.links.map(e=>({
        traceId:e.traceId,spanId:e.spanId,attributes:e.attributes,traceState:e.traceState,flags:e.flags
      }))
    }
  }
  _convertAttributes(n){
    const e={
      
    };
    for(const[t, i]of Object.entries(n))e[t]=String(i);
    return e
  }
}, B5e=new aah
}
});
function $iA(){
  const n=new Uint8Array(gFo);
  crypto.getRandomValues(n);
  let e="";
  for(let t=0;
  t<gFo;
  t++)e+=pFo[n[t]];
  skc=e, k4t=0
}
function lah(n){
  if(n>fFo){
    const t=new Uint8Array(n/2);
    crypto.getRandomValues(t);
    let i="";
    for(let r=0;
    r<t.length;
    r++)i+=pFo[t[r]];
    return i
  }
  k4t+n>fFo&&$iA();
  const e=skc.slice(k4t, k4t+n);
  return k4t+=n, e
}
function S4t(n, e){
  return new bFo({
    name:n, kind:e
  })
}
function mFo(n, e, t){
  return n.createChild(e, t)
}
var t4n, n4n, pFo, gFo, fFo, skc, k4t, bFo, qiA=