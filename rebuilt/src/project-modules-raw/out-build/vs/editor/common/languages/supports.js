// Module: out-build/vs/editor/common/languages/supports.js
// Offset: 683875 (bundle byte offset)
// Size: 1015 bytes

ach=class{
  constructor(n, e, t, i, r, s){
    this._scopedLineTokensBrand=void 0, this._actual=n, this.languageId=e, this._firstTokenIndex=t, this._lastTokenIndex=i, this.firstCharOffset=r, this._lastCharOffset=s, this.languageIdCodec=n.languageIdCodec
  }
  getLineContent(){
    return this._actual.getLineContent().substring(this.firstCharOffset, this._lastCharOffset)
  }
  getLineLength(){
    return this._lastCharOffset-this.firstCharOffset
  }
  getActualLineContentBefore(n){
    return this._actual.getLineContent().substring(0, this.firstCharOffset+n)
  }
  getTokenCount(){
    return this._lastTokenIndex-this._firstTokenIndex
  }
  findTokenIndexAtOffset(n){
    return this._actual.findTokenIndexAtOffset(n+this.firstCharOffset)-this._firstTokenIndex
  }
  getStandardTokenType(n){
    return this._actual.getStandardTokenType(n+this._firstTokenIndex)
  }
  toIViewLineTokens(){
    return this._actual.sliceAndInflate(this.firstCharOffset, this._lastCharOffset, 0)
  }
}, (function(n){
  n[n.value=3]="value"
})(cch||(cch={
  
}))
}
}), ZP, koe=