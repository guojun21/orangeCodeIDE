// Module: out-build/vs/editor/contrib/smartSelect/browser/bracketSelections.js
// Offset: 25363100 (bundle byte offset)
// Size: 2379 bytes

l2(), tl(), ts(), cjl=class jFe{
  async provideSelectionRanges(e, t){
    const i=[];
    for(const r of t){
      const s=[];
      i.push(s);
      const o=new Map;
      await new Promise(a=>jFe._bracketsRightYield(a,0,e,r,o)),await new Promise(a=>jFe._bracketsLeftYield(a,0,e,r,o,s))
    }
    return i
  }
  static{
    this._maxDuration=30
  }
  static{
    this._maxRounds=2
  }
  static _bracketsRightYield(e, t, i, r, s){
    const o=new Map, a=Date.now();
    for(;
    ;
    ){
      if(t>=jFe._maxRounds){
        e();
        break
      }
      if(!r){
        e();
        break
      }
      const l=i.bracketPairs.findNextBracket(r);
      if(!l){
        e();
        break
      }
      if(Date.now()-a>jFe._maxDuration){
        setTimeout(()=>jFe._bracketsRightYield(e,t+1,i,r,s));
        break
      }
      if(l.bracketInfo.isOpeningBracket){
        const d=l.bracketInfo.bracketText,m=o.has(d)?o.get(d):0;
        o.set(d,m+1)
      }
      else{
        const d=l.bracketInfo.getOpeningBrackets()[0].bracketText;
        let m=o.has(d)?o.get(d):0;
        if(m-=1,o.set(d,Math.max(0,m)),m<0){
          let p=s.get(d);
          p||(p=new WD,s.set(d,p)),p.push(l.range)
        }
      }
      r=l.range.getEndPosition()
    }
  }
  static _bracketsLeftYield(e, t, i, r, s, o){
    const a=new Map, l=Date.now();
    for(;
    ;
    ){
      if(t>=jFe._maxRounds&&s.size===0){
        e();
        break
      }
      if(!r){
        e();
        break
      }
      const u=i.bracketPairs.findPrevBracket(r);
      if(!u){
        e();
        break
      }
      if(Date.now()-l>jFe._maxDuration){
        setTimeout(()=>jFe._bracketsLeftYield(e,t+1,i,r,s,o));
        break
      }
      if(u.bracketInfo.isOpeningBracket){
        const m=u.bracketInfo.bracketText;
        let p=a.has(m)?a.get(m):0;
        if(p-=1,a.set(m,Math.max(0,p)),p<0){
          const g=s.get(m);
          if(g){
            const f=g.shift();
            g.size===0&&s.delete(m);
            const A=Zt.fromPositions(u.range.getEndPosition(),f.getStartPosition()),w=Zt.fromPositions(u.range.getStartPosition(),f.getEndPosition());
            o.push({
              range:A
            }),o.push({
              range:w
            }),jFe._addBracketLeading(i,w,o)
          }
        }
      }
      else{
        const m=u.bracketInfo.getOpeningBrackets()[0].bracketText,p=a.has(m)?a.get(m):0;
        a.set(m,p+1)
      }
      r=u.range.getStartPosition()
    }
  }
  static _addBracketLeading(e, t, i){
    if(t.startLineNumber===t.endLineNumber)return;
    const r=t.startLineNumber, s=e.getLineFirstNonWhitespaceColumn(r);
    s!==0&&s!==t.startColumn&&(i.push({
      range:Zt.fromPositions(new ar(r,s),t.getEndPosition())
    }), i.push({
      range:Zt.fromPositions(new ar(r,1),t.getEndPosition())
    }));
    const o=r-1;
    if(o>0){
      const a=e.getLineFirstNonWhitespaceColumn(o);
      a===t.startColumn&&a!==e.getLineLastNonWhitespaceColumn(o)&&(i.push({
        range:Zt.fromPositions(new ar(o,a),t.getEndPosition())
      }),i.push({
        range:Zt.fromPositions(new ar(o,1),t.getEndPosition())
      }))
    }
  }
}
}
}), ljl, Cyg=