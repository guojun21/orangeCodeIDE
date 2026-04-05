// Module: out-build/vs/editor/common/core/lineRange.js
// Offset: 1055171 (bundle byte offset)
// Size: 6033 bytes

_s(), $I(), ts(), GD(), rh=class vre{
  static fromRange(e){
    return new vre(e.startLineNumber, e.endLineNumber)
  }
  static fromRangeInclusive(e){
    return new vre(e.startLineNumber, e.endLineNumber+1)
  }
  static subtract(e, t){
    return t?e.startLineNumber<t.startLineNumber&&t.endLineNumberExclusive<e.endLineNumberExclusive?[new vre(e.startLineNumber, t.startLineNumber), new vre(t.endLineNumberExclusive, e.endLineNumberExclusive)]:t.startLineNumber<=e.startLineNumber&&e.endLineNumberExclusive<=t.endLineNumberExclusive?[]:t.endLineNumberExclusive<e.endLineNumberExclusive?[new vre(Math.max(t.endLineNumberExclusive, e.startLineNumber), e.endLineNumberExclusive)]:[new vre(e.startLineNumber, Math.min(t.startLineNumber, e.endLineNumberExclusive))]:[e]
  }
  static joinMany(e){
    if(e.length===0)return[];
    let t=new xVe(e[0].slice());
    for(let i=1;
    i<e.length;
    i++)t=t.getUnion(new xVe(e[i].slice()));
    return t.ranges
  }
  static join(e){
    if(e.length===0)throw new _m("lineRanges cannot be empty");
    let t=e[0].startLineNumber, i=e[0].endLineNumberExclusive;
    for(let r=1;
    r<e.length;
    r++)t=Math.min(t, e[r].startLineNumber), i=Math.max(i, e[r].endLineNumberExclusive);
    return new vre(t, i)
  }
  static ofLength(e, t){
    return new vre(e, e+t)
  }
  static deserialize(e){
    return new vre(e[0], e[1])
  }
  constructor(e, t){
    if(e>t)throw new _m(`startLineNumber ${e} cannot be after endLineNumberExclusive ${t}`);
    this.startLineNumber=e, this.endLineNumberExclusive=t
  }
  contains(e){
    return this.startLineNumber<=e&&e<this.endLineNumberExclusive
  }
  get isEmpty(){
    return this.startLineNumber===this.endLineNumberExclusive
  }
  delta(e){
    return new vre(this.startLineNumber+e, this.endLineNumberExclusive+e)
  }
  deltaLength(e){
    return new vre(this.startLineNumber, this.endLineNumberExclusive+e)
  }
  get length(){
    return this.endLineNumberExclusive-this.startLineNumber
  }
  join(e){
    return new vre(Math.min(this.startLineNumber, e.startLineNumber), Math.max(this.endLineNumberExclusive, e.endLineNumberExclusive))
  }
  toString(){
    return`[${this.startLineNumber},${this.endLineNumberExclusive})`
  }
  intersect(e){
    const t=Math.max(this.startLineNumber, e.startLineNumber), i=Math.min(this.endLineNumberExclusive, e.endLineNumberExclusive);
    if(t<=i)return new vre(t, i)
  }
  intersectsStrict(e){
    return this.startLineNumber<e.endLineNumberExclusive&&e.startLineNumber<this.endLineNumberExclusive
  }
  overlapOrTouch(e){
    return this.startLineNumber<=e.endLineNumberExclusive&&e.startLineNumber<=this.endLineNumberExclusive
  }
  equals(e){
    return this.startLineNumber===e.startLineNumber&&this.endLineNumberExclusive===e.endLineNumberExclusive
  }
  toInclusiveRange(){
    return this.isEmpty?null:new Zt(this.startLineNumber, 1, this.endLineNumberExclusive-1, Number.MAX_SAFE_INTEGER)
  }
  toExclusiveRange(){
    return new Zt(this.startLineNumber, 1, this.endLineNumberExclusive, 1)
  }
  mapToLineArray(e){
    const t=[];
    for(let i=this.startLineNumber;
    i<this.endLineNumberExclusive;
    i++)t.push(e(i));
    return t
  }
  forEach(e){
    for(let t=this.startLineNumber;
    t<this.endLineNumberExclusive;
    t++)e(t)
  }
  serialize(){
    return[this.startLineNumber, this.endLineNumberExclusive]
  }
  includes(e){
    return this.startLineNumber<=e&&e<this.endLineNumberExclusive
  }
  toOffsetRange(){
    return new dm(this.startLineNumber-1, this.endLineNumberExclusive-1)
  }
  distanceToRange(e){
    return this.endLineNumberExclusive<=e.startLineNumber?e.startLineNumber-this.endLineNumberExclusive:e.endLineNumberExclusive<=this.startLineNumber?this.startLineNumber-e.endLineNumberExclusive:0
  }
  distanceToLine(e){
    return this.contains(e)?0:e<this.startLineNumber?this.startLineNumber-e:e-this.endLineNumberExclusive
  }
  addMargin(e, t){
    return new vre(this.startLineNumber-e, this.endLineNumberExclusive+t)
  }
}, xVe=class NCn{
  constructor(e=[]){
    this._normalizedRanges=e
  }
  get ranges(){
    return this._normalizedRanges
  }
  addRange(e){
    if(e.length===0)return;
    const t=Sbe(this._normalizedRanges, r=>r.endLineNumberExclusive>=e.startLineNumber), i=xFt(this._normalizedRanges, r=>r.startLineNumber<=e.endLineNumberExclusive)+1;
    if(t===i)this._normalizedRanges.splice(t, 0, e);
    else if(t===i-1){
      const r=this._normalizedRanges[t];
      this._normalizedRanges[t]=r.join(e)
    }
    else{
      const r=this._normalizedRanges[t].join(this._normalizedRanges[i-1]).join(e);
      this._normalizedRanges.splice(t,i-t,r)
    }
  }
  contains(e){
    const t=EFt(this._normalizedRanges, i=>i.startLineNumber<=e);
    return!!t&&t.endLineNumberExclusive>e
  }
  intersects(e){
    const t=EFt(this._normalizedRanges, i=>i.startLineNumber<e.endLineNumberExclusive);
    return!!t&&t.endLineNumberExclusive>e.startLineNumber
  }
  getUnion(e){
    if(this._normalizedRanges.length===0)return e;
    if(e._normalizedRanges.length===0)return this;
    const t=[];
    let i=0, r=0, s=null;
    for(;
    i<this._normalizedRanges.length||r<e._normalizedRanges.length;
    ){
      let o=null;
      if(i<this._normalizedRanges.length&&r<e._normalizedRanges.length){
        const a=this._normalizedRanges[i],l=e._normalizedRanges[r];
        a.startLineNumber<l.startLineNumber?(o=a,i++):(o=l,r++)
      }
      else i<this._normalizedRanges.length?(o=this._normalizedRanges[i],i++):(o=e._normalizedRanges[r],r++);
      s===null?s=o:s.endLineNumberExclusive>=o.startLineNumber?s=new rh(s.startLineNumber,Math.max(s.endLineNumberExclusive,o.endLineNumberExclusive)):(t.push(s),s=o)
    }
    return s!==null&&t.push(s), new NCn(t)
  }
  subtractFrom(e){
    const t=Sbe(this._normalizedRanges, o=>o.endLineNumberExclusive>=e.startLineNumber), i=xFt(this._normalizedRanges, o=>o.startLineNumber<=e.endLineNumberExclusive)+1;
    if(t===i)return new NCn([e]);
    const r=[];
    let s=e.startLineNumber;
    for(let o=t;
    o<i;
    o++){
      const a=this._normalizedRanges[o];
      a.startLineNumber>s&&r.push(new rh(s,a.startLineNumber)),s=a.endLineNumberExclusive
    }
    return s<e.endLineNumberExclusive&&r.push(new rh(s, e.endLineNumberExclusive)), new NCn(r)
  }
  toString(){
    return this._normalizedRanges.map(e=>e.toString()).join(", ")
  }
  getIntersection(e){
    const t=[];
    let i=0, r=0;
    for(;
    i<this._normalizedRanges.length&&r<e._normalizedRanges.length;
    ){
      const s=this._normalizedRanges[i],o=e._normalizedRanges[r],a=s.intersect(o);
      a&&!a.isEmpty&&t.push(a),s.endLineNumberExclusive<o.endLineNumberExclusive?i++:r++
    }
    return new NCn(t)
  }
  getWithDelta(e){
    return new NCn(this._normalizedRanges.map(t=>t.delta(e)))
  }
}
}
}), YN, Kbe=