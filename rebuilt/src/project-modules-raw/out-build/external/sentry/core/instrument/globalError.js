// Module: out-build/external/sentry/core/instrument/globalError.js
// Offset: 15958 (bundle byte offset)
// Size: 377 bytes

c3(), IMn(), zLo=null
}
});
function VLo(n){
  const e="unhandledrejection";
  K3e(e, n), Y3e(e, hjv)
}
function hjv(){
  KLo=Ev.onunhandledrejection, Ev.onunhandledrejection=function(n){
    return ede("unhandledrejection", n), KLo?KLo.apply(this, arguments):!0
  }, Ev.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0
}
var KLo, tKd=