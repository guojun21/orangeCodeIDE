// Module: out-build/vs/editor/browser/widget/diffEditor/components/diffEditorEditors.js
// Offset: 2249715 (bundle byte offset)
// Size: 5172 bytes

yn(), rt(), Uc(), V$(), kCh(), pk(), tl(), Ht(), Wt(), ka(), si(), E5o=class extends at{
  get onDidContentSizeChange(){
    return this._onDidContentSizeChange.event
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this.originalEditorElement=e, this.modifiedEditorElement=t, this._options=i, this._argCodeEditorWidgetOptions=r, this._createInnerEditor=s, this._contextKeyService=o, this._instantiationService=a, this._keybindingService=l, this.original=this._register(this._createLeftHandSideEditor(this._options.editorOptions.get(), this._argCodeEditorWidgetOptions.originalEditor||{
      
    })), this.modified=this._register(this._createRightHandSideEditor(this._options.editorOptions.get(), this._argCodeEditorWidgetOptions.modifiedEditor||{
      
    })), this._onDidContentSizeChange=this._register(new Qe), this.modifiedScrollTop=tp(this, this.modified.onDidScrollChange, ()=>this.modified.getScrollTop()), this.modifiedScrollHeight=tp(this, this.modified.onDidScrollChange, ()=>this.modified.getScrollHeight()), this.modifiedObs=HB(this.modified), this.originalObs=HB(this.original), this.modifiedModel=this.modifiedObs.model, this.modifiedSelections=tp(this, this.modified.onDidChangeCursorSelection, ()=>this.modified.getSelections()??[]), this.modifiedCursor=uF({
      owner:this,equalsFn:ar.equals
    }, u=>this.modifiedSelections.read(u)[0]?.getPosition()??new ar(1, 1)), this.originalCursor=tp(this, this.original.onDidChangeCursorPosition, ()=>this.original.getPosition()??new ar(1, 1)), this.isOriginalFocused=HB(this.original).isFocused, this.isModifiedFocused=HB(this.modified).isFocused, this.isFocused=Ro(this, u=>this.isOriginalFocused.read(u)||this.isModifiedFocused.read(u)), this._argCodeEditorWidgetOptions=null, this._register(p4t({
      createEmptyChangeSummary:()=>({
        
      }),handleChange:(u,d)=>(u.didChange(i.editorOptions)&&Object.assign(d,u.change.changedOptions),!0)
    }, (u, d)=>{
      i.editorOptions.read(u),this._options.renderSideBySide.read(u),this.modified.updateOptions(this._adjustOptionsForRightHandSide(u,d)),this.original.updateOptions(this._adjustOptionsForLeftHandSide(u,d))
    }))
  }
  _createLeftHandSideEditor(e, t){
    const i=this._adjustOptionsForLeftHandSide(void 0, e), r=this._constructInnerEditor(this._instantiationService, this.originalEditorElement, i, t), s=this._contextKeyService.createKey("isInDiffLeftEditor", r.hasWidgetFocus());
    return this._register(r.onDidFocusEditorWidget(()=>s.set(!0))), this._register(r.onDidBlurEditorWidget(()=>s.set(!1))), r
  }
  _createRightHandSideEditor(e, t){
    const i=this._adjustOptionsForRightHandSide(void 0, e), r=this._constructInnerEditor(this._instantiationService, this.modifiedEditorElement, i, t), s=this._contextKeyService.createKey("isInDiffRightEditor", r.hasWidgetFocus());
    return this._register(r.onDidFocusEditorWidget(()=>s.set(!0))), this._register(r.onDidBlurEditorWidget(()=>s.set(!1))), r
  }
  _constructInnerEditor(e, t, i, r){
    const s=this._createInnerEditor(e, t, i, r);
    return this._register(s.onDidContentSizeChange(o=>{
      const a=this.original.getContentWidth()+this.modified.getContentWidth()+bbt.ENTIRE_DIFF_OVERVIEW_WIDTH,l=Math.max(this.modified.getContentHeight(),this.original.getContentHeight());
      this._onDidContentSizeChange.fire({
        contentHeight:l,contentWidth:a,contentHeightChanged:o.contentHeightChanged,contentWidthChanged:o.contentWidthChanged
      })
    })), s
  }
  _adjustOptionsForLeftHandSide(e, t){
    const i=this._adjustOptionsForSubEditor(t);
    return this._options.renderSideBySide.get()?(i.unicodeHighlight=this._options.editorOptions.get().unicodeHighlight||{
      
    }, i.wordWrapOverride1=this._options.diffWordWrap.get()):(i.wordWrapOverride1="off", i.wordWrapOverride2="off", i.stickyScroll={
      enabled:!1
    }, i.unicodeHighlight={
      nonBasicASCII:!1,ambiguousCharacters:!1,invisibleCharacters:!1
    }), i.glyphMargin=this._options.renderSideBySide.get(), t.originalAriaLabel&&(i.ariaLabel=t.originalAriaLabel), i.ariaLabel=this._updateAriaLabel(i.ariaLabel), i.readOnly=!this._options.originalEditable.get(), i.dropIntoEditor={
      enabled:!i.readOnly
    }, i.extraEditorClassName="original-in-monaco-diff-editor", i
  }
  _adjustOptionsForRightHandSide(e, t){
    const i=this._adjustOptionsForSubEditor(t);
    return t.modifiedAriaLabel&&(i.ariaLabel=t.modifiedAriaLabel), i.ariaLabel=this._updateAriaLabel(i.ariaLabel), i.wordWrapOverride1=this._options.diffWordWrap.get(), i.revealHorizontalRightPadding=oz.revealHorizontalRightPadding.defaultValue+bbt.ENTIRE_DIFF_OVERVIEW_WIDTH, i.scrollbar.verticalHasArrows=!1, i.extraEditorClassName="modified-in-monaco-diff-editor", i
  }
  _adjustOptionsForSubEditor(e){
    const t={
      ...e,dimension:{
        height:0,width:0
      }
    };
    return t.inDiffEditor=!0, t.automaticLayout=!1, t.scrollbar={
      ...t.scrollbar||{
        
      }
    }, t.folding=!1, t.codeLens=this._options.diffCodeLens.get(), t.fixedOverflowWidgets=!0, t.minimap={
      ...t.minimap||{
        
      }
    }, t.minimap.enabled=!1, this._options.hideUnchangedRegions.get()?t.stickyScroll={
      enabled:!1
    }
    :t.stickyScroll=this._options.editorOptions.get().stickyScroll, t
  }
  _updateAriaLabel(e){
    e||(e="");
    const t=_(231, null, this._keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getAriaLabel());
    return this._options.accessibilityVerbose.get()?e+t:e?e.replaceAll(t, ""):""
  }
}, E5o=__decorate([__param(5, wi), __param(6, ln), __param(7, mo)], E5o)
}
}), YdA=