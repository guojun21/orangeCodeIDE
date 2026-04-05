// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineCompletionsView.js
// Offset: 25561445 (bundle byte offset)
// Size: 2017 bytes

ri(), rt(), Uc(), Wt(), V$(), g$o(), Tgi(), Vla(), EkA(), vua=class extends at{
  constructor(e, t, i, r){
    super(), this._editor=e, this._model=t, this._focusIsInMenu=i, this._instantiationService=r, this._ghostTexts=Ro(this, s=>this._model.read(s)?.ghostTexts.read(s)??[]), this._inlineEdit=Ro(this, s=>this._model.read(s)?.inlineEditState.read(s)?.inlineEdit), this._everHadInlineEdit=C5e(this, (s, o)=>o||!!this._inlineEdit.read(s)||!!this._model.read(s)?.inlineCompletionState.read(s)?.inlineCompletion?.sourceInlineCompletion.showInlineEditMenu), this._inlineEditWidget=wde(s=>{
      if(this._everHadInlineEdit.read(s))return this._instantiationService.createInstance(bua.hot.read(s),this._editor,this._inlineEdit,this._model,this._focusIsInMenu)
    }), this._stablizedGhostTexts=hSA(this._ghostTexts, this._store), this._editorObs=HB(this._editor), this._ghostTextWidgets=jFn(this, this._stablizedGhostTexts, (s, o)=>wde(a=>this._instantiationService.createInstance(wdn.hot.read(a), this._editor, {
      ghostText:s,warning:this._model.map((l,u)=>{
        const d=l?.warning?.read(u);
        return d?{
          icon:d.icon
        }
        :void 0
      }),minReservedLineCount:F0(0),targetTextModel:this._model.map(l=>l?.textModel)
    }, this._editorObs.getOption(64).map(l=>({
      syntaxHighlightingEnabled:l.syntaxHighlightingEnabled
    })), !1, !1)).recomputeInitiallyAndOnChange(o)).recomputeInitiallyAndOnChange(this._store), this._inlineEditWidget.recomputeInitiallyAndOnChange(this._store), this._fontFamily=this._editorObs.getOption(64).map(s=>s.fontFamily), this._register(miA(Ro(s=>{
      const o=this._fontFamily.read(s);
      return o===""||o==="default"?"":`
.monaco-editor .ghost-text-decoration,
.monaco-editor .ghost-text-decoration-preview,
.monaco-editor .ghost-text {
	font-family: ${o};
}`
    }))), this._register(new m$o(this._editor, this._model, this._instantiationService))
  }
  shouldShowHoverAtViewZone(e){
    return this._ghostTextWidgets.get()[0]?.get().ownsViewZone(e)??!1
  }
}, vua=__decorate([__param(3, ln)], vua)
}
}), Zet, iP, Z1e=