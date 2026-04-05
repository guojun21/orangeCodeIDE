// Module: out-build/vs/editor/common/cursor/cursorColumnSelection.js
// Offset: 692506 (bundle byte offset)
// Size: 2050 bytes

Eoe(), tl(), ts(), N4t=class TJb{
  static columnSelect(e, t, i, r, s, o){
    const a=Math.abs(s-i)+1, l=i>s, u=r>o, d=r<o, m=[];
    for(let p=0;
    p<a;
    p++){
      const g=i+(l?-p:p),f=e.columnFromVisibleColumn(t,g,r),A=e.columnFromVisibleColumn(t,g,o),w=e.visibleColumnFromColumn(t,new ar(g,f)),C=e.visibleColumnFromColumn(t,new ar(g,A));
      d&&(w>o||C<r)||u&&(C>r||w<o)||m.push(new hW(new Zt(g,f,g,f),0,0,new ar(g,A),0))
    }
    if(m.length===0)for(let p=0;
    p<a;
    p++){
      const g=i+(l?-p:p),f=t.getLineMaxColumn(g);
      m.push(new hW(new Zt(g,f,g,f),0,0,new ar(g,f),0))
    }
    return{
      viewStates:m,reversed:l,fromLineNumber:i,fromVisualColumn:r,toLineNumber:s,toVisualColumn:o
    }
  }
  static columnSelectLeft(e, t, i){
    let r=i.toViewVisualColumn;
    return r>0&&r--, TJb.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, r)
  }
  static columnSelectRight(e, t, i){
    let r=0;
    const s=Math.min(i.fromViewLineNumber, i.toViewLineNumber), o=Math.max(i.fromViewLineNumber, i.toViewLineNumber);
    for(let l=s;
    l<=o;
    l++){
      const u=t.getLineMaxColumn(l),d=e.visibleColumnFromColumn(t,new ar(l,u));
      r=Math.max(r,d)
    }
    let a=i.toViewVisualColumn;
    return a<r&&a++, this.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, a)
  }
  static columnSelectUp(e, t, i, r){
    const s=r?e.pageSize:1, o=Math.max(1, i.toViewLineNumber-s);
    return this.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, o, i.toViewVisualColumn)
  }
  static columnSelectDown(e, t, i, r){
    const s=r?e.pageSize:1, o=Math.min(t.getLineCount(), i.toViewLineNumber+s);
    return this.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, o, i.toViewVisualColumn)
  }
}
}
});
function bch(n, e, t){
  if(t<0)throw new Error("Unexpected negative delta");
  const i=n.getLineCount();
  let r=new ar(i, n.getLineMaxColumn(i));
  for(let s=e.lineNumber;
  s<=i;
  s++)if(s===e.lineNumber){
    const o=t-n.getLineMaxColumn(e.lineNumber)+e.column;
    if(o<=0){
      r=new ar(e.lineNumber,e.column+t);
      break
    }
    t=o
  }
  else{
    const o=t-n.getLineMaxColumn(s);
    if(o<=0){
      r=new ar(s,t);
      break
    }
    t=o
  }
  return r
}
var D6, qFo, vch, d4n, h4n, Ach, HFo, M4t=