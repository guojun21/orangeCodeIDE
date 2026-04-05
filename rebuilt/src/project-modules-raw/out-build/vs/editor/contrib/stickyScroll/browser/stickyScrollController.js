// Module: out-build/vs/editor/contrib/stickyScroll/browser/stickyScrollController.js
// Offset: 25480311 (bundle byte offset)
// Size: 12990 bytes

rt(), Cm(), XSA(), tkA(), Wt(), pl(), dr(), si(), Qh(), Api(), ts(), wet(), Jbg(), tl(), Po(), QE(), xve(), ri(), nwg(), h0(), jAe(), Vvg(), yn(), iu(), Kae=class extends at{
  static{
    Ijl=this
  }
  static{
    this.ID="store.contrib.stickyScrollController"
  }
  constructor(e, t, i, r, s, o, a){
    super(), this._editor=e, this._contextMenuService=t, this._languageFeaturesService=i, this._instaService=r, this._contextKeyService=a, this._sessionStore=new Ut, this._maxStickyLines=Number.MAX_SAFE_INTEGER, this._candidateDefinitionsLength=-1, this._focusedStickyElementIndex=-1, this._enabled=!1, this._focused=!1, this._positionRevealed=!1, this._onMouseDown=!1, this._endLineNumbers=[], this._mouseTarget=null, this._onDidChangeStickyScrollHeight=this._register(new Qe), this.onDidChangeStickyScrollHeight=this._onDidChangeStickyScrollHeight.event, this._stickyScrollWidget=new Xyg(this._editor), this._stickyLineCandidateProvider=new tua(this._editor, i, s), this._register(this._stickyScrollWidget), this._register(this._stickyLineCandidateProvider), this._widgetState=$gi.Empty;
    const l=this._stickyScrollWidget.getDomNode();
    this._register(this._editor.onDidChangeConfiguration(d=>{
      this._readConfigurationChange(d)
    })), this._register(ei(l, ir.CONTEXT_MENU, async d=>{
      this._onContextMenu(As(l),d)
    })), this._stickyScrollFocusedContextKey=Ci.stickyScrollFocused.bindTo(this._contextKeyService), this._stickyScrollVisibleContextKey=Ci.stickyScrollVisible.bindTo(this._contextKeyService);
    const u=this._register(CC(l));
    this._register(u.onDidBlur(d=>{
      this._positionRevealed===!1&&l.clientHeight===0?(this._focusedStickyElementIndex=-1,this.focus()):this._disposeFocusStickyScrollStore()
    })), this._register(u.onDidFocus(d=>{
      this.focus()
    })), this._registerMouseListeners(), this._register(ei(l, ir.MOUSE_DOWN, d=>{
      this._onMouseDown=!0
    })), this._register(this._stickyScrollWidget.onDidChangeStickyScrollHeight(d=>{
      this._onDidChangeStickyScrollHeight.fire(d)
    })), this._onDidResize(), this._readConfiguration()
  }
  get stickyScrollCandidateProvider(){
    return this._stickyLineCandidateProvider
  }
  get stickyScrollWidgetState(){
    return this._widgetState
  }
  get stickyScrollWidgetHeight(){
    return this._stickyScrollWidget.height
  }
  static get(e){
    return e.getContribution(Ijl.ID)
  }
  _disposeFocusStickyScrollStore(){
    this._stickyScrollFocusedContextKey.set(!1), this._focusDisposableStore?.dispose(), this._focused=!1, this._positionRevealed=!1, this._onMouseDown=!1
  }
  isFocused(){
    return this._focused
  }
  focus(){
    if(this._onMouseDown){
      this._onMouseDown=!1,this._editor.focus();
      return
    }
    this._stickyScrollFocusedContextKey.get()!==!0&&(this._focused=!0, this._focusDisposableStore=new Ut, this._stickyScrollFocusedContextKey.set(!0), this._focusedStickyElementIndex=this._stickyScrollWidget.lineNumbers.length-1, this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex))
  }
  focusNext(){
    this._focusedStickyElementIndex<this._stickyScrollWidget.lineNumberCount-1&&this._focusNav(!0)
  }
  focusPrevious(){
    this._focusedStickyElementIndex>0&&this._focusNav(!1)
  }
  selectEditor(){
    this._editor.focus()
  }
  _focusNav(e){
    this._focusedStickyElementIndex=e?this._focusedStickyElementIndex+1:this._focusedStickyElementIndex-1, this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex)
  }
  goToFocused(){
    const e=this._stickyScrollWidget.lineNumbers;
    this._disposeFocusStickyScrollStore(), this._revealPosition({
      lineNumber:e[this._focusedStickyElementIndex],column:1
    })
  }
  _revealPosition(e){
    this._reveaInEditor(e, ()=>this._editor.revealPosition(e))
  }
  _revealLineInCenterIfOutsideViewport(e){
    this._reveaInEditor(e, ()=>this._editor.revealLineInCenterIfOutsideViewport(e.lineNumber, 0))
  }
  _reveaInEditor(e, t){
    this._focused&&this._disposeFocusStickyScrollStore(), this._positionRevealed=!0, t(), this._editor.setSelection(Zt.fromPositions(e)), this._editor.focus()
  }
  _registerMouseListeners(){
    const e=this._register(new Ut), t=this._register(new Cun(this._editor, {
      extractLineNumberFromMouseEvent:l=>{
        const u=this._stickyScrollWidget.getEditorPositionFromNode(l.target.element);
        return u?u.lineNumber:0
      }
    })), i=l=>{
      if(!this._editor.hasModel()||l.target.type!==12||l.target.detail!==this._stickyScrollWidget.getId())return null;
      const u=l.target.element;
      if(!u||u.innerText!==u.innerHTML)return null;
      const d=this._stickyScrollWidget.getEditorPositionFromNode(u);
      return d?{
        range:new Zt(d.lineNumber,d.column,d.lineNumber,d.column+u.innerText.length),textElement:u
      }
      :null
    }, r=this._stickyScrollWidget.getDomNode();
    this._register(_f(r, ir.CLICK, l=>{
      if(l.ctrlKey||l.altKey||l.metaKey||!l.leftButton)return;
      if(l.shiftKey){
        const p=this._stickyScrollWidget.getLineIndexFromChildDomNode(l.target);
        if(p===null)return;
        const g=new ar(this._endLineNumbers[p],1);
        this._revealLineInCenterIfOutsideViewport(g);
        return
      }
      if(this._stickyScrollWidget.isInFoldingIconDomNode(l.target)){
        const p=this._stickyScrollWidget.getLineNumberFromChildDomNode(l.target);
        this._toggleFoldingRegionForLine(p);
        return
      }
      if(!this._stickyScrollWidget.isInStickyLine(l.target))return;
      let m=this._stickyScrollWidget.getEditorPositionFromNode(l.target);
      if(!m){
        const p=this._stickyScrollWidget.getLineNumberFromChildDomNode(l.target);
        if(p===null)return;
        m=new ar(p,1)
      }
      this._revealPosition(m)
    }));
    const s=l=>{
      this._mouseTarget=l.target,this._onMouseMoveOrKeyDown(l)
    }, o=l=>{
      this._onMouseMoveOrKeyDown(l)
    }, a=l=>{
      this._showEndForLine!==void 0&&(this._showEndForLine=void 0,this._renderStickyScroll())
    };
    bi.addEventListener(ir.MOUSE_MOVE, s), bi.addEventListener(ir.KEY_DOWN, o), bi.addEventListener(ir.KEY_UP, a), this._register($i(()=>{
      bi.removeEventListener(ir.MOUSE_MOVE,s),bi.removeEventListener(ir.KEY_DOWN,o),bi.removeEventListener(ir.KEY_UP,a)
    })), this._register(t.onMouseMoveOrRelevantKeyDown(([l, u])=>{
      const d=i(l);
      if(!d||!l.hasTriggerModifier||!this._editor.hasModel()){
        e.clear();
        return
      }
      const{
        range:m,textElement:p
      }
      =d;
      if(!m.equalsRange(this._stickyRangeProjectedOnEditor))this._stickyRangeProjectedOnEditor=m,e.clear();
      else if(p.style.textDecoration==="underline")return;
      const g=new Wc;
      e.add($i(()=>g.dispose(!0)));
      let f;
      F1e(this._languageFeaturesService.definitionProvider,this._editor.getModel(),new ar(m.startLineNumber,m.startColumn+1),!1,g.token).then((A=>{
        if(!g.token.isCancellationRequested)if(A.length!==0){
          this._candidateDefinitionsLength=A.length;
          const w=p;
          f!==w?(e.clear(),f=w,f.style.textDecoration="underline",e.add($i(()=>{
            f.style.textDecoration="none"
          }))):f||(f=w,f.style.textDecoration="underline",e.add($i(()=>{
            f.style.textDecoration="none"
          })))
        }
        else e.clear()
      }))
    })), this._register(t.onCancel(()=>{
      e.clear()
    })), this._register(t.onExecute(async l=>{
      if(l.target.type!==12||l.target.detail!==this._stickyScrollWidget.getId())return;
      const u=this._stickyScrollWidget.getEditorPositionFromNode(l.target.element);
      u&&(!this._editor.hasModel()||!this._stickyRangeProjectedOnEditor||(this._candidateDefinitionsLength>1&&(this._focused&&this._disposeFocusStickyScrollStore(),this._revealPosition({
        lineNumber:u.lineNumber,column:1
      })),this._instaService.invokeFunction(Hbg,l,this._editor,{
        uri:this._editor.getModel().uri,range:this._stickyRangeProjectedOnEditor
      })))
    })), this._register(_f(r, ir.MOUSE_DOWN, l=>{
      if(this._clickHandler){
        const u=this._stickyScrollWidget.getLineNumberFromChildDomNode(l.target);
        u!==null&&(this._clickHandler(l,u),l.preventDefault(),l.stopPropagation());
        return
      }
    }))
  }
  _onContextMenu(e, t){
    const i=new yy(e, t);
    this._contextMenuService.showContextMenu({
      menuId:st.StickyScrollContext,getAnchor:()=>i
    })
  }
  _onMouseMoveOrKeyDown(e){
    if(!e.shiftKey||!this._mouseTarget||!wf(this._mouseTarget))return;
    const t=this._stickyScrollWidget.getLineIndexFromChildDomNode(this._mouseTarget);
    t===null||this._showEndForLine===t||(this._showEndForLine=t, this._renderStickyScroll())
  }
  _toggleFoldingRegionForLine(e){
    if(!this._foldingModel||e===null)return;
    const t=this._stickyScrollWidget.getRenderedStickyLine(e), i=t?.foldingIcon;
    if(!i)return;
    SQl(this._foldingModel, 1, [e]), i.isCollapsed=!i.isCollapsed;
    const r=(i.isCollapsed?this._editor.getTopForLineNumber(i.foldingEndLine):this._editor.getTopForLineNumber(i.foldingStartLine))-this._editor.getOption(68)*t.index+1;
    this._editor.setScrollTop(r), this._renderStickyScroll(e)
  }
  _readConfiguration(){
    const e=this._editor.getOption(120);
    if(e.enabled===!1){
      this._editor.removeOverlayWidget(this._stickyScrollWidget),this._resetState(),this._sessionStore.clear(),this._enabled=!1;
      return
    }
    else e.enabled&&!this._enabled&&(this._editor.addOverlayWidget(this._stickyScrollWidget), this._sessionStore.add(this._editor.onDidScrollChange(i=>{
      i.scrollTopChanged&&(this._showEndForLine=void 0,this._renderStickyScroll())
    })), this._sessionStore.add(this._editor.onDidLayoutChange(()=>this._onDidResize())), this._sessionStore.add(this._editor.onDidChangeModelTokens(i=>this._onTokensChange(i))), this._sessionStore.add(this._stickyLineCandidateProvider.onDidChangeStickyScroll(()=>{
      this._showEndForLine=void 0,this._renderStickyScroll()
    })), this._enabled=!0);
    this._editor.getOption(69).renderType===2&&this._sessionStore.add(this._editor.onDidChangeCursorPosition(()=>{
      this._showEndForLine=void 0,this._renderStickyScroll(0)
    }))
  }
  _readConfigurationChange(e){
    (e.hasChanged(120)||e.hasChanged(74)||e.hasChanged(68)||e.hasChanged(115)||e.hasChanged(69))&&this._readConfiguration(), (e.hasChanged(69)||e.hasChanged(45)||e.hasChanged(115))&&this._renderStickyScroll(0)
  }
  _needsUpdate(e){
    const t=this._stickyScrollWidget.getCurrentLines();
    for(const i of t)for(const r of e.ranges)if(i>=r.fromLineNumber&&i<=r.toLineNumber)return!0;
    return!1
  }
  _onTokensChange(e){
    this._needsUpdate(e)&&this._renderStickyScroll(0)
  }
  _onDidResize(){
    const t=this._editor.getLayoutInfo().height/this._editor.getOption(68);
    this._maxStickyLines=Math.round(t*.25), this._renderStickyScroll(0)
  }
  async _renderStickyScroll(e){
    const t=this._editor.getModel();
    if(!t||t.isTooLargeForTokenization()){
      this._resetState();
      return
    }
    const i=this._updateAndGetMinRebuildFromLine(e), r=this._stickyLineCandidateProvider.getVersionId();
    if(r===void 0||r===t.getVersionId())if(!this._focused)await this._updateState(i);
    else if(this._focusedStickyElementIndex===-1)await this._updateState(i), this._focusedStickyElementIndex=this._stickyScrollWidget.lineNumberCount-1, this._focusedStickyElementIndex!==-1&&this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex);
    else{
      const o=this._stickyScrollWidget.lineNumbers[this._focusedStickyElementIndex];
      await this._updateState(i),this._stickyScrollWidget.lineNumberCount===0?this._focusedStickyElementIndex=-1:(this._stickyScrollWidget.lineNumbers.includes(o)||(this._focusedStickyElementIndex=this._stickyScrollWidget.lineNumberCount-1),this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex))
    }
  }
  _updateAndGetMinRebuildFromLine(e){
    if(e!==void 0){
      const t=this._minRebuildFromLine!==void 0?this._minRebuildFromLine:1/0;
      this._minRebuildFromLine=Math.min(e,t)
    }
    return this._minRebuildFromLine
  }
  async _updateState(e){
    this._minRebuildFromLine=void 0, this._foldingModel=await AJ.get(this._editor)?.getFoldingModel()??void 0, this._widgetState=this.findScrollWidgetState();
    const t=this._widgetState.startLineNumbers.length>0;
    this._stickyScrollVisibleContextKey.set(t), this._stickyScrollWidget.setState(this._widgetState, this._foldingModel, e)
  }
  async _resetState(){
    this._minRebuildFromLine=void 0, this._foldingModel=void 0, this._widgetState=$gi.Empty, this._stickyScrollVisibleContextKey.set(!1), this._stickyScrollWidget.setState(void 0, void 0)
  }
  findScrollWidgetState(){
    if(!this._editor.hasModel())return $gi.Empty;
    const e=this._editor.getModel(), t=Math.min(this._maxStickyLines, this._editor.getOption(120).maxLineCount), i=this._editor.getScrollTop();
    let r=0;
    const s=[], o=[], a=this._editor.getVisibleRanges();
    if(a.length!==0){
      const l=new Cdn(a[0].startLineNumber,a[a.length-1].endLineNumber),u=this._stickyLineCandidateProvider.getCandidateStickyLinesIntersecting(l);
      for(const d of u){
        const m=d.startLineNumber,p=d.endLineNumber;
        if(e.isValidRange({
          startLineNumber:m,endLineNumber:p,startColumn:1,endColumn:1
        })&&p-m>0){
          const f=d.top,A=f+d.height,w=this._editor.getTopForLineNumber(m)-i,C=this._editor.getBottomForLineNumber(p)-i;
          if(f>w&&f<=C&&(s.push(m),o.push(p+1),A>C&&(r=C-A)),s.length===t)break
        }
      }
    }
    return this._endLineNumbers=o, new $gi(s, o, r, this._showEndForLine)
  }
  hijackOnClickItem(e){
    return this._clickHandler=e, {
      dispose:()=>{
        this._clickHandler=void 0
      }
    }
  }
  dispose(){
    super.dispose(), this._sessionStore.dispose()
  }
}, Kae=Ijl=__decorate([__param(1, kc), __param(2, $u), __param(3, ln), __param(4, JS), __param(5, ene), __param(6, wi)], Kae)
}
});
function Ggi(n){
  return n.map(e=>e===sV.Accept?pwg:Edn)
}
function nua(n){
  return n.map(e=>e===sV.Accept?gwg:kdn)
}
function VAe(n, e){
  let t;
  typeof n=="string"?t=Djl(n, e):t=n.map((r, s)=>Djl(r, e).read(s));
  const i=Djl(Wm, e);
  return t.map((r, s)=>r.makeOpaque(i.read(s)))
}
function Djl(n, e){
  return X2o({
    owner:{
      observeColor:n
    }, equalsFn:(t, i)=>t.equals(i)
  }, e.onDidColorThemeChange, ()=>{
    const t=e.getColorTheme().getColor(n);
    if(!t)throw new _m(`Missing color: ${n}`);
    return t
  })
}
var Sdn, Bjl, nkA, rwg, swg, owg, awg, ICt, cwg, lwg, Rjl, uwg, dwg, Pjl, hwg, mwg, kdn, Edn, pwg, gwg, DCt=