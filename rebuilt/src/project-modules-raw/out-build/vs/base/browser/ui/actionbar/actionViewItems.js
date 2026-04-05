// Module: out-build/vs/base/browser/ui/actionbar/actionViewItems.js
// Offset: 2114965 (bundle byte offset)
// Size: 6427 bytes

Ay(), dz(), ri(), Dx(), mb(), ubt(), nl(), rt(), _r(), Js(), S0h(), Ht(), O6(), w3=class extends at{
  get action(){
    return this._action
  }
  constructor(n, e, t={
    
  }){
    super(), this.options=t, this._context=n||this, this._action=e, e instanceof Hs&&this._register(e.onDidChange(i=>{
      this.element&&this.handleActionChangeEvent(i)
    }))
  }
  handleActionChangeEvent(n){
    n.enabled!==void 0&&this.updateEnabled(), n.checked!==void 0&&this.updateChecked(), n.class!==void 0&&this.updateClass(), n.label!==void 0&&(this.updateLabel(), this.updateTooltip()), n.tooltip!==void 0&&this.updateTooltip()
  }
  get actionRunner(){
    return this._actionRunner||(this._actionRunner=this._register(new jD)), this._actionRunner
  }
  set actionRunner(n){
    this._actionRunner=n
  }
  isEnabled(){
    return this._action.enabled
  }
  setActionContext(n){
    this._context=n
  }
  render(n){
    const e=this.element=n;
    this._register(E1.addTarget(n));
    const t=this.options&&this.options.draggable;
    t&&(n.draggable=!0, u3&&this._register(ei(n, ir.DRAG_START, i=>i.dataTransfer?.setData(fT.TEXT, this._action.label)))), this._register(ei(e, MA.Tap, i=>this.onClick(i, !0))), this._register(ei(e, ir.MOUSE_DOWN, i=>{
      t||zu.stop(i,!0),this._action.enabled&&i.button===0&&e.classList.add("active")
    })), Fs&&this._register(ei(e, ir.CONTEXT_MENU, i=>{
      i.button===0&&i.ctrlKey===!0&&this.onClick(i)
    })), this._register(ei(e, ir.CLICK, i=>{
      zu.stop(i,!0),this.options&&this.options.isMenu||this.onClick(i)
    })), this._register(ei(e, ir.DBLCLICK, i=>{
      zu.stop(i,!0)
    })), [ir.MOUSE_UP, ir.MOUSE_OUT].forEach(i=>{
      this._register(ei(e,i,r=>{
        zu.stop(r),e.classList.remove("active")
      }))
    })
  }
  onClick(n, e=!1){
    zu.stop(n, !0);
    const t=gA(this._context)?this.options?.useEventAsContext?n:{
      preserveFocus:e
    }
    :this._context;
    this.actionRunner.run(this._action, t)
  }
  focus(){
    this.element&&(this.element.tabIndex=0, this.element.focus(), this.element.classList.add("focused"))
  }
  isFocused(){
    return!!this.element?.classList.contains("focused")
  }
  blur(){
    this.element&&(this.element.blur(), this.element.tabIndex=-1, this.element.classList.remove("focused"))
  }
  setFocusable(n){
    this.element&&(this.element.tabIndex=n?0:-1)
  }
  get trapsArrowNavigation(){
    return!1
  }
  updateEnabled(){
    
  }
  updateLabel(){
    
  }
  getClass(){
    return this.action.class
  }
  getTooltip(){
    return this.action.tooltip
  }
  updateTooltip(){
    if(!this.element)return;
    const n=this.getTooltip()??"";
    if(this.updateAriaLabel(), this.options.hoverDelegate?.showNativeHover)this.element.title=n;
    else if(!this.customHover&&n!==""){
      const e=this.options.hoverDelegate??Sm("element");
      this.customHover=this._store.add(q4().setupManagedHover(e,this.element,n))
    }
    else this.customHover&&this.customHover.update(n)
  }
  updateAriaLabel(){
    if(this.element){
      const n=this.getTooltip()??"";
      this.element.setAttribute("aria-label",n)
    }
  }
  updateClass(){
    
  }
  updateChecked(){
    
  }
  dispose(){
    this.element&&(this.element.remove(), this.element=void 0), this._context=void 0, super.dispose()
  }
}, aI=class extends w3{
  constructor(n, e, t){
    super(n, e, t), this.options=t, this.options.icon=t.icon!==void 0?t.icon:!1, this.options.label=t.label!==void 0?t.label:!0, this.cssClass=""
  }
  render(n){
    super.render(n), Kd(this.element);
    const e=document.createElement("a");
    if(e.classList.add("action-label"), e.setAttribute("role", this.getDefaultAriaRole()), this.label=e, this.element.appendChild(e), this.options.label&&this.options.keybinding&&!this.options.keybindingNotRenderedWithLabel){
      const t=document.createElement("span");
      t.classList.add("keybinding"),t.textContent=this.options.keybinding,this.element.appendChild(t)
    }
    this.updateClass(), this.updateLabel(), this.updateTooltip(), this.updateEnabled(), this.updateChecked()
  }
  getDefaultAriaRole(){
    return this._action.id===id.ID?"presentation":this.options.isMenu?"menuitem":this.options.isTabList?"tab":"button"
  }
  focus(){
    this.label&&(this.label.tabIndex=0, this.label.focus())
  }
  isFocused(){
    return!!this.label&&this.label?.tabIndex===0
  }
  blur(){
    this.label&&(this.label.tabIndex=-1)
  }
  setFocusable(n){
    this.label&&(this.label.tabIndex=n?0:-1)
  }
  updateLabel(){
    this.options.label&&this.label&&(this.label.textContent=this.action.label)
  }
  getTooltip(){
    let n=null;
    return this.action.tooltip?n=this.action.tooltip:this.action.label&&(n=this.action.label, this.options.keybinding&&(n=_(0, null, n, this.options.keybinding))), n??void 0
  }
  updateClass(){
    this.cssClass&&this.label&&this.label.classList.remove(...this.cssClass.split(" ")), this.options.icon?(this.cssClass=this.getClass(), this.label&&(this.label.classList.add("codicon"), this.cssClass&&this.label.classList.add(...this.cssClass.split(" "))), this.updateEnabled()):this.label?.classList.remove("codicon")
  }
  updateEnabled(){
    this.action.enabled?(this.label&&(this.label.removeAttribute("aria-disabled"), this.label.classList.remove("disabled")), this.element?.classList.remove("disabled")):(this.label&&(this.label.setAttribute("aria-disabled", "true"), this.label.classList.add("disabled")), this.element?.classList.add("disabled"))
  }
  updateAriaLabel(){
    if(this.label){
      const n=this.getTooltip()??"";
      this.label.setAttribute("aria-label",n)
    }
  }
  updateChecked(){
    this.label&&(this.action.checked!==void 0?(this.label.classList.toggle("checked", this.action.checked), this.options.isTabList?this.label.setAttribute("aria-selected", this.action.checked?"true":"false"):(this.label.setAttribute("aria-checked", this.action.checked?"true":"false"), this.label.setAttribute("role", "checkbox"))):(this.label.classList.remove("checked"), this.label.removeAttribute(this.options.isTabList?"aria-selected":"aria-checked"), this.label.setAttribute("role", this.getDefaultAriaRole())))
  }
}, v3n=class extends w3{
  constructor(n, e, t, i, r, s, o){
    super(n, e), this.selectBox=new k9e(t, i, r, s, o), this.selectBox.setFocusable(!1), this._register(this.selectBox), this.registerListeners()
  }
  setOptions(n, e){
    this.selectBox.setOptions(n, e)
  }
  select(n){
    this.selectBox.select(n)
  }
  registerListeners(){
    this._register(this.selectBox.onDidSelect(n=>this.runAction(n.selected, n.index)))
  }
  runAction(n, e){
    this.actionRunner.run(this._action, this.getActionContext(n, e))
  }
  getActionContext(n, e){
    return n
  }
  setFocusable(n){
    this.selectBox.setFocusable(n)
  }
  focus(){
    this.selectBox?.focus()
  }
  blur(){
    this.selectBox?.blur()
  }
  render(n){
    this.selectBox.render(n)
  }
}
}
});
function jH(n){
  if(!n.length)return n;
  let e=-1;
  for(let i=0;
  i<n.length;
  i++)if(n[i].id!==id.ID){
    e=i;
    break
  }
  if(e===-1)return[];
  n=n.slice(e);
  for(let i=n.length-1;
  i>=0&&n[i].id===id.ID;
  i--)n.splice(i, 1);
  let t=!1;
  for(let i=n.length-1;
  i>=0;
  i--){
    const r=n[i].id===id.ID;
    r&&!t?n.splice(i, 1):r?r&&(t=!1):t=!0
  }
  return n
}
var k0h, Gf, Ov=