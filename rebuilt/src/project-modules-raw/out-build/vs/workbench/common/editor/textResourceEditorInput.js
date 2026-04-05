// Module: out-build/vs/workbench/common/editor/textResourceEditorInput.js
// Offset: 31255226 (bundle byte offset)
// Size: 2615 bytes

Nu(), d1f(), Ff(), ss(), ns(), Pd(), zr(), Yr(), td(), vBf(), bv(), N1(), sw(), Dce(), nwe=class extends n_i{
  constructor(e, t, i, r, s, o, a, l, u){
    super(e, t, s, o, a, l, u), this.editorService=i, this.textFileService=r
  }
  save(e, t){
    return this.resource.scheme!==_n.untitled&&!this.fileService.hasProvider(this.resource)?this.saveAs(e, t):this.doSave(t, !1, e)
  }
  saveAs(e, t){
    return this.doSave(t, !0, e)
  }
  async doSave(e, t, i){
    let r;
    if(t?r=await this.textFileService.saveAs(this.resource, void 0, {
      ...e,suggestedTarget:this.preferredResource
    }):r=await this.textFileService.save(this.resource, e), !!r)return{
      resource:r
    }
  }
  async revert(e, t){
    await this.textFileService.revert(this.resource, t)
  }
}, nwe=__decorate([__param(2, yi), __param(3, Gg), __param(4, Ol), __param(5, Gr), __param(6, IC), __param(7, uy), __param(8, _ie)], nwe), Qqe=class extends nwe{
  static{
    Ika=this
  }
  static{
    this.ID="workbench.editors.resourceEditorInput"
  }
  get typeId(){
    return Ika.ID
  }
  get editorId(){
    return G0.id
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g){
    super(e, void 0, l, a, d, u, m, p, g), this.name=t, this.description=i, this.preferredLanguageId=r, this.preferredContents=s, this.textModelService=o, this.cachedModel=void 0, this.modelReference=void 0
  }
  getName(){
    return this.name||super.getName()
  }
  setName(e){
    this.name!==e&&(this.name=e, this._onDidChangeLabel.fire())
  }
  getDescription(){
    return this.description
  }
  setDescription(e){
    this.description!==e&&(this.description=e, this._onDidChangeLabel.fire())
  }
  setLanguageId(e, t){
    this.setPreferredLanguageId(e), this.cachedModel?.setLanguageId(e, t)
  }
  setPreferredLanguageId(e){
    this.preferredLanguageId=e
  }
  setPreferredContents(e){
    this.preferredContents=e
  }
  async resolve(){
    const e=this.preferredContents, t=this.preferredLanguageId;
    this.preferredContents=void 0, this.preferredLanguageId=void 0, this.modelReference||(this.modelReference=this.textModelService.createModelReference(this.resource));
    const i=await this.modelReference, r=i.object;
    if(!(r instanceof ffn))throw i.dispose(), this.modelReference=void 0, new Error(`Unexpected model for TextResourceEditorInput: ${this.resource}`);
    return this.cachedModel=r, (typeof e=="string"||typeof t=="string")&&r.updateTextEditorModel(typeof e=="string"?JOt(e):void 0, t), r
  }
  matches(e){
    return this===e?!0:e instanceof Ika?Zc(e.resource, this.resource):xq(e)?super.matches(e):!1
  }
  dispose(){
    this.modelReference&&(this.modelReference.then(e=>e.dispose()), this.modelReference=void 0), this.cachedModel=void 0, super.dispose()
  }
}, Qqe=Ika=__decorate([__param(5, El), __param(6, Gg), __param(7, yi), __param(8, Gr), __param(9, Ol), __param(10, IC), __param(11, uy), __param(12, _ie)], Qqe)
}
}), bfn, tbu=