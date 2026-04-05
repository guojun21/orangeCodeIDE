// Module: out-build/vs/workbench/contrib/comments/browser/commentFormActions.js
// Offset: 33170383 (bundle byte offset)
// Size: 1748 bytes

fk(), nl(), rt(), dr(), $b(), Sbn=class{
  constructor(n, e, t, i, r, s, o){
    this.keybindingService=n, this.contextKeyService=e, this.contextMenuService=t, this.container=i, this.actionHandler=r, this.maxActions=s, this.supportDropdowns=o, this._buttonElements=[], this._toDispose=new Ut, this._actions=[]
  }
  setActions(n, e=!1){
    this._toDispose.clear(), this._buttonElements.forEach(r=>r.remove()), this._buttonElements=[];
    const t=n.getActions({
      shouldForwardArgs:!0
    });
    let i=!e;
    for(const r of t){
      const[,s]=r;
      this._actions=s;
      for(const o of s){
        const a=this.supportDropdowns&&o instanceof h2?o.actions:[],l=a.length?a[0]:o;
        let u=this.keybindingService.lookupKeybinding(l.id,this.contextKeyService)?.getLabel();
        !u&&i&&(u=this.keybindingService.lookupKeybinding("editor.action.submitComment",this.contextKeyService)?.getLabel());
        const d=u?`${l.label} (${u})`:l.label,m=this.actionHandler,p=a.length?new Cbt(this.container,{
          contextMenuProvider:this.contextMenuService,actions:a,actionRunner:this._toDispose.add(new class extends jD{
            async runAction(g,f){
              return m(g)
            }
          }),secondary:!i,title:d,addPrimaryActionToDropdown:!1,...lE
        }):new pw(this.container,{
          secondary:!i,title:d,...lE
        });
        if(i=!1,this._buttonElements.push(p.element),this._toDispose.add(p),this._toDispose.add(p.onDidClick(()=>this.actionHandler(l))),p.enabled=l.enabled,p.label=l.label,this.maxActions!==void 0&&this._buttonElements.length>=this.maxActions){
          console.warn("An extension has contributed more than the allowable number of actions to a comments menu.");
          return
        }
      }
    }
  }
  triggerDefaultAction(){
    if(this._actions.length){
      const n=this._actions[0];
      if(n.enabled)return this.actionHandler(n)
    }
  }
  dispose(){
    this._toDispose.dispose()
  }
}
}
}), Wuy=