// Module: out-build/vs/workbench/browser/actions.js
// Offset: 30849930 (bundle byte offset)
// Size: 1909 bytes

rt(), yn(), dr(), si(), dg(), Sxf=class extends at{
  get primaryActions(){
    return this._primaryActions
  }
  get secondaryActions(){
    return this._secondaryActions
  }
  constructor(n, e, t, i){
    super(), this.options=e, this.menuService=t, this.contextKeyService=i, this._primaryActions=[], this._secondaryActions=[], this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this.disposables=this._register(new Ut), this.menu=this._register(t.createMenu(n, i)), this._register(this.menu.onDidChange(()=>this.updateActions())), this.updateActions()
  }
  updateActions(){
    this.disposables.clear();
    const n=tM(this.menu.getActions(this.options));
    this._primaryActions=n.primary, this._secondaryActions=n.secondary, this.disposables.add(this.updateSubmenus([...this._primaryActions, ...this._secondaryActions], {
      
    })), this._onDidChange.fire()
  }
  updateSubmenus(n, e){
    const t=new Ut;
    for(const i of n)if(i instanceof h2&&!e[i.item.submenu.id]){
      const r=e[i.item.submenu.id]=t.add(this.menuService.createMenu(i.item.submenu,this.contextKeyService));
      t.add(r.onDidChange(()=>this.updateActions())),t.add(this.updateSubmenus(i.actions,e))
    }
    return t
  }
}, u1t=class extends at{
  constructor(e, t, i, r, s){
    super(), this.menuId=e, this.contextMenuId=t, this.options=i, this.contextKeyService=r, this.menuService=s, this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this.menuActions=this._register(new Sxf(e, this.options, s, r)), this._register(this.menuActions.onDidChange(()=>this._onDidChange.fire()))
  }
  getPrimaryActions(){
    return this.menuActions.primaryActions
  }
  getSecondaryActions(){
    return this.menuActions.secondaryActions
  }
  getContextMenuActions(){
    if(this.contextMenuId){
      const e=this.menuService.getMenuActions(this.contextMenuId,this.contextKeyService,this.options);
      return tM(e).secondary
    }
    return[]
  }
}, u1t=__decorate([__param(3, wi), __param(4, xd)], u1t)
}
}), Ipu, Hme, kxf, cCa, E_i=