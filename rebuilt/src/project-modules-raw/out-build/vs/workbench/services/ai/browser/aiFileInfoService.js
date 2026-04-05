// Module: out-build/vs/workbench/services/ai/browser/aiFileInfoService.js
// Offset: 33684585 (bundle byte offset)
// Size: 13977 bytes

KKe(), cv(), qp(), Ql(), U0(), yn(), Tme(), rt(), zr(), Yn(), lv(), tl(), ts(), td(), Ei(), si(), ns(), Er(), t1(), kr(), ps(), Nu(), Q0(), m8(), cp(), Zk(), Sb(), Pf(), ax(), wD(), jq(), od(), ss(), Wu(), _g(), Wf(), Hit(), Bp(), $Ia(), aP(), zk(), Hba(), Vbn=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x){
    super(), this.editorGroupsService=e, this.workspaceContextService=t, this.textModelService=i, this.editorService=r, this.cursorIgnoreService=s, this.remoteAgentService=o, this.fileService=a, this.pathService=l, this.appLayoutService=u, this.composerEventService=d, this.composerDataService=m, this.experimentService=p, this.configurationService=g, this.storageService=f, this.terminalService=A, this.terminalGroupService=w, this.viewsService=C, this.contextKeyService=x, this._onDidChangeActiveEditor=this._register(new Qe), this.onDidChangeActiveEditor=this._onDidChangeActiveEditor.event, this._onDidChangeVisibleEditors=this._register(new Qe), this.onDidChangeVisibleEditors=this._onDidChangeVisibleEditors.event, this._onDidChangeIdeEditorsState=this._register(new Qe), this.onDidChangeIdeEditorsState=this._onDidChangeIdeEditorsState.event, this._onDidChangeCurrentFileInfo=this._register(new Qe), this.onDidChangeCurrentFileInfo=this._onDidChangeCurrentFileInfo.event, this.lastActiveGroups=[], this._didSetupActiveGroupTracking=!1, this._isPersistingIdeState=!1, this._hasPendingPersist=!1, this._setupActiveGroupTracking(), this._setupEditorChangeListeners(), this._setupAgentLayoutPaneListener(), this._setupTerminalChangeListeners(), this.updateIdeEditorsStateAsync()
  }
  get controlProvider(){
    return this._controlProvider
  }
  registerControlProvider(e, t){
    if(this._controlProvider)throw new Error("ControlProvider already registered");
    return this._controlProvider=t, $i(()=>{
      this._controlProvider=void 0
    })
  }
  async getCurrentFileInfo(e, t){
    if(t?.actuallyReadFromOverrideURI===!0&&e!==void 0){
      if(this.cursorIgnoreService.shouldBlockUriFromReading(e))return;
      let a;
      try{
        a=await this.textModelService.createModelReference(e);
        const l=a.object.textEditorModel,u=l.getValue(),d=l.getLanguageIdAtPosition(1,1)??"";
        return new AS({
          cursorPosition:void 0,selection:void 0,relativeWorkspacePath:this.workspaceContextService.asRelativePath(e),contents:u,contentsStartAtLine:1,languageId:d,alternativeVersionId:l.getAlternativeVersionId(),totalNumberOfLines:l.getLineCount(),workspaceRootPath:this.workspaceContextService.getWorkspaceFolder(e)?.uri.fsPath??""
        })
      }
      finally{
        a?.dispose()
      }
    }
    const i=this.getCurrentFileInfoSyncWithoutDataframes(e);
    if(i===void 0)return i;
    if(i.relativeWorkspacePath==="")return;
    const r=i.relativeWorkspacePath, s=r.match(/^[a-zA-Z]:\\/)?je.file(r):this.workspaceContextService.resolveRelativePath(PEt(r));
    if(this.cursorIgnoreService.shouldBlockUriFromReading(s))return;
    let o=await this.getDataframesFromNotebook();
    return o||(o=[]), i.dataframes=o, i
  }
  async getDataframesFromNotebook(){
    const e=this.editorService.activeEditorPane?.input?.resource;
    if(!e||!e.path.endsWith(".ipynb"))return;
    if(!e)return[];
    const t=await this.controlProvider?.getDataframeSummary(e);
    return t?t.map(i=>new U9o({
      name:i.name,shape:i.shape,dataDimensionality:i.dataDimensionality,columns:i.columns.map(r=>new CRc({
        key:r.key,type:r.type
      })),rowCount:i.rowCount,indexColumn:i.indexColumn
    })):[]
  }
  _setupEditorChangeListeners(){
    this._register(this.editorService.onDidVisibleEditorsChange(()=>{
      this.updateIdeEditorsState();
      const e=this.editorService.visibleEditorPanes;
      this._onDidChangeVisibleEditors.fire(e)
    })), this._register(this.editorService.onDidActiveEditorChange(()=>{
      this.updateIdeEditorsState();
      const e=this.getLastActiveFileEditor();
      this._onDidChangeActiveEditor.fire(e),this.getCurrentFileInfo().then(t=>{
        this._onDidChangeCurrentFileInfo.fire(t)
      }),this._persistIdeStateLite()
    }))
  }
  _setupTerminalChangeListeners(){
    this.terminalService&&this._register(this.terminalService.onDidChangeActiveInstance(()=>{
      this.updateIdeEditorsState()
    })), this._register(this.viewsService.onDidChangeViewVisibility(e=>{
      e.id===yD&&this.updateIdeEditorsState()
    }))
  }
  _setupActiveGroupTracking(){
    const e=t=>{
      t!==void 0&&(this.lastActiveGroups=this.lastActiveGroups.filter(i=>i!==t),this.lastActiveGroups.push(t))
    };
    this._register(this.editorGroupsService.mainPart.onDidLayout(()=>{
      if(this._didSetupActiveGroupTracking)return;
      this._didSetupActiveGroupTracking=!0;
      const t=this.editorGroupsService.groups.map(i=>i.id);
      this.lastActiveGroups=t.filter(i=>!this.lastActiveGroups.includes(i)).concat(this.lastActiveGroups),e(this.editorGroupsService.activeGroup.id),this.updateIdeEditorsStateAsync()
    })), this._register(this.editorGroupsService.onDidChangeActiveGroup(t=>{
      e(t.id)
    }))
  }
  getLastActiveFileEditor(){
    let e=this.editorService.activeEditorPane;
    if(e?.input?.resource&&DAi(e.input.resource.scheme))return e;
    for(const t of this.lastActiveGroups.slice().reverse())if(e=this.editorGroupsService.getGroup(t)?.activeEditorPane, !(!e?.input?.resource||!DAi(e.input.resource.scheme)))break;
    return e
  }
  getCurrentFileInfoSyncWithoutDataframes(e){
    const t=this.getLastActiveFileEditor(), i=t?.getControl();
    let r=e??gp.getOriginalUri(t?.input);
    if(r?.scheme===_n.aiChat)return;
    const s=sA(t);
    let o="", a, l, u;
    if(s){
      const w=s.getCellsInRange();
      let C=s.getActiveCell()?.id,x=w.findIndex(O=>O.id===C);
      const I=w.map(O=>O.getText()),R=w.map(O=>O.model.outputs).map(O=>{
        const $=O.map(H=>H.outputs.map(z=>{
          if(z.mime==="text/plain")return z.data.toString();
          if(z.mime==="application/vnd.code.notebook.error"){
            const Y=z.data.toString();
            let j=JSON.parse(Y);
            const X=j.stack.replace(/\x1B\[([0-9]{
              1,2
            }
            (;
            [0-9]{
              1,2
            })?)?[m|K]/g,"").replace(/\u001b\[0/g,"");
            return j={
              ...j,stack:X
            },JSON.stringify(j,null,2)
          }
          else if(z.mime==="application/vnd.code.notebook.stderr")return z.data.toString();
          return""
        }).join(`

`)).join(`

`);
        return $.length>400?$.slice(0,200)+`
...output cropped...
`+$.slice(-200):$
      });
      let N=0;
      o=I.map((O,$)=>{
        if(O===""||O===void 0)return"";
        const H=`in[${$}]: ${O}`;
        if(R[$]===""||R[$]===void 0)return H;
        const W=`out[${$}]: ${R[$]}`;
        return`${H}

${W}`
      }).map((O,$)=>($<x&&(N=N+O.split(`
`).length+2),O)).join(`

`),r=s.textModel?.uri??r,a=new ar(N+1,1),l=new Zt(a.lineNumber,1,a.lineNumber,1)
    }
    else{
      const w=t?.getControl();
      if(a=w?.getPosition()??new ar(1,1),l=w?.getSelection()??new Zt(a.lineNumber,a.column,a.lineNumber,a.column),iB(w)){
        const x=w.getModel(),I=x?.original.getValue(),B=x?.modified.getValue();
        o=`Original File:
${I}
Modified File:
${B}`,r=x?.modified.uri
      }
      else if(i0A(w))o="";
      else{
        const C=w?.getModel();
        o=C?.getValue()??"",u=C?.getAlternativeVersionId()
      }
    }
    let d="";
    Ig(i)&&(d=i.getModel()?.getLanguageIdAtPosition(a.lineNumber, a.column)??"");
    const m=new I9({
      line:Of(a.lineNumber-1),column:Of(a.column-1)
    }), p=new fz({
      startPosition:new I9({
        line:Of(l.startLineNumber-1),column:Of(l.startColumn-1)
      }),endPosition:new I9({
        line:Of(l.endLineNumber-1),column:Of(l.endColumn-1)
      })
    }), g=o.split(`
`).length;
    let f=1;
    if(o.length>100*2e4){
      const C=o.split(`
`),x=m.line;
      let I=Math.max(0,x-Math.floor(2e3/2)),B=Math.min(C.length,x+Math.ceil(2e3/2));
      B-I<2e3&&(I===0?B=Math.min(C.length,I+2e3):B===C.length&&(I=Math.max(0,B-2e3))),f=I+1,o=C.slice(I,B).join(`
`),m.line-=I,p.startPosition.line-=I,p.endPosition.line-=I
    }
    return new AS({
      cursorPosition:m,selection:p,relativeWorkspacePath:r?this.workspaceContextService.asRelativePath(r):"",contents:o,contentsStartAtLine:f,languageId:d,alternativeVersionId:u,totalNumberOfLines:g
    })
  }
  _setupAgentLayoutPaneListener(){
    this._register(this.composerEventService.onDidUpdateAgentLayoutPane(e=>{
      switch(e.type){
        case"code-selection":{
          const t=e.relativePath,i=this.remoteAgentService.getConnection()!==null,r=new r9t({
            relativePath:t,absolutePath:vSe(this.workspaceContextService.resolveRelativePath(t),!0,i)
          }),s=this.ideEditorsState?.recentlyViewedFiles??[],o=new i9t({
            visibleFiles:[r],recentlyViewedFiles:s
          });
          this.ideEditorsState=o,this._onDidChangeIdeEditorsState.fire(o);
          break
        }
        case"cleared":{
          const t=this.ideEditorsState?.recentlyViewedFiles??[],i=new i9t({
            visibleFiles:[],recentlyViewedFiles:t
          });
          this.ideEditorsState=i,this._onDidChangeIdeEditorsState.fire(i);
          break
        }
        case"multi-diff":default:break
      }
    }))
  }
  getLastIdeEditorsState(){
    return this.ideEditorsState
  }
  updateIdeEditorsState(){
    try{
      this._updateIdeEditorsState()
    }
    catch{
      console.error("Error updating ide editors state")
    }
  }
  async updateIdeEditorsStateAsync(){
    try{
      await this._updateIdeEditorsState()
    }
    catch{
      console.error("Error updating ide editors state async")
    }
  }
  getCurrentWorktreePath(){
    const t=this.composerDataService.selectedComposer?.gitWorktree?.worktreePath;
    return t&&typeof t=="string"&&t.length>0?t:void 0
  }
  normalizePathString(e){
    if(!e)return"";
    let t=e.replace(/\\/g, "/");
    return t.endsWith("/")&&(t=t.slice(0, -1)), t
  }
  normalizeUriPath(e){
    const t=e.scheme===_n.vscodeRemote?e.path:e.fsPath;
    return this.normalizePathString(t||e.path)
  }
  isUriInWorkspace(e){
    const t=this.workspaceContextService.getWorkspaceFolder(e);
    if(!t)return!1;
    const i=this.normalizeUriPath(e), r=this.normalizeUriPath(t.uri);
    return!i||!r?!1:i===r||i.startsWith(`${r}/`)
  }
  isUriInCurrentWorktree(e){
    const t=this.getCurrentWorktreePath();
    if(!t)return!1;
    const i=this.normalizeUriPath(e), r=this.normalizePathString(t);
    return!i||!r?!1:i===r||i.startsWith(`${r}/`)
  }
  toIdeEditorsStateFile(e, t){
    if(e.isTerminal)return new r9t({
      relativePath:e.path,absolutePath:e.path
    });
    const i=e.resolvedUri??this.workspaceContextService.resolveRelativePath(e.path);
    if(i)return new r9t({
      relativePath:e.path,absolutePath:vSe(i,!0,t)
    })
  }
  shouldFilterWorktreeFiles(){
    return!Bh(this.storageService)
  }
  shouldIncludeFileInAgent(e, t){
    return!t||!this.isUriInWorkspace(t)?!1:Bh(this.storageService)&&this.getCurrentWorktreePath()?this.isUriInCurrentWorktree(t):!qLf(e)
  }
  async _updateIdeEditorsState(){
    const e=this.experimentService.checkFeatureGate("terminals_are_files"), t=[_n.file, _n.vscodeRemote, _n.vscodeNotebook, _n.git], i=e?[...t, _n.vscodeTerminal]:t, r=[];
    for(const f of this.editorService.visibleEditors){
      const A=f.resource;
      if(!A||!i.includes(A.scheme))continue;
      if(A.scheme===_n.vscodeTerminal){
        const x=await this.terminalService.getTerminalFilePathFromResource(A);
        r.push({
          path:x,isTerminal:!0,resolvedUri:void 0
        });
        continue
      }
      const w=this.workspaceContextService.asRelativePath(A);
      if(!w)continue;
      const C=this.workspaceContextService.resolveRelativePath(w);
      C&&r.push({
        path:w,isTerminal:!1,resolvedUri:C
      })
    }
    const s=[], o=new Set;
    for(const f of r){
      if(f.isTerminal){
        o.has(f.path)||(o.add(f.path),s.push(f));
        continue
      }
      const A=f.resolvedUri;
      this.isUriInWorkspace(A)&&(this.cursorIgnoreService.shouldBlockUriFromReading(A)||this.shouldIncludeFileInAgent(f.path,A)&&(o.has(f.path)||(o.add(f.path),s.push(f))))
    }
    if(e&&this.contextKeyService.getContextKeyValue(lo.viewShowing.key)){
      const A=this.terminalGroupService.activeGroup;
      if(A){
        for(const w of A.terminalInstances)if(w.instanceId!==void 0&&w.target===bA.Panel){
          if(w.resource.scheme!==_n.vscodeTerminal)continue;
          const C=await this.terminalService.getTerminalFilePathFromResource(w.resource);
          o.has(C)||(o.add(C),s.push({
            path:C,isTerminal:!0,resolvedUri:void 0
          }))
        }
      }
    }
    let l=(this.ideEditorsState?.recentlyViewedFiles??[]).map(f=>{
      const A=f.relativePath,C=m$e(A)!==null,x=C?void 0:this.workspaceContextService.resolveRelativePath(A);
      return{
        path:A,isTerminal:C,resolvedUri:x
      }
    });
    e||(l=l.filter(f=>!f.isTerminal)), l=l.filter(f=>{
      if(f.isTerminal)return e;
      const A=f.resolvedUri;
      return A?this.shouldIncludeFileInAgent(f.path,A):!1
    });
    const u=this.editorService.activeEditor?.resource;
    let d;
    if(u&&i.includes(u.scheme))if(u.scheme===_n.vscodeTerminal)d={
      path:await this.terminalService.getTerminalFilePathFromResource(u),isTerminal:!0,resolvedUri:void 0
    };
    else{
      const f=this.workspaceContextService.asRelativePath(u);
      if(f){
        const A=this.workspaceContextService.resolveRelativePath(f);
        A&&this.isUriInWorkspace(A)&&(d={
          path:f,isTerminal:!1,resolvedUri:A
        })
      }
    }
    let m=[...l];
    if(d&&m.at(-1)?.path!==d.path)if(d.isTerminal)e&&(m=m.filter(A=>A.path!==d.path), m.push(d));
    else{
      const A=d.resolvedUri;
      A&&!this.cursorIgnoreService.shouldBlockUriFromReading(A)&&this.shouldIncludeFileInAgent(d.path,A)&&(m=m.filter(w=>w.path!==d.path),m.push(d))
    }
    m.length>10&&(m=m.slice(-10));
    const p=this.remoteAgentService.getConnection()!==null, g=new i9t({
      visibleFiles:s.map(f=>this.toIdeEditorsStateFile(f,p)).filter(f=>!!f),recentlyViewedFiles:m.map(f=>this.toIdeEditorsStateFile(f,p)).filter(f=>!!f)
    });
    this.ideEditorsState=g, this._onDidChangeIdeEditorsState.fire(g)
  }
  async _persistIdeStateLite(){
    if(this._isPersistingIdeState){
      this._hasPendingPersist=!0;
      return
    }
    this._isPersistingIdeState=!0;
    try{
      const e=this.editorService.activeEditor?.resource,t=this.remoteAgentService.getConnection()!==null;
      if(!e||!DAi(e.scheme))return;
      const i=this.workspaceContextService.asRelativePath(e);
      if(!i)return;
      const r=this.workspaceContextService.resolveRelativePath(i);
      if(!r||!this.isUriInWorkspace(r)||this.cursorIgnoreService.shouldBlockUriFromReading(r))return;
      const s=vSe(r,!0,t);
      if(!s)return;
      const o=await this.pathService.userHome({
        preferLocal:!1
      }),a=je.joinPath(o,".cursor"),l=je.joinPath(a,"ide_state.json");
      let u=[];
      try{
        if(await this.fileService.exists(l)){
          const f=(await this.fileService.readFile(l)).value.toString();
          u=u4c.fromJsonString(f).recentlyViewedFiles
        }
      }
      catch{
        
      }
      let d=u;
      d=d.filter(g=>g.absolutePath!==s),d.unshift(new l4c({
        relativePath:i,absolutePath:s
      })),d.length>10&&(d=d.slice(0,10));
      const p=new u4c({
        recentlyViewedFiles:d
      }).toJsonString();
      try{
        await this.fileService.exists(a)||await this.fileService.createFolder(a)
      }
      catch{
        await this.fileService.createFolder(a)
      }
      await this.fileService.writeFile(l,Ms.fromString(p))
    }
    catch{
      
    }
    finally{
      this._isPersistingIdeState=!1,this._hasPendingPersist&&(this._hasPendingPersist=!1,this._persistIdeStateLite())
    }
  }
}, __decorate([U4(1e4)], Vbn.prototype, "_persistIdeStateLite", null), Vbn=__decorate([__param(0, da), __param(1, Lr), __param(2, El), __param(3, yi), __param(4, s5), __param(5, Vp), __param(6, Gr), __param(7, kp), __param(8, xM), __param(9, BA), __param(10, Oa), __param(11, Tl), __param(12, Fn), __param(13, Hi), __param(14, Jb), __param(15, TM), __param(16, yu), __param(17, wi)], Vbn), Vi(gnt, Vbn, 1)
}
}), Kbn, V6f, HIa=