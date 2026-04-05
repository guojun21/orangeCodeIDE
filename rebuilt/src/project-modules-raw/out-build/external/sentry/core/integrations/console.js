// Module: out-build/external/sentry/core/integrations/console.js
// Offset: 132288 (bundle byte offset)
// Size: 1099 bytes

Awc(), aT(), UNo(), sW(), US(), kwc(), mBe(), c3(), iXd="Console", rXd=(n={
  
})=>{
  const e=new Set(n.levels||F2t);
  return{
    name:iXd, setup(t){
      sFt(({
        args:i,level:r
      })=>{
        sm()!==t||!e.has(r)||vKv(r,i)
      })
    }
  }
}
}
});
function Fpt(n){
  const t=ry().getScopeData().contexts.flags, i=t?t.values:[];
  return i.length&&(n.contexts===void 0&&(n.contexts={
    
  }), n.contexts.flags={
    values:[...i]
  }), n
}
function uze(n, e, t=Dwc){
  const i=ry().getScopeData().contexts;
  i.flags||(i.flags={
    values:[]
  });
  const r=i.flags.values;
  yKv(r, n, e, t)
}
function yKv(n, e, t, i){
  if(typeof t!="boolean")return;
  if(n.length>i){
    Lg&&Jo.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${i}`);
    return
  }
  const r=n.findIndex(s=>s.flag===e);
  r!==-1&&n.splice(r, 1), n.length===i&&n.shift(), n.push({
    flag:e, result:t
  })
}
function dze(n, e, t=Bwc){
  if(typeof e!="boolean")return;
  const i=HP();
  if(!i)return;
  const r=jA(i).data;
  if(`${l2n}${n}`in r){
    i.setAttribute(`${l2n}${n}`, e);
    return
  }
  Object.keys(r).filter(o=>o.startsWith(l2n)).length<t&&i.setAttribute(`${l2n}${n}`, e)
}
var Dwc, Bwc, l2n, Rwc=