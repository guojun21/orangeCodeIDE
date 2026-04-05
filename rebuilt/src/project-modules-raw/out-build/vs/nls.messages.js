// Module: out-build/vs/nls.messages.js
// Offset: 284671 (bundle byte offset)
// Size: 685 bytes

Ae({
  "out-build/vs/nls.messages.js"(){
    "use strict"
  }
});
function GMo(n, e){
  let t;
  return e.length===0?t=n:t=n.replace(/\{
    (\d+)\
  }
  /g, (i, r)=>{
    const s=parseInt(r, 10), o=e[s];
    let a=i;
    return typeof o=="string"?a=o:(typeof o=="number"||typeof o=="boolean"||o===void 0||o===null)&&(a=String(o)), a
  }), hih&&(t="\uFF3B"+t.replace(/[aouei]/g, "$&$&")+"\uFF3D"), t
}
function _(n, e, ...t){
  return GMo(typeof n=="number"?dih(n, e):e, t)
}
function dih(n, e){
  const t=g0c()?.[n];
  if(typeof t!="string"){
    if(typeof e=="string")return e;
    throw new Error(`!!! NLS MISSING: ${n} !!!`)
  }
  return t
}
function dt(n, e, ...t){
  let i;
  typeof n=="number"?i=dih(n, e):i=e;
  const r=GMo(i, t);
  return{
    value:r, original:e===i?r:GMo(e, t)
  }
}
var hih, Ht=