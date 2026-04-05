// Module: out-build/external/sentry/core/utils/debounce.js
// Offset: 107343 (bundle byte offset)
// Size: 1384 bytes

Ae({
  "out-build/external/sentry/core/utils/debounce.js"(){
    "use strict"
  }
});
function tZd(n){
  const e={
    
  };
  try{
    n.forEach((t, i)=>{
      typeof t=="string"&&(e[i]=t)
    })
  }
  catch{
    
  }
  return e
}
function nZd(n){
  const e=Object.create(null);
  try{
    Object.entries(n).forEach(([t, i])=>{
      typeof i=="string"&&(e[t]=i)
    })
  }
  catch{
    
  }
  return e
}
function vVv(n){
  const e=tZd(n.headers);
  return{
    method:n.method, url:n.url, query_string:vwc(n.url), headers:e
  }
}
function AVv(n){
  const e=n.headers||{
    
  }, i=(typeof e["x-forwarded-host"]=="string"?e["x-forwarded-host"]:void 0)||(typeof e.host=="string"?e.host:void 0), s=(typeof e["x-forwarded-proto"]=="string"?e["x-forwarded-proto"]:void 0)||n.protocol||(n.socket?.encrypted?"https":"http"), o=n.url||"", a=yVv({
    url:o, host:i, protocol:s
  }), l=n.body||void 0, u=n.cookies;
  return{
    url:a, method:n.method, query_string:vwc(o), headers:nZd(e), cookies:u, data:l
  }
}
function yVv({
  url:n, protocol:e, host:t
}){
  if(n?.startsWith("http"))return n;
  if(n&&t)return`${e}://${t}${n}`
}
function wVv(n, e=!1){
  const t={
    
  };
  try{
    Object.entries(n).forEach(([i, r])=>{
      if(r!==void 0){
        const s=i.toLowerCase();
        if(!e&&iZd.some(a=>s.includes(a)))return;
        const o=`http.request.header.${s.replace(/-/g,"_")}`;
        Array.isArray(r)?t[o]=r.map(a=>a!=null?String(a):a).join(";"):typeof r=="string"&&(t[o]=r)
      }
    })
  }
  catch{
    
  }
  return t
}
function vwc(n){
  if(n)try{
    const e=new URL(n, "http://s.io").search.slice(1);
    return e.length?e:void 0
  }
  catch{
    return
  }
}
var iZd, _Vv=