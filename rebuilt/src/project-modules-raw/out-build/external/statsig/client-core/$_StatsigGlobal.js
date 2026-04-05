// Module: out-build/external/statsig/client-core/$_StatsigGlobal.js
// Offset: 26671069 (bundle byte offset)
// Size: 987 bytes

eie(), xtt=()=>{
  try{
    return typeof __STATSIG__<"u"?__STATSIG__:Bhn
  }
  catch{
    return Bhn
  }
}, Etu=n=>xtt()[n], JMg=n=>{
  const e=xtt();
  return n?e.instances&&e.instances[n]:(e.instances&&Object.keys(e.instances).length>1&&CI.warn("Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key."), e.firstInstance)
}, pSt="__STATSIG__", xtu=typeof window<"u"?window:{
  
}, Ttu=typeof global<"u"?global:{
  
}, Itu=typeof globalThis<"u"?globalThis:{
  
}, Bhn=xtu[pSt]??Ttu[pSt]??Itu[pSt]??{
  instance:JMg
}, xtu[pSt]=Bhn, Ttu[pSt]=Bhn, Itu[pSt]=Bhn
}
});
function Rhn(n, e, t, i){
  return{
    key:t, action:e, step:i, timestamp:Date.now(), ...n
  }
}
function eMA(n, e){
  return{
    eventName:GMg, user:n, value:null, metadata:e, time:Date.now()
  }
}
function Phn(n, e){
  const t=Obi.get(n)??[];
  t.push(e), Obi.set(n, t)
}
function Dtu(n, e){
  if(e in n)return n[e]
}
var Obi, Lpa, Npa, GMg, lye, Btu=