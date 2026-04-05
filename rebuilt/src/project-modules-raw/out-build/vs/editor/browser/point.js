// Module: out-build/vs/editor/browser/point.js
// Offset: 2238623 (bundle byte offset)
// Size: 373 bytes

Koe=class sWa{
  static equals(e, t){
    return e.x===t.x&&e.y===t.y
  }
  constructor(e, t){
    this.x=e, this.y=t
  }
  add(e){
    return new sWa(this.x+e.x, this.y+e.y)
  }
  deltaX(e){
    return new sWa(this.x+e, this.y)
  }
  deltaY(e){
    return new sWa(this.x, this.y+e)
  }
  toString(){
    return`(${this.x},${this.y})`
  }
}
}
});
function HB(n){
  return SCh.get(n)
}
var SCh, V$=