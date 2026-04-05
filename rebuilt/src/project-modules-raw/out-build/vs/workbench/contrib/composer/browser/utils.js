// Module: out-build/vs/workbench/contrib/composer/browser/utils.js
// Offset: 26628491 (bundle byte offset)
// Size: 20337 bytes

Ti(), ri(), _r(), Yn(), wI(), So(), Fc(), f$e(), cv(), Vg(), MWl(), gE(), of(), UF(), mtu="composer-keep-all-no-inline-diffs-toast-shown", nce=n=>Fs?`\u2318${n}`:`^${n}`, ice=async(n, e, t)=>{
  if(Kun(e, {
    filePathOrUri:n, selection:t?.selection
  }))return;
  let i;
  typeof n=="string"?i=e.workspaceContextService.resolveRelativePath(n):i=n, t?.selection&&(i=b2(i, {
    startLineNumber:t.selection.startLineNumber, startColumn:t.selection.startColumn??1, endLineNumber:t.selection.endLineNumber??t.selection.startLineNumber, endColumn:t.selection.endColumn??t.selection.startColumn??1
  }));
  const r=i.with({
    fragment:"", query:""
  });
  if(!await e.fileService.exists(r))return;
  if(t?.preferNeighboringGroup){
    zNg(i, e, t.openToSide);
    return
  }
  const o=t?.openToSide??!1, a=t?.preserveFocus??!0;
  if(!o){
    const l=e.editorService.activeEditorPane?.group??e.editorGroupService.activeGroup, u=e.editorGroupService.mainPart.getGroups(1), d=l?[l, ...u.filter(p=>p.id!==l.id)]:u, m=mCt(d);
    if(m&&l&&m.id!==l.id){
      m.focus(),await e.openerService.open(i,{
        openToSide:!1,editorOptions:{
          revealIfVisible:!0,revealIfOpened:!0,source:rR.USER,preserveFocus:a
        },fromUserGesture:!0
      }),a&&l.focus();
      return
    }
  }
  e.openerService.open(i, {
    openToSide:o, editorOptions:{
      revealIfVisible:!0,revealIfOpened:!0,source:rR.USER,preserveFocus:a
    }, fromUserGesture:!0
  })
}, zNg=async(n, e, t=!0, i)=>{
  if(Kun(e, {
    filePathOrUri:n, selection:i
  }))return;
  let r;
  if(typeof n=="string"){
    const a=n.trim();
    if(!a)return;
    r=e.workspaceContextService.resolveRelativePath(a)
  }
  else r=n;
  i&&(r=b2(r, {
    startLineNumber:i.startLineNumber, startColumn:i.startColumn??1, endLineNumber:i.endLineNumber??i.startLineNumber, endColumn:i.endColumn??i.startColumn??1
  }));
  const s=r.with({
    fragment:"", query:""
  });
  if(await e.fileService.exists(s))if(t){
    const a=GNg(e.editorGroupService);
    if(a){
      const l=e.editorGroupService.activeGroup;
      a.focus(),await e.openerService.open(r,{
        openToSide:!1,editorOptions:{
          revealIfVisible:!1,revealIfOpened:!1,source:rR.USER,preserveFocus:!0
        },fromUserGesture:!0
      }),l.focus();
      return
    }
    e.openerService.open(r, {
      openToSide:!0,editorOptions:{
        revealIfVisible:!0,revealIfOpened:!0,source:rR.USER,preserveFocus:!0
      },fromUserGesture:!0
    })
  }
  else e.openerService.open(r, {
    openToSide:!1, editorOptions:{
      revealIfVisible:!0,revealIfOpened:!0,source:rR.USER,preserveFocus:!0
    }, fromUserGesture:!0
  })
}, bhn=(n, e, t)=>{
  if(t?.preferNeighboringGroup){
    VNg(n, e, t);
    return
  }
  const i=n.uri.path??"", r={
    startLineNumber:n.range.selectionStartLineNumber, startColumn:1, endLineNumber:n.range.positionLineNumber, endColumn:1
  };
  if(Kun(e, {
    filePathOrUri:i, selection:r
  }))return;
  const s=e.workspaceContextService.resolveRelativePath(i);
  if(!s)return;
  const o=b2(s, r), a=e.editorService.activeEditorPane?.group??e.editorGroupService.activeGroup, l=e.editorGroupService.mainPart.getGroups(1), u=a?[a, ...l.filter(p=>p.id!==a.id)]:l, d=mCt(u), m=t?.preserveFocus;
  if(!t?.openToSide&&d&&a&&d.id!==a.id){
    d.focus(), e.openerService.open(o, {
      openToSide:!1,editorOptions:{
        revealIfVisible:!0,revealIfOpened:!0,source:rR.USER,preserveFocus:m
      },fromUserGesture:!0,...t
    }).finally(()=>{
      m&&a.focus()
    });
    return
  }
  e.openerService.open(o, {
    openToSide:!1, editorOptions:{
      revealIfVisible:!0,revealIfOpened:!0,source:rR.USER,preserveFocus:m
    }, fromUserGesture:!0, ...t
  })
}, VNg=async(n, e, t)=>{
  const i=n.uri.path??"", r={
    startLineNumber:n.range.selectionStartLineNumber, startColumn:1, endLineNumber:n.range.positionLineNumber, endColumn:1
  };
  if(Kun(e, {
    filePathOrUri:i, selection:r
  }))return;
  const s=e.workspaceContextService.resolveRelativePath(i);
  if(!s)return;
  const o=b2(s, r);
  if((t?.preferNeighboringGroup??!0)&&!t?.openToSide){
    const l=GNg(e.editorGroupService);
    if(l){
      const u=e.editorGroupService.activeGroup;
      l.focus(),await e.openerService.open(o,{
        ...t,openToSide:!1,editorOptions:{
          revealIfVisible:!1,revealIfOpened:!1,source:rR.USER,preserveFocus:t?.editorOptions?.preserveFocus,...t?.editorOptions
        },fromUserGesture:!0
      }),t?.editorOptions?.preserveFocus&&u.focus();
      return
    }
  }
  e.openerService.open(o, {
    ...t, editorOptions:{
      revealIfVisible:!0,revealIfOpened:!0,source:rR.USER,...t?.editorOptions
    }, openToSide:t?.openToSide, fromUserGesture:!0
  })
}
}
});
function KNg(n){
  return`composerData:${n}`
}
async function kpa(n, e){
  const t=XNg(n), i=[1e3, 5e3, 1e4, 2e4];
  let r=0;
  const s=async()=>{
    try{
      await e.cursorDiskKVSet(KNg(n.composerId),t)
    }
    catch(o){
      if(r<i.length)return console.warn(`[composer] Failed to migrate composer data (attempt ${r+1}), retrying in ${i[r]/1e3}s`,o),await new Promise(a=>setTimeout(a,i[r])),r++,s();
      console.error("[composer] Failed to migrate composer data after all retries",o)
    }
  };
  await s().catch(o=>{
    console.error("[composer] Unexpected error during migration retry", o)
  })
}
function fNA(n, e){
  let t=n.hasMigratedMultipleComposers??!1, i;
  if(!t&&"selectedComposerId"in n)i={
    ...n, selectedComposerIds:[n.selectedComposerId], lastFocusedComposerIds:[n.selectedComposerId], selectedComposerHandles:{
      
    }
  };
  else{
    i=n;
    const l=i.allComposers[0];
    i.selectedComposerIds.length===0&&l&&(i.selectedComposerIds=[l.composerId]), (!i.lastFocusedComposerIds||i.lastFocusedComposerIds.length===0)&&l&&(i.lastFocusedComposerIds=[l.composerId])
  }
  let r=i.hasMigratedComposerData??!1, s=i.allComposers;
  const o=[];
  r||(s=s.map(l=>l.type==="head"?l.isWorktree===void 0?{
    ...l, isWorktree:!1
  }
  :l:(o.push(kpa(l, e.storageService)), r$e(l))), r=!0), s=WNg(s).map(hNA).map(l=>{
    let u=l;
    return l.isWorktree===void 0&&(u={
      ...u,isWorktree:!1
    }), l.authoredPlan===void 0&&(u={
      ...u,authoredPlan:void 0
    }), u
  });
  let a=i.selectedComposerIds||[];
  if(a.length===0||iMg){
    const l=Wr(), u=e.modelConfigService.getModelConfig("composer"), d=K9(u, l);
    e.isGlass&&(d.isEphemeral=!0), o.push(kpa(d, e.storageService)), a=[l], s=[r$e(d), ...s]
  }
  return i={
    allComposers:s, selectedComposerIds:a, lastFocusedComposerIds:i.lastFocusedComposerIds||[], hasMigratedComposerData:r, hasMigratedMultipleComposers:!0, selectedComposerHandles:{
      
    }
  }, [i, Promise.allSettled(o).then(()=>{
    
  })]
}
function bNA(n, e){
  if(n.length<=e)return n;
  let i=n.length-e;
  for(;
  i<n.length&&n[i].type!==ul.HUMAN;
  )i++;
  return n.slice(i)
}
async function vNA(n, e){
  let t=YNg(n);
  return t=await iNA(t, e), t
}
function Epa(n){
  n.type===ul.AI&&(n.text=n.text.replace(/^[\r\n]+/, ""));
  const e=n.codeBlocks?.map(u=>u.unregistered?u:{
    ...u, uri:je.revive(u.uri)
  });
  let t;
  try{
    t="toolFormerData"in n&&n.toolFormerData!==void 0&&n.toolFormerData.tool!==void 0?yNg(ANg(n.toolFormerData)):void 0
  }
  catch(u){
    console.error("[composer] Error parsing toolFormerData", u)
  }
  const i=n.type===ul.HUMAN?{
    ...sR(), ...n.context?zWl(n.context):{
      
    }
  }
  :void 0;
  let r;
  if(n.todos)try{
    r=n.todos.map(u=>typeof u=="string"?QB.fromJsonString(u):new QB(u))
  }
  catch(u){
    console.error("[composer] Error deserializing todos", u), r=void 0
  }
  let s;
  if(n.conversationSummary)try{
    typeof n.conversationSummary=="string"?s=ohe.fromJsonString(n.conversationSummary):s=new ohe(n.conversationSummary)
  }
  catch(u){
    console.error("[composer] Error deserializing conversationSummary", u), s=void 0
  }
  const o=n.thinking!==void 0;
  let a;
  if(n.serviceStatusUpdate)try{
    typeof n.serviceStatusUpdate=="string"?a=e9t.fromJsonString(n.serviceStatusUpdate):a=new e9t(n.serviceStatusUpdate)
  }
  catch(u){
    console.error("[composer] Error deserializing serviceStatusUpdate", u), a=void 0
  }
  let l;
  if(n.errorDetails)try{
    l={
      ...n.errorDetails
    }, n.errorDetails.error!==void 0&&typeof n.errorDetails.error=="string"?l.error=cN.fromJsonString(n.errorDetails.error):l.error=void 0
  }
  catch(u){
    console.error("[composer] Error deserializing errorDetails.error", u), l=n.errorDetails
  }
  return{
    ...h_(), ...n, codeBlocks:e, toolFormerData:t, context:i, todos:r, conversationSummary:s, capabilityType:o?ko.THINKING:n.capabilityType, serviceStatusUpdate:a, errorDetails:l
  }
}
function YNg(n){
  const e=JSON.parse(n), t=e.modelConfig??{
    modelName:"default", maxMode:!1
  }, i={
    ...K9(t, e.composerId), ...e, modelConfig:e.modelConfig??t
  };
  if("_v"in e||(i._v=0), i.unifiedMode===void 0&&(i.isAgentic?i.unifiedMode="agent":i.unifiedMode=i.forceMode??"edit"), i.forceMode=i.unifiedMode==="chat"?"chat":"edit", i.isAgentic=i.unifiedMode==="agent", i.context={
    ...sR(), ...zWl(e.context)
  }, i.speculativeSummarizationEncryptionKey)if(typeof i.speculativeSummarizationEncryptionKey=="string")try{
    const s=Zj(i.speculativeSummarizationEncryptionKey);
    i.speculativeSummarizationEncryptionKey=new Uint8Array(s.buffer), i.speculativeSummarizationEncryptionKey.byteLength===0&&(console.error("[composer] speculativeSummarizationEncryptionKey is empty, regenerating"), i.speculativeSummarizationEncryptionKey=crypto.getRandomValues(new Uint8Array(32)))
  }
  catch(s){
    console.error("[composer] Error deserializing speculativeSummarizationEncryptionKey", s), i.speculativeSummarizationEncryptionKey=crypto.getRandomValues(new Uint8Array(32))
  }
  else i.speculativeSummarizationEncryptionKey instanceof Uint8Array?i.speculativeSummarizationEncryptionKey.byteLength===0&&(console.error("[composer] speculativeSummarizationEncryptionKey is empty, regenerating"), i.speculativeSummarizationEncryptionKey=crypto.getRandomValues(new Uint8Array(32))):(console.error("[composer] speculativeSummarizationEncryptionKey is not a Uint8Array (regenerating). Its type is: ", typeof i.speculativeSummarizationEncryptionKey), i.speculativeSummarizationEncryptionKey=crypto.getRandomValues(new Uint8Array(32)));
  else i.speculativeSummarizationEncryptionKey=crypto.getRandomValues(new Uint8Array(32));
  if(i.blobEncryptionKey)if(typeof i.blobEncryptionKey=="string")try{
    const s=Zj(i.blobEncryptionKey);
    i.blobEncryptionKey=new Uint8Array(s.buffer), i.blobEncryptionKey.byteLength===0&&(console.error("[composer] blobEncryptionKey is empty, regenerating"), i.blobEncryptionKey=crypto.getRandomValues(new Uint8Array(32)))
  }
  catch(s){
    console.error("[composer] Error deserializing blobEncryptionKey", s), i.blobEncryptionKey=crypto.getRandomValues(new Uint8Array(32))
  }
  else i.blobEncryptionKey instanceof Uint8Array?i.blobEncryptionKey.byteLength===0&&(console.error("[composer] blobEncryptionKey is empty, regenerating"), i.blobEncryptionKey=crypto.getRandomValues(new Uint8Array(32))):(console.error("[composer] blobEncryptionKey is not a Uint8Array (regenerating). Its type is: ", typeof i.blobEncryptionKey), i.blobEncryptionKey=crypto.getRandomValues(new Uint8Array(32)));
  else i.blobEncryptionKey=crypto.getRandomValues(new Uint8Array(32));
  i.fullConversationHeadersOnly=bNA(i.fullConversationHeadersOnly||[], 1e3), i._v<6?i.codeBlockData=Object.fromEntries(Object.entries(e.codeBlockData).map(([s, o])=>[s, o.map(a=>{
    a.version===0&&a.originalModelLines!==void 0&&(i.originalModelLines[s]=a.originalModelLines);
    let l=a.status;
    l==="generating"?l="aborted":l==="applying"&&(l="cancelled");
    const u=je.revive(a.uri);
    return{
      ...a,uri:u,status:l
    }
  })])):i.codeBlockData=Object.fromEntries(Object.entries(e.codeBlockData).map(([s, o])=>[s, Object.fromEntries(Object.entries(o).map(([a, l])=>{
    let u=l.status;
    u==="generating"?u="aborted":u==="applying"&&(u="cancelled");
    const d=je.revive(l.uri);
    return[a, {
      ...l,uri:d,status:u
    }
    ]
  }))])), i.newlyCreatedFiles=(i.newlyCreatedFiles||[]).map(s=>({
    ...s, uri:je.revive(s.uri)
  })), i.newlyCreatedFolders=(i.newlyCreatedFolders||[]).map(s=>({
    ...s, uri:je.revive(s.uri)
  })), i.gitCheckpoint&&(i.gitCheckpoint.inlineDiffNewlyCreatedResources.files=i.gitCheckpoint.inlineDiffNewlyCreatedResources.files.map(s=>je.revive(s)), i.gitCheckpoint.inlineDiffNewlyCreatedResources.folders=i.gitCheckpoint.inlineDiffNewlyCreatedResources.folders.map(s=>je.revive(s)));
  let r=i.status;
  if(r==="generating"&&(r="aborted"), i.status=r, i.hasLoaded=!1, i.allAttachedFileCodeChunksUris?i.allAttachedFileCodeChunksUris=new Set(Array.isArray(i.allAttachedFileCodeChunksUris)?i.allAttachedFileCodeChunksUris:[]):i.allAttachedFileCodeChunksUris=new Set, typeof i.conversationState=="string")try{
    const s=i.conversationState, o=s.startsWith("~")?Zj(s.slice(1)).buffer:Zne(s);
    i.conversationState=vk.fromBinary(o)
  }
  catch(s){
    console.error("[composer] Failed to deserialize conversationState:", s), i.conversationState=new vk
  }
  else i.conversationState=new vk;
  return i
}
function ANA(n){
  for(const e of n.capabilities)try{
    e.dispose()
  }
  catch(t){
    Sw(t, {
      tags:{
        client_error_type:"composer_capability_dispose_failure",force_upload:"forced"
      }
    })
  }
}
function ZNg(n, e){
  const{
    applied:t, appliedDiffs:i, composerId:r, name:s, text:o, richText:a, fullConversationHeadersOnly:l, status:u, lastUpdatedAt:d, createdAt:m, codeBlockData:p, hasChangedContext:g, browserChipManuallyDisabled:f, browserChipManuallyEnabled:A, capabilities:w, unifiedMode:C, browserConnection:x, originalFileStates:I, newlyCreatedFiles:B, newlyCreatedFolders:R, latestConversationSummary:N, dontShowSummarizeForLongChats:M, tokenCount:O, chatGenerationUUID:$, latestChatGenerationUUID:H, latestEventId:W, latestCheckpointId:z, currentBubbleId:Y, editingBubbleId:j, selectedBubbleId:X, usageData:ee, contextUsagePercent:re, contextTokensUsed:ne, contextTokenLimit:pe, allAttachedFileCodeChunksUris:le, modelConfig:he, todos:be, gitHubPromptDismissed:fe, createdFromBackgroundAgent:ke, gitCheckpoint:Se, subtitle:Fe, totalLinesAdded:De, totalLinesRemoved:Pe, filesChangedCount:Ne, isDraft:Oe, draftTarget:Ge, firstTodoWriteBubble:Le, gitWorktree:We, worktreeStartedReadOnly:tt, reservedWorktree:it, plan:bt, isSpec:Nt, isProject:ft, projectIcon:_t, isSpecSubagentDone:It, isBestOfNSubcomposer:sn, isBestOfNParent:Vt, selectedSubComposerId:Ft, bestOfNJudgeStatus:Xt, bestOfNJudgeWinner:bn, bestOfNJudgeReasoning:St, initialBestOfNAgentRequestId:Bt, subagentInfo:Jt, subComposerIds:Ot, subagentComposerIds:cn, speculativeSummarizationEncryptionKey:Mt, blobEncryptionKey:Pt, isNAL:ut, lastMessageSentOnBranch:ot, committedToBranch:Lt, createdOnBranch:Gt, prBranchName:jt, activeBranch:hn, branches:on, prUrl:en, planEditSnapshots:gt, conversationState:At, hasCorruptedCheckpoints:Tt, agentBackend:ze, agentBackendData:Yt, queueItems:kt, pluginFlowState:xt, _v:un
  }
  =n;
  let nn=n.context;
  const Dn=Object.fromEntries(Object.entries(p).map(([Si, Xi])=>[Si, Object.fromEntries(Object.entries(Xi).map(([Ji, qr])=>{
    let Ni=qr.status;
    return Ni==="generating"?Ni="aborted":Ni==="applying"&&(Ni="cancelled"), [Ji, {
      ...qr,status:Ni
    }
    ]
  }))])), Bn=!!ke?.shouldStreamMessages, Vn=u==="generating"&&!Bn?"aborted":u;
  nn={
    ...nn, terminalFiles:void 0
  };
  const Xn=l.filter((Si, Xi)=>{
    if(Bn){
      const Ji=n.agentSessionId!==void 0?ke?.kickoffMessageId:void 0;
      if(Ji!==void 0){
        const qr=l.findIndex(Ar=>Ar.bubbleId===Ji||Ar.serverBubbleId===Ji),Ni=qr!==-1&&Xi<=qr,Ii=Si.serverBubbleId!==void 0&&Si.serverBubbleId.length>0;
        return Ni||Ii
      }
      else return Si.serverBubbleId!==void 0&&Si.serverBubbleId.length>0
    }
    return!0
  }), hi=e?Object.fromEntries(Object.entries(I??{
    
  }).map(([Si, Xi])=>{
    const Ji=e.get(Si);
    if(Ji){
      const{
        content:qr,...Ni
      }
      =Xi;
      return[Si,{
        ...Ni,contentKey:Ji
      }
      ]
    }
    return[Si, Xi]
  })):I;
  return{
    ...K9(he), applied:t, appliedDiffs:i, composerId:r, name:s, text:o, richText:a, fullConversationHeadersOnly:Xn, status:Vn, lastUpdatedAt:d, createdAt:m, context:nn, codeBlockData:Dn, hasChangedContext:g, browserChipManuallyDisabled:f, browserChipManuallyEnabled:A, capabilities:w, unifiedMode:C, browserConnection:x, originalFileStates:hi, newlyCreatedFiles:B, newlyCreatedFolders:R, latestConversationSummary:N, dontShowSummarizeForLongChats:M, tokenCount:O, chatGenerationUUID:$, latestChatGenerationUUID:H, latestEventId:W, latestCheckpointId:z, currentBubbleId:Y, editingBubbleId:j, selectedBubbleId:X, forceMode:C==="agent"?"edit":C, isAgentic:C==="agent", usageData:ee, contextUsagePercent:re, contextTokensUsed:ne, contextTokenLimit:pe, allAttachedFileCodeChunksUris:Array.from(le||new Set), todos:be, gitHubPromptDismissed:fe, createdFromBackgroundAgent:ke, gitCheckpoint:Se, subtitle:Fe, totalLinesAdded:De, totalLinesRemoved:Pe, filesChangedCount:Ne, isDraft:Oe, draftTarget:Ge, firstTodoWriteBubble:Le, gitWorktree:We, worktreeStartedReadOnly:tt, reservedWorktree:it, plan:bt, isSpec:Nt, isProject:ft, projectIcon:_t, isSpecSubagentDone:It, isBestOfNSubcomposer:sn, isBestOfNParent:Vt, selectedSubComposerId:Ft, bestOfNJudgeStatus:Xt, bestOfNJudgeWinner:bn, bestOfNJudgeReasoning:St, initialBestOfNAgentRequestId:Bt, subagentInfo:Jt, subComposerIds:Ot, subagentComposerIds:cn, speculativeSummarizationEncryptionKey:Mt?VN(Ms.wrap(Mt)):void 0, blobEncryptionKey:Pt?VN(Ms.wrap(Pt)):void 0, isNAL:ut, lastMessageSentOnBranch:ot, committedToBranch:Lt, createdOnBranch:Gt, prBranchName:jt, activeBranch:hn, branches:on, prUrl:en, planEditSnapshots:gt, conversationState:"~"+VN(Ms.wrap(At.toBinary())), hasCorruptedCheckpoints:Tt, agentBackend:ze, agentBackendData:Yt, queueItems:kt, pluginFlowState:xt, _v:un
  }
}
function XNg(n, e){
  return JSON.stringify(ZNg(n, e))
}
function eMg(n, e, t, i, r, s){
  const o=K9({
    modelName:r.getModelConfig("composer").modelName, maxMode:r.getModelConfig("composer").maxMode
  }, n), a=K9({
    modelName:r.getModelConfig("composer").modelName, maxMode:r.getModelConfig("composer").maxMode
  }, e, "chat");
  s&&(o.isEphemeral=!0, a.isEphemeral=!0);
  const l=Promise.allSettled([kpa(o, t), kpa(a, t)]).then(()=>{
    
  });
  return[{
    allComposers:[r$e(o), r$e(a)], selectedComposerIds:[n], lastFocusedComposerIds:[n], hasMigratedComposerData:i, hasMigratedMultipleComposers:!0, selectedComposerHandles:{
      
    }
  }, l]
}
function yNA(n, e, t, i, r, s, o){
  const a=t.getWorkbenchState()===1, l=o&&a?1:a?-1:1;
  let u=n.get(s, l), d=!1, p={
    allComposers:[], selectedComposerIds:[], lastFocusedComposerIds:[], hasMigratedComposerData:d, hasMigratedMultipleComposers:!0, selectedComposerHandles:{
      
    }
  };
  const g=[];
  let f;
  if(u)try{
    let x=JSON.parse(u);
    if(x){
      const[I,B]=fNA(x,{
        workspaceContextService:t,storageService:n,reactiveStorageService:e,composerDataHandleManager:r,modelConfigService:i,isGlass:o
      });
      g.push(B),p=I;
      const N=Bh(n)?UJl:Vaa;
      if(p.selectedComposerIds.length>N){
        const M=p.lastFocusedComposerIds||[];
        p.selectedComposerIds=p.selectedComposerIds.sort((O,$)=>{
          const H=M.indexOf(O),W=M.indexOf($);
          return H!==-1&&W!==-1?H-W:H!==-1?-1:W!==-1?1:0
        }).slice(0,N)
      }
    }
    else throw new Error("[composer] No stored composers data found")
  }
  catch(x){
    console.error("[composer] Error parsing stored composers data:", x);
    const I=Wr();
    [p, f]=eMg(I, Wr(), n, d, i, o), g.push(f)
  }
  else{
    const x=Wr();
    [p, f]=eMg(x, Wr(), n, d, i, o), g.push(f)
  }
  const[A, w]=v3(p);
  return[A, w, ()=>{
    Sw(new Error("resetComposers called - wiping all composers"), {
      tags:{
        client_error_type:"resetComposers_called"
      },extra:{
        existingComposerCount:A.allComposers.length,existingSelectedCount:A.selectedComposerIds.length
      }
    });
    const x=Wr(), I=K9({
      modelName:i.getModelConfig("composer").modelName,maxMode:i.getModelConfig("composer").maxMode
    }, x), B=Wr(), R=K9({
      modelName:i.getModelConfig("composer").modelName,maxMode:i.getModelConfig("composer").maxMode
    }, B, "chat");
    return o&&(I.isEphemeral=!0, R.isEphemeral=!0), r.pushComposer(I), r.pushComposer(R), w("allComposers", [r$e(I), r$e(R)]), w("selectedComposerIds", [x]), I
  }, Promise.allSettled(g).then(()=>{
    
  })]
}
function wNA(n){
  const e=ZNg(n), t={
    
  };
  for(const[r, s]of Object.entries(n.conversationMap)){
    const o={
      type:s.type,text:s.text,thinking:s.thinking,toolFormerData:s.toolFormerData,capabilityType:s.capabilityType
    };
    t[r]=JSON.stringify({
      ...h_(),...lSt(o)
    })
  }
  const i={
    ...e, conversationMap:t
  };
  return JSON.stringify(i)
}
function lSt(n){
  if(n instanceof vk)return"~"+VN(Ms.wrap(n.toBinary()));
  if(n instanceof ie){
    if(n instanceof l5t&&n.result.case==="success"){
      const e=n.clone();
      return e.result.case==="success"&&(e.result.value.imageData=""),e.toJsonString()
    }
    return n.toJsonString()
  }
  else{
    if(Array.isArray(n))return n.map(e=>lSt(e));
    if(n!==null&&typeof n=="object"){
      if("toolFormerData"in n&&n.toolFormerData&&n.toolFormerData.tool===an.TASK_V2&&n.toolFormerData.additionalData&&"composerData"in n.toolFormerData.additionalData&&n.toolFormerData.additionalData.composerData&&typeof n.toolFormerData.additionalData.composerData=="object"){
        const{
          additionalData:t,...i
        }
        =n.toolFormerData,{
          composerData:r,...s
        }
        =t,{
          _capabilities:o,...a
        }
        =r,l=wNA(a),u={
          
        };
        for(const d in n)d in n&&(d==="toolFormerData"?u[d]={
          ...lSt(i),additionalData:{
            ...lSt(s),composerData:l
          }
        }
        :u[d]=lSt(n[d]));
        return u
      }
      const e={
        
      };
      for(const t in n)t in n&&(e[t]=lSt(n[t]));
      return e
    }
  }
  return n
}
function ptu(n){
  return!n.images||n.images.length===0?n:{
    ...n, images:n.images.map(({
      data:e,...t
    })=>t)
  }
}
function tMg(n){
  return ptu({
    ...n, toolResults:n.toolResults?.map(e=>ptu(e)), notepads:n.notepads?.map(e=>ptu(e))
  })
}
function nMg(n){
  if(!("toolFormerData"in n)||n.toolFormerData===void 0||n.toolFormerData.tool===void 0)return tMg({
    ...n
  });
  let e=wNg(n.toolFormerData);
  if(e.tool===an.TASK_V2&&"additionalData"in e&&e.additionalData&&"composerData"in e.additionalData&&e.additionalData.composerData&&"subagentComposerId"in e.additionalData&&e.additionalData.subagentComposerId){
    const t=e.additionalData, {
      composerData:i,...r
    }
    =t;
    e={
      ...e,additionalData:r
    }
  }
  return tMg({
    ...n, toolFormerData:e
  })
}
var iMg, Ibi, vhn=