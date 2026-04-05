// Module: out-build/vs/base/common/arrays.js
// Offset: 242828 (bundle byte offset)
// Size: 2471 bytes

GD(), _s(), Zpt=n=>e=>e[n], (function(n){
  function e(s){
    return s<0
  }
  n.isLessThan=e;
  function t(s){
    return s<=0
  }
  n.isLessThanOrEqual=t;
  function i(s){
    return s>0
  }
  n.isGreaterThan=i;
  function r(s){
    return s===0
  }
  n.isNeitherLessOrGreaterThan=r, n.greaterThan=1, n.lessThan=-1, n.neitherLessOrGreaterThan=0
})(wte||(wte={
  
})), p9=(n, e)=>n-e, Inh=(n, e)=>p9(n?1:0, e?1:0), Ebe=class{
  constructor(n){
    this.items=n, this.firstIdx=0, this.lastIdx=this.items.length-1
  }
  get length(){
    return this.lastIdx-this.firstIdx+1
  }
  takeWhile(n){
    let e=this.firstIdx;
    for(;
    e<this.items.length&&n(this.items[e]);
    )e++;
    const t=e===this.firstIdx?null:this.items.slice(this.firstIdx, e);
    return this.firstIdx=e, t
  }
  takeFromEndWhile(n){
    let e=this.lastIdx;
    for(;
    e>=0&&n(this.items[e]);
    )e--;
    const t=e===this.lastIdx?null:this.items.slice(e+1, this.lastIdx+1);
    return this.lastIdx=e, t
  }
  peek(){
    if(this.length!==0)return this.items[this.firstIdx]
  }
  peekLast(){
    if(this.length!==0)return this.items[this.lastIdx]
  }
  dequeue(){
    const n=this.items[this.firstIdx];
    return this.firstIdx++, n
  }
  removeLast(){
    const n=this.items[this.lastIdx];
    return this.lastIdx--, n
  }
  takeCount(n){
    const e=this.items.slice(this.firstIdx, this.firstIdx+n);
    return this.firstIdx+=n, e
  }
}, DFt=class OGa{
  static{
    this.empty=new OGa(e=>{
      
    })
  }
  constructor(e){
    this.iterate=e
  }
  forEach(e){
    this.iterate(t=>(e(t), !0))
  }
  toArray(){
    const e=[];
    return this.iterate(t=>(e.push(t), !0)), e
  }
  filter(e){
    return new OGa(t=>this.iterate(i=>e(i)?t(i):!0))
  }
  map(e){
    return new OGa(t=>this.iterate(i=>t(e(i))))
  }
  some(e){
    let t=!1;
    return this.iterate(i=>(t=e(i), !t)), t
  }
  findFirst(e){
    let t;
    return this.iterate(i=>e(i)?(t=i, !1):!0), t
  }
  findLast(e){
    let t;
    return this.iterate(i=>(e(i)&&(t=i), !0)), t
  }
  findLastMaxBy(e){
    let t, i=!0;
    return this.iterate(r=>((i||wte.isGreaterThan(e(r, t)))&&(i=!1, t=r), !0)), t
  }
}, Dnh=class ead{
  constructor(e){
    this._indexMap=e
  }
  static createSortPermutation(e, t){
    const i=Array.from(e.keys()).sort((r, s)=>t(e[r], e[s]));
    return new ead(i)
  }
  apply(e){
    return e.map((t, i)=>e[this._indexMap[i]])
  }
  inverse(){
    const e=this._indexMap.slice();
    for(let t=0;
    t<this._indexMap.length;
    t++)e[this._indexMap[t]]=t;
    return new ead(e)
  }
}
}
});
function Xpt(n, e, t){
  let i=n.get(e);
  return i===void 0&&(i=t, n.set(e, i)), i
}
function rtA(n){
  return Array.isArray(n)
}
function Bnh(n, e){
  if(n===e)return!0;
  if(n.size!==e.size)return!1;
  for(const[t, i]of n)if(!e.has(t)||e.get(t)!==i)return!1;
  for(const[t]of e)if(!n.has(t))return!1;
  return!0
}
var Rnh, Pnh, Lnh, Nnh, fu, lT, Mnh, BFt, i0c, Fb, Fnh, r0c, Onh, RFt, H2n, cu=