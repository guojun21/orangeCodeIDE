// Module: out-build/vs/editor/common/languages/languageConfiguration.js
// Offset: 735675 (bundle byte offset)
// Size: 2962 bytes

(function(n){
  n[n.None=0]="None", n[n.Indent=1]="Indent", n[n.IndentOutdent=2]="IndentOutdent", n[n.Outdent=3]="Outdent"
})($R||($R={
  
})), YFo=class{
  constructor(n){
    if(this._neutralCharacter=null, this._neutralCharacterSearched=!1, this.open=n.open, this.close=n.close, this._inString=!0, this._inComment=!0, this._inRegEx=!0, Array.isArray(n.notIn))for(let e=0, t=n.notIn.length;
    e<t;
    e++)switch(n.notIn[e]){
      case"string":this._inString=!1;
      break;
      case"comment":this._inComment=!1;
      break;
      case"regex":this._inRegEx=!1;
      break
    }
  }
  isOK(n){
    switch(n){
      case 0:return!0;
      case 1:return this._inComment;
      case 2:return this._inString;
      case 3:return this._inRegEx
    }
  }
  shouldAutoClose(n, e){
    if(n.getTokenCount()===0)return!0;
    const t=n.findTokenIndexAtOffset(e-2), i=n.getStandardTokenType(t);
    return this.isOK(i)
  }
  _findNeutralCharacterInRange(n, e){
    for(let t=n;
    t<=e;
    t++){
      const i=String.fromCharCode(t);
      if(!this.open.includes(i)&&!this.close.includes(i))return i
    }
    return null
  }
  findNeutralCharacter(){
    return this._neutralCharacterSearched||(this._neutralCharacterSearched=!0, this._neutralCharacter||(this._neutralCharacter=this._findNeutralCharacterInRange(48, 57)), this._neutralCharacter||(this._neutralCharacter=this._findNeutralCharacterInRange(97, 122)), this._neutralCharacter||(this._neutralCharacter=this._findNeutralCharacterInRange(65, 90))), this._neutralCharacter
  }
}, Ich=class{
  constructor(n){
    this.autoClosingPairsOpenByStart=new Map, this.autoClosingPairsOpenByEnd=new Map, this.autoClosingPairsCloseByStart=new Map, this.autoClosingPairsCloseByEnd=new Map, this.autoClosingPairsCloseSingleChar=new Map;
    for(const e of n)b4n(this.autoClosingPairsOpenByStart, e.open.charAt(0), e), b4n(this.autoClosingPairsOpenByEnd, e.open.charAt(e.open.length-1), e), b4n(this.autoClosingPairsCloseByStart, e.close.charAt(0), e), b4n(this.autoClosingPairsCloseByEnd, e.close.charAt(e.close.length-1), e), e.close.length===1&&e.open.length===1&&b4n(this.autoClosingPairsCloseSingleChar, e.close, e)
  }
}
}
});
function irA(n=""){
  let e="(-?\\d*\\.\\d\\w*)|([^";
  for(const t of eVe)n.indexOf(t)>=0||(e+="\\"+t);
  return e+="\\s]+)", new RegExp(e, "g")
}
function v4n(n){
  let e=$4t;
  if(n&&n instanceof RegExp)if(n.global)e=n;
  else{
    let t="g";
    n.ignoreCase&&(t+="i"), n.multiline&&(t+="m"), n.unicode&&(t+="u"), e=new RegExp(n.source, t)
  }
  return e.lastIndex=0, e
}
function O5e(n, e, t, i, r){
  if(e=v4n(e), r||(r=bl.first($kc)), t.length>r.maxLen){
    let u=n-r.maxLen/2;
    return u<0?u=0:i+=u, t=t.substring(u, n+r.maxLen/2), O5e(n, e, t, i, r)
  }
  const s=Date.now(), o=n-1-i;
  let a=-1, l=null;
  for(let u=1;
  !(Date.now()-s>=r.timeBudget);
  u++){
    const d=o-r.windowSize*u;
    e.lastIndex=Math.max(0, d);
    const m=rrA(e, t, o, a);
    if(!m&&l||(l=m, d<=0))break;
    a=d
  }
  if(l){
    const u={
      word:l[0],startColumn:i+1+l.index,endColumn:i+1+l.index+l[0].length
    };
    return e.lastIndex=0, u
  }
  return null
}
function rrA(n, e, t, i){
  let r;
  for(;
  r=n.exec(e);
  ){
    const s=r.index||0;
    if(s<=t&&n.lastIndex>=t)return r;
    if(i>0&&s>i)return null
  }
  return null
}
var eVe, $4t, $kc, Jbe=