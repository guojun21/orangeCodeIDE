// Module: out-build/vs/workbench/browser/composite.js
// Offset: 31113890 (bundle byte offset)
// Size: 2255 bytes

nl(), JSa(), yn(), ri(), rt(), Js(), dfu=class extends tfn{
  get onDidFocus(){
    return this._onDidFocus||(this._onDidFocus=this.registerFocusTrackEvents().onDidFocus), this._onDidFocus.event
  }
  get onDidBlur(){
    return this._onDidBlur||(this._onDidBlur=this.registerFocusTrackEvents().onDidBlur), this._onDidBlur.event
  }
  hasFocus(){
    return this._hasFocus
  }
  registerFocusTrackEvents(){
    const n=ed(this.getContainer()), e=this._register(CC(n)), t=this._onDidFocus=this._register(new Qe);
    this._register(e.onDidFocus(()=>{
      this._hasFocus=!0,t.fire()
    }));
    const i=this._onDidBlur=this._register(new Qe);
    return this._register(e.onDidBlur(()=>{
      this._hasFocus=!1,i.fire()
    })), {
      onDidFocus:t,onDidBlur:i
    }
  }
  constructor(n, e, t, i){
    super(n, t, i), this.telemetryService=e, this._onTitleAreaUpdate=this._register(new Qe), this.onTitleAreaUpdate=this._onTitleAreaUpdate.event, this._hasFocus=!1, this.visible=!1
  }
  getTitle(){
    
  }
  create(n){
    this.parent=n
  }
  getContainer(){
    return this.parent
  }
  setVisible(n){
    this.visible!==!!n&&(this.visible=n)
  }
  focus(){
    
  }
  getMenuIds(){
    return[]
  }
  getActions(){
    return[]
  }
  getSecondaryActions(){
    return[]
  }
  getContextMenuActions(){
    return[]
  }
  getActionViewItem(n, e){
    
  }
  getActionsContext(){
    return null
  }
  getActionRunner(){
    return this.actionRunner||(this.actionRunner=this._register(new jD)), this.actionRunner
  }
  updateTitleArea(){
    this._onTitleAreaUpdate.fire()
  }
  isVisible(){
    return this.visible
  }
  getControl(){
    
  }
}, tDf=class{
  constructor(n, e, t, i, r, s){
    this.ctor=n, this.id=e, this.name=t, this.cssClass=i, this.order=r, this.requestedIndex=s
  }
  instantiate(n){
    return n.createInstance(this.ctor)
  }
}, nDf=class extends at{
  constructor(){
    super(...arguments), this._onDidRegister=this._register(new Qe), this.onDidRegister=this._onDidRegister.event, this._onDidDeregister=this._register(new Qe), this.onDidDeregister=this._onDidDeregister.event, this.composites=[]
  }
  registerComposite(n){
    this.compositeById(n.id)||(this.composites.push(n), this._onDidRegister.fire(n))
  }
  deregisterComposite(n){
    const e=this.compositeById(n);
    e&&(this.composites.splice(this.composites.indexOf(e), 1), this._onDidDeregister.fire(e))
  }
  getComposite(n){
    return this.compositeById(n)
  }
  getComposites(){
    return this.composites.slice(0)
  }
  compositeById(n){
    return this.composites.find(e=>e.id===n)
  }
}
}
}), fD, rDf, hB=