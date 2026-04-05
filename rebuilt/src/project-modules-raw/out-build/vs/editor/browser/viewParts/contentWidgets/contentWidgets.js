// Module: out-build/vs/editor/browser/viewParts/contentWidgets/contentWidgets.js
// Offset: 1614264 (bundle byte offset)
// Size: 9453 bytes

ri(), sI(), j$(), vAh=class extends yW{
  constructor(n, e){
    super(n), this._viewDomNode=e, this._widgets={
      
    }, this.domNode=mw(document.createElement("div")), tve.write(this.domNode, 1), this.domNode.setClassName("contentWidgets"), this.domNode.setPosition("absolute"), this.domNode.setTop(0), this.overflowingContentWidgetsDomNode=mw(document.createElement("div")), tve.write(this.overflowingContentWidgetsDomNode, 2), this.overflowingContentWidgetsDomNode.setClassName("overflowingContentWidgets")
  }
  dispose(){
    super.dispose(), this._widgets={
      
    }
  }
  onConfigurationChanged(n){
    const e=Object.keys(this._widgets);
    for(const t of e)this._widgets[t].onConfigurationChanged(n);
    return!0
  }
  onDecorationsChanged(n){
    return!0
  }
  onFlushed(n){
    return!0
  }
  onLineMappingChanged(n){
    return this._updateAnchorsViewPositions(), !0
  }
  onLinesChanged(n){
    return this._updateAnchorsViewPositions(), !0
  }
  onLinesDeleted(n){
    return this._updateAnchorsViewPositions(), !0
  }
  onLinesInserted(n){
    return this._updateAnchorsViewPositions(), !0
  }
  onScrollChanged(n){
    return!0
  }
  onZonesChanged(n){
    return!0
  }
  _updateAnchorsViewPositions(){
    const n=Object.keys(this._widgets);
    for(const e of n)this._widgets[e].updateAnchorViewPosition()
  }
  addWidget(n){
    const e=new AAh(this._context, this._viewDomNode, n);
    this._widgets[e.id]=e, e.allowEditorOverflow?this.overflowingContentWidgetsDomNode.appendChild(e.domNode):this.domNode.appendChild(e.domNode), this.setShouldRender()
  }
  setWidgetPosition(n, e, t, i, r){
    this._widgets[n.getId()].setPosition(e, t, i, r), this.setShouldRender()
  }
  removeWidget(n){
    const e=n.getId();
    if(this._widgets.hasOwnProperty(e)){
      const t=this._widgets[e];
      delete this._widgets[e];
      const i=t.domNode.domNode;
      i.remove(),i.removeAttribute("monaco-visible-content-widget"),this.setShouldRender()
    }
  }
  shouldSuppressMouseDownOnWidget(n){
    return this._widgets.hasOwnProperty(n)?this._widgets[n].suppressMouseDown:!1
  }
  onBeforeRender(n){
    const e=Object.keys(this._widgets);
    for(const t of e)this._widgets[t].onBeforeRender(n)
  }
  prepareRender(n){
    const e=Object.keys(this._widgets);
    for(const t of e)this._widgets[t].prepareRender(n)
  }
  render(n){
    const e=Object.keys(this._widgets);
    for(const t of e)this._widgets[t].render(n)
  }
}, AAh=class{
  constructor(n, e, t){
    this._primaryAnchor=new r3t(null, null), this._secondaryAnchor=new r3t(null, null), this._context=n, this._viewDomNode=e, this._actual=t, this.domNode=mw(this._actual.getDomNode()), this.id=this._actual.getId(), this.allowEditorOverflow=this._actual.allowEditorOverflow||!1, this.suppressMouseDown=this._actual.suppressMouseDown||!1;
    const i=this._context.configuration.options, r=i.get(151);
    this._fixedOverflowWidgets=i.get(44), this._contentWidth=r.contentWidth, this._contentLeft=r.contentLeft, this._lineHeight=i.get(68), this._affinity=null, this._preference=[], this._cachedDomNodeOffsetWidth=-1, this._cachedDomNodeOffsetHeight=-1, this._maxWidth=this._getMaxWidth(), this._isVisible=!1, this._renderData=null, this.domNode.setPosition(this._fixedOverflowWidgets&&this.allowEditorOverflow?"fixed":"absolute"), this.domNode.setDisplay("none"), this.domNode.setVisibility("hidden"), this.domNode.setAttribute("widgetId", this.id), this.domNode.setMaxWidth(this._maxWidth)
  }
  onConfigurationChanged(n){
    const e=this._context.configuration.options;
    if(this._lineHeight=e.get(68), n.hasChanged(151)){
      const t=e.get(151);
      this._contentLeft=t.contentLeft,this._contentWidth=t.contentWidth,this._maxWidth=this._getMaxWidth()
    }
  }
  updateAnchorViewPosition(){
    this._setPosition(this._affinity, this._primaryAnchor.modelPosition, this._secondaryAnchor.modelPosition)
  }
  _setPosition(n, e, t){
    this._affinity=n, this._primaryAnchor=i(e, this._context.viewModel, this._affinity), this._secondaryAnchor=i(t, this._context.viewModel, this._affinity);
    function i(r, s, o){
      if(!r)return new r3t(null,null);
      const a=s.model.validatePosition(r);
      if(s.coordinatesConverter.modelPositionIsVisible(a)){
        const l=s.coordinatesConverter.convertModelPositionToViewPosition(a,o??void 0);
        return new r3t(r,l)
      }
      return new r3t(r,null)
    }
  }
  _getMaxWidth(){
    const n=this.domNode.domNode.ownerDocument, e=n.defaultView;
    return this.allowEditorOverflow?e?.innerWidth||n.documentElement.offsetWidth||n.body.offsetWidth:this._contentWidth
  }
  setPosition(n, e, t, i){
    this._setPosition(i, n, e), this._preference=t, this._primaryAnchor.viewPosition&&this._preference&&this._preference.length>0?this.domNode.setDisplay("block"):this.domNode.setDisplay("none"), this._cachedDomNodeOffsetWidth=-1, this._cachedDomNodeOffsetHeight=-1
  }
  _layoutBoxInViewport(n, e, t, i){
    const r=n.top, s=r, o=n.top+n.height, a=i.viewportHeight-o, l=r-t, u=s>=t, d=o, m=a>=t;
    let p=n.left;
    return p+e>i.scrollLeft+i.viewportWidth&&(p=i.scrollLeft+i.viewportWidth-e), p<i.scrollLeft&&(p=i.scrollLeft), {
      fitsAbove:u,aboveTop:l,fitsBelow:m,belowTop:d,left:p
    }
  }
  _layoutHorizontalSegmentInPage(n, e, t, i){
    const o=Math.max(15, e.left-i), a=Math.min(e.left+e.width+i, n.width-15), u=this._viewDomNode.domNode.ownerDocument.defaultView;
    let d=e.left+t-(u?.scrollX??0);
    if(d+i>a){
      const m=d-(a-i);
      d-=m,t-=m
    }
    if(d<o){
      const m=d-o;
      d-=m,t-=m
    }
    return[t, d]
  }
  _layoutBoxInPage(n, e, t, i){
    const r=n.top-t, s=n.top+n.height, o=qS(this._viewDomNode.domNode), a=this._viewDomNode.domNode.ownerDocument, l=a.defaultView, u=o.top+r-(l?.scrollY??0), d=o.top+s-(l?.scrollY??0), m=DY(a.body), [p, g]=this._layoutHorizontalSegmentInPage(m, o, n.left-i.scrollLeft+this._contentLeft, e), f=22, A=22, w=u>=f, C=d+t<=m.height-A;
    return this._fixedOverflowWidgets?{
      fitsAbove:w,aboveTop:Math.max(u,f),fitsBelow:C,belowTop:d,left:g
    }
    :{
      fitsAbove:w,aboveTop:r,fitsBelow:C,belowTop:s,left:p
    }
  }
  _prepareRenderWidgetAtExactPositionOverflowing(n){
    return new s3t(n.top, n.left+this._contentLeft)
  }
  _getAnchorsCoordinates(n){
    const e=r(this._primaryAnchor.viewPosition, this._affinity, this._lineHeight), t=this._secondaryAnchor.viewPosition?.lineNumber===this._primaryAnchor.viewPosition?.lineNumber?this._secondaryAnchor.viewPosition:null, i=r(t, this._affinity, this._lineHeight);
    return{
      primary:e,secondary:i
    };
    function r(s, o, a){
      if(!s)return null;
      const l=n.visibleRangeForPosition(s);
      if(!l)return null;
      const u=s.column===1&&o===3?0:l.left,d=n.getVerticalOffsetForLineNumber(s.lineNumber)-n.scrollTop;
      return new OTc(d,u,a)
    }
  }
  _reduceAnchorCoordinates(n, e, t){
    if(!e)return n;
    const i=this._context.configuration.options.get(52);
    let r=e.left;
    return r<n.left?r=Math.max(r, n.left-t+i.typicalFullwidthCharacterWidth):r=Math.min(r, n.left+t-i.typicalFullwidthCharacterWidth), new OTc(n.top, r, n.height)
  }
  _prepareRenderWidget(n){
    if(!this._preference||this._preference.length===0)return null;
    const{
      primary:e,secondary:t
    }
    =this._getAnchorsCoordinates(n);
    if(!e)return{
      kind:"offViewport",preserveFocus:this.domNode.domNode.contains(this.domNode.domNode.ownerDocument.activeElement)
    };
    if(this._cachedDomNodeOffsetWidth===-1||this._cachedDomNodeOffsetHeight===-1){
      let s=null;
      if(typeof this._actual.beforeRender=="function"&&(s=FTc(this._actual.beforeRender,this._actual)),s)this._cachedDomNodeOffsetWidth=s.width,this._cachedDomNodeOffsetHeight=s.height;
      else{
        const a=this.domNode.domNode.getBoundingClientRect();
        this._cachedDomNodeOffsetWidth=Math.round(a.width),this._cachedDomNodeOffsetHeight=Math.round(a.height)
      }
    }
    const i=this._reduceAnchorCoordinates(e, t, this._cachedDomNodeOffsetWidth);
    let r;
    this.allowEditorOverflow?r=this._layoutBoxInPage(i, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, n):r=this._layoutBoxInViewport(i, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, n);
    for(let s=1;
    s<=2;
    s++)for(const o of this._preference)if(o===1){
      if(!r)return null;
      if(s===2||r.fitsAbove)return{
        kind:"inViewport",coordinate:new s3t(r.aboveTop,r.left),position:1
      }
    }
    else if(o===2){
      if(!r)return null;
      if(s===2||r.fitsBelow)return{
        kind:"inViewport",coordinate:new s3t(r.belowTop,r.left),position:2
      }
    }
    else return this.allowEditorOverflow?{
      kind:"inViewport",coordinate:this._prepareRenderWidgetAtExactPositionOverflowing(new s3t(i.top,i.left)),position:0
    }
    :{
      kind:"inViewport",coordinate:new s3t(i.top,i.left),position:0
    };
    return null
  }
  onBeforeRender(n){
    !this._primaryAnchor.viewPosition||!this._preference||this._primaryAnchor.viewPosition.lineNumber<n.startLineNumber||this._primaryAnchor.viewPosition.lineNumber>n.endLineNumber||this.domNode.setMaxWidth(this._maxWidth)
  }
  prepareRender(n){
    this._renderData=this._prepareRenderWidget(n)
  }
  render(n){
    if(!this._renderData||this._renderData.kind==="offViewport"){
      this._isVisible&&(this.domNode.removeAttribute("monaco-visible-content-widget"),this._isVisible=!1,this._renderData?.kind==="offViewport"&&this._renderData.preserveFocus?this.domNode.setTop(-1e3):this.domNode.setVisibility("hidden")),typeof this._actual.afterRender=="function"&&FTc(this._actual.afterRender,this._actual,null,null);
      return
    }
    this.allowEditorOverflow?(this.domNode.setTop(this._renderData.coordinate.top), this.domNode.setLeft(this._renderData.coordinate.left)):(this.domNode.setTop(this._renderData.coordinate.top+n.scrollTop-n.bigNumbersDelta), this.domNode.setLeft(this._renderData.coordinate.left)), this._isVisible||(this.domNode.setVisibility("inherit"), this.domNode.setAttribute("monaco-visible-content-widget", "true"), this._isVisible=!0), typeof this._actual.afterRender=="function"&&FTc(this._actual.afterRender, this._actual, this._renderData.position, this._renderData.coordinate)
  }
}, r3t=class{
  constructor(n, e){
    this.modelPosition=n, this.viewPosition=e
  }
}, s3t=class{
  constructor(n, e){
    this.top=n, this.left=e, this._coordinateBrand=void 0
  }
}, OTc=class{
  constructor(n, e, t){
    this.top=n, this.left=e, this.height=t, this._anchorCoordinateBrand=void 0
  }
}
}
}), LcA=