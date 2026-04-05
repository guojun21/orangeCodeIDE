// Module: out-build/vs/workbench/contrib/snippets/browser/tabCompletion.js
// Offset: 30982105 (bundle byte offset)
// Size: 4487 bytes

si(), Iqe(), gTf(), ts(), Cu(), pU(), pme(), Qh(), uTf(), Kf(), dve(), Cm(), zye=class{
  static{
    OCa=this
  }
  static{
    this.ID="editor.tabCompletionController"
  }
  static{
    this.ContextKey=new Sn("hasSnippetCompletions", void 0)
  }
  static get(e){
    return e.getContribution(OCa.ID)
  }
  constructor(e, t, i, r, s){
    this._editor=e, this._snippetService=t, this._clipboardService=i, this._languageFeaturesService=r, this._activeSnippets=[], this._hasSnippets=OCa.ContextKey.bindTo(s), this._configListener=this._editor.onDidChangeConfiguration(o=>{
      o.hasChanged(128)&&this._update()
    }), this._update()
  }
  dispose(){
    this._configListener.dispose(), this._selectionListener?.dispose()
  }
  _update(){
    const e=this._editor.getOption(128)==="onlySnippets";
    this._enabled!==e&&(this._enabled=e, this._enabled?(this._selectionListener=this._editor.onDidChangeCursorSelection(t=>this._updateSnippets()), this._editor.getModel()&&this._updateSnippets()):this._selectionListener?.dispose())
  }
  _updateSnippets(){
    if(this._activeSnippets=[], this._completionProvider?.dispose(), !this._editor.hasModel())return;
    const e=this._editor.getSelection(), t=this._editor.getModel();
    t.tokenization.tokenizeIfCheap(e.positionLineNumber);
    const i=t.getLanguageIdAtPosition(e.positionLineNumber, e.positionColumn), r=this._snippetService.getSnippetsSync(i);
    if(!r){
      this._hasSnippets.set(!1);
      return
    }
    if(Zt.isEmpty(e)){
      const o=Ury(t,e.getPosition());
      if(o)for(const a of r)o.endsWith(a.prefix)&&this._activeSnippets.push(a)
    }
    else if(!Zt.spansMultipleLines(e)&&t.getValueLengthInRange(e)<=100){
      const o=t.getValueInRange(e);
      if(o)for(const a of r)o===a.prefix&&this._activeSnippets.push(a)
    }
    const s=this._activeSnippets.length;
    if(s===0)this._hasSnippets.set(!1);
    else if(s===1)this._hasSnippets.set(!0);
    else{
      this._hasSnippets.set(!0),this._completionProvider={
        _debugDisplayName:"tabCompletion",dispose:()=>{
          o.dispose()
        },provideCompletionItems:(a,l)=>a!==t||!e.containsPosition(l)?void 0:{
          suggestions:this._activeSnippets.map(d=>{
            const m=Zt.fromPositions(l.delta(0,-d.prefix.length),l);
            return new Ign(d,m)
          })
        }
      };
      const o=this._languageFeaturesService.completionProvider.register({
        language:t.getLanguageId(),pattern:t.uri.fsPath,scheme:t.uri.scheme
      },this._completionProvider)
    }
  }
  async performSnippetCompletions(){
    if(this._editor.hasModel())if(this._activeSnippets.length===1){
      const[e]=this._activeSnippets;
      let t;
      if(e.needsClipboard){
        const i=new z3n(this._editor,5);
        if(t=await this._clipboardService.readText(),!i.validate(this._editor))return
      }
      tx.get(this._editor)?.insert(e.codeSnippet,{
        overwriteBefore:e.prefix.length,overwriteAfter:0,clipboardText:t
      })
    }
    else this._activeSnippets.length>1&&this._completionProvider&&RAg(this._editor, this._completionProvider)
  }
}, zye=OCa=__decorate([__param(1, Wye), __param(2, jm), __param(3, $u), __param(4, wi)], zye), Mg(zye.ID, zye, 0), fTf=dF.bindToContribution(zye.get), ld(new fTf({
  id:"insertSnippet", precondition:zye.ContextKey, handler:n=>n.performSnippetCompletions(), kbOpts:{
    weight:100, kbExpr:Ee.and(Ci.editorTextFocus, Ci.tabDoesNotMoveFocus, tx.InSnippetMode.toNegated()), primary:2
  }
}))
}
});
function MMe(n){
  return{
    wordWrap:"on", overviewRulerLanes:0, glyphMargin:!1, lineNumbers:"off", folding:!1, selectOnLineNumbers:!1, hideCursorInOverviewRuler:!0, selectionHighlight:!1, scrollbar:{
      horizontal:"hidden",alwaysConsumeMouseWheel:!1
    }, lineDecorationsWidth:0, overviewRulerBorder:!1, scrollBeyondLastLine:!1, renderLineHighlight:"none", fixedOverflowWidgets:!0, acceptSuggestionOnEnter:"smart", dragAndDrop:!1, revealHorizontalRightPadding:5, minimap:{
      enabled:!1
    }, guides:{
      indentation:!1
    }, accessibilitySupport:n.getValue("editor.accessibilitySupport"), cursorBlinking:n.getValue("editor.cursorBlinking"), experimentalEditContextEnabled:n.getValue("editor.experimentalEditContextEnabled"), defaultColorDecorators:"never"
  }
}
function Vpu(){
  return{
    isSimpleWidget:!0, contributions:SC.getSomeEditorContributions([jZ.ID, Gye, j9.ID, aR.ID, tx.ID, zye.ID])
  }
}
function Kpu(n){
  return HI((e, t)=>{
    const i=e.getColor(m1c);
    if(i){
      const r=e.getColor(Ide);
      r&&(t.addRule(`${n} .monaco-editor-background { background-color: ${r}; } `),t.addRule(`${n} .monaco-editor .selected-text { background-color: ${r.transparent(.4)}; }`));
      const s=e.getColor(Q5e);
      s&&t.addRule(`${n} .monaco-editor .view-line span.inline-selected-text { color: ${s}; }`),t.addRule(`${n} .monaco-editor .focused .selected-text { background-color: ${i}; }`)
    }
    else t.addRule(`${n} .monaco-editor .focused .selected-text { background-color: ${e.getColor(Doe)}; }`)
  })
}
var Bqe=