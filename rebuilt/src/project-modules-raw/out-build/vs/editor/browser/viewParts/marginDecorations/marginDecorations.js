// Module: out-build/vs/editor/browser/viewParts/marginDecorations/marginDecorations.js
// Offset: 1672087 (bundle byte offset)
// Size: 1187 bytes

KcA(), qTc(), UAh=class extends $Tc{
  constructor(n){
    super(), this._context=n, this._renderResult=null, this._context.addEventHandler(this)
  }
  dispose(){
    this._context.removeEventHandler(this), this._renderResult=null, super.dispose()
  }
  onConfigurationChanged(n){
    return!0
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
      const o=e[r],a=o.options.marginClassName,l=o.options.zIndex;
      a&&(t[i++]=new h3o(o.range.startLineNumber,o.range.endLineNumber,a,null,l))
    }
    return t
  }
  prepareRender(n){
    const e=n.visibleRange.startLineNumber, t=n.visibleRange.endLineNumber, i=this._render(e, t, this._getDecorations(n)), r=[];
    for(let s=e;
    s<=t;
    s++){
      const o=s-e,a=i[o].getDecorations();
      let l="";
      for(const u of a)l+='<div class="cmdr '+u.className+'" style=""></div>';
      r[o]=l
    }
    this._renderResult=r
  }
  render(n, e){
    return this._renderResult?this._renderResult[e-n]:""
  }
}
}
}), ZcA=