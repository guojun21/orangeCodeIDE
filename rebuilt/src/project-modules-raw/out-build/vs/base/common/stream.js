// Module: out-build/vs/base/common/stream.js
// Offset: 402516 (bundle byte offset)
// Size: 4757 bytes

_s(), rt(), grh=class{
  constructor(n, e){
    this.reducer=n, this.options=e, this.state={
      flowing:!1,ended:!1,destroyed:!1
    }, this.buffer={
      data:[],error:[]
    }, this.listeners={
      data:[],error:[],end:[]
    }, this.pendingWritePromises=[]
  }
  pause(){
    this.state.destroyed||(this.state.flowing=!1)
  }
  resume(){
    this.state.destroyed||this.state.flowing||(this.state.flowing=!0, this.flowData(), this.flowErrors(), this.flowEnd())
  }
  write(n){
    if(!this.state.destroyed){
      if(this.state.flowing)this.emitData(n);
      else if(this.buffer.data.push(n),typeof this.options?.highWaterMark=="number"&&this.buffer.data.length>this.options.highWaterMark)return new Promise(e=>this.pendingWritePromises.push(e))
    }
  }
  error(n){
    this.state.destroyed||(this.state.flowing?this.emitError(n):this.buffer.error.push(n))
  }
  end(n){
    this.state.destroyed||(typeof n<"u"&&this.write(n), this.state.flowing?(this.emitEnd(), this.destroy()):this.state.ended=!0)
  }
  emitData(n){
    this.listeners.data.slice(0).forEach(e=>e(n))
  }
  emitError(n){
    this.listeners.error.length===0?Gc(n):this.listeners.error.slice(0).forEach(e=>e(n))
  }
  emitEnd(){
    this.listeners.end.slice(0).forEach(n=>n())
  }
  on(n, e){
    if(!this.state.destroyed)switch(n){
      case"data":this.listeners.data.push(e),this.resume();
      break;
      case"end":this.listeners.end.push(e),this.state.flowing&&this.flowEnd()&&this.destroy();
      break;
      case"error":this.listeners.error.push(e),this.state.flowing&&this.flowErrors();
      break
    }
  }
  removeListener(n, e){
    if(this.state.destroyed)return;
    let t;
    switch(n){
      case"data":t=this.listeners.data;
      break;
      case"end":t=this.listeners.end;
      break;
      case"error":t=this.listeners.error;
      break
    }
    if(t){
      const i=t.indexOf(e);
      i>=0&&t.splice(i,1)
    }
  }
  flowData(){
    if(this.buffer.data.length===0)return;
    if(typeof this.reducer=="function"){
      const e=this.reducer(this.buffer.data);
      this.emitData(e)
    }
    else for(const e of this.buffer.data)this.emitData(e);
    this.buffer.data.length=0;
    const n=[...this.pendingWritePromises];
    this.pendingWritePromises.length=0, n.forEach(e=>e())
  }
  flowErrors(){
    if(this.listeners.error.length>0){
      for(const n of this.buffer.error)this.emitError(n);
      this.buffer.error.length=0
    }
  }
  flowEnd(){
    return this.state.ended?(this.emitEnd(), this.listeners.end.length>0):!1
  }
  destroy(){
    this.state.destroyed||(this.state.destroyed=!0, this.state.ended=!0, this.buffer.data.length=0, this.buffer.error.length=0, this.listeners.data.length=0, this.listeners.error.length=0, this.listeners.end.length=0, this.pendingWritePromises.length=0)
  }
}
}
});
function nnA(n, e, t=0){
  const i=e.byteLength, r=n.byteLength;
  if(i===0)return 0;
  if(i===1)return n.indexOf(e[0]);
  if(i>r-t)return-1;
  const s=vrh.value;
  s.fill(e.length);
  for(let u=0;
  u<e.length;
  u++)s[e[u]]=e.length-u-1;
  let o=t+e.length-1, a=o, l=-1;
  for(;
  o<r;
  )if(n[o]===e[a]){
    if(a===0){
      l=o;
      break
    }
    o--, a--
  }
  else o+=Math.max(e.length-a, s[n[o]]), a=e.length-1;
  return l
}
function inA(n, e){
  return n[e+0]<<0>>>0|n[e+1]<<8>>>0
}
function rnA(n, e, t){
  n[t+0]=e&255, e=e>>>8, n[t+1]=e&255
}
function CY(n, e){
  return n[e]*2**24+n[e+1]*2**16+n[e+2]*2**8+n[e+3]
}
function SY(n, e, t){
  n[t+3]=e, e=e>>>8, n[t+2]=e, e=e>>>8, n[t+1]=e, e=e>>>8, n[t]=e
}
function snA(n, e){
  return n[e+0]<<0>>>0|n[e+1]<<8>>>0|n[e+2]<<16>>>0|n[e+3]<<24>>>0
}
function onA(n, e, t){
  n[t+0]=e&255, e=e>>>8, n[t+1]=e&255, e=e>>>8, n[t+2]=e&255, e=e>>>8, n[t+3]=e&255
}
function sCc(n, e){
  return n[e]
}
function oCc(n, e, t){
  n[t]=e
}
function frh(n){
  return ztA(n, e=>Ms.concat(e))
}
function aCc(n){
  return ZtA(n)
}
function Aoe(n){
  return h2o(n, e=>Ms.concat(e))
}
async function anA(n){
  return n.ended?Ms.concat(n.buffer):Ms.concat([...n.buffer, await Aoe(n.stream)])
}
function Rze(n){
  return KtA(n, e=>Ms.concat(e))
}
function cCc(n){
  return bSe(e=>Ms.concat(e), n)
}
function cnA(n, e){
  return enA(n, e, t=>Ms.concat(t))
}
function brh(n, e){
  return tnA(n, e, t=>Ms.concat(t))
}
function Zj(n){
  let e=0, t=0, i=0;
  const r=new Uint8Array(Math.floor(n.length/4*3)), s=a=>{
    switch(t){
      case 3:r[i++]=e|a,t=0;
      break;
      case 2:r[i++]=e|a>>>2,e=a<<6,t=3;
      break;
      case 1:r[i++]=e|a>>>4,e=a<<4,t=2;
      break;
      default:e=a<<2,t=1
    }
  };
  for(let a=0;
  a<n.length;
  a++){
    const l=n.charCodeAt(a);
    if(l>=65&&l<=90)s(l-65);
    else if(l>=97&&l<=122)s(l-97+26);
    else if(l>=48&&l<=57)s(l-48+52);
    else if(l===43||l===45)s(62);
    else if(l===47||l===95)s(63);
    else{
      if(l===61)break;
      throw new SyntaxError(`Unexpected base64 character ${n[a]}`)
    }
  }
  const o=i;
  for(;
  t>0;
  )s(0);
  return Ms.wrap(r).slice(0, o)
}
function WFt(n){
  const e=n.split(".")[1], t=Zj(e);
  return JSON.parse(t.toString())
}
function VN({
  buffer:n
}, e=!0, t=!1){
  const i=t?yrh:Arh;
  let r="";
  const s=n.byteLength%3;
  let o=0;
  for(;
  o<n.byteLength-s;
  o+=3){
    const a=n[o+0], l=n[o+1], u=n[o+2];
    r+=i[a>>>2], r+=i[(a<<4|l>>>4)&63], r+=i[(l<<2|u>>>6)&63], r+=i[u&63]
  }
  if(s===1){
    const a=n[o+0];
    r+=i[a>>>2], r+=i[a<<4&63], e&&(r+="==")
  }
  else if(s===2){
    const a=n[o+0], l=n[o+1];
    r+=i[a>>>2], r+=i[(a<<4|l>>>4)&63], r+=i[l<<2&63], e&&(r+="=")
  }
  return r
}
var lFn, vrh, lCc, uCc, Ms, Arh, yrh, Ql=