// Module: out-build/vs/base/browser/ui/dropdown/dropdownActionViewItem.js
// Offset: 2277831 (bundle byte offset)
// Size: 3816 bytes

Ht(), nl(), qi(), yn(), Jr(), ri(), Tb(), Rx(), O6(), mb(), NCh(), OCh(), VH=class extends w3{
  constructor(n, e, t, i=Object.create(null)){
    super(null, n, i), this.actionItem=null, this._onDidChangeVisibility=this._register(new Qe), this.onDidChangeVisibility=this._onDidChangeVisibility.event, this.menuActionsOrProvider=e, this.contextMenuProvider=t, this.options=i, this.options.actionRunner&&(this.actionRunner=this.options.actionRunner)
  }
  render(n){
    this.actionItem=n;
    const e=r=>(this.element=Rt(r, Ct("a.action-label")), this.renderLabel(this.element)), t=Array.isArray(this.menuActionsOrProvider), i={
      contextMenuProvider:this.contextMenuProvider,labelRenderer:e,menuAsChild:this.options.menuAsChild,actions:t?this.menuActionsOrProvider:void 0,actionProvider:t?void 0:this.menuActionsOrProvider,skipTelemetry:this.options.skipTelemetry
    };
    if(this.dropdownMenu=this._register(new FCh(n, i)), this._register(this.dropdownMenu.onDidChangeVisibility(r=>{
      this.element?.setAttribute("aria-expanded",`${r}`),this._onDidChangeVisibility.fire(r)
    })), this.dropdownMenu.menuOptions={
      actionViewItemProvider:this.options.actionViewItemProvider,actionRunner:this.actionRunner,getKeyBinding:this.options.keybindingProvider,context:this._context
    }, this.options.anchorAlignmentProvider){
      const r=this;
      this.dropdownMenu.menuOptions={
        ...this.dropdownMenu.menuOptions,get anchorAlignment(){
          return r.options.anchorAlignmentProvider()
        }
      }
    }
    this.updateTooltip(), this.updateEnabled()
  }
  renderLabel(n){
    let e=[];
    return typeof this.options.classNames=="string"?e=this.options.classNames.split(/\s+/g).filter(t=>!!t):this.options.classNames&&(e=this.options.classNames), e.find(t=>t==="icon")||e.push("codicon"), n.classList.add(...e), this._action.label&&this._register(q4().setupManagedHover(this.options.hoverDelegate??Sm("mouse"), n, this._action.label)), null
  }
  setAriaLabelAttributes(n){
    n.setAttribute("role", "button"), n.setAttribute("aria-haspopup", "true"), n.setAttribute("aria-expanded", "false"), n.ariaLabel=this._action.label||""
  }
  getTooltip(){
    let n=null;
    return this.action.tooltip?n=this.action.tooltip:this.action.label&&(n=this.action.label), n??void 0
  }
  setActionContext(n){
    super.setActionContext(n), this.dropdownMenu&&(this.dropdownMenu.menuOptions?this.dropdownMenu.menuOptions.context=n:this.dropdownMenu.menuOptions={
      context:n
    })
  }
  show(){
    this.dropdownMenu?.show()
  }
  updateEnabled(){
    const n=!this.action.enabled;
    this.actionItem?.classList.toggle("disabled", n), this.element?.classList.toggle("disabled", n)
  }
}, UCh=class extends aI{
  constructor(n, e, t, i){
    super(n, e, t), this.contextMenuProvider=i
  }
  render(n){
    if(super.render(n), this.element){
      this.element.classList.add("action-dropdown-item");
      const e={
        getActions:()=>{
          const r=this.options.menuActionsOrProvider;
          return Array.isArray(r)?r:r.getActions()
        }
      },t=this.options.menuActionClassNames||[],i=kl("div.action-dropdown-item-separator",[kl("div",{
        
      })]).root;
      i.classList.toggle("prominent",t.includes("prominent")),Rt(this.element,i),this.dropdownMenuActionViewItem=this._register(new VH(this._register(new Hs("dropdownAction",_(8,null))),e,this.contextMenuProvider,{
        classNames:["dropdown",...Qt.asClassNameArray(Be.dropDownButton),...t],hoverDelegate:this.options.hoverDelegate
      })),this.dropdownMenuActionViewItem.render(this.element),this._register(ei(this.element,ir.KEY_DOWN,r=>{
        if(e.getActions().length===0)return;
        const s=new vh(r);
        let o=!1;
        this.dropdownMenuActionViewItem?.isFocused()&&s.equals(15)?(o=!0,this.dropdownMenuActionViewItem?.blur(),this.focus()):this.isFocused()&&s.equals(17)&&(o=!0,this.blur(),this.dropdownMenuActionViewItem?.focus()),o&&(s.preventDefault(),s.stopPropagation())
      }))
    }
  }
  blur(){
    super.blur(), this.dropdownMenuActionViewItem?.blur()
  }
  setFocusable(n){
    super.setFocusable(n), this.dropdownMenuActionViewItem?.setFocusable(n)
  }
}
}
}), shA=