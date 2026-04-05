// Module: out-build/external/sentry/core/integrations/functiontostring.js
// Offset: 109253 (bundle byte offset)
// Size: 2300 bytes

aT(), sW(), Wj(), oZd="FunctionToString", ywc=new WeakMap, aZd=(()=>({
  name:oZd, setupOnce(){
    sZd=Function.prototype.toString;
    try{
      Function.prototype.toString=function(...n){
        const e=q2t(this),t=ywc.has(sm())&&e!==void 0?e:this;
        return sZd.apply(t,n)
      }
    }
    catch{
      
    }
  }, setup(n){
    ywc.set(n, !0)
  }
})), Npt=aZd
}
});
function cZd(n={
  
}, e={
  
}){
  return{
    allowUrls:[...n.allowUrls||[], ...e.allowUrls||[]], denyUrls:[...n.denyUrls||[], ...e.denyUrls||[]], ignoreErrors:[...n.ignoreErrors||[], ...e.ignoreErrors||[], ...n.disableErrorDefaults?[]:lZd], ignoreTransactions:[...n.ignoreTransactions||[], ...e.ignoreTransactions||[]]
  }
}
function SVv(n, e){
  if(n.type){
    if(n.type==="transaction"&&EVv(n, e.ignoreTransactions))return Lg&&Jo.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Z3e(n)}`), !0
  }
  else{
    if(kVv(n, e.ignoreErrors))return Lg&&Jo.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Z3e(n)}`), !0;
    if(DVv(n))return Lg&&Jo.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Z3e(n)}`), !0;
    if(xVv(n, e.denyUrls))return Lg&&Jo.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Z3e(n)}.
Url: ${MNo(n)}`), !0;
    if(!TVv(n, e.allowUrls))return Lg&&Jo.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Z3e(n)}.
Url: ${MNo(n)}`), !0
  }
  return!1
}
function kVv(n, e){
  return e?.length?TYd(n).some(t=>Qj(t, e)):!1
}
function EVv(n, e){
  if(!e?.length)return!1;
  const t=n.transaction;
  return t?Qj(t, e):!1
}
function xVv(n, e){
  if(!e?.length)return!1;
  const t=MNo(n);
  return t?Qj(t, e):!1
}
function TVv(n, e){
  if(!e?.length)return!0;
  const t=MNo(n);
  return t?Qj(t, e):!0
}
function IVv(n=[]){
  for(let e=n.length-1;
  e>=0;
  e--){
    const t=n[e];
    if(t&&t.filename!=="<anonymous>"&&t.filename!=="[native code]")return t.filename||null
  }
  return null
}
function MNo(n){
  try{
    const t=[...n.exception?.values??[]].reverse().find(i=>i.mechanism?.parent_id===void 0&&i.stacktrace?.frames?.length)?.stacktrace?.frames;
    return t?IVv(t):null
  }
  catch{
    return Lg&&Jo.error(`Cannot extract url for event ${Z3e(n)}`), null
  }
}
function DVv(n){
  return n.exception?.values?.length?!n.message&&!n.exception.values.some(e=>e.stacktrace||e.type&&e.type!=="Error"||e.value):!1
}
var lZd, uZd, iFt, rFt, dZd=