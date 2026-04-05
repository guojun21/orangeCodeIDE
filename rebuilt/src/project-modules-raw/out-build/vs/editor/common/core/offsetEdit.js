// Module: out-build/vs/editor/common/core/offsetEdit.js
// Offset: 25301183 (bundle byte offset)
// Size: 3978 bytes

_s(), $I(), Vae=class $at{
  static{
    this.empty=new $at([])
  }
  static fromJson(e){
    return new $at(e.map(E2.fromJson))
  }
  static replace(e, t){
    return new $at([new E2(e, t)])
  }
  static insert(e, t){
    return $at.replace(dm.emptyAt(e), t)
  }
  constructor(e){
    this.edits=e;
    let t=-1;
    for(const i of e){
      if(!(i.replaceRange.start>=t))throw new _m(`Edits must be disjoint and sorted. Found ${i} after ${t}`);
      t=i.replaceRange.endExclusive
    }
  }
  normalize(){
    const e=[];
    let t;
    for(const i of this.edits)i.newText.length===0&&i.replaceRange.length===0||(t&&t.replaceRange.endExclusive===i.replaceRange.start?t=new E2(t.replaceRange.join(i.replaceRange), t.newText+i.newText):(t&&e.push(t), t=i));
    return t&&e.push(t), new $at(e)
  }
  toString(){
    return`[${this.edits.map(t=>t.toString()).join(", ")}]`
  }
  apply(e){
    const t=[];
    let i=0;
    for(const r of this.edits)t.push(e.substring(i, r.replaceRange.start)), t.push(r.newText), i=r.replaceRange.endExclusive;
    return t.push(e.substring(i)), t.join("")
  }
  compose(e){
    return ASA(this, e)
  }
  inverse(e){
    const t=[];
    let i=0;
    for(const r of this.edits)t.push(new E2(dm.ofStartAndLength(r.replaceRange.start+i, r.newText.length), e.substring(r.replaceRange.start, r.replaceRange.endExclusive))), i+=r.newText.length-r.replaceRange.length;
    return new $at(t)
  }
  getNewTextRanges(){
    const e=[];
    let t=0;
    for(const i of this.edits)e.push(dm.ofStartAndLength(i.replaceRange.start+t, i.newText.length)), t+=i.newText.length-i.replaceRange.length;
    return e
  }
  get isEmpty(){
    return this.edits.length===0
  }
  tryRebase(e, t){
    const i=[];
    let r=0, s=0, o=0;
    for(;
    s<this.edits.length||r<e.edits.length;
    ){
      const a=e.edits[r],l=this.edits[s];
      if(l)if(!a)i.push(new E2(l.replaceRange.delta(o),l.newText)),s++;
      else if(l.replaceRange.intersectsOrTouches(a.replaceRange)){
        if(s++,t)return
      }
      else l.replaceRange.start<a.replaceRange.start?(i.push(new E2(l.replaceRange.delta(o),l.newText)),s++):(r++,o+=a.newText.length-a.replaceRange.length);
      else break
    }
    return new $at(i)
  }
  applyToOffset(e){
    let t=0;
    for(const i of this.edits)if(i.replaceRange.start<=e){
      if(e<i.replaceRange.endExclusive)return i.replaceRange.start+t;
      t+=i.newText.length-i.replaceRange.length
    }
    else break;
    return e+t
  }
  applyToOffsetRange(e){
    return new dm(this.applyToOffset(e.start), this.applyToOffset(e.endExclusive))
  }
  applyInverseToOffset(e){
    let t=0;
    for(const i of this.edits){
      const r=i.newText.length;
      if(i.replaceRange.start<=e-t){
        if(e-t<i.replaceRange.start+r)return i.replaceRange.start;
        t+=r-i.replaceRange.length
      }
      else break
    }
    return e-t
  }
  equals(e){
    if(this.edits.length!==e.edits.length)return!1;
    for(let t=0;
    t<this.edits.length;
    t++)if(!this.edits[t].equals(e.edits[t]))return!1;
    return!0
  }
}, E2=class wWa{
  static fromJson(e){
    return new wWa(dm.ofStartAndLength(e.pos, e.len), e.txt)
  }
  static insert(e, t){
    return new wWa(dm.emptyAt(e), t)
  }
  static replace(e, t){
    return new wWa(e, t)
  }
  constructor(e, t){
    this.replaceRange=e, this.newText=t
  }
  toString(){
    return`${this.replaceRange} -> "${this.newText}"`
  }
  get isEmpty(){
    return this.newText.length===0&&this.replaceRange.length===0
  }
  apply(e){
    return e.substring(0, this.replaceRange.start)+this.newText+e.substring(this.replaceRange.endExclusive)
  }
  getRangeAfterApply(){
    return new dm(this.replaceRange.start, this.replaceRange.start+this.newText.length)
  }
  equals(e){
    return this.replaceRange.equals(e.replaceRange)&&this.newText===e.newText
  }
}
}
});
function eyg(n, e, t, i){
  return new Dun(n, e, t).ComputeDiff(i)
}
function wSA(n){
  if(n.length<=1)return n;
  const e=[n[0]];
  let t=e[0];
  for(let i=1, r=n.length;
  i<r;
  i++){
    const s=n[i], o=s.originalStart-(t.originalStart+t.originalLength), a=s.modifiedStart-(t.modifiedStart+t.modifiedLength);
    Math.min(o, a)<nyg?(t.originalLength=s.originalStart+s.originalLength-t.originalStart, t.modifiedLength=s.modifiedStart+s.modifiedLength-t.modifiedStart):(e.push(s), t=s)
  }
  return e
}
function VQl(n, e){
  const t=TH(n);
  return t===-1?e:t+1
}
function KQl(n, e){
  const t=mde(n);
  return t===-1?e:t+2
}
function tyg(n){
  if(n===0)return()=>!0;
  const e=Date.now();
  return()=>Date.now()-e<n
}
var nyg, iyg, YQl, ryg, Rgi, Ola, ZQl, syg=