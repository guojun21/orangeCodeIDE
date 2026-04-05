// Module: out-build/vs/editor/common/cursor/cursorMoveOperations.js
// Offset: 698197 (bundle byte offset)
// Size: 5346 bytes

oa(), koe(), tl(), ts(), wch(), Eoe(), GFo=class{
  constructor(n, e, t){
    this._cursorPositionBrand=void 0, this.lineNumber=n, this.column=e, this.leftoverVisibleColumns=t
  }
}, tN=class tee{
  static leftPosition(e, t){
    if(t.column>e.getLineMinColumn(t.lineNumber))return t.delta(void 0, -Jih(e.getLineContent(t.lineNumber), t.column-1));
    if(t.lineNumber>1){
      const i=t.lineNumber-1;
      return new ar(i,e.getLineMaxColumn(i))
    }
    else return t
  }
  static leftPositionAtomicSoftTabs(e, t, i){
    if(t.column<=e.getLineIndentColumn(t.lineNumber)){
      const r=e.getLineMinColumn(t.lineNumber),s=e.getLineContent(t.lineNumber),o=JFo.atomicPosition(s,t.column-1,i,0);
      if(o!==-1&&o+1>=r)return new ar(t.lineNumber,o+1)
    }
    return this.leftPosition(e, t)
  }
  static left(e, t, i){
    const r=e.stickyTabStops?tee.leftPositionAtomicSoftTabs(t, i, e.tabSize):tee.leftPosition(t, i);
    return new GFo(r.lineNumber, r.column, 0)
  }
  static moveLeft(e, t, i, r, s){
    let o, a;
    if(i.hasSelection()&&!r)o=i.selection.startLineNumber, a=i.selection.startColumn;
    else{
      const l=i.position.delta(void 0,-(s-1)),u=t.normalizePosition(tee.clipPositionColumn(l,t),0),d=tee.left(e,t,u);
      o=d.lineNumber,a=d.column
    }
    return i.move(r, o, a, 0)
  }
  static clipPositionColumn(e, t){
    return new ar(e.lineNumber, tee.clipRange(e.column, t.getLineMinColumn(e.lineNumber), t.getLineMaxColumn(e.lineNumber)))
  }
  static clipRange(e, t, i){
    return e<t?t:e>i?i:e
  }
  static rightPosition(e, t, i){
    return i<e.getLineMaxColumn(t)?i=i+G0c(e.getLineContent(t), i-1):t<e.getLineCount()&&(t=t+1, i=e.getLineMinColumn(t)), new ar(t, i)
  }
  static rightPositionAtomicSoftTabs(e, t, i, r, s){
    if(i<e.getLineIndentColumn(t)){
      const o=e.getLineContent(t),a=JFo.atomicPosition(o,i-1,r,1);
      if(a!==-1)return new ar(t,a+1)
    }
    return this.rightPosition(e, t, i)
  }
  static right(e, t, i){
    const r=e.stickyTabStops?tee.rightPositionAtomicSoftTabs(t, i.lineNumber, i.column, e.tabSize, e.indentSize):tee.rightPosition(t, i.lineNumber, i.column);
    return new GFo(r.lineNumber, r.column, 0)
  }
  static moveRight(e, t, i, r, s){
    let o, a;
    if(i.hasSelection()&&!r)o=i.selection.endLineNumber, a=i.selection.endColumn;
    else{
      const l=i.position.delta(void 0,s-1),u=t.normalizePosition(tee.clipPositionColumn(l,t),1),d=tee.right(e,t,u);
      o=d.lineNumber,a=d.column
    }
    return i.move(r, o, a, 0)
  }
  static vertical(e, t, i, r, s, o, a, l){
    const u=ZP.visibleColumnFromColumn(t.getLineContent(i), r, e.tabSize)+s, d=t.getLineCount(), m=i===1&&r===1, p=i===d&&r===t.getLineMaxColumn(i), g=o<i?m:p;
    if(i=o, i<1?(i=1, a?r=t.getLineMinColumn(i):r=Math.min(t.getLineMaxColumn(i), r)):i>d?(i=d, a?r=t.getLineMaxColumn(i):r=Math.min(t.getLineMaxColumn(i), r)):r=e.columnFromVisibleColumn(t, i, u), g?s=0:s=u-ZP.visibleColumnFromColumn(t.getLineContent(i), r, e.tabSize), l!==void 0){
      const f=new ar(i,r),A=t.normalizePosition(f,l);
      s=s+(r-A.column),i=A.lineNumber,r=A.column
    }
    return new GFo(i, r, s)
  }
  static down(e, t, i, r, s, o, a){
    return this.vertical(e, t, i, r, s, i+o, a, 4)
  }
  static moveDown(e, t, i, r, s){
    let o, a;
    i.hasSelection()&&!r?(o=i.selection.endLineNumber, a=i.selection.endColumn):(o=i.position.lineNumber, a=i.position.column);
    let l=0, u;
    do if(u=tee.down(e, t, o+l, a, i.leftoverVisibleColumns, s, !0), t.normalizePosition(new ar(u.lineNumber, u.column), 2).lineNumber>o)break;
    while(l++<10&&o+l<t.getLineCount());
    return i.move(r, u.lineNumber, u.column, u.leftoverVisibleColumns)
  }
  static translateDown(e, t, i){
    const r=i.selection, s=tee.down(e, t, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, !1), o=tee.down(e, t, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, !1);
    return new hW(new Zt(s.lineNumber, s.column, s.lineNumber, s.column), 0, s.leftoverVisibleColumns, new ar(o.lineNumber, o.column), o.leftoverVisibleColumns)
  }
  static up(e, t, i, r, s, o, a){
    return this.vertical(e, t, i, r, s, i-o, a, 3)
  }
  static moveUp(e, t, i, r, s){
    let o, a;
    i.hasSelection()&&!r?(o=i.selection.startLineNumber, a=i.selection.startColumn):(o=i.position.lineNumber, a=i.position.column);
    const l=tee.up(e, t, o, a, i.leftoverVisibleColumns, s, !0);
    return i.move(r, l.lineNumber, l.column, l.leftoverVisibleColumns)
  }
  static translateUp(e, t, i){
    const r=i.selection, s=tee.up(e, t, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, !1), o=tee.up(e, t, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, !1);
    return new hW(new Zt(s.lineNumber, s.column, s.lineNumber, s.column), 0, s.leftoverVisibleColumns, new ar(o.lineNumber, o.column), o.leftoverVisibleColumns)
  }
  static _isBlankLine(e, t){
    return e.getLineFirstNonWhitespaceColumn(t)===0
  }
  static moveToPrevBlankLine(e, t, i, r){
    let s=i.position.lineNumber;
    for(;
    s>1&&this._isBlankLine(t, s);
    )s--;
    for(;
    s>1&&!this._isBlankLine(t, s);
    )s--;
    return i.move(r, s, t.getLineMinColumn(s), 0)
  }
  static moveToNextBlankLine(e, t, i, r){
    const s=t.getLineCount();
    let o=i.position.lineNumber;
    for(;
    o<s&&this._isBlankLine(t, o);
    )o++;
    for(;
    o<s&&!this._isBlankLine(t, o);
    )o++;
    return i.move(r, o, t.getLineMinColumn(o), 0)
  }
  static moveToBeginningOfLine(e, t, i, r){
    const s=i.position.lineNumber, o=t.getLineMinColumn(s), a=t.getLineFirstNonWhitespaceColumn(s)||o;
    let l;
    return i.position.column===a?l=o:l=a, i.move(r, s, l, 0)
  }
  static moveToEndOfLine(e, t, i, r, s){
    const o=i.position.lineNumber, a=t.getLineMaxColumn(o);
    return i.move(r, o, a, s?1073741824-a:0)
  }
  static moveToBeginningOfBuffer(e, t, i, r){
    return i.move(r, 1, 1, 0)
  }
  static moveToEndOfBuffer(e, t, i, r){
    const s=t.getLineCount(), o=t.getLineMaxColumn(s);
    return i.move(r, s, o, 0)
  }
}
}
}), Xgt, WFo=