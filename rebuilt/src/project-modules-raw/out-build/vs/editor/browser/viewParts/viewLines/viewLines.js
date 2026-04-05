// Module: out-build/vs/editor/browser/viewParts/viewLines/viewLines.js
// Offset: 1654583 (bundle byte offset)
// Size: 13708 bytes

a3t(), vr(), _r(), GcA(), HY(), e3t(), LTc(), j$(), WcA(), STc(), tl(), ts(), JTc(), PAh=class{
  constructor(){
    this._currentVisibleRange=new Zt(1, 1, 1, 1)
  }
  getCurrentVisibleRange(){
    return this._currentVisibleRange
  }
  setCurrentVisibleRange(n){
    this._currentVisibleRange=n
  }
}, LAh=class{
  constructor(n, e, t, i, r, s, o){
    this.minimalReveal=n, this.lineNumber=e, this.startColumn=t, this.endColumn=i, this.startScrollTop=r, this.stopScrollTop=s, this.scrollType=o, this.type="range", this.minLineNumber=e, this.maxLineNumber=e
  }
}, NAh=class{
  constructor(n, e, t, i, r){
    this.minimalReveal=n, this.selections=e, this.startScrollTop=t, this.stopScrollTop=i, this.scrollType=r, this.type="selections";
    let s=e[0].startLineNumber, o=e[0].endLineNumber;
    for(let a=1, l=e.length;
    a<l;
    a++){
      const u=e[a];
      s=Math.min(s,u.startLineNumber),o=Math.max(o,u.endLineNumber)
    }
    this.minLineNumber=s, this.maxLineNumber=o
  }
}, MAh=class yGb extends yW{
  static{
    this.HORIZONTAL_EXTRA_PX=30
  }
  constructor(e, t, i){
    super(e);
    const r=this._context.configuration, s=this._context.configuration.options, o=s.get(52), a=s.get(152);
    this._lineHeight=s.get(68), this._typicalHalfwidthCharacterWidth=o.typicalHalfwidthCharacterWidth, this._isViewportWrapping=a.isViewportWrapping, this._revealHorizontalRightPadding=s.get(105), this._cursorSurroundingLines=s.get(29), this._cursorSurroundingLinesStyle=s.get(30), this._canUseLayerHinting=!s.get(32), this._viewLineOptions=new KOn(r, this._context.theme.type), this._linesContent=i, this._textRangeRestingSpot=document.createElement("div"), this._visibleLines=new PTc({
      createLine:()=>new GVe(t,this._viewLineOptions)
    }), this.domNode=this._visibleLines.domNode, tve.write(this.domNode, 8), this.domNode.setClassName(`view-lines ${USe}`), bF(this.domNode, o), this._maxLineWidth=0, this._asyncUpdateLineWidths=new Hu(()=>{
      this._updateLineWidthsSlow()
    }, 200), this._asyncCheckMonospaceFontAssumptions=new Hu(()=>{
      this._checkMonospaceFontAssumptions()
    }, 2e3), this._lastRenderedData=new PAh, this._horizontalRevealRequest=null, this._stickyScrollEnabled=s.get(120).enabled, this._maxNumberStickyLines=s.get(120).maxLineCount
  }
  dispose(){
    this._asyncUpdateLineWidths.dispose(), this._asyncCheckMonospaceFontAssumptions.dispose(), super.dispose()
  }
  getDomNode(){
    return this.domNode
  }
  onConfigurationChanged(e){
    this._visibleLines.onConfigurationChanged(e), e.hasChanged(152)&&(this._maxLineWidth=0);
    const t=this._context.configuration.options, i=t.get(52), r=t.get(152);
    return this._lineHeight=t.get(68), this._typicalHalfwidthCharacterWidth=i.typicalHalfwidthCharacterWidth, this._isViewportWrapping=r.isViewportWrapping, this._revealHorizontalRightPadding=t.get(105), this._cursorSurroundingLines=t.get(29), this._cursorSurroundingLinesStyle=t.get(30), this._canUseLayerHinting=!t.get(32), this._stickyScrollEnabled=t.get(120).enabled, this._maxNumberStickyLines=t.get(120).maxLineCount, bF(this.domNode, i), this._onOptionsMaybeChanged(), e.hasChanged(151)&&(this._maxLineWidth=0), !0
  }
  _onOptionsMaybeChanged(){
    const e=this._context.configuration, t=new KOn(e, this._context.theme.type);
    if(!this._viewLineOptions.equals(t)){
      this._viewLineOptions=t;
      const i=this._visibleLines.getStartLineNumber(),r=this._visibleLines.getEndLineNumber();
      for(let s=i;
      s<=r;
      s++)this._visibleLines.getVisibleLine(s).onOptionsChanged(this._viewLineOptions);
      return!0
    }
    return!1
  }
  onCursorStateChanged(e){
    const t=this._visibleLines.getStartLineNumber(), i=this._visibleLines.getEndLineNumber();
    let r=!1;
    for(let s=t;
    s<=i;
    s++)r=this._visibleLines.getVisibleLine(s).onSelectionChanged()||r;
    return r
  }
  onDecorationsChanged(e){
    {
      const t=this._visibleLines.getStartLineNumber(),i=this._visibleLines.getEndLineNumber();
      for(let r=t;
      r<=i;
      r++)this._visibleLines.getVisibleLine(r).onDecorationsChanged()
    }
    return!0
  }
  onFlushed(e){
    const t=this._visibleLines.onFlushed(e, this._viewLineOptions.useGpu);
    return this._maxLineWidth=0, t
  }
  onLinesChanged(e){
    return this._visibleLines.onLinesChanged(e)
  }
  onLinesDeleted(e){
    return this._visibleLines.onLinesDeleted(e)
  }
  onLinesInserted(e){
    return this._visibleLines.onLinesInserted(e)
  }
  onRevealRangeRequest(e){
    const t=this._computeScrollTopToRevealRange(this._context.viewLayout.getFutureViewport(), e.source, e.minimalReveal, e.range, e.selections, e.verticalType);
    if(t===-1)return!1;
    let i=this._context.viewLayout.validateScrollPosition({
      scrollTop:t
    });
    e.revealHorizontal?e.range&&e.range.startLineNumber!==e.range.endLineNumber?i={
      scrollTop:i.scrollTop,scrollLeft:0
    }
    :e.range?this._horizontalRevealRequest=new LAh(e.minimalReveal, e.range.startLineNumber, e.range.startColumn, e.range.endColumn, this._context.viewLayout.getCurrentScrollTop(), i.scrollTop, e.scrollType):e.selections&&e.selections.length>0&&(this._horizontalRevealRequest=new NAh(e.minimalReveal, e.selections, this._context.viewLayout.getCurrentScrollTop(), i.scrollTop, e.scrollType)):this._horizontalRevealRequest=null;
    const s=Math.abs(this._context.viewLayout.getCurrentScrollTop()-i.scrollTop)<=this._lineHeight?1:e.scrollType;
    return this._context.viewModel.viewLayout.setScrollPosition(i, s), !0
  }
  onScrollChanged(e){
    if(this._horizontalRevealRequest&&e.scrollLeftChanged&&(this._horizontalRevealRequest=null), this._horizontalRevealRequest&&e.scrollTopChanged){
      const t=Math.min(this._horizontalRevealRequest.startScrollTop,this._horizontalRevealRequest.stopScrollTop),i=Math.max(this._horizontalRevealRequest.startScrollTop,this._horizontalRevealRequest.stopScrollTop);
      (e.scrollTop<t||e.scrollTop>i)&&(this._horizontalRevealRequest=null)
    }
    return this.domNode.setWidth(e.scrollWidth), this._visibleLines.onScrollChanged(e)||!0
  }
  onTokensChanged(e){
    return this._visibleLines.onTokensChanged(e)
  }
  onZonesChanged(e){
    return this._context.viewModel.viewLayout.setMaxLineWidth(this._maxLineWidth), this._visibleLines.onZonesChanged(e)
  }
  onThemeChanged(e){
    return this._onOptionsMaybeChanged()
  }
  getPositionFromDOMInfo(e, t){
    const i=this._getViewLineDomNode(e);
    if(i===null)return null;
    const r=this._getLineNumberFor(i);
    if(r===-1||r<1||r>this._context.viewModel.getLineCount())return null;
    if(this._context.viewModel.getLineMaxColumn(r)===1)return new ar(r, 1);
    const s=this._visibleLines.getStartLineNumber(), o=this._visibleLines.getEndLineNumber();
    if(r<s||r>o)return null;
    let a=this._visibleLines.getVisibleLine(r).getColumnOfNodeOffset(e, t);
    const l=this._context.viewModel.getLineMinColumn(r);
    return a<l&&(a=l), new ar(r, a)
  }
  _getViewLineDomNode(e){
    for(;
    e&&e.nodeType===1;
    ){
      if(e.className===GVe.CLASS_NAME)return e;
      e=e.parentElement
    }
    return null
  }
  _getLineNumberFor(e){
    const t=this._visibleLines.getStartLineNumber(), i=this._visibleLines.getEndLineNumber();
    for(let r=t;
    r<=i;
    r++){
      const s=this._visibleLines.getVisibleLine(r);
      if(e===s.getDomNode())return r
    }
    return-1
  }
  getLineWidth(e){
    const t=this._visibleLines.getStartLineNumber(), i=this._visibleLines.getEndLineNumber();
    if(e<t||e>i)return-1;
    const r=new m3o(this.domNode.domNode, this._textRangeRestingSpot), s=this._visibleLines.getVisibleLine(e).getWidth(r);
    return this._updateLineWidthsSlowIfDomDidLayout(r), s
  }
  linesVisibleRangesForRange(e, t){
    if(this.shouldRender())return null;
    const i=e.endLineNumber, r=Zt.intersectRanges(e, this._lastRenderedData.getCurrentVisibleRange());
    if(!r)return null;
    const s=[];
    let o=0;
    const a=new m3o(this.domNode.domNode, this._textRangeRestingSpot);
    let l=0;
    t&&(l=this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new ar(r.startLineNumber, 1)).lineNumber);
    const u=this._visibleLines.getStartLineNumber(), d=this._visibleLines.getEndLineNumber();
    for(let m=r.startLineNumber;
    m<=r.endLineNumber;
    m++){
      if(m<u||m>d)continue;
      const p=m===r.startLineNumber?r.startColumn:1,g=m!==r.endLineNumber,f=g?this._context.viewModel.getLineMaxColumn(m):r.endColumn,A=this._visibleLines.getVisibleLine(m).getVisibleRangesForRange(m,p,f,a);
      if(A){
        if(t&&m<i){
          const w=l;
          l=this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new ar(m+1,1)).lineNumber,w!==l&&(A.ranges[A.ranges.length-1].width+=this._typicalHalfwidthCharacterWidth)
        }
        s[o++]=new fTc(A.outsideRenderedLine,m,e3o.from(A.ranges),g)
      }
    }
    return this._updateLineWidthsSlowIfDomDidLayout(a), o===0?null:s
  }
  _visibleRangesForLineRange(e, t, i){
    if(this.shouldRender()||e<this._visibleLines.getStartLineNumber()||e>this._visibleLines.getEndLineNumber())return null;
    const r=new m3o(this.domNode.domNode, this._textRangeRestingSpot), s=this._visibleLines.getVisibleLine(e).getVisibleRangesForRange(e, t, i, r);
    return this._updateLineWidthsSlowIfDomDidLayout(r), s
  }
  visibleRangeForPosition(e){
    const t=this._visibleRangesForLineRange(e.lineNumber, e.column, e.column);
    return t?new bTc(t.outsideRenderedLine, t.ranges[0].left):null
  }
  updateLineWidths(){
    this._updateLineWidths(!1)
  }
  _updateLineWidthsFast(){
    return this._updateLineWidths(!0)
  }
  _updateLineWidthsSlow(){
    this._updateLineWidths(!1)
  }
  _updateLineWidthsSlowIfDomDidLayout(e){
    e.didDomLayout&&(this._asyncUpdateLineWidths.isScheduled()||(this._asyncUpdateLineWidths.cancel(), this._updateLineWidthsSlow()))
  }
  _updateLineWidths(e){
    const t=this._visibleLines.getStartLineNumber(), i=this._visibleLines.getEndLineNumber();
    let r=1, s=!0;
    for(let o=t;
    o<=i;
    o++){
      const a=this._visibleLines.getVisibleLine(o);
      if(e&&!a.getWidthIsFast()){
        s=!1;
        continue
      }
      r=Math.max(r,a.getWidth(null))
    }
    return s&&t===1&&i===this._context.viewModel.getLineCount()&&(this._maxLineWidth=0), this._ensureMaxLineWidth(r), s
  }
  _checkMonospaceFontAssumptions(){
    let e=-1, t=-1;
    const i=this._visibleLines.getStartLineNumber(), r=this._visibleLines.getEndLineNumber();
    for(let s=i;
    s<=r;
    s++){
      const o=this._visibleLines.getVisibleLine(s);
      if(o.needsMonospaceFontCheck()){
        const a=o.getWidth(null);
        a>t&&(t=a,e=s)
      }
    }
    if(e!==-1&&!this._visibleLines.getVisibleLine(e).monospaceAssumptionsAreValid())for(let s=i;
    s<=r;
    s++)this._visibleLines.getVisibleLine(s).onMonospaceAssumptionsInvalidated()
  }
  prepareRender(){
    throw new Error("Not supported")
  }
  render(){
    throw new Error("Not supported")
  }
  renderText(e){
    if(this._visibleLines.renderLines(e), this._lastRenderedData.setCurrentVisibleRange(e.visibleRange), this.domNode.setWidth(this._context.viewLayout.getScrollWidth()), this.domNode.setHeight(Math.min(this._context.viewLayout.getScrollHeight(), 1e6)), this._horizontalRevealRequest){
      const i=this._horizontalRevealRequest;
      if(e.startLineNumber<=i.minLineNumber&&i.maxLineNumber<=e.endLineNumber){
        this._horizontalRevealRequest=null,this.onDidRender();
        const r=this._computeScrollLeftToReveal(i);
        r&&(this._isViewportWrapping||this._ensureMaxLineWidth(r.maxHorizontalOffset),this._context.viewModel.viewLayout.setScrollPosition({
          scrollLeft:r.scrollLeft
        },i.scrollType))
      }
    }
    if(this._updateLineWidthsFast()?this._asyncUpdateLineWidths.cancel():this._asyncUpdateLineWidths.schedule(), xv&&!this._asyncCheckMonospaceFontAssumptions.isScheduled()){
      const i=this._visibleLines.getStartLineNumber(),r=this._visibleLines.getEndLineNumber();
      for(let s=i;
      s<=r;
      s++)if(this._visibleLines.getVisibleLine(s).needsMonospaceFontCheck()){
        this._asyncCheckMonospaceFontAssumptions.schedule();
        break
      }
    }
    this._linesContent.setLayerHinting(this._canUseLayerHinting), this._linesContent.setContain("strict");
    const t=this._context.viewLayout.getCurrentScrollTop()-e.bigNumbersDelta;
    this._linesContent.setTop(-t), this._linesContent.setLeft(-this._context.viewLayout.getCurrentScrollLeft())
  }
  _ensureMaxLineWidth(e){
    const t=Math.ceil(e);
    this._maxLineWidth<t&&(this._maxLineWidth=t, this._context.viewModel.viewLayout.setMaxLineWidth(this._maxLineWidth))
  }
  _computeScrollTopToRevealRange(e, t, i, r, s, o){
    const a=e.top, l=e.height, u=a+l;
    let d, m, p;
    if(s&&s.length>0){
      let C=s[0].startLineNumber,x=s[0].endLineNumber;
      for(let I=1,B=s.length;
      I<B;
      I++){
        const R=s[I];
        C=Math.min(C,R.startLineNumber),x=Math.max(x,R.endLineNumber)
      }
      d=!1,m=this._context.viewLayout.getVerticalOffsetForLineNumber(C),p=this._context.viewLayout.getVerticalOffsetForLineNumber(x)+this._lineHeight
    }
    else if(r)d=!0, m=this._context.viewLayout.getVerticalOffsetForLineNumber(r.startLineNumber), p=this._context.viewLayout.getVerticalOffsetForLineNumber(r.endLineNumber)+this._lineHeight;
    else return-1;
    const g=(t==="mouse"||i)&&this._cursorSurroundingLinesStyle==="default";
    let f=0, A=0;
    if(g)i||(f=this._lineHeight);
    else{
      const C=l/this._lineHeight,x=Math.max(this._cursorSurroundingLines,this._stickyScrollEnabled?this._maxNumberStickyLines:0),I=Math.min(C/2,x);
      f=I*this._lineHeight,A=Math.max(0,I-1)*this._lineHeight
    }
    i||(o===0||o===4)&&(A+=this._lineHeight), m-=f, p+=A;
    let w;
    if(p-m>l){
      if(!d)return-1;
      w=m
    }
    else if(o===5||o===6)if(o===6&&a<=m&&p<=u)w=a;
    else{
      const C=Math.max(5*this._lineHeight,l*.2),x=m-C,I=p-l;
      w=Math.max(I,x)
    }
    else if(o===1||o===2)if(o===2&&a<=m&&p<=u)w=a;
    else{
      const C=(m+p)/2;
      w=Math.max(0,C-l/2)
    }
    else w=this._computeMinimumScrolling(a, u, m, p, o===3, o===4);
    return w
  }
  _computeScrollLeftToReveal(e){
    const t=this._context.viewLayout.getCurrentViewport(), i=this._context.configuration.options.get(151), r=t.left, s=r+t.width-i.verticalScrollbarWidth;
    let o=1073741824, a=0;
    if(e.type==="range"){
      const u=this._visibleRangesForLineRange(e.lineNumber,e.startColumn,e.endColumn);
      if(!u)return null;
      for(const d of u.ranges)o=Math.min(o,Math.round(d.left)),a=Math.max(a,Math.round(d.left+d.width))
    }
    else for(const u of e.selections){
      if(u.startLineNumber!==u.endLineNumber)return null;
      const d=this._visibleRangesForLineRange(u.startLineNumber,u.startColumn,u.endColumn);
      if(!d)return null;
      for(const m of d.ranges)o=Math.min(o,Math.round(m.left)),a=Math.max(a,Math.round(m.left+m.width))
    }
    return e.minimalReveal||(o=Math.max(0, o-yGb.HORIZONTAL_EXTRA_PX), a+=this._revealHorizontalRightPadding), e.type==="selections"&&a-o>t.width?null:{
      scrollLeft:this._computeMinimumScrolling(r,s,o,a),maxHorizontalOffset:a
    }
  }
  _computeMinimumScrolling(e, t, i, r, s, o){
    e=e|0, t=t|0, i=i|0, r=r|0, s=!!s, o=!!o;
    const a=t-e;
    if(r-i<a){
      if(s)return i;
      if(o)return Math.max(0,r-a);
      if(i<e)return i;
      if(r>t)return Math.max(0,r-a)
    }
    else return i;
    return e
  }
}
}
}), jcA=