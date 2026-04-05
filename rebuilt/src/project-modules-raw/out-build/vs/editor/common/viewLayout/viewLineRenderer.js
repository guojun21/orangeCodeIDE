// Module: out-build/vs/editor/common/viewLayout/viewLineRenderer.js
// Offset: 1490256 (bundle byte offset)
// Size: 4995 bytes

Ht(), oa(), kSe(), HVe(), acA(), (function(n){
  n[n.None=0]="None", n[n.Boundary=1]="Boundary", n[n.Selection=2]="Selection", n[n.Trailing=3]="Trailing", n[n.All=4]="All"
})(Evh||(Evh={
  
})), ATc=class{
  constructor(n, e){
    this.startOffset=n, this.endOffset=e
  }
  equals(n){
    return this.startOffset===n.startOffset&&this.endOffset===n.endOffset
  }
}, JVe=class{
  constructor(n, e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x){
    this.useMonospaceOptimizations=n, this.canUseHalfwidthRightwardsArrow=e, this.lineContent=t, this.continuesWithWrappedLine=i, this.isBasicASCII=r, this.containsRTL=s, this.fauxIndentLength=o, this.lineTokens=a, this.lineDecorations=l.sort(lz.compare), this.tabSize=u, this.startVisibleColumn=d, this.spaceWidth=m, this.stopRenderingLineAfter=f, this.renderWhitespace=A==="all"?4:A==="boundary"?1:A==="selection"?2:A==="trailing"?3:0, this.renderControlCharacters=w, this.fontLigatures=C, this.selectionsOnLine=x&&x.sort((R, N)=>R.startOffset<N.startOffset?-1:1);
    const I=Math.abs(g-m), B=Math.abs(p-m);
    I<B?(this.renderSpaceWidth=g, this.renderSpaceCharCode=11825):(this.renderSpaceWidth=p, this.renderSpaceCharCode=183)
  }
  sameSelection(n){
    if(this.selectionsOnLine===null)return n===null;
    if(n===null||n.length!==this.selectionsOnLine.length)return!1;
    for(let e=0;
    e<this.selectionsOnLine.length;
    e++)if(!this.selectionsOnLine[e].equals(n[e]))return!1;
    return!0
  }
  equals(n){
    return this.useMonospaceOptimizations===n.useMonospaceOptimizations&&this.canUseHalfwidthRightwardsArrow===n.canUseHalfwidthRightwardsArrow&&this.lineContent===n.lineContent&&this.continuesWithWrappedLine===n.continuesWithWrappedLine&&this.isBasicASCII===n.isBasicASCII&&this.containsRTL===n.containsRTL&&this.fauxIndentLength===n.fauxIndentLength&&this.tabSize===n.tabSize&&this.startVisibleColumn===n.startVisibleColumn&&this.spaceWidth===n.spaceWidth&&this.renderSpaceWidth===n.renderSpaceWidth&&this.renderSpaceCharCode===n.renderSpaceCharCode&&this.stopRenderingLineAfter===n.stopRenderingLineAfter&&this.renderWhitespace===n.renderWhitespace&&this.renderControlCharacters===n.renderControlCharacters&&this.fontLigatures===n.fontLigatures&&lz.equalsArr(this.lineDecorations, n.lineDecorations)&&this.lineTokens.equals(n.lineTokens)&&this.sameSelection(n.selectionsOnLine)
  }
}, (function(n){
  n[n.PART_INDEX_MASK=4294901760]="PART_INDEX_MASK", n[n.CHAR_INDEX_MASK=65535]="CHAR_INDEX_MASK", n[n.CHAR_INDEX_OFFSET=0]="CHAR_INDEX_OFFSET", n[n.PART_INDEX_OFFSET=16]="PART_INDEX_OFFSET"
})(xvh||(xvh={
  
})), yTc=class{
  constructor(n, e){
    this.partIndex=n, this.charIndex=e
  }
}, n3o=class vJe{
  static getPartIndex(e){
    return(e&4294901760)>>>16
  }
  static getCharIndex(e){
    return(e&65535)>>>0
  }
  constructor(e, t){
    this.length=e, this._data=new Uint32Array(this.length), this._horizontalOffset=new Uint32Array(this.length)
  }
  setColumnInfo(e, t, i, r){
    const s=(t<<16|i<<0)>>>0;
    this._data[e-1]=s, this._horizontalOffset[e-1]=r
  }
  getHorizontalOffset(e){
    return this._horizontalOffset.length===0?0:this._horizontalOffset[e-1]
  }
  charOffsetToPartData(e){
    return this.length===0?0:e<0?this._data[0]:e>=this.length?this._data[this.length-1]:this._data[e]
  }
  getDomPosition(e){
    const t=this.charOffsetToPartData(e-1), i=vJe.getPartIndex(t), r=vJe.getCharIndex(t);
    return new yTc(i, r)
  }
  getColumn(e, t){
    return this.partDataToCharOffset(e.partIndex, t, e.charIndex)+1
  }
  partDataToCharOffset(e, t, i){
    if(this.length===0)return 0;
    const r=(e<<16|i<<0)>>>0;
    let s=0, o=this.length-1;
    for(;
    s+1<o;
    ){
      const A=s+o>>>1,w=this._data[A];
      if(w===r)return A;
      w>r?o=A:s=A
    }
    if(s===o)return s;
    const a=this._data[s], l=this._data[o];
    if(a===r)return s;
    if(l===r)return o;
    const u=vJe.getPartIndex(a), d=vJe.getCharIndex(a), m=vJe.getPartIndex(l);
    let p;
    u!==m?p=t:p=vJe.getCharIndex(l);
    const g=i-d, f=p-i;
    return g<=f?s:o
  }
  inflate(){
    const e=[];
    for(let t=0;
    t<this.length;
    t++){
      const i=this._data[t],r=vJe.getPartIndex(i),s=vJe.getCharIndex(i),o=this._horizontalOffset[t];
      e.push([r,s,o])
    }
    return e
  }
}, (function(n){
  n[n.None=0]="None", n[n.Before=1]="Before", n[n.After=2]="After"
})(Tvh||(Tvh={
  
})), i3o=class{
  constructor(n, e, t){
    this._renderLineOutputBrand=void 0, this.characterMapping=n, this.containsRTL=e, this.containsForeignElements=t
  }
}, Ivh=class{
  constructor(n, e, t, i){
    this.characterMapping=n, this.html=e, this.containsRTL=t, this.containsForeignElements=i
  }
}, Dvh=class{
  constructor(n, e, t, i, r, s, o, a, l, u, d, m, p, g, f, A){
    this.fontIsMonospace=n, this.canUseHalfwidthRightwardsArrow=e, this.lineContent=t, this.len=i, this.isOverflowing=r, this.overflowingCharCount=s, this.parts=o, this.containsForeignElements=a, this.fauxIndentLength=l, this.tabSize=u, this.startVisibleColumn=d, this.containsRTL=m, this.spaceWidth=p, this.renderSpaceCharCode=g, this.renderWhitespace=f, this.renderControlCharacters=A
  }
}, (function(n){
  n[n.LongToken=50]="LongToken"
})(Bvh||(Bvh={
  
}))
}
});
function vcA(n, e, t, i, r){
  return new Lvh(n, e, t, i, r)
}
function AcA(n, e, t, i, r){
  return new _Tc(n, e, t, i, r)
}
function wTc(n, e, t){
  const i=e.textContent.length;
  let r=-1;
  for(;
  e;
  )e=e.previousSibling, r++;
  return n.getColumn(new yTc(r, t), i)
}
var Rvh, jft, GVe, Pvh, QOn, _Tc, Lvh, CTc, STc=