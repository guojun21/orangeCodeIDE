// Module: out-build/vs/editor/common/tokens/contiguousMultilineTokensBuilder.js
// Offset: 1201849 (bundle byte offset)
// Size: 1313 bytes

Ql(), caA(), MOt=class{
  static deserialize(n){
    let e=0;
    const t=CY(n, e);
    e+=4;
    const i=[];
    for(let r=0;
    r<t;
    r++)e=lxc.deserialize(n, e, i);
    return i
  }
  constructor(){
    this._tokens=[]
  }
  add(n, e){
    if(this._tokens.length>0){
      const t=this._tokens[this._tokens.length-1];
      if(t.endLineNumber+1===n){
        t.appendLineTokens(e);
        return
      }
    }
    this._tokens.push(new lxc(n, [e]))
  }
  finalize(){
    return this._tokens
  }
  serialize(){
    const n=this._serializeSize(), e=new Uint8Array(n);
    return this._serialize(e), e
  }
  _serializeSize(){
    let n=0;
    n+=4;
    for(let e=0;
    e<this._tokens.length;
    e++)n+=this._tokens[e].serializeSize();
    return n
  }
  _serialize(n){
    let e=0;
    SY(n, this._tokens.length, e), e+=4;
    for(let t=0;
    t<this._tokens.length;
    t++)e=this._tokens[t].serialize(n, e)
  }
}
}
});
function Lgh(n, e, t){
  let i=n.getLineFirstNonWhitespaceColumn(e);
  const r=[];
  let s=null;
  for(let o=e-1;
  i>1&&o>=1;
  o--){
    const a=n.getLineFirstNonWhitespaceColumn(o);
    if(a!==0&&a<i&&(r.push(n.getLineContent(o)), i=a, s=t?.getStartState(o), s))break
  }
  return r.reverse(), {
    likelyRelevantLines:r, initialState:s??void 0
  }
}
function yOn(n, e, t, i, r, s){
  let o=null;
  if(t)try{
    o=t.tokenizeEncoded(i, r, s.clone())
  }
  catch(a){
    Gc(a)
  }
  return o||(o=oxc(n.encodeLanguageId(e), s)), OB.convertToEndOffset(o.tokens, i.length), o
}
var Ngh, Mgh, Fgh, _Oo, dxc, Ogh, Ugh, hxc=