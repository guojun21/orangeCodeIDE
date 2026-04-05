// Module: out-build/vs/workbench/contrib/notebook/browser/diff/diffComponents.js
// Offset: 33558348 (bundle byte offset)
// Size: 50897 bytes

ri(), rt(), zr(), Wt(), Prt(), Rrt(), VI(), hd(), Ku(), ph(), pl(), dr(), ka(), So(), dg(), si(), hki(), bJ(), fhy(), Cu(), dme(), pU(), Tq(), X1e(), Tqe(), L_i(), bS(), td(), Ei(), Io(), vT(), Pa(), dIa(), zg(), TW(), hs(), Ht(), yn(), sw(), f7e(), vhy(), x9e(), S6f=class extends at{
  constructor(n, e){
    super(), e.body.classList.remove("left", "right", "full");
    const t=n.hiddenCells.length===1?_(9246, null, n.hiddenCells.length):_(9247, null, n.hiddenCells.length);
    e.placeholder.innerText=t, this._register(ei(e.placeholder, "dblclick", i=>{
      i.button===0&&(i.preventDefault(),n.showHiddenCells())
    })), this._register(e.marginOverlay.onAction(()=>n.showHiddenCells())), e.marginOverlay.show()
  }
}, f2e=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    super(), this.cell=e, this.propertyHeaderContainer=t, this.notebookEditor=i, this.accessor=r, this.contextMenuService=s, this.keybindingService=o, this.commandService=a, this.notificationService=l, this.menuService=u, this.contextKeyService=d, this.themeService=m, this.telemetryService=p, this.accessibilityService=g, this.actionBadgeService=f
  }
  buildHeader(){
    this._foldingIndicator=Rt(this.propertyHeaderContainer, Ct(".property-folding-indicator")), this._foldingIndicator.classList.add(this.accessor.prefix);
    const e=Rt(this.propertyHeaderContainer, Ct("div.property-status"));
    this._statusSpan=Rt(e, Ct("span")), this._description=Rt(e, Ct("span.property-description"));
    const t=Rt(this.propertyHeaderContainer, Ct("div.property-toolbar"));
    this._toolbar=this._register(new KI(t, {
      actionViewItemProvider:(r,s)=>{
        if(r instanceof Ub)return new Tbn(r,{
          hoverDelegate:s.hoverDelegate
        },this.keybindingService,this.notificationService,this.contextKeyService,this.themeService,this.contextMenuService,this.accessibilityService,this.actionBadgeService)
      }
    }, this.menuService, this.contextKeyService, this.contextMenuService, this.keybindingService, this.commandService, this.telemetryService)), this._toolbar.context=this.cell;
    const i=this.contextKeyService.createScoped(t);
    this._register(i), this._propertyChanged=Obn.bindTo(i), this._propertyExpanded=P_u.bindTo(i), this._menu=this._register(this.menuService.createMenu(this.accessor.menuId, i)), this._register(this._menu.onDidChange(()=>this.updateMenu())), this._register(this.notebookEditor.onMouseUp(r=>{
      if(!r.event.target||r.target!==this.cell)return;
      const s=r.event.target;
      if(s===this.propertyHeaderContainer||s===this._foldingIndicator||this._foldingIndicator.contains(s)||s===e||e.contains(s)){
        const o=this.accessor.getFoldingState();
        this.accessor.updateFoldingState(o===kD.Expanded?kD.Collapsed:kD.Expanded),this._updateFoldingIcon(),this.accessor.updateInfoRendering(this.cell.renderOutput)
      }
    })), this.refresh(), this.accessor.updateInfoRendering(this.cell.renderOutput)
  }
  refresh(){
    this.updateMenu(), this._updateFoldingIcon();
    const e=this.accessor.checkIfModified();
    this._propertyChanged&&this._propertyChanged.set(!!e), e?(this._statusSpan.textContent=this.accessor.changedLabel, this._statusSpan.style.fontWeight="bold", e.reason&&(this._description.textContent=e.reason), this.propertyHeaderContainer.classList.add("modified")):(this._statusSpan.textContent=this.accessor.unChangedLabel, this._statusSpan.style.fontWeight="normal", this._description.textContent="", this.propertyHeaderContainer.classList.remove("modified"))
  }
  updateMenu(){
    if(this.accessor.checkIfModified()){
      const t=xW(this._menu.getActions({
        shouldForwardArgs:!0
      }));
      this._toolbar.setActions(t)
    }
    else this._toolbar.setActions([])
  }
  _updateFoldingIcon(){
    this.accessor.getFoldingState()===kD.Collapsed?(um(this._foldingIndicator, tL(DWl)), this._propertyExpanded?.set(!1)):(um(this._foldingIndicator, tL(BWl)), this._propertyExpanded?.set(!0))
  }
}, f2e=__decorate([__param(4, kc), __param(5, mo), __param(6, fr), __param(7, ms), __param(8, xd), __param(9, wi), __param(10, bo), __param(11, ea), __param(12, Cf), __param(13, cve)], f2e), gIa=class extends at{
  constructor(e, t, i, r, s, o, a, l, u){
    super(), this.notebookEditor=e, this.viewModel=t, this.templateData=i, this.instantiationService=r, this.textModelService=s, this.menuService=o, this.contextKeyService=a, this.textConfigurationService=l, this.configurationService=u, this._editor=i.sourceEditor, this._cellHeaderContainer=this.templateData.cellHeaderContainer, this._editorContainer=this.templateData.editorContainer, this._diffEditorContainer=this.templateData.diffEditorContainer, this._editorViewStateChanged=!1, this._register(t.onDidLayoutChange(d=>{
      this.layout(d),this.updateBorders()
    })), this.buildBody(), this.updateBorders()
  }
  buildBody(){
    const e=this.templateData.body;
    e.classList.remove("full"), e.classList.add("full"), this.updateSourceEditor(), this.viewModel instanceof M_u&&this._register(this.viewModel.modifiedMetadata.onDidChange(t=>{
      this._cellHeader.refresh()
    }))
  }
  layoutNotebookCell(){
    this.notebookEditor.layoutNotebookCell(this.viewModel, this.viewModel.layoutInfo.totalHeight)
  }
  updateBorders(){
    this.templateData.leftBorder.style.height=`${this.viewModel.layoutInfo.totalHeight-32}px`, this.templateData.rightBorder.style.height=`${this.viewModel.layoutInfo.totalHeight-32}px`, this.templateData.bottomBorder.style.top=`${this.viewModel.layoutInfo.totalHeight-32}px`
  }
  updateSourceEditor(){
    this._cellHeaderContainer.style.display="flex", this._cellHeaderContainer.innerText="", this._editorContainer.classList.add("diff");
    const e=()=>{
      if(this.viewModel.cellFoldingState===kD.Collapsed){
        this._editorContainer.style.display="none",this.viewModel.editorHeight=0;
        return
      }
      const o=this.notebookEditor.getLayoutInfo().fontInfo.lineHeight||17,a=this.viewModel.layoutInfo.editorHeight!==0?this.viewModel.layoutInfo.editorHeight:this.viewModel.computeInputEditorHeight(o);
      this._editorContainer.style.height=`${a}px`,this._editorContainer.style.display="block";
      const l=this._editor.getContentHeight();
      return l>=0&&(this.viewModel.editorHeight=l),a
    }, t=()=>{
      const o=e();
      if(!o)return;
      const a=this.viewModel.modifiedMetadata.textBuffer.getLineCount(),l={
        padding:g2e(a)
      },u=this._register(U_u(this.configurationService));
      u.options.enabled&&(l.hideUnchangedRegions=u.options),this._editor.updateOptions(l),this._register(u.onDidChangeEnablement(()=>{
        l.hideUnchangedRegions=u.options,this._editor.updateOptions(l)
      })),this._editor.layout({
        width:this.notebookEditor.getLayoutInfo().width-2*hwe,height:o
      }),this._register(this._editor.onDidContentSizeChange(d=>{
        this.viewModel.cellFoldingState===kD.Expanded&&d.contentHeightChanged&&this.viewModel.layoutInfo.editorHeight!==d.contentHeight&&(this.viewModel.editorHeight=d.contentHeight)
      })),this._initializeSourceDiffEditor()
    };
    this._cellHeader=this._register(this.instantiationService.createInstance(f2e, this.viewModel, this._cellHeaderContainer, this.notebookEditor, {
      updateInfoRendering:()=>t(),checkIfModified:()=>this.viewModel.originalMetadata.getHash()!==this.viewModel.modifiedMetadata.getHash()?{
        reason:void 0
      }
      :!1,getFoldingState:()=>this.viewModel.cellFoldingState,updateFoldingState:o=>this.viewModel.cellFoldingState=o,unChangedLabel:"Notebook Metadata",changedLabel:"Notebook Metadata changed",prefix:"metadata",menuId:st.NotebookDiffDocumentMetadata
    })), this._cellHeader.buildHeader(), t();
    const i=this.contextKeyService.createScoped(this.templateData.inputToolbarContainer);
    this._register(i);
    const r=hIa.bindTo(i);
    r.set(this.viewModel.originalMetadata.getHash()!==this.viewModel.modifiedMetadata.getHash()), this._toolbar=this.templateData.toolbar, this._toolbar.context=this.viewModel;
    const s=()=>{
      const o=this.viewModel.originalMetadata.getHash()!==this.viewModel.modifiedMetadata.getHash();
      if(r.set(o),o){
        const a=this.menuService.getMenuActions(st.NotebookDiffDocumentMetadata,i,{
          shouldForwardArgs:!0
        }),l=xW(a);
        this._toolbar.setActions(l)
      }
      else this._toolbar.setActions([])
    };
    this._register(this.viewModel.modifiedMetadata.onDidChange(()=>{
      s()
    })), s()
  }
  async _initializeSourceDiffEditor(){
    const[e, t]=await Promise.all([this.textModelService.createModelReference(this.viewModel.originalMetadata.uri), this.textModelService.createModelReference(this.viewModel.modifiedMetadata.uri)]);
    if(this._store.isDisposed){
      e.dispose(),t.dispose();
      return
    }
    this._register(e), this._register(t);
    const i=this._register(this._editor.createViewModel({
      original:e.object.textEditorModel,modified:t.object.textEditorModel
    }));
    await i.waitForDiff(), this._editor.setModel(i);
    const r=()=>{
      this._editorViewStateChanged=!0
    }, s=l=>{
      (l.scrollTopChanged||l.scrollLeftChanged)&&(this._editorViewStateChanged=!0)
    };
    this.updateEditorOptionsForWhitespace(), this._register(this._editor.getOriginalEditor().onDidChangeCursorSelection(r)), this._register(this._editor.getOriginalEditor().onDidScrollChange(s)), this._register(this._editor.getModifiedEditor().onDidChangeCursorSelection(r)), this._register(this._editor.getModifiedEditor().onDidScrollChange(s));
    const o=this.viewModel.getSourceEditorViewState();
    o&&this._editor.restoreViewState(o);
    const a=this._editor.getContentHeight();
    this.viewModel.editorHeight=a
  }
  updateEditorOptionsForWhitespace(){
    const e=this._editor, t=e.getModel()?.modified.uri||e.getModel()?.original.uri;
    if(!t)return;
    const i=this.textConfigurationService.getValue(t, "diffEditor.ignoreTrimWhitespace");
    e.updateOptions({
      ignoreTrimWhitespace:i
    }), this._register(this.textConfigurationService.onDidChangeConfiguration(r=>{
      if(r.affectsConfiguration(t,"diffEditor")&&r.affectedKeys.has("diffEditor.ignoreTrimWhitespace")){
        const s=this.textConfigurationService.getValue(t,"diffEditor.ignoreTrimWhitespace");
        e.updateOptions({
          ignoreTrimWhitespace:s
        })
      }
    }))
  }
  layout(e){
    r_(As(this._diffEditorContainer), ()=>{
      e.editorHeight&&(this._editorContainer.style.height=`${this.viewModel.layoutInfo.editorHeight}px`,this._editor.layout({
        width:this._editor.getViewWidth(),height:this.viewModel.layoutInfo.editorHeight
      })),e.outerWidth&&(this._editorContainer.style.height=`${this.viewModel.layoutInfo.editorHeight}px`,this._editor.layout()),this.layoutNotebookCell()
    })
  }
  dispose(){
    this._editor.setModel(null), this._editorViewStateChanged&&this.viewModel.saveSpirceEditorViewState(this._editor.saveViewState()), super.dispose()
  }
}, gIa=__decorate([__param(3, ln), __param(4, El), __param(5, xd), __param(6, wi), __param(7, uy), __param(8, Fn)], gIa), $_u=class extends at{
  constructor(n, e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    super(), this.notebookEditor=n, this.cell=e, this.templateData=t, this.style=i, this.instantiationService=r, this.languageService=s, this.modelService=o, this.textModelService=a, this.contextMenuService=l, this.keybindingService=u, this.notificationService=d, this.menuService=m, this.contextKeyService=p, this.configurationService=g, this.textConfigurationService=f, this._metadataLocalDisposable=this._register(new Ut), this._outputLocalDisposable=this._register(new Ut), this._ignoreMetadata=!1, this._ignoreOutputs=!1, this._isDisposed=!1, this._metadataEditorDisposeStore=this._register(new Ut), this._outputEditorDisposeStore=this._register(new Ut), this._register(e.onDidLayoutChange(A=>{
      this.layout(A)
    })), this._register(e.onDidLayoutChange(A=>this.updateBorders())), this.init(), this.buildBody(), this._register(e.onDidStateChange(()=>{
      this.updateOutputRendering(this.cell.renderOutput)
    }))
  }
  buildBody(){
    const n=this.templateData.body;
    switch(this._diffEditorContainer=this.templateData.diffEditorContainer, n.classList.remove("left", "right", "full"), this.style){
      case"left":n.classList.add("left");
      break;
      case"right":n.classList.add("right");
      break;
      default:n.classList.add("full");
      break
    }
    this.styleContainer(this._diffEditorContainer), this.updateSourceEditor(), this.cell.modified&&this._register(this.cell.modified.textModel.onDidChangeContent(()=>this._cellHeader.refresh())), this._ignoreMetadata=this.configurationService.getValue("notebook.diff.ignoreMetadata"), this._ignoreMetadata?this._disposeMetadata():this._buildMetadata(), this._ignoreOutputs=this.configurationService.getValue("notebook.diff.ignoreOutputs")||!!this.notebookEditor.textModel?.transientOptions.transientOutputs, this._ignoreOutputs?this._disposeOutput():this._buildOutput(), this._register(this.configurationService.onDidChangeConfiguration(e=>{
      let t=!1,i=!1;
      if(e.affectsConfiguration("notebook.diff.ignoreMetadata")){
        const r=this.configurationService.getValue("notebook.diff.ignoreMetadata");
        r!==void 0&&this._ignoreMetadata!==r&&(this._ignoreMetadata=r,this._metadataLocalDisposable.clear(),this.configurationService.getValue("notebook.diff.ignoreMetadata")?this._disposeMetadata():(this.cell.metadataStatusHeight=25,this._buildMetadata(),this.updateMetadataRendering(),t=!0))
      }
      if(e.affectsConfiguration("notebook.diff.ignoreOutputs")){
        const r=this.configurationService.getValue("notebook.diff.ignoreOutputs");
        r!==void 0&&this._ignoreOutputs!==(r||this.notebookEditor.textModel?.transientOptions.transientOutputs)&&(this._ignoreOutputs=r||!!this.notebookEditor.textModel?.transientOptions.transientOutputs,this._outputLocalDisposable.clear(),this._ignoreOutputs?(this._disposeOutput(),this.cell.layoutChange()):(this.cell.outputStatusHeight=25,this._buildOutput(),i=!0))
      }
      (t||i)&&this.layout({
        metadataHeight:t,outputTotalHeight:i
      })
    }))
  }
  updateMetadataRendering(){
    this.cell.metadataFoldingState===kD.Expanded?(this._metadataInfoContainer.style.display="block", !this._metadataEditorContainer||!this._metadataEditor?(this._metadataEditorContainer=Rt(this._metadataInfoContainer, Ct(".metadata-editor-container")), this._buildMetadataEditor()):this.cell.metadataHeight=this._metadataEditor.getContentHeight()):(this._metadataInfoContainer.style.display="none", this.cell.metadataHeight=0)
  }
  updateOutputRendering(n){
    this.cell.outputFoldingState===kD.Expanded?(this._outputInfoContainer.style.display="block", n?(this._hideOutputsRaw(), this._buildOutputRendererContainer(), this._showOutputsRenderer(), this._showOutputsEmptyView()):(this._hideOutputsRenderer(), this._buildOutputRawContainer(), this._showOutputsRaw())):(this._outputInfoContainer.style.display="none", this._hideOutputsRaw(), this._hideOutputsRenderer(), this._hideOutputsEmptyView())
  }
  _buildOutputRawContainer(){
    this._outputEditorContainer||(this._outputEditorContainer=Rt(this._outputInfoContainer, Ct(".output-editor-container")), this._buildOutputEditor())
  }
  _showOutputsRaw(){
    this._outputEditorContainer&&(this._outputEditorContainer.style.display="block", this.cell.rawOutputHeight=this._outputEditor.getContentHeight())
  }
  _showOutputsEmptyView(){
    this.cell.layoutChange()
  }
  _hideOutputsRaw(){
    this._outputEditorContainer&&(this._outputEditorContainer.style.display="none", this.cell.rawOutputHeight=0)
  }
  _hideOutputsEmptyView(){
    this.cell.layoutChange()
  }
  _applySanitizedMetadataChanges(n, e){
    const t={
      
    };
    try{
      const i=JSON.parse(e),r=new Set([...Object.keys(i)]);
      for(const o of r)switch(o){
        case"inputCollapsed":case"outputCollapsed":typeof i[o]=="boolean"?t[o]=i[o]:t[o]=n[o];
        break;
        default:t[o]=i[o];
        break
      }
      const s=this.notebookEditor.textModel.cells.indexOf(this.cell.modified.textModel);
      if(s<0)return;
      this.notebookEditor.textModel.applyEdits([{
        editType:3,index:s,metadata:t
      }
      ],!0,void 0,()=>{
        
      },void 0,!0)
    }
    catch{
      
    }
  }
  async _buildMetadataEditor(){
    if(this._metadataEditorDisposeStore.clear(), this.cell instanceof mwe){
      this._metadataEditor=this.instantiationService.createInstance(JB,this._metadataEditorContainer,{
        ...Iki,overflowWidgetsDomNode:this.notebookEditor.getOverflowContainerDomNode(),readOnly:!1,originalEditable:!1,ignoreTrimWhitespace:!1,automaticLayout:!1,dimension:{
          height:this.cell.layoutInfo.metadataHeight,width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!0,!0)
        }
      },{
        originalEditor:Lrt(),modifiedEditor:Lrt()
      });
      const n=this._register(U_u(this.configurationService));
      n.options.enabled&&this._metadataEditor.updateOptions({
        hideUnchangedRegions:n.options
      }),this._metadataEditorDisposeStore.add(n.onDidChangeEnablement(()=>{
        this._metadataEditor&&this._metadataEditor.updateOptions({
          hideUnchangedRegions:n.options
        })
      })),this.layout({
        metadataHeight:!0
      }),this._metadataEditorDisposeStore.add(this._metadataEditor),this._metadataEditorContainer?.classList.add("diff");
      const[e,t]=await Promise.all([this.textModelService.createModelReference(Dg.generateCellPropertyUri(this.cell.originalDocument.uri,this.cell.original.handle,_n.vscodeNotebookCellMetadata)),this.textModelService.createModelReference(Dg.generateCellPropertyUri(this.cell.modifiedDocument.uri,this.cell.modified.handle,_n.vscodeNotebookCellMetadata))]);
      if(this._isDisposed){
        e.dispose(),t.dispose();
        return
      }
      this._metadataEditorDisposeStore.add(e),this._metadataEditorDisposeStore.add(t);
      const i=this._metadataEditor.createViewModel({
        original:e.object.textEditorModel,modified:t.object.textEditorModel
      });
      if(this._metadataEditor.setModel(i),await i.waitForDiff(),this._isDisposed)return;
      this.cell.metadataHeight=this._metadataEditor.getContentHeight(),this._metadataEditorDisposeStore.add(this._metadataEditor.onDidContentSizeChange(s=>{
        s.contentHeightChanged&&this.cell.metadataFoldingState===kD.Expanded&&(this.cell.metadataHeight=s.contentHeight)
      }));
      let r=!1;
      this._metadataEditorDisposeStore.add(t.object.textEditorModel.onDidChangeContent(()=>{
        r=!0;
        const s=t.object.textEditorModel.getValue();
        this._applySanitizedMetadataChanges(this.cell.modified.metadata,s),this._metadataHeader.refresh(),r=!1
      })),this._metadataEditorDisposeStore.add(this.cell.modified.textModel.onDidChangeMetadata(()=>{
        if(r)return;
        const s=CEt(this.notebookEditor.textModel?.transientOptions.transientCellMetadata,this.cell.modified?.metadata||{
          
        },this.cell.modified?.language,!0);
        t.object.textEditorModel.setValue(s)
      }));
      return
    }
    else{
      this._metadataEditor=this.instantiationService.createInstance(WS,this._metadataEditorContainer,{
        ...Tki,dimension:{
          width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!0),height:this.cell.layoutInfo.metadataHeight
        },overflowWidgetsDomNode:this.notebookEditor.getOverflowContainerDomNode(),readOnly:!1
      },{
        
      }),this.layout({
        metadataHeight:!0
      }),this._metadataEditorDisposeStore.add(this._metadataEditor);
      const n=this.languageService.createById("jsonc"),e=CEt(this.notebookEditor.textModel?.transientOptions.transientCellMetadata,this.cell.type==="insert"?this.cell.modified.metadata||{
        
      }
      :this.cell.original.metadata||{
        
      },void 0,!0),t=this.cell.type==="insert"?this.cell.modified.uri:this.cell.original.uri,i=this.cell.type==="insert"?this.cell.modified.handle:this.cell.original.handle,r=Dg.generateCellPropertyUri(t,i,_n.vscodeNotebookCellMetadata),s=this.modelService.createModel(e,n,r,!1);
      this._metadataEditor.setModel(s),this._metadataEditorDisposeStore.add(s),this.cell.metadataHeight=this._metadataEditor.getContentHeight(),this._metadataEditorDisposeStore.add(this._metadataEditor.onDidContentSizeChange(o=>{
        o.contentHeightChanged&&this.cell.metadataFoldingState===kD.Expanded&&(this.cell.metadataHeight=o.contentHeight)
      }))
    }
  }
  _buildOutputEditor(){
    if(this._outputEditorDisposeStore.clear(), (this.cell.type==="modified"||this.cell.type==="unchanged")&&!this.notebookEditor.textModel.transientOptions.transientOutputs){
      const i=$bn(this.cell.original?.outputs||[]),r=$bn(this.cell.modified?.outputs||[]);
      if(i!==r){
        const s=this.languageService.createById("json"),o=this.modelService.createModel(i,s,void 0,!0),a=this.modelService.createModel(r,s,void 0,!0);
        this._outputEditorDisposeStore.add(o),this._outputEditorDisposeStore.add(a);
        const l=this.notebookEditor.getLayoutInfo().fontInfo.lineHeight||17,u=Math.max(o.getLineCount(),a.getLineCount());
        this._outputEditor=this.instantiationService.createInstance(JB,this._outputEditorContainer,{
          ...Iki,overflowWidgetsDomNode:this.notebookEditor.getOverflowContainerDomNode(),readOnly:!0,ignoreTrimWhitespace:!1,automaticLayout:!1,dimension:{
            height:Math.min(Rki,this.cell.layoutInfo.rawOutputHeight||l*u),width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!0)
          },accessibilityVerbose:this.configurationService.getValue("accessibility.verbosity.diffEditor")??!1
        },{
          originalEditor:Lrt(),modifiedEditor:Lrt()
        }),this._outputEditorDisposeStore.add(this._outputEditor),this._outputEditorContainer?.classList.add("diff"),this._outputEditor.setModel({
          original:o,modified:a
        }),this._outputEditor.restoreViewState(this.cell.getOutputEditorViewState()),this.cell.rawOutputHeight=this._outputEditor.getContentHeight(),this._outputEditorDisposeStore.add(this._outputEditor.onDidContentSizeChange(d=>{
          d.contentHeightChanged&&this.cell.outputFoldingState===kD.Expanded&&(this.cell.rawOutputHeight=d.contentHeight)
        })),this._outputEditorDisposeStore.add(this.cell.modified.textModel.onDidChangeOutputs(()=>{
          const d=$bn(this.cell.modified?.outputs||[]);
          a.setValue(d),this._outputHeader.refresh()
        }));
        return
      }
    }
    this._outputEditor=this.instantiationService.createInstance(WS, this._outputEditorContainer, {
      ...Tki,dimension:{
        width:Math.min(Rki,this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,this.cell.type==="unchanged"||this.cell.type==="modified")-32),height:this.cell.layoutInfo.rawOutputHeight
      },overflowWidgetsDomNode:this.notebookEditor.getOverflowContainerDomNode()
    }, {
      
    }), this._outputEditorDisposeStore.add(this._outputEditor);
    const n=this.languageService.createById("json"), e=$bn(this.notebookEditor.textModel.transientOptions.transientOutputs?[]:this.cell.type==="insert"?this.cell.modified?.outputs||[]:this.cell.original?.outputs||[]), t=this.modelService.createModel(e, n, void 0, !0);
    this._outputEditorDisposeStore.add(t), this._outputEditor.setModel(t), this._outputEditor.restoreViewState(this.cell.getOutputEditorViewState()), this.cell.rawOutputHeight=this._outputEditor.getContentHeight(), this._outputEditorDisposeStore.add(this._outputEditor.onDidContentSizeChange(i=>{
      i.contentHeightChanged&&this.cell.outputFoldingState===kD.Expanded&&(this.cell.rawOutputHeight=i.contentHeight)
    }))
  }
  layoutNotebookCell(){
    this.notebookEditor.layoutNotebookCell(this.cell, this.cell.layoutInfo.totalHeight)
  }
  updateBorders(){
    this.templateData.leftBorder.style.height=`${this.cell.layoutInfo.totalHeight-32}px`, this.templateData.rightBorder.style.height=`${this.cell.layoutInfo.totalHeight-32}px`, this.templateData.bottomBorder.style.top=`${this.cell.layoutInfo.totalHeight-32}px`
  }
  dispose(){
    this._outputEditor&&this.cell.saveOutputEditorViewState(this._outputEditor.saveViewState()), this._metadataEditor&&this.cell.saveMetadataEditorViewState(this._metadataEditor.saveViewState()), this._metadataEditorDisposeStore.dispose(), this._outputEditorDisposeStore.dispose(), this._isDisposed=!0, super.dispose()
  }
}, q_u=class extends $_u{
  constructor(n, e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    super(n, e, t, i, r, s, o, a, l, u, d, m, p, g, f), this.cell=e, this.templateData=t, this.updateBorders()
  }
  init(){
    this._diagonalFill=this.templateData.diagonalFill
  }
  buildBody(){
    const n=this.templateData.body;
    switch(this._diffEditorContainer=this.templateData.diffEditorContainer, n.classList.remove("left", "right", "full"), this.style){
      case"left":n.classList.add("left");
      break;
      case"right":n.classList.add("right");
      break;
      default:n.classList.add("full");
      break
    }
    this.styleContainer(this._diffEditorContainer), this.updateSourceEditor(), this.configurationService.getValue("notebook.diff.ignoreMetadata")?this._disposeMetadata():this._buildMetadata(), this.configurationService.getValue("notebook.diff.ignoreOutputs")||this.notebookEditor.textModel?.transientOptions.transientOutputs?this._disposeOutput():this._buildOutput(), this._register(this.configurationService.onDidChangeConfiguration(e=>{
      let t=!1,i=!1;
      e.affectsConfiguration("notebook.diff.ignoreMetadata")&&(this._metadataLocalDisposable.clear(),this.configurationService.getValue("notebook.diff.ignoreMetadata")?this._disposeMetadata():(this.cell.metadataStatusHeight=25,this._buildMetadata(),this.updateMetadataRendering(),t=!0)),e.affectsConfiguration("notebook.diff.ignoreOutputs")&&(this._outputLocalDisposable.clear(),this.configurationService.getValue("notebook.diff.ignoreOutputs")||this.notebookEditor.textModel?.transientOptions.transientOutputs?this._disposeOutput():(this.cell.outputStatusHeight=25,this._buildOutput(),i=!0)),(t||i)&&this.layout({
        metadataHeight:t,outputTotalHeight:i
      })
    }))
  }
  updateSourceEditor(){
    this._cellHeaderContainer=this.templateData.cellHeaderContainer, this._cellHeaderContainer.style.display="flex", this._cellHeaderContainer.innerText="", this._editorContainer=this.templateData.editorContainer, this._editorContainer.classList.add("diff");
    const n=()=>{
      if(this.cell.cellFoldingState===kD.Collapsed){
        this._editorContainer.style.display="none",this.cell.editorHeight=0;
        return
      }
      const e=this.notebookEditor.getLayoutInfo().fontInfo.lineHeight||17,t=this.cell.computeInputEditorHeight(e);
      if(this._editorContainer.style.height=`${t}px`,this._editorContainer.style.display="block",this._editor){
        const i=this._editor.getContentHeight();
        i>=0&&(this.cell.editorHeight=i);
        return
      }
      this._editor=this.templateData.sourceEditor,this._editor.layout({
        width:(this.notebookEditor.getLayoutInfo().width-2*hwe)/2-18,height:t
      }),this._editor.updateOptions({
        readOnly:this.readonly
      }),this.cell.editorHeight=t,this._register(this._editor.onDidContentSizeChange(i=>{
        this.cell.cellFoldingState===kD.Expanded&&i.contentHeightChanged&&this.cell.layoutInfo.editorHeight!==i.contentHeight&&(this.cell.editorHeight=i.contentHeight)
      })),this._initializeSourceDiffEditor(this.nestedCellViewModel)
    };
    this._cellHeader=this._register(this.instantiationService.createInstance(f2e, this.cell, this._cellHeaderContainer, this.notebookEditor, {
      updateInfoRendering:()=>n(),checkIfModified:()=>({
        reason:void 0
      }),getFoldingState:()=>this.cell.cellFoldingState,updateFoldingState:e=>this.cell.cellFoldingState=e,unChangedLabel:"Input",changedLabel:"Input",prefix:"input",menuId:st.NotebookDiffCellInputTitle
    })), this._cellHeader.buildHeader(), n(), this._initializeSourceDiffEditor(this.nestedCellViewModel)
  }
  calculateDiagonalFillHeight(){
    return this.cell.layoutInfo.cellStatusHeight+this.cell.layoutInfo.editorHeight+this.cell.layoutInfo.editorMargin+this.cell.layoutInfo.metadataStatusHeight+this.cell.layoutInfo.metadataHeight+this.cell.layoutInfo.outputTotalHeight+this.cell.layoutInfo.outputStatusHeight
  }
  async _initializeSourceDiffEditor(n){
    const e=await this.textModelService.createModelReference(n.uri);
    if(this._isDisposed)return;
    const t=e.object.textEditorModel;
    this._register(e), this._editor.setModel(t);
    const i=this.cell.getSourceEditorViewState();
    i&&this._editor.restoreViewState(i);
    const r=this._editor.getContentHeight();
    this.cell.editorHeight=r;
    const s=`${this.calculateDiagonalFillHeight()}px`;
    this._diagonalFill.style.height!==s&&(this._diagonalFill.style.height=s)
  }
  _disposeMetadata(){
    this.cell.metadataStatusHeight=0, this.cell.metadataHeight=0, this.templateData.cellHeaderContainer.style.display="none", this.templateData.metadataHeaderContainer.style.display="none", this.templateData.metadataInfoContainer.style.display="none", this._metadataEditor=void 0
  }
  _buildMetadata(){
    this._metadataHeaderContainer=this.templateData.metadataHeaderContainer, this._metadataInfoContainer=this.templateData.metadataInfoContainer, this._metadataHeaderContainer.style.display="flex", this._metadataInfoContainer.style.display="block", this._metadataHeaderContainer.innerText="", this._metadataInfoContainer.innerText="", this._metadataHeader=this.instantiationService.createInstance(f2e, this.cell, this._metadataHeaderContainer, this.notebookEditor, {
      updateInfoRendering:this.updateMetadataRendering.bind(this),checkIfModified:()=>this.cell.checkMetadataIfModified(),getFoldingState:()=>this.cell.metadataFoldingState,updateFoldingState:n=>{
        this.cell.metadataFoldingState=n
      },unChangedLabel:"Metadata",changedLabel:"Metadata changed",prefix:"metadata",menuId:st.NotebookDiffCellMetadataTitle
    }), this._metadataLocalDisposable.add(this._metadataHeader), this._metadataHeader.buildHeader()
  }
  _buildOutput(){
    this.templateData.outputHeaderContainer.style.display="flex", this.templateData.outputInfoContainer.style.display="block", this._outputHeaderContainer=this.templateData.outputHeaderContainer, this._outputInfoContainer=this.templateData.outputInfoContainer, this._outputHeaderContainer.innerText="", this._outputInfoContainer.innerText="", this._outputHeader=this.instantiationService.createInstance(f2e, this.cell, this._outputHeaderContainer, this.notebookEditor, {
      updateInfoRendering:this.updateOutputRendering.bind(this),checkIfModified:()=>this.cell.checkIfOutputsModified(),getFoldingState:()=>this.cell.outputFoldingState,updateFoldingState:n=>{
        this.cell.outputFoldingState=n
      },unChangedLabel:"Outputs",changedLabel:"Outputs changed",prefix:"output",menuId:st.NotebookDiffCellOutputsTitle
    }), this._outputLocalDisposable.add(this._outputHeader), this._outputHeader.buildHeader()
  }
  _disposeOutput(){
    this._hideOutputsRaw(), this._hideOutputsRenderer(), this._hideOutputsEmptyView(), this.cell.rawOutputHeight=0, this.cell.outputMetadataHeight=0, this.cell.outputStatusHeight=0, this.templateData.outputHeaderContainer.style.display="none", this.templateData.outputInfoContainer.style.display="none", this._outputViewContainer=void 0
  }
}, fIa=class extends q_u{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    super(e, t, i, "left", a, r, s, o, l, u, d, m, p, g, f)
  }
  get nestedCellViewModel(){
    return this.cell.original
  }
  get readonly(){
    return!0
  }
  styleContainer(e){
    e.classList.remove("inserted"), e.classList.add("removed")
  }
  layout(e){
    r_(As(this._diffEditorContainer), ()=>{
      (e.editorHeight||e.outerWidth)&&this._editor&&(this._editorContainer.style.height=`${this.cell.layoutInfo.editorHeight}px`,this._editor.layout({
        width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!1),height:this.cell.layoutInfo.editorHeight
      })),e.outerWidth&&this._editor&&(this._editorContainer.style.height=`${this.cell.layoutInfo.editorHeight}px`,this._editor.layout()),(e.metadataHeight||e.outerWidth)&&this._metadataEditor?.layout({
        width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!1),height:this.cell.layoutInfo.metadataHeight
      }),(e.outputTotalHeight||e.outerWidth)&&this._outputEditor?.layout({
        width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!1),height:this.cell.layoutInfo.outputTotalHeight
      }),this._diagonalFill&&(this._diagonalFill.style.height=`${this.calculateDiagonalFillHeight()}px`),this.layoutNotebookCell()
    })
  }
  _buildOutputRendererContainer(){
    if(!this._outputViewContainer){
      this._outputViewContainer=Rt(this._outputInfoContainer,Ct(".output-view-container")),this._outputEmptyElement=Rt(this._outputViewContainer,Ct(".output-empty-view"));
      const e=Rt(this._outputEmptyElement,Ct("span"));
      e.innerText="No outputs to render",this.cell.original?.outputs.length?this._outputEmptyElement.style.display="none":this._outputEmptyElement.style.display="block",this.cell.layoutChange(),this._outputLeftView=this.instantiationService.createInstance(TEt,this.notebookEditor,this.notebookEditor.textModel,this.cell,this.cell.original,s1.Original,this._outputViewContainer),this._register(this._outputLeftView),this._outputLeftView.render();
      const t=this.notebookEditor.onDidDynamicOutputRendered(i=>{
        i.cell.uri.toString()===this.cell.original.uri.toString()&&(this.notebookEditor.deltaCellOutputContainerClassNames(s1.Original,this.cell.original.id,["nb-cellDeleted"],[]),t.dispose())
      });
      this._register(t)
    }
    this._outputViewContainer.style.display="block"
  }
  _decorate(){
    this.notebookEditor.deltaCellOutputContainerClassNames(s1.Original, this.cell.original.id, ["nb-cellDeleted"], [])
  }
  _showOutputsRenderer(){
    this._outputViewContainer&&(this._outputViewContainer.style.display="block", this._outputLeftView?.showOutputs(), this._decorate())
  }
  _hideOutputsRenderer(){
    this._outputViewContainer&&(this._outputViewContainer.style.display="none", this._outputLeftView?.hideOutputs())
  }
  dispose(){
    this._editor&&this.cell.saveSpirceEditorViewState(this._editor.saveViewState()), super.dispose()
  }
}, fIa=__decorate([__param(3, Jl), __param(4, Il), __param(5, El), __param(6, ln), __param(7, kc), __param(8, mo), __param(9, ms), __param(10, xd), __param(11, wi), __param(12, Fn), __param(13, uy)], fIa), bIa=class extends q_u{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    super(e, t, i, "right", r, s, o, a, l, u, d, m, p, g, f)
  }
  get nestedCellViewModel(){
    return this.cell.modified
  }
  get readonly(){
    return!1
  }
  styleContainer(e){
    e.classList.remove("removed"), e.classList.add("inserted")
  }
  _buildOutputRendererContainer(){
    if(!this._outputViewContainer){
      this._outputViewContainer=Rt(this._outputInfoContainer,Ct(".output-view-container")),this._outputEmptyElement=Rt(this._outputViewContainer,Ct(".output-empty-view")),this._outputEmptyElement.innerText="No outputs to render",this.cell.modified?.outputs.length?this._outputEmptyElement.style.display="none":this._outputEmptyElement.style.display="block",this.cell.layoutChange(),this._outputRightView=this.instantiationService.createInstance(TEt,this.notebookEditor,this.notebookEditor.textModel,this.cell,this.cell.modified,s1.Modified,this._outputViewContainer),this._register(this._outputRightView),this._outputRightView.render();
      const e=this.notebookEditor.onDidDynamicOutputRendered(t=>{
        t.cell.uri.toString()===this.cell.modified.uri.toString()&&(this.notebookEditor.deltaCellOutputContainerClassNames(s1.Modified,this.cell.modified.id,["nb-cellAdded"],[]),e.dispose())
      });
      this._register(e)
    }
    this._outputViewContainer.style.display="block"
  }
  _decorate(){
    this.notebookEditor.deltaCellOutputContainerClassNames(s1.Modified, this.cell.modified.id, ["nb-cellAdded"], [])
  }
  _showOutputsRenderer(){
    this._outputViewContainer&&(this._outputViewContainer.style.display="block", this._outputRightView?.showOutputs(), this._decorate())
  }
  _hideOutputsRenderer(){
    this._outputViewContainer&&(this._outputViewContainer.style.display="none", this._outputRightView?.hideOutputs())
  }
  layout(e){
    r_(As(this._diffEditorContainer), ()=>{
      (e.editorHeight||e.outerWidth)&&this._editor&&(this._editorContainer.style.height=`${this.cell.layoutInfo.editorHeight}px`,this._editor.layout({
        width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!1),height:this.cell.layoutInfo.editorHeight
      })),e.outerWidth&&this._editor&&(this._editorContainer.style.height=`${this.cell.layoutInfo.editorHeight}px`,this._editor.layout()),(e.metadataHeight||e.outerWidth)&&this._metadataEditor?.layout({
        width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!0),height:this.cell.layoutInfo.metadataHeight
      }),(e.outputTotalHeight||e.outerWidth)&&this._outputEditor?.layout({
        width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!1),height:this.cell.layoutInfo.outputTotalHeight
      }),this.layoutNotebookCell(),this._diagonalFill&&(this._diagonalFill.style.height=`${this.calculateDiagonalFillHeight()}px`)
    })
  }
  dispose(){
    this._editor&&this.cell.saveSpirceEditorViewState(this._editor.saveViewState()), super.dispose()
  }
}, bIa=__decorate([__param(3, ln), __param(4, Jl), __param(5, Il), __param(6, El), __param(7, kc), __param(8, mo), __param(9, ms), __param(10, xd), __param(11, wi), __param(12, Fn), __param(13, uy)], bIa), Pki=class extends $_u{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    super(e, t, i, "full", r, s, o, a, l, u, d, m, p, g, f), this.cell=t, this.templateData=i, this._editorViewStateChanged=!1, this.updateBorders()
  }
  init(){
    
  }
  styleContainer(e){
    e.classList.remove("inserted", "removed")
  }
  buildBody(){
    super.buildBody(), this.cell.displayIconToHideUnmodifiedCells?(this._register(this.templateData.marginOverlay.onAction(()=>this.cell.hideUnchangedCells())), this.templateData.marginOverlay.show()):this.templateData.marginOverlay.hide()
  }
  _disposeMetadata(){
    this.cell.metadataStatusHeight=0, this.cell.metadataHeight=0, this.templateData.metadataHeaderContainer.style.display="none", this.templateData.metadataInfoContainer.style.display="none", this._metadataEditor=void 0
  }
  _buildMetadata(){
    this._metadataHeaderContainer=this.templateData.metadataHeaderContainer, this._metadataInfoContainer=this.templateData.metadataInfoContainer, this._metadataHeaderContainer.style.display="flex", this._metadataInfoContainer.style.display="block", this._metadataHeaderContainer.innerText="", this._metadataInfoContainer.innerText="", this._metadataHeader=this.instantiationService.createInstance(f2e, this.cell, this._metadataHeaderContainer, this.notebookEditor, {
      updateInfoRendering:this.updateMetadataRendering.bind(this),checkIfModified:()=>this.cell.checkMetadataIfModified(),getFoldingState:()=>this.cell.metadataFoldingState,updateFoldingState:e=>{
        this.cell.metadataFoldingState=e
      },unChangedLabel:"Metadata",changedLabel:"Metadata changed",prefix:"metadata",menuId:st.NotebookDiffCellMetadataTitle
    }), this._metadataLocalDisposable.add(this._metadataHeader), this._metadataHeader.buildHeader()
  }
  _disposeOutput(){
    this._hideOutputsRaw(), this._hideOutputsRenderer(), this._hideOutputsEmptyView(), this.cell.rawOutputHeight=0, this.cell.outputMetadataHeight=0, this.cell.outputStatusHeight=0, this.templateData.outputHeaderContainer.style.display="none", this.templateData.outputInfoContainer.style.display="none", this._outputViewContainer=void 0
  }
  _buildOutput(){
    this.templateData.outputHeaderContainer.style.display="flex", this.templateData.outputInfoContainer.style.display="block", this._outputHeaderContainer=this.templateData.outputHeaderContainer, this._outputInfoContainer=this.templateData.outputInfoContainer, this._outputHeaderContainer.innerText="", this._outputInfoContainer.innerText="", this.cell.checkIfOutputsModified()?this._outputInfoContainer.classList.add("modified"):this._outputInfoContainer.classList.remove("modified"), this._outputHeader=this.instantiationService.createInstance(f2e, this.cell, this._outputHeaderContainer, this.notebookEditor, {
      updateInfoRendering:this.updateOutputRendering.bind(this),checkIfModified:()=>this.cell.checkIfOutputsModified(),getFoldingState:()=>this.cell.outputFoldingState,updateFoldingState:e=>{
        this.cell.outputFoldingState=e
      },unChangedLabel:"Outputs",changedLabel:"Outputs changed",prefix:"output",menuId:st.NotebookDiffCellOutputsTitle
    }), this._outputLocalDisposable.add(this._outputHeader), this._outputHeader.buildHeader()
  }
  _buildOutputRendererContainer(){
    if(!this._outputViewContainer){
      this._outputViewContainer=Rt(this._outputInfoContainer,Ct(".output-view-container")),this._outputEmptyElement=Rt(this._outputViewContainer,Ct(".output-empty-view")),this._outputEmptyElement.innerText="No outputs to render",!this.cell.checkIfOutputsModified()&&this.cell.modified.outputs.length===0?this._outputEmptyElement.style.display="block":this._outputEmptyElement.style.display="none",this.cell.layoutChange(),this._register(this.cell.modified.textModel.onDidChangeOutputs(()=>{
        !this.cell.checkIfOutputsModified()&&this.cell.modified.outputs.length===0?this._outputEmptyElement.style.display="block":this._outputEmptyElement.style.display="none",this._decorate()
      })),this._outputLeftContainer=Rt(this._outputViewContainer,Ct(".output-view-container-left")),this._outputRightContainer=Rt(this._outputViewContainer,Ct(".output-view-container-right")),this._outputMetadataContainer=Rt(this._outputViewContainer,Ct(".output-view-container-metadata"));
      const e=this.cell.checkIfOutputsModified(),t=e&&e.kind===1&&this.cell.original.outputs.length===1&&this.cell.modified.outputs.length===1&&mhy(this.cell.original.outputs[0],this.cell.modified.outputs[0])===1;
      if(e&&!t){
        const i=this.notebookEditor.onDidDynamicOutputRendered(s=>{
          s.cell.uri.toString()===this.cell.original.uri.toString()&&this.cell.checkIfOutputsModified()&&(this.notebookEditor.deltaCellOutputContainerClassNames(s1.Original,this.cell.original.id,["nb-cellDeleted"],[]),i.dispose())
        }),r=this.notebookEditor.onDidDynamicOutputRendered(s=>{
          s.cell.uri.toString()===this.cell.modified.uri.toString()&&this.cell.checkIfOutputsModified()&&(this.notebookEditor.deltaCellOutputContainerClassNames(s1.Modified,this.cell.modified.id,["nb-cellAdded"],[]),r.dispose())
        });
        this._register(i),this._register(r)
      }
      if(this._outputLeftView=this.instantiationService.createInstance(TEt,this.notebookEditor,this.notebookEditor.textModel,this.cell,this.cell.original,s1.Original,this._outputLeftContainer),this._outputLeftView.render(),this._register(this._outputLeftView),this._outputRightView=this.instantiationService.createInstance(TEt,this.notebookEditor,this.notebookEditor.textModel,this.cell,this.cell.modified,s1.Modified,this._outputRightContainer),this._outputRightView.render(),this._register(this._outputRightView),e&&!t&&this._decorate(),t){
        this._outputMetadataContainer.style.top=`${this.cell.layoutInfo.rawOutputHeight}px`,this._outputMetadataEditor=this.instantiationService.createInstance(JB,this._outputMetadataContainer,{
          ...Iki,overflowWidgetsDomNode:this.notebookEditor.getOverflowContainerDomNode(),readOnly:!0,ignoreTrimWhitespace:!1,automaticLayout:!1,dimension:{
            height:Rki,width:this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!0)
          }
        },{
          originalEditor:Lrt(),modifiedEditor:Lrt()
        }),this._register(this._outputMetadataEditor);
        const i=JSON.stringify(this.cell.original.outputs[0].metadata??{
          
        },void 0,"	"),r=JSON.stringify(this.cell.modified.outputs[0].metadata??{
          
        },void 0,"	"),s=this.languageService.createById("json"),o=this.modelService.createModel(i,s,void 0,!0),a=this.modelService.createModel(r,s,void 0,!0);
        this._outputMetadataEditor.setModel({
          original:o,modified:a
        }),this.cell.outputMetadataHeight=this._outputMetadataEditor.getContentHeight(),this._register(this._outputMetadataEditor.onDidContentSizeChange(l=>{
          this.cell.outputMetadataHeight=l.contentHeight
        }))
      }
    }
    this._outputViewContainer.style.display="block"
  }
  _decorate(){
    this.cell.checkIfOutputsModified()?(this.notebookEditor.deltaCellOutputContainerClassNames(s1.Original, this.cell.original.id, ["nb-cellDeleted"], []), this.notebookEditor.deltaCellOutputContainerClassNames(s1.Modified, this.cell.modified.id, ["nb-cellAdded"], [])):(this.notebookEditor.deltaCellOutputContainerClassNames(s1.Original, this.cell.original.id, [], ["nb-cellDeleted"]), this.notebookEditor.deltaCellOutputContainerClassNames(s1.Modified, this.cell.modified.id, [], ["nb-cellAdded"]))
  }
  _showOutputsRenderer(){
    this._outputViewContainer&&(this._outputViewContainer.style.display="block", this._outputLeftView?.showOutputs(), this._outputRightView?.showOutputs(), this._outputMetadataEditor?.layout({
      width:this._editor?.getViewWidth()||this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!0),height:this.cell.layoutInfo.outputMetadataHeight
    }), this._decorate())
  }
  _hideOutputsRenderer(){
    this._outputViewContainer&&(this._outputViewContainer.style.display="none", this._outputLeftView?.hideOutputs(), this._outputRightView?.hideOutputs())
  }
  updateSourceEditor(){
    this._cellHeaderContainer=this.templateData.cellHeaderContainer, this._cellHeaderContainer.style.display="flex", this._cellHeaderContainer.innerText="";
    const e=this.cell.modified;
    this._editorContainer=this.templateData.editorContainer, this._editorContainer.classList.add("diff");
    const t=()=>{
      if(this.cell.cellFoldingState===kD.Collapsed){
        this._editorContainer.style.display="none",this.cell.editorHeight=0;
        return
      }
      const l=e.textModel.textBuffer.getLineCount(),u=this.notebookEditor.getLayoutInfo().fontInfo.lineHeight||17,d=this.cell.layoutInfo.editorHeight!==0?this.cell.layoutInfo.editorHeight:this.cell.computeInputEditorHeight(u);
      if(this._editorContainer.style.height=`${d}px`,this._editorContainer.style.display="block",this._editor){
        const g=this._editor.getContentHeight();
        g>=0&&(this.cell.editorHeight=g);
        return
      }
      this._editor=this.templateData.sourceEditor;
      const m={
        padding:g2e(l)
      },p=this._register(U_u(this.configurationService));
      p.options.enabled&&(m.hideUnchangedRegions=p.options),this._editor.updateOptions(m),this._register(p.onDidChangeEnablement(()=>{
        m.hideUnchangedRegions=p.options,this._editor?.updateOptions(m)
      })),this._editor.layout({
        width:this.notebookEditor.getLayoutInfo().width-2*hwe,height:d
      }),this._register(this._editor.onDidContentSizeChange(g=>{
        this.cell.cellFoldingState===kD.Expanded&&g.contentHeightChanged&&this.cell.layoutInfo.editorHeight!==g.contentHeight&&(this.cell.editorHeight=g.contentHeight)
      })),this._initializeSourceDiffEditor()
    };
    this._cellHeader=this._register(this.instantiationService.createInstance(f2e, this.cell, this._cellHeaderContainer, this.notebookEditor, {
      updateInfoRendering:()=>t(),checkIfModified:()=>this.cell.modified?.textModel.getTextBufferHash()!==this.cell.original?.textModel.getTextBufferHash()?{
        reason:void 0
      }
      :!1,getFoldingState:()=>this.cell.cellFoldingState,updateFoldingState:l=>this.cell.cellFoldingState=l,unChangedLabel:"Input",changedLabel:"Input changed",prefix:"input",menuId:st.NotebookDiffCellInputTitle
    })), this._cellHeader.buildHeader(), t();
    const i=this.contextKeyService.createScoped(this.templateData.inputToolbarContainer);
    this._register(i);
    const r=Fbn.bindTo(i);
    r.set(this.cell.modified.textModel.getTextBufferHash()!==this.cell.original.textModel.getTextBufferHash());
    const s=g6f.bindTo(i), o=this.textConfigurationService.getValue(this.cell.modified.uri, "diffEditor.ignoreTrimWhitespace");
    s.set(o), this._toolbar=this.templateData.toolbar, this._toolbar.context=this.cell;
    const a=()=>{
      const l=this.textConfigurationService.getValue(this.cell.modified.uri,"diffEditor.ignoreTrimWhitespace");
      s.set(l);
      const u=this.cell.modified.textModel.getTextBufferHash()!==this.cell.original.textModel.getTextBufferHash();
      if(r.set(u),u){
        const d=this.menuService.getMenuActions(st.NotebookDiffCellInputTitle,i,{
          shouldForwardArgs:!0
        }),m=xW(d);
        this._toolbar.setActions(m)
      }
      else this._toolbar.setActions([])
    };
    this._register(this.cell.modified.textModel.onDidChangeContent(()=>a())), this._register(this.textConfigurationService.onDidChangeConfiguration(l=>{
      l.affectsConfiguration(this.cell.modified.uri,"diffEditor")&&l.affectedKeys.has("diffEditor.ignoreTrimWhitespace")&&a()
    })), a()
  }
  async _initializeSourceDiffEditor(){
    const[e, t]=await Promise.all([this.textModelService.createModelReference(this.cell.original.uri), this.textModelService.createModelReference(this.cell.modified.uri)]);
    if(this._register(e), this._register(t), this._isDisposed){
      e.dispose(),t.dispose();
      return
    }
    const i=this._register(this._editor.createViewModel({
      original:e.object.textEditorModel,modified:t.object.textEditorModel
    }));
    await i.waitForDiff(), this._editor.setModel(i);
    const r=()=>{
      this._editorViewStateChanged=!0
    }, s=l=>{
      (l.scrollTopChanged||l.scrollLeftChanged)&&(this._editorViewStateChanged=!0)
    };
    this.updateEditorOptionsForWhitespace(), this._register(this._editor.getOriginalEditor().onDidChangeCursorSelection(r)), this._register(this._editor.getOriginalEditor().onDidScrollChange(s)), this._register(this._editor.getModifiedEditor().onDidChangeCursorSelection(r)), this._register(this._editor.getModifiedEditor().onDidScrollChange(s));
    const o=this.cell.getSourceEditorViewState();
    o&&this._editor.restoreViewState(o);
    const a=this._editor.getContentHeight();
    this.cell.editorHeight=a
  }
  updateEditorOptionsForWhitespace(){
    const e=this._editor;
    if(!e)return;
    const t=e.getModel()?.modified.uri||e.getModel()?.original.uri;
    if(!t)return;
    const i=this.textConfigurationService.getValue(t, "diffEditor.ignoreTrimWhitespace");
    e.updateOptions({
      ignoreTrimWhitespace:i
    }), this._register(this.textConfigurationService.onDidChangeConfiguration(r=>{
      if(r.affectsConfiguration(t,"diffEditor")&&r.affectedKeys.has("diffEditor.ignoreTrimWhitespace")){
        const s=this.textConfigurationService.getValue(t,"diffEditor.ignoreTrimWhitespace");
        e.updateOptions({
          ignoreTrimWhitespace:s
        })
      }
    }))
  }
  layout(e){
    r_(As(this._diffEditorContainer), ()=>{
      e.editorHeight&&this._editor&&(this._editorContainer.style.height=`${this.cell.layoutInfo.editorHeight}px`,this._editor.layout({
        width:this._editor.getViewWidth(),height:this.cell.layoutInfo.editorHeight
      })),e.outerWidth&&this._editor&&(this._editorContainer.style.height=`${this.cell.layoutInfo.editorHeight}px`,this._editor.layout()),(e.metadataHeight||e.outerWidth)&&this._metadataEditorContainer&&(this._metadataEditorContainer.style.height=`${this.cell.layoutInfo.metadataHeight}px`,this._metadataEditor?.layout({
        width:this._editor?.getViewWidth()||this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!0),height:this.cell.layoutInfo.metadataHeight
      })),(e.outputTotalHeight||e.outerWidth)&&(this._outputEditorContainer&&(this._outputEditorContainer.style.height=`${this.cell.layoutInfo.outputTotalHeight}px`,this._outputEditor?.layout({
        width:this._editor?.getViewWidth()||this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!0),height:this.cell.layoutInfo.outputTotalHeight
      })),this._outputMetadataContainer&&(this._outputMetadataContainer.style.height=`${this.cell.layoutInfo.outputMetadataHeight}px`,this._outputMetadataContainer.style.top=`${this.cell.layoutInfo.outputTotalHeight-this.cell.layoutInfo.outputMetadataHeight}px`,this._outputMetadataEditor?.layout({
        width:this._editor?.getViewWidth()||this.cell.getComputedCellContainerWidth(this.notebookEditor.getLayoutInfo(),!1,!0),height:this.cell.layoutInfo.outputMetadataHeight
      }))),this.layoutNotebookCell()
    })
  }
  dispose(){
    this._editor&&this._editor.setModel(null), this._editor&&this._editorViewStateChanged&&this.cell.saveSpirceEditorViewState(this._editor.saveViewState()), super.dispose()
  }
}, Pki=__decorate([__param(3, ln), __param(4, Jl), __param(5, Il), __param(6, El), __param(7, kc), __param(8, mo), __param(9, ms), __param(10, xd), __param(11, wi), __param(12, Fn), __param(13, uy)], Pki), k6f=class extends at{
  constructor(n){
    super(), this.container=n, this._nodes=kl("div.diff-hidden-cells", [kl("div.center@content", {
      style:{
        display:"flex"
      }
    }, [Ct("a", {
      title:_(9248,null),role:"button",onclick:()=>{
        this._action.fire()
      }
    }, ...a_("$(unfold)"))])]), this._action=this._register(new Qe), this.onAction=this._action.event, this._nodes.root.style.display="none", n.appendChild(this._nodes.root)
  }
  show(){
    this._nodes.root.style.display="block"
  }
  hide(){
    this._nodes.root.style.display="none"
  }
  dispose(){
    this.hide(), this.container.removeChild(this._nodes.root), um(this._nodes.root), super.dispose()
  }
}, H_u=class extends at{
  constructor(n){
    super(), this.container=n, this._nodes=kl("div.diff-hidden-cells", [kl("div.center@content", {
      style:{
        display:"flex"
      }
    }, [Ct("a", {
      title:_(9249,null),role:"button",onclick:()=>{
        this._action.fire()
      }
    }, ...a_("$(fold)"))])]), this._action=this._register(new Qe), this.onAction=this._action.event, this._nodes.root.style.display="none", n.appendChild(this._nodes.root)
  }
  show(){
    this._nodes.root.style.display="block"
  }
  hide(){
    this._nodes.root.style.display="none"
  }
  dispose(){
    this.hide(), this.container.removeChild(this._nodes.root), um(this._nodes.root), super.dispose()
  }
}
}
});
function E6f(n, e, t, i={
  
}){
  const r=Rt(t, Ct(".editor-container"));
  return{
    editor:n.createInstance(JB, r, {
      ...Iki,overflowWidgetsDomNode:e.getOverflowContainerDomNode(),originalEditable:!1,ignoreTrimWhitespace:!1,automaticLayout:!1,dimension:{
        height:0,width:0
      },renderSideBySide:!0,useInlineViewWhenSpaceIsLimited:!1,...i
    }, {
      originalEditor:Lrt(),modifiedEditor:Lrt()
    }), editorContainer:r
  }
}
function yhy(n, e, t, i={
  
}){
  const r=Rt(t, Ct(".editor-container")), s=["editor.contrib.emptyTextEditorHint"];
  return{
    editor:n.createInstance(WS, r, {
      ...Tki,glyphMargin:!1,dimension:{
        width:(e.getLayoutInfo().width-2*hwe)/2-18,height:0
      },automaticLayout:!1,overflowWidgetsDomNode:e.getOverflowContainerDomNode(),readOnly:!0
    }, {
      contributions:SC.getEditorContributions().filter(a=>s.indexOf(a.id)===-1)
    }), editorContainer:r
  }
}
var J_u, G_u, W_u, Q_u, vIa, Lki, Nki, Mki, Fki, x6f, AIa, why=