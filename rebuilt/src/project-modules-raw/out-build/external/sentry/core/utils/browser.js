// Module: out-build/external/sentry/core/utils/browser.js
// Offset: 19101 (bundle byte offset)
// Size: 1866 bytes

h9(), c3(), ZLo=Ev, oKd=80
}
});
function LB(n, e, t){
  if(!(e in n))return;
  const i=n[e];
  if(typeof i!="function")return;
  const r=t(i);
  typeof r=="function"&&XLo(r, i);
  try{
    n[e]=r
  }
  catch{
    Lg&&Jo.log(`Failed to replace method "${e}" in object`, n)
  }
}
function tW(n, e, t){
  try{
    Object.defineProperty(n, e, {
      value:t,writable:!0,configurable:!0
    })
  }
  catch{
    Lg&&Jo.log(`Failed to add non-enumerable property "${e}" to object`, n)
  }
}
function XLo(n, e){
  try{
    const t=e.prototype||{
      
    };
    n.prototype=e.prototype=t, tW(n, "__sentry_original__", e)
  }
  catch{
    
  }
}
function q2t(n){
  return n.__sentry_original__
}
function PAc(n){
  if(uSe(n))return{
    message:n.message, name:n.name, stack:n.stack, ...lKd(n)
  };
  if(Yje(n)){
    const e={
      type:n.type,target:cKd(n.target),currentTarget:cKd(n.currentTarget),...lKd(n)
    };
    return typeof CustomEvent<"u"&&hBe(n, CustomEvent)&&(e.detail=n.detail), e
  }
  else return n
}
function cKd(n){
  try{
    return nKd(n)?vY(n):Object.prototype.toString.call(n)
  }
  catch{
    return"<unknown>"
  }
}
function lKd(n){
  if(typeof n=="object"&&n!==null){
    const e={
      
    };
    for(const t in n)Object.prototype.hasOwnProperty.call(n, t)&&(e[t]=n[t]);
    return e
  }
  else return{
    
  }
}
function eNo(n){
  const e=Object.keys(PAc(n));
  return e.sort(), e[0]?e.join(", "):"[object has no keys]"
}
function pjv(n){
  return LAc(n, new Map)
}
function LAc(n, e){
  if(n===null||typeof n!="object")return n;
  const t=e.get(n);
  if(t!==void 0)return t;
  if(Array.isArray(n)){
    const i=[];
    return e.set(n, i), n.forEach(r=>{
      i.push(LAc(r,e))
    }), i
  }
  if(gjv(n)){
    const i={
      
    };
    return e.set(n, i), Object.keys(n).forEach(s=>{
      const o=n[s];
      o!==void 0&&(i[s]=LAc(o,e))
    }), i
  }
  return n
}
function gjv(n){
  const e=n.constructor;
  return e===Object||e===void 0
}
function fjv(n){
  let e;
  switch(!0){
    case n==null:e=new String(n);
    break;
    case(typeof n=="symbol"||typeof n=="bigint"):e=Object(n);
    break;
    case tde(n):e=new n.constructor(n);
    break;
    default:e=n;
    break
  }
  return e
}
var Wj=