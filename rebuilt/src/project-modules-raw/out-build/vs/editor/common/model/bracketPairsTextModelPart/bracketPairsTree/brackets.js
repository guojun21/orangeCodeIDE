// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/brackets.js
// Offset: 1081295 (bundle byte offset)
// Size: 3327 bytes

oa(), cOo(), X5e(), TOt(), REc(), _ph=class jJb{
  static createFromLanguage(e, t){
    function i(s){
      return t.getKey(`${s.languageId}:::${s.bracketText}`)
    }
    const r=new Map;
    for(const s of e.bracketsNew.openingBrackets){
      const o=ZN(0,s.bracketText.length),a=i(s),l=Ooe.getEmpty().add(a,EEc);
      r.set(s.bracketText,new e9e(o,1,a,l,DEc.create(o,s,l)))
    }
    for(const s of e.bracketsNew.closingBrackets){
      const o=ZN(0,s.bracketText.length);
      let a=Ooe.getEmpty();
      const l=s.getOpeningBrackets();
      for(const u of l)a=a.add(i(u),EEc);
      r.set(s.bracketText,new e9e(o,2,i(l[0]),a,DEc.create(o,s,a)))
    }
    return new jJb(r)
  }
  constructor(e){
    this.map=e, this.hasRegExp=!1, this._regExpGlobal=null
  }
  getRegExpStr(){
    if(this.isEmpty)return null;
    {
      const e=[...this.map.keys()];
      return e.sort(),e.reverse(),e.map(t=>IoA(t)).join("|")
    }
  }
  get regExpGlobal(){
    if(!this.hasRegExp){
      const e=this.getRegExpStr();
      this._regExpGlobal=e?new RegExp(e,"gi"):null,this.hasRegExp=!0
    }
    return this._regExpGlobal
  }
  getToken(e){
    return this.map.get(e.toLowerCase())
  }
  findClosingTokenText(e){
    for(const[t, i]of this.map)if(i.kind===2&&i.bracketIds.intersects(e))return t
  }
  get isEmpty(){
    return this.map.size===0
  }
}, PEc=class{
  constructor(n, e){
    this.denseKeyProvider=n, this.getLanguageConfiguration=e, this.languageIdToBracketTokens=new Map
  }
  didLanguageChange(n){
    return this.languageIdToBracketTokens.has(n)
  }
  getSingleLanguageBracketTokens(n){
    let e=this.languageIdToBracketTokens.get(n);
    return e||(e=_ph.createFromLanguage(this.getLanguageConfiguration(n), this.denseKeyProvider), this.languageIdToBracketTokens.set(n, e)), e
  }
  getToken(n, e){
    return this.getSingleLanguageBracketTokens(e).getToken(n)
  }
}
}
});
function DoA(n){
  if(n.length===0)return null;
  if(n.length===1)return n[0];
  let e=0;
  function t(){
    if(e>=n.length)return null;
    const o=e, a=n[o].listHeight;
    for(e++;
    e<n.length&&n[e].listHeight===a;
    )e++;
    return e-o>=2?Sph(o===0&&e===n.length?n:n.slice(o, e), !1):n[o]
  }
  let i=t(), r=t();
  if(!r)return i;
  for(let o=t();
  o;
  o=t())kph(i, r)<=kph(r, o)?(i=LEc(i, r), r=o):r=LEc(r, o);
  return LEc(i, r)
}
function Sph(n, e=!1){
  if(n.length===0)return null;
  if(n.length===1)return n[0];
  let t=n.length;
  for(;
  t>3;
  ){
    const i=t>>1;
    for(let r=0;
    r<i;
    r++){
      const s=r<<1;
      n[r]=DSe.create23(n[s],n[s+1],s+3===t?n[s+2]:null,e)
    }
    t=i
  }
  return DSe.create23(n[0], n[1], t>=3?n[2]:null, e)
}
function kph(n, e){
  return Math.abs(n.listHeight-e.listHeight)
}
function LEc(n, e){
  return n.listHeight===e.listHeight?DSe.create23(n, e, null, !1):n.listHeight>e.listHeight?BoA(n, e):RoA(e, n)
}
function BoA(n, e){
  n=n.toMutable();
  let t=n;
  const i=[];
  let r;
  for(;
  ;
  ){
    if(e.listHeight===t.listHeight){
      r=e;
      break
    }
    if(t.kind!==4)throw new Error("unexpected");
    i.push(t), t=t.makeLastElementMutable()
  }
  for(let s=i.length-1;
  s>=0;
  s--){
    const o=i[s];
    r?o.childrenLength>=3?r=DSe.create23(o.unappendChild(), r, null, !1):(o.appendChildOfSameHeight(r), r=void 0):o.handleChildrenChanged()
  }
  return r?DSe.create23(n, r, null, !1):n
}
function RoA(n, e){
  n=n.toMutable();
  let t=n;
  const i=[];
  for(;
  e.listHeight!==t.listHeight;
  ){
    if(t.kind!==4)throw new Error("unexpected");
    i.push(t), t=t.makeFirstElementMutable()
  }
  let r=e;
  for(let s=i.length-1;
  s>=0;
  s--){
    const o=i[s];
    r?o.childrenLength>=3?r=DSe.create23(r, o.unprependChild(), null, !1):(o.prependChildOfSameHeight(r), r=void 0):o.handleChildrenChanged()
  }
  return r?DSe.create23(r, n, null, !1):n
}
var PoA=