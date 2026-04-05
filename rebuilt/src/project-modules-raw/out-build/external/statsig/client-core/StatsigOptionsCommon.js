// Module: out-build/external/statsig/client-core/StatsigOptionsCommon.js
// Offset: 26677142 (bundle byte offset)
// Size: 642 bytes

Dtt={
  Disabled:"d", Enabled:"e", Forced:"f"
}, Utu={
  disabled:"disabled", browserOnly:"browser-only", always:"always"
}
}
});
function i2g(n){
  try{
    return n()
  }
  catch(e){
    if(e instanceof Error&&e.name==="SecurityError")return j3._setProvider(Wpa), null;
    if(e instanceof Error&&e.name==="QuotaExceededError"){
      const i=j3.getAllKeys().filter(r=>r.startsWith("statsig."));
      e.message=`${e.message}. Statsig Keys: ${i.length}`
    }
    throw e
  }
}
function Jpa(n){
  const e=j3.getItem(n);
  return JSON.parse(e??"null")
}
function Gpa(n, e){
  j3.setItem(n, JSON.stringify(e))
}
var Nhn, Wpa, $tu, Qpa, hEe, j3, Btt=