// Module: out-build/vs/workbench/contrib/chat/browser/contrib/chatInputRelatedFilesContrib.js
// Offset: 32560748 (bundle byte offset)
// Size: 2870 bytes

Po(), yn(), rt(), cu(), Uc(), Yr(), Ht(), Hq(), kk(), ICi=class extends at{
  static{
    this.ID="chat.relatedFilesWorkingSet"
  }
  constructor(e, t){
    super(), this.chatEditingService=e, this.chatWidgetService=t, this.chatEditingSessionDisposables=new Map, this._register(Oc(i=>{
      this.chatEditingService.editingSessionsObs.read(i).forEach(s=>{
        const o=this.chatWidgetService.getWidgetBySessionId(s.chatSessionId);
        o&&!this.chatEditingSessionDisposables.has(s.chatSessionId)&&this._handleNewEditingSession(s,o)
      })
    }))
  }
  _updateRelatedFileSuggestions(e, t){
    this._currentRelatedFilesRetrievalOperation||e.entries.get().length>0||t.attachmentModel.fileAttachments.length===0||(this._currentRelatedFilesRetrievalOperation=this.chatEditingService.getRelatedFiles(e.chatSessionId, t.getInput(), t.attachmentModel.fileAttachments, Cs.None).then(r=>{
      if(!r?.length||!t.viewModel?.sessionId||!t.input.relatedFiles)return;
      const s=this.chatEditingService.getEditingSession(t.viewModel.sessionId);
      if(!s||s.entries.get().length)return;
      const o=new lT([...t.attachmentModel.fileAttachments,...t.input.relatedFiles.removedFiles]);
      if(!o.size)return;
      const a=new fu;
      for(const l of r)for(const u of l.files){
        if(a.size>=2)break;
        o.has(u.uri)||(a.set(u.uri,_(5560,null,u.description)),o.add(u.uri))
      }
      t.input.relatedFiles.value=[...a.entries()].map(([l,u])=>({
        uri:l,description:u
      }))
    }).finally(()=>{
      this._currentRelatedFilesRetrievalOperation=void 0
    }))
  }
  _handleNewEditingSession(e, t){
    const i=new Ut;
    i.add(e.onDidDispose(()=>{
      i.clear()
    })), this._updateRelatedFileSuggestions(e, t);
    const r=In.debounce(t.inputEditor.onDidChangeModelContent, ()=>null, 3e3);
    i.add(r(()=>{
      this._updateRelatedFileSuggestions(e,t)
    })), i.add(t.attachmentModel.onDidChangeContext(()=>{
      this._updateRelatedFileSuggestions(e,t)
    })), i.add(e.onDidDispose(()=>{
      i.dispose()
    })), i.add(t.onDidAcceptInput(()=>{
      t.input.relatedFiles?.clear(),this._updateRelatedFileSuggestions(e,t)
    })), this.chatEditingSessionDisposables.set(e.chatSessionId, i)
  }
  dispose(){
    for(const e of this.chatEditingSessionDisposables.values())e.dispose();
    super.dispose()
  }
}, ICi=__decorate([__param(0, kV), __param(1, M1)], ICi), c3f=class extends at{
  constructor(){
    super(...arguments), this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._removedFiles=new lT, this._value=[]
  }
  get removedFiles(){
    return this._removedFiles
  }
  get value(){
    return this._value
  }
  set value(n){
    this._value=n, this._onDidChange.fire()
  }
  remove(n){
    this._value=this._value.filter(e=>!Zc(e.uri, n)), this._removedFiles.add(n), this._onDidChange.fire()
  }
  clearRemovedFiles(){
    this._removedFiles.clear()
  }
  clear(){
    this._value=[], this._removedFiles.clear(), this._onDidChange.fire()
  }
}
}
});
function u3f(n){
  return{
    lineNumber:n.getLineCount(), column:n.getLineLength(n.getLineCount())+1
  }
}
var xEa, nrt, eyu, QJ, tyu, TEa, IEa, nyu, DEa, d3f, Gfn=