// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/smallImmutableSet.js
// Offset: 1066478 (bundle byte offset)
// Size: 1974 bytes

lOn=[], Ooe=class JFe{
  static{
    this.cache=new Array(129)
  }
  static create(e, t){
    if(e<=128&&t.length===0){
      let i=JFe.cache[e];
      return i||(i=new JFe(e,t),JFe.cache[e]=i),i
    }
    return new JFe(e, t)
  }
  static{
    this.empty=JFe.create(0, lOn)
  }
  static getEmpty(){
    return this.empty
  }
  constructor(e, t){
    this.items=e, this.additionalItems=t
  }
  add(e, t){
    const i=t.getKey(e);
    let r=i>>5;
    if(r===0){
      const o=1<<i|this.items;
      return o===this.items?this:JFe.create(o,this.additionalItems)
    }
    r--;
    const s=this.additionalItems.slice(0);
    for(;
    s.length<r;
    )s.push(0);
    return s[r]|=1<<(i&31), JFe.create(this.items, s)
  }
  has(e, t){
    const i=t.getKey(e);
    let r=i>>5;
    return r===0?(this.items&1<<i)!==0:(r--, ((this.additionalItems[r]||0)&1<<(i&31))!==0)
  }
  merge(e){
    const t=this.items|e.items;
    if(this.additionalItems===lOn&&e.additionalItems===lOn)return t===this.items?this:t===e.items?e:JFe.create(t, lOn);
    const i=[];
    for(let r=0;
    r<Math.max(this.additionalItems.length, e.additionalItems.length);
    r++){
      const s=this.additionalItems[r]||0,o=e.additionalItems[r]||0;
      i.push(s|o)
    }
    return JFe.create(t, i)
  }
  intersects(e){
    if((this.items&e.items)!==0)return!0;
    for(let t=0;
    t<Math.min(this.additionalItems.length, e.additionalItems.length);
    t++)if((this.additionalItems[t]&e.additionalItems[t])!==0)return!0;
    return!1
  }
  equals(e){
    if(this.items!==e.items||this.additionalItems.length!==e.additionalItems.length)return!1;
    for(let t=0;
    t<this.additionalItems.length;
    t++)if(this.additionalItems[t]!==e.additionalItems[t])return!1;
    return!0
  }
}, EEc={
  getKey(n){
    return n
  }
}, xEc=class{
  constructor(){
    this.items=new Map
  }
  getKey(n){
    let e=this.items.get(n);
    return e===void 0&&(e=this.items.size, this.items.set(n, e)), e
  }
  reverseLookup(n){
    return[...this.items].find(([e, t])=>t===n)?.[0]
  }
  reverseLookupSet(n){
    const e=[];
    for(const[t]of this.items)n.has(t, this)&&e.push(t);
    return e
  }
  keys(){
    return this.items.keys()
  }
}
}
}), gph, rOo, TEc, DSe, sOo, fph, oOo, IEc, bph, aOo, IVe, DEc, vph, cOo=