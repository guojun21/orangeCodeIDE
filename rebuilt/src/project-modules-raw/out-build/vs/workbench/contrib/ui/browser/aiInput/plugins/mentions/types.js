// Module: out-build/vs/workbench/contrib/ui/browser/aiInput/plugins/mentions/types.js
// Offset: 25027713 (bundle byte offset)
// Size: 7371 bytes

Bc(), gCA(), (function(n){
  n.none="none", n.doc="doc", n.code="code", n.file="file", n.folder="folder", n.git_commit="commits", n.git_pr="pr", n.git_diff="diffs", n.git="git", n.heading="heading", n.staticheading="staticheading", n.divider="divider", n.link="link", n.current_file="current_file", n.toggle_commit_options="toggle_commit_options", n.commit_notes="commit_notes", n.image="image", n.composer="composer", n.reset="reset", n.summarize="summarize", n.bugbot="bugbot", n.files_and_folders="files_and_folders", n.more="more", n.terminal="terminal", n.terminal_selection="terminal_selection", n.review_changes="review_changes", n.playwright_mcp="playwright_mcp", n.open_browser="open_browser", n.ui_element="ui-element", n.cursor_command="cursor_command", n.pr_diff="pr_diff", n.projects="projects", n.current_pr="current_pr", n.browser="browser", n.mcp_attachment="mcp-attachment"
})(eo||(eo={
  
})), ebg=[eo.code, eo.doc, eo.file, eo.folder, eo.files_and_folders, eo.git, eo.composer, eo.reset, eo.summarize, eo.terminal, eo.playwright_mcp, eo.projects], dU={
  [eo.code]:"Code", [eo.doc]:"Docs", [eo.file]:"Files", [eo.folder]:"Folders", [eo.git]:"Commits", [eo.commit_notes]:"Commit History", [eo.composer]:"Past Chats", [eo.reset]:"Reset", [eo.summarize]:"Summarize", [eo.bugbot]:"Agent Review", [eo.open_browser]:"Open Browser", [eo.files_and_folders]:"Files & Folders", [eo.terminal]:"Terminals", [eo.playwright_mcp]:"Browser", [eo.projects]:"Projects"
}, tbg=[eo.reset, eo.summarize, eo.bugbot, eo.open_browser], qA=class qWb extends Zfg{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(e), this.type=i, this.selectionPrecursor=s, this.docSelection=o, this.secondaryText=a, this.onSettingClick=l, this.payload=u, this.id=Wr(), this.name=e, this.picture=t, this._score=r, this.sizeBytes=d, this.aliases=m, this.isSlash=Yca(i), u&&(this.pr=u.pr, this.commit=u.commit, this.diff=u.diff, this.composerId=u.composerId, this.cursorRuleFilename=u.cursorRuleFilename, this.cursorCommand=u.cursorCommand, this.terminalFile=u.terminalFile, this.terminalSelection=u.terminalSelection, this.consoleLog=u.consoleLog, this.browserSelection=u.browserSelection, this.isLoadMore=u.isLoadMore, this.tooltip=u.tooltip)
  }
  overrideScore(e){
    this._score=e
  }
  set score(e){
    this._score=e
  }
  get score(){
    return this._score
  }
  clone(){
    return new qWb(this.name, this.picture, this.type, this._score, this.selectionPrecursor, this.docSelection, this.secondaryText, this.onSettingClick, this.payload, this.sizeBytes, this.aliases)
  }
}, nbg={
  "cmd-k":["cmdKDefinitions"], generic:[], "terminal-cmd-k":[]
}, Ypi={
  insertTextSearch:()=>{
    
  }, selectedTextSearches:[], removeTextSearch:()=>{
    
  }, insertDocs:()=>{
    
  }, selectedDocs:[], removeDocs:()=>{
    
  }, insertSelection:()=>{
    
  }, selections:[], removeSelection:()=>{
    
  }, insertFileSelection:()=>{
    
  }, fileSelections:[], removeFileSelection:()=>{
    
  }, replaceFileSelections:()=>{
    
  }, insertImage:()=>{
    
  }, imageSelections:[], removeImage:()=>{
    
  }, insertBrowserSelection:()=>{
    
  }, browserSelections:[], removeBrowserSelection:()=>{
    
  }, insertCommit:()=>{
    
  }, commits:[], removeCommit:()=>{
    
  }, insertPullRequest:()=>{
    
  }, pullRequests:[], removePullRequest:()=>{
    
  }, insertGitDiff:()=>{
    
  }, removeGitDiff:()=>{
    
  }, gitDiffUuid:void 0, insertDiffToMain:()=>{
    
  }, removeDiffToMain:()=>{
    
  }, diffToMainUuid:void 0, addCurrentFile:()=>{
    
  }, removeCurrentFile:()=>{
    
  }, addPlaywrightMcp:()=>{
    
  }, removePlaywrightMcp:()=>{
    
  }, insertFolderSelection:()=>{
    
  }, folderSelections:[], removeFolderSelection:()=>{
    
  }, mentionIdToDelete:null, setMentionIdToDelete:()=>{
    
  }, insertLink:()=>{
    
  }, linksSelections:[], removeLink:()=>{
    
  }, removeMention:()=>!1, insertComposer:()=>{
    
  }, composers:[], removeComposer:()=>{
    
  }, insertCursorRule:()=>{
    
  }, cursorRuleIds:[], removeCursorRule:()=>{
    
  }, insertCursorCommand:()=>{
    
  }, cursorCommandIds:[], removeCursorCommand:()=>{
    
  }, insertSubagent:()=>{
    
  }, subagentSelections:[], removeSubagent:()=>{
    
  }, addUiElement:()=>{
    
  }, removeUiElement:()=>{
    
  }, insertWorkflow:()=>{
    
  }, removeWorkflow:()=>{
    
  }
}, Zca="Commit (Diff of Working State)", Zpi="Branch (Diff with Main)", uNe=32, Xpi=3, ibg=3
}
});
function egi(n){
  const e=n;
  return!!e&&typeof e.getSelection=="function"&&!!e.onDidChangeSelection
}
function FWl(n){
  const e=n;
  return!!e&&typeof e.getScrollPosition=="function"&&typeof e.setScrollPosition=="function"&&!!e.onDidChangeScroll
}
function Hun(n, e, t){
  for(const i of t.visibleEditorPanes)if(i.group.id===e&&n.matches(i.input))return i.getViewState()
}
function xq(n){
  if(D_(n))return!1;
  const e=n;
  return je.isUri(e?.resource)
}
function nV(n){
  if(D_(n))return!1;
  const e=n;
  return e?.original!==void 0&&e.modified!==void 0
}
function Jun(n){
  if(D_(n))return!1;
  const e=n;
  return!e||e.resources&&!Array.isArray(e.resources)?!1:!!e.resources||!!e.multiDiffSource
}
function Gun(n){
  if(D_(n))return!1;
  const e=n;
  return Array.isArray(e?.resources)&&e.resources.every(t=>je.isUri(t))
}
function j1e(n){
  if(D_(n)||nV(n))return!1;
  const e=n;
  return e?.primary!==void 0&&e.secondary!==void 0
}
function OWl(n){
  if(D_(n))return!1;
  const e=n;
  return e?e.resource===void 0||e.resource.scheme===_n.untitled||e.forceUntitled===!0:!1
}
function JAe(n){
  if(D_(n))return!1;
  const e=n;
  return je.isUri(e?.base?.resource)&&je.isUri(e?.input1?.resource)&&je.isUri(e?.input2?.resource)&&je.isUri(e?.result?.resource)
}
function D_(n){
  return n instanceof HWl
}
function ACA(n){
  const e=n;
  return je.isUri(e?.preferredResource)
}
function rbg(n){
  const e=n;
  return D_(e?.primary)&&D_(e?.secondary)
}
function tgi(n){
  const e=n;
  return D_(e?.modified)&&D_(e?.original)
}
function Xca(n, e, t, i, r){
  return zun(i, [Sh({
    id:"workbench.action.openLargeFile", label:_(4393, null), run:()=>{
      const s={
        ...t,limits:{
          size:Number.MAX_VALUE
        }
      };
      n.openEditor(e,s)
    }
  }), Sh({
    id:"workbench.action.configureEditorLargeFileConfirmation", label:_(4394, null), run:()=>r.openUserSettings({
      query:"workbench.editorLargeFileConfirmation"
    })
  })], {
    forceMessage:!0, forceSeverity:Ha.Warning
  })
}
function pCt(n){
  return D_(n?.editor)
}
function Wun(n){
  const e=n;
  return pCt(n)&&e?.group!==void 0
}
function UWl(n){
  const e=n;
  return typeof e?.groupId=="number"&&D_(e.editor)
}
function ngi(n){
  return typeof n?.groupId=="number"
}
function $Wl(n, e, t, i){
  if(!n.isSticky(e))return!1;
  switch(i.preventPinnedEditorClose){
    case"keyboardAndMouse":return t===zUe.MOUSE||t===zUe.KEYBOARD;
    case"mouse":return t===zUe.MOUSE;
    case"keyboard":return t===zUe.KEYBOARD
  }
  return!1
}
async function ela(n, e, t){
  return!n||!n.length?[]:await Promise.all(n.map(async i=>{
    const r=je.revive(i.fileUri);
    if(!r){
      t.info("Cannot resolve the path because it is not valid.",i);
      return
    }
    if(!await e.canHandleResource(r)){
      t.info("Cannot resolve the path because it cannot be handled",i);
      return
    }
    let o=i.exists, a=i.type;
    if(typeof o!="boolean"||typeof a!="number")try{
      a=(await e.stat(r)).isDirectory?JI.Directory:JI.Unknown,o=!0
    }
    catch(u){
      t.error(u),o=!1
    }
    if(!o&&i.openOnlyIfExists){
      t.info("Cannot resolve the path because it does not exist",i);
      return
    }
    if(a===JI.Directory){
      t.info("Cannot resolve the path because it is a directory",i);
      return
    }
    const l={
      ...i.options,pinned:!0
    };
    return o?{
      resource:r,options:l
    }
    :{
      resource:r,options:l,forceUntitled:!0
    }
  }))
}
function Qun(n){
  const e=n;
  if(!e)return!1;
  const t=e;
  if(t.modified)return Qun(t.modified);
  const i=e;
  return!!(i.contributionsState&&i.viewState&&Array.isArray(i.cursorState))
}
function jun(n){
  return OFo(n)
}
function zun(n, e, t){
  const i=P4t(n, e);
  return i.forceMessage=t?.forceMessage, i.forceSeverity=t?.forceSeverity, i.allowDialog=t?.allowDialog, i
}
var Jp, G0, sbg, tla, qWl, obg, abg, cbg, lbg, ubg, hU, dbg, HWl, iV, hbg, op, mbg, zUe, gp, pbg, gbg, fbg, Nu=