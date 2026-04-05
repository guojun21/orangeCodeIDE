// Module: out-build/external/sentry/core/defaultScopes.js
// Offset: 32176 (bundle byte offset)
// Size: 579 bytes

gbe(), LMn()
}
});
function J2t(){
  const n=lSe(), e=M2t(n);
  return e.stack=e.stack||new wKd(bKd(), vKd())
}
function kjv(n){
  return J2t().withScope(n)
}
function Ejv(n, e){
  const t=J2t();
  return t.withScope(()=>(t.getStackTop().scope=n, e(n)))
}
function yKd(n){
  return J2t().withScope(()=>n(J2t().getIsolationScope()))
}
function xjv(){
  return{
    withIsolationScope:yKd, withScope:kjv, withSetScope:Ejv, withSetIsolationScope:(n, e)=>yKd(e), getCurrentScope:()=>J2t().getScope(), getIsolationScope:()=>J2t().getIsolationScope()
  }
}
var wKd, Tjv=