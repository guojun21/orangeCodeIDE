// Module: out-build/vs/editor/common/viewLayout/viewLayout.js
// Offset: 1370066 (bundle byte offset)
// Size: 7484 bytes

yn(), rt(), NSe(), GaA(), Lte(), QOo(), Ibh=125, VOt=class{
  constructor(n, e, t, i){
    n=n|0, e=e|0, t=t|0, i=i|0, n<0&&(n=0), e<0&&(e=0), t<0&&(t=0), i<0&&(i=0), this.width=n, this.contentWidth=e, this.scrollWidth=Math.max(n, e), this.height=t, this.contentHeight=i, this.scrollHeight=Math.max(t, i)
  }
  equals(n){
    return this.width===n.width&&this.contentWidth===n.contentWidth&&this.height===n.height&&this.contentHeight===n.contentHeight
  }
}, Dbh=class extends at{
  constructor(n, e){
    super(), this._onDidContentSizeChange=this._register(new Qe), this.onDidContentSizeChange=this._onDidContentSizeChange.event, this._dimensions=new VOt(0, 0, 0, 0), this._scrollable=this._register(new Fde({
      forceIntegerValues:!0,smoothScrollDuration:n,scheduleAtNextAnimationFrame:e
    })), this.onDidScroll=this._scrollable.onScroll
  }
  getScrollable(){
    return this._scrollable
  }
  setSmoothScrollDuration(n){
    this._scrollable.setSmoothScrollDuration(n)
  }
  validateScrollPosition(n){
    return this._scrollable.validateScrollPosition(n)
  }
  getScrollDimensions(){
    return this._dimensions
  }
  setScrollDimensions(n){
    if(this._dimensions.equals(n))return;
    const e=this._dimensions;
    this._dimensions=n, this._scrollable.setScrollDimensions({
      width:n.width,scrollWidth:n.scrollWidth,height:n.height,scrollHeight:n.scrollHeight
    }, !0);
    const t=e.contentWidth!==n.contentWidth, i=e.contentHeight!==n.contentHeight;
    (t||i)&&this._onDidContentSizeChange.fire(new rbh(e.contentWidth, e.contentHeight, n.contentWidth, n.contentHeight))
  }
  getFutureScrollPosition(){
    return this._scrollable.getFutureScrollPosition()
  }
  getCurrentScrollPosition(){
    return this._scrollable.getCurrentScrollPosition()
  }
  setScrollPositionNow(n){
    this._scrollable.setScrollPositionNow(n)
  }
  setScrollPositionSmooth(n){
    this._scrollable.setScrollPositionSmooth(n)
  }
  hasPendingScrollAnimation(){
    return this._scrollable.hasPendingScrollAnimation()
  }
}, Bbh=class extends at{
  constructor(n, e, t){
    super(), this._configuration=n;
    const i=this._configuration.options, r=i.get(151), s=i.get(88);
    this._linesLayout=new kbh(e, i.get(68), s.top, s.bottom), this._maxLineWidth=0, this._overlayWidgetsMinWidth=0, this._scrollable=this._register(new Dbh(0, t)), this._configureSmoothScrollDuration(), this._scrollable.setScrollDimensions(new VOt(r.contentWidth, 0, r.height, 0)), this.onDidScroll=this._scrollable.onDidScroll, this.onDidContentSizeChange=this._scrollable.onDidContentSizeChange, this._updateHeight()
  }
  dispose(){
    super.dispose()
  }
  getScrollable(){
    return this._scrollable.getScrollable()
  }
  onHeightMaybeChanged(){
    this._updateHeight()
  }
  _configureSmoothScrollDuration(){
    this._scrollable.setSmoothScrollDuration(this._configuration.options.get(119)?Ibh:0)
  }
  onConfigurationChanged(n){
    const e=this._configuration.options;
    if(n.hasChanged(68)&&this._linesLayout.setLineHeight(e.get(68)), n.hasChanged(88)){
      const t=e.get(88);
      this._linesLayout.setPadding(t.top,t.bottom)
    }
    if(n.hasChanged(151)){
      const t=e.get(151),i=t.contentWidth,r=t.height,s=this._scrollable.getScrollDimensions(),o=s.contentWidth;
      this._scrollable.setScrollDimensions(new VOt(i,s.contentWidth,r,this._getContentHeight(i,r,o)))
    }
    else this._updateHeight();
    n.hasChanged(119)&&this._configureSmoothScrollDuration()
  }
  onFlushed(n){
    this._linesLayout.onFlushed(n)
  }
  onLinesDeleted(n, e){
    this._linesLayout.onLinesDeleted(n, e)
  }
  onLinesInserted(n, e){
    this._linesLayout.onLinesInserted(n, e)
  }
  _getHorizontalScrollbarHeight(n, e){
    const i=this._configuration.options.get(108);
    return i.horizontal===2||n>=e?0:i.horizontalScrollbarSize
  }
  _getContentHeight(n, e, t){
    const i=this._configuration.options;
    let r=this._linesLayout.getLinesTotalHeight();
    return i.get(110)?r+=Math.max(0, e-i.get(68)-i.get(88).bottom):i.get(108).ignoreHorizontalScrollbarInContentHeight||(r+=this._getHorizontalScrollbarHeight(n, t)), r
  }
  _updateHeight(){
    const n=this._scrollable.getScrollDimensions(), e=n.width, t=n.height, i=n.contentWidth;
    this._scrollable.setScrollDimensions(new VOt(e, n.contentWidth, t, this._getContentHeight(e, t, i)))
  }
  getCurrentViewport(){
    const n=this._scrollable.getScrollDimensions(), e=this._scrollable.getCurrentScrollPosition();
    return new zxc(e.scrollTop, e.scrollLeft, n.width, n.height)
  }
  getFutureViewport(){
    const n=this._scrollable.getScrollDimensions(), e=this._scrollable.getFutureScrollPosition();
    return new zxc(e.scrollTop, e.scrollLeft, n.width, n.height)
  }
  _computeContentWidth(){
    const n=this._configuration.options, e=this._maxLineWidth, t=n.get(152), i=n.get(52), r=n.get(151);
    if(t.isViewportWrapping){
      const s=n.get(74);
      return e>r.contentWidth+i.typicalHalfwidthCharacterWidth&&s.enabled&&s.side==="right"?e+r.verticalScrollbarWidth:e
    }
    else{
      const s=n.get(109)*i.typicalHalfwidthCharacterWidth,o=this._linesLayout.getWhitespaceMinWidth();
      return Math.max(e+s+r.verticalScrollbarWidth,o,this._overlayWidgetsMinWidth)
    }
  }
  setMaxLineWidth(n){
    this._maxLineWidth=n, this._updateContentWidth()
  }
  setOverlayWidgetsMinWidth(n){
    this._overlayWidgetsMinWidth=n, this._updateContentWidth()
  }
  _updateContentWidth(){
    const n=this._scrollable.getScrollDimensions();
    this._scrollable.setScrollDimensions(new VOt(n.width, this._computeContentWidth(), n.height, n.contentHeight)), this._updateHeight()
  }
  saveState(){
    const n=this._scrollable.getFutureScrollPosition(), e=n.scrollTop, t=this._linesLayout.getLineNumberAtOrAfterVerticalOffset(e), i=this._linesLayout.getWhitespaceAccumulatedHeightBeforeLineNumber(t);
    return{
      scrollTop:e,scrollTopWithoutViewZones:e-i,scrollLeft:n.scrollLeft
    }
  }
  changeWhitespace(n){
    const e=this._linesLayout.changeWhitespace(n);
    return e&&this.onHeightMaybeChanged(), e
  }
  getVerticalOffsetForLineNumber(n, e=!1){
    return this._linesLayout.getVerticalOffsetForLineNumber(n, e)
  }
  getVerticalOffsetAfterLineNumber(n, e=!1){
    return this._linesLayout.getVerticalOffsetAfterLineNumber(n, e)
  }
  isAfterLines(n){
    return this._linesLayout.isAfterLines(n)
  }
  isInTopPadding(n){
    return this._linesLayout.isInTopPadding(n)
  }
  isInBottomPadding(n){
    return this._linesLayout.isInBottomPadding(n)
  }
  getLineNumberAtVerticalOffset(n){
    return this._linesLayout.getLineNumberAtOrAfterVerticalOffset(n)
  }
  getWhitespaceAtVerticalOffset(n){
    return this._linesLayout.getWhitespaceAtVerticalOffset(n)
  }
  getLinesViewportData(){
    const n=this.getCurrentViewport();
    return this._linesLayout.getLinesViewportData(n.top, n.top+n.height)
  }
  getLinesViewportDataAtScrollTop(n){
    const e=this._scrollable.getScrollDimensions();
    return n+e.height>e.scrollHeight&&(n=e.scrollHeight-e.height), n<0&&(n=0), this._linesLayout.getLinesViewportData(n, n+e.height)
  }
  getWhitespaceViewportData(){
    const n=this.getCurrentViewport();
    return this._linesLayout.getWhitespaceViewportData(n.top, n.top+n.height)
  }
  getWhitespaces(){
    return this._linesLayout.getWhitespaces()
  }
  getContentWidth(){
    return this._scrollable.getScrollDimensions().contentWidth
  }
  getScrollWidth(){
    return this._scrollable.getScrollDimensions().scrollWidth
  }
  getContentHeight(){
    return this._scrollable.getScrollDimensions().contentHeight
  }
  getScrollHeight(){
    return this._scrollable.getScrollDimensions().scrollHeight
  }
  getCurrentScrollLeft(){
    return this._scrollable.getCurrentScrollPosition().scrollLeft
  }
  getCurrentScrollTop(){
    return this._scrollable.getCurrentScrollPosition().scrollTop
  }
  validateScrollPosition(n){
    return this._scrollable.validateScrollPosition(n)
  }
  setScrollPosition(n, e){
    e===1?this._scrollable.setScrollPositionNow(n):this._scrollable.setScrollPositionSmooth(n)
  }
  hasPendingScrollAnimation(){
    return this._scrollable.hasPendingScrollAnimation()
  }
  deltaScrollNow(n, e){
    const t=this._scrollable.getCurrentScrollPosition();
    this._scrollable.setScrollPositionNow({
      scrollLeft:t.scrollLeft+n,scrollTop:t.scrollTop+e
    })
  }
}
}
}), OVe, Rbh=