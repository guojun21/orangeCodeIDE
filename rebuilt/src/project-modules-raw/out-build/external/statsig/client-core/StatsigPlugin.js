// Module: out-build/external/statsig/client-core/StatsigPlugin.js
// Offset: 26709233 (bundle byte offset)
// Size: 912 bytes

Ae({
  "out-build/external/statsig/client-core/StatsigPlugin.js"(){
    "use strict"
  }
});
function hnu(n, e, t, i){
  return{
    name:n, details:e, ruleID:t?.rule_id??"", __evaluation:t, value:i
  }
}
function $MA(n, e, t){
  return{
    ...hnu(n, e, t, t?.value===!0), idType:t?.id_type??null
  }
}
function X2g(n, e, t){
  const i=t?.value??{
    
  };
  return{
    ...hnu(n, e, t, i), get:mnu(n, t?.value)
  }
}
function qMA(n, e, t){
  return{
    ...X2g(n, e, t), groupName:t?.group_name??null
  }
}
function HMA(n, e, t, i){
  return{
    ...hnu(n, e, t, void 0), get:mnu(n, t?.value, i), groupName:t?.group_name??null, __value:t?.value??{
      
    }
  }
}
function JMA(n, e, t, i){
  return{
    ...n, ...e, get:mnu(n.name, t, i)
  }
}
function mnu(n, e, t){
  return(i, r)=>{
    const s=e?.[i]??null;
    return s==null?r??null:r!=null&&!QMg(s, r)?(CI.warn(`Parameter type mismatch. '${n}.${i}' was found to be type '${typeof s}' but fallback/return type is '${typeof r}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`), r??null):(t?.(i), s)
  }
}
var GMA=