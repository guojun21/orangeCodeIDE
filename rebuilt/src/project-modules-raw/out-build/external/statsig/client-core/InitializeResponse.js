// Module: out-build/external/statsig/client-core/InitializeResponse.js
// Offset: 26693344 (bundle byte offset)
// Size: 265 bytes

Ae({
  "out-build/external/statsig/client-core/InitializeResponse.js"(){
    "use strict"
  }
});
function hMA(n, e, t){
  let i=`${n}|${e}`;
  if(!t)return i;
  for(const r of Object.keys(t)){
    if(x2g.has(r))return;
    E2g.has(r)?i+=`|${r}=true`:i+=`|${r}=${t[r]}`
  }
  return i
}
var vSt, E2g, x2g, T2g=