// Module: out-build/vs/editor/browser/widget/diffEditor/components/diffEditorSash.js
// Offset: 2263760 (bundle byte offset)
// Size: 1673 bytes

jSe(), rt(), Uc(), ICh=class{
  resetSash(){
    this._sashRatio.set(void 0, void 0)
  }
  constructor(n, e){
    this._options=n, this.dimensions=e, this.sashLeft=MSc(this, t=>{
      const i=this._sashRatio.read(t)??this._options.splitViewDefaultRatio.read(t);
      return this._computeSashLeft(i,t)
    }, (t, i)=>{
      const r=this.dimensions.width.get();
      this._sashRatio.set(t/r,i)
    }), this._sashRatio=Ua(this, void 0)
  }
  _computeSashLeft(n, e){
    const t=this.dimensions.width.read(e), i=Math.floor(this._options.splitViewDefaultRatio.read(e)*t), r=this._options.enableSplitViewResizing.read(e)?Math.floor(n*t):i, s=100;
    return t<=s*2?i:r<s?s:r>t-s?t-s:r
  }
}, jDc=class extends at{
  constructor(n, e, t, i, r, s){
    super(), this._domNode=n, this._dimensions=e, this._enabled=t, this._boundarySashes=i, this.sashLeft=r, this._resetSash=s, this._sash=this._register(new Qde(this._domNode, {
      getVerticalSashTop:o=>0,getVerticalSashLeft:o=>this.sashLeft.get(),getVerticalSashHeight:o=>this._dimensions.height.get()
    }, {
      orientation:0
    })), this._startSashPosition=void 0, this._register(this._sash.onDidStart(()=>{
      this._startSashPosition=this.sashLeft.get()
    })), this._register(this._sash.onDidChange(o=>{
      this.sashLeft.set(this._startSashPosition+(o.currentX-o.startX),void 0)
    })), this._register(this._sash.onDidEnd(()=>this._sash.layout())), this._register(this._sash.onDidReset(()=>this._resetSash())), this._register(Oc(o=>{
      const a=this._boundarySashes.read(o);
      a&&(this._sash.orthogonalEndSash=a.bottom)
    })), this._register(Oc(o=>{
      const a=this._enabled.read(o);
      this._sash.state=a?3:0,this.sashLeft.read(o),this._dimensions.height.read(o),this._sash.layout()
    }))
  }
}
}
}), BCh, ehA=