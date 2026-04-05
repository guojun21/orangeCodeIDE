// Module: out-build/vs/platform/reactivestorage/browser/reactiveStorageTypes.js
// Offset: 4144133 (bundle byte offset)
// Size: 7729 bytes

GRe(), V_(), ri(), Vg(), iu(), (function(n){
  n[n.None=0]="None", n[n.Code=1]="Code", n[n.File=2]="File", n[n.Failure=3]="Failure", n[n.Image=4]="Image", n[n.Folder=5]="Folder", n[n.Docs=6]="Docs", n[n.CursorRule=7]="CursorRule", n[n.GitDiff=8]="GitDiff"
})(uI||(uI={
  
})), Zte=class{
  constructor(){
    this._ref=void 0, this._editor=void 0, this._unregisterEditorUpdateListener=void 0, this._lastIsEmpty=void 0, this.promisedFocus=!1, this._triggerScrollToBottom=void 0, this._pendingSuggestion=!1, this._pendingSuggestionReqId=void 0, this._suggestion=void 0, this._bufferedSuggestion=void 0, this._suggestionListeners=new Set
  }
  registerTextAreaElement(n, e){
    this._ref=n, this._unregisterEditorUpdateListener?.(), this._unregisterEditorUpdateListener=void 0, this._lastIsEmpty=void 0, this._editor=e, this._editor&&(this._unregisterEditorUpdateListener=this._editor.registerUpdateListener(()=>{
      const t=this.isEmpty();
      this._lastIsEmpty===void 0&&(this._lastIsEmpty=t),this._lastIsEmpty!==t&&this._suggestion!==void 0&&this._notifySuggestionListeners(),this._lastIsEmpty=t
    })), this.promisedFocus&&this.focus(void 0, !0)
  }
  detachTextAreaElement(){
    this._ref=void 0, this._editor=void 0, this._unregisterEditorUpdateListener?.(), this._unregisterEditorUpdateListener=void 0, this._lastIsEmpty=void 0, this.promisedFocus=!1
  }
  runEditorUpdate(n){
    this._editor&&this._editor.update(()=>{
      n()
    })
  }
  registerScrollToBottomTrigger(n){
    this._triggerScrollToBottom=n
  }
  clearScrollToBottomTrigger(){
    this._triggerScrollToBottom=void 0
  }
  insertAtSymbol(){
    this._editor&&this._editor.update(()=>{
      const n=OA(" @"),e=lf();
      let t=e.getLastChild();
      t===null&&(t=Lx(),e.append(t)),t.append(n),e.selectEnd()
    })
  }
  isEmpty(){
    if(this._editor){
      const n=this._editor.getEditorState();
      let e=!0;
      return n.read(()=>{
        const t=lf(),i=o=>{
          if(jd(o))return o.getTextContent();
          if(x3(o))return`
`;
          if(kd(o)){
            let a="";
            for(const l of o.getChildren())a+=i(l);
            return a
          }
          return o.getTextContent()
        };
        e=i(t).replace(/[\u200B\uFEFF]/g,"").trim().length===0
      }),e
    }
    return!0
  }
  setText(n){
    this._editor&&this._editor.update(()=>{
      const e=lf();
      e.clear();
      const t=Lx();
      t.append(OA(n)),e.append(t),e.selectEnd()
    })
  }
  setTextIfEmpty(n){
    return this.isEmpty()?(this.setText(n), !0):!1
  }
  enablePendingSuggestion(){
    if(this._pendingSuggestion=!0, this._bufferedSuggestion&&this.isEmpty()){
      if(!(this._pendingSuggestionReqId!==void 0&&this._bufferedSuggestion.reqId!==void 0&&this._bufferedSuggestion.reqId!==this._pendingSuggestionReqId)){
        this._suggestion={
          text:this._bufferedSuggestion.text,reqId:this._bufferedSuggestion.reqId??this._pendingSuggestionReqId
        },this._bufferedSuggestion=void 0,this._pendingSuggestionReqId=void 0,this._pendingSuggestion=!1,this._notifySuggestionListeners();
        return
      }
      this._bufferedSuggestion=void 0
    }
    this._suggestion!==void 0&&(this._suggestion=void 0, this._notifySuggestionListeners())
  }
  setPendingSuggestionReqId(n){
    this._pendingSuggestionReqId=n
  }
  disablePendingSuggestion(){
    this._pendingSuggestion=!1, this._bufferedSuggestion=void 0, this._pendingSuggestionReqId=void 0, this.clearSuggestionText()
  }
  setSuggestionText(n, e){
    this._pendingSuggestion&&this.isEmpty()?(this._suggestion={
      text:n,reqId:e??this._pendingSuggestionReqId
    }, this._pendingSuggestionReqId=void 0, this._pendingSuggestion=!1, this._notifySuggestionListeners()):!this._pendingSuggestion&&this.isEmpty()&&(this._bufferedSuggestion={
      text:n,reqId:e
    })
  }
  getSuggestionText(){
    if(this.isEmpty())return this._suggestion?.text
  }
  getSuggestionReqId(){
    if(this.isEmpty())return this._suggestion?.reqId
  }
  clearSuggestionText(){
    this._suggestion!==void 0&&(this._suggestion=void 0, this._notifySuggestionListeners())
  }
  onSuggestionChange(n){
    return this._suggestionListeners.add(n), ()=>this._suggestionListeners.delete(n)
  }
  _notifySuggestionListeners(){
    for(const n of this._suggestionListeners)n()
  }
  focus(n, e, t){
    if(!this._ref)this.promisedFocus=!0;
    else{
      this.promisedFocus=!1;
      const i=()=>{
        this._ref?.focus(),this._editor?.update(()=>{
          const a=lf();
          t?a.selectStart():a.selectEnd(),n?.(),this._triggerScrollToBottom?.()
        })
      },r=a=>{
        setTimeout(()=>{
          a&&this.isFocused()||i()
        },25)
      },o=$c()===bi;
      e||!o?(i(),e&&o&&r(!1)):r()
    }
  }
  isFocused(){
    return this._ref&&this._ref===As(this._ref).document.activeElement
  }
  getRef(){
    return this._ref
  }
}, GHh=Object.keys(V9e.clusters), WHh=[...GHh].sort(cvA), QHh=["runnerStandalone", "prod", ...WHh], jHh="pane", J4={
  alwaysKeepComposerInBound:!0, location2:jHh, defaultCapabilities:[], autoApplyFilesOutsideContext:!0, yoloCommandAllowlist:[], yoloCommandDenylist:[], smartAllowlistEnabled:!1, smartAllowlistDenylist:[], yoloMcpToolsDisabled:!1, doNotShowYoloModeWarningAgain:!1, doNotShowFullYoloModeWarningAgain:!1, selectedFakeStreamerId:null, yoloDeleteFileDisabled:!1, yoloOutsideWorkspaceDisabled:!0, yoloEnableRunEverything:!1, isWebSearchToolEnabled:!0, isWebSearchToolEnabled2:!1, isWebSearchToolEnabled3:null, autoAcceptWebSearchTool:!1, isWebFetchToolEnabled:null, webFetchDomainAllowlist:[], autoApprovedModeTransitions:[], autoRejectedModeTransitions:[], backgroundComposerEnv:"dev", useLegacyTerminalTool:!1, modes4:[{
    id:"agent", name:"Agent", actionId:"composerMode.agent", icon:"infinity", description:"Plan, search, make edits, run commands", thinkingLevel:"none", shouldAutoApplyIfNoEditTool:!0, autoFix:!0, autoRun:!0, fullAutoRun:!1, enabledTools:[], enabledMcpServers:[]
  }, {
    id:"triage", name:"Triage", actionId:"composerMode.triage", icon:"rocket", description:"Coordinate long-horizon tasks with delegated subagents", thinkingLevel:"none", shouldAutoApplyIfNoEditTool:!1, autoFix:!1, autoRun:!0, fullAutoRun:!1, enabledTools:[an.TASK_V2, an.APPLY_AGENT_DIFF], enabledMcpServers:[]
  }, {
    id:"plan", name:"Plan", actionId:"composerMode.plan", icon:"todos", description:"Create detailed plans for accomplishing tasks", thinkingLevel:"none", shouldAutoApplyIfNoEditTool:!1, autoFix:!1, autoRun:!1, enabledTools:[], enabledMcpServers:[]
  }, {
    id:"spec", name:"Spec", actionId:"composerMode.spec", icon:"checklist", description:"Create structured plans with implementation steps", thinkingLevel:"none", shouldAutoApplyIfNoEditTool:!1, autoFix:!1, autoRun:!1, enabledTools:[], enabledMcpServers:[]
  }, {
    id:"debug", name:"Debug", actionId:"composerMode.debug", icon:"bug", description:"Systematically diagnose and fix bugs using runtime traces", thinkingLevel:"none", shouldAutoApplyIfNoEditTool:!0, autoFix:!1, autoRun:!1, enabledTools:[], enabledMcpServers:[]
  }, {
    id:"chat", name:"Ask", actionId:"composerMode.chat", icon:"chat", description:"Ask Cursor questions about your codebase", thinkingLevel:"none", shouldAutoApplyIfNoEditTool:!1, autoFix:!0, autoRun:!1, enabledTools:[], enabledMcpServers:[]
  }, {
    id:"project", name:"Project", actionId:"composerMode.project", icon:"folder", description:"Special conversation mode for project-level discussions", thinkingLevel:"none", shouldAutoApplyIfNoEditTool:!1, autoFix:!1, autoRun:!1, enabledTools:[], enabledMcpServers:[]
  }
  ], codeBlockDisplayPreference:"collapsed", thinkingLevel:"none", composerMigrationVersion:!1, maxOpenTabsMode:"custom", maxOpenTabsCustomValue:void 0
}, B9t=[], (function(n){
  n.NO_ERROR="NO_ERROR", n.NO_REPO="NO_REPO", n.EXTENSION_ERROR="EXTENSION_ERROR"
})(zHh||(zHh={
  
})), VHh={
  cppModels:[]
}
}
});
function KUo({
  origObject:n, pathToKey:e, keyToKeep:t
}){
  if(!(typeof n!="object"||n===null))if(e.length===0)for(const i in n)i!==t&&delete n[i];
  else{
    const[i, ...r]=e;
    typeof i=="string"?i in n&&KUo({
      origObject:n[i],pathToKey:r,keyToKeep:t
    }):i===lae.array&&Array.isArray(n)&&n.forEach(s=>{
      KUo({
        origObject:s,pathToKey:r,keyToKeep:t
      })
    })
  }
}
function R9t({
  origObject:n, pathToKey:e, keyToRemove:t
}){
  if(!(typeof n!="object"||n===null))if(e.length===0)t in n&&delete n[t];
  else{
    const[i, ...r]=e;
    typeof i=="string"?i in n&&R9t({
      origObject:n[i],pathToKey:r,keyToRemove:t
    }):i===lae.array&&Array.isArray(n)&&n.forEach(s=>{
      R9t({
        origObject:s,pathToKey:r,keyToRemove:t
      })
    })
  }
}
var lae, lvA=