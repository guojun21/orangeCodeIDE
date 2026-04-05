// Module: out-build/vs/workbench/contrib/notebook/browser/diff/editorHeightCalculator.js
// Offset: 33639068 (bundle byte offset)
// Size: 2597 bytes

x3n(), Hk(), td(), Ei(), dIa(), Prt(), Oki=class{
  constructor(e, t, i, r){
    this.lineHeight=e, this.textModelResolverService=t, this.editorWorkerService=i, this.configurationService=r
  }
  async diffAndComputeHeight(e, t){
    const[i, r]=await Promise.all([this.textModelResolverService.createModelReference(e), this.textModelResolverService.createModelReference(t)]);
    try{
      const s=await this.editorWorkerService.computeDiff(e,t,{
        ignoreTrimWhitespace:!0,maxComputationTimeMs:0,computeMoves:!1
      },"advanced").then(x=>x?.changes||[]),o=this.configurationService.getValue("diffEditor.hideUnchangedRegions.enabled"),a=this.configurationService.getValue("diffEditor.hideUnchangedRegions.minimumLineCount"),l=this.configurationService.getValue("diffEditor.hideUnchangedRegions.contextLineCount"),u=i.object.textEditorModel.getLineCount(),d=r.object.textEditorModel.getLineCount(),m=o?M3t.fromDiffs(s,u,d,a??3,l??3):[],p=s.reduce((x,I)=>I.original.isEmpty&&!I.modified.isEmpty?x+I.modified.length:!I.original.isEmpty&&!I.modified.isEmpty&&I.modified.length>I.original.length?x+I.modified.length-I.original.length:x,0),g=i.object.textEditorModel.getLineCount(),f=m.reduce((x,I)=>x+I.lineCount,0),w=m.length*A6f,C=g+p-f;
      return C*this.lineHeight+g2e(C).top+g2e(C).bottom+w
    }
    finally{
      i.dispose(),r.dispose()
    }
  }
  computeHeightFromLines(e){
    return e*this.lineHeight+g2e(e).top+g2e(e).bottom
  }
}, Oki=__decorate([__param(1, El), __param(2, c_), __param(3, Fn)], Oki)
}
});
function z_u(n){
  return n.originalEndLineNumber===0?Xce.Add:n.modifiedEndLineNumber===0?Xce.Delete:Xce.Modify
}
function Ehy(n, e){
  switch(e){
    case Xce.Modify:return n.getColor(SIa);
    case Xce.Add:return n.getColor(kIa);
    case Xce.Delete:return n.getColor(EIa)
  }
}
function P6f(n, e){
  let t=n.modifiedStartLineNumber-e.modifiedStartLineNumber;
  return t!==0||(t=n.modifiedEndLineNumber-e.modifiedEndLineNumber, t!==0)||(t=n.originalStartLineNumber-e.originalStartLineNumber, t!==0)?t:n.originalEndLineNumber-e.originalEndLineNumber
}
function xhy(n){
  const e=n.modifiedEndLineNumber-n.modifiedStartLineNumber+1, t=n.originalEndLineNumber-n.originalStartLineNumber+1;
  return n.originalEndLineNumber===0?e:n.modifiedEndLineNumber===0?t:e+t
}
function V_u(n){
  return n.modifiedEndLineNumber===0?n.modifiedStartLineNumber===0?1:n.modifiedStartLineNumber:n.modifiedEndLineNumber
}
function Thy(n, e){
  return n===1&&e.modifiedStartLineNumber===0&&e.modifiedEndLineNumber===0?!0:n>=e.modifiedStartLineNumber&&n<=(e.modifiedEndLineNumber||e.modifiedStartLineNumber)
}
var Gbn, SIa, kIa, EIa, Uki, $ki, xIa, Wbn, Qbn, qki, Ihy, Dhy, Xce, pwe=