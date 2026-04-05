// Module: out-build/vs/workbench/services/statusbar/browser/statusbar.js
// Offset: 28399996 (bundle byte offset)
// Size: 1484 bytes

Wt(), V0=xi("statusbarService"), (function(n){
  n[n.LEFT=0]="LEFT", n[n.RIGHT=1]="RIGHT"
})(Snf||(Snf={
  
})), gpn={
  id:"statusBar.entry.showTooltip", title:""
}, knf=["standard", "warning", "error", "prominent", "remote", "offline"]
}
});
function b8A(n, e, ...t){
  const i=e.get(MJ), r=i.getAuth0ClientId();
  switch(n){
    case r5.Prod:i.switchToProdServer();
    break;
    case r5.ProdEuCentral1Agent:i.switchToProdEuCentral1AgentServer();
    break;
    case r5.Staging:i.switchToStagingServer();
    break;
    case r5.StagingLocalWebsite:i.switchToStagingServerLocalWebsite();
    break;
    case r5.LocalExceptCppAndEmbeddings:i.switchToLocalExceptCppAndEmbeddingsServer();
    break;
    case r5.LocalExceptCPP:i.switchToLocalExceptCppServer();
    break;
    case r5.FullLocal:i.switchToFullLocalServer();
    break;
    case r5.LocalExceptEmbeddings:i.switchToLocalExceptEmbeddingsServer();
    break;
    case r5.DevStaging:i.switchToDevStagingServer();
    break;
    case r5.LocalExceptCppAndEmbeddingsStaging:i.switchToLocalExceptCppAndEmbeddingsServerStagingProd();
    break;
    default:{
      const s=n;
      throw new Error(`Invalid backend: ${s}`)
    }
  }
  i.reloginIfNeeded(r)
}
function v8A(){
  return Object.values(r5).map(n=>class extends rn{
    constructor(){
      super({
        id:`debug.switchTo${n}Backend`,title:{
          value:`Switch to ${n} Backend`,original:`Switch to ${n} Backend`
        },f1:!0,precondition:Ee.or(Gy,hL),keybinding:{
          primary:xnf[n],weight:200
        }
      })
    }
    run(e, ...t){
      b8A(n,e,...t)
    }
  })
}
var Iyi, MJ, xU, AAa, aMe, Unt, yAa, i5, Enf, cMe, B2, wAa, r5, xnf, Tnf, Cie=