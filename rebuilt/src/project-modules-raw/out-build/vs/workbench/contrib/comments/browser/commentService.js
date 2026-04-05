// Module: out-build/vs/workbench/contrib/comments/browser/commentService.js
// Offset: 33161153 (bundle byte offset)
// Size: 9145 bytes

Wt(), yn(), rt(), ts(), Po(), Guy(), zp(), Ei(), tki(), si(), kr(), u2e(), jr(), uTa(), hd(), zr(), QV=xi("commentService"), dTa="comments.continueOnComments", hTa=class extends at{
  constructor(e, t, i, r, s, o, a){
    super(), this.instantiationService=e, this.layoutService=t, this.configurationService=i, this.storageService=s, this.logService=o, this.modelService=a, this._onDidSetDataProvider=this._register(new Qe), this.onDidSetDataProvider=this._onDidSetDataProvider.event, this._onDidDeleteDataProvider=this._register(new Qe), this.onDidDeleteDataProvider=this._onDidDeleteDataProvider.event, this._onDidSetResourceCommentInfos=this._register(new Qe), this.onDidSetResourceCommentInfos=this._onDidSetResourceCommentInfos.event, this._onDidSetAllCommentThreads=this._register(new Qe), this.onDidSetAllCommentThreads=this._onDidSetAllCommentThreads.event, this._onDidUpdateCommentThreads=this._register(new Qe), this.onDidUpdateCommentThreads=this._onDidUpdateCommentThreads.event, this._onDidUpdateNotebookCommentThreads=this._register(new Qe), this.onDidUpdateNotebookCommentThreads=this._onDidUpdateNotebookCommentThreads.event, this._onDidUpdateCommentingRanges=this._register(new Qe), this.onDidUpdateCommentingRanges=this._onDidUpdateCommentingRanges.event, this._onDidChangeActiveEditingCommentThread=this._register(new Qe), this.onDidChangeActiveEditingCommentThread=this._onDidChangeActiveEditingCommentThread.event, this._onDidChangeCurrentCommentThread=this._register(new Qe), this.onDidChangeCurrentCommentThread=this._onDidChangeCurrentCommentThread.event, this._onDidChangeCommentingEnabled=this._register(new Qe), this.onDidChangeCommentingEnabled=this._onDidChangeCommentingEnabled.event, this._onResourceHasCommentingRanges=this._register(new Qe), this.onResourceHasCommentingRanges=this._onResourceHasCommentingRanges.event, this._onDidChangeActiveCommentingRange=this._register(new Qe), this.onDidChangeActiveCommentingRange=this._onDidChangeActiveCommentingRange.event, this._commentControls=new Map, this._commentMenus=new Map, this._isCommentingEnabled=!0, this._continueOnComments=new Map, this._continueOnCommentProviders=new Set, this._commentsModel=this._register(new Cbn), this.commentsModel=this._commentsModel, this._commentingRangeResources=new Set, this._commentingRangeResourceHintSchemes=new Set, this._handleConfiguration(), this._handleZenMode(), this._workspaceHasCommenting=SD.WorkspaceHasCommenting.bindTo(r), this._commentingEnabled=SD.commentingEnabled.bindTo(r);
    const l=this._register(new Ut), u=In.debounce(this.storageService.onDidChangeValue(1, dTa, l), (d, m)=>d?.external?d:m, 500);
    l.add(u(d=>{
      if(!d.external)return;
      const m=this.storageService.getObject(dTa,1);
      if(!m)return;
      this.logService.debug(`Comments: URIs of continue on comments from storage ${m.map(g=>g.uri.toString()).join(", ")}.`);
      const p=this._addContinueOnComments(m,this._continueOnComments);
      for(const g of p){
        const f=this._commentControls.get(g);
        if(!f)continue;
        const A={
          uniqueOwner:g,owner:f.owner,ownerLabel:f.label,pending:this._continueOnComments.get(g)||[],added:[],removed:[],changed:[]
        };
        this.updateModelThreads(A)
      }
    })), this._register(s.onWillSaveState(()=>{
      const d=new Map;
      for(const m of this._continueOnCommentProviders){
        const p=m.provideContinueOnComments();
        this._addContinueOnComments(p,d)
      }
      this._saveContinueOnComments(d)
    })), this._register(this.modelService.onModelAdded(d=>{
      d.uri.scheme!==_n.vscodeSourceControl&&(d.skipLSPSync||d.skipLSPRegistration||this._commentingRangeResources.has(d.uri.toString())||this.getDocumentComments(d.uri))
    }))
  }
  _updateResourcesWithCommentingRanges(e, t){
    let i=!1;
    for(const r of t)r&&(r.commentingRanges.ranges.length>0||r.threads.length>0)&&(this._commentingRangeResources.add(e.toString()), i=!0);
    i&&this._onResourceHasCommentingRanges.fire()
  }
  _handleConfiguration(){
    this._isCommentingEnabled=this._defaultCommentingEnablement, this._register(this.configurationService.onDidChangeConfiguration(e=>{
      e.affectsConfiguration("comments.visible")&&this.enableCommenting(this._defaultCommentingEnablement)
    }))
  }
  _handleZenMode(){
    let e=this._isCommentingEnabled;
    this._register(this.layoutService.onDidChangeZenMode(t=>{
      t?(e=this._isCommentingEnabled,this.enableCommenting(!1)):this.enableCommenting(e)
    }))
  }
  get _defaultCommentingEnablement(){
    return!!this.configurationService.getValue(_bn)?.visible
  }
  get isCommentingEnabled(){
    return this._isCommentingEnabled
  }
  enableCommenting(e){
    e!==this._isCommentingEnabled&&(this._isCommentingEnabled=e, this._commentingEnabled.set(e), this._onDidChangeCommentingEnabled.fire(e))
  }
  setCurrentCommentThread(e){
    this._onDidChangeCurrentCommentThread.fire(e)
  }
  setActiveEditingCommentThread(e){
    this._onDidChangeActiveEditingCommentThread.fire(e)
  }
  get lastActiveCommentcontroller(){
    return this._lastActiveCommentController
  }
  async setActiveCommentAndThread(e, t){
    const i=this._commentControls.get(e);
    if(i)return i!==this._lastActiveCommentController&&await this._lastActiveCommentController?.setActiveCommentAndThread(void 0), this._lastActiveCommentController=i, i.setActiveCommentAndThread(t)
  }
  setDocumentComments(e, t){
    this._onDidSetResourceCommentInfos.fire({
      resource:e,commentInfos:t
    })
  }
  setModelThreads(e, t, i, r){
    this._commentsModel.setCommentThreads(e, t, i, r), this._onDidSetAllCommentThreads.fire({
      ownerId:e,ownerLabel:i,commentThreads:r
    })
  }
  updateModelThreads(e){
    this._commentsModel.updateCommentThreads(e), this._onDidUpdateCommentThreads.fire(e)
  }
  setWorkspaceComments(e, t){
    t.length&&this._workspaceHasCommenting.set(!0);
    const i=this._commentControls.get(e);
    i&&this.setModelThreads(e, i.owner, i.label, t)
  }
  removeWorkspaceComments(e){
    const t=this._commentControls.get(e);
    t&&this.setModelThreads(e, t.owner, t.label, [])
  }
  registerCommentController(e, t){
    this._commentControls.set(e, t), this._onDidSetDataProvider.fire()
  }
  unregisterCommentController(e){
    e?this._commentControls.delete(e):this._commentControls.clear(), this._commentsModel.deleteCommentsByOwner(e), this._onDidDeleteDataProvider.fire(e)
  }
  getCommentController(e){
    return this._commentControls.get(e)
  }
  async createCommentThreadTemplate(e, t, i, r){
    const s=this._commentControls.get(e);
    if(s)return s.createCommentThreadTemplate(t, i, r)
  }
  async updateCommentThreadTemplate(e, t, i){
    const r=this._commentControls.get(e);
    r&&await r.updateCommentThreadTemplate(t, i)
  }
  disposeCommentThread(e, t){
    this.getCommentController(e)?.deleteCommentThreadMain(t)
  }
  getCommentMenus(e){
    if(this._commentMenus.get(e))return this._commentMenus.get(e);
    const t=this.instantiationService.createInstance(lTa);
    return this._commentMenus.set(e, t), t
  }
  updateComments(e, t){
    const i=this._commentControls.get(e);
    if(i){
      const r=Object.assign({
        
      },t,{
        uniqueOwner:e,ownerLabel:i.label,owner:i.owner
      });
      this.updateModelThreads(r)
    }
  }
  updateNotebookComments(e, t){
    const i=Object.assign({
      
    }, t, {
      uniqueOwner:e
    });
    this._onDidUpdateNotebookCommentThreads.fire(i)
  }
  updateCommentingRanges(e, t){
    if(t?.schemes&&t.schemes.length>0)for(const i of t.schemes)this._commentingRangeResourceHintSchemes.add(i);
    this._workspaceHasCommenting.set(!0), this._onDidUpdateCommentingRanges.fire({
      uniqueOwner:e
    })
  }
  async toggleReaction(e, t, i, r, s){
    const o=this._commentControls.get(e);
    if(o)return o.toggleReaction(t, i, r, s, Cs.None);
    throw new Error("Not supported")
  }
  hasReactionHandler(e){
    const t=this._commentControls.get(e);
    return t?!!t.features.reactionHandler:!1
  }
  async getDocumentComments(e){
    const t=[];
    for(const r of this._commentControls.values())t.push(r.getDocumentComments(e, Cs.None).then(s=>{
      for(const a of s.threads)a.comments?.length===0&&a.range&&this.removeContinueOnComment({
        range:a.range,uri:e,uniqueOwner:s.uniqueOwner
      });
      const o=this._continueOnComments.get(s.uniqueOwner);
      return s.pendingCommentThreads=o?.filter(a=>a.uri.toString()===e.toString()),s
    }).catch(s=>null));
    const i=await Promise.all(t);
    return this._updateResourcesWithCommentingRanges(e, i), i
  }
  async getNotebookComments(e){
    const t=[];
    return this._commentControls.forEach(i=>{
      t.push(i.getNotebookComments(e,Cs.None).catch(r=>null))
    }), Promise.all(t)
  }
  registerContinueOnCommentProvider(e){
    return this._continueOnCommentProviders.add(e), {
      dispose:()=>{
        this._continueOnCommentProviders.delete(e)
      }
    }
  }
  _saveContinueOnComments(e){
    const t=[];
    for(const i of e.values())t.push(...i);
    this.logService.debug(`Comments: URIs of continue on comments to add to storage ${t.map(i=>i.uri.toString()).join(", ")}.`), this.storageService.store(dTa, t, 1, 0)
  }
  removeContinueOnComment(e){
    const t=this._continueOnComments.get(e.uniqueOwner);
    if(t){
      const i=t.findIndex(r=>r.uri.toString()===e.uri.toString()&&Zt.equalsRange(r.range,e.range)&&(e.isReply===void 0||r.isReply===e.isReply));
      if(i>-1)return t.splice(i,1)[0]
    }
  }
  _addContinueOnComments(e, t){
    const i=new Set;
    for(const r of e)if(!t.has(r.uniqueOwner))t.set(r.uniqueOwner, [r]), i.add(r.uniqueOwner);
    else{
      const s=t.get(r.uniqueOwner);
      s.every(o=>o.uri.toString()!==r.uri.toString()||!Zt.equalsRange(o.range,r.range))&&(s.push(r),i.add(r.uniqueOwner))
    }
    return i
  }
  resourceHasCommentingRanges(e){
    return this._commentingRangeResourceHintSchemes.has(e.scheme)||this._commentingRangeResources.has(e.toString())
  }
}, hTa=__decorate([__param(0, ln), __param(1, Vu), __param(2, Fn), __param(3, wi), __param(4, Hi), __param(5, Rr), __param(6, Il)], hTa)
}
}), Lwu=