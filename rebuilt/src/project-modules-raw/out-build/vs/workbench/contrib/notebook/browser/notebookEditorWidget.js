// Module: out-build/vs/workbench/contrib/notebook/browser/notebookEditorWidget.js
// Offset: 33452172 (bundle byte offset)
// Size: 73652 bytes

qny(), Hny(), Jny(), Gny(), Wny(), Qny(), jny(), zny(), Vny(), Kny(), Yny(), Zny(), Xny(), eiy(), tiy(), niy(), ri(), KC(), iu(), vr(), xf(), _s(), yn(), rt(), _r(), Yr(), Bc(), qft(), MSe(), ts(), Tq(), Ht(), dr(), Ei(), si(), pl(), Wt(), E_(), Px(), g1f(), Xg(), Pa(), Nl(), ky(), H0a(), Sb(), PU(), LU(), iry(), G0a(), O9f(), q9f(), K9f(), a8f(), xdy(), l2e(), Tdy(), VSi(), Rdy(), Pdy(), Ody(), Udy(), $dy(), qdy(), ph(), i1(), Bbn(), bO(), _ki(), W1e(), w_u(), z0(), Cu(), od(), Hdy(), kki(), HTa(), vxe(), zr(), ACt(), IRe(), Gdy(), Nte(), a6f(), Wdy(), Qdy(), jdy(), Z1e(), l6f=Ct, Nbn=class extends at{
  get isVisible(){
    return this._isVisible
  }
  get isDisposed(){
    return this._isDisposed
  }
  set viewModel(e){
    this._onWillChangeModel.fire(this._notebookViewModel?.notebookDocument), this._notebookViewModel=e, this._onDidChangeModel.fire(e?.notebookDocument)
  }
  get viewModel(){
    return this._notebookViewModel
  }
  get textModel(){
    return this._notebookViewModel?.notebookDocument
  }
  get isReadOnly(){
    return this._notebookViewModel?.options.isReadOnly??!1
  }
  get activeCodeEditor(){
    if(this._isDisposed)return;
    const[e]=this._list.getFocusedElements();
    return this._renderedEditors.get(e)
  }
  get activeCellAndCodeEditor(){
    if(this._isDisposed)return;
    const[e]=this._list.getFocusedElements(), t=this._renderedEditors.get(e);
    if(t)return[e, t]
  }
  get codeEditors(){
    return[...this._renderedEditors]
  }
  get visibleRanges(){
    return this._list?this._list.visibleRanges||[]:[]
  }
  get notebookOptions(){
    return this._notebookOptions
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w){
    super(), this.creationOptions=e, this.notebookRendererMessaging=s, this.notebookEditorService=o, this.notebookKernelService=a, this._notebookService=l, this.configurationService=u, this.layoutService=m, this.contextMenuService=p, this.telemetryService=g, this.notebookExecutionService=f, this.editorProgressService=A, this.logService=w, this._onDidChangeCellState=this._register(new Qe), this.onDidChangeCellState=this._onDidChangeCellState.event, this._onDidChangeViewCells=this._register(new Qe), this.onDidChangeViewCells=this._onDidChangeViewCells.event, this._onWillChangeModel=this._register(new Qe), this.onWillChangeModel=this._onWillChangeModel.event, this._onDidChangeModel=this._register(new Qe), this.onDidChangeModel=this._onDidChangeModel.event, this._onDidAttachViewModel=this._register(new Qe), this.onDidAttachViewModel=this._onDidAttachViewModel.event, this._onDidChangeOptions=this._register(new Qe), this.onDidChangeOptions=this._onDidChangeOptions.event, this._onDidChangeDecorations=this._register(new Qe), this.onDidChangeDecorations=this._onDidChangeDecorations.event, this._onDidScroll=this._register(new Qe), this.onDidScroll=this._onDidScroll.event, this._onDidChangeLayout=this._register(new Qe), this.onDidChangeLayout=this._onDidChangeLayout.event, this._onDidChangeActiveCell=this._register(new Qe), this.onDidChangeActiveCell=this._onDidChangeActiveCell.event, this._onDidChangeFocus=this._register(new Qe), this.onDidChangeFocus=this._onDidChangeFocus.event, this._onDidChangeSelection=this._register(new Qe), this.onDidChangeSelection=this._onDidChangeSelection.event, this._onDidChangeVisibleRanges=this._register(new Qe), this.onDidChangeVisibleRanges=this._onDidChangeVisibleRanges.event, this._onDidFocusEmitter=this._register(new Qe), this.onDidFocusWidget=this._onDidFocusEmitter.event, this._onDidBlurEmitter=this._register(new Qe), this.onDidBlurWidget=this._onDidBlurEmitter.event, this._onDidChangeActiveEditor=this._register(new Qe), this.onDidChangeActiveEditor=this._onDidChangeActiveEditor.event, this._onDidChangeActiveKernel=this._register(new Qe), this.onDidChangeActiveKernel=this._onDidChangeActiveKernel.event, this._onMouseUp=this._register(new Qe), this.onMouseUp=this._onMouseUp.event, this._onMouseDown=this._register(new Qe), this.onMouseDown=this._onMouseDown.event, this._onDidReceiveMessage=this._register(new Qe), this.onDidReceiveMessage=this._onDidReceiveMessage.event, this._onDidRenderOutput=this._register(new Qe), this.onDidRenderOutput=this._onDidRenderOutput.event, this._onDidRemoveOutput=this._register(new Qe), this.onDidRemoveOutput=this._onDidRemoveOutput.event, this._onDidResizeOutputEmitter=this._register(new Qe), this.onDidResizeOutput=this._onDidResizeOutputEmitter.event, this._webview=null, this._webviewResolvePromise=null, this._webviewTransparentCover=null, this._listDelegate=null, this._dndController=null, this._listTopCellToolbar=null, this._renderedEditors=new Map, this._localStore=this._register(new Ut), this._localCellStateListeners=[], this._shadowElementViewInfo=null, this._contributions=new Map, this._insetModifyQueueByOutputId=new KFt, this._cellContextKeyManager=null, this._uuid=Wr(), this._webviewFocused=!1, this._isVisible=!1, this._isDisposed=!1, this._baseCellEditorOptions=new Map, this._debugFlag=!1, this._backgroundMarkdownRenderRunning=!1, this._lastCellWithEditorFocus=null, this._pendingLayouts=new WeakMap, this._layoutDisposables=new Set, this._pendingOutputHeightAcks=new Map, this._dimension=t, this.isReplHistory=e.isReplHistory??!1, this._readOnly=e.isReadOnly??!1, this._overlayContainer=document.createElement("div"), this.scopedContextKeyService=this._register(d.createScoped(this._overlayContainer)), this.instantiationService=this._register(i.createChild(new EA([wi, this.scopedContextKeyService]))), this._notebookOptions=e.options??this.instantiationService.createInstance(Trt, this.creationOptions?.codeWindow??bi, this._readOnly, void 0), this._register(this._notebookOptions);
    const C=this._register(new U8f);
    this._viewContext=new W8f(this._notebookOptions, C, R=>this.getBaseCellEditorOptions(R)), this._register(this._viewContext.eventDispatcher.onDidChangeLayout(()=>{
      this._onDidChangeLayout.fire()
    })), this._register(this._viewContext.eventDispatcher.onDidChangeCellState(R=>{
      this._onDidChangeCellState.fire(R)
    })), this._register(l.onDidChangeOutputRenderers(()=>{
      this._updateOutputRenderers()
    })), this._register(this.instantiationService.createInstance(YTa, this)), this._register(a.onDidChangeSelectedNotebooks(R=>{
      Zc(R.notebook,this.viewModel?.uri)&&(this._loadKernelPreloads(),this._onDidChangeActiveKernel.fire())
    })), this._scrollBeyondLastLine=this.configurationService.getValue("editor.scrollBeyondLastLine"), this._register(this.configurationService.onDidChangeConfiguration(R=>{
      R.affectsConfiguration("editor.scrollBeyondLastLine")&&(this._scrollBeyondLastLine=this.configurationService.getValue("editor.scrollBeyondLastLine"),this._dimension&&this._isVisible&&this.layout(this._dimension))
    })), this._register(this._notebookOptions.onDidChangeOptions(R=>{
      (R.cellStatusBarVisibility||R.cellToolbarLocation||R.cellToolbarInteraction)&&this._updateForNotebookConfiguration(),R.fontFamily&&this._generateFontInfo(),(R.compactView||R.focusIndicator||R.insertToolbarPosition||R.cellToolbarLocation||R.dragAndDropEnabled||R.fontSize||R.markupFontSize||R.markdownLineHeight||R.fontFamily||R.insertToolbarAlignment||R.outputFontSize||R.outputLineHeight||R.outputFontFamily||R.outputWordWrap||R.outputScrolling||R.outputLinkifyFilePaths||R.minimalError)&&(this._styleElement?.remove(),this._createLayoutStyles(),this._webview?.updateOptions({
        ...this.notebookOptions.computeWebviewOptions(),fontFamily:this._generateFontFamily()
      })),this._dimension&&this._isVisible&&this.layout(this._dimension)
    }));
    const x=e.codeWindow?this.layoutService.getContainer(e.codeWindow):this.layoutService.mainContainer;
    this._register(r.getPart(x).onDidScroll(R=>{
      !this._shadowElement||!this._isVisible||(this.updateShadowElement(this._shadowElement,this._dimension),this.layoutContainerOverShadowElement(this._dimension,this._position))
    })), this.notebookEditorService.addNotebookEditor(this);
    const I=Wr();
    this._overlayContainer.id=`notebook-${I}`, this._overlayContainer.className="notebookOverlay", this._overlayContainer.classList.add("notebook-editor"), this._overlayContainer.inert=!0, this._overlayContainer.style.visibility="hidden", x.appendChild(this._overlayContainer), this._createBody(this._overlayContainer), this._generateFontInfo(), this._isVisible=!0, this._editorFocus=dv.bindTo(this.scopedContextKeyService), this._outputFocus=kMe.bindTo(this.scopedContextKeyService), this._outputInputFocus=Cgn.bindTo(this.scopedContextKeyService), this._editorEditable=n1.bindTo(this.scopedContextKeyService), this._cursorNavMode=Y0a.bindTo(this.scopedContextKeyService), new Sn(xki, !1).bindTo(this.scopedContextKeyService).set(!0), this._editorEditable.set(!e.isReadOnly);
    let B;
    Array.isArray(this.creationOptions.contributions)?B=this.creationOptions.contributions:B=Agn.getEditorContributions();
    for(const R of B){
      let N;
      try{
        N=this.instantiationService.createInstance(R.ctor,this)
      }
      catch(M){
        Gc(M)
      }
      if(N)if(!this._contributions.has(R.id))this._contributions.set(R.id,N);
      else throw N.dispose(),new Error(`DUPLICATE notebook editor contribution: '${R.id}'`)
    }
    this._updateForNotebookConfiguration()
  }
  _debug(...e){
    this._debugFlag&&nry(...e)
  }
  getId(){
    return this._uuid
  }
  getViewModel(){
    return this.viewModel
  }
  getLength(){
    return this.viewModel?.length??0
  }
  getSelections(){
    return this.viewModel?.getSelections()??[]
  }
  setSelections(e){
    if(!this.viewModel)return;
    const t=this.viewModel.getFocus();
    this.viewModel.updateSelectionsState({
      kind:Wy.Index,focus:t,selections:e
    })
  }
  getFocus(){
    return this.viewModel?.getFocus()??{
      start:0,end:0
    }
  }
  setFocus(e){
    if(!this.viewModel)return;
    const t=this.viewModel.getSelections();
    this.viewModel.updateSelectionsState({
      kind:Wy.Index,focus:e,selections:t
    })
  }
  getSelectionViewModels(){
    if(!this.viewModel)return[];
    const e=new Set;
    return this.viewModel.getSelections().map(t=>this.viewModel.viewCells.slice(t.start, t.end)).reduce((t, i)=>(i.forEach(r=>{
      e.has(r.handle)||(e.add(r.handle),t.push(r))
    }), t), [])
  }
  hasModel(){
    return!!this._notebookViewModel
  }
  showProgress(){
    this._currentProgress=this.editorProgressService.show(!0)
  }
  hideProgress(){
    this._currentProgress&&(this._currentProgress.done(), this._currentProgress=void 0)
  }
  getBaseCellEditorOptions(e){
    const t=this._baseCellEditorOptions.get(e);
    if(t)return t;
    {
      const i=new i6f(this,this.notebookOptions,this.configurationService,e);
      return this._baseCellEditorOptions.set(e,i),i
    }
  }
  _updateForNotebookConfiguration(){
    if(!this._overlayContainer)return;
    this._overlayContainer.classList.remove("cell-title-toolbar-left"), this._overlayContainer.classList.remove("cell-title-toolbar-right"), this._overlayContainer.classList.remove("cell-title-toolbar-hidden");
    const e=this._notebookOptions.computeCellToolbarLocation(this.viewModel?.viewType);
    this._overlayContainer.classList.add(`cell-title-toolbar-${e}`);
    const t=this._notebookOptions.getDisplayOptions().cellToolbarInteraction;
    let i="hover";
    this._overlayContainer.classList.remove("cell-toolbar-hover"), this._overlayContainer.classList.remove("cell-toolbar-click"), (t==="hover"||t==="click")&&(i=t), this._overlayContainer.classList.add(`cell-toolbar-${i}`)
  }
  _generateFontInfo(){
    const e=this.configurationService.getValue("editor"), t=As(this.getDomNode());
    this._fontInfo=FSe.readFontInfo(t, Xbe.createFromRawSettings(e, M6.getInstance(t).value))
  }
  _createBody(e){
    this._notebookTopToolbarContainer=document.createElement("div"), this._notebookTopToolbarContainer.classList.add("notebook-toolbar-container"), this._notebookTopToolbarContainer.style.display="none", Rt(e, this._notebookTopToolbarContainer), this._notebookStickyScrollContainer=document.createElement("div"), this._notebookStickyScrollContainer.classList.add("notebook-sticky-scroll-container"), Rt(e, this._notebookStickyScrollContainer), this._body=document.createElement("div"), Rt(e, this._body), this._body.classList.add("cell-list-container"), this._createLayoutStyles(), this._createCellList(), this._notebookOverviewRulerContainer=document.createElement("div"), this._notebookOverviewRulerContainer.classList.add("notebook-overview-ruler-container"), this._list.scrollableElement.appendChild(this._notebookOverviewRulerContainer), this._registerNotebookOverviewRuler(), this._register(this.instantiationService.createInstance(c6f, this, this._list.scrollableElement)), this._overflowContainer=document.createElement("div"), this._overflowContainer.classList.add("notebook-overflow-widget-container", "monaco-editor"), Rt(e, this._overflowContainer)
  }
  _generateFontFamily(){
    return this._fontInfo?.fontFamily??'"SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace'
  }
  _createLayoutStyles(){
    this._styleElement=wC(this._body);
    const{
      cellRightMargin:e,cellTopMargin:t,cellRunGutter:i,cellBottomMargin:r,codeCellLeftMargin:s,markdownCellGutter:o,markdownCellLeftMargin:a,markdownCellBottomMargin:l,markdownCellTopMargin:u,collapsedIndicatorHeight:d,focusIndicator:m,insertToolbarPosition:p,outputFontSize:g,focusIndicatorLeftMargin:f,focusIndicatorGap:A
    }
    =this._notebookOptions.getLayoutConfiguration(), {
      insertToolbarAlignment:w,compactView:C,fontSize:x
    }
    =this._notebookOptions.getDisplayOptions(), I=this._notebookOptions.getCellEditorContainerLeftMargin(), {
      bottomToolbarGap:B,bottomToolbarHeight:R
    }
    =this._notebookOptions.computeBottomToolbarDimensions(this.viewModel?.viewType), N=[];
    this._fontInfo||this._generateFontInfo();
    const M=this._generateFontFamily();
    N.push(`
		.notebook-editor {
			--notebook-cell-output-font-size: ${g}px;
			--notebook-cell-input-preview-font-size: ${x}px;
			--notebook-cell-input-preview-font-family: ${M};
		}
		`), C?N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row div.cell.code { margin-left: ${I}px; }`):N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row div.cell.code { margin-left: ${s}px; }`), m==="border"?(N.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-top:before,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-bottom:before,
			.monaco-workbench .notebookOverlay .monaco-list .markdown-cell-row .cell-inner-container:before,
			.monaco-workbench .notebookOverlay .monaco-list .markdown-cell-row .cell-inner-container:after {
				content: "";
				position: absolute;
				width: 100%;
				height: 1px;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left:before,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-right:before {
				content: "";
				position: absolute;
				width: 1px;
				height: 100%;
				z-index: 10;
			}

			/* top border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-top:before {
				border-top: 1px solid transparent;
			}

			/* left border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left:before {
				border-left: 1px solid transparent;
			}

			/* bottom border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-bottom:before {
				border-bottom: 1px solid transparent;
			}

			/* right border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-right:before {
				border-right: 1px solid transparent;
			}
			`), N.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.code-cell-row.focused .cell-focus-indicator-left:before,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.code-cell-row.focused .cell-focus-indicator-right:before,
			.monaco-workbench .notebookOverlay .monaco-list.selection-multiple .monaco-list-row.code-cell-row.selected .cell-focus-indicator-left:before,
			.monaco-workbench .notebookOverlay .monaco-list.selection-multiple .monaco-list-row.code-cell-row.selected .cell-focus-indicator-right:before {
				top: -${t}px; height: calc(100% + ${t+r}px)
			}`)):(N.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left .codeOutput-focus-indicator {
				border-left: 3px solid transparent;
				border-radius: 4px;
				width: 0px;
				margin-left: ${f}px;
				border-color: var(--vscode-notebook-inactiveFocusedCellBorder) !important;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.focused .cell-focus-indicator-left .codeOutput-focus-indicator-container,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-output-hover .cell-focus-indicator-left .codeOutput-focus-indicator-container,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .markdown-cell-hover .cell-focus-indicator-left .codeOutput-focus-indicator-container,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row:hover .cell-focus-indicator-left .codeOutput-focus-indicator-container {
				display: block;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left .codeOutput-focus-indicator-container:hover .codeOutput-focus-indicator {
				border-left: 5px solid transparent;
				margin-left: ${f-1}px;
			}
			`), N.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.focused .cell-inner-container.cell-output-focus .cell-focus-indicator-left .codeOutput-focus-indicator,
			.monaco-workbench .notebookOverlay .monaco-list:focus-within .monaco-list-row.focused .cell-inner-container .cell-focus-indicator-left .codeOutput-focus-indicator {
				border-color: var(--vscode-notebook-focusedCellBorder) !important;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-inner-container .cell-focus-indicator-left .output-focus-indicator {
				margin-top: ${A}px;
			}
			`)), p==="betweenCells"||p==="both"?(N.push(".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container { display: flex; }"), N.push(".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .cell-list-top-cell-toolbar-container { display: flex; }")):(N.push(".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container { display: none; }"), N.push(".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .cell-list-top-cell-toolbar-container { display: none; }")), w==="left"&&(N.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .action-item:first-child,
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .action-item:first-child, .monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container .action-item:first-child {
				margin-right: 0px !important;
			}`), N.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .monaco-toolbar .action-label,
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .monaco-toolbar .action-label, .monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container .monaco-toolbar .action-label {
				padding: 0px !important;
				justify-content: center;
				border-radius: 4px;
			}`), N.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container,
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container, .monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container {
				align-items: flex-start;
				justify-content: left;
				margin: 0 16px 0 ${8+s}px;
			}`), N.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container,
			.notebookOverlay .cell-bottom-toolbar-container .action-item {
				border: 0px;
			}`)), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .code-cell-row div.cell.code { margin-left: ${I}px; }`), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .code-cell-row div.cell.code { margin-left: ${I}px; }`), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .code-cell-row div.cell { margin-right: ${e}px; }`), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row div.cell { margin-right: ${e}px; }`), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row > .cell-inner-container { padding-top: ${t}px; }`), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row > .cell-inner-container { padding-bottom: ${l}px; padding-top: ${u}px; }`), N.push(".notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row > .cell-inner-container.webview-backed-markdown-cell { padding: 0; }"), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row > .webview-backed-markdown-cell.markdown-cell-edit-mode .cell.code { padding-bottom: ${l}px; padding-top: ${u}px; }`), N.push(`.notebookOverlay .output { margin: 0px ${e}px 0px ${I}px; }`), N.push(`.notebookOverlay .output { width: calc(100% - ${I+e}px); }`), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-comment-container { left: ${I}px; }`), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-comment-container { width: calc(100% - ${I+e}px); }`), N.push(`.monaco-workbench .notebookOverlay .output .output-collapse-container .expandButton { left: -${i}px; }`), N.push(`.monaco-workbench .notebookOverlay .output .output-collapse-container .expandButton {
			position: absolute;
			width: ${i}px;
			padding: 6px 0px;
		}`), N.push(`.notebookOverlay .output-show-more-container { margin: 0px ${e}px 0px ${I}px; }`), N.push(`.notebookOverlay .output-show-more-container { width: calc(100% - ${I+e}px); }`), N.push(`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row div.cell.markdown { padding-left: ${i}px; }`), N.push(`.monaco-workbench .notebookOverlay > .cell-list-container .notebook-folding-indicator { left: ${(o-20)/2+a}px; }`), N.push(`.notebookOverlay > .cell-list-container .notebook-folded-hint { left: ${o+a+8}px; }`), N.push(`.notebookOverlay .monaco-list .monaco-list-row :not(.webview-backed-markdown-cell) .cell-focus-indicator-top { height: ${t}px; }`), N.push(`.notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-side { bottom: ${B}px; }`), N.push(`.notebookOverlay .monaco-list .monaco-list-row.code-cell-row .cell-focus-indicator-left { width: ${I}px; }`), N.push(`.notebookOverlay .monaco-list .monaco-list-row.markdown-cell-row .cell-focus-indicator-left { width: ${s}px; }`), N.push(`.notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator.cell-focus-indicator-right { width: ${e}px; }`), N.push(`.notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-bottom { height: ${r}px; }`), N.push(`.notebookOverlay .monaco-list .monaco-list-row .cell-shadow-container-bottom { top: ${r}px; }`), N.push(`
			.notebookOverlay .monaco-list.selection-multiple .monaco-list-row:has(+ .monaco-list-row.selected) .cell-focus-indicator-bottom {
				height: ${B+r}px;
			}
		`), N.push(`
			.notebookOverlay .monaco-list .monaco-list-row.code-cell-row.nb-multiCellHighlight:has(+ .monaco-list-row.nb-multiCellHighlight) .cell-focus-indicator-bottom {
				height: ${B+r}px;
				background-color: var(--vscode-notebook-symbolHighlightBackground) !important;
			}

			.notebookOverlay .monaco-list .monaco-list-row.markdown-cell-row.nb-multiCellHighlight:has(+ .monaco-list-row.nb-multiCellHighlight) .cell-focus-indicator-bottom {
				height: ${B+r-6}px;
				background-color: var(--vscode-notebook-symbolHighlightBackground) !important;
			}
		`), N.push(`
			.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .input-collapse-container .cell-collapse-preview {
				line-height: ${d}px;
			}

			.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .input-collapse-container .cell-collapse-preview .monaco-tokenized-source {
				max-height: ${d}px;
			}
		`), N.push(`.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container .monaco-toolbar { height: ${R}px }`), N.push(`.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .cell-list-top-cell-toolbar-container .monaco-toolbar { height: ${R}px }`), N.push(`.monaco-workbench .notebookOverlay.cell-title-toolbar-right > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-title-toolbar {
			right: ${e+26}px;
		}
		.monaco-workbench .notebookOverlay.cell-title-toolbar-left > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-title-toolbar {
			left: ${I+16}px;
		}
		.monaco-workbench .notebookOverlay.cell-title-toolbar-hidden > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-title-toolbar {
			display: none;
		}`), N.push(`
		.monaco-workbench .notebookOverlay .output > div.foreground.output-inner-container {
			padding: ${v_u}px 8px;
		}
		.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .output-collapse-container {
			padding: ${v_u}px 8px;
		}
		`), N.push(`
		.monaco-workbench .notebookOverlay .cell-chat-part {
			margin: 0 ${e}px 6px 4px;
		}
		`), this._styleElement.textContent=N.join(`
`)
  }
  _createCellList(){
    this._body.classList.add("cell-list-container"), this._dndController=this._register(new $9f(this, this._body));
    const e=r=>this._list.contextKeyService.createScoped(r);
    this._editorPool=this._register(this.instantiationService.createInstance(lIa, this, e));
    const t=[this.instantiationService.createInstance(vki, this, this._renderedEditors, this._editorPool, this._dndController, e), this.instantiationService.createInstance(bki, this, this._dndController, this._renderedEditors, e)];
    t.forEach(r=>{
      this._register(r)
    }), this._listDelegate=this.instantiationService.createInstance($Ta, As(this.getDomNode())), this._register(this._listDelegate);
    const i=this.instantiationService.createInstance(cIa, ()=>this.viewModel, this.isReplHistory);
    this._register(i), this._list=this.instantiationService.createInstance(oTa, "NotebookCellList", this._body, this._viewContext.notebookOptions, this._listDelegate, t, this.scopedContextKeyService, {
      setRowLineHeight:!1,setRowHeight:!1,supportDynamicHeights:!0,horizontalScrolling:!1,keyboardSupport:!1,mouseSupport:!0,multipleSelectionSupport:!0,selectionNavigation:!0,typeNavigationEnabled:!0,paddingTop:0,paddingBottom:0,transformOptimization:!1,initialSize:this._dimension,styleController:r=>this._list,overrideStyles:{
        listBackground:A7e,listActiveSelectionBackground:A7e,listActiveSelectionForeground:ym,listFocusAndSelectionBackground:A7e,listFocusAndSelectionForeground:ym,listFocusBackground:A7e,listFocusForeground:ym,listHoverForeground:ym,listHoverBackground:A7e,listHoverOutline:nN,listFocusOutline:nN,listInactiveSelectionBackground:A7e,listInactiveSelectionForeground:ym,listInactiveFocusBackground:A7e,listInactiveFocusOutline:A7e
      },accessibilityProvider:i
    }), this._dndController.setList(this._list), this._register(this._list), this._listViewInfoAccessor=new V9f(this._list), this._register(this._listViewInfoAccessor), this._register(H_(...t)), this._listTopCellToolbar=this._register(this.instantiationService.createInstance(XTa, this, this.notebookOptions)), this._webviewTransparentCover=Rt(this._list.rowsContainer, l6f(".webview-cover")), this._webviewTransparentCover.style.display="none", this._register($Be(this._overlayContainer, r=>{
      r.target.classList.contains("slider")&&this._webviewTransparentCover&&(this._webviewTransparentCover.style.display="block")
    })), this._register(ZSc(this._overlayContainer, ()=>{
      this._webviewTransparentCover&&(this._webviewTransparentCover.style.display="none")
    })), this._register(this._list.onMouseDown(r=>{
      r.element&&this._onMouseDown.fire({
        event:r.browserEvent,target:r.element
      })
    })), this._register(this._list.onMouseUp(r=>{
      r.element&&this._onMouseUp.fire({
        event:r.browserEvent,target:r.element
      })
    })), this._register(this._list.onDidChangeFocus(r=>{
      this._onDidChangeActiveEditor.fire(this),this._onDidChangeActiveCell.fire(),this._onDidChangeFocus.fire(),this._cursorNavMode.set(!1)
    })), this._register(this._list.onContextMenu(r=>{
      this.showListContextMenu(r)
    })), this._register(this._list.onDidChangeVisibleRanges(()=>{
      this._onDidChangeVisibleRanges.fire()
    })), this._register(this._list.onDidScroll(r=>{
      r.scrollTop!==r.oldScrollTop&&(this._onDidScroll.fire(),this.clearActiveCellWidgets()),r.scrollTop===r.oldScrollTop&&r.scrollHeightChanged&&this._onDidChangeLayout.fire()
    })), this._focusTracker=this._register(CC(this.getDomNode())), this._register(this._focusTracker.onDidBlur(()=>{
      this._editorFocus.set(!1),this.viewModel?.setEditorFocus(!1),this._onDidBlurEmitter.fire()
    })), this._register(this._focusTracker.onDidFocus(()=>{
      this._editorFocus.set(!0),this.viewModel?.setEditorFocus(!0),this._onDidFocusEmitter.fire()
    })), this._registerNotebookActionsToolbar(), this._registerNotebookStickyScroll(), this._register(this.configurationService.onDidChangeConfiguration(r=>{
      r.affectsConfiguration(i.verbositySettingId)&&(this._list.ariaLabel=i?.getWidgetAriaLabel())
    }))
  }
  showListContextMenu(e){
    this.contextMenuService.showContextMenu({
      menuId:st.NotebookCellTitle,menuActionOptions:{
        shouldForwardArgs:!0
      },contextKeyService:this.scopedContextKeyService,getAnchor:()=>e.anchor,getActionsContext:()=>({
        from:"cellContainer"
      })
    })
  }
  _registerNotebookOverviewRuler(){
    this._notebookOverviewRuler=this._register(this.instantiationService.createInstance(ZTa, this, this._notebookOverviewRulerContainer))
  }
  _registerNotebookActionsToolbar(){
    this._notebookTopToolbar=this._register(this.instantiationService.createInstance(KTa, this, this.scopedContextKeyService, this._notebookOptions, this._notebookTopToolbarContainer)), this._register(this._notebookTopToolbar.onDidChangeVisibility(()=>{
      this._dimension&&this._isVisible&&this.layout(this._dimension)
    }))
  }
  _registerNotebookStickyScroll(){
    this._notebookStickyScroll=this._register(this.instantiationService.createInstance(kX, this._notebookStickyScrollContainer, this, this._list, e=>{
      this.isDisposed||(this._dimension&&this._isVisible&&(e>0?(this.layout(this._dimension),this.setScrollTop(this.scrollTop+e)):e<0&&(this.setScrollTop(this.scrollTop+e),this.layout(this._dimension))),this._onDidScroll.fire())
    }))
  }
  _updateOutputRenderers(){
    !this.viewModel||!this._webview||(this._webview.updateOutputRenderers(), this.viewModel.viewCells.forEach(e=>{
      e.outputsViewModels.forEach(t=>{
        t.pickedMimeType?.rendererId===uCt&&t.resetRenderer()
      })
    }))
  }
  getDomNode(){
    return this._overlayContainer
  }
  getOverflowContainerDomNode(){
    return this._overflowContainer
  }
  getInnerWebview(){
    return this._webview?.webview
  }
  setEditorProgressService(e){
    this.editorProgressService=e
  }
  setParentContextKeyService(e){
    this.scopedContextKeyService.updateParent(e)
  }
  async setModel(e, t, i, r){
    if(this.viewModel===void 0||!this.viewModel.equal(e)){
      const s=this._notebookOptions.computeBottomToolbarDimensions(this.viewModel?.viewType);
      this._detachModel(),await this._attachModel(e,r??e.viewType,t,i);
      const o=this._notebookOptions.computeBottomToolbarDimensions(this.viewModel?.viewType);
      (s.bottomToolbarGap!==o.bottomToolbarGap||s.bottomToolbarHeight!==o.bottomToolbarHeight)&&(this._styleElement?.remove(),this._createLayoutStyles(),this._webview?.updateOptions({
        ...this.notebookOptions.computeWebviewOptions(),fontFamily:this._generateFontFamily()
      })),this.telemetryService.publicLog2("notebook/editorOpened",{
        scheme:e.uri.scheme,ext:hk(e.uri),viewType:e.viewType,isRepl:this.isReplHistory
      })
    }
    else this.restoreListViewState(t);
    this._restoreSelectedKernel(t), this._loadKernelPreloads(), this._dndController?.clearGlobalDragState(), this._localStore.add(this._list.onDidChangeFocus(()=>{
      this.updateContextKeysOnFocusChange()
    })), this.updateContextKeysOnFocusChange(), this._backgroundMarkdownRendering()
  }
  _backgroundMarkdownRendering(){
    this._backgroundMarkdownRenderRunning||(this._backgroundMarkdownRenderRunning=!0, Dte(As(this.getDomNode()), e=>{
      this._backgroundMarkdownRenderingWithDeadline(e)
    }))
  }
  _backgroundMarkdownRenderingWithDeadline(e){
    const t=Date.now()+e.timeRemaining(), i=()=>{
      try{
        if(this._backgroundMarkdownRenderRunning=!0,this._isDisposed||!this.viewModel)return;
        const r=this.viewModel.viewCells.find(s=>s.cellKind===zd.Markup&&!this._webview?.markupPreviewMapping.has(s.id)&&!this.cellIsHidden(s));
        if(!r)return;
        this.createMarkupPreview(r)
      }
      finally{
        this._backgroundMarkdownRenderRunning=!1
      }
      Date.now()<t?l5e(i):this._backgroundMarkdownRendering()
    };
    i()
  }
  updateContextKeysOnFocusChange(){
    if(!this.viewModel)return;
    const e=this._list.getFocusedElements()[0];
    e&&(this._cellContextKeyManager||(this._cellContextKeyManager=this._localStore.add(this.instantiationService.createInstance(YSi, this, e))), this._cellContextKeyManager.updateForElement(e))
  }
  async setOptions(e){
    if(e?.isReadOnly!==void 0&&(this._readOnly=e?.isReadOnly), !this.viewModel)return;
    this.viewModel.updateOptions({
      isReadOnly:this._readOnly
    }), this.notebookOptions.updateOptions(this._readOnly);
    const t=e?.cellOptions??this._parseIndexedCellOptions(e);
    if(t){
      const i=this.viewModel.viewCells.find(r=>r.uri.toString()===t.resource.toString());
      if(i){
        this.focusElement(i);
        const r=t.options?.selection;
        r?(i.updateEditState(aw.Editing,"setOptions"),i.focusMode=Tk.Editor,await this.revealRangeInCenterIfOutsideViewportAsync(i,new Zt(r.startLineNumber,r.startColumn,r.endLineNumber||r.startLineNumber,r.endColumn||r.startColumn))):this._list.revealCell(i,e?.cellRevealType??4);
        const s=this._renderedEditors.get(i);
        if(s){
          if(t.options?.selection){
            const{
              selection:o
            }
            =t.options,a=new Zt(o.startLineNumber,o.startColumn,o.endLineNumber||o.startLineNumber,o.endColumn||o.startColumn);
            s.setSelection(a),s.revealPositionInCenterIfOutsideViewport({
              lineNumber:o.startLineNumber,column:o.startColumn
            }),await this.revealRangeInCenterIfOutsideViewportAsync(i,a)
          }
          t.options?.preserveFocus||s.focus()
        }
      }
    }
    if(e?.cellSelections){
      const i=e.cellSelections[0].start,r=this.viewModel.cellAt(i);
      r&&(this.viewModel.updateSelectionsState({
        kind:Wy.Index,focus:{
          start:i,end:i+1
        },selections:e.cellSelections
      }),this.revealInCenterIfOutsideViewport(r))
    }
    this._updateForOptions(), this._onDidChangeOptions.fire()
  }
  _parseIndexedCellOptions(e){
    if(e?.indexedCellOptions){
      const t=this.cellAt(e.indexedCellOptions.index);
      if(t)return{
        resource:t.uri,options:{
          selection:e.indexedCellOptions.selection,preserveFocus:!1
        }
      }
    }
  }
  _detachModel(){
    this._localStore.clear(), Bo(this._localCellStateListeners), this._list.detachViewModel(), this.viewModel?.dispose(), this.viewModel=void 0, this._webview?.dispose(), this._webview?.element.remove(), this._webview=null, this._list.clear()
  }
  _updateForOptions(){
    this.viewModel&&(this._editorEditable.set(!this.viewModel.options.isReadOnly), this._overflowContainer.classList.toggle("notebook-editor-editable", !this.viewModel.options.isReadOnly), this.getDomNode().classList.toggle("notebook-editor-editable", !this.viewModel.options.isReadOnly))
  }
  async _resolveWebview(){
    return this.textModel?this._webviewResolvePromise?this._webviewResolvePromise:(this._webview||this._ensureWebview(this.getId(), this.textModel.viewType, this.textModel.uri), this._webviewResolvePromise=(async()=>{
      if(!this._webview)throw new Error("Notebook output webview object is not created successfully.");
      if(await this._webview.createWebview(this.creationOptions.codeWindow??bi),!this._webview.webview)throw new Error("Notebook output webview element was not created successfully.");
      return this._localStore.add(this._webview.webview.onDidBlur(()=>{
        this._outputFocus.set(!1),this._webviewFocused=!1,this.updateEditorFocus(),this.updateCellFocusMode()
      })),this._localStore.add(this._webview.webview.onDidFocus(()=>{
        this._outputFocus.set(!0),this.updateEditorFocus(),this._webviewFocused=!0
      })),this._localStore.add(this._webview.onMessage(e=>{
        this._onDidReceiveMessage.fire(e)
      })),this._webview
    })(), this._webviewResolvePromise):null
  }
  _ensureWebview(e, t, i){
    if(this._webview)return;
    const r=this;
    this._webview=this.instantiationService.createInstance(wbn, {
      get creationOptions(){
        return r.creationOptions
      },setScrollTop(s){
        r._list.scrollTop=s
      },triggerScroll(s){
        r._list.triggerScrollFromMouseWheelEvent(s)
      },getCellByInfo:r.getCellByInfo.bind(r),getCellById:r._getCellById.bind(r),toggleNotebookCellSelection:r._toggleNotebookCellSelection.bind(r),focusNotebookCell:r.focusNotebookCell.bind(r),focusNextNotebookCell:r.focusNextNotebookCell.bind(r),updateOutputHeight:r._updateOutputHeight.bind(r),scheduleOutputHeightAck:r._scheduleOutputHeightAck.bind(r),updateMarkupCellHeight:r._updateMarkupCellHeight.bind(r),setMarkupCellEditState:r._setMarkupCellEditState.bind(r),didStartDragMarkupCell:r._didStartDragMarkupCell.bind(r),didDragMarkupCell:r._didDragMarkupCell.bind(r),didDropMarkupCell:r._didDropMarkupCell.bind(r),didEndDragMarkupCell:r._didEndDragMarkupCell.bind(r),didResizeOutput:r._didResizeOutput.bind(r),updatePerformanceMetadata:r._updatePerformanceMetadata.bind(r),didFocusOutputInputChange:r._didFocusOutputInputChange.bind(r)
    }, e, t, i, {
      ...this._notebookOptions.computeWebviewOptions(),fontFamily:this._generateFontFamily()
    }, this.notebookRendererMessaging.getScoped(this._uuid)), this._webview.element.style.width="100%", this._list.attachWebview(this._webview.element)
  }
  async _attachModel(e, t, i, r){
    this._ensureWebview(this.getId(), e.viewType, e.uri), this.viewModel=this.instantiationService.createInstance(GTa, t, e, this._viewContext, this.getLayoutInfo(), {
      isReadOnly:this._readOnly
    }), this._viewContext.eventDispatcher.emit([new lpu({
      width:!0,fontInfo:!0
    }, this.getLayoutInfo())]), this.notebookOptions.updateOptions(this._readOnly), this._updateForOptions(), this._updateForNotebookConfiguration();
    {
      this.viewModel.restoreEditorViewState(i);
      const o=i?.contributionsState||{
        
      };
      for(const[a,l]of this._contributions)typeof l.restoreViewState=="function"&&l.restoreViewState(o[a])
    }
    this._localStore.add(this.viewModel.onDidChangeViewCells(o=>{
      this._onDidChangeViewCells.fire(o)
    })), this._localStore.add(this.viewModel.onDidChangeSelection(()=>{
      this._onDidChangeSelection.fire(),this.updateSelectedMarkdownPreviews()
    })), this._localStore.add(this._list.onWillScroll(o=>{
      this._webview?.isResolved()&&(this._webviewTransparentCover.style.transform=`translateY(${o.scrollTop})`)
    }));
    let s=!1;
    this._localStore.add(this._list.onDidChangeContentHeight(()=>{
      s||(s=!0,this._localStore.add(r_(As(this.getDomNode()),()=>{
        s=!1,this._updateScrollHeight()
      },100)))
    })), this._localStore.add(this._list.onDidRemoveOutputs(o=>{
      o.forEach(a=>this.removeInset(a))
    })), this._localStore.add(this._list.onDidHideOutputs(o=>{
      o.forEach(a=>this.hideInset(a))
    })), this._localStore.add(this._list.onDidRemoveCellsFromView(o=>{
      const a=[],l=[];
      for(const u of o)if(u.cellKind===zd.Markup){
        const d=u;
        this.viewModel?.viewCells.find(m=>m.handle===d.handle)?a.push(d):l.push(d)
      }
      this.hideMarkupPreviews(a),this.deleteMarkupPreviews(l)
    })), await this._warmupWithMarkdownRenderer(this.viewModel, i, r), r?.mark("customMarkdownLoaded"), this._localCellStateListeners=this.viewModel.viewCells.map(o=>this._bindCellListener(o)), this._lastCellWithEditorFocus=this.viewModel.viewCells.find(o=>this.getActiveCell()===o&&o.focusMode===Tk.Editor)??null, this._localStore.add(this.viewModel.onDidChangeViewCells(o=>{
      this._isDisposed||([...o.splices].reverse().forEach(a=>{
        const[l,u,d]=a,m=this._localCellStateListeners.splice(l,u,...d.map(p=>this._bindCellListener(p)));
        Bo(m)
      }),o.splices.some(a=>a[2].some(l=>l.cellKind===zd.Markup))&&this._backgroundMarkdownRendering())
    })), this._dimension?this._list.layout(this.getBodyHeight(this._dimension.height), this._dimension.width):this._list.layout(), this._dndController?.clearGlobalDragState(), this.restoreListViewState(i)
  }
  _bindCellListener(e){
    const t=new Ut;
    return t.add(e.onDidChangeLayout(i=>{
      (i.totalHeight||i.outerWidth)&&this.layoutNotebookCell(e,e.layoutInfo.totalHeight,i.context)
    })), e.cellKind===zd.Code&&t.add(e.onDidRemoveOutputs(i=>{
      i.forEach(r=>this.removeInset(r))
    })), t.add(e.onDidChangeState(i=>{
      i.inputCollapsedChanged&&e.isInputCollapsed&&e.cellKind===zd.Markup&&this.hideMarkupPreviews([e]),i.outputCollapsedChanged&&e.isOutputCollapsed&&e.cellKind===zd.Code&&e.outputsViewModels.forEach(r=>this.hideInset(r)),i.focusModeChanged&&this._validateCellFocusMode(e)
    })), t.add(e.onCellDecorationsChanged(i=>{
      i.added.forEach(r=>{
        r.className&&this.deltaCellContainerClassNames(e.id,[r.className],[],e.cellKind),r.outputClassName&&this.deltaCellContainerClassNames(e.id,[r.outputClassName],[],e.cellKind)
      }),i.removed.forEach(r=>{
        r.className&&this.deltaCellContainerClassNames(e.id,[],[r.className],e.cellKind),r.outputClassName&&this.deltaCellContainerClassNames(e.id,[],[r.outputClassName],e.cellKind)
      })
    })), t
  }
  _validateCellFocusMode(e){
    e.focusMode===Tk.Editor&&(this._lastCellWithEditorFocus&&this._lastCellWithEditorFocus!==e&&(this._lastCellWithEditorFocus.focusMode=Tk.Container), this._lastCellWithEditorFocus=e)
  }
  async _warmupWithMarkdownRenderer(e, t, i){
    this.logService.debug("NotebookEditorWidget", "warmup "+this.viewModel?.uri.toString()), await this._resolveWebview(), i?.mark("webviewCommLoaded"), this.logService.debug("NotebookEditorWidget", "warmup - webview resolved"), this._webview.element.style.visibility="hidden", await this._warmupViewportMarkdownCells(e, t), this.logService.debug("NotebookEditorWidget", "warmup - viewport warmed up"), this._list.layout(0, 0), this._list.attachViewModel(e), this._list.scrollTop=t?.scrollPosition?.top??0, this._debug("finish initial viewport warmup and view state restore."), this._webview.element.style.visibility="visible", this.logService.debug("NotebookEditorWidget", "warmup - list view model attached, set to visible"), this._onDidAttachViewModel.fire()
  }
  async _warmupViewportMarkdownCells(e, t){
    if(t&&t.cellTotalHeights){
      const i=t.cellTotalHeights,r=t.scrollPosition?.top??0,s=r+Math.max(this._dimension?.height??0,1080);
      let o=0;
      const a=[];
      for(let l=0;
      l<e.length;
      l++){
        const u=e.cellAt(l),d=i[l]??0;
        if(o+d<r){
          o+=d;
          continue
        }
        if(u.cellKind===zd.Markup&&a.push([u,o]),o+=d,o>s)break
      }
      await this._webview.initializeMarkup(a.map(([l,u])=>this.createMarkupCellInitialization(l,u)))
    }
    else{
      const i=e.viewCells.filter(a=>a.cellKind===zd.Markup).slice(0,5).map(a=>this.createMarkupCellInitialization(a,-1e4));
      await this._webview.initializeMarkup(i);
      let r=0;
      const s=[],o=Math.max(this._dimension?.height??0,1080);
      for(const a of e.viewCells)if(a.cellKind===zd.Markup&&s.push({
        id:a.id,top:r
      }),r+=a.getHeight(this.getLayoutInfo().fontInfo.lineHeight),r>o)break;
      this._webview?.updateScrollTops([],s)
    }
  }
  createMarkupCellInitialization(e, t){
    return{
      mime:e.mime,cellId:e.id,cellHandle:e.handle,content:e.getText(),offset:t,visible:!1,metadata:e.metadata
    }
  }
  restoreListViewState(e){
    if(!this.viewModel)return;
    e?.scrollPosition!==void 0?(this._list.scrollTop=e.scrollPosition.top, this._list.scrollLeft=e.scrollPosition.left):(this._list.scrollTop=0, this._list.scrollLeft=0);
    const t=typeof e?.focus=="number"?e.focus:0;
    if(t<this.viewModel.length){
      const i=this.viewModel.cellAt(t);
      i&&this.viewModel?.updateSelectionsState({
        kind:Wy.Handle,primary:i.handle,selections:[i.handle]
      })
    }
    else this._list.length>0&&this.viewModel.updateSelectionsState({
      kind:Wy.Index,focus:{
        start:0,end:1
      },selections:[{
        start:0,end:1
      }
      ]
    });
    if(e?.editorFocused){
      const i=this.viewModel.cellAt(t);
      i&&(i.focusMode=Tk.Editor)
    }
  }
  _restoreSelectedKernel(e){
    if(e?.selectedKernelId&&this.textModel){
      const t=this.notebookKernelService.getMatchingKernel(this.textModel),i=t.all.find(r=>r.id===e.selectedKernelId);
      i&&!t.selected&&this.notebookKernelService.selectKernelForNotebook(i,this.textModel)
    }
  }
  getEditorViewState(){
    const e=this.viewModel?.getEditorViewState();
    if(!e)return{
      editingCells:{
        
      },cellLineNumberStates:{
        
      },editorViewStates:{
        
      },collapsedInputCells:{
        
      },collapsedOutputCells:{
        
      }
    };
    if(this._list){
      e.scrollPosition={
        left:this._list.scrollLeft,top:this._list.scrollTop
      };
      const i={
        
      };
      for(let r=0;
      r<this.viewModel.length;
      r++){
        const s=this.viewModel.cellAt(r);
        i[r]=s.layoutInfo.totalHeight
      }
      if(e.cellTotalHeights=i,this.viewModel){
        const r=this.viewModel.getFocus(),s=this.viewModel.cellAt(r.start);
        if(s){
          const o=this._list.domElementOfElement(s),a=s.getEditState()===aw.Editing&&!!(o&&o.ownerDocument.activeElement&&o.contains(o.ownerDocument.activeElement));
          e.editorFocused=a,e.focus=r.start
        }
      }
    }
    const t={
      
    };
    for(const[i, r]of this._contributions)typeof r.saveViewState=="function"&&(t[i]=r.saveViewState());
    return e.contributionsState=t, this.textModel?.uri.scheme===_n.untitled&&(e.selectedKernelId=this.activeKernel?.id), e
  }
  _allowScrollBeyondLastLine(){
    return this._scrollBeyondLastLine&&!this.isReplHistory
  }
  getBodyHeight(e){
    return Math.max(e-(this._notebookTopToolbar?.useGlobalToolbar?26:0), 0)
  }
  layout(e, t, i){
    if(!t&&this._shadowElementViewInfo===null){
      this._dimension=e,this._position=i;
      return
    }
    if(e.width<=0||e.height<=0){
      this.onWillHide();
      return
    }
    const r=this.layoutService.whenContainerStylesLoaded(As(this.getDomNode()));
    r?r.then(()=>this.layoutNotebook(e, t, i)):this.layoutNotebook(e, t, i)
  }
  layoutNotebook(e, t, i){
    if(t&&this.updateShadowElement(t, e, i), this._shadowElementViewInfo&&this._shadowElementViewInfo.width<=0&&this._shadowElementViewInfo.height<=0){
      this.onWillHide();
      return
    }
    this._dimension=e, this._position=i;
    const r=this.getBodyHeight(e.height)-this.getLayoutInfo().stickyHeight;
    Jgt(this._body, e.width, r);
    const s=r;
    this._list.getRenderHeight()<s?(this._list.updateOptions({
      paddingBottom:this._allowScrollBeyondLastLine()?Math.max(0,s-50):0,paddingTop:0
    }), this._list.layout(s, e.width)):(this._list.layout(s, e.width), this._list.updateOptions({
      paddingBottom:this._allowScrollBeyondLastLine()?Math.max(0,s-50):0,paddingTop:0
    })), this._overlayContainer.inert=!1, this._overlayContainer.style.visibility="visible", this._overlayContainer.style.display="block", this._overlayContainer.style.position="absolute", this._overlayContainer.style.overflow="hidden", this.layoutContainerOverShadowElement(e, i), this._webviewTransparentCover&&(this._webviewTransparentCover.style.height=`${e.height}px`, this._webviewTransparentCover.style.width=`${e.width}px`), this._notebookTopToolbar.layout(this._dimension), this._notebookOverviewRuler.layout(), this._viewContext?.eventDispatcher.emit([new lpu({
      width:!0,fontInfo:!0
    }, this.getLayoutInfo())])
  }
  updateShadowElement(e, t, i){
    if(this._shadowElement=e, t&&i)this._shadowElementViewInfo={
      height:t.height,width:t.width,top:i.top,left:i.left
    };
    else{
      const r=e.getBoundingClientRect();
      this._shadowElementViewInfo={
        height:r.height,width:r.width,top:r.top,left:r.left
      }
    }
  }
  layoutContainerOverShadowElement(e, t){
    if(e&&t){
      this._overlayContainer.style.top=`${t.top}px`,this._overlayContainer.style.left=`${t.left}px`,this._overlayContainer.style.width=`${e.width}px`,this._overlayContainer.style.height=`${e.height}px`;
      return
    }
    if(!this._shadowElementViewInfo)return;
    const i=this._overlayContainer.parentElement?.getBoundingClientRect();
    this._overlayContainer.style.top=`${this._shadowElementViewInfo.top-(i?.top||0)}px`, this._overlayContainer.style.left=`${this._shadowElementViewInfo.left-(i?.left||0)}px`, this._overlayContainer.style.width=`${e?e.width:this._shadowElementViewInfo.width}px`, this._overlayContainer.style.height=`${e?e.height:this._shadowElementViewInfo.height}px`
  }
  focus(){
    if(this._isVisible=!0, this._editorFocus.set(!0), this._webviewFocused)this._webview?.focusWebview();
    else{
      if(this.viewModel){
        const e=this.viewModel.getFocus(),t=this.viewModel.cellAt(e.start);
        if(this.hasEditorFocus()||(this.focusContainer(),this.updateEditorFocus()),t&&t.focusMode===Tk.Editor){
          t.updateEditState(aw.Editing,"editorWidget.focus"),t.focusMode=Tk.Editor,this.focusEditor(t);
          return
        }
      }
      this._list.domFocus()
    }
    this._currentProgress&&this.showProgress()
  }
  onShow(){
    this._isVisible=!0
  }
  focusEditor(e){
    for(const[t, i]of this._renderedEditors.entries())if(t===e){
      i.focus();
      return
    }
  }
  focusContainer(e=!1){
    this._webviewFocused?this._webview?.focusWebview():this._list.focusContainer(e)
  }
  selectOutputContent(e){
    this._webview?.selectOutputContents(e)
  }
  selectInputContents(e){
    this._webview?.selectInputContents(e)
  }
  onWillHide(){
    this._isVisible=!1, this._editorFocus.set(!1), this._overlayContainer.inert=!0, this._overlayContainer.style.visibility="hidden", this._overlayContainer.style.left="-50000px", this._notebookTopToolbarContainer.style.display="none", this.clearActiveCellWidgets()
  }
  clearActiveCellWidgets(){
    this._renderedEditors.forEach((e, t)=>{
      this.getActiveCell()===t&&e&&(aR.get(e)?.cancelSuggestWidget(),mme.get(e)?.clearWidgets(),ZH.get(e)?.clearWidgets())
    }), this._renderedEditors.forEach((e, t)=>{
      iP.get(e)?.model.get()?.inlineEditState.get()&&e.render(!0)
    })
  }
  editorHasDomFocus(){
    return UR(this.getDomNode())
  }
  updateEditorFocus(){
    this._focusTracker.refreshState();
    const e=this.editorHasDomFocus();
    this._editorFocus.set(e), this.viewModel?.setEditorFocus(e)
  }
  updateCellFocusMode(){
    const e=this.getActiveCell();
    e?.focusMode===Tk.Output&&!this._webviewFocused&&(e.focusMode=Tk.Container)
  }
  hasEditorFocus(){
    return this.updateEditorFocus(), this.editorHasDomFocus()
  }
  hasWebviewFocus(){
    return this._webviewFocused
  }
  hasOutputTextSelection(){
    if(!this.hasEditorFocus())return!1;
    const e=As(this.getDomNode()).getSelection();
    if(e?.rangeCount!==1)return!1;
    const t=e.getRangeAt(0);
    if(t.startContainer===t.endContainer&&t.endOffset-t.startOffset===0)return!1;
    let i=t.commonAncestorContainer;
    if(!this._body.contains(i))return!1;
    for(;
    i&&i!==this._body;
    ){
      if(i.classList&&i.classList.contains("output"))return!0;
      i=i.parentNode
    }
    return!1
  }
  _didFocusOutputInputChange(e){
    this._outputInputFocus.set(e)
  }
  focusElement(e){
    this.viewModel?.updateSelectionsState({
      kind:Wy.Handle,primary:e.handle,selections:[e.handle]
    })
  }
  get scrollTop(){
    return this._list.scrollTop
  }
  get scrollBottom(){
    return this._list.scrollTop+this._list.getRenderHeight()
  }
  getAbsoluteTopOfElement(e){
    return this._list.getCellViewScrollTop(e)
  }
  getHeightOfElement(e){
    return this._list.elementHeight(e)
  }
  scrollToBottom(){
    this._list.scrollToBottom()
  }
  setScrollTop(e){
    this._list.scrollTop=e
  }
  revealCellRangeInView(e){
    return this._list.revealCells(e)
  }
  revealInView(e){
    return this._list.revealCell(e, 1)
  }
  revealInViewAtTop(e){
    this._list.revealCell(e, 2)
  }
  revealInCenter(e){
    this._list.revealCell(e, 3)
  }
  async revealInCenterIfOutsideViewport(e){
    await this._list.revealCell(e, 4)
  }
  async revealFirstLineIfOutsideViewport(e){
    await this._list.revealCell(e, 6)
  }
  async revealLineInViewAsync(e, t){
    return this._list.revealRangeInCell(e, new Zt(t, 1, t, 1), Axe.Default)
  }
  async revealLineInCenterAsync(e, t){
    return this._list.revealRangeInCell(e, new Zt(t, 1, t, 1), Axe.Center)
  }
  async revealLineInCenterIfOutsideViewportAsync(e, t){
    return this._list.revealRangeInCell(e, new Zt(t, 1, t, 1), Axe.CenterIfOutsideViewport)
  }
  async revealRangeInViewAsync(e, t){
    return this._list.revealRangeInCell(e, t, Axe.Default)
  }
  async revealRangeInCenterAsync(e, t){
    return this._list.revealRangeInCell(e, t, Axe.Center)
  }
  async revealRangeInCenterIfOutsideViewportAsync(e, t){
    return this._list.revealRangeInCell(e, t, Axe.CenterIfOutsideViewport)
  }
  revealCellOffsetInCenter(e, t){
    return this._list.revealCellOffsetInCenter(e, t)
  }
  revealOffsetInCenterIfOutsideViewport(e){
    return this._list.revealOffsetInCenterIfOutsideViewport(e)
  }
  getViewIndexByModelIndex(e){
    if(!this._listViewInfoAccessor)return-1;
    const t=this.viewModel?.viewCells[e];
    return t?this._listViewInfoAccessor.getViewIndex(t):-1
  }
  getViewHeight(e){
    return this._listViewInfoAccessor?this._listViewInfoAccessor.getViewHeight(e):-1
  }
  getCellRangeFromViewRange(e, t){
    return this._listViewInfoAccessor.getCellRangeFromViewRange(e, t)
  }
  getCellsInRange(e){
    return this._listViewInfoAccessor.getCellsInRange(e)
  }
  setCellEditorSelection(e, t){
    this._list.setCellEditorSelection(e, t)
  }
  setHiddenAreas(e){
    return this._list.setHiddenAreas(e, !0)
  }
  getVisibleRangesPlusViewportAboveAndBelow(){
    return this._listViewInfoAccessor.getVisibleRangesPlusViewportAboveAndBelow()
  }
  deltaCellDecorations(e, t){
    const i=this.viewModel?.deltaCellDecorations(e, t)||[];
    return this._onDidChangeDecorations.fire(), i
  }
  deltaCellContainerClassNames(e, t, i, r){
    r===zd.Markup?this._webview?.deltaMarkupPreviewClassNames(e, t, i):this._webview?.deltaCellOutputContainerClassNames(e, t, i)
  }
  changeModelDecorations(e){
    return this.viewModel?.changeModelDecorations(e)||null
  }
  changeViewZones(e){
    this._list.changeViewZones(e), this._onDidChangeLayout.fire()
  }
  getViewZoneLayoutInfo(e){
    return this._list.getViewZoneLayoutInfo(e)
  }
  changeCellOverlays(e){
    this._list.changeCellOverlays(e)
  }
  async _loadKernelPreloads(){
    if(!this.hasModel())return;
    const{
      selected:e
    }
    =this.notebookKernelService.getMatchingKernel(this.textModel);
    this._webview?.isResolved()||await this._resolveWebview(), this._webview?.updateKernelPreloads(e)
  }
  get activeKernel(){
    return this.textModel&&this.notebookKernelService.getSelectedOrSuggestedKernel(this.textModel)
  }
  async cancelNotebookCells(e){
    if(!(!this.viewModel||!this.hasModel()))return e||(e=this.viewModel.viewCells), this.notebookExecutionService.cancelNotebookCellHandles(this.textModel, Array.from(e).map(t=>t.handle))
  }
  async executeNotebookCells(e){
    if(!this.viewModel||!this.hasModel()){
      this.logService.info("notebookEditorWidget","No NotebookViewModel, cannot execute cells");
      return
    }
    return e||(e=this.viewModel.viewCells), this.notebookExecutionService.executeNotebookCells(this.textModel, Array.from(e).map(t=>t.model), this.scopedContextKeyService)
  }
  async layoutNotebookCell(e, t, i){
    if(this._debug("layout cell", e.handle, t), this._list.getViewIndex(e)===void 0)return;
    this._pendingLayouts?.has(e)&&this._pendingLayouts?.get(e).dispose();
    const s=new wy, o=()=>{
      if(this._isDisposed||!this.viewModel?.hasCell(e)||this._list.getViewIndex(e)===void 0||this._list.elementHeight(e)===t)return;
      const a=this._pendingLayouts?.get(e);
      if(this._pendingLayouts?.delete(e),!this.hasEditorFocus()){
        const l=this.viewModel?.getCellIndex(e),u=this.visibleRanges;
        if(l!==void 0&&u&&u.length&&u[0].start===l&&this._list.scrollTop>this.getAbsoluteTopOfElement(e))return this._list.updateElementHeight2(e,t,Math.min(l+1,this.getLength()-1))
      }
      this._list.updateElementHeight2(e,t),s.complete(void 0),a&&(a.dispose(),this._layoutDisposables.delete(a))
    };
    if(this._list.inRenderingTransaction){
      const a=r_(As(this.getDomNode()),o),l=$i(()=>{
        a.dispose(),s.complete(void 0)
      });
      this._pendingLayouts?.set(e,l),this._layoutDisposables.add(l)
    }
    else o();
    return s.p
  }
  getActiveCell(){
    const e=this._list.getFocusedElements();
    if(e&&e.length)return e[0]
  }
  _toggleNotebookCellSelection(e, t){
    const i=this._list.getSelectedElements(), r=i.includes(e), s=t?i[i.length-1]??e:e, o=this._list.getViewIndex(e), a=this._list.getViewIndex(s), l=this.getCellsInViewRange(o, a);
    r?this._list.selectElements(i.filter(u=>!l.includes(u))):(this.focusElement(e), this._list.selectElements([...i.filter(u=>!l.includes(u)), ...l]))
  }
  getCellsInViewRange(e, t){
    const i=[];
    for(let r=0;
    r<this._list.length;
    ++r){
      const s=this._list.element(r);
      s&&(r>=e&&r<=t||r>=t&&r<=e)&&i.push(s)
    }
    return i
  }
  async focusNotebookCell(e, t, i){
    if(!this._isDisposed)if(e.focusedOutputId=void 0, t==="editor"){
      if(e.isInputCollapsed=!1,this.focusElement(e),this._list.focusView(),e.updateEditState(aw.Editing,"focusNotebookCell"),e.focusMode=Tk.Editor,!i?.skipReveal)if(typeof i?.focusEditorLine=="number"){
        this._cursorNavMode.set(!0),await this.revealLineInViewAsync(e,i.focusEditorLine);
        const r=this._renderedEditors.get(e),s=i.focusEditorLine;
        r?.setSelection({
          startLineNumber:s,startColumn:1,endLineNumber:s,endColumn:1
        })
      }
      else{
        const r=e.getSelectionsStartPosition();
        if(r?.length){
          const s=r[0];
          await this.revealRangeInViewAsync(e,Zt.fromPositions(s,s))
        }
        else await this.revealInView(e)
      }
    }
    else if(t==="output"){
      if(this.focusElement(e),this.hasEditorFocus()||this._list.focusView(),!this._webview)return;
      const r=e.outputsViewModels.find(o=>o.model.alternativeOutputId)?.model.alternativeOutputId,s=i?.outputId??r??e.id;
      this._webview.focusOutput(s,i?.altOutputId,i?.outputWebviewFocused||this._webviewFocused),e.updateEditState(aw.Preview,"focusNotebookCell"),e.focusMode=Tk.Output,e.focusedOutputId=i?.outputId,this._outputFocus.set(!0),i?.skipReveal||this.revealInCenterIfOutsideViewport(e)
    }
    else{
      const r=this._list.domElementOfElement(e);
      r&&r.ownerDocument.activeElement&&r.contains(r.ownerDocument.activeElement)&&r.ownerDocument.activeElement.blur(),this._webview?.blurOutput(),e.updateEditState(aw.Preview,"focusNotebookCell"),e.focusMode=Tk.Container,this.focusElement(e),i?.skipReveal||(typeof i?.focusEditorLine=="number"?(this._cursorNavMode.set(!0),await this.revealInView(e)):i?.revealBehavior===zbn.firstLine?await this.revealFirstLineIfOutsideViewport(e):i?.revealBehavior===zbn.fullCell?await this.revealInView(e):await this.revealInCenterIfOutsideViewport(e)),this._list.focusView(),this.updateEditorFocus()
    }
  }
  async focusNextNotebookCell(e, t){
    const i=this.viewModel?.getCellIndex(e);
    if(typeof i!="number")return;
    const r=this.viewModel?.cellAt(i+1);
    r&&await this.focusNotebookCell(r, t)
  }
  async _warmupCell(e){
    if(e.isOutputCollapsed)return;
    const t=e.outputsViewModels;
    for(const i of t.slice(0, iTa)){
      const[r,s]=i.resolveMimeTypes(this.textModel,void 0);
      if(!r.find(d=>d.isTrusted)||r.length===0)continue;
      const o=r[s];
      if(!o)return;
      const a=this._notebookService.getRendererInfo(o.rendererId);
      if(!a)return;
      const l={
        type:1,renderer:a,source:i,mimeType:o.mimeType
      },u=this._webview?.insetMapping.get(l.source);
      if(!u||!u.initialized){
        const d=new Promise(m=>{
          this._register(In.any(this.onDidRenderOutput,this.onDidRemoveOutput)(p=>{
            p.model===l.source.model&&m()
          }))
        });
        this.createOutput(e,l,0,!1),await d
      }
      else this.createOutput(e,l,0,!1);
      return
    }
  }
  async _warmupAll(e){
    if(!this.hasModel()||!this.viewModel)return;
    const t=this.viewModel.viewCells, i=[];
    for(let r=0;
    r<t.length;
    r++)t[r].cellKind===zd.Markup&&!this._webview.markupPreviewMapping.has(t[r].id)&&i.push(this.createMarkupPreview(t[r]));
    if(e&&this._list)for(let r=0;
    r<this._list.length;
    r++){
      const s=this._list.element(r);
      s?.cellKind===zd.Code&&i.push(this._warmupCell(s))
    }
    return Promise.all(i)
  }
  async _warmupSelection(e, t){
    if(!this.hasModel()||!this.viewModel)return;
    const i=this.viewModel.viewCells, r=[];
    for(const s of t)for(let o=s.start;
    o<s.end;
    o++)i[o].cellKind===zd.Markup&&!this._webview.markupPreviewMapping.has(i[o].id)&&r.push(this.createMarkupPreview(i[o]));
    if(e&&this._list)for(const s of t)for(let o=s.start;
    o<s.end;
    o++){
      const a=this._list.element(o);
      a?.cellKind===zd.Code&&r.push(this._warmupCell(a))
    }
    return Promise.all(r)
  }
  async find(e, t, i, r=!1, s=!1, o){
    if(!this._notebookViewModel)return[];
    o||(o=this.getId());
    const a=this._notebookViewModel.find(e, t).filter(d=>d.length>0);
    if(!t.includeMarkupPreview&&!t.includeOutput||t.findScope?.findScopeType===Wne.Text)return this._webview?.findStop(o), a;
    const l={
      
    };
    if(a.forEach(d=>{
      l[d.cell.id]=d
    }), this._webview){
      const d=Date.now();
      t.findScope&&t.findScope.findScopeType===Wne.Cells&&t.findScope.selectedCellRanges?await this._warmupSelection(!!t.includeOutput,t.findScope.selectedCellRanges):await this._warmupAll(!!t.includeOutput);
      const m=Date.now();
      if(this.logService.debug("Find",`Warmup time: ${m-d}ms`),i.isCancellationRequested)return[];
      let p=[];
      t.findScope&&t.findScope.findScopeType===Wne.Cells&&t.findScope.selectedCellRanges&&(p=Qne(t.findScope.selectedCellRanges).map(A=>this._notebookViewModel?.viewCells[A].id??""));
      const g=await this._webview.find(e,{
        caseSensitive:t.caseSensitive,wholeWord:t.wholeWord,includeMarkup:!!t.includeMarkupPreview,includeOutput:!!t.includeOutput,shouldGetSearchPreviewInfo:s,ownerID:o,findIds:p
      });
      if(i.isCancellationRequested)return[];
      g.forEach(f=>{
        const A=this._notebookViewModel.viewCells.find(C=>C.id===f.cellId);
        if(!A)return;
        if(f.type==="preview"){
          if(A.getEditState()===aw.Preview&&!t.includeMarkupPreview||A.getEditState()===aw.Editing&&t.includeMarkupInput)return
        }
        else if(!t.includeOutput)return;
        const w=l[f.cellId];
        w?w.webviewMatches.push(f):l[f.cellId]=new Aki(this._notebookViewModel.viewCells.find(C=>C.id===f.cellId),this._notebookViewModel.viewCells.findIndex(C=>C.id===f.cellId),[],[f])
      })
    }
    const u=[];
    return this._notebookViewModel.viewCells.forEach((d, m)=>{
      l[d.id]&&u.push(new Aki(d,m,l[d.id].contentMatches,l[d.id].webviewMatches))
    }), u
  }
  async findHighlightCurrent(e, t){
    return this._webview?this._webview?.findHighlightCurrent(e, t??this.getId()):0
  }
  async findUnHighlightCurrent(e, t){
    if(this._webview)return this._webview?.findUnHighlightCurrent(e, t??this.getId())
  }
  findStop(e){
    this._webview?.findStop(e??this.getId())
  }
  getLayoutInfo(){
    if(!this._list)throw new Error("Editor is not initalized successfully");
    return this._fontInfo||this._generateFontInfo(), {
      width:this._dimension?.width??0,height:this._dimension?.height??0,scrollHeight:this._list?.getScrollHeight()??0,fontInfo:this._fontInfo,stickyHeight:this._notebookStickyScroll?.getCurrentStickyHeight()??0
    }
  }
  async createMarkupPreview(e){
    if(!this._webview||(this._webview.isResolved()||await this._resolveWebview(), !this._webview||!this._list.webviewElement)||!this.viewModel||!this._list.viewModel||this.viewModel.getCellIndex(e)===-1||this.cellIsHidden(e))return;
    const t=parseInt(this._list.webviewElement.domNode.style.top, 10), i=t?0-t:0, r=this._list.getCellViewScrollTop(e);
    await this._webview.showMarkupPreview({
      mime:e.mime,cellHandle:e.handle,cellId:e.id,content:e.getText(),offset:r+i,visible:!0,metadata:e.metadata
    })
  }
  cellIsHidden(e){
    const t=this.viewModel.getCellIndex(e);
    return this.viewModel.getHiddenRanges().some(r=>t>=r.start&&t<=r.end)
  }
  async unhideMarkupPreviews(e){
    this._webview&&(this._webview.isResolved()||await this._resolveWebview(), await this._webview?.unhideMarkupPreviews(e.map(t=>t.id)))
  }
  async hideMarkupPreviews(e){
    !this._webview||!e.length||(this._webview.isResolved()||await this._resolveWebview(), await this._webview?.hideMarkupPreviews(e.map(t=>t.id)))
  }
  async deleteMarkupPreviews(e){
    this._webview&&(this._webview.isResolved()||await this._resolveWebview(), await this._webview?.deleteMarkupPreviews(e.map(t=>t.id)))
  }
  async updateSelectedMarkdownPreviews(){
    if(!this._webview)return;
    this._webview.isResolved()||await this._resolveWebview();
    const e=this.getSelectionViewModels().map(t=>t.id);
    await this._webview?.updateMarkupPreviewSelections(e.length>1?e:[])
  }
  async createOutput(e, t, i, r){
    this._insetModifyQueueByOutputId.queue(t.source.model.outputId, async()=>{
      if(this._isDisposed||!this._webview||(this._webview.isResolved()||await this._resolveWebview(),!this._webview)||!this._list.webviewElement)return;
      t.type===1&&this.notebookRendererMessaging.prepare(t.renderer.id);
      const s=parseInt(this._list.webviewElement.domNode.style.top,10),o=s?0-s:0,a=this._list.getCellViewScrollTop(e)+o,l=this._webview.insetMapping.get(t.source);
      if(!l||!l.renderer&&t.type===1)r?this._webview.requestCreateOutputWhenWebviewIdle({
        cellId:e.id,cellHandle:e.handle,cellUri:e.uri,executionId:e.internalMetadata.executionId
      },t,a,i):this._webview.createOutput({
        cellId:e.id,cellHandle:e.handle,cellUri:e.uri,executionId:e.internalMetadata.executionId
      },t,a,i);
      else if(l.renderer&&t.type===1&&l.renderer.id!==t.renderer.id)this._webview.removeInsets([t.source]),this._webview.createOutput({
        cellId:e.id,cellHandle:e.handle,cellUri:e.uri
      },t,a,i);
      else if(l.versionId!==t.source.model.versionId)this._webview.updateOutput({
        cellId:e.id,cellHandle:e.handle,cellUri:e.uri,executionId:e.internalMetadata.executionId
      },t,a,i);
      else{
        const u=e.outputsViewModels.indexOf(t.source),d=e.getOutputOffset(u);
        this._webview.updateScrollTops([{
          cell:e,output:t.source,cellTop:a,outputOffset:d,forceDisplay:!e.isOutputCollapsed
        }
        ],[])
      }
    })
  }
  async updateOutput(e, t, i){
    this._insetModifyQueueByOutputId.queue(t.source.model.outputId, async()=>{
      if(this._isDisposed||!this._webview||e.isOutputCollapsed||(this._webview.isResolved()||await this._resolveWebview(),!this._webview||!this._list.webviewElement))return;
      if(!this._webview.insetMapping.has(t.source))return this.createOutput(e,t,i,!1);
      t.type===1&&this.notebookRendererMessaging.prepare(t.renderer.id);
      const r=parseInt(this._list.webviewElement.domNode.style.top,10),s=r?0-r:0,o=this._list.getCellViewScrollTop(e)+s;
      this._webview.updateOutput({
        cellId:e.id,cellHandle:e.handle,cellUri:e.uri
      },t,o,i)
    })
  }
  async copyOutputImage(e){
    this._webview?.copyImage(e)
  }
  removeInset(e){
    this._insetModifyQueueByOutputId.queue(e.model.outputId, async()=>{
      this._isDisposed||!this._webview||(this._webview?.isResolved()&&this._webview.removeInsets([e]),this._onDidRemoveOutput.fire(e))
    })
  }
  hideInset(e){
    this._insetModifyQueueByOutputId.queue(e.model.outputId, async()=>{
      this._isDisposed||!this._webview||this._webview?.isResolved()&&this._webview.hideInset(e)
    })
  }
  postMessage(e){
    this._webview?.isResolved()&&this._webview.postKernelMessage(e)
  }
  addClassName(e){
    this._overlayContainer.classList.add(e)
  }
  removeClassName(e){
    this._overlayContainer.classList.remove(e)
  }
  cellAt(e){
    return this.viewModel?.cellAt(e)
  }
  getCellByInfo(e){
    const{
      cellHandle:t
    }
    =e;
    return this.viewModel?.viewCells.find(i=>i.handle===t)
  }
  getCellByHandle(e){
    return this.viewModel?.getCellByHandle(e)
  }
  getCellsBefore(e){
    return this.viewModel?.getCellsBefore(e)
  }
  getCellsAfter(e){
    return this.viewModel?.getCellsAfter(e)
  }
  getCellIndex(e){
    return this.viewModel?.getCellIndexByHandle(e.handle)
  }
  getNextVisibleCellIndex(e){
    return this.viewModel?.getNextVisibleCellIndex(e)
  }
  getPreviousVisibleCellIndex(e){
    return this.viewModel?.getPreviousVisibleCellIndex(e)
  }
  _updateScrollHeight(){
    if(this._isDisposed||!this._webview?.isResolved()||!this._list.webviewElement)return;
    const e=this._list.scrollHeight;
    this._webview.element.style.height=`${e+gbn*2}px`;
    const t=parseInt(this._list.webviewElement.domNode.style.top, 10), i=t?0-t:0, r=[], s=[];
    this._webview?.insetMapping.forEach((a, l)=>{
      const u=this.viewModel?.getCellByHandle(a.cellInfo.cellHandle);
      if(!u||!(u instanceof jJ)||(this.viewModel?.viewCells.find(f=>f.handle===a.cellInfo.cellHandle),this._list.getViewIndex(u)===void 0))return;
      u.outputsViewModels.indexOf(l)<0&&s.push(l);
      const m=this._list.getCellViewScrollTop(u),p=u.outputsViewModels.indexOf(l),g=u.getOutputOffset(p);
      r.push({
        cell:u,output:l,cellTop:m+i,outputOffset:g,forceDisplay:!1
      })
    }), this._webview.removeInsets(s);
    const o=[];
    for(const a of this._webview.markupPreviewMapping.keys()){
      const l=this.viewModel?.viewCells.find(u=>u.id===a);
      if(l){
        const u=this._list.getCellViewScrollTop(l);
        o.push({
          id:a,top:u+i
        })
      }
    }
    (o.length||r.length)&&(this._debug("_list.onDidChangeContentHeight/markdown", o), this._webview?.updateScrollTops(r, o))
  }
  _updateOutputHeight(e, t, i, r, s){
    const o=this.viewModel?.viewCells.find(a=>a.handle===e.cellHandle);
    if(o&&o instanceof jJ){
      const a=o.outputsViewModels.indexOf(t);
      a>-1?(this._debug("update cell output",o.handle,i),o.updateOutputHeight(a,i,s),this.layoutNotebookCell(o,o.layoutInfo.totalHeight),r&&this._onDidRenderOutput.fire(t)):this._debug("tried to update cell output that does not exist")
    }
  }
  _scheduleOutputHeightAck(e, t, i){
    const r=this._pendingOutputHeightAcks.size===0;
    this._pendingOutputHeightAcks.set(t, {
      cellId:e.cellId,outputId:t,height:i
    }), r&&r_(As(this.getDomNode()), ()=>{
      this._debug("ack height"),this._updateScrollHeight(),this._webview?.ackHeight([...this._pendingOutputHeightAcks.values()]),this._pendingOutputHeightAcks.clear()
    }, -1)
  }
  _getCellById(e){
    return this.viewModel?.viewCells.find(t=>t.id===e)
  }
  _updateMarkupCellHeight(e, t, i){
    const r=this._getCellById(e);
    if(r&&r instanceof GV){
      const{
        bottomToolbarGap:s
      }
      =this._notebookOptions.computeBottomToolbarDimensions(this.viewModel?.viewType);
      this._debug("updateMarkdownCellHeight",r.handle,t+s,i),r.renderedMarkdownHeight=t
    }
  }
  _setMarkupCellEditState(e, t){
    const i=this._getCellById(e);
    i instanceof GV&&(this.revealInView(i), i.updateEditState(t, "setMarkdownCellEditState"))
  }
  _didStartDragMarkupCell(e, t){
    const i=this._getCellById(e);
    if(i instanceof GV){
      const r=this._list.webviewElement?-parseInt(this._list.webviewElement.domNode.style.top,10):0;
      this._dndController?.startExplicitDrag(i,t.dragOffsetY-r)
    }
  }
  _didDragMarkupCell(e, t){
    const i=this._getCellById(e);
    if(i instanceof GV){
      const r=this._list.webviewElement?-parseInt(this._list.webviewElement.domNode.style.top,10):0;
      this._dndController?.explicitDrag(i,t.dragOffsetY-r)
    }
  }
  _didDropMarkupCell(e, t){
    const i=this._getCellById(e);
    if(i instanceof GV){
      const r=this._list.webviewElement?-parseInt(this._list.webviewElement.domNode.style.top,10):0;
      t.dragOffsetY-=r,this._dndController?.explicitDrop(i,t)
    }
  }
  _didEndDragMarkupCell(e){
    const t=this._getCellById(e);
    t instanceof GV&&this._dndController?.endExplicitDrag(t)
  }
  _didResizeOutput(e){
    const t=this._getCellById(e);
    t&&this._onDidResizeOutputEmitter.fire(t)
  }
  _updatePerformanceMetadata(e, t, i, r){
    if(!this.hasModel())return;
    const s=this._getCellById(e), o=s?this.getCellIndex(s):void 0;
    if(s?.internalMetadata.executionId===t&&o!==void 0){
      const a=s.internalMetadata.renderDuration||{
        
      };
      a[r]=(a[r]??0)+i,this.textModel.applyEdits([{
        editType:9,index:o,internalMetadata:{
          executionId:t,renderDuration:a
        }
      }
      ],!0,void 0,()=>{
        
      },void 0,!1)
    }
  }
  getContribution(e){
    return this._contributions.get(e)||null
  }
  dispose(){
    this._isDisposed=!0, this._webview?.dispose(), this._webview=null, this._layoutDisposables.forEach(e=>e.dispose()), this.notebookEditorService.removeNotebookEditor(this), Bo(this._contributions.values()), this._contributions.clear(), this._localStore.clear(), Bo(this._localCellStateListeners), this._list.dispose(), this._listTopCellToolbar?.dispose(), this._overlayContainer.remove(), this.viewModel?.dispose(), this._renderedEditors.clear(), this._baseCellEditorOptions.forEach(e=>e.dispose()), this._baseCellEditorOptions.clear(), this._notebookOverviewRulerContainer.remove(), super.dispose(), this._webview=null, this._webviewResolvePromise=null, this._webviewTransparentCover=null, this._dndController=null, this._listTopCellToolbar=null, this._notebookViewModel=void 0, this._cellContextKeyManager=null, this._notebookTopToolbar=null, this._list=null, this._listViewInfoAccessor=null, this._pendingLayouts=null, this._listDelegate=null
  }
  toJSON(){
    return{
      notebookUri:this.viewModel?.uri
    }
  }
}, Nbn=__decorate([__param(2, ln), __param(3, da), __param(4, eIa), __param(5, pO), __param(6, NM), __param(7, JA), __param(8, Fn), __param(9, wi), __param(10, vS), __param(11, kc), __param(12, ea), __param(13, wki), __param(14, p2), __param(15, awe)], Nbn), Rie(TQ.Base, 5, "notebook-progress-bar"), Rie(TQ.Base, 10, "notebook-list-insertion-indicator"), Rie(TQ.Base, 20, "notebook-cell-editor-outline"), Rie(TQ.Base, 25, "notebook-scrollbar"), Rie(TQ.Base, 26, "notebook-cell-status"), Rie(TQ.Base, 26, "notebook-folding-indicator"), Rie(TQ.Base, 27, "notebook-output"), Rie(TQ.Base, 28, "notebook-cell-bottom-toolbar-container"), Rie(TQ.Base, 29, "notebook-run-button-container"), Rie(TQ.Base, 29, "notebook-input-collapse-condicon"), Rie(TQ.Base, 30, "notebook-cell-output-toolbar"), Rie(TQ.Sash, 1, "notebook-cell-expand-part-button"), Rie(TQ.Sash, 2, "notebook-cell-toolbar"), Rie(TQ.Sash, 3, "notebook-cell-toolbar-dropdown-active"), uIa=Rn("notebook.cellBorderColor", {
  dark:rl(pW, 1), light:rl(pW, 1), hcDark:BV, hcLight:BV
}, _(9378, null)), zdy=Rn("notebook.focusedEditorBorder", nN, _(9379, null)), u6f=Rn("notebookStatusSuccessIcon.foreground", p_i, _(9380, null)), d6f=Rn("notebookEditorOverviewRuler.runningCellForeground", p_i, _(9381, null)), h6f=Rn("notebookStatusErrorIcon.foreground", P4n, _(9382, null)), Vdy=Rn("notebookStatusRunningIcon.foreground", ym, _(9383, null)), Kdy=Rn("notebook.outputContainerBorderColor", null, _(9384, null)), Ydy=Rn("notebook.outputContainerBackgroundColor", null, _(9385, null)), Zdy=Rn("notebook.cellToolbarSeparator", {
  dark:Xr.fromHex("#808080").transparent(.35), light:Xr.fromHex("#808080").transparent(.35), hcDark:Du, hcLight:Du
}, _(9386, null)), T_u=Rn("notebook.focusedCellBackground", null, _(9387, null)), Xdy=Rn("notebook.selectedCellBackground", {
  dark:pW, light:pW, hcDark:null, hcLight:null
}, _(9388, null)), ehy=Rn("notebook.cellHoverBackground", {
  dark:rl(T_u, .5), light:rl(T_u, .7), hcDark:null, hcLight:null
}, _(9389, null)), thy=Rn("notebook.selectedCellBorder", {
  dark:uIa, light:uIa, hcDark:Du, hcLight:Du
}, _(9390, null)), nhy=Rn("notebook.inactiveSelectedCellBorder", {
  dark:null, light:null, hcDark:nN, hcLight:nN
}, _(9391, null)), ihy=Rn("notebook.focusedCellBorder", nN, _(9392, null)), rhy=Rn("notebook.inactiveFocusedCellBorder", uIa, _(9393, null)), shy=Rn("notebook.cellStatusBarItemHoverBackground", {
  light:new Xr(new Sa(0, 0, 0, .08)), dark:new Xr(new Sa(255, 255, 255, .15)), hcDark:new Xr(new Sa(255, 255, 255, .15)), hcLight:new Xr(new Sa(0, 0, 0, .08))
}, _(9394, null)), ohy=Rn("notebook.cellInsertionIndicator", nN, _(9395, null)), ahy=Rn("notebookScrollbarSlider.background", aft, _(9396, null)), chy=Rn("notebookScrollbarSlider.hoverBackground", oVe, _(9397, null)), lhy=Rn("notebookScrollbarSlider.activeBackground", aVe, _(9398, null)), uhy=Rn("notebook.symbolHighlightBackground", {
  dark:Xr.fromHex("#ffffff0b"), light:Xr.fromHex("#fdff0033"), hcDark:null, hcLight:null
}, _(9399, null)), dhy=Rn("notebook.cellEditorBackground", {
  light:mO, dark:mO, hcDark:null, hcLight:null
}, _(9400, null)), A7e=Rn("notebook.editorBackground", {
  light:pgn, dark:pgn, hcDark:null, hcLight:null
}, _(9401, null))
}
});
function g2e(n){
  return n===1?m6f:I_u
}
var m6f, I_u, Tki, Iki, dIa=