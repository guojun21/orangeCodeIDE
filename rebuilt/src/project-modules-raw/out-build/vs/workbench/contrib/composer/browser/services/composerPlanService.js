// Module: out-build/vs/workbench/contrib/composer/browser/services/composerPlanService.js
// Offset: 30704629 (bundle byte offset)
// Size: 23578 bytes

Wt(), Er(), Vg(), ZS(), cv(), Uv(), Jk(), cp(), Zk(), J0(), oP(), jk(), Yn(), ss(), gE(), Wu(), Bc(), fN(), SI(), Dd(), yn(), rt(), k$e(), lie(), vN(), Ud(), ri(), kr(), rf(), od(), _M(), pQ(), WNe(), nkt(), UF(), N1(), kQ(), _g(), IV=xi("composerPlanService"), (function(n){
  n.NONE="none", n.ACTIVE="active", n.COMPLETE="complete"
})(IT||(IT={
  
})), _0a=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N){
    super(), this._composerDataService=e, this._composerEventService=t, this._composerService=i, this._composerViewsService=r, this._editorService=s, this._experimentService=o, this._instantiationService=a, this._modelConfigService=l, this._reactiveStorageService=u, this._composerContextService=d, this._analyticsService=m, this._composerModesService=p, this._storageService=g, this._editorGroupsService=f, this._inlineDiffService=A, this._composerCodeBlockService=w, this._reviewChangesService=C, this._composerChatService=x, this._planStorageService=I, this._filesConfigurationService=B, this._composerUtilsService=R, this._pathService=N, this.suggestedPlans=[], this._pendingScrollToTodos=new Set, this._activeBuildComposersByPlanId=new Map, this._onNewPlanSuggested=this._register(new Qe), this.onNewPlanSuggested=this._onNewPlanSuggested.event, this._onDidPlanUpdate=this._register(new Qe), this.onDidPlanUpdate=this._onDidPlanUpdate.event, this._activePlanModelRefs=new Map, this._register(this._planStorageService.onDidChangePlan(({
      planId:M,uri:O
    })=>{
      this._onDidPlanUpdate.fire({
        planId:M,uri:O
      })
    })), this._register(this._composerEventService.onDidComposerStopGenerating(({
      composerId:M
    })=>{
      this.notifyBuilderStopped(M)
    })), this._register(this._composerEventService.onDidFinishStreamChat(({
      composerId:M
    })=>{
      this.notifyBuilderStopped(M)
    })), this._register(this._composerEventService.onDidContextChange(({
      composerId:M
    })=>{
      this._checkAndRegisterPlanReferences(M)
    }))
  }
  async _checkAndRegisterPlanReferences(e){
    const t=this._composerDataService.getComposerDataIfLoaded(e);
    if(!t)return;
    let i;
    try{
      const s=await this._pathService.userHome();
      i=lV(s)
    }
    catch{
      
    }
    const r=t.context;
    if(r)for(const[s, o]of Object.entries(r)){
      if(s!=="fileSelections"&&s!=="selections")continue;
      const a=o;
      for(const l of a){
        const u=l.uri;
        if(!u)continue;
        const d=je.revive(u);
        if(d&&Rq(d,i))try{
          await this.registerComposerReference(d,e)
        }
        catch(m){
          console.warn("[ComposerPlanService] Failed to register plan reference:",m)
        }
      }
    }
  }
  markPlanBuildActive({
    planId:e, composerId:t
  }){
    const i=this._activeBuildComposersByPlanId.get(e);
    if(i){
      i.add(t);
      return
    }
    this._activeBuildComposersByPlanId.set(e, new Set([t]))
  }
  clearPlanBuildActive({
    planId:e, composerId:t
  }){
    const i=this._activeBuildComposersByPlanId.get(e);
    i&&(i.delete(t), i.size===0&&this._activeBuildComposersByPlanId.delete(e))
  }
  clearActiveBuildsForComposer(e){
    for(const[t, i]of this._activeBuildComposersByPlanId)i.delete(e), i.size===0&&this._activeBuildComposersByPlanId.delete(t)
  }
  async notifyBuilderStopped(e){
    const t=await this._planStorageService.getPlanEntriesBuiltBy(e);
    this.clearActiveBuildsForComposer(e);
    for(const{
      planId:i,uri:r
    }
    of t)this._onDidPlanUpdate.fire({
      planId:i,uri:r
    })
  }
  async firePlanUpdateForUri(e){
    const t=await this._planStorageService.getRegistryEntry(e);
    t&&this._onDidPlanUpdate.fire({
      planId:t.id,uri:t.uri
    })
  }
  setupAutoOpenReviewPaneAfterFirstEdit(e, t, i){
    if(i==="auto"||!this._experimentService.checkFeatureGate("auto_open_review_during_plan_build"))return;
    const s=this._composerDataService.getHandleIfLoaded(e);
    if(!s)return;
    const o=this._composerCodeBlockService.getAllInlineDiffs(s).length;
    let a=!1;
    const l=async d=>{
      if(!(a||d<=o)&&this._composerService.shouldShowAcceptRejectAll(e)){
        a=!0;
        try{
          for(const m of this._editorGroupsService.groups)for(const p of m.editors){
            const g=p.resource;
            g&&g.toString()===t.toString()&&await this._editorService.closeEditor({
              editor:p,groupId:m.id
            })
          }
          this._analyticsService.trackEvent("review_changes.opened",{
            entrypoint:"plan_execution_auto",composer_id:e
          }),await this._reviewChangesService.openOrUpdateReviewChangesEditor(e,void 0)
        }
        catch(m){
          console.warn("[ComposerPlanService] Failed to auto-open review pane:",m)
        }
      }
    }, u=this._inlineDiffService.inlineDiffs.event(()=>{
      if(a)return;
      const d=this._composerDataService.getHandleIfLoaded(e);
      if(!d)return;
      const m=d.data.composerId,f=this._inlineDiffService.inlineDiffs.nonReactive().filter(A=>A.composerMetadata?.composerId===m).length;
      (async()=>(await l(f),a&&u.dispose()))()
    })
  }
  getPlanExecutionConfigForExecution(e){
    if(wb(this._storageService, "planExecUseChatModel")){
      const s=e?.data?.modelConfig??this._modelConfigService.getModelConfig("composer");
      return{
        modelName:s.modelName&&s.modelName!==""?s.modelName:"default",maxMode:s.maxMode,selectedModels:s.selectedModels
      }
    }
    const i=this._modelConfigService.getModelConfig("plan-execution");
    return{
      modelName:i.modelName&&i.modelName!==""?i.modelName:"default",maxMode:!!i.maxMode,selectedModels:i.selectedModels
    }
  }
  getPlanUriFromBubble(e, t){
    const i=this.getPlanBubbleData(e, t);
    if(i?.additionalData?.planUri)return dEe(i.additionalData.planUri)
  }
  getPlanBubbleData(e, t){
    const i=this._composerDataService.getToolFormer(e);
    if(!i)return;
    const r=i.getBubbleData(t);
    if(r?.tool===an.CREATE_PLAN)return r
  }
  getMostRecentPlanBubbleId(e){
    const t=e.data;
    return(()=>{
      const r=t.fullConversationHeadersOnly;
      for(let s=r.length-1;
      s>=0;
      s-=1){
        const o=r[s]?.bubbleId;
        if(!o)continue;
        if(this.getPlanBubbleData(e,o))return o
      }
    })()
  }
  hasPendingPlan(e){
    const t=this.getMostRecentPlanBubbleId(e);
    if(!t)return!1;
    const r=this.getPlanBubbleData(e, t)?.additionalData?.planUri;
    if(!r)return!1;
    try{
      const s=dEe(r),o=this._planStorageService.getRegistryEntrySync(s);
      return o?Object.keys(o.builtBy).length===0:!1
    }
    catch{
      return!1
    }
  }
  async acceptPlan(e, t, i, r, s){
    const o=e.data.composerId, a=e.data, {
      unifiedMode:l
    }
    =s??{
      
    }, u=a.currentBubbleId;
    u&&(this._composerUtilsService.removeMessagesAfterBubble(e, u), this._composerDataService.updateComposerData(e, {
      currentBubbleId:void 0,editingBubbleId:void 0
    }));
    let d, m, p, g=[], f=!1;
    try{
      const X=await this._planStorageService.loadPlanByUri(t);
      d=X.body,p=X.metadata.name,g=X.metadata.todos??[],f=X.metadata.isProject??!1,m=pnt(X.metadata)+`

`+X.body
    }
    catch(X){
      console.warn("[ComposerPlanService] Failed to load plan content from file:",X);
      return
    }
    const A=a.modelConfig?.modelName, w=this.getPlanExecutionConfigForExecution(e), C=l==="background", x=C?"cloud":"local";
    this._analyticsService.trackEvent("composer.plan_mode.plan_accepted", {
      composer_id:o,model:A,plan_execution_model:w.modelName,plan_execution_max_mode:w.maxMode,execution_target:x,todos_selected:g.length,source:r??"manual",invocationID:a.latestChatGenerationUUID
    });
    const I=f&&!C?"project":"agent", B=Bdn(d, p), R=(C?B+`

`:"")+`Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.`, N=(()=>{
      if(!i)return;
      const X=this._composerDataService.getComposerBubble(e,i);
      if(!(!X||X.type!==ul.HUMAN))return X.isPlanExecution===!0?i:void 0
    })();
    a.editingBubbleId&&this._composerDataService.updateComposerDataSetStore(e, X=>X("editingBubbleId", void 0));
    const M=wb(this._storageService, "planExecUseChatModel"), O=!M, $=this.getPlanExecutionConfigForExecution(e);
    if(O&&I==="agent"&&(this._composerDataService.updateComposerData(e, {
      unifiedMode:"agent"
    }), this._modelConfigService.setModelConfigForComposer(e, $)), C){
      const X=this._modelConfigService.getModelConfig("plan-execution"),ee=M?e.data?.modelConfig??this._modelConfigService.getModelConfig("composer"):X;
      this._modelConfigService.setModelConfig("background-composer",{
        modelName:ee.modelName&&ee.modelName!==""?ee.modelName:"default",maxMode:!!ee.maxMode,selectedModels:ee.selectedModels
      })
    }
    this._composerDataService.updateComposerData(e, {
      unifiedMode:I,pendingBackgroundAgent:C
    });
    const H=g.filter(X=>X.status!=="completed"&&X.status!=="cancelled");
    let W;
    const z=()=>{
      W&&(this.clearPlanBuildActive({
        planId:W,composerId:o
      }),W=void 0,this.firePlanUpdateForUri(t))
    };
    try{
      const X=await this._planStorageService.getRegistryEntry(t),ee=H.map(re=>re.id);
      X&&(W=X.id,this.markPlanBuildActive({
        planId:X.id,composerId:o
      })),await this._planStorageService.registerBuild(t,o,ee)
    }
    catch(X){
      z(),console.warn("[ComposerPlanService] Failed to register build:",X)
    }
    this._composerDataService.updateComposerData(e, {
      todos:H
    });
    const j=d.split(`
`).length;
    if(this._composerContextService.addContext({
      composerHandle:e,contextType:"selections",value:{
        uri:t,text:d,rawText:d,range:{
          selectionStartLineNumber:1,selectionStartColumn:1,positionLineNumber:j,positionColumn:1
        },addedWithoutMention:!0
      },shouldShowPreview:!1
    }), C)try{
      await this._composerChatService.appendQueuedHumanMessage(e,R,{
        richText:R
      }),this._composerViewsService.triggerScrollToBottom(e);
      const X=this._composerDataService.getLastHumanBubble(e);
      if(!X){
        z(),console.warn("[ComposerPlanService] Missing plan execution bubble for cloud submit"),this._composerDataService.updateComposerData(e,{
          pendingBackgroundAgent:!1
        });
        return
      }
      const ee=X.bubbleId;
      this._composerDataService.updateComposerBubble(e,ee,{
        isPlanExecution:!0,planUri:t.toString()
      });
      const re=new SF({
        action:{
          case:"executePlanAction",value:new g8n({
            planFileUri:t.toString(),planFileContent:m,executionMode:vz.AGENT
          })
        }
      }),ne=this._composerDataService.getComposerCapability(e,ko.BACKGROUND_COMPOSER);
      if(!ne){
        z(),console.warn("[ComposerPlanService] Background composer capability unavailable for cloud plan execution"),this._composerDataService.updateComposerData(e,{
          pendingBackgroundAgent:!1
        });
        return
      }
      await ne.submitConversationActionToBackgroundComposer({
        composerHandle:e,humanBubbleId:ee,conversationAction:re,planFollowupType:iAi.EXECUTE
      }),await this.firePlanUpdateForUri(t),this._composerViewsService.focus(e.data.composerId,!0),this.setupAutoOpenReviewPaneAfterFirstEdit(o,t,r);
      return
    }
    catch(X){
      z(),console.error("[ComposerPlanService] Cloud plan execution failed:",X),this._composerDataService.updateComposerData(e,{
        pendingBackgroundAgent:!1
      });
      return
    }
    try{
      if(a.isNAL&&a.conversationActionManager){
        const re=new SF({
          action:{
            case:"executePlanAction",value:new g8n({
              planFileUri:t.toString(),planFileContent:m,executionMode:vz.AGENT,kickoffMessageId:N
            })
          }
        });
        await a.conversationActionManager.submitConversationAction(re),await this.firePlanUpdateForUri(t),this._composerViewsService.triggerScrollToBottom(e),this._composerViewsService.focus(e.data.composerId,!0),this.setupAutoOpenReviewPaneAfterFirstEdit(o,t,r);
        return
      }
      const X=this.getPlanExecutionConfigForExecution(e);
      N&&this._composerDataService.updateComposerBubble(e,N,{
        isPlanExecution:!0,planUri:t.toString()
      });
      const ee=new SF({
        action:{
          case:"executePlanAction",value:new g8n({
            planFileUri:t.toString(),planFileContent:m,executionMode:vz.AGENT,kickoffMessageId:N
          })
        }
      });
      await this._composerChatService.submitChatMaybeAbortCurrent(e.data.composerId,R,{
        isPlanExecution:!0,modelOverride:X.modelName?.split(",")[0],planUri:t.toString(),bubbleId:N,skipClearInput:!0,conversationActionOverride:ee
      }),await this.firePlanUpdateForUri(t),this._composerViewsService.focus(e.data.composerId,!0),this.setupAutoOpenReviewPaneAfterFirstEdit(o,t,r)
    }
    catch(X){
      throw z(),X
    }
  }
  async acceptPlanByUri(e, t){
    const i=await this._planStorageService.getRegistryEntry(e);
    if(!i){
      console.warn("[ComposerPlanService] No registry entry found for plan URI:",e.toString());
      return
    }
    let r=i.createdBy;
    if(!r){
      console.warn("[ComposerPlanService] No createdBy composer ID in registry entry");
      return
    }
    let s=this._composerDataService.getHandleIfLoaded(r);
    if(!s){
      const a=await this._composerService.createComposer({
        partialState:{
          unifiedMode:"agent"
        }
      });
      if(!a){
        console.error("[ComposerPlanService] Failed to create new composer for plan execution");
        return
      }
      if(r=a.composerId,s=this._composerDataService.getHandleIfLoaded(r),!s){
        console.error("[ComposerPlanService] Failed to get handle for newly created composer");
        return
      }
    }
    const o=this.getMostRecentPlanBubbleId(s);
    await this._composerViewsService.showAndFocus(r, {
      focusMainInputBox:!0
    }), await this.acceptPlan(s, e, o, "manual", t)
  }
  isSpecModeEnabled(){
    return!1
  }
  async openPlanInEditor(e, t){
    try{
      const i=t?.composerId,r=i?this._composerDataService.selectedComposerId===i:!1,s=t?.stealFocus??!1;
      t?.scrollToTodos&&r&&this._pendingScrollToTodos.add(e.toString()),await this._editorService.openEditor({
        resource:e,options:{
          pinned:r,preserveFocus:!s
        }
      }),t?.scrollToTodos&&r&&setTimeout(()=>{
        const o=new CustomEvent("markdownPlanEditor:scrollToTodos",{
          detail:{
            uri:e.toString()
          }
        });
        $c().dispatchEvent(o)
      },100)
    }
    catch(i){
      console.error("Failed to open plan in editor:",i)
    }
  }
  consumePendingScrollToTodos(e){
    const t=e.toString();
    return this._pendingScrollToTodos.has(t)?(this._pendingScrollToTodos.delete(t), !0):!1
  }
  getPlanTitle(e){
    if(!e)return"Plan";
    let t=e.split(`
`)[0]?.trim();
    return t?(t=t.replace(/^#+\s*/, ""), t=t.replace(/\*\*([^*]+)\*\*/g, "$1"), t=t.replace(/\*([^*]+)\*/g, "$1"), t=t.replace(/__([^_]+)__/g, "$1"), t=t.replace(/_([^_]+)_/g, "$1"), t=t.replace(/`([^`]+)`/g,"$1"),t=t.replace(/~~([^~]+)~~/g,"$1"),t=t.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1"),t=t.replace(/!\[([^\]]*)\]\([^)]+\)/g,"$1"),t.trim()||"Plan"):"Plan"}async createSubComposerFromPlan(e,t){try{const i=await this._composerDataService.getComposerHandleById(e);if(!i){console.error("[composer] Parent composer not found:",e);return}try{const r=Wr(),s=Rdn(i.data.gitWorktree,K9(this._modelConfigService.getModelConfig("composer"),r));s.plan=void 0;const o=cce(this._instantiationService,r),a=i.data,u={originalPlan:a.plan?.content||""};if(s.subagentInfo={subagentType:wve.SPEC,parentComposerId:e,conversationLengthAtSpawn:0,additionalData:u},s.capabilities=o,s.unifiedMode=t.unifiedMode??a.unifiedMode,a.context&&(s.context=mL(a.context)),await this._composerDataService.appendSubComposer(s),this._composerDataService.updateComposerDataSetStore(i,d=>{d("subComposerIds",m=>[...m,r]),t.stepId&&d("plan",m=>{if(!m||!m.steps)return m;const p=m.steps.map(g=>g.id===t.stepId?{...g,subComposerId:r}:g);return{...m,steps:p}})}),t.stepId&&!t.query){const m=i.data.plan?.steps?.find(p=>p.id===t.stepId);m&&(t.query=m.instructions)}if(t.query===void 0)throw new Error("No query provided");return await this._composerChatService.submitChatMaybeAbortCurrent(r,t.query),r}finally{i.dispose()}}catch(i){console.error("[composer] Failed to create composer from plan:",i);return}}getSuggestedPlans(){return[...this.suggestedPlans]}addSuggestedPlan(e){this.suggestedPlans=this.suggestedPlans.filter(t=>t.content!==e.content),this.suggestedPlans=[e,...this.suggestedPlans],this.suggestedPlans=this.suggestedPlans.slice(0,3),this._onNewPlanSuggested.fire()}async createPlanFile(e,t,i,r,s,o,a){return(await this._planStorageService.createPlanForComposer({composerId:e,name:t,overview:i,todos:r,body:s,isProject:o,phases:a})).fileUri}async updatePlanByUri(e,t,i,r,s,o,a,l){const u={overview:i,todos:r,body:s};t!==void 0&&(u.name=t),a!==void 0&&(u.isProject=a),l!==void 0&&(u.phases=l),await this._planStorageService.updatePlanFull(e,u,o)}async movePlanToWorkspace(e,t){let i=!1,r;const s=[];for(const a of this._editorGroupsService.groups)for(const l of a.editors){const u=l.resource;u&&u.fsPath===e.fsPath&&(i=!0,r={pinned:a.isPinned(l),preserveFocus:!1},s.push({editor:l,groupId:a.id}))}for(const a of s)await this._editorService.closeEditor(a);const o=await this._planStorageService.movePlanToWorkspace(e,t);return i&&await this._editorService.openEditor({resource:o,options:{pinned:r?.pinned??!0,preserveFocus:r?.preserveFocus??!1}}),o}async updatePlanFileContent(e,t,i){await this._planStorageService.updatePlanContent(e,t,i)}async getPlanByUri(e){const t=await this._planStorageService.loadPlanByUri(e);return{name:t.metadata.name,overview:t.metadata.overview,todos:t.metadata.todos,body:t.body}}async registerComposerReference(e,t){let i=await this._planStorageService.getRegistryEntry(e);if(!i){i=await this._planStorageService.registerExistingPlan(e,t);return}i.referencedBy.includes(t)||(i.referencedBy.push(t),await this._planStorageService.updatePlanMetadata(e,{},t))}async getRegistryEntry(e){return this._planStorageService.getRegistryEntry(e)}async getExistingPlanUri(e){return(await this._planStorageService.getPlanForComposer(e))?.uri}async getLatestPlanEntryForComposer(e){return this._planStorageService.getPlanForComposer(e)}async getOrCreatePlanFile(e,t,i,r,s,o,a){const l=await this._planStorageService.getPlanForComposer(e);if(l){const d={overview:i,todos:r,body:s,isProject:o,phases:a};return t!==void 0&&(d.name=t),await this._planStorageService.updatePlanFull(l.id,d,e),(await this._planStorageService.getPlanForComposer(e))?.uri??l.uri}const u=t??Bdn(s);return this.createPlanFile(e,u,i,r,s,o,a)}async syncTodoUpdatesToFile(e,t,i){if(t.size===0)return;const r=i??await this.getExistingPlanUri(e);if(r)try{const o=(await this._planStorageService.loadPlanByUri(r)).metadata.todos??[];if(o.length===0)return;let a=!1;const l=o.map(u=>{const d=t.get(u.id);return d!==void 0&&d!==u.status?(a=!0,{...u,status:d}):u});if(!a)return;await this._planStorageService.updatePlanMetadata(r,{todos:l},e)}catch(s){console.error("[ComposerPlanService] Failed to sync todo updates to file:",s)}}async dereferencePlansCreatedByDeletedBubbles(e,t){await this._planStorageService.dereferencePlansCreatedByComposer(e,t)}async getPlanDerivedStatus(e){const t=await this._planStorageService.getRegistryEntry(e);if(!t)return j$e.PENDING;const r=(await this._planStorageService.loadPlanByUri(e)).metadata.todos??[];return this._planStorageService.getPlanStatus(t,r)}async getPlanBuildStatus(e){const t=await this._planStorageService.getRegistryEntry(e);if(!t)return IT.NONE;const r=(await this._planStorageService.loadPlanByUri(e)).metadata.todos??[],s=this._planStorageService.getPlanStatus(t,r);if(s===j$e.PENDING)return IT.NONE;const o=Object.keys(t.builtBy);let a=this._activeBuildComposersByPlanId.get(t.id);if(a){for(const A of Array.from(a)){const w=this._composerDataService.getComposerDataIfLoaded(A);w&&w.status!=="generating"&&a.delete(A)}a.size===0&&(this._activeBuildComposersByPlanId.delete(t.id),a=void 0)}const l=a!==void 0&&a.size>0,u=o.some(A=>{try{return this._composerDataService.getComposerDataIfLoaded(A)?.status==="generating"}catch{return console.warn("[composerPlanService] composer data unavailable for registered builder"),!1}}),d=o.map(A=>{const w=t.builtBy[A]??[],C=this._composerDataService.getComposerDataIfLoaded(A),x=C?.todos??[],I=new Map(x.map(N=>[N.id,N.status])),B=w.map(N=>I.get(N)),R=w.length>0&&B.every(N=>N==="completed"||N==="cancelled");return{composerId:A,composerStatus:C?.status,assignedTodoIds:w,composerTodoIds:x.map(N=>N.id),assignedStatuses:B,allAssignedDone:R}}),m=new Set(o.flatMap(A=>t.builtBy[A]??[])),p=r.some(A=>(A.status==="pending"||A.status==="in_progress")&&!m.has(A.id)),g=d.length>0&&!p&&d.every(A=>A.allAssignedDone);let f;return s===j$e.IN_PROGRESS?l||u?f=IT.ACTIVE:g?f=IT.COMPLETE:f=IT.NONE:r.length===0?f=l||u?IT.ACTIVE:IT.COMPLETE:f=IT.COMPLETE,f}isPlanPendingByUri(e){const t=this._planStorageService.getRegistryEntrySync(e);return t?Object.keys(t.builtBy).length===0:!1}async resolveCurrentUri(e){return this._planStorageService.resolveCurrentUri(e)}async buildSelectedTodosInNewAgent(e,t){if(t.length===0){console.warn("[ComposerPlanService] No todos selected for building");return}let i;const r=()=>{i&&(this.clearPlanBuildActive(i),i=void 0,this.firePlanUpdateForUri(e))};try{const s=await this._planStorageService.getRegistryEntry(e);let o;s?.createdBy&&(o=this._composerDataService.getHandleIfLoaded(s.createdBy));const a=this.getPlanExecutionConfigForExecution(o),l=await this._composerService.createComposer({unifiedMode:"agent",openInNewTab:!0});if(!l?.composerId){console.error("[ComposerPlanService] Failed to create new composer");return}const u=l.composerId,d=this._composerDataService.getHandleIfLoaded(u);if(!d){console.error("[ComposerPlanService] Failed to get composer handle");return}d.setData("modelConfig",a),this._composerDataService.updateComposerData(d,{todos:t});let m;try{m=(await this._planStorageService.loadPlanByUri(e)).body}catch(C){console.warn("[ComposerPlanService] Failed to load plan content:",C),m=""}const g=m.split(`
`).length;this._composerContextService.addContext({composerHandle:d,contextType:"selections",value:{uri:e,text:m,rawText:m,range:{selectionStartLineNumber:1,selectionStartColumn:1,positionLineNumber:g,positionColumn:1}},shouldShowPreview:!1}),await this.registerComposerReference(e,u);const f=t.map(C=>C.id).join(", "),A=t.map((C,x)=>`${
      x+1
    }
    . [${
      C.id
    }
    ] ${
      C.content
    }
    `).join(`
`),w=`Implement the following to-dos from the plan (the plan is attached for your reference). Do NOT edit the plan file itself.

You have been assigned the following ${
      t.length
    }
     to-do(s) with IDs: ${
      f
    }
    

${
      A
    }
    

These to-dos have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the assigned to-dos.`;try{const C=await this._planStorageService.getRegistryEntry(e);C&&(i={planId:C.id,composerId:u},this.markPlanBuildActive(i));const x=t.map(I=>I.id);await this._planStorageService.registerBuild(e,u,x)}catch(C){r(),console.warn("[ComposerPlanService] Failed to register build:",C)}return await this._composerChatService.submitChatMaybeAbortCurrent(u,w,{isPlanExecution:!0,modelOverride:a.modelName?.split(",")[0],planUri:e.toString()}),this._composerViewsService.focus(u,!0),u}catch(s){r(),console.error("[ComposerPlanService] Error building selected todos in new agent:",s);return}}_discardPlanModelByKey(e){const t=this._activePlanModelRefs.get(e);t&&(t.ref.dispose(),t.autoSaveDisabled.dispose(),this._activePlanModelRefs.delete(e))}async updatePlanByUriDirty(e,t,i,r,s,o,a,l){const u={overview:i,todos:r,body:s};t!==void 0&&(u.name=t),a!==void 0&&(u.isProject=a),l!==void 0&&(u.phases=l);const d=e.toString(),m=this._activePlanModelRefs.get(d),p=m?.autoSaveDisabled??this._filesConfigurationService.disableAutoSave(e);let g;try{g=await this._planStorageService.updatePlanModelDirty(e,u,o)}catch(f){throw m||p.dispose(),f}this._activePlanModelRefs.set(d,{ref:g,autoSaveDisabled:p}),m?.ref.dispose()}async savePlanModel(e){const t=e.toString(),i=this._activePlanModelRefs.get(t);i&&(await this._planStorageService.savePlanModel(e),i.ref.dispose(),i.autoSaveDisabled.dispose(),this._activePlanModelRefs.delete(t))}discardPlanModel(e){this._discardPlanModelByKey(e.toString())}isPlanBeingStreamed(e){const t=e.toString();return this._activePlanModelRefs.has(t)}},_0a=__decorate([__param(0,Oa),__param(1,BA),__param(2,ag),__param(3,rw),__param(4,yi),__param(5,Tl),__param(6,ln),__param(7,ix),__param(8,ku),__param(9,hV),__param(10,uh),__param(11,DT),__param(12,Hi),__param(13,da),__param(14,fL),__param(15,EJ),__param(16,vce),__param(17,wM),__param(18,TAi),__param(19,IC),__param(20,IM),__param(21,kp)],_0a),Vi(IV,_0a,1)}}),Ukf={};WN(Ukf,{EditFileReviewModel:()=>Xwi,EditToolHumanReviewOption:()=>n8,EditToolReviewResultType:()=>dX,IToolCallHumanReviewService:()=>WEe,MCPApprovalType:()=>dtu,MCPToolHumanReviewOption:()=>_I,MCPToolReviewModel:()=>lgn,MCPToolReviewResultType:()=>EQ,PlanReviewModel:()=>i1t,PlanToolHumanReviewOption:()=>cQ,ReviewModel:()=>n1t,TerminalApprovalType:()=>phn,TerminalToolHumanReviewOption:()=>dD,TerminalToolReviewModel:()=>e_i,TerminalToolReviewResultType:()=>DV,ToolCallHumanReviewKind:()=>aV,ToolCallHumanReviewService:()=>Zwi,ToolCallHumanReviewStatus:()=>DA,WebFetchToolHumanReviewOption:()=>cV,WebFetchToolReviewModel:()=>ugn});var Zwi,WEe,dX,DV,EQ,n1t,Xwi,e_i,lgn,ugn,i1t,qJ=