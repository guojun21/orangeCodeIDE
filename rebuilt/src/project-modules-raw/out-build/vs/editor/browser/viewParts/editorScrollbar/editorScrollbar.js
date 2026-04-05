// Module: out-build/vs/editor/browser/viewParts/editorScrollbar/editorScrollbar.js
// Offset: 1631712 (bundle byte offset)
// Size: 3156 bytes

ri(), sI(), zI(), j$(), Io(), CAh=class extends yW{
  constructor(n, e, t, i){
    super(n);
    const r=this._context.configuration.options, s=r.get(108), o=r.get(76), a=r.get(42), l=r.get(111), u={
      listenOnDomNode:t.domNode,className:"editor-scrollable "+Q4n(n.theme.type),useShadows:!1,lazyRender:!0,vertical:s.vertical,horizontal:s.horizontal,verticalHasArrows:s.verticalHasArrows,horizontalHasArrows:s.horizontalHasArrows,verticalScrollbarSize:s.verticalScrollbarSize,verticalSliderSize:s.verticalSliderSize,horizontalScrollbarSize:s.horizontalScrollbarSize,horizontalSliderSize:s.horizontalSliderSize,handleMouseWheel:s.handleMouseWheel,ignoreVerticalScrolling:s.ignoreVerticalScrolling,alwaysConsumeMouseWheel:s.alwaysConsumeMouseWheel,arrowSize:s.arrowSize,mouseWheelScrollSensitivity:o,fastScrollSensitivity:a,scrollPredominantAxis:l,scrollByPage:s.scrollByPage
    };
    this.scrollbar=this._register(new Yft(e.domNode, u, this._context.viewLayout.getScrollable())), tve.write(this.scrollbar.getDomNode(), 6), this.scrollbarDomNode=mw(this.scrollbar.getDomNode()), this.scrollbarDomNode.setPosition("absolute"), this._setLayout();
    const d=(m, p, g)=>{
      const f={
        
      };
      if(p){
        const A=m.scrollTop;
        A&&(f.scrollTop=this._context.viewLayout.getCurrentScrollTop()+A,m.scrollTop=0)
      }
      if(g){
        const A=m.scrollLeft;
        A&&(f.scrollLeft=this._context.viewLayout.getCurrentScrollLeft()+A,m.scrollLeft=0)
      }
      this._context.viewModel.viewLayout.setScrollPosition(f,1)
    };
    this._register(ei(t.domNode, "scroll", m=>d(t.domNode, !0, !0))), this._register(ei(e.domNode, "scroll", m=>d(e.domNode, !0, !1))), this._register(ei(i.domNode, "scroll", m=>d(i.domNode, !0, !1))), this._register(ei(this.scrollbarDomNode.domNode, "scroll", m=>d(this.scrollbarDomNode.domNode, !0, !1)))
  }
  dispose(){
    super.dispose()
  }
  _setLayout(){
    const n=this._context.configuration.options, e=n.get(151);
    this.scrollbarDomNode.setLeft(e.contentLeft), n.get(74).side==="right"?this.scrollbarDomNode.setWidth(e.contentWidth+e.minimap.minimapWidth):this.scrollbarDomNode.setWidth(e.contentWidth), this.scrollbarDomNode.setHeight(e.height)
  }
  getOverviewRulerLayoutInfo(){
    return this.scrollbar.getOverviewRulerLayoutInfo()
  }
  getDomNode(){
    return this.scrollbarDomNode
  }
  delegateVerticalScrollbarPointerDown(n){
    this.scrollbar.delegateVerticalScrollbarPointerDown(n)
  }
  delegateScrollFromMouseWheelEvent(n){
    this.scrollbar.delegateScrollFromMouseWheelEvent(n)
  }
  onConfigurationChanged(n){
    if(n.hasChanged(108)||n.hasChanged(76)||n.hasChanged(42)){
      const e=this._context.configuration.options,t=e.get(108),i=e.get(76),r=e.get(42),s=e.get(111),o={
        vertical:t.vertical,horizontal:t.horizontal,verticalScrollbarSize:t.verticalScrollbarSize,horizontalScrollbarSize:t.horizontalScrollbarSize,scrollByPage:t.scrollByPage,handleMouseWheel:t.handleMouseWheel,mouseWheelScrollSensitivity:i,fastScrollSensitivity:r,scrollPredominantAxis:s
      };
      this.scrollbar.updateOptions(o)
    }
    return n.hasChanged(151)&&this._setLayout(), !0
  }
  onScrollChanged(n){
    return!0
  }
  onThemeChanged(n){
    return this.scrollbar.updateClassName("editor-scrollable "+Q4n(this._context.theme.type)), !0
  }
  prepareRender(n){
    
  }
  render(n){
    this.scrollbar.renderNow()
  }
}
}
}), UcA=