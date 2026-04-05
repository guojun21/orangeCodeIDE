// Module: out-build/vs/editor/contrib/suggest/browser/suggestMemory.js
// Offset: 25355872 (bundle byte offset)
// Size: 3781 bytes

vr(), rt(), cu(), Dde(), Tg(), Ei(), Er(), Wt(), kr(), qla=class{
  constructor(n){
    this.name=n
  }
  select(n, e, t){
    if(t.length===0)return 0;
    const i=t[0].score[0];
    for(let r=0;
    r<t.length;
    r++){
      const{
        score:s,completion:o
      }
      =t[r];
      if(s[0]!==i)break;
      if(o.preselect)return r
    }
    return 0
  }
}, ojl=class extends qla{
  constructor(){
    super("first")
  }
  memorize(n, e, t){
    
  }
  toJSON(){
    
  }
  fromJSON(){
    
  }
}, vyg=class extends qla{
  constructor(){
    super("recentlyUsed"), this._cache=new Fb(300, .66), this._seq=0
  }
  memorize(n, e, t){
    const i=`${n.getLanguageId()}/${t.textLabel}`;
    this._cache.set(i, {
      touch:this._seq++,type:t.completion.kind,insertText:t.completion.insertText
    })
  }
  select(n, e, t){
    if(t.length===0)return 0;
    const i=n.getLineContent(e.lineNumber).substr(e.column-10, e.column-1);
    if(/\s$/.test(i))return super.select(n, e, t);
    const r=t[0].score[0];
    let s=-1, o=-1, a=-1;
    for(let l=0;
    l<t.length&&t[l].score[0]===r;
    l++){
      const u=`${n.getLanguageId()}/${t[l].textLabel}`,d=this._cache.peek(u);
      if(d&&d.touch>a&&d.type===t[l].completion.kind&&d.insertText===t[l].completion.insertText&&(a=d.touch,o=l),t[l].completion.preselect&&s===-1)return s=l
    }
    return o!==-1?o:s!==-1?s:0
  }
  toJSON(){
    return this._cache.toJSON()
  }
  fromJSON(n){
    this._cache.clear();
    const e=0;
    for(const[t, i]of n)i.touch=e, i.type=typeof i.type=="number"?i.type:Eft.fromString(i.type), this._cache.set(t, i);
    this._seq=this._cache.size
  }
}, Ayg=class extends qla{
  constructor(){
    super("recentlyUsedByPrefix"), this._trie=MH.forStrings(), this._seq=0
  }
  memorize(n, e, t){
    const{
      word:i
    }
    =n.getWordUntilPosition(e), r=`${n.getLanguageId()}/${i}`;
    this._trie.set(r, {
      type:t.completion.kind,insertText:t.completion.insertText,touch:this._seq++
    })
  }
  select(n, e, t){
    const{
      word:i
    }
    =n.getWordUntilPosition(e);
    if(!i)return super.select(n, e, t);
    const r=`${n.getLanguageId()}/${i}`;
    let s=this._trie.get(r);
    if(s||(s=this._trie.findSubstr(r)), s)for(let o=0;
    o<t.length;
    o++){
      const{
        kind:a,insertText:l
      }
      =t[o].completion;
      if(a===s.type&&l===s.insertText)return o
    }
    return super.select(n, e, t)
  }
  toJSON(){
    const n=[];
    return this._trie.forEach((e, t)=>n.push([t, e])), n.sort((e, t)=>-(e[1].touch-t[1].touch)).forEach((e, t)=>e[1].touch=t), n.slice(0, 200)
  }
  fromJSON(n){
    if(this._trie.clear(), n.length>0){
      this._seq=n[0][1].touch+1;
      for(const[e,t]of n)t.type=typeof t.type=="number"?t.type:Eft.fromString(t.type),this._trie.set(e,t)
    }
  }
}, Hla=class{
  static{
    Pgi=this
  }
  static{
    this._strategyCtors=new Map([["recentlyUsedByPrefix", Ayg], ["recentlyUsed", vyg], ["first", ojl]])
  }
  static{
    this._storagePrefix="suggest/memories"
  }
  constructor(e, t){
    this._storageService=e, this._configService=t, this._disposables=new Ut, this._persistSoon=new Hu(()=>this._saveState(), 500), this._disposables.add(e.onWillSaveState(i=>{
      i.reason===bW.SHUTDOWN&&this._saveState()
    }))
  }
  dispose(){
    this._disposables.dispose(), this._persistSoon.dispose()
  }
  memorize(e, t, i){
    this._withStrategy(e, t).memorize(e, t, i), this._persistSoon.schedule()
  }
  select(e, t, i){
    return this._withStrategy(e, t).select(e, t, i)
  }
  _withStrategy(e, t){
    const i=this._configService.getValue("editor.suggestSelection", {
      overrideIdentifier:e.getLanguageIdAtPosition(t.lineNumber,t.column),resource:e.uri
    });
    if(this._strategy?.name!==i){
      this._saveState();
      const r=Pgi._strategyCtors.get(i)||ojl;
      this._strategy=new r;
      try{
        const o=this._configService.getValue("editor.suggest.shareSuggestSelections")?0:1,a=this._storageService.get(`${Pgi._storagePrefix}/${i}`,o);
        a&&this._strategy.fromJSON(JSON.parse(a))
      }
      catch{
        
      }
    }
    return this._strategy
  }
  _saveState(){
    if(this._strategy){
      const t=this._configService.getValue("editor.suggest.shareSuggestSelections")?0:1,i=JSON.stringify(this._strategy);
      this._storageService.store(`${Pgi._storagePrefix}/${this._strategy.name}`,i,t,1)
    }
  }
}, Hla=Pgi=__decorate([__param(0, Hi), __param(1, Fn)], Hla), Lgi=xi("ISuggestMemories"), Vi(Lgi, Hla, 1)
}
}), ajl, Ngi, NSA=