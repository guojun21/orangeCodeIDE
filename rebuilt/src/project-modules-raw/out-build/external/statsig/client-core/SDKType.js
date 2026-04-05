// Module: out-build/external/statsig/client-core/SDKType.js
// Offset: 26690554 (bundle byte offset)
// Size: 1007 bytes

Xtu={
  
}, Gbi={
  _get:n=>(Xtu[n]??"js-mono")+(iga??""), _setClientType(n, e){
    Xtu[n]=e
  }, _setBindingType(n){
    (!iga||iga==="-react")&&(iga="-"+n)
  }
}
}
});
function _2g(n){
  return n instanceof Error?n:typeof n=="string"?new Error(n):new Error("An unknown error occurred.")
}
function oMA(n){
  try{
    return JSON.stringify(n)
  }
  catch{
    return tnu
  }
}
function aMA(n){
  const e=new Set;
  let t=Object.getPrototypeOf(n);
  for(;
  t&&t!==Object.prototype;
  )Object.getOwnPropertyNames(t).filter(i=>typeof t?.[i]=="function").forEach(i=>e.add(i)), t=Object.getPrototypeOf(t);
  return Array.from(e)
}
function cMA(n){
  if(!n)return{
    
  };
  const e={
    
  };
  return Object.entries(n).forEach(([t, i])=>{
    switch(typeof i){
      case"number":case"bigint":case"boolean":e[String(t)]=i;
      break;
      case"string":i.length<50?e[String(t)]=i:e[String(t)]="set";
      break;
      case"object":t==="environment"?e.environment=i:t==="networkConfig"?e.networkConfig=i:e[String(t)]=i!=null?"set":"unset";
      break;
      default:
    }
  }), e
}
var C2g, tnu, S2g, k2g=