// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/algorithms/diffAlgorithm.js
// Offset: 2170138 (bundle byte offset)
// Size: 2775 bytes

Vs(), _s(), $I(), WSe=class Oad{
  static trivial(e, t){
    return new Oad([new H4(dm.ofLength(e.length), dm.ofLength(t.length))], !1)
  }
  static trivialTimedOut(e, t){
    return new Oad([new H4(dm.ofLength(e.length), dm.ofLength(t.length))], !0)
  }
  constructor(e, t){
    this.diffs=e, this.hitTimeout=t
  }
}, H4=class AJe{
  static invert(e, t){
    const i=[];
    return knh(e, (r, s)=>{
      i.push(AJe.fromOffsetPairs(r?r.getEndExclusives():uKe.zero,s?s.getStarts():new uKe(t,(r?r.seq2Range.endExclusive-r.seq1Range.endExclusive:0)+t)))
    }), i
  }
  static fromOffsetPairs(e, t){
    return new AJe(new dm(e.offset1, t.offset1), new dm(e.offset2, t.offset2))
  }
  static assertSorted(e){
    let t;
    for(const i of e){
      if(t&&!(t.seq1Range.endExclusive<=i.seq1Range.start&&t.seq2Range.endExclusive<=i.seq2Range.start))throw new _m("Sequence diffs must be sorted");
      t=i
    }
  }
  constructor(e, t){
    this.seq1Range=e, this.seq2Range=t
  }
  swap(){
    return new AJe(this.seq2Range, this.seq1Range)
  }
  toString(){
    return`${this.seq1Range} <-> ${this.seq2Range}`
  }
  join(e){
    return new AJe(this.seq1Range.join(e.seq1Range), this.seq2Range.join(e.seq2Range))
  }
  delta(e){
    return e===0?this:new AJe(this.seq1Range.delta(e), this.seq2Range.delta(e))
  }
  deltaStart(e){
    return e===0?this:new AJe(this.seq1Range.deltaStart(e), this.seq2Range.deltaStart(e))
  }
  deltaEnd(e){
    return e===0?this:new AJe(this.seq1Range.deltaEnd(e), this.seq2Range.deltaEnd(e))
  }
  intersectsOrTouches(e){
    return this.seq1Range.intersectsOrTouches(e.seq1Range)||this.seq2Range.intersectsOrTouches(e.seq2Range)
  }
  intersect(e){
    const t=this.seq1Range.intersect(e.seq1Range), i=this.seq2Range.intersect(e.seq2Range);
    if(!(!t||!i))return new AJe(t, i)
  }
  getStarts(){
    return new uKe(this.seq1Range.start, this.seq2Range.start)
  }
  getEndExclusives(){
    return new uKe(this.seq1Range.endExclusive, this.seq2Range.endExclusive)
  }
}, uKe=class nWa{
  static{
    this.zero=new nWa(0, 0)
  }
  static{
    this.max=new nWa(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
  }
  constructor(e, t){
    this.offset1=e, this.offset2=t
  }
  toString(){
    return`${this.offset1} <-> ${this.offset2}`
  }
  delta(e){
    return e===0?this:new nWa(this.offset1+e, this.offset2+e)
  }
  equals(e){
    return this.offset1===e.offset1&&this.offset2===e.offset2
  }
}, R3t=class IGb{
  static{
    this.instance=new IGb
  }
  isValid(){
    return!0
  }
}, Z0h=class{
  constructor(n, e){
    if(this.timeout=n, this.shouldGracefullyFallBackOnTimeout=e, this.startTime=Date.now(), this.numChecks=0, this.valid=!0, n<=0)throw new _m("timeout must be positive");
    this.expireTime=this.startTime+n
  }
  isValid(){
    return this.numChecks++, this.valid===!1||this.numChecks%25!=0?this.valid:(!(Date.now()<this.expireTime)&&this.valid&&(this.valid=!1), this.valid)
  }
  disable(){
    this.timeout=Number.MAX_SAFE_INTEGER, this.isValid=()=>!0, this.valid=!0
  }
}
}
});
function RDc(n){
  return n===32||n===9
}
var P3t, PDc, y5o=