// Module: out-build/vs/editor/contrib/folding/browser/foldingRanges.js
// Offset: 24988663 (bundle byte offset)
// Size: 6045 bytes

(function(n){
  n[n.provider=0]="provider", n[n.userDefined=1]="userDefined", n[n.recovered=2]="recovered"
})(Hgg||(Hgg={
  
})), Jgg={
  0:" ", 1:"u", 2:"r"
}, pWl=65535, HAe=16777215, gWl=4278190080, Hca=class{
  constructor(n){
    const e=Math.ceil(n/32);
    this._states=new Uint32Array(e)
  }
  get(n){
    const e=n/32|0, t=n%32;
    return(this._states[e]&1<<t)!==0
  }
  set(n, e){
    const t=n/32|0, i=n%32, r=this._states[t];
    e?this._states[t]=r|1<<i:this._states[t]=r&~(1<<i)
  }
}, Qae=class $Wb{
  constructor(e, t, i){
    if(e.length!==t.length||e.length>pWl)throw new Error("invalid startIndexes or endIndexes size");
    this._startIndexes=e, this._endIndexes=t, this._collapseStates=new Hca(e.length), this._userDefinedStates=new Hca(e.length), this._recoveredStates=new Hca(e.length), this._types=i, this._parentsComputed=!1
  }
  ensureParentIndices(){
    if(!this._parentsComputed){
      this._parentsComputed=!0;
      const e=[],t=(i,r)=>{
        const s=e[e.length-1];
        return this.getStartLineNumber(s)<=i&&this.getEndLineNumber(s)>=r
      };
      for(let i=0,r=this._startIndexes.length;
      i<r;
      i++){
        const s=this._startIndexes[i],o=this._endIndexes[i];
        if(s>HAe||o>HAe)throw new Error("startLineNumber or endLineNumber must not exceed "+HAe);
        for(;
        e.length>0&&!t(s,o);
        )e.pop();
        const a=e.length>0?e[e.length-1]:-1;
        e.push(i),this._startIndexes[i]=s+((a&255)<<24),this._endIndexes[i]=o+((a&65280)<<16)
      }
    }
  }
  get length(){
    return this._startIndexes.length
  }
  getStartLineNumber(e){
    return this._startIndexes[e]&HAe
  }
  getEndLineNumber(e){
    return this._endIndexes[e]&HAe
  }
  getType(e){
    return this._types?this._types[e]:void 0
  }
  hasTypes(){
    return!!this._types
  }
  isCollapsed(e){
    return this._collapseStates.get(e)
  }
  setCollapsed(e, t){
    this._collapseStates.set(e, t)
  }
  isUserDefined(e){
    return this._userDefinedStates.get(e)
  }
  setUserDefined(e, t){
    return this._userDefinedStates.set(e, t)
  }
  isRecovered(e){
    return this._recoveredStates.get(e)
  }
  setRecovered(e, t){
    return this._recoveredStates.set(e, t)
  }
  getSource(e){
    return this.isUserDefined(e)?1:this.isRecovered(e)?2:0
  }
  setSource(e, t){
    t===1?(this.setUserDefined(e, !0), this.setRecovered(e, !1)):t===2?(this.setUserDefined(e, !1), this.setRecovered(e, !0)):(this.setUserDefined(e, !1), this.setRecovered(e, !1))
  }
  setCollapsedAllOfType(e, t){
    let i=!1;
    if(this._types)for(let r=0;
    r<this._types.length;
    r++)this._types[r]===e&&(this.setCollapsed(r, t), i=!0);
    return i
  }
  toRegion(e){
    return new Ggg(this, e)
  }
  getParentIndex(e){
    this.ensureParentIndices();
    const t=((this._startIndexes[e]&gWl)>>>24)+((this._endIndexes[e]&gWl)>>>16);
    return t===pWl?-1:t
  }
  contains(e, t){
    return this.getStartLineNumber(e)<=t&&this.getEndLineNumber(e)>=t
  }
  findIndex(e){
    let t=0, i=this._startIndexes.length;
    if(i===0)return-1;
    for(;
    t<i;
    ){
      const r=Math.floor((t+i)/2);
      e<this.getStartLineNumber(r)?i=r:t=r+1
    }
    return t-1
  }
  findRange(e){
    let t=this.findIndex(e);
    if(t>=0){
      if(this.getEndLineNumber(t)>=e)return t;
      for(t=this.getParentIndex(t);
      t!==-1;
      ){
        if(this.contains(t,e))return t;
        t=this.getParentIndex(t)
      }
    }
    return-1
  }
  toString(){
    const e=[];
    for(let t=0;
    t<this.length;
    t++)e[t]=`[${Jgg[this.getSource(t)]}${this.isCollapsed(t)?"+":"-"}] ${this.getStartLineNumber(t)}/${this.getEndLineNumber(t)}`;
    return e.join(", ")
  }
  toFoldRange(e){
    return{
      startLineNumber:this._startIndexes[e]&HAe,endLineNumber:this._endIndexes[e]&HAe,type:this._types?this._types[e]:void 0,isCollapsed:this.isCollapsed(e),source:this.getSource(e)
    }
  }
  static fromFoldRanges(e){
    const t=e.length, i=new Uint32Array(t), r=new Uint32Array(t);
    let s=[], o=!1;
    for(let l=0;
    l<t;
    l++){
      const u=e[l];
      i[l]=u.startLineNumber,r[l]=u.endLineNumber,s.push(u.type),u.type&&(o=!0)
    }
    o||(s=void 0);
    const a=new $Wb(i, r, s);
    for(let l=0;
    l<t;
    l++)e[l].isCollapsed&&a.setCollapsed(l, !0), a.setSource(l, e[l].source);
    return a
  }
  static sanitizeAndMerge(e, t, i, r){
    i=i??Number.MAX_VALUE;
    const s=(w, C)=>Array.isArray(w)?(x=>x<C?w[x]:void 0):(x=>x<C?w.toFoldRange(x):void 0), o=s(e, e.length), a=s(t, t.length);
    let l=0, u=0, d=o(0), m=a(0);
    const p=[];
    let g, f=0;
    const A=[];
    for(;
    d||m;
    ){
      let w;
      if(m&&(!d||d.startLineNumber>=m.startLineNumber))d&&d.startLineNumber===m.startLineNumber?(m.source===1?w=m:(w=d,w.isCollapsed=m.isCollapsed&&(d.endLineNumber===m.endLineNumber||!r?.startsInside(d.startLineNumber+1,d.endLineNumber+1)),w.source=0),d=o(++l)):(w=m,m.isCollapsed&&m.source===0&&(w.source=2)),m=a(++u);
      else{
        let C=u,x=m;
        for(;
        ;
        ){
          if(!x||x.startLineNumber>d.endLineNumber){
            w=d;
            break
          }
          if(x.source===1&&x.endLineNumber>d.endLineNumber)break;
          x=a(++C)
        }
        d=o(++l)
      }
      if(w){
        for(;
        g&&g.endLineNumber<w.startLineNumber;
        )g=p.pop();
        w.endLineNumber>w.startLineNumber&&w.startLineNumber>f&&w.endLineNumber<=i&&(!g||g.endLineNumber>=w.endLineNumber)&&(A.push(w),f=w.startLineNumber,g&&p.push(g),g=w)
      }
    }
    return A
  }
}, Ggg=class{
  constructor(n, e){
    this.ranges=n, this.index=e
  }
  get startLineNumber(){
    return this.ranges.getStartLineNumber(this.index)
  }
  get endLineNumber(){
    return this.ranges.getEndLineNumber(this.index)
  }
  get regionIndex(){
    return this.index
  }
  get parentIndex(){
    return this.ranges.getParentIndex(this.index)
  }
  get isCollapsed(){
    return this.ranges.isCollapsed(this.index)
  }
  containedBy(n){
    return n.startLineNumber<=this.startLineNumber&&n.endLineNumber>=this.endLineNumber
  }
  containsLine(n){
    return this.startLineNumber<=n&&n<=this.endLineNumber
  }
  hidesLine(n){
    return this.startLineNumber<n&&n<=this.endLineNumber
  }
}
}
});
function J0A(n, e, t){
  let i=null;
  const r=n.map((s, o)=>Promise.resolve(s.provideFoldingRanges(e, Qgg, t)).then(a=>{
    if(!t.isCancellationRequested&&Array.isArray(a)){
      Array.isArray(i)||(i=[]);
      const l=e.getLineCount();
      for(const u of a)u.start>0&&u.end>u.start&&u.end<=l&&i.push({
        start:u.start,end:u.end,rank:o,kind:u.kind
      })
    }
  }, JE));
  return Promise.all(r).then(s=>i)
}
function Wgg(n, e){
  const t=n.sort((o, a)=>{
    let l=o.start-a.start;
    return l===0&&(l=o.rank-a.rank), l
  }), i=new zgg(e);
  let r;
  const s=[];
  for(const o of t)if(!r)r=o, i.add(o.start, o.end, o.kind&&o.kind.value, s.length);
  else if(o.start>r.start)if(o.end<=r.end)s.push(r), r=o, i.add(o.start, o.end, o.kind&&o.kind.value, s.length);
  else{
    if(o.start>r.end){
      do r=s.pop();
      while(r&&o.start>r.end);
      r&&s.push(r),r=o
    }
    i.add(o.start, o.end, o.kind&&o.kind.value, s.length)
  }
  return i.toIndentRanges()
}
var Qgg, jgg, Upi, zgg, Jca=