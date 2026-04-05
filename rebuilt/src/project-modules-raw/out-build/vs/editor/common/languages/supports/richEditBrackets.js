// Module: out-build/vs/editor/common/languages/supports/richEditBrackets.js
// Offset: 743424 (bundle byte offset)
// Size: 1942 bytes

oa(), kSe(), ts(), Nch=class dad{
  constructor(e, t, i, r, s, o){
    this._richEditBracketBrand=void 0, this.languageId=e, this.index=t, this.open=i, this.close=r, this.forwardRegex=s, this.reversedRegex=o, this._openSet=dad._toSet(this.open), this._closeSet=dad._toSet(this.close)
  }
  isOpen(e){
    return this._openSet.has(e)
  }
  isClose(e){
    return this._closeSet.has(e)
  }
  static _toSet(e){
    const t=new Set;
    for(const i of e)t.add(i);
    return t
  }
}, Mch=class{
  constructor(n, e){
    this._richEditBracketsBrand=void 0;
    const t=lrA(e);
    this.brackets=t.map((i, r)=>new Nch(n, r, i.open, i.close, urA(i.open, i.close, t, r), drA(i.open, i.close, t, r))), this.forwardRegex=hrA(this.brackets), this.reversedRegex=mrA(this.brackets), this.textIsBracket={
      
    }, this.textIsOpenBracket={
      
    }, this.maxBracketLength=0;
    for(const i of this.brackets){
      for(const r of i.open)this.textIsBracket[r]=i,this.textIsOpenBracket[r]=!0,this.maxBracketLength=Math.max(this.maxBracketLength,r.length);
      for(const r of i.close)this.textIsBracket[r]=i,this.textIsOpenBracket[r]=!1,this.maxBracketLength=Math.max(this.maxBracketLength,r.length)
    }
  }
}, XFo=(function(){
  function n(i){
    const r=new Uint16Array(i.length);
    let s=0;
    for(let o=i.length-1;
    o>=0;
    o--)r[s++]=i.charCodeAt(o);
    return Rch().decode(r)
  }
  let e=null, t=null;
  return function(r){
    return e!==r&&(e=r, t=n(e)), t
  }
})(), Ede=class{
  static _findPrevBracketInText(n, e, t, i){
    const r=t.match(n);
    if(!r)return null;
    const s=t.length-(r.index||0), o=r[0].length, a=i+s;
    return new Zt(e, a-o+1, e, a+1)
  }
  static findPrevBracketInRange(n, e, t, i, r){
    const o=XFo(t).substring(t.length-r, t.length-i);
    return this._findPrevBracketInText(n, e, o, i)
  }
  static findNextBracketInText(n, e, t, i){
    const r=t.match(n);
    if(!r)return null;
    const s=r.index||0, o=r[0].length;
    if(o===0)return null;
    const a=i+s;
    return new Zt(e, a+1, e, a+1+o)
  }
  static findNextBracketInRange(n, e, t, i, r){
    const s=t.substring(i, r);
    return this.findNextBracketInText(n, e, s, i)
  }
}
}
}), Fch, grA=