// Module: out-build/vs/editor/common/languages/supports/languageBracketsConfiguration.js
// Offset: 770929 (bundle byte offset)
// Size: 3402 bytes

nFn(), e4o(), ulh=class{
  constructor(n, e){
    this.languageId=n;
    const t=e.brackets?llh(e.brackets):[], i=new $Ft(o=>{
      const a=new Set;
      return{
        info:new dlh(this,o,a),closing:a
      }
    }), r=new $Ft(o=>{
      const a=new Set,l=new Set;
      return{
        info:new hlh(this,o,a,l),opening:a,openingColorized:l
      }
    });
    for(const[o, a]of t){
      const l=i.get(o),u=r.get(a);
      l.closing.add(u.info),u.opening.add(l.info)
    }
    const s=e.colorizedBracketPairs?llh(e.colorizedBracketPairs):t.filter(o=>!(o[0]==="<"&&o[1]===">"));
    for(const[o, a]of s){
      const l=i.get(o),u=r.get(a);
      l.closing.add(u.info),u.openingColorized.add(l.info),u.opening.add(l.info)
    }
    this._openingBrackets=new Map([...i.cachedValues].map(([o, a])=>[o, a.info])), this._closingBrackets=new Map([...r.cachedValues].map(([o, a])=>[o, a.info]))
  }
  get openingBrackets(){
    return[...this._openingBrackets.values()]
  }
  get closingBrackets(){
    return[...this._closingBrackets.values()]
  }
  getOpeningBracketInfo(n){
    return this._openingBrackets.get(n)
  }
  getClosingBracketInfo(n){
    return this._closingBrackets.get(n)
  }
  getBracketInfo(n){
    return this.getOpeningBracketInfo(n)||this.getClosingBracketInfo(n)
  }
  getBracketRegExp(n){
    const e=Array.from([...this._openingBrackets.keys(), ...this._closingBrackets.keys()]);
    return A4n(e, n)
  }
}, Xkc=class{
  constructor(n, e){
    this.config=n, this.bracketText=e
  }
  get languageId(){
    return this.config.languageId
  }
}, dlh=class extends Xkc{
  constructor(n, e, t){
    super(n, e), this.openedBrackets=t, this.isOpeningBracket=!0
  }
}, hlh=class extends Xkc{
  constructor(n, e, t, i){
    super(n, e), this.openingBrackets=t, this.openingColorizedBrackets=i, this.isOpeningBracket=!1
  }
  closes(n){
    return n.config!==this.config?!1:this.openingBrackets.has(n)
  }
  closesColorized(n){
    return n.config!==this.config?!1:this.openingColorizedBrackets.has(n)
  }
  getOpeningBrackets(){
    return[...this.openingBrackets]
  }
}
}
});
function RrA(n, e, t, i){
  let r=e.getLanguageConfiguration(n);
  if(!r){
    if(!i.isRegisteredLanguageId(n))return new _4n(n, {
      
    });
    r=new _4n(n, {
      
    })
  }
  const s=PrA(r.languageId, t), o=glh([r.underlyingConfig, s]);
  return new _4n(r.languageId, o)
}
function PrA(n, e){
  const t=e.getValue(a4o.brackets, {
    overrideIdentifier:n
  }), i=e.getValue(a4o.colorizedBracketPairs, {
    overrideIdentifier:n
  });
  return{
    brackets:mlh(t), colorizedBracketPairs:mlh(i)
  }
}
function mlh(n){
  if(Array.isArray(n))return n.map(e=>{
    if(!(!Array.isArray(e)||e.length!==2))return[e[0], e[1]]
  }).filter(e=>!!e)
}
function plh(n, e, t){
  const i=n.getLineContent(e);
  let r=rE(i);
  return r.length>t-1&&(r=r.substring(0, t-1)), r
}
function glh(n){
  let e={
    comments:void 0, brackets:void 0, wordPattern:void 0, indentationRules:void 0, onEnterRules:void 0, autoClosingPairs:void 0, surroundingPairs:void 0, autoCloseBefore:void 0, folding:void 0, colorizedBracketPairs:void 0, __electricCharacterSupport:void 0
  };
  for(const t of n)e={
    comments:t.comments||e.comments, brackets:t.brackets||e.brackets, wordPattern:t.wordPattern||e.wordPattern, indentationRules:t.indentationRules||e.indentationRules, onEnterRules:t.onEnterRules||e.onEnterRules, autoClosingPairs:t.autoClosingPairs||e.autoClosingPairs, surroundingPairs:t.surroundingPairs||e.surroundingPairs, autoCloseBefore:t.autoCloseBefore||e.autoCloseBefore, folding:t.folding||e.folding, colorizedBracketPairs:t.colorizedBracketPairs||e.colorizedBracketPairs, __electricCharacterSupport:t.__electricCharacterSupport||e.__electricCharacterSupport
  };
  return e
}
var s4o, JS, o4o, a4o, flh, e1c, t1c, blh, _4n, QE=