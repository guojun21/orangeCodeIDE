// Module: out-build/vs/base/common/dataTransfer.js
// Offset: 2374076 (bundle byte offset)
// Size: 846 bytes

Vs(), Ef(), Bc(), wbt=class{
  constructor(){
    this._entries=new Map
  }
  get size(){
    let n=0;
    for(const e of this._entries)n++;
    return n
  }
  has(n){
    return this._entries.has(this.toKey(n))
  }
  matches(n){
    const e=[...this._entries.keys()];
    return bl.some(this, ([t, i])=>i.asFile())&&e.push("files"), fSh(W5o(n), e)
  }
  get(n){
    return this._entries.get(this.toKey(n))?.[0]
  }
  append(n, e){
    const t=this._entries.get(n);
    t?t.push(e):this._entries.set(this.toKey(n), [e])
  }
  replace(n, e){
    this._entries.set(this.toKey(n), [e])
  }
  delete(n){
    this._entries.delete(this.toKey(n))
  }
  *[Symbol.iterator](){
    for(const[n, e]of this._entries)for(const t of e)yield[n, t]
  }
  toKey(n){
    return W5o(n)
  }
}, YSe=Object.freeze({
  create:n=>xb(n.map(e=>e.toString())).join(`\r
`), split:n=>n.split(`\r
`), parse:n=>YSe.split(n).filter(e=>!e.startsWith("#"))
})
}
}), p0, QY=