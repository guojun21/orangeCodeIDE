// Module: out-build/vs/workbench/browser/parts/editor/textEditor.js
// Offset: 31147054 (bundle byte offset)
// Size: 5794 bytes

Ht(), np(), yn(), Js(), rt(), ox(), nfn(), kr(), Wt(), Pa(), Io(), sw(), od(), ss(), ns(), Iit=class extends Uqe{
  static{
    ffu=this
  }
  static{
    this.VIEW_STATE_PREFERENCE_KEY="textEditorViewState"
  }
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(e, t, ffu.VIEW_STATE_PREFERENCE_KEY, i, r, s, o, a, l, u), this.fileService=d, this._onDidChangeSelection=this._register(new Qe), this.onDidChangeSelection=this._onDidChangeSelection.event, this._onDidChangeScroll=this._register(new Qe), this.onDidChangeScroll=this._onDidChangeScroll.event, this.inputListener=this._register(new uo), this._register(this.textResourceConfigurationService.onDidChangeConfiguration(m=>this.handleConfigurationChangeEvent(m))), this._register(In.any(this.editorGroupService.onDidAddGroup, this.editorGroupService.onDidRemoveGroup)(()=>{
      const m=this.computeAriaLabel();
      this.editorContainer?.setAttribute("aria-label",m),this.updateEditorControlOptions({
        ariaLabel:m
      })
    })), this._register(this.fileService.onDidChangeFileSystemProviderCapabilities(m=>this.onDidChangeFileSystemProvider(m.scheme))), this._register(this.fileService.onDidChangeFileSystemProviderRegistrations(m=>this.onDidChangeFileSystemProvider(m.scheme)))
  }
  handleConfigurationChangeEvent(e){
    const t=this.getActiveResource();
    this.shouldHandleConfigurationChangeEvent(e, t)&&(this.isVisible()?this.updateEditorConfiguration(t):this.hasPendingConfigurationChange=!0)
  }
  shouldHandleConfigurationChangeEvent(e, t){
    return e.affectsConfiguration(t, "editor")||e.affectsConfiguration(t, "problems.visibility")
  }
  consumePendingConfigurationChangeEvent(){
    this.hasPendingConfigurationChange&&(this.updateEditorConfiguration(), this.hasPendingConfigurationChange=!1)
  }
  computeConfiguration(e){
    const t=$g(e.editor)?mh(e.editor):Object.create(null);
    return Object.assign(t, this.getConfigurationOverrides(e)), t.ariaLabel=this.computeAriaLabel(), t
  }
  computeAriaLabel(){
    return this.input?YSa(this.input, void 0, this.group, this.editorGroupService.count):_(3834, null)
  }
  onDidChangeFileSystemProvider(e){
    this.input&&this.getActiveResource()?.scheme===e&&this.updateReadonly(this.input)
  }
  onDidChangeInputCapabilities(e){
    this.input===e&&this.updateReadonly(e)
  }
  updateReadonly(e){
    this.updateEditorControlOptions({
      ...this.getReadonlyConfiguration(e.isReadonly())
    })
  }
  getReadonlyConfiguration(e){
    return{
      readOnly:!!e,readOnlyMessage:typeof e!="boolean"?e:void 0
    }
  }
  getConfigurationOverrides(e){
    return{
      overviewRulerLanes:3,lineNumbersMinChars:3,fixedOverflowWidgets:!0,...this.getReadonlyConfiguration(this.input?.isReadonly()),renderValidationDecorations:e.problems?.visibility!==!1?"on":"off"
    }
  }
  createEditor(e){
    this.editorContainer=e, this.createEditorControl(e, this.computeConfiguration(this.textResourceConfigurationService.getValue(this.getActiveResource()))), this.registerCodeEditorListeners()
  }
  registerCodeEditorListeners(){
    const e=this.getMainControl();
    e&&(this._register(e.onDidChangeModelLanguage(()=>this.updateEditorConfiguration())), this._register(e.onDidChangeModel(()=>this.updateEditorConfiguration())), this._register(e.onDidChangeCursorPosition(t=>this._onDidChangeSelection.fire({
      reason:this.toEditorPaneSelectionChangeReason(t)
    }))), this._register(e.onDidChangeModelContent(()=>this._onDidChangeSelection.fire({
      reason:3
    }))), this._register(e.onDidScrollChange(()=>this._onDidChangeScroll.fire())))
  }
  toEditorPaneSelectionChangeReason(e){
    switch(e.source){
      case"api":return 1;
      case"code.navigation":return 4;
      case"code.jump":return 5;
      default:return 2
    }
  }
  getSelection(){
    const e=this.getMainControl();
    if(e){
      const t=e.getSelection();
      if(t)return new bfu(t)
    }
  }
  async setInput(e, t, i, r){
    await super.setInput(e, t, i, r), this.inputListener.value=e.onDidChangeCapabilities(()=>this.onDidChangeInputCapabilities(e)), this.updateEditorConfiguration(), ed(this.editorContainer).setAttribute("aria-label", this.computeAriaLabel())
  }
  clearInput(){
    this.inputListener.clear(), super.clearInput()
  }
  getScrollPosition(){
    const e=this.getMainControl();
    if(!e)throw new Error("Control has not yet been initialized");
    return{
      scrollTop:e.getScrollTop()-e.getTopForLineNumber(1),scrollLeft:e.getScrollLeft()
    }
  }
  setScrollPosition(e){
    const t=this.getMainControl();
    if(!t)throw new Error("Control has not yet been initialized");
    t.setScrollTop(e.scrollTop), e.scrollLeft&&t.setScrollLeft(e.scrollLeft)
  }
  setEditorVisible(e){
    e&&this.consumePendingConfigurationChangeEvent(), super.setEditorVisible(e)
  }
  toEditorViewStateResource(e){
    return e.resource
  }
  updateEditorConfiguration(e=this.getActiveResource()){
    let t;
    if(e&&(t=this.textResourceConfigurationService.getValue(e)), !t)return;
    const i=this.computeConfiguration(t);
    let r=i;
    this.lastAppliedEditorOptions&&(r=sEc(this.lastAppliedEditorOptions, r)), Object.keys(r).length>0&&(this.lastAppliedEditorOptions=i, this.updateEditorControlOptions(r))
  }
  getActiveResource(){
    const e=this.getMainControl();
    if(e){
      const t=e.getModel();
      if(t)return t.uri
    }
    if(this.input)return this.input.resource
  }
  dispose(){
    this.lastAppliedEditorOptions=void 0, super.dispose()
  }
}, Iit=ffu=__decorate([__param(2, ea), __param(3, ln), __param(4, Hi), __param(5, uy), __param(6, bo), __param(7, yi), __param(8, da), __param(9, Gr)], Iit), bfu=class Mcd{
  static{
    this.TEXT_EDITOR_SELECTION_THRESHOLD=10
  }
  constructor(e){
    this.textSelection=e
  }
  compare(e){
    if(!(e instanceof Mcd))return 3;
    const t=Math.min(this.textSelection.selectionStartLineNumber, this.textSelection.positionLineNumber), i=Math.min(e.textSelection.selectionStartLineNumber, e.textSelection.positionLineNumber);
    return t===i?1:Math.abs(t-i)<Mcd.TEXT_EDITOR_SELECTION_THRESHOLD?2:3
  }
  restore(e){
    return{
      ...e,selection:this.textSelection,selectionRevealType:1
    }
  }
  getSelection(){
    return this.textSelection
  }
  log(){
    return`line: ${this.textSelection.startLineNumber}-${this.textSelection.endLineNumber}, col:  ${this.textSelection.startColumn}-${this.textSelection.endColumn}`
  }
}
}
}), vfu, $qe, Afu=