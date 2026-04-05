// Module: out-build/vs/editor/contrib/stickyScroll/browser/stickyScrollWidget.js
// Offset: 25460317 (bundle byte offset)
// Size: 10453 bytes

ri(), ive(), Vs(), rt(), Jr(), ZSA(), STc(), yq(), tl(), kSe(), HVe(), Qft(), DQl(), yn(), $gi=class oQb{
  constructor(e, t, i, r=null){
    this.startLineNumbers=e, this.endLineNumbers=t, this.lastLineRelativePosition=i, this.showEndForLine=r
  }
  equals(e){
    return!!e&&this.lastLineRelativePosition===e.lastLineRelativePosition&&this.showEndForLine===e.showEndForLine&&cg(this.startLineNumbers, e.startLineNumbers)&&cg(this.endLineNumbers, e.endLineNumbers)
  }
  static get Empty(){
    return new oQb([], [], 0)
  }
}, Cjl=nve("stickyScrollViewLayer", {
  createHTML:n=>n
}), Kla="data-sticky-line-index", Sjl="data-sticky-is-line", Zyg="data-sticky-is-line-number", kjl="data-sticky-is-folding-icon", Xyg=class extends at{
  get height(){
    return this._height
  }
  constructor(n){
    super(), this._foldingIconStore=new Ut, this._rootDomNode=document.createElement("div"), this._lineNumbersDomNode=document.createElement("div"), this._linesDomNodeScrollable=document.createElement("div"), this._linesDomNode=document.createElement("div"), this._renderedStickyLines=[], this._lineNumbers=[], this._lastLineRelativePosition=0, this._minContentWidthInPx=0, this._isOnGlyphMargin=!1, this._height=-1, this._onDidChangeStickyScrollHeight=this._register(new Qe), this.onDidChangeStickyScrollHeight=this._onDidChangeStickyScrollHeight.event, this._editor=n, this._lineHeight=n.getOption(68), this._lineNumbersDomNode.className="sticky-widget-line-numbers", this._lineNumbersDomNode.setAttribute("role", "none"), this._linesDomNode.className="sticky-widget-lines", this._linesDomNode.setAttribute("role", "list"), this._linesDomNodeScrollable.className="sticky-widget-lines-scrollable", this._linesDomNodeScrollable.appendChild(this._linesDomNode), this._rootDomNode.className="sticky-widget", this._rootDomNode.classList.toggle("peek", n instanceof q3), this._rootDomNode.appendChild(this._lineNumbersDomNode), this._rootDomNode.appendChild(this._linesDomNodeScrollable), this._setHeight(0);
    const e=()=>{
      this._linesDomNode.style.left=this._editor.getOption(120).scrollWithEditor?`-${this._editor.getScrollLeft()}px`:"0px"
    };
    this._register(this._editor.onDidChangeConfiguration(t=>{
      t.hasChanged(120)&&e(),t.hasChanged(68)&&(this._lineHeight=this._editor.getOption(68))
    })), this._register(this._editor.onDidScrollChange(t=>{
      t.scrollLeftChanged&&e(),t.scrollWidthChanged&&this._updateWidgetWidth()
    })), this._register(this._editor.onDidChangeModel(()=>{
      e(),this._updateWidgetWidth()
    })), this._register(this._foldingIconStore), e(), this._register(this._editor.onDidLayoutChange(t=>{
      this._updateWidgetWidth()
    })), this._updateWidgetWidth()
  }
  get lineNumbers(){
    return this._lineNumbers
  }
  get lineNumberCount(){
    return this._lineNumbers.length
  }
  getRenderedStickyLine(n){
    return this._renderedStickyLines.find(e=>e.lineNumber===n)
  }
  getCurrentLines(){
    return this._lineNumbers
  }
  setState(n, e, t){
    if(t===void 0&&(!this._previousState&&!n||this._previousState&&this._previousState.equals(n)))return;
    const i=this._isWidgetHeightZero(n), r=i?void 0:n, s=i?0:this._findLineToRebuildWidgetFrom(n, t);
    this._renderRootNode(r, e, s), this._previousState=n
  }
  _isWidgetHeightZero(n){
    if(!n)return!0;
    const e=n.startLineNumbers.length*this._lineHeight+n.lastLineRelativePosition;
    if(e>0){
      this._lastLineRelativePosition=n.lastLineRelativePosition;
      const t=[...n.startLineNumbers];
      n.showEndForLine!==null&&(t[n.showEndForLine]=n.endLineNumbers[n.showEndForLine]),this._lineNumbers=t
    }
    else this._lastLineRelativePosition=0, this._lineNumbers=[];
    return e===0
  }
  _findLineToRebuildWidgetFrom(n, e){
    if(!n||!this._previousState)return 0;
    if(e!==void 0)return e;
    const t=this._previousState, i=n.startLineNumbers.findIndex(r=>!t.startLineNumbers.includes(r));
    return i===-1?0:i
  }
  _updateWidgetWidth(){
    const n=this._editor.getLayoutInfo(), e=n.contentLeft;
    this._lineNumbersDomNode.style.width=`${e}px`, this._linesDomNodeScrollable.style.setProperty("--vscode-editorStickyScroll-scrollableWidth", `${this._editor.getScrollWidth()-n.verticalScrollbarWidth}px`), this._rootDomNode.style.width=`${n.width-n.verticalScrollbarWidth}px`
  }
  _clearStickyLinesFromLine(n){
    this._foldingIconStore.clear();
    for(let e=n;
    e<this._renderedStickyLines.length;
    e++){
      const t=this._renderedStickyLines[e];
      t.lineNumberDomNode.remove(),t.lineDomNode.remove()
    }
    this._renderedStickyLines=this._renderedStickyLines.slice(0, n)
  }
  _useFoldingOpacityTransition(n){
    this._lineNumbersDomNode.style.setProperty("--vscode-editorStickyScroll-foldingOpacityTransition", `opacity ${n?.5:0}s`)
  }
  _setFoldingIconsVisibility(n){
    for(const e of this._renderedStickyLines){
      const t=e.foldingIcon;
      t&&t.setVisible(n?!0:t.isCollapsed)
    }
  }
  async _renderRootNode(n, e, t){
    if(this._clearStickyLinesFromLine(t), !n){
      this._setHeight(0);
      return
    }
    for(const o of this._renderedStickyLines)this._updatePosition(o);
    const i=this._editor.getLayoutInfo(), r=this._lineNumbers.slice(t);
    for(const[o, a]of r.entries()){
      const l=this._renderChildNode(o+t,a,e,i);
      l&&(this._linesDomNode.appendChild(l.lineDomNode),this._lineNumbersDomNode.appendChild(l.lineNumberDomNode),this._renderedStickyLines.push(l))
    }
    e&&(this._setFoldingHoverListeners(), this._useFoldingOpacityTransition(!this._isOnGlyphMargin));
    const s=this._lineNumbers.length*this._lineHeight+this._lastLineRelativePosition;
    this._setHeight(s), this._rootDomNode.style.marginLeft="0px", this._minContentWidthInPx=Math.max(...this._renderedStickyLines.map(o=>o.scrollWidth))+i.verticalScrollbarWidth, this._editor.layoutOverlayWidget(this)
  }
  _setHeight(n){
    this._height!==n&&(this._height=n, this._height===0?this._rootDomNode.style.display="none":(this._rootDomNode.style.display="block", this._lineNumbersDomNode.style.height=`${this._height}px`, this._linesDomNodeScrollable.style.height=`${this._height}px`, this._rootDomNode.style.height=`${this._height}px`), this._onDidChangeStickyScrollHeight.fire({
      height:this._height
    }))
  }
  _setFoldingHoverListeners(){
    this._editor.getOption(115)==="mouseover"&&(this._foldingIconStore.add(ei(this._lineNumbersDomNode, ir.MOUSE_ENTER, ()=>{
      this._isOnGlyphMargin=!0,this._setFoldingIconsVisibility(!0)
    })), this._foldingIconStore.add(ei(this._lineNumbersDomNode, ir.MOUSE_LEAVE, ()=>{
      this._isOnGlyphMargin=!1,this._useFoldingOpacityTransition(!0),this._setFoldingIconsVisibility(!1)
    })))
  }
  _renderChildNode(n, e, t, i){
    const r=this._editor._getViewModel();
    if(!r)return;
    const s=r.coordinatesConverter.convertModelPositionToViewPosition(new ar(e, 1)).lineNumber, o=r.getViewLineRenderingData(s), a=this._editor.getOption(69);
    let l;
    try{
      l=lz.filter(o.inlineDecorations,s,o.minColumn,o.maxColumn)
    }
    catch{
      l=[]
    }
    const u=this._lineHeight, d=new JVe(!0, !0, o.content, o.continuesWithWrappedLine, o.isBasicASCII, o.containsRTL, 0, o.tokens, l, o.tabSize, o.startVisibleColumn, 1, 1, 1, 500, "none", !0, !0, null), m=new Gbe(2e3), p=Wft(d, m);
    let g;
    Cjl?g=Cjl.createHTML(m.build()):g=m.build();
    const f=document.createElement("span");
    f.setAttribute(Kla, String(n)), f.setAttribute(Sjl, ""), f.setAttribute("role", "listitem"), f.tabIndex=0, f.className="sticky-line-content", f.classList.add(`stickyLine${e}`), f.style.lineHeight=`${u}px`, f.innerHTML=g;
    const A=document.createElement("span");
    A.setAttribute(Kla, String(n)), A.setAttribute(Zyg, ""), A.className="sticky-line-number", A.style.lineHeight=`${u}px`;
    const w=i.contentLeft;
    A.style.width=`${w}px`;
    const C=document.createElement("span");
    a.renderType===1||a.renderType===3&&e%10===0?C.innerText=e.toString():a.renderType===2&&(C.innerText=Math.abs(e-this._editor.getPosition().lineNumber).toString()), C.className="sticky-line-number-inner", C.style.width=`${i.lineNumbersWidth}px`, C.style.paddingLeft=`${i.lineNumbersLeft}px`, A.appendChild(C);
    const x=this._renderFoldingIconForLine(t, e);
    x&&(A.appendChild(x.domNode), x.domNode.style.left=`${i.lineNumbersWidth+i.lineNumbersLeft}px`), this._editor.applyFontInfo(f), this._editor.applyFontInfo(A), A.style.lineHeight=`${u}px`, f.style.lineHeight=`${u}px`, A.style.height=`${u}px`, f.style.height=`${u}px`;
    const I=new ewg(n, e, f, A, x, p.characterMapping, f.scrollWidth, u);
    return this._updatePosition(I)
  }
  _updatePosition(n){
    const e=n.index, t=n.lineDomNode, i=n.lineNumberDomNode;
    if(e===this._lineNumbers.length-1){
      t.style.zIndex="0",i.style.zIndex="0";
      const o=`${e*this._lineHeight+this._lastLineRelativePosition+(n.foldingIcon?.isCollapsed?1:0)}px`;
      t.style.top=o,i.style.top=o
    }
    else{
      t.style.zIndex="1",i.style.zIndex="1";
      const o=`${e*this._lineHeight}px`;
      t.style.top=o,i.style.top=o
    }
    return n
  }
  _renderFoldingIconForLine(n, e){
    const t=this._editor.getOption(115);
    if(!n||t==="never")return;
    const i=n.regions, r=i.findRange(e), s=i.getStartLineNumber(r);
    if(!(e===s))return;
    const a=i.isCollapsed(r), l=new twg(a, s, i.getEndLineNumber(r), this._lineHeight);
    return l.setVisible(this._isOnGlyphMargin?!0:a||t==="always"), l.domNode.setAttribute(kjl, ""), l
  }
  getId(){
    return"editor.contrib.stickyScrollWidget"
  }
  getDomNode(){
    return this._rootDomNode
  }
  getPosition(){
    return{
      preference:2,stackOridinal:10
    }
  }
  getMinContentWidthInPx(){
    return this._minContentWidthInPx
  }
  focusLineWithIndex(n){
    0<=n&&n<this._renderedStickyLines.length&&this._renderedStickyLines[n].lineDomNode.focus()
  }
  getEditorPositionFromNode(n){
    if(!n||n.children.length>0)return null;
    const e=this._getRenderedStickyLineFromChildDomNode(n);
    if(!e)return null;
    const t=wTc(e.characterMapping, n, 0);
    return new ar(e.lineNumber, t)
  }
  getLineNumberFromChildDomNode(n){
    return this._getRenderedStickyLineFromChildDomNode(n)?.lineNumber??null
  }
  _getRenderedStickyLineFromChildDomNode(n){
    const e=this.getLineIndexFromChildDomNode(n);
    return e===null||e<0||e>=this._renderedStickyLines.length?null:this._renderedStickyLines[e]
  }
  getLineIndexFromChildDomNode(n){
    const e=this._getAttributeValue(n, Kla);
    return e?parseInt(e, 10):null
  }
  isInStickyLine(n){
    return this._getAttributeValue(n, Sjl)!==void 0
  }
  isInFoldingIconDomNode(n){
    return this._getAttributeValue(n, kjl)!==void 0
  }
  _getAttributeValue(n, e){
    for(;
    n&&n!==this._rootDomNode;
    ){
      const t=n.getAttribute(e);
      if(t!==null)return t;
      n=n.parentElement
    }
  }
}, ewg=class{
  constructor(n, e, t, i, r, s, o, a){
    this.index=n, this.lineNumber=e, this.lineDomNode=t, this.lineNumberDomNode=i, this.foldingIcon=r, this.characterMapping=s, this.scrollWidth=o, this.height=a
  }
}, twg=class{
  constructor(n, e, t, i){
    this.isCollapsed=n, this.foldingStartLine=e, this.foldingEndLine=t, this.dimension=i, this.domNode=document.createElement("div"), this.domNode.style.width="26px", this.domNode.style.height=`${i}px`, this.domNode.style.lineHeight=`${i}px`, this.domNode.className=Qt.asClassName(n?hdn:ddn)
  }
  setVisible(n){
    this.domNode.style.cursor=n?"pointer":"default", this.domNode.style.opacity=n?"1":"0"
  }
}
}
}), Cdn, qgi, Ejl, nwg=