// Module: out-build/vs/editor/common/core/cursorColumns.js
// Offset: 684890 (bundle byte offset)
// Size: 1415 bytes

oa(), ZP=class sNi{
  static _nextVisibleColumn(e, t, i){
    return e===9?sNi.nextRenderTabStop(t, i):Ize(e)||W0c(e)?t+2:t+1
  }
  static visibleColumnFromColumn(e, t, i){
    const r=Math.min(t-1, e.length), s=e.substring(0, r), o=new HFt(s);
    let a=0;
    for(;
    !o.eol();
    ){
      const l=u2o(s,r,o.offset);
      o.nextGraphemeLength(),a=this._nextVisibleColumn(l,a,i)
    }
    return a
  }
  static toStatusbarColumn(e, t, i){
    const r=e.substring(0, Math.min(t-1, e.length)), s=new sFn(r);
    let o=0;
    for(;
    !s.eol();
    )s.nextCodePoint()===9?o=sNi.nextRenderTabStop(o, i):o=o+1;
    return o+1
  }
  static columnFromVisibleColumn(e, t, i){
    if(t<=0)return 1;
    const r=e.length, s=new HFt(e);
    let o=0, a=1;
    for(;
    !s.eol();
    ){
      const l=u2o(e,r,s.offset);
      s.nextGraphemeLength();
      const u=this._nextVisibleColumn(l,o,i),d=s.offset+1;
      if(u>=t){
        const m=t-o;
        return u-t<m?d:a
      }
      o=u,a=d
    }
    return r+1
  }
  static nextRenderTabStop(e, t){
    return e+t-e%t
  }
  static nextIndentTabStop(e, t){
    return sNi.nextRenderTabStop(e, t)
  }
  static prevRenderTabStop(e, t){
    return Math.max(0, e-1-(e-1)%t)
  }
  static prevIndentTabStop(e, t){
    return sNi.prevRenderTabStop(e, t)
  }
}
}
});
function erA(n, e, t){
  let i=0;
  for(let s=0;
  s<n.length;
  s++)n.charAt(s)==="	"?i=ZP.nextIndentTabStop(i, e):i++;
  let r="";
  if(!t){
    const s=Math.floor(i/e);
    i=i%e;
    for(let o=0;
    o<s;
    o++)r+="	"
  }
  for(let s=0;
  s<i;
  s++)r+=" ";
  return r
}
function Rkc(n, e, t){
  let i=TH(n);
  return i===-1&&(i=n.length), erA(n.substring(0, i), e, t)+n.substring(i)
}
var Pkc=