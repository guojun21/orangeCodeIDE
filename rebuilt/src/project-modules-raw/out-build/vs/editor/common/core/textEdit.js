// Module: out-build/vs/editor/common/core/textEdit.js
// Offset: 2136835 (bundle byte offset)
// Size: 8018 bytes

Vs(), Lv(), _s(), oa(), tl(), vIc(), ts(), Kbe(), Fte=class UCn{
  static fromOffsetEdit(e, t){
    const i=e.edits.map(r=>new cI(t.getTransformer().getRange(r.replaceRange), r.newText));
    return new UCn(i)
  }
  static single(e, t){
    return new UCn([new cI(e, t)])
  }
  static insert(e, t){
    return new UCn([new cI(Zt.fromPositions(e, e), t)])
  }
  constructor(e){
    this.edits=e, _te(()=>SBe(e, (t, i)=>t.range.getEndPosition().isBeforeOrEqual(i.range.getStartPosition())))
  }
  normalize(){
    const e=[];
    for(const t of this.edits)if(e.length>0&&e[e.length-1].range.getEndPosition().equals(t.range.getStartPosition())){
      const i=e[e.length-1];
      e[e.length-1]=new cI(i.range.plusRange(t.range),i.text+t.text)
    }
    else t.isEmpty||e.push(t);
    return new UCn(e)
  }
  mapPosition(e){
    let t=0, i=0, r=0;
    for(const s of this.edits){
      const o=s.range.getStartPosition();
      if(e.isBeforeOrEqual(o))break;
      const a=s.range.getEndPosition(),l=YN.ofText(s.text);
      if(e.isBefore(a)){
        const u=new ar(o.lineNumber+t,o.column+(o.lineNumber+t===i?r:0)),d=l.addToPosition(u);
        return s5o(u,d)
      }
      o.lineNumber+t!==i&&(r=0),t+=l.lineCount-(s.range.endLineNumber-s.range.startLineNumber),l.lineCount===0?a.lineNumber!==o.lineNumber?r+=l.columnCount-(a.column-1):r+=l.columnCount-(a.column-o.column):r=l.columnCount,i=a.lineNumber+t
    }
    return new ar(e.lineNumber+t, e.column+(e.lineNumber+t===i?r:0))
  }
  mapRange(e){
    function t(o){
      return o instanceof ar?o:o.getStartPosition()
    }
    function i(o){
      return o instanceof ar?o:o.getEndPosition()
    }
    const r=t(this.mapPosition(e.getStartPosition())), s=i(this.mapPosition(e.getEndPosition()));
    return s5o(r, s)
  }
  inverseMapPosition(e, t){
    return this.inverse(t).mapPosition(e)
  }
  inverseMapRange(e, t){
    return this.inverse(t).mapRange(e)
  }
  apply(e){
    let t="", i=new ar(1, 1);
    for(const s of this.edits){
      const o=s.range,a=o.getStartPosition(),l=o.getEndPosition(),u=s5o(i,a);
      u.isEmpty()||(t+=e.getValueOfRange(u)),t+=s.text,i=l
    }
    const r=s5o(i, e.endPositionExclusive);
    return r.isEmpty()||(t+=e.getValueOfRange(r)), t
  }
  applyToString(e){
    const t=new cKe(e);
    return this.apply(t)
  }
  inverse(e){
    const t=this.getNewRanges();
    return new UCn(this.edits.map((i, r)=>new cI(t[r], e.getValueOfRange(i.range))))
  }
  getNewRanges(){
    const e=[];
    let t=0, i=0, r=0;
    for(const s of this.edits){
      const o=YN.ofText(s.text),a=ar.lift({
        lineNumber:s.range.startLineNumber+i,column:s.range.startColumn+(s.range.startLineNumber===t?r:0)
      }),l=o.createRange(a);
      e.push(l),i=l.endLineNumber-s.range.endLineNumber,r=l.endColumn-s.range.endColumn,t=s.range.endLineNumber
    }
    return e
  }
  toSingle(e){
    if(this.edits.length===0)throw new _m;
    if(this.edits.length===1)return this.edits[0];
    const t=this.edits[0].range.getStartPosition(), i=this.edits[this.edits.length-1].range.getEndPosition();
    let r="";
    for(let s=0;
    s<this.edits.length;
    s++){
      const o=this.edits[s];
      if(r+=o.text,s<this.edits.length-1){
        const a=this.edits[s+1],l=Zt.fromPositions(o.range.getEndPosition(),a.range.getStartPosition()),u=e.getValueOfRange(l);
        r+=u
      }
    }
    return new cI(Zt.fromPositions(t, i), r)
  }
  equals(e){
    return cg(this.edits, e.edits, (t, i)=>t.equals(i))
  }
}, cI=class bNi{
  static joinEdits(e, t){
    if(e.length===0)throw new _m;
    if(e.length===1)return e[0];
    const i=e[0].range.getStartPosition(), r=e[e.length-1].range.getEndPosition();
    let s="";
    for(let o=0;
    o<e.length;
    o++){
      const a=e[o];
      if(s+=a.text,o<e.length-1){
        const l=e[o+1],u=Zt.fromPositions(a.range.getEndPosition(),l.range.getStartPosition()),d=t.getValueOfRange(u);
        s+=d
      }
    }
    return new bNi(Zt.fromPositions(i, r), s)
  }
  constructor(e, t){
    this.range=e, this.text=t
  }
  get isEmpty(){
    return this.range.isEmpty()&&this.text.length===0
  }
  static equals(e, t){
    return e.range.equalsRange(t.range)&&e.text===t.text
  }
  toSingleEditOperation(){
    return{
      range:this.range,text:this.text
    }
  }
  toEdit(){
    return new Fte([this])
  }
  equals(e){
    return bNi.equals(this, e)
  }
  extendToCoverRange(e, t){
    if(this.range.containsRange(e))return this;
    const i=this.range.plusRange(e), r=t.getValueOfRange(Zt.fromPositions(i.getStartPosition(), this.range.getStartPosition())), s=t.getValueOfRange(Zt.fromPositions(this.range.getEndPosition(), i.getEndPosition())), o=r+this.text+s;
    return new bNi(i, o)
  }
  extendToFullLine(e){
    const t=new Zt(this.range.startLineNumber, 1, this.range.endLineNumber, e.getTransformer().getLineLength(this.range.endLineNumber)+1);
    return this.extendToCoverRange(t, e)
  }
  removeCommonPrefix(e){
    const t=e.getValueOfRange(this.range).replaceAll(`\r
`, `
`), i=this.text.replaceAll(`\r
`, `
`), r=voe(t, i), s=YN.ofText(t.substring(0, r)).addToPosition(this.range.getStartPosition()), o=i.substring(r), a=Zt.fromPositions(s, this.range.getEndPosition());
    return new bNi(a, o)
  }
  isEffectiveDeletion(e){
    let t=this.text.replaceAll(`\r
`, `
`), i=e.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const r=voe(t, i);
    t=t.substring(r), i=i.substring(r);
    const s=xze(t, i);
    return t=t.substring(0, t.length-s), i=i.substring(0, i.length-s), t===""
  }
}, o5o=class{
  constructor(){
    this._transformer=void 0
  }
  get endPositionExclusive(){
    return this.length.addToPosition(new ar(1, 1))
  }
  get lineRange(){
    return this.length.toLineRange()
  }
  getValue(){
    return this.getValueOfRange(this.length.toRange())
  }
  getLineLength(n){
    return this.getValueOfRange(new Zt(n, 1, n, Number.MAX_SAFE_INTEGER)).length
  }
  getTransformer(){
    return this._transformer||(this._transformer=new h3t(this.getValue())), this._transformer
  }
  getLineAt(n){
    return this.getValueOfRange(new Zt(n, 1, n, Number.MAX_SAFE_INTEGER))
  }
  getLines(){
    const n=this.getValue();
    return Zv(n)
  }
}, B0h=class extends o5o{
  constructor(n, e){
    Qb(e>=1), super(), this._getLineContent=n, this._lineCount=e
  }
  getValueOfRange(n){
    if(n.startLineNumber===n.endLineNumber)return this._getLineContent(n.startLineNumber).substring(n.startColumn-1, n.endColumn-1);
    let e=this._getLineContent(n.startLineNumber).substring(n.startColumn-1);
    for(let t=n.startLineNumber+1;
    t<n.endLineNumber;
    t++)e+=`
`+this._getLineContent(t);
    return e+=`
`+this._getLineContent(n.endLineNumber).substring(0, n.endColumn-1), e
  }
  getLineLength(n){
    return this._getLineContent(n).length
  }
  get length(){
    const n=this._getLineContent(this._lineCount);
    return new YN(this._lineCount-1, n.length)
  }
}, y3n=class extends B0h{
  constructor(n){
    super(e=>n[e-1], n.length)
  }
}, cKe=class extends o5o{
  constructor(n){
    super(), this.value=n, this._t=new h3t(this.value)
  }
  getValueOfRange(n){
    return this._t.getOffsetRange(n).substring(this.value)
  }
  get length(){
    return this._t.textLength
  }
}
}
});
function x3t(n, e){
  if(n.lineNumber<1)return new ar(1, 1);
  if(n.lineNumber>e.length)return new ar(e.length, e[e.length-1].length+1);
  const t=e[n.lineNumber-1];
  return n.column>t.length+1?new ar(n.lineNumber, t.length+1):n
}
function R0h(n, e){
  return n>=1&&n<=e.length
}
function a5o(n, e, t, i=!1){
  const r=[];
  for(const s of RMo(n.map(o=>SdA(o, e, t)), (o, a)=>o.original.overlapOrTouch(a.original)||o.modified.overlapOrTouch(a.modified))){
    const o=s[0], a=s[s.length-1];
    r.push(new _3(o.original.join(a.original), o.modified.join(a.modified), s.map(l=>l.innerChanges[0])))
  }
  return _te(()=>!i&&r.length>0&&(r[0].modified.startLineNumber!==r[0].original.startLineNumber||t.length.lineCount-r[r.length-1].modified.endLineNumberExclusive!==e.length.lineCount-r[r.length-1].original.endLineNumberExclusive)?!1:SBe(r, (s, o)=>o.original.startLineNumber-s.original.endLineNumberExclusive===o.modified.startLineNumber-s.modified.endLineNumberExclusive&&s.original.endLineNumberExclusive<o.original.startLineNumber&&s.modified.endLineNumberExclusive<o.modified.startLineNumber)), r
}
function SdA(n, e, t){
  let i=0, r=0;
  n.modifiedRange.endColumn===1&&n.originalRange.endColumn===1&&n.originalRange.startLineNumber+i<=n.originalRange.endLineNumber&&n.modifiedRange.startLineNumber+i<=n.modifiedRange.endLineNumber&&(r=-1), n.modifiedRange.startColumn-1>=t.getLineLength(n.modifiedRange.startLineNumber)&&n.originalRange.startColumn-1>=e.getLineLength(n.originalRange.startLineNumber)&&n.originalRange.startLineNumber<=n.originalRange.endLineNumber+r&&n.modifiedRange.startLineNumber<=n.modifiedRange.endLineNumber+r&&(i=1);
  const s=new rh(n.originalRange.startLineNumber+i, n.originalRange.endLineNumber+1+r), o=new rh(n.modifiedRange.startLineNumber+i, n.modifiedRange.endLineNumber+1+r);
  return new _3(s, o, [n])
}
var Wde, _3, zH, WY=