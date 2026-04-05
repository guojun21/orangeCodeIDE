// Module: out-build/vs/workbench/contrib/composer/browser/composerDecisionsService.js
// Offset: 30384890 (bundle byte offset)
// Size: 21396 bytes

t8(), rt(), Wt(), Er(), qJ(), Dd(), oP(), Vg(), kr(), Ame(), cp(), Vw(), Ud(), aie(), ps(), d2(), Hl(), _r(), nit(), Mye(), Uwi(), Iie(), _Sf(), uQ(), hnt(), vN(), a0a(), Hhn(), Rb(), Sme(), Wu(), xSf=Tr.object({
  path:Tr.string(), reason:Tr.string(), isNewFile:Tr.boolean(), diffString:Tr.string(), before:Tr.string().optional(), after:Tr.string().optional(), blockReason:Tr.enum(["outOfWorkspace", "protectedConfig"]).optional()
}), TSf=Tr.object({
  command:Tr.string(), workingDirectory:Tr.string().optional(), timeout:Tr.number().optional(), reason:Tr.string().optional(), hookSource:Tr.enum(["user", "project", "enterprise", "team"]).optional(), isSandboxAvailable:Tr.boolean().optional(), isSandboxEnabled:Tr.boolean().optional(), canAllowlist:Tr.boolean().optional(), notAllowedCommands:Tr.array(Tr.string()).optional()
}), ISf=Tr.object({
  path:Tr.string()
}), DSf=Tr.object({
  name:Tr.string(), toolName:Tr.string(), providerIdentifier:Tr.string(), args:Tr.record(Tr.string(), Tr.any()), reason:Tr.string().optional(), hookSource:Tr.enum(["user", "project", "enterprise", "team"]).optional(), canAllowlist:Tr.boolean().optional()
}), Kkt=xi("composerDecisionsService"), c0a=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A){
    super(), this._toolCallHumanReviewService=e, this._reactiveStorageService=t, this._composerViewsService=i, this._composerDataService=r, this._aiService=s, this._analyticsService=o, this._cursorAuthenticationService=a, this._workspaceContextService=l, this._composerModesService=u, this._storageService=d, this._pendingApprovalRegistry=m, this._asyncOperationRegistry=p, this._experimentService=g, this._effectiveAllowlistService=f, this._mcpService=A
  }
  getEffectiveMcpAllowlist(){
    return this._effectiveAllowlistService.getEffectiveMcpAllowlist()
  }
  getEffectiveTerminalAllowlist(){
    return this._effectiveAllowlistService.getEffectiveTerminalAllowlist()
  }
  isPrivacyModeEnabled(){
    const e=this._cursorAuthenticationService.granularPrivacyModeRawEnum();
    switch(e){
      case pm.NO_STORAGE:case pm.NO_TRAINING:return!0;
      case pm.USAGE_DATA_TRAINING_ALLOWED:case pm.USAGE_CODEBASE_TRAINING_ALLOWED:return!1;
      case pm.UNSPECIFIED:return!0;
      default:return e
    }
  }
  getFullPathForAnalytics(e){
    try{
      return this._workspaceContextService.resolveRelativePath(e).fsPath
    }
    catch{
      return e
    }
  }
  asMcpBlockReason(e){
    switch(e){
      case"notInAllowlist":case"playwrightProtection":case"mcpToolsProtection":case"readonlyMode":case"hookBlocked":return e;
      default:return
    }
  }
  toShellReasonCodeForAnalytics(e, t){
    const i=e.reason;
    if(typeof i=="string"){
      if(i.includes("team blocklist")||i.includes("In team blocklist"))return"shell.team_blocklisted";
      if(i.includes("Not in team allowlist"))return"shell.not_in_team_allowlist";
      if(i.includes("Not in allowlist"))return"shell.not_allowlisted"
    }
    switch(i){
      case"notInAllowlist":return"shell.not_allowlisted";
      case"inBlocklist":return"shell.in_blocklist";
      case"notInTeamAllowlist":return"shell.not_in_team_allowlist";
      case"deleteProtection":return"shell.delete_protection";
      case"readonlyMode":return"shell.readonly_mode";
      case"hookBlocked":return"shell.blocked_by_hook";
      default:break
    }
    return t&&t.length>0?"shell.not_allowlisted":"shell.needs_approval"
  }
  toMcpReasonCodeForAnalytics(e){
    switch(e){
      case"notInAllowlist":return"mcp.tool_not_allowlisted";
      case"playwrightProtection":return"mcp.browser_protection";
      case"mcpToolsProtection":return"mcp.tools_protection";
      case"readonlyMode":return"mcp.readonly_mode";
      case"hookBlocked":return"mcp.blocked_by_hook";
      default:return e
    }
  }
  getInvocationId(e){
    const t=this._composerDataService.getComposerData(e);
    return t?.latestChatGenerationUUID??t?.chatGenerationUUID??void 0
  }
  toEditReasonForAnalytics(e){
    if(e)switch(e.type){
      case"outOfWorkspace":return"outOfWorkspace";
      case"cursorIgnore":return e.source==="globalIgnore"?"cursorIgnore_global":"cursorIgnore_workspace";
      case"otherThreadEdit":return"otherThreadEdit";
      case"restrictedFile":return"restrictedFile";
      case"adminBlock":return"adminBlock";
      default:return e
    }
  }
  toWriteReasonCodeForAnalytics(e){
    if(!e)return"write.needs_approval";
    switch(e.type){
      case"outOfWorkspace":return"write.out_of_workspace";
      case"restrictedFile":return"write.restricted_file";
      case"cursorIgnore":return"write.cursor_ignore";
      case"adminBlock":return"write.admin_block";
      case"otherThreadEdit":return"write.needs_approval";
      default:return e
    }
  }
  trackTrajectoryStopped(e){
    try{
      this._analyticsService.trackEvent("composer.agent_trajectory_stopped",e)
    }
    catch{
      
    }
  }
  getTerminalBubbleStats(e){
    try{
      const t=this._composerDataService.getLoadedConversation(e);
      let i=0,r=0;
      for(const s of t)if(s.toolFormerData?.tool===an.RUN_TERMINAL_COMMAND_V2){
        i++;
        const o=s.toolFormerData.result,a=o?.output??o?.outputRaw;
        a&&(r+=a.length)
      }
      return{
        terminal_bubble_count:i,terminal_total_output_chars:r,composer_bubble_count:t.length
      }
    }
    catch{
      return{
        terminal_bubble_count:0,terminal_total_output_chars:0,composer_bubble_count:0
      }
    }
  }
  getShellApprovalMode(e, t){
    return t.enableRunEverything?"full_yolo":e?"sandbox":t.allowedCommands.length>0?"allowlist":"ask_every_time"
  }
  getToolContextOrThrow(e, t){
    const i=o0a(this._composerDataService, e, t);
    if(!i)throw new Error(`[ComposerDecisionsService] Could not find bubble for toolCallId: ${t}`);
    return i
  }
  getUserApprovedWriteFiles(e){
    const t=this._composerDataService.getComposerData(e), i=new Set(t?.userApprovedWriteFiles??[]);
    if(t?.subagentInfo?.parentComposerId){
      const r=this._composerDataService.getHandleIfLoaded(t.subagentInfo.parentComposerId);
      if(r){
        const s=this._composerDataService.getComposerData(r);
        for(const o of s?.userApprovedWriteFiles??[])i.add(o)
      }
    }
    return i
  }
  getUserApprovedWriteDirectories(e){
    const t=this._composerDataService.getComposerData(e), i=new Set(t?.userApprovedWriteDirectories??[]);
    if(t?.subagentInfo?.parentComposerId){
      const r=this._composerDataService.getHandleIfLoaded(t.subagentInfo.parentComposerId);
      if(r){
        const s=this._composerDataService.getComposerData(r);
        for(const o of s?.userApprovedWriteDirectories??[])i.add(o)
      }
    }
    return i
  }
  normalizeFilePath(e){
    try{
      return this._workspaceContextService.resolveRelativePath(e).fsPath
    }
    catch{
      return e
    }
  }
  async getToolContextOrWait(e, t){
    const i=e.composerId;
    let r=o0a(this._composerDataService, e, t);
    if(r||(await this._pendingApprovalRegistry.waitForBubbleCreation(i, t), r=o0a(this._composerDataService, e, t)), !r)throw new Error(`[ComposerDecisionsService] Could not find bubble for toolCallId: ${t} after waiting`);
    return r
  }
  async handleApprovalRequest(e, t){
    switch(t.operation.type){
      case"shell":{
        const i=TSf.parse(t.operation.details);
        return this.handleShellOperation(e,t.toolCallId,i)
      }
      case"write":{
        const i=xSf.parse(t.operation.details);
        return this.handleWriteOperation(e,t.toolCallId,i)
      }
      case"delete":{
        const i=ISf.parse(t.operation.details);
        return this.handleDeleteOperation(e,t.toolCallId,i)
      }
      case"mcp":{
        const i=DSf.parse(t.operation.details);
        return this.handleMcpOperation(e,t.toolCallId,i)
      }
      default:return{
        approved:!1,reason:"Unknown operation type"
      }
    }
  }
  getMcpToolApprovalForAppCall({
    toolName:e, serverIdentifier:t
  }){
    const i=wU();
    if(this._composerModesService.getComposerFullAutoRun())return{
      approved:!0
    };
    const s=this._composerModesService.getComposerAutoRun(), o=this.getEffectiveMcpAllowlist();
    return s&&umu({
      serverId:t,toolName:e,allowlist:o
    })?{
      approved:!0
    }
    :{
      approved:!1,reason:"notInAllowlist"
    }
  }
  async handleShellOperation(e, t, i){
    let r;
    try{
      r=await this.getToolContextOrWait(e,t)
    }
    catch(f){
      return{
        approved:!1,reason:`Failed to find tool call context: ${f instanceof Error?f.message:String(f)}`
      }
    }
    const s=this._composerDataService.getToolFormer(r.composerHandle);
    if(!s)throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
    const o=this._composerDataService.getComposerData(r.composerHandle);
    if(!o)throw new Error("[ComposerDecisionsService] Composer not found for composerHandle");
    let a;
    o.chatGenerationUUID?a=this._aiService.streamingAbortControllers.get(o.chatGenerationUUID)??new AbortController:a=new AbortController;
    const l=i.canAllowlist?i.notAllowedCommands:void 0, u=this.toShellReasonCodeForAnalytics(i, l), d=u==="shell.blocked_by_hook"||u==="shell.readonly_mode"||u==="shell.in_blocklist"||u==="shell.team_blocklisted"?"blocked_by_policy":"needs_user_approval", m=wU(), p=this.getTerminalBubbleStats(r.composerHandle);
    this.trackTrajectoryStopped({
      composerId:r.composerHandle.composerId,invocationID:this.getInvocationId(r.composerHandle),toolCallId:t,stop_category:d,stop_source:"shell",reason_code:u,hook_source:i.hookSource,shell_approval_mode:this.getShellApprovalMode(i.isSandboxEnabled,m),shell_is_admin_controlled:m.isAdminControlled,shell_can_allowlist:i.canAllowlist,shell_not_allowed_commands_count:l?.length,shell_is_sandbox_available:i.isSandboxAvailable,shell_is_sandbox_enabled:i.isSandboxEnabled,...p
    }), s.setBubbleData(r.bubbleId, {
      additionalData:{
        status:"pending",blockReason:i.reason
      }
    });
    const g=await this.runTerminalReviewMode(s, r.bubbleId, r.composerHandle, a, l, t);
    switch(g.type){
      case DV.RUN:return s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"running"
        }
      }),{
        approved:!0
      };
      case DV.SKIP:return s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"skipped"
        }
      }),{
        approved:!1,reason:"User chose to skip"
      };
      case DV.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY:return s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"rejected"
        }
      }),{
        approved:!1,reason:g.feedback
      };
      case DV.ALLOWLIST_COMMANDS:return this._reactiveStorageService.setApplicationUserPersistentStorage("composerState","yoloCommandAllowlist",f=>[...f??[],...g.commands.filter(A=>!(f??[]).includes(A))]),s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"running"
        }
      }),{
        approved:!0
      };
      case DV.NONE:default:return s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"cancelled"
        }
      }),{
        approved:!1,reason:"Review cancelled or failed"
      }
    }
  }
  async handleDeleteOperation(e, t, i){
    const r=wU();
    let s;
    try{
      s=await this.getToolContextOrWait(e,t)
    }
    catch(l){
      return{
        approved:!1,reason:`Failed to find tool call context: ${l instanceof Error?l.message:String(l)}`
      }
    }
    const o=this._composerDataService.getToolFormer(s.composerHandle);
    if(!o)throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
    const a=Eme(this._workspaceContextService, i.path);
    return p4A(a)?(o.setBubbleData(s.bubbleId, {
      userDecision:"accepted"
    }), {
      approved:!0
    }):o.shouldAutoRun_runEverythingMode()?(o.setBubbleData(s.bubbleId, {
      userDecision:"accepted"
    }), {
      approved:!0
    }):r.deleteFileProtection?(this.trackTrajectoryStopped({
      composerId:s.composerHandle.composerId,invocationID:this.getInvocationId(s.composerHandle),toolCallId:t,stop_category:"needs_user_approval",stop_source:"delete",reason_code:"delete.needs_approval",delete_file_protection_enabled:r.deleteFileProtection
    }), new Promise(l=>{
      o.addPendingDecision(s.bubbleId,an.DELETE_FILE,t,u=>{
        l(u?{
          approved:!0
        }
        :{
          approved:!1,reason:"User rejected the delete operation"
        })
      },!0)
    })):(o.setBubbleData(s.bubbleId, {
      userDecision:"accepted"
    }), {
      approved:!0
    })
  }
  async handleWriteOperation(e, t, i){
    let r;
    try{
      r=await this.getToolContextOrWait(e,t)
    }
    catch(I){
      return{
        approved:!1,reason:`Failed to find tool call context: ${I instanceof Error?I.message:String(I)}`
      }
    }
    const s=this._composerDataService.getToolFormer(r.composerHandle);
    if(!s)throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
    const o=this._composerDataService.getComposerData(r.composerHandle);
    if(!o)throw new Error("[ComposerDecisionsService] Composer not found for composerHandle");
    let a;
    o.chatGenerationUUID?a=this._aiService.streamingAbortControllers.get(o.chatGenerationUUID)??new AbortController:a=new AbortController;
    const l=wU(), u=i.blockReason;
    if(u==="outOfWorkspace"&&!l.outsideWorkspaceProtection)return s.setBubbleData(r.bubbleId, {
      userDecision:"accepted"
    }), {
      approved:!0
    };
    if(u){
      const I=this.normalizeFilePath(i.path);
      if(this.getUserApprovedWriteFiles(r.composerHandle).has(I))return s.setBubbleData(r.bubbleId,{
        userDecision:"accepted"
      }),{
        approved:!0
      };
      if(u==="outOfWorkspace"&&[...this.getUserApprovedWriteDirectories(r.composerHandle)].some(M=>aFn(I,M,Sc)))return s.setBubbleData(r.bubbleId,{
        userDecision:"accepted"
      }),{
        approved:!0
      }
    }
    const d=this._workspaceContextService.resolveRelativePath(i.path), m=i.before, p=i.after;
    let g;
    if(m!==void 0){
      const I=tce.serialize(m);
      g=`composer.content.${sQ(await aye(I))}`,await this._storageService.cursorDiskKVGet(g)===void 0&&await this._storageService.cursorDiskKVSet(g,m)
    }
    let f;
    if(p!==void 0){
      const I=tce.serialize(p);
      f=`composer.content.${sQ(await aye(I))}`,await this._storageService.cursorDiskKVGet(f)===void 0&&await this._storageService.cursorDiskKVSet(f,p)
    }
    const A=(()=>{
      if(u)switch(u){
        case"outOfWorkspace":return{
          type:"outOfWorkspace"
        };
        case"protectedConfig":return{
          type:"restrictedFile"
        };
        default:{
          const I=u;
          return
        }
      }
    })();
    s.setBubbleData(r.bubbleId, {
      params:new ihe({
        relativeWorkspacePath:i.path,noCodeblock:!0,streamingContent:p
      }),result:new MRe({
        beforeContentId:g,afterContentId:f??""
      }),additionalData:{
        reasonForAcceptReject:A,blockReason:u
      }
    });
    const w=(()=>{
      switch(u){
        case"outOfWorkspace":return"write.out_of_workspace";
        case"protectedConfig":return"write.protected_config";
        default:return this.toWriteReasonCodeForAnalytics(A)
      }
    })(), C=w==="write.cursor_ignore"||w==="write.admin_block"?"blocked_by_policy":"needs_user_approval";
    this.trackTrajectoryStopped({
      composerId:r.composerHandle.composerId,invocationID:this.getInvocationId(r.composerHandle),toolCallId:t,blocked_file_path:this.isPrivacyModeEnabled()||!u?void 0:this.getFullPathForAnalytics(i.path),stop_category:C,stop_source:"write",reason_code:w,edit_reason:this.toEditReasonForAnalytics(A)??(u?"unknown":void 0)
    });
    const x=await this.runEditReviewMode(s, r.bubbleId, r.composerHandle, d, a, t);
    if(x.type===dX.ACCEPT){
      if(u){
        const I=this.normalizeFilePath(i.path);
        this._composerDataService.updateComposerDataSetStore(r.composerHandle,B=>{
          B("userApprovedWriteFiles",(R=[])=>R.includes(I)?R:[...R,I])
        })
      }
      return{
        approved:!0
      }
    }
    else{
      if(x.type===dX.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY)return{
        approved:!1,reason:x.feedback
      };
      if(x.type===dX.SKIP)return{
        approved:!1,reason:"User chose to skip"
      };
      if(x.type===dX.ACCEPT_AND_ALLOW_FOLDER){
        const I=this.normalizeFilePath(i.path),B=zN(I);
        return this._composerDataService.updateComposerDataSetStore(r.composerHandle,R=>{
          R("userApprovedWriteDirectories",(N=[])=>N.includes(B)?N:[...N,B])
        }),{
          approved:!0
        }
      }
    }
    return{
      approved:!1,reason:"Review cancelled or rejected"
    }
  }
  async runEditReviewMode(e, t, i, r, s, o){
    let a=this._toolCallHumanReviewService.getEditReviewModelForBubble(i, t);
    if(!a){
      const p=e.getBubbleData(t);
      if(p){
        const g=p.tool===an.EDIT_FILE||p.tool===an.EDIT_FILE_V2;
        (!p.tool||g)&&(p.tool||e.setBubbleData(t,{
          tool:an.EDIT_FILE_V2
        }),a=this._toolCallHumanReviewService.getEditReviewModelForBubble(i,t))
      }
    }
    if(!a)return Promise.resolve({
      type:dX.NONE
    });
    const l=i.composerId;
    this._composerViewsService.focus(l), s.signal.addEventListener("abort", ()=>{
      a.reset()
    });
    const u=SSf(a.getHumanReviewData());
    if(u)return u;
    a.setStatus(DA.REQUESTED);
    const d=e.addPendingDecision(t, an.EDIT_FILE_V2, o, ()=>{
      
    }, !0), m=(p, g, f)=>{
      if(p===void 0||p.status===DA.NONE){
        g.dispose(),d(),f({
          type:dX.NONE
        });
        return
      }
      p.status===DA.DONE&&(g.dispose(),d(),f(SSf(p)??{
        type:dX.NONE
      }))
    };
    return new Promise(p=>{
      const g=this._reactiveStorageService.onChangeEffectManuallyDisposed({
        deps:[()=>a.getHumanReviewData()],onChange:({
          deps:f
        })=>{
          try{
            m(f[0],g,p)
          }
          catch(A){
            console.error("Error during processing review mode",A),g.dispose(),p({
              type:dX.NONE
            })
          }
        }
      });
      s.signal.addEventListener("abort",()=>{
        p({
          type:dX.NONE
        })
      })
    })
  }
  async handleMcpOperation(e, t, i){
    let r;
    try{
      r=await this.getToolContextOrWait(e,t)
    }
    catch(N){
      return{
        approved:!1,reason:`Failed to find tool call context: ${N instanceof Error?N.message:String(N)}`
      }
    }
    const s=this._composerDataService.getToolFormer(r.composerHandle);
    if(!s)throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
    const o=this._composerDataService.getComposerData(r.composerHandle);
    if(!o)throw new Error("[ComposerDecisionsService] Composer not found for composerHandle");
    const a=i.providerIdentifier, l=this._mcpService.mcpAllowlistLogger;
    l.info(`[handleMcpOperation] Tool="${i.toolName}", server="${a}", canAllowlist=${i.canAllowlist}, reason="${i.reason??"none"}"`);
    const u=wU(), d=wpn.includes(a);
    if(this._composerModesService.getComposerFullAutoRun()&&!d)return s.setBubbleData(r.bubbleId, {
      userDecision:"accepted",additionalData:{
        status:"running"
      }
    }), {
      approved:!0
    };
    if(d&&!u.playwrightProtection)return s.setBubbleData(r.bubbleId, {
      userDecision:"accepted",additionalData:{
        status:"running"
      }
    }), {
      approved:!0
    };
    const p=this._composerModesService.getComposerAutoRun(), g=this.getEffectiveMcpAllowlist(), f=p&&umu({
      serverId:a,toolName:i.toolName,allowlist:g
    }), A=this.asMcpBlockReason(i.reason);
    if(f&&(!A||A==="notInAllowlist"))return s.setBubbleData(r.bubbleId, {
      userDecision:"accepted",additionalData:{
        status:"running"
      }
    }), {
      approved:!0
    };
    let C;
    o.chatGenerationUUID?C=this._aiService.streamingAbortControllers.get(o.chatGenerationUUID)??new AbortController:C=new AbortController;
    const x=i.canAllowlist?[{
      tool:i.toolName,server:a
    }
    ]:void 0;
    let I;
    A?I=A:d&&u.playwrightProtection?I="playwrightProtection":i.canAllowlist?I="notInAllowlist":I="mcpToolsProtection", s.setBubbleData(r.bubbleId, {
      additionalData:{
        status:"pending",blockReason:I
      }
    });
    const B=I==="hookBlocked"||I==="readonlyMode"?"blocked_by_policy":"needs_user_approval";
    this.trackTrajectoryStopped({
      composerId:r.composerHandle.composerId,invocationID:this.getInvocationId(r.composerHandle),toolCallId:t,stop_category:B,stop_source:"mcp",reason_code:I?this.toMcpReasonCodeForAnalytics(I):"mcp.needs_approval",hook_source:i.hookSource,mcp_can_allowlist:i.canAllowlist,mcp_is_playwright_tool:d,mcp_playwright_protection_enabled:u.playwrightProtection
    });
    const R=await this.runMCPReviewMode(s, r.bubbleId, r.composerHandle, C, x, t, i.toolName, a);
    switch(R.type){
      case EQ.RUN:return s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"running"
        }
      }),{
        approved:!0
      };
      case EQ.SKIP:return s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"skipped"
        }
      }),{
        approved:!1,reason:"User chose to skip"
      };
      case EQ.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY:return s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"rejected"
        }
      }),{
        approved:!1,reason:R.feedback
      };
      case EQ.ALLOWLIST_TOOL:return l.info(`[handleMcpOperation] User chose ALLOWLIST_TOOL. Adding "${a}:${i.toolName}" to allowlist. Current allowlist: ${JSON.stringify(this._reactiveStorageService.applicationUserPersistentStorage.composerState.mcpAllowedTools??[])}`),this._reactiveStorageService.setApplicationUserPersistentStorage("composerState","mcpAllowedTools",N=>ASf(i.toolName,a,N??[])),s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"running"
        }
      }),{
        approved:!0
      };
      case EQ.NONE:default:return s.setBubbleData(r.bubbleId,{
        additionalData:{
          status:"cancelled"
        }
      }),{
        approved:!1,reason:"Review cancelled or failed"
      }
    }
  }
  async runTerminalReviewMode(e, t, i, r, s, o){
    const a=this._toolCallHumanReviewService.getTerminalReviewModelForBubble(i, t);
    if(!a)return{
      type:DV.NONE
    };
    a.updateReviewData({
      candidatesForAllowlist:s??[]
    }), this._composerViewsService.triggerScrollToBottom(i), r.signal.addEventListener("abort", ()=>{
      a.reset()
    });
    const l=kSf(a.getHumanReviewData());
    if(l)return l;
    const u=i.composerId;
    this._asyncOperationRegistry.enter(u, "terminal_user_approval"), a.setStatus(DA.REQUESTED);
    const d=e.addPendingDecision(t, an.RUN_TERMINAL_COMMAND_V2, o, ()=>{
      
    }, !0), m=(p, g, f)=>{
      p===void 0?(g.dispose(),d()):p.status===DA.NONE?(g.dispose(),d(),f({
        type:DV.NONE
      })):p.status===DA.DONE&&(g.dispose(),f(kSf(p)??{
        type:DV.NONE
      }),d())
    };
    try{
      return await new Promise(p=>{
        const g=this._reactiveStorageService.onChangeEffectManuallyDisposed({
          deps:[()=>a.getHumanReviewData()],onChange:({
            deps:f
          })=>{
            try{
              m(f[0],g,p)
            }
            catch(A){
              console.error("Error during processing of terminal review mode",A),g.dispose(),p({
                type:DV.NONE
              })
            }
          }
        });
        r.signal.addEventListener("abort",()=>{
          p({
            type:DV.NONE
          })
        })
      })
    }
    finally{
      this._asyncOperationRegistry.exit(u,"terminal_user_approval")
    }
  }
  async runMCPReviewMode(e, t, i, r, s, o, a, l){
    const u=this._toolCallHumanReviewService.getMCPReviewModelForBubble(i, t);
    if(!u)return{
      type:EQ.NONE
    };
    u.updateReviewData({
      candidatesForAllowlist:s??[],toolName:a,serverId:l
    }), this._composerViewsService.triggerScrollToBottom(i), r.signal.addEventListener("abort", ()=>{
      u.reset()
    });
    const d=ESf(u.getHumanReviewData());
    if(d)return d;
    const m=i.composerId;
    this._asyncOperationRegistry.enter(m, "mcp_user_approval"), u.setStatus(DA.REQUESTED);
    const p=e.addPendingDecision(t, an.MCP, o, ()=>{
      
    }, !0), g=(f, A, w, C)=>{
      f===void 0?(w.dispose(),p()):f.status===DA.NONE?(w.dispose(),p(),C({
        type:EQ.NONE
      })):f.status===DA.DONE?(w.dispose(),C(ESf(f)??{
        type:EQ.NONE
      }),p()):f.status===DA.REQUESTED&&umu({
        serverId:l,toolName:a,allowlist:A
      })&&(w.dispose(),p(),u.setSelectedOption(_I.RUN),u.setStatus(DA.DONE),C({
        type:EQ.RUN
      }))
    };
    try{
      return await new Promise(f=>{
        const A=this._reactiveStorageService.onChangeEffectManuallyDisposed({
          deps:[()=>u.getHumanReviewData(),()=>this._reactiveStorageService.applicationUserPersistentStorage.composerState.mcpAllowedTools??[]],onChange:({
            deps:w
          })=>{
            try{
              const C=this.getEffectiveMcpAllowlist();
              g(w[0],C,A,f)
            }
            catch(C){
              console.error("Error during processing of MCP review mode",C),A.dispose(),f({
                type:EQ.NONE
              })
            }
          }
        });
        r.signal.addEventListener("abort",()=>{
          f({
            type:EQ.NONE
          })
        })
      })
    }
    finally{
      this._asyncOperationRegistry.exit(m,"mcp_user_approval")
    }
  }
}, c0a=__decorate([__param(0, WEe), __param(1, ku), __param(2, rw), __param(3, Oa), __param(4, Jv), __param(5, uh), __param(6, wg), __param(7, Lr), __param(8, DT), __param(9, Hi), __param(10, egn), __param(11, Htt), __param(12, Tl), __param(13, Xpn), __param(14, IU)], c0a), Vi(Kkt, c0a, 1)
}
}), iit, BSf=