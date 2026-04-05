// Module: out-build/vs/workbench/services/untitled/common/untitledTextEditorInput.js
// Offset: 32534517 (bundle byte offset)
// Size: 4638 bytes

Nu(), jqe(), Ff(), Pd(), ss(), ns(), Yr(), eu(), _g(), N1(), td(), rt(), sw(), Dce(), WJ=class extends nwe{
  static{
    AEa=this
  }
  static{
    this.ID="workbench.editors.untitledEditorInput"
  }
  get typeId(){
    return AEa.ID
  }
  get editorId(){
    return G0.id
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(e.resource, void 0, r, t, i, s, l, d, m), this.model=e, this.environmentService=o, this.pathService=a, this.textModelService=u, this.modelResolve=void 0, this.modelDisposables=this._register(new Ut), this.cachedUntitledTextEditorModelReference=void 0, this.registerModelListeners(e), this._register(this.textFileService.untitled.onDidCreate(p=>this.onDidCreateUntitledModel(p)))
  }
  registerModelListeners(e){
    this.modelDisposables.clear(), this.modelDisposables.add(e.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this.modelDisposables.add(e.onDidChangeName(()=>this._onDidChangeLabel.fire())), this.modelDisposables.add(e.onDidRevert(()=>this.dispose()))
  }
  onDidCreateUntitledModel(e){
    Zc(e.resource, this.model.resource)&&e!==this.model&&(this.model=e, this.registerModelListeners(e))
  }
  getName(){
    return this.model.name
  }
  getDescription(e=1){
    if(!this.model.hasAssociatedFilePath){
      const t=this.resource.path;
      return t!==this.getName()?t:void 0
    }
    return super.getDescription(e)
  }
  getTitle(e){
    if(!this.model.hasAssociatedFilePath){
      const t=this.getName(),i=this.getDescription();
      return i&&i!==t?`${t} \u2022 ${i}`:t
    }
    return super.getTitle(e)
  }
  isDirty(){
    return this.model.isDirty()
  }
  getEncoding(){
    return this.model.getEncoding()
  }
  setEncoding(e, t){
    return this.model.setEncoding(e)
  }
  get hasLanguageSetExplicitly(){
    return this.model.hasLanguageSetExplicitly
  }
  get hasAssociatedFilePath(){
    return this.model.hasAssociatedFilePath
  }
  setLanguageId(e, t){
    this.model.setLanguageId(e, t)
  }
  getLanguageId(){
    return this.model.getLanguageId()
  }
  async resolve(){
    return this.modelResolve||(this.modelResolve=(async()=>{
      this.cachedUntitledTextEditorModelReference=await this.textModelService.createModelReference(this.resource)
    })()), await this.modelResolve, this.isDisposed()&&this.disposeModelReference(), this.model
  }
  toUntyped(e){
    const t={
      resource:this.model.hasAssociatedFilePath?P4(this.model.resource,this.environmentService.remoteAuthority,this.pathService.defaultUriScheme):this.resource,forceUntitled:!0,options:{
        override:this.editorId
      }
    };
    return typeof e?.preserveViewState=="number"&&(t.encoding=this.getEncoding(), t.languageId=this.getLanguageId(), t.contents=this.model.isModified()?this.model.textEditorModel?.getValue():void 0, t.options.viewState=Hun(this, e.preserveViewState, this.editorService), typeof t.contents=="string"&&!this.model.hasAssociatedFilePath&&!e.preserveResource&&(t.resource=void 0)), t
  }
  matches(e){
    return this===e?!0:e instanceof AEa?Zc(e.resource, this.resource):OWl(e)?super.matches(e):!1
  }
  dispose(){
    this.modelResolve=void 0, this.disposeModelReference(), super.dispose()
  }
  disposeModelReference(){
    Bo(this.cachedUntitledTextEditorModelReference), this.cachedUntitledTextEditorModelReference=void 0
  }
}, WJ=AEa=__decorate([__param(1, Gg), __param(2, Ol), __param(3, yi), __param(4, Gr), __param(5, Cc), __param(6, kp), __param(7, IC), __param(8, El), __param(9, uy), __param(10, _ie)], WJ)
}
});
async function vly(n, e, t, i, r){
  const s=await zOf(n);
  if(!t.isCancellationRequested)return{
    kind:"image", value:n, id:s, name:i, isImage:!0, icon:Be.fileMedia, mimeType:e, isPasted:!0, references:[{
      reference:r,kind:"reference"
    }
    ]
  }
}
async function zOf(n){
  const e=await crypto.subtle.digest("SHA-256", n);
  return Array.from(new Uint8Array(e)).map(i=>i.toString(16).padStart(2, "0")).join("")
}
function Aly(n, e, t, i){
  const r=ca(e), s=i.startLineNumber, o=i.endLineNumber, a=e.scheme===_n.terminal||e.scheme===_n.vscodeTerminal, l=a?"terminal":`file: ${r}`, u=s===o?`line ${s}`:`lines ${s} to ${o}`, d=`Copied Selection: 


 From the ${l} From ${u} 
 \`\`\`${n}\`\`\``, m=s===o?_(5422, null):_(5423, null, o+1-s);
  return{
    kind:"paste", value:d, id:`${r}${s}${o}${i.startColumn}${i.endColumn}`, name:`${r} ${m}`, icon:Be.code, pastedLines:m, language:t, fileName:e.toString(), copiedFrom:{
      uri:e,range:i
    }, code:n, isTerminalContent:a, references:[{
      reference:e,kind:"reference"
    }
    ]
  }
}
function VOf(n, e, t, i, r, s){
  const o={
    resource:n.uri, variable:e, undo:()=>{
      const a=s.getWidgetByInputUri(n.uri);
      if(!a)throw new Error("No widget found for undo");
      a.attachmentModel.delete(e.id)
    }, redo:()=>{
      const a=s.getWidgetByInputUri(n.uri);
      if(!a)throw new Error("No widget found for redo");
      a.attachmentModel.addContext(e)
    }, metadata:{
      needsConfirmation:!1,label:e.name
    }
  };
  return{
    insertText:"", title:r, kind:i, handledMimeType:t, additionalEdit:{
      edits:[o]
    }
  }
}
function KOf(n){
  return{
    edits:[n], dispose:()=>{
      
    }
  }
}
var ECi, yEa, YOf, ZOf, wEa, XOf=