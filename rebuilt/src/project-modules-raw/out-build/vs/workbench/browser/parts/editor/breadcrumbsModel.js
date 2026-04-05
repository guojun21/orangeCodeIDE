// Module: out-build/vs/workbench/browser/parts/editor/breadcrumbsModel.js
// Offset: 31425870 (bundle byte offset)
// Size: 3751 bytes

Po(), _s(), yn(), rt(), zr(), Yr(), Ei(), ns(), ps(), Ybu(), Kmn(), _g(), UF(), H0i=class{
  constructor(n, e, t=!1, i=!1){
    this.uri=n, this.kind=e, this.isWorktreesFolder=t, this.isPlansFolder=i
  }
}, i1a=class{
  constructor(n, e){
    this.element=n, this.outline=e
  }
}, r1a=class{
  constructor(e, t, i, r, s, o){
    this.resource=e, this.editor=t, this._workspaceService=r, this._outlineService=s, this._pathService=o, this._disposables=new Ut, this._currentOutline=new uo, this._outlineDisposables=new Ut, this._onDidUpdate=new Qe, this.onDidUpdate=this._onDidUpdate.event, this._cfgFilePath=axe.FilePath.bindTo(i), this._cfgSymbolPath=axe.SymbolPath.bindTo(i), this._disposables.add(this._cfgFilePath.onDidChange(a=>this._onDidUpdate.fire(this))), this._disposables.add(this._cfgSymbolPath.onDidChange(a=>this._onDidUpdate.fire(this))), this._workspaceService.onDidChangeWorkspaceFolders(this._onDidChangeWorkspaceFolders, this, this._disposables), this._fileInfo=this._initFilePathInfo(e), t&&(this._bindToEditor(t), this._disposables.add(s.onDidChange(()=>this._bindToEditor(t))), this._disposables.add(t.onDidChangeControl(()=>this._bindToEditor(t)))), this._onDidUpdate.fire(this)
  }
  dispose(){
    this._disposables.dispose(), this._cfgFilePath.dispose(), this._cfgSymbolPath.dispose(), this._currentOutline.dispose(), this._outlineDisposables.dispose(), this._onDidUpdate.dispose()
  }
  isRelative(){
    return!!this._fileInfo.folder
  }
  getElements(){
    let e=[];
    if(this._cfgFilePath.getValue()==="on"?e=e.concat(this._fileInfo.path):this._cfgFilePath.getValue()==="last"&&this._fileInfo.path.length>0&&(e=e.concat(this._fileInfo.path.slice(-1))), this._cfgSymbolPath.getValue()==="off"||!this._currentOutline.value)return e;
    const t=this._currentOutline.value.config.breadcrumbsDataSource.getBreadcrumbElements();
    for(let i=this._cfgSymbolPath.getValue()==="last"&&t.length>0?t.length-1:0;
    i<t.length;
    i++)e.push(new i1a(t[i], this._currentOutline.value));
    return t.length===0&&!this._currentOutline.value.isEmpty&&e.push(new i1a(this._currentOutline.value, this._currentOutline.value)), e
  }
  _initFilePathInfo(e){
    if(Cgt(e, _n.untitled, _n.data))return{
      folder:void 0,path:[]
    };
    const t={
      folder:this._workspaceService.getWorkspaceFolder(e)??void 0,path:[]
    }, s=!!e.path.replace(/\\/g, "/").match(/\/.cursor\/worktrees(?:\/|$)/);
    let o=null;
    if(s){
      let g=e;
      for(;
      g&&g.path!=="/";
      ){
        const f=g.path.replace(/\\/g,"/");
        if(f.endsWith("/.cursor/worktrees")||f==="/.cursor/worktrees"){
          o=g;
          break
        }
        const A=g.path.length;
        if(g=Td(g),g.path.length===A)break
      }
    }
    const a=lV(this._pathService.userHome({
      preferLocal:!0
    })), l=Iu.isEqualOrParent(e, a)&&e.path.toLowerCase().endsWith(".plan.md"), u=e.path.toLowerCase(), d=!l&&u.includes("/.cursor/plans/");
    let m=null;
    l&&(m=Td(e));
    let p=e;
    for(;
    p&&p.path!=="/"&&!(t.folder&&Zc(t.folder.uri, p));
    ){
      const g=o!==null&&Zc(p,o),f=m!==null&&Zc(p,m);
      if(t.path.unshift(new H0i(p,t.path.length===0?xg.FILE:xg.FOLDER,g,f)),g||f)break;
      const A=p.path.length;
      if(p=Td(p),p.path.length===A)break
    }
    return t.folder&&this._workspaceService.getWorkbenchState()===3&&t.path.unshift(new H0i(t.folder.uri, xg.ROOT_FOLDER, !1, !1)), t
  }
  _onDidChangeWorkspaceFolders(){
    this._fileInfo=this._initFilePathInfo(this.resource), this._onDidUpdate.fire(this)
  }
  _bindToEditor(e){
    const t=new Wc;
    this._currentOutline.clear(), this._outlineDisposables.clear(), this._outlineDisposables.add($i(()=>t.dispose(!0))), this._outlineService.createOutline(e, 2, t.token).then(i=>{
      t.token.isCancellationRequested&&(i?.dispose(),i=void 0),this._currentOutline.value=i,this._onDidUpdate.fire(this),i&&this._outlineDisposables.add(i.onDidChange(()=>this._onDidUpdate.fire(this)))
    }).catch(i=>{
      this._onDidUpdate.fire(this),Gc(i)
    })
  }
}, r1a=__decorate([__param(2, Fn), __param(3, Lr), __param(4, lkt), __param(5, kp)], r1a)
}
}), GLf=