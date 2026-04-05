// Module: out-build/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBuffer.js
// Offset: 1175024 (bundle byte offset)
// Size: 7608 bytes

yn(), oa(), ts(), xw(), ggh(), EVe(), Oph(), rt(), bOo=class uNi extends at{
  constructor(e, t, i, r, s, o, a){
    super(), this._onDidChangeContent=this._register(new Qe), this.onDidChangeContent=this._onDidChangeContent.event, this._BOM=t, this._mightContainNonBasicASCII=!o, this._mightContainRTL=r, this._mightContainUnusualLineTerminators=s, this._pieceTree=new pgh(e, i, a)
  }
  equals(e){
    return!(e instanceof uNi)||this._BOM!==e._BOM||this.getEOL()!==e.getEOL()?!1:this._pieceTree.equal(e._pieceTree)
  }
  mightContainRTL(){
    return this._mightContainRTL
  }
  mightContainUnusualLineTerminators(){
    return this._mightContainUnusualLineTerminators
  }
  resetMightContainUnusualLineTerminators(){
    this._mightContainUnusualLineTerminators=!1
  }
  mightContainNonBasicASCII(){
    return this._mightContainNonBasicASCII
  }
  getBOM(){
    return this._BOM
  }
  getEOL(){
    return this._pieceTree.getEOL()
  }
  createSnapshot(e){
    return this._pieceTree.createSnapshot(e?this._BOM:"")
  }
  getOffsetAt(e, t){
    return this._pieceTree.getOffsetAt(e, t)
  }
  getPositionAt(e){
    return this._pieceTree.getPositionAt(e)
  }
  getRangeAt(e, t){
    const i=e+t, r=this.getPositionAt(e), s=this.getPositionAt(i);
    return new Zt(r.lineNumber, r.column, s.lineNumber, s.column)
  }
  getValueInRange(e, t=0){
    if(e.isEmpty())return"";
    const i=this._getEndOfLine(t);
    return this._pieceTree.getValueInRange(e, i)
  }
  getValueLengthInRange(e, t=0){
    if(e.isEmpty())return 0;
    if(e.startLineNumber===e.endLineNumber)return e.endColumn-e.startColumn;
    const i=this.getOffsetAt(e.startLineNumber, e.startColumn), r=this.getOffsetAt(e.endLineNumber, e.endColumn);
    let s=0;
    const o=this._getEndOfLine(t), a=this.getEOL();
    if(o.length!==a.length){
      const l=o.length-a.length,u=e.endLineNumber-e.startLineNumber;
      s=l*u
    }
    return r-i+s
  }
  getCharacterCountInRange(e, t=0){
    if(this._mightContainNonBasicASCII){
      let i=0;
      const r=e.startLineNumber,s=e.endLineNumber;
      for(let o=r;
      o<=s;
      o++){
        const a=this.getLineContent(o),l=o===r?e.startColumn-1:0,u=o===s?e.endColumn-1:a.length;
        for(let d=l;
        d<u;
        d++)d3(a.charCodeAt(d))?(i=i+1,d=d+1):i=i+1
      }
      return i+=this._getEndOfLine(t).length*(s-r),i
    }
    return this.getValueLengthInRange(e, t)
  }
  getNearestChunk(e){
    return this._pieceTree.getNearestChunk(e)
  }
  getLength(){
    return this._pieceTree.getLength()
  }
  getLineCount(){
    return this._pieceTree.getLineCount()
  }
  getLinesContent(){
    return this._pieceTree.getLinesContent()
  }
  getLineContent(e){
    return this._pieceTree.getLineContent(e)
  }
  getLineCharCode(e, t){
    return this._pieceTree.getLineCharCode(e, t)
  }
  getCharCode(e){
    return this._pieceTree.getCharCode(e)
  }
  getLineLength(e){
    return this._pieceTree.getLineLength(e)
  }
  getLineMinColumn(e){
    return 1
  }
  getLineMaxColumn(e){
    return this.getLineLength(e)+1
  }
  getLineFirstNonWhitespaceColumn(e){
    const t=TH(this.getLineContent(e));
    return t===-1?0:t+1
  }
  getLineLastNonWhitespaceColumn(e){
    const t=mde(this.getLineContent(e));
    return t===-1?0:t+2
  }
  _getEndOfLine(e){
    switch(e){
      case 1:return`
`;
      case 2:return`\r
`;
      case 0:return this.getEOL();
      default:throw new Error("Unknown EOL preference")
    }
  }
  setEOL(e){
    this._pieceTree.setEOL(e)
  }
  applyEdits(e, t, i){
    let r=this._mightContainRTL, s=this._mightContainUnusualLineTerminators, o=this._mightContainNonBasicASCII, a=!0, l=[];
    for(let A=0;
    A<e.length;
    A++){
      const w=e[A];
      a&&w._isTracked&&(a=!1);
      const C=w.range;
      if(w.text){
        let N=!0;
        o||(N=!fgt(w.text),o=N),!r&&N&&(r=Tze(w.text)),!s&&N&&(s=Wih(w.text))
      }
      let x="",I=0,B=0,R=0;
      if(w.text){
        let N;
        [I,B,R,N]=Vbe(w.text);
        const M=this.getEOL();
        N===0||N===(M===`\r
`?2:1)?x=w.text:x=w.text.replace(/\r\n|\r|\n/g,M)
      }
      l[A]={
        sortIndex:A,identifier:w.identifier||null,range:C,rangeOffset:this.getOffsetAt(C.startLineNumber,C.startColumn),rangeLength:this.getValueLengthInRange(C),text:x,eolCount:I,firstLineLength:B,lastLineLength:R,forceMoveMarkers:!!w.forceMoveMarkers,isAutoWhitespaceEdit:w.isAutoWhitespaceEdit||!1
      }
    }
    l.sort(uNi._sortOpsAscending);
    let u=!1;
    for(let A=0, w=l.length-1;
    A<w;
    A++){
      const C=l[A].range.getEndPosition(),x=l[A+1].range.getStartPosition();
      if(x.isBeforeOrEqual(C)){
        if(x.isBefore(C))throw new Error("Overlapping ranges are not allowed!");
        u=!0
      }
    }
    a&&(l=this._reduceOperations(l));
    const d=i||t?uNi._getInverseEditRanges(l):[], m=[];
    if(t)for(let A=0;
    A<l.length;
    A++){
      const w=l[A],C=d[A];
      if(w.isAutoWhitespaceEdit&&w.range.isEmpty())for(let x=C.startLineNumber;
      x<=C.endLineNumber;
      x++){
        let I="";
        x===C.startLineNumber&&(I=this.getLineContent(w.range.startLineNumber),TH(I)!==-1)||m.push({
          lineNumber:x,oldContent:I
        })
      }
    }
    let p=null;
    if(i){
      let A=0;
      p=[];
      for(let w=0;
      w<l.length;
      w++){
        const C=l[w],x=d[w],I=this.getValueInRange(C.range),B=C.rangeOffset+A;
        A+=C.text.length-I.length,p[w]={
          sortIndex:C.sortIndex,identifier:C.identifier,range:x,text:I,textChange:new BSe(C.rangeOffset,I,B,C.text)
        }
      }
      u||p.sort((w,C)=>w.sortIndex-C.sortIndex)
    }
    this._mightContainRTL=r, this._mightContainUnusualLineTerminators=s, this._mightContainNonBasicASCII=o;
    const g=this._doApplyEdits(l);
    let f=null;
    if(t&&m.length>0){
      m.sort((A,w)=>w.lineNumber-A.lineNumber),f=[];
      for(let A=0,w=m.length;
      A<w;
      A++){
        const C=m[A].lineNumber;
        if(A>0&&m[A-1].lineNumber===C)continue;
        const x=m[A].oldContent,I=this.getLineContent(C);
        I.length===0||I===x||TH(I)!==-1||f.push(C)
      }
    }
    return this._onDidChangeContent.fire(), new lph(p, g, f)
  }
  _reduceOperations(e){
    return e.length<1e3?e:[this._toSingleEditOperation(e)]
  }
  _toSingleEditOperation(e){
    let t=!1;
    const i=e[0].range, r=e[e.length-1].range, s=new Zt(i.startLineNumber, i.startColumn, r.endLineNumber, r.endColumn);
    let o=i.startLineNumber, a=i.startColumn;
    const l=[];
    for(let g=0, f=e.length;
    g<f;
    g++){
      const A=e[g],w=A.range;
      t=t||A.forceMoveMarkers,l.push(this.getValueInRange(new Zt(o,a,w.startLineNumber,w.startColumn))),A.text.length>0&&l.push(A.text),o=w.endLineNumber,a=w.endColumn
    }
    const u=l.join(""), [d, m, p]=Vbe(u);
    return{
      sortIndex:0,identifier:e[0].identifier,range:s,rangeOffset:this.getOffsetAt(s.startLineNumber,s.startColumn),rangeLength:this.getValueLengthInRange(s,0),text:u,eolCount:d,firstLineLength:m,lastLineLength:p,forceMoveMarkers:t,isAutoWhitespaceEdit:!1
    }
  }
  _doApplyEdits(e){
    e.sort(uNi._sortOpsDescending);
    const t=[];
    for(let i=0;
    i<e.length;
    i++){
      const r=e[i],s=r.range.startLineNumber,o=r.range.startColumn,a=r.range.endLineNumber,l=r.range.endColumn;
      if(s===a&&o===l&&r.text.length===0)continue;
      r.text?(this._pieceTree.delete(r.rangeOffset,r.rangeLength),this._pieceTree.insert(r.rangeOffset,r.text,!0)):this._pieceTree.delete(r.rangeOffset,r.rangeLength);
      const u=new Zt(s,o,a,l);
      t.push({
        range:u,rangeLength:r.rangeLength,text:r.text,rangeOffset:r.rangeOffset,forceMoveMarkers:r.forceMoveMarkers
      })
    }
    return t
  }
  findMatchesLineByLine(e, t, i, r){
    return this._pieceTree.findMatchesLineByLine(e, t, i, r)
  }
  getPieceTree(){
    return this._pieceTree
  }
  static _getInverseEditRange(e, t){
    const i=e.startLineNumber, r=e.startColumn, [s, o, a]=Vbe(t);
    let l;
    if(t.length>0){
      const u=s+1;
      u===1?l=new Zt(i,r,i,r+o):l=new Zt(i,r,i+u-1,a+1)
    }
    else l=new Zt(i, r, i, r);
    return l
  }
  static _getInverseEditRanges(e){
    const t=[];
    let i=0, r=0, s=null;
    for(let o=0, a=e.length;
    o<a;
    o++){
      const l=e[o];
      let u,d;
      s?s.range.endLineNumber===l.range.startLineNumber?(u=i,d=r+(l.range.startColumn-s.range.endColumn)):(u=i+(l.range.startLineNumber-s.range.endLineNumber),d=l.range.startColumn):(u=l.range.startLineNumber,d=l.range.startColumn);
      let m;
      if(l.text.length>0){
        const p=l.eolCount+1;
        p===1?m=new Zt(u,d,u,d+l.firstLineLength):m=new Zt(u,d,u+p-1,l.lastLineLength+1)
      }
      else m=new Zt(u,d,u,d);
      i=m.endLineNumber,r=m.endColumn,t.push(m),s=l
    }
    return t
  }
  static _sortOpsAscending(e, t){
    const i=Zt.compareRangesUsingEnds(e.range, t.range);
    return i===0?e.sortIndex-t.sortIndex:i
  }
  static _sortOpsDescending(e, t){
    const i=Zt.compareRangesUsingEnds(e.range, t.range);
    return i===0?t.sortIndex-e.sortIndex:-i
  }
}
}
}), fgh, POt, bgh=