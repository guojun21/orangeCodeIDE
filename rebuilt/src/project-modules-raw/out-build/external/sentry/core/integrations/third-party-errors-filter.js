// Module: out-build/external/sentry/core/integrations/third-party-errors-filter.js
// Offset: 131051 (bundle byte offset)
// Size: 1237 bytes

sW(), _Zd(), lde(), bpt(), QNo=n=>({
  name:"ThirdPartyErrorsFilter", setup(e){
    e.on("beforeEnvelope", t=>{
      bBe(t,(i,r)=>{
        if(r==="event"){
          const s=Array.isArray(i)?i[1]:void 0;
          s&&(wZd(s),i[1]=s)
        }
      })
    }), e.on("applyFrameMetadata", t=>{
      if(t.type)return;
      const i=e.getOptions().stackParser;
      yZd(i,t)
    })
  }, processEvent(e){
    const t=fKv(e);
    if(t){
      const i=n.behaviour==="drop-error-if-contains-third-party-frames"||n.behaviour==="apply-tag-if-contains-third-party-frames"?"some":"every";
      if(t[i](s=>!s.some(o=>n.filterKeys.includes(o)))){
        if(n.behaviour==="drop-error-if-contains-third-party-frames"||n.behaviour==="drop-error-if-exclusively-contains-third-party-frames")return null;
        e.tags={
          ...e.tags,third_party_code:!0
        }
      }
    }
    return e
  }
}), Iwc="_sentryBundlerPluginAppKey:"
}
});
function vKv(n, e){
  const t={
    category:"console", data:{
      arguments:e,logger:"console"
    }, level:oFt(n), message:nXd(e)
  };
  if(n==="assert")if(e[0]===!1){
    const i=e.slice(1);
    t.message=i.length>0?`Assertion failed: ${nXd(i)}`:"Assertion failed", t.data.arguments=i
  }
  else return;
  w6(t, {
    input:e, level:n
  })
}
function nXd(n){
  return"util"in Ev&&typeof Ev.util.format=="function"?Ev.util.format(...n):Xje(n, " ")
}
var iXd, rXd, AKv=