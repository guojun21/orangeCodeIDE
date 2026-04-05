// Module: out-build/vs/base/common/evictingLRUCache.js
// Offset: 33844549 (bundle byte offset)
// Size: 723 bytes

cu(), svn=class{
  constructor(n, e){
    this.cache=new Fb(n), this.onEvict=e
  }
  set(n, e){
    if(this.cache.size>=this.cache.limit&&!this.cache.has(n)){
      const t=this.cache.keys().next().value;
      if(t!==void 0){
        const i=this.cache.get(t);
        i!==void 0&&this.onEvict(t,i)
      }
    }
    this.cache.set(n, e)
  }
  get(n){
    return this.cache.get(n)
  }
  has(n){
    return this.cache.has(n)
  }
  delete(n){
    return this.cache.delete(n)
  }
  clear(){
    for(const[n, e]of this.cache)this.onEvict(n, e);
    this.cache.clear()
  }
  keys(){
    return this.cache.keys()
  }
  values(){
    return this.cache.values()
  }
  [Symbol.iterator](){
    return this.cache[Symbol.iterator]()
  }
  get size(){
    return this.cache.size
  }
  get limit(){
    return this.cache.limit
  }
}
}
}), ovn, c$f, yDa, wDa=