// Module: out-build/vs/workbench/contrib/markdownPlanEditor/browser/markdownPlanEditorInput.js
// Offset: 33859575 (bundle byte offset)
// Size: 8759 bytes

xT(), qi(), rt(), Yn(), Hl(), lP(), ns(), Ql(), yn(), Ud(), zr(), vr(), cp(), $J(), nkt(), Bc(), hd(), jV=class extends XS{
  static{
    lvn=this
  }
  static{
    this.TypeID="workbench.input.markdownPlan"
  }
  static{
    this.EditorID="workbench.editor.markdownPlan"
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this._resource=e, this._fileService=t, this._workingCopyService=i, this._analyticsService=r, this._composerDataService=s, this._composerPlanService=o, this._planStorageService=a, this._modelService=l, this._onDidChangeDirty=this._register(new Qe), this._onDidChangeContent=this._register(new Qe), this._onDidSave=this._register(new Qe), this._onWillSave=this._register(new Qe), this._disposables=this._register(new Ut), this._bodyModelDisposables=this._register(new Ut), this._lastReportedDirty=!1, this._bodyModel=null, this._savedBodyVersionId=0, this._ignoreBodyModelDirtyEvents=!1, this._frontmatterIsDirty=!1, this._cachedFrontmatter=null, this._inConflictMode=!1, this.onWillSave=this._onWillSave.event, this.onDidChangeDirty=this._onDidChangeDirty.event, this.onDidChangeContent=this._onDidChangeContent.event, this.onDidSave=this._onDidSave.event, this._registerWorkingCopy(), this._loadContent(), this._autoSaveScheduler=new Hu(()=>{
      if(this.isDirty()){
        if(this._inConflictMode||this._composerPlanService.isPlanBeingStreamed(this._resource))return;
        this.save(0,{
          reason:2
        }).catch(u=>{
          
        })
      }
    }, 500), this._disposables.add(this._autoSaveScheduler)
  }
  get typeId(){
    return lvn.TypeID
  }
  get editorId(){
    return lvn.EditorID
  }
  get resource(){
    return this._resource
  }
  getName(){
    return fd(this._resource.path)
  }
  getIcon(){
    return Be.library
  }
  isDirty(){
    return this._isBodyDirty()||this._frontmatterIsDirty
  }
  _isBodyDirty(){
    return this._bodyModel?this._bodyModel.getAlternativeVersionId()!==this._savedBodyVersionId:!1
  }
  isModified(){
    return this.isDirty()
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
    if(!this._bodyModel){
      console.warn("[MarkdownPlanEditorInput] setContent called before model created");
      return
    }
    this._bodyModel.getValue()!==e&&this._bodyModel.setValue(e)
  }
  applyExternalBodyUpdate(e){
    if(this._bodyModel){
      this._ignoreBodyModelDirtyEvents=!0;
      try{
        this._bodyModel.getValue()!==e&&this._bodyModel.setValue(e),this._savedBodyVersionId=this._bodyModel.getAlternativeVersionId()
      }
      finally{
        this._ignoreBodyModelDirtyEvents=!1
      }
      this._composerPlanService.isPlanBeingStreamed(this._resource)||this._updateDirtyState()
    }
  }
  getContent(){
    return this._bodyModel?this._bodyModel.getValue():""
  }
  getBodyModel(){
    return this._bodyModel
  }
  setFrontmatterDirty(e){
    this._frontmatterIsDirty=e, this._updateDirtyState(), e&&(this._composerPlanService.isPlanBeingStreamed(this._resource)||this._autoSaveScheduler.schedule())
  }
  isFrontmatterDirty(){
    return this._frontmatterIsDirty
  }
  setConflictMode(e){
    this._inConflictMode=e
  }
  getCachedFrontmatter(){
    return this._cachedFrontmatter
  }
  setCachedFrontmatter(e){
    this._cachedFrontmatter=e
  }
  _updateDirtyState(){
    const e=this.isDirty();
    e||(this._inConflictMode=!1), this._lastReportedDirty!==e&&(this._lastReportedDirty=e, this._onDidChangeDirty.fire())
  }
  _setupModelListeners(){
    this._bodyModel&&(this._bodyModelDisposables.clear(), this._bodyModelDisposables.add(this._bodyModel.onDidChangeContent(()=>{
      this._onDidChangeContent.fire(),!this._ignoreBodyModelDirtyEvents&&!this._composerPlanService.isPlanBeingStreamed(this._resource)&&(this._updateDirtyState(),this._autoSaveScheduler.schedule())
    })))
  }
  async _loadContent(){
    try{
      let t=(await this._fileService.readFile(this._resource)).value.toString();
      const i=await this._migrateOldFormatIfNeeded(t);
      i&&(t=i);
      const r=tkt(t);
      let s,o;
      r?(s=r.body,o={
        name:r.frontmatter.name||"Untitled Plan",overview:r.frontmatter.overview||"",todos:r.frontmatter.todos||[],isProject:r.frontmatter.isProject,phases:r.frontmatter.phases
      }):(s=t,o={
        name:"Untitled Plan",overview:"",todos:[]
      });
      const a=this._normalizeMarkdownBody(s);
      this._cachedFrontmatter=o,this._createOrUpdateBodyModel(a)
    }
    catch{
      this._cachedFrontmatter={
        name:"Untitled Plan",overview:"",todos:[]
      },this._createOrUpdateBodyModel("")
    }
  }
  _normalizeMarkdownBody(e){
    return e.replace(/\r\n/g, `
`)
  }
  _createOrUpdateBodyModel(e){
    const t=this._resource.with({
      scheme:"plan-body",query:this._resource.toString()
    });
    let i=this._modelService.getModel(t);
    if(i){
      this._ignoreBodyModelDirtyEvents=!0;
      try{
        i.getValue()!==e&&i.setValue(e)
      }
      finally{
        this._ignoreBodyModelDirtyEvents=!1
      }
    }
    else i=this._modelService.createModel(e, null, t, !1);
    this._bodyModel=i, this._savedBodyVersionId=i.getAlternativeVersionId(), this._frontmatterIsDirty=!1, this._setupModelListeners(), this._updateDirtyState()
  }
  async _migrateOldFormatIfNeeded(e){
    if(e.trimStart().startsWith("---")&&tkt(e))return;
    const t=e.split(`
`);
    let i, r=-1;
    for(let g=0;
    g<Math.min(5, t.length);
    g++){
      const f=t[g].match(/<!-- ([^\s]+)(?: [^\s]+)?(?: \d+)? -->/);
      if(f){
        i=f[1],r=g;
        break
      }
    }
    if(!i||r===-1)return;
    console.log("[MarkdownPlanEditorInput] Migrating old plan format for composer:", i);
    let o=t.slice(r+1).join(`
`).trim(), a="Untitled Plan";
    const l=o.match(/^#\s+(.+)$/m);
    l&&(a=l[1].trim());
    const u=[], d=o.match(/### To-dos\s*([\s\S]*?)(?=\n##|\n$|$)/);
    if(d){
      const f=d[1].split(`
`);
      for(const A of f){
        const w=A.match(/^- \[([ x])\] (.+)$/);
        w&&u.push({
          id:Wr(),content:w[2].trim(),status:w[1]==="x"?"completed":"pending",dependencies:[]
        })
      }
      o=o.replace(/### To-dos\s*([\s\S]*?)(?=\n##|\n$|$)/,"").trim()
    }
    const p=pnt({
      name:a,overview:"",todos:u
    })+`

`+o;
    try{
      await this._fileService.writeFile(this._resource,Ms.fromString(p)),console.log("[MarkdownPlanEditorInput] Migration complete, wrote new format to:",this._resource.toString()),await this._planStorageService.registerExistingPlan(this._resource,i),console.log("[MarkdownPlanEditorInput] Registered migrated plan in registry")
    }
    catch(g){
      console.error("[MarkdownPlanEditorInput] Failed to migrate plan:",g);
      return
    }
    return p
  }
  _registerWorkingCopy(){
    const e=this, t=new class{
      constructor(){
        this.typeId="markdownPlan",this.resource=e._resource,this.capabilities=0,this.onDidChangeDirty=e._onDidChangeDirty.event,this.onDidChangeContent=e._onDidChangeContent.event,this.onDidSave=e._onDidSave.event
      }
      get name(){
        return fd(e._resource.path)
      }
      isDirty(){
        return e.isDirty()
      }
      isModified(){
        return e.isDirty()
      }
      backup(i){
        return Promise.resolve({
          resource:e._resource,meta:{
            content:e.getContent()
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
      this._onWillSave.fire();
      let i=await this._composerPlanService.getRegistryEntry(this._resource);
      i||(i=await this._planStorageService.registerExistingPlan(this._resource));
      const r=await this.getComposerId(),s=this.getContent();
      if(await this._composerPlanService.updatePlanFileContent(this._resource,s,r??void 0),this._bodyModel&&(this._savedBodyVersionId=this._bodyModel.getAlternativeVersionId()),this._frontmatterIsDirty=!1,this._inConflictMode=!1,this._updateDirtyState(),this._onDidSave.fire({
        reason:t?.reason
      }),r){
        const o=this._composerDataService.getComposerDataIfLoaded(r);
        this._analyticsService.trackEvent("composer.plan_mode.plan_manually_edited",{
          mode:"rich",composerId:r,invocationID:o?.latestChatGenerationUUID
        })
      }
      return this
    }
    catch(i){
      throw console.error("Error saving markdown plan:",i),i
    }
  }
  async getComposerId(){
    try{
      const e=await this._composerPlanService.getRegistryEntry(this._resource);
      if(e)return e.editedBy[e.editedBy.length-1]||e.createdBy
    }
    catch{
      
    }
    return null
  }
  async revert(e, t){
    try{
      await this._loadContent(),this._inConflictMode=!1,this._updateDirtyState()
    }
    catch(i){
      throw console.error("Error reverting markdown plan:",i),i
    }
  }
  static create(e){
    throw new Error("Use instantiationService.createInstance(MarkdownPlanEditorInput, resource) instead")
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
        override:lvn.EditorID
      }
    }
  }
  matches(e){
    return super.matches(e)?!0:e instanceof lvn?e.resource.toString()===this.resource.toString():!1
  }
  dispose(){
    if(this._bodyModel){
      const e=this._bodyModel.uri;
      this._bodyModel=null,this._modelService.destroyModel(e)
    }
    this._disposables.dispose(), super.dispose()
  }
}, jV=lvn=__decorate([__param(1, Gr), __param(2, cB), __param(3, uh), __param(4, Oa), __param(5, IV), __param(6, TAi), __param(7, Il)], jV), u$f=class extends at{
  constructor(){
    super()
  }
  canSerialize(n){
    return n instanceof jV?n.resource.scheme!==_n.cursorPlan:!1
  }
  serialize(n){
    if(n instanceof jV&&n.resource.scheme!==_n.cursorPlan)return JSON.stringify(n.toJSON())
  }
  deserialize(n, e){
    try{
      const t=JSON.parse(e);
      if(t.resource){
        const i=je.parse(t.resource);
        return n.createInstance(jV,i)
      }
    }
    catch(t){
      console.error("Error deserializing MarkdownPlanEditorInput:",t)
    }
  }
}
}
}), s1i, hpe, EDa, xDa=