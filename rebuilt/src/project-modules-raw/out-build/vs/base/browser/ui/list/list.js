// Module: out-build/vs/base/browser/ui/list/list.js
// Offset: 1967202 (bundle byte offset)
// Size: 482 bytes

(function(n){
  n[n.Copy=0]="Copy", n[n.Move=1]="Move"
})(Xwh||(Xwh={
  
})), (function(n){
  n.Over="drop-target", n.Before="drop-target-before", n.After="drop-target-after"
})(e_h||(e_h={
  
})), HSe=class extends Error{
  constructor(n, e){
    super(`ListError [${n}] ${e}`)
  }
}, N3o=class{
  constructor(){
    this.cache=new WeakMap
  }
  getHeight(n){
    return this.cache.get(n)??this.estimateHeight(n)
  }
  setDynamicHeight(n, e){
    e>0&&this.cache.set(n, e)
  }
}
}
}), QH, M3o=