// Module: out-build/external/statsig/client-core/SizeOf.js
// Offset: 26705678 (bundle byte offset)
// Size: 395 bytes

Ae({
  "out-build/external/statsig/client-core/SizeOf.js"(){
    "use strict"
  }
});
function MMA(n, e){
  if(Ubi())return;
  const t=xtt(), i=t.instances??{
    
  }, r=e;
  i[n]!=null&&CI.warn("Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys."), i[n]=r, t.firstInstance||(t.firstInstance=r), t.instances=i, __STATSIG__=t
}
var K2g, Y2g, FMA=