// Module: out-build/vs/editor/contrib/quickAccess/browser/editorNavigationQuickAccess.js
// Offset: 28202071 (bundle byte offset)
// Size: 2203 bytes

wH(), rt(), lv(), xw(), az(), Io(), Ew(), pau=class{
  constructor(n){
    this.options=n, this.rangeHighlightDecorationId=void 0
  }
  provide(n, e, t){
    const i=new Ut;
    n.canAcceptInBackground=!!this.options?.canAcceptInBackground, n.matchOnLabel=n.matchOnDescription=n.matchOnDetail=n.sortByLabel=!1;
    const r=i.add(new uo);
    return r.value=this.doProvide(n, e, t), i.add(this.onDidActiveTextEditorControlChange(()=>{
      r.value=void 0,r.value=this.doProvide(n,e)
    })), i
  }
  doProvide(n, e, t){
    const i=new Ut, r=this.activeTextEditorControl;
    if(r&&this.canProvideWithTextEditor(r)){
      const s={
        editor:r
      },o=gN(r);
      if(o){
        let a=r.saveViewState()??void 0;
        i.add(o.onDidChangeCursorPosition(()=>{
          a=r.saveViewState()??void 0
        })),s.restoreViewState=()=>{
          a&&r===this.activeTextEditorControl&&r.restoreViewState(a)
        },i.add(_6(e.onCancellationRequested)(()=>s.restoreViewState?.()))
      }
      i.add($i(()=>this.clearDecorations(r))),i.add(this.provideWithTextEditor(s,n,e,t))
    }
    else i.add(this.provideWithoutTextEditor(n, e));
    return i
  }
  canProvideWithTextEditor(n){
    return!0
  }
  gotoLocation({
    editor:n
  }, e){
    n.setSelection(e.range, "code.jump"), n.revealRangeInCenter(e.range, 0), e.preserveFocus||n.focus();
    const t=n.getModel();
    t&&"getLineContent"in t&&Ex(`${t.getLineContent(e.range.startLineNumber)}`)
  }
  getModel(n){
    return iB(n)?n.getModel()?.modified:n.getModel()
  }
  addDecorations(n, e){
    n.changeDecorations(t=>{
      const i=[];
      this.rangeHighlightDecorationId&&(i.push(this.rangeHighlightDecorationId.overviewRulerDecorationId),i.push(this.rangeHighlightDecorationId.rangeHighlightId),this.rangeHighlightDecorationId=void 0);
      const r=[{
        range:e,options:{
          description:"quick-access-range-highlight",className:"rangeHighlight",isWholeLine:!0
        }
      },{
        range:e,options:{
          description:"quick-access-range-highlight-overview",overviewRuler:{
            color:kC(fEc),position:Tx.Full
          }
        }
      }
      ],[s,o]=t.deltaDecorations(i,r);
      this.rangeHighlightDecorationId={
        rangeHighlightId:s,overviewRulerDecorationId:o
      }
    })
  }
  clearDecorations(n){
    const e=this.rangeHighlightDecorationId;
    e&&(n.changeDecorations(t=>{
      t.deltaDecorations([e.overviewRulerDecorationId,e.rangeHighlightId],[])
    }), this.rangeHighlightDecorationId=void 0)
  }
}
}
}), Ava, _nt, yva, wva, R9A=