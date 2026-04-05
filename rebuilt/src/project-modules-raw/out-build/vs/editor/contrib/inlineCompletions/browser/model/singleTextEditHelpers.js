// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/singleTextEditHelpers.js
// Offset: 25296998 (bundle byte offset)
// Size: 2280 bytes

oa(), ts(), Kbe(), EW()
}
});
function YAg(n, e, t, i, r=0){
  let s=XUe(n, e);
  if(s.range.endLineNumber!==s.range.startLineNumber)return;
  const o=e.getLineContent(s.range.startLineNumber), a=rE(o).length;
  if(s.range.startColumn-1<=a){
    const f=rE(s.text).length, A=o.substring(s.range.startColumn-1, a), [w, C]=[s.range.getStartPosition(), s.range.getEndPosition()], x=w.column+A.length<=C.column?w.delta(0, A.length):C, I=Zt.fromPositions(x, C), B=s.text.startsWith(A)?s.text.substring(A.length):s.text.substring(f);
    s=new cI(I, B)
  }
  const u=e.getValueInRange(s.range), d=bSA(u, s.text);
  if(!d)return;
  const m=s.range.startLineNumber, p=new Array;
  if(t==="prefix"){
    const f=d.filter(A=>A.originalLength===0);
    if(f.length>1||f.length===1&&f[0].originalStart!==u.length)return
  }
  const g=s.text.length-r;
  for(const f of d){
    const A=s.range.startColumn+f.originalStart+f.originalLength;
    if(t==="subwordSmart"&&i&&i.lineNumber===s.range.startLineNumber&&A<i.column||f.originalLength>0)return;
    if(f.modifiedLength===0)continue;
    const w=f.modifiedStart+f.modifiedLength, C=Math.max(f.modifiedStart, Math.min(w, g)), x=s.text.substring(f.modifiedStart, C), I=s.text.substring(C, Math.max(f.modifiedStart, w));
    x.length>0&&p.push(new Igi(A, x, !1)), I.length>0&&p.push(new Igi(A, I, !0))
  }
  return new fdn(m, p)
}
function bSA(n, e){
  if(Bgi?.originalValue===n&&Bgi?.newValue===e)return Bgi?.changes;
  {
    const t=performance.now();
    let i=XAg(n, e, !0);
    if(i){
      const r=ZAg(i);
      if(r>0){
        const s=XAg(n,e,!1);
        s&&ZAg(s)<r&&(i=s)
      }
    }
    return Bgi={
      originalValue:n,newValue:e,changes:i
    }, i
  }
}
function ZAg(n){
  let e=0;
  for(const t of n)e+=t.originalLength;
  return e
}
function XAg(n, e, t){
  if(n.length>5e3||e.length>5e3)return;
  function i(u){
    let d=0;
    for(let m=0, p=u.length;
    m<p;
    m++){
      const g=u.charCodeAt(m);
      g>d&&(d=g)
    }
    return d
  }
  const r=Math.max(i(n), i(e));
  function s(u){
    if(u<0)throw new Error("unexpected");
    return r+u+1
  }
  function o(u){
    let d=0, m=0;
    const p=new Int32Array(u.length);
    for(let g=0, f=u.length;
    g<f;
    g++)if(t&&u[g]==="("){
      const A=m*100+d;
      p[g]=s(2*A),d++
    }
    else if(t&&u[g]===")"){
      d=Math.max(d-1,0);
      const A=m*100+d;
      p[g]=s(2*A+1),d===0&&m++
    }
    else p[g]=u.charCodeAt(g);
    return p
  }
  const a=o(n), l=o(e);
  return new Dun({
    getElements:()=>a
  }, {
    getElements:()=>l
  }).ComputeDiff(!1).changes
}
var Bgi, vSA=