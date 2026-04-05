// Module: out-build/vs/base/browser/ui/scrollbar/scrollbarState.js
// Offset: 1540983 (bundle byte offset)
// Size: 2879 bytes

jvh=20, o3o=class Tad{
  constructor(e, t, i, r, s, o){
    this._scrollbarSize=Math.round(t), this._oppositeScrollbarSize=Math.round(i), this._arrowSize=Math.round(e), this._visibleSize=r, this._scrollSize=s, this._scrollPosition=o, this._computedAvailableSize=0, this._computedIsNeeded=!1, this._computedSliderSize=0, this._computedSliderRatio=0, this._computedSliderPosition=0, this._refreshComputedValues()
  }
  clone(){
    return new Tad(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition)
  }
  setVisibleSize(e){
    const t=Math.round(e);
    return this._visibleSize!==t?(this._visibleSize=t, this._refreshComputedValues(), !0):!1
  }
  setScrollSize(e){
    const t=Math.round(e);
    return this._scrollSize!==t?(this._scrollSize=t, this._refreshComputedValues(), !0):!1
  }
  setScrollPosition(e){
    const t=Math.round(e);
    return this._scrollPosition!==t?(this._scrollPosition=t, this._refreshComputedValues(), !0):!1
  }
  setScrollbarSize(e){
    this._scrollbarSize=Math.round(e)
  }
  setOppositeScrollbarSize(e){
    this._oppositeScrollbarSize=Math.round(e)
  }
  static _computeValues(e, t, i, r, s){
    const o=Math.max(0, i-e), a=Math.max(0, o-2*t), l=r>0&&r>i;
    if(!l)return{
      computedAvailableSize:Math.round(o),computedIsNeeded:l,computedSliderSize:Math.round(a),computedSliderRatio:0,computedSliderPosition:0
    };
    const u=Math.round(Math.max(jvh, Math.floor(i*a/r))), d=(a-u)/(r-i), m=s*d;
    return{
      computedAvailableSize:Math.round(o),computedIsNeeded:l,computedSliderSize:Math.round(u),computedSliderRatio:d,computedSliderPosition:Math.round(m)
    }
  }
  _refreshComputedValues(){
    const e=Tad._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
    this._computedAvailableSize=e.computedAvailableSize, this._computedIsNeeded=e.computedIsNeeded, this._computedSliderSize=e.computedSliderSize, this._computedSliderRatio=e.computedSliderRatio, this._computedSliderPosition=e.computedSliderPosition
  }
  getArrowSize(){
    return this._arrowSize
  }
  getScrollPosition(){
    return this._scrollPosition
  }
  getRectangleLargeSize(){
    return this._computedAvailableSize
  }
  getRectangleSmallSize(){
    return this._scrollbarSize
  }
  isNeeded(){
    return this._computedIsNeeded
  }
  getSliderSize(){
    return this._computedSliderSize
  }
  getSliderPosition(){
    return this._computedSliderPosition
  }
  getDesiredScrollPositionFromOffset(e){
    if(!this._computedIsNeeded)return 0;
    const t=e-this._arrowSize-this._computedSliderSize/2;
    return Math.round(t/this._computedSliderRatio)
  }
  getDesiredScrollPositionFromOffsetPaged(e){
    if(!this._computedIsNeeded)return 0;
    const t=e-this._arrowSize;
    let i=this._scrollPosition;
    return t<this._computedSliderPosition?i-=this._visibleSize:i+=this._visibleSize, i
  }
  getDesiredScrollPositionFromDelta(e){
    if(!this._computedIsNeeded)return 0;
    const t=this._computedSliderPosition+e;
    return Math.round(t/this._computedSliderRatio)
  }
}
}
}), zvh, CcA=