// Module: out-build/vs/editor/common/core/offsetRange.js
// Offset: 781748 (bundle byte offset)
// Size: 3508 bytes

_s(), dm=class C_e{
  static fromTo(e, t){
    return new C_e(e, t)
  }
  static addRange(e, t){
    let i=0;
    for(;
    i<t.length&&t[i].endExclusive<e.start;
    )i++;
    let r=i;
    for(;
    r<t.length&&t[r].start<=e.endExclusive;
    )r++;
    if(i===r)t.splice(i, 0, e);
    else{
      const s=Math.min(e.start,t[i].start),o=Math.max(e.endExclusive,t[r-1].endExclusive);
      t.splice(i,r-i,new C_e(s,o))
    }
  }
  static tryCreate(e, t){
    if(!(e>t))return new C_e(e, t)
  }
  static ofLength(e){
    return new C_e(0, e)
  }
  static ofStartAndLength(e, t){
    return new C_e(e, e+t)
  }
  static emptyAt(e){
    return new C_e(e, e)
  }
  constructor(e, t){
    if(this.start=e, this.endExclusive=t, e>t)throw new _m(`Invalid range: ${this.toString()}`)
  }
  get isEmpty(){
    return this.start===this.endExclusive
  }
  delta(e){
    return new C_e(this.start+e, this.endExclusive+e)
  }
  deltaStart(e){
    return new C_e(this.start+e, this.endExclusive)
  }
  deltaEnd(e){
    return new C_e(this.start, this.endExclusive+e)
  }
  get length(){
    return this.endExclusive-this.start
  }
  toString(){
    return`[${this.start}, ${this.endExclusive})`
  }
  equals(e){
    return this.start===e.start&&this.endExclusive===e.endExclusive
  }
  containsRange(e){
    return this.start<=e.start&&e.endExclusive<=this.endExclusive
  }
  contains(e){
    return this.start<=e&&e<this.endExclusive
  }
  join(e){
    return new C_e(Math.min(this.start, e.start), Math.max(this.endExclusive, e.endExclusive))
  }
  intersect(e){
    const t=Math.max(this.start, e.start), i=Math.min(this.endExclusive, e.endExclusive);
    if(t<=i)return new C_e(t, i)
  }
  intersectionLength(e){
    const t=Math.max(this.start, e.start), i=Math.min(this.endExclusive, e.endExclusive);
    return Math.max(0, i-t)
  }
  intersects(e){
    const t=Math.max(this.start, e.start), i=Math.min(this.endExclusive, e.endExclusive);
    return t<i
  }
  intersectsOrTouches(e){
    const t=Math.max(this.start, e.start), i=Math.min(this.endExclusive, e.endExclusive);
    return t<=i
  }
  isBefore(e){
    return this.endExclusive<=e.start
  }
  isAfter(e){
    return this.start>=e.endExclusive
  }
  slice(e){
    return e.slice(this.start, this.endExclusive)
  }
  substring(e){
    return e.substring(this.start, this.endExclusive)
  }
  clip(e){
    if(this.isEmpty)throw new _m(`Invalid clipping range: ${this.toString()}`);
    return Math.max(this.start, Math.min(this.endExclusive-1, e))
  }
  clipCyclic(e){
    if(this.isEmpty)throw new _m(`Invalid clipping range: ${this.toString()}`);
    return e<this.start?this.endExclusive-(this.start-e)%this.length:e>=this.endExclusive?this.start+(e-this.start)%this.length:e
  }
  map(e){
    const t=[];
    for(let i=this.start;
    i<this.endExclusive;
    i++)t.push(e(i));
    return t
  }
  forEach(e){
    for(let t=this.start;
    t<this.endExclusive;
    t++)e(t)
  }
}, Clh=class RJb{
  constructor(){
    this._sortedRanges=[]
  }
  addRange(e){
    let t=0;
    for(;
    t<this._sortedRanges.length&&this._sortedRanges[t].endExclusive<e.start;
    )t++;
    let i=t;
    for(;
    i<this._sortedRanges.length&&this._sortedRanges[i].start<=e.endExclusive;
    )i++;
    if(t===i)this._sortedRanges.splice(t, 0, e);
    else{
      const r=Math.min(e.start,this._sortedRanges[t].start),s=Math.max(e.endExclusive,this._sortedRanges[i-1].endExclusive);
      this._sortedRanges.splice(t,i-t,new dm(r,s))
    }
  }
  toString(){
    return this._sortedRanges.map(e=>e.toString()).join(", ")
  }
  intersectsStrict(e){
    let t=0;
    for(;
    t<this._sortedRanges.length&&this._sortedRanges[t].endExclusive<=e.start;
    )t++;
    return t<this._sortedRanges.length&&this._sortedRanges[t].start<e.endExclusive
  }
  intersectWithRange(e){
    const t=new RJb;
    for(const i of this._sortedRanges){
      const r=i.intersect(e);
      r&&t.addRange(r)
    }
    return t
  }
  intersectWithRangeLength(e){
    return this.intersectWithRange(e).length
  }
  get length(){
    return this._sortedRanges.reduce((e, t)=>e+t.length, 0)
  }
}
}
}), C4n, c4o, Slh, l4o=