// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/provideInlineCompletions.js
// Offset: 25317755 (bundle byte offset)
// Size: 3594 bytes

Lv(), vr(), Po(), cu(), _s(), Bc(), Y1e(), $I(), tl(), ts(), CSA(), EW(), q3t(), Vde(), Tgi(), vr(), Po(), rt(), Tg(), ejl=class{
  constructor(n, e, t){
    this.completions=n, this.hashs=e, this.providerResults=t
  }
  has(n){
    return this.hashs.has(n.hash())
  }
  isEmpty(){
    return this.completions.length===0||this.completions.every(n=>n.range.isEmpty()&&n.insertText.length===0)
  }
  dispose(){
    for(const n of this.providerResults)n.removeRef()
  }
}, cyg=class{
  constructor(n, e){
    this.inlineCompletions=n, this.provider=e, this.refCount=1
  }
  addRef(){
    this.refCount++
  }
  removeRef(){
    this.refCount--, this.refCount===0&&this.provider.freeInlineCompletions(this.inlineCompletions)
  }
}, lyg=class _Wa{
  static from(e, t, i, r, s){
    let o, a, l=e.range?Zt.lift(e.range):i;
    if(typeof e.insertText=="string"){
      if(o=e.insertText,s&&e.completeBracketPairs){
        o=ayg(o,l.getStartPosition(),r,s);
        const u=o.length-e.insertText.length;
        u!==0&&(l=new Zt(l.startLineNumber,l.startColumn,l.endLineNumber,l.endColumn+u))
      }
      a=void 0
    }
    else if("snippet"in e.insertText){
      const u=e.insertText.snippet.length;
      if(s&&e.completeBracketPairs){
        e.insertText.snippet=ayg(e.insertText.snippet,l.getStartPosition(),r,s);
        const m=e.insertText.snippet.length-u;
        m!==0&&(l=new Zt(l.startLineNumber,l.startColumn,l.endLineNumber,l.endColumn+m))
      }
      const d=new Ute().parse(e.insertText.snippet);
      d.children.length===1&&d.children[0]instanceof gz?(o=d.children[0].value,a=void 0):(o=d.toString(),a={
        snippet:e.insertText.snippet,range:l
      })
    }
    else QN(e.insertText);
    return new _Wa(o, e.command, e.shownCommand, e.action, l, o, a, Zt.lift(e.showRange)??void 0, e.additionalTextEdits||lSA(), e, t)
  }
  static{
    this.ID=1
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p=`InlineCompletion:${_Wa.ID++}`){
    this.filterText=e, this.command=t, this.shownCommand=i, this.action=r, this.range=s, this.insertText=o, this.snippetInfo=a, this.cursorShowRange=l, this.additionalTextEdits=u, this.sourceInlineCompletion=d, this.source=m, this.id=p, this._didCallShow=!1
  }
  get isInlineEdit(){
    return this.sourceInlineCompletion.isInlineEdit
  }
  get didShow(){
    return this._didCallShow
  }
  markAsShown(){
    this._didCallShow=!0
  }
  withRangeInsertTextAndFilterText(e, t, i){
    return new _Wa(i, this.command, this.shownCommand, this.action, e, t, this.snippetInfo, this.cursorShowRange, this.additionalTextEdits, this.sourceInlineCompletion, this.source, this.id)
  }
  hash(){
    return JSON.stringify({
      insertText:this.insertText,range:this.range.toString()
    })
  }
  toSingleTextEdit(){
    return new cI(this.range, this.insertText)
  }
}
}
});
function ISA(n, e){
  return new Promise(t=>{
    let i;
    const r=setTimeout(()=>{
      i&&i.dispose(),t()
    }, n);
    e&&(i=e.onCancellationRequested(()=>{
      clearTimeout(r),i&&i.dispose(),t()
    }))
  })
}
function DSA(n, e, t, i){
  const r=i.getEOL();
  if(n.newText.endsWith(r)&&e.endsWith(r)&&(n=new E2(n.replaceRange.deltaEnd(-r.length), n.newText.slice(0, -r.length))), t===1&&n.replaceRange.isEmpty&&n.newText.includes(r)&&(n=BSA(n, i)), t===1){
    const s=voe(e, n.newText), o=xze(e.slice(s), n.newText.slice(s));
    if(s+o===e.length)return new E2(n.replaceRange.deltaStart(s).deltaEnd(-o), n.newText.substring(s, n.newText.length-o));
    if(s+o===n.newText.length)return new E2(n.replaceRange.deltaStart(s).deltaEnd(-o), "")
  }
  return n
}
function BSA(n, e){
  if(!n.replaceRange.isEmpty)throw new _m("Unexpected original range");
  if(n.replaceRange.start===0)return n;
  const t=e.getEOL(), i=e.getPositionAt(n.replaceRange.start), r=i.column, s=i.lineNumber;
  return r===1&&s>1&&e.getLineLength(s)!==0&&n.newText.endsWith(t)&&!n.newText.startsWith(t)?new E2(n.replaceRange.delta(-1), t+n.newText.slice(0, -t.length)):n
}
var tjl, Ula, uyg, dyg, hyg, njl, ijl, rjl, myg, pyg, gyg, RSA=