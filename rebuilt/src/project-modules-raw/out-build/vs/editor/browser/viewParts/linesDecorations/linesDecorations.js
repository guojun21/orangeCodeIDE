// Module: out-build/vs/editor/browser/viewParts/linesDecorations/linesDecorations.js
// Offset: 1668387 (bundle byte offset)
// Size: 1820 bytes

jcA(), qTc(), FAh=class extends $Tc{
  constructor(n){
    super(), this._context=n;
    const t=this._context.configuration.options.get(151);
    this._decorationsLeft=t.decorationsLeft, this._decorationsWidth=t.decorationsWidth, this._renderResult=null, this._context.addEventHandler(this)
  }
  dispose(){
    this._context.removeEventHandler(this), this._renderResult=null, super.dispose()
  }
  onConfigurationChanged(n){
    const t=this._context.configuration.options.get(151);
    return this._decorationsLeft=t.decorationsLeft, this._decorationsWidth=t.decorationsWidth, !0
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
    return n.scrollTopChanged
  }
  onZonesChanged(n){
    return!0
  }
  _getDecorations(n){
    const e=n.getDecorationsInViewport(), t=[];
    let i=0;
    for(let r=0, s=e.length;
    r<s;
    r++){
      const o=e[r],a=o.options.linesDecorationsClassName,l=o.options.zIndex;
      a&&(t[i++]=new h3o(o.range.startLineNumber,o.range.endLineNumber,a,o.options.linesDecorationsTooltip??null,l));
      const u=o.options.firstLineDecorationClassName;
      u&&(t[i++]=new h3o(o.range.startLineNumber,o.range.startLineNumber,u,o.options.linesDecorationsTooltip??null,l))
    }
    return t
  }
  prepareRender(n){
    const e=n.visibleRange.startLineNumber, t=n.visibleRange.endLineNumber, i=this._render(e, t, this._getDecorations(n)), r=this._decorationsLeft.toString(), s=this._decorationsWidth.toString(), o='" style="left:'+r+"px;width:"+s+'px;"></div>', a=[];
    for(let l=e;
    l<=t;
    l++){
      const u=l-e,d=i[u].getDecorations();
      let m="";
      for(const p of d){
        let g='<div class="cldr '+p.className;
        p.tooltip!==null&&(g+='" title="'+p.tooltip),g+=o,m+=g
      }
      a[u]=m
    }
    this._renderResult=a
  }
  render(n, e){
    return this._renderResult?this._renderResult[e-n]:""
  }
}
}
}), VcA=