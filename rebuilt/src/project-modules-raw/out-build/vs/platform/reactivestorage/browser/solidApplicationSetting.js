// Module: out-build/vs/platform/reactivestorage/browser/solidApplicationSetting.js
// Offset: 31373318 (bundle byte offset)
// Size: 578 bytes

Ti(), rf(), FF()
}
});
function vA(n){
  const t=wr().experimentService.getFeatureGateProperty(n);
  return Tv(t)
}
function Nbu(n, e){
  const i=wr().experimentService.getExperimentParamProperty(n, e);
  return Tv(i)
}
function rxe(n, e){
  const i=wr().experimentService.getDynamicConfigParamProperty(n, e);
  return Tv(i)
}
function Cfn(){
  const e=wr().diffDecorationVisibilityService, [t, i]=lt(e.shouldHideInlineDiffs()), r=e.onDidChangeGlobal(()=>{
    i(e.shouldHideInlineDiffs())
  });
  return Ai(()=>r.dispose()), t
}
var aC=