// Module: out-build/vs/editor/browser/widget/diffEditor/diffEditorWidget.js
// Offset: 2347523 (bundle byte offset)
// Size: 16579 bytes

ri(), GD(), _s(), yn(), v9e(), rt(), Uc(), QS(), si(), Wt(), E_(), AF(), Xg(), tl(), ts(), kVe(), Qh(), Cu(), Oh(), A9e(), VI(), EDc(), VdA(), KdA(), DCh(), k5o(), ehA(), LCh(), x3n(), dhA(), eSh(), _Ch(), kCh(), mhA(), phA(), Gde(), JB=class extends BCh{
  static{
    this.ENTIRE_DIFF_OVERVIEW_WIDTH=bbt.ENTIRE_DIFF_OVERVIEW_WIDTH
  }
  get onDidContentSizeChange(){
    return this._editors.onDidContentSizeChange
  }
  get collapseUnchangedRegions(){
    return this._options.hideUnchangedRegions.get()
  }
  getViewModel(){
    return this._diffModel.get()
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this._domElement=e, this._parentContextKeyService=r, this._parentInstantiationService=s, this._codeEditorService=o, this._accessibilitySignalService=a, this._editorProgressService=l, this.elements=kl("div.monaco-diff-editor.side-by-side", {
      style:{
        position:"relative",height:"100%"
      }
    }, [kl("div.editor.original@original", {
      style:{
        position:"absolute",height:"100%"
      }
    }), kl("div.editor.modified@modified", {
      style:{
        position:"absolute",height:"100%"
      }
    }), kl("div.accessibleDiffViewer@accessibleDiffViewer", {
      style:{
        position:"absolute",height:"100%"
      }
    })]), this._diffModelSrc=this._register(m4t(this, void 0)), this._diffModel=Ro(this, B=>this._diffModelSrc.read(B)?.object), this.onDidChangeModel=In.fromObservableLight(this._diffModel), this._boundarySashes=Ua(this, void 0), this.custom=!1, this._accessibleDiffViewerShouldBeVisible=Ua(this, !1), this._accessibleDiffViewerVisible=Ro(this, B=>this._options.onlyShowAccessibleDiffViewer.read(B)?!0:this._accessibleDiffViewerShouldBeVisible.read(B)), this._movedBlocksLinesPart=Ua(this, void 0), this._layoutInfo=Ro(this, B=>{
      const R=this._rootSizeObserver.width.read(B),N=this._rootSizeObserver.height.read(B);
      this._rootSizeObserver.automaticLayout?this.elements.root.style.height="100%":this.elements.root.style.height=N+"px";
      const M=this._sash.read(B),O=this._gutter.read(B),$=O?.width.read(B)??0,H=this._overviewRulerPart.read(B)?.width??0;
      let W,z,Y,j,X;
      if(!!M){
        const re=M.sashLeft.read(B),ne=this._movedBlocksLinesPart.read(B)?.width.read(B)??0;
        W=0,z=re-$-ne,X=re-$,Y=re,j=R-Y-H
      }
      else{
        X=0;
        const re=this._options.inlineViewHideOriginalLineNumbers.read(B);
        W=$,re||this._isInAgentLayout?z=0:z=Math.max(5,this._editors.originalObs.layoutInfoDecorationsLeft.read(B)),this._isInAgentLayout?(Y=0,j=R-H):(Y=$+z,j=R-Y-H)
      }
      return this.elements.original.style.left=W+"px",this.elements.original.style.width=z+"px",this._editors.original.layout({
        width:z,height:N
      },!0),O?.layout(X),this.elements.modified.style.left=Y+"px",this.elements.modified.style.width=j+"px",this._setCustomElementStyles(),this._editors.modified.layout({
        width:j,height:N
      },!0),{
        modifiedEditor:this._editors.modified.getLayoutInfo(),originalEditor:this._editors.original.getLayoutInfo()
      }
    }), this._diffValue=this._diffModel.map((B, R)=>B?.diff.read(R)), this.onDidUpdateDiff=In.fromObservableLight(this._diffValue), this._contextKeyService=this._register(this._parentContextKeyService.createScoped(this._domElement)), this._instantiationService=this._register(this._parentInstantiationService.createChild(new EA([wi, this._contextKeyService]))), this._codeEditorService.willCreateDiffEditor(), this._isInAgentLayout=e.closest(".agent-layout")!==null, this._contextKeyService.createKey("isInDiffEditor", !0), this._domElement.appendChild(this.elements.root), this._register($i(()=>this.elements.root.remove())), this._rootSizeObserver=this._register(new wDc(this.elements.root, t.dimension)), this._rootSizeObserver.setAutomaticLayout(t.automaticLayout??!1), this._options=this._instantiationService.createInstance(B3n, t), this._register(Oc(B=>{
      this._options.setWidth(this._rootSizeObserver.width.read(B))
    })), this._contextKeyService.createKey(Ci.isEmbeddedDiffEditor.key, !1), this._register(eM(Ci.isEmbeddedDiffEditor, this._contextKeyService, B=>this._options.isInEmbeddedEditor.read(B))), this._register(eM(Ci.comparingMovedCode, this._contextKeyService, B=>!!this._diffModel.read(B)?.movedTextToCompare.read(B))), this._register(eM(Ci.diffEditorRenderSideBySideInlineBreakpointReached, this._contextKeyService, B=>this._options.couldShowInlineViewBecauseOfSize.read(B))), this._register(eM(Ci.diffEditorInlineMode, this._contextKeyService, B=>!this._options.renderSideBySide.read(B))), this._register(eM(Ci.hasChanges, this._contextKeyService, B=>(this._diffModel.read(B)?.diff.read(B)?.mappings.length??0)>0)), this._editors=this._register(this._instantiationService.createInstance(E5o, this.elements.original, this.elements.modified, this._options, i, (B, R, N, M)=>this._createInnerEditor(B, R, N, M))), this._register(eM(Ci.diffEditorOriginalWritable, this._contextKeyService, B=>this._options.originalEditable.read(B))), this._register(eM(Ci.diffEditorModifiedWritable, this._contextKeyService, B=>!this._options.readOnly.read(B))), this._register(eM(Ci.diffEditorOriginalUri, this._contextKeyService, B=>this._diffModel.read(B)?.model.original.uri.toString()??"")), this._register(eM(Ci.diffEditorModifiedUri, this._contextKeyService, B=>this._diffModel.read(B)?.model.modified.uri.toString()??"")), this._overviewRulerPart=wde(this, B=>this._options.renderOverviewRuler.read(B)?this._instantiationService.createInstance($de(bbt, B), this._editors, this.elements.root, this._diffModel, this._rootSizeObserver.width, this._rootSizeObserver.height, this._layoutInfo.map(R=>R.modifiedEditor)):void 0).recomputeInitiallyAndOnChange(this._store);
    const u={
      height:this._rootSizeObserver.height,width:this._rootSizeObserver.width.map((B,R)=>B-(this._overviewRulerPart.read(R)?.width??0))
    };
    this._sashLayout=new ICh(this._options, u), this._sash=wde(this, B=>{
      const R=this._options.renderSideBySide.read(B);
      return this.elements.root.classList.toggle("side-by-side",R),R?new jDc(this.elements.root,u,this._options.enableSplitViewResizing,this._boundarySashes,this._sashLayout.sashLeft,()=>this._sashLayout.resetSash()):void 0
    }).recomputeInitiallyAndOnChange(this._store);
    const d=wde(this, B=>this._instantiationService.createInstance($de(F3n, B), this._editors, this._diffModel, this._options)).recomputeInitiallyAndOnChange(this._store);
    wde(this, B=>this._instantiationService.createInstance($de(CCh, B), this._editors, this._diffModel, this._options, this)).recomputeInitiallyAndOnChange(this._store);
    const m=new Set, p=new Set;
    let g=!1;
    const f=wde(this, B=>this._instantiationService.createInstance($de(S5o, B), As(this._domElement), this._editors, this._diffModel, this._options, this, ()=>g||d.get().isUpdatingHiddenAreas, m, p)).recomputeInitiallyAndOnChange(this._store), A=Ro(this, B=>{
      const R=f.read(B).viewZones.read(B).orig,N=d.read(B).viewZones.read(B).origViewZones;
      return R.concat(N)
    }), w=Ro(this, B=>{
      const R=f.read(B).viewZones.read(B).mod,N=d.read(B).viewZones.read(B).modViewZones;
      return R.concat(N)
    });
    this._register(n5o(this._editors.original, A, B=>{
      g=B
    }, m));
    let C;
    this._register(n5o(this._editors.modified, w, B=>{
      g=B,g?C=$Se.capture(this._editors.modified):(C?.restore(this._editors.modified),C=void 0)
    }, p)), this._accessibleDiffViewer=wde(this, B=>this._instantiationService.createInstance($de(yRe, B), this.elements.accessibleDiffViewer, this._accessibleDiffViewerVisible, (R, N)=>this._accessibleDiffViewerShouldBeVisible.set(R, N), this._options.onlyShowAccessibleDiffViewer.map(R=>!R), this._rootSizeObserver.width, this._rootSizeObserver.height, this._diffModel.map((R, N)=>R?.diff.read(N)?.mappings.map(M=>M.lineRangeMapping)), new Q0h(this._editors))).recomputeInitiallyAndOnChange(this._store);
    const x=this._accessibleDiffViewerVisible.map(B=>B?"hidden":"visible");
    this._register(aKe(this.elements.modified, {
      visibility:x
    })), this._register(aKe(this.elements.original, {
      visibility:x
    })), this._createDiffEditorContributions(), this._codeEditorService.addDiffEditor(this), this._gutter=wde(this, B=>this._options.shouldRenderGutterMenu.read(B)?this._instantiationService.createInstance($de(U5o, B), this.elements.root, this._diffModel, this._editors, this._options, this._sashLayout, this._boundarySashes):void 0), this._register($gt(this._layoutInfo)), wde(this, B=>new($de(T3n, B))(this.elements.root, this._diffModel, this._layoutInfo.map(R=>R.originalEditor), this._layoutInfo.map(R=>R.modifiedEditor), this._editors)).recomputeInitiallyAndOnChange(this._store, B=>{
      this._movedBlocksLinesPart.set(B,void 0)
    }), this._register(In.runAndSubscribe(this._editors.modified.onDidChangeCursorPosition, B=>this._handleCursorPositionChange(B, !0))), this._register(In.runAndSubscribe(this._editors.original.onDidChangeCursorPosition, B=>this._handleCursorPositionChange(B, !1)));
    const I=this._diffModel.map(this, (B, R)=>{
      if(B)return B.diff.read(R)===void 0&&!B.isDiffUpToDate.read(R)
    });
    this._register(M0((B, R)=>{
      if(I.read(B)===!0){
        const N=this._editorProgressService.show(!0,1e3);
        R.add($i(()=>N.done()))
      }
    })), this._setCustomElementStyles(), this._register(M0((B, R)=>{
      R.add(new($de(tSh,B))(this._editors,this._diffModel,this._options,this))
    })), this._register(M0((B, R)=>{
      const N=this._diffModel.read(B);
      if(N)for(const M of[N.model.original,N.model.modified])R.add(M.onWillDispose(O=>{
        Gc(new _m("TextModel got disposed before DiffEditorWidget model got reset")),this.setModel(null)
      }))
    })), this._register(Oc(B=>{
      this._options.setModel(this._diffModel.read(B))
    }))
  }
  getViewWidth(){
    return this._rootSizeObserver.width.get()
  }
  getContentHeight(){
    return this._editors.modified.getContentHeight()
  }
  _createInnerEditor(e, t, i, r){
    return e.createInstance(WS, t, i, r)
  }
  _setCustomElementStyles(){
    if(this.custom){
      this.elements.modified.style.left="0px";
      const e=this._domElement.querySelectorAll(".line-delete");
      for(const t of e){
        const i=t;
        i.style.left="-2.5px",i.style.lineHeight="16px"
      }
      this.getOriginalEditor().updateOptions({
        scrollbar:{
          vertical:"hidden",verticalScrollbarSize:0,horizontal:"hidden",handleMouseWheel:!1,alwaysConsumeMouseWheel:!1,horizontalScrollbarSize:0
        }
      })
    }
  }
  _createDiffEditorContributions(){
    const e=SC.getDiffEditorContributions();
    for(const t of e)try{
      this._register(this._instantiationService.createInstance(t.ctor,this))
    }
    catch(i){
      Gc(i)
    }
  }
  get _targetEditor(){
    return this._editors.modified
  }
  getEditorType(){
    return SVe.IDiffEditor
  }
  onVisible(){
    this._editors.original.onVisible(), this._editors.modified.onVisible()
  }
  onHide(){
    this._editors.original.onHide(), this._editors.modified.onHide()
  }
  layout(e){
    this._setCustomElementStyles(), this._rootSizeObserver.observe(e)
  }
  hasTextFocus(){
    return this._editors.original.hasTextFocus()||this._editors.modified.hasTextFocus()
  }
  saveViewState(){
    const e=this._editors.original.saveViewState(), t=this._editors.modified.saveViewState();
    return{
      original:e,modified:t,modelState:this._diffModel.get()?.serializeState()
    }
  }
  restoreViewState(e){
    if(e&&e.original&&e.modified){
      const t=e;
      this._editors.original.restoreViewState(t.original),this._editors.modified.restoreViewState(t.modified),t.modelState&&this._diffModel.get()?.restoreSerializedState(t.modelState)
    }
  }
  handleInitialized(){
    this._editors.original.handleInitialized(), this._editors.modified.handleInitialized()
  }
  createViewModel(e){
    return this._instantiationService.createInstance(k3n, e, this._options)
  }
  getModel(){
    return this._diffModel.get()?.model??null
  }
  setModel(e){
    const t=e?"model"in e?hbt.create(e).createNewRef(this):hbt.create(this.createViewModel(e), this):null;
    this.setDiffModel(t)
  }
  setDiffModel(e, t){
    const i=this._diffModel.get();
    !e&&i&&this._accessibleDiffViewer.get().close(), this._diffModel.get()!==e?.object&&h4t(t, r=>{
      const s=e?.object;
      tp.batchEventsGlobally(r,()=>{
        this._editors.original.setModel(s?s.model.original:null),this._editors.modified.setModel(s?s.model.modified:null)
      });
      const o=this._diffModelSrc.get()?.createNewRef(this);
      this._diffModelSrc.set(e?.createNewRef(this),r),setTimeout(()=>{
        o?.dispose()
      },0)
    })
  }
  updateOptions(e){
    this._options.updateOptions(e)
  }
  getDomNode(){
    return this.elements.root
  }
  getContainerDomNode(){
    return this._domElement
  }
  getOriginalEditor(){
    return this._editors.original
  }
  getModifiedEditor(){
    return this._editors.modified
  }
  setBoundarySashes(e){
    this._boundarySashes.set(e, void 0)
  }
  get ignoreTrimWhitespace(){
    return this._options.ignoreTrimWhitespace.get()
  }
  get maxComputationTime(){
    return this._options.maxComputationTimeMs.get()
  }
  get renderSideBySide(){
    return this._options.renderSideBySide.get()
  }
  getLineChanges(){
    const e=this._diffModel.get()?.diff.get();
    return e?nSh(e):null
  }
  getDiffComputationResult(){
    const e=this._diffModel.get()?.diff.get();
    return e?{
      changes:this.getLineChanges(),changes2:e.mappings.map(t=>t.lineRangeMapping),identical:e.identical,quitEarly:e.quitEarly
    }
    :null
  }
  revert(e){
    const t=this._diffModel.get();
    !t||!t.isDiffUpToDate.get()||this._editors.modified.executeEdits("diffEditor", [{
      range:e.modified.toExclusiveRange(),text:t.model.original.getValueInRange(e.original.toExclusiveRange())
    }
    ])
  }
  revertRangeMappings(e){
    const t=this._diffModel.get();
    if(!t||!t.isDiffUpToDate.get())return;
    const i=e.map(r=>({
      range:r.modifiedRange,text:t.model.original.getValueInRange(r.originalRange)
    }));
    this._editors.modified.executeEdits("diffEditor", i)
  }
  _goTo(e){
    this._editors.modified.setPosition(new ar(e.lineRangeMapping.modified.startLineNumber, 1)), this._editors.modified.revealRangeInCenter(e.lineRangeMapping.modified.toExclusiveRange())
  }
  goToDiff(e){
    const t=this._diffModel.get()?.diff.get()?.mappings;
    if(!t||t.length===0)return;
    const i=this._editors.modified.getPosition().lineNumber;
    let r;
    e==="next"?r=t.find(s=>s.lineRangeMapping.modified.startLineNumber>i)??t[0]:r=Cbe(t, s=>s.lineRangeMapping.modified.startLineNumber<i)??t[t.length-1], this._goTo(r), r.lineRangeMapping.modified.isEmpty?this._accessibilitySignalService.playSignal(rb.diffLineDeleted, {
      source:"diffEditor.goToDiff"
    }):r.lineRangeMapping.original.isEmpty?this._accessibilitySignalService.playSignal(rb.diffLineInserted, {
      source:"diffEditor.goToDiff"
    }):r&&this._accessibilitySignalService.playSignal(rb.diffLineModified, {
      source:"diffEditor.goToDiff"
    })
  }
  revealFirstDiff(){
    const e=this._diffModel.get();
    e&&this.waitForDiff().then(()=>{
      const t=e.diff.get()?.mappings;
      !t||t.length===0||this._goTo(t[0])
    })
  }
  accessibleDiffViewerNext(){
    this._accessibleDiffViewer.get().next()
  }
  accessibleDiffViewerPrev(){
    this._accessibleDiffViewer.get().prev()
  }
  async waitForDiff(){
    const e=this._diffModel.get();
    e&&await e.waitForDiff()
  }
  mapToOtherSide(){
    const e=this._editors.modified.hasWidgetFocus(), t=e?this._editors.modified:this._editors.original, i=e?this._editors.original:this._editors.modified;
    let r;
    const s=t.getSelection();
    if(s){
      const o=this._diffModel.get()?.diff.get()?.mappings.map(a=>e?a.lineRangeMapping.flip():a.lineRangeMapping);
      if(o){
        const a=x0h(s.getStartPosition(),o),l=x0h(s.getEndPosition(),o);
        r=Zt.plusRange(a,l)
      }
    }
    return{
      destination:i,destinationSelection:r
    }
  }
  switchSide(){
    const{
      destination:e,destinationSelection:t
    }
    =this.mapToOtherSide();
    e.focus(), t&&e.setSelection(t)
  }
  exitCompareMove(){
    const e=this._diffModel.get();
    e&&e.movedTextToCompare.set(void 0, void 0)
  }
  collapseAllUnchangedRegions(){
    const e=this._diffModel.get()?.unchangedRegions.get();
    e&&pp(t=>{
      for(const i of e)i.collapseAll(t)
    })
  }
  showAllUnchangedRegions(){
    const e=this._diffModel.get()?.unchangedRegions.get();
    e&&pp(t=>{
      for(const i of e)i.showAll(t)
    })
  }
  ensureLineIsVisible(e, t=!1){
    const i=this._diffModel.get();
    i&&(t&&i.ensureOriginalLineIsVisible?i.ensureOriginalLineIsVisible(e, 0, void 0):!t&&i.ensureModifiedLineIsVisible&&i.ensureModifiedLineIsVisible(e, 0, void 0))
  }
  _handleCursorPositionChange(e, t){
    if(e?.reason===3){
      const i=this._diffModel.get()?.diff.get()?.mappings.find(r=>t?r.lineRangeMapping.modified.contains(e.position.lineNumber):r.lineRangeMapping.original.contains(e.position.lineNumber));
      i?.lineRangeMapping.modified.isEmpty?this._accessibilitySignalService.playSignal(rb.diffLineDeleted,{
        source:"diffEditor.cursorPositionChanged"
      }):i?.lineRangeMapping.original.isEmpty?this._accessibilitySignalService.playSignal(rb.diffLineInserted,{
        source:"diffEditor.cursorPositionChanged"
      }):i&&this._accessibilitySignalService.playSignal(rb.diffLineModified,{
        source:"diffEditor.cursorPositionChanged"
      })
    }
  }
  dispose(){
    super.dispose(), this._codeEditorService.removeDiffEditor(this)
  }
}, JB=__decorate([__param(3, wi), __param(4, ln), __param(5, fl), __param(6, fS), __param(7, p2)], JB)
}
});
function ghA(n, e, t){
  return n.get(fl).listDiffEditors().find(s=>{
    const o=s.getModifiedEditor(), a=s.getOriginalEditor();
    return o&&o.getModel()?.uri.toString()===t.toString()&&a&&a.getModel()?.uri.toString()===e.toString()
  })||null
}
function H3t(n){
  const t=n.get(fl).listDiffEditors(), i=_C();
  if(i){
    for(const r of t)if(r.getContainerDomNode().contains(i))return r
  }
  return null
}
function iSh(n, e){
  if(!e.getOption(63))return null;
  const t=n.get(fl);
  for(const i of t.listDiffEditors()){
    const r=i.getOriginalEditor(), s=i.getModifiedEditor();
    if(r===e||s===e)return i
  }
  return null
}
var rSh, lBc, uBc, J3t, sSh, oSh, aSh, cSh, J5o, dBc, G3t, G5o, O3n=