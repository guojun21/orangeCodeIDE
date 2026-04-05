// Module: out-build/vs/editor/browser/widget/diffEditor/components/diffEditorDecorations.js
// Offset: 2235836 (bundle byte offset)
// Size: 2787 bytes

rt(), Uc(), k5o(), _Ch(), B3t(), Gde(), CCh=class extends at{
  constructor(n, e, t, i){
    super(), this._editors=n, this._diffModel=e, this._options=t, this._decorations=Ro(this, r=>{
      const s=this._diffModel.read(r),o=s?.diff.read(r);
      if(!o)return null;
      const a=this._diffModel.read(r).movedTextToCompare.read(r),l=this._options.renderIndicators.read(r),u=this._options.showEmptyDecorations.read(r),d=[],m=[];
      if(!a)for(const g of o.mappings)if(g.lineRangeMapping.original.isEmpty||d.push({
        range:g.lineRangeMapping.original.toInclusiveRange(),options:l?IDc:BDc
      }),g.lineRangeMapping.modified.isEmpty||m.push({
        range:g.lineRangeMapping.modified.toInclusiveRange(),options:l?TDc:DDc
      }),g.lineRangeMapping.modified.isEmpty||g.lineRangeMapping.original.isEmpty)g.lineRangeMapping.original.isEmpty||d.push({
        range:g.lineRangeMapping.original.toInclusiveRange(),options:V0h
      }),g.lineRangeMapping.modified.isEmpty||m.push({
        range:g.lineRangeMapping.modified.toInclusiveRange(),options:f5o
      });
      else{
        const f=this._options.useTrueInlineDiffRendering.read(r)&&qDc(g.lineRangeMapping);
        for(const A of g.lineRangeMapping.innerChanges||[])if(g.lineRangeMapping.original.contains(A.originalRange.startLineNumber)&&d.push({
          range:A.originalRange,options:A.originalRange.isEmpty()&&u?K0h:D3t
        }),g.lineRangeMapping.modified.contains(A.modifiedRange.startLineNumber)&&m.push({
          range:A.modifiedRange,options:A.modifiedRange.isEmpty()&&u&&!f?z0h:_3n
        }),f){
          const w=s.model.original.getValueInRange(A.originalRange);
          m.push({
            range:A.modifiedRange,options:{
              description:"deleted-text",before:{
                content:w,inlineClassName:"inline-deleted-text"
              },zIndex:1e5,showIfCollapsed:!0
            }
          })
        }
      }
      if(a)for(const g of a.changes){
        const f=g.original.toInclusiveRange();
        f&&d.push({
          range:f,options:l?IDc:BDc
        });
        const A=g.modified.toInclusiveRange();
        A&&m.push({
          range:A,options:l?TDc:DDc
        });
        for(const w of g.innerChanges||[])d.push({
          range:w.originalRange,options:D3t
        }),m.push({
          range:w.modifiedRange,options:_3n
        })
      }
      const p=this._diffModel.read(r).activeMovedText.read(r);
      for(const g of o.movedTexts)d.push({
        range:g.lineRangeMapping.original.toInclusiveRange(),options:{
          description:"moved",blockClassName:"movedOriginal"+(g===p?" currentMove":""),blockPadding:[T3n.movedCodeBlockPadding,0,T3n.movedCodeBlockPadding,T3n.movedCodeBlockPadding]
        }
      }),m.push({
        range:g.lineRangeMapping.modified.toInclusiveRange(),options:{
          description:"moved",blockClassName:"movedModified"+(g===p?" currentMove":""),blockPadding:[4,0,4,4]
        }
      });
      return{
        originalDecorations:d,modifiedDecorations:m
      }
    }), this._register(t5o(this._editors.original, this._decorations.map(r=>r?.originalDecorations||[]))), this._register(t5o(this._editors.modified, this._decorations.map(r=>r?.modifiedDecorations||[])))
  }
}
}
}), Koe, F3t=