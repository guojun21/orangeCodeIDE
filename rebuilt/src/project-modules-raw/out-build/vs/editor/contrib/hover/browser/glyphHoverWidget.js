// Module: out-build/vs/editor/contrib/hover/browser/glyphHoverWidget.js
// Offset: 30882049 (bundle byte offset)
// Size: 3542 bytes

ri(), rt(), oN(), Ku(), WJh(), Fc(), W9t(), wry(), b$o(), Npu=Ct, pCa=class extends at{
  static{
    Lpu=this
  }
  static{
    this.ID="editor.contrib.modesGlyphHoverWidget"
  }
  constructor(e, t, i){
    super(), this._renderDisposeables=this._register(new Ut), this._editor=e, this._isVisible=!1, this._messages=[], this._hover=this._register(new A$o(!0)), this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible), this._markdownRenderer=new sL({
      editor:this._editor
    }, t, i), this._hoverOperation=this._register(new B5c(this._editor, new Lxf(this._editor))), this._register(this._hoverOperation.onResult(r=>this._withResult(r))), this._register(this._editor.onDidChangeModelDecorations(()=>this._onModelDecorationsChanged())), this._register(this._editor.onDidChangeConfiguration(r=>{
      r.hasChanged(52)&&this._updateFont()
    })), this._register(_f(this._hover.containerDomNode, "mouseleave", r=>{
      this._onMouseLeave(r)
    })), this._editor.addOverlayWidget(this)
  }
  dispose(){
    this._hoverComputerOptions=void 0, this._editor.removeOverlayWidget(this), super.dispose()
  }
  getId(){
    return Lpu.ID
  }
  getDomNode(){
    return this._hover.containerDomNode
  }
  getPosition(){
    return null
  }
  _updateFont(){
    Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName("code")).forEach(t=>this._editor.applyFontInfo(t))
  }
  _onModelDecorationsChanged(){
    this._isVisible&&this._hoverComputerOptions&&(this._hoverOperation.cancel(), this._hoverOperation.start(0, this._hoverComputerOptions))
  }
  showsOrWillShow(e){
    const t=e.target;
    return t.type===2&&t.detail.glyphMarginLane?(this._startShowingAt(t.position.lineNumber, t.detail.glyphMarginLane), !0):t.type===3?(this._startShowingAt(t.position.lineNumber, "lineNo"), !0):!1
  }
  _startShowingAt(e, t){
    this._hoverComputerOptions&&this._hoverComputerOptions.lineNumber===e&&this._hoverComputerOptions.laneOrLine===t||(this._hoverOperation.cancel(), this.hide(), this._hoverComputerOptions={
      lineNumber:e,laneOrLine:t
    }, this._hoverOperation.start(0, this._hoverComputerOptions))
  }
  hide(){
    this._hoverComputerOptions=void 0, this._hoverOperation.cancel(), this._isVisible&&(this._isVisible=!1, this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible))
  }
  _withResult(e){
    this._messages=e.value, this._messages.length>0?this._renderMessages(e.options.lineNumber, e.options.laneOrLine, this._messages):this.hide()
  }
  _renderMessages(e, t, i){
    this._renderDisposeables.clear();
    const r=document.createDocumentFragment();
    for(const s of i){
      const o=Npu("div.hover-row.markdown-hover"),a=Rt(o,Npu("div.hover-contents")),l=this._renderDisposeables.add(this._markdownRenderer.render(s.value));
      a.appendChild(l.element),r.appendChild(o)
    }
    this._updateContents(r), this._showAt(e, t)
  }
  _updateContents(e){
    this._hover.contentsDomNode.textContent="", this._hover.contentsDomNode.appendChild(e), this._updateFont()
  }
  _showAt(e, t){
    this._isVisible||(this._isVisible=!0, this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible));
    const i=this._editor.getLayoutInfo(), r=this._editor.getTopForLineNumber(e), s=this._editor.getScrollTop(), o=this._editor.getOption(68), a=this._hover.containerDomNode.clientHeight, l=r-s-(a-o)/2, u=i.glyphMarginLeft+i.glyphMarginWidth+(t==="lineNo"?i.lineNumbersWidth:0);
    this._hover.containerDomNode.style.left=`${u}px`, this._hover.containerDomNode.style.top=`${Math.max(Math.round(l),0)}px`, this._hover.containerDomNode.style.zIndex="11"
  }
  _onMouseLeave(e){
    const t=this._editor.getDomNode();
    (!t||!f$o(t, e.x, e.y))&&this.hide()
  }
}, pCa=Lpu=__decorate([__param(1, Jl), __param(2, Ja)], pCa)
}
}), Mpu, gCa, IQ, git=