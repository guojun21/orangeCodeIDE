// Module: out-build/vs/workbench/contrib/composer/browser/composerCapabilityMappings.js
// Offset: 26903247 (bundle byte offset)
// Size: 3438 bytes

Uv(), Jtt={
  [ko.UNSPECIFIED]:"", [ko.LOOP_ON_LINTS]:"", [ko.LOOP_ON_TESTS]:"Loop on Tests", [ko.MEGA_PLANNER]:"Mega Planner", [ko.LOOP_ON_COMMAND]:"Loop on Command", [ko.TOOL_CALL]:"Tool Call", [ko.DIFF_REVIEW]:"Review Changes", [ko.CONTEXT_PICKING]:"Context Picking", [ko.EDIT_TRAIL]:"Edit Trail", [ko.AUTO_CONTEXT]:"", [ko.CONTEXT_PLANNER]:"Context Planner", [ko.DIFF_HISTORY]:"Diff History", [ko.REMEMBER_THIS]:"Remember This", [ko.USES_CODEBASE]:"Uses Codebase", [ko.DECOMPOSER]:"", [ko.ONLINE_METRICS]:"", [ko.TOOL_FORMER]:"Tool Former", [ko.CURSOR_RULES]:"Cursor Rules", [ko.TOKEN_COUNTER]:"", [ko.SUMMARIZATION]:"Summarization", [ko.USAGE_DATA]:"Usage Data", [ko.CHIMES]:"Chimes", [ko.NOTIFICATIONS]:"Notifications", [ko.BACKGROUND_COMPOSER]:"Background Composer", [ko.CODE_DECAY_TRACKER]:"", [ko.QUEUING]:"Queuing", [ko.AI_CODE_TRACKING]:"", [ko.MEMORIES]:"Memories", [ko.RCP_LOGS]:"", [ko.KNOWLEDGE_FETCH]:"", [ko.SLACK_INTEGRATION]:"Slack Integration", [ko.SUB_COMPOSER]:"Sub Composer", [ko.THINKING]:"Thinking", [ko.CONTEXT_WINDOW]:"Context Window", [ko.SPEC]:"", [ko.BROWSER_AGENT]:""
}, Onu={
  bubbleDataMap:{
    label:"Bubble Data Map", type:"string", defaultValue:"{}", description:"Map of bubble IDs to their associated data", order:2
  }
}, Unu={
  [ko.UNSPECIFIED]:{
    
  }, [ko.LOOP_ON_LINTS]:{
    
  }, [ko.LOOP_ON_TESTS]:{
    
  }, [ko.MEGA_PLANNER]:{
    
  }, [ko.LOOP_ON_COMMAND]:{
    
  }, [ko.TOOL_CALL]:{
    
  }, [ko.DIFF_REVIEW]:{
    
  }, [ko.CONTEXT_PICKING]:{
    
  }, [ko.EDIT_TRAIL]:{
    
  }, [ko.AUTO_CONTEXT]:{
    
  }, [ko.CONTEXT_PLANNER]:{
    
  }, [ko.DIFF_HISTORY]:{
    
  }, [ko.REMEMBER_THIS]:{
    
  }, [ko.USES_CODEBASE]:{
    
  }, [ko.DECOMPOSER]:{
    
  }, [ko.TOOL_FORMER]:Onu, [ko.CURSOR_RULES]:{
    
  }, [ko.TOKEN_COUNTER]:{
    
  }, [ko.SUMMARIZATION]:{
    
  }, [ko.USAGE_DATA]:{
    
  }, [ko.CHIMES]:{
    
  }, [ko.NOTIFICATIONS]:{
    
  }, [ko.BACKGROUND_COMPOSER]:{
    
  }, [ko.CODE_DECAY_TRACKER]:{
    
  }, [ko.AI_CODE_TRACKING]:{
    
  }, [ko.QUEUING]:{
    
  }, [ko.MEMORIES]:{
    
  }, [ko.RCP_LOGS]:{
    
  }, [ko.KNOWLEDGE_FETCH]:{
    
  }, [ko.SLACK_INTEGRATION]:{
    
  }, [ko.SUB_COMPOSER]:{
    
  }, [ko.THINKING]:{
    
  }, [ko.CONTEXT_WINDOW]:{
    
  }, [ko.ONLINE_METRICS]:{
    
  }, [ko.SPEC]:{
    
  }, [ko.BROWSER_AGENT]:{
    
  }
}
}
});
function b2A(n){
  const e={
    
  };
  for(const t in n){
    const i=n[t];
    "defaultValue"in i&&(e[t]=i.defaultValue)
  }
  return e
}
function ace(n, e){
  $nu.registerCapability(n, e)
}
function cce(n, e, t){
  return $nu.getCapabilities(n, e, t)
}
function v2A(n){
  return n.filter(e=>e.isEnabled)
}
function A2A(n){
  return n.sort((e, t)=>e.priority-t.priority)
}
function y2A(n){
  return A2A(v2A(n))
}
function w2A(n, e, t){
  const i=Array.isArray(e)?e:[e];
  if(i.includes("chat-stream-finished")&&!("aiBubbleId"in t))throw new Error("[composer] chat-stream-finished status requires an aiBubbleId");
  return n.filter(s=>!s.isEnabled()||!s.isEnabledForRequest()?!1:i.some(o=>{
    switch(o){
      case"start-submit-chat":return!!s.onStartSubmitChatReturnShouldStop&&s.shouldRunOnStartSubmitChat();
      case"before-submit-chat":return!!s.onBeforeSubmitChat&&s.shouldRunOnBeforeSubmitChat();
      case"chat-stream-finished":return!!s.onChatStreamFinished&&s.shouldRunOnChatStreamFinished();
      case"before-apply":return!!s.onBeforeApply;
      case"after-apply":return!!s.onAfterApply;
      case"accept-all-edits":return!!s.onAcceptAllEdits&&s.shouldRunOnAcceptAllEdits();
      case"composer-done":return!!s.onComposerDone&&s.shouldRunOnComposerDone();
      case"add-pending-action":return!!s.onAddPendingAction&&s.shouldRunOnAddPendingAction();
      default:return!1
    }
  }))
}
function lR(n){
  return lt(n)
}
function _2A(n){
  return v3(n)
}
function ESt(n){
  return ZC(n)
}
var GFg, C2A, evi, Pq, $nu, SI=