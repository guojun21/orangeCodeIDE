// Module: out-build/vs/workbench/contrib/comments/browser/commentThreadAdditionalActions.js
// Offset: 33217344 (bundle byte offset)
// Size: 1704 bytes

ri(), rt(), Nwu(), ka(), pl(), yTa=class extends at{
  constructor(e, t, i, r, s, o, a){
    super(), this._commentThread=t, this._contextKeyService=i, this._commentMenus=r, this._actionRunDelegate=s, this._keybindingService=o, this._contextMenuService=a, this._container=Rt(e, Ct(".comment-additional-actions")), Rt(this._container, Ct(".section-separator")), this._buttonBar=Rt(this._container, Ct(".button-bar")), this._createAdditionalActions(this._buttonBar)
  }
  _showMenu(){
    this._container?.classList.remove("hidden")
  }
  _hideMenu(){
    this._container?.classList.add("hidden")
  }
  _enableDisableMenu(e){
    const t=e.getActions({
      shouldForwardArgs:!0
    });
    for(const i of t){
      const[,r]=i;
      for(const s of r){
        if(s.enabled){
          this._showMenu();
          return
        }
        for(const o of s.actions??[])if(o.enabled){
          this._showMenu();
          return
        }
      }
    }
    this._hideMenu()
  }
  _createAdditionalActions(e){
    const t=this._commentMenus.getCommentThreadAdditionalActions(this._contextKeyService);
    this._register(t), this._register(t.onDidChange(()=>{
      this._commentFormActions.setActions(t,!0),this._enableDisableMenu(t)
    })), this._commentFormActions=new Sbn(this._keybindingService, this._contextKeyService, this._contextMenuService, e, async i=>{
      this._actionRunDelegate?.(),i.run({
        thread:this._commentThread,$mid:8
      })
    }, 4, !0), this._register(this._commentFormActions), this._commentFormActions.setActions(t, !0), this._enableDisableMenu(t)
  }
}, yTa=__decorate([__param(5, mo), __param(6, kc)], yTa)
}
});
function v8f(n, e, t){
  const i=n!==void 0?t.get(n):void 0;
  return i!==void 0?e.getColor(i):void 0
}
function Xuy(n, e){
  return v8f(n, e, y8f)
}
function edy(n, e){
  return v8f(n, e, w8f)
}
var wTa, _Ta, A8f, CTa, tdy, ndy, y8f, w8f, Wwu, Qwu, jwu, zwu=