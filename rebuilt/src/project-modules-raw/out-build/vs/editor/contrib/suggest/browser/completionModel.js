// Module: out-build/vs/editor/contrib/suggest/browser/completionModel.js
// Offset: 25366441 (bundle byte offset)
// Size: 3755 bytes

Vs(), Q_(), oa(), ujl=class{
  constructor(n, e){
    this.leadingLineContent=n, this.characterCountDelta=e
  }
}, (function(n){
  n[n.Nothing=0]="Nothing", n[n.All=1]="All", n[n.Incr=2]="Incr"
})(Syg||(Syg={
  
})), djl=class bSn{
  constructor(e, t, i, r, s, o, a=o3n.default, l=void 0){
    this.clipboardText=l, this._snippetCompareFn=bSn._compareCompletionItems, this._items=e, this._column=t, this._wordDistance=r, this._options=s, this._refilterKind=1, this._lineContext=i, this._fuzzyScoreOptions=a, o==="top"?this._snippetCompareFn=bSn._compareCompletionItemsSnippetsUp:o==="bottom"&&(this._snippetCompareFn=bSn._compareCompletionItemsSnippetsDown)
  }
  get lineContext(){
    return this._lineContext
  }
  set lineContext(e){
    (this._lineContext.leadingLineContent!==e.leadingLineContent||this._lineContext.characterCountDelta!==e.characterCountDelta)&&(this._refilterKind=this._lineContext.characterCountDelta<e.characterCountDelta&&this._filteredItems?2:1, this._lineContext=e)
  }
  get items(){
    return this._ensureCachedState(), this._filteredItems
  }
  getItemsByProvider(){
    return this._ensureCachedState(), this._itemsByProvider
  }
  getIncompleteProvider(){
    this._ensureCachedState();
    const e=new Set;
    for(const[t, i]of this.getItemsByProvider())i.length>0&&i[0].container.incomplete&&e.add(t);
    return e
  }
  get stats(){
    return this._ensureCachedState(), this._stats
  }
  _ensureCachedState(){
    this._refilterKind!==0&&this._createCachedState()
  }
  _createCachedState(){
    this._itemsByProvider=new Map;
    const e=[], {
      leadingLineContent:t,characterCountDelta:i
    }
    =this._lineContext;
    let r="", s="";
    const o=this._refilterKind===1?this._items:this._filteredItems, a=[], l=!this._options.filterGraceful||o.length>2e3?w9e:jwh;
    for(let u=0;
    u<o.length;
    u++){
      const d=o[u];
      if(d.isInvalid)continue;
      const m=this._itemsByProvider.get(d.provider);
      m?m.push(d):this._itemsByProvider.set(d.provider,[d]);
      const p=d.position.column-d.editStart.column,g=p+i-(d.position.column-this._column);
      if(r.length!==g&&(r=g===0?"":t.slice(-g),s=r.toLowerCase()),d.word=r,g===0)d.score=hz.Default;
      else{
        let f=0;
        for(;
        f<p;
        ){
          const A=r.charCodeAt(f);
          if(A===32||A===9)f+=1;
          else break
        }
        if(f>=g)d.score=hz.Default;
        else if(typeof d.completion.filterText=="string"){
          const A=l(r,s,f,d.completion.filterText,d.filterTextLow,0,this._fuzzyScoreOptions);
          if(!A)continue;
          Tbe(d.completion.filterText,d.textLabel)===0?d.score=A:(d.score=AuA(r,s,f,d.textLabel,d.labelLow,0),d.score[0]=A[0])
        }
        else{
          const A=l(r,s,f,d.textLabel,d.labelLow,0,this._fuzzyScoreOptions);
          if(!A)continue;
          d.score=A
        }
      }
      d.idx=u,d.distance=this._wordDistance.distance(d.position,d.completion),a.push(d),e.push(d.textLabel.length)
    }
    this._filteredItems=a.sort(this._snippetCompareFn), this._refilterKind=0, this._stats={
      pLabelLen:e.length?BMo(e.length-.85,e,(u,d)=>u-d):0
    }
  }
  static _compareCompletionItems(e, t){
    return e.score[0]>t.score[0]?-1:e.score[0]<t.score[0]?1:e.distance<t.distance?-1:e.distance>t.distance?1:e.idx<t.idx?-1:e.idx>t.idx?1:0
  }
  static _compareCompletionItemsSnippetsDown(e, t){
    if(e.completion.kind!==t.completion.kind){
      if(e.completion.kind===27)return 1;
      if(t.completion.kind===27)return-1
    }
    return bSn._compareCompletionItems(e, t)
  }
  static _compareCompletionItemsSnippetsUp(e, t){
    if(e.completion.kind!==t.completion.kind){
      if(e.completion.kind===27)return-1;
      if(t.completion.kind===27)return 1
    }
    return bSn._compareCompletionItems(e, t)
  }
}
}
});
function OSA(n, e, t){
  if(!e.getContextKeyValue(VS.inlineSuggestionVisible.key))return!0;
  const i=e.getContextKeyValue(VS.suppressSuggestions.key);
  return i!==void 0?!i:!n.getOption(64).suppressSuggestions
}
function USA(n, e, t){
  if(!e.getContextKeyValue("inlineSuggestionVisible"))return!0;
  const i=e.getContextKeyValue(VS.suppressSuggestions.key);
  return i!==void 0?!i:!n.getOption(64).suppressSuggestions
}
var hjl, jet, Eyg, Fgi, xyg=