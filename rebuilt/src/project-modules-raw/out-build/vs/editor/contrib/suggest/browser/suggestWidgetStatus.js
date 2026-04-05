// Module: out-build/vs/editor/contrib/suggest/browser/suggestWidgetStatus.js
// Offset: 25382503 (bundle byte offset)
// Size: 1320 bytes

ri(), Ov(), rt(), dg(), dr(), si(), Wt(), bdn=class{
  constructor(e, t, i, r, s){
    this._menuId=t, this._menuService=r, this._contextKeyService=s, this._menuDisposables=new Ut, this.element=Rt(e, Ct(".suggest-status-bar"));
    const o=(a=>a instanceof Ub?i.createInstance(zCh, a, {
      useComma:!0
    }):void 0);
    this._leftActions=new Gf(this.element, {
      actionViewItemProvider:o
    }), this._rightActions=new Gf(this.element, {
      actionViewItemProvider:o
    }), this._leftActions.domNode.classList.add("left"), this._rightActions.domNode.classList.add("right")
  }
  dispose(){
    this._menuDisposables.dispose(), this._leftActions.dispose(), this._rightActions.dispose(), this.element.remove()
  }
  show(){
    const e=this._menuService.createMenu(this._menuId, this._contextKeyService), t=()=>{
      const i=[],r=[];
      for(const[s,o]of e.getActions())s==="left"?i.push(...o):r.push(...o);
      this._leftActions.clear(),this._leftActions.push(i),this._rightActions.clear(),this._rightActions.push(r)
    };
    this._menuDisposables.add(e.onDidChange(()=>t())), this._menuDisposables.add(e)
  }
  hide(){
    this._menuDisposables.clear()
  }
}, bdn=__decorate([__param(2, ln), __param(3, xd), __param(4, wi)], bdn)
}
});
function mjl(n){
  return!!n&&!!(n.completion.documentation||n.completion.detail&&n.completion.detail!==n.completion.label)
}
var Jla, Dyg, Byg=