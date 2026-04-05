// Module: out-build/vs/editor/common/languages/supports/electricCharacter.js
// Offset: 745366 (bundle byte offset)
// Size: 982 bytes

Vs(), u4n(), e4o(), Fch=class{
  constructor(n){
    this._richEditBrackets=n
  }
  getElectricCharacters(){
    const n=[];
    if(this._richEditBrackets)for(const e of this._richEditBrackets.brackets)for(const t of e.close){
      const i=t.charAt(t.length-1);
      n.push(i)
    }
    return xb(n)
  }
  onElectricCharacter(n, e, t){
    if(!this._richEditBrackets||this._richEditBrackets.brackets.length===0)return null;
    const i=e.findTokenIndexAtOffset(t-1);
    if(GBe(e.getStandardTokenType(i)))return null;
    const r=this._richEditBrackets.reversedRegex, s=e.getLineContent().substring(0, t-1)+n, o=Ede.findPrevBracketInRange(r, 1, s, 0, s.length);
    if(!o)return null;
    const a=s.substring(o.startColumn-1, o.endColumn-1).toLowerCase();
    if(this._richEditBrackets.textIsOpenBracket[a])return null;
    const u=e.getActualLineContentBefore(o.startColumn-1);
    return/^\s*$/.test(u)?{
      matchOpenBracket:a
    }
    :null
  }
}
}
});
function t4o(n){
  return n.global&&(n.lastIndex=0), !0
}
var Och, Uch, frA=