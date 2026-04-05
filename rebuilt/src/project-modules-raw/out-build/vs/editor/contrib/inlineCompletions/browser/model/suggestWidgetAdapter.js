// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/suggestWidgetAdapter.js
// Offset: 25435115 (bundle byte offset)
// Size: 4059 bytes

Vs(), GD(), yn(), rt(), tl(), ts(), EW(), Tg(), Dgi(), Vde(), $Ag(), Tq(), Uc(), Gyg=class extends at{
  get selectedItem(){
    return this._currentSuggestItemInfo
  }
  constructor(n, e, t){
    super(), this.editor=n, this.suggestControllerPreselector=e, this.onWillAccept=t, this.isSuggestWidgetVisible=!1, this.isShiftKeyPressed=!1, this._isActive=!1, this._currentSuggestItemInfo=void 0, this._onDidSelectedItemChange=this._register(new Qe), this.onDidSelectedItemChange=this._onDidSelectedItemChange.event, this._register(n.onKeyDown(r=>{
      r.shiftKey&&!this.isShiftKeyPressed&&(this.isShiftKeyPressed=!0,this.update(this._isActive))
    })), this._register(n.onKeyUp(r=>{
      r.shiftKey&&this.isShiftKeyPressed&&(this.isShiftKeyPressed=!1,this.update(this._isActive))
    }));
    const i=aR.get(this.editor);
    if(i){
      this._register(i.registerSelector({
        priority:100,select:(o,a,l)=>{
          const u=this.editor.getModel();
          if(!u)return-1;
          const d=this.suggestControllerPreselector(),m=d?XUe(d,u):void 0;
          if(!m)return-1;
          const p=ar.lift(a),g=l.map((A,w)=>{
            const C=jla.fromSuggestion(i,u,p,A,this.isShiftKeyPressed),x=XUe(C.toSingleTextEdit(),u),I=KAg(m,x);
            return{
              index:w,valid:I,prefixLength:x.text.length,suggestItem:A
            }
          }).filter(A=>A&&A.valid&&A.prefixLength>0),f=Y_c(g,JP(A=>A.prefixLength,p9));
          return f?f.index:-1
        }
      }));
      let r=!1;
      const s=()=>{
        r||(r=!0,this._register(i.widget.value.onDidShow(()=>{
          this.isSuggestWidgetVisible=!0,this.update(!0)
        })),this._register(i.widget.value.onDidHide(()=>{
          this.isSuggestWidgetVisible=!1,this.update(!1)
        })),this._register(i.widget.value.onDidFocus(()=>{
          this.isSuggestWidgetVisible=!0,this.update(!0)
        })))
      };
      this._register(In.once(i.model.onDidTrigger)(o=>{
        s()
      })),this._register(i.onWillInsertSuggestItem(o=>{
        const a=this.editor.getPosition(),l=this.editor.getModel();
        if(!a||!l)return;
        const u=jla.fromSuggestion(i,l,a,o.item,this.isShiftKeyPressed);
        this.onWillAccept(u)
      }))
    }
    this.update(this._isActive)
  }
  update(n){
    const e=this.getSuggestItemInfo();
    (this._isActive!==n||!WSA(this._currentSuggestItemInfo, e))&&(this._isActive=n, this._currentSuggestItemInfo=e, this._onDidSelectedItemChange.fire())
  }
  getSuggestItemInfo(){
    const n=aR.get(this.editor);
    if(!n||!this.isSuggestWidgetVisible)return;
    const e=n.widget.value.getFocusedItem(), t=this.editor.getPosition(), i=this.editor.getModel();
    if(!(!e||!t||!i))return jla.fromSuggestion(n, i, t, e.item, this.isShiftKeyPressed)
  }
  stopForceRenderingAbove(){
    aR.get(this.editor)?.stopForceRenderingAbove()
  }
  forceRenderingAbove(){
    aR.get(this.editor)?.forceRenderingAbove()
  }
}, jla=class sQb{
  static fromSuggestion(e, t, i, r, s){
    let{
      insertText:o
    }
    =r.completion, a=!1;
    if(r.completion.insertTextRules&4){
      const u=new Ute().parse(o);
      u.children.length<100&&kgi.adjustWhitespace(t,i,!0,u),o=u.toString(),a=!0
    }
    const l=e.getOverwriteInfo(r, s);
    return new sQb(Zt.fromPositions(i.delta(0, -l.overwriteBefore), i.delta(0, Math.max(l.overwriteAfter, 0))), o, r.completion.kind, a)
  }
  constructor(e, t, i, r){
    this.range=e, this.insertText=t, this.completionItemKind=i, this.isSnippetText=r
  }
  equals(e){
    return this.range.equalsRange(e.range)&&this.insertText===e.insertText&&this.completionItemKind===e.completionItemKind&&this.isSnippetText===e.isSnippetText
  }
  toSelectedSuggestionInfo(){
    return new xgh(this.range, this.insertText, this.completionItemKind, this.isSnippetText)
  }
  toSingleTextEdit(){
    return new cI(this.range, this.insertText)
  }
}, Wyg=class extends at{
  constructor(n, e, t){
    super(), this._editorObs=n, this._handleSuggestAccepted=e, this._suggestControllerPreselector=t, this._suggestWidgetAdaptor=this._register(new Gyg(this._editorObs.editor, ()=>(this._editorObs.forceUpdate(), this._suggestControllerPreselector()), i=>this._editorObs.forceUpdate(r=>{
      this._handleSuggestAccepted(i)
    }))), this.selectedItem=tp(this, i=>this._suggestWidgetAdaptor.onDidSelectedItemChange(()=>{
      this._editorObs.forceUpdate(r=>i(void 0))
    }), ()=>this._suggestWidgetAdaptor.selectedItem)
  }
  stopForceRenderingAbove(){
    this._suggestWidgetAdaptor.stopForceRenderingAbove()
  }
  forceRenderingAbove(){
    this._suggestWidgetAdaptor.forceRenderingAbove()
  }
}
}
}), jSA=