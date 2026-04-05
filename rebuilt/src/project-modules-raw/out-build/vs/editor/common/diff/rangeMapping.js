// Module: out-build/vs/editor/common/diff/rangeMapping.js
// Offset: 2144853 (bundle byte offset)
// Size: 4590 bytes

Vs(), Lv(), _s(), Ix(), tl(), ts(), EW(), Wde=class $Cn{
  static inverse(e, t, i){
    const r=[];
    let s=1, o=1;
    for(const l of e){
      const u=new $Cn(new rh(s,l.original.startLineNumber),new rh(o,l.modified.startLineNumber));
      u.modified.isEmpty||r.push(u),s=l.original.endLineNumberExclusive,o=l.modified.endLineNumberExclusive
    }
    const a=new $Cn(new rh(s, t+1), new rh(o, i+1));
    return a.modified.isEmpty||r.push(a), r
  }
  static clip(e, t, i){
    const r=[];
    for(const s of e){
      const o=s.original.intersect(t),a=s.modified.intersect(i);
      o&&!o.isEmpty&&a&&!a.isEmpty&&r.push(new $Cn(o,a))
    }
    return r
  }
  constructor(e, t){
    this.original=e, this.modified=t
  }
  toString(){
    return`{${this.original.toString()}->${this.modified.toString()}}`
  }
  flip(){
    return new $Cn(this.modified, this.original)
  }
  join(e){
    return new $Cn(this.original.join(e.original), this.modified.join(e.modified))
  }
  get changedLineCount(){
    return Math.max(this.original.length, this.modified.length)
  }
  toRangeMapping(){
    const e=this.original.toInclusiveRange(), t=this.modified.toInclusiveRange();
    if(e&&t)return new zH(e, t);
    if(this.original.startLineNumber===1||this.modified.startLineNumber===1){
      if(!(this.modified.startLineNumber===1&&this.original.startLineNumber===1))throw new _m("not a valid diff");
      return new zH(new Zt(this.original.startLineNumber,1,this.original.endLineNumberExclusive,1),new Zt(this.modified.startLineNumber,1,this.modified.endLineNumberExclusive,1))
    }
    else return new zH(new Zt(this.original.startLineNumber-1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive-1, Number.MAX_SAFE_INTEGER), new Zt(this.modified.startLineNumber-1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive-1, Number.MAX_SAFE_INTEGER))
  }
  toRangeMapping2(e, t){
    if(R0h(this.original.endLineNumberExclusive, e)&&R0h(this.modified.endLineNumberExclusive, t))return new zH(new Zt(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new Zt(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    if(!this.original.isEmpty&&!this.modified.isEmpty)return new zH(Zt.fromPositions(new ar(this.original.startLineNumber, 1), x3t(new ar(this.original.endLineNumberExclusive-1, Number.MAX_SAFE_INTEGER), e)), Zt.fromPositions(new ar(this.modified.startLineNumber, 1), x3t(new ar(this.modified.endLineNumberExclusive-1, Number.MAX_SAFE_INTEGER), t)));
    if(this.original.startLineNumber>1&&this.modified.startLineNumber>1)return new zH(Zt.fromPositions(x3t(new ar(this.original.startLineNumber-1, Number.MAX_SAFE_INTEGER), e), x3t(new ar(this.original.endLineNumberExclusive-1, Number.MAX_SAFE_INTEGER), e)), Zt.fromPositions(x3t(new ar(this.modified.startLineNumber-1, Number.MAX_SAFE_INTEGER), t), x3t(new ar(this.modified.endLineNumberExclusive-1, Number.MAX_SAFE_INTEGER), t)));
    throw new _m
  }
}, _3=class tWa extends Wde{
  static fromRangeMappings(e){
    const t=rh.join(e.map(r=>rh.fromRangeInclusive(r.originalRange))), i=rh.join(e.map(r=>rh.fromRangeInclusive(r.modifiedRange)));
    return new tWa(t, i, e)
  }
  constructor(e, t, i){
    super(e, t), this.innerChanges=i
  }
  flip(){
    return new tWa(this.modified, this.original, this.innerChanges?.map(e=>e.flip()))
  }
  withInnerChangesFromLineRanges(){
    return new tWa(this.original, this.modified, [this.toRangeMapping()])
  }
}, zH=class qCn{
  static fromEdit(e){
    const t=e.getNewRanges();
    return e.edits.map((r, s)=>new qCn(r.range, t[s]))
  }
  static fromEditJoin(e){
    const t=e.getNewRanges(), i=e.edits.map((r, s)=>new qCn(r.range, t[s]));
    return qCn.join(i)
  }
  static join(e){
    if(e.length===0)throw new _m("Cannot join an empty list of range mappings");
    let t=e[0];
    for(let i=1;
    i<e.length;
    i++)t=t.join(e[i]);
    return t
  }
  static assertSorted(e){
    for(let t=1;
    t<e.length;
    t++){
      const i=e[t-1],r=e[t];
      if(!(i.originalRange.getEndPosition().isBeforeOrEqual(r.originalRange.getStartPosition())&&i.modifiedRange.getEndPosition().isBeforeOrEqual(r.modifiedRange.getStartPosition())))throw new _m("Range mappings must be sorted")
    }
  }
  constructor(e, t){
    this.originalRange=e, this.modifiedRange=t
  }
  toString(){
    return`{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`
  }
  flip(){
    return new qCn(this.modifiedRange, this.originalRange)
  }
  toTextEdit(e){
    const t=e.getValueOfRange(this.modifiedRange);
    return new cI(this.originalRange, t)
  }
  join(e){
    return new qCn(this.originalRange.plusRange(e.originalRange), this.modifiedRange.plusRange(e.modifiedRange))
  }
}
}
});
function us(n, e, t, i){
  return lKe.registerIcon(n, e, t, i)
}
function GSe(){
  return lKe
}
function kdA(){
  const n=fah();
  for(const e in n){
    const t="\\"+n[e].toString(16);
    lKe.registerIcon(e, {
      fontCharacter:t
    })
  }
}
var _Dc, P0h, c5o, T3t, l5o, u5o, d5o, L0h, CDc, w3n, N0h, lKe, h5o, SDc, kDc, E9e, M0h, F0h, m5o, ARe, Pm=