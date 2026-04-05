// Module: out-build/vs/workbench/contrib/notebook/browser/notebookOptions.js
// Offset: 33405248 (bundle byte offset)
// Size: 17762 bytes

Nte(), yn(), rt(), Uc(), Js(), qft(), Oh(), MSe(), Ei(), ph(), uD(), b_u=18, v_u=4, A_u=Object.freeze({
  codeCellLeftMargin:28, cellRunGutter:32, markdownCellTopMargin:8, markdownCellBottomMargin:8, markdownCellLeftMargin:0, markdownCellGutter:32, focusIndicatorLeftMargin:4
}), y_u=Object.freeze({
  codeCellLeftMargin:8, cellRunGutter:36, markdownCellTopMargin:6, markdownCellBottomMargin:6, markdownCellLeftMargin:8, markdownCellGutter:36, focusIndicatorLeftMargin:4
}), Trt=class extends at{
  constructor(e, t, i, r, s, o){
    super(), this.targetWindow=e, this.isReadonly=t, this.overrides=i, this.configurationService=r, this.notebookExecutionStateService=s, this.codeEditorService=o, this._onDidChangeOptions=this._register(new Qe), this.onDidChangeOptions=this._onDidChangeOptions.event, this._editorTopPadding=12, this.previousModelToCompare=Ua("previousModelToCompare", void 0);
    const a=this.configurationService.getValue(yo.showCellStatusBar), l=i?.globalToolbar??this.configurationService.getValue(yo.globalToolbar)??!0, u=i?.stickyScrollEnabled??this.configurationService.getValue(yo.stickyScrollEnabled)??!1, d=this._computeStickyScrollModeOption(), m=this.configurationService.getValue(yo.consolidatedOutputButton)??!0, p=this.configurationService.getValue(yo.consolidatedRunButton)??!1, g=i?.dragAndDropEnabled??this.configurationService.getValue(yo.dragAndDropEnabled)??!0, f=this.configurationService.getValue(yo.cellToolbarLocation)??{
      default:"right"
    }, A=i?.cellToolbarInteraction??this.configurationService.getValue(yo.cellToolbarVisibility), w=this.configurationService.getValue(yo.compactView)??!0, C=this._computeFocusIndicatorOption(), x=this._computeInsertToolbarPositionOption(this.isReadonly), I=this._computeInsertToolbarAlignmentOption(), B=this._computeShowFoldingControlsOption(), R=this.configurationService.getValue("editor.fontSize"), N=this.configurationService.getValue(yo.markupFontSize), M=this.configurationService.getValue(yo.markdownLineHeight);
    let O=this.configurationService.getValue(yo.cellEditorOptionsCustomizations)??{
      
    };
    O=$g(O)?O:{
      
    };
    const $=this.configurationService.getValue(yo.interactiveWindowCollapseCodeCells);
    let H;
    const W=this.configurationService.getValue(yo.outputLineHeightDeprecated);
    W!==void 0?(this._migrateDeprecatedSetting(yo.outputLineHeightDeprecated, yo.outputLineHeight), H=W):H=this.configurationService.getValue(yo.outputLineHeight);
    let z;
    const Y=this.configurationService.getValue(yo.outputFontSizeDeprecated);
    Y!==void 0?(this._migrateDeprecatedSetting(yo.outputFontSizeDeprecated, yo.outputFontSize), z=Y):z=this.configurationService.getValue(yo.outputFontSize)||R;
    let j;
    const X=this.configurationService.getValue(yo.outputFontFamilyDeprecated);
    X!==void 0?(this._migrateDeprecatedSetting(yo.outputFontFamilyDeprecated, yo.outputFontFamily), j=X):j=this.configurationService.getValue(yo.outputFontFamily);
    let ee;
    const re=this.configurationService.getValue(yo.outputScrollingDeprecated);
    re!==void 0?(this._migrateDeprecatedSetting(yo.outputScrollingDeprecated, yo.outputScrolling), ee=re):ee=this.configurationService.getValue(yo.outputScrolling);
    const ne=this._computeOutputLineHeight(H, z), pe=this.configurationService.getValue(yo.outputWordWrap), le=this.configurationService.getValue(yo.textOutputLineLimit)??30, he=this.configurationService.getValue(yo.LinkifyOutputFilePaths)??!0, be=this.configurationService.getValue(yo.minimalErrorRendering), fe=this.configurationService.getValue(yo.markupFontFamily), ke=this._computeEditorTopPadding();
    this._layoutConfiguration={
      ...w?y_u:A_u,cellTopMargin:6,cellBottomMargin:6,cellRightMargin:16,cellStatusBarHeight:20,cellOutputPadding:8,markdownPreviewPadding:8,editorToolbarHeight:0,editorTopPadding:ke,editorBottomPadding:4,editorBottomPaddingWithoutStatusBar:12,collapsedIndicatorHeight:28,showCellStatusBar:a,globalToolbar:l,stickyScrollEnabled:u,stickyScrollMode:d,consolidatedOutputButton:m,consolidatedRunButton:p,dragAndDropEnabled:g,cellToolbarLocation:f,cellToolbarInteraction:A,compactView:w,focusIndicator:C,insertToolbarPosition:x,insertToolbarAlignment:I,showFoldingControls:B,fontSize:R,outputFontSize:z,outputFontFamily:j,outputLineHeight:ne,markupFontSize:N,markdownLineHeight:M,editorOptionsCustomizations:O,focusIndicatorGap:3,interactiveWindowCollapseCodeCells:$,markdownFoldHintHeight:22,outputScrolling:ee,outputWordWrap:pe,outputLineLimit:le,outputLinkifyFilePaths:he,outputMinimalError:be,markupFontFamily:fe,disableRulers:i?.disableRulers
    }, this._register(this.configurationService.onDidChangeConfiguration(Se=>{
      this._updateConfiguration(Se)
    }))
  }
  updateOptions(e){
    this.isReadonly!==e&&(this.isReadonly=e, this._updateConfiguration({
      affectsConfiguration(t){
        return t===yo.insertToolbarLocation
      },source:7,affectedKeys:new Set([yo.insertToolbarLocation]),change:{
        keys:[yo.insertToolbarLocation],overrides:[]
      }
    }))
  }
  _computeEditorTopPadding(){
    let e=!1;
    const t=s=>{
      this._editorTopPadding=s;
      const o=Object.assign({
        
      },this._layoutConfiguration);
      o.editorTopPadding=this._editorTopPadding,this._layoutConfiguration=o,this._onDidChangeOptions.fire({
        editorTopPadding:!0
      })
    }, i=new Set, r=s=>{
      if(!e&&!i.has(s))try{
        const o=this.codeEditorService.resolveDecorationOptions(s,!0);
        if(o.afterContentClassName||o.beforeContentClassName){
          const a=this.codeEditorService.resolveDecorationCSSRules(s);
          if(a!==null){
            for(let l=0;
            l<a.length;
            l++)if((a[l].selectorText.endsWith("::after")||a[l].selectorText.endsWith("::after"))&&a[l].cssText.indexOf("top:")>-1){
              const u=this.configurationService.getValue("editor");
              t(Xbe.createFromRawSettings(u,M6.getInstance(this.targetWindow).value).lineHeight+2),e=!0;
              break
            }
          }
        }
        i.add(s)
      }
      catch{
        
      }
    };
    return this._register(this.codeEditorService.onDecorationTypeRegistered(r)), this.codeEditorService.listDecorationTypes().forEach(r), this._editorTopPadding
  }
  _migrateDeprecatedSetting(e, t){
    const i=this.configurationService.inspect(e);
    i.application!==void 0&&(this.configurationService.updateValue(e, void 0, 1), this.configurationService.updateValue(t, i.application.value, 1)), i.user!==void 0&&(this.configurationService.updateValue(e, void 0, 2), this.configurationService.updateValue(t, i.user.value, 2)), i.userLocal!==void 0&&(this.configurationService.updateValue(e, void 0, 3), this.configurationService.updateValue(t, i.userLocal.value, 3)), i.userRemote!==void 0&&(this.configurationService.updateValue(e, void 0, 4), this.configurationService.updateValue(t, i.userRemote.value, 4)), i.workspace!==void 0&&(this.configurationService.updateValue(e, void 0, 5), this.configurationService.updateValue(t, i.workspace.value, 5)), i.workspaceFolder!==void 0&&(this.configurationService.updateValue(e, void 0, 6), this.configurationService.updateValue(t, i.workspaceFolder.value, 6))
  }
  _computeOutputLineHeight(e, t){
    if(e===0){
      const r=this.configurationService.getValue("editor");
      e=FSe.readFontInfo(this.targetWindow,Xbe.createFromRawSettings(r,M6.getInstance(this.targetWindow).value)).lineHeight
    }
    else if(e<9){
      let r=t;
      r===0&&(r=this.configurationService.getValue("editor.fontSize")),e=e*r
    }
    return e=Math.round(e), e<9&&(e=9), e
  }
  _updateConfiguration(e){
    const t=e.affectsConfiguration(yo.showCellStatusBar), i=e.affectsConfiguration(yo.cellToolbarLocation), r=e.affectsConfiguration(yo.cellToolbarVisibility), s=e.affectsConfiguration(yo.compactView), o=e.affectsConfiguration(yo.focusIndicator), a=e.affectsConfiguration(yo.insertToolbarLocation), l=e.affectsConfiguration(yo.experimentalInsertToolbarAlignment), u=e.affectsConfiguration(yo.globalToolbar), d=e.affectsConfiguration(yo.stickyScrollEnabled), m=e.affectsConfiguration(yo.stickyScrollMode), p=e.affectsConfiguration(yo.consolidatedOutputButton), g=e.affectsConfiguration(yo.consolidatedRunButton), f=e.affectsConfiguration(yo.showFoldingControls), A=e.affectsConfiguration(yo.dragAndDropEnabled), w=e.affectsConfiguration("editor.fontSize"), C=e.affectsConfiguration(yo.outputFontSize), x=e.affectsConfiguration(yo.markupFontSize), I=e.affectsConfiguration(yo.markdownLineHeight), B=e.affectsConfiguration("editor.fontFamily"), R=e.affectsConfiguration(yo.outputFontFamily), N=e.affectsConfiguration(yo.cellEditorOptionsCustomizations), M=e.affectsConfiguration(yo.interactiveWindowCollapseCodeCells), O=e.affectsConfiguration(yo.outputLineHeight), $=e.affectsConfiguration(yo.outputScrolling), H=e.affectsConfiguration(yo.outputWordWrap), W=e.affectsConfiguration(yo.LinkifyOutputFilePaths), z=e.affectsConfiguration(yo.minimalErrorRendering), Y=e.affectsConfiguration(yo.markupFontFamily);
    if(!t&&!i&&!r&&!s&&!o&&!a&&!l&&!u&&!d&&!m&&!p&&!g&&!f&&!A&&!w&&!C&&!x&&!I&&!B&&!R&&!N&&!M&&!O&&!$&&!H&&!W&&!z&&!Y)return;
    let j=Object.assign({
      
    }, this._layoutConfiguration);
    if(t&&(j.showCellStatusBar=this.configurationService.getValue(yo.showCellStatusBar)), i&&(j.cellToolbarLocation=this.configurationService.getValue(yo.cellToolbarLocation)??{
      default:"right"
    }), r&&!this.overrides?.cellToolbarInteraction&&(j.cellToolbarInteraction=this.configurationService.getValue(yo.cellToolbarVisibility)), o&&(j.focusIndicator=this._computeFocusIndicatorOption()), s){
      const X=this.configurationService.getValue(yo.compactView)??!0;
      j=Object.assign(j,{
        ...X?y_u:A_u
      }),j.compactView=X
    }
    if(l&&(j.insertToolbarAlignment=this._computeInsertToolbarAlignmentOption()), a&&(j.insertToolbarPosition=this._computeInsertToolbarPositionOption(this.isReadonly)), u&&this.overrides?.globalToolbar===void 0&&(j.globalToolbar=this.configurationService.getValue(yo.globalToolbar)??!0), d&&this.overrides?.stickyScrollEnabled===void 0&&(j.stickyScrollEnabled=this.configurationService.getValue(yo.stickyScrollEnabled)??!1), m&&(j.stickyScrollMode=this.configurationService.getValue(yo.stickyScrollMode)??"flat"), p&&(j.consolidatedOutputButton=this.configurationService.getValue(yo.consolidatedOutputButton)??!0), g&&(j.consolidatedRunButton=this.configurationService.getValue(yo.consolidatedRunButton)??!0), f&&(j.showFoldingControls=this._computeShowFoldingControlsOption()), A&&(j.dragAndDropEnabled=this.configurationService.getValue(yo.dragAndDropEnabled)??!0), w&&(j.fontSize=this.configurationService.getValue("editor.fontSize")), (C||w)&&(j.outputFontSize=this.configurationService.getValue(yo.outputFontSize)||j.fontSize), x&&(j.markupFontSize=this.configurationService.getValue(yo.markupFontSize)), I&&(j.markdownLineHeight=this.configurationService.getValue(yo.markdownLineHeight)), R&&(j.outputFontFamily=this.configurationService.getValue(yo.outputFontFamily)), N&&(j.editorOptionsCustomizations=this.configurationService.getValue(yo.cellEditorOptionsCustomizations)), M&&(j.interactiveWindowCollapseCodeCells=this.configurationService.getValue(yo.interactiveWindowCollapseCodeCells)), O||w||C){
      const X=this.configurationService.getValue(yo.outputLineHeight);
      j.outputLineHeight=this._computeOutputLineHeight(X,j.outputFontSize)
    }
    H&&(j.outputWordWrap=this.configurationService.getValue(yo.outputWordWrap)), $&&(j.outputScrolling=this.configurationService.getValue(yo.outputScrolling)), W&&(j.outputLinkifyFilePaths=this.configurationService.getValue(yo.LinkifyOutputFilePaths)), z&&(j.outputMinimalError=this.configurationService.getValue(yo.minimalErrorRendering)), Y&&(j.markupFontFamily=this.configurationService.getValue(yo.markupFontFamily)), this._layoutConfiguration=Object.freeze(j), this._onDidChangeOptions.fire({
      cellStatusBarVisibility:t,cellToolbarLocation:i,cellToolbarInteraction:r,compactView:s,focusIndicator:o,insertToolbarPosition:a,insertToolbarAlignment:l,globalToolbar:u,stickyScrollEnabled:d,stickyScrollMode:m,showFoldingControls:f,consolidatedOutputButton:p,consolidatedRunButton:g,dragAndDropEnabled:A,fontSize:w,outputFontSize:C,markupFontSize:x,markdownLineHeight:I,fontFamily:B,outputFontFamily:R,editorOptionsCustomizations:N,interactiveWindowCollapseCodeCells:M,outputLineHeight:O,outputScrolling:$,outputWordWrap:H,outputLinkifyFilePaths:W,minimalError:z,markupFontFamily:Y
    })
  }
  _computeInsertToolbarPositionOption(e){
    return e?"hidden":this.configurationService.getValue(yo.insertToolbarLocation)??"both"
  }
  _computeInsertToolbarAlignmentOption(){
    return this.configurationService.getValue(yo.experimentalInsertToolbarAlignment)??"center"
  }
  _computeShowFoldingControlsOption(){
    return this.configurationService.getValue(yo.showFoldingControls)??"mouseover"
  }
  _computeFocusIndicatorOption(){
    return this.configurationService.getValue(yo.focusIndicator)??"gutter"
  }
  _computeStickyScrollModeOption(){
    return this.configurationService.getValue(yo.stickyScrollMode)??"flat"
  }
  getCellCollapseDefault(){
    return this._layoutConfiguration.interactiveWindowCollapseCodeCells==="never"?{
      codeCell:{
        inputCollapsed:!1
      }
    }
    :{
      codeCell:{
        inputCollapsed:!0
      }
    }
  }
  getLayoutConfiguration(){
    return this._layoutConfiguration
  }
  getDisplayOptions(){
    return this._layoutConfiguration
  }
  getCellEditorContainerLeftMargin(){
    const{
      codeCellLeftMargin:e,cellRunGutter:t
    }
    =this._layoutConfiguration;
    return e+t
  }
  computeCollapsedMarkdownCellHeight(e){
    const{
      bottomToolbarGap:t
    }
    =this.computeBottomToolbarDimensions(e);
    return this._layoutConfiguration.markdownCellTopMargin+this._layoutConfiguration.collapsedIndicatorHeight+t+this._layoutConfiguration.markdownCellBottomMargin
  }
  computeBottomToolbarOffset(e, t){
    const{
      bottomToolbarGap:i,bottomToolbarHeight:r
    }
    =this.computeBottomToolbarDimensions(t);
    return e-i-r/2
  }
  computeCodeCellEditorWidth(e){
    return e-(this._layoutConfiguration.codeCellLeftMargin+this._layoutConfiguration.cellRunGutter+this._layoutConfiguration.cellRightMargin)
  }
  computeMarkdownCellEditorWidth(e){
    return e-this._layoutConfiguration.markdownCellGutter-this._layoutConfiguration.markdownCellLeftMargin-this._layoutConfiguration.cellRightMargin
  }
  computeStatusBarHeight(){
    return this._layoutConfiguration.cellStatusBarHeight
  }
  _computeBottomToolbarDimensions(e, t, i, r){
    return i==="left"||r!=="hidden"?{
      bottomToolbarGap:18,bottomToolbarHeight:18
    }
    :t==="betweenCells"||t==="both"?e?{
      bottomToolbarGap:12,bottomToolbarHeight:20
    }
    :{
      bottomToolbarGap:20,bottomToolbarHeight:20
    }
    :{
      bottomToolbarGap:0,bottomToolbarHeight:0
    }
  }
  computeBottomToolbarDimensions(e){
    const t=this._layoutConfiguration, i=this.computeCellToolbarLocation(e), {
      bottomToolbarGap:r,bottomToolbarHeight:s
    }
    =this._computeBottomToolbarDimensions(t.compactView, t.insertToolbarPosition, t.insertToolbarAlignment, i);
    return{
      bottomToolbarGap:r,bottomToolbarHeight:s
    }
  }
  computeCellToolbarLocation(e){
    const t=this._layoutConfiguration.cellToolbarLocation;
    if(typeof t=="string"){
      if(t==="left"||t==="right"||t==="hidden")return t
    }
    else if(e){
      const i=t[e]??t.default;
      let r="right";
      switch(i){
        case"left":r="left";
        break;
        case"right":r="right";
        break;
        case"hidden":r="hidden";
        break;
        default:r="right";
        break
      }
      return r
    }
    return"right"
  }
  computeTopInsertToolbarHeight(e){
    if(this._layoutConfiguration.insertToolbarPosition==="betweenCells"||this._layoutConfiguration.insertToolbarPosition==="both")return b_u;
    const t=this.computeCellToolbarLocation(e);
    return t==="left"||t==="right"?b_u:0
  }
  computeEditorPadding(e, t){
    return{
      top:this._editorTopPadding,bottom:this.statusBarIsVisible(e,t)?this._layoutConfiguration.editorBottomPadding:this._layoutConfiguration.editorBottomPaddingWithoutStatusBar
    }
  }
  computeEditorStatusbarHeight(e, t){
    return this.statusBarIsVisible(e, t)?this.computeStatusBarHeight():0
  }
  statusBarIsVisible(e, t){
    const i=this.notebookExecutionStateService.getCellExecution(t);
    return this._layoutConfiguration.showCellStatusBar==="visible"?!0:this._layoutConfiguration.showCellStatusBar==="visibleAfterExecute"?typeof e.lastRunSuccess=="boolean"||i!==void 0:!1
  }
  computeWebviewOptions(){
    return{
      outputNodePadding:this._layoutConfiguration.cellOutputPadding,outputNodeLeftPadding:this._layoutConfiguration.cellOutputPadding,previewNodePadding:this._layoutConfiguration.markdownPreviewPadding,markdownLeftMargin:this._layoutConfiguration.markdownCellGutter+this._layoutConfiguration.markdownCellLeftMargin,leftMargin:this._layoutConfiguration.codeCellLeftMargin,rightMargin:this._layoutConfiguration.cellRightMargin,runGutter:this._layoutConfiguration.cellRunGutter,dragAndDropEnabled:this._layoutConfiguration.dragAndDropEnabled,fontSize:this._layoutConfiguration.fontSize,outputFontSize:this._layoutConfiguration.outputFontSize,outputFontFamily:this._layoutConfiguration.outputFontFamily,markupFontSize:this._layoutConfiguration.markupFontSize,markdownLineHeight:this._layoutConfiguration.markdownLineHeight,outputLineHeight:this._layoutConfiguration.outputLineHeight,outputScrolling:this._layoutConfiguration.outputScrolling,outputWordWrap:this._layoutConfiguration.outputWordWrap,outputLineLimit:this._layoutConfiguration.outputLineLimit,outputLinkifyFilePaths:this._layoutConfiguration.outputLinkifyFilePaths,minimalError:this._layoutConfiguration.outputMinimalError,markupFontFamily:this._layoutConfiguration.markupFontFamily
    }
  }
  computeDiffWebviewOptions(){
    return{
      outputNodePadding:this._layoutConfiguration.cellOutputPadding,outputNodeLeftPadding:0,previewNodePadding:this._layoutConfiguration.markdownPreviewPadding,markdownLeftMargin:0,leftMargin:32,rightMargin:0,runGutter:0,dragAndDropEnabled:!1,fontSize:this._layoutConfiguration.fontSize,outputFontSize:this._layoutConfiguration.outputFontSize,outputFontFamily:this._layoutConfiguration.outputFontFamily,markupFontSize:this._layoutConfiguration.markupFontSize,markdownLineHeight:this._layoutConfiguration.markdownLineHeight,outputLineHeight:this._layoutConfiguration.outputLineHeight,outputScrolling:this._layoutConfiguration.outputScrolling,outputWordWrap:this._layoutConfiguration.outputWordWrap,outputLineLimit:this._layoutConfiguration.outputLineLimit,outputLinkifyFilePaths:!1,minimalError:!1,markupFontFamily:this._layoutConfiguration.markupFontFamily
    }
  }
  computeIndicatorPosition(e, t, i){
    const{
      bottomToolbarGap:r
    }
    =this.computeBottomToolbarDimensions(i);
    return{
      bottomIndicatorTop:e-r-this._layoutConfiguration.cellBottomMargin-t,verticalIndicatorHeight:e-r-t
    }
  }
}, Trt=__decorate([__param(3, Fn), __param(4, pE), __param(5, fl)], Trt)
}
}), eIa, w_u=