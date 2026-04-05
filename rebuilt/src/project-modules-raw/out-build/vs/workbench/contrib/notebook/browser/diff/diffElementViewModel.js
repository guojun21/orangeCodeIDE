// Module: out-build/vs/workbench/contrib/notebook/browser/diff/diffElementViewModel.js
// Offset: 33533684 (bundle byte offset)
// Size: 16809 bytes

yn(), iw(), rt(), TW(), dIa(), hhy(), B_u(), Rrt(), Sb(), f7e(), ph(), zr(), b6f(), Bki=25, A6f=24, y6f=17, (function(n){
  n[n.Expanded=0]="Expanded", n[n.Collapsed=1]="Collapsed"
})(kD||(kD={
  
})), Rki=1440, pIa=class extends at{
  constructor(n, e, t){
    super(), this.mainDocumentTextModel=n, this.editorEventDispatcher=e, this.initData=t, this._layoutInfoEmitter=this._register(new Qe), this.onDidLayoutChange=this._layoutInfoEmitter.event, this._register(this.editorEventDispatcher.onDidChangeLayout(i=>this._layoutInfoEmitter.fire({
      outerWidth:!0
    })))
  }
}, w6f=class extends pIa{
  constructor(n, e, t){
    super(n, e, t), this.type="placeholder", this.hiddenCells=[], this._unfoldHiddenCells=this._register(new Qe), this.onUnfoldHiddenCells=this._unfoldHiddenCells.event, this.renderOutput=!1
  }
  get totalHeight(){
    return 24+2*hwe
  }
  getHeight(n){
    return this.totalHeight
  }
  layoutChange(){
    
  }
  showHiddenCells(){
    this._unfoldHiddenCells.fire()
  }
}, M_u=class extends pIa{
  set editorHeight(n){
    this._layout({
      editorHeight:n
    })
  }
  get editorHeight(){
    throw new Error("Use Cell.layoutInfo.editorHeight")
  }
  set editorMargin(n){
    this._layout({
      editorMargin:n
    })
  }
  get editorMargin(){
    throw new Error("Use Cell.layoutInfo.editorMargin")
  }
  get layoutInfo(){
    return this._layoutInfo
  }
  get totalHeight(){
    return this.layoutInfo.totalHeight
  }
  constructor(n, e, t, i, r, s, o){
    super(n, i, r), this.originalDocumentTextModel=n, this.modifiedDocumentTextModel=e, this.type=t, this.editorHeightCalculator=o, this.renderOutput=!1, this._sourceEditorViewState=null;
    const a=Bki;
    this._layoutInfo={
      width:0,editorHeight:0,editorMargin:0,metadataHeight:0,cellStatusHeight:a,metadataStatusHeight:0,rawOutputHeight:0,outputTotalHeight:0,outputStatusHeight:0,outputMetadataHeight:0,bodyMargin:32,totalHeight:82+a+0,layoutState:p5.Uninitialized
    }, this.cellFoldingState=t==="modifiedMetadata"?kD.Expanded:kD.Collapsed, this.originalMetadata=this._register(new N_u(n)), this.modifiedMetadata=this._register(new N_u(e))
  }
  async computeHeights(){
    if(this.type==="unchangedMetadata")this.editorHeight=this.editorHeightCalculator.computeHeightFromLines(this.originalMetadata.textBuffer.getLineCount());
    else{
      const n=this.originalMetadata.uri,e=this.modifiedMetadata.uri;
      this.editorHeight=await this.editorHeightCalculator.diffAndComputeHeight(n,e)
    }
  }
  layoutChange(){
    this._layout({
      recomputeOutput:!0
    })
  }
  _layout(n){
    const e=n.width!==void 0?n.width:this._layoutInfo.width, t=n.editorHeight!==void 0?n.editorHeight:this._layoutInfo.editorHeight, i=n.editorMargin!==void 0?n.editorMargin:this._layoutInfo.editorMargin, r=n.cellStatusHeight!==void 0?n.cellStatusHeight:this._layoutInfo.cellStatusHeight, s=n.bodyMargin!==void 0?n.bodyMargin:this._layoutInfo.bodyMargin, o=t+i+r+s, a={
      width:e,editorHeight:t,editorMargin:i,metadataHeight:0,cellStatusHeight:r,metadataStatusHeight:0,outputTotalHeight:0,outputStatusHeight:0,bodyMargin:s,rawOutputHeight:0,outputMetadataHeight:0,totalHeight:o,layoutState:p5.Measured
    };
    let l=!1;
    const u={
      
    };
    a.width!==this._layoutInfo.width&&(u.width=!0, l=!0), a.editorHeight!==this._layoutInfo.editorHeight&&(u.editorHeight=!0, l=!0), a.editorMargin!==this._layoutInfo.editorMargin&&(u.editorMargin=!0, l=!0), a.cellStatusHeight!==this._layoutInfo.cellStatusHeight&&(u.cellStatusHeight=!0, l=!0), a.bodyMargin!==this._layoutInfo.bodyMargin&&(u.bodyMargin=!0, l=!0), a.totalHeight!==this._layoutInfo.totalHeight&&(u.totalHeight=!0, l=!0), l&&(this._layoutInfo=a, this._fireLayoutChangeEvent(u))
  }
  getHeight(n){
    if(this._layoutInfo.layoutState===p5.Uninitialized){
      const e=this.cellFoldingState===kD.Collapsed?0:this.computeInputEditorHeight(n);
      return this._computeTotalHeight(e)
    }
    else return this._layoutInfo.totalHeight
  }
  _computeTotalHeight(n){
    return n+this._layoutInfo.editorMargin+this._layoutInfo.metadataHeight+this._layoutInfo.cellStatusHeight+this._layoutInfo.metadataStatusHeight+this._layoutInfo.outputTotalHeight+this._layoutInfo.outputStatusHeight+this._layoutInfo.outputMetadataHeight+this._layoutInfo.bodyMargin
  }
  computeInputEditorHeight(n){
    return this.editorHeightCalculator.computeHeightFromLines(Math.max(this.originalMetadata.textBuffer.getLineCount(), this.modifiedMetadata.textBuffer.getLineCount()))
  }
  _fireLayoutChangeEvent(n){
    this._layoutInfoEmitter.fire(n), this.editorEventDispatcher.emit([{
      type:xEt.CellLayoutChanged,source:this._layoutInfo
    }
    ])
  }
  getComputedCellContainerWidth(n, e, t){
    return t?n.width-2*hwe+(e?JB.ENTIRE_DIFF_OVERVIEW_WIDTH:0)-2:(n.width-2*hwe+(e?JB.ENTIRE_DIFF_OVERVIEW_WIDTH:0))/2-18-2
  }
  getSourceEditorViewState(){
    return this._sourceEditorViewState
  }
  saveSpirceEditorViewState(n){
    this._sourceEditorViewState=n
  }
}, F_u=class extends pIa{
  hideUnchangedCells(){
    this._hideUnchangedCells.fire()
  }
  set rawOutputHeight(n){
    this._layout({
      rawOutputHeight:Math.min(Rki,n)
    })
  }
  get rawOutputHeight(){
    throw new Error("Use Cell.layoutInfo.rawOutputHeight")
  }
  set outputStatusHeight(n){
    this._layout({
      outputStatusHeight:n
    })
  }
  get outputStatusHeight(){
    throw new Error("Use Cell.layoutInfo.outputStatusHeight")
  }
  set outputMetadataHeight(n){
    this._layout({
      outputMetadataHeight:n
    })
  }
  get outputMetadataHeight(){
    throw new Error("Use Cell.layoutInfo.outputStatusHeight")
  }
  set editorHeight(n){
    this._layout({
      editorHeight:n
    })
  }
  get editorHeight(){
    throw new Error("Use Cell.layoutInfo.editorHeight")
  }
  set editorMargin(n){
    this._layout({
      editorMargin:n
    })
  }
  get editorMargin(){
    throw new Error("Use Cell.layoutInfo.editorMargin")
  }
  set metadataStatusHeight(n){
    this._layout({
      metadataStatusHeight:n
    })
  }
  get metadataStatusHeight(){
    throw new Error("Use Cell.layoutInfo.outputStatusHeight")
  }
  set metadataHeight(n){
    this._layout({
      metadataHeight:n
    })
  }
  get metadataHeight(){
    throw new Error("Use Cell.layoutInfo.metadataHeight")
  }
  set renderOutput(n){
    this._renderOutput=n, this._layout({
      recomputeOutput:!0
    }), this._stateChangeEmitter.fire({
      renderOutput:this._renderOutput
    })
  }
  get renderOutput(){
    return this._renderOutput
  }
  get layoutInfo(){
    return this._layoutInfo
  }
  get totalHeight(){
    return this.layoutInfo.totalHeight
  }
  get ignoreOutputs(){
    return this.configurationService.getValue("notebook.diff.ignoreOutputs")||!!this.mainDocumentTextModel?.transientOptions.transientOutputs
  }
  get ignoreMetadata(){
    return this.configurationService.getValue("notebook.diff.ignoreMetadata")
  }
  constructor(n, e, t, i, r, s, o, a, l, u){
    super(n, r, s), this.type=i, this.index=a, this.configurationService=l, this.diffEditorHeightCalculator=u, this._stateChangeEmitter=this._register(new Qe), this.onDidStateChange=this._stateChangeEmitter.event, this._hideUnchangedCells=this._register(new Qe), this.onHideUnchangedCells=this._hideUnchangedCells.event, this._renderOutput=!0, this._sourceEditorViewState=null, this._outputEditorViewState=null, this._metadataEditorViewState=null, this.original=e?this._register(new Dki(e, o)):void 0, this.modified=t?this._register(new Dki(t, o)):void 0;
    const d=this._estimateEditorHeight(s.fontInfo), m=Bki;
    this._layoutInfo={
      width:0,editorHeight:d,editorMargin:0,metadataHeight:0,cellStatusHeight:m,metadataStatusHeight:this.ignoreMetadata?0:Bki,rawOutputHeight:0,outputTotalHeight:0,outputStatusHeight:this.ignoreOutputs?0:Bki,outputMetadataHeight:0,bodyMargin:32,totalHeight:82+m+d,layoutState:p5.Uninitialized
    }, this.cellFoldingState=t?.getTextBufferHash()!==e?.getTextBufferHash()?kD.Expanded:kD.Collapsed, this.metadataFoldingState=kD.Collapsed, this.outputFoldingState=kD.Collapsed
  }
  layoutChange(){
    this._layout({
      recomputeOutput:!0
    })
  }
  _estimateEditorHeight(n){
    const e=n?.lineHeight??17;
    switch(this.type){
      case"unchanged":case"insert":{
        const t=this.modified.textModel.textBuffer.getLineCount();
        return t*e+g2e(t).top+g2e(t).bottom
      }
      case"delete":case"modified":{
        const t=this.original.textModel.textBuffer.getLineCount();
        return t*e+g2e(t).top+g2e(t).bottom
      }
    }
  }
  _layout(n){
    const e=n.width!==void 0?n.width:this._layoutInfo.width, t=n.editorHeight!==void 0?n.editorHeight:this._layoutInfo.editorHeight, i=n.editorMargin!==void 0?n.editorMargin:this._layoutInfo.editorMargin, r=n.metadataHeight!==void 0?n.metadataHeight:this._layoutInfo.metadataHeight, s=n.cellStatusHeight!==void 0?n.cellStatusHeight:this._layoutInfo.cellStatusHeight, o=n.metadataStatusHeight!==void 0?n.metadataStatusHeight:this._layoutInfo.metadataStatusHeight, a=n.rawOutputHeight!==void 0?n.rawOutputHeight:this._layoutInfo.rawOutputHeight, l=n.outputStatusHeight!==void 0?n.outputStatusHeight:this._layoutInfo.outputStatusHeight, u=n.bodyMargin!==void 0?n.bodyMargin:this._layoutInfo.bodyMargin, d=n.outputMetadataHeight!==void 0?n.outputMetadataHeight:this._layoutInfo.outputMetadataHeight, m=this.ignoreOutputs?0:n.recomputeOutput||n.rawOutputHeight!==void 0||n.outputMetadataHeight!==void 0?this._getOutputTotalHeight(a, d):this._layoutInfo.outputTotalHeight, p=t+i+s+r+o+m+l+u, g={
      width:e,editorHeight:t,editorMargin:i,metadataHeight:r,cellStatusHeight:s,metadataStatusHeight:o,outputTotalHeight:m,outputStatusHeight:l,bodyMargin:u,rawOutputHeight:a,outputMetadataHeight:d,totalHeight:p,layoutState:p5.Measured
    };
    let f=!1;
    const A={
      
    };
    g.width!==this._layoutInfo.width&&(A.width=!0, f=!0), g.editorHeight!==this._layoutInfo.editorHeight&&(A.editorHeight=!0, f=!0), g.editorMargin!==this._layoutInfo.editorMargin&&(A.editorMargin=!0, f=!0), g.metadataHeight!==this._layoutInfo.metadataHeight&&(A.metadataHeight=!0, f=!0), g.cellStatusHeight!==this._layoutInfo.cellStatusHeight&&(A.cellStatusHeight=!0, f=!0), g.metadataStatusHeight!==this._layoutInfo.metadataStatusHeight&&(A.metadataStatusHeight=!0, f=!0), g.outputTotalHeight!==this._layoutInfo.outputTotalHeight&&(A.outputTotalHeight=!0, f=!0), g.outputStatusHeight!==this._layoutInfo.outputStatusHeight&&(A.outputStatusHeight=!0, f=!0), g.bodyMargin!==this._layoutInfo.bodyMargin&&(A.bodyMargin=!0, f=!0), g.outputMetadataHeight!==this._layoutInfo.outputMetadataHeight&&(A.outputMetadataHeight=!0, f=!0), g.totalHeight!==this._layoutInfo.totalHeight&&(A.totalHeight=!0, f=!0), f&&(this._layoutInfo=g, this._fireLayoutChangeEvent(A))
  }
  getHeight(n){
    if(this._layoutInfo.layoutState===p5.Uninitialized){
      const e=this.cellFoldingState===kD.Collapsed?0:this.computeInputEditorHeight(n);
      return this._computeTotalHeight(e)
    }
    else return this._layoutInfo.totalHeight
  }
  _computeTotalHeight(n){
    return n+this._layoutInfo.editorMargin+this._layoutInfo.metadataHeight+this._layoutInfo.cellStatusHeight+this._layoutInfo.metadataStatusHeight+this._layoutInfo.outputTotalHeight+this._layoutInfo.outputStatusHeight+this._layoutInfo.outputMetadataHeight+this._layoutInfo.bodyMargin
  }
  computeInputEditorHeight(n){
    const e=Math.max(this.original?.textModel.textBuffer.getLineCount()??1, this.modified?.textModel.textBuffer.getLineCount()??1);
    return this.diffEditorHeightCalculator.computeHeightFromLines(e)
  }
  _getOutputTotalHeight(n, e){
    return this.outputFoldingState===kD.Collapsed?0:this.renderOutput?this.isOutputEmpty()?24:this.getRichOutputTotalHeight()+e:n
  }
  _fireLayoutChangeEvent(n){
    this._layoutInfoEmitter.fire(n), this.editorEventDispatcher.emit([{
      type:xEt.CellLayoutChanged,source:this._layoutInfo
    }
    ])
  }
  getComputedCellContainerWidth(n, e, t){
    return t?n.width-2*hwe+(e?JB.ENTIRE_DIFF_OVERVIEW_WIDTH:0)-2:(n.width-2*hwe+(e?JB.ENTIRE_DIFF_OVERVIEW_WIDTH:0))/2-18-2
  }
  getOutputEditorViewState(){
    return this._outputEditorViewState
  }
  saveOutputEditorViewState(n){
    this._outputEditorViewState=n
  }
  getMetadataEditorViewState(){
    return this._metadataEditorViewState
  }
  saveMetadataEditorViewState(n){
    this._metadataEditorViewState=n
  }
  getSourceEditorViewState(){
    return this._sourceEditorViewState
  }
  saveSpirceEditorViewState(n){
    this._sourceEditorViewState=n
  }
}, mwe=class extends F_u{
  get originalDocument(){
    return this.otherDocumentTextModel
  }
  get modifiedDocument(){
    return this.mainDocumentTextModel
  }
  constructor(n, e, t, i, r, s, o, a, l, u, d){
    super(n, t, i, r, s, o, a, u, l, d), this.otherDocumentTextModel=e, this.type=r, this.cellFoldingState=this.modified.textModel.getValue()!==this.original.textModel.getValue()?kD.Expanded:kD.Collapsed, this.metadataFoldingState=kD.Collapsed, this.outputFoldingState=kD.Collapsed, this.checkMetadataIfModified()&&(this.metadataFoldingState=kD.Expanded), this.checkIfOutputsModified()&&(this.outputFoldingState=kD.Expanded), this._register(this.original.onDidChangeOutputLayout(()=>{
      this._layout({
        recomputeOutput:!0
      })
    })), this._register(this.modified.onDidChangeOutputLayout(()=>{
      this._layout({
        recomputeOutput:!0
      })
    })), this._register(this.modified.textModel.onDidChangeContent(()=>{
      if(n.transientOptions.cellContentMetadata){
        const m=[...Object.keys(n.transientOptions.cellContentMetadata)],p=Object.assign({
          
        },this.modified.metadata),g=this.original.metadata;
        for(const f of m)f in g&&(p[f]=g[f]);
        this.modified.textModel.metadata=p
      }
    }))
  }
  checkIfInputModified(){
    return this.original.textModel.getTextBufferHash()===this.modified.textModel.getTextBufferHash()?!1:{
      reason:"Cell content has changed"
    }
  }
  checkIfOutputsModified(){
    if(this.mainDocumentTextModel.transientOptions.transientOutputs||this.ignoreOutputs)return!1;
    const n=phy(this.original?.outputs??[], this.modified?.outputs??[]);
    return n===0?!1:{
      reason:n===1?"Output metadata has changed":void 0,kind:n
    }
  }
  checkMetadataIfModified(){
    return this.ignoreMetadata?!1:VC(CEt(this.mainDocumentTextModel.transientOptions.transientCellMetadata, this.original?.metadata||{
      
    }, this.original?.language))!==VC(CEt(this.mainDocumentTextModel.transientOptions.transientCellMetadata, this.modified?.metadata??{
      
    }, this.modified?.language))?{
      reason:void 0
    }
    :!1
  }
  updateOutputHeight(n, e, t){
    n===s1.Original?this.original.updateOutputHeight(e, t):this.modified.updateOutputHeight(e, t)
  }
  getOutputOffsetInContainer(n, e){
    return n===s1.Original?this.original.getOutputOffset(e):this.modified.getOutputOffset(e)
  }
  getOutputOffsetInCell(n, e){
    const t=this.getOutputOffsetInContainer(n, e);
    return this._layoutInfo.editorHeight+this._layoutInfo.editorMargin+this._layoutInfo.metadataHeight+this._layoutInfo.cellStatusHeight+this._layoutInfo.metadataStatusHeight+this._layoutInfo.outputStatusHeight+this._layoutInfo.bodyMargin/2+t
  }
  isOutputEmpty(){
    return this.mainDocumentTextModel.transientOptions.transientOutputs?!0:this.checkIfOutputsModified()?!1:(this.original?.outputs||[]).length===0
  }
  getRichOutputTotalHeight(){
    return Math.max(this.original.getOutputTotalHeight(), this.modified.getOutputTotalHeight())
  }
  getNestedCellViewModel(n){
    return n===s1.Original?this.original:this.modified
  }
  getCellByUri(n){
    return n.toString()===this.original.uri.toString()?this.original:this.modified
  }
  computeInputEditorHeight(n){
    return this.type==="modified"&&typeof this.editorHeightWithUnchangedLinesCollapsed=="number"&&this.checkIfInputModified()?this.editorHeightWithUnchangedLinesCollapsed:super.computeInputEditorHeight(n)
  }
  async computeModifiedInputEditorHeight(){
    this.checkIfInputModified()&&(this.editorHeightWithUnchangedLinesCollapsed=this._layoutInfo.editorHeight=await this.diffEditorHeightCalculator.diffAndComputeHeight(this.original.uri, this.modified.uri))
  }
  async computeModifiedMetadataEditorHeight(){
    if(this.checkMetadataIfModified()){
      const n=Dg.generateCellPropertyUri(this.originalDocument.uri,this.original.handle,_n.vscodeNotebookCellMetadata),e=Dg.generateCellPropertyUri(this.modifiedDocument.uri,this.modified.handle,_n.vscodeNotebookCellMetadata);
      this._layoutInfo.metadataHeight=await this.diffEditorHeightCalculator.diffAndComputeHeight(n,e)
    }
  }
  async computeEditorHeights(){
    this.type!=="unchanged"&&await Promise.all([this.computeModifiedInputEditorHeight(), this.computeModifiedMetadataEditorHeight()])
  }
}, O_u=class extends F_u{
  get cellViewModel(){
    return this.type==="insert"?this.modified:this.original
  }
  get originalDocument(){
    return this.type==="insert"?this.otherDocumentTextModel:this.mainDocumentTextModel
  }
  get modifiedDocument(){
    return this.type==="insert"?this.mainDocumentTextModel:this.otherDocumentTextModel
  }
  constructor(n, e, t, i, r, s, o, a, l, u, d){
    super(n, t, i, r, s, o, a, d, l, u), this.otherDocumentTextModel=e, this.type=r, this._register(this.cellViewModel.onDidChangeOutputLayout(()=>{
      this._layout({
        recomputeOutput:!0
      })
    }))
  }
  checkIfInputModified(){
    return{
      reason:"Cell content has changed"
    }
  }
  getNestedCellViewModel(n){
    return this.type==="insert"?this.modified:this.original
  }
  checkIfOutputsModified(){
    return!1
  }
  checkMetadataIfModified(){
    return!1
  }
  updateOutputHeight(n, e, t){
    this.cellViewModel?.updateOutputHeight(e, t)
  }
  getOutputOffsetInContainer(n, e){
    return this.cellViewModel.getOutputOffset(e)
  }
  getOutputOffsetInCell(n, e){
    const t=this.cellViewModel.getOutputOffset(e);
    return this._layoutInfo.editorHeight+this._layoutInfo.editorMargin+this._layoutInfo.metadataHeight+this._layoutInfo.cellStatusHeight+this._layoutInfo.metadataStatusHeight+this._layoutInfo.outputStatusHeight+this._layoutInfo.bodyMargin/2+t
  }
  isOutputEmpty(){
    return this.mainDocumentTextModel.transientOptions.transientOutputs?!0:(this.original?.outputs||this.modified?.outputs||[]).length===0
  }
  getRichOutputTotalHeight(){
    return this.cellViewModel?.getOutputTotalHeight()??0
  }
  getCellByUri(n){
    return this.cellViewModel
  }
}, (function(n){
  n[n.Unchanged=0]="Unchanged", n[n.Metadata=1]="Metadata", n[n.Other=2]="Other"
})(_6f||(_6f={
  
}))
}
}), ghy=