// Module: out-build/vs/editor/common/model/textModelSearch.js
// Offset: 1144186 (bundle byte offset)
// Size: 6481 bytes

oa(), g4n(), tl(), ts(), xw(), lgh=999, Nde=class{
  constructor(n, e, t, i){
    this.searchString=n, this.isRegex=e, this.matchCase=t, this.wordSeparators=i
  }
  parseSearchRequest(){
    if(this.searchString==="")return null;
    let n;
    this.isRegex?n=YEc(this.searchString):n=this.searchString.indexOf(`
`)>=0;
    let e=null;
    try{
      e=iFn(this.searchString,this.isRegex,{
        matchCase:this.matchCase,wholeWord:!1,multiline:n,global:!0,unicode:!0
      })
    }
    catch{
      return null
    }
    if(!e)return null;
    let t=!this.isRegex&&!n;
    return t&&this.searchString.toLowerCase()!==this.searchString.toUpperCase()&&(t=this.matchCase), new cph(e, this.wordSeparators?kde(this.wordSeparators, []):null, t?this.searchString:null)
  }
}, XEc=class{
  constructor(n){
    const e=[];
    let t=0;
    for(let i=0, r=n.length;
    i<r;
    i++)n.charCodeAt(i)===10&&(e[t++]=i);
    this._lineFeedsOffsets=e
  }
  findLineFeedCountBeforeOffset(n){
    const e=this._lineFeedsOffsets;
    let t=0, i=e.length-1;
    if(i===-1||n<=e[0])return 0;
    for(;
    t<i;
    ){
      const r=t+((i-t)/2>>0);
      e[r]>=n?i=r-1:e[r+1]>=n?(t=r,i=r):t=r+1
    }
    return t+1
  }
}, bOn=class{
  static findMatches(n, e, t, i, r){
    const s=e.parseSearchRequest();
    return s?s.regex.multiline?this._doFindMatchesMultiline(n, t, new kft(s.wordSeparators, s.regex), i, r):this._doFindMatchesLineByLine(n, t, s, i, r):[]
  }
  static _getMultilineMatchRange(n, e, t, i, r, s){
    let o, a=0;
    i?(a=i.findLineFeedCountBeforeOffset(r), o=e+r+a):o=e+r;
    let l;
    if(i){
      const p=i.findLineFeedCountBeforeOffset(r+s.length)-a;
      l=o+s.length+p
    }
    else l=o+s.length;
    const u=n.getPositionAt(o), d=n.getPositionAt(l);
    return new Zt(u.lineNumber, u.column, d.lineNumber, d.column)
  }
  static _doFindMatchesMultiline(n, e, t, i, r){
    const s=n.getOffsetAt(e.getStartPosition()), o=n.getValueInRange(e, 1), a=n.getEOL()===`\r
`?new XEc(o):null, l=[];
    let u=0, d;
    for(t.reset(0);
    d=t.next(o);
    )if(l[u++]=Sft(this._getMultilineMatchRange(n, s, o, a, d.index, d[0]), d, i), u>=r)return l;
    return l
  }
  static _doFindMatchesLineByLine(n, e, t, i, r){
    const s=[];
    let o=0;
    if(e.startLineNumber===e.endLineNumber){
      const l=n.getLineContent(e.startLineNumber).substring(e.startColumn-1,e.endColumn-1);
      return o=this._findMatchesInLine(t,l,e.startLineNumber,e.startColumn-1,o,s,i,r),s
    }
    const a=n.getLineContent(e.startLineNumber).substring(e.startColumn-1);
    o=this._findMatchesInLine(t, a, e.startLineNumber, e.startColumn-1, o, s, i, r);
    for(let l=e.startLineNumber+1;
    l<e.endLineNumber&&o<r;
    l++)o=this._findMatchesInLine(t, n.getLineContent(l), l, 0, o, s, i, r);
    if(o<r){
      const l=n.getLineContent(e.endLineNumber).substring(0,e.endColumn-1);
      o=this._findMatchesInLine(t,l,e.endLineNumber,0,o,s,i,r)
    }
    return s
  }
  static _findMatchesInLine(n, e, t, i, r, s, o, a){
    const l=n.wordSeparators;
    if(!o&&n.simpleSearch){
      const m=n.simpleSearch,p=m.length,g=e.length;
      let f=-p;
      for(;
      (f=e.indexOf(m,f+p))!==-1;
      )if((!l||ZEc(l,e,g,f,p))&&(s[r++]=new SOt(new Zt(t,f+1+i,t,f+1+p+i),null),r>=a))return r;
      return r
    }
    const u=new kft(n.wordSeparators, n.regex);
    let d;
    u.reset(0);
    do if(d=u.next(e), d&&(s[r++]=Sft(new Zt(t, d.index+1+i, t, d.index+1+d[0].length+i), d, o), r>=a))return r;
    while(d);
    return r
  }
  static findNextMatch(n, e, t, i){
    const r=e.parseSearchRequest();
    if(!r)return null;
    const s=new kft(r.wordSeparators, r.regex);
    return r.regex.multiline?this._doFindNextMatchMultiline(n, t, s, i):this._doFindNextMatchLineByLine(n, t, s, i)
  }
  static _doFindNextMatchMultiline(n, e, t, i){
    const r=new ar(e.lineNumber, 1), s=n.getOffsetAt(r), o=n.getLineCount(), a=n.getValueInRange(new Zt(r.lineNumber, r.column, o, n.getLineMaxColumn(o)), 1), l=n.getEOL()===`\r
`?new XEc(a):null;
    t.reset(e.column-1);
    const u=t.next(a);
    return u?Sft(this._getMultilineMatchRange(n, s, a, l, u.index, u[0]), u, i):e.lineNumber!==1||e.column!==1?this._doFindNextMatchMultiline(n, new ar(1, 1), t, i):null
  }
  static _doFindNextMatchLineByLine(n, e, t, i){
    const r=n.getLineCount(), s=e.lineNumber, o=n.getLineContent(s), a=this._findFirstMatchInLine(t, o, s, e.column, i);
    if(a)return a;
    for(let l=1;
    l<=r;
    l++){
      const u=(s+l-1)%r,d=n.getLineContent(u+1),m=this._findFirstMatchInLine(t,d,u+1,1,i);
      if(m)return m
    }
    return null
  }
  static _findFirstMatchInLine(n, e, t, i, r){
    n.reset(i-1);
    const s=n.next(e);
    return s?Sft(new Zt(t, s.index+1, t, s.index+1+s[0].length), s, r):null
  }
  static findPreviousMatch(n, e, t, i){
    const r=e.parseSearchRequest();
    if(!r)return null;
    const s=new kft(r.wordSeparators, r.regex);
    return r.regex.multiline?this._doFindPreviousMatchMultiline(n, t, s, i):this._doFindPreviousMatchLineByLine(n, t, s, i)
  }
  static _doFindPreviousMatchMultiline(n, e, t, i){
    const r=this._doFindMatchesMultiline(n, new Zt(1, 1, e.lineNumber, e.column), t, i, 10*lgh);
    if(r.length>0)return r[r.length-1];
    const s=n.getLineCount();
    return e.lineNumber!==s||e.column!==n.getLineMaxColumn(s)?this._doFindPreviousMatchMultiline(n, new ar(s, n.getLineMaxColumn(s)), t, i):null
  }
  static _doFindPreviousMatchLineByLine(n, e, t, i){
    const r=n.getLineCount(), s=e.lineNumber, o=n.getLineContent(s).substring(0, e.column-1), a=this._findLastMatchInLine(t, o, s, i);
    if(a)return a;
    for(let l=1;
    l<=r;
    l++){
      const u=(r+s-l-1)%r,d=n.getLineContent(u+1),m=this._findLastMatchInLine(t,d,u+1,i);
      if(m)return m
    }
    return null
  }
  static _findLastMatchInLine(n, e, t, i){
    let r=null, s;
    for(n.reset(0);
    s=n.next(e);
    )r=Sft(new Zt(t, s.index+1, t, s.index+1+s[0].length), s, i);
    return r
  }
}, kft=class{
  constructor(n, e){
    this._wordSeparators=n, this._searchRegex=e, this._prevMatchStartIndex=-1, this._prevMatchLength=0
  }
  reset(n){
    this._searchRegex.lastIndex=n, this._prevMatchStartIndex=-1, this._prevMatchLength=0
  }
  next(n){
    const e=n.length;
    let t;
    do{
      if(this._prevMatchStartIndex+this._prevMatchLength===e||(t=this._searchRegex.exec(n),!t))return null;
      const i=t.index,r=t[0].length;
      if(i===this._prevMatchStartIndex&&r===this._prevMatchLength){
        if(r===0){
          u2o(n,e,this._searchRegex.lastIndex)>65535?this._searchRegex.lastIndex+=2:this._searchRegex.lastIndex+=1;
          continue
        }
        return null
      }
      if(this._prevMatchStartIndex=i,this._prevMatchLength=r,!this._wordSeparators||ZEc(this._wordSeparators,n,e,i,r))return t
    }
    while(t);
    return null
  }
}
}
});
function ugh(n){
  let e;
  return n[n.length-1]<65536?e=new Uint16Array(n.length):e=new Uint32Array(n.length), e.set(n, 0), e
}
function r9e(n, e=!0){
  const t=[0];
  let i=1;
  for(let r=0, s=n.length;
  r<s;
  r++){
    const o=n.charCodeAt(r);
    o===13?r+1<s&&n.charCodeAt(r+1)===10?(t[i++]=r+2, r++):t[i++]=r+1:o===10&&(t[i++]=r+1)
  }
  return e?ugh(t):t
}
function iaA(n, e){
  n.length=0, n[0]=0;
  let t=1, i=0, r=0, s=0, o=!0;
  for(let l=0, u=e.length;
  l<u;
  l++){
    const d=e.charCodeAt(l);
    d===13?l+1<u&&e.charCodeAt(l+1)===10?(s++, n[t++]=l+2, l++):(i++, n[t++]=l+1):d===10?(r++, n[t++]=l+1):o&&d!==9&&(d<32||d>126)&&(o=!1)
  }
  const a=new dgh(ugh(n), i, r, s, o);
  return n.length=0, a
}
var aRe, dgh, $Y, LVe, hgh, mgh, pgh, ggh=