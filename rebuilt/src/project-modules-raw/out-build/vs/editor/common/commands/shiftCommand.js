// Module: out-build/vs/editor/common/commands/shiftCommand.js
// Offset: 796271 (bundle byte offset)
// Size: 3405 bytes

oa(), koe(), ts(), db(), s1c(), QE(), m4o=Object.create(null), xoe=h4o=class{
  static unshiftIndent(e, t, i, r, s){
    const o=ZP.visibleColumnFromColumn(e, t, i);
    if(s){
      const a=ift(" ",r),u=ZP.prevIndentTabStop(o,r)/r;
      return ift(a,u)
    }
    else{
      const u=ZP.prevRenderTabStop(o,i)/i;
      return ift("	",u)
    }
  }
  static shiftIndent(e, t, i, r, s){
    const o=ZP.visibleColumnFromColumn(e, t, i);
    if(s){
      const a=ift(" ",r),u=ZP.nextIndentTabStop(o,r)/r;
      return ift(a,u)
    }
    else{
      const u=ZP.nextRenderTabStop(o,i)/i;
      return ift("	",u)
    }
  }
  constructor(e, t, i){
    this._languageConfigurationService=i, this._opts=t, this._selection=e, this._selectionId=null, this._useLastEditRangeForCursorEndPosition=!1, this._selectionStartColumnStaysPut=!1
  }
  _addEditOperation(e, t, i){
    this._useLastEditRangeForCursorEndPosition?e.addTrackedEditOperation(t, i):e.addEditOperation(t, i)
  }
  getEditOperations(e, t){
    const i=this._selection.startLineNumber;
    let r=this._selection.endLineNumber;
    this._selection.endColumn===1&&i!==r&&(r=r-1);
    const{
      tabSize:s,indentSize:o,insertSpaces:a
    }
    =this._opts, l=i===r;
    if(this._opts.useTabStops){
      this._selection.isEmpty()&&/^\s*$/.test(e.getLineContent(i))&&(this._useLastEditRangeForCursorEndPosition=!0);
      let u=0,d=0;
      for(let m=i;
      m<=r;
      m++,u=d){
        d=0;
        const p=e.getLineContent(m);
        let g=TH(p);
        if(this._opts.isUnshift&&(p.length===0||g===0)||!l&&!this._opts.isUnshift&&p.length===0)continue;
        if(g===-1&&(g=p.length),m>1&&ZP.visibleColumnFromColumn(p,g+1,s)%o!==0&&e.tokenization.isCheapToTokenize(m-1)){
          const w=j4t(this._opts.autoIndent,e,new Zt(m-1,e.getLineMaxColumn(m-1),m-1,e.getLineMaxColumn(m-1)),this._languageConfigurationService);
          if(w){
            if(d=u,w.appendText)for(let C=0,x=w.appendText.length;
            C<x&&d<o&&w.appendText.charCodeAt(C)===32;
            C++)d++;
            w.removeText&&(d=Math.max(0,d-w.removeText));
            for(let C=0;
            C<d&&!(g===0||p.charCodeAt(g-1)!==32);
            C++)g--
          }
        }
        if(this._opts.isUnshift&&g===0)continue;
        let f;
        this._opts.isUnshift?f=h4o.unshiftIndent(p,g+1,s,o,a):f=h4o.shiftIndent(p,g+1,s,o,a),this._addEditOperation(t,new Zt(m,1,m,g+1),f),m===i&&!this._selection.isEmpty()&&(this._selectionStartColumnStaysPut=this._selection.startColumn<=g+1)
      }
    }
    else{
      !this._opts.isUnshift&&this._selection.isEmpty()&&e.getLineLength(i)===0&&(this._useLastEditRangeForCursorEndPosition=!0);
      const u=a?ift(" ",o):"	";
      for(let d=i;
      d<=r;
      d++){
        const m=e.getLineContent(d);
        let p=TH(m);
        if(!(this._opts.isUnshift&&(m.length===0||p===0))&&!(!l&&!this._opts.isUnshift&&m.length===0)&&(p===-1&&(p=m.length),!(this._opts.isUnshift&&p===0)))if(this._opts.isUnshift){
          p=Math.min(p,o);
          for(let g=0;
          g<p;
          g++)if(m.charCodeAt(g)===9){
            p=g+1;
            break
          }
          this._addEditOperation(t,new Zt(d,1,d,p+1),"")
        }
        else this._addEditOperation(t,new Zt(d,1,d,1),u),d===i&&!this._selection.isEmpty()&&(this._selectionStartColumnStaysPut=this._selection.startColumn===1)
      }
    }
    this._selectionId=t.trackSelection(this._selection)
  }
  computeCursorState(e, t){
    if(this._useLastEditRangeForCursorEndPosition){
      const r=t.getInverseEditOperations()[0];
      return new Vl(r.range.endLineNumber,r.range.endColumn,r.range.endLineNumber,r.range.endColumn)
    }
    const i=t.getTrackedSelection(this._selectionId);
    if(this._selectionStartColumnStaysPut){
      const r=this._selection.startColumn;
      return i.startColumn<=r?i:i.getDirection()===0?new Vl(i.startLineNumber,r,i.endLineNumber,i.endColumn):new Vl(i.endLineNumber,i.endColumn,i.startLineNumber,r)
    }
    return i
  }
}, xoe=h4o=__decorate([__param(2, JS)], xoe)
}
}), Elh, xlh, Tlh=