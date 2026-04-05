// Module: out-build/vs/workbench/contrib/composer/browser/utils/planFileUtils.js
// Offset: 26614639 (bundle byte offset)
// Size: 13852 bytes

Yn(), Ql(), zr(), Yr()
}
});
function uNA(n){
  const e=new Date(n||0), t=new Date, i=new Date(t);
  i.setDate(i.getDate()-1);
  const r=new Date(t.getTime()-10080*60*1e3);
  return e.toDateString()===t.toDateString()?"Today":e.toDateString()===i.toDateString()?"Yesterday":e>r?"This week":"Older"
}
function dNA(n, e, t, i){
  const r=l=>{
    if(i?.has(l.composerId))return!0;
    const u=e.getHandleIfLoaded_MIGRATED(l.composerId), d=u?e.getPendingUserDecisionGroup(u):[];
    return l?.hasBlockingPendingActions||d.some(p=>p.clientSideTool===an.RUN_TERMINAL_COMMAND_V2)?!0:u?e.getIsBlockingUserDecision(u):!1
  }, s=l=>l?!!e.getComposerDataIfLoaded(l)?.applied:!1, a=e.getComposerDataIfLoaded(n.composerId)?.subComposerIds??[];
  if(s(n.composerId))return!1;
  for(const l of a)if(s(l))return!1;
  if(n.hasBlockingPendingActions||r(n))return!0;
  if(a.length>=1)for(const l of a){
    const u=sc(()=>e.allComposersData.allComposers.find(d=>d.composerId===l));
    if(u&&r(u))return!0
  }
  return!1
}
function HNg(n){
  const e=new Set, t=new Set(n.loadedComposers.ids);
  return sc(()=>{
    for(const i of n.allComposersData.allComposers){
      const r=i.composerId;
      if(t.has(r)){
        const s=n.getHandleIfLoaded_MIGRATED(r);
        s&&n.getIsBlockingUserDecision(s)&&e.add(r)
      }
      else i.hasBlockingPendingActions&&e.add(r)
    }
  }), e
}
function JNg(n, e){
  try{
    const t=e.getComposerDataIfLoaded(n.composerId);
    return!t||t.status==="aborted"?!1:t.status==="generating"?!0:Object.values(t.codeBlockData??{
      
    }).some(r=>Object.values(r).some(s=>s.status==="applying"&&!s.isNotApplied))
  }
  catch{
    return!1
  }
}
function fhn(n){
  return`bubble-${n.split("-").pop()}`
}
function aSt(n){
  const e=$c().document.getElementById(fhn(n));
  e&&e.focus()
}
async function cSt(n, e="global"){
  const t=n.experimentService.checkFeatureGate("show_modal_to_suggest_hiding_inline_diffs"), i=n.diffDecorationVisibilityService.getNoInlineDiffsSetting(), r=n.storageService.getBoolean(mtu, -1, !1);
  if(t&&!i&&!r){
    if(n.storageService.store(mtu, !0, -1, 0), e==="composer"){
      n.composerNotificationService.showNotification({
        type:_S.NoInlineDiffsSuggestion,priority:xNe.ACTION
      });
      return
    }
    n.notificationService.prompt(Rs.Info, "Disable Inline Diffs: Enable auto-keep to have changes be updated automatically. You can also do this later in Cursor Settings.", [{
      label:"Enable auto-keep",run:()=>{
        n.diffDecorationVisibilityService.setNoInlineDiffsSetting(!0)
      }
    }
    ])
  }
}
function GNg(n){
  const e=n.activeGroup;
  if(!e)return null;
  const t=n.findGroup({
    direction:2
  }, e), i=n.findGroup({
    direction:3
  }, e), r=n.findGroup({
    direction:1
  }, e), s=[t, i, r], o=hCt(s);
  if(o)return o;
  const a=hCt(n.mainPart.getGroups(1), e.id);
  return a||(mCt(s)??null)
}
function Sbi(){
  let n="abcdefghijklmnopqrstuvwxyz", e="";
  for(let t=0;
  t<10;
  t++)e+=n.charAt(Math.floor(Math.random()*n.length));
  return e
}
function WNg(n){
  return[...n].sort((e, t)=>{
    const i=e.lastUpdatedAt??e.createdAt;
    return(t.lastUpdatedAt??t.createdAt)-i
  })
}
function hNA(n){
  if(n.unifiedMode===void 0){
    const e=n;
    n.unifiedMode=e.isAgentic?"agent":e.forceMode??"edit"
  }
  return n.unifiedMode==="background"&&(n.unifiedMode="agent"), n.forceMode===void 0&&(n.forceMode=n.unifiedMode==="chat"?"chat":"edit"), n
}
function kbi(n, e=!1){
  const t=Math.floor((Date.now()-n)/1e3);
  return t<60?"Now":t<3600?`${Math.floor(t/60)}m${e?" ago":""}`:t<86400?`${Math.floor(t/3600)}h${e?" ago":""}`:t<604800?`${Math.floor(t/86400)}d${e?" ago":""}`:t<2592e3?`${Math.floor(t/604800)}w${e?" ago":""}`:t<31536e3?`${Math.floor(t/2592e3)}mo${e?" ago":""}`:`${Math.floor(t/31536e3)}y${e?" ago":""}`
}
function mNA(n){
  return n.length<=lGl?n.length:lGl
}
function QNg(n){
  const e=[];
  let t={
    startIndex:0, kind:ul.HUMAN, messages:[]
  }, i;
  for(let r=0;
  r<n.length;
  r++){
    const s=n[r];
    i!==void 0&&s.type===ul.HUMAN&&(e.push([t, i]), t={
      startIndex:r,kind:ul.HUMAN,messages:[]
    }, i=void 0), s.type===ul.HUMAN?t.messages.push(s):s.type===ul.AI&&(i===void 0&&(i={
      startIndex:r,kind:ul.AI,messages:[]
    }), i.messages.push(s))
  }
  return i===void 0&&(i={
    startIndex:n.length, kind:ul.AI, messages:[]
  }), e.push([t, i]), e
}
function Ebi(n){
  switch(n){
    case an.READ_SEMSEARCH_FILES:return"readSemsearchFilesParams";
    case an.RIPGREP_SEARCH:return"ripgrepSearchParams";
    case an.RIPGREP_RAW_SEARCH:return"ripgrepRawSearchParams";
    case an.FILE_SEARCH:return"fileSearchParams";
    case an.RUN_TERMINAL_COMMAND_V2:return"runTerminalCommandV2Params";
    case an.FETCH_RULES:return"fetchRulesParams";
    case an.READ_FILE:return"readFileParams";
    case an.LIST_DIR:return"listDirParams";
    case an.EDIT_FILE:return"editFileParams";
    case an.SEMANTIC_SEARCH_FULL:return"semanticSearchFullParams";
    case an.DELETE_FILE:return"deleteFileParams";
    case an.REAPPLY:return"reapplyParams";
    case an.WEB_SEARCH:return"webSearchParams";
    case an.WEB_FETCH:return"webFetchParams";
    case an.MCP:return"mcpParams";
    case an.SEARCH_SYMBOLS:return"searchSymbolsParams";
    case an.KNOWLEDGE_BASE:return"knowledgeBaseParams";
    case an.BACKGROUND_COMPOSER_FOLLOWUP:return"backgroundComposerFollowupParams";
    case an.FETCH_PULL_REQUEST:return"fetchPullRequestParams";
    case an.DEEP_SEARCH:return"deepSearchParams";
    case an.CREATE_DIAGRAM:return"createDiagramParams";
    case an.UNSPECIFIED:case an.AWAIT:return;
    case an.FIX_LINTS:return"fixLintsParams";
    case an.READ_LINTS:return"readLintsParams";
    case an.GO_TO_DEFINITION:return"gotodefParams";
    case an.TASK:case an.AWAIT_TASK:return;
    case an.TODO_READ:return"todoReadParams";
    case an.TODO_WRITE:return"todoWriteParams";
    case an.EDIT_FILE_V2:return"editFileV2Params";
    case an.LIST_DIR_V2:return"listDirV2Params";
    case an.READ_FILE_V2:return"readFileV2Params";
    case an.GLOB_FILE_SEARCH:return"globFileSearchParams";
    case an.LIST_MCP_RESOURCES:return"listMcpResourcesParams";
    case an.READ_MCP_RESOURCE:return"readMcpResourceParams";
    case an.CALL_MCP_TOOL:return"callMcpToolParams";
    case an.CREATE_PLAN:return"createPlanParams";
    case an.READ_PROJECT:return"readProjectParams";
    case an.UPDATE_PROJECT:return"updateProjectParams";
    case an.TASK_V2:return"taskV2Params";
    case an.APPLY_AGENT_DIFF:return"applyAgentDiffParams";
    case an.ASK_QUESTION:return"askQuestionParams";
    case an.SWITCH_MODE:return"switchModeParams";
    case an.COMPUTER_USE:return"computerUseParams";
    case an.GENERATE_IMAGE:return;
    case an.WRITE_SHELL_STDIN:return"writeShellStdinParams";
    case an.RECORD_SCREEN:return"recordScreenParams";
    case an.REPORT_BUGFIX_RESULTS:return"reportBugfixResultsParams";
    case an.AI_ATTRIBUTION:return;
    case an.MCP_AUTH:return"mcpAuthParams";
    case an.REFLECT:return;
    default:{
      const e=n;
      return
    }
  }
}
function xbi(n){
  switch(n){
    case an.READ_SEMSEARCH_FILES:return"readSemsearchFilesResult";
    case an.RIPGREP_SEARCH:return"ripgrepSearchResult";
    case an.RIPGREP_RAW_SEARCH:return"ripgrepRawSearchResult";
    case an.FILE_SEARCH:return"fileSearchResult";
    case an.RUN_TERMINAL_COMMAND_V2:return"runTerminalCommandV2Result";
    case an.FETCH_RULES:return"fetchRulesResult";
    case an.READ_FILE:return"readFileResult";
    case an.LIST_DIR:return"listDirResult";
    case an.EDIT_FILE:return"editFileResult";
    case an.SEMANTIC_SEARCH_FULL:return"semanticSearchFullResult";
    case an.DELETE_FILE:return"deleteFileResult";
    case an.REAPPLY:return"reapplyResult";
    case an.WEB_SEARCH:return"webSearchResult";
    case an.WEB_FETCH:return"webFetchResult";
    case an.MCP:return"mcpResult";
    case an.SEARCH_SYMBOLS:return"searchSymbolsResult";
    case an.KNOWLEDGE_BASE:return"knowledgeBaseResult";
    case an.BACKGROUND_COMPOSER_FOLLOWUP:return"backgroundComposerFollowupResult";
    case an.FETCH_PULL_REQUEST:return"fetchPullRequestResult";
    case an.DEEP_SEARCH:return"deepSearchResult";
    case an.CREATE_DIAGRAM:return"createDiagramResult";
    case an.UNSPECIFIED:case an.AWAIT:return;
    case an.FIX_LINTS:return"fixLintsResult";
    case an.READ_LINTS:return"readLintsResult";
    case an.GO_TO_DEFINITION:return"gotodefResult";
    case an.TASK:case an.AWAIT_TASK:return;
    case an.TODO_READ:return"todoReadResult";
    case an.TODO_WRITE:return"todoWriteResult";
    case an.EDIT_FILE_V2:return"editFileV2Result";
    case an.LIST_DIR_V2:return"listDirV2Result";
    case an.READ_FILE_V2:return"readFileV2Result";
    case an.GLOB_FILE_SEARCH:return"globFileSearchResult";
    case an.LIST_MCP_RESOURCES:return"listMcpResourcesResult";
    case an.READ_MCP_RESOURCE:return"readMcpResourceResult";
    case an.CALL_MCP_TOOL:return"callMcpToolResult";
    case an.CREATE_PLAN:return"createPlanResult";
    case an.READ_PROJECT:return"readProjectResult";
    case an.UPDATE_PROJECT:return"updateProjectResult";
    case an.TASK_V2:return"taskV2Result";
    case an.APPLY_AGENT_DIFF:return"applyAgentDiffResult";
    case an.ASK_QUESTION:return"askQuestionResult";
    case an.SWITCH_MODE:return"switchModeResult";
    case an.GENERATE_IMAGE:return"generateImageResult";
    case an.COMPUTER_USE:return"computerUseResult";
    case an.WRITE_SHELL_STDIN:return"writeShellStdinResult";
    case an.RECORD_SCREEN:return"recordScreenResult";
    case an.REPORT_BUGFIX_RESULTS:return"reportBugfixResultsResult";
    case an.AI_ATTRIBUTION:return"aiAttributionResult";
    case an.MCP_AUTH:return"mcpAuthResult";
    case an.REFLECT:return;
    default:{
      const e=n;
      return
    }
  }
}
function pNA(n){
  const{
    added:e, removed:t, linterErrorCount:i, version:r
  }
  =n;
  let s="";
  return r&&(s+=`Version ${r.current}/${r.latest}
`), s+=`${e} lines added, ${t} lines removed`, i!==void 0&&(s+=`
${i} linter error${i===1?"":"s"}`), s
}
function n4_(n){
  
}
function jNg(n){
  const e=n.children.length;
  if(e>=2){
    const t=n.children[e-2], i=n.children[e-1], r=i.type==="text"&&(i.text??"")===" ", s=t.type==="text"&&t.detail===1&&t.mode==="segmented"&&(t.text??"")==="";
    if(r&&s)return
  }
  n.children.push({
    type:"text", version:1, detail:1, format:0, mode:"segmented", style:"", text:""
  }), n.children.push({
    type:"text", version:1, detail:0, format:0, mode:"normal", style:"", text:" "
  })
}
function Tbi(n){
  const{
    mentions:e, format:t="inline-with-colon", baseText:i="", prefix:r="", separator:s=" ", suffix:o=""
  }
  =n, a=[];
  if(e.length===0)i&&a.push({
    type:"text", version:1, detail:0, format:0, mode:"normal", style:"", text:i
  });
  else switch(t){
    case"inline-with-colon":{
      a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:"For "
      });
      for(let l=0;
      l<e.length;
      l++)l>0&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:" "
      }),a.push({
        type:"mention",version:1,detail:0,format:0,mode:"segmented",style:"",text:e[l].text??e[l].display,mentionName:e[l].mentionName,typeaheadType:e[l].typeaheadType,storedKey:e[l].storedKey,...e[l].uuid&&{
          uuid:e[l].uuid
        },...e[l].metadata&&{
          metadata:e[l].metadata
        }
      });
      a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:`:

`
      }),i&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:i
      });
      break
    }
    case"inline":{
      for(let l=0;
      l<e.length;
      l++)l>0&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:" "
      }),a.push({
        type:"mention",version:1,detail:0,format:0,mode:"segmented",style:"",text:e[l].text??e[l].display,mentionName:e[l].mentionName,typeaheadType:e[l].typeaheadType,storedKey:e[l].storedKey,...e[l].uuid&&{
          uuid:e[l].uuid
        },...e[l].metadata&&{
          metadata:e[l].metadata
        }
      });
      i&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:" "+i
      });
      break
    }
    case"append":{
      i&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:i+" "
      });
      for(let l=0;
      l<e.length;
      l++)l>0&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:" "
      }),a.push({
        type:"mention",version:1,detail:0,format:0,mode:"segmented",style:"",text:e[l].text??e[l].display,mentionName:e[l].mentionName,typeaheadType:e[l].typeaheadType,storedKey:e[l].storedKey,...e[l].uuid&&{
          uuid:e[l].uuid
        },...e[l].metadata&&{
          metadata:e[l].metadata
        }
      });
      break
    }
    case"custom":{
      r&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:r
      });
      for(let l=0;
      l<e.length;
      l++)l>0&&s&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:s
      }),a.push({
        type:"mention",version:1,detail:0,format:0,mode:"segmented",style:"",text:e[l].display,mentionName:e[l].mentionName,typeaheadType:e[l].typeaheadType,storedKey:e[l].storedKey,...e[l].uuid&&{
          uuid:e[l].uuid
        }
      });
      o&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:o
      }),i&&a.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:i
      });
      break
    }
  }
  return JSON.stringify({
    root:{
      type:"root",version:1,children:[{
        type:"paragraph",version:1,format:"",indent:0,direction:"ltr",children:a
      }
      ],format:"",indent:0,direction:"ltr"
    }
  })
}
function cye(n, e){
  let t;
  try{
    t=n?JSON.parse(n):null
  }
  catch{
    t=null
  }
  if(!t||!t.root||!t.root.children){
    const r=Tbi({
      mentions:e,format:"inline"
    });
    try{
      const s=JSON.parse(r);
      let o=s?.root?.children?.find(a=>a.type==="paragraph");
      return o||(o={
        type:"paragraph",version:1,format:"",indent:0,direction:"ltr",children:[]
      },s.root.children.push(o)),Array.isArray(o.children)||(o.children=[]),jNg(o),JSON.stringify(s)
    }
    catch{
      return r
    }
  }
  let i=t.root.children.reverse().find(r=>r.type==="paragraph");
  if(t.root.children.reverse(), i||(i={
    type:"paragraph", version:1, format:"", indent:0, direction:"ltr", children:[]
  }, t.root.children.push(i)), Array.isArray(i.children)||(i.children=[]), i.children.length>0){
    const r=i.children[i.children.length-1];
    r&&r.type==="text"&&r.text&&!r.text.endsWith(" ")?r.text+=" ":(!r||r.type!=="text")&&i.children.push({
      type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:" "
    })
  }
  for(let r=0;
  r<e.length;
  r++)r>0&&i.children.push({
    type:"text", version:1, detail:0, format:0, mode:"normal", style:"", text:" "
  }), i.children.push({
    type:"mention", version:1, detail:0, format:0, mode:"segmented", style:"", text:e[r].text??e[r].display, mentionName:e[r].mentionName, typeaheadType:e[r].typeaheadType, storedKey:e[r].storedKey, ...e[r].uuid&&{
      uuid:e[r].uuid
    }, ...e[r].metadata&&{
      metadata:e[r].metadata
    }
  });
  return jNg(i), JSON.stringify(t)
}
function gNA(n){
  const e=(i, r)=>{
    try{
      const s=r==="uri"?je.parse(i):je.file(i);
      return!Rq(s)
    }
    catch{
      return!0
    }
  };
  if(n.isNAL){
    const i=n.conversationState?.fileStatesV2||{
      
    };
    return Object.keys(i).some(r=>e(r, "filePath"))
  }
  return Object.keys(n.codeBlockData||{
    
  }).some(i=>{
    if(!e(i, "uri"))return!1;
    const r=n.codeBlockData[i];
    return Object.values(r||{
      
    }).some(s=>!s.isNotApplied)
  })
}
var mtu, nce, ice, zNg, bhn, VNg, KS=