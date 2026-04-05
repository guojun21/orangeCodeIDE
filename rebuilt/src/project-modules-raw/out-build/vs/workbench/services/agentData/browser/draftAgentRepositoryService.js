// Module: out-build/vs/workbench/services/agentData/browser/draftAgentRepositoryService.js
// Offset: 28521979 (bundle byte offset)
// Size: 12027 bytes

rt(), Yn(), ps(), Sce(), Q9(), lva(), _U(), Bme(), blu(), hif="/workspace", mif=class{
  constructor(n){
    this._inner=new Yb(void 0), this._rootRef={
      object:n,dispose(){
        
      },[Symbol.dispose](){
        
      }
    }
  }
  get value(){
    return this._inner.value??this._rootRef
  }
  get rawValue(){
    return this._inner.value
  }
  set(n){
    this._inner.set(n)
  }
  onChange(n){
    return this._inner.onChange(e=>n(e??this._rootRef))
  }
}, R2="empty-state-draft", FAa=class{
  constructor(n, e, t, i){
    this._header=n, this._composerDataHandle=e, this._workspaceFactory=t, this._agentEnvironment=i, this._disposed=!1, this.pullRequestState=new Yb({
      type:"resolved",value:void 0
    })
  }
  get header(){
    return this._header
  }
  get workspaceIdentifier(){
    return this._header.environment.value
  }
  get agentEnvironment(){
    return AV(this._header.environment.value)?new Proxy(this._agentEnvironment, {
      get(n,e){
        if(e==="supportedModes")return nau;
        const t=Reflect.get(n,e,n);
        return typeof t=="function"?t.bind(n):t
      }
    }):this._agentEnvironment
  }
  get workspaceFactory(){
    return this._workspaceFactory
  }
  get composerDataHandle(){
    return this._composerDataHandle
  }
  get reviewDiffStats(){
    
  }
  async submitMessage(n, e){
    throw new Error("Draft agents do not support submitMessage; promote with createAgent instead.")
  }
  getQueueItems(){
    return[]
  }
  async removeFromQueue(n){
    throw new Error("Draft agents do not support queue operations.")
  }
  async updateQueueItem(n, e){
    throw new Error("Draft agents do not support queue operations.")
  }
  async submitQueueItemNow(n){
    throw new Error("Draft agents do not support queue operations.")
  }
  async restoreToCheckpoint(n){
    throw new Error("Draft agents do not support checkpoint restoration.")
  }
  hasDiff(){
    return!1
  }
  abortChat(){
    throw new Error("Draft agents do not support abortChat.")
  }
  dispose(){
    this._disposed||(this._disposed=!0, this._composerDataHandle.dispose())
  }
  [Symbol.dispose](){
    this.dispose()
  }
}, pif=class DQb extends at{
  constructor(e, t, i, r, s){
    super(), this.composerService=e, this.composerDataService=t, this.workspaceMetadataService=i, this.workspaceCollectionService=r, this.rootWorkspace=s, this._agents=new Yb([]), this.draftHandles=new Map, this._draftWorkspaces=new Map;
    const o=new Pyi({
      object:this.rootWorkspace,dispose(){
        
      },[Symbol.dispose](){
        
      }
    });
    this._draftAgentEnvironment=o, this._register(o), o.initialize();
    const a=this._agents;
    this.agents={
      get value(){
        return a.value.filter(l=>l.id!==R2)
      },onChange:l=>a.onChange(()=>l(a.value.filter(u=>u.id!==R2)))
    }, this._register(this.workspaceMetadataService.onDidChangeMetadata(l=>{
      for(const u of this._agents.value)u.repoUrls.value.length>0||u.environment.value.id===l.workspaceId&&l.gitRemoteUrl&&!u.repoUrls.value.includes(l.gitRemoteUrl)&&u.repoUrls.set([...u.repoUrls.value,l.gitRemoteUrl])
    }))
  }
  static async create(e, t, i, r, s, o){
    const a=new DQb(e, t, i, r, o);
    return await a.restoreDrafts(), a._emptyStateDraftRef=await a.ensureEmptyStateDraftAsync(s), a
  }
  async createDraftAgent(e, t, i){
    let r=i?.draftId, s=r===void 0?void 0:await this.ensureDraftHandle(r);
    if(!s){
      const A=await this.composerService.createComposer({
        skipShowAndFocus:!0,skipFocus:!0,skipSelect:!0,partialState:{
          ...r?{
            composerId:r
          }
          :void 0,...i?.modelConfig?{
            modelConfig:i.modelConfig
          }
          :void 0
        }
      });
      s=A?.weakHandle,r=A?.composerId
    }
    if(!s||!r)throw new Error(`Failed to create or load draft composer: ${r??"unknown"}`);
    const o=await this.ensureHandleAndData(r, s);
    if(!o)throw new Error(`Failed to access loaded draft composer data: ${r}`);
    const a=o.handle, l=o.data;
    this.draftHandles.set(r, a), i?.unifiedMode&&a.setData("unifiedMode", i.unifiedMode);
    const u=vlu(e, l.context?.selectedImages?.length??0), d=i?.richText, m=this.environmentToDraftTarget(t), p=Date.now();
    this.composerDataService.updateComposerData(a, {
      text:e,richText:d,subtitle:u,isDraft:!0,draftTarget:m,name:void 0,hasUnreadMessages:!1,lastUpdatedAt:p
    }), this.composerDataService.setAllComposersData("allComposers", A=>A.composerId===r, {
      subtitle:u,isDraft:!0,draftTarget:m,name:void 0,hasUnreadMessages:!1,lastUpdatedAt:p
    });
    const g=this.upsertHeader(r, m, {
      subtitle:u,createdAt:l.createdAt,lastUpdatedAt:p,hasUnreadMessages:!1
    }), f=new FAa(g, a.clone(), ()=>this._getDraftWorkspaceReactive(r), this._draftAgentEnvironment);
    return i?.onCreated?.(f), f
  }
  async loadAgent(e){
    let t=this._agents.value.find(o=>o.id===e);
    const i=await this.ensureHandleAndData(e, await this.ensureDraftHandle(e));
    if(!i)throw new Error(`Draft composer handle not found: ${e}`);
    const r=i.handle, s=i.data;
    if(!t){
      const o=s.draftTarget;
      if(s.isDraft===!1||!o)throw new Error(`Draft agent not found: ${e}`);
      const a=vlu(s.text,s.context?.selectedImages?.length??0);
      t=this.upsertHeader(e,o,{
        subtitle:a,createdAt:s.createdAt,lastUpdatedAt:s.lastUpdatedAt??s.createdAt,hasUnreadMessages:s.hasUnreadMessages??!1
      })
    }
    return new FAa(t, r.clone(), ()=>this._getDraftWorkspaceReactive(e), this._draftAgentEnvironment)
  }
  async archiveAgent(e){
    this.disposeDraftHandle(e), this._disposeDraftWorkspace(e), this._agents.set(this._agents.value.filter(t=>t.id!==e)), this.composerDataService.setAllComposersData("allComposers", t=>t.composerId===e, {
      isArchived:!0
    }), await this.composerDataService.saveComposers()
  }
  getEmptyStateDraft(){
    return this._emptyStateDraftRef
  }
  resetEmptyStateDraft(){
    const e=this.draftHandles.get(R2);
    if(!e)return;
    this.composerDataService.updateComposerData(e, {
      text:"",richText:void 0,subtitle:void 0,name:void 0,context:sR(),submitErrorDetails:void 0
    }), this.composerDataService.setAllComposersData("allComposers", i=>i.composerId===R2, {
      subtitle:void 0,name:void 0
    });
    const t=this._agents.value.find(i=>i.id===R2);
    t&&(t.name.set(Alu(void 0)), t.subtitle.set(void 0)), this._emptyStateDraftRef.dispose(), this._emptyStateDraftRef=new FAa(t??this._agents.value.find(i=>i.id===R2), e.clone(), ()=>this._getDraftWorkspaceReactive(R2), this._draftAgentEnvironment)
  }
  createDraftFromEmptyState(){
    const e=this.draftHandles.get(R2);
    if(!e)return;
    const t=this.composerDataService.getComposerData(e);
    if(!t){
      this.disposeDraftHandle(R2);
      return
    }
    const i=t.text?.trim()??"", r=[...t.context?.selectedImages??[]];
    if(i.length===0&&r.length===0)return;
    const s=t.draftTarget;
    if(!s)return;
    const o=this.draftTargetToEnvironment(s), a=t.richText;
    this.createDraftAgent(i, o, {
      richText:a
    }).then(l=>{
      r.length>0&&l.composerDataHandle.setData("context","selectedImages",r),l.dispose()
    }).catch(()=>{
      
    }), this.resetEmptyStateDraft()
  }
  updateDraftHeader(e, t){
    const i=this.draftHandles.get(e);
    if(!i)return;
    const r=this.environmentToDraftTarget(t);
    this.composerDataService.updateComposerData(i, {
      draftTarget:r
    }), this.composerDataService.setAllComposersData("allComposers", o=>o.composerId===e, {
      draftTarget:r
    });
    const s=this._agents.value.find(o=>o.id===e);
    if(s){
      const{
        environment:o,repoUrls:a
      }
      =this.getHeaderEnvironment(r,e);
      s.environment.set(o),s.repoUrls.set(a)
    }
    this._updateDraftWorkspace(e, t)
  }
  async ensureEmptyStateDraftAsync(e){
    try{
      return await this.loadAgent(R2)
    }
    catch{
      
    }
    this.disposeDraftHandle(R2), this._disposeDraftWorkspace(R2);
    try{
      await this.composerDataService.deleteComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(R2)
    }
    catch{
      
    }
    return this.createDraftAgent("", e, {
      draftId:R2
    })
  }
  async markAgentRead(e){
    await this.setUnreadState(e, !1)
  }
  async markAgentUnread(e){
    await this.setUnreadState(e, !0)
  }
  getAgentHeader(e){
    return this._agents.value.find(t=>t.id===e)
  }
  getAgent(e){
    
  }
  createAgentPrewarmHandle(e){
    return{
      agentId:e,dispose(){
        
      }
    }
  }
  createEnvironmentPrewarmHandle(e){
    return{
      dispose(){
        
      }
    }
  }
  async loadAgentEnvironment(e){
    throw new Error("loadAgentEnvironment is not supported for draft agents")
  }
  async setUnreadState(e, t){
    const i=this._agents.value.find(s=>s.id===e);
    if(!i)return;
    i.hasUnreadMessages.set(t);
    const r=await this.ensureDraftHandle(e);
    r&&this.composerDataService.updateComposerData(r, {
      hasUnreadMessages:t
    }), this.composerDataService.setAllComposersData("allComposers", s=>s.composerId===e, {
      hasUnreadMessages:t
    })
  }
  async ensureDraftHandle(e){
    const t=this.draftHandles.get(e);
    if(t&&this.isHandleLoaded(t))return t;
    t&&this.disposeDraftHandle(e);
    let i=await this.composerDataService.getComposerHandleById(e);
    if(i&&this.isHandleLoaded(i))return this.draftHandles.set(e, i), i;
    if(await this.composerDataService.whenInitialComposerDataLoaded(), i=await this.composerDataService.getComposerHandleById(e), i&&this.isHandleLoaded(i))return this.draftHandles.set(e, i), i;
    i?.dispose()
  }
  _getDraftWorkspaceReactive(e){
    let t=this._draftWorkspaces.get(e);
    return t||(t=new mif(this.rootWorkspace), this._draftWorkspaces.set(e, t)), t
  }
  _updateDraftWorkspace(e, t){
    const i=this._getDraftWorkspaceReactive(e);
    if(i.rawValue?.dispose(), t.type==="existing"){
      const r=t.environment.id;
      i.set(void 0),this.workspaceCollectionService.createWorkspaceReference(t.environment).then(s=>{
        const o=this.getDraftTargetFromCachedHandle(e);
        if(o?.type!=="existing"||o.environment.id!==r){
          s.dispose();
          return
        }
        i.rawValue?.dispose(),i.set(s)
      }).catch(()=>{
        i.set(void 0)
      })
    }
    else i.set(void 0)
  }
  _disposeDraftWorkspace(e){
    const t=this._draftWorkspaces.get(e);
    t&&(t.rawValue?.dispose(), t.set(void 0)), this._draftWorkspaces.delete(e)
  }
  isHandleLoaded(e){
    return!e.isDisposed&&this.composerDataService.getComposerData(e)!==void 0
  }
  getDraftTargetFromCachedHandle(e){
    const t=this.draftHandles.get(e);
    if(!t||!this.isHandleLoaded(t)){
      t&&this.disposeDraftHandle(e);
      return
    }
    return this.composerDataService.getComposerData(t)?.draftTarget
  }
  async ensureHandleAndData(e, t){
    if(t){
      const s=this.composerDataService.getComposerData(t);
      if(s)return{
        handle:t,data:s
      };
      this.disposeDraftHandle(e)
    }
    const i=await this.ensureDraftHandle(e);
    if(!i)return;
    const r=this.composerDataService.getComposerData(i);
    if(!r){
      this.disposeDraftHandle(e);
      return
    }
    return{
      handle:i,data:r
    }
  }
  disposeDraftHandle(e){
    this.draftHandles.get(e)?.dispose(), this.draftHandles.delete(e)
  }
  environmentToDraftTarget(e){
    switch(e.type){
      case"existing":return{
        type:"existing",environment:e.environment
      };
      case"new":return{
        type:"new",environment:e.environment
      };
      default:{
        const t=e;
        throw new Error(`Unknown environment type: ${t.type}`)
      }
    }
  }
  draftTargetToEnvironment(e){
    switch(e.type){
      case"existing":return{
        type:"existing",environment:e.environment
      };
      case"new":return{
        type:"new",environment:e.environment
      };
      default:{
        const t=e;
        throw new Error(`Unknown draft target type: ${t.type}`)
      }
    }
  }
  getHeaderEnvironment(e, t){
    if(e.type==="existing"){
      const r=Z1c(e.environment),s=[],o=this.workspaceMetadataService.getMetadata(r);
      return o?.gitRemoteUrl&&s.push(o.gitRemoteUrl),{
        environment:r,repoUrls:s
      }
    }
    const i=cP(e.environment.id);
    return{
      environment:W8A(t),repoUrls:i?[i]:[]
    }
  }
  createHeader(e, t, i){
    const{
      environment:r,repoUrls:s
    }
    =this.getHeaderEnvironment(t, e);
    return{
      id:e,environment:new Yb(r),name:new Yb(Alu(i.subtitle)),source:"draft",status:new Yb("done"),createdAt:i.createdAt,lastUpdatedAt:new Yb(i.lastUpdatedAt),subtitle:new Yb(i.subtitle),repoUrls:new Yb(s),hasUnreadMessages:new Yb(i.hasUnreadMessages),prUrl:new Yb(void 0),prStatus:new Yb(void 0)
    }
  }
  upsertHeader(e, t, i){
    const r=this._agents.value.find(o=>o.id===e);
    if(r){
      const{
        environment:o,repoUrls:a
      }
      =this.getHeaderEnvironment(t,e);
      return r.name.set(Alu(i.subtitle)),r.status.set("done"),r.lastUpdatedAt.set(i.lastUpdatedAt),r.subtitle.set(i.subtitle),r.environment.set(o),r.repoUrls.set(a),this.sortHeadersByLastUpdated(),r
    }
    const s=this.createHeader(e, t, i);
    return this._agents.set([s, ...this._agents.value]), this.sortHeadersByLastUpdated(), s
  }
  sortHeadersByLastUpdated(){
    this._agents.set([...this._agents.value].sort((e, t)=>t.lastUpdatedAt.value-e.lastUpdatedAt.value))
  }
  async restoreDrafts(){
    const e=this.composerDataService.allComposersData.allComposers, t=[];
    for(const i of e){
      if(!i.isDraft||!i.draftTarget||i.isArchived)continue;
      const r=await this.composerDataService.getComposerHandleById(i.composerId);
      if(!r)continue;
      const s=this.composerDataService.getComposerData(r);
      if(!s||s.isDraft===!1)continue;
      this.draftHandles.set(i.composerId,r);
      const o=vlu(s.text,s.context?.selectedImages?.length??0),a=this.createHeader(i.composerId,i.draftTarget,{
        subtitle:o,createdAt:i.createdAt,lastUpdatedAt:s.lastUpdatedAt??i.lastUpdatedAt??i.createdAt,hasUnreadMessages:s.hasUnreadMessages??!1
      });
      t.push(a)
    }
    t.sort((i, r)=>r.lastUpdatedAt.value-i.lastUpdatedAt.value), this._agents.set(t)
  }
}
}
}), cqe, Jnt=