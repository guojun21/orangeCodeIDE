// Module: out-build/vs/workbench/contrib/notebook/browser/diff/notebookDiffEditor.js
// Offset: 33661975 (bundle byte offset)
// Size: 20370 bytes

Ht(), ri(), GD(), kr(), Pa(), Io(), Mbn(), Po(), Prt(), Wt(), why(), si(), Nl(), qbn(), Ei(), MSe(), Nte(), Rrt(), yn(), rt(), hB(), ph(), vr(), Bc(), a8f(), B_u(), qft(), _ki(), W1e(), _hy(), g1f(), B6f(), z0(), R6f(), ss(), Nhy(), Uc(), $6f=Ct, q6f=class Tzb{
  constructor(e){
    this.selections=e
  }
  compare(e){
    if(!(e instanceof Tzb)||this.selections.length!==e.selections.length)return 3;
    for(let t=0;
    t<this.selections.length;
    t++)if(this.selections[t]!==e.selections[t])return 3;
    return 1
  }
  restore(e){
    const t={
      cellSelections:Vpi(this.selections)
    };
    return Object.assign(t, e), t
  }
}, m5=class extends fD{
  static{
    Jki=this
  }
  static{
    this.ENTIRE_DIFF_OVERVIEW_WIDTH=30
  }
  static{
    this.ID=Wpi
  }
  get textModel(){
    return this._model?.modified.notebook
  }
  get inlineNotebookEditor(){
    if(this._inlineView)return this.inlineDiffWidget?.editorWidget
  }
  get notebookOptions(){
    return this._notebookOptions
  }
  get isDisposed(){
    return this._isDisposed
  }
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(Jki.ID, e, a, i, l), this.instantiationService=t, this.contextKeyService=r, this.notebookEditorWorkerService=s, this.configurationService=o, this.notebookService=u, this.editorService=d, this.creationOptions=x_u(), this._dimension=void 0, this._modifiedWebview=null, this._originalWebview=null, this._webviewTransparentCover=null, this._inlineView=!1, this._onMouseUp=this._register(new Qe), this.onMouseUp=this._onMouseUp.event, this._onDidScroll=this._register(new Qe), this.onDidScroll=this._onDidScroll.event, this.onDidChangeScroll=this._onDidScroll.event, this._model=null, this._modifiedResourceDisposableStore=this._register(new Ut), this._insetModifyQueueByOutputId=new KFt, this._onDidDynamicOutputRendered=this._register(new Qe), this.onDidDynamicOutputRendered=this._onDidDynamicOutputRendered.event, this._localStore=this._register(new Ut), this._onDidChangeSelection=this._register(new Qe), this.onDidChangeSelection=this._onDidChangeSelection.event, this._isDisposed=!1, this._currentChangedIndex=Ua(this, -1), this.currentChangedIndex=this._currentChangedIndex, this.pendingLayouts=new WeakMap, this.diffEditorCalcuator=this.instantiationService.createInstance(Oki, this.fontInfo.lineHeight), this._notebookOptions=t.createInstance(Trt, this.window, !1, void 0), this._register(this._notebookOptions), this._revealFirst=!0
  }
  get fontInfo(){
    return this._fontInfo||(this._fontInfo=this.createFontInfo()), this._fontInfo
  }
  createFontInfo(){
    const e=this.configurationService.getValue("editor");
    return FSe.readFontInfo(this.window, Xbe.createFromRawSettings(e, M6.getInstance(this.window).value))
  }
  isOverviewRulerEnabled(){
    return this.configurationService.getValue(yo.diffOverviewRuler)??!1
  }
  getSelection(){
    const e=this._list.getFocus();
    return new q6f(e)
  }
  toggleNotebookCellSelection(e){
    
  }
  updatePerformanceMetadata(e, t, i, r){
    
  }
  async focusNotebookCell(e, t){
    
  }
  async focusNextNotebookCell(e, t){
    
  }
  didFocusOutputInputChange(e){
    
  }
  getScrollTop(){
    return this._list?.scrollTop??0
  }
  getScrollHeight(){
    return this._list?.scrollHeight??0
  }
  getScrollPosition(){
    return{
      scrollTop:this.getScrollTop(),scrollLeft:this._list?.scrollLeft??0
    }
  }
  setScrollPosition(e){
    this._list&&(this._list.scrollTop=e.scrollTop, e.scrollLeft!==void 0&&(this._list.scrollLeft=e.scrollLeft))
  }
  delegateVerticalScrollbarPointerDown(e){
    this._list?.delegateVerticalScrollbarPointerDown(e)
  }
  updateOutputHeight(e, t, i, r){
    const s=e.diffElement, o=this.getCellByInfo(e), a=o.outputsViewModels.indexOf(t);
    if(s instanceof mwe){
      const l=Dg.parse(e.cellUri);
      if(!l)return;
      s.updateOutputHeight(l.notebook.toString()===this._model?.original.resource.toString()?s1.Original:s1.Modified,a,i)
    }
    else s.updateOutputHeight(s.type==="insert"?s1.Modified:s1.Original, a, i);
    r&&this._onDidDynamicOutputRendered.fire({
      cell:o,output:t
    })
  }
  setMarkupCellEditState(e, t){
    
  }
  didStartDragMarkupCell(e, t){
    
  }
  didDragMarkupCell(e, t){
    
  }
  didEndDragMarkupCell(e){
    
  }
  didDropMarkupCell(e){
    
  }
  didResizeOutput(e){
    
  }
  async toggleInlineView(){
    this._layoutCancellationTokenSource?.dispose(), this._inlineView=!this._inlineView, this._lastLayoutProperties&&(this._inlineView?(this.layout(this._lastLayoutProperties?.dimension, this._lastLayoutProperties?.position), this.inlineDiffWidget?.show(this.input, this._model?.modified.notebook, this._model?.original.notebook, this._options)):(this.layout(this._lastLayoutProperties?.dimension, this._lastLayoutProperties?.position), this.inlineDiffWidget?.hide()), this._layoutCancellationTokenSource=new Wc, this.updateLayout(this._layoutCancellationTokenSource.token))
  }
  createEditor(e){
    this._rootElement=Rt(e, Ct(".notebook-text-diff-editor")), this._overflowContainer=document.createElement("div"), this._overflowContainer.classList.add("notebook-overflow-widget-container", "monaco-editor"), Rt(e, this._overflowContainer);
    const t=[this.instantiationService.createInstance(Mki, this), this.instantiationService.createInstance(Fki, this), this.instantiationService.createInstance(Lki, this), this.instantiationService.createInstance(Nki, this)];
    this._listViewContainer=Rt(this._rootElement, Ct(".notebook-diff-list-view")), this._list=this.instantiationService.createInstance(AIa, "NotebookTextDiff", this._listViewContainer, this.instantiationService.createInstance(vIa, this.window), t, this.contextKeyService, {
      setRowLineHeight:!1,setRowHeight:!1,supportDynamicHeights:!0,horizontalScrolling:!1,keyboardSupport:!1,mouseSupport:!0,multipleSelectionSupport:!1,typeNavigationEnabled:!0,paddingBottom:0,styleController:i=>this._list,overrideStyles:{
        listBackground:Wm,listActiveSelectionBackground:Wm,listActiveSelectionForeground:ym,listFocusAndSelectionBackground:Wm,listFocusAndSelectionForeground:ym,listFocusBackground:Wm,listFocusForeground:ym,listHoverForeground:ym,listHoverBackground:Wm,listHoverOutline:nN,listFocusOutline:nN,listInactiveSelectionBackground:Wm,listInactiveSelectionForeground:ym,listInactiveFocusBackground:Wm,listInactiveFocusOutline:Wm
      },accessibilityProvider:{
        getAriaLabel(){
          return null
        },getWidgetAriaLabel(){
          return _(9278,null)
        }
      }
    }), this.inlineDiffWidget=this._register(this.instantiationService.createInstance(LIa, this._rootElement, this.group.id, this.window, this.notebookOptions, this._dimension)), this._register(this._list), this._register(this._list.onMouseUp(i=>{
      i.element&&(typeof i.index=="number"&&this._list.setFocus([i.index]),this._onMouseUp.fire({
        event:i.browserEvent,target:i.element
      }))
    })), this._register(this._list.onDidScroll(()=>{
      this._onDidScroll.fire()
    })), this._register(this._list.onDidChangeFocus(()=>this._onDidChangeSelection.fire({
      reason:2
    }))), this._overviewRulerContainer=document.createElement("div"), this._overviewRulerContainer.classList.add("notebook-overview-ruler-container"), this._rootElement.appendChild(this._overviewRulerContainer), this._registerOverviewRuler(), this._webviewTransparentCover=Rt(this._list.rowsContainer, $6f(".webview-cover")), this._webviewTransparentCover.style.display="none", this._register($Be(this._overflowContainer, i=>{
      i.target.classList.contains("slider")&&this._webviewTransparentCover&&(this._webviewTransparentCover.style.display="block")
    })), this._register(ZSc(this._overflowContainer, ()=>{
      this._webviewTransparentCover&&(this._webviewTransparentCover.style.display="none")
    })), this._register(this._list.onDidScroll(i=>{
      this._webviewTransparentCover.style.top=`${i.scrollTop}px`
    }))
  }
  _registerOverviewRuler(){
    this._overviewRuler=this._register(this.instantiationService.createInstance(yIa, this, Jki.ENTIRE_DIFF_OVERVIEW_WIDTH, this._overviewRulerContainer))
  }
  _updateOutputsOffsetsInWebview(e, t, i, r, s){
    if(i.element.style.height=`${t}px`, i.insetMapping){
      const o=[],a=[];
      i.insetMapping.forEach((l,u)=>{
        const d=r(l.cellInfo.diffElement);
        if(!(!d||this._list.indexOf(l.cellInfo.diffElement)===void 0))if(d.outputsViewModels.indexOf(u)<0)a.push(u);
        else{
          const p=this._list.getCellViewScrollTop(l.cellInfo.diffElement),g=d.outputsViewModels.indexOf(u),f=l.cellInfo.diffElement.getOutputOffsetInCell(s,g);
          o.push({
            cell:d,output:u,cellTop:p,outputOffset:f,forceDisplay:!1
          })
        }
      }),i.removeInsets(a),o.length&&i.updateScrollTops(o,[])
    }
  }
  async setInput(e, t, i, r){
    this.inlineDiffWidget?.hide(), await super.setInput(e, t, i, r);
    const s=await e.resolve();
    this._model!==s&&(this._detachModel(), this._attachModel(s)), this._model=s, this._model!==null&&(this._inlineView?(this._listViewContainer.style.display="none", this.inlineDiffWidget?.show(e, s.modified.notebook, s.original.notebook, t)):(this._listViewContainer.style.display="block", this.inlineDiffWidget?.hide()), this._revealFirst=!0, this._modifiedResourceDisposableStore.clear(), this._layoutCancellationTokenSource=new Wc, this._modifiedResourceDisposableStore.add(In.any(this._model.original.notebook.onDidChangeContent, this._model.modified.notebook.onDidChangeContent)(o=>{
      this._model!==null&&this.editorService.activeEditor!==e&&(this._layoutCancellationTokenSource?.dispose(),this._layoutCancellationTokenSource=new Wc,this.updateLayout(this._layoutCancellationTokenSource.token))
    })), await this._createOriginalWebview(Wr(), this._model.original.viewType, this._model.original.resource), this._originalWebview&&this._modifiedResourceDisposableStore.add(this._originalWebview), await this._createModifiedWebview(Wr(), this._model.modified.viewType, this._model.modified.resource), this._modifiedWebview&&this._modifiedResourceDisposableStore.add(this._modifiedWebview), await this.updateLayout(this._layoutCancellationTokenSource.token, t?.cellSelections?Qne(t.cellSelections):void 0))
  }
  setVisible(e){
    super.setVisible(e), e||this.inlineDiffWidget?.hide()
  }
  _detachModel(){
    this._localStore.clear(), this._originalWebview?.dispose(), this._originalWebview?.element.remove(), this._originalWebview=null, this._modifiedWebview?.dispose(), this._modifiedWebview?.element.remove(), this._modifiedWebview=null, this.notebookDiffViewModel?.dispose(), this.notebookDiffViewModel=void 0, this._modifiedResourceDisposableStore.clear(), this._list.clear()
  }
  _attachModel(e){
    this._model=e, this._eventDispatcher=new D_u;
    const t=()=>{
      r_(this.window,()=>{
        this._isDisposed||(this._modifiedWebview&&this._updateOutputsOffsetsInWebview(this._list.scrollTop,this._list.scrollHeight,this._modifiedWebview,r=>r.modified,s1.Modified),this._originalWebview&&this._updateOutputsOffsetsInWebview(this._list.scrollTop,this._list.scrollHeight,this._originalWebview,r=>r.original,s1.Original))
      })
    };
    this._localStore.add(this._list.onDidChangeContentHeight(()=>{
      t()
    })), this._localStore.add(this._list.onDidChangeFocus(r=>{
      if(r.indexes.length&&this.notebookDiffViewModel&&r.indexes[0]<this.notebookDiffViewModel.items.length){
        const s=this.notebookDiffViewModel.items[r.indexes[0]],o=this.notebookDiffViewModel.items.filter(a=>a.type!=="unchanged"&&a.type!=="unchangedMetadata"&&a.type!=="placeholder");
        if(s&&s?.type!=="placeholder"&&s?.type!=="unchanged"&&s?.type!=="unchangedMetadata")return this._currentChangedIndex.set(o.indexOf(s),void 0)
      }
      return this._currentChangedIndex.set(-1,void 0)
    })), this._localStore.add(this._eventDispatcher.onDidChangeCellLayout(()=>{
      t()
    }));
    const i=this.notebookDiffViewModel=this._register(new j_u(this._model, this.notebookEditorWorkerService, this.configurationService, this._eventDispatcher, this.notebookService, this.diffEditorCalcuator, this.fontInfo, void 0));
    this._localStore.add(this.notebookDiffViewModel.onDidChangeItems(r=>{
      this._originalWebview?.removeInsets([...this._originalWebview?.insetMapping.keys()]),this._modifiedWebview?.removeInsets([...this._modifiedWebview?.insetMapping.keys()]),this._revealFirst&&typeof r.firstChangeIndex=="number"&&r.firstChangeIndex>-1&&r.firstChangeIndex<this._list.length&&(this._revealFirst=!1,this._list.setFocus([r.firstChangeIndex]),this._list.reveal(r.firstChangeIndex,.3)),this._list.splice(r.start,r.deleteCount,r.elements),this.isOverviewRulerEnabled()&&this._overviewRuler.updateViewModels(i.items,this._eventDispatcher)
    }))
  }
  async _createModifiedWebview(e, t, i){
    this._modifiedWebview?.dispose(), this._modifiedWebview=this.instantiationService.createInstance(wbn, this, e, t, i, {
      ...this._notebookOptions.computeDiffWebviewOptions(),fontFamily:this._generateFontFamily()
    }, void 0), this._list.rowsContainer.insertAdjacentElement("afterbegin", this._modifiedWebview.element), this._modifiedWebview.createWebview(this.window), this._modifiedWebview.element.style.width="calc(50% - 16px)", this._modifiedWebview.element.style.left="calc(50%)"
  }
  _generateFontFamily(){
    return this.fontInfo.fontFamily??'"SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace'
  }
  async _createOriginalWebview(e, t, i){
    this._originalWebview?.dispose(), this._originalWebview=this.instantiationService.createInstance(wbn, this, e, t, i, {
      ...this._notebookOptions.computeDiffWebviewOptions(),fontFamily:this._generateFontFamily()
    }, void 0), this._list.rowsContainer.insertAdjacentElement("afterbegin", this._originalWebview.element), this._originalWebview.createWebview(this.window), this._originalWebview.element.style.width="calc(50% - 16px)", this._originalWebview.element.style.left="16px"
  }
  setOptions(e){
    const t=e?.cellSelections?Qne(e.cellSelections):void 0;
    t&&this._list.setFocus(t)
  }
  async updateLayout(e, t){
    !this._model||!this.notebookDiffViewModel||(await this.notebookDiffViewModel.computeDiff(e), !e.isCancellationRequested&&t&&this._list.setFocus(t))
  }
  scheduleOutputHeightAck(e, t, i){
    const r=e.diffElement;
    let s=s1.Original;
    if(r instanceof mwe){
      const a=Dg.parse(e.cellUri);
      if(!a)return;
      s=a.notebook.toString()===this._model?.original.resource.toString()?s1.Original:s1.Modified
    }
    else s=r.type==="insert"?s1.Modified:s1.Original;
    const o=s===s1.Modified?this._modifiedWebview:this._originalWebview;
    r_(this.window, ()=>{
      o?.ackHeight([{
        cellId:e.cellId,outputId:t,height:i
      }
      ])
    }, 10)
  }
  layoutNotebookCell(e, t){
    const i=(a, l)=>{
      this._list.updateElementHeight2(a,l)
    };
    let r=this.pendingLayouts.get(e);
    r&&this._localStore.delete(r);
    let s;
    const o=r_(this.window, ()=>{
      this.pendingLayouts.delete(e),i(e,t),s()
    });
    return r=$i(()=>{
      o.dispose(),s()
    }), this._localStore.add(r), this.pendingLayouts.set(e, r), new Promise(a=>{
      s=a
    })
  }
  setScrollTop(e){
    this._list.scrollTop=e
  }
  triggerScroll(e){
    this._list.triggerScrollFromMouseWheelEvent(e)
  }
  firstChange(){
    if(!this.notebookDiffViewModel)return;
    const t=this.notebookDiffViewModel.items.findIndex(i=>i.type!=="unchanged"&&i.type!=="unchangedMetadata"&&i.type!=="placeholder");
    t>=0&&(this._list.setFocus([t]), this._list.reveal(t))
  }
  lastChange(){
    if(!this.notebookDiffViewModel)return;
    const e=this.notebookDiffViewModel.items, t=e.slice().reverse().find(r=>r.type!=="unchanged"&&r.type!=="unchangedMetadata"&&r.type!=="placeholder"), i=t?e.indexOf(t):-1;
    i>=0&&(this._list.setFocus([i]), this._list.reveal(i))
  }
  previousChange(){
    if(!this.notebookDiffViewModel)return;
    let e=this._list.getFocus()[0];
    (isNaN(e)||e<0)&&(e=0);
    let t=e-1;
    const i=this.notebookDiffViewModel.items;
    for(;
    t>=0;
    ){
      const r=i[t];
      if(r.type!=="unchanged"&&r.type!=="unchangedMetadata"&&r.type!=="placeholder")break;
      t--
    }
    if(t>=0)this._list.setFocus([t]), this._list.reveal(t);
    else{
      const r=K_c(i,s=>s.type!=="unchanged"&&s.type!=="unchangedMetadata"&&s.type!=="placeholder");
      r>=0&&(this._list.setFocus([r]),this._list.reveal(r))
    }
  }
  nextChange(){
    if(!this.notebookDiffViewModel)return;
    let e=this._list.getFocus()[0];
    (isNaN(e)||e<0)&&(e=0);
    let t=e+1;
    const i=this.notebookDiffViewModel.items;
    for(;
    t<i.length;
    ){
      const r=i[t];
      if(r.type!=="unchanged"&&r.type!=="unchangedMetadata"&&r.type!=="placeholder")break;
      t++
    }
    if(t<i.length)this._list.setFocus([t]), this._list.reveal(t);
    else{
      const r=i.findIndex(s=>s.type!=="unchanged"&&s.type!=="unchangedMetadata"&&s.type!=="placeholder");
      r>=0&&(this._list.setFocus([r]),this._list.reveal(r))
    }
  }
  createOutput(e, t, i, r, s){
    this._insetModifyQueueByOutputId.queue(i.source.model.outputId+(s===s1.Modified?"-right":"left"), async()=>{
      const o=s===s1.Modified?this._modifiedWebview:this._originalWebview;
      if(o)if(o.insetMapping.has(i.source)){
        const a=this._list.getCellViewScrollTop(e),l=t.outputsViewModels.indexOf(i.source),u=e.getOutputOffsetInCell(s,l);
        o.updateScrollTops([{
          cell:t,output:i.source,cellTop:a,outputOffset:u,forceDisplay:!0
        }
        ],[])
      }
      else{
        const a=this._list.getCellViewScrollTop(e);
        await o.createOutput({
          diffElement:e,cellHandle:t.handle,cellId:t.id,cellUri:t.uri
        },i,a,r())
      }
    })
  }
  updateMarkupCellHeight(){
    
  }
  getCellByInfo(e){
    return e.diffElement.getCellByUri(e.cellUri)
  }
  getCellById(e){
    throw new Error("Not implemented")
  }
  removeInset(e, t, i, r){
    this._insetModifyQueueByOutputId.queue(i.model.outputId+(r===s1.Modified?"-right":"left"), async()=>{
      const s=r===s1.Modified?this._modifiedWebview:this._originalWebview;
      s&&s.insetMapping.has(i)&&s.removeInsets([i])
    })
  }
  showInset(e, t, i, r){
    this._insetModifyQueueByOutputId.queue(i.model.outputId+(r===s1.Modified?"-right":"left"), async()=>{
      const s=r===s1.Modified?this._modifiedWebview:this._originalWebview;
      if(!s||!s.insetMapping.has(i))return;
      const o=this._list.getCellViewScrollTop(e),a=t.outputsViewModels.indexOf(i),l=e.getOutputOffsetInCell(r,a);
      s.updateScrollTops([{
        cell:t,output:i,cellTop:o,outputOffset:l,forceDisplay:!0
      }
      ],[])
    })
  }
  hideInset(e, t, i){
    this._modifiedWebview?.hideInset(i), this._originalWebview?.hideInset(i)
  }
  getDomNode(){
    return this._rootElement
  }
  getOverflowContainerDomNode(){
    return this._overflowContainer
  }
  getControl(){
    return this
  }
  clearInput(){
    this.inlineDiffWidget?.hide(), super.clearInput(), this._modifiedResourceDisposableStore.clear(), this._list?.splice(0, this._list?.length||0), this._model=null, this.notebookDiffViewModel?.dispose(), this.notebookDiffViewModel=void 0
  }
  deltaCellOutputContainerClassNames(e, t, i, r){
    e===s1.Original?this._originalWebview?.deltaCellOutputContainerClassNames(t, i, r):this._modifiedWebview?.deltaCellOutputContainerClassNames(t, i, r)
  }
  getLayoutInfo(){
    if(!this._list)throw new Error("Editor is not initalized successfully");
    return{
      width:this._dimension.width,height:this._dimension.height,fontInfo:this.fontInfo,scrollHeight:this._list?.getScrollHeight()??0,stickyHeight:0
    }
  }
  layout(e, t){
    this._rootElement.classList.toggle("mid-width", e.width<1e3&&e.width>=600), this._rootElement.classList.toggle("narrow-width", e.width<600);
    const i=this.isOverviewRulerEnabled();
    this._dimension=e.with(e.width-(i?Jki.ENTIRE_DIFF_OVERVIEW_WIDTH:0)), this._listViewContainer.style.height=`${e.height}px`, this._listViewContainer.style.width=`${this._dimension.width}px`, this._inlineView?(this._listViewContainer.style.display="none", this.inlineDiffWidget?.setLayout(e, t)):(this.inlineDiffWidget?.hide(), this._listViewContainer.style.display="block", this._list?.layout(this._dimension.height, this._dimension.width), this._modifiedWebview&&(this._modifiedWebview.element.style.width="calc(50% - 16px)", this._modifiedWebview.element.style.left="calc(50%)"), this._originalWebview&&(this._originalWebview.element.style.width="calc(50% - 16px)", this._originalWebview.element.style.left="16px"), this._webviewTransparentCover&&(this._webviewTransparentCover.style.height=`${this._dimension.height}px`, this._webviewTransparentCover.style.width=`${this._dimension.width}px`), i&&this._overviewRuler.layout()), this._lastLayoutProperties={
      dimension:e,position:t
    }, this._eventDispatcher?.emit([new p6f({
      width:!0,fontInfo:!0
    }, this.getLayoutInfo())])
  }
  dispose(){
    this._isDisposed=!0, this._layoutCancellationTokenSource?.dispose(), this._detachModel(), super.dispose()
  }
}, m5=Jki=__decorate([__param(1, ln), __param(2, bo), __param(3, wi), __param(4, IEt), __param(5, Fn), __param(6, ea), __param(7, Hi), __param(8, JA), __param(9, yi)], m5), Rie(TQ.Base, 10, "notebook-diff-view-viewport-slider"), HI((n, e)=>{
  const t=n.getColor(Euh);
  e.addRule(`
	.notebook-text-diff-editor .diagonal-fill {
		background-image: linear-gradient(
			-45deg,
			${t} 12.5%,
			#0000 12.5%, #0000 50%,
			${t} 50%, ${t} 62.5%,
			#0000 62.5%, #0000 100%
		);
		background-size: 8px 8px;
	}
	`), e.addRule(`.notebook-text-diff-editor .cell-body { margin: ${hwe}px; }`), e.addRule(`.notebook-text-diff-editor .cell-placeholder-body { margin: ${hwe}px 0; }`)
})
}
});
function Mhy(n){
  return!!n&&typeof n.handle=="number"
}
function sA(n){
  if(!n)return;
  if(n.getId()===lCt)return n.getControl();
  if(n.getId()===m5.ID)return n.getControl().inlineNotebookEditor;
  const e=n.input;
  if(e&&dgn(e))return n.getControl()?.notebookEditor
}
function Gki(n, e){
  const t=Qne(e), i=[];
  return t.forEach(r=>{
    if(!n.cellAt(r))return;
    const o=n.getViewIndexByModelIndex(r);
    if(o<0)return;
    const a=o+1, l=n.getCellRangeFromViewRange(o, a);
    l&&i.push(l)
  }), QUe(i)
}
function Z_u(n, e){
  const t=[];
  return QUe(e).forEach(i=>{
    t.push(...n.getCellsInRange(i))
  }), t
}
var MIa, H6f, FIa, X_u, e0u, t0u, OIa, Wki, J6f, UIa, G6f, zbn, p5, n0u, HU, W6f, Axe, aw, Tk, gwe, yxe, Q6f, Sb=