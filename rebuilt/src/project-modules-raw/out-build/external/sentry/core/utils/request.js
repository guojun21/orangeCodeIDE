// Module: out-build/external/sentry/core/utils/request.js
// Offset: 108727 (bundle byte offset)
// Size: 408 bytes

iZd=["auth", "token", "secret", "cookie", "-user", "password", "key"]
}
});
function w6(n, e){
  const t=sm(), i=MB();
  if(!t)return;
  const{
    beforeBreadcrumb:r=null, maxBreadcrumbs:s=rZd
  }
  =t.getOptions();
  if(s<=0)return;
  const a={
    timestamp:pBe(), ...n
  }, l=r?dBe(()=>r(a, e)):a;
  l!==null&&(t.emit&&t.emit("beforeAddBreadcrumb", l, e), i.addBreadcrumb(l, s))
}
var rZd, Awc=