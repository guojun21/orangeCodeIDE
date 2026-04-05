// Module: out-build/vs/workbench/common/editor/editorInput.js
// Offset: 28021213 (bundle byte offset)
// Size: 1537 bytes

yn(), Nu(), Yr(), XS=class extends HWl{
  constructor(){
    super(...arguments), this._onDidChangeDirty=this._register(new Qe), this._onDidChangeLabel=this._register(new Qe), this._onDidChangeCapabilities=this._register(new Qe), this._onWillDispose=this._register(new Qe), this.onDidChangeDirty=this._onDidChangeDirty.event, this.onDidChangeLabel=this._onDidChangeLabel.event, this.onDidChangeCapabilities=this._onDidChangeCapabilities.event, this.onWillDispose=this._onWillDispose.event
  }
  get editorId(){
    
  }
  get capabilities(){
    return 2
  }
  hasCapability(n){
    return n===0?this.capabilities===0:(this.capabilities&n)!==0
  }
  isReadonly(){
    return this.hasCapability(2)
  }
  getName(){
    return`Editor ${this.typeId}`
  }
  getDescription(n){
    
  }
  getTitle(n){
    return this.getName()
  }
  getLabelExtraClasses(){
    return[]
  }
  getAriaLabel(){
    return this.getTitle(0)
  }
  getIcon(){
    
  }
  getTelemetryDescriptor(){
    return{
      typeId:this.typeId
    }
  }
  isDirty(){
    return!1
  }
  isModified(){
    return this.isDirty()
  }
  isSaving(){
    return!1
  }
  async resolve(){
    return null
  }
  async save(n, e){
    return this
  }
  async saveAs(n, e){
    return this
  }
  async revert(n, e){
    
  }
  async rename(n, e){
    
  }
  copy(){
    return this
  }
  canMove(n, e){
    return!0
  }
  matches(n){
    if(D_(n))return this===n;
    const e=n.options?.override;
    return this.editorId!==e&&e!==void 0&&this.editorId!==void 0?!1:Zc(this.resource, gp.getCanonicalUri(n))
  }
  prefersEditorPane(n){
    return n.at(0)
  }
  toUntyped(n){
    
  }
  isDisposed(){
    return this._store.isDisposed
  }
  dispose(){
    this.isDisposed()||this._onWillDispose.fire(), super.dispose()
  }
}
}
}), kEe, IAi, iYg, rYg, IC, qba, N1=