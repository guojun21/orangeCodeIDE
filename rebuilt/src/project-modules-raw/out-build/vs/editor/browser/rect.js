// Module: out-build/vs/editor/browser/rect.js
// Offset: 25456958 (bundle byte offset)
// Size: 3241 bytes

_s(), F3t(), x2=class RO{
  static fromPoint(e){
    return new RO(e.x, e.y, e.x, e.y)
  }
  static fromPoints(e, t){
    return new RO(e.x, e.y, t.x, t.y)
  }
  static fromPointSize(e, t){
    return new RO(e.x, e.y, e.x+t.x, e.y+t.y)
  }
  static fromLeftTopRightBottom(e, t, i, r){
    return new RO(e, t, i, r)
  }
  static fromLeftTopWidthHeight(e, t, i, r){
    return new RO(e, t, e+i, t+r)
  }
  static fromRanges(e, t){
    return new RO(e.start, t.start, e.endExclusive, t.endExclusive)
  }
  static hull(e){
    let t=Number.MAX_SAFE_INTEGER, i=Number.MAX_SAFE_INTEGER, r=Number.MIN_SAFE_INTEGER, s=Number.MIN_SAFE_INTEGER;
    for(const o of e)t=Math.min(t, o.left), i=Math.min(i, o.top), r=Math.max(r, o.right), s=Math.max(s, o.bottom);
    return new RO(t, i, r, s)
  }
  get width(){
    return this.right-this.left
  }
  get height(){
    return this.bottom-this.top
  }
  constructor(e, t, i, r){
    if(this.left=e, this.top=t, this.right=i, this.bottom=r, e>i||t>r)throw new _m("Invalid arguments")
  }
  withMargin(e, t, i, r){
    let s, o, a, l;
    return t===void 0&&i===void 0&&r===void 0?s=o=a=l=e:i===void 0&&r===void 0?(s=o=t, a=l=e):(s=r, o=t, a=e, l=i), new RO(this.left-s, this.top-a, this.right+o, this.bottom+l)
  }
  intersectVertical(e){
    const t=Math.max(this.top, e.start), i=Math.min(this.bottom, e.endExclusive);
    return new RO(this.left, t, this.right, Math.max(t, i))
  }
  intersectHorizontal(e){
    const t=Math.max(this.left, e.start), i=Math.min(this.right, e.endExclusive);
    return new RO(t, this.top, Math.max(t, i), this.bottom)
  }
  toString(){
    return`Rect{(${this.left},${this.top}), (${this.right},${this.bottom})}`
  }
  intersect(e){
    const t=Math.max(this.left, e.left), i=Math.min(this.right, e.right), r=Math.max(this.top, e.top), s=Math.min(this.bottom, e.bottom);
    if(!(t>i||r>s))return new RO(t, r, i, s)
  }
  union(e){
    return new RO(Math.min(this.left, e.left), Math.min(this.top, e.top), Math.max(this.right, e.right), Math.max(this.bottom, e.bottom))
  }
  containsRect(e){
    return this.left<=e.left&&this.top<=e.top&&this.right>=e.right&&this.bottom>=e.bottom
  }
  containsPoint(e){
    return this.left<=e.x&&this.top<=e.y&&this.right>=e.x&&this.bottom>=e.y
  }
  moveToBeContainedIn(e){
    const t=this.width, i=this.height;
    let r=this.left, s=this.top;
    return r<e.left?r=e.left:r+t>e.right&&(r=e.right-t), s<e.top?s=e.top:s+i>e.bottom&&(s=e.bottom-i), new RO(r, s, r+t, s+i)
  }
  withWidth(e){
    return new RO(this.left, this.top, this.left+e, this.bottom)
  }
  withHeight(e){
    return new RO(this.left, this.top, this.right, this.top+e)
  }
  withTop(e){
    return new RO(this.left, e, this.right, this.bottom)
  }
  withLeft(e){
    return new RO(e, this.top, this.right, this.bottom)
  }
  translateX(e){
    return new RO(this.left+e, this.top, this.right+e, this.bottom)
  }
  translateY(e){
    return new RO(this.left, this.top+e, this.right, this.bottom+e)
  }
  deltaRight(e){
    return new RO(this.left, this.top, this.right+e, this.bottom)
  }
  deltaTop(e){
    return new RO(this.left, this.top+e, this.right, this.bottom)
  }
  deltaLeft(e){
    return new RO(this.left+e, this.top, this.right, this.bottom)
  }
  deltaBottom(e){
    return new RO(this.left, this.top, this.right, this.bottom+e)
  }
  getLeftBottom(){
    return new Koe(this.left, this.bottom)
  }
  getRightBottom(){
    return new Koe(this.right, this.bottom)
  }
  getLeftTop(){
    return new Koe(this.left, this.top)
  }
  getRightTop(){
    return new Koe(this.right, this.top)
  }
  toStyles(){
    return{
      position:"absolute",left:`${this.left}px`,top:`${this.top}px`,width:`${this.width}px`,height:`${this.height}px`
    }
  }
}
}
}), ZSA=