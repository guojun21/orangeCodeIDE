// Module: out-build/vs/editor/common/model/treeSitterTokens.js
// Offset: 1220988 (bundle byte offset)
// Size: 2450 bytes

Tg(), LH(), pxc(), rt(), jgh(), ts(), yn(), wOn=class extends mxc{
  constructor(e, t, i, r){
    super(e, t, i), this._tokenStore=r, this._tokenizationSupport=null, this._backgroundTokenizationState=1, this._onDidChangeBackgroundTokenizationState=this._register(new Qe), this.onDidChangeBackgroundTokenizationState=this._onDidChangeBackgroundTokenizationState.event, this._tokensChangedListener=this._register(new uo), this._onDidChangeBackgroundTokenization=this._register(new uo), this._initialize()
  }
  _initialize(){
    const e=this.getLanguageId();
    (!this._tokenizationSupport||this._lastLanguageId!==e)&&(this._lastLanguageId=e, this._tokenizationSupport=RSe.get(e), this._tokensChangedListener.value=this._tokenizationSupport?.onDidChangeTokens(t=>{
      t.textModel===this._textModel&&this._onDidChangeTokens.fire(t.changes)
    }), this._onDidChangeBackgroundTokenization.value=this._tokenizationSupport?.onDidChangeBackgroundTokenization(t=>{
      t.textModel===this._textModel&&(this._backgroundTokenizationState=2,this._onDidChangeBackgroundTokenizationState.fire())
    }))
  }
  getLineTokens(e){
    const t=this._textModel.getLineContent(e);
    if(this._tokenizationSupport&&t.length>0){
      const i=this._tokenStore.getTokens(this._textModel,e);
      if(i&&i.length>0)return new OB(i,t,this._languageIdCodec)
    }
    return OB.createEmpty(t, this._languageIdCodec)
  }
  resetTokenization(e=!0){
    e&&this._onDidChangeTokens.fire({
      semanticTokensApplied:!1,ranges:[{
        fromLineNumber:1,toLineNumber:this._textModel.getLineCount()
      }
      ]
    }), this._initialize()
  }
  handleDidChangeAttached(){
    
  }
  handleDidChangeContent(e){
    e.isFlush?this.resetTokenization(!1):this._tokenStore.handleContentChanged(this._textModel, e)
  }
  forceTokenization(e){
    this._tokenizationSupport&&!this.hasAccurateTokensForLine(e)&&this._tokenizationSupport.tokenizeEncoded(e, this._textModel)
  }
  hasAccurateTokensForLine(e){
    return this._tokenStore.hasTokens(this._textModel, new Zt(e, 1, e, this._textModel.getLineMaxColumn(e)))
  }
  isCheapToTokenize(e){
    return!0
  }
  getTokenTypeIfInsertingCharacter(e, t, i){
    return 0
  }
  tokenizeLinesAt(e, t){
    if(this._tokenizationSupport){
      const i=this._tokenizationSupport.guessTokensForLinesContent(e,this._textModel,t),r=[];
      if(i){
        for(let s=0;
        s<i.length;
        s++)r.push(new OB(i[s],t[s],this._languageIdCodec));
        return r
      }
    }
    return null
  }
  get hasTokens(){
    return this._tokenStore.hasTokens(this._textModel)
  }
}, wOn=__decorate([__param(3, COo)], wOn)
}
});
function zgh(n){
  return(n<<0|0|0|32768|2<<24|1024)>>>0
}
var gxc, haA=