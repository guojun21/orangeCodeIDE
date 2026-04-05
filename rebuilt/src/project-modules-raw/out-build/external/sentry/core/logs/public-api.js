// Module: out-build/external/sentry/core/logs/public-api.js
// Offset: 153269 (bundle byte offset)
// Size: 511 bytes

i2n(), ZYd()
}
});
function jwc(n, e, t){
  return"util"in Ev&&typeof Ev.util.format=="function"?Ev.util.format(...n):FYv(n, e, t)
}
function FYv(n, e, t){
  return n.map(i=>tde(i)?String(i):JSON.stringify(jj(i, e, t))).join(" ")
}
function OYv(n){
  return/%[sdifocO]/.test(n)
}
function UYv(n, e){
  const t={
    
  }, i=new Array(e.length).fill("{}").join(" ");
  return t["sentry.message.template"]=`${n} ${i}`, e.forEach((r, s)=>{
    t[`sentry.message.parameter.${s}`]=r
  }), t
}
var VXd=