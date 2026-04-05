// Module: out-build/vs/editor/browser/controller/editContext/native/nativeEditContext.js
// Offset: 1849248 (bundle byte offset)
// Size: 10715 bytes

QlA(), Ay(), ri(), sI(), Tb(), Wt(), VOn(), Kyh(), jlA(), zlA(), ts(), db(), tl(), vIc(), rt(), VlA(), zg(), nwh(), (function(n){
  n.NONE="edit-context-composition-none", n.SECONDARY="edit-context-composition-secondary", n.PRIMARY="edit-context-composition-primary"
})(e3n||(e3n={
  
})), t3n=class extends gIc{
  constructor(e, t, i, r, s, o, a){
    super(t), this._visibleRangeProvider=s, this._accessibilityService=a, this._editContextPrimarySelection=new Vl(1, 1, 1, 1), this._decorations=[], this._primarySelection=new Vl(1, 1, 1, 1), this._targetWindowId=-1, this._scrollTop=0, this._scrollLeft=0, this.domNode=new qH(document.createElement("div")), this.domNode.setClassName("native-edit-context"), this._textArea=new qH(document.createElement("textarea")), this._textArea.setClassName("native-edit-context-textarea"), this._textArea.setAttribute("tabindex", "-1"), this.domNode.setAttribute("autocorrect", "off"), this.domNode.setAttribute("autocapitalize", "off"), this.domNode.setAttribute("autocomplete", "off"), this.domNode.setAttribute("spellcheck", "false"), this._updateDomAttributes(), i.appendChild(this.domNode), i.appendChild(this._textArea), this._parent=i.domNode, this._selectionChangeListener=this._register(new uo), this._focusTracker=this._register(new ewh(this.domNode.domNode, u=>{
      u?(this._selectionChangeListener.value=this._setSelectionChangeListener(r),this._screenReaderSupport.setIgnoreSelectionChangeTime("onFocus")):this._selectionChangeListener.value=void 0,this._context.viewModel.setHasFocus(u)
    }));
    const l=As(this.domNode.domNode);
    this._editContext=AIc.create(l), this.setEditContextOnDomNode(), this._screenReaderSupport=o.createInstance(w3o, this.domNode, t), this._register(ei(this.domNode.domNode, "copy", u=>this._ensureClipboardGetsEditorSelection(u))), this._register(ei(this.domNode.domNode, "cut", u=>{
      this._screenReaderSupport.setIgnoreSelectionChangeTime("onCut"),this._ensureClipboardGetsEditorSelection(u),r.cut()
    })), this._register(ei(this.domNode.domNode, "keyup", u=>r.emitKeyUp(new vh(u)))), this._register(ei(this.domNode.domNode, "keydown", async u=>{
      const d=new vh(u);
      d.keyCode===114&&d.stopPropagation(),r.emitKeyDown(d)
    })), this._register(ei(this.domNode.domNode, "beforeinput", async u=>{
      (u.inputType==="insertParagraph"||u.inputType==="insertLineBreak")&&this._onType(r,{
        text:`
`,replacePrevCharCnt:0,replaceNextCharCnt:0,positionDelta:0
      })
    })), this._register(XOn(this._editContext, "textformatupdate", u=>this._handleTextFormatUpdate(u))), this._register(XOn(this._editContext, "characterboundsupdate", u=>this._updateCharacterBounds(u))), this._register(XOn(this._editContext, "textupdate", u=>{
      this._emitTypeEvent(r,u)
    })), this._register(XOn(this._editContext, "compositionstart", u=>{
      r.compositionStart(),this._context.viewModel.onCompositionStart()
    })), this._register(XOn(this._editContext, "compositionend", u=>{
      r.compositionEnd(),this._context.viewModel.onCompositionEnd()
    })), this._register(ei(this._textArea.domNode, "paste", u=>{
      if(this._screenReaderSupport.setIgnoreSelectionChangeTime("onPaste"),u.preventDefault(),!u.clipboardData)return;
      let[d,m]=i3t.getTextData(u.clipboardData);
      if(!d)return;
      m=m||n3t.INSTANCE.get(d);
      let p=!1,g=null,f=null;
      m&&(p=this._context.configuration.options.get(38)&&!!m.isFromEmptySelection,g=typeof m.multicursorText<"u"?m.multicursorText:null,f=m.mode),r.paste(d,p,g,f)
    })), this._register(yIc.register(e, this))
  }
  dispose(){
    this.domNode.domNode.blur(), this.domNode.domNode.remove(), this._textArea.domNode.remove(), super.dispose()
  }
  setAriaOptions(e){
    this._screenReaderSupport.setAriaOptions(e)
  }
  getLastRenderData(){
    return this._primarySelection.getPosition()
  }
  prepareRender(e){
    this._screenReaderSupport.prepareRender(e), this._updateEditContext(), this._updateSelectionAndControlBounds(e)
  }
  render(e){
    this._screenReaderSupport.render(e)
  }
  onCursorStateChanged(e){
    return this._primarySelection=e.modelSelections[0]??new Vl(1, 1, 1, 1), this._screenReaderSupport.onCursorStateChanged(e), this._updateEditContext(), !0
  }
  onConfigurationChanged(e){
    return this._screenReaderSupport.onConfigurationChanged(e), this._updateDomAttributes(), !0
  }
  onDecorationsChanged(e){
    return!0
  }
  onFlushed(e){
    return!0
  }
  onLinesChanged(e){
    return!0
  }
  onLinesDeleted(e){
    return!0
  }
  onLinesInserted(e){
    return!0
  }
  onScrollChanged(e){
    return this._scrollLeft=e.scrollLeft, this._scrollTop=e.scrollTop, !0
  }
  onZonesChanged(e){
    return!0
  }
  executePaste(){
    this._onWillPaste();
    try{
      this._focusTracker.pause(),this._textArea.focus();
      const e=this._textArea.domNode.ownerDocument.execCommand("paste");
      return this._textArea.domNode.textContent="",this.domNode.focus(),e
    }
    finally{
      this._focusTracker.resume()
    }
  }
  _onWillPaste(){
    this._screenReaderSupport.setIgnoreSelectionChangeTime("onWillPaste")
  }
  writeScreenReaderContent(){
    this._screenReaderSupport.writeScreenReaderContent()
  }
  isFocused(){
    return this._focusTracker.isFocused
  }
  focus(){
    this._focusTracker.focus(), this.refreshFocusState()
  }
  refreshFocusState(){
    this._focusTracker.refreshFocusState()
  }
  setEditContextOnDomNode(){
    const e=As(this.domNode.domNode), t=RH(e);
    this._targetWindowId!==t&&(this.domNode.domNode.editContext=this._editContext, this._targetWindowId=t)
  }
  _updateDomAttributes(){
    const e=this._context.configuration.options;
    this.domNode.domNode.setAttribute("tabindex", String(e.get(129)))
  }
  _updateEditContext(){
    const e=this._getNewEditContextState();
    e&&(this._editContext.updateText(0, Number.MAX_SAFE_INTEGER, e.text??" "), this._editContext.updateSelection(e.selectionStartOffset, e.selectionEndOffset), this._editContextPrimarySelection=e.editContextPrimarySelection)
  }
  _emitTypeEvent(e, t){
    if(!this._editContext||!this._editContextPrimarySelection.equalsSelection(this._primarySelection))return;
    const i=this._context.viewModel.model, r=this._editContextStartPosition(), s=i.getOffsetAt(r), o=i.getOffsetAt(this._primarySelection.getEndPosition()), a=i.getOffsetAt(this._primarySelection.getStartPosition()), l=o-s, u=a-s;
    let d=0, m=0;
    t.updateRangeEnd>l&&(d=t.updateRangeEnd-l), t.updateRangeStart<u&&(m=u-t.updateRangeStart);
    let p="";
    u<t.updateRangeStart&&(p+=this._editContext.text.substring(u, t.updateRangeStart)), p+=t.text, l>t.updateRangeEnd&&(p+=this._editContext.text.substring(t.updateRangeEnd, l));
    let g=0;
    t.selectionStart===t.selectionEnd&&u===l&&(g=t.selectionStart-(t.updateRangeStart+t.text.length));
    const f={
      text:p,replacePrevCharCnt:m,replaceNextCharCnt:d,positionDelta:g
    };
    this._onType(e, f), this._updateEditContext()
  }
  _onType(e, t){
    t.replacePrevCharCnt||t.replaceNextCharCnt||t.positionDelta?e.compositionType(t.text, t.replacePrevCharCnt, t.replaceNextCharCnt, t.positionDelta):e.type(t.text)
  }
  _getNewEditContextState(){
    const e=this._primarySelection, t=this._context.viewModel.model;
    if(!t.isValidRange(e))return;
    const i=e.startLineNumber, r=e.endLineNumber, s=t.getLineMaxColumn(r), o=new Zt(i, 1, r, s), a=t.getValueInRange(o, 0), l=e.startColumn-1, u=a.length+e.endColumn-s;
    return{
      text:a,selectionStartOffset:l,selectionEndOffset:u,editContextPrimarySelection:e
    }
  }
  _editContextStartPosition(){
    return new ar(this._editContextPrimarySelection.startLineNumber, 1)
  }
  _handleTextFormatUpdate(e){
    if(!this._editContext)return;
    const t=e.getTextFormats(), i=this._editContextStartPosition(), r=[];
    t.forEach(s=>{
      const o=this._context.viewModel.model,a=o.getOffsetAt(i),l=o.getPositionAt(a+s.rangeStart),u=o.getPositionAt(a+s.rangeEnd),d=Zt.fromPositions(l,u),m=s.underlineThickness.toLowerCase();
      let p=e3n.NONE;
      switch(m){
        case"thin":p=e3n.SECONDARY;
        break;
        case"thick":p=e3n.PRIMARY;
        break
      }
      r.push({
        range:d,options:{
          description:"textFormatDecoration",inlineClassName:p
        }
      })
    }), this._decorations=this._context.viewModel.model.deltaDecorations(this._decorations, r)
  }
  _updateSelectionAndControlBounds(e){
    if(!this._parent)return;
    const t=this._context.configuration.options, i=t.get(68), r=t.get(151).contentLeft, s=this._parent.getBoundingClientRect(), o=this._primarySelection.getStartPosition(), a=this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(o), l=this._context.viewLayout.getVerticalOffsetForLineNumber(a.lineNumber), u=s.top+l-this._scrollTop, d=(this._primarySelection.endLineNumber-this._primarySelection.startLineNumber+1)*i;
    let m=s.left+r-this._scrollLeft, p;
    if(this._primarySelection.isEmpty()){
      const f=e.visibleRangeForPosition(a);
      f&&(m+=f.left),p=0
    }
    else p=s.width-r;
    const g=new DOMRect(m, u, p, d);
    this._editContext.updateSelectionBounds(g), this._editContext.updateControlBounds(g)
  }
  _updateCharacterBounds(e){
    if(!this._parent)return;
    const t=this._context.configuration.options, i=t.get(52).typicalHalfwidthCharacterWidth, r=t.get(68), s=t.get(151).contentLeft, o=this._parent.getBoundingClientRect(), a=[], l=new h3t(this._editContext.text);
    for(let u=e.rangeStart;
    u<e.rangeEnd;
    u++){
      const d=l.getPosition(u),m=this._editContextPrimarySelection.startLineNumber-1,p=new ar(m+d.lineNumber,d.column),g=p.delta(0,1),f=Zt.fromPositions(p,g),A=this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(f),w=this._visibleRangeProvider.linesVisibleRangesForRange(A,!0)??[],C=this._context.viewLayout.getVerticalOffsetForLineNumber(A.startLineNumber),x=o.top+C-this._scrollTop;
      let I=0,B=i;
      if(w.length>0)for(const R of w[0].ranges){
        I=R.left,B=R.width;
        break
      }
      a.push(new DOMRect(o.left+s+I-this._scrollLeft,x,B,r))
    }
    this._editContext.updateCharacterBounds(e.rangeStart, a)
  }
  _ensureClipboardGetsEditorSelection(e){
    const t=this._context.configuration.options, i=t.get(38), r=t.get(25), s=this._context.viewModel.getCursorStates().map(l=>l.modelState.selection), o=iAh(this._context.viewModel, s, i, r), a={
      version:1,isFromEmptySelection:o.isFromEmptySelection,multicursorText:o.multicursorText,mode:o.mode
    };
    n3t.INSTANCE.set(u3?o.text.replace(/\r\n/g, `
`):o.text, a), e.preventDefault(), e.clipboardData&&i3t.setTextData(e.clipboardData, o.text, o.html, a)
  }
  _setSelectionChangeListener(e){
    let t=0;
    return ei(this.domNode.domNode.ownerDocument, "selectionchange", ()=>{
      const i=this._accessibilityService.isScreenReaderOptimized();
      if(!this.isFocused()||!i)return;
      const r=this._screenReaderSupport.screenReaderContentState;
      if(!r)return;
      const s=Date.now(),o=s-t;
      if(t=s,o<5)return;
      const a=s-this._screenReaderSupport.getIgnoreSelectionChangeTime();
      if(this._screenReaderSupport.resetSelectionChangeTime(),a<100)return;
      const u=$c().document.getSelection();
      if(!u||u.rangeCount===0)return;
      const m=u.getRangeAt(0),p=this._context.viewModel,g=p.model,A=p.coordinatesConverter.convertViewPositionToModelPosition(r.startPositionWithinEditor),w=g.getOffsetAt(A);
      let C=m.startOffset+w,x=m.endOffset+w;
      if(g.getEndOfLineSequence()===1){
        const M=r.value,O=new h3t(M),$=O.getPosition(m.startOffset),H=O.getPosition(m.endOffset);
        C+=$.lineNumber-1,x+=H.lineNumber-1
      }
      const B=g.getPositionAt(C),R=g.getPositionAt(x),N=Vl.fromPositions(B,R);
      e.setSelection(N)
    })
  }
}, t3n=__decorate([__param(5, ln), __param(6, Cf)], t3n)
}
}), iwh, YlA=