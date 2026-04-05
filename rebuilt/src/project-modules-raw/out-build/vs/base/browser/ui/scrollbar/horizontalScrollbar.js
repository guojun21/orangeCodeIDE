// Module: out-build/vs/base/browser/ui/scrollbar/horizontalScrollbar.js
// Offset: 1543862 (bundle byte offset)
// Size: 2146 bytes

h0(), Qvh(), xTc(), ITc(), qi(), zvh=class extends TTc{
  constructor(n, e, t){
    const i=n.getScrollDimensions(), r=n.getCurrentScrollPosition();
    if(super({
      lazyRender:e.lazyRender,host:t,scrollbarState:new o3o(e.horizontalHasArrows?e.arrowSize:0,e.horizontal===2?0:e.horizontalScrollbarSize,e.vertical===2?0:e.verticalScrollbarSize,i.width,i.scrollWidth,r.scrollLeft),visibility:e.horizontal,extraScrollbarClassName:"horizontal",scrollable:n,scrollByPage:e.scrollByPage
    }), e.horizontalHasArrows){
      const s=(e.arrowSize-Kft)/2,o=(e.horizontalScrollbarSize-Kft)/2;
      this._createArrow({
        className:"scra",icon:Be.scrollbarButtonLeft,top:o,left:s,bottom:void 0,right:void 0,bgWidth:e.arrowSize,bgHeight:e.horizontalScrollbarSize,onActivate:()=>this._host.onMouseWheel(new d5e(null,1,0))
      }),this._createArrow({
        className:"scra",icon:Be.scrollbarButtonRight,top:o,left:void 0,bottom:void 0,right:s,bgWidth:e.arrowSize,bgHeight:e.horizontalScrollbarSize,onActivate:()=>this._host.onMouseWheel(new d5e(null,-1,0))
      })
    }
    this._createSlider(Math.floor((e.horizontalScrollbarSize-e.horizontalSliderSize)/2), 0, void 0, e.horizontalSliderSize)
  }
  _updateSlider(n, e){
    this.slider.setWidth(n), this.slider.setLeft(e)
  }
  _renderDomNode(n, e){
    this.domNode.setWidth(n), this.domNode.setHeight(e), this.domNode.setLeft(0), this.domNode.setBottom(0)
  }
  onDidScroll(n){
    return this._shouldRender=this._onElementScrollSize(n.scrollWidth)||this._shouldRender, this._shouldRender=this._onElementScrollPosition(n.scrollLeft)||this._shouldRender, this._shouldRender=this._onElementSize(n.width)||this._shouldRender, this._shouldRender
  }
  _pointerDownRelativePosition(n, e){
    return n
  }
  _sliderPointerPosition(n){
    return n.pageX
  }
  _sliderOrthogonalPointerPosition(n){
    return n.pageY
  }
  _updateScrollbarSize(n){
    this.slider.setHeight(n)
  }
  writeScrollPosition(n, e){
    n.scrollLeft=e
  }
  updateOptions(n){
    this.updateScrollbarSize(n.horizontal===2?0:n.horizontalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(n.vertical===2?0:n.verticalScrollbarSize), this._visibilityController.setVisibility(n.horizontal), this._scrollByPage=n.scrollByPage
  }
}
}
}), Vvh, ScA=