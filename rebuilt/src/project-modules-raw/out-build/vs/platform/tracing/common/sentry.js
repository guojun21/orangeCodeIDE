// Module: out-build/vs/platform/tracing/common/sentry.js
// Offset: 561369 (bundle byte offset)
// Size: 802 bytes

lm(), y6(), PiA(), lm(), lde(), ith(), loe(), cwc()
}
});
function kx(){
  return globalThis._CURSOR_SENTRY
}
function LiA(){
  return{
    send:function(e){
      const t=kx().buffer;
      return t.length<64&&t.push(e),Promise.resolve({
        statusCode:200
      })
    }, flush:function(e){
      return Promise.resolve(!0)
    }
  }
}
function NiA(){
  return{
    send:function(n){
      if(!kx().enabled){
        const e=nah(n)?.[0],t=e?.tags?.force_upload==="forced",i=kx().allowCrashReportsWhenDisabled,r=e?.level==="fatal";
        if(!t&&!(i&&r))return Promise.resolve({
          statusCode:200
        })
      }
      return kx().transport.send(n)
    }, flush:function(n){
      return kx().transport.flush(n)
    }
  }
}
function MiA(){
  return{
    defaultIntegrations:[], dsn:Ube.developmentTooling?sah:rah, maxBreadcrumbs:200, parentSpanIsAlwaysRootSpan:!1, transport:NiA
  }
}
var rah, sah, Cde=