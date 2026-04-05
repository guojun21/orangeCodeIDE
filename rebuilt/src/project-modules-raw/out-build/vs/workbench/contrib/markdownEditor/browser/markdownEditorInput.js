// Module: out-build/vs/workbench/contrib/markdownEditor/browser/markdownEditorInput.js
// Offset: 33853898 (bundle byte offset)
// Size: 3929 bytes

xT(), qi(), rt(), Yn(), Hl(), lP(), ns(), Ql(), yn(), vr(), Wu(), ele=class extends XS{
  static{
    avn=this
  }
  static{
    this.TypeID="workbench.input.markdown"
  }
  static{
    this.EditorID="workbench.editor.markdown"
  }
  constructor(e, t, i){
    super(), this._resource=e, this._fileService=t, this._workingCopyService=i, this._onDidChangeDirty=this._register(new Qe), this._onDidChangeContent=this._register(new Qe), this._onDidSave=this._register(new Qe), this._onWillSave=this._register(new Qe), this._disposables=this._register(new Ut), this._isDirty=!1, this._currentContent="", this._originalContent="", this.onWillSave=this._onWillSave.event, this.onDidChangeDirty=this._onDidChangeDirty.event, this.onDidChangeContent=this._onDidChangeContent.event, this.onDidSave=this._onDidSave.event, this._registerWorkingCopy(), this._loadContent(), this._autoSaveScheduler=new Hu(()=>{
      this._isDirty&&this.save(0,{
        reason:2
      }).catch(r=>{
        console.error("Autosave failed for markdown file:",this._resource.toString(),r)
      })
    }, 500), this._disposables.add(this._autoSaveScheduler)
  }
  get typeId(){
    return avn.TypeID
  }
  get editorId(){
    return avn.EditorID
  }
  get resource(){
    return this._resource
  }
  getName(){
    return fd(this._resource.path)
  }
  getIcon(){
    return Be.markdown
  }
  isDirty(){
    return this._isDirty
  }
  isModified(){
    return this._isDirty
  }
  isReadonly(){
    return!1
  }
  isSaving(){
    return!1
  }
  hasCapability(e){
    return!1
  }
  getResource(){
    return this._resource
  }
  setContent(e){
    this._currentContent!==e&&(this._currentContent=e, this._updateDirtyState(), this._onDidChangeContent.fire(), this._autoSaveScheduler.schedule())
  }
  getContent(){
    return this._currentContent
  }
  _updateDirtyState(){
    const e=this._isDirty;
    this._isDirty=this._currentContent!==this._originalContent, e!==this._isDirty&&this._onDidChangeDirty.fire()
  }
  async _loadContent(){
    try{
      const t=(await this._fileService.readFile(this._resource)).value.toString();
      this._originalContent=t,this._currentContent=this._originalContent
    }
    catch{
      this._originalContent="",this._currentContent=""
    }
  }
  _registerWorkingCopy(){
    const e=this, t=new class{
      constructor(){
        this.typeId="markdown",this.resource=e._resource,this.capabilities=0,this.onDidChangeDirty=e._onDidChangeDirty.event,this.onDidChangeContent=e._onDidChangeContent.event,this.onDidSave=e._onDidSave.event
      }
      get name(){
        return fd(e._resource.path)
      }
      isDirty(){
        return e._isDirty
      }
      isModified(){
        return e._isDirty
      }
      backup(i){
        return Promise.resolve({
          resource:e._resource,meta:{
            content:e._currentContent
          }
        })
      }
      save(i){
        return e.save(0,i).then(r=>!!r)
      }
      revert(i){
        return e.revert(0,i)
      }
    };
    this._disposables.add(this._workingCopyService.registerWorkingCopy(t))
  }
  async save(e, t){
    this._autoSaveScheduler.cancel?.();
    try{
      return this._onWillSave.fire(),await this._fileService.writeFile(this._resource,Ms.fromString(this._currentContent)),this._originalContent=this._currentContent,this._updateDirtyState(),this._onDidSave.fire({
        reason:t?.reason
      }),this
    }
    catch(i){
      throw console.error("Error saving markdown file:",i),i
    }
  }
  async revert(e, t){
    try{
      await this._loadContent(),this._updateDirtyState()
    }
    catch(i){
      throw console.error("Error reverting markdown file:",i),i
    }
  }
  async resolve(){
    return null
  }
  toJSON(){
    return{
      resource:this._resource.toString()
    }
  }
  toUntyped(){
    return{
      resource:this.resource,options:{
        override:avn.EditorID
      }
    }
  }
  matches(e){
    return super.matches(e)?!0:e instanceof avn?e.resource.toString()===this.resource.toString():!1
  }
  dispose(){
    this._disposables.dispose(), super.dispose()
  }
}, ele=avn=__decorate([__param(1, Gr), __param(2, cB)], ele), l$f=class extends at{
  constructor(){
    super()
  }
  canSerialize(n){
    return n instanceof ele
  }
  serialize(n){
    if(n instanceof ele)return JSON.stringify(n.toJSON())
  }
  deserialize(n, e){
    return n.invokeFunction(t=>{
      try{
        if(!t.get(Tl).checkFeatureGate("wysiwyg_markdown"))return;
        const r=JSON.parse(e);
        if(r.resource){
          const s=je.parse(r.resource);
          return n.createInstance(ele,s)
        }
      }
      catch(i){
        console.error("Error deserializing MarkdownEditorInput:",i)
      }
    })
  }
}
}
}), cvn, tle, kDa, i1i=