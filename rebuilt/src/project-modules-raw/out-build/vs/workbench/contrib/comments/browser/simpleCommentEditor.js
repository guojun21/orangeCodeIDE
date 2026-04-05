// Module: out-build/vs/workbench/contrib/comments/browser/simpleCommentEditor.js
// Offset: 33178030 (bundle byte offset)
// Size: 2276 bytes

Cu(), Oh(), VI(), si(), Wt(), hs(), X1e(), Owu(), dme(), Tq(), pU(), L_i(), Io(), So(), zg(), u2e(), QE(), Cm(), sE(), Rde(), IRe(), l8e(), ACt(), Z1e(), I_i(), xRe(), Tqe(), dr(), GAe(), git(), Uwu(), iki=new Sn("commentEditorFocused", !1), kbn=90, d8f=450, d2e=class extends WS{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g){
    const f={
      contributions:[{
        id:jZ.ID,ctor:jZ,instantiation:2
      },{
        id:j9.ID,ctor:j9,instantiation:2
      },{
        id:aR.ID,ctor:aR,instantiation:0
      },{
        id:tx.ID,ctor:tx,instantiation:4
      },{
        id:zye.ID,ctor:zye,instantiation:0
      },{
        id:lwe.ID,ctor:lwe,instantiation:4
      },...SC.getSomeEditorContributions([ZH.ID,mme.ID,DMe.ID,C3.ID,ex.ID,IQ.ID,Gye,iP.ID,Xte.ID,nki.ID])],contextMenuId:st.SimpleEditorContext
    };
    super(e, t, f, s, o, a, i, l, u, d, m, p, g), this._commentEditorFocused=iki.bindTo(i), this._commentEditorEmpty=SD.commentIsEmpty.bindTo(i), this._commentEditorEmpty.set(!this.getModel()?.getValueLength()), this._parentThread=r, this._register(this.onDidFocusEditorWidget(A=>this._commentEditorFocused.set(!0))), this._register(this.onDidChangeModelContent(A=>this._commentEditorEmpty.set(!this.getModel()?.getValueLength()))), this._register(this.onDidBlurEditorWidget(A=>this._commentEditorFocused.reset()))
  }
  getParentThread(){
    return this._parentThread
  }
  _getActions(){
    return SC.getEditorActions()
  }
  updateOptions(e){
    const t={
      ...e,lineNumbers:"off"
    };
    super.updateOptions(t)
  }
  static getEditorOptions(e){
    return{
      wordWrap:"on",glyphMargin:!1,lineNumbers:"off",folding:!1,selectOnLineNumbers:!1,scrollbar:{
        vertical:"visible",verticalScrollbarSize:14,horizontal:"auto",useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1,alwaysConsumeMouseWheel:!1
      },overviewRulerLanes:2,lineDecorationsWidth:0,scrollBeyondLastLine:!1,renderLineHighlight:"none",fixedOverflowWidgets:!0,acceptSuggestionOnEnter:"smart",minimap:{
        enabled:!1
      },dropIntoEditor:{
        enabled:!0
      },autoClosingBrackets:e.getValue("editor.autoClosingBrackets"),quickSuggestions:!1,accessibilitySupport:e.getValue("editor.accessibilitySupport"),fontFamily:e.getValue("editor.fontFamily"),fontSize:e.getValue("editor.fontSize")
    }
  }
}, d2e=__decorate([__param(4, ln), __param(5, fl), __param(6, fr), __param(7, bo), __param(8, ms), __param(9, Cf), __param(10, JS), __param(11, $u), __param(12, FY)], d2e)
}
}), h8f, $wu, gTa, qwu=