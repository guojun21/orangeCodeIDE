// Module: out-build/vs/editor/browser/view.js
// Offset: 1862200 (bundle byte offset)
// Size: 19953 bytes

ri(), sI(), dTc(), _s(), rt(), $vh(), TcA(), e3t(), IcA(), DcA(), j$(), fAh(), RcA(), PcA(), NcA(), FcA(), OcA(), qTc(), qcA(), RAh(), QcA(), zcA(), OAh(), YcA(), nlA(), rlA(), slA(), olA(), clA(), ulA(), plA(), blA(), AlA(), wlA(), tl(), ts(), db(), xw(), Gft(), _lA(), SlA(), Wt(), Io(), ZOn(), HlA(), WlA(), KlA(), YlA(), XlA(), yn(), _3o=class extends qVe{
  constructor(e, t, i, r, s, o, a, l, u){
    super(), this._instantiationService=u, this._shouldRecomputeGlyphMarginLanes=!1, this._ownerID=t, this._widgetFocusTracker=this._register(new owh(e, l)), this._register(this._widgetFocusTracker.onChange(()=>{
      this._context.viewModel.setHasWidgetFocus(this._widgetFocusTracker.hasFocus())
    })), this._selections=[new Vl(1, 1, 1, 1)], this._renderAnimationFrame=null, this._overflowGuardContainer=mw(document.createElement("div")), tve.write(this._overflowGuardContainer, 3), this._overflowGuardContainer.setClassName("overflow-guard"), this._viewController=new dAh(r, o, a, i), this._context=new Ayh(r, s, o), this._context.addEventHandler(this), this._viewParts=[], this._experimentalEditContextEnabled=this._context.configuration.options.get(157), this._accessibilitySupport=this._context.configuration.options.get(2), this._editContext=this._instantiateEditContext(), this._viewParts.push(this._editContext), this._linesContent=mw(document.createElement("div")), this._linesContent.setClassName("lines-content monaco-editor-background"), this._linesContent.setPosition("absolute"), this.domNode=mw(document.createElement("div")), this.domNode.setClassName(this._getEditorClassName()), this.domNode.setAttribute("role", "code"), this._context.configuration.options.get(39)==="on"&&(this._viewGpuContext=this._instantiationService.createInstance(JH, this._context)), this._scrollbar=new CAh(this._context, this._linesContent, this.domNode, this._overflowGuardContainer), this._viewParts.push(this._scrollbar), this._viewLines=new MAh(this._context, this._viewGpuContext, this._linesContent), this._viewGpuContext&&(this._viewLinesGpu=this._instantiationService.createInstance(v3o, this._context, this._viewGpuContext)), this._viewZones=new gyh(this._context), this._viewParts.push(this._viewZones);
    const d=new iyh(this._context);
    this._viewParts.push(d);
    const m=new lyh(this._context);
    this._viewParts.push(m);
    const p=new pAh(this._context);
    this._viewParts.push(p), p.addDynamicOverlay(new yAh(this._context)), p.addDynamicOverlay(new myh(this._context)), p.addDynamicOverlay(new BAh(this._context)), p.addDynamicOverlay(new _Ah(this._context)), p.addDynamicOverlay(new fyh(this._context));
    const g=new gAh(this._context);
    this._viewParts.push(g), g.addDynamicOverlay(new wAh(this._context)), g.addDynamicOverlay(new UAh(this._context)), g.addDynamicOverlay(new FAh(this._context)), g.addDynamicOverlay(new HTc(this._context)), this._viewGpuContext&&g.addDynamicOverlay(new rwh(this._context, this._viewGpuContext)), this._glyphMarginWidgets=new EAh(this._context), this._viewParts.push(this._glyphMarginWidgets);
    const f=new GTc(this._context);
    f.getDomNode().appendChild(this._viewZones.marginDomNode), f.getDomNode().appendChild(g.getDomNode()), f.getDomNode().appendChild(this._glyphMarginWidgets.domNode), this._viewParts.push(f), this._contentWidgets=new vAh(this._context, this.domNode), this._viewParts.push(this._contentWidgets), this._viewCursors=new pyh(this._context), this._viewParts.push(this._viewCursors), this._overlayWidgets=new ZAh(this._context, this.domNode), this._viewParts.push(this._overlayWidgets);
    const A=this._viewGpuContext?new iwh(this._context, this._viewGpuContext):new cyh(this._context);
    this._viewParts.push(A);
    const w=new bAh(this._context);
    this._viewParts.push(w);
    const C=new KAh(this._context);
    if(this._viewParts.push(C), d){
      const x=this._scrollbar.getOverviewRulerLayoutInfo();
      x.parent.insertBefore(d.getDomNode(),x.insertBefore)
    }
    this._linesContent.appendChild(p.getDomNode()), "domNode"in A&&this._linesContent.appendChild(A.domNode), this._linesContent.appendChild(this._viewZones.domNode), this._linesContent.appendChild(this._viewLines.getDomNode()), this._linesContent.appendChild(this._contentWidgets.domNode), this._linesContent.appendChild(this._viewCursors.getDomNode()), this._overflowGuardContainer.appendChild(f.getDomNode()), this._overflowGuardContainer.appendChild(this._scrollbar.getDomNode()), this._viewGpuContext&&this._overflowGuardContainer.appendChild(this._viewGpuContext.canvas), this._overflowGuardContainer.appendChild(m.getDomNode()), this._overflowGuardContainer.appendChild(this._overlayWidgets.getDomNode()), this._overflowGuardContainer.appendChild(C.getDomNode()), this._overflowGuardContainer.appendChild(w.domNode), this.domNode.appendChild(this._overflowGuardContainer), l?(l.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode.domNode), l.appendChild(this._overlayWidgets.overflowingOverlayWidgetsDomNode.domNode)):(this.domNode.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode), this.domNode.appendChild(this._overlayWidgets.overflowingOverlayWidgetsDomNode)), this._applyLayout(), this._pointerHandler=this._register(new uAh(this._context, this._viewController, this._createPointerHandlerHelper()))
  }
  _instantiateEditContext(){
    return this._context.configuration.options.get(157)?this._instantiationService.createInstance(t3n, this._ownerID, this._context, this._overflowGuardContainer, this._viewController, this._createTextAreaHandlerHelper()):this._instantiationService.createInstance(y3o, this._context, this._overflowGuardContainer, this._viewController, this._createTextAreaHandlerHelper())
  }
  _updateEditContext(){
    const e=this._context.configuration.options.get(157), t=this._context.configuration.options.get(2);
    if(this._experimentalEditContextEnabled===e&&this._accessibilitySupport===t)return;
    this._experimentalEditContextEnabled=e, this._accessibilitySupport=t;
    const i=this._editContext.isFocused(), r=this._viewParts.indexOf(this._editContext);
    this._editContext.dispose(), this._editContext=this._instantiateEditContext(), i&&this._editContext.focus(), r!==-1&&this._viewParts.splice(r, 1, this._editContext)
  }
  _computeGlyphMarginLanes(){
    const e=this._context.viewModel.model, t=this._context.viewModel.glyphLanes;
    let i=[], r=0;
    i=i.concat(e.getAllMarginDecorations().map(s=>{
      const o=s.options.glyphMargin?.position??G$.Center;
      return r=Math.max(r,s.range.endLineNumber),{
        range:s.range,lane:o,persist:s.options.glyphMargin?.persistLane
      }
    })), i=i.concat(this._glyphMarginWidgets.getWidgets().map(s=>{
      const o=e.validateRange(s.preference.range);
      return r=Math.max(r,o.endLineNumber),{
        range:o,lane:s.preference.lane
      }
    })), i.sort((s, o)=>Zt.compareRangesUsingStarts(s.range, o.range)), t.reset(r);
    for(const s of i)t.push(s.lane, s.range, s.persist);
    return t
  }
  _createPointerHandlerHelper(){
    return{
      viewDomNode:this.domNode.domNode,linesContentDomNode:this._linesContent.domNode,viewLinesDomNode:this._viewLines.getDomNode().domNode,viewLinesGpu:this._viewLinesGpu,focusTextArea:()=>{
        this.focus()
      },dispatchTextAreaEvent:e=>{
        this._editContext.domNode.domNode.dispatchEvent(e)
      },getLastRenderData:()=>{
        const e=this._viewCursors.getLastRenderData()||[],t=this._editContext.getLastRenderData();
        return new Mvh(e,t)
      },renderNow:()=>{
        this.render(!0,!1)
      },shouldSuppressMouseDownOnViewZone:e=>this._viewZones.shouldSuppressMouseDownOnViewZone(e),shouldSuppressMouseDownOnWidget:e=>this._contentWidgets.shouldSuppressMouseDownOnWidget(e),getPositionFromDOMInfo:(e,t)=>(this._flushAccumulatedAndRenderNow(),this._viewLines.getPositionFromDOMInfo(e,t)),visibleRangeForPosition:(e,t)=>{
        this._flushAccumulatedAndRenderNow();
        const i=new ar(e,t);
        return this._viewLines.visibleRangeForPosition(i)??this._viewLinesGpu?.visibleRangeForPosition(i)??null
      },getLineWidth:e=>{
        if(this._flushAccumulatedAndRenderNow(),this._viewLinesGpu){
          const t=this._viewLinesGpu.getLineWidth(e);
          if(t!==void 0)return t
        }
        return this._viewLines.getLineWidth(e)
      }
    }
  }
  _createTextAreaHandlerHelper(){
    return{
      visibleRangeForPosition:e=>(this._flushAccumulatedAndRenderNow(),this._viewLines.visibleRangeForPosition(e)),linesVisibleRangesForRange:(e,t)=>(this._flushAccumulatedAndRenderNow(),this._viewLines.linesVisibleRangesForRange(e,t))
    }
  }
  _applyLayout(){
    const t=this._context.configuration.options.get(151);
    this.domNode.setWidth(t.width), this.domNode.setHeight(t.height), this._overflowGuardContainer.setWidth(t.width), this._overflowGuardContainer.setHeight(t.height), this._linesContent.setWidth(16777216), this._linesContent.setHeight(16777216)
  }
  _getEditorClassName(){
    const e=this._editContext.isFocused()?" focused":"";
    return this._context.configuration.options.get(148)+" "+Q4n(this._context.theme.type)+e
  }
  handleEvents(e){
    super.handleEvents(e), this._scheduleRender()
  }
  onConfigurationChanged(e){
    return this.domNode.setClassName(this._getEditorClassName()), this._updateEditContext(), this._applyLayout(), !1
  }
  onCursorStateChanged(e){
    return this._selections=e.selections, !1
  }
  onDecorationsChanged(e){
    return e.affectsGlyphMargin&&(this._shouldRecomputeGlyphMarginLanes=!0), !1
  }
  onFocusChanged(e){
    return this.domNode.setClassName(this._getEditorClassName()), !1
  }
  onThemeChanged(e){
    return this._context.theme.update(e.theme), this.domNode.setClassName(this._getEditorClassName()), !1
  }
  dispose(){
    this._renderAnimationFrame!==null&&(this._renderAnimationFrame.dispose(), this._renderAnimationFrame=null), this._contentWidgets.overflowingContentWidgetsDomNode.domNode.remove(), this._overlayWidgets.overflowingOverlayWidgetsDomNode.domNode.remove(), this._context.removeEventHandler(this), this._viewGpuContext?.dispose(), this._viewLines.dispose(), this._viewLinesGpu?.dispose();
    for(const e of this._viewParts)e.dispose();
    super.dispose()
  }
  _scheduleRender(){
    if(this._store.isDisposed)throw new _m;
    if(this._renderAnimationFrame===null){
      this._editContext instanceof t3n&&this._editContext.setEditContextOnDomNode();
      const e=this._createCoordinatedRendering();
      this._renderAnimationFrame=swh.INSTANCE.scheduleCoordinatedRendering({
        window:As(this.domNode?.domNode),prepareRenderText:()=>{
          if(this._store.isDisposed)throw new _m;
          try{
            return e.prepareRenderText()
          }
          finally{
            this._renderAnimationFrame=null
          }
        },renderText:()=>{
          if(this._store.isDisposed)throw new _m;
          return e.renderText()
        },prepareRender:(t,i)=>{
          if(this._store.isDisposed)throw new _m;
          return e.prepareRender(t,i)
        },render:(t,i)=>{
          if(this._store.isDisposed)throw new _m;
          return e.render(t,i)
        }
      })
    }
  }
  _flushAccumulatedAndRenderNow(){
    const e=this._createCoordinatedRendering();
    jVe(()=>e.prepareRenderText());
    const t=jVe(()=>e.renderText());
    if(t){
      const[i,r]=t;
      jVe(()=>e.prepareRender(i,r)),jVe(()=>e.render(i,r))
    }
  }
  _getViewPartsToRender(){
    const e=[];
    let t=0;
    for(const i of this._viewParts)i.shouldRender()&&(e[t++]=i);
    return e
  }
  _createCoordinatedRendering(){
    return{
      prepareRenderText:()=>{
        if(this._shouldRecomputeGlyphMarginLanes){
          this._shouldRecomputeGlyphMarginLanes=!1;
          const e=this._computeGlyphMarginLanes();
          this._context.configuration.setGlyphMarginDecorationLaneCount(e.requiredLanes)
        }
        d9e.onRenderStart()
      },renderText:()=>{
        if(!this.domNode?.domNode.isConnected)return null;
        let e=this._getViewPartsToRender();
        if(!this._viewLines.shouldRender()&&e.length===0)return null;
        const t=this._context.viewLayout.getLinesViewportData();
        this._context.viewModel.setViewport(t.startLineNumber,t.endLineNumber,t.centeredLineNumber);
        const i=new byh(this._selections,t,this._context.viewLayout.getWhitespaceViewportData(),this._context.viewModel);
        return this._contentWidgets.shouldRender()&&this._contentWidgets.onBeforeRender(i),this._viewLines.shouldRender()&&(this._viewLines.renderText(i),this._viewLines.onDidRender(),e=this._getViewPartsToRender()),this._viewLinesGpu?.shouldRender()&&(this._viewLinesGpu.renderText(i),this._viewLinesGpu.onDidRender()),[e,new wvh(this._context.viewLayout,i,this._viewLines,this._viewLinesGpu)]
      },prepareRender:(e,t)=>{
        for(const i of e)i.prepareRender(t)
      },render:(e,t)=>{
        for(const i of e)i.render(t),i.onDidRender()
      }
    }
  }
  delegateVerticalScrollbarPointerDown(e){
    this._scrollbar.delegateVerticalScrollbarPointerDown(e)
  }
  delegateScrollFromMouseWheelEvent(e){
    this._scrollbar.delegateScrollFromMouseWheelEvent(e)
  }
  restoreState(e){
    this._context.viewModel.viewLayout.setScrollPosition({
      scrollTop:e.scrollTop,scrollLeft:e.scrollLeft
    }, 1), this._context.viewModel.visibleLinesStabilized()
  }
  getOffsetForColumn(e, t){
    const i=this._context.viewModel.model.validatePosition({
      lineNumber:e,column:t
    }), r=this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(i);
    this._flushAccumulatedAndRenderNow();
    const s=this._viewLines.visibleRangeForPosition(new ar(r.lineNumber, r.column));
    return s?s.left:-1
  }
  getTargetAtClientPoint(e, t){
    const i=this._pointerHandler.getTargetAtClientPoint(e, t);
    return i?MTc.convertViewToModelMouseTarget(i, this._context.viewModel.coordinatesConverter):null
  }
  createOverviewRuler(e){
    return new ayh(this._context, e)
  }
  change(e){
    this._viewZones.changeViewZones(e), this._scheduleRender()
  }
  render(e, t){
    if(t){
      this._viewLines.forceShouldRender();
      for(const i of this._viewParts)i.forceShouldRender()
    }
    e?this._flushAccumulatedAndRenderNow():this._scheduleRender()
  }
  writeScreenReaderContent(e){
    this._editContext.writeScreenReaderContent(e)
  }
  focus(){
    this._editContext.focus()
  }
  isFocused(){
    return this._editContext.isFocused()
  }
  isWidgetFocused(){
    return this._widgetFocusTracker.hasFocus()
  }
  refreshFocusState(){
    this._editContext.refreshFocusState(), this._widgetFocusTracker.refreshState()
  }
  setAriaOptions(e){
    this._editContext.setAriaOptions(e)
  }
  addContentWidget(e){
    this._contentWidgets.addWidget(e.widget), this.layoutContentWidget(e), this._scheduleRender()
  }
  layoutContentWidget(e){
    this._contentWidgets.setWidgetPosition(e.widget, e.position?.position??null, e.position?.secondaryPosition??null, e.position?.preference??null, e.position?.positionAffinity??null), this._scheduleRender()
  }
  removeContentWidget(e){
    this._contentWidgets.removeWidget(e.widget), this._scheduleRender()
  }
  addOverlayWidget(e){
    this._overlayWidgets.addWidget(e.widget), this.layoutOverlayWidget(e), this._scheduleRender()
  }
  layoutOverlayWidget(e){
    this._overlayWidgets.setWidgetPosition(e.widget, e.position)&&this._scheduleRender()
  }
  removeOverlayWidget(e){
    this._overlayWidgets.removeWidget(e.widget), this._scheduleRender()
  }
  addGlyphMarginWidget(e){
    this._glyphMarginWidgets.addWidget(e.widget), this._shouldRecomputeGlyphMarginLanes=!0, this._scheduleRender()
  }
  layoutGlyphMarginWidget(e){
    const t=e.position;
    this._glyphMarginWidgets.setWidgetPosition(e.widget, t)&&(this._shouldRecomputeGlyphMarginLanes=!0, this._scheduleRender())
  }
  removeGlyphMarginWidget(e){
    this._glyphMarginWidgets.removeWidget(e.widget), this._shouldRecomputeGlyphMarginLanes=!0, this._scheduleRender()
  }
}, _3o=__decorate([__param(8, ln)], _3o), swh=class SGb{
  static{
    this.INSTANCE=new SGb
  }
  constructor(){
    this._coordinatedRenderings=[], this._animationFrameRunners=new Map
  }
  scheduleCoordinatedRendering(e){
    return this._coordinatedRenderings.push(e), this._scheduleRender(e.window), {
      dispose:()=>{
        const t=this._coordinatedRenderings.indexOf(e);
        if(t!==-1&&(this._coordinatedRenderings.splice(t,1),this._coordinatedRenderings.length===0)){
          for(const[i,r]of this._animationFrameRunners)r.dispose();
          this._animationFrameRunners.clear()
        }
      }
    }
  }
  _scheduleRender(e){
    if(!this._animationFrameRunners.has(e)){
      const t=()=>{
        this._animationFrameRunners.delete(e),this._onRenderScheduled()
      };
      this._animationFrameRunners.set(e,I5e(e,t,100))
    }
  }
  _onRenderScheduled(){
    const e=this._coordinatedRenderings.slice(0);
    this._coordinatedRenderings=[];
    for(const i of e)jVe(()=>i.prepareRenderText());
    const t=[];
    for(let i=0, r=e.length;
    i<r;
    i++){
      const s=e[i];
      t[i]=jVe(()=>s.renderText())
    }
    for(let i=0, r=e.length;
    i<r;
    i++){
      const s=e[i],o=t[i];
      if(!o)continue;
      const[a,l]=o;
      jVe(()=>s.prepareRender(a,l))
    }
    for(let i=0, r=e.length;
    i<r;
    i++){
      const s=e[i],o=t[i];
      if(!o)continue;
      const[a,l]=o;
      jVe(()=>s.render(a,l))
    }
  }
}, owh=class extends at{
  constructor(n, e){
    super(), this._onChange=this._register(new Qe), this.onChange=this._onChange.event, this._hadFocus=void 0, this._hasDomElementFocus=!1, this._domFocusTracker=this._register(CC(n)), this._overflowWidgetsDomNodeHasFocus=!1, this._register(this._domFocusTracker.onDidFocus(()=>{
      this._hasDomElementFocus=!0,this._update()
    })), this._register(this._domFocusTracker.onDidBlur(()=>{
      this._hasDomElementFocus=!1,this._update()
    })), e&&(this._overflowWidgetsDomNode=this._register(CC(e)), this._register(this._overflowWidgetsDomNode.onDidFocus(()=>{
      this._overflowWidgetsDomNodeHasFocus=!0,this._update()
    })), this._register(this._overflowWidgetsDomNode.onDidBlur(()=>{
      this._overflowWidgetsDomNodeHasFocus=!1,this._update()
    })))
  }
  _update(){
    const n=this._hasDomElementFocus||this._overflowWidgetsDomNodeHasFocus;
    this._hadFocus!==n&&(this._hadFocus=n, this._onChange.fire(void 0))
  }
  hasFocus(){
    return this._hadFocus??!1
  }
  refreshState(){
    this._domFocusTracker.refreshState(), this._overflowWidgetsDomNode?.refreshState?.()
  }
}
}
});
function tuA(n, e, t, i, r, s, o, a){
  function l($){
    const H=a[$];
    if(H){
      const W=o9e.applyInjectedText(e[$],H),z=H.map(j=>j.options),Y=H.map(j=>j.column-1);
      return new QOt(Y,z,[W.length],[],0)
    }
    else return null
  }
  if(r===-1){
    const $=[];
    for(let H=0, W=e.length;
    H<W;
    H++)$[H]=l(H);
    return $
  }
  const u=Math.round(r*t.typicalHalfwidthCharacterWidth), m=Math.round(i*(s===3?2:s===2?1:0)), p=Math.ceil(t.spaceWidth*m), g=document.createElement("div");
  bF(g, t);
  const f=new Gbe(1e4), A=[], w=[], C=[], x=[], I=[];
  for(let $=0;
  $<e.length;
  $++){
    const H=o9e.applyInjectedText(e[$], a[$]);
    let W=0, z=0, Y=u;
    if(s!==0)if(W=TH(H), W===-1)W=0;
    else{
      for(let re=0;
      re<W;
      re++){
        const ne=H.charCodeAt(re)===9?i-z%i:1;
        z+=ne
      }
      const ee=Math.ceil(t.spaceWidth*z);
      ee+t.typicalFullwidthCharacterWidth>u?(W=0,z=0):Y=u-ee
    }
    const j=H.substr(W), X=nuA(j, z, i, Y, f, p);
    A[$]=W, w[$]=z, C[$]=j, x[$]=X[0], I[$]=X[1]
  }
  const B=f.build(), R=awh?.createHTML(B)??B;
  g.innerHTML=R, g.style.position="absolute", g.style.top="10000", o==="keepAll"?(g.style.wordBreak="keep-all", g.style.overflowWrap="anywhere"):(g.style.wordBreak="inherit", g.style.overflowWrap="break-word"), n.document.body.appendChild(g);
  const N=document.createRange(), M=Array.prototype.slice.call(g.children, 0), O=[];
  for(let $=0;
  $<e.length;
  $++){
    const H=M[$], W=iuA(N, H, C[$], x[$]);
    if(W===null){
      O[$]=l($);
      continue
    }
    const z=A[$], Y=w[$]+m, j=I[$], X=[];
    for(let pe=0, le=W.length;
    pe<le;
    pe++)X[pe]=j[W[pe]];
    if(z!==0)for(let pe=0, le=W.length;
    pe<le;
    pe++)W[pe]+=z;
    let ee, re;
    const ne=a[$];
    ne?(ee=ne.map(pe=>pe.options), re=ne.map(pe=>pe.column-1)):(ee=null, re=null), O[$]=new QOt(re, ee, W, X, Y)
  }
  return g.remove(), O
}
function nuA(n, e, t, i, r, s){
  if(s!==0){
    const p=String(s);
    r.appendString('<div style="text-indent: -'), r.appendString(p), r.appendString("px; padding-left: "), r.appendString(p), r.appendString("px; box-sizing: border-box; width:")
  }
  else r.appendString('<div style="width:');
  r.appendString(String(i)), r.appendString('px;">');
  const o=n.length;
  let a=e, l=0;
  const u=[], d=[];
  let m=0<o?n.charCodeAt(0):0;
  r.appendString("<span>");
  for(let p=0;
  p<o;
  p++){
    p!==0&&p%16384===0&&r.appendString("</span><span>"), u[p]=l, d[p]=a;
    const g=m;
    m=p+1<o?n.charCodeAt(p+1):0;
    let f=1, A=1;
    switch(g){
      case 9:f=t-a%t,A=f;
      for(let w=1;
      w<=f;
      w++)w<f?r.appendCharCode(160):r.appendASCIICharCode(32);
      break;
      case 32:m===32?r.appendCharCode(160):r.appendASCIICharCode(32);
      break;
      case 60:r.appendString("&lt;");
      break;
      case 62:r.appendString("&gt;");
      break;
      case 38:r.appendString("&amp;");
      break;
      case 0:r.appendString("&#00;");
      break;
      case 65279:case 8232:case 8233:case 133:r.appendCharCode(65533);
      break;
      default:Ize(g)&&A++,g<32?r.appendCharCode(9216+g):r.appendCharCode(g)
    }
    l+=f, a+=A
  }
  return r.appendString("</span>"), u[n.length]=l, d[n.length]=a, r.appendString("</div>"), [u, d]
}
function iuA(n, e, t, i){
  if(t.length<=1)return null;
  const r=Array.prototype.slice.call(e.children, 0), s=[];
  try{
    wIc(n, r, i, 0, null, t.length-1, null, s)
  }
  catch(o){
    return console.log(o), null
  }
  return s.length===0?null:(s.push(t.length), s)
}
function wIc(n, e, t, i, r, s, o, a){
  if(i===s||(r=r||_Ic(n, e, t[i], t[i+1]), o=o||_Ic(n, e, t[s], t[s+1]), Math.abs(r[0].top-o[0].top)<=.1))return;
  if(i+1===s){
    a.push(s);
    return
  }
  const l=i+(s-i)/2|0, u=_Ic(n, e, t[l], t[l+1]);
  wIc(n, e, t, i, r, l, u, a), wIc(n, e, t, l, u, s, o, a)
}
function _Ic(n, e, t, i){
  return n.setStart(e[t/16384|0].firstChild, t%16384), n.setEnd(e[i/16384|0].firstChild, i%16384), n.getClientRects()
}
var awh, cwh, lwh, ruA=