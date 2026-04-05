// Module: out-build/vs/workbench/contrib/recentFilesTrackerService/browser/recentFilesTrackerService.js
// Offset: 33869952 (bundle byte offset)
// Size: 1762 bytes

Oh(), rt(), Wt(), Er(), ps(), $0u=xi("recentFilesTrackerService"), TDa=class extends at{
  constructor(e, t){
    super(), this._codeEditorService=e, this._workspaceContextService=t, this.modelOpenedEvents=new Map, this.editorListeners=new Map, this.recentlyViewedFiles=[];
    for(let i of this._codeEditorService.listCodeEditors())this.registerEditorListenersToEditor(i);
    this._register(this._codeEditorService.onCodeEditorAdd(i=>{
      const r=i.getModel();
      r&&this.modelOpenedEvents.set(r.uri.toString(),{
        editor:i,model:r
      });
      const s=this.registerEditorListenersToEditor(i);
      s&&this._register(s)
    })), this._register(this._codeEditorService.onCodeEditorRemove(i=>{
      const r=i.getModel();
      r&&this.modelOpenedEvents.delete(r.uri.toString())
    }))
  }
  registerEditorListenersToEditor(e){
    const t=e.getId(), i=new Ut;
    return i.add(e.onDidChangeModel(r=>{
      const s=r.newModelUrl;
      s&&s.scheme==="file"&&this.registerFileView(s)
    })), i.add(e.onDidDispose(()=>{
      this.editorListeners.get(t)?.forEach(s=>s.dispose()),this.editorListeners.delete(t);
      const r=e.getModel();
      r&&this.modelOpenedEvents.delete(r.uri.toString())
    })), this.editorListeners.set(t, [i]), i
  }
  getRecentlyViewedFiles(e=10, t=[]){
    if(e>100)throw new Error("topK must be less than 100");
    return this.recentlyViewedFiles.filter(i=>!t.includes(i.relativePath)).slice(-e).reverse()
  }
  registerFileView(e){
    const t=this._workspaceContextService.asRelativePath(e);
    if(!t||t==="")return;
    const i=1;
    let r=this.recentlyViewedFiles;
    r.find(s=>s.relativePath===t)&&(r=r.filter(s=>s.relativePath!==t)), r.push({
      uri:e,relativePath:t,weight:i
    }), r=r.slice(0, 100), this.recentlyViewedFiles=r
  }
}, TDa=__decorate([__param(0, fl), __param(1, Lr)], TDa), Vi($0u, TDa, 1)
}
}), q0u, IDa, DDa, h$f=