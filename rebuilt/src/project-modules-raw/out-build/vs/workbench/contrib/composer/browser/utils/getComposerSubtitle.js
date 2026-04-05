// Module: out-build/vs/workbench/contrib/composer/browser/utils/getComposerSubtitle.js
// Offset: 25596637 (bundle byte offset)
// Size: 5889 bytes

Ti(), cv(), Vg(), Hl(), bNe="New chat"
}
});
function Bdn(n, e){
  const i=n.split(`
`)[0]?.trim()||"";
  return(i.startsWith("#")?i.slice(1).trim():i)||e||"Untitled Plan"
}
function r$e(n){
  let e;
  if(n.plan){
    const s=n.plan.content||"", o=Bdn(s, n.plan.name), a=n.plan.overview?n.plan.overview.replace(/\s+/g, " ").trim().slice(0, 120):"";
    e={
      title:o,overview:a,composerId:n.composerId
    }
  }
  const t=[], i=new Set, r=s=>{
    const o=je.from(s);
    if(o.scheme===_n.cursorPlan){
      const a=o.authority;
      if(a){
        const l=`composer:${a}`;
        i.has(l)||(i.add(l),t.push({
          type:"composer",composerId:a
        }))
      }
    }
    else if(o.scheme===_n.file&&o.path.includes(".cursor/plans/")){
      const a=`file:${o.toString()}`;
      i.has(a)||(i.add(a),t.push({
        type:"file",uri:o.toString()
      }))
    }
  };
  if(n.context?.fileSelections)for(const s of n.context.fileSelections){
    const o=s.uri;
    o&&r(o)
  }
  if(n.conversationMap){
    for(const s of Object.values(n.conversationMap))if(s.context?.fileSelections)for(const o of s.context.fileSelections){
      const a=o.uri;
      a&&r(a)
    }
  }
  return{
    type:"head", composerId:n.composerId, name:n.name, lastUpdatedAt:n.lastUpdatedAt, createdAt:n.createdAt, unifiedMode:n.unifiedMode, forceMode:n.forceMode, hasUnreadMessages:n.hasUnreadMessages, contextUsagePercent:n.contextUsagePercent, totalLinesAdded:n.totalLinesAdded, totalLinesRemoved:n.totalLinesRemoved, filesChangedCount:n.filesChangedCount, subtitle:n.subtitle, hasBlockingPendingActions:n.hasBlockingPendingActions, isArchived:!1, isDraft:n.isDraft, draftTarget:n.draftTarget, isWorktree:n.gitWorktree!==void 0||n.worktreeStartedReadOnly===!0, worktreeStartedReadOnly:n.worktreeStartedReadOnly, isSpec:n.isSpec, isProject:n.isProject, projectIcon:n.projectIcon, subagentInfo:n.subagentInfo, isBestOfNSubcomposer:n.isBestOfNSubcomposer, isEphemeral:n.isEphemeral, numSubComposers:n.subComposerIds?.length, createdFromBackgroundAgent:n.createdFromBackgroundAgent, authoredPlan:e, referencedPlans:t, prUrl:n.prUrl, prBranchName:n.prBranchName, committedToBranch:n.committedToBranch, lastMessageSentOnBranch:n.lastMessageSentOnBranch, createdOnBranch:n.createdOnBranch, activeBranch:n.activeBranch, branches:n.branches
  }
}
function OkA(n){
  return{
    modelName:n.modelName, maxMode:n.maxMode, selectedModels:n.selectedModels?.map(e=>({
      modelId:e.modelId,parameters:e.parameters.map(t=>({
        ...t
      }))
    }))
  }
}
function K9(n, e, t="agent"){
  return{
    _v:e_g, composerId:e??Wr(), richText:"", hasLoaded:!0, text:"", fullConversationHeadersOnly:[], conversationMap:{
      
    }, status:"none", context:sR(), generatingBubbleIds:[], chatGenerationUUID:void 0, isReadingLongFile:!1, codeBlockData:{
      
    }, originalFileStates:{
      
    }, newlyCreatedFiles:[], newlyCreatedFolders:[], lastUpdatedAt:void 0, createdAt:Date.now(), hasChangedContext:!1, activeTabsShouldBeReactive:!0, latestCheckpointId:void 0, currentBubbleId:void 0, editingBubbleId:void 0, editingQueueItemId:void 0, editingQueueItemSnapshot:void 0, lastFocusedBubbleId:void 0, capabilities:[], name:void 0, isFileListExpanded:!1, browserChipManuallyDisabled:!1, browserChipManuallyEnabled:!1, unifiedMode:t, forceMode:"edit", usageData:{
      
    }, contextUsagePercent:void 0, contextTokensUsed:void 0, contextTokenLimit:void 0, allAttachedFileCodeChunksUris:new Set, modelConfig:OkA(n), subComposerIds:[], subagentComposerIds:[], capabilityContexts:[], todos:[], latestTodoListId:void 0, isQueueExpanded:!0, hasUnreadMessages:!1, lastReadBubbleId:void 0, gitHubPromptDismissed:!1, createdFromBackgroundAgent:void 0, totalLinesAdded:0, totalLinesRemoved:0, addedFiles:0, removedFiles:0, isDraft:!1, analyticsMetadata:void 0, bugIds:void 0, plan:void 0, isCreatingWorktree:!1, isApplyingWorktree:!1, isUndoingWorktree:!1, applied:!1, pendingCreateWorktree:!1, worktreeStartedReadOnly:!1, isBestOfNSubcomposer:!1, isBestOfNParent:!1, bestOfNJudgeStatus:void 0, bestOfNJudgeWinner:!1, bestOfNJudgeReasoning:void 0, isSpec:!1, isProject:!1, isSpecSubagentDone:!1, isContinuationInProgress:!1, stopHookLoopCount:0, prBranchName:void 0, lastMessageSentOnBranch:void 0, committedToBranch:void 0, createdOnBranch:void 0, activeBranch:void 0, branches:[], speculativeSummarizationEncryptionKey:crypto.getRandomValues(new Uint8Array(32)), isNAL:!0, agentBackend:void 0, browserConnection:void 0, planModeSuggestionUsed:!1, debugModeSuggestionUsed:!1, conversationState:new vk, queueItems:[], blobEncryptionKey:crypto.getRandomValues(new Uint8Array(32))
  }
}
function Ywg(n, e, t){
  const i=n.trim(), r=Number.isFinite(e)?e:Date.now(), s={
    branchName:i, lastInteractionAt:r
  }, o=(t??[]).filter(l=>l&&typeof l.branchName=="string"&&l.branchName.trim().length>0&&l.branchName!==i), a=[s, ...o].sort((l, u)=>u.lastInteractionAt-l.lastInteractionAt);
  return{
    activeBranch:s, branches:a
  }
}
function Rdn(n, e){
  return!n||e.gitWorktree?e:{
    ...e, gitWorktree:{
      ...n
    }
  }
}
function Cua(n){
  if(n.createdFromBackgroundAgent?.bcId)return!1;
  const e=(n.context?.selectedImages?.length??0)>0;
  return n.fullConversationHeadersOnly.length===0&&n.text.trim()===""&&!e
}
function Vgi(n){
  const e=!!n.text&&n.text.trim().length>0, t=(n.context?.selectedImages?.length??0)>0;
  return n.name===void 0&&(e||t)&&n.fullConversationHeadersOnly.length===0
}
function Kgi(n){
  const e=n.text?.trim()||"";
  if(e.length>0)return e.split(`
`)[0]||e;
  const t=n.context?.selectedImages?.length??0;
  return t===1?"[Image]":t>1?`[${t} images]`:""
}
function UkA(n){
  return!r_g.has(n)
}
function Zwg(n){
  const{
    composerDataService:e, handle:t, conversation:i
  }
  =n;
  if(i.length===0)return[];
  const r=[];
  for(let s=i.length-1;
  s>=0;
  s--){
    const o=i[s];
    if(!o)continue;
    const a=e.getComposerBubble(t, o.bubbleId);
    if(!a||!a.toolFormerData||!(a.capabilityType===ko.TOOL_FORMER&&a.toolFormerData.tool===an.ASK_QUESTION))continue;
    const u=a.toolFormerData, d=u.params, m=u.additionalData, p=d?.runAsync===!0, g=m?.status==="submitted", f=!!m?.answerBubbleId, A=!!u.result;
    p&&g&&!f&&!A&&r.push({
      bubbleId:o.bubbleId,questionCount:d?.questions?.length??0,title:d?.title
    })
  }
  return r
}
var Vjl, Xwg, e_g, t_g, n_g, $kA, Kjl, Yjl, h_, i_g, qkA, HkA, Zjl, JkA, r_g, Pdn, s_g, o_g, GkA, WkA, QkA, jk=