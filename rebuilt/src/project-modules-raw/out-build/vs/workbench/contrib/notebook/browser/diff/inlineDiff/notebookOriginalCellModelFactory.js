// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookOriginalCellModelFactory.js
// Offset: 33642831 (bundle byte offset)
// Size: 1646 bytes

rt(), Wt(), ph(), Yn(), Ku(), hd(), K_u=xi("INotebookOriginalCellModelFactory"), TIa=class extends igt{
  constructor(e, t){
    super(), this.modelService=e, this._languageService=t
  }
  createReferencedObject(e, t, i, r, s){
    const o=`${t.scheme}-chat-edit`, a=je.from({
      scheme:o,fragment:t.fragment,path:t.path
    }), l=this._languageService.getLanguageIdByLanguageName(r)?this._languageService.createById(r):s===zd.Markup?this._languageService.createById("markdown"):null;
    return this.modelService.createModel(i, l, a)
  }
  destroyReferencedObject(e, t){
    t.dispose()
  }
}, TIa=__decorate([__param(0, Il), __param(1, Jl)], TIa), IIa=class{
  constructor(e){
    this._data=e.createInstance(TIa)
  }
  getOrCreate(e, t, i, r){
    return this._data.acquire(e.toString(), e, t, i, r)
  }
}, IIa=__decorate([__param(0, ln)], IIa)
}
});
function Bhy(n, e){
  return n&&e?!(n.changes.length!==e.changes.length||n.moves.length!==e.moves.length||!N6f(n.changes, e.changes)||!n.moves.some((t, i)=>{
    const r=e.moves[i];
    return!N6f(t.changes, r.changes)||t.lineRangeMapping.changedLineCount!==r.lineRangeMapping.changedLineCount||!t.lineRangeMapping.modified.equals(r.lineRangeMapping.modified)||!t.lineRangeMapping.original.equals(r.lineRangeMapping.original)
  })):!n&&!e
}
function N6f(n, e){
  return!(n.length!==e.length||n.some((t, i)=>{
    const r=e[i];
    return!!(t.changedLineCount!==r.changedLineCount||(t.innerChanges||[]).length!==(r.innerChanges||[]).length||(t.innerChanges||[]).some((s, o)=>{
      const a=r.innerChanges[o];
      return!s.modifiedRange.equalsRange(a.modifiedRange)||!s.originalRange.equalsRange(a.originalRange)
    }))
  }))
}
var DIa, Rhy=