// Module: out-build/vs/editor/common/core/selection.js
// Offset: 681399 (bundle byte offset)
// Size: 2476 bytes

tl(), ts(), (function(n){
  n[n.LTR=0]="LTR", n[n.RTL=1]="RTL"
})(och||(och={
  
})), Vl=class __e extends Zt{
  constructor(e, t, i, r){
    super(e, t, i, r), this.selectionStartLineNumber=e, this.selectionStartColumn=t, this.positionLineNumber=i, this.positionColumn=r
  }
  toString(){
    return"["+this.selectionStartLineNumber+","+this.selectionStartColumn+" -> "+this.positionLineNumber+","+this.positionColumn+"]"
  }
  equalsSelection(e){
    return __e.selectionsEqual(this, e)
  }
  static selectionsEqual(e, t){
    return e.selectionStartLineNumber===t.selectionStartLineNumber&&e.selectionStartColumn===t.selectionStartColumn&&e.positionLineNumber===t.positionLineNumber&&e.positionColumn===t.positionColumn
  }
  getDirection(){
    return this.selectionStartLineNumber===this.startLineNumber&&this.selectionStartColumn===this.startColumn?0:1
  }
  setEndPosition(e, t){
    return this.getDirection()===0?new __e(this.startLineNumber, this.startColumn, e, t):new __e(e, t, this.startLineNumber, this.startColumn)
  }
  getPosition(){
    return new ar(this.positionLineNumber, this.positionColumn)
  }
  getSelectionStart(){
    return new ar(this.selectionStartLineNumber, this.selectionStartColumn)
  }
  setStartPosition(e, t){
    return this.getDirection()===0?new __e(e, t, this.endLineNumber, this.endColumn):new __e(this.endLineNumber, this.endColumn, e, t)
  }
  static fromPositions(e, t=e){
    return new __e(e.lineNumber, e.column, t.lineNumber, t.column)
  }
  static fromRange(e, t){
    return t===0?new __e(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn):new __e(e.endLineNumber, e.endColumn, e.startLineNumber, e.startColumn)
  }
  static liftSelection(e){
    return new __e(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn)
  }
  static selectionsArrEqual(e, t){
    if(e&&!t||!e&&t)return!1;
    if(!e&&!t)return!0;
    if(e.length!==t.length)return!1;
    for(let i=0, r=e.length;
    i<r;
    i++)if(!this.selectionsEqual(e[i], t[i]))return!1;
    return!0
  }
  static isISelection(e){
    return e&&typeof e.selectionStartLineNumber=="number"&&typeof e.selectionStartColumn=="number"&&typeof e.positionLineNumber=="number"&&typeof e.positionColumn=="number"
  }
  static createWithDirection(e, t, i, r, s){
    return s===0?new __e(e, t, i, r):new __e(i, r, e, t)
  }
}
}
});
function Zgt(n, e){
  const t=n.getCount(), i=n.findTokenIndexAtOffset(e), r=n.getLanguageId(i);
  let s=i;
  for(;
  s+1<t&&n.getLanguageId(s+1)===r;
  )s++;
  let o=i;
  for(;
  o>0&&n.getLanguageId(o-1)===r;
  )o--;
  return new ach(n, r, o, s+1, n.getStartOffset(o), n.getEndOffset(s))
}
function GBe(n){
  return(n&3)!==0
}
var ach, cch, u4n=