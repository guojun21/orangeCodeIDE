// Module: out-build/vs/editor/common/languages/supports/indentRules.js
// Offset: 746348 (bundle byte offset)
// Size: 1315 bytes

(function(n){
  n[n.INCREASE_MASK=1]="INCREASE_MASK", n[n.DECREASE_MASK=2]="DECREASE_MASK", n[n.INDENT_NEXTLINE_MASK=4]="INDENT_NEXTLINE_MASK", n[n.UNINDENT_MASK=8]="UNINDENT_MASK"
})(Och||(Och={
  
})), Uch=class{
  constructor(n){
    this._indentationRules=n
  }
  shouldIncrease(n){
    return!!(this._indentationRules&&this._indentationRules.increaseIndentPattern&&t4o(this._indentationRules.increaseIndentPattern)&&this._indentationRules.increaseIndentPattern.test(n))
  }
  shouldDecrease(n){
    return!!(this._indentationRules&&this._indentationRules.decreaseIndentPattern&&t4o(this._indentationRules.decreaseIndentPattern)&&this._indentationRules.decreaseIndentPattern.test(n))
  }
  shouldIndentNextLine(n){
    return!!(this._indentationRules&&this._indentationRules.indentNextLinePattern&&t4o(this._indentationRules.indentNextLinePattern)&&this._indentationRules.indentNextLinePattern.test(n))
  }
  shouldIgnore(n){
    return!!(this._indentationRules&&this._indentationRules.unIndentedLinePattern&&t4o(this._indentationRules.unIndentedLinePattern)&&this._indentationRules.unIndentedLinePattern.test(n))
  }
  getIndentMetadata(n){
    let e=0;
    return this.shouldIncrease(n)&&(e+=1), this.shouldDecrease(n)&&(e+=2), this.shouldIndentNextLine(n)&&(e+=4), this.shouldIgnore(n)&&(e+=8), e
  }
}
}
}), $ch, brA=