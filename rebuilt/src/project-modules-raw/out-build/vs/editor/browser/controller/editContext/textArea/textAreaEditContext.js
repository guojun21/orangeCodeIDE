// Module: out-build/vs/editor/browser/controller/editContext/textArea/textAreaEditContext.js
// Offset: 1824987 (bundle byte offset)
// Size: 15838 bytes

JlA(), Ht(), Ay(), sI(), _r(), oa(), HY(), j$(), RAh(), OAh(), pk(), tl(), ts(), db(), a3t(), Tg(), xf(), Vyh(), ka(), Wt(), Kyh(), aAh(), Zyh(), VOn(), rAh(), g4n(), Xyh=class{
  constructor(n, e, t, i, r){
    this._context=n, this.modelLineNumber=e, this.distanceToModelLineStart=t, this.widthOfHiddenLineTextBefore=i, this.distanceToModelLineEnd=r, this._visibleTextAreaBrand=void 0, this.startPosition=null, this.endPosition=null, this.visibleTextareaStart=null, this.visibleTextareaEnd=null, this._previousPresentation=null
  }
  prepareRender(n){
    const e=new ar(this.modelLineNumber, this.distanceToModelLineStart+1), t=new ar(this.modelLineNumber, this._context.viewModel.model.getLineMaxColumn(this.modelLineNumber)-this.distanceToModelLineEnd);
    this.startPosition=this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(e), this.endPosition=this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(t), this.startPosition.lineNumber===this.endPosition.lineNumber?(this.visibleTextareaStart=n.visibleRangeForPosition(this.startPosition), this.visibleTextareaEnd=n.visibleRangeForPosition(this.endPosition)):(this.visibleTextareaStart=null, this.visibleTextareaEnd=null)
  }
  definePresentation(n){
    return this._previousPresentation||(n?this._previousPresentation=n:this._previousPresentation={
      foreground:1,italic:!1,bold:!1,underline:!1,strikethrough:!1
    }), this._previousPresentation
  }
}, A3o=u3, y3o=class extends gIc{
  constructor(e, t, i, r, s, o){
    super(e), this._keybindingService=s, this._instantiationService=o, this._primaryCursorPosition=new ar(1, 1), this._primaryCursorVisibleRange=null, this._viewController=i, this._visibleRangeProvider=r, this._scrollLeft=0, this._scrollTop=0;
    const a=this._context.configuration.options, l=a.get(151);
    this._setAccessibilityOptions(a), this._contentLeft=l.contentLeft, this._contentWidth=l.contentWidth, this._contentHeight=l.height, this._fontInfo=a.get(52), this._lineHeight=a.get(68), this._emptySelectionClipboard=a.get(38), this._copyWithSyntaxHighlighting=a.get(25), this._visibleTextArea=null, this._selections=[new Vl(1, 1, 1, 1)], this._modelSelections=[new Vl(1, 1, 1, 1)], this._lastRenderPosition=null, this.textArea=mw(document.createElement("textarea")), tve.write(this.textArea, 7), this.textArea.setClassName(`inputarea ${USe}`), this.textArea.setAttribute("wrap", this._textAreaWrapping&&!this._visibleTextArea?"on":"off");
    const{
      tabSize:u
    }
    =this._context.viewModel.model.getOptions();
    this.textArea.domNode.style.tabSize=`${u*this._fontInfo.spaceWidth}px`, this.textArea.setAttribute("autocorrect", "off"), this.textArea.setAttribute("autocapitalize", "off"), this.textArea.setAttribute("autocomplete", "off"), this.textArea.setAttribute("spellcheck", "false"), this.textArea.setAttribute("aria-label", fIc(a, this._keybindingService)), this.textArea.setAttribute("aria-required", a.get(5)?"true":"false"), this.textArea.setAttribute("tabindex", String(a.get(129))), this.textArea.setAttribute("role", "textbox"), this.textArea.setAttribute("aria-roledescription", _(185, null)), this.textArea.setAttribute("aria-multiline", "true"), this.textArea.setAttribute("aria-autocomplete", a.get(96)?"none":"both"), this._ensureReadOnlyAttribute(), this.textAreaCover=mw(document.createElement("div")), this.textAreaCover.setPosition("absolute"), t.appendChild(this.textArea), t.appendChild(this.textAreaCover);
    const d={
      getLineCount:()=>this._context.viewModel.getLineCount(),getLineMaxColumn:g=>this._context.viewModel.getLineMaxColumn(g),getValueInRange:(g,f)=>this._context.viewModel.getValueInRange(g,f),getValueLengthInRange:(g,f)=>this._context.viewModel.getValueLengthInRange(g,f),modifyPosition:(g,f)=>this._context.viewModel.modifyPosition(g,f)
    }, m={
      getDataToCopy:()=>iAh(this._context.viewModel,this._modelSelections,this._emptySelectionClipboard,this._copyWithSyntaxHighlighting),getScreenReaderContent:()=>{
        if(this._accessibilitySupport===1){
          const f=this._selections[0];
          if(Fs&&f.isEmpty()){
            const w=f.getStartPosition();
            let C=this._getWordBeforePosition(w);
            if(C.length===0&&(C=this._getCharacterBeforePosition(w)),C.length>0)return new _W(C,C.length,C.length,Zt.fromPositions(w),0)
          }
          if(Fs&&!f.isEmpty()&&d.getValueLengthInRange(f,0)<500){
            const w=d.getValueInRange(f,0);
            return new _W(w,0,w.length,f,0)
          }
          if(kte&&!f.isEmpty()){
            const w="vscode-placeholder";
            return new _W(w,0,w.length,null,void 0)
          }
          return _W.EMPTY
        }
        if(p0c){
          const f=this._selections[0];
          if(f.isEmpty()){
            const A=f.getStartPosition(),[w,C]=this._getAndroidWordAtPosition(A);
            if(w.length>0)return new _W(w,C,C,Zt.fromPositions(A),0)
          }
          return _W.EMPTY
        }
        const g=bIc.fromEditorSelection(d,this._selections[0],this._accessibilityPageSize,this._accessibilitySupport===0);
        return _W.fromScreenReaderContentState(g)
      },deduceModelPosition:(g,f,A)=>this._context.viewModel.deduceModelPositionRelativeToViewPosition(g,f,A)
    }, p=this._register(new oAh(this.textArea.domNode));
    this._textAreaInput=this._register(this._instantiationService.createInstance(d3o, m, p, cf, {
      isAndroid:p0c,isChrome:_ze,isFirefox:u3,isSafari:kte
    })), this._register(this._textAreaInput.onKeyDown(g=>{
      this._viewController.emitKeyDown(g)
    })), this._register(this._textAreaInput.onKeyUp(g=>{
      this._viewController.emitKeyUp(g)
    })), this._register(this._textAreaInput.onPaste(g=>{
      let f=!1,A=null,w=null;
      g.metadata&&(f=this._emptySelectionClipboard&&!!g.metadata.isFromEmptySelection,A=typeof g.metadata.multicursorText<"u"?g.metadata.multicursorText:null,w=g.metadata.mode),this._viewController.paste(g.text,f,A,w)
    })), this._register(this._textAreaInput.onCut(()=>{
      this._viewController.cut()
    })), this._register(this._textAreaInput.onType(g=>{
      g.replacePrevCharCnt||g.replaceNextCharCnt||g.positionDelta?(Qoe&&console.log(` => compositionType: <<${g.text}>>, ${g.replacePrevCharCnt}, ${g.replaceNextCharCnt}, ${g.positionDelta}`),this._viewController.compositionType(g.text,g.replacePrevCharCnt,g.replaceNextCharCnt,g.positionDelta)):(Qoe&&console.log(` => type: <<${g.text}>>`),this._viewController.type(g.text))
    })), this._register(this._textAreaInput.onSelectionChangeRequest(g=>{
      this._viewController.setSelection(g)
    })), this._register(this._textAreaInput.onCompositionStart(g=>{
      const f=this.textArea.domNode,A=this._modelSelections[0],{
        distanceToModelLineStart:w,widthOfHiddenTextBefore:C
      }
      =(()=>{
        const I=f.value.substring(0,Math.min(f.selectionStart,f.selectionEnd)),B=I.lastIndexOf(`
`),R=I.substring(B+1),N=R.lastIndexOf("	"),M=R.length-N-1,O=A.getStartPosition(),$=Math.min(O.column-1,M),H=O.column-1-$,W=R.substring(0,R.length-$),{
          tabSize:z
        }
        =this._context.viewModel.model.getOptions(),Y=GlA(this.textArea.domNode.ownerDocument,W,this._fontInfo,z);
        return{
          distanceToModelLineStart:H,widthOfHiddenTextBefore:Y
        }
      })(),{
        distanceToModelLineEnd:x
      }
      =(()=>{
        const I=f.value.substring(Math.max(f.selectionStart,f.selectionEnd)),B=I.indexOf(`
`),R=B===-1?I:I.substring(0,B),N=R.indexOf("	"),M=N===-1?R.length:R.length-N-1,O=A.getEndPosition(),$=Math.min(this._context.viewModel.model.getLineMaxColumn(O.lineNumber)-O.column,M);
        return{
          distanceToModelLineEnd:this._context.viewModel.model.getLineMaxColumn(O.lineNumber)-O.column-$
        }
      })();
      this._context.viewModel.revealRange("keyboard",!0,Zt.fromPositions(this._selections[0].getStartPosition()),0,1),this._visibleTextArea=new Xyh(this._context,A.startLineNumber,w,C,x),this.textArea.setAttribute("wrap",this._textAreaWrapping&&!this._visibleTextArea?"on":"off"),this._visibleTextArea.prepareRender(this._visibleRangeProvider),this._render(),this.textArea.setClassName(`inputarea ${USe} ime-input`),this._viewController.compositionStart(),this._context.viewModel.onCompositionStart()
    })), this._register(this._textAreaInput.onCompositionUpdate(g=>{
      this._visibleTextArea&&(this._visibleTextArea.prepareRender(this._visibleRangeProvider),this._render())
    })), this._register(this._textAreaInput.onCompositionEnd(()=>{
      this._visibleTextArea=null,this.textArea.setAttribute("wrap",this._textAreaWrapping&&!this._visibleTextArea?"on":"off"),this._render(),this.textArea.setClassName(`inputarea ${USe}`),this._viewController.compositionEnd(),this._context.viewModel.onCompositionEnd()
    })), this._register(this._textAreaInput.onFocus(()=>{
      this._context.viewModel.setHasFocus(!0)
    })), this._register(this._textAreaInput.onBlur(()=>{
      this._context.viewModel.setHasFocus(!1)
    })), this._register(d3t.onDidChange(()=>{
      this._ensureReadOnlyAttribute()
    }))
  }
  get domNode(){
    return this.textArea
  }
  writeScreenReaderContent(e){
    this._textAreaInput.writeNativeTextAreaContent(e)
  }
  getTextAreaDomNode(){
    return this.textArea.domNode
  }
  dispose(){
    super.dispose(), this.textArea.domNode.remove(), this.textAreaCover.domNode.remove()
  }
  _getAndroidWordAtPosition(e){
    const t='`~!@#$%^&*()-=+[{]}\\|;:",.<>/?', i=this._context.viewModel.getLineContent(e.lineNumber), r=kde(t, []);
    let s=!0, o=e.column, a=!0, l=e.column, u=0;
    for(;
    u<50&&(s||a);
    ){
      if(s&&o<=1&&(s=!1),s){
        const d=i.charCodeAt(o-2);
        r.get(d)!==0?s=!1:o--
      }
      if(a&&l>i.length&&(a=!1),a){
        const d=i.charCodeAt(l-1);
        r.get(d)!==0?a=!1:l++
      }
      u++
    }
    return[i.substring(o-1, l-1), e.column-o]
  }
  _getWordBeforePosition(e){
    const t=this._context.viewModel.getLineContent(e.lineNumber), i=kde(this._context.configuration.options.get(136), []);
    let r=e.column, s=0;
    for(;
    r>1;
    ){
      const o=t.charCodeAt(r-2);
      if(i.get(o)!==0||s>50)return t.substring(r-1,e.column-1);
      s++,r--
    }
    return t.substring(0, e.column-1)
  }
  _getCharacterBeforePosition(e){
    if(e.column>1){
      const i=this._context.viewModel.getLineContent(e.lineNumber).charAt(e.column-2);
      if(!d3(i.charCodeAt(0)))return i
    }
    return""
  }
  _setAccessibilityOptions(e){
    this._accessibilitySupport=e.get(2);
    const t=e.get(3);
    this._accessibilitySupport===2&&t===oz.accessibilityPageSize.defaultValue?this._accessibilityPageSize=500:this._accessibilityPageSize=t;
    const r=e.get(151).wrappingColumn;
    if(r!==-1&&this._accessibilitySupport!==1){
      const s=e.get(52);
      this._textAreaWrapping=!0,this._textAreaWidth=Math.round(r*s.typicalHalfwidthCharacterWidth)
    }
    else this._textAreaWrapping=!1, this._textAreaWidth=A3o?0:1
  }
  onConfigurationChanged(e){
    const t=this._context.configuration.options, i=t.get(151);
    this._setAccessibilityOptions(t), this._contentLeft=i.contentLeft, this._contentWidth=i.contentWidth, this._contentHeight=i.height, this._fontInfo=t.get(52), this._lineHeight=t.get(68), this._emptySelectionClipboard=t.get(38), this._copyWithSyntaxHighlighting=t.get(25), this.textArea.setAttribute("wrap", this._textAreaWrapping&&!this._visibleTextArea?"on":"off");
    const{
      tabSize:r
    }
    =this._context.viewModel.model.getOptions();
    return this.textArea.domNode.style.tabSize=`${r*this._fontInfo.spaceWidth}px`, this.textArea.setAttribute("aria-label", fIc(t, this._keybindingService)), this.textArea.setAttribute("aria-required", t.get(5)?"true":"false"), this.textArea.setAttribute("tabindex", String(t.get(129))), (e.hasChanged(34)||e.hasChanged(96))&&this._ensureReadOnlyAttribute(), e.hasChanged(2)&&this._textAreaInput.writeNativeTextAreaContent("strategy changed"), !0
  }
  onCursorStateChanged(e){
    return this._selections=e.selections.slice(0), this._modelSelections=e.modelSelections.slice(0), this._textAreaInput.writeNativeTextAreaContent("selection changed"), !0
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
  isFocused(){
    return this._textAreaInput.isFocused()
  }
  focus(){
    this._textAreaInput.focusTextArea()
  }
  refreshFocusState(){
    this._textAreaInput.refreshFocusState()
  }
  getLastRenderData(){
    return this._lastRenderPosition
  }
  setAriaOptions(e){
    e.activeDescendant?(this.textArea.setAttribute("aria-haspopup", "true"), this.textArea.setAttribute("aria-autocomplete", "list"), this.textArea.setAttribute("aria-activedescendant", e.activeDescendant)):(this.textArea.setAttribute("aria-haspopup", "false"), this.textArea.setAttribute("aria-autocomplete", "both"), this.textArea.removeAttribute("aria-activedescendant")), e.role&&this.textArea.setAttribute("role", e.role)
  }
  _ensureReadOnlyAttribute(){
    const e=this._context.configuration.options;
    !d3t.enabled||e.get(34)&&e.get(96)?this.textArea.setAttribute("readonly", "true"):this.textArea.removeAttribute("readonly")
  }
  prepareRender(e){
    this._primaryCursorPosition=new ar(this._selections[0].positionLineNumber, this._selections[0].positionColumn), this._primaryCursorVisibleRange=e.visibleRangeForPosition(this._primaryCursorPosition), this._visibleTextArea?.prepareRender(e)
  }
  render(e){
    this._textAreaInput.writeNativeTextAreaContent("render"), this._render()
  }
  _render(){
    if(this._visibleTextArea){
      const i=this._visibleTextArea.visibleTextareaStart,r=this._visibleTextArea.visibleTextareaEnd,s=this._visibleTextArea.startPosition,o=this._visibleTextArea.endPosition;
      if(s&&o&&i&&r&&r.left>=this._scrollLeft&&i.left<=this._scrollLeft+this._contentWidth){
        const a=this._context.viewLayout.getVerticalOffsetForLineNumber(this._primaryCursorPosition.lineNumber)-this._scrollTop,l=Yyh(this.textArea.domNode.value.substr(0,this.textArea.domNode.selectionStart));
        let u=this._visibleTextArea.widthOfHiddenLineTextBefore,d=this._contentLeft+i.left-this._scrollLeft,m=r.left-i.left+1;
        if(d<this._contentLeft){
          const C=this._contentLeft-d;
          d+=C,u+=C,m-=C
        }
        m>this._contentWidth&&(m=this._contentWidth);
        const p=this._context.viewModel.getViewLineData(s.lineNumber),g=p.tokens.findTokenIndexAtOffset(s.column-1),f=p.tokens.findTokenIndexAtOffset(o.column-1),A=g===f,w=this._visibleTextArea.definePresentation(A?p.tokens.getPresentation(g):null);
        this.textArea.domNode.scrollTop=l*this._lineHeight,this.textArea.domNode.scrollLeft=u,this._doRender({
          lastRenderPosition:null,top:a,left:d,width:m,height:this._lineHeight,useCover:!1,color:(pT.getColorMap()||[])[w.foreground],italic:w.italic,bold:w.bold,underline:w.underline,strikethrough:w.strikethrough
        })
      }
      return
    }
    if(!this._primaryCursorVisibleRange){
      this._renderAtTopLeft();
      return
    }
    const e=this._contentLeft+this._primaryCursorVisibleRange.left-this._scrollLeft;
    if(e<this._contentLeft||e>this._contentLeft+this._contentWidth){
      this._renderAtTopLeft();
      return
    }
    const t=this._context.viewLayout.getVerticalOffsetForLineNumber(this._selections[0].positionLineNumber)-this._scrollTop;
    if(t<0||t>this._contentHeight){
      this._renderAtTopLeft();
      return
    }
    if(Fs||this._accessibilitySupport===2){
      this._doRender({
        lastRenderPosition:this._primaryCursorPosition,top:t,left:this._textAreaWrapping?this._contentLeft:e,width:this._textAreaWidth,height:this._lineHeight,useCover:!1
      }),this.textArea.domNode.scrollLeft=this._primaryCursorVisibleRange.left;
      const i=this._textAreaInput.textAreaState.newlineCountBeforeSelection??Yyh(this.textArea.domNode.value.substring(0,this.textArea.domNode.selectionStart));
      this.textArea.domNode.scrollTop=i*this._lineHeight;
      return
    }
    this._doRender({
      lastRenderPosition:this._primaryCursorPosition,top:t,left:this._textAreaWrapping?this._contentLeft:e,width:this._textAreaWidth,height:A3o?0:1,useCover:!1
    })
  }
  _renderAtTopLeft(){
    this._doRender({
      lastRenderPosition:null,top:0,left:0,width:this._textAreaWidth,height:A3o?0:1,useCover:!0
    })
  }
  _doRender(e){
    this._lastRenderPosition=e.lastRenderPosition;
    const t=this.textArea, i=this.textAreaCover;
    bF(t, this._fontInfo), t.setTop(e.top), t.setLeft(e.left), t.setWidth(e.width), t.setHeight(e.height), t.setColor(e.color?Xr.Format.CSS.formatHex(e.color):""), t.setFontStyle(e.italic?"italic":""), e.bold&&t.setFontWeight("bold"), t.setTextDecoration(`${e.underline?" underline":""}${e.strikethrough?" line-through":""}`), i.setTop(e.useCover?e.top:0), i.setLeft(e.useCover?e.left:0), i.setWidth(e.useCover?e.width:0), i.setHeight(e.useCover?e.height:0);
    const r=this._context.configuration.options;
    r.get(59)?i.setClassName("monaco-editor-background textAreaCover "+GTc.OUTER_CLASS_NAME):r.get(69).renderType!==0?i.setClassName("monaco-editor-background textAreaCover "+HTc.CLASS_NAME):i.setClassName("monaco-editor-background textAreaCover")
  }
}, y3o=__decorate([__param(4, mo), __param(5, ln)], y3o)
}
}), QlA=