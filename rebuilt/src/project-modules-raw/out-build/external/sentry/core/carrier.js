// Module: out-build/external/sentry/core/carrier.js
// Offset: 13094 (bundle byte offset)
// Size: 654 bytes

wAc(), c3()
}
});
function dBe(n){
  if(!("console"in Ev))return n();
  const e=Ev.console, t={
    
  }, i=Object.keys(O2t);
  i.forEach(r=>{
    const s=O2t[r];
    t[r]=e[r], e[r]=s
  });
  try{
    return n()
  }
  finally{
    i.forEach(r=>{
      e[r]=t[r]
    })
  }
}
function sjv(){
  CAc().enabled=!0
}
function ojv(){
  CAc().enabled=!1
}
function ZVd(){
  return CAc().enabled
}
function ajv(...n){
  _Ac("log", ...n)
}
function cjv(...n){
  _Ac("warn", ...n)
}
function ljv(...n){
  _Ac("error", ...n)
}
function _Ac(n, ...e){
  Lg&&ZVd()&&dBe(()=>{
    Ev.console[n](`${XVd}[${n}]:`, ...e)
  })
}
function CAc(){
  return Lg?fpt("loggerSettings", ()=>({
    enabled:!1
  })):{
    enabled:!1
  }
}
var F2t, XVd, O2t, Jo, US=