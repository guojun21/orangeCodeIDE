// Module: out-build/vs/editor/contrib/hover/browser/contentHoverStatusBar.js
// Offset: 4239768 (bundle byte offset)
// Size: 1339 bytes

ri(), W9t(), rt(), ka(), Id(), mb(), M5c=Ct, nUn=class extends at{
  get hasContent(){
    return this._hasContent
  }
  constructor(e, t){
    super(), this._keybindingService=e, this._hoverService=t, this.actions=[], this._hasContent=!1, this.hoverElement=M5c("div.hover-row.status-bar"), this.hoverElement.tabIndex=0, this.actionsElement=Rt(this.hoverElement, M5c("div.actions"))
  }
  addAction(e){
    const t=this._keybindingService.lookupKeybinding(e.commandId), i=t?t.getLabel():null;
    this._hasContent=!0;
    const r=this._register(y$o.render(this.actionsElement, e, i));
    return this._register(this._hoverService.setupManagedHover(Sm("element"), r.actionContainer, r.actionRenderedLabel)), this.actions.push(r), r
  }
  append(e){
    const t=Rt(this.actionsElement, e);
    return this._hasContent=!0, t
  }
}, nUn=__decorate([__param(0, mo), __param(1, Kc)], nUn)
}
});
async function oAA(n, e, t, i, r){
  const s=await Promise.resolve(n.provideHover(t, i, r)).catch(JE);
  if(!(!s||!aAA(s)))return new nGh(n, s, e)
}
function F5c(n, e, t, i, r=!1){
  const o=n.ordered(e, r).map((a, l)=>oAA(a, l, e, t, i));
  return IH.fromPromisesResolveOrder(o).coalesce()
}
function tGh(n, e, t, i, r=!1){
  return F5c(n, e, t, i, r).map(s=>s.hover).toPromise()
}
function aAA(n){
  const e=typeof n.range<"u", t=typeof n.contents<"u"&&n.contents&&n.contents.length>0;
  return e&&t
}
var nGh, iGh=