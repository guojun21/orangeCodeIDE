// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/onTTFB.js
// Offset: 210111 (bundle byte offset)
// Size: 1613 bytes

AY(), S2n(), pFt(), mMo(), k2n(), bMo(), Hth=[800, 1800], wMo=n=>{
  zC.document?.prerendering?x2n(()=>wMo(n)):zC.document?.readyState!=="complete"?addEventListener("load", ()=>wMo(n), !0):setTimeout(n)
}, Jth=(n, e={
  
})=>{
  const t=gFt("TTFB"), i=hFt(n, t, Hth, e.reportAllChanges);
  wMo(()=>{
    const r=mFt();
    r&&(t.value=Math.max(r.responseStart-Wpt(), 0), t.entries=[r], i(!0))
  })
}
}
});
function F_c(n, e=!1){
  return _Mo("cls", n, ZXv, jth, e)
}
function O_c(n, e=!1){
  return _Mo("lcp", n, XXv, zth, e)
}
function YXv(n){
  return _Mo("ttfb", n, eeA, Vth)
}
function Gth(n){
  return _Mo("inp", n, teA, Kth)
}
function fze(n, e){
  return Wth(n, e), D2n[n]||(neA(n), D2n[n]=!0), Qth(n, e)
}
function I2n(n, e){
  const t=vFt[n];
  if(t?.length)for(const i of t)try{
    i(e)
  }
  catch(r){
    gze&&Jo.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${fY(i)}
Error:`, r)
  }
}
function ZXv(){
  return Ith(n=>{
    I2n("cls", {
      metric:n
    }), jth=n
  }, {
    reportAllChanges:!0
  })
}
function XXv(){
  return qth(n=>{
    I2n("lcp", {
      metric:n
    }), zth=n
  }, {
    reportAllChanges:!0
  })
}
function eeA(){
  return Jth(n=>{
    I2n("ttfb", {
      metric:n
    }), Vth=n
  })
}
function teA(){
  return Oth(n=>{
    I2n("inp", {
      metric:n
    }), Kth=n
  })
}
function _Mo(n, e, t, i, r=!1){
  Wth(n, e);
  let s;
  return D2n[n]||(s=t(), D2n[n]=!0), i&&e({
    metric:i
  }), Qth(n, e, r?s:void 0)
}
function neA(n){
  const e={
    
  };
  n==="event"&&(e.durationThreshold=0), Qpt(n, t=>{
    I2n(n, {
      entries:t
    })
  }, e)
}
function Wth(n, e){
  vFt[n]=vFt[n]||[], vFt[n].push(e)
}
function Qth(n, e, t){
  return()=>{
    t&&t();
    const i=vFt[n];
    if(!i)return;
    const r=i.indexOf(e);
    r!==-1&&i.splice(r, 1)
  }
}
function ieA(n){
  return"duration"in n
}
var vFt, D2n, jth, zth, Vth, Kth, AFt=