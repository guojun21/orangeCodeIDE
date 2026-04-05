// Module: out-build/vs/base/common/scrollable.js
// Offset: 1351664 (bundle byte offset)
// Size: 6979 bytes

yn(), rt(), (function(n){
  n[n.Auto=1]="Auto", n[n.Hidden=2]="Hidden", n[n.Visible=3]="Visible"
})(wbh||(wbh={
  
})), _bh=class wad{
  constructor(e, t, i, r, s, o, a){
    this._forceIntegerValues=e, this._scrollStateBrand=void 0, this._forceIntegerValues&&(t=t|0, i=i|0, r=r|0, s=s|0, o=o|0, a=a|0), this.rawScrollLeft=r, this.rawScrollTop=a, t<0&&(t=0), r+t>i&&(r=i-t), r<0&&(r=0), s<0&&(s=0), a+s>o&&(a=o-s), a<0&&(a=0), this.width=t, this.scrollWidth=i, this.scrollLeft=r, this.height=s, this.scrollHeight=o, this.scrollTop=a
  }
  equals(e){
    return this.rawScrollLeft===e.rawScrollLeft&&this.rawScrollTop===e.rawScrollTop&&this.width===e.width&&this.scrollWidth===e.scrollWidth&&this.scrollLeft===e.scrollLeft&&this.height===e.height&&this.scrollHeight===e.scrollHeight&&this.scrollTop===e.scrollTop
  }
  withScrollDimensions(e, t){
    return new wad(this._forceIntegerValues, typeof e.width<"u"?e.width:this.width, typeof e.scrollWidth<"u"?e.scrollWidth:this.scrollWidth, t?this.rawScrollLeft:this.scrollLeft, typeof e.height<"u"?e.height:this.height, typeof e.scrollHeight<"u"?e.scrollHeight:this.scrollHeight, t?this.rawScrollTop:this.scrollTop)
  }
  withScrollPosition(e){
    return new wad(this._forceIntegerValues, this.width, this.scrollWidth, typeof e.scrollLeft<"u"?e.scrollLeft:this.rawScrollLeft, this.height, this.scrollHeight, typeof e.scrollTop<"u"?e.scrollTop:this.rawScrollTop)
  }
  createScrollEvent(e, t){
    const i=this.width!==e.width, r=this.scrollWidth!==e.scrollWidth, s=this.scrollLeft!==e.scrollLeft, o=this.height!==e.height, a=this.scrollHeight!==e.scrollHeight, l=this.scrollTop!==e.scrollTop;
    return{
      inSmoothScrolling:t,oldWidth:e.width,oldScrollWidth:e.scrollWidth,oldScrollLeft:e.scrollLeft,width:this.width,scrollWidth:this.scrollWidth,scrollLeft:this.scrollLeft,oldHeight:e.height,oldScrollHeight:e.scrollHeight,oldScrollTop:e.scrollTop,height:this.height,scrollHeight:this.scrollHeight,scrollTop:this.scrollTop,widthChanged:i,scrollWidthChanged:r,scrollLeftChanged:s,heightChanged:o,scrollHeightChanged:a,scrollTopChanged:l
    }
  }
}, Fde=class extends at{
  constructor(n){
    super(), this._options=n, this._scrollableBrand=void 0, this._onScroll=this._register(new Qe), this.onScroll=this._onScroll.event, this._smoothScrollDuration=this._options.smoothScrollDuration, this._scheduleAtNextAnimationFrame=this._options.scheduleAtNextAnimationFrame, this._state=new _bh(this._options.forceIntegerValues, 0, 0, 0, 0, 0, 0), this._smoothScrolling=null
  }
  dispose(){
    this._smoothScrolling&&(this._smoothScrolling.dispose(), this._smoothScrolling=null), super.dispose()
  }
  setSmoothScrollDuration(n){
    this._smoothScrollDuration=n
  }
  validateScrollPosition(n){
    return this._state.withScrollPosition(n)
  }
  getScrollDimensions(){
    return this._state
  }
  setScrollDimensions(n, e){
    const t=this._state.withScrollDimensions(n, e);
    this._setState(t, !!this._smoothScrolling), this._smoothScrolling?.acceptScrollDimensions(this._state)
  }
  getFutureScrollPosition(){
    return this._smoothScrolling?this._smoothScrolling.to:this._state
  }
  getCurrentScrollPosition(){
    return this._state
  }
  setScrollPositionNow(n){
    const e=this._state.withScrollPosition(n);
    this._smoothScrolling&&(this._smoothScrolling.dispose(), this._smoothScrolling=null), this._setState(e, !1)
  }
  setScrollPositionSmooth(n, e){
    if(this._smoothScrollDuration===0)return this.setScrollPositionNow(n);
    if(this._smoothScrolling){
      n={
        scrollLeft:typeof n.scrollLeft>"u"?this._smoothScrolling.to.scrollLeft:n.scrollLeft,scrollTop:typeof n.scrollTop>"u"?this._smoothScrolling.to.scrollTop:n.scrollTop
      };
      const t=this._state.withScrollPosition(n);
      if(this._smoothScrolling.to.scrollLeft===t.scrollLeft&&this._smoothScrolling.to.scrollTop===t.scrollTop)return;
      let i;
      e?i=new jxc(this._smoothScrolling.from,t,this._smoothScrolling.startTime,this._smoothScrolling.duration):i=this._smoothScrolling.combine(this._state,t,this._smoothScrollDuration),this._smoothScrolling.dispose(),this._smoothScrolling=i
    }
    else{
      const t=this._state.withScrollPosition(n);
      this._smoothScrolling=jxc.start(this._state,t,this._smoothScrollDuration)
    }
    this._smoothScrolling.animationFrameDisposable=this._scheduleAtNextAnimationFrame(()=>{
      this._smoothScrolling&&(this._smoothScrolling.animationFrameDisposable=null,this._performSmoothScrolling())
    })
  }
  hasPendingScrollAnimation(){
    return!!this._smoothScrolling
  }
  _performSmoothScrolling(){
    if(!this._smoothScrolling)return;
    const n=this._smoothScrolling.tick(), e=this._state.withScrollPosition(n);
    if(this._setState(e, !0), !!this._smoothScrolling){
      if(n.isDone){
        this._smoothScrolling.dispose(),this._smoothScrolling=null;
        return
      }
      this._smoothScrolling.animationFrameDisposable=this._scheduleAtNextAnimationFrame(()=>{
        this._smoothScrolling&&(this._smoothScrolling.animationFrameDisposable=null,this._performSmoothScrolling())
      })
    }
  }
  _setState(n, e){
    const t=this._state;
    t.equals(n)||(this._options.stickyScrollHorizontal&&((this._options.stickyScrollHorizontal==="right"||typeof this._options.stickyScrollHorizontal=="function"&&this._options.stickyScrollHorizontal()==="right")&&n.scrollLeft+n.width>=n.scrollWidth&&(n=n.withScrollPosition({
      scrollLeft:1/0
    })), (this._options.stickyScrollHorizontal==="left"||typeof this._options.stickyScrollHorizontal=="function"&&this._options.stickyScrollHorizontal()==="left")&&n.scrollLeft<=0&&(n=n.withScrollPosition({
      scrollLeft:-1/0
    }))), this._options.stickyScrollVertical&&((this._options.stickyScrollVertical==="down"||typeof this._options.stickyScrollVertical=="function"&&this._options.stickyScrollVertical()==="down")&&n.scrollTop+n.height>=n.scrollHeight&&(n=n.withScrollPosition({
      scrollTop:1/0
    })), (this._options.stickyScrollVertical==="up"||typeof this._options.stickyScrollVertical=="function"&&this._options.stickyScrollVertical()==="up")&&n.scrollTop<=0&&(n=n.withScrollPosition({
      scrollTop:-1/0
    }))), this._state=n, this._onScroll.fire(this._state.createScrollEvent(t, e)))
  }
  getScrollHeight(){
    return this._state.scrollHeight
  }
}, Qxc=class{
  constructor(n, e, t){
    this.scrollLeft=n, this.scrollTop=e, this.isDone=t
  }
}, jxc=class _ad{
  constructor(e, t, i, r){
    this.from=e, this.to=t, this.duration=r, this.startTime=i, this.animationFrameDisposable=null, this._initAnimations()
  }
  _initAnimations(){
    this.scrollLeft=this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width), this.scrollTop=this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height)
  }
  _initAnimation(e, t, i){
    if(Math.abs(e-t)>2.5*i){
      let s,o;
      return e<t?(s=e+.75*i,o=t-.75*i):(s=e-.75*i,o=t+.75*i),qaA(Wxc(e,s),Wxc(o,t),.33)
    }
    return Wxc(e, t)
  }
  dispose(){
    this.animationFrameDisposable!==null&&(this.animationFrameDisposable.dispose(), this.animationFrameDisposable=null)
  }
  acceptScrollDimensions(e){
    this.to=e.withScrollPosition(this.to), this._initAnimations()
  }
  tick(){
    return this._tick(Date.now())
  }
  _tick(e){
    const t=(e-this.startTime)/this.duration;
    if(t<1){
      const i=this.scrollLeft(t),r=this.scrollTop(t);
      return new Qxc(i,r,!1)
    }
    return new Qxc(this.to.scrollLeft, this.to.scrollTop, !0)
  }
  combine(e, t, i){
    return _ad.start(e, t, i)
  }
  static start(e, t, i){
    i=i+10;
    const r=Date.now()-10;
    return new _ad(e, t, r, i)
  }
}
}
}), Cbh, Sbh, kbh, GaA=