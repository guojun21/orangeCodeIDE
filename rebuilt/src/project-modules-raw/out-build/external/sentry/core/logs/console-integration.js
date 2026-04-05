// Module: out-build/external/sentry/core/logs/console-integration.js
// Offset: 153885 (bundle byte offset)
// Size: 1140 bytes

aT(), ZT(), UNo(), sW(), y6(), US(), i2n(), VXd(), KXd="ConsoleLogs", zwc={
  [w1]:"auto.log.console"
}, YXd=((n={
  
})=>{
  const e=n.levels||F2t;
  return{
    name:KXd, setup(t){
      const{
        enableLogs:i,normalizeDepth:r=3,normalizeMaxBreadth:s=1e3
      }
      =t.getOptions();
      if(!i){
        Lg&&Jo.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
        return
      }
      sFt(({
        args:o,level:a
      })=>{
        if(sm()!==t||!e.includes(a))return;
        const l=o[0],u=o.slice(1);
        if(a==="assert"){
          if(!l){
            const g=u.length>0?`Assertion failed: ${jwc(u,r,s)}`:"Assertion failed";
            X2t({
              level:"error",message:g,attributes:zwc
            })
          }
          return
        }
        const d=a==="log",m=o.length>1&&typeof o[0]=="string"&&!OYv(o[0]),p={
          ...zwc,...m?UYv(l,u):{
            
          }
        };
        X2t({
          level:d?"info":a,message:jwc(o,r,s),severityNumber:d?10:void 0,attributes:p
        })
      })
    }
  }
}), eMo=YXd
}
}), Vwc={
  
};
WN(Vwc, {
  count:()=>qYv, distribution:()=>JYv, gauge:()=>HYv
});
function Kwc(n, e, t, i){
  CYd({
    type:n, name:e, value:t, unit:i?.unit, attributes:i?.attributes
  }, {
    scope:i?.scope
  })
}
function qYv(n, e=1, t){
  Kwc("counter", n, e, t)
}
function HYv(n, e, t){
  Kwc("gauge", n, e, t)
}
function JYv(n, e, t){
  Kwc("distribution", n, e, t)
}
var GYv=