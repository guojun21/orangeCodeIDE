// Module: out-build/vs/workbench/common/editor/textEditorModel.js
// Offset: 31133092 (bundle byte offset)
// Size: 3758 bytes

Xye(), Ku(), hd(), rt(), WE(), $Me(), vr(), zg(), Ht(), qMe=class extends Uce{
  static{
    hfu=this
  }
  static{
    this.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY=600
  }
  constructor(e, t, i, r, s){
    super(), this.modelService=e, this.languageService=t, this.languageDetectionService=i, this.accessibilityService=r, this.textEditorModelHandle=void 0, this.modelDisposeListener=this._register(new uo), this.autoDetectLanguageThrottler=this._register(new L4(hfu.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY)), this._blockLanguageChangeListener=!1, this._languageChangeSource=void 0, s&&this.handleExistingModel(s)
  }
  handleExistingModel(e){
    const t=this.modelService.getModel(e);
    if(!t)throw new Error(`Document with resource ${e.toString(!0)} does not exist`);
    this.textEditorModelHandle=e, this.registerModelDisposeListener(t)
  }
  registerModelDisposeListener(e){
    this.modelDisposeListener.value=e.onWillDispose(()=>{
      this.textEditorModelHandle=void 0,this.dispose()
    })
  }
  get textEditorModel(){
    return this.textEditorModelHandle?this.modelService.getModel(this.textEditorModelHandle):null
  }
  isReadonly(){
    return!0
  }
  get languageChangeSource(){
    return this._languageChangeSource
  }
  get hasLanguageSetExplicitly(){
    return typeof this._languageChangeSource=="string"
  }
  setLanguageId(e, t){
    this._languageChangeSource="user", this.setLanguageIdInternal(e, t)
  }
  setLanguageIdInternal(e, t){
    if(this.isResolved()&&!(!e||e===this.textEditorModel.getLanguageId())){
      this._blockLanguageChangeListener=!0;
      try{
        this.textEditorModel.setLanguage(this.languageService.createById(e),t)
      }
      finally{
        this._blockLanguageChangeListener=!1
      }
    }
  }
  installModelListeners(e){
    const t=this._register(e.onDidChangeLanguage(i=>{
      i.source===GSa||this._blockLanguageChangeListener||(this._languageChangeSource="api",t.dispose())
    }))
  }
  getLanguageId(){
    return this.textEditorModel?.getLanguageId()
  }
  autoDetectLanguage(){
    return this.autoDetectLanguageThrottler.trigger(()=>this.doAutoDetectLanguage())
  }
  async doAutoDetectLanguage(){
    if(this.hasLanguageSetExplicitly||!this.textEditorModelHandle||!this.languageDetectionService.isEnabledForLanguage(this.getLanguageId()??o_))return;
    const e=await this.languageDetectionService.detectLanguage(this.textEditorModelHandle), t=this.getLanguageId();
    if(e&&e!==t&&!this.isDisposed()){
      this.setLanguageIdInternal(e,GSa);
      const i=this.languageService.getLanguageName(e);
      this.accessibilityService.alert(_(4397,null,i??e))
    }
  }
  createTextEditorModel(e, t, i, r){
    const s=this.getFirstLineText(e), o=this.getOrCreateLanguage(t, this.languageService, i, s);
    return this.doCreateTextEditorModel(e, o, t, r)
  }
  doCreateTextEditorModel(e, t, i, r){
    let s=i&&this.modelService.getModel(i);
    return s?this.updateTextEditorModel(e, t.languageId):(s=this.modelService.createModel(e, t, i, void 0, r), this.createdEditorModel=!0, this.registerModelDisposeListener(s)), this.textEditorModelHandle=s.uri, s
  }
  getFirstLineText(e){
    const t=e;
    return typeof t.getFirstLineText=="function"?t.getFirstLineText(1e3):e.getLineContent(1).substr(0, 1e3)
  }
  getOrCreateLanguage(e, t, i, r){
    return!i||i===o_?t.createByFilepathOrFirstLine(e??null, r):t.createById(i)
  }
  updateTextEditorModel(e, t){
    this.isResolved()&&(e&&this.modelService.updateModel(this.textEditorModel, e), t&&t!==o_&&this.textEditorModel.getLanguageId()!==t&&this.textEditorModel.setLanguage(this.languageService.createById(t)))
  }
  createSnapshot(){
    return this.textEditorModel?this.textEditorModel.createSnapshot(!0):null
  }
  isResolved(){
    return!!this.textEditorModelHandle
  }
  dispose(){
    this.modelDisposeListener.dispose(), this.textEditorModelHandle&&this.createdEditorModel&&this.modelService.destroyModel(this.textEditorModelHandle), this.textEditorModelHandle=void 0, this.createdEditorModel=!1, super.dispose()
  }
}, qMe=hfu=__decorate([__param(0, Il), __param(1, Jl), __param(2, zme), __param(3, Cf)], qMe)
}
}), mfu, cDf=