// Module: out-build/vs/editor/common/core/range.js
// Offset: 673831 (bundle byte offset)
// Size: 7568 bytes

tl(), Zt=class r4{
  constructor(e, t, i, r){
    let s, o, a, l;
    e==null||typeof e=="number"||Number.isNaN(e)?(s=e, o=t, a=i, l=r):"startLineNumber"in e&&"startColumn"in e?(s=e.startLineNumber, o=e.startColumn, a=e.endLineNumber, l=e.endColumn):(s=e.startLineNumber, o=1, a=e.endLineNumberExclusive, l=1), s>a||s===a&&o>l?(this.startLineNumber=a, this.startColumn=l, this.endLineNumber=s, this.endColumn=o):(this.startLineNumber=s, this.startColumn=o, this.endLineNumber=a, this.endColumn=l)
  }
  asIRange(){
    return{
      startLineNumber:this.startLineNumber,startColumn:this.startColumn,endLineNumber:this.endLineNumber,endColumn:this.endColumn
    }
  }
  isEmpty(){
    return r4.isEmpty(this)
  }
  static isEmpty(e){
    return e.startLineNumber===e.endLineNumber&&e.startColumn===e.endColumn
  }
  containsPosition(e){
    return r4.containsPosition(this, e)
  }
  static containsPosition(e, t){
    return!(t.lineNumber<e.startLineNumber||t.lineNumber>e.endLineNumber||t.lineNumber===e.startLineNumber&&t.column<e.startColumn||t.lineNumber===e.endLineNumber&&t.column>e.endColumn)
  }
  static strictContainsPosition(e, t){
    return!(t.lineNumber<e.startLineNumber||t.lineNumber>e.endLineNumber||t.lineNumber===e.startLineNumber&&t.column<=e.startColumn||t.lineNumber===e.endLineNumber&&t.column>=e.endColumn)
  }
  containsRange(e){
    return r4.containsRange(this, e)
  }
  static containsRange(e, t){
    return!(t.startLineNumber<e.startLineNumber||t.endLineNumber<e.startLineNumber||t.startLineNumber>e.endLineNumber||t.endLineNumber>e.endLineNumber||t.startLineNumber===e.startLineNumber&&t.startColumn<e.startColumn||t.endLineNumber===e.endLineNumber&&t.endColumn>e.endColumn)
  }
  strictContainsRange(e){
    return r4.strictContainsRange(this, e)
  }
  static strictContainsRange(e, t){
    return!(t.startLineNumber<e.startLineNumber||t.endLineNumber<e.startLineNumber||t.startLineNumber>e.endLineNumber||t.endLineNumber>e.endLineNumber||t.startLineNumber===e.startLineNumber&&t.startColumn<=e.startColumn||t.endLineNumber===e.endLineNumber&&t.endColumn>=e.endColumn)
  }
  plusRange(e){
    return r4.plusRange(this, e)
  }
  static getRangeAbove(e, t){
    const i=Math.max(e.startLineNumber-t, 1), r=e.startLineNumber;
    return new r4(i, e.startColumn, r, e.startColumn)
  }
  static getRangeOnBelow(e, t, i){
    const r=e.endLineNumber, s=Math.min(e.endLineNumber+t, i);
    return new r4(r, e.endColumn, s, e.endColumn)
  }
  static getExtendedRange(e, t, i){
    const r=Math.max(e.startLineNumber-t, 0), s=Math.min(e.endLineNumber+t, i);
    return new r4(r, e.startColumn, s, e.endColumn)
  }
  static plusRange(e, t){
    let i, r, s, o;
    return t.startLineNumber<e.startLineNumber?(i=t.startLineNumber, r=t.startColumn):t.startLineNumber===e.startLineNumber?(i=t.startLineNumber, r=Math.min(t.startColumn, e.startColumn)):(i=e.startLineNumber, r=e.startColumn), t.endLineNumber>e.endLineNumber?(s=t.endLineNumber, o=t.endColumn):t.endLineNumber===e.endLineNumber?(s=t.endLineNumber, o=Math.max(t.endColumn, e.endColumn)):(s=e.endLineNumber, o=e.endColumn), new r4(i, r, s, o)
  }
  intersectRanges(e){
    return r4.intersectRanges(this, e)
  }
  static intersectRanges(e, t){
    let i=e.startLineNumber, r=e.startColumn, s=e.endLineNumber, o=e.endColumn;
    const a=t.startLineNumber, l=t.startColumn, u=t.endLineNumber, d=t.endColumn;
    return i<a?(i=a, r=l):i===a&&(r=Math.max(r, l)), s>u?(s=u, o=d):s===u&&(o=Math.min(o, d)), i>s||i===s&&r>o?null:new r4(i, r, s, o)
  }
  static inverseEditRange(e, t){
    return{
      startLineNumber:e.startLineNumber,startColumn:e.startColumn,endLineNumber:e.startLineNumber+t.split(`
`).length-1,endColumn:t.lastIndexOf(`
`)===-1?e.startColumn+t.length:t.length-t.lastIndexOf(`
`)
    }
  }
  whereIs(e){
    return e.endLineNumber<this.startLineNumber||e.endLineNumber===this.startLineNumber&&e.endColumn<=this.startColumn?"before":e.startLineNumber>this.endLineNumber||e.startLineNumber===this.endLineNumber&&e.startColumn>=this.endColumn?"after":"overlapping"
  }
  static rangeAfterEdit(e, t){
    const i=r4.lift(e).whereIs(t.range);
    switch(i){
      case"overlapping":throw new Error("Range is overlapping. The range after edit is ambiguous.");
      case"after":return e;
      case"before":{
        const r=t.text.split(`
`).length-1-(t.range.endLineNumber-t.range.startLineNumber);
        if(t.range.endLineNumber<e.startLineNumber)return{
          startLineNumber:e.startLineNumber+r,startColumn:e.startColumn,endLineNumber:e.endLineNumber+r,endColumn:e.endColumn
        };
        {
          const s=t.text.lastIndexOf(`
`)===-1?t.text.length:t.text.length-t.text.lastIndexOf(`
`)-1,o=t.range.startLineNumber===t.range.endLineNumber?t.range.endColumn-t.range.startColumn:t.range.endColumn-1,a=s-o;
          return{
            startLineNumber:e.startLineNumber+r,startColumn:e.startColumn+a,endLineNumber:e.endLineNumber+r,endColumn:e.startLineNumber===e.endLineNumber?e.endColumn+a:e.endColumn
          }
        }
      }
      default:{
        const r=i;
        return e
      }
    }
  }
  equalsRange(e){
    return r4.equalsRange(this, e)
  }
  static equalsRange(e, t){
    return!e&&!t?!0:!!e&&!!t&&e.startLineNumber===t.startLineNumber&&e.startColumn===t.startColumn&&e.endLineNumber===t.endLineNumber&&e.endColumn===t.endColumn
  }
  getEndPosition(){
    return r4.getEndPosition(this)
  }
  static getEndPosition(e){
    return new ar(e.endLineNumber, e.endColumn)
  }
  getStartPosition(){
    return r4.getStartPosition(this)
  }
  static getStartPosition(e){
    return new ar(e.startLineNumber, e.startColumn)
  }
  toString(){
    return"["+this.startLineNumber+","+this.startColumn+" -> "+this.endLineNumber+","+this.endColumn+"]"
  }
  setEndPosition(e, t){
    return new r4(this.startLineNumber, this.startColumn, e, t)
  }
  setStartPosition(e, t){
    return new r4(e, t, this.endLineNumber, this.endColumn)
  }
  collapseToStart(){
    return r4.collapseToStart(this)
  }
  static collapseToStart(e){
    return new r4(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn)
  }
  collapseToEnd(){
    return r4.collapseToEnd(this)
  }
  static collapseToEnd(e){
    return new r4(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn)
  }
  delta(e){
    return new r4(this.startLineNumber+e, this.startColumn, this.endLineNumber+e, this.endColumn)
  }
  isSingleLine(){
    return this.startLineNumber===this.endLineNumber
  }
  static fromPositions(e, t=e){
    return new r4(e.lineNumber, e.column, t.lineNumber, t.column)
  }
  static lift(e){
    return e?new r4(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn):null
  }
  static isIRange(e){
    return e&&typeof e.startLineNumber=="number"&&typeof e.startColumn=="number"&&typeof e.endLineNumber=="number"&&typeof e.endColumn=="number"
  }
  static areIntersectingOrTouching(e, t){
    return!(e.endLineNumber<t.startLineNumber||e.endLineNumber===t.startLineNumber&&e.endColumn<t.startColumn||t.endLineNumber<e.startLineNumber||t.endLineNumber===e.startLineNumber&&t.endColumn<e.startColumn)
  }
  static areIntersecting(e, t){
    return!(e.endLineNumber<t.startLineNumber||e.endLineNumber===t.startLineNumber&&e.endColumn<=t.startColumn||t.endLineNumber<e.startLineNumber||t.endLineNumber===e.startLineNumber&&t.endColumn<=e.startColumn)
  }
  static areOnlyIntersecting(e, t){
    return!(e.endLineNumber<t.startLineNumber-1||e.endLineNumber===t.startLineNumber&&e.endColumn<t.startColumn-1||t.endLineNumber<e.startLineNumber-1||t.endLineNumber===e.startLineNumber&&t.endColumn<e.startColumn-1)
  }
  static compareRangesUsingStarts(e, t){
    if(e&&t){
      const s=e.startLineNumber|0,o=t.startLineNumber|0;
      if(s===o){
        const a=e.startColumn|0,l=t.startColumn|0;
        if(a===l){
          const u=e.endLineNumber|0,d=t.endLineNumber|0;
          if(u===d){
            const m=e.endColumn|0,p=t.endColumn|0;
            return m-p
          }
          return u-d
        }
        return a-l
      }
      return s-o
    }
    return(e?1:0)-(t?1:0)
  }
  static compareRangesUsingEnds(e, t){
    return e.endLineNumber===t.endLineNumber?e.endColumn===t.endColumn?e.startLineNumber===t.startLineNumber?e.startColumn-t.startColumn:e.startLineNumber-t.startLineNumber:e.endColumn-t.endColumn:e.endLineNumber-t.endLineNumber
  }
  static spansMultipleLines(e){
    return e.endLineNumber>e.startLineNumber
  }
  toJSON(){
    return this
  }
}
}
}), och, Vl, db=