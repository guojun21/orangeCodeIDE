// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/components/modelNameDisplayLookup.js
// Offset: 34017703 (bundle byte offset)
// Size: 2452 bytes

tqf=["-high-thinking", "-xhigh-fast", "-high-fast", "-low-fast", "-thinking", "-text", "-fast", "-xhigh", "-high", "-low", "-medium"]
}
});
function lCu(n){
  const e=wr(), t=xe(()=>{
    if(!n.modelDetails?.modelName)return"";
    const l=eqf({
      preferredModels:e.aiSettingsService.getAvailableModelsReactiveWithStatus({
        specificModelField:"background-composer"
      }),fallbackModels:e.aiSettingsService.getAllPotentialModelsReactiveWithStatus()
    });
    return Hrt(n.modelDetails.modelName, l, n.baseModelId)
  }), i=xe(()=>n.modelDetails?.maxMode===!0), r=xe(()=>n.modelDetails?.modelName?e.modelConfigService.doesModelSupportThinking(n.modelDetails.modelName):!1), s=Be.brain, o={
    "font-size":"10px", "flex-shrink":0, "vertical-align":"middle", position:"relative", top:"-1px", "margin-right":"1px", display:"inline-flex", "align-items":"center", "justify-content":"center", "align-self":"center"
  }, a={
    "white-space":"nowrap", overflow:"hidden", "text-overflow":"ellipsis", "line-height":"normal", "max-width":"100%", "font-size":"12px", color:"var(--cursor-text-secondary)"
  };
  return(()=>{
    var l=rqf();
    return ge(l, K(Xe, {
      get when(){
        return r()
      },get fallback(){
        return(()=>{
          var u=dCu(),d=u.firstChild;
          return u.style.setProperty("overflow","hidden"),u.style.setProperty("text-overflow","ellipsis"),u.style.setProperty("white-space","nowrap"),u.style.setProperty("max-width","100%"),u.style.setProperty("display","flex"),u.style.setProperty("align-items","baseline"),u.style.setProperty("gap","2px"),ge(d,t),ge(u,K(Xe,{
            get when(){
              return i()&&t()!=="Auto"&&!n.hideMaxBadge
            },get children(){
              return uCu()
            }
          }),null),tn(m=>La(d,{
            ...a
          },m)),u
        })()
      },get children(){
        var u=dCu(),d=u.firstChild;
        return u.style.setProperty("overflow","hidden"),u.style.setProperty("display","inline-flex"),u.style.setProperty("gap","2px"),u.style.setProperty("align-items","baseline"),ge(u,K(Xe,{
          get when(){
            return!n.hideMaxBadge
          },get children(){
            var m=iqf();
            return La(m,o),tn(()=>Un(m,`${Qt.asClassName(s)}`)),m
          }
        }),d),ge(d,t),ge(u,K(Xe,{
          get when(){
            return Ui(()=>!!(i()&&!n.hideMaxBadge))()&&t()!=="Auto"
          },get children(){
            return uCu()
          }
        }),null),tn(m=>La(d,{
          ...a
        },m)),u
      }
    })), tn(u=>{
      var d=`model-name-display ${n.class||""}`,m={
        display:"inline-flex","align-items":"baseline",gap:"2px","min-width":0,"max-width":"100%",overflow:"hidden",...n.style
      };
      return d!==u.e&&Un(l,u.e=d),u.t=La(l,m,u.t),u
    }, {
      e:void 0,t:void 0
    }), l
  })()
}
var iqf, uCu, dCu, rqf, Jrt=