// Module: out-build/vs/workbench/common/editor/resourceEditorInput.js
// Offset: 30772975 (bundle byte offset)
// Size: 3757 bytes

xT(), ns(), Pd(), Yr(), N1(), Ei(), sw(), Dce(), n_i=class extends XS{
  get capabilities(){
    let e=32;
    return this.fileService.hasProvider(this.resource)?this.filesConfigurationService.isReadonly(this.resource)&&(e|=2):e|=4, e&2||(e|=128), e
  }
  get preferredResource(){
    return this._preferredResource
  }
  constructor(e, t, i, r, s, o, a){
    super(), this.resource=e, this.labelService=i, this.fileService=r, this.filesConfigurationService=s, this.textResourceConfigurationService=o, this.customEditorLabelService=a, this._name=void 0, this._shortDescription=void 0, this._mediumDescription=void 0, this._longDescription=void 0, this._shortTitle=void 0, this._mediumTitle=void 0, this._longTitle=void 0, this._preferredResource=t||e, this.registerListeners()
  }
  registerListeners(){
    this._register(this.labelService.onDidChangeFormatters(e=>this.onLabelEvent(e.scheme))), this._register(this.fileService.onDidChangeFileSystemProviderRegistrations(e=>this.onLabelEvent(e.scheme))), this._register(this.fileService.onDidChangeFileSystemProviderCapabilities(e=>this.onLabelEvent(e.scheme))), this._register(this.customEditorLabelService.onDidChange(()=>this.updateLabel())), this._register(this.filesConfigurationService.onDidChangeReadonly(()=>this._onDidChangeCapabilities.fire()))
  }
  onLabelEvent(e){
    e===this._preferredResource.scheme&&this.updateLabel()
  }
  updateLabel(){
    this._name=void 0, this._shortDescription=void 0, this._mediumDescription=void 0, this._longDescription=void 0, this._shortTitle=void 0, this._mediumTitle=void 0, this._longTitle=void 0, this._onDidChangeLabel.fire()
  }
  setPreferredResource(e){
    Zc(e, this._preferredResource)||(this._preferredResource=e, this.updateLabel())
  }
  getName(){
    return typeof this._name!="string"&&(this._name=this.customEditorLabelService.getName(this._preferredResource)??this.labelService.getUriBasenameLabel(this._preferredResource)), this._name
  }
  getDescription(e=1){
    switch(e){
      case 0:return this.shortDescription;
      case 2:return this.longDescription;
      case 1:default:return this.mediumDescription
    }
  }
  get shortDescription(){
    return typeof this._shortDescription!="string"&&(this._shortDescription=this.labelService.getUriBasenameLabel(Td(this._preferredResource))), this._shortDescription
  }
  get mediumDescription(){
    return typeof this._mediumDescription!="string"&&(this._mediumDescription=this.labelService.getUriLabel(Td(this._preferredResource), {
      relative:!0
    })), this._mediumDescription
  }
  get longDescription(){
    return typeof this._longDescription!="string"&&(this._longDescription=this.labelService.getUriLabel(Td(this._preferredResource))), this._longDescription
  }
  get shortTitle(){
    return typeof this._shortTitle!="string"&&(this._shortTitle=this.getName()), this._shortTitle
  }
  get mediumTitle(){
    return typeof this._mediumTitle!="string"&&(this._mediumTitle=this.labelService.getUriLabel(this._preferredResource, {
      relative:!0
    })), this._mediumTitle
  }
  get longTitle(){
    return typeof this._longTitle!="string"&&(this._longTitle=this.labelService.getUriLabel(this._preferredResource)), this._longTitle
  }
  getTitle(e){
    switch(e){
      case 0:return this.shortTitle;
      case 2:return this.longTitle;
      default:case 1:return this.mediumTitle
    }
  }
  isReadonly(){
    return this.filesConfigurationService.isReadonly(this.resource)
  }
  ensureLimits(e){
    if(e?.limits)return e.limits;
    const t=Gdh(this.resource);
    let i;
    const r=this.textResourceConfigurationService.inspect(this.resource, null, "workbench.editorLargeFileConfirmation");
    return yrA(r)&&(i=r.value*dT.MB), {
      size:i??t
    }
  }
}, n_i=__decorate([__param(2, Ol), __param(3, Gr), __param(4, IC), __param(5, uy), __param(6, _ie)], n_i)
}
});
function dgn(n){
  return!!n&&typeof n=="object"&&Array.isArray(n.editorInputs)&&n.editorInputs.every(e=>e instanceof Gx)
}
function Dmu(n){
  return!!n&&typeof n=="object"&&n.typeId===Gx.ID
}
var i_i, Gx, mX=