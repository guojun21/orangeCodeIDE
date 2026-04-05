// Module: out-build/vs/workbench/contrib/composer/browser/quickAgentService.js
// Offset: 33850634 (bundle byte offset)
// Size: 3264 bytes

Wt(), Er(), rt(), yn(), J0(), Bie(), cp(), lie(), Dd(), n1i=xi("quickAgentService"), _Da=class extends at{
  constructor(e, t, i, r, s, o){
    super(), this.instantiationService=e, this.composerService=t, this.composerChatService=i, this.composerDataService=r, this.composerContextService=s, this.reactiveStorageService=o, this._onDidChangeQuickAgentComposerIdEmitter=this._register(new Qe), this.onDidChangeQuickAgentComposerId=this._onDidChangeQuickAgentComposerIdEmitter.event, this.setupComposerDeletionListener()
  }
  get quickAgentComposerId(){
    return this._quickAgentComposerId
  }
  clearQuickAgentComposer(){
    this.setQuickAgentComposerId(void 0)
  }
  setQuickAgentComposerId(e){
    this._quickAgentComposerId!==e&&(this._quickAgentComposerId=e, this._onDidChangeQuickAgentComposerIdEmitter.fire(e))
  }
  setupComposerDeletionListener(){
    this._register(this.reactiveStorageService.onChangeEffectManuallyDisposed({
      deps:[()=>this.composerDataService.allComposersData.allComposers.map(e=>e.composerId)],onChange:({
        deps:e,prevDeps:t
      })=>{
        const i=e[0],s=(t?.[0]??[]).filter(o=>!i.includes(o));
        this._quickAgentComposerId&&s.includes(this._quickAgentComposerId)&&this.setQuickAgentComposerId(void 0)
      },runNowToo:!1
    }))
  }
  async submit(e, t, i){
    const r=await this.getOrCreateQuickAgentComposer(e);
    t&&await this.addContextToComposer(r, t);
    const o=this.reactiveStorageService.applicationUserPersistentStorage.featureModelConfigs?.quickAgent?.defaultModel??"default";
    await this.composerChatService.submitChatMaybeAbortCurrent(r, e, {
      modelOverride:o,richText:i
    })
  }
  async getOrCreateQuickAgentComposer(e){
    if(this._quickAgentComposerId){
      const s=this.composerDataService.getComposerDataIfLoaded(this._quickAgentComposerId);
      if(s&&s.isEphemeral===!0)return this._quickAgentComposerId;
      this.setQuickAgentComposerId(void 0)
    }
    const i=this.reactiveStorageService.applicationUserPersistentStorage.featureModelConfigs?.quickAgent?.defaultModel??"default", r=await this.composerService.createComposer({
      partialState:{
        unifiedMode:"agent",modelConfig:{
          modelName:i,maxMode:!1
        },text:e,isEphemeral:!0,name:"Quick Chat"
      },autoSubmit:!1,skipShowAndFocus:!0,skipFocus:!0,skipSelect:!0
    });
    if(!r)throw new Error("Failed to create quick agent composer");
    return this.setQuickAgentComposerId(r.composerId), r.composerId
  }
  async addContextToComposer(e, t){
    const i=this.composerDataService.getHandleIfLoaded(e);
    if(i){
      if(t.files&&t.files.length>0)for(const r of t.files)this.composerContextService.addContext({
        composerHandle:i,contextType:"fileSelections",value:{
          uri:r
        },shouldShowPreview:!1
      });
      if(t.additionalContext){
        const r=t.additionalContext;
        if(r.fileSelections)for(const s of r.fileSelections)this.composerContextService.addContext({
          composerHandle:i,contextType:"fileSelections",value:s,shouldShowPreview:!1
        });
        if(r.folderSelections)for(const s of r.folderSelections)this.composerContextService.addContext({
          composerHandle:i,contextType:"folderSelections",value:s,shouldShowPreview:!1
        });
        if(r.selections)for(const s of r.selections)this.composerContextService.addContext({
          composerHandle:i,contextType:"selections",value:s,shouldShowPreview:!1
        })
      }
    }
  }
}, _Da=__decorate([__param(0, ln), __param(1, ag), __param(2, wM), __param(3, Oa), __param(4, hV), __param(5, ku)], _Da), Vi(n1i, _Da, 1)
}
}), avn, ele, l$f, SDa=