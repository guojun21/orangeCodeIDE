// Module: out-build/vs/workbench/contrib/debugNamespace/browser/debugNamespaceService.js
// Offset: 26859613 (bundle byte offset)
// Size: 974 bytes

Wt(), rt(), Er(), jr(), Ti(), yn(), mye=xi("devConsoleService"), xga=class extends at{
  constructor(e){
    super(), this.logService=e, this._onDidRegisterFunction=this._register(new Qe), this.onDidRegisterFunction=this._onDidRegisterFunction.event, this.debugFunctions=new Map
  }
  register(e, t){
    this.debugFunctions.has(e)&&this.logService.warn(`[Debug] Function '${e}' already registered, overwriting`);
    const i=(...r)=>sc(()=>t(...r));
    this.debugFunctions.set(e, i), this._onDidRegisterFunction.fire({
      name:e,fn:i
    })
  }
  getDebugFunctions(){
    return this.debugFunctions
  }
}, xga=__decorate([__param(0, Rr)], xga), Vi(mye, xga, 1)
}
});
function sce(n){
  switch(n){
    case 0:return"sidebar";
    case 1:return"panel";
    case 2:return"auxiliarybar"
  }
}
function p2A(n, e){
  const t=n.group??oce.More, i=e.group??oce.More;
  return t!==i?t.localeCompare(i):(n.order??5)-(e.order??5)
}
var Tga, Iga, Dga, Fg, EFg, Tnu, xFg, oce, TFg, fp, Utt, P1, Ohn, IFg, jh=