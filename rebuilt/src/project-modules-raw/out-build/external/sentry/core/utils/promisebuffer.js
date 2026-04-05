// Module: out-build/external/sentry/core/utils/promisebuffer.js
// Offset: 98781 (bundle byte offset)
// Size: 776 bytes

ZMn(), INo=Symbol.for("SentryBufferFullError")
}
});
function lwc(n, e=Date.now()){
  const t=parseInt(`${n}`, 10);
  if(!isNaN(t))return t*1e3;
  const i=Date.parse(`${n}`);
  return isNaN(i)?hwc:i-e
}
function GYd(n, e){
  return n[e]||n.all||0
}
function uwc(n, e, t=Date.now()){
  return GYd(n, e)>t
}
function dwc(n, {
  statusCode:e, headers:t
}, i=Date.now()){
  const r={
    ...n
  }, s=t?.["x-sentry-rate-limits"], o=t?.["retry-after"];
  if(s)for(const a of s.trim().split(",")){
    const[l, u, , , d]=a.split(":", 5), m=parseInt(l, 10), p=(isNaN(m)?60:m)*1e3;
    if(!u)r.all=i+p;
    else for(const g of u.split(";"))g==="metric_bucket"?(!d||d.split(";").includes("custom"))&&(r[g]=i+p):r[g]=i+p
  }
  else o?r.all=i+lwc(o, i):e===429&&(r.all=i+60*1e3);
  return r
}
var hwc, mwc=