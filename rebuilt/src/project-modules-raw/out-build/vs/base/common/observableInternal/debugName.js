// Module: out-build/vs/base/common/observableInternal/debugName.js
// Offset: 479151 (bundle byte offset)
// Size: 1366 bytes

N4=class{
  constructor(n, e, t){
    this.owner=n, this.debugNameSource=e, this.referenceFn=t
  }
  getDebugName(n){
    return Wsh(n, this)
  }
}, xSc=new Map, K2o=new WeakMap, TSc=new Map, ISc=new WeakMap
}
});
function Y2o(n=Xj){
  return(e, t)=>cg(e, t, n)
}
function jsh(){
  return(n, e)=>n.equals(e)
}
function Ngt(n, e, t){
  if(t!==void 0){
    const i=n;
    return i==null||e===void 0||e===null?e===i:t(i, e)
  }
  else{
    const i=n;
    return(r, s)=>r==null||s===void 0||s===null?s===r:i(r, s)
  }
}
function Hze(n, e){
  if(n===e)return!0;
  if(Array.isArray(n)&&Array.isArray(e)){
    if(n.length!==e.length)return!1;
    for(let t=0;
    t<n.length;
    t++)if(!Hze(n[t], e[t]))return!1;
    return!0
  }
  if(n&&typeof n=="object"&&e&&typeof e=="object"&&Object.getPrototypeOf(n)===Object.prototype&&Object.getPrototypeOf(e)===Object.prototype){
    const t=n, i=e, r=Object.keys(t), s=Object.keys(i), o=new Set(s);
    if(r.length!==s.length)return!1;
    for(const a of r)if(!o.has(a)||!Hze(t[a], i[a]))return!1;
    return!0
  }
  return!1
}
function RnA(n){
  return JSON.stringify(DSc(n))
}
function DSc(n){
  if(Array.isArray(n))return n.map(DSc);
  if(n&&typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){
    const e=n, t=Object.create(null);
    for(const i of Object.keys(e).sort())t[i]=DSc(e[i]);
    return t
  }
  else{
    let e=BSc.get(n);
    return e===void 0&&(e=zsh++, BSc.set(n, e)), e+"----2b76a038c20c4bcc"
  }
  return n
}
var Xj, zsh, BSc, Nbe=