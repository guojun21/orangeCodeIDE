// Module: out-build/vs/workbench/contrib/composer/browser/mockComposerStreamController.js
// Offset: 30433299 (bundle byte offset)
// Size: 5942 bytes

Xkt(), _s(), Bc(), cv(), Vg(), mD(), qp(), qSf=class{
  constructor(n){
    this.pendingMocks=new Map, this.activeStreams=new Map, this.logService=n
  }
  createMock(n){
    const e=Wr(), t={
      mockId:e,composerId:n,events:new GEe(void 0)
    };
    return this.pendingMocks.set(e, t), this.logService.info(`[mock composer] created mock ${e} (composer=${n})`), e
  }
  pushEvent(n, e){
    const t=this.pendingMocks.get(n);
    if(t===void 0)throw new Error(`Mock composer stream ${n} not found`);
    const i=this.createMockEvent(t, e);
    t.events.push(i), this.logService.info(`[mock composer] pushed event for mock ${n} (kind=${e.kind})`)
  }
  completeMock(n){
    const e=this.pendingMocks.get(n);
    if(e===void 0){
      this.logService.warn(`[mock composer] completeMock called for unknown mock ${n}`);
      return
    }
    e.events.end(), this.logService.info(`[mock composer] completed mock ${n}`)
  }
  disposeMock(n){
    const e=this.pendingMocks.get(n);
    if(e===void 0){
      this.logService.warn(`[mock composer] disposeMock called for unknown mock ${n}`);
      return
    }
    const t=e.generationUuid;
    t!==void 0?(this.logService.info(`[mock composer] disposing active mock ${n} (generation=${t})`), this.cleanupGeneration(t, new vf)):(this.logService.info(`[mock composer] disposing pending mock ${n}`), this.pendingMocks.delete(n), e.events.error(new vf))
  }
  abortMock(n){
    this.disposeMock(n)
  }
  getMockStream(n, e, t, i){
    const r=this.pickPendingMock(n);
    if(r===void 0)return;
    r.generationUuid=e;
    const s=()=>{
      this.logService.info(`[mock composer] abort signaled for mock ${r.mockId} (generation=${e})`),this.disposeMock(r.mockId)
    };
    i.signal.addEventListener("abort", s);
    const o={
      mock:r,pushable:t,abortController:i,abortListener:s
    };
    return this.activeStreams.set(e, o), this.logService.info(`[mock composer] attached mock ${r.mockId} to generation ${e}`), {
      stream:this.createStreamFromEvents(r,e)
    }
  }
  getActiveStream(n){
    const e=this.activeStreams.get(n);
    if(e!==void 0)return{
      mockId:e.mock.mockId
    }
  }
  pickPendingMock(n){
    for(const e of this.pendingMocks.values())if(e.generationUuid===void 0&&e.composerId===n)return e;
    for(const e of this.pendingMocks.values())if(e.generationUuid===void 0)return e
  }
  createStreamFromEvents(n, e){
    const t=this;
    return(async function*(){
      try{
        for await(const i of n.events)yield t.createChunkForEvent(i,e);
        yield t.createFinalChunk(e)
      }
      catch(i){
        const r=i instanceof Error?i:new Error(String(i));
        throw t.logService.error(`[mock composer] stream error for generation ${e}`,r),t.cleanupGeneration(e,r),r
      }
      finally{
        t.cleanupGeneration(e,void 0)
      }
    })()
  }
  createMockEvent(n, e){
    if(e.kind!=="tool-call")return{
      step:e
    };
    try{
      const t=nhe.fromJsonString(JSON.stringify(e.toolCall));
      return{
        step:e,parsedToolCall:t
      }
    }
    catch(t){
      throw new Error(`Failed to parse tool call event: ${t instanceof Error?t.message:String(t)}`)
    }
  }
  createChunkForEvent(n, e){
    if(n.step.kind==="tool-call"){
      const i=n.parsedToolCall??nhe.fromJsonString(JSON.stringify(n.step.toolCall));
      return new J9e({
        response:{
          case:"clientSideToolV2Call",value:i
        },eventId:e
      })
    }
    if(n.step.kind==="agent-tool")throw new Error("agent-tool steps should not be processed by MockComposerStreamController");
    if(n.step.kind==="error")throw this.createConnectErrorFromStep(n.step);
    const t=new A8n;
    return n.step.kind==="text"?t.text=n.step.value:(n.step.kind==="thinking"||n.step.kind==="thinking-complete")&&(t.thinking=new n9t({
      text:n.step.value,isLastThinkingChunk:n.step.kind==="thinking-complete"
    })), n.step.metadata?.serverBubbleId!==void 0&&(t.serverBubbleId=n.step.metadata.serverBubbleId), n.step.metadata?.usageUuid!==void 0&&(t.usageUuid=n.step.metadata.usageUuid), new J9e({
      response:{
        case:"streamUnifiedChatResponse",value:t
      },eventId:e
    })
  }
  mapErrorCode(n){
    switch(n){
      case"RATE_LIMITED_CHANGEABLE":return yc.RATE_LIMITED_CHANGEABLE;
      case"FREE_USER_RATE_LIMIT_EXCEEDED":return yc.FREE_USER_RATE_LIMIT_EXCEEDED;
      case"PRO_USER_RATE_LIMIT_EXCEEDED":return yc.PRO_USER_RATE_LIMIT_EXCEEDED;
      case"RESOURCE_EXHAUSTED":return yc.RESOURCE_EXHAUSTED;
      case"TIMEOUT":return yc.TIMEOUT;
      case"CUSTOM":return yc.CUSTOM;
      default:{
        const e=n;
        throw new Error(`Unknown error code: ${e}`)
      }
    }
  }
  createConnectErrorFromStep(n){
    const e=this.mapErrorCode(n.errorCode), t=new cN({
      error:e,details:{
        title:n.title??"Error",detail:n.detail??"An error occurred",isRetryable:n.isRetryable??!0
      }
    }), i=new fA(n.detail??"Mock error", j0.ResourceExhausted);
    return i.details.push({
      type:cN.typeName,value:t.toBinary(),debug:t.toJson()
    }), this.logService.info(`[mock composer] throwing mock error (code=${n.errorCode})`), i
  }
  createFinalChunk(n){
    return new J9e({
      response:{
        case:"streamUnifiedChatResponse",value:new A8n({
          text:""
        })
      },eventId:n
    })
  }
  cleanupGeneration(n, e){
    const t=this.activeStreams.get(n);
    if(t===void 0)return;
    this.activeStreams.delete(n), t.abortController.signal.removeEventListener("abort", t.abortListener), e!==void 0&&!(e instanceof vf)?(t.pushable.error(e), t.mock.events.error(e)):(t.pushable.end(), t.mock.events.end());
    const i=t.mock;
    i.generationUuid=void 0, this.pendingMocks.delete(i.mockId), this.logService.info(`[mock composer] cleaned up mock ${i.mockId} (generation=${n})`)
  }
}
}
});
async function Hwi(n, e){
  const t=n.getWorkspace().folders;
  if(t.length===0||t.length>1)return!1;
  const i=t[0].uri, r=i.scheme==="vscode-remote"?i.path:i.fsPath;
  e.hasGitContextProvider()||await e.waitForGitContextProvider();
  try{
    return await e.getGitRoot(r)!==void 0
  }
  catch{
    return!1
  }
}
async function HSf(n, e){
  const t=n.getWorkspace().folders;
  if(t.length>1){
    const s=t.map(o=>o.uri.scheme==="vscode-remote"?o.uri.path:o.uri.fsPath);
    return u0a+" Current folders: "+s.join(", ")
  }
  if(t.length===0)return"Open a folder with a Git repository to use worktrees.";
  const i=t[0].uri, r=i.scheme==="vscode-remote"?i.path:i.fsPath;
  e.hasGitContextProvider()||await e.waitForGitContextProvider();
  try{
    if(!await e.getGitRoot(r))return"Worktree chats require a Git repository. The workspace folder is not inside a Git repository: "+r
  }
  catch{
    return"Worktree chats require a Git repository. Unable to check Git status for: "+r
  }
}
var u0a, d0a=