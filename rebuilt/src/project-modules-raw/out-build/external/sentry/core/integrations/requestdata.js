// Module: out-build/external/sentry/core/integrations/requestdata.js
// Offset: 117803 (bundle byte offset)
// Size: 684 bytes

sW(), MVv(), $Vv(), CZd={
  cookies:!0, data:!0, headers:!0, query_string:!0, url:!0
}, SZd="RequestData", kZd=((n={
  
})=>{
  const e={
    ...CZd, ...n.include
  };
  return{
    name:SZd, processEvent(t, i, r){
      const{
        sdkProcessingMetadata:s={
          
        }
      }
      =t,{
        normalizedRequest:o,ipAddress:a
      }
      =s,l={
        ...e,ip:e.ip??r.getOptions().sendDefaultPii
      };
      return o&&qVv(t,o,{
        ipAddress:a
      },l),t
    }
  }
}), EZd=kZd
}
});
function sFt(n){
  const e="console";
  K3e(e, n), Y3e(e, GVv)
}
function GVv(){
  "console"in Ev&&F2t.forEach(function(n){
    n in Ev.console&&LB(Ev.console, n, function(e){
      return O2t[n]=e,function(...t){
        ede("console",{
          args:t,level:n
        }),O2t[n]?.apply(Ev.console,t)
      }
    })
  })
}
var UNo=