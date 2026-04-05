// Module: out-build/vs/base/browser/ui/dropdown/dropdown.js
// Offset: 2275033 (bundle byte offset)
// Size: 2798 bytes

ri(), Tb(), Dx(), O6(), mb(), nl(), yn(), NCh(), MCh=class extends jD{
  constructor(n, e){
    super(), this._onDidChangeVisibility=this._register(new Qe), this.onDidChangeVisibility=this._onDidChangeVisibility.event, this._element=Rt(n, Ct(".monaco-dropdown")), this._label=Rt(this._element, Ct(".dropdown-label"));
    let t=e.labelRenderer;
    t||(t=r=>(r.textContent=e.label||"", null));
    for(const r of[ir.CLICK, ir.MOUSE_DOWN, MA.Tap])this._register(ei(this.element, r, s=>zu.stop(s, !0)));
    for(const r of[ir.MOUSE_DOWN, MA.Tap])this._register(ei(this._label, r, s=>{
      I6(s)&&(s.detail>1||s.button!==0)||(this.visible?this.hide():this.show())
    }));
    this._register(ei(this._label, ir.KEY_DOWN, r=>{
      const s=new vh(r);
      (s.equals(3)||s.equals(10))&&(zu.stop(r,!0),this.visible?this.hide():this.show())
    }));
    const i=t(this._label);
    i&&this._register(i), this._register(E1.addTarget(this._label))
  }
  get element(){
    return this._element
  }
  get label(){
    return this._label
  }
  set tooltip(n){
    this._label&&(!this.hover&&n!==""?this.hover=this._register(q4().setupManagedHover(Sm("mouse"), this._label, n)):this.hover&&this.hover.update(n))
  }
  show(){
    this.visible||(this.visible=!0, this._onDidChangeVisibility.fire(!0))
  }
  hide(){
    this.visible&&(this.visible=!1, this._onDidChangeVisibility.fire(!1))
  }
  isVisible(){
    return!!this.visible
  }
  onEvent(n, e){
    this.hide()
  }
  dispose(){
    super.dispose(), this.hide(), this.boxContainer&&(this.boxContainer.remove(), this.boxContainer=void 0), this.contents&&(this.contents.remove(), this.contents=void 0), this._label&&(this._label.remove(), this._label=void 0)
  }
}, FCh=class extends MCh{
  constructor(n, e){
    super(n, e), this._options=e, this._actions=[], this.actions=e.actions||[]
  }
  set menuOptions(n){
    this._menuOptions=n
  }
  get menuOptions(){
    return this._menuOptions
  }
  get actions(){
    return this._options.actionProvider?this._options.actionProvider.getActions():this._actions
  }
  set actions(n){
    this._actions=n
  }
  show(){
    super.show(), this.element.classList.add("active"), this._options.contextMenuProvider.showContextMenu({
      getAnchor:()=>this.element,getActions:()=>this.actions,getActionsContext:()=>this.menuOptions?this.menuOptions.context:null,getActionViewItem:(n,e)=>this.menuOptions&&this.menuOptions.actionViewItemProvider?this.menuOptions.actionViewItemProvider(n,e):void 0,getKeyBinding:n=>this.menuOptions&&this.menuOptions.getKeyBinding?this.menuOptions.getKeyBinding(n):void 0,getMenuClassName:()=>this._options.menuClassName||"",onHide:()=>this.onHide(),actionRunner:this.menuOptions?this.menuOptions.actionRunner:void 0,anchorAlignment:this.menuOptions?this.menuOptions.anchorAlignment:0,domForShadowRoot:this._options.menuAsChild?this.element:void 0,skipTelemetry:this._options.skipTelemetry
    })
  }
  hide(){
    super.hide()
  }
  onHide(){
    this.hide(), this.element.classList.remove("active")
  }
}
}
}), VH, UCh, jde=