// Module: out-build/external/sentry/core/tracing/spanstatus.js
// Offset: 35969 (bundle byte offset)
// Size: 462 bytes

GAc=0, qMn=1, nE=2
}
});
function Djv(n){
  try{
    const e=Ev.WeakRef;
    if(typeof e=="function")return new e(n)
  }
  catch{
    
  }
  return n
}
function Bjv(n){
  if(n){
    if(typeof n=="object"&&"deref"in n&&typeof n.deref=="function")try{
      return n.deref()
    }
    catch{
      return
    }
    return n
  }
}
function kKd(n, e, t){
  n&&(tW(n, QAc, Djv(t)), tW(n, WAc, e))
}
function HMn(n){
  const e=n;
  return{
    scope:e[WAc], isolationScope:Bjv(e[QAc])
  }
}
var WAc, QAc, JMn=