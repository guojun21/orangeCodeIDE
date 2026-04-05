// Module: out-build/vs/editor/browser/widget/diffEditor/components/diffEditorViewZones/renderLines.js
// Offset: 2215148 (bundle byte offset)
// Size: 1567 bytes

ive(), HY(), pk(), kSe(), HVe(), Qft(), Lte(), $Dc=nve("diffEditorWidget", {
  createHTML:n=>n
}), dKe=class{
  constructor(n, e=n.map(r=>null), t=!0, i=!0){
    this.lineTokens=n, this.lineBreakData=e, this.mightContainNonBasicASCII=t, this.mightContainRTL=i
  }
}, hKe=class rWa{
  static fromEditor(e){
    const t=e.getOptions(), i=t.get(52), r=t.get(151);
    return new rWa(e.getModel()?.getOptions().tabSize||0, i, t.get(33), i.typicalHalfwidthCharacterWidth, t.get(109), t.get(68), r.decorationsWidth, t.get(122), t.get(104), t.get(99), t.get(53))
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p=!0){
    this.tabSize=e, this.fontInfo=t, this.disableMonospaceOptimizations=i, this.typicalHalfwidthCharacterWidth=r, this.scrollBeyondLastColumn=s, this.lineHeight=o, this.lineDecorationsWidth=a, this.stopRenderingLineAfter=l, this.renderWhitespace=u, this.renderControlCharacters=d, this.fontLigatures=m, this.setWidth=p
  }
  withSetWidth(e){
    return new rWa(this.tabSize, this.fontInfo, this.disableMonospaceOptimizations, this.typicalHalfwidthCharacterWidth, this.scrollBeyondLastColumn, this.lineHeight, this.lineDecorationsWidth, this.stopRenderingLineAfter, this.renderWhitespace, this.renderControlCharacters, this.fontLigatures, e)
  }
  withScrollBeyondLastColumn(e){
    return new rWa(this.tabSize, this.fontInfo, this.disableMonospaceOptimizations, this.typicalHalfwidthCharacterWidth, e, this.lineHeight, this.lineDecorationsWidth, this.stopRenderingLineAfter, this.renderWhitespace, this.renderControlCharacters, this.fontLigatures, this.setWidth)
  }
}
}
}), jm, Kf=