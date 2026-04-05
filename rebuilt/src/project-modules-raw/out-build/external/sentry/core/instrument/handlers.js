// Module: out-build/external/sentry/core/instrument/handlers.js
// Offset: 15595 (bundle byte offset)
// Size: 363 bytes

ZT(), US(), bpt(), vpt={
  
}, IAc={
  
}
}
});
function jLo(n){
  const e="error";
  K3e(e, n), Y3e(e, djv)
}
function djv(){
  zLo=Ev.onerror, Ev.onerror=function(n, e, t, i, r){
    return ede("error", {
      column:i,error:r,line:t,msg:n,url:e
    }), zLo?zLo.apply(this, arguments):!1
  }, Ev.onerror.__SENTRY_INSTRUMENTED__=!0
}
var zLo, eKd=