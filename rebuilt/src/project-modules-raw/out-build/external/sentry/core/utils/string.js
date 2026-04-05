// Module: out-build/external/sentry/core/utils/string.js
// Offset: 21936 (bundle byte offset)
// Size: 1608 bytes

h9(), uKd()
}
});
function vjv(){
  const n=Ev;
  return n.crypto||n.msCrypto
}
function Ajv(){
  return Math.random()*16
}
function NB(n=vjv()){
  try{
    if(n?.randomUUID)return n.randomUUID().replace(/-/g, "")
  }
  catch{
    
  }
  return OAc||(OAc="10000000100040008000"+1e11), OAc.replace(/[018]/g, e=>(e^(Ajv()&15)>>e/4).toString(16))
}
function dKd(n){
  return n.exception?.values?.[0]
}
function Z3e(n){
  const{
    message:e, event_id:t
  }
  =n;
  if(e)return e;
  const i=dKd(n);
  return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||t||"<unknown>":t||"<unknown>"
}
function eze(n, e, t){
  const i=n.exception=n.exception||{
    
  }, r=i.values=i.values||[], s=r[0]=r[0]||{
    
  };
  s.value||(s.value=e||""), s.type||(s.type=t||"Error")
}
function nW(n, e){
  const t=dKd(n);
  if(!t)return;
  const i={
    type:"generic", handled:!0
  }, r=t.mechanism;
  if(t.mechanism={
    ...i, ...r, ...e
  }, e&&"data"in e){
    const s={
      ...r?.data,...e.data
    };
    t.mechanism.data=s
  }
}
function NAc(n){
  return parseInt(n||"", 10)
}
function yjv(n){
  const e=n.match(hKd)||[], t=NAc(e[1]), i=NAc(e[2]), r=NAc(e[3]);
  return{
    buildmetadata:e[5], major:isNaN(t)?void 0:t, minor:isNaN(i)?void 0:i, patch:isNaN(r)?void 0:r, prerelease:e[4]
  }
}
function MAc(n, e, t=5){
  if(e.lineno===void 0)return;
  const i=n.length, r=Math.max(Math.min(i-1, e.lineno-1), 0);
  e.pre_context=n.slice(Math.max(0, r-t), r).map(o=>tNo(o, 0));
  const s=Math.min(i-1, r);
  e.context_line=tNo(n[s], e.colno||0), e.post_context=n.slice(Math.min(r+1, i), r+1+t).map(o=>tNo(o, 0))
}
function FAc(n){
  if(wjv(n))return!0;
  try{
    tW(n, "__sentry_captured__", !0)
  }
  catch{
    
  }
  return!1
}
function wjv(n){
  try{
    return n.__sentry_captured__
  }
  catch{
    
  }
}
var OAc, hKd, loe=