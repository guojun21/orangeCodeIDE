// Module: out-build/vs/workbench/contrib/files/browser/views/explorerDecorationsProvider.js
// Offset: 32502998 (bundle byte offset)
// Size: 1757 bytes

yn(), Ht(), ps(), Nl(), rt(), GOf(), $ie(), mk(), pEa=class{
  constructor(e, t){
    this.explorerService=e, this.label=_(8077, null), this._onDidChange=new Qe, this.toDispose=new Ut, this.toDispose.add(this._onDidChange), this.toDispose.add(t.onDidChangeWorkspaceFolders(i=>{
      this._onDidChange.fire(i.changed.concat(i.added).map(r=>r.uri))
    })), this.toDispose.add(cEa.event((i=>{
      this._onDidChange.fire([i])
    })))
  }
  get onDidChange(){
    return this._onDidChange.event
  }
  async provideDecorations(e){
    const t=this.explorerService.findClosest(e);
    if(!t)throw new Error("ExplorerItem not found");
    return hly(t)
  }
  dispose(){
    this.toDispose.dispose()
  }
}, pEa=__decorate([__param(0, DC), __param(1, Lr)], pEa)
}
});
function ply(n, e){
  for(const t of e)if(n.hasNode(t)&&!n.isCollapsed(t)){
    for(const[, i]of t.children.entries())if(n.hasNode(i)&&n.isCollapsible(i)&&!n.isCollapsed(i))return!0
  }
  return!1
}
function gly(n, e){
  for(const t of e)if(n.hasNode(t)&&!n.isCollapsed(t))return!0;
  return!1
}
function fly(n, e, t, i){
  let r;
  r=n.length?n[0]:void 0, t&&e.length>1&&(r=void 0);
  const s=r&&i.getCompressedNavigationController(r), o=s&&s.length?s[0]:void 0;
  r=o?o.current:r;
  const a=[];
  for(const l of e){
    const u=i.getCompressedNavigationController(l), d=u&&u.length?u[0]:void 0;
    if(d&&r&&d===o){
      l===r&&a.push(l);
      continue
    }
    d?a.push(...d.items):a.push(l)
  }
  return r?t&&a.indexOf(r)>=0?a:[r]:t?a:[]
}
function zAu(n, e){
  n.classList.add("file-icon-themable-tree"), n.classList.add("show-file-icons");
  const t=i=>{
    n.classList.toggle("align-icons-and-twisties", i.hasFileIcons&&!i.hasFolderIcons), n.classList.toggle("hide-arrows", i.hidesExplorerArrows===!0)
  };
  return t(e.getFileIconTheme()), e.onDidFileIconThemeChange(t)
}
var gEa, WOf, bly, Y1t, VAu, KAu=