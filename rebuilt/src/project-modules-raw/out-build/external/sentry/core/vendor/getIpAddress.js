// Module: out-build/external/sentry/core/vendor/getIpAddress.js
// Offset: 117002 (bundle byte offset)
// Size: 801 bytes

Swc=["X-Client-IP", "X-Forwarded-For", "Fly-Client-IP", "CF-Connecting-IP", "Fastly-Client-Ip", "True-Client-Ip", "X-Real-IP", "X-Cluster-Client-IP", "X-Forwarded", "Forwarded-For", "Forwarded", "X-Vercel-Forwarded-For"]
}
});
function qVv(n, e, t, i){
  if(n.request={
    ...n.request, ...HVv(e, i)
  }, i.ip){
    const r=e.headers&&FVv(e.headers)||t.ipAddress;
    r&&(n.user={
      ...n.user,ip_address:r
    })
  }
}
function HVv(n, e){
  const t={
    
  }, i={
    ...n.headers
  };
  if(e.headers&&(t.headers=i, e.cookies||delete i.cookie, e.ip||Swc.forEach(r=>{
    delete i[r]
  })), t.method=n.method, e.url&&(t.url=n.url), e.cookies){
    const r=n.cookies||(i?.cookie?NVv(i.cookie):void 0);
    t.cookies=r||{
      
    }
  }
  return e.query_string&&(t.query_string=n.query_string), e.data&&(t.data=n.data), t
}
var CZd, SZd, kZd, EZd, JVv=