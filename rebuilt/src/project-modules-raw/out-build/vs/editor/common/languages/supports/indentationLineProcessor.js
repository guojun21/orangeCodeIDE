// Module: out-build/vs/editor/common/languages/supports/indentationLineProcessor.js
// Offset: 792033 (bundle byte offset)
// Size: 3997 bytes

oa(), u4n(), LH(), u4o=class{
  constructor(n, e, t){
    this._indentRulesSupport=e, this._indentationLineProcessor=new i1c(n, t)
  }
  shouldIncrease(n, e){
    const t=this._indentationLineProcessor.getProcessedLine(n, e);
    return this._indentRulesSupport.shouldIncrease(t)
  }
  shouldDecrease(n, e){
    const t=this._indentationLineProcessor.getProcessedLine(n, e);
    return this._indentRulesSupport.shouldDecrease(t)
  }
  shouldIgnore(n, e){
    const t=this._indentationLineProcessor.getProcessedLine(n, e);
    return this._indentRulesSupport.shouldIgnore(t)
  }
  shouldIndentNextLine(n, e){
    const t=this._indentationLineProcessor.getProcessedLine(n, e);
    return this._indentRulesSupport.shouldIndentNextLine(t)
  }
}, d4o=class{
  constructor(n, e){
    this.model=n, this.indentationLineProcessor=new i1c(n, e)
  }
  getProcessedTokenContextAroundRange(n){
    const e=this._getProcessedTokensBeforeRange(n), t=this._getProcessedTokensAfterRange(n), i=this._getProcessedPreviousLineTokens(n);
    return{
      beforeRangeProcessedTokens:e,afterRangeProcessedTokens:t,previousLineProcessedTokens:i
    }
  }
  _getProcessedTokensBeforeRange(n){
    this.model.tokenization.forceTokenization(n.startLineNumber);
    const e=this.model.tokenization.getLineTokens(n.startLineNumber), t=Zgt(e, n.startColumn-1);
    let i;
    if(n1c(this.model, n.getStartPosition())){
      const s=n.startColumn-1-t.firstCharOffset,o=t.firstCharOffset,a=o+s;
      i=e.sliceAndInflate(o,a,0)
    }
    else{
      const s=n.startColumn-1;
      i=e.sliceAndInflate(0,s,0)
    }
    return this.indentationLineProcessor.getProcessedTokens(i)
  }
  _getProcessedTokensAfterRange(n){
    const e=n.isEmpty()?n.getStartPosition():n.getEndPosition();
    this.model.tokenization.forceTokenization(e.lineNumber);
    const t=this.model.tokenization.getLineTokens(e.lineNumber), i=Zgt(t, e.column-1), r=e.column-1-i.firstCharOffset, s=i.firstCharOffset+r, o=i.firstCharOffset+i.getLineLength(), a=t.sliceAndInflate(s, o, 0);
    return this.indentationLineProcessor.getProcessedTokens(a)
  }
  _getProcessedPreviousLineTokens(n){
    const e=p=>{
      this.model.tokenization.forceTokenization(p);
      const g=this.model.tokenization.getLineTokens(p),f=this.model.getLineMaxColumn(p)-1;
      return Zgt(g,f)
    };
    this.model.tokenization.forceTokenization(n.startLineNumber);
    const t=this.model.tokenization.getLineTokens(n.startLineNumber), i=Zgt(t, n.startColumn-1), r=OB.createEmpty("", i.languageIdCodec), s=n.startLineNumber-1;
    if(s===0||!(i.firstCharOffset===0))return r;
    const l=e(s);
    if(!(i.languageId===l.languageId))return r;
    const d=l.toIViewLineTokens();
    return this.indentationLineProcessor.getProcessedTokens(d)
  }
}, i1c=class{
  constructor(n, e){
    this.model=n, this.languageConfigurationService=e
  }
  getProcessedLine(n, e){
    const t=(s, o)=>{
      const a=rE(s);
      return o+s.substring(a.length)
    };
    this.model.tokenization.forceTokenization?.(n);
    const i=this.model.tokenization.getLineTokens(n);
    let r=this.getProcessedTokens(i).getLineContent();
    return e!==void 0&&(r=t(r, e)), r
  }
  getProcessedTokens(n){
    const e=a=>a===2||a===3||a===1, t=n.getLanguageId(0), r=this.languageConfigurationService.getLanguageConfiguration(t).bracketsNew.getBracketRegExp({
      global:!0
    }), s=[];
    return n.forEach(a=>{
      const l=n.getStandardTokenType(a);
      let u=n.getTokenText(a);
      e(l)&&(u=u.replace(r,""));
      const d=n.getMetadata(a);
      s.push({
        text:u,metadata:d
      })
    }), OB.createFromTextAndMetadata(s, n.languageIdCodec)
  }
}
}
});
function j4t(n, e, t, i){
  e.tokenization.forceTokenization(t.startLineNumber);
  const r=e.getLanguageIdAtPosition(t.startLineNumber, t.startColumn), s=i.getLanguageConfiguration(r);
  if(!s)return null;
  const a=new d4o(e, i).getProcessedTokenContextAroundRange(t), l=a.previousLineProcessedTokens.getLineContent(), u=a.beforeRangeProcessedTokens.getLineContent(), d=a.afterRangeProcessedTokens.getLineContent(), m=s.onEnter(n, l, u, d);
  if(!m)return null;
  const p=m.indentAction;
  let g=m.appendText;
  const f=m.removeText||0;
  g?p===$R.Indent&&(g="	"+g):p===$R.Indent||p===$R.IndentOutdent?g="	":g="";
  let A=plh(e, t.startLineNumber, t.startColumn);
  return f&&(A=A.substring(0, A.length-f)), {
    indentAction:p, appendText:g, removeText:f, indentation:A
  }
}
var s1c=