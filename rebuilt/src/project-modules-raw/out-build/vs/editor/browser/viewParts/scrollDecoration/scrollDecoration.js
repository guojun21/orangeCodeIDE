// Module: out-build/vs/editor/browser/viewParts/scrollDecoration/scrollDecoration.js
// Offset: 1728257 (bundle byte offset)
// Size: 1236 bytes

llA(), sI(), j$(), lyh=class extends yW{
  constructor(n){
    super(n), this._scrollTop=0, this._width=0, this._updateWidth(), this._shouldShow=!1;
    const t=this._context.configuration.options.get(108);
    this._useShadows=t.useShadows, this._domNode=mw(document.createElement("div")), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true")
  }
  dispose(){
    super.dispose()
  }
  _updateShouldShow(){
    const n=this._useShadows&&this._scrollTop>0;
    return this._shouldShow!==n?(this._shouldShow=n, !0):!1
  }
  getDomNode(){
    return this._domNode
  }
  _updateWidth(){
    const e=this._context.configuration.options.get(151);
    e.minimap.renderMinimap===0||e.minimap.minimapWidth>0&&e.minimap.minimapLeft===0?this._width=e.width:this._width=e.width-e.verticalScrollbarWidth
  }
  onConfigurationChanged(n){
    const t=this._context.configuration.options.get(108);
    return this._useShadows=t.useShadows, this._updateWidth(), this._updateShouldShow(), !0
  }
  onScrollChanged(n){
    return this._scrollTop=n.scrollTop, this._updateShouldShow()
  }
  prepareRender(n){
    
  }
  render(n){
    this._domNode.setWidth(this._width), this._domNode.setClassName(this._shouldShow?"scroll-decoration":"")
  }
}
}
}), dlA=