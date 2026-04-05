// Module: out-build/external/sentry/core/utils/stacktrace.js
// Offset: 15017 (bundle byte offset)
// Size: 578 bytes

EAc=50, M$="?", xAc=/\(error: (.*)\)/, TAc=/captureMessage|captureException/, QLo="<anonymous>"
}
});
function K3e(n, e){
  vpt[n]=vpt[n]||[], vpt[n].push(e)
}
function ujv(){
  Object.keys(vpt).forEach(n=>{
    vpt[n]=void 0
  })
}
function Y3e(n, e){
  if(!IAc[n]){
    IAc[n]=!0;
    try{
      e()
    }
    catch(t){
      Lg&&Jo.error(`Error while instrumenting ${n}`,t)
    }
  }
}
function ede(n, e){
  const t=n&&vpt[n];
  if(t)for(const i of t)try{
    i(e)
  }
  catch(r){
    Lg&&Jo.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${fY(i)}
Error:`, r)
  }
}
var vpt, IAc, IMn=