// Module: out-build/vs/base/browser/ui/scrollbar/verticalScrollbar.js
// Offset: 1546008 (bundle byte offset)
// Size: 2027 bytes

h0(), Qvh(), xTc(), ITc(), qi(), Vvh=class extends TTc{
  constructor(n, e, t){
    const i=n.getScrollDimensions(), r=n.getCurrentScrollPosition();
    if(super({
      lazyRender:e.lazyRender,host:t,scrollbarState:new o3o(e.verticalHasArrows?e.arrowSize:0,e.vertical===2?0:e.verticalScrollbarSize,0,i.height,i.scrollHeight,r.scrollTop),visibility:e.vertical,extraScrollbarClassName:"vertical",scrollable:n,scrollByPage:e.scrollByPage
    }), e.verticalHasArrows){
      const s=(e.arrowSize-Kft)/2,o=(e.verticalScrollbarSize-Kft)/2;
      this._createArrow({
        className:"scra",icon:Be.scrollbarButtonUp,top:s,left:o,bottom:void 0,right:void 0,bgWidth:e.verticalScrollbarSize,bgHeight:e.arrowSize,onActivate:()=>this._host.onMouseWheel(new d5e(null,0,1))
      }),this._createArrow({
        className:"scra",icon:Be.scrollbarButtonDown,top:void 0,left:o,bottom:s,right:void 0,bgWidth:e.verticalScrollbarSize,bgHeight:e.arrowSize,onActivate:()=>this._host.onMouseWheel(new d5e(null,0,-1))
      })
    }
    this._createSlider(0, Math.floor((e.verticalScrollbarSize-e.verticalSliderSize)/2), e.verticalSliderSize, void 0)
  }
  _updateSlider(n, e){
    this.slider.setHeight(n), this.slider.setTop(e)
  }
  _renderDomNode(n, e){
    this.domNode.setWidth(e), this.domNode.setHeight(n), this.domNode.setRight(0), this.domNode.setTop(0)
  }
  onDidScroll(n){
    return this._shouldRender=this._onElementScrollSize(n.scrollHeight)||this._shouldRender, this._shouldRender=this._onElementScrollPosition(n.scrollTop)||this._shouldRender, this._shouldRender=this._onElementSize(n.height)||this._shouldRender, this._shouldRender
  }
  _pointerDownRelativePosition(n, e){
    return e
  }
  _sliderPointerPosition(n){
    return n.pageY
  }
  _sliderOrthogonalPointerPosition(n){
    return n.pageX
  }
  _updateScrollbarSize(n){
    this.slider.setWidth(n)
  }
  writeScrollPosition(n, e){
    n.scrollTop=e
  }
  updateOptions(n){
    this.updateScrollbarSize(n.vertical===2?0:n.verticalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(0), this._visibilityController.setVisibility(n.vertical), this._scrollByPage=n.scrollByPage
  }
}
}
}), kcA=