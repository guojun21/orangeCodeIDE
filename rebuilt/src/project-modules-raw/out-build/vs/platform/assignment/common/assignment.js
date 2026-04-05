// Module: out-build/vs/platform/assignment/common/assignment.js
// Offset: 30908432 (bundle byte offset)
// Size: 1822 bytes

_r(), Oxf="VSCode.ABExp.FeatureData", Uxf=0, (function(n){
  n.Insiders="insider", n.Public="public", n.Exploration="exploration"
})(B_i||(B_i={
  
})), (function(n){
  n.Market="X-MSEdge-Market", n.CorpNet="X-FD-Corpnet", n.ApplicationVersion="X-VSCode-AppVersion", n.Build="X-VSCode-Build", n.ClientId="X-MSEdge-ClientId", n.ExtensionName="X-VSCode-ExtensionName", n.ExtensionVersion="X-VSCode-ExtensionVersion", n.Language="X-VSCode-Language", n.TargetPopulation="X-VSCode-TargetPopulation"
})(PMe||(PMe={
  
})), $xf=class PQb{
  constructor(e, t, i, r){
    this.version=e, this.appName=t, this.machineId=i, this.targetPopulation=r
  }
  static trimVersionSuffix(e){
    const t=/\-[a-zA-Z0-9]+$/;
    return e.split(t)[0]
  }
  getFilterValue(e){
    switch(e){
      case PMe.ApplicationVersion:return PQb.trimVersionSuffix(this.version);
      case PMe.Build:return this.appName;
      case PMe.ClientId:return this.machineId;
      case PMe.Language:return yC;
      case PMe.ExtensionName:return"vscode-core";
      case PMe.ExtensionVersion:return"999999.0";
      case PMe.TargetPopulation:return this.targetPopulation;
      default:return""
    }
  }
  getFilters(){
    const e=new Map, t=Object.values(PMe);
    for(const i of t)e.set(i, this.getFilterValue(i));
    return e
  }
}
}
});
async function DQ(n, e, t){
  t===void 0&&(t=!!(globalThis._VSCODE_PRODUCT_JSON??globalThis.vscode?.context?.configuration()?.product)?.commit);
  const i=e?`${n}/${e}`:n;
  if(ACa.has(i))return ACa.get(i);
  let r;
  if(/^\w[\w\d+.-]*:\/\//.test(i))r=i;
  else{
    const l=`${f1t&&t&&!Eu?jFt:Pze}/${i}`;
    r=og.asBrowserUri(l).toString(!0)
  }
  const s=Jxf.INSTANCE.load(r);
  return ACa.set(i, s), s
}
function qxf(n, e){
  const i=!!(globalThis._VSCODE_PRODUCT_JSON??globalThis.vscode?.context?.configuration()?.product)?.commit, r=f1t&&i&&!Eu, s=`${n}/${e}`, a=`${r?jFt:Pze}/${s}`;
  return og.asBrowserUri(a).toString(!0)
}
var f1t, Hxf, b1t, Jxf, ACa, KEe=