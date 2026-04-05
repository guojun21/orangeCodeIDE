// Module: out-build/vs/platform/actions/browser/buttonbar.js
// Offset: 30818503 (bundle byte offset)
// Size: 3051 bytes

fk(), mb(), nl(), qi(), yn(), rt(), Jr(), Ht(), dg(), dr(), si(), pl(), Id(), ka(), Pa(), W0a=class extends D9e{
  constructor(e, t, i, r, s, o){
    super(e), this._options=t, this._contextMenuService=i, this._keybindingService=r, this._hoverService=o, this._store=new Ut, this._updateStore=new Ut, this._onDidChange=new Qe, this.onDidChange=this._onDidChange.event, this._actionRunner=this._store.add(new jD), t?.telemetrySource&&this._actionRunner.onDidRun(a=>{
      s.publicLog2("workbenchActionExecuted",{
        id:a.action.id,from:t.telemetrySource
      })
    }, void 0, this._store)
  }
  dispose(){
    this._onDidChange.dispose(), this._updateStore.dispose(), this._store.dispose(), super.dispose()
  }
  update(e, t){
    const i=this._options?.buttonConfigProvider??(()=>({
      showLabel:!0
    }));
    this._updateStore.clear(), this.clear();
    const r=this._updateStore.add(F6());
    for(let s=0;
    s<e.length;
    s++){
      const o=s>0,a=e[s];
      let l,u;
      if(a instanceof KP&&a.actions.length>0){
        const[g,...f]=a.actions;
        l=g,u=this.addButtonWithDropdown({
          secondary:i(l,s)?.isSecondary??o,actionRunner:this._actionRunner,actions:f,contextMenuProvider:this._contextMenuService,ariaLabel:l.label,supportIcons:!0
        })
      }
      else l=a,u=this.addButton({
        secondary:i(l,s)?.isSecondary??o,ariaLabel:l.label,supportIcons:!0
      });
      u.enabled=l.enabled,u.checked=l.checked??!1,u.element.classList.add("default-colors");
      const d=i(l,s)?.showLabel??!0;
      d?u.label=l.label:u.element.classList.add("monaco-text-button"),i(l,s)?.showIcon&&(l instanceof Ub&&Qt.isThemeIcon(l.item.icon)?d?u.label=`$(${l.item.icon.id}) ${l.label}`:u.icon=l.item.icon:l.class&&u.element.classList.add(...l.class.split(" ")));
      const m=this._keybindingService.lookupKeybinding(l.id);
      let p;
      m?p=_(1780,null,l.tooltip||l.label,m.getLabel()):p=l.tooltip||l.label,this._updateStore.add(this._hoverService.setupManagedHover(r,u.element,p)),this._updateStore.add(u.onDidClick(async()=>{
        this._actionRunner.run(l)
      }))
    }
    if(t.length>0){
      const s=this.addButton({
        secondary:!0,ariaLabel:_(1781,null)
      });
      s.icon=Be.dropDownButton,s.element.classList.add("default-colors","monaco-text-button"),s.enabled=!0,this._updateStore.add(this._hoverService.setupManagedHover(r,s.element,_(1782,null))),this._updateStore.add(s.onDidClick(async()=>{
        this._contextMenuService.showContextMenu({
          getAnchor:()=>s.element,getActions:()=>t,actionRunner:this._actionRunner,onHide:()=>s.element.setAttribute("aria-expanded","false")
        }),s.element.setAttribute("aria-expanded","true")
      }))
    }
    this._onDidChange.fire(this)
  }
}, W0a=__decorate([__param(2, kc), __param(3, mo), __param(4, ea), __param(5, Kc)], W0a), f_i=class extends W0a{
  constructor(e, t, i, r, s, o, a, l, u){
    super(e, i, o, a, l, u);
    const d=r.createMenu(t, s);
    this._store.add(d);
    const m=()=>{
      this.clear();
      const p=tM(d.getActions(i?.menuOptions),i?.toolbarOptions?.primaryGroup);
      super.update(p.primary,p.secondary)
    };
    this._store.add(d.onDidChange(m)), m()
  }
  dispose(){
    super.dispose()
  }
  update(e){
    throw new Error("Use Menu or WorkbenchButtonBar")
  }
}, f_i=__decorate([__param(3, xd), __param(4, wi), __param(5, kc), __param(6, mo), __param(7, ea), __param(8, Kc)], f_i)
}
}), Mce, Q0a, hit=