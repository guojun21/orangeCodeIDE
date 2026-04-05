// Module: out-build/vs/editor/contrib/suggest/browser/wordContextKey.js
// Offset: 25359653 (bundle byte offset)
// Size: 1192 bytes

si(), Ht(), Ngi=class{
  static{
    ajl=this
  }
  static{
    this.AtEnd=new Sn("atEndOfWord", !1, {
      type:"boolean",description:_(1634,null)
    })
  }
  constructor(e, t){
    this._editor=e, this._enabled=!1, this._ckAtEnd=ajl.AtEnd.bindTo(t), this._configListener=this._editor.onDidChangeConfiguration(i=>i.hasChanged(128)&&this._update()), this._update()
  }
  dispose(){
    this._configListener.dispose(), this._selectionListener?.dispose(), this._ckAtEnd.reset()
  }
  _update(){
    const e=this._editor.getOption(128)==="on";
    if(this._enabled!==e)if(this._enabled=e, this._enabled){
      const t=()=>{
        if(!this._editor.hasModel()){
          this._ckAtEnd.set(!1);
          return
        }
        const i=this._editor.getModel(),r=this._editor.getSelection(),s=i.getWordAtPosition(r.getStartPosition());
        if(!s){
          this._ckAtEnd.set(!1);
          return
        }
        this._ckAtEnd.set(s.endColumn===r.getStartPosition().column&&r.getStartPosition().lineNumber===r.getEndPosition().lineNumber)
      };
      this._selectionListener=this._editor.onDidChangeCursorSelection(t),t()
    }
    else this._selectionListener&&(this._ckAtEnd.reset(), this._selectionListener.dispose(), this._selectionListener=void 0)
  }
}, Ngi=ajl=__decorate([__param(1, wi)], Ngi)
}
}), Mgi, TCt, MSA=