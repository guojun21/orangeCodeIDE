// Module: out-build/vs/editor/contrib/smartSelect/browser/wordSelections.js
// Offset: 32755975 (bundle byte offset)
// Size: 2618 bytes

oa(), ts(), d5f=class{
  constructor(n=!0){
    this.selectSubwords=n
  }
  provideSelectionRanges(n, e){
    const t=[];
    for(const i of e){
      const r=[];
      t.push(r),this.selectSubwords&&this._addInWordRanges(r,n,i),this._addWordRanges(r,n,i),this._addWhitespaceLine(r,n,i),r.push({
        range:n.getFullModelRange()
      })
    }
    return t
  }
  _addInWordRanges(n, e, t){
    const i=e.getWordAtPosition(t);
    if(!i)return;
    const{
      word:r,startColumn:s
    }
    =i, o=t.column-s;
    let a=o, l=o, u=0;
    for(;
    a>=0;
    a--){
      const d=r.charCodeAt(a);
      if(a!==o&&(d===95||d===45))break;
      if(Eze(d)&&Ibe(u))break;
      u=d
    }
    for(a+=1;
    l<r.length;
    l++){
      const d=r.charCodeAt(l);
      if(Ibe(d)&&Eze(u))break;
      if(d===95||d===45)break;
      u=d
    }
    a<l&&n.push({
      range:new Zt(t.lineNumber,s+a,t.lineNumber,s+l)
    })
  }
  _addWordRanges(n, e, t){
    const i=e.getWordAtPosition(t);
    i&&n.push({
      range:new Zt(t.lineNumber,i.startColumn,t.lineNumber,i.endColumn)
    })
  }
  _addWhitespaceLine(n, e, t){
    e.getLineLength(t.lineNumber)>0&&e.getLineFirstNonWhitespaceColumn(t.lineNumber)===0&&e.getLineLastNonWhitespaceColumn(t.lineNumber)===0&&n.push({
      range:new Zt(t.lineNumber,1,t.lineNumber,e.getLineMaxColumn(t.lineNumber))
    })
  }
}
}
});
async function h5f(n, e, t, i, r){
  const s=n.all(e).concat(new d5f(i.selectSubwords));
  s.length===1&&s.unshift(new cjl);
  const o=[], a=[];
  for(const l of s)o.push(Promise.resolve(l.provideSelectionRanges(e, t, r)).then(u=>{
    if(q_(u)&&u.length===t.length)for(let d=0;
    d<t.length;
    d++){
      a[d]||(a[d]=[]);
      for(const m of u[d])Zt.isIRange(m.range)&&Zt.containsPosition(m.range,t[d])&&a[d].push(Zt.lift(m.range))
    }
  }, JE));
  return await Promise.all(o), a.map(l=>{
    if(l.length===0)return[];
    l.sort((p, g)=>ar.isBefore(p.getStartPosition(), g.getStartPosition())?1:ar.isBefore(g.getStartPosition(), p.getStartPosition())||ar.isBefore(p.getEndPosition(), g.getEndPosition())?-1:ar.isBefore(g.getEndPosition(), p.getEndPosition())?1:0);
    const u=[];
    let d;
    for(const p of l)(!d||Zt.containsRange(p, d)&&!Zt.equalsRange(p, d))&&(u.push(p), d=p);
    if(!i.selectLeadingAndTrailingWhitespace)return u;
    const m=[u[0]];
    for(let p=1;
    p<u.length;
    p++){
      const g=u[p-1],f=u[p];
      if(f.startLineNumber!==g.startLineNumber||f.endLineNumber!==g.endLineNumber){
        const A=new Zt(g.startLineNumber,e.getLineFirstNonWhitespaceColumn(g.startLineNumber),g.endLineNumber,e.getLineLastNonWhitespaceColumn(g.endLineNumber));
        A.containsRange(g)&&!A.equalsRange(g)&&f.containsRange(A)&&!f.equalsRange(A)&&m.push(A);
        const w=new Zt(g.startLineNumber,1,g.endLineNumber,e.getLineMaxColumn(g.endLineNumber));
        w.containsRange(g)&&!w.equalsRange(A)&&f.containsRange(w)&&!f.equalsRange(w)&&m.push(w)
      }
      m.push(f)
    }
    return m
  })
}
var Lyu, m5f, Art, Nyu, p5f, g5f, f5f=