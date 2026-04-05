// Module: out-build/vs/platform/actions/browser/dropdownWithPrimaryActionViewItem.js
// Offset: 28238799 (bundle byte offset)
// Size: 3075 bytes

ri(), Tb(), Rx(), jde(), dg(), si(), ka(), So(), Io(), pl(), zg(), x9e(), Iye=class extends w3{
  get onDidChangeDropdownVisibility(){
    return this._dropdown.onDidChangeVisibility
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p){
    super(null, e, {
      hoverDelegate:s?.hoverDelegate
    }), this._options=s, this._contextMenuProvider=o, this._container=null, this._dropdownContainer=null, this._primaryAction=new f2(e, {
      hoverDelegate:s?.hoverDelegate
    }, a, l, u, d, o, m, p), s?.actionRunner&&(this._primaryAction.actionRunner=s.actionRunner), this._dropdown=new VH(t, i, this._contextMenuProvider, {
      menuAsChild:s?.menuAsChild??!0,classNames:r?["codicon","codicon-chevron-down",r]:["codicon","codicon-chevron-down"],actionRunner:this._options?.actionRunner,keybindingProvider:this._options?.getKeyBinding??(g=>a.lookupKeybinding(g.id)),hoverDelegate:s?.hoverDelegate,skipTelemetry:s?.skipTelemetry
    })
  }
  set actionRunner(e){
    super.actionRunner=e, this._primaryAction.actionRunner=e, this._dropdown.actionRunner=e
  }
  setActionContext(e){
    super.setActionContext(e), this._primaryAction.setActionContext(e), this._dropdown.setActionContext(e)
  }
  render(e){
    this._container=e, super.render(this._container), this._container.classList.add("monaco-dropdown-with-primary");
    const t=Ct(".action-container");
    t.role="button", t.ariaDisabled=String(!this.action.enabled), this._primaryAction.render(Rt(this._container, t)), this._dropdownContainer=Ct(".dropdown-action-container"), this._dropdown.render(Rt(this._container, this._dropdownContainer)), this._register(ei(t, ir.KEY_DOWN, i=>{
      if(!this.action.enabled)return;
      const r=new vh(i);
      r.equals(17)&&(this._primaryAction.element.tabIndex=-1,this._dropdown.focus(),r.stopPropagation())
    })), this._register(ei(this._dropdownContainer, ir.KEY_DOWN, i=>{
      if(!this.action.enabled)return;
      const r=new vh(i);
      r.equals(15)&&(this._primaryAction.element.tabIndex=0,this._dropdown.setFocusable(!1),this._primaryAction.element?.focus(),r.stopPropagation())
    })), this.updateEnabled()
  }
  focus(e){
    e?this._dropdown.focus():(this._primaryAction.element.tabIndex=0, this._primaryAction.element.focus())
  }
  blur(){
    this._primaryAction.element.tabIndex=-1, this._dropdown.blur(), this._container.blur()
  }
  setFocusable(e){
    e?this._primaryAction.element.tabIndex=0:(this._primaryAction.element.tabIndex=-1, this._dropdown.setFocusable(!1))
  }
  updateEnabled(){
    const e=!this.action.enabled;
    this.element?.classList.toggle("disabled", e)
  }
  update(e, t, i){
    this._dropdown.dispose(), this._dropdown=new VH(e, t, this._contextMenuProvider, {
      menuAsChild:this._options?.menuAsChild??!0,classNames:["codicon",i||"codicon-chevron-down"],actionRunner:this._options?.actionRunner,hoverDelegate:this._options?.hoverDelegate,keybindingProvider:this._options?.getKeyBinding
    }), this._dropdownContainer&&this._dropdown.render(this._dropdownContainer)
  }
  showDropdown(){
    this._dropdown.show()
  }
  dispose(){
    this._primaryAction.dispose(), this._dropdown.dispose(), super.dispose()
  }
}, Iye=__decorate([__param(5, kc), __param(6, mo), __param(7, ms), __param(8, wi), __param(9, bo), __param(10, Cf), __param(11, cve)], Iye)
}
}), wd, wm=