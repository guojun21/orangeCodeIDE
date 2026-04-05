// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsModel.js
// Offset: 25455712 (bundle byte offset)
// Size: 1246 bytes

Uc(), Ht(), V$(), EW(), _dn(), Vyg(), _jl=class{
  constructor(n, e, t){
    this._model=n, this.inlineEdit=e, this.tabAction=t, this.action=this.inlineEdit.inlineCompletion.action, this.displayName=this.inlineEdit.inlineCompletion.source.provider.displayName??_(1366, null), this.extensionCommands=this.inlineEdit.inlineCompletion.source.inlineCompletions.commands??[], this.showCollapsed=this._model.showCollapsed
  }
  accept(){
    this._model.accept()
  }
  jump(){
    this._model.jump()
  }
  abort(n){
    console.error(n), this._model.stop()
  }
  handleInlineEditShown(){
    this._model.handleInlineEditShown(this.inlineEdit.inlineCompletion)
  }
}, Kyg=class{
  constructor(n){
    this._model=n, this.onDidAccept=this._model.onDidAccept, this.inAcceptFlow=this._model.inAcceptFlow, this.inPartialAcceptFlow=this._model.inPartialAcceptFlow
  }
}, Yyg=class{
  constructor(n, e, t, i){
    this.lineRange=t;
    const r=HB(n), s=Ro(this, o=>r.isFocused.read(o)&&e.inlineCompletionState.read(o)?.inlineCompletion?.sourceInlineCompletion.showInlineEditMenu?sV.Accept:sV.Inactive);
    this.model=new _jl(e, new wjl(new cKe(""), new Fte([]), e.primaryPosition.get(), i.source.inlineCompletions.commands??[], i.inlineCompletion), s)
  }
}
}
}), x2, zet=