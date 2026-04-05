// Module: out-build/vs/editor/browser/viewParts/decorations/decorations.js
// Offset: 1628424 (bundle byte offset)
// Size: 3288 bytes

McA(), WVe(), e3t(), ts(), _Ah=class extends p9e{
  constructor(n){
    super(), this._context=n;
    const e=this._context.configuration.options;
    this._typicalHalfwidthCharacterWidth=e.get(52).typicalHalfwidthCharacterWidth, this._renderResult=null, this._context.addEventHandler(this)
  }
  dispose(){
    this._context.removeEventHandler(this), this._renderResult=null, super.dispose()
  }
  onConfigurationChanged(n){
    const e=this._context.configuration.options;
    return this._typicalHalfwidthCharacterWidth=e.get(52).typicalHalfwidthCharacterWidth, !0
  }
  onDecorationsChanged(n){
    return!0
  }
  onFlushed(n){
    return!0
  }
  onLinesChanged(n){
    return!0
  }
  onLinesDeleted(n){
    return!0
  }
  onLinesInserted(n){
    return!0
  }
  onScrollChanged(n){
    return n.scrollTopChanged||n.scrollWidthChanged
  }
  onZonesChanged(n){
    return!0
  }
  prepareRender(n){
    const e=n.getDecorationsInViewport();
    let t=[], i=0;
    for(let a=0, l=e.length;
    a<l;
    a++){
      const u=e[a];
      u.options.className&&(t[i++]=u)
    }
    t=t.sort((a, l)=>{
      if(a.options.zIndex<l.options.zIndex)return-1;
      if(a.options.zIndex>l.options.zIndex)return 1;
      const u=a.options.className,d=l.options.className;
      return u<d?-1:u>d?1:Zt.compareRangesUsingStarts(a.range,l.range)
    });
    const r=n.visibleRange.startLineNumber, s=n.visibleRange.endLineNumber, o=[];
    for(let a=r;
    a<=s;
    a++){
      const l=a-r;
      o[l]=""
    }
    this._renderWholeLineDecorations(n, t, o), this._renderNormalDecorations(n, t, o), this._renderResult=o
  }
  _renderWholeLineDecorations(n, e, t){
    const i=n.visibleRange.startLineNumber, r=n.visibleRange.endLineNumber;
    for(let s=0, o=e.length;
    s<o;
    s++){
      const a=e[s];
      if(!a.options.isWholeLine)continue;
      const l='<div class="cdr '+a.options.className+'" style="left:0;width:100%;"></div>',u=Math.max(a.range.startLineNumber,i),d=Math.min(a.range.endLineNumber,r);
      for(let m=u;
      m<=d;
      m++){
        const p=m-i;
        t[p]+=l
      }
    }
  }
  _renderNormalDecorations(n, e, t){
    const i=n.visibleRange.startLineNumber;
    let r=null, s=!1, o=null, a=!1;
    for(let l=0, u=e.length;
    l<u;
    l++){
      const d=e[l];
      if(d.options.isWholeLine)continue;
      const m=d.options.className,p=!!d.options.showIfCollapsed;
      let g=d.range;
      if(p&&g.endColumn===1&&g.endLineNumber!==g.startLineNumber&&(g=new Zt(g.startLineNumber,g.startColumn,g.endLineNumber-1,this._context.viewModel.getLineMaxColumn(g.endLineNumber-1))),r===m&&s===p&&Zt.areIntersectingOrTouching(o,g)){
        o=Zt.plusRange(o,g);
        continue
      }
      r!==null&&this._renderNormalDecoration(n,o,r,a,s,i,t),r=m,s=p,o=g,a=d.options.shouldFillLineOnLineBreak??!1
    }
    r!==null&&this._renderNormalDecoration(n, o, r, a, s, i, t)
  }
  _renderNormalDecoration(n, e, t, i, r, s, o){
    const a=n.linesVisibleRangesForRange(e, t==="findMatch");
    if(a)for(let l=0, u=a.length;
    l<u;
    l++){
      const d=a[l];
      if(d.outsideRenderedLine)continue;
      const m=d.lineNumber-s;
      if(r&&d.ranges.length===1){
        const p=d.ranges[0];
        if(p.width<this._typicalHalfwidthCharacterWidth){
          const g=Math.round(p.left+p.width/2),f=Math.max(0,Math.round(g-this._typicalHalfwidthCharacterWidth/2));
          d.ranges[0]=new e3o(f,this._typicalHalfwidthCharacterWidth)
        }
      }
      for(let p=0,g=d.ranges.length;
      p<g;
      p++){
        const f=i&&d.continuesOnNextLine&&g===1,A=d.ranges[p],w='<div class="cdr '+t+'" style="left:'+String(A.left)+"px;width:"+(f?"100%;":String(A.width)+"px;")+'"></div>';
        o[m]+=w
      }
    }
  }
  render(n, e){
    if(!this._renderResult)return"";
    const t=e-n;
    return t<0||t>=this._renderResult.length?"":this._renderResult[t]
  }
}
}
}), CAh, OcA=