// Module: out-build/vs/editor/contrib/hover/browser/contentHoverTypes.js
// Offset: 4239309 (bundle byte offset)
// Size: 459 bytes

N5c=class{
  constructor(n, e, t){
    this.hoverParts=n, this.isComplete=e, this.options=t
  }
  filter(n){
    const e=this.hoverParts.filter(t=>t.isValidForHoverAnchor(n));
    return e.length===this.hoverParts.length?this:new XJh(this, e, this.isComplete, this.options)
  }
}, XJh=class extends N5c{
  constructor(n, e, t, i){
    super(e, t, i), this.original=n
  }
  filter(n){
    return this.original.filter(n)
  }
}
}
}), M5c, nUn, eGh=