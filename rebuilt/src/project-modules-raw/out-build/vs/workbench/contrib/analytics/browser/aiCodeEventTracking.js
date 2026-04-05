// Module: out-build/vs/workbench/contrib/analytics/browser/aiCodeEventTracking.js
// Offset: 33825637 (bundle byte offset)
// Size: 14134 bytes

fwe(), rt(), cu(), Hl(), _M(), F$e(), Hk(), Er(), Wt(), OSt(), ps(), _Ee(), Ud(), Vw(), Wu(), uQ(), Bie(), pQ(), cp(), Zk(), wmy(), n$f=100, i$f=25, r$f=100, Xki=xi("aiCodeEventTrackingService"), gDa=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g){
    super(), this.editorWorkerService=e, this.workspaceContextService=t, this.analyticsService=i, this.experimentService=r, this.aiService=s, this.cppEventLoggerService=o, this.inlineDiffService=a, this.diffDecorationVisibilityService=l, this.composerDataService=u, this.composerChatService=d, this.composerCodeBlockService=m, this.composerEventService=p, this.aiCodeTrackingService=g, this.processedEvents=new Fb(n$f), this.recentHashes=new Fb(i$f), this.composerTally=new Fb(r$f), this.registerTabEvents(), this.registerComposerDiffEvents(), this.registerExperimentalSuggestionEvents()
  }
  normalizePath(e){
    return Eme(this.workspaceContextService, e)??e
  }
  getComposer(e){
    return e?this.composerDataService.getComposerDataIfLoaded(e):void 0
  }
  registerTabEvents(){
    this._register(this.cppEventLoggerService.onDidSuggestCpp(async({
      file:e,previousContent:t,updatedContent:i,cppSource:r,requestId:s
    })=>{
      const o=QD(e).slice(1),{
        linesAdded:a,linesRemoved:l
      }
      =await pDa(this.editorWorkerService,t,i).catch(()=>({
        linesAdded:0,linesRemoved:0
      }));
      this.analyticsService.trackEvent("tab.suggestion",{
        requestId:s,model:"tab",fileExtension:o,linesAdded:a,linesRemoved:l,cppSource:r
      })
    })), this._register(this.cppEventLoggerService.onDidAcceptAiContent(async e=>{
      const{
        file:t,previousContent:i,updatedContent:r,cppSource:s,source:o,requestId:a
      }
      =e,l=QD(t).slice(1),u=this.normalizePath(t);
      await Promise.all([this.aiCodeTrackingService.storeGeneratedContent(u,i,r,{
        source:o,fileExtension:l,fileName:u,requestId:a
      }).catch(d=>console.error("[AiCodeTracking] Error storing:",d)),pDa(this.editorWorkerService,i,r).then(({
        linesAdded:d,linesRemoved:m
      })=>{
        this.analyticsService.trackEvent("tab.accept",{
          linesAdded:d,linesRemoved:m,fileExtension:l,requestId:a,model:"tab",cppSource:s
        })
      }).catch(d=>console.error("[AiCodeTracking] Error calculating lines:",d))]),this.aiCodeTrackingService.acceptedSuggestion({
        ...e,file:u
      })
    })), this._register(this.cppEventLoggerService.onDidRejectCpp(async({
      file:e,previousContent:t,updatedContent:i,cppSource:r,requestId:s
    })=>{
      const o=QD(e).slice(1),{
        linesAdded:a,linesRemoved:l
      }
      =await pDa(this.editorWorkerService,t,i).catch(()=>({
        linesAdded:0,linesRemoved:0
      }));
      this.analyticsService.trackEvent("tab.reject",{
        requestId:s,model:"tab",fileExtension:o,linesAdded:a,linesRemoved:l,cppSource:r
      })
    }))
  }
  registerComposerDiffEvents(){
    this._register(this.inlineDiffService.onDidAcceptDiff(async e=>{
      const t=this.normalizePath(e.uri.path);
      if(e.change){
        if(e.change.accepted.length===0&&e.change.rejected.length===0)return;
        const o=this.generateRecentHash(t,{
          added:e.change.accepted,removed:e.change.rejected
        });
        if(this.recentHashes.has(o))return;
        this.recentHashes.set(o,!0)
      }
      const i=this.generateEventKey("full-diff",t,e.requestId);
      if(this.processedEvents.has(i))return;
      const r=this.getComposer(e.composerMetadata?.composerId),s=await this.collectDiffMetadata(e.composerMetadata?.composerId,e.inlineDiff,e,e.requestId).catch(()=>{
        
      });
      if(s){
        const o=e.change?.accepted?.length??s.linesAdded,a=e.change?.rejected?.length??s.linesRemoved;
        (o>0||a>0)&&this.trackComposerDiffEvents("accept",{
          ...s,composerId:e.composerMetadata?.composerId,linesAdded:o,linesRemoved:a,invocationID:r?.latestChatGenerationUUID
        },e.uri.path)
      }
      this.processedEvents.set(i,!0),this.aiCodeTrackingService.acceptedSuggestion({
        ...e,file:t
      })
    })), this._register(this.inlineDiffService.onDidAcceptPartialDiff(async e=>{
      const t=this.normalizePath(e.diffInfo.uri.path),i=this.generateEventKey("partial-diff",t,e.requestId,e.change);
      if(this.processedEvents.has(i)||this.processedEvents.has(this.generateEventKey("full-diff",t,e.requestId)))return;
      const r=this.generateRecentHash(t,{
        added:e.change.accepted,removed:e.change.rejected
      });
      if(this.recentHashes.has(r))return;
      const s=this.getComposer(e.diffInfo.composerMetadata?.composerId),o=await this.collectDiffMetadata(e.diffInfo.composerMetadata?.composerId,e.inlineDiff,e.diffInfo,e.requestId).catch(()=>{
        
      });
      o&&this.trackComposerDiffEvents("accept",{
        ...o,composerId:e.diffInfo.composerMetadata?.composerId,linesAdded:e.change.accepted.length,linesRemoved:e.change.rejected.length,invocationID:s?.latestChatGenerationUUID
      },e.diffInfo.uri.path),this.processedEvents.set(i,!0),this.recentHashes.set(r,!0),this.aiCodeTrackingService.acceptedSuggestion({
        ...e,file:t
      })
    })), this._register(this.inlineDiffService.onDidRejectDiff(async e=>{
      const t=this.getComposer(e.composerMetadata?.composerId),i=await this.collectDiffMetadata(e.composerMetadata?.composerId,e.inlineDiff,e).catch(()=>{
        
      });
      i&&this.trackComposerDiffEvents("reject",{
        ...i,composerId:e.composerMetadata?.composerId,linesAdded:e.change?.accepted?.length??i.linesAdded,linesRemoved:e.change?.rejected?.length??i.linesRemoved,source:e.sourceContext,invocationID:t?.latestChatGenerationUUID
      },e.uri.path)
    })), this._register(this.inlineDiffService.onDidRejectPartialDiff(async e=>{
      const t=this.getComposer(e.diffInfo.composerMetadata?.composerId),i=await this.collectDiffMetadata(e.diffInfo.composerMetadata?.composerId,e.inlineDiff,e.diffInfo).catch(()=>{
        
      });
      i&&this.trackComposerDiffEvents("reject",{
        ...i,composerId:e.diffInfo.composerMetadata?.composerId,source:e.diffInfo.sourceContext,invocationID:t?.latestChatGenerationUUID
      },e.diffInfo.uri.path)
    })), this._register(this.composerEventService.onDidFinishStreamChat(async e=>{
      e.diffEvents.length>0&&(e.isErrored||e.isAborted)&&await this.processDiffEvents(e.diffEvents,e.isAborted?"aborted":"errored").catch(t=>console.error("[AiCodeTracking] Error processing diff events:",t))
    })), this._register(this.composerChatService.onDidDisplayDiffs(async e=>{
      await this.processDiffEvents(e,"completed").catch(t=>console.error("[AiCodeTracking] Error processing diff events:",t))
    })), this._register(this.composerEventService.onDidAcceptDiffWithoutInline(async e=>{
      const t=this.normalizePath(e.uri.path),i=this.generateEventKey("no-inline-diff",t,e.generationUUID);
      if(this.processedEvents.has(i))return;
      const r=this.getComposer(e.composerId),s=QD(e.uri.path).slice(1),{
        linesAdded:o,linesRemoved:a,composerId:l,generationUUID:u
      }
      =e;
      this.analyticsService.trackEvent("composer.diff_summary",{
        filesChanged:1,linesAdded:o,linesRemoved:a,model:r?.modelConfig?.modelName??"",isAgentic:!!r?.isAgentic,composerRequestID:u,invocationID:r?.latestChatGenerationUUID,status:"completed",composerId:l
      }),this.analyticsService.trackEvent("composer.diff_file",{
        linesAdded:o,linesRemoved:a,fileExtension:s,composerRequestID:u,invocationID:r?.latestChatGenerationUUID,status:"completed",composerId:l
      }),this.trackComposerDiffEvents("accept",{
        linesAdded:o,linesRemoved:a,fileExtension:s,model:r?.modelConfig?.modelName,uiSource:"composer",composerRequestID:u,promptBarID:void 0,isWorktree:!!r?.gitWorktree,composerId:l,source:"composer",invocationID:r?.latestChatGenerationUUID
      },e.uri.path),this.processedEvents.set(i,!0),this.aiCodeTrackingService.acceptedSuggestion({
        file:t,previousContent:e.previousContent,updatedContent:e.updatedContent,source:rO.COMPOSER,requestId:u,range:{
          startLineNumber:1,startColumn:1,endLineNumber:e.updatedContent.split(`
`).length,endColumn:1
        }
      })
    })), this._register(this.composerEventService.onDidPatchGraphDiffDisplayed(e=>{
      this.handlePatchGraphDiffDisplayedEvent(e)
    })), this._register(this.composerEventService.onDidPatchGraphDiffAccepted(e=>{
      this.handlePatchGraphDiffActionEvent("accept",e)
    })), this._register(this.composerEventService.onDidPatchGraphDiffRejected(e=>{
      this.handlePatchGraphDiffActionEvent("reject",e)
    }))
  }
  handlePatchGraphDiffDisplayedEvent(e){
    if(e.linesAdded<=0&&e.linesRemoved<=0)return;
    const t=this.getComposer(e.composerId), i=QD(e.uri.path).slice(1), r=e.generationUUID??"";
    this.analyticsService.trackEvent("composer.diff_summary", {
      filesChanged:1,linesAdded:e.linesAdded,linesRemoved:e.linesRemoved,model:t?.modelConfig?.modelName??"",isAgentic:!!t?.isAgentic,composerRequestID:r,invocationID:t?.latestChatGenerationUUID,status:"completed",composerId:e.composerId
    }), this.analyticsService.trackEvent("composer.diff_file", {
      linesAdded:e.linesAdded,linesRemoved:e.linesRemoved,fileExtension:i,composerRequestID:r,invocationID:t?.latestChatGenerationUUID,status:"completed",composerId:e.composerId
    })
  }
  handlePatchGraphDiffActionEvent(e, t){
    if(t.linesAdded<=0&&t.linesRemoved<=0)return;
    const i=this.getComposer(t.composerId), r={
      linesAdded:t.linesAdded,linesRemoved:t.linesRemoved,fileExtension:QD(t.uri.path).slice(1),model:i?.modelConfig?.modelName,uiSource:"composer",composerRequestID:t.generationUUID??"",promptBarID:void 0,isWorktree:!!i?.gitWorktree,composerId:t.composerId,source:t.sourceContext??"editor",invocationID:i?.latestChatGenerationUUID
    };
    this.trackComposerDiffEvents(e, r, t.uri.path)
  }
  registerExperimentalSuggestionEvents(){
    if(!this.experimentService.checkFeatureGate("experimental_code_analytics_suggestions"))return;
    const e=t=>t.map(({
      range:i,rangeOffset:r=0,rangeLength:s=0,text:o
    })=>({
      range:{
        start:{
          line:i.startLineNumber-1,character:i.startColumn-1
        },end:{
          line:i.endLineNumber-1,character:i.endColumn-1
        }
      },rangeOffset:r,rangeLength:s,text:o??""
    }));
    this._register(this.cppEventLoggerService.onDidApplyCppEdits(t=>{
      this.aiCodeTrackingService.generatedSuggestion({
        uri:t.uri.toString(),requestId:t.requestId,changes:e(t.edits),source:t.source===rO.TAB?"tab":"composer"
      })
    })), this._register(this.inlineDiffService.onDidApplyDiffEdits(t=>{
      this.aiCodeTrackingService.generatedSuggestion({
        uri:t.uri.toString(),requestId:t.requestId,changes:e(t.edits),source:t.source===rO.TAB?"tab":"composer"
      })
    }))
  }
  async processDiffEvents(e, t){
    const i=this.experimentService.checkFeatureGate("composer_tally_net_lines");
    let r={
      linesAdded:0,linesRemoved:0,filesProcessed:0
    }, s;
    for(const o of e){
      const a=this.composerDataService.getHandleIfLoaded(o.composerId);
      if(!a)continue;
      const l=this.composerCodeBlockService.getInlineDiff(a,o.uri);
      if(!l||!o.codeblockId)continue;
      const u=this.generateEventKey("diff-display",o.uri.path,o.generationUUID);
      if(this.processedEvents.has(u))continue;
      const d=await this.collectDiffMetadata(o.composerId,l,o.diffInfo,o.generationUUID);
      if(!d)continue;
      s={
        composerRequestID:o.generationUUID,modelName:o.modelName,composerId:o.composerId
      };
      let{
        linesAdded:m,linesRemoved:p
      }
      =d;
      if(i){
        const f=`${o.composerId}-${o.uri.path}`,A=this.composerTally.get(f)??{
          linesAdded:0,linesRemoved:0
        };
        m=Math.max(0,m-A.linesAdded),p=Math.max(0,p-A.linesRemoved),this.composerTally.set(f,{
          linesAdded:A.linesAdded+m,linesRemoved:A.linesRemoved+p
        })
      }
      r.linesAdded+=m,r.linesRemoved+=p,r.filesProcessed++,this.diffDecorationVisibilityService.shouldHideInlineDiffs()||this.analyticsService.trackEvent("composer.diff_file",{
        linesAdded:m,linesRemoved:p,fileExtension:d.fileExtension,composerRequestID:o.generationUUID,composerId:o.composerId,status:t
      }),this.processedEvents.set(u,!0)
    }
    r.filesProcessed>0&&s&&(this.diffDecorationVisibilityService.shouldHideInlineDiffs()||this.analyticsService.trackEvent("composer.diff_summary", {
      filesChanged:r.filesProcessed,linesAdded:r.linesAdded,linesRemoved:r.linesRemoved,model:s.modelName,isAgentic:!0,composerRequestID:s.composerRequestID,composerId:s.composerId,status:t
    }))
  }
  trackComposerDiffEvents(e, t, i){
    const{
      source:r="editor",fileExtension:s,linesAdded:o,linesRemoved:a,composerId:l
    }
    =t;
    if(this.analyticsService.trackEvent(`composer.${e}_diff`, {
      ...t,source:r
    }), s&&this.analyticsService.trackEvent(`composer.${e}_diff_file`, {
      ...t,fileExtension:s
    }), this.experimentService.checkFeatureGate("composer_tally_net_lines")){
      const u=`${l}-${i}`,d=this.composerTally.get(u);
      d&&this.composerTally.set(u,{
        linesAdded:Math.max(0,d.linesAdded-o),linesRemoved:Math.max(0,d.linesRemoved-a)
      })
    }
  }
  async collectDiffMetadata(e, t, i, r){
    if(t)try{
      const s=t.changes??[],o=this.getComposer(e);
      let a=i?.change?.accepted?.length,l=i?.change?.rejected?.length;
      if(a===void 0||l===void 0){
        a=l=0;
        for(const p of s)a+=p.addedRange.endLineNumberExclusive-p.addedRange.startLineNumber,l+=p.removedTextLines.length
      }
      const u=i?.diffId?this.inlineDiffService.getHandlerByDiffId(i.diffId):void 0,d=!!u?.promptBarId,m=e??i?.composerMetadata?.composerId;
      return{
        linesAdded:a??0,linesRemoved:l??0,fileExtension:i?.uri?QD(i.uri.path).slice(1):"",model:d?this.aiService.getModelDetails({
          specificModelField:"cmd-k"
        })?.modelName:o?.modelConfig?.modelName,uiSource:d?"cmdk":m?"composer":null,composerRequestID:r??t.generationUUID,promptBarID:u?.promptBarId,isWorktree:!!o?.gitWorktree,source:i?.sourceContext??"editor",composerId:m
      }
    }
    catch(s){
      console.error("[composer] Error collecting diff metadata:",s);
      return
    }
  }
  generateEventKey(...e){
    return _xe.hash(e.map(t=>JSON.stringify(t)).join(":"), 0).toString()
  }
  generateRecentHash(e, {
    added:t, removed:i
  }){
    return _xe.hash(`${e}${t.join(`
`)}\0\0${i.join(`
`)}`, 0)
  }
  async trackNoInlineDiffEvents(e){
    const{
      contentsBefore:t,contentsAfter:i,fileExtension:r,composerId:s,composerRequestID:o,model:a,isWorktree:l,invocationID:u
    }
    =e, {
      linesAdded:d,linesRemoved:m
    }
    =await pDa(this.editorWorkerService, t, i).catch(()=>({
      linesAdded:0,linesRemoved:0
    }));
    this.analyticsService.trackEvent("composer.diff_file", {
      linesAdded:d,linesRemoved:m,fileExtension:r,composerRequestID:o,composerId:s,invocationID:u,status:"completed"
    }), this.analyticsService.trackEvent("composer.accept_diff_file", {
      linesAdded:d,linesRemoved:m,fileExtension:r,composerRequestID:o,composerId:s,model:a,uiSource:"composer",isWorktree:l,invocationID:u
    }), this.analyticsService.trackEvent("composer.diff_summary", {
      filesChanged:1,linesAdded:d,linesRemoved:m,model:a??"",isAgentic:!0,composerRequestID:o,composerId:s,invocationID:u,status:"completed"
    }), this.analyticsService.trackEvent("composer.accept_diff", {
      linesAdded:d,linesRemoved:m,model:a??"",uiSource:"composer",composerRequestID:o,isWorktree:l,composerId:s,source:"composer",invocationID:u
    })
  }
}, gDa=__decorate([__param(0, c_), __param(1, Lr), __param(2, uh), __param(3, Tl), __param(4, Jv), __param(5, dce), __param(6, fL), __param(7, CEe), __param(8, Oa), __param(9, wM), __param(10, EJ), __param(11, BA), __param(12, Yz)], gDa), Vi(Xki, gDa, 0)
}
}), NEt, s$f, e1i=