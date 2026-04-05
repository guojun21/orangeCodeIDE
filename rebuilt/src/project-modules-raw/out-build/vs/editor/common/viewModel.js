// Module: out-build/vs/editor/common/viewModel.js
// Offset: 1368224 (bundle byte offset)
// Size: 1842 bytes

Vs(), oa(), ts(), zxc=class{
  constructor(n, e, t, i){
    this._viewportBrand=void 0, this.top=n|0, this.left=e|0, this.width=t|0, this.height=i|0
  }
}, Ebh=class{
  constructor(n, e){
    this.tabSize=n, this.data=e
  }
}, VOo=class{
  constructor(n, e, t, i, r, s, o){
    this._viewLineDataBrand=void 0, this.content=n, this.continuesWithWrappedLine=e, this.minColumn=t, this.maxColumn=i, this.startVisibleColumn=r, this.tokens=s, this.inlineDecorations=o
  }
}, zOt=class Sad{
  constructor(e, t, i, r, s, o, a, l, u, d){
    this.minColumn=e, this.maxColumn=t, this.content=i, this.continuesWithWrappedLine=r, this.isBasicASCII=Sad.isBasicASCII(i, o), this.containsRTL=Sad.containsRTL(i, this.isBasicASCII, s), this.tokens=a, this.inlineDecorations=l, this.tabSize=u, this.startVisibleColumn=d
  }
  static isBasicASCII(e, t){
    return t?fgt(e):!0
  }
  static containsRTL(e, t, i){
    return!t&&i?Tze(e):!1
  }
}, (function(n){
  n[n.Regular=0]="Regular", n[n.Before=1]="Before", n[n.After=2]="After", n[n.RegularAffectingLetterSpacing=3]="RegularAffectingLetterSpacing"
})(xbh||(xbh={
  
})), Ode=class{
  constructor(n, e, t){
    this.range=n, this.inlineClassName=e, this.type=t
  }
}, Tbh=class{
  constructor(n, e, t, i){
    this.startOffset=n, this.endOffset=e, this.inlineClassName=t, this.inlineClassNameAffectsLetterSpacing=i
  }
  toInlineDecoration(n){
    return new Ode(new Zt(n, this.startOffset+1, n, this.endOffset+1), this.inlineClassName, this.inlineClassNameAffectsLetterSpacing?3:0)
  }
}, Vxc=class{
  constructor(n, e){
    this._viewModelDecorationBrand=void 0, this.range=n, this.options=e
  }
}, KOo=class aGb{
  constructor(e, t, i){
    this.color=e, this.zIndex=t, this.data=i
  }
  static compareByRenderingProps(e, t){
    return e.zIndex===t.zIndex?e.color<t.color?-1:e.color>t.color?1:0:e.zIndex-t.zIndex
  }
  static equals(e, t){
    return e.color===t.color&&e.zIndex===t.zIndex&&cg(e.data, t.data)
  }
  static equalsArr(e, t){
    return cg(e, t, aGb.equals)
  }
}
}
}), Ibh, VOt, Dbh, Bbh, WaA=