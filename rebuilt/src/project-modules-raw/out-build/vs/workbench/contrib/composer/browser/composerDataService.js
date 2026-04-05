// Module: out-build/vs/workbench/contrib/composer/browser/composerDataService.js
// Offset: 26933631 (bundle byte offset)
// Size: 52726 bytes

X9(), Ti(), gT(), Jk(), cv(), Uv(), Vg(), vr(), ml(), _s(), yn(), rt(), zr(), Js(), Yn(), Bc(), hs(), Ei(), ns(), Er(), Wt(), So(), Dd(), Ws(), kr(), M4(), VA(), ps(), jh(), sB(), rce(), eu(), Wu(), Rnu(), fN(), ET(), Bp(), RNe(), r8(), pye(), Hhn(), J0(), LNe(), KZ(), SI(), k$e(), yhn(), Ott(), QFg(), jk(), vhn(), zbi(), Zk(), uce(), nvi(), wSt(), vEe(), of(), KS(), Whn="New Chat", Oa=xi("composerDataService"), ly=class extends at{
  static{
    Jnu=this
  }
  get loadedComposers(){
    return this._ownLoadedComposers
  }
  fireWorktreeChanged(e, t){
    this._onDidChangeComposerWorktree.fire({
      composerId:e,worktreePath:t
    })
  }
  get isRefreshingFromDisk(){
    return this._isRefreshingFromDisk
  }
  getComposerIdFromViewId(e){
    const t=FB+".";
    if(e.startsWith(t))return e.slice(t.length)
  }
  getComposerIdFromViewContainer(e){
    const i=Di.as(Fg.ViewsRegistry).getViews(e)[0];
    if(i)return this.getComposerIdFromViewId(i.id)
  }
  findLoadedComposerIdByBackgroundAgentId(e){
    const t=this.getLoadedComposers();
    for(const i of t){
      const r=this.getHandleIfLoaded(i),s=r?this.getComposerData(r):void 0;
      if(s?.createdFromBackgroundAgent?.bcId===e&&s.createdFromBackgroundAgent.shouldStreamMessages)return i
    }
  }
  findComposerIdByBackgroundAgentId(e){
    const t=this.allComposersData.allComposers.find(i=>i.createdFromBackgroundAgent?.bcId===e&&i.createdFromBackgroundAgent.shouldStreamMessages);
    return t?t.composerId:this.findLoadedComposerIdByBackgroundAgentId(e)
  }
  getComposerTitle(e){
    try{
      const t=this.getHandleIfLoaded(e),i=t?this.getComposerData(t):void 0;
      if(i)return i.name??Whn;
      {
        const r=this.allComposersData.allComposers.find(s=>s.composerId===e);
        if(r)return r.name??Whn
      }
      return Whn
    }
    catch(t){
      return console.error("[composer] error getting composer title",t),Whn
    }
  }
  resolveComposerIdToSelected(e){
    const t=this.getHandleIfLoaded(e), i=t?this.getComposerData(t):void 0;
    if(!i)return e;
    if(i.isBestOfNParent&&i.selectedSubComposerId){
      const r=i.selectedSubComposerId;
      if(i.subComposerIds?.includes(r))return r
    }
    return e
  }
  setLastFocusedComposerId(e){
    const t=this.allComposersData.selectedComposerIds[0];
    if(t&&t!==e)try{
      const a=this.getHandleIfLoaded(t),l=a?this.getComposerData(a):void 0;
      if(a&&l&&Vgi(l)){
        const u=Kgi(l);
        this.updateComposerData(a,{
          subtitle:u,isDraft:!0
        }),this.setAllComposersData("allComposers",d=>d.composerId===t,{
          subtitle:u,isDraft:!0
        })
      }
    }
    catch(a){
      console.error("[composer] error handling draft subtitle:",a)
    }
    const i=sc(()=>this.getHandleIfLoaded(e)), r=i?this.getComposerData(i):void 0, o=(r?.isBestOfNSubcomposer??!1)&&r?.subagentInfo?.parentComposerId?r.subagentInfo.parentComposerId:e;
    this.setAllComposersData("lastFocusedComposerIds", a=>{
      const l=a.filter(u=>u!==o);
      return[o,...l]
    }), this.setAllComposersData("selectedComposerIds", a=>{
      const l=(a??[]).filter(u=>u!==o);
      return[o,...l]
    }), this._onDidChangeLastFocusedComposerId.fire(e), this.setAllComposersData("allComposers", a=>a.composerId===e, {
      hasUnreadMessages:!1
    }), setTimeout(async()=>{
      try{
        const a=this.getHandleIfLoaded(e);
        a&&this.updateComposerData(a,{
          hasUnreadMessages:!1
        })
      }
      catch(a){
        console.error("[composer] error clearing unread messages",a)
      }
    }, 5)
  }
  get selectedComposerId(){
    const e=this.allComposersData.selectedComposerIds, t=this.allComposersData.lastFocusedComposerIds, i=t.find(a=>e.includes(a));
    if(i)return i;
    const r=t.filter(a=>e.includes(a));
    r.length!==t.length&&this.setAllComposersData("lastFocusedComposerIds", r);
    const s=this._paneCompositePartService.getLastActivePaneCompositeId(2);
    if(s){
      const a=this._viewDescriptorService.getViewContainerById(s);
      if(a){
        const l=this.getComposerIdFromViewContainer(a);
        if(l&&e.includes(l))return t[0]!==l&&this.setLastFocusedComposerId(l),l
      }
    }
    if(e.length>0){
      const a=e[0];
      return t[0]!==a&&this.setLastFocusedComposerId(a),a
    }
    else if(this.allComposersData.allComposers.length>0){
      const a=this.allComposersData.allComposers[0];
      if(a)return a.composerId
    }
    console.log("[composer] no composers found, resetting");
    const o=this.resetComposers();
    return this.setLastFocusedComposerId(o.composerId), o.composerId
  }
  get selectedComposerIds(){
    return this.allComposersData.selectedComposerIds
  }
  hasNearbyCachedSummary(e, t, i){
    const r=this.getComposerData(e);
    if(!r)return!1;
    const s=r.latestConversationSummary?.summary?.truncationLastBubbleIdInclusive??r.latestConversationSummary?.lastBubbleId;
    let o;
    for(let a=r.fullConversationHeadersOnly.length-1;
    a>=0;
    a--){
      const l=r.fullConversationHeadersOnly[a],u=r.conversationMap[l.bubbleId];
      if(u){
        if(s!==void 0&&(l.bubbleId===s||l.serverBubbleId===s))break;
        if(u.type===ul.HUMAN&&u.contextWindowStatusAtCreation&&(o=u.contextWindowStatusAtCreation),u.cachedConversationSummary){
          const d=u.contextWindowStatusAtCreation||o;
          if(!d)continue;
          let m;
          if(d.tokensUsed!==void 0&&d.tokenLimit!==void 0&&d.tokenLimit>0?m=d.tokensUsed/d.tokenLimit*100:d.percentageRemainingFloat!==void 0?m=100-d.percentageRemainingFloat:d.percentageRemaining!==void 0&&(m=100-d.percentageRemaining),typeof m=="number"&&Math.abs(t-m)<=i)return!0
        }
      }
    }
    return!1
  }
  get composerDataStorageID(){
    return FFn
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $, H, W, z, Y){
    super(), this._storageService=e, this._workspaceContextService=t, this._reactiveStorageService=i, this._instantiationService=r, this.composerTextModelService=s, this._composerEventService=o, this._composerFileService=a, this._paneCompositePartService=l, this._viewsService=u, this._viewDescriptorService=d, this._commandService=m, this._environmentService=p, this._composerCheckpointStorageService=g, this._composerMessageStorageService=f, this._composerCodeBlockDiffStorageService=A, this._composerMessageRequestContextStorageService=w, this._composerCodeBlockPartialInlineDiffFatesStorageService=C, this._modelConfigService=x, this._gitContextService=I, this._notificationService=B, this.instantiationService=R, this.reactiveStorageService=N, this._fileService=M, this._worktreeManagerService=O, this._experimentService=$, this._configurationService=H, this._clientDebugLogService=W, this._asyncOperationRegistry=z, this._patchGraphStorageService=Y, this._planReferencesIndex=new Map, this._ownLoadedComposers=mFg(), this._onDidChangeLastFocusedComposerId=this._register(new Qe), this.onDidChangeLastFocusedComposerId=this._onDidChangeLastFocusedComposerId.event, this._onDidChangeComposerWorktree=this._register(new Qe), this.onDidChangeComposerWorktree=this._onDidChangeComposerWorktree.event, this._isRefreshingFromDisk=!1, this._pendingBackgroundAgentComposerCreations=new Map, this._composerDisposableMap=new mp, this._worktreeWatchers=new Map, this._loadingCapabilities=new Set, this._register(this._viewsService.onDidChangeFocusedView(ne=>{
      const pe=this._viewsService.getFocusedView();
      if(!pe)return;
      const le=this.getComposerIdFromViewId(pe.id);
      le&&this.setLastFocusedComposerId(le)
    })), this._register(this._viewsService.onDidChangeViewContainerVisibility(({
      id:ne,visible:pe,location:le
    })=>{
      if(!pe||le!==2)return;
      const he=this._viewDescriptorService.getViewContainerById(ne);
      if(!he)return;
      const be=this.getComposerIdFromViewContainer(he);
      be&&this.setLastFocusedComposerId(be)
    })), this._register(this._composerEventService.onNewFileDeleted(async ne=>{
      const pe=this.getHandleIfLoaded(ne.composerId),le=pe?this.getComposerData(pe):void 0;
      if(!le||!pe)return;
      const he=le.newlyCreatedFiles?.filter(ke=>ke.uri.toString()!==ne.uri.toString())??[];
      let be=ZC(le.newlyCreatedFolders)??[];
      const fe=be.filter(ke=>ne.uri.toString().startsWith(ke.uri.toString()));
      for(const ke of fe)((await this._composerFileService.resolve({
        uri:ke.uri,options:{
          resolveMetadata:!0
        },composerData:le
      })).children??[]).filter(De=>!De.isDirectory).length===0&&(await this._composerFileService.deleteFolder({
        uri:ke.uri,composerData:le,useTrash:!0
      }),be=be.filter(De=>De.uri.toString()!==ke.uri.toString()));
      this.updateComposerData(pe,{
        newlyCreatedFiles:he,newlyCreatedFolders:be
      })
    })), this.composerDataHandleManager=this._register(m2A(this._instantiationService, this._experimentService, this.composerWasLoadedHook.bind(this), this.composerWasUnloadedHook.bind(this), this._ownLoadedComposers));
    let j;
    [this.allComposersData, this.setAllComposersData, this.resetComposers, j]=yNA(this._storageService, this._reactiveStorageService, this._workspaceContextService, this._modelConfigService, this.composerDataHandleManager, this.composerDataStorageID, this._environmentService.isGlass===!0), this._initialComposerDataLoadPromise=j, j.finally(()=>{
      this._initialComposerDataLoadPromise=void 0,j=void 0
    }), this._rebuildPlanReferencesIndexFromHeaders(), this.reactiveStorageRoot=this._register(this._reactiveStorageService.createScoped(this));
    const X=[], ee=new yoe, re=async()=>{
      const ne=Date.now();
      await new Promise(ke=>setTimeout(ke,0)),j&&await j;
      const pe=X.splice(0),le=new Set,he=[],be=[];
      for(const ke of pe.reverse())le.has(ke.composerId)||(le.add(ke.composerId),ke.type==="add"&&he.push(ke.composerId),ke.type==="remove"&&be.push(ke.composerId));
      const fe=await Promise.all(he.map(async ke=>({
        handle:await this.getComposerHandleById(ke).catch(()=>{
          
        }),id:ke
      })));
      Gw(()=>{
        for(const{
          id:ke,handle:Se
        }
        of fe)Se?(this.loadComposerCapabilities(Se),this.setAllComposersData("selectedComposerHandles",ke,Se)):(be.push(ke),this.allComposersData.allComposers.find(De=>De.composerId===ke)?.subagentInfo?.parentComposerId&&this.setAllComposersData("allComposers",De=>De.filter(Pe=>Pe.composerId!==ke)));
        for(const ke of be){
          const Se=this.allComposersData.selectedComposerHandles[ke];
          Se&&(Se.dispose(),this.setAllComposersData(FOo(Fe=>{
            delete Fe.selectedComposerHandles[ke]
          })))
        }
        be.length>0&&(this.setAllComposersData("lastFocusedComposerIds",ke=>ke.filter(Se=>!be.includes(Se))),this.setAllComposersData("selectedComposerIds",ke=>ke.filter(Se=>!be.includes(Se))))
      })
    };
    this._environmentService.isGlass||this.reactiveStorageRoot.onChangeEffect({
      deps:[()=>this.allComposersData.selectedComposerIds],onChange:async({
        deps:ne,prevDeps:pe
      })=>{
        const le=ne[0],he=pe?.[0]??[];
        le.filter(be=>!he.includes(be)).forEach(be=>X.push({
          type:"add",composerId:be
        })),he.filter(be=>!le.includes(be)).forEach(be=>X.push({
          type:"remove",composerId:be
        })),X.length>0&&ee.queue(re)
      },runNowToo:!0
    });
    for(const ne of Jnu.registeredActions)ne(this._reactiveStorageService, this);
    this._register(this._storageService.onWillSaveState(()=>{
      this.saveComposers()
    }))
  }
  loadComposerCapabilities(e){
    const t=e.composerId;
    if(this._loadingCapabilities.has(t))return;
    const i=this.getComposerData(e);
    if(i){
      this._loadingCapabilities.add(t);
      try{
        if(i.capabilities!==void 0&&i.capabilities.every(r=>r instanceof Pq)&&i.capabilities.length>0){
          this.restorePendingDecisionsForQuestionnaires(e);
          return
        }
        this.updateComposerDataSetStore(e,r=>{
          const s=cce(this.instantiationService,e.composerId,{
            savedCapabilityData:i.capabilities
          });
          r("capabilities",s),setTimeout(()=>{
            this.restorePendingDecisionsForQuestionnaires(e)
          },0)
        })
      }
      finally{
        this._loadingCapabilities.delete(t)
      }
    }
  }
  restorePendingDecisionsForQuestionnaires(e){
    const t=this.getComposerData(e);
    if(!t)return;
    const i=t.capabilities?.find(r=>r instanceof Pq&&r.type===ko.TOOL_FORMER);
    i&&i.restorePendingDecisionsForUnansweredQuestionnaires()
  }
  async updateComposerDataAsync(e, t){
    const i={
      stack:[],error:void 0,hasError:!1
    };
    try{
      const r=__addDisposableResource(i,await this.getComposerHandleById(e),!1);
      r&&t(r.setData)
    }
    catch(r){
      i.error=r,i.hasError=!0
    }
    finally{
      __disposeResources(i)
    }
  }
  dispose(){
    for(const[, e]of this._worktreeWatchers)e.dispose();
    this._worktreeWatchers.clear(), super.dispose()
  }
  getHandleIfLoaded(e){
    return this.composerDataHandleManager.getHandleIfLoaded(e)
  }
  getHandleIfLoaded_MIGRATED(e){
    return this.getHandleIfLoaded(e)
  }
  getRootHandle(e){
    const t=this.getComposerData(e);
    if(t){
      if(t.isBestOfNSubcomposer===!0&&t.subagentInfo?.parentComposerId){
        const i=t.subagentInfo.parentComposerId;
        return this.getHandleIfLoaded_MIGRATED(i)
      }
      return e
    }
  }
  getLoadedSubComposerHandles(e){
    const t=this.getComposerData(e);
    if(!t)return[];
    const i=t.subComposerIds??[], r=[];
    for(const s of i){
      const o=this.getHandleIfLoaded_MIGRATED(s);
      o&&r.push(o)
    }
    return r
  }
  composerWasLoadedHook(e){
    try{
      const t=this.allComposersData.allComposers.find(o=>o.composerId===e.composerId),i=e.gitWorktree!==void 0||e.worktreeStartedReadOnly===!0;
      t&&(t.isWorktree!==i||t.worktreeStartedReadOnly!==e.worktreeStartedReadOnly)&&this.setAllComposersData("allComposers",o=>o.composerId===e.composerId,{
        isWorktree:i,worktreeStartedReadOnly:e.worktreeStartedReadOnly
      });
      const r=e.subComposerIds?.length;
      if(t&&t.numSubComposers!==r&&this.setAllComposersData("allComposers",o=>o.composerId===e.composerId,{
        numSubComposers:r
      }),e.unifiedMode!==t?.unifiedMode&&e.unifiedMode!==void 0&&this.setAllComposersData("allComposers",o=>o.composerId===e.composerId,{
        unifiedMode:e.unifiedMode
      }),t&&e.plan){
        const o=e.plan.content||"",a=Bdn(o,e.plan.name),l=e.plan.overview?e.plan.overview.replace(/\s+/g," ").trim().slice(0,120):"",u={
          title:a,overview:l,composerId:e.composerId
        },d=t.authoredPlan;
        (!d||d.title!==u.title||d.overview!==u.overview||d.composerId!==u.composerId)&&this.setAllComposersData("allComposers",m=>m.composerId===e.composerId,{
          authoredPlan:u
        })
      }
      else t&&!e.plan&&t.authoredPlan&&this.setAllComposersData("allComposers",o=>o.composerId===e.composerId,{
        authoredPlan:void 0
      });
      if(t){
        const o=[],a=new Set,l=m=>{
          const p=je.from(m);
          if(p.scheme===_n.cursorPlan){
            const g=p.authority;
            if(g){
              const f=`composer:${g}`;
              a.has(f)||(a.add(f),o.push({
                type:"composer",composerId:g
              }))
            }
          }
          else if(p.scheme===_n.file&&p.path.includes(".cursor/plans/")){
            const g=`file:${p.toString()}`;
            a.has(g)||(a.add(g),o.push({
              type:"file",uri:p.toString()
            }))
          }
        };
        if(e.context?.fileSelections)for(const m of e.context.fileSelections){
          const p=m.uri;
          p&&l(p)
        }
        if(e.conversationMap){
          for(const m of Object.values(e.conversationMap))if(m.context?.fileSelections)for(const p of m.context.fileSelections){
            const g=p.uri;
            g&&l(g)
          }
        }
        const u=t.referencedPlans||[];
        (o.length!==u.length||!o.every((m,p)=>{
          const g=u[p];
          return!g||m.type!==g.type?!1:m.type==="composer"?g.type==="composer"&&m.composerId===g.composerId:g.type==="file"&&m.uri===g.uri
        }))&&this.setAllComposersData("allComposers",m=>m.composerId===e.composerId,{
          referencedPlans:o
        }),this._updatePlanReferencesIndex(e.composerId,o)
      }
      (!this._composerDisposableMap.has(e.composerId)||this._composerDisposableMap.get(e.composerId)?.isDisposed===!0)&&this._composerDisposableMap.set(e.composerId,new Ut);
      const s=this._composerDisposableMap.get(e.composerId);
      if(!s){
        console.error("[composer] No store found for composer id: "+e.composerId);
        return
      }
      s.add(this._reactiveStorageService.onChangeEffectManuallyDisposed({
        deps:[()=>e.composerId,()=>e.name,()=>e.lastUpdatedAt,()=>e.createdAt,()=>e.unifiedMode,()=>e.hasUnreadMessages,()=>e.contextUsagePercent,()=>e.hasBlockingPendingActions,()=>e.totalLinesAdded,()=>e.totalLinesRemoved,()=>e.subtitle,()=>e.isArchived,()=>e.isDraft,()=>e.draftTarget,()=>e.gitWorktree,()=>e.worktreeStartedReadOnly,()=>e.isSpec,()=>e.subagentInfo,()=>e.createdFromBackgroundAgent,()=>e.plan,()=>e.conversationMap,()=>e.context,()=>e.subComposerIds,()=>e.filesChangedCount,()=>e.isEphemeral,()=>e.prUrl,()=>e.prBranchName,()=>e.committedToBranch,()=>e.lastMessageSentOnBranch,()=>e.createdOnBranch,()=>e.activeBranch,()=>e.branches,()=>e.isProject,()=>e.projectIcon],onChange:({
          deps:o
        })=>{
          const a=o[0],l=o[1],u=o[2],d=o[3],m=o[4],p=o[5],g=o[6],f=o[7],A=o[8],w=o[9],C=o[10],x=o[11],I=o[12],B=o[13],R=o[14],N=o[15],M=o[16],O=o[17],$=o[18],H=o[19],W=o[20],z=o[21],Y=o[22],j=o[23],X=o[24],ee=o[25],re=o[26],ne=o[27],pe=o[28],le=o[29],he=o[30],be=o[31],fe=o[32],ke=o[33];
          let Se;
          H&&(Se=sc(()=>{
            const De=H.content||"",Pe=Bdn(De,H.name),Ne=H.overview?H.overview.replace(/\s+/g," ").trim().slice(0,120):"";
            return{
              title:Pe,overview:Ne,composerId:a
            }
          }));
          const Fe=sc(()=>{
            const De=new Set,Pe=[],Ne=Oe=>{
              const Ge=je.from(Oe);
              if(Ge.scheme===_n.cursorPlan){
                const Le=Ge.authority;
                if(Le){
                  const We=`composer:${Le}`;
                  De.has(We)||(De.add(We),Pe.push({
                    type:"composer",composerId:Le
                  }))
                }
              }
              else if(Ge.scheme===_n.file&&Ge.path.includes(".cursor/plans/")){
                const Le=`file:${Ge.toString()}`;
                De.has(Le)||(De.add(Le),Pe.push({
                  type:"file",uri:Ge.toString()
                }))
              }
            };
            if(z?.fileSelections)for(const Oe of z.fileSelections){
              const Ge=Oe.uri;
              Ge&&Ne(Ge)
            }
            if(W)for(const Oe of Object.values(W))sc(()=>{
              if(Oe.context?.fileSelections)for(const Ge of Oe.context.fileSelections){
                const Le=Ge.uri;
                Le&&Ne(Le)
              }
            });
            return Pe
          });
          this.setAllComposersData("allComposers",De=>De.composerId===a,{
            name:l,lastUpdatedAt:u,createdAt:d,unifiedMode:m,hasUnreadMessages:p,contextUsagePercent:g,hasBlockingPendingActions:f,totalLinesAdded:A,totalLinesRemoved:w,filesChangedCount:j,subtitle:C,isDraft:I,draftTarget:B,isWorktree:R!==void 0||N===!0,worktreeStartedReadOnly:N,isSpec:M,isProject:fe,projectIcon:ke,subagentInfo:O,createdFromBackgroundAgent:$,authoredPlan:Se,referencedPlans:Fe,numSubComposers:Y?.length,isEphemeral:X,prUrl:ee,prBranchName:re,committedToBranch:ne,lastMessageSentOnBranch:pe,createdOnBranch:le,activeBranch:he,branches:be
          }),this._updatePlanReferencesIndex(a,Fe)
        }
      })),s.add(this._reactiveStorageService.onChangeEffectManuallyDisposed({
        deps:[()=>e.name],onChange:({
          deps:o
        })=>{
          const a=o[0];
          this._commandService.executeCommand(tca,e.composerId,a??Whn)
        }
      })),s.add(this._reactiveStorageService.onChangeEffectManuallyDisposed({
        deps:[()=>e.status],onChange:({
          deps:o
        })=>{
          const a=o[0];
          if(this._commandService.executeCommand(nca,e.composerId,a),a==="none"){
            const l=sc(()=>e.fullConversationHeadersOnly?.length??0);
            if(l>0){
              const u=sc(()=>!!e.name),d=sc(()=>e.name?.length??0),m=sc(()=>!!e.createdFromBackgroundAgent?.bcId),p=sc(()=>!!e.pendingBackgroundAgent),g=m||p,f=new Error().stack;
              Sw(new Error("Composer status set to none with existing content"),{
                tags:{
                  client_error_type:"composer_status_reset_to_none",is_background_composer:m,is_pending_background_agent:p,is_background_flow:g
                },extra:{
                  composerId:e.composerId,messageCount:l,hasName:u,nameLength:d,isBackgroundComposer:m,isPendingBackgroundAgent:p,createdAt:sc(()=>e.createdAt),lastUpdatedAt:sc(()=>e.lastUpdatedAt),stackTrace:f
                }
              })
            }
          }
        }
      })),this._composerEventService.fireDidLoadComposer({
        composerId:e.composerId
      })
    }
    catch(t){
      console.error("[composer] Error loading composer data:",t)
    }
  }
  composerWasUnloadedHook(e){
    this._composerDisposableMap.deleteAndDispose(e), this._asyncOperationRegistry.clear(e)
  }
  static{
    this.registeredActions=[]
  }
  static registerAction(e){
    this.registeredActions.push(e)
  }
  get selectedComposer(){
    const e=this.allComposersData.selectedComposerHandles[this.selectedComposerId];
    if(e)return e.data
  }
  get selectedComposerHandle(){
    return this.allComposersData.selectedComposerHandles[this.selectedComposerId]
  }
  async getComposerHandleById(e){
    return await this.composerDataHandleManager.getHandle(e)
  }
  whenInitialComposerDataLoaded(){
    return this._initialComposerDataLoadPromise??Promise.resolve()
  }
  async getAgentReferenceByComposerId(e){
    const t=await this.getComposerHandleById(e);
    if(!t)throw new Error(`Composer not found: ${e}`);
    const i=new eO(this._storageService, e), r={
      getBlob:async(f,A)=>{
        const w=await i.getBlob(f,A);
        if(w===void 0)throw new Error(`Blob not found: ${A}`);
        return w
      },hasBlobLoaded:f=>!0
    }, s=new Set, o=()=>sc(()=>t.data.conversationState)??new vk, a={
      get value(){
        return o()
      },onChange:f=>(s.add(f),{
        dispose:()=>{
          s.delete(f)
        }
      })
    }, l=new Set, u=()=>{
      const f=sc(()=>this.getToolFormer(t));
      return f?sc(()=>f.getPendingUserDecisionGroup()()).map(w=>{
        if(w.clientSideTool===an.ASK_QUESTION){
          const I=f.getBubbleData(f.getBubbleIdByToolCallId(w.toolCallId)??"")?.params?.questions?.[0]?.prompt??"";
          return{
            type:"ask_question",toolCallId:w.toolCallId,question:I
          }
        }
        return{
          type:"edit_tool",toolCallId:w.toolCallId
        }
      }):[]
    }, d={
      get value(){
        return u()
      },onChange:f=>(l.add(f),{
        dispose:()=>{
          l.delete(f)
        }
      })
    }, m=new Qe;
    return{
      conversationStateStructure:a,blobStore:r,interactionUpdates:{
        addListener:f=>{
          const C=this._instantiationService.invokeFunction(I=>I.get(bEe)).getInteractionUpdatesEvent(e)(I=>{
            for(const B of I)f(B)
          }),x=m.event(I=>{
            for(const B of I)f(B)
          });
          return{
            dispose:()=>{
              C.dispose(),x.dispose()
            }
          }
        }
      },pendingDecisions:d,submitMessage:async(f,A,w)=>{
        const C=Wr(),x=new bM({
          message:{
            case:"userMessageAppended",value:new GCt({
              userMessage:new KR({
                text:w,messageId:C
              })
            })
          }
        });
        m.fire([x]),await this._instantiationService.invokeFunction(B=>B.get(wM)).submitChatMaybeAbortCurrent(e,w,{
          forceBubbleId:C
        })
      }
    }
  }
  async getOrCreateHandleForBackgroundAgent(e, t){
    const i=this.findComposerIdByBackgroundAgentId(e);
    if(i)return await this.getComposerHandleById(i);
    const r=this._pendingBackgroundAgentComposerCreations.get(e);
    if(r)return await r;
    const s=(async()=>{
      try{
        const a=await this._instantiationService.invokeFunction(u=>u.get(ag)).createComposer({
          skipSelect:!0,partialState:{
            createdFromBackgroundAgent:{
              bcId:e,shouldStreamMessages:t?.shouldStreamMessages??!0
            }
          }
        });
        if(!a?.composerId)return;
        const l=this.selectedComposerIds;
        return l.includes(a.composerId)||this.setAllComposersData("selectedComposerIds",[...l,a.composerId]),await this.getComposerHandleById(a.composerId)
      }
      finally{
        this._pendingBackgroundAgentComposerCreations.delete(e)
      }
    })();
    return this._pendingBackgroundAgentComposerCreations.set(e, s), await s
  }
  updateSelectedComposer(e){
    const t=this.selectedComposerHandle;
    t&&t.setData(e)
  }
  updateComposerDataSetStore(e, t){
    t(e.setData)
  }
  updateComposerData(e, t){
    e.setData(i=>({
      ...i,...t
    }))
  }
  async saveComposers(){
    const e=await this._commandService.executeCommand(lca)||[], t=a=>{
      const l=this.getComposerDataIfLoaded(a)??this.allComposersData.allComposers.find(u=>u.composerId===a);
      return!l||l.isBestOfNSubcomposer?!1:!!(l.composerId.startsWith("task-")||l.subagentInfo?.parentComposerId)
    }, i=e.filter(a=>!t(a));
    let r=this.allComposersData.lastFocusedComposerIds.filter(a=>!t(a));
    r.length===0&&i.length>0&&(r=[i[0]]);
    const s={
      allComposers:this.allComposersData.allComposers,selectedComposerIds:i,lastFocusedComposerIds:r,hasMigratedComposerData:this.allComposersData.hasMigratedComposerData,hasMigratedMultipleComposers:this.allComposersData.hasMigratedMultipleComposers
    }, o=JSON.stringify(s);
    this._storageService.store(this.composerDataStorageID, o, 1, 1)
  }
  async appendComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(e){
    if(this.allComposersData.allComposers.find(o=>o.composerId===e.composerId)){
      console.error(`[composer] appendComposer called with existing composerId ${e.composerId}`),Sw(new Error("appendComposer called with existing composerId"),{
        tags:{
          client_error_type:"appendComposer_duplicate"
        },extra:{
          composerId:e.composerId
        }
      });
      return
    }
    const i=r$e(e);
    return this.setAllComposersData("allComposers", o=>[i, ...o]), this.allComposersData.selectedComposerIds.length===0&&this.setAllComposersData("selectedComposerIds", [e.composerId]), await this.composerDataHandleManager.persistLoadedComposer(e), await this.saveComposers(), this.composerDataHandleManager.pushComposer(e)??await this.composerDataHandleManager.getHandle(e.composerId)
  }
  async appendSubComposer(e){
    if(this.allComposersData.allComposers.find(s=>s.composerId===e.composerId)){
      console.error(`[composer] appendSubComposer called with existing composerId ${e.composerId}`),Sw(new Error("appendSubComposer called with existing composerId"),{
        tags:{
          client_error_type:"appendSubComposer_duplicate"
        },extra:{
          composerId:e.composerId
        }
      });
      return
    }
    const i=r$e(e);
    return this.setAllComposersData("allComposers", s=>[i, ...s]), await this.composerDataHandleManager.persistLoadedComposer(e), await this.saveComposers(), this.composerDataHandleManager.pushComposer(e)??await this.composerDataHandleManager.getHandle(e.composerId)
  }
  async ensureSubagentPersistedForStandaloneOpen(e){
    const t=e.composerId, i=this.allComposersData.allComposers.find(r=>r.composerId===t);
    if(i)!i.name&&e.name&&this.setAllComposersData("allComposers", r=>r.composerId===t, {
      name:e.name
    });
    else{
      const r=r$e(e);
      this.setAllComposersData("allComposers",s=>[r,...s])
    }
    this.composerDataHandleManager.pushComposer(e), await this.composerDataHandleManager.persistLoadedComposer(e)
  }
  unlistComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(e){
    this.setAllComposersData("allComposers", t=>t.filter(i=>i.composerId!==e)), this.allComposersData.selectedComposerIds.includes(e)&&this.setAllComposersData("selectedComposerIds", t=>t.filter(i=>i!==e))
  }
  async deleteComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(e, t){
    const i=this.getHandleIfLoaded(e), r=i?this.getComposerData(i):void 0, s=r?.subComposerIds||[];
    if(i&&r?.isBestOfNSubcomposer){
      const a=this.getRootHandle(i);
      if(a&&a!==i){
        const l=a.composerId,u=this.getComposerData(a),d=(u?.subComposerIds||[]).filter(m=>m!==e);
        if(this.updateComposerDataSetStore(a,m=>m("subComposerIds",d)),u?.selectedSubComposerId===e){
          const m=d.length>0?d[0]:l;
          this.updateComposerDataSetStore(a,p=>p("selectedSubComposerId",m))
        }
      }
    }
    const o=this.instantiationService.invokeFunction(a=>a.get(ag));
    try{
      r?.status==="generating"&&(console.log(`[composer] Stopping composer ${e} before deletion`),o.cancelChat(e))
    }
    catch(a){
      console.info("[composer] Error stopping composer before deletion (continuing):",a)
    }
    for(const a of s)try{
      const l=this.getHandleIfLoaded(a);
      (l?this.getComposerData(l):void 0)?.status==="generating"&&(console.log(`[composer] Stopping subcomposer ${a} before deletion`),o.cancelChat(a))
    }
    catch(l){
      console.info(`[composer] Error stopping subcomposer ${a} before deletion (continuing):`,l)
    }
    try{
      const a=r?.createdFromBackgroundAgent?.bcId;
      a&&r?.createdFromBackgroundAgent?.shouldStreamMessages&&this.instantiationService.invokeFunction(u=>u.get(rx)).archiveBackgroundComposer(a)
    }
    catch(a){
      console.info("[composer] Error archiving linked background composer (continuing):",a)
    }
    try{
      const a=r?.gitWorktree?.worktreePath;
      if(a){
        const l=this.getHandleIfLoaded(e);
        l&&this.updateComposerDataSetStore(l,u=>u("gitWorktree",void 0)),this._stopWorktreeWatcher(e),(async()=>{
          try{
            await this._worktreeManagerService.removeWorktree(a)
          }
          catch(u){
            console.info("[composer] Async worktree cleanup failed (continuing):",u)
          }
        })()
      }
    }
    catch(a){
      console.info("[composer] Error scheduling worktree cleanup (continuing with delete):",a)
    }
    this.unlistComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(e), await Promise.all([this._composerCheckpointStorageService.clearComposerCheckpoints(e), this._composerCodeBlockDiffStorageService.clearComposerDiffs(e), this._composerMessageStorageService.clearComposerMessages(e), this._composerMessageRequestContextStorageService.clearComposerContexts(e), this._composerCodeBlockPartialInlineDiffFatesStorageService.clearComposerPartialInlineDiffFates(e), this._patchGraphStorageService.clearPatchesForComposer(e), this.composerDataHandleManager.deleteComposer(e)]);
    for(const a of s)await this.deleteComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(a, !0)
  }
  async removeComposerWorktreeIfPresent(e, t){
    const i=t??new Set;
    if(i.has(e))return;
    i.add(e);
    let r;
    try{
      r=this.getHandleIfLoaded(e);
      let s=r?this.getComposerData(r):void 0;
      if(s||(r=await this.getComposerHandleById(e),s=r?this.getComposerData(r):void 0),!s){
        console.info(`[composer] No composer data found for ${e};`);
        return
      }
      const o=s.gitWorktree?.worktreePath;
      if(!o)return;
      try{
        await this._gitContextService?.waitForGitContextProvider(),this._gitContextService?.hasGitContextProvider()?(await this._gitContextService.removeWorktree(o),console.info(`[composer] Removed git worktree: ${o}`)):console.info(`[composer] Git provider not registered; skipping git worktree removal for ${o}`)
      }
      catch(a){
        console.info(`[composer] Error removing git worktree ${o}`,a)
      }
    }
    finally{
      r&&!r.isDisposed&&this.updateComposerDataSetStore(r,s=>s("gitWorktree",void 0)),this._stopWorktreeWatcher(e),r?.dispose()
    }
  }
  getComposerData(e){
    try{
      return e.data
    }
    catch{
      return
    }
  }
  getComposerDataIfLoaded(e){
    const t=this.getHandleIfLoaded(e);
    if(t)return t.data
  }
  getAllCachedCodeBlocks(e){
    const t=this.getComposerData(e);
    if(!t)throw Error("[composer] composer doesn't exist");
    const{
      codeBlockData:i
    }
    =t, r=[];
    for(const s of Object.keys(i)){
      const o=i[s];
      for(const a of Object.keys(o))r.push(o[a])
    }
    return r.filter(({
      isCached:s
    })=>s===!0)
  }
  isRunningCapabilities(e){
    const t=this.getComposerData(e);
    if(!t)return!1;
    for(const i of t.capabilities)if(i.isRunning())return!0;
    return!1
  }
  isComposerRunning(e){
    const t=this.getComposerData(e);
    return t?t.status==="generating"?!0:Object.values(t.codeBlockData??{
      
    }).some(r=>Object.values(r).some(s=>s.status==="applying"&&!s.isNotApplied)):!1
  }
  getOldestNonRunningSelectedComposerId(e){
    const t=this.selectedComposerIds;
    if(t.length===0)return;
    const i=t.filter(s=>{
      if(e&&s===e)return!1;
      const o=this.getHandleIfLoaded(s);
      return!(o&&this.isComposerRunning(o))
    });
    if(i.length===0)return;
    const r=this.allComposersData.lastFocusedComposerIds.filter(s=>i.includes(s));
    return r.length>0?r[r.length-1]:i[0]
  }
  getToolFormer(e){
    return this.getComposerCapability(e, ko.TOOL_FORMER)
  }
  getPendingUserDecisionGroup(e){
    const t=this.getToolFormer(e);
    return t?t.getPendingUserDecisionGroup()():[]
  }
  getIsBlockingUserDecision(e){
    const t=this.getToolFormer(e);
    return t?t.getIsBlockingUserDecision()():!1
  }
  getBlockingUserDecisionToolType(e){
    const t=this.getToolFormer(e);
    if(!t)return;
    const i=t.getPendingUserDecisionGroup()();
    if(i.length!==0)return i[0].clientSideTool
  }
  setLoadingToolFormerToolsToCancelled(e){
    const t=this.getToolFormer(e);
    t&&t.setLoadingToolsToCancelled()
  }
  setPendingToolFormerToolsToCancelled(e){
    const t=this.getToolFormer(e);
    t&&t.setPendingToolsToCancelled()
  }
  getComposerCapability(e, t){
    const i=this.getComposerData(e);
    if(i)return sc(()=>{
      let r=i.capabilities.find(s=>s.type===t);
      if(!((!r||!(r instanceof Pq))&&(this.loadComposerCapabilities(e),r=i.capabilities.find(s=>s.type===t),!r||!(r instanceof Pq))))return r
    })
  }
  getLoadedConversation(e){
    const t=this.getComposerData(e);
    if(!t)return[];
    const i=t.conversationMap, r=t.fullConversationHeadersOnly, s=r.length;
    return sc(()=>{
      const o=[];
      for(let a=r.length-1;
      a>=0;
      a--){
        const l=r[a],u=i[l.bubbleId];
        if(u)o.push(u);
        else break
      }
      return o.reverse()
    })
  }
  getLoadedConversationById(e){
    const t=sc(()=>this.loadedComposers.byId[e]);
    if(!t)return[];
    const i=t.conversationMap, r=t.fullConversationHeadersOnly, s=r.length;
    return sc(()=>{
      const o=[];
      for(let a=r.length-1;
      a>=0;
      a--){
        const l=r[a],u=i[l.bubbleId];
        if(u)o.push(u);
        else break
      }
      return o.reverse()
    })
  }
  unloadComposerBubblesBeforeBubble(e, t){
    const i=this.getComposerData(e);
    if(!i)return;
    const r=i.fullConversationHeadersOnly.findIndex(o=>o.bubbleId===t);
    if(r<=0)return;
    const s=i.fullConversationHeadersOnly.slice(0, r).map(o=>o.bubbleId).filter(o=>i.conversationMap[o]!==void 0);
    s.length!==0&&this.updateComposerDataSetStore(e, o=>{
      Gw(()=>{
        for(const a of s)o("conversationMap",a,void 0)
      })
    })
  }
  async deleteComposerBubbles(e, t){
    this.updateComposerDataSetStore(e, i=>i("fullConversationHeadersOnly", r=>r.filter(s=>!t.includes(s.bubbleId))));
    for(const i of t)this.updateComposerDataSetStore(e, r=>r("conversationMap", i, void 0));
    await Promise.all(t.map(i=>this._composerMessageStorageService.deleteMessage(e.composerId, i)))
  }
  async appendComposerBubbles(e, t){
    const i=sc(()=>this.getComposerData(e));
    if(!i)return;
    const r=i.fullConversationHeadersOnly.findIndex(a=>i.conversationMap[a.bubbleId]?.bcId);
    this.updateComposerDataSetStore(e, a=>{
      Gw(()=>{
        for(const l of t)a("conversationMap",l.bubbleId,l)
      })
    }), this.updateComposerDataSetStore(e, a=>{
      Gw(()=>{
        let l=i.fullConversationHeadersOnly.length;
        for(const u of t)a("fullConversationHeadersOnly",l,{
          bubbleId:u.bubbleId,type:u.type,serverBubbleId:u.serverBubbleId
        }),l++
      })
    });
    const s=e.composerId;
    let o=t;
    if(i.createdFromBackgroundAgent?.shouldStreamMessages)if(i.createdFromBackgroundAgent.bcId===PNe)o=[];
    else{
      const a=i.agentSessionId!==void 0?i.createdFromBackgroundAgent.kickoffMessageId:void 0;
      a!==void 0?o=t.filter(l=>l.serverBubbleId!==void 0&&l.serverBubbleId.length>0?!0:l.bubbleId===a):o=t.filter(l=>l.serverBubbleId!==void 0&&l.serverBubbleId.length>0)
    }
    o.length>0&&await Promise.all(o.map(a=>this._composerMessageStorageService.storeMessage(s, a)))
  }
  async insertComposerBubblesAtIndex(e, t, i){
    this.updateComposerDataSetStore(e, r=>r("fullConversationHeadersOnly", s=>{
      const o=Math.max(0,Math.min(i,s.length)),a=s.slice(0,o),l=s.slice(o);
      return[...a,...t.map(u=>({
        bubbleId:u.bubbleId,type:u.type,serverBubbleId:u.serverBubbleId
      })),...l]
    }));
    for(const r of t)this.updateComposerDataSetStore(e, s=>s("conversationMap", r.bubbleId, r));
    await Promise.all(t.map(r=>this._composerMessageStorageService.storeMessage(e.composerId, r)))
  }
  getComposerBubbleIndex(e, t){
    const i=this.getComposerData(e);
    return i?sc(()=>i.fullConversationHeadersOnly.findIndex(r=>r.bubbleId===t)):-1
  }
  getComposerBubble(e, t){
    const i=this.getComposerData(e);
    if(i)return i.conversationMap[t]
  }
  getComposerBubbleUntracked(e, t){
    return sc(()=>{
      const i=this.getComposerData(e);
      if(i)return i.conversationMap[t]
    })
  }
  getComposerBubbleAsync(e, t){
    const i=this.getComposerBubble(e, t);
    return i?Promise.resolve(i):this._composerMessageStorageService.retrieveMessage(e.composerId, t)
  }
  updateComposerBubbleSetStore(e, t, i){
    this.updateComposerDataSetStore(e, r=>{
      i((...o)=>r("conversationMap",t,...o))
    })
  }
  async updateComposerBubbleCheckpoint(e, t, i, r){
    if(!i)return;
    const s=e.composerId, o=this.getComposerBubble(e, t)?.checkpointId, a=this.getComposerBubble(e, t)?.afterCheckpointId;
    if(o&&!r.isAfterCheckpoint)this._composerCheckpointStorageService.updateCheckpoint(s, o, l=>{
      Object.assign(l,i)
    });
    else if(a&&r.isAfterCheckpoint)this._composerCheckpointStorageService.updateCheckpoint(s, a, l=>{
      Object.assign(l,i)
    });
    else{
      const l=await this._composerCheckpointStorageService.storeCheckpoint(s,i);
      this.updateComposerDataSetStore(e,u=>u("conversationMap",t,d=>r.isAfterCheckpoint?{
        ...d,afterCheckpointId:l
      }
      :{
        ...d,checkpointId:l
      }))
    }
  }
  updateComposerBubble(e, t, i){
    this.updateComposerDataSetStore(e, r=>r("conversationMap", t, s=>({
      ...s,...i
    })))
  }
  getLastHumanBubble(e){
    const t=this.getComposerData(e);
    if(!t)return;
    const i=t.fullConversationHeadersOnly.length, r=sc(()=>{
      for(let s=t.fullConversationHeadersOnly.length-1;
      s>=0;
      s--)if(t.fullConversationHeadersOnly[s].type===ul.HUMAN)return t.fullConversationHeadersOnly[s].bubbleId
    });
    if(r)return t.conversationMap[r]
  }
  getLastAiBubble(e, t){
    const i=this.getComposerData(e);
    if(!i)return;
    const r=i.fullConversationHeadersOnly.length, s=sc(()=>{
      for(let o=i.fullConversationHeadersOnly.length-1;
      o>=0;
      o--)if(i.fullConversationHeadersOnly[o].type===ul.AI){
        if(t?.skipSummarization&&i.conversationMap[i.fullConversationHeadersOnly[o].bubbleId]?.capabilityType===ko.SUMMARIZATION)continue;
        return i.fullConversationHeadersOnly[o].bubbleId
      }
    });
    if(s)return i.conversationMap[s]
  }
  getLastHumanBubbleId(e){
    if(this.getComposerData(e))return this.getLastHumanBubble(e)?.bubbleId
  }
  getLastAiBubbleId(e){
    if(this.getComposerData(e))return this.getLastAiBubble(e)?.bubbleId
  }
  getLastBubble(e){
    const t=this.getComposerData(e);
    if(!t)return;
    const i=this.getLastBubbleId(e);
    if(i)return t.conversationMap[i]
  }
  getLastBubbleId(e){
    const t=this.getComposerData(e);
    if(t&&t.fullConversationHeadersOnly.length!==0)return t.fullConversationHeadersOnly[t.fullConversationHeadersOnly.length-1].bubbleId
  }
  getLastBubbleWhere(e, t){
    const i=this.getComposerData(e);
    if(!i)return;
    const r=i.fullConversationHeadersOnly.length, s=sc(()=>[...this.getLoadedConversation(e)].reverse().find(l=>t(l))?.bubbleId);
    if(s)return i.conversationMap[s]
  }
  getLastAiBubbles(e, t){
    const i=this.getComposerData(e);
    if(!i)return[];
    if(t?.humanBubbleId){
      const r=this.getComposerBubbleIndex(e,t.humanBubbleId);
      if(r===-1)return[];
      let s=r;
      for(;
      s>0&&i.fullConversationHeadersOnly[s-1].type===ul.HUMAN;
      )s--;
      let o=s-1;
      for(;
      o>=0&&i.fullConversationHeadersOnly[o].type===ul.AI;
      )o--;
      const a=o<0?0:o+1;
      return i.fullConversationHeadersOnly.slice(a,s).map(l=>i.conversationMap[l.bubbleId]).filter(Ch)
    }
    else{
      const r=this.getLastHumanBubbleId(e);
      if(!r)return[];
      const s=i.fullConversationHeadersOnly.findIndex(o=>o.bubbleId===r);
      return i.fullConversationHeadersOnly.slice(s+1).map(o=>i.conversationMap[o.bubbleId]).filter(Ch)
    }
  }
  getNextAiBubbles(e, t){
    const i=this.getComposerData(e);
    if(!i)return[];
    const r=this.getComposerBubbleIndex(e, t.humanBubbleId);
    if(r===-1)return[];
    let s=r;
    for(;
    s+1<i.fullConversationHeadersOnly.length&&i.fullConversationHeadersOnly[s+1].type===ul.HUMAN;
    )s++;
    const o=s+1;
    if(o>=i.fullConversationHeadersOnly.length)return[];
    let a=o;
    for(;
    a<i.fullConversationHeadersOnly.length&&i.fullConversationHeadersOnly[a].type===ul.AI;
    )a++;
    return i.fullConversationHeadersOnly.slice(o, a).map(l=>i.conversationMap[l.bubbleId]).filter(Ch)
  }
  async getCurrentFilesContent(e, t){
    const i=new Map, r=this.getHandleIfLoaded(e), s=r?this.getComposerData(r):void 0;
    for(const o of t){
      if(!await this._composerFileService.exists({
        uri:je.parse(o),composerData:s
      }))continue;
      const a=je.parse(o);
      let l;
      try{
        l=await this.composerTextModelService.createModelReference(a,s,!0);
        const d=l.object.textEditorModel.getLinesContent();
        i.set(o,d)
      }
      finally{
        l?.dispose()
      }
    }
    return i
  }
  selectLastHumanBubbleAboveInput(e){
    const t=this.getComposerData(e);
    if(!t)return!1;
    for(let i=t.fullConversationHeadersOnly.length-1;
    i>=0;
    i--){
      const r=t.fullConversationHeadersOnly[i];
      if(r.type===ul.HUMAN)return this.updateComposerData(e,{
        selectedBubbleId:r.bubbleId
      }),aSt(r.bubbleId),!0
    }
    return!1
  }
  getDebugInfo(){
    return{
      allComposersData:this.allComposersData,selectedComposerId:this.selectedComposerId,selectedComposerIds:this.selectedComposerIds,lastFocusedComposerIds:this.getLastFocusedComposerIds()
    }
  }
  getLoadedComposers(){
    return ZC(this.loadedComposers.ids)
  }
  getLastFocusedComposerIds(){
    return[...this.allComposersData.lastFocusedComposerIds]
  }
  async getConversationFromBubble(e, t){
    const i=this.getComposerData(e);
    if(!i)return[];
    const r=e.composerId, s=this.getComposerBubbleIndex(e, t);
    if(s===-1)return[];
    const o=i.fullConversationHeadersOnly.slice(s), a=new Map;
    for(const d of o){
      const m=i.conversationMap[d.bubbleId];
      m&&a.set(d.bubbleId,m)
    }
    const l=o.filter(d=>!a.has(d.bubbleId)).map(d=>d.bubbleId);
    if(l.length>0){
      const d=l.map(p=>this._composerMessageStorageService.retrieveMessage(r,p)),m=await Promise.all(d);
      for(const p of m)p&&a.set(p.bubbleId,p)
    }
    const u=[];
    for(const d of o){
      const m=a.get(d.bubbleId);
      m&&u.push(m)
    }
    return u
  }
  async loadConversationFromBubble(e, t){
    const i=await this.getConversationFromBubble(e, t), r=i.filter(s=>!this.getComposerBubble(e, s.bubbleId));
    return r.length>0&&this.updateComposerDataSetStore(e, s=>{
      Gw(()=>{
        for(const o of r)s("conversationMap",o.bubbleId,o)
      })
    }), i
  }
  async loadBubblesByIds(e, t){
    const i=this.getComposerData(e);
    if(!i||t.length===0)return;
    const r=t.filter(o=>!i.conversationMap[o]);
    if(r.length===0)return;
    const s=await this._composerMessageStorageService.retrieveMessagesBatch(e.composerId, r);
    s.size>0&&this.updateComposerDataSetStore(e, o=>{
      Gw(()=>{
        for(const[a,l]of s)o("conversationMap",a,l)
      })
    })
  }
  getComposerBubbleIdFromPotentialServerBubbleId(e, t){
    const i=this.getComposerData(e);
    if(i)return sc(()=>{
      for(const r of i.fullConversationHeadersOnly)if(r.bubbleId===t||r.serverBubbleId===t)return r.bubbleId
    })
  }
  updateCodeBlockLastAppliedAt(e, t, i){
    if(!this.getComposerData(e))return;
    const s=t.toString();
    this.updateComposerDataSetStore(e, o=>o("codeBlockData", s, i, "lastAppliedAt", Date.now()))
  }
  async _resolveMainWorktreePath(){
    const e=this._workspaceContextService.getWorkspace().folders;
    if(e.length===0)return;
    const t=e[0].uri.fsPath;
    if(t.length!==0)try{
      return await this._gitContextService.getGitRoot(t)??t
    }
    catch{
      return t
    }
  }
  async createWorktree(e, t, i, r, s){
    const o=e.composerId;
    try{
      this.updateComposerDataSetStore(e,l=>l("isCreatingWorktree",!0)),this.updateComposerDataSetStore(e,l=>{
        l("codeBlockData",{
          
        }),l("originalFileStates",{
          
        }),l("newlyCreatedFiles",[]),l("newlyCreatedFolders",[])
      });
      const a=await this._worktreeManagerService.createWorktree({
        composerId:o,baseBranch:i,targetWorktreePath:r,excludeDirtyFiles:s
      },t);
      if(a){
        const l=await this._resolveMainWorktreePath(),u={
          worktreePath:a.path,commitHash:a.commitHash,branchName:a.branchName,mainWorktreePath:l
        };
        return this.updateComposerDataSetStore(e,d=>d("gitWorktree",u)),this._startWorktreeWatcher(o,u.worktreePath),this._onDidChangeComposerWorktree.fire({
          composerId:o,worktreePath:u.worktreePath
        }),this._generateAndSetWorktreeBranch(e,a.path).catch(d=>{
          console.error("[composer] Failed to generate and set worktree branch",d)
        }),u
      }
      return
    }
    catch(a){
      console.error("[composer] Error creating worktree",a),this._notificationService?.notify?.({
        message:`Failed to create Git worktree: ${ov(a)}`,severity:Rs.Error
      });
      return
    }
    finally{
      e.isDisposed||(this.updateComposerDataSetStore(e,a=>a("isCreatingWorktree",!1)),i&&this.updateComposerDataSetStore(e,a=>a("pendingCreateWorktreeBaseBranchName",void 0)))
    }
  }
  getRootComposerId(e){
    return this._getRootComposerIdRecursive(e, new Set, 0)
  }
  _getRootComposerIdRecursive(e, t, i){
    if(i>10)return console.warn("[ComposerDataService] Maximum subagent hierarchy depth exceeded, returning current composer ID"), e;
    if(t.has(e))return console.warn("[ComposerDataService] Circular reference detected in subagent hierarchy, returning current composer ID"), e;
    t.add(e);
    const r=this.getHandleIfLoaded(e), s=r?this.getComposerData(r):void 0;
    return s?.subagentInfo?.parentComposerId?this._getRootComposerIdRecursive(s.subagentInfo.parentComposerId, t, i+1):e
  }
  anyComposerHasMessages(){
    return this.allComposersData.allComposers.some(e=>e.lastUpdatedAt!==void 0&&e.lastUpdatedAt>e.createdAt)
  }
  isCompatibleScheme(e){
    return[_n.file, _n.vscodeRemote, _n.vscodeNotebook, _n.vscodeTerminal, _n.git].includes(e)
  }
  async manuallyPersistComposer(e){
    try{
      const t=this.getHandleIfLoaded(e);
      t&&await this.composerDataHandleManager.persistLoadedComposer(t.data)
    }
    catch(t){
      console.error("[composer] error manually persisting composer data",t)
    }
  }
  _startWorktreeWatcher(e, t){
    this._stopWorktreeWatcher(e);
    const i=je.file(t), r={
      recursive:!0,excludes:[]
    }, s=this._fileService.watch(i, r);
    this._worktreeWatchers.set(e, s), VsA(s)&&s.onDidChange(a=>{
      this._composerEventService.fireDidFilesChange(a)
    })
  }
  _stopWorktreeWatcher(e){
    const t=this._worktreeWatchers.get(e);
    if(t){
      try{
        t.dispose()
      }
      catch{
        
      }
      this._worktreeWatchers.delete(e)
    }
  }
  async _generateAndSetWorktreeBranch(e, t){
    try{
      const i=e.composerId,{
        IComposerService:r
      }
      =await Promise.resolve().then(()=>(J0(),Bmg)),o=await this._instantiationService.invokeFunction(a=>a.get(r)).generateBranchNameForWorktree(i);
      if(!o){
        console.warn("[composer] Failed to generate branch name for worktree");
        return
      }
      await this._worktreeManagerService.updateWorktreeBranchName(t,o),e.isDisposed||this.updateComposerDataSetStore(e,a=>{
        a("gitWorktree",l=>l&&{
          ...l,branchName:o
        })
      }),console.log(`[composer] Generated branch name ${o} for worktree`)
    }
    catch(i){
      console.error("[composer] Error generating and setting worktree branch:",i)
    }
  }
  _rebuildPlanReferencesIndexFromHeaders(){
    this._planReferencesIndex.clear();
    for(const e of this.allComposersData.allComposers)e.referencedPlans&&this._updatePlanReferencesIndex(e.composerId, e.referencedPlans)
  }
  _updatePlanReferencesIndex(e, t){
    for(const[i, r]of this._planReferencesIndex.entries())r.delete(e), r.size===0&&this._planReferencesIndex.delete(i);
    for(const i of t)if(i.type==="composer"){
      const r=i.composerId;
      this._planReferencesIndex.has(r)||this._planReferencesIndex.set(r,new Set),this._planReferencesIndex.get(r).add(e)
    }
    else if(i.type==="file"&&i.composerId){
      const r=i.composerId;
      this._planReferencesIndex.has(r)||this._planReferencesIndex.set(r,new Set),this._planReferencesIndex.get(r).add(e)
    }
  }
  getComposersReferencingPlan(e){
    const t=this._planReferencesIndex.get(e);
    if(!t||t.size===0)return[];
    const i=[];
    for(const r of t){
      const s=this.allComposersData.allComposers.find(o=>o.composerId===r);
      s&&i.push({
        composerId:s.composerId,name:s.name
      })
    }
    return i
  }
  isWorktreeComposer(e){
    if(!e)return!1;
    const t=this.getHandleIfLoaded(e);
    return!!(t?this.getComposerData(t):void 0)?.gitWorktree?.worktreePath
  }
}, __decorate([Gs("ComposerDataService.getComposerTitle")], ly.prototype, "getComposerTitle", null), __decorate([Gs("ComposerDataService.setLastFocusedComposerId")], ly.prototype, "setLastFocusedComposerId", null), __decorate([Gs("ComposerDataService.updateComposerDataAsync")], ly.prototype, "updateComposerDataAsync", null), __decorate([Gs("ComposerDataService.getHandleIfLoaded")], ly.prototype, "getHandleIfLoaded", null), __decorate([Gs("ComposerDataService.composerWasLoadedHook")], ly.prototype, "composerWasLoadedHook", null), __decorate([Gs("ComposerDataService.composerWasUnloadedHook")], ly.prototype, "composerWasUnloadedHook", null), __decorate([Gs("ComposerDataService.getComposerHandleById")], ly.prototype, "getComposerHandleById", null), __decorate([Gs("ComposerDataService.getOrCreateHandleForBackgroundAgent")], ly.prototype, "getOrCreateHandleForBackgroundAgent", null), __decorate([Gs("ComposerDataService.updateSelectedComposer")], ly.prototype, "updateSelectedComposer", null), __decorate([Gs("ComposerDataService.updateComposerDataSetStore")], ly.prototype, "updateComposerDataSetStore", null), __decorate([Gs("ComposerDataService.updateComposerData")], ly.prototype, "updateComposerData", null), __decorate([Gs("ComposerDataService.saveComposers")], ly.prototype, "saveComposers", null), __decorate([Gs("ComposerDataService.appendComposer")], ly.prototype, "appendComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING", null), __decorate([Gs("ComposerDataService.appendSubComposer")], ly.prototype, "appendSubComposer", null), __decorate([Gs("ComposerDataService.deleteComposer")], ly.prototype, "deleteComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING", null), __decorate([Gs("ComposerDataService.getAllCachedCodeBlocks")], ly.prototype, "getAllCachedCodeBlocks", null), __decorate([Gs("ComposerDataService.isRunningCapabilities")], ly.prototype, "isRunningCapabilities", null), __decorate([Gs("ComposerDataService.isComposerRunning")], ly.prototype, "isComposerRunning", null), __decorate([Gs("ComposerDataService.getOldestSelectedComposerId")], ly.prototype, "getOldestNonRunningSelectedComposerId", null), __decorate([Gs("ComposerDataService.getToolFormer")], ly.prototype, "getToolFormer", null), __decorate([Gs("ComposerDataService.getPendingUserDecisionGroup")], ly.prototype, "getPendingUserDecisionGroup", null), __decorate([Gs("ComposerDataService.getIsBlockingUserDecision")], ly.prototype, "getIsBlockingUserDecision", null), __decorate([Gs("ComposerDataService.getBlockingUserDecisionToolType")], ly.prototype, "getBlockingUserDecisionToolType", null), __decorate([Gs("ComposerDataService.setGeneratingToolFormerToolsToCancelled")], ly.prototype, "setLoadingToolFormerToolsToCancelled", null), __decorate([Gs("ComposerDataService.setPendingToolFormerToolsToCancelled")], ly.prototype, "setPendingToolFormerToolsToCancelled", null), __decorate([Gs("ComposerDataService.getComposerCapability")], ly.prototype, "getComposerCapability", null), __decorate([Gs("ComposerDataService.getLoadedConversation")], ly.prototype, "getLoadedConversation", null), __decorate([Gs("ComposerDataService.getLoadedConversationById")], ly.prototype, "getLoadedConversationById", null), __decorate([Gs("ComposerDataService.unloadComposerBubblesBeforeBubble")], ly.prototype, "unloadComposerBubblesBeforeBubble", null), __decorate([Gs("ComposerDataService.deleteComposerBubbles")], ly.prototype, "deleteComposerBubbles", null), __decorate([Gs("ComposerDataService.appendComposerBubbles")], ly.prototype, "appendComposerBubbles", null), __decorate([Gs("ComposerDataService.insertComposerBubblesAtIndex")], ly.prototype, "insertComposerBubblesAtIndex", null), __decorate([Gs("ComposerDataService.getComposerBubbleIndex")], ly.prototype, "getComposerBubbleIndex", null), __decorate([Gs("ComposerDataService.getComposerBubble")], ly.prototype, "getComposerBubble", null), __decorate([Gs("ComposerDataService.getComposerBubbleUntracked")], ly.prototype, "getComposerBubbleUntracked", null), __decorate([Gs("ComposerDataService.getComposerBubbleAsync")], ly.prototype, "getComposerBubbleAsync", null), __decorate([Gs("ComposerDataService.updateComposerBubbleSetStore")], ly.prototype, "updateComposerBubbleSetStore", null), __decorate([Gs("ComposerDataService.updateComposerBubbleCheckpoint")], ly.prototype, "updateComposerBubbleCheckpoint", null), __decorate([Gs("ComposerDataService.updateComposerBubble")], ly.prototype, "updateComposerBubble", null), __decorate([Gs("ComposerDataService.getLastHumanBubble")], ly.prototype, "getLastHumanBubble", null), __decorate([Gs("ComposerDataService.getLastAiBubble")], ly.prototype, "getLastAiBubble", null), __decorate([Gs("ComposerDataService.getLastHumanBubbleId")], ly.prototype, "getLastHumanBubbleId", null), __decorate([Gs("ComposerDataService.getLastAiBubbleId")], ly.prototype, "getLastAiBubbleId", null), __decorate([Gs("ComposerDataService.getLastBubble")], ly.prototype, "getLastBubble", null), __decorate([Gs("ComposerDataService.getLastBubbleId")], ly.prototype, "getLastBubbleId", null), __decorate([Gs("ComposerDataService.getLastBubbleWhere")], ly.prototype, "getLastBubbleWhere", null), __decorate([Gs("ComposerDataService.getCurrentFilesContent")], ly.prototype, "getCurrentFilesContent", null), __decorate([Gs("ComposerDataService.selectLastHumanBubbleAboveInput")], ly.prototype, "selectLastHumanBubbleAboveInput", null), __decorate([Gs("ComposerDataService.getLoadedComposers")], ly.prototype, "getLoadedComposers", null), __decorate([Gs("ComposerDataService.getConversationFromBubble")], ly.prototype, "getConversationFromBubble", null), __decorate([Gs("ComposerDataService.loadConversationFromBubble")], ly.prototype, "loadConversationFromBubble", null), __decorate([Gs("ComposerDataService.loadBubblesByIds")], ly.prototype, "loadBubblesByIds", null), __decorate([Gs("ComposerDataService.getComposerBubbleIdFromPotentialServerBubbleId")], ly.prototype, "getComposerBubbleIdFromPotentialServerBubbleId", null), __decorate([Gs("ComposerDataService.getRootComposerId")], ly.prototype, "getRootComposerId", null), __decorate([Gs("ComposerDataService.manuallyPersistComposer")], ly.prototype, "manuallyPersistComposer", null), ly=Jnu=__decorate([__param(0, Hi), __param(1, Lr), __param(2, ku), __param(3, ln), __param(4, iie), __param(5, BA), __param(6, YZ), __param(7, b0), __param(8, yu), __param(9, fp), __param(10, fr), __param(11, Cc), __param(12, Ctt), __param(13, Ftt), __param(14, _$e), __param(15, Ghn), __param(16, Hga), __param(17, ix), __param(18, AE), __param(19, ms), __param(20, ln), __param(21, ku), __param(22, Gr), __param(23, C$e), __param(24, Tl), __param(25, Fn), __param(26, tie), __param(27, Htt), __param(28, qhn)], ly), Vi(Oa, ly, 0, 1)
}
}), AEe, Qhn, z3, ivi, rvi, svi, ISt, DSt, BSt, Qga, D$e, Gtt, Wtt, jga, fye, B$e, ovi, RSt, avi, yEe, PSt, jhn, ZZ, cvi, zga, lvi, LSt, gL, uvi, dvi, hvi, e4g, mvi, t4g, n4g, i4g, r4g, s4g, o4g, a4g, c4g, l4g, u4g, d4g, h4g, m4g, p4g, g4g, f4g, b4g, v4g, A4g, y4g, w4g, _4g, C4g, S4g, k4g, E4g, x4g, Gnu, T4g, Wnu, I4g, D4g, B4g, R4g, P4g, L4g, N4g, Qnu, M4g, F4g, O4g, U4g, $4g, q4g, H4g, J4g, G4g, pvi, Vga, W4g, Q4g, j4g, z4g, V4g, K4g, Y4g, Z4g, X4g, eOg, tOg, nOg, iOg, rOg, sOg, oOg, aOg, cOg, lOg, uOg, dOg, hOg, mOg, pOg, gOg, fOg, bOg, vOg, AOg, yOg, wOg, _Og, COg, SOg, kOg, EOg, xOg, TOg, IOg, DOg, BOg, ROg, POg, LOg, NOg, MOg, FOg, OOg, UOg, $Og, qOg, HOg, JOg, jnu, GOg, znu, WOg, QOg, jOg, zOg, Vnu, VOg, KOg, YOg, ZOg, XOg, e3g, t3g, n3g, gvi, i3g, r3g, s3g, o3g, a3g, Knu, c3g, l3g, u3g, d3g, h3g, Ynu, m3g, p3g, g3g, f3g, b3g, v3g, A3g, y3g, w3g, _3g, C3g, S3g, k3g, E3g, x3g, T3g, I3g, D3g, B3g, R3g, Znu, P3g, L3g, N3g, M3g, F3g, O3g, Xnu, Kga, U3g, $3g, q3g, H3g, J3g, G3g, W3g, Q3g, j3g, z3g, V3g, K3g, Y3g, Z3g, X3g, e5g, t5g, n5g, i5g, r5g, s5g, o5g, a5g, c5g, l5g, u5g, d5g, h5g, m5g, p5g, g5g, f5g, b5g, v5g, A5g, y5g, w5g, _5g, C5g, S5g, k5g, E5g, x5g, T5g, I5g, fvi, D5g, bvi, B5g, R5g, P5g, L5g, N5g, M5g, F5g, O5g, U5g, $5g, q5g, H5g, J5g, G5g, W5g, Q5g, j5g, z5g, V5g, K5g, Y5g, Z5g, X5g, e9g, t9g, n9g, i9g, r9g, s9g, Yga, eiu, tiu, o9g, a9g, c9g, l9g, u9g, d9g, h9g, m9g, p9g, niu, g9g, f9g, b9g, v9g, A9g, y9g, Zga, vvi, iiu, w9g, riu, siu, Avi, oiu, aiu, _9g, ciu, liu, uiu, diu, hiu, miu, piu, giu, yvi, fiu, biu, viu, zhn, C9g, S9g, k9g, E9g, x9g, T9g, I9g, D9g, B9g, R9g, P9g, L9g, N9g, Xga, Aiu, wvi, M9g, F9g, O9g, U9g, $9g, efa, q9g, H9g, J9g, G9g, yiu, W9g, Q9g, j9g, z9g, V9g, wiu, K9g, Y9g, Z9g, X9g, e8g, t8g, n8g, i8g, r8g, s8g, o8g, a8g, c8g, l8g, u8g, d8g, h8g, m8g, p8g, g8g, f8g, b8g, v8g, A8g, y8g, E2A, MNe, w8g, _8g, C8g, S8g, _iu, Ciu, tfa, k8g, Siu, kiu, E8g, x8g, T8g, I8g, D8g, B8g, R8g, P8g, L8g, N8g, M8g, F8g, O8g, U8g, _vi, $8g, q8g, H8g, Eiu, xiu, J8g, nfa, G8g, W8g, Q8g, j8g, z8g, V8g, K8g, Y8g, Z8g, X8g, uV, e6g, FNe, t6g, n6g, i6g, r6g, s6g, o6g, a6g, c6g, l6g, u6g, ifa, wEe, Tiu, d6g, h6g, m6g, p6g, g6g, f6g, b6g, v6g, A6g, y6g, w6g, _6g, C6g, S6g, k6g, E6g, x6g, T6g, Iiu, I6g, Diu, D6g, B6g, R6g, P6g, L6g, N6g, M6g, x2A, Cvi, F6g, O6g, U6g, $6g, q6g, H6g, J6g, G6g, W6g, Q6g, j6g, z6g, V6g, K6g, Y6g, Z6g, X6g, eUg, tUg, nUg, iUg, rUg, sUg, oUg, aUg, cUg, lUg, uUg, dUg, hUg, mUg, pUg, gUg, fUg, bUg, vUg, AUg, yUg, wUg, _Ug, CUg, SUg, Biu, kUg, EUg, Riu, xUg, TUg, IUg, DUg, BUg, RUg, PUg, LUg, rfa, NUg, MUg, FUg, OUg, UUg, $Ug, qUg, HUg, Piu, JUg, GUg, WUg, QUg, Svi, jUg, zUg, VUg, KUg, YUg, ZUg, XUg, e$g, t$g, n$g, i$g, r$g, sfa, s$g, o$g, a$g, Qtt, kvi, c$g, l$g, u$g, d$g, h$g, m$g, p$g, g$g, f$g, b$g, v$g, A$g, y$g, w$g, _$g, C$g, S$g, k$g, E$g, x$g, T$g, I$g, D$g, B$g, R$g, P$g, L$g, N$g, M$g, F$g, O$g, U$g, $$g, q$g, H$g, J$g, G$g, W$g, Q$g, j$g, z$g, V$g, K$g, Y$g, Z$g, X$g, eqg, tqg, nqg, iqg, rqg, sqg, oqg, aqg, cqg, lqg, uqg, dqg, hqg, ofa, mqg, pqg, gqg, fqg, bqg, vqg, Aqg, yqg, afa, wqg, _qg, Cqg, Sqg, kqg, Eqg, xqg, Tqg, cfa, Liu, Iqg, Dqg, Bqg, Rqg, Pqg, Lqg, Nqg, Mqg, Niu, Fqg, Evi, Oqg, Uqg, $qg, qqg, Hqg, Jqg, Gqg, Wqg, Qqg, jqg, lfa, zqg, Vqg, Kqg, Yqg, Zqg, Xqg, Miu, e7g, t7g, n7g, ufa, T2A, Fiu, i7g, Oiu, r7g, s7g, o7g, a7g, c7g, l7g, u7g, d7g, h7g, m7g, p7g, g7g, f7g, b7g, v7g, A7g, y7g, Uiu, w7g, _7g, C7g, S7g, k7g, E7g, x7g, T7g, I7g, D7g, B7g, R7g, P7g, L7g, N7g, M7g, Vhn, Khn, Yhn, Zhn, Xhn, emn, tmn, nmn, iO, dfa, hfa, jtt, F7g, $iu, O7g, U7g, $7g, q7g, H7g, qiu, J7g, Hiu, G7g, W7g, Q7g, j7g, z7g, V7g, K7g, Y7g, Z7g, X7g, eHg, tHg, nHg, iHg, rHg, sHg, oHg, aHg, cHg, imn, lHg, ztt, uHg, dHg, hHg, mfa, mHg, Jiu, pHg, rmn, gHg, fHg, bHg, pfa, vHg, Giu, AHg, Wiu, Qiu, jiu, ziu, yHg, wHg, _Hg, CHg, SHg, kHg, EHg, xHg, xvi, THg, Viu, IHg, Kiu, DHg, BHg, RHg, gfa, Yiu, PHg, LHg, NHg, MHg, FHg, OHg, Ziu, UHg, $Hg, uR=