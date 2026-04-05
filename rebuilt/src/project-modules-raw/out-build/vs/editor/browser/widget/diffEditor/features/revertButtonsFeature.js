// Module: out-build/vs/editor/browser/widget/diffEditor/features/revertButtonsFeature.js
// Offset: 2343997 (bundle byte offset)
// Size: 2544 bytes

ri(), bS(), qi(), rt(), Uc(), Ix(), ts(), WY(), xw(), Ht(), H5o=[], tSh=class extends at{
  constructor(n, e, t, i){
    super(), this._editors=n, this._diffModel=e, this._options=t, this._widget=i, this._selectedDiffs=Ro(this, r=>{
      const o=this._diffModel.read(r)?.diff.read(r);
      if(!o)return H5o;
      const a=this._editors.modifiedSelections.read(r);
      if(a.every(m=>m.isEmpty()))return H5o;
      const l=new xVe(a.map(m=>rh.fromRangeInclusive(m))),d=o.mappings.filter(m=>m.lineRangeMapping.innerChanges&&l.intersects(m.lineRangeMapping.modified)).map(m=>({
        mapping:m,rangeMappings:m.lineRangeMapping.innerChanges.filter(p=>a.some(g=>Zt.areIntersecting(p.modifiedRange,g)))
      }));
      return d.length===0||d.every(m=>m.rangeMappings.length===0)?H5o:d
    }), this._register(M0((r, s)=>{
      if(!this._options.shouldRenderOldRevertArrows.read(r))return;
      const o=this._diffModel.read(r),a=o?.diff.read(r);
      if(!o||!a||o.movedTextToCompare.read(r))return;
      const l=[],u=this._selectedDiffs.read(r),d=new Set(u.map(m=>m.mapping));
      if(u.length>0){
        const m=this._editors.modifiedSelections.read(r),p=s.add(new cBc(m[m.length-1].positionLineNumber,this._widget,u.flatMap(g=>g.rangeMappings),!0));
        this._editors.modified.addGlyphMarginWidget(p),l.push(p)
      }
      for(const m of a.mappings)if(!d.has(m)&&!m.lineRangeMapping.modified.isEmpty&&m.lineRangeMapping.innerChanges){
        const p=s.add(new cBc(m.lineRangeMapping.modified.startLineNumber,this._widget,m.lineRangeMapping,!1));
        this._editors.modified.addGlyphMarginWidget(p),l.push(p)
      }
      s.add($i(()=>{
        for(const m of l)this._editors.modified.removeGlyphMarginWidget(m)
      }))
    }))
  }
}, cBc=class MGb extends at{
  static{
    this.counter=0
  }
  getId(){
    return this._id
  }
  constructor(e, t, i, r){
    super(), this._lineNumber=e, this._widget=t, this._diffs=i, this._revertSelection=r, this._id=`revertButton${MGb.counter++}`, this._domNode=kl("div.revertButton", {
      title:this._revertSelection?_(258,null):_(259,null)
    }, [tL(Be.arrowRight)]).root, this._register(ei(this._domNode, ir.MOUSE_DOWN, s=>{
      s.button!==2&&(s.stopPropagation(),s.preventDefault())
    })), this._register(ei(this._domNode, ir.MOUSE_UP, s=>{
      s.stopPropagation(),s.preventDefault()
    })), this._register(ei(this._domNode, ir.CLICK, s=>{
      this._diffs instanceof Wde?this._widget.revert(this._diffs):this._widget.revertRangeMappings(this._diffs),s.stopPropagation(),s.preventDefault()
    }))
  }
  getDomNode(){
    return this._domNode
  }
  getPosition(){
    return{
      lane:G$.Right,range:{
        startColumn:1,startLineNumber:this._lineNumber,endColumn:1,endLineNumber:this._lineNumber
      },zIndex:10001
    }
  }
}
}
}), phA=