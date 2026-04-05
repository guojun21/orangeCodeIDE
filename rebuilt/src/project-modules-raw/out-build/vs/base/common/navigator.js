// Module: out-build/vs/base/common/navigator.js
// Offset: 24802242 (bundle byte offset)
// Size: 521 bytes

Bpg=class{
  constructor(n, e=0, t=n.length, i=e-1){
    this.items=n, this.start=e, this.end=t, this.index=i
  }
  current(){
    return this.index===this.start-1||this.index===this.end?null:this.items[this.index]
  }
  next(){
    return this.index=Math.min(this.index+1, this.end), this.current()
  }
  previous(){
    return this.index=Math.max(this.index-1, this.start-1), this.current()
  }
  first(){
    return this.index=this.start, this.current()
  }
  last(){
    return this.index=this.end-1, this.current()
  }
}
}
}), bca, Tet, Tun=