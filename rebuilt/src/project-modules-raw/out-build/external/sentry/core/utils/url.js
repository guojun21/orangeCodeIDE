// Module: out-build/external/sentry/core/utils/url.js
// Offset: 104615 (bundle byte offset)
// Size: 415 bytes

y6(), KYd="thismessage:/"
}
});
function PNo(n, e){
  const t=e?.getDsn(), i=e?.getOptions().tunnel;
  return lVv(n, t)||cVv(n, i)
}
function cVv(n, e){
  return e?YYd(n)===YYd(e):!1
}
function lVv(n, e){
  const t=nFt(n);
  return!t||tFt(t)?!1:e?t.host.includes(e.host)&&/(^|&|\?)sentry_key=/.test(t.search):!1
}
function YYd(n){
  return n[n.length-1]==="/"?n.slice(0, -1):n
}
var uVv=