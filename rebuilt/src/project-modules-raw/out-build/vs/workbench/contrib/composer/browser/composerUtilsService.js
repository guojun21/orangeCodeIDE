// Module: out-build/vs/workbench/contrib/composer/browser/composerUtilsService.js
// Offset: 30657829 (bundle byte offset)
// Size: 46800 bytes

t8(), sC(), Wt(), cp(), rt(), oa(), Er(), Vw(), ps(), Yn(), cv(), Jk(), jk(), Hk(), iw(), Dd(), SI(), KS(), zr(), Uv(), Vg(), VA(), Lmn(), L3t(), cu(), Ix(), Nu(), hs(), S9(), Zk(), Hba(), oP(), of(), Ott(), fE(), Ka(), Bc(), kr(), yhn(), nvi(), mD(), jk(), pQ(), qi(), fQ(), KZ(), uce(), vEe(), vN(), Wu(), Rb(), Ime(), t1t(), Mkf(), UF(), Fkf=5, Ywi=2, IM=xi("composerUtilsService"), Okf=xi("composerPlanService"), hO=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $){
    super(), this._composerDataService=e, this._composerFileService=t, this._workspaceContextService=i, this._editorWorkerService=r, this._reactiveStorageService=s, this.composerTextModelService=o, this._instantiationService=a, this._commandService=l, this._uiOverlayService=u, this._composerEventService=d, this._aiFileInfoService=m, this._composerViewsService=p, this._composerCodeBlockDiffStorageService=g, this._metricsService=f, this._composerCheckpointStorageService=A, this._messageRequestContextStorageService=w, this._storageService=C, this._composerCodeBlockService=x, this._prettyDialogService=I, this._aiService=B, this._composerModesService=R, this._experimentService=N, this._cursorAuthenticationService=M, this._blobUploadService=O, this._pluginsProviderService=$, this._composerDiffCache=new Fb(50), this._composerDiffSemaphore=new Pmn(5), this._composerIdToDisposables=this._register(new mp), this._register(this._reactiveStorageService.onChangeEffectManuallyDisposed({
      deps:[()=>ESt(this._composerDataService.loadedComposers.ids),()=>ESt(this._composerDataService.allComposersData.selectedComposerIds)],onChange:({
        deps:[H,W]
      })=>{
        const z=H.filter(Y=>W.includes(Y));
        for(const Y of z)if(!this._composerIdToDisposables.has(Y)){
          const j=this._composerDataService.loadedComposers.byId[Y];
          this._composerIdToDisposables.set(Y,this.setupComposerListeners(j))
        }
        for(const Y of this._composerIdToDisposables.keys())z.includes(Y)||this._composerIdToDisposables.deleteAndDispose(Y)
      },runNowToo:!0
    }))
  }
  setupComposerListeners(e){
    const t=ESt(e), i=new Ut;
    return i.add(this._reactiveStorageService.onChangeEffectManuallyDisposed({
      deps:[()=>e.editingBubbleId],onChange:({
        deps:[r],prevDeps:[s]=[void 0]
      })=>{
        if(s===void 0||r===s)return;
        const o=t.fullConversationHeadersOnly.findIndex(g=>g.bubbleId===s);
        if(o===-1||o>=t.fullConversationHeadersOnly.length-1)return;
        const a=t.fullConversationHeadersOnly[o+1]?.bubbleId,l=t.fullConversationHeadersOnly[o-1]?.bubbleId,u=a?t.conversationMap[a]:void 0,d=l?t.conversationMap[l]:void 0;
        if((u?.type!==ul.AI||u?.capabilityType!==ko.TOOL_FORMER)&&(d?.type!==ul.AI||d?.capabilityType!==ko.TOOL_FORMER)||t.conversationMap[s]?.text?.trim()!=="")return;
        const p=this._composerDataService.getHandleIfLoaded(t.composerId);
        p&&this._composerDataService.deleteComposerBubbles(p,[s])
      }
    })), i
  }
  async decideRunningComposerTabAction(e, t){
    const i=this._composerDataService.selectedComposerId, r=this._composerDataService.getHandleIfLoaded(i), s=r?this._composerDataService.isComposerRunning(r):!1;
    if(t&&this._composerDataService.selectedComposerIds.includes(t))return"skip";
    const o=this._composerDataService.selectedComposerIds.length, a=this._reactiveStorageService.applicationUserPersistentStorage.composerState.maxOpenTabsMode, l=this._reactiveStorageService.applicationUserPersistentStorage.composerState.maxOpenTabsCustomValue;
    let u=5;
    a==="5"?u=5:a==="10"?u=10:a==="unlimited"?u=1/0:a==="custom"&&(u=Math.max(1, l??u));
    const d=o<u;
    if(e==="switch"){
      if(d||this._composerDataService.getOldestNonRunningSelectedComposerId(t))return"new-tab";
      const f=await this._prettyDialogService.openDialog({
        title:"Replace current chat?",message:"You've reached the limit for open chats. To switch to another chat, you'll have to replace the current one.",primaryButton:{
          id:"replace",label:"Replace Chat"
        },cancelButton:{
          id:"cancel",label:"Cancel"
        },dialogIcon:Be.warning
      });
      return f==="cancel"||f===void 0?"cancel":"replace"
    }
    if(!s||!r)return"skip";
    if(this._composerDataService.getPendingUserDecisionGroup(r).length>0)return"replace";
    if(d)return"new-tab";
    const p=await this._prettyDialogService.openDialog({
      title:"Replace current chat?",message:"You've reached the limit for open chats. To create a new one, you'll have to replace the current chat.",primaryButton:{
        id:"replace",label:"Replace Chat"
      },cancelButton:{
        id:"cancel",label:"Cancel"
      },dialogIcon:Be.warning
    });
    return p==="cancel"||p===void 0?"cancel":"replace"
  }
  async getFileLinesContent(e){
    const{
      uri:t,composerId:i
    }
    =e, r=this._composerDataService.getHandleIfLoaded(i), s=r?this._composerDataService.getComposerData(r):void 0;
    if(!await this._composerFileService.exists({
      uri:t,composerData:s
    }))return null;
    let a;
    try{
      return a=await this.composerTextModelService.createModelReference(t,s,!0),a.object.textEditorModel.getLinesContent()
    }
    catch(l){
      return console.error("[composer] error getting content of file",t,l),null
    }
    finally{
      a?.dispose()
    }
  }
  async getFileContents(e){
    const{
      uri:t,composerId:i
    }
    =e, r=this._composerDataService.getHandleIfLoaded(i), s=r?this._composerDataService.getComposerData(r):void 0;
    if(!await this._composerFileService.exists({
      uri:t,composerData:s
    }))return null;
    let a;
    try{
      return a=await this.composerTextModelService.createModelReference(t,s,!0),a.object.textEditorModel.getValue()
    }
    catch(l){
      return console.error("[composer] error getting full content of file",t,l),null
    }
    finally{
      a?.dispose()
    }
  }
  async ensureCapabilitiesAreLoaded(e){
    const t=this._composerDataService.getComposerData(e);
    if(!t||t.capabilities.length>0)return;
    const i=cce(this._instantiationService, e.composerId);
    if(i.length===0)throw new Error(`[composer] No capabilities found for composer ${e.composerId}`);
    this._composerDataService.updateComposerData(e, {
      capabilities:i
    })
  }
  async getShouldWebSearchBeEnabled(e=!1, t){
    const i=this._reactiveStorageService.applicationUserPersistentStorage.composerState.isWebSearchToolEnabled3;
    return i??!0
  }
  getShouldAutoSaveAgenticEdits(){
    return!0
  }
  replacedBubbleForEdit(e, t, i){
    if(e.additionalData===void 0)return i;
    const r=e.params?.instructions;
    if(r===void 0)return i;
    let s="";
    r!==void 0&&(s+=`${r}

`);
    let o;
    try{
      o=this._workspaceContextService.asRelativePath(t.uri)
    }
    catch{
      o=t.uri.fsPath
    }
    return s+=`\`\`\`${o}
${t.content}
\`\`\``, new Qw({
      ...i,text:s
    })
  }
  replacedBubbleForFastEdit(e, t, i){
    const r=this._composerDataService.getComposerCapability(e, ko.TOOL_FORMER);
    if(r===void 0)return new Qw(t);
    const s=r.getBubbleData(t.bubbleId), o=t.codeBlocks?.find(a=>!a.unregistered&&a.uri?a.codeblockId===i.codeblockId&&m2o(a.uri, i.uri):!1);
    return!s||!o?new Qw(t):s.tool===an.EDIT_FILE?this.replacedBubbleForEdit(s, o, new Qw(t)):new Qw(t)
  }
  processConversationForFastEdit(e, t, i){
    const r=t.findIndex(l=>l.type===ul.AI&&l.codeBlocks?.some(u=>!u.unregistered&&u.uri?u.codeblockId===i.codeblockId&&m2o(u.uri, i.uri):!1)), o=t.slice(0, r+1).map((l, u)=>{
      if(l.type===ul.AI&&u!==r){
        const d=l.text.replace(/```[\s\S]*?```/g,"[old_code]");
        return new Qw({
          ...l,text:d
        })
      }
      return new Qw(l)
    }), a=t.at(r);
    if(a.capabilityType===ko.TOOL_FORMER){
      const l=this.replacedBubbleForFastEdit(e,a,i);
      o[o.length-1]=l
    }
    return o
  }
  async*handleStreamComposer(e){
    let t=!1, i=!1;
    try{
      for await(const r of e.streamer){
        if(!this._composerDataService.getComposerData(e.composerHandle))continue;
        const o=this._composerDataService.getLastBubble(e.composerHandle);
        if(!o)continue;
        "conversationSummary"in r&&r.conversationSummary&&o!==void 0&&this._composerDataService.updateComposerDataSetStore(e.composerHandle,l=>l("conversationMap",o.bubbleId,"conversationSummary",r.conversationSummary)),"serverBubbleId"in r&&r.serverBubbleId&&typeof r.serverBubbleId=="string"&&r.serverBubbleId!==""&&o!==void 0&&(this._composerDataService.updateComposerDataSetStore(e.composerHandle,l=>l("conversationMap",o.bubbleId,"serverBubbleId",r.serverBubbleId)),this._composerDataService.updateComposerDataSetStore(e.composerHandle,l=>l("fullConversationHeadersOnly",u=>u.bubbleId===o.bubbleId,"serverBubbleId",r.serverBubbleId))),"usageUuid"in r&&r.usageUuid&&typeof r.usageUuid=="string"&&r.usageUuid!==""&&o!==void 0&&this._composerDataService.updateComposerDataSetStore(e.composerHandle,l=>l("conversationMap",o.bubbleId,"usageUuid",r.usageUuid)),"modelProviderRequestJson"in r&&r.modelProviderRequestJson&&typeof r.modelProviderRequestJson=="string"&&r.modelProviderRequestJson!==""&&o!==void 0&&this._composerDataService.updateComposerDataSetStore(e.composerHandle,l=>l("conversationMap",o.bubbleId,"modelProviderRequestJson",r.modelProviderRequestJson)),"subagentReturn"in r&&r.subagentReturn&&o!==void 0&&this._composerDataService.updateComposerDataSetStore(e.composerHandle,l=>l("conversationMap",o.bubbleId,"subagentReturn",r.subagentReturn));
        const a=this._composerDataService.getLastHumanBubbleId(e.composerHandle);
        if(a){
          const l=e.composerHandle.composerId;
          r!==null&&typeof r=="object"&&(r.webCitation&&r.webCitation.references?.length&&(await this._messageRequestContextStorageService.updateContext(l,a,u=>{
            u.webReferences=[...u.webReferences??[],...r.webCitation.references]
          }),this._composerDataService.updateComposerDataSetStore(e.composerHandle,u=>u("conversationMap",o.bubbleId,"webCitations",r.webCitation.references.map(d=>({
            title:d.title,url:d.url
          }))))),r.aiWebSearchResults&&r.aiWebSearchResults.results?.length&&this._composerDataService.updateComposerDataSetStore(e.composerHandle,u=>u("conversationMap",o.bubbleId,"aiWebSearchResults",r.aiWebSearchResults.results.map(d=>({
            title:d.title,content:d.content
          })))),r.docsReference&&(await this._messageRequestContextStorageService.updateContext(l,a,u=>{
            u.docsReferences=[...u.docsReferences??[],r.docsReference]
          }),this._composerDataService.updateComposerDataSetStore(e.composerHandle,u=>u("conversationMap",o.bubbleId,"docsCitations",d=>[...d??[],{
            title:r.docsReference.title,url:r.docsReference.url
          }
          ]))),r.viewableGitContext&&await this._messageRequestContextStorageService.updateContext(l,a,u=>{
            u.gitContext=r.viewableGitContext
          }))
        }
        if(r!==null&&typeof r=="object"&&"statusUpdates"in r&&r.statusUpdates!==void 0&&r.statusUpdates!==null&&o&&this._composerDataService.updateComposerDataSetStore(e.composerHandle,l=>l("conversationMap",o.bubbleId,"statusUpdates",r.statusUpdates)),r!==null&&typeof r=="object"&&"serviceStatusUpdate"in r&&r.serviceStatusUpdate!==void 0&&r.serviceStatusUpdate!==null&&o&&(this._composerDataService.updateComposerDataSetStore(e.composerHandle,l=>l("conversationMap",o.bubbleId,"serviceStatusUpdate",{
          ...r.serviceStatusUpdate
        })),r.serviceStatusUpdate.actionToRunOnStatusUpdate))try{
          this._commandService.executeCommand(r.serviceStatusUpdate.actionToRunOnStatusUpdate)
        }
        catch(l){
          console.error(`[composer] error running action ${r.serviceStatusUpdate.actionToRunOnStatusUpdate}`,l)
        }
        if(r!==null&&typeof r=="object"&&"starsFeedbackRequest"in r&&r.starsFeedbackRequest!==void 0&&r.starsFeedbackRequest!==null){
          const l=this._reactiveStorageService.applicationUserPersistentStorage.dialogDontAskAgainPreferences?.["stars-feedback"]??!1,u=this._composerDataService.getComposerData(e.composerHandle),d=!!u?.createdFromBackgroundAgent?.bcId;
          if(l||d)continue;
          const m=r.starsFeedbackRequest.bubbleId;
          if(!m||!u)continue;
          const p=this._composerDataService.getLoadedConversation(e.composerHandle);
          let g,f=-1;
          for(let C=0;
          C<p.length;
          C++){
            const x=p[C];
            if(x.serverBubbleId===m||x.bubbleId===m){
              g=x,f=C;
              break
            }
          }
          if(!g||!g.requestId||g.starRating!==void 0||g.type!==ul.AI)continue;
          let A=-1;
          for(let C=p.length-1;
          C>=0;
          C--)if(p[C].type===ul.HUMAN){
            A=C;
            break
          }
          if(A===-1)continue;
          let w=-1;
          for(let C=A-1;
          C>=0;
          C--)if(p[C].type===ul.AI){
            w=C;
            break
          }
          if(f!==w)continue;
          this._uiOverlayService.showStarsFeedbackPopup({
            composerId:u.composerId,requestId:g.requestId,popupText:r.starsFeedbackRequest.message,didPopup:!0,targetBubbleId:g.bubbleId
          })
        }
        if(r!==null&&typeof r=="object"&&"stopUsingDsv3AgenticModel"in r&&r.stopUsingDsv3AgenticModel===!0&&(i=!0),r!==null&&typeof r=="object"&&"imageDescription"in r&&r.imageDescription!==void 0&&r.imageDescription!==null&&o){
          const l=r.imageDescription;
          console.log("[imageDescription] imageDescription",l);
          const u=this._composerDataService.getComposerData(e.composerHandle);
          if(u){
            let d=!1;
            for(const m in u.conversationMap){
              const p=u.conversationMap[m];
              for(const[g,f]of(p.context?.selectedImages??[]).entries())f.uuid===l.imageUuid&&(console.log("[imageDescription] found image, updating description"),d=!0,this._composerDataService.updateComposerDataSetStore(e.composerHandle,A=>A("conversationMap",m,"context","selectedImages",g,"taskSpecificDescription",l.description)));
              for(const[g,f]of(p.toolResults??[]).entries()){
                console.log("[imageDescription] tool result",f);
                for(const[A,w]of(f.images??[]).entries())w.uuid===l.imageUuid&&(console.log("[imageDescription] found image in tool result, updating description"),d=!0,this._composerDataService.updateComposerDataSetStore(e.composerHandle,C=>C("conversationMap",m,"toolResults",g,"images",A,"taskSpecificDescription",l.description)))
              }
            }
            d||console.warn("[imageDescription] Could not figure out what image the description belongs to")
          }
          else console.warn("[imageDescription] composer not found for updating image description")
        }
        if(r!==null&&typeof r=="object"&&"symbolLink"in r&&r.symbolLink!==void 0&&r.symbolLink!==null&&o){
          const l=r.symbolLink;
          this._composerDataService.updateComposerDataSetStore(e.composerHandle,u=>u("conversationMap",o.bubbleId,"symbolLinks",d=>d?[...d,l]:[l]))
        }
        if(r!==null&&typeof r=="object"&&"fileLink"in r&&r.fileLink!==void 0&&r.fileLink!==null&&o){
          const l=r.fileLink;
          this._composerDataService.updateComposerDataSetStore(e.composerHandle,u=>u("conversationMap",o.bubbleId,"fileLinks",d=>d?[...d,l]:[l]))
        }
        yield r,t===!1&&(r.text?.length??0)>0&&(t=!0,console.debug(`[composer.submitChat] ttft is ${Date.now()-e.startTime}ms`))
      }
    }
    finally{
      this._composerDataService.getComposerData(e.composerHandle)&&i&&this._commandService.executeCommand(eca,{
        isAutoResume:!0
      })
    }
  }
  async readFileContents(e, t){
    const i=this._composerDataService.getHandleIfLoaded(t), r=i?this._composerDataService.getComposerData(i):void 0;
    return(await this._composerFileService.readFile({
      uri:e,composerData:r
    })).value.toString()
  }
  getCodeBlockDataFromBubbleId(e, t){
    const i=this._composerDataService.getComposerData(e);
    if(!i)throw new Error("[composer] Cannot get bubble for unloaded composer");
    const r=this._composerDataService.getLoadedConversation(e), s=r.findIndex(l=>l.bubbleId===t);
    if(s===-1)throw new Error("[composer] No bubble found with the given bubble ID");
    const o={
      
    };
    r.slice(s).forEach(l=>{
      l.codeBlocks?.filter(u=>!u.unregistered&&u.uri!==void 0).forEach(u=>{
        const d=u.uri.toString();
        o[d]||(o[d]=new Set),o[d].add(u.codeblockId)
      })
    });
    const a={
      ...i.codeBlockData
    };
    for(const[l, u]of Object.entries(o))if(a[l]){
      const d={
        
      };
      for(const[m,p]of Object.entries(a[l]))u.has(m)||(d[m]=p);
      Object.keys(d).length===0?delete a[l]:a[l]=d
    }
    return a
  }
  removeMessagesAfterBubble(e, t){
    const i=this._composerDataService.getComposerData(e);
    if(!i||t===void 0)return;
    const r=this._composerDataService.getLoadedConversation(e), s=r.findIndex(g=>g.bubbleId===t);
    if(s===-1)return;
    const o=this.getCodeBlockDataFromBubbleId(e, t), a=r.slice(s), l=a.map(g=>g.bubbleId), d=(g=>{
      const f=new Map;
      for(const A of g){
        const w=A.toolFormerData;
        if(w?.tool!==an.CREATE_PLAN)continue;
        const C=w.additionalData?.planUri;
        if(!C)continue;
        const x=dEe(C);
        f.set(x.fsPath,x)
      }
      return Array.from(f.values())
    })(a);
    this._composerDataService.deleteComposerBubbles(e, l), d.length>0&&this._instantiationService.invokeFunction(f=>f.get(Okf)).dereferencePlansCreatedByDeletedBubbles(e.composerId, d).catch(f=>{
      console.warn("[composer] Failed to dereference deleted plan entries:",f)
    });
    let m=i.plan;
    if(i.plan?.bubbleId&&l.includes(i.plan.bubbleId)){
      const g=this._composerDataService.getToolFormer(e);
      if(g){
        for(let f=s-1;
        f>=0;
        f--){
          const A=r[f],w=g.getBubbleData(A.bubbleId);
          if(w?.tool===an.CREATE_PLAN&&w.params){
            const C=w.params.steps&&w.params.steps.length>0;
            m={
              content:w.params.plan||"",bubbleId:A.bubbleId,steps:w.params.steps,overview:w.params.overview,todos:w.params.todos?.map(x=>({
                id:x.id,content:x.content,status:"pending",dependencies:x.dependencies||[]
              })),isSpec:C
            };
            break
          }
        }
        m===i.plan&&(m=void 0)
      }
    }
    const p=Object.keys(i.codeBlockData).filter(g=>!(g in o));
    this._composerDataService.updateComposerDataSetStore(e, g=>{
      g("editingBubbleId",void 0),g("currentBubbleId",void 0),g("latestCheckpointId",void 0),m!==i.plan&&(g("plan",m),g("isSpec",m?.isSpec??!1));
      for(const[f,A]of Object.entries(i.originalFileStates))l.includes(A.firstEditBubbleId)&&g("originalFileStates",f,void 0);
      for(const f of p)g("codeBlockData",f,void 0);
      for(const f of Object.keys(o))g("codeBlockData",f,o[f])
    });
    for(const g of p)try{
      const f=je.parse(g);
      this._composerEventService.fireToRemoveDiffs({
        uri:f
      })
    }
    catch(f){
      console.warn(`[composer] Failed to remove diffs for URI ${g}:`,f)
    }
  }
  applyDiffToLines(e, t){
    const i=[];
    let r=0;
    for(let s=0;
    s<e.length;
    s++){
      const o=e[s];
      if(r<t.length){
        const{
          original:a,modified:l
        }
        =t[r];
        if(s===a.startLineNumber-1&&(i.push(...l),r++,a.endLineNumberExclusive!==a.startLineNumber)){
          s+=a.endLineNumberExclusive-a.startLineNumber-1;
          continue
        }
      }
      i.push(o)
    }
    for(;
    r<t.length;
    ){
      const{
        modified:s
      }
      =t[r];
      i.push(...s),r++
    }
    return i
  }
  async runCapabilitiesForProcess(e, t, i){
    const r={
      stack:[],error:void 0,hasError:!1
    };
    try{
      const s=__addDisposableResource(r,i.parentSpanCtx?.startSpan(`runCapabilitiesForProcess.${t}`),!1),o=this._composerDataService.getComposerData(e);
      if(!o)return;
      const a=w2A(o.capabilities,t,i);
      if(t==="start-submit-chat"){
        const l=a.filter(u=>!!u.onStartSubmitChatReturnShouldStop).sort((u,d)=>u.priority-d.priority);
        for(const u of l)if(u.onStartSubmitChatReturnShouldStop)try{
          const d=await this.measureCapabilityExecution({
            process:"start-submit-chat",capabilityName:u.name,parentSpanCtx:s,capabilityFn:()=>u.onStartSubmitChatReturnShouldStop.bind(u)(i)
          });
          if(typeof d=="object"&&d.shouldStop)return d
        }
        catch(d){
          console.error(`[composer] Error running capability '${u.name}' during start-submit-chat`,d)
        }
      }
      if(t==="before-submit-chat"){
        const l=a.filter(u=>!!u.onBeforeSubmitChat).sort((u,d)=>u.priority-d.priority);
        for(const u of l)if(u.onBeforeSubmitChat)try{
          if(await this.measureCapabilityExecution({
            process:"before-submit-chat",capabilityName:u.name,parentSpanCtx:s,capabilityFn:()=>u.onBeforeSubmitChat.bind(u)(i)
          })===!0)return!0
        }
        catch(d){
          if(console.error(`[composer] Error running capability '${u.name}' during before-submit-chat`,d),d instanceof fA)throw d
        }
        return!1
      }
      await Promise.all(a.map(async l=>{
        try{
          switch(t){
            case"chat-stream-finished":{
              l.onChatStreamFinished&&await this.measureCapabilityExecution({
                process:"chat-stream-finished",capabilityName:l.name,parentSpanCtx:s,capabilityFn:()=>l.onChatStreamFinished.bind(l)(i)
              });
              return
            }
            case"after-apply":{
              l.onAfterApply&&await this.measureCapabilityExecution({
                process:"after-apply",capabilityName:l.name,parentSpanCtx:s,capabilityFn:()=>l.onAfterApply.bind(l)(i)
              });
              return
            }
            case"before-apply":{
              l.onBeforeApply&&await this.measureCapabilityExecution({
                process:"before-apply",capabilityName:l.name,parentSpanCtx:s,capabilityFn:()=>l.onBeforeApply.bind(l)(i)
              });
              return
            }
            case"accept-all-edits":{
              l.onAcceptAllEdits&&await this.measureCapabilityExecution({
                process:"accept-all-edits",capabilityName:l.name,parentSpanCtx:s,capabilityFn:()=>l.onAcceptAllEdits.bind(l)(i)
              });
              return
            }
            case"add-pending-action":{
              l.onAddPendingAction&&await this.measureCapabilityExecution({
                process:"add-pending-action",capabilityName:l.name,parentSpanCtx:s,capabilityFn:()=>l.onAddPendingAction.bind(l)(i)
              });
              return
            }
            case"composer-done":{
              l.onComposerDone&&await this.measureCapabilityExecution({
                process:"composer-done",capabilityName:l.name,parentSpanCtx:s,capabilityFn:()=>l.onComposerDone.bind(l)(i)
              });
              return
            }
            default:return
          }
        }
        catch(u){
          console.error(`[composer] Error running capability '${l.name}' during ${t}`,u);
          return
        }
      }))
    }
    catch(s){
      r.error=s,r.hasError=!0
    }
    finally{
      __disposeResources(r)
    }
  }
  async selectNextComposer(e){
    const t=this._composerDataService.selectedComposerId;
    if(this._composerDataService.selectedComposerIds.length>1){
      const r=this._composerViewsService.getOrderedSelectedComposerIds(),s=r.findIndex(u=>u===t);
      if(s===-1||r.length<=1)return;
      const o=r.length,a=(s+(e?-1:1)+o)%o,l=r[a];
      l&&await this._commandService.executeCommand(Y0t,l)
    }
    else{
      const r=WNg([...this._composerDataService.allComposersData.allComposers]),s=r.findIndex(u=>u.composerId===t);
      if(s===-1||r.length<=1)return;
      const o=r.length,a=(s+(e?-1:1)+o)%o,l=r[a].composerId;
      if(l){
        const u=this._composerDataService.getHandleIfLoaded(t);
        if(u?this._composerDataService.isComposerRunning(u):!1){
          const m=this._composerDataService.selectedComposerIds.length,p=await this.decideRunningComposerTabAction("switch",l);
          if(p==="cancel")return;
          if(p==="new-tab"){
            await this._commandService.executeCommand(Y0t,l,{
              openInNewTab:!0
            });
            return
          }
        }
        await this._commandService.executeCommand(Y0t,l)
      }
    }
  }
  async selectPrevComposer(){
    await this.selectNextComposer(!0)
  }
  async computeDiff(e, t, i){
    if(e===t)return[];
    const r=await this.computeLinesDiffWithSemaphore({
      first:e,second:t,options:{
        ignoreTrimWhitespace:!1,computeMoves:!1,maxComputationTimeMs:1e3,...i??{
          
        }
      }
    });
    return r.hitTimeout?[]:r.changes.map(s=>({
      original:s.original,modified:Zv(t).slice(s.modified.startLineNumber-1,s.modified.endLineNumberExclusive-1)
    }))
  }
  async computeDiffAndFormat(e, t, i){
    if(e===t)return new s9t({
      chunks:[],hitTimeout:!1
    });
    const r=await this.computeLinesDiffWithSemaphore({
      first:e,second:t,options:{
        ignoreTrimWhitespace:!1,computeMoves:!1,maxComputationTimeMs:this._experimentService.getDynamicConfigParam("tool_limits_config","composerDiffMaxComputationTimeMs"),...i??{
          
        }
      }
    });
    if(r.hitTimeout)return new s9t({
      chunks:[],hitTimeout:!0
    });
    const l=r.changes.map(u=>{
      const d=Zv(e).slice(u.original.startLineNumber-1,u.original.endLineNumberExclusive-1).map(p=>"- "+p),m=Zv(t).slice(u.modified.startLineNumber-1,u.modified.endLineNumberExclusive-1).map(p=>"+ "+p);
      return new S8n({
        diffString:[...d,...m].join(`
`),oldStart:u.original.startLineNumber,newStart:u.modified.startLineNumber,oldLines:u.original.endLineNumberExclusive-u.original.startLineNumber,newLines:u.modified.endLineNumberExclusive-u.modified.startLineNumber,linesAdded:u.modified.endLineNumberExclusive-u.modified.startLineNumber,linesRemoved:u.original.endLineNumberExclusive-u.original.startLineNumber
      })
    }).reduce((u, d)=>{
      if(u.length===0)return[d];
      const m=u[u.length-1];
      return this.shouldMergeChunks(m,d)?u[u.length-1]=this.mergeChunks(m,d,e,t):u.push(d),u
    }, []).map(u=>this.growChunk(u, e, t));
    return new s9t({
      chunks:l,hitTimeout:!1
    })
  }
  async computeLinesDiffWithSemaphore({
    first:e, second:t, options:i
  }){
    const r=new Promise(a=>{
      setTimeout(()=>{
        a(new Voe([],[],!0))
      },i.maxComputationTimeMs)
    }), s=this._composerDiffSemaphore.withSemaphore(async()=>{
      const a=await x2o(Array.isArray(e)?e.join(`
`):e),l=await x2o(Array.isArray(t)?t.join(`
`):t),u=JSON.stringify({
        firstSha1:a,secondSha1:l
      }),d=this._composerDiffCache.get(u);
      if(d)return d;
      const m=await this._editorWorkerService.computeLinesDiff(Array.isArray(e)?e:Zv(e),Array.isArray(t)?t:Zv(t),i);
      return this._composerDiffCache.set(u,m),m
    }), o=await Promise.race([s, r]);
    return o.hitTimeout&&this._metricsService.increment({
      stat:"composer.computeLinesDiff.timedOut"
    }), o
  }
  shouldMergeChunks(e, t){
    return t.newStart-(e.newStart+e.newLines)<=Fkf
  }
  mergeChunks(e, t, i, r){
    const s=Zv(r).slice(e.newStart+e.newLines-1, t.newStart-1).map(o=>"  "+o);
    return new S8n({
      diffString:e.diffString+(s.length>0?`
`+s.join(`
`)+`
`:`
`)+t.diffString,oldStart:e.oldStart,newStart:e.newStart,oldLines:t.oldStart+t.oldLines-e.oldStart,newLines:t.newStart+t.newLines-e.newStart,linesRemoved:e.linesRemoved+t.linesRemoved,linesAdded:e.linesAdded+t.linesAdded
    })
  }
  growChunk(e, t, i){
    const r=Zv(t), s=Zv(i), o=Math.max(1, e.newStart-Ywi), a=Math.min(s.length+1, e.newStart+e.newLines+Ywi), l=Math.max(1, e.oldStart-Ywi), u=Math.min(r.length+1, e.oldStart+e.oldLines+Ywi), d=s.slice(o-1, e.newStart-1).map(g=>"  "+g), m=s.slice(e.newStart+e.newLines-1, a-1).map(g=>"  "+g), p=e.diffString.split(`
`);
    return new S8n({
      diffString:[...d,...p,...m].join(`
`),oldStart:l,newStart:o,oldLines:u-l,newLines:a-o,linesAdded:e.linesAdded,linesRemoved:e.linesRemoved
    })
  }
  codeChunkHasFullFileIntent(e){
    return e.intent!==void 0&&[Az.COMPOSER_FILE, Az.MENTIONED_FILE].includes(e.intent)
  }
  shouldShowCancel(e){
    try{
      const t=this._composerDataService.getComposerData(e);
      return t?this._composerDataService.getPendingUserDecisionGroup(e).length>0||t.status==="generating"||this._composerCodeBlockService.getCodeBlocksOfStatuses(e,"applying").filter(s=>!s.isNotApplied).length>0:!1
    }
    catch(t){
      return console.error("[composer] Error in shouldShowCancel",t),!1
    }
  }
  clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages(e){
    if(!this._composerDataService.getComposerData(e))return;
    const i=this._composerDataService.getLoadedConversation(e);
    for(let r=i.length-1;
    r>=0;
    r--){
      const s=i[r];
      if(s.type===ul.AI){
        if(s.errorDetails||s.serviceStatusUpdate){
          this._composerDataService.updateComposerDataSetStore(e,o=>o("conversationMap",s.bubbleId,"errorDetails",void 0)),this._composerDataService.updateComposerDataSetStore(e,o=>o("conversationMap",s.bubbleId,"serviceStatusUpdate",void 0));
          break
        }
      }
      else break
    }
  }
  resumeFromToolFormerBubble(e, t, i){
    const r=this._composerDataService.getComposerData(e);
    if(!r)throw new Error("[composer] Cannot get bubble for unloaded composer");
    const s=this._composerDataService.getLoadedConversation(e), o=s.findIndex(d=>d.bubbleId===t);
    if(o===-1)throw new Error(`[composer] No message found with bubble ID ${t}`);
    const a=this._composerDataService.getComposerBubble(e, t);
    if(!a||a.type!==ul.AI)throw new Error(`[composer] Message with bubble ID ${t} is not an AI message`);
    const l={
      ...h_(),text:"",context:r.context,skipRendering:!0
    };
    if(i)a.afterCheckpointId&&(l.checkpointId=a.afterCheckpointId);
    else if(!i)a.checkpointId&&(l.checkpointId=a.checkpointId);
    else for(let d=o-1;
    d>=0;
    d--)if(s[d].checkpointId){
      s[d].checkpointId&&(l.checkpointId=s[d].checkpointId);
      break
    }
    const u=o+(i?1:0);
    return this._composerDataService.insertComposerBubblesAtIndex(e, [l], u), l.bubbleId
  }
  clearText(e){
    const t=this._composerDataService.getComposerData(e);
    t&&(this._composerDataService.updateComposerData(e, {
      text:"",richText:""
    }), this._composerEventService.fireShouldForceText({
      composerId:t.composerId
    }))
  }
  getCurrentFile(){
    const e=this._aiFileInfoService.getLastActiveFileEditor();
    if(!e)return;
    let t=gp.getOriginalUri(e.input);
    if(!(!t&&(tgi(e.input)&&(t=e.input.modified.resource), !t))){
      if(t.scheme===_n.git)try{
        const i=JSON.parse(t.query);
        if(i&&i.path)return{
          uri:je.file(i.path),isCurrentFile:!0
        }
      }
      catch(i){
        console.error("Failed to parse git URI",i)
      }
      if(this.isCompatibleScheme(t.scheme))return{
        uri:t,isCurrentFile:!0
      }
    }
  }
  isCompatibleScheme(e){
    return this._composerDataService.isCompatibleScheme(e)
  }
  isComposerEmpty(e){
    let t;
    try{
      t=this._composerDataService.getComposerData(e)
    }
    catch(i){
      return console.warn("tried to check if composer is empty but missing composer",i),!1
    }
    return!t||t.isSpec||t.isProject||t.createdFromBackgroundAgent?.bcId?!1:t.fullConversationHeadersOnly.length===0&&t.text.trim()===""
  }
  async abortGenerationUUID(e){
    const t=this._aiService.streamingAbortControllers.get(e);
    t&&(t.abort(), this._aiService.streamingAbortControllers.delete(e))
  }
  getBestOfNGroupId(e){
    const t=this._composerDataService.getHandleIfLoaded(e), i=t?this._composerDataService.getComposerData(t):void 0;
    return i&&i.isBestOfNSubcomposer&&i.subagentInfo?.parentComposerId?i.subagentInfo.parentComposerId:e
  }
  unformatComposerDiff(e){
    if(!e.chunks||e.chunks.length===0||e.hitTimeout)return[];
    const t=[];
    for(const i of e.chunks){
      const r=i.diffString.split(`
`);
      let s=i.oldStart,o=[],a=[],l=null;
      const u=()=>{
        if(l!==null){
          const d=new rh(l-1,s-1);
          t.push({
            original:d,modified:[...a]
          }),o=[],a=[],l=null
        }
      };
      for(const d of r)d.startsWith("- ")?(l===null&&(l=s),o.push(d.substring(2)),s+=1):d.startsWith("+ ")?(l===null&&(l=s),a.push(d.substring(2))):d.startsWith("  ")?(u(),s+=1):u();
      u()
    }
    return t
  }
  async measureCapabilityExecution(e){
    const t=performance.now();
    let i;
    const r=e.parentSpanCtx?.startSpan(`composerCapability.${e.process}.${e.capabilityName}`);
    try{
      return i=await e.capabilityFn(),i
    }
    catch(s){
      throw s
    }
    finally{
      const o=performance.now()-t;
      r?.end(),this._metricsService.distribution({
        stat:"composer.runCapabilities",value:o,tags:{
          capability:e.capabilityName,process:e.process
        }
      })
    }
  }
  async getDiffsFromSubagent(e, t){
    const i=[], r=this._composerDataService.getHandleIfLoaded(t), s=r?this._composerDataService.getComposerData(r):void 0;
    if(!s)return i;
    const o=this._composerDataService.getHandleIfLoaded(e);
    if(!(o?this._composerDataService.getComposerData(o):void 0)||!o)return i;
    for(const[l]of Object.entries(s.codeBlockData))try{
      const u=je.parse(l),d=this._composerDataService.getComposerData(o);
      if(!await this._composerFileService.exists({
        uri:u,composerData:d
      })||u.path.endsWith(".ipynb"))continue;
      const p=this._composerDataService.getHandleIfLoaded(t);
      if(!p)continue;
      const g=this._composerCodeBlockService.getLastAppliedCodeBlock(p,u);
      if(!g)continue;
      const f=this._composerCodeBlockService.getCodeBlockV0ModelLines(p,u),A=await this._composerCodeBlockService.getCodeBlockNewModelLines(p,u,g.codeblockId);
      if(!f||!A)continue;
      const w=f.join(`
`),C=A.join(`
`);
      if(w===C)continue;
      const x=await this.computeDiffAndFormat(w,C),I=this._workspaceContextService.asRelativePath(u);
      i.push({
        filePath:I,diff:x,uri:u
      })
    }
    catch(u){
      console.error("[ComposerUtilsService] Failed computing diff for",l,u);
      continue
    }
    return i
  }
  async deepCloneComposer(e, t, i){
    t=t??Wr();
    const r=new WeakMap, s=j=>{
      if(j===null||typeof j!="object")return j;
      const X=ESt(j);
      if(X instanceof je)return X;
      if(X instanceof ie)return X.clone();
      if(X instanceof Uint8Array)return new Uint8Array(X);
      if(r.has(X))return r.get(X);
      if(Array.isArray(X)){
        const re=[];
        r.set(X,re);
        for(const ne of X)re.push(s(ne));
        return re
      }
      const ee={
        
      };
      r.set(X,ee);
      for(const[re,ne]of Object.entries(X))ee[re]=s(ne);
      return ee
    }, o=j=>j==="running"||j==="loading"?"cancelled":j, a=ESt(e), {
      capabilities:l,conversationActionManager:u,...d
    }
    =a, m=a.composerId, p=a.conversationMap;
    let g=d;
    if(p){
      const j={
        
      };
      for(const[X,ee]of Object.entries(p)){
        const re=ee.toolFormerData;
        if(re&&re.tool===an.TASK_V2){
          const ne=re.additionalData,pe=ne?.composerData;
          if(pe){
            const le=ESt(pe),{
              capabilities:he,conversationActionManager:be,...fe
            }
            =le,ke={
              ...fe,capabilities:[]
            },Se=o(ne?.status??"pending");
            j[X]={
              ...ee,toolFormerData:{
                ...re,additionalData:{
                  ...ne??{
                    status:Se
                  },status:Se,composerData:ke
                }
              }
            };
            continue
          }
        }
        j[X]=ee
      }
      g={
        ...d,conversationMap:j
      }
    }
    const f={
      ...K9(a.modelConfig,t),...s(g)
    };
    f.composerId=t, f.status==="generating"&&(f.status="aborted");
    const A=new Map, w=new Map, C={
      
    };
    for(const[j, X]of Object.entries(f.conversationMap)){
      const ee=Wr();
      if(A.set(j,ee),X.serverBubbleId){
        const re=Wr();
        w.set(X.serverBubbleId,re),X.serverBubbleId=re
      }
      X.bubbleId=ee,C[ee]=X
    }
    f.conversationMap=C, f.fullConversationHeadersOnly=f.fullConversationHeadersOnly.map(j=>{
      const X=A.get(j.bubbleId),ee=j.serverBubbleId?w.get(j.serverBubbleId)??Wr():void 0;
      return X?{
        ...j,bubbleId:X,serverBubbleId:ee
      }
      :j
    });
    for(const j of Object.keys(f.codeBlockData))for(const X of Object.values(f.codeBlockData[j])){
      if(!X)continue;
      const ee=A.get(X.bubbleId);
      ee&&(X.bubbleId=ee)
    }
    const x=new CNg(this._storageService, t), I=TC(), B=new oQ(VKe), R=new oQ(KR), N=new Map, M=new Map, O=j=>Array.from(j, X=>X.toString(16).padStart(2, "0")).join(""), $=async j=>{
      const X=O(j),ee=M.get(X);
      if(ee)return ee;
      const re=await x.getBlob(I,j);
      if(!re)throw new Error(`[composer] Missing user message blob (${X})`);
      const ne=R.deserialize(re),pe=ne.messageId,le=A.get(pe);
      if(!le||le===pe)return M.set(X,j),j;
      ne.messageId=le;
      const he=R.serialize(ne),be=await aye(he);
      return await x.setBlob(I,be,he),M.set(X,be),be
    }, H=async(j=f.conversationState)=>{
      if(j?.turns?.length)for(let X=0;
      X<j.turns.length;
      X++){
        const ee=j.turns[X];
        if(!ee.length)throw new Error("[composer] Missing turn blob id while cloning conversation state");
        const re=O(ee),ne=N.get(re);
        if(ne){
          j.turns[X]=ne;
          continue
        }
        const pe=await x.getBlob(I,ee);
        if(!pe)throw new Error(`[composer] Missing turn blob for ${re}`);
        const le=B.deserialize(pe);
        if(le.turn.case!=="agentConversationTurn")continue;
        const he=le.turn.value,be=he.userMessage;
        if(!be.length)throw new Error(`[composer] Missing user message blob id for turn ${re}`);
        const fe=O(be),ke=await $(be);
        if(O(ke)===fe){
          N.set(re,ee);
          continue
        }
        he.userMessage=Uint8Array.from(ke);
        const Se=B.serialize(le),Fe=await aye(Se);
        await x.setBlob(I,Fe,Se),N.set(re,Fe),j.turns[X]=Fe
      }
    }, W=new Set([f.conversationState]);
    for(const j of Object.values(f.conversationMap))j.type===ul.HUMAN&&W.add(j.conversationState);
    for(const j of W)await H(j);
    for(const j of Object.values(f.conversationMap))for(const X of["checkpointId", "afterCheckpointId"]){
      const ee=j[X];
      if(ee)try{
        const re=await this._composerCheckpointStorageService.retrieveCheckpoint(m,ee);
        if(!re){
          j[X]=void 0;
          continue
        }
        const ne=await this._composerCheckpointStorageService.storeCheckpoint(t,re);
        j[X]=ne
      }
      catch(re){
        console.error(`[composer] Failed to clone checkpoint (${X}):`,re),j[X]=void 0
      }
    }
    for(const j of Object.keys(f.codeBlockData))for(const X of Object.values(f.codeBlockData[j]))if(X.applyGenerationUUID=void 0, X.latestApplyGenerationUUID=void 0, X.status==="generating"&&(X.status="completed"), X.status==="applying"&&(X.status="cancelled"), X.diffId)try{
      const ee=await this._composerCodeBlockDiffStorageService.retrieveDiff(m,X.diffId);
      if(ee){
        const re=await this._composerCodeBlockDiffStorageService.storeDiff(t,ee);
        X.diffId=re
      }
      else X.diffId=void 0
    }
    catch(ee){
      console.error("[composer] Failed to clone diff:",ee),X.diffId=void 0
    }
    const z=[];
    for(const[j, X]of A.entries())z.push((async()=>{
      try{
        const ee=await this._messageRequestContextStorageService.retrieveContext(m,j);
        ee&&await this._messageRequestContextStorageService.storeContext(t,X,ee)
      }
      catch(ee){
        console.error(`[composer] Failed to clone message request context for bubble ${j}:`,ee)
      }
    })());
    if(await Promise.all(z), p){
      const j=[];
      for(const[X,ee]of Object.entries(p)){
        const re=ee.toolFormerData;
        if(!re||re.tool!==an.TASK_V2)continue;
        const ne=re.additionalData,pe=A.get(X);
        if(!pe)continue;
        const le=f.conversationMap[pe];
        !le?.toolFormerData||le.toolFormerData.tool!==an.TASK_V2||j.push((async()=>{
          try{
            let he=ne?.composerData;
            if(!he&&ne?.subagentComposerId){
              const Ne=await this._composerDataService.getComposerHandleById(ne.subagentComposerId);
              he=Ne?this._composerDataService.getComposerData(Ne):void 0
            }
            if(!he)return;
            const be=`${oit}${Wr()}`,fe=await this.deepCloneComposer(he,be,{
              skipCapabilities:!0
            }),ke=[],Se=he.capabilities;
            if(Array.isArray(Se))for(const Ne of Se){
              if(Ne instanceof Pq){
                const Oe=Ne.toJSON();
                ke.push({
                  type:Oe.type,data:s(Oe.data)
                });
                continue
              }
              if(Ne&&typeof Ne=="object"){
                const Oe=Ne,Ge=Oe.type,Le=Oe.data;
                typeof Ge=="number"&&Le!==void 0&&ke.push({
                  type:Ge,data:s(Le)
                })
              }
            }
            fe.capabilities=ke,await this._composerDataService.appendSubComposer(fe);
            const Fe=le.toolFormerData;
            if(!Fe||Fe.tool!==an.TASK_V2)return;
            const De=Fe.additionalData,Pe=o(De?.status??"pending");
            Fe.additionalData={
              ...De??{
                status:Pe
              },status:Pe,composerData:fe,subagentComposerId:be
            }
          }
          catch(he){
            console.error(`[composer] Failed to clone TASK_V2 subagent ${X}:`,he);
            const be="cancelled";
            if(le.toolFormerData&&le.toolFormerData.tool===an.TASK_V2){
              const fe=le.toolFormerData.additionalData;
              le.toolFormerData.additionalData={
                ...fe??{
                  status:be
                },status:be,composerData:void 0
              }
            }
          }
        })())
      }
      await Promise.all(j)
    }
    const Y=[];
    if(e.subComposerIds&&e.subComposerIds.length>0)for(const j of e.subComposerIds)try{
      const X=await this._composerDataService.getComposerHandleById(j);
      if(X){
        const ee=Wr();
        Y.push(ee);
        const re=await this.deepCloneComposer(X.data,ee);
        await this._composerDataService.appendSubComposer(re)
      }
    }
    catch(X){
      console.error(`[composer] Failed to clone subComposer ${j}:`,X)
    }
    if(f.subComposerIds=Y, !i?.skipCapabilities){
      const j=e.capabilities.map(X=>({
        type:X.type,data:s(X.toJSON().data)
      }));
      f.capabilities=cce(this._instantiationService,t,{
        savedCapabilityData:j
      })
    }
    if(this._experimentService.checkFeatureGate("clone_blob_upload")&&this._cursorAuthenticationService.reactivePrivacyMode()!==!0){
      let j="";
      const X=e.fullConversationHeadersOnly??[];
      for(let re=X.length-1;
      re>=0;
      re--){
        const ne=e.conversationMap[X[re].bubbleId];
        if(ne?.requestId){
          j=ne.requestId;
          break
        }
      }
      j||(j=e.latestChatGenerationUUID??Wr()),this._blobUploadService.notifyClone({
        conversationId:f.composerId,sourceConversationId:e.composerId,sourceRequestId:j
      });
      const ee=x.getWrittenBlobIds();
      ee.length>0&&this._blobUploadService.enqueue({
        conversationId:f.composerId,blobIds:ee
      })
    }
    return f
  }
  async extractSummaryFromSubagent(e){
    const t=this._composerDataService.getHandleIfLoaded(e), i=t?this._composerDataService.getLoadedConversation(t):[];
    if(!i||i.length===0)throw new Vjl({
      clientVisibleErrorMessage:"Failed to get subagent conversation",modelVisibleErrorMessage:"Tool call failed",actualErrorMessage:"No conversation found for subagent composer"
    });
    const r=i[i.length-1];
    return r.type===ul.HUMAN?"":r.text||"Task completed"
  }
  shouldSuggestPlanMode(e){
    if(!this._composerModesService.getAllModes().find(u=>u.id==="plan")||!e||e.trim().length===0)return!1;
    const r=["plan", "planning", "refactor", "migrate", "restructure", "design", "architect", "spec", "specify", "outline", "draft", "blueprint", "proposal", "roadmap", "strategy", "approach", "steps", "checklist", "timeline", "milestones", "phased", "staged", "rollout", "implementation", "execution", "workflow", "scope", "estimate", "breakdown", "roadmap", "todo", "acceptance criteria", "definition of done", "\u8BA1\u5212", "\u91CD\u6784", "\u8FC1\u79FB", "\u91CD\u7EC4", "\u8BBE\u8BA1", "\u65B9\u6848", "\u8DEF\u7EBF\u56FE", "\u6B65\u9AA4", "\u8349\u6848", "\u84DD\u56FE", "\u7B56\u7565", "\u5DE5\u4F5C\u6D41", "\u65F6\u95F4\u8868", "\u9636\u6BB5\u6027", "\u6267\u884C", "\u8303\u56F4", "\u4F30\u7B97", "\u4EFB\u52A1\u5206\u89E3", "\u9A8C\u6536\u6807\u51C6", "\u5B8C\u6210\u5B9A\u4E49", "jihua", "chonggou", "qianyi", "chongzu", "sheji", "fangan", "luxiantu", "buzhou", "caoan", "lantu", "celue", "gongzuoliu", "shijianbiao", "jieduanxing", "zhixing", "fanwei", "gusun", "renwufenjie", "yanshoubiaozhun", "wanchengdingyi", "\u092F\u094B\u091C\u0928\u093E", "\u092A\u0941\u0928\u0930\u094D\u0917\u0920\u0928", "\u0938\u094D\u0925\u093E\u0928\u093E\u0902\u0924\u0930\u0923", "\u092A\u0941\u0928\u0930\u094D\u0938\u0902\u0930\u091A\u0928\u093E", "\u0930\u0942\u092A\u0930\u0947\u0916\u093E", "\u0921\u093F\u091C\u093C\u093E\u0907\u0928", "\u0916\u093E\u0915\u093E", "\u0915\u093E\u0930\u094D\u092F\u092F\u094B\u091C\u0928\u093E", "\u0938\u092E\u092F\u0930\u0947\u0916\u093E", "\u0930\u0923\u0928\u0940\u0924\u093F", "\u0915\u093E\u0930\u094D\u092F\u093E\u0928\u094D\u0935\u092F\u0928", "\u091A\u0930\u0923\u092C\u0926\u094D\u0927", "\u0928\u0915\u094D\u0936\u093E", "\u0905\u0928\u0941\u092E\u093E\u0928", "\u0935\u093F\u092D\u093E\u091C\u0928", "\u0938\u094D\u0935\u0940\u0915\u0943\u0924\u093F \u092E\u093E\u092A\u0926\u0902\u0921", "\u092A\u0942\u0930\u094D\u0923\u0924\u093E \u092A\u0930\u093F\u092D\u093E\u0937\u093E", "plan", "planificar", "planificaci\xF3n", "refactorizaci\xF3n", "migrar", "reestructurar", "dise\xF1ar", "especificar", "hoja de ruta", "borrador", "pasos", "estrategia", "implementaci\xF3n", "ejecuci\xF3n", "flujo de trabajo", "cronograma", "etapas", "estimaci\xF3n", "desglose", "criterios de aceptaci\xF3n", "definici\xF3n de hecho", "plan", "planifier", "refactoriser", "migrer", "restructurer", "concevoir", "sp\xE9cifier", "feuille de route", "brouillon", "\xE9tapes", "strat\xE9gie", "mise en \u0153uvre", "ex\xE9cution", "flux de travail", "calendrier", "phases", "estimation", "d\xE9composition", "crit\xE8res d'acceptation", "d\xE9finition de termin\xE9", "\u062E\u0637\u0629", "\u062A\u062E\u0637\u064A\u0637", "\u0625\u0639\u0627\u062F\u0629 \u0647\u064A\u0643\u0644\u0629", "\u062A\u0631\u062D\u064A\u0644", "\u0625\u0639\u0627\u062F\u0629 \u062A\u0635\u0645\u064A\u0645", "\u062A\u0635\u0645\u064A\u0645", "\u0645\u062E\u0637\u0637", "\u062E\u0627\u0631\u0637\u0629 \u0637\u0631\u064A\u0642", "\u0645\u0633\u0648\u062F\u0629", "\u062E\u0637\u0648\u0627\u062A", "\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629", "\u062A\u0646\u0641\u064A\u0630", "\u062C\u062F\u0648\u0644 \u0632\u0645\u0646\u064A", "\u0645\u0631\u0627\u062D\u0644", "\u062A\u0642\u062F\u064A\u0631", "\u0646\u0637\u0627\u0642", "\u0627\u0646\u0647\u064A\u0627\u0631 \u0627\u0644\u0645\u0647\u0627\u0645", "\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0642\u0628\u0648\u0644", "\u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0643\u062A\u0645\u0627\u0644", "\u09AA\u09B0\u09BF\u0995\u09B2\u09CD\u09AA\u09A8\u09BE", "\u09AA\u09C1\u09A8\u09B0\u09CD\u0997\u09A0\u09A8", "\u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0", "\u09A8\u0995\u09B6\u09BE", "\u09B0\u09C2\u09AA\u09B0\u09C7\u0996\u09BE", "\u09B0\u09CB\u09A1\u09AE\u09CD\u09AF\u09BE\u09AA", "\u0996\u09B8\u09DC\u09BE", "\u09A7\u09BE\u09AA", "\u0995\u09CC\u09B6\u09B2", "\u09B8\u09AE\u09AF\u09BC\u09B8\u09C2\u099A\u09C0", "\u09AC\u09BE\u09B8\u09CD\u09A4\u09AC\u09BE\u09AF\u09BC\u09A8", "\u09AA\u09B0\u09CD\u09AF\u09BE\u09AF\u09BC", "\u0986\u09A8\u09C1\u09AE\u09BE\u09A8\u09BF\u0995", "\u09AA\u09B0\u09BF\u09B8\u09B0", "\u0995\u09BE\u099C\u09C7\u09B0 \u09AA\u09CD\u09B0\u09AC\u09BE\u09B9", "\u0997\u09CD\u09B0\u09B9\u09A3\u09AF\u09CB\u0997\u09CD\u09AF\u09A4\u09BE\u09B0 \u09AE\u09BE\u09A8\u09A6\u09A3\u09CD\u09A1", "\u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3\u09A4\u09BE\u09B0 \u09B8\u0982\u099C\u09CD\u099E\u09BE", "planejar", "planejamento", "refatorar", "migrar", "reestruturar", "desenhar", "especificar", "roteiro", "rascunho", "etapas", "estrat\xE9gia", "implementa\xE7\xE3o", "execu\xE7\xE3o", "fluxo de trabalho", "cronograma", "fases", "estimativa", "escopo", "decomposi\xE7\xE3o", "crit\xE9rios de aceita\xE7\xE3o", "defini\xE7\xE3o de conclu\xEDdo", "\u043F\u043B\u0430\u043D", "\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C", "\u0440\u0435\u0444\u0430\u043A\u0442\u043E\u0440\u0438\u043D\u0433", "\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044F", "\u0440\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u044F", "\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430", "\u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F", "\u0434\u043E\u0440\u043E\u0436\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430", "\u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A", "\u0448\u0430\u0433\u0438", "\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F", "\u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F", "\u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435", "\u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441", "\u0433\u0440\u0430\u0444\u0438\u043A", "\u044D\u0442\u0430\u043F\u044B", "\u043E\u0446\u0435\u043D\u043A\u0430", "\u043E\u0431\u044A\u0435\u043C", "\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447", "\u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u0440\u0438\u0451\u043C\u043A\u0438", "\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u0438", "\u8A08\u753B", "\u30EA\u30D5\u30A1\u30AF\u30BF\u30EA\u30F3\u30B0", "\u79FB\u884C", "\u518D\u69CB\u7BC9", "\u8A2D\u8A08", "\u4ED5\u69D8", "\u4ED5\u69D8\u66F8", "\u30ED\u30FC\u30C9\u30DE\u30C3\u30D7", "\u8349\u6848", "\u6226\u7565", "\u5B9F\u88C5", "\u5B9F\u884C", "\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC", "\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3", "\u6BB5\u968E\u7684", "\u898B\u7A4D\u3082\u308A", "\u7BC4\u56F2", "\u5206\u89E3", "\u53D7\u3051\u5165\u308C\u57FA\u6E96", "\u5B8C\u4E86\u306E\u5B9A\u7FA9", "keikaku", "rifakutaringu", "ikou", "saikouchiku", "sekkei", "shiyou", "shiyousho", "roodomaapu", "soun", "senryaku", "jissou", "jikkou", "waakufurou", "taimurain", "dankaiteki", "mitsumori", "han'i", "bunkai", "ukeire kijun", "kanryou no teigi"], s=e.toLowerCase();
    return!!(r.some(u=>s.includes(u))||(e.match(/[.!?]+/g)||[]).length>=1||e.trim().split(/\s+/).filter(u=>u.length>0).length>=35)
  }
  shouldSuggestDebugMode(e){
    if(!this._composerModesService.getAllModes().find(o=>o.id==="debug")||!e||e.trim().length===0)return!1;
    const r=["debug", "bug", "debugging"], s=e.toLowerCase();
    return!!r.some(o=>s.includes(o))
  }
  shouldSuggestReviewCta(e){
    return!1
  }
  getPluginKeywordSuggestion(e){
    const t=this._pluginsProviderService.pluginsCache.get(), i=t?.allMarketplacePlugins??[], r=new Set((t?.installedPlugins??[]).map(s=>s.plugin.id));
    return Rny(e, i, r)
  }
  getPrimaryAssociatedBranchFromHeader(e){
    return e.activeBranch?.branchName?e.activeBranch.branchName:e.prUrl?e.prBranchName:e.committedToBranch?e.committedToBranch:e.lastMessageSentOnBranch?e.lastMessageSentOnBranch:e.createdOnBranch
  }
}, __decorate([Gs("ComposerUtilsService.decideRunningComposerTabAction")], hO.prototype, "decideRunningComposerTabAction", null), __decorate([Gs("ComposerUtilsService.ensureCapabilitiesAreLoaded")], hO.prototype, "ensureCapabilitiesAreLoaded", null), __decorate([Gs("ComposerUtilsService.getShouldWebSearchBeEnabled")], hO.prototype, "getShouldWebSearchBeEnabled", null), __decorate([Gs("ComposerUtilsService.getShouldAutoSaveAgenticEdits")], hO.prototype, "getShouldAutoSaveAgenticEdits", null), __decorate([Gs("ComposerUtilsService.replacedBubbleForFastEdit")], hO.prototype, "replacedBubbleForFastEdit", null), __decorate([Gs("ComposerUtilsService.processConversationForFastEdit")], hO.prototype, "processConversationForFastEdit", null), __decorate([Gs("ComposerUtilsService.handleStreamComposer")], hO.prototype, "handleStreamComposer", null), __decorate([Gs("ComposerUtilsService.readFileContents")], hO.prototype, "readFileContents", null), __decorate([Gs("ComposerUtilsService.getCodeBlockDataFromBubbleId")], hO.prototype, "getCodeBlockDataFromBubbleId", null), __decorate([Gs("ComposerUtilsService.removeMessagesAfterBubble")], hO.prototype, "removeMessagesAfterBubble", null), __decorate([Gs("ComposerUtilsService.runCapabilitiesForProcess")], hO.prototype, "runCapabilitiesForProcess", null), __decorate([Gs("ComposerUtilsService.selectNextComposer")], hO.prototype, "selectNextComposer", null), __decorate([Gs("ComposerUtilsService.selectPrevComposer")], hO.prototype, "selectPrevComposer", null), __decorate([Gs("ComposerUtilsService.computeDiff")], hO.prototype, "computeDiff", null), __decorate([Gs("ComposerUtilsService.computeDiffAndFormat")], hO.prototype, "computeDiffAndFormat", null), __decorate([Gs("ComposerUtilsService.growChunk")], hO.prototype, "growChunk", null), __decorate([Gs("ComposerUtilsService.shouldShowCancel")], hO.prototype, "shouldShowCancel", null), __decorate([Gs("ComposerUtilsService.resumeFromToolFormerBubble")], hO.prototype, "resumeFromToolFormerBubble", null), __decorate([Gs("ComposerUtilsService.getCurrentFile")], hO.prototype, "getCurrentFile", null), __decorate([Gs("ComposerUtilsService.unformatComposerDiff")], hO.prototype, "unformatComposerDiff", null), hO=__decorate([__param(0, Oa), __param(1, YZ), __param(2, Lr), __param(3, c_), __param(4, ku), __param(5, iie), __param(6, ln), __param(7, fr), __param(8, YD), __param(9, BA), __param(10, gnt), __param(11, rw), __param(12, _$e), __param(13, R1), __param(14, Ctt), __param(15, Ghn), __param(16, Hi), __param(17, EJ), __param(18, JF), __param(19, Jv), __param(20, DT), __param(21, Tl), __param(22, wg), __param(23, kmu), __param(24, uie)], hO), Vi(IM, hO, 1)
}
}), IV, IT, _0a, $J=