// Module: out-build/vs/base/common/lifecycle.js
// Offset: 258420 (bundle byte offset)
// Size: 6826 bytes

if(Vs(), Ate(), cu(), wH(), Ef(), a0c=!1, FMo=void 0, Gnh=n=>{
  a0c=n
}, Wnh=()=>a0c, Qnh=n=>{
  FMo=n
}, jnh=!1, yze=null, znh=class{
  constructor(){
    this._registry=new FinalizationRegistry(n=>{
      if(Wnh()&&console.warn(`[LEAKED DISPOSABLE] ${n}`),FMo){
        const t=n?.split(`
`)?.slice(1)?.find(r=>!r.match(/common\/(lifecycle|event)/)),i=new Error(`[LEAKED DISPOSABLE] ${t}`);
        i.stack=n,FMo(i)
      }
    })
  }
  trackDisposable(n){
    const e=new Error("CREATED via:").stack;
    this._registry.register(n, e, n)
  }
  setParent(n, e){
    e?this._registry.unregister(n):this.trackDisposable(n)
  }
  markAsDisposed(n){
    this._registry.unregister(n)
  }
  markAsSingleton(n){
    this._registry.unregister(n)
  }
}, Vnh=class YHb{
  constructor(){
    this.livingDisposables=new Map
  }
  static{
    this.idx=0
  }
  getDisposableData(e){
    let t=this.livingDisposables.get(e);
    return t||(t={
      parent:null,source:null,isSingleton:!1,value:e,idx:YHb.idx++
    }, this.livingDisposables.set(e, t)), t
  }
  trackDisposable(e){
    const t=this.getDisposableData(e);
    t.source||(t.source=new Error().stack)
  }
  setParent(e, t){
    const i=this.getDisposableData(e);
    i.parent=t
  }
  markAsDisposed(e){
    this.livingDisposables.delete(e)
  }
  markAsSingleton(e){
    this.getDisposableData(e).isSingleton=!0
  }
  getRootParent(e, t){
    const i=t.get(e);
    if(i)return i;
    const r=e.parent?this.getRootParent(this.getDisposableData(e.parent), t):e;
    return t.set(e, r), r
  }
  getTrackedDisposables(){
    const e=new Map;
    return[...this.livingDisposables.entries()].filter(([, i])=>i.source!==null&&!this.getRootParent(i, e).isSingleton).flatMap(([i])=>i)
  }
  computeLeakingDisposables(e=10, t){
    let i;
    if(t)i=t;
    else{
      const l=new Map,u=[...this.livingDisposables.values()].filter(m=>m.source!==null&&!this.getRootParent(m,l).isSingleton);
      if(u.length===0)return;
      const d=new Set(u.map(m=>m.value));
      if(i=u.filter(m=>!(m.parent&&d.has(m.parent))),i.length===0)throw new Error("There are cyclic diposable chains!")
    }
    if(!i)return;
    function r(l){
      function u(m,p){
        for(;
        m.length>0&&p.some(g=>typeof g=="string"?g===m[0]:m[0].match(g));
        )m.shift()
      }
      const d=l.source.split(`
`).map(m=>m.trim().replace("at ","")).filter(m=>m!=="");
      return u(d,["Error",/^trackDisposable \(.*\)$/,/^DisposableTracker.trackDisposable \(.*\)$/]),d.reverse()
    }
    const s=new RFt;
    for(const l of i){
      const u=r(l);
      for(let d=0;
      d<=u.length;
      d++)s.add(u.slice(0,d).join(`
`),l)
    }
    i.sort(JP(l=>l.idx, p9));
    let o="", a=0;
    for(const l of i.slice(0, e)){
      a++;
      const u=r(l),d=[];
      for(let m=0;
      m<u.length;
      m++){
        let p=u[m];
        p=`(shared with ${s.get(u.slice(0,m+1).join(`
`)).size}/${i.length} leaks) at ${p}`;
        const f=s.get(u.slice(0,m).join(`
`)),A=vze([...f].map(w=>r(w)[m]),w=>w);
        delete A[u[m]];
        for(const[w,C]of Object.entries(A))d.unshift(`    - stacktraces of ${C.length} other leaks continue with ${w}`);
        d.unshift(p)
      }
      o+=`


==================== Leaking disposable ${a}/${i.length}: ${l.value.constructor.name} ====================
${d.join(`
`)}
============================================================

`
    }
    return i.length>e&&(o+=`


... and ${i.length-e} more leaking disposables

`), {
      leaks:i,details:o
    }
  }
}, jnh){
  const n="__is_disposable_tracked__";
  J2n(new class{
    trackDisposable(e){
      const t=new Error("Potentially leaked disposable").stack;
      setTimeout(()=>{
        e[n]||console.log(t)
      },3e3)
    }
    setParent(e, t){
      if(e&&e!==at.None)try{
        e[n]=!0
      }
      catch{
        
      }
    }
    markAsDisposed(e){
      if(e&&e!==at.None)try{
        e[n]=!0
      }
      catch{
        
      }
    }
    markAsSingleton(e){
      
    }
  })
}
Ut=class ZHb{
  static{
    this.DISABLE_DISPOSED_WARNING=!1
  }
  constructor(){
    this._toDispose=new Set, this._isDisposed=!1, tgt(this)
  }
  dispose(){
    this._isDisposed||(ngt(this), this._isDisposed=!0, this.clear())
  }
  get isDisposed(){
    return this._isDisposed
  }
  clear(){
    if(this._toDispose.size!==0)try{
      Bo(this._toDispose)
    }
    finally{
      this._toDispose.clear()
    }
  }
  add(e){
    if(!e)return e;
    if(e===this)throw new Error("Cannot register a disposable on itself!");
    return G2n(e, this), this._isDisposed?ZHb.DISABLE_DISPOSED_WARNING||console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack):this._toDispose.add(e), e
  }
  delete(e){
    if(e){
      if(e===this)throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(e),e.dispose()
    }
  }
  deleteAndLeak(e){
    e&&this._toDispose.has(e)&&(this._toDispose.delete(e), G2n(e, null))
  }
}, at=class{
  static{
    this.None=Object.freeze({
      dispose(){
        
      }
    })
  }
  constructor(){
    this._store=new Ut, tgt(this), G2n(this._store, this)
  }
  dispose(){
    ngt(this), this._store.dispose()
  }
  _register(n){
    if(n===this)throw new Error("Cannot register a disposable on itself!");
    return this._store.add(n)
  }
}, uo=class{
  constructor(){
    this._isDisposed=!1, tgt(this)
  }
  get value(){
    return this._isDisposed?void 0:this._value
  }
  set value(n){
    this._isDisposed||n===this._value||(this._value?.dispose(), n&&G2n(n, this), this._value=n)
  }
  clear(){
    this.value=void 0
  }
  dispose(){
    this._isDisposed=!0, ngt(this), this._value?.dispose(), this._value=void 0
  }
  clearAndLeak(){
    const n=this._value;
    return this._value=void 0, n&&G2n(n, null), n
  }
}, Knh=class{
  constructor(n){
    this._disposable=new uo, this._isDisposed=!1, this._disposable.value=n
  }
  get value(){
    return this._disposable.value
  }
  set value(n){
    this._isDisposed||n===this._disposable.value||(this._disposable.value=n)
  }
  dispose(){
    this._isDisposed=!0, this._disposable.dispose()
  }
}, W2n=class{
  constructor(n){
    this._disposable=n, this._counter=1
  }
  acquire(){
    return this._counter++, this
  }
  release(){
    return--this._counter===0&&this._disposable.dispose(), this
  }
}, igt=class{
  constructor(){
    this.references=new Map
  }
  acquire(n, ...e){
    let t=this.references.get(n);
    t||(t={
      counter:0,object:this.createReferencedObject(n,...e)
    }, this.references.set(n, t));
    const{
      object:i
    }
    =t, r=_6(()=>{
      --t.counter===0&&(this.destroyReferencedObject(n,t.object),this.references.delete(n))
    });
    return t.counter++, {
      object:i,dispose:r,[Symbol.dispose]:r
    }
  }
}, c0c=class{
  constructor(n){
    this.referenceCollection=n
  }
  async acquire(n, ...e){
    const t=this.referenceCollection.acquire(n, ...e);
    try{
      const i=await t.object,r=()=>t.dispose();
      return{
        object:i,dispose:r,[Symbol.dispose]:r
      }
    }
    catch(i){
      throw t.dispose(),i
    }
  }
}, Ynh=class{
  constructor(n){
    this.object=n
  }
  dispose(){
    
  }
  [Symbol.dispose](){
    
  }
}, mp=class{
  constructor(){
    this._store=new Map, this._isDisposed=!1, tgt(this)
  }
  dispose(){
    ngt(this), this._isDisposed=!0, this.clearAndDisposeAll()
  }
  clearAndDisposeAll(){
    if(this._store.size)try{
      Bo(this._store.values())
    }
    finally{
      this._store.clear()
    }
  }
  has(n){
    return this._store.has(n)
  }
  get size(){
    return this._store.size
  }
  get(n){
    return this._store.get(n)
  }
  set(n, e, t=!1){
    this._isDisposed&&console.warn(new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!").stack), t||this._store.get(n)?.dispose(), this._store.set(n, e)
  }
  deleteAndDispose(n){
    this._store.get(n)?.dispose(), this._store.delete(n)
  }
  deleteAndLeak(n){
    const e=this._store.get(n);
    return this._store.delete(n), e
  }
  keys(){
    return this._store.keys()
  }
  values(){
    return this._store.values()
  }
  [Symbol.iterator](){
    return this._store[Symbol.iterator]()
  }
}
}
}), D4, WD, l2=