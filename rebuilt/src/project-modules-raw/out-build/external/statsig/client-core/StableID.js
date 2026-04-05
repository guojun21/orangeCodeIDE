// Module: out-build/external/statsig/client-core/StableID.js
// Offset: 26686336 (bundle byte offset)
// Size: 784 bytes

Fpa(), eie(), fSt(), Btt(), ztu(), Fhn={
  
}, ega={
  
}, Ktu={
  
}, TNe={
  cookiesEnabled:!1, randomID:Math.random().toString(36), get:n=>{
    if(Ktu[n])return null;
    if(Fhn[n]!=null)return Fhn[n];
    let e=null;
    return e=iMA(n), e!=null?(Fhn[n]=e, Vtu(e, n), e):(e=nMA(n), e==null&&(e=Xpa()), Vtu(e, n), g2g(e, n), Fhn[n]=e, e)
  }, setOverride:(n, e)=>{
    Fhn[e]=n, Vtu(n, e), g2g(n, e)
  }, _setCookiesEnabled:(n, e)=>{
    ega[n]=e
  }, _setDisabled:(n, e)=>{
    Ktu[n]=e
  }
}
}
});
function Jbi(n, e, t){
  try{
    const i=JSON.parse(JSON.stringify(n));
    return e!=null&&e.environment!=null?i.statsigEnvironment=e.environment:t!=null&&(i.statsigEnvironment={
      tier:t
    }), i
  }
  catch{
    return CI.error("Failed to JSON.stringify user"), {
      statsigEnvironment:void 0
    }
  }
}
function nga(n){
  return n?Ptu(n):null
}
var b2g=