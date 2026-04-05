// Module: out-build/vs/workbench/contrib/files/browser/editors/fileEditorInput.js
// Offset: 31258416 (bundle byte offset)
// Size: 6345 bytes

Nu(), jqe(), tbu(), ns(), Ff(), Wt(), rt(), td(), gD(), Pd(), N1(), ss(), Yr(), yn(), zr(), bv(), _g(), sw(), Dce(), (function(n){
  n[n.None=0]="None", n[n.Text=1]="Text", n[n.Binary=2]="Binary"
})(ABf||(ABf={
  
})), Kme=nbu=class extends nwe{
  get typeId(){
    return C1t
  }
  get editorId(){
    return G0.id
  }
  get capabilities(){
    let e=32;
    return this.model?this.model.isReadonly()&&(e|=2):this.fileService.hasProvider(this.resource)?this.filesConfigurationService.isReadonly(this.resource)&&(e|=2):e|=4, e&2||(e|=128), e
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C){
    super(e, t, f, u, m, p, g, w, C), this.instantiationService=l, this.textModelService=d, this.pathService=A, this.forceOpenAs=0, this.model=void 0, this.cachedTextFileModelReference=void 0, this.modelListeners=this._register(new Ut), this.model=this.textFileService.files.get(e), i&&this.setPreferredName(i), r&&this.setPreferredDescription(r), s&&this.setPreferredEncoding(s), o&&this.setPreferredLanguageId(o), typeof a=="string"&&this.setPreferredContents(a), this._register(this.textFileService.files.onDidCreate(x=>this.onDidCreateTextFileModel(x))), this.model&&this.registerModelListeners(this.model)
  }
  onDidCreateTextFileModel(e){
    Zc(e.resource, this.resource)&&(this.model=e, this.registerModelListeners(e))
  }
  registerModelListeners(e){
    this.modelListeners.clear(), this.modelListeners.add(e.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this.modelListeners.add(e.onDidChangeReadonly(()=>this._onDidChangeCapabilities.fire())), this.modelListeners.add(e.onDidSaveError(()=>this._onDidChangeDirty.fire())), this.modelListeners.add(In.once(e.onWillDispose)(()=>{
      this.modelListeners.clear(),this.model=void 0
    }))
  }
  getName(){
    return this.preferredName||super.getName()
  }
  setPreferredName(e){
    this.allowLabelOverride()&&this.preferredName!==e&&(this.preferredName=e, this._onDidChangeLabel.fire())
  }
  allowLabelOverride(){
    return this.resource.scheme!==this.pathService.defaultUriScheme&&this.resource.scheme!==_n.vscodeUserData&&this.resource.scheme!==_n.file&&this.resource.scheme!==_n.vscodeRemote
  }
  getPreferredName(){
    return this.preferredName
  }
  isReadonly(){
    return this.model?this.model.isReadonly():this.filesConfigurationService.isReadonly(this.resource)
  }
  getDescription(e){
    return this.preferredDescription||super.getDescription(e)
  }
  setPreferredDescription(e){
    this.allowLabelOverride()&&this.preferredDescription!==e&&(this.preferredDescription=e, this._onDidChangeLabel.fire())
  }
  getPreferredDescription(){
    return this.preferredDescription
  }
  getTitle(e){
    let t=super.getTitle(e);
    const i=this.getPreferredTitle();
    return i&&(t=`${i} (${t})`), t
  }
  getPreferredTitle(){
    if(this.preferredName&&this.preferredDescription)return`${this.preferredName} ${this.preferredDescription}`;
    if(this.preferredName||this.preferredDescription)return this.preferredName??this.preferredDescription
  }
  getEncoding(){
    return this.model?this.model.getEncoding():this.preferredEncoding
  }
  getPreferredEncoding(){
    return this.preferredEncoding
  }
  async setEncoding(e, t){
    return this.setPreferredEncoding(e), this.model?.setEncoding(e, t)
  }
  setPreferredEncoding(e){
    this.preferredEncoding=e, this.setForceOpenAsText()
  }
  getLanguageId(){
    return this.model?this.model.getLanguageId():this.preferredLanguageId
  }
  getPreferredLanguageId(){
    return this.preferredLanguageId
  }
  setLanguageId(e, t){
    this.setPreferredLanguageId(e), this.model?.setLanguageId(e, t)
  }
  setPreferredLanguageId(e){
    this.preferredLanguageId=e, this.setForceOpenAsText()
  }
  setPreferredContents(e){
    this.preferredContents=e, this.setForceOpenAsText()
  }
  setForceOpenAsText(){
    this.forceOpenAs=1
  }
  setForceOpenAsBinary(){
    this.forceOpenAs=2
  }
  isDirty(){
    return!!this.model?.isDirty()
  }
  isSaving(){
    return this.model?.hasState(0)||this.model?.hasState(3)||this.model?.hasState(5)?!1:this.filesConfigurationService.hasShortAutoSaveDelay(this)?!0:super.isSaving()
  }
  prefersEditorPane(e){
    return this.forceOpenAs===2?e.find(t=>t.typeId===pgu):e.find(t=>t.typeId===_1t)
  }
  resolve(e){
    return this.forceOpenAs===2?this.doResolveAsBinary():this.doResolveAsText(e)
  }
  async doResolveAsText(e){
    try{
      const t=this.preferredContents;
      this.preferredContents=void 0,await this.textFileService.files.resolve(this.resource,{
        languageId:this.preferredLanguageId,encoding:this.preferredEncoding,contents:typeof t=="string"?JOt(t):void 0,reload:{
          async:!0
        },allowBinary:this.forceOpenAs===1,reason:1,limits:this.ensureLimits(e)
      }),this.cachedTextFileModelReference||(this.cachedTextFileModelReference=await this.textModelService.createModelReference(this.resource));
      const i=this.cachedTextFileModelReference.object;
      return this.isDisposed()&&this.disposeModelReference(),i
    }
    catch(t){
      if(t.textFileOperationResult===0)return this.doResolveAsBinary();
      throw t
    }
  }
  async doResolveAsBinary(){
    const e=this.instantiationService.createInstance(bfn, this.preferredResource, this.getName());
    return await e.resolve(), e
  }
  isResolved(){
    return!!this.model
  }
  async rename(e, t){
    return{
      editor:{
        resource:t,encoding:this.getEncoding(),options:{
          viewState:Hun(this,e,this.editorService)
        }
      }
    }
  }
  toUntyped(e){
    const t={
      resource:this.preferredResource,forceFile:!0,options:{
        override:this.editorId
      }
    };
    return typeof e?.preserveViewState=="number"&&(t.encoding=this.getEncoding(), t.languageId=this.getLanguageId(), t.contents=(()=>{
      const i=this.textFileService.files.get(this.resource);
      if(i?.isDirty()&&!i.textEditorModel.isTooLargeForHeapOperation())return i.textEditorModel.getValue()
    })(), t.options={
      ...t.options,viewState:Hun(this,e.preserveViewState,this.editorService)
    }), t
  }
  matches(e){
    return this===e?!0:e instanceof nbu?Zc(e.resource, this.resource):xq(e)?super.matches(e):!1
  }
  dispose(){
    this.model=void 0, this.disposeModelReference(), super.dispose()
  }
  disposeModelReference(){
    Bo(this.cachedTextFileModelReference), this.cachedTextFileModelReference=void 0
  }
}, Kme=nbu=__decorate([__param(7, ln), __param(8, Gg), __param(9, El), __param(10, Ol), __param(11, Gr), __param(12, IC), __param(13, yi), __param(14, kp), __param(15, uy), __param(16, _ie)], Kme)
}
});
function woy(){
  for(;
  Rka.length>0;
  )Rka.pop()?.close()
}
async function yBf(n, e, t){
  const i=n.get(yi), r=i.activeEditorPane;
  if(!r)return;
  const s=r.input, o=r.group;
  if(woy(), t){
    const a={
      ignoreModifiedSince:!0,reason:1
    };
    await i.save({
      editor:s,groupId:o.id
    }, a)
  }
  else await i.revert({
    editor:s, groupId:o.id
  });
  return await i.openEditor({
    resource:e
  }, o), o.closeEditor(s)
}
var ibu, Dka, Bka, rbu, k0i, Rka, E0i, Pka, Lka, wBf, _Bf, CBf, Nka, SBf, kBf, Mka, EBf, xBf, TBf=