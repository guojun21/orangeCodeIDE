// Module: out-build/vs/workbench/contrib/composer/browser/toolCallHumanReviewTypes.js
// Offset: 26584905 (bundle byte offset)
// Size: 14448 bytes

(function(n){
  n.NONE="None", n.REQUESTED="Requested", n.DONE="Done"
})(DA||(DA={
  
})), (function(n){
  n.EDIT="edit", n.TERMINAL="terminal", n.MCP="mcp", n.PLAN="plan", n.WEB_FETCH="web_fetch"
})(aV||(aV={
  
})), (function(n){
  n.USER="user", n.ALLOWLIST="allowlist", n.FULL_AUTO="full_auto", n.NONE="none"
})(phn||(phn={
  
})), (function(n){
  n.RUN="run", n.SKIP="skip", n.ALLOWLIST_COMMANDS="allowlistCommands", n.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY="rejectAndTellWhatToDoDifferently"
})(dD||(dD={
  
})), (function(n){
  n.RUN="run", n.SKIP="skip", n.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY="rejectAndTellWhatToDoDifferently", n.ALLOWLIST_TOOL="allowlistTool"
})(_I||(_I={
  
})), (function(n){
  n.ACCEPT="accept", n.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY="rejectAndTellWhatToDoDifferently", n.SKIP="skip", n.SWITCH_TO_DEFAULT_AGENT_MODE="switchToDefaultAgentMode", n.ACCEPT_AND_ALLOW_FOLDER="acceptAndAllowFolder"
})(n8||(n8={
  
})), (function(n){
  n.NONE="none", n.APPROVE="approve", n.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY="rejectAndTellWhatToDoDifferently", n.EDIT="edit"
})(cQ||(cQ={
  
})), (function(n){
  n.USER="user", n.ALLOWLIST="allowlist", n.FULL_AUTO="full_auto", n.NONE="none"
})(dtu||(dtu={
  
})), (function(n){
  n.RUN="run", n.SKIP="skip", n.ALLOWLIST_DOMAIN="allowlistDomain"
})(cV||(cV={
  
}))
}
});
function e4_(n){
  return n
}
function ZLA(n){
  return n&&n.detailedLines.length>0?new WB({
    ...n, contents:""
  }):n
}
function XLA(n){
  return n&&!n.contents&&n.detailedLines.length>0?new WB({
    ...n, contents:n.detailedLines.map(e=>e.text).join(`
`)
  }):n
}
function bNg(n){
  return n.map(e=>new zR({
    ...e, codeBlock:ZLA(e.codeBlock)
  }))
}
function vNg(n){
  return n.map(e=>new zR({
    ...e, codeBlock:XLA(e.codeBlock)
  }))
}
function ANg(n){
  const e=n.tool, {
    params:t, result:i
  }
  =(()=>{
    switch(e){
      case an.RUN_TERMINAL_COMMAND_V2:return{
        params:n.params?UKe.fromJsonString(n.params):void 0,result:n.result?rhe.fromJsonString(n.result):void 0
      };
      case an.READ_SEMSEARCH_FILES:{
        const l=n.result?S5t.fromJsonString(n.result):void 0;
        return l&&(l.codeResults=vNg(l.codeResults)),{
          params:n.params?_5t.fromJsonString(n.params):void 0,result:l
        }
      }
      case an.FILE_SEARCH:return{
        params:n.params?v9n.fromJsonString(n.params):void 0,result:n.result?p8o.fromJsonString(n.result):void 0
      };
      case an.EDIT_FILE:return{
        params:n.params?g5t.fromJsonString(n.params):void 0,result:n.result?f9n.fromJsonString(n.result):void 0
      };
      case an.EDIT_FILE_V2:return{
        params:n.params?ihe.fromJsonString(n.params):void 0,result:n.result?MRe.fromJsonString(n.result):void 0
      };
      case an.LIST_DIR:return{
        params:n.params?A9n.fromJsonString(n.params):void 0,result:n.result?v5t.fromJsonString(n.result):void 0
      };
      case an.READ_FILE:return{
        params:n.params?y9n.fromJsonString(n.params):void 0,result:n.result?w9n.fromJsonString(n.result):void 0
      };
      case an.RIPGREP_SEARCH:return{
        params:n.params?_9n.fromJsonString(n.params):void 0,result:n.result?f8o.fromJsonString(n.result):void 0
      };
      case an.RIPGREP_RAW_SEARCH:return{
        params:n.params?L5t.fromJsonString(n.params):void 0,result:n.result?F9n.fromJsonString(n.result):void 0
      };
      case an.SEMANTIC_SEARCH_FULL:{
        const l=n.result?E5t.fromJsonString(n.result):void 0;
        return l&&(l.codeResults=vNg(l.codeResults)),{
          params:n.params?k5t.fromJsonString(n.params):void 0,result:l
        }
      }
      case an.DELETE_FILE:return{
        params:n.params?FKe.fromJsonString(n.params):void 0,result:n.result?OKe.fromJsonString(n.result):void 0
      };
      case an.REAPPLY:return{
        params:n.params?p9n.fromJsonString(n.params):void 0,result:n.result?d8o.fromJsonString(n.result):void 0
      };
      case an.UNSPECIFIED:return{
        params:void 0,result:void 0
      };
      case an.FETCH_RULES:return{
        params:n.params?g9n.fromJsonString(n.params):void 0,result:n.result?h8o.fromJsonString(n.result):void 0
      };
      case an.WEB_SEARCH:return{
        params:n.params?Hbt.fromJsonString(n.params):void 0,result:n.result?Jbt.fromJsonString(n.result):void 0
      };
      case an.WEB_FETCH:return{
        params:n.params?WKe.fromJsonString(n.params):void 0,result:n.result?q5t.fromJsonString(n.result):void 0
      };
      case an.MCP:return{
        params:n.params?Gbt.fromJsonString(n.params):void 0,result:n.result?I5t.fromJsonString(n.result):void 0
      };
      case an.SEARCH_SYMBOLS:return{
        params:n.params?I9n.fromJsonString(n.params):void 0,result:n.result?x8o.fromJsonString(n.result):void 0
      };
      case an.BACKGROUND_COMPOSER_FOLLOWUP:return{
        params:n.params?D9n.fromJsonString(n.params):void 0,result:n.result?T8o.fromJsonString(n.result):void 0
      };
      case an.KNOWLEDGE_BASE:return{
        params:n.params?B9n.fromJsonString(n.params):void 0,result:n.result?I8o.fromJsonString(n.result):void 0
      };
      case an.FETCH_PULL_REQUEST:return{
        params:n.params?R9n.fromJsonString(n.params):void 0,result:n.result?D8o.fromJsonString(n.result):void 0
      };
      case an.DEEP_SEARCH:return{
        params:n.params?P9n.fromJsonString(n.params):void 0,result:n.result?R8o.fromJsonString(n.result):void 0
      };
      case an.FIX_LINTS:return{
        params:n.params?N9n.fromJsonString(n.params):void 0,result:n.result?L8o.fromJsonString(n.result):void 0
      };
      case an.READ_LINTS:return{
        params:n.params?P5t.fromJsonString(n.params):void 0,result:n.result?M9n.fromJsonString(n.result):void 0
      };
      case an.CREATE_DIAGRAM:return{
        params:n.params?L9n.fromJsonString(n.params):void 0,result:n.result?P8o.fromJsonString(n.result):void 0
      };
      case an.GO_TO_DEFINITION:return{
        params:n.params?x5t.fromJsonString(n.params):void 0,result:n.result?k9n.fromJsonString(n.result):void 0
      };
      case an.TASK:case an.AWAIT_TASK:return{
        params:void 0,result:void 0
      };
      case an.TODO_READ:return{
        params:n.params?W9n.fromJsonString(n.params):void 0,result:n.result?$8o.fromJsonString(n.result):void 0
      };
      case an.TODO_WRITE:return{
        params:n.params?Wbt.fromJsonString(n.params):void 0,result:n.result?HKe.fromJsonString(n.result):void 0
      };
      case an.LIST_DIR_V2:return{
        params:n.params?M5t.fromJsonString(n.params):void 0,result:n.result?F5t.fromJsonString(n.result):void 0
      };
      case an.READ_FILE_V2:return{
        params:n.params?Qbt.fromJsonString(n.params):void 0,result:n.result?O9e.fromJsonString(n.result):void 0
      };
      case an.GLOB_FILE_SEARCH:return{
        params:n.params?O5t.fromJsonString(n.params):void 0,result:n.result?Q9n.fromJsonString(n.result):void 0
      };
      case an.LIST_MCP_RESOURCES:return{
        params:n.params?D5t.fromJsonString(n.params):void 0,result:n.result?x9n.fromJsonString(n.result):void 0
      };
      case an.READ_MCP_RESOURCE:return{
        params:n.params?B5t.fromJsonString(n.params):void 0,result:n.result?R5t.fromJsonString(n.result):void 0
      };
      case an.CREATE_PLAN:return{
        params:n.params?JKe.fromJsonString(n.params):void 0,result:n.result?jbt.fromJsonString(n.result):void 0
      };
      case an.READ_PROJECT:return{
        params:n.params?j9n.fromJsonString(n.params):void 0,result:n.result?J8o.fromJsonString(n.result):void 0
      };
      case an.UPDATE_PROJECT:return{
        params:n.params?z9n.fromJsonString(n.params):void 0,result:n.result?G8o.fromJsonString(n.result):void 0
      };
      case an.TASK_V2:return{
        params:n.params?$Ke.fromJsonString(n.params):void 0,result:n.result?qKe.fromJsonString(n.result):void 0
      };
      case an.CALL_MCP_TOOL:return{
        params:n.params?T9n.fromJsonString(n.params):void 0,result:n.result?E8o.fromJsonString(n.result):void 0
      };
      case an.APPLY_AGENT_DIFF:return{
        params:n.params?m5t.fromJsonString(n.params):void 0,result:n.result?B5n.fromJsonString(n.result):void 0
      };
      case an.ASK_QUESTION:return{
        params:n.params?oke.fromJsonString(n.params):void 0,result:n.result?zY.fromJsonString(n.result):void 0
      };
      case an.SWITCH_MODE:return{
        params:n.params?GKe.fromJsonString(n.params):void 0,result:n.result?U5t.fromJsonString(n.result):void 0
      };
      case an.GENERATE_IMAGE:return{
        params:n.params?L5n.fromJsonString(n.params):void 0,result:n.result?l5t.fromJsonString(n.result):void 0
      };
      case an.COMPUTER_USE:return{
        params:n.params?zbt.fromJsonString(n.params):void 0,result:n.result?$5t.fromJsonString(n.result):void 0
      };
      case an.WRITE_SHELL_STDIN:return{
        params:n.params?N9e.fromJsonString(n.params):void 0,result:n.result?Nbt.fromJsonString(n.result):void 0
      };
      case an.RECORD_SCREEN:return{
        params:n.params?LKe.fromJsonString(n.params):void 0,result:n.result?c5t.fromJsonString(n.result):void 0
      };
      case an.REPORT_BUGFIX_RESULTS:return{
        params:n.params?H5t.fromJsonString(n.params):void 0,result:n.result?z8o.fromJsonString(n.result):void 0
      };
      case an.AI_ATTRIBUTION:return{
        params:n.params?qRc.fromJsonString(n.params):void 0,result:n.result?Z9o.fromJsonString(n.result):void 0
      };
      case an.MCP_AUTH:return{
        params:n.params?Vbt.fromJsonString(n.params):void 0,result:n.result?V9n.fromJsonString(n.result):void 0
      };
      case an.AWAIT:return{
        params:void 0,result:void 0
      };
      case an.REFLECT:return{
        params:void 0,result:void 0
      };
      default:throw new Error(`Parsing unknown tool: ${e}`)
    }
  })();
  let r;
  if(n.toolCallBinary)try{
    const l=Zj(n.toolCallBinary);
    r=lN.fromBinary(l.buffer)
  }
  catch(l){
    console.warn("Failed to deserialize toolCall from binary:", l)
  }
  const{
    toolCallBinary:s, ...o
  }
  =n, a={
    ...o, params:t, result:i, error:n.error?ske.fromJsonString(n.error):void 0, toolCall:r
  };
  if(e===an.TASK_V2&&a.additionalData){
    const l=a.additionalData;
    if(l.composerData&&typeof l.composerData=="string"){
      const u=JSON.parse(l.composerData),d=YNg(l.composerData);
      if(u.conversationMap){
        const m={
          
        };
        for(const[p,g]of Object.entries(u.conversationMap)){
          const f=JSON.parse(g);
          m[p]=Epa(f)
        }
        d.conversationMap=m
      }
      a.additionalData.composerData=d
    }
  }
  return a
}
function yNg(n){
  n.status==="loading"&&(n.status="cancelled");
  const e=wNg(n, {
    forStorage:!1
  });
  return n.params=e.params, n.result=e.result, n.additionalData=e.additionalData, n
}
function eNA(n){
  switch(n.tool.case){
    case"editToolCall":{
      if(n.tool.value.result?.result.case==="success"){
        const t=n.clone(),i=t.tool.value;
        return i.args&&(i.args.streamContent=void 0),i.result?.result.case==="success"&&(i.result.result.value.beforeFullFileContent=void 0,i.result.result.value.afterFullFileContent="",i.result.result.value.diffString=void 0),t
      }
      return n
    }
    case"readToolCall":{
      const e=n.tool.value;
      if(e.result?.result.case==="success"&&e.result.result.value.output.case==="content"){
        const i=n.clone(),s=i.tool.value.result.result.value;
        return s.output={
          case:"content",value:""
        },i
      }
      return n
    }
    default:return n
  }
}
function wNg(n, e){
  const t=e?.forStorage??!0, i={
    ...n
  }, r=i.tool;
  switch(r){
    case an.RUN_TERMINAL_COMMAND_V2:if(i.additionalData!==void 0){
      const s=i.additionalData.status;
      if(!(i.additionalData.reviewData?.status===DA.REQUESTED)&&(s==="pending"||s==="loading"||s==="running")){
        const u=i.additionalData.reviewData;
        i.additionalData={
          ...i.additionalData,status:"cancelled",...u?{
            reviewData:{
              ...u,status:DA.NONE
            }
          }
          :{
            
          }
        }
      }
    }
    break;
    case an.READ_SEMSEARCH_FILES:if(i.result){
      const s=i.result;
      i.result=new S5t({
        ...s,allFiles:[],codeResults:t?bNg(s.codeResults):s.codeResults
      })
    }
    break;
    case an.SEMANTIC_SEARCH_FULL:if(i.result){
      const s=i.result;
      i.result=new E5t({
        ...s,allFiles:[],codeResults:t?bNg(s.codeResults):s.codeResults
      })
    }
    break;
    case an.READ_FILE:i.result&&(i.result=new w9n({
      ...i.result,fullFileContents:void 0
    }));
    break;
    case an.MCP:if(i.additionalData!==void 0){
      const s=i.additionalData.status;
      if(s==="pending"||s==="loading"||s==="running"){
        const o=i.additionalData.reviewData;
        i.additionalData={
          ...i.additionalData,status:"cancelled",...o?{
            reviewData:{
              ...o,status:DA.NONE
            }
          }
          :{
            
          }
        }
      }
    }
    break;
    case an.RIPGREP_RAW_SEARCH:if(i.result){
      const s=i.result,o=tNA(s,i.params);
      o&&(i.result=void 0,i.additionalData=o)
    }
    break;
    case an.LIST_DIR_V2:if(i.result){
      const s=i.result,o=nNA(s);
      o&&(i.result=void 0,i.additionalData=o)
    }
    break;
    case an.EDIT_FILE:case an.EDIT_FILE_V2:{
      const s=i;
      if(s.additionalData!==void 0){
        const o=s.additionalData.reviewData;
        o?.status===DA.REQUESTED&&(s.additionalData={
          ...s.additionalData,reviewData:{
            ...o,status:DA.NONE
          }
        })
      }
      break
    }
    case an.LIST_DIR:case an.RIPGREP_SEARCH:case an.FILE_SEARCH:case an.DELETE_FILE:case an.REAPPLY:case an.FETCH_RULES:case an.WEB_SEARCH:case an.WEB_FETCH:case an.SEARCH_SYMBOLS:case an.BACKGROUND_COMPOSER_FOLLOWUP:case an.KNOWLEDGE_BASE:case an.FETCH_PULL_REQUEST:case an.DEEP_SEARCH:case an.FIX_LINTS:case an.TASK:case an.AWAIT_TASK:case an.READ_LINTS:case an.CREATE_DIAGRAM:case an.GO_TO_DEFINITION:case an.TODO_READ:case an.TODO_WRITE:case an.READ_FILE_V2:case an.GLOB_FILE_SEARCH:case an.CREATE_PLAN:case an.READ_PROJECT:case an.UPDATE_PROJECT:case an.TASK_V2:case an.ASK_QUESTION:case an.SWITCH_MODE:case an.LIST_MCP_RESOURCES:case an.READ_MCP_RESOURCE:case an.CALL_MCP_TOOL:case an.APPLY_AGENT_DIFF:case an.UNSPECIFIED:case an.GENERATE_IMAGE:case an.COMPUTER_USE:case an.WRITE_SHELL_STDIN:case an.RECORD_SCREEN:case an.REPORT_BUGFIX_RESULTS:case an.AI_ATTRIBUTION:case an.MCP_AUTH:case an.AWAIT:case an.REFLECT:break;
    default:throw new Error(`Parsing unknown tool: ${r}`)
  }
  if(t&&i.toolCall)try{
    const o=eNA(i.toolCall).toBinary(), a=VN(Ms.wrap(o));
    i.toolCallBinary=a, delete i.toolCall
  }
  catch(s){
    console.warn("Failed to serialize toolCall to binary:", s)
  }
  return i
}
function tNA(n, e){
  if(n.result.case!=="success")return;
  const t=n.result.value, i=[];
  let r=0, s=0;
  for(const[o, a]of Object.entries(t.workspaceResults))if(a.result.case==="count"){
    const l=a.result.value;
    r+=l.totalFiles, s+=l.totalMatches;
    for(const u of l.counts.slice(0, 20-i.length)){
      if(i.length>=20)break;
      i.push({
        uri:u.file,matchCount:u.count
      })
    }
  }
  else if(a.result.case==="files"){
    const l=a.result.value;
    r+=l.totalFiles, s+=l.totalFiles;
    for(const u of l.files?.slice(0, 20-i.length)??[]){
      if(i.length>=20)break;
      i.push({
        uri:u,matchCount:1
      })
    }
    for(const u of l.filesWithMeta?.slice(0, 20-i.length)??[]){
      if(i.length>=20)break;
      i.push({
        uri:u.file,matchCount:1
      })
    }
  }
  else if(a.result.case==="content"){
    const l=a.result.value;
    r+=l.matches.length, s+=l.totalMatchedLines;
    for(const u of l.matches.slice(0, 20-i.length)){
      if(i.length>=20)break;
      i.push({
        uri:u.file,matchCount:u.matches.length
      })
    }
  }
  if(t.activeEditorResult){
    const o=t.activeEditorResult;
    if(o.result.case==="count"){
      const a=o.result.value;
      r+=a.totalFiles,s+=a.totalMatches
    }
    else if(o.result.case==="files"){
      const a=o.result.value;
      r+=a.totalFiles,s+=a.totalFiles
    }
    else if(o.result.case==="content"){
      const a=o.result.value;
      r+=a.matches.length,s+=a.totalMatchedLines
    }
  }
  return{
    isPruned:!0, pattern:t.pattern, path:t.path||void 0, outputMode:t.outputMode, totalFiles:r, totalMatches:s, topFiles:i
  }
}
function nNA(n){
  const e=n.directoryTreeRoot;
  if(!e)return;
  const t=[];
  let i=0, r=0;
  function s(l){
    if(l){
      i+=l.childrenDirs?.length??0,r+=l.childrenFiles?.length??0;
      for(const u of l.childrenDirs??[])s(u)
    }
  }
  s(e);
  const o={
    ...e.fullSubtreeExtensionCounts
  }, a=100;
  for(const l of e.childrenDirs??[]){
    if(t.length>=a)break;
    t.push({
      path:l.absPath,isDir:!0,numFiles:l.numFiles
    })
  }
  for(const l of e.childrenFiles??[]){
    if(t.length>=a)break;
    t.push({
      path:`${e.absPath}/${l.name}`,isDir:!1
    })
  }
  return{
    isPruned:!0, rootPath:e.absPath, totalDirs:i, totalFiles:r, topEntries:t, extensionCounts:o
  }
}
var _Ng=