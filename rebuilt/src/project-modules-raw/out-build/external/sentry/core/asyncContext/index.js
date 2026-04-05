// Module: out-build/external/sentry/core/asyncContext/index.js
// Offset: 33642 (bundle byte offset)
// Size: 781 bytes

gbe(), Tjv()
}
});
function ry(){
  const n=lSe();
  return nze(n).getCurrentScope()
}
function MB(){
  const n=lSe();
  return nze(n).getIsolationScope()
}
function ode(){
  return fpt("globalScope", ()=>new dSe)
}
function AH(...n){
  const e=lSe(), t=nze(e);
  if(n.length===2){
    const[i, r]=n;
    return i?t.withSetScope(i, r):t.withScope(r)
  }
  return t.withScope(n[0])
}
function G2t(...n){
  const e=lSe(), t=nze(e);
  if(n.length===2){
    const[i, r]=n;
    return i?t.withSetIsolationScope(i, r):t.withIsolationScope(r)
  }
  return t.withIsolationScope(n[0])
}
function sm(){
  return ry().getClient()
}
function HAc(n){
  const e=n.getPropagationContext(), {
    traceId:t, parentSpanId:i, propagationSpanId:r
  }
  =e, s={
    trace_id:t, span_id:r||sde()
  };
  return i&&(s.parent_span_id=i), s
}
var aT=