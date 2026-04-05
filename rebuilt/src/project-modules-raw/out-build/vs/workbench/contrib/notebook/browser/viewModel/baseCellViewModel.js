// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/baseCellViewModel.js
// Offset: 32987534 (bundle byte offset)
// Size: 12351 bytes

yn(), rt(), hF(), ts(), db(), i9e(), nTa(), Sb(), ywu=class extends at{
  get handle(){
    return this.model.handle
  }
  get uri(){
    return this.model.uri
  }
  get lineCount(){
    return this.model.textBuffer.getLineCount()
  }
  get metadata(){
    return this.model.metadata
  }
  get internalMetadata(){
    return this.model.internalMetadata
  }
  get language(){
    return this.model.language
  }
  get mime(){
    if(typeof this.model.mime=="string")return this.model.mime;
    switch(this.language){
      case"markdown":return NA.markdown;
      default:return NA.text
    }
  }
  get lineNumbers(){
    return this._lineNumbers
  }
  set lineNumbers(n){
    n!==this._lineNumbers&&(this._lineNumbers=n, this._onDidChangeState.fire({
      cellLineNumberChanged:!0
    }))
  }
  get commentOptions(){
    return this._commentOptions
  }
  set commentOptions(n){
    this._commentOptions=n
  }
  get focusMode(){
    return this._focusMode
  }
  set focusMode(n){
    this._focusMode!==n&&(this._focusMode=n, this._onDidChangeState.fire({
      focusModeChanged:!0
    }))
  }
  get editorAttached(){
    return!!this._textEditor
  }
  get textModel(){
    return this.model.textModel
  }
  hasModel(){
    return!!this.textModel
  }
  get dragging(){
    return this._dragging
  }
  set dragging(n){
    this._dragging=n, this._onDidChangeState.fire({
      dragStateChanged:!0
    })
  }
  get isInputCollapsed(){
    return this._inputCollapsed
  }
  set isInputCollapsed(n){
    this._inputCollapsed=n, this._onDidChangeState.fire({
      inputCollapsedChanged:!0
    })
  }
  get isOutputCollapsed(){
    return this._outputCollapsed
  }
  set isOutputCollapsed(n){
    this._outputCollapsed=n, this._onDidChangeState.fire({
      outputCollapsedChanged:!0
    })
  }
  set commentHeight(n){
    this._commentHeight!==n&&(this._commentHeight=n, this.layoutChange({
      commentHeight:!0
    }, "BaseCellViewModel#commentHeight"))
  }
  constructor(n, e, t, i, r, s, o, a, l){
    super(), this.viewType=n, this.model=e, this.id=t, this._viewContext=i, this._configurationService=r, this._modelService=s, this._undoRedoService=o, this._codeEditorService=a, this._inlineChatSessionService=l, this._onDidChangeEditorAttachState=this._register(new Qe), this.onDidChangeEditorAttachState=this._onDidChangeEditorAttachState.event, this._onDidChangeState=this._register(new Qe), this.onDidChangeState=this._onDidChangeState.event, this._editState=aw.Preview, this._lineNumbers="inherit", this._focusMode=Tk.Container, this._editorListeners=[], this._editorViewStates=null, this._editorTransientState=null, this._resolvedCellDecorations=new Map, this._textModelRefChangeDisposable=this._register(new uo), this._cellDecorationsChanged=this._register(new Qe), this.onCellDecorationsChanged=this._cellDecorationsChanged.event, this._resolvedDecorations=new Map, this._lastDecorationId=0, this._cellStatusBarItems=new Map, this._onDidChangeCellStatusBarItems=this._register(new Qe), this.onDidChangeCellStatusBarItems=this._onDidChangeCellStatusBarItems.event, this._lastStatusBarId=0, this._dragging=!1, this._inputCollapsed=!1, this._outputCollapsed=!1, this._commentHeight=0, this._isDisposed=!1, this._isReadonly=!1, this._editStateSource="", this._register(e.onDidChangeMetadata(()=>{
      this._onDidChangeState.fire({
        metadataChanged:!0
      })
    })), this._register(e.onDidChangeInternalMetadata(u=>{
      this._onDidChangeState.fire({
        internalMetadataChanged:!0
      }),u.lastRunSuccessChanged&&this.layoutChange({
        
      })
    })), this._register(this._configurationService.onDidChangeConfiguration(u=>{
      u.affectsConfiguration("notebook.lineNumbers")&&(this.lineNumbers="inherit")
    })), this.model.collapseState?.inputCollapsed&&(this._inputCollapsed=!0), this.model.collapseState?.outputCollapsed&&(this._outputCollapsed=!0), this._commentOptions=this._configurationService.getValue("editor.comments", {
      overrideIdentifier:this.language
    }), this._register(this._configurationService.onDidChangeConfiguration(u=>{
      u.affectsConfiguration("editor.comments")&&(this._commentOptions=this._configurationService.getValue("editor.comments",{
        overrideIdentifier:this.language
      }))
    }))
  }
  updateOptions(n){
    this._textEditor&&typeof n.readonly=="boolean"&&this._textEditor.updateOptions({
      readOnly:n.readonly
    }), typeof n.readonly=="boolean"&&(this._isReadonly=n.readonly)
  }
  assertTextModelAttached(){
    return!!(this.textModel&&this._textEditor&&this._textEditor.getModel()===this.textModel)
  }
  attachTextEditor(n, e){
    if(!n.hasModel())throw new Error("Invalid editor: model is missing");
    if(this._textEditor===n){
      this._editorListeners.length===0&&(this._editorListeners.push(this._textEditor.onDidChangeCursorSelection(()=>{
        this._onDidChangeState.fire({
          selectionChanged:!0
        })
      })),this._onDidChangeState.fire({
        selectionChanged:!0
      }));
      return
    }
    this._textEditor=n, this._isReadonly&&n.updateOptions({
      readOnly:this._isReadonly
    }), this._editorViewStates?this._restoreViewState(this._editorViewStates):e&&this._restoreViewState({
      contributionsState:{
        
      },cursorState:[],viewState:{
        scrollLeft:0,firstPosition:{
          lineNumber:1,column:1
        },firstPositionDeltaTop:this._viewContext.notebookOptions.getLayoutConfiguration().editorTopPadding
      }
    }), this._editorTransientState&&c2e(n.getModel(), this._editorTransientState, this._codeEditorService), !this._isDisposed&&(n.changeDecorations(t=>{
      this._resolvedDecorations.forEach((i,r)=>{
        if(r.startsWith("_lazy_")){
          const s=t.addDecoration(i.options.range,i.options.options);
          this._resolvedDecorations.get(r).id=s
        }
        else{
          const s=t.addDecoration(i.options.range,i.options.options);
          this._resolvedDecorations.get(r).id=s
        }
      })
    }), this._editorListeners.push(n.onDidChangeCursorSelection(()=>{
      this._onDidChangeState.fire({
        selectionChanged:!0
      })
    })), this._editorListeners.push(this._inlineChatSessionService.onWillStartSession(t=>{
      t===this._textEditor&&this.textBuffer.getLength()===0&&this.enableAutoLanguageDetection()
    })), this._onDidChangeState.fire({
      selectionChanged:!0
    }), this._onDidChangeEditorAttachState.fire())
  }
  detachTextEditor(){
    this.saveViewState(), this.saveTransientState(), this._textEditor?.changeDecorations(n=>{
      this._resolvedDecorations.forEach(e=>{
        const t=e.id;
        t&&n.removeDecoration(t)
      })
    }), this._textEditor=void 0, Bo(this._editorListeners), this._editorListeners=[], this._onDidChangeEditorAttachState.fire(), this._textModelRef&&(this._textModelRef.dispose(), this._textModelRef=void 0), this._textModelRefChangeDisposable.clear()
  }
  getText(){
    return this.model.getValue()
  }
  getAlternativeId(){
    return this.model.alternativeId
  }
  getTextLength(){
    return this.model.getTextLength()
  }
  enableAutoLanguageDetection(){
    this.model.enableAutoLanguageDetection()
  }
  saveViewState(){
    this._textEditor&&(this._editorViewStates=this._textEditor.saveViewState())
  }
  saveTransientState(){
    !this._textEditor||!this._textEditor.hasModel()||(this._editorTransientState=mbn(this._textEditor.getModel(), this._codeEditorService))
  }
  saveEditorViewState(){
    return this._textEditor&&(this._editorViewStates=this._textEditor.saveViewState()), this._editorViewStates
  }
  restoreEditorViewState(n, e){
    this._editorViewStates=n
  }
  _restoreViewState(n){
    n&&this._textEditor?.restoreViewState(n)
  }
  addModelDecoration(n){
    if(!this._textEditor){
      const t=++this._lastDecorationId,i=`_lazy_${this.id};${t}`;
      return this._resolvedDecorations.set(i,{
        options:n
      }),i
    }
    let e;
    return this._textEditor.changeDecorations(t=>{
      e=t.addDecoration(n.range,n.options),this._resolvedDecorations.set(e,{
        id:e,options:n
      })
    }), e
  }
  removeModelDecoration(n){
    const e=this._resolvedDecorations.get(n);
    this._textEditor&&e&&e.id!==void 0&&this._textEditor.changeDecorations(t=>{
      t.removeDecoration(e.id)
    }), this._resolvedDecorations.delete(n)
  }
  deltaModelDecorations(n, e){
    return n.forEach(i=>{
      this.removeModelDecoration(i)
    }), e.map(i=>this.addModelDecoration(i))
  }
  _removeCellDecoration(n){
    const e=this._resolvedCellDecorations.get(n);
    if(this._resolvedCellDecorations.delete(n), e){
      for(const t of this._resolvedCellDecorations.values())e.className===t.className&&(e.className=void 0),e.outputClassName===t.outputClassName&&(e.outputClassName=void 0),e.gutterClassName===t.gutterClassName&&(e.gutterClassName=void 0),e.topClassName===t.topClassName&&(e.topClassName=void 0);
      this._cellDecorationsChanged.fire({
        added:[],removed:[e]
      })
    }
  }
  _addCellDecoration(n){
    const e=++this._lastDecorationId, t=`_cell_${this.id};${e}`;
    return this._resolvedCellDecorations.set(t, n), this._cellDecorationsChanged.fire({
      added:[n],removed:[]
    }), t
  }
  getCellDecorations(){
    return[...this._resolvedCellDecorations.values()]
  }
  getCellDecorationRange(n){
    return this._textEditor?this._textEditor.getModel()?.getDecorationRange(n)??null:null
  }
  deltaCellDecorations(n, e){
    return n.forEach(i=>{
      this._removeCellDecoration(i)
    }), e.map(i=>this._addCellDecoration(i))
  }
  deltaCellStatusBarItems(n, e){
    n.forEach(i=>{
      this._cellStatusBarItems.get(i)&&this._cellStatusBarItems.delete(i)
    });
    const t=e.map(i=>{
      const r=++this._lastStatusBarId,s=`_cell_${this.id};${r}`;
      return this._cellStatusBarItems.set(s,i),s
    });
    return this._onDidChangeCellStatusBarItems.fire(), t
  }
  getCellStatusBarItems(){
    return Array.from(this._cellStatusBarItems.values())
  }
  revealRangeInCenter(n){
    this._textEditor?.revealRangeInCenter(n, 1)
  }
  setSelection(n){
    this._textEditor?.setSelection(n)
  }
  setSelections(n){
    n.length&&(this._textEditor?this._textEditor?.setSelections(n):this._editorViewStates&&(this._editorViewStates.cursorState=n.map(e=>({
      inSelectionMode:!e.isEmpty(),selectionStart:e.getStartPosition(),position:e.getEndPosition()
    }))))
  }
  getSelections(){
    return this._textEditor?.getSelections()??this._editorViewStates?.cursorState.map(n=>new Vl(n.selectionStart.lineNumber, n.selectionStart.column, n.position.lineNumber, n.position.column))??[]
  }
  getSelectionsStartPosition(){
    return this._textEditor?this._textEditor.getSelections()?.map(e=>e.getStartPosition()):this._editorViewStates?.cursorState?.map(e=>e.selectionStart)
  }
  getLineScrollTopOffset(n){
    if(!this._textEditor)return 0;
    const e=this._viewContext.notebookOptions.computeEditorPadding(this.internalMetadata, this.uri);
    return this._textEditor.getTopForLineNumber(n)+e.top
  }
  getPositionScrollTopOffset(n){
    if(!this._textEditor)return 0;
    const e=n instanceof Vl?n.getPosition():n.getStartPosition(), t=this._viewContext.notebookOptions.computeEditorPadding(this.internalMetadata, this.uri);
    return this._textEditor.getTopForPosition(e.lineNumber, e.column)+t.top
  }
  cursorAtLineBoundary(){
    if(!this._textEditor||!this.textModel||!this._textEditor.hasTextFocus())return yxe.None;
    const n=this._textEditor.getSelection();
    if(!n||!n.isEmpty())return yxe.None;
    const e=this.textModel.getLineLength(n.startLineNumber);
    if(e===0)return yxe.Both;
    switch(n.startColumn){
      case 1:return yxe.Start;
      case e+1:return yxe.End;
      default:return yxe.None
    }
  }
  cursorAtBoundary(){
    if(!this._textEditor||!this.textModel)return gwe.None;
    const n=this._textEditor.getSelection();
    if(!n||!n.isEmpty())return gwe.None;
    const e=this._textEditor.getTopForPosition(1, 1), t=this._textEditor.getTopForPosition(this.textModel.getLineCount(), this.textModel.getLineLength(this.textModel.getLineCount())), i=this._textEditor.getTopForPosition(n.startLineNumber, n.startColumn);
    return i===t?i===e?gwe.Both:gwe.Bottom:i===e?gwe.Top:gwe.None
  }
  get editStateSource(){
    return this._editStateSource
  }
  updateEditState(n, e){
    this._editStateSource=e, n!==this._editState&&(this._editState=n, this._onDidChangeState.fire({
      editStateChanged:!0
    }), this._editState===aw.Preview&&(this.focusMode=Tk.Container))
  }
  getEditState(){
    return this._editState
  }
  get textBuffer(){
    return this.model.textBuffer
  }
  async resolveTextModel(){
    if(!this._textModelRef||!this.textModel){
      if(this._textModelRef=await this._modelService.createModelReference(this.uri),this._isDisposed)return this.textModel;
      if(!this._textModelRef)throw new Error(`Cannot resolve text model for ${this.uri}`);
      this._textModelRefChangeDisposable.value=this.textModel.onDidChangeContent(()=>this.onDidChangeTextModelContent())
    }
    return this.textModel
  }
  cellStartFind(n, e){
    let t=[];
    const i=this.textBuffer.getLineCount(), r=e.findScope?.selectedTextRanges??[new Zt(1, 1, i, this.textBuffer.getLineLength(i)+1)];
    if(this.assertTextModelAttached())t=this.textModel.findMatches(n, r, e.regex||!1, e.caseSensitive||!1, e.wholeWord&&e.wordSeparators||null, e.regex||!1);
    else{
      const o=new Nde(n,e.regex||!1,e.caseSensitive||!1,e.wholeWord&&e.wordSeparators||null).parseSearchRequest();
      if(!o)return null;
      r.forEach(a=>{
        t.push(...this.textBuffer.findMatchesLineByLine(new Zt(a.startLineNumber,a.startColumn,a.endLineNumber,a.endColumn),o,e.regex||!1,1e3))
      })
    }
    return t
  }
  dispose(){
    this._isDisposed=!0, super.dispose(), Bo(this._editorListeners), this._undoRedoService.getUriComparisonKey(this.uri)===this.uri.toString()&&this._undoRedoService.removeElements(this.uri), this._textModelRef?.dispose()
  }
  toJSON(){
    return{
      handle:this.handle
    }
  }
}
}
}), iTa, jJ, l2e=