// Module: out-build/external/sentry/core/utils/node-stack-trace.js
// Offset: 198378 (bundle byte offset)
// Size: 554 bytes

bpt()
}
});
function MXv(n, e, t, i){
  const r=n();
  let s=!1, o=!0;
  return setInterval(()=>{
    const a=r.getTimeMs();
    s===!1&&a>e+t&&(s=!0, o&&i()), a<e+t&&(s=!1)
  }, 20), {
    poll:()=>{
      r.reset()
    }, enabled:a=>{
      o=a
    }
  }
}
function FXv(n, e, t){
  const i=e?e.replace(/^file:\/\//, ""):void 0, r=n.location.columnNumber?n.location.columnNumber+1:void 0, s=n.location.lineNumber?n.location.lineNumber+1:void 0;
  return{
    filename:i, module:t(i), function:n.functionName||M$, colno:r, lineno:s, in_app:i?E_c(i):void 0
  }
}
var OXv=