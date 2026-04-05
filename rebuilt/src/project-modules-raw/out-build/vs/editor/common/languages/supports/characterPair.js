// Module: out-build/vs/editor/common/languages/supports/characterPair.js
// Offset: 738846 (bundle byte offset)
// Size: 1730 bytes

Xze(), Dch=class uad{
  static{
    this.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES=`;:.,=}])> 
	`
  }
  static{
    this.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS=`'"\`;:.,=}])> 
	`
  }
  static{
    this.DEFAULT_AUTOCLOSE_BEFORE_WHITESPACE=` 
	`
  }
  constructor(e){
    if(e.autoClosingPairs?this._autoClosingPairs=e.autoClosingPairs.map(t=>new YFo(t)):e.brackets?this._autoClosingPairs=e.brackets.map(t=>new YFo({
      open:t[0],close:t[1]
    })):this._autoClosingPairs=[], e.__electricCharacterSupport&&e.__electricCharacterSupport.docComment){
      const t=e.__electricCharacterSupport.docComment;
      this._autoClosingPairs.push(new YFo({
        open:t.open,close:t.close||""
      }))
    }
    this._autoCloseBeforeForQuotes=typeof e.autoCloseBefore=="string"?e.autoCloseBefore:uad.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES, this._autoCloseBeforeForBrackets=typeof e.autoCloseBefore=="string"?e.autoCloseBefore:uad.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS, this._surroundingPairs=e.surroundingPairs||this._autoClosingPairs
  }
  getAutoClosingPairs(){
    return this._autoClosingPairs
  }
  getAutoCloseBeforeSet(e){
    return e?this._autoCloseBeforeForQuotes:this._autoCloseBeforeForBrackets
  }
  getSurroundingPairs(){
    return this._surroundingPairs
  }
}
}
});
function Bch(){
  return qkc||(qkc=new TextDecoder("UTF-16LE")), qkc
}
function orA(){
  return Hkc||(Hkc=new TextDecoder("UTF-16BE")), Hkc
}
function Rch(){
  return Jkc||(Jkc=f0c()?Bch():orA()), Jkc
}
function arA(n, e, t){
  const i=new Uint16Array(n.buffer, e, t);
  return t>0&&(i[0]===65279||i[0]===65534)?crA(n, e, t):Bch().decode(i)
}
function crA(n, e, t){
  const i=[];
  let r=0;
  for(let s=0;
  s<t;
  s++){
    const o=inA(n, e);
    e+=2, i[r++]=String.fromCharCode(o)
  }
  return i.join("")
}
var qkc, Hkc, Jkc, Gbe, kSe=