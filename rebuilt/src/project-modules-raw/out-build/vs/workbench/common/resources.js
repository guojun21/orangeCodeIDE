// Module: out-build/vs/workbench/common/resources.js
// Offset: 28018245 (bundle byte offset)
// Size: 2968 bytes

Yn(), np(), Hl(), yn(), Yr(), rt(), iR(), ps(), Ei(), zr(), cu(), d2(), ikt=class extends at{
  static{
    jNe=this
  }
  static{
    this.NO_FOLDER=null
  }
  constructor(e, t, i, r){
    super(), this.getExpression=e, this.shouldUpdate=t, this.contextService=i, this.configurationService=r, this._onExpressionChange=this._register(new Qe), this.onExpressionChange=this._onExpressionChange.event, this.mapFolderToParsedExpression=new Map, this.mapFolderToConfiguredExpression=new Map, this.updateExpressions(!1), this.registerListeners()
  }
  registerListeners(){
    this._register(this.configurationService.onDidChangeConfiguration(e=>{
      this.shouldUpdate(e)&&this.updateExpressions(!0)
    })), this._register(this.contextService.onDidChangeWorkspaceFolders(()=>this.updateExpressions(!0)))
  }
  updateExpressions(e){
    let t=!1;
    for(const o of this.contextService.getWorkspace().folders){
      const a=o.uri.toString(),l=this.doGetExpression(o.uri),u=this.mapFolderToConfiguredExpression.get(a);
      l?(!u||!fv(u.expression,l.expression))&&(t=!0,this.mapFolderToParsedExpression.set(a,jae(l.expression)),this.mapFolderToConfiguredExpression.set(a,l)):u&&(t=!0,this.mapFolderToParsedExpression.delete(a),this.mapFolderToConfiguredExpression.delete(a))
    }
    const i=new lT(this.contextService.getWorkspace().folders.map(o=>o.uri));
    for(const[o]of this.mapFolderToConfiguredExpression)o!==jNe.NO_FOLDER&&(i.has(je.parse(o))||(this.mapFolderToParsedExpression.delete(o), this.mapFolderToConfiguredExpression.delete(o), t=!0));
    const r=this.doGetExpression(void 0), s=this.mapFolderToConfiguredExpression.get(jNe.NO_FOLDER);
    r?(!s||!fv(s.expression, r.expression))&&(t=!0, this.mapFolderToParsedExpression.set(jNe.NO_FOLDER, jae(r.expression)), this.mapFolderToConfiguredExpression.set(jNe.NO_FOLDER, r)):s&&(t=!0, this.mapFolderToParsedExpression.delete(jNe.NO_FOLDER), this.mapFolderToConfiguredExpression.delete(jNe.NO_FOLDER)), e&&t&&this._onExpressionChange.fire()
  }
  doGetExpression(e){
    const t=this.getExpression(e);
    if(!t)return;
    const i=Object.keys(t);
    if(i.length===0)return;
    let r=!1;
    const s=Object.create(null);
    for(const o of i){
      r||(r=FR(o));
      let a=o;
      const l=tCc(a,!0);
      if(l){
        const u=l.toLowerCase();
        l!==l.toLowerCase()&&(a=`${u}${a.substring(1)}`)
      }
      s[a]=t[o]
    }
    return{
      expression:s,hasAbsolutePath:r
    }
  }
  matches(e, t){
    if(this.mapFolderToParsedExpression.size===0)return!1;
    const i=this.contextService.getWorkspaceFolder(e);
    let r, s;
    if(i&&this.mapFolderToParsedExpression.has(i.uri.toString())?(r=this.mapFolderToParsedExpression.get(i.uri.toString()), s=this.mapFolderToConfiguredExpression.get(i.uri.toString())):(r=this.mapFolderToParsedExpression.get(jNe.NO_FOLDER), s=this.mapFolderToConfiguredExpression.get(jNe.NO_FOLDER)), !r)return!1;
    let o;
    return i?o=eN(i.uri, e):o=this.uriToPath(e), typeof o=="string"&&r(o, void 0, t)?!0:o!==this.uriToPath(e)&&s?.hasAbsolutePath?!!r(this.uriToPath(e), void 0, t):!1
  }
  uriToPath(e){
    return e.scheme===_n.file?e.fsPath:e.path
  }
}, ikt=jNe=__decorate([__param(2, Lr), __param(3, Fn)], ikt)
}
}), XS, xT=