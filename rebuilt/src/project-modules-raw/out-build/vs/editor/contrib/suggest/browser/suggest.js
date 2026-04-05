// Module: out-build/vs/editor/contrib/suggest/browser/suggest.js
// Offset: 25259724 (bundle byte offset)
// Size: 4294 bytes

Po(), _s(), Q_(), rt(), Sx(), Js(), Yn(), tl(), ts(), td(), Vde(), Ht(), dr(), hs(), si(), Cm(), WAe(), VA(), Xf={
  Visible:_la, HasFocusedSuggestion:new Sn("suggestWidgetHasFocusedSuggestion", !1, _(1595, null)), DetailsVisible:new Sn("suggestWidgetDetailsVisible", !1, _(1596, null)), MultipleSuggestions:new Sn("suggestWidgetMultipleSuggestions", !1, _(1597, null)), MakesTextEdit:new Sn("suggestionMakesTextEdit", !0, _(1598, null)), AcceptSuggestionsOnEnter:new Sn("acceptSuggestionOnEnter", !0, _(1599, null)), HasInsertAndReplaceRange:new Sn("suggestionHasInsertAndReplaceRange", !1, _(1600, null)), InsertMode:new Sn("suggestionInsertMode", void 0, {
    type:"string", description:_(1601, null)
  }), CanResolve:new Sn("suggestionCanResolve", !1, _(1602, null))
}, ZUe=new st("suggestWidgetStatusBar"), PAg=class{
  constructor(n, e, t, i){
    this.position=n, this.completion=e, this.container=t, this.provider=i, this.isInvalid=!1, this.score=hz.Default, this.distance=0, this.textLabel=typeof e.label=="string"?e.label:e.label?.label, this.labelLow=this.textLabel.toLowerCase(), this.isInvalid=!this.textLabel, this.sortTextLow=e.sortText&&e.sortText.toLowerCase(), this.filterTextLow=e.filterText&&e.filterText.toLowerCase(), this.extensionId=e.extensionId, Zt.isIRange(e.range)?(this.editStart=new ar(e.range.startLineNumber, e.range.startColumn), this.editInsertEnd=new ar(e.range.endLineNumber, e.range.endColumn), this.editReplaceEnd=new ar(e.range.endLineNumber, e.range.endColumn), this.isInvalid=this.isInvalid||Zt.spansMultipleLines(e.range)||e.range.startLineNumber!==n.lineNumber):(this.editStart=new ar(e.range.insert.startLineNumber, e.range.insert.startColumn), this.editInsertEnd=new ar(e.range.insert.endLineNumber, e.range.insert.endColumn), this.editReplaceEnd=new ar(e.range.replace.endLineNumber, e.range.replace.endColumn), this.isInvalid=this.isInvalid||Zt.spansMultipleLines(e.range.insert)||Zt.spansMultipleLines(e.range.replace)||e.range.insert.startLineNumber!==n.lineNumber||e.range.replace.startLineNumber!==n.lineNumber||e.range.insert.startColumn!==e.range.replace.startColumn), typeof i.resolveCompletionItem!="function"&&(this._resolveCache=Promise.resolve(), this._resolveDuration=0)
  }
  get isResolved(){
    return this._resolveDuration!==void 0
  }
  get resolveDuration(){
    return this._resolveDuration!==void 0?this._resolveDuration:-1
  }
  async resolve(n){
    if(!this._resolveCache){
      const e=n.onCancellationRequested(()=>{
        this._resolveCache=void 0,this._resolveDuration=void 0
      }),t=new J_(!0);
      this._resolveCache=Promise.resolve(this.provider.resolveCompletionItem(this.completion,n)).then(i=>{
        Object.assign(this.completion,i),this._resolveDuration=t.elapsed()
      },i=>{
        bf(i)&&(this._resolveCache=void 0,this._resolveDuration=void 0)
      }).finally(()=>{
        e.dispose()
      })
    }
    return this._resolveCache
  }
}, (function(n){
  n[n.Top=0]="Top", n[n.Inline=1]="Inline", n[n.Bottom=2]="Bottom"
})(LAg||(LAg={
  
})), wgi=class YWb{
  static{
    this.default=new YWb
  }
  constructor(e=2, t=new Set, i=new Set, r=new Map, s=!0){
    this.snippetSortOrder=e, this.kindFilter=t, this.providerFilter=i, this.providerItemsToReuse=r, this.showDeprecated=s
  }
}, NAg=class{
  constructor(n, e, t, i){
    this.items=n, this.needsClipboard=e, this.durations=t, this.disposable=i
  }
}, _gi=new Map, _gi.set(0, nSA), _gi.set(2, iSA), _gi.set(1, FQl), Ss.registerCommand("_executeCompletionItemProvider", async(n, ...e)=>{
  const[t, i, r, s]=e;
  Kd(je.isUri(t)), Kd(ar.isIPosition(i)), Kd(typeof r=="string"||!r), Kd(typeof s=="number"||!s);
  const{
    completionProvider:o
  }
  =n.get($u), a=await n.get(El).createModelReference(t);
  try{
    const l={
      incomplete:!1,suggestions:[]
    }, u=[], d=a.object.textEditorModel.validatePosition(i), m=await $be("suggest.provideSuggestionItems", async()=>await Lla(o, a.object.textEditorModel, d, void 0, {
      triggerCharacter:r??void 0,triggerKind:r?1:0
    }));
    for(const p of m.items)u.length<(s??0)&&u.push(p.resolve(Cs.None)), l.incomplete=l.incomplete||p.container.incomplete, l.suggestions.push(p.completion);
    try{
      return await Promise.all(u),l
    }
    finally{
      setTimeout(()=>m.disposable.dispose(),100)
    }
  }
  finally{
    a.dispose()
  }
}), xCt=class{
  static isAllOff(n){
    return n.other==="off"&&n.comments==="off"&&n.strings==="off"
  }
  static isAllOn(n){
    return n.other==="on"&&n.comments==="on"&&n.strings==="on"
  }
  static valueFor(n, e){
    switch(e){
      case 1:return n.comments;
      case 2:return n.strings;
      default:return n.other
    }
  }
}
}
}), VS, pdn=