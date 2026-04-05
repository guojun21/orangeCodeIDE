// Module: out-build/vs/workbench/contrib/composer/browser/composerData.js
// Offset: 25602526 (bundle byte offset)
// Size: 5418 bytes

Ie(), Ie(), Ti(), Jk(), cv(), Uv(), Vg(), qi(), zr(), Yn(), Bc(), wI(), Fc(), Q9(), eEe(), zjl(), Vjl=class extends Error{
  constructor(n){
    super(n.actualErrorMessage), this.clientVisibleErrorMessage=n.clientVisibleErrorMessage, this.modelVisibleErrorMessage=n.modelVisibleErrorMessage, this.actualErrorMessage=n.actualErrorMessage, this.errorDetails=n.errorDetails
  }
}, Xwg=3, e_g=14, t_g=3, n_g=["completed", "cancelled", "accepted", "rejected", "outdated"], $kA=[...n_g, "applying"], Kjl=n=>({
  ...n, files:n.files.map(e=>({
    ...e, uri:je.revive(e.uri)
  })), nonExistentFiles:n.nonExistentFiles.map(e=>({
    ...e, uri:je.revive(e.uri)
  })), newlyCreatedFolders:n.newlyCreatedFolders.map(e=>({
    ...e, uri:je.revive(e.uri)
  })), activeInlineDiffs:n.activeInlineDiffs.map(e=>({
    ...e, uri:je.revive(e.uri), codeBlockId:e.codeBlockId??""
  })), inlineDiffNewlyCreatedResources:{
    ...n.inlineDiffNewlyCreatedResources, files:n.inlineDiffNewlyCreatedResources.files.map(e=>({
      ...e,uri:je.revive(e.uri)
    })), folders:n.inlineDiffNewlyCreatedResources.folders.map(e=>({
      ...e,uri:je.revive(e.uri)
    }))
  }
}), Yjl=()=>({
  files:[], nonExistentFiles:[], newlyCreatedFolders:[], activeInlineDiffs:[], inlineDiffNewlyCreatedResources:{
    files:[], folders:[]
  }
}), h_=()=>({
  _v:Xwg, type:ul.HUMAN, approximateLintErrors:[], lints:[], codebaseContextChunks:[], commits:[], pullRequests:[], attachedCodeChunks:[], assistantSuggestedDiffs:[], gitDiffs:[], interpreterResults:[], images:[], attachedFolders:[], attachedFoldersNew:[], bubbleId:Wr(), userResponsesToSuggestedCodeBlocks:[], suggestedCodeBlocks:[], diffsForCompressingFiles:[], relevantFiles:[], toolResults:[], notepads:[], capabilities:[], multiFileLinterErrors:[], diffHistories:[], recentLocationsHistory:[], recentlyViewedFiles:[], isAgentic:!1, fileDiffTrajectories:[], existedSubsequentTerminalCommand:!1, existedPreviousTerminalCommand:!1, docsReferences:[], webReferences:[], aiWebSearchResults:[], requestId:"", attachedFoldersListDirResults:[], humanChanges:[], attachedHumanChanges:!1, summarizedComposers:[], cursorRules:[], cursorCommands:[], cursorCommandsExplicitlySet:!1, pastChats:[], pastChatsExplicitlySet:!1, contextPieces:[], editTrailContexts:[], allThinkingBlocks:[], diffsSinceLastApply:[], deletedFiles:[], supportedTools:[], tokenCount:{
    inputTokens:0, outputTokens:0
  }, attachedFileCodeChunksMetadataOnly:[], consoleLogs:[], uiElementPicked:[], isRefunded:!1, knowledgeItems:[], documentationSelections:[], externalLinks:[], projectLayouts:[], unifiedMode:G9e.AGENT, capabilityContexts:[], todos:[], createdAt:new Date().toISOString(), mcpDescriptors:[], workspaceUris:[], conversationState:new vk
}), i_g=GS(), qkA={
  [VY.ADD_FILE_TO_CONTEXT]:"Add file to context", [VY.ITERATE]:"Iterate and improve", [VY.UNSPECIFIED]:"Unspecified", [VY.REMOVE_FILE_FROM_CONTEXT]:"Remove file from context", [VY.SEMANTIC_SEARCH_CODEBASE]:"Semantic search codebase"
}, HkA={
  [VY.ADD_FILE_TO_CONTEXT]:Be.fileAdd, [VY.ITERATE]:Be.sync, [VY.UNSPECIFIED]:Be.question, [VY.REMOVE_FILE_FROM_CONTEXT]:Be.trash, [VY.SEMANTIC_SEARCH_CODEBASE]:Be.search
}, Zjl=[ko.DIFF_REVIEW, ko.AUTO_CONTEXT, ko.TOOL_FORMER, ko.CURSOR_RULES, ko.SUMMARIZATION, ko.USAGE_DATA, ko.CHIMES, ko.NOTIFICATIONS, ko.QUEUING, ko.MEMORIES, ko.ONLINE_METRICS, ko.AI_CODE_TRACKING, ko.BACKGROUND_COMPOSER, ko.THINKING, ko.CONTEXT_WINDOW, ko.SUB_COMPOSER], JkA=je.parse("multi-diff-editor:composer-all-active-changes"), r_g=new Set([an.RUN_TERMINAL_COMMAND_V2, an.MCP, an.EDIT_FILE_V2, an.ASK_QUESTION, an.WEB_FETCH, an.WEB_SEARCH, an.MCP_AUTH]), Pdn={
  [an.RUN_TERMINAL_COMMAND_V2]:{
    accept:"Run", reject:"Stop", waitText:"Waiting for approval"
  }, [an.EDIT_FILE]:{
    accept:"Keep", reject:"Undo", waitText:""
  }, [an.BACKGROUND_COMPOSER_FOLLOWUP]:{
    accept:"Send to background composer", reject:"Skip", waitText:"Waiting for approval"
  }, [an.WEB_SEARCH]:{
    accept:"Continue", reject:"Cancel", waitText:"Waiting for approval"
  }, [an.SWITCH_MODE]:{
    accept:"Switch", reject:"Skip", waitText:"Waiting for approval"
  }, [an.MCP_AUTH]:{
    accept:"Authenticate", reject:"Skip", waitText:"Waiting for approval"
  }
}, s_g=[an.EDIT_FILE], o_g=[an.EDIT_FILE], GkA=[an.WEB_SEARCH, an.EDIT_FILE, an.EDIT_FILE_V2, an.BACKGROUND_COMPOSER_FOLLOWUP, an.SWITCH_MODE], WkA=[{
  id:"search", title:"Search", description:"Codebase, web", tools:[{
    tool:an.READ_SEMSEARCH_FILES, label:"Codebase"
  }, {
    tool:an.WEB_SEARCH, label:"Web"
  }, {
    tool:an.RIPGREP_RAW_SEARCH, label:"Grep Search"
  }, {
    tool:an.FILE_SEARCH, label:"Search files"
  }
  ]
}, {
  id:"edit", title:"Edit", description:"Files in workspace", tools:[{
    tool:an.EDIT_FILE, label:"Edit & Reapply"
  }, {
    tool:an.DELETE_FILE, label:"Delete file"
  }
  ]
}, {
  id:"run", title:"Run", description:"Commands", tools:[{
    tool:an.RUN_TERMINAL_COMMAND_V2, label:"Terminal"
  }
  ]
}
], QkA={
  [an.EDIT_FILE]:[an.REAPPLY]
}
}
});
function a_g(n){
  switch(n){
    case"repoStateLock":return"Waiting for snapshot from another agent building this environment";
    case"repositorySetup":return"Setting up repository";
    case"hydration":return"Hydrating environment";
    case"imagePull":return"Pulling Docker images";
    case"build":return"Building Docker image";
    case"prepare":return"Running prepare script";
    case"install":return"Running install script";
    case"verify":return"Running verify script";
    case"start":return"Running start script";
    case"extensionInstall":return"Installing extensions";
    case"snapshot":return"Creating snapshot";
    case"postStart":return"Running post-start script";
    case"extensionStart":return"Starting extensions";
    case"completion":return"Completing setup";
    default:{
      const e=n;
      return"Setting up environment"
    }
  }
}
var jkA=