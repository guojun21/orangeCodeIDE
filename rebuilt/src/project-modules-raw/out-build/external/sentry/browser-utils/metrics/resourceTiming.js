// Module: out-build/external/sentry/browser-utils/metrics/resourceTiming.js
// Offset: 216272 (bundle byte offset)
// Size: 980 bytes

lm(), jpt()
}
});
function enh(){
  if(B2n()&&F$()){
    const e=heA();
    return()=>{
      e()
    }
  }
  return()=>{
    
  }
}
function heA(){
  return Gth(inh)
}
function tnh(){
  const n=Object.keys(SMo);
  _2n()&&n.forEach(r=>{
    zC.addEventListener(r, e, {
      capture:!0,passive:!0
    })
  });
  function e(r){
    const s=r.target;
    if(!s)return;
    const o=vY(s), a=Math.round(r.timeStamp);
    if(zpt.set(a, o), zpt.size>50){
      const l=zpt.keys().next().value;
      l!==void 0&&zpt.delete(l)
    }
  }
  function t(r){
    const s=Math.round(r.startTime);
    let o=zpt.get(s);
    if(!o)for(let a=-5;
    a<=5;
    a++){
      const l=zpt.get(s+a);
      if(l){
        o=l;
        break
      }
    }
    return o||"<unknown>"
  }
  const i=({
    entries:r
  })=>{
    const s=HP(), o=s&&qP(s);
    r.forEach(a=>{
      if(!ieA(a))return;
      const l=a.interactionId;
      if(l==null||R2n.has(l))return;
      const u=a.target?vY(a.target):t(a);
      if(CMo.length>10){
        const d=CMo.shift();
        R2n.delete(d)
      }
      CMo.push(l),R2n.set(l,{
        span:o,elementName:u
      })
    })
  };
  fze("event", i), fze("first-input", i)
}
var CMo, R2n, zpt, nnh, SMo, inh, meA=