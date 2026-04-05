// Module: out-build/vs/workbench/services/untitled/common/untitledTextEditorModel.js
// Offset: 31168210 (bundle byte offset)
// Size: 5778 bytes

ifn(), Ku(), hd(), yn(), FV(), sw(), bv(), lP(), ofn(), Ff(), Js(), Pd(), Jbe(), ss(), oa(), g0i(), Ql(), $Me(), zg(), lfn=class extends qMe{
  static{
    cfn=this
  }
  static{
    this.FIRST_LINE_NAME_MAX_LENGTH=40
  }
  static{
    this.FIRST_LINE_NAME_CANDIDATE_MAX_LENGTH=this.FIRST_LINE_NAME_MAX_LENGTH*10
  }
  static{
    this.ACTIVE_EDITOR_LANGUAGE_ID="${activeEditorLanguage}"
  }
  get name(){
    return this.configuredLabelFormat==="content"&&!this.hasAssociatedFilePath&&this.cachedModelFirstLineWords?this.cachedModelFirstLineWords:this.labelService.getUriBasenameLabel(this.resource)
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A){
    super(a, o, f, A), this.resource=e, this.hasAssociatedFilePath=t, this.initialValue=i, this.preferredLanguageId=r, this.preferredEncoding=s, this.workingCopyBackupService=l, this.textResourceConfigurationService=u, this.workingCopyService=d, this.textFileService=m, this.labelService=p, this.editorService=g, this._onDidChangeContent=this._register(new Qe), this.onDidChangeContent=this._onDidChangeContent.event, this._onDidChangeName=this._register(new Qe), this.onDidChangeName=this._onDidChangeName.event, this._onDidChangeDirty=this._register(new Qe), this.onDidChangeDirty=this._onDidChangeDirty.event, this._onDidChangeEncoding=this._register(new Qe), this.onDidChangeEncoding=this._onDidChangeEncoding.event, this._onDidSave=this._register(new Qe), this.onDidSave=this._onDidSave.event, this._onDidRevert=this._register(new Qe), this.onDidRevert=this._onDidRevert.event, this.typeId=Dit, this.capabilities=2, this.configuredLabelFormat="content", this.cachedModelFirstLineWords=void 0, this.ignoreDirtyOnModelContentChange=!1, this.dirty=this.hasAssociatedFilePath||!!this.initialValue, this._register(this.workingCopyService.registerWorkingCopy(this)), r&&this.setLanguageId(r), this.onConfigurationChange(void 0, !1), this.registerListeners()
  }
  registerListeners(){
    this._register(this.textResourceConfigurationService.onDidChangeConfiguration(e=>this.onConfigurationChange(e, !0)))
  }
  onConfigurationChange(e, t){
    if(!e||e.affectsConfiguration(this.resource, "files.encoding")){
      const i=this.textResourceConfigurationService.getValue(this.resource,"files.encoding");
      this.configuredEncoding!==i&&typeof i=="string"&&(this.configuredEncoding=i,t&&!this.preferredEncoding&&this._onDidChangeEncoding.fire())
    }
    if(!e||e.affectsConfiguration(this.resource, "workbench.editor.untitled.labelFormat")){
      const i=this.textResourceConfigurationService.getValue(this.resource,"workbench.editor.untitled.labelFormat");
      this.configuredLabelFormat!==i&&(i==="content"||i==="name")&&(this.configuredLabelFormat=i,t&&this._onDidChangeName.fire())
    }
  }
  setLanguageId(e, t){
    const i=e===cfn.ACTIVE_EDITOR_LANGUAGE_ID?this.editorService.activeTextEditorLanguageId:e;
    this.preferredLanguageId=i, i&&super.setLanguageId(i, t)
  }
  getLanguageId(){
    return this.textEditorModel?this.textEditorModel.getLanguageId():this.preferredLanguageId
  }
  getEncoding(){
    return this.preferredEncoding||this.configuredEncoding
  }
  async setEncoding(e){
    const t=this.getEncoding();
    this.preferredEncoding=e, t!==this.preferredEncoding&&this._onDidChangeEncoding.fire()
  }
  isDirty(){
    return this.dirty
  }
  isModified(){
    return this.isDirty()
  }
  setDirty(e){
    this.dirty!==e&&(this.dirty=e, this._onDidChangeDirty.fire())
  }
  async save(e){
    const t=await this.textFileService.save(this.resource, e);
    return t&&this._onDidSave.fire({
      reason:e?.reason,source:e?.source
    }), !!t
  }
  async revert(){
    this.ignoreDirtyOnModelContentChange=!0;
    try{
      this.updateTextEditorModel(JOt(""))
    }
    finally{
      this.ignoreDirtyOnModelContentChange=!1
    }
    this.setDirty(!1), this._onDidRevert.fire()
  }
  async backup(e){
    let t;
    return this.isResolved()?t=await this.textFileService.getEncodedReadable(this.resource, this.createSnapshot()??void 0, {
      encoding:MU
    }):typeof this.initialValue=="string"&&(t=aCc(Ms.fromString(this.initialValue))), {
      content:t
    }
  }
  async resolve(){
    let e=!1, t=!1;
    if(this.textEditorModel)this.updateTextEditorModel(void 0, this.preferredLanguageId);
    else{
      let r;
      const s=await this.workingCopyBackupService.resolve(this);
      s?(r=s.value,t=!0):r=Rze(Ms.fromString(this.initialValue||""));
      const o=await UOo(await this.textFileService.getDecodedStream(this.resource,r,{
        encoding:MU
      }));
      this.createTextEditorModel(o,this.resource,this.preferredLanguageId),e=!0
    }
    const i=ed(this.textEditorModel);
    return this.installModelListeners(i), e&&((t||this.initialValue)&&this.updateNameFromFirstLine(i), this.setDirty(this.hasAssociatedFilePath||!!t||!!this.initialValue), (t||this.initialValue)&&this._onDidChangeContent.fire()), super.resolve()
  }
  installModelListeners(e){
    this._register(e.onDidChangeContent(t=>this.onModelContentChanged(e, t))), this._register(e.onDidChangeLanguage(()=>this.onConfigurationChange(void 0, !0))), super.installModelListeners(e)
  }
  onModelContentChanged(e, t){
    this.ignoreDirtyOnModelContentChange||(!this.hasAssociatedFilePath&&e.getLineCount()===1&&e.getLineLength(1)===0?this.setDirty(!1):this.setDirty(!0)), t.changes.some(i=>(i.range.startLineNumber===1||i.range.endLineNumber===1)&&i.range.startColumn<=cfn.FIRST_LINE_NAME_CANDIDATE_MAX_LENGTH)&&this.updateNameFromFirstLine(e), this._onDidChangeContent.fire(), this.autoDetectLanguage()
  }
  updateNameFromFirstLine(e){
    if(this.hasAssociatedFilePath)return;
    let t, i=e.getValueInRange({
      startLineNumber:1,endLineNumber:1,startColumn:1,endColumn:cfn.FIRST_LINE_NAME_CANDIDATE_MAX_LENGTH+1
    }).trim().replace(/\s+/g, " ").replace(/\u202E/g, "");
    i=i.substr(0, Gih(i, cfn.FIRST_LINE_NAME_MAX_LENGTH)[0]), i&&v4n().exec(i)&&(t=i), t!==this.cachedModelFirstLineWords&&(this.cachedModelFirstLineWords=t, this._onDidChangeName.fire())
  }
  isReadonly(){
    return!1
  }
}, lfn=cfn=__decorate([__param(5, Jl), __param(6, Il), __param(7, e7), __param(8, uy), __param(9, cB), __param(10, Gg), __param(11, Ol), __param(12, yi), __param(13, zme), __param(14, Cf)], lfn)
}
}), Cfu, Pit, eka, L1t=