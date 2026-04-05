// Module: out-build/external/sentry/core/utils/env.js
// Offset: 196268 (bundle byte offset)
// Size: 370 bytes

Ae({
  "out-build/external/sentry/core/utils/env.js"(){
    "use strict"
  }
});
function dth(){
  return!lth()&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"
}
function k_c(n, e){
  return n.require(e)
}
function BXv(n, e=module){
  let t;
  try{
    t=k_c(e, n)
  }
  catch{
    
  }
  if(!t)try{
    const{
      cwd:i
    }
    =k_c(e, "process");
    t=k_c(e, `${i()}/node_modules/${n}`)
  }
  catch{
    
  }
  return t
}
var hth=