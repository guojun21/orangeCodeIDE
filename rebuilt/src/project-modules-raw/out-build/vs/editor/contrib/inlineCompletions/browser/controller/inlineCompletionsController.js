// Module: out-build/vs/editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js
// Offset: 25563462 (bundle byte offset)
// Size: 8182 bytes

Ew(), vr(), Po(), v9e(), rt(), Uc(), Js(), Ht(), zg(), QS(), hs(), Ei(), si(), Wt(), ka(), MQl(), nVe(), V$(), yq(), tl(), xve(), Cm(), g$o(), aSA(), LSA(), QSA(), Tgi(), xkA(), h$o(), pdn(), iP=class extends at{
  static{
    Zet=this
  }
  static{
    this._instances=new Set
  }
  static{
    this.hot=i3n(Zet)
  }
  static{
    this.ID="editor.contrib.inlineCompletionsController"
  }
  static getInFocusedEditorOrParent(e){
    const t=xGl(e);
    return t?Zet.get(t):null
  }
  static get(e){
    return ZCA(e.getContribution(Zet.ID))
  }
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(), this.editor=e, this._instantiationService=t, this._contextKeyService=i, this._configurationService=r, this._commandService=s, this._debounceService=o, this._languageFeaturesService=a, this._accessibilitySignalService=l, this._keybindingService=u, this._accessibilityService=d, this._enabled=Ro(this, g=>this._enabledInConfig.read(g)&&(!this._isScreenReaderEnabled.read(g)||!this._editorDictationInProgress.read(g))), this._focusIsInMenu=Ua(this, !1), this._focusIsInEditorOrMenu=Ro(this, g=>{
      const f=this._editorObs.isFocused.read(g),A=this._focusIsInMenu.read(g);
      return f||A
    }), this._cursorIsInIndentation=Ro(this, g=>{
      const f=this._editorObs.cursorPosition.read(g);
      if(f===null)return!1;
      const A=this._editorObs.model.read(g);
      if(!A)return!1;
      this._editorObs.versionId.read(g);
      const w=A.getLineIndentColumn(f.lineNumber);
      return f.column<=w
    }), this.model=wde(this, g=>{
      if(this._editorObs.isReadonly.read(g))return;
      const f=this._editorObs.model.read(g);
      return f?this._instantiationService.createInstance($la,f,this._suggestWidgetAdapter.selectedItem,this._editorObs.versionId,this._positions,this._debounceValue,this._enabled,this.editor):void 0
    }), this._playAccessibilitySignal=IY(this), this._editorObs=HB(this.editor), this._positions=Ro(this, g=>this._editorObs.selections.read(g)?.map(f=>f.getEndPosition())??[new ar(1, 1)]), this._suggestWidgetAdapter=this._register(new Wyg(this._editorObs, g=>this.model.get()?.handleSuggestAccepted(g), ()=>this.model.get()?.selectedInlineCompletion.get()?.toSingleTextEdit(void 0))), this._enabledInConfig=tp(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(64).enabled), this._isScreenReaderEnabled=tp(this, this._accessibilityService.onDidChangeScreenReaderOptimized, ()=>this._accessibilityService.isScreenReaderOptimized()), this._editorDictationInProgress=tp(this, this._contextKeyService.onDidChangeContext, ()=>this._contextKeyService.getContext(this.editor.getDomNode()).getValue("editorDictation.inProgress")===!0), this._debounceValue=this._debounceService.for(this._languageFeaturesService.inlineCompletionsProvider, "InlineCompletionsDebounce", {
      min:50,max:50
    }), this.model.recomputeInitiallyAndOnChange(this._store), this._hideInlineEditOnSelectionChange=this._editorObs.getOption(64).map(g=>!0), this._view=this._register(this._instantiationService.createInstance(vua, this.editor, this.model, this._focusIsInMenu)), Zet._instances.add(this), this._register($i(()=>Zet._instances.delete(this))), this._register(Oc(g=>{
      const f=this.model.read(g);
      if(f&&f.state.read(g)!==void 0)for(const A of Zet._instances)A!==this&&A.reject()
    })), this._register(p3(this._editorObs.onDidType, (g, f)=>{
      this._enabled.get()&&this.model.get()?.trigger()
    })), this._register(p3(this._editorObs.onDidPaste, (g, f)=>{
      this._enabled.get()&&this.model.get()?.trigger()
    })), this._register(this._commandService.onDidExecuteCommand(g=>{
      if(new Set([KBe.Tab.id,KBe.DeleteLeft.id,KBe.DeleteRight.id,J9t,"acceptSelectedSuggestion"]).has(g.commandId)&&e.hasTextFocus()&&this._enabled.get()){
        let A=!1;
        g.commandId===J9t&&(A=!0),this._editorObs.forceUpdate(w=>{
          this.model.get()?.trigger(w,{
            noDelay:A
          })
        })
      }
    })), this._register(p3(this._editorObs.selections, (g, f, A)=>{
      if(A.some(w=>w.reason===3||w.source==="api")){
        if(!this._hideInlineEditOnSelectionChange.get()&&this.model.get()?.state.get()?.kind==="inlineEdit")return;
        const w=this.model.get();
        if(!w)return;
        w.state.get()?.kind==="ghostText"&&this.model.get()?.stop()
      }
    })), this._register(Oc(g=>{
      if(this._focusIsInEditorOrMenu.read(g)||this._contextKeyService.getContextKeyValue("accessibleViewIsShown")||this._configurationService.getValue("editor.inlineSuggest.keepOnBlur")||e.getOption(64).keepOnBlur||Mvt.dropDownVisible)return;
      const A=this.model.get();
      A&&(A.state.get()?.inlineCompletion?.request.isExplicitRequest&&A.inlineEditAvailable.get()||pp(w=>{
        A.stop("automatic",w)
      }))
    })), this._register(Oc(g=>{
      const f=this.model.read(g)?.inlineCompletionState.read(g);
      f?.suggestItem?f.primaryGhostText.lineCount>=2&&this._suggestWidgetAdapter.forceRenderingAbove():this._suggestWidgetAdapter.stopForceRenderingAbove()
    })), this._register($i(()=>{
      this._suggestWidgetAdapter.stopForceRenderingAbove()
    }));
    const m=C5e(this, (g, f)=>{
      const w=this.model.read(g)?.state.read(g);
      return this._suggestWidgetAdapter.selectedItem.get()?f:w?.inlineCompletion?.semanticId
    });
    this._register(VnA(Ro(g=>(this._playAccessibilitySignal.read(g), m.read(g), {
      
    })), async(g, f, A, w)=>{
      const C=this.model.get(),x=C?.state.get();
      if(!x||!C)return;
      const I=x.kind==="ghostText"?C.textModel.getLineContent(x.primaryGhostText.lineNumber):"";
      await Af(50,O0c(w)),await FBe(this._suggestWidgetAdapter.selectedItem,Df,()=>!1,O0c(w)),await this._accessibilitySignalService.playSignal(rb.inlineSuggestion),this.editor.getOption(8)&&(x.kind==="ghostText"?this._provideScreenReaderUpdate(x.primaryGhostText.renderForScreenReader(I)):this._provideScreenReaderUpdate(""))
    })), this._register(this._configurationService.onDidChangeConfiguration(g=>{
      g.affectsConfiguration("accessibility.verbosity.inlineCompletions")&&this.editor.updateOptions({
        inlineCompletionsAccessibilityVerbose:this._configurationService.getValue("accessibility.verbosity.inlineCompletions")
      })
    })), this.editor.updateOptions({
      inlineCompletionsAccessibilityVerbose:this._configurationService.getValue("accessibility.verbosity.inlineCompletions")
    });
    const p=new WAg(this._contextKeyService);
    this._register(p.bind(VS.cursorInIndentation, this._cursorIsInIndentation)), this._register(p.bind(VS.hasSelection, g=>!this._editorObs.cursorSelection.read(g)?.isEmpty())), this._register(p.bind(VS.cursorAtInlineEdit, this.model.map((g, f)=>g?.inlineEditState?.read(f)?.cursorAtInlineEdit))), this._register(p.bind(VS.tabShouldAcceptInlineEdit, this.model.map((g, f)=>!!g?.tabShouldAcceptInlineEdit.read(f)))), this._register(p.bind(VS.tabShouldJumpToInlineEdit, this.model.map((g, f)=>!!g?.tabShouldJumpToInlineEdit.read(f)))), this._register(p.bind(VS.inlineEditVisible, g=>this.model.read(g)?.inlineEditState.read(g)!==void 0)), this._register(p.bind(VS.inlineSuggestionHasIndentation, g=>this.model.read(g)?.getIndentationInfo(g)?.startsWithIndentation)), this._register(p.bind(VS.inlineSuggestionHasIndentationLessThanTabSize, g=>this.model.read(g)?.getIndentationInfo(g)?.startsWithIndentationLessThanTabSize)), this._register(p.bind(VS.suppressSuggestions, g=>{
      const A=this.model.read(g)?.inlineCompletionState.read(g);
      return A?.primaryGhostText&&A?.inlineCompletion?A.inlineCompletion.source.inlineCompletions.suppressSuggestions:void 0
    })), this._register(p.bind(VS.inlineSuggestionVisible, g=>{
      const A=this.model.read(g)?.inlineCompletionState.read(g);
      return!!A?.inlineCompletion&&A?.primaryGhostText!==void 0&&!A?.primaryGhostText.isEmpty()
    })), this._register(this._instantiationService.createInstance(Nla, this.editor))
  }
  playAccessibilitySignal(e){
    this._playAccessibilitySignal.trigger(e)
  }
  _provideScreenReaderUpdate(e){
    const t=this._contextKeyService.getContextKeyValue("accessibleViewIsShown"), i=this._keybindingService.lookupKeybinding("editor.action.accessibleView");
    let r;
    !t&&i&&this.editor.getOption(155)&&(r=_(1348, null, i.getAriaLabel())), W_(r?e+", "+r:e)
  }
  shouldShowHoverAt(e){
    const t=this.model.get()?.primaryGhostText.get();
    return t?t.parts.some(i=>e.containsPosition(new ar(t.lineNumber, i.column))):!1
  }
  shouldShowHoverAtViewZone(e){
    return this._view.shouldShowHoverAtViewZone(e)
  }
  reject(){
    pp(e=>{
      const t=this.model.get();
      t&&t.stop("explicitCancel",e)
    })
  }
  jump(){
    const e=this.model.get();
    e&&e.jump()
  }
}, iP=Zet=__decorate([__param(1, ln), __param(2, wi), __param(3, Fn), __param(4, fr), __param(5, ene), __param(6, $u), __param(7, fS), __param(8, mo), __param(9, Cf)], iP)
}
}), jZ, X1e=