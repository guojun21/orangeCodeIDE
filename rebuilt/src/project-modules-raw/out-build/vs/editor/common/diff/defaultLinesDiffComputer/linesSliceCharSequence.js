// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/linesSliceCharSequence.js
// Offset: 2178966 (bundle byte offset)
// Size: 7953 bytes

GD(), $I(), tl(), ts(), y5o(), C3n=class{
  constructor(n, e, t){
    this.lines=n, this.range=e, this.considerWhitespaceChanges=t, this.elements=[], this.firstElementOffsetByLineIdx=[], this.lineStartOffsets=[], this.trimmedWsLengthsByLineIdx=[], this.firstElementOffsetByLineIdx.push(0);
    for(let i=this.range.startLineNumber;
    i<=this.range.endLineNumber;
    i++){
      let r=n[i-1],s=0;
      i===this.range.startLineNumber&&this.range.startColumn>1&&(s=this.range.startColumn-1,r=r.substring(s)),this.lineStartOffsets.push(s);
      let o=0;
      if(!t){
        const l=r.trimStart();
        o=r.length-l.length,r=l.trimEnd()
      }
      this.trimmedWsLengthsByLineIdx.push(o);
      const a=i===this.range.endLineNumber?Math.min(this.range.endColumn-1-s-o,r.length):r.length;
      for(let l=0;
      l<a;
      l++)this.elements.push(r.charCodeAt(l));
      i<this.range.endLineNumber&&(this.elements.push(10),this.firstElementOffsetByLineIdx.push(this.elements.length))
    }
  }
  toString(){
    return`Slice: "${this.text}"`
  }
  get text(){
    return this.getText(new dm(0, this.length))
  }
  getText(n){
    return this.elements.slice(n.start, n.endExclusive).map(e=>String.fromCharCode(e)).join("")
  }
  getElement(n){
    return this.elements[n]
  }
  get length(){
    return this.elements.length
  }
  getBoundaryScore(n){
    const e=sCh(n>0?this.elements[n-1]:-1), t=sCh(n<this.elements.length?this.elements[n]:-1);
    if(e===7&&t===8)return 0;
    if(e===8)return 150;
    let i=0;
    return e!==t&&(i+=10, e===0&&t===1&&(i+=1)), i+=rCh(e), i+=rCh(t), i
  }
  translateOffset(n, e="right"){
    const t=xFt(this.firstElementOffsetByLineIdx, r=>r<=n), i=n-this.firstElementOffsetByLineIdx[t];
    return new ar(this.range.startLineNumber+t, 1+this.lineStartOffsets[t]+i+(i===0&&e==="left"?0:this.trimmedWsLengthsByLineIdx[t]))
  }
  translateRange(n){
    const e=this.translateOffset(n.start, "right"), t=this.translateOffset(n.endExclusive, "left");
    return t.isBefore(e)?Zt.fromPositions(t, t):Zt.fromPositions(e, t)
  }
  findWordContaining(n){
    if(n<0||n>=this.elements.length||!N3t(this.elements[n]))return;
    let e=n;
    for(;
    e>0&&N3t(this.elements[e-1]);
    )e--;
    let t=n;
    for(;
    t<this.elements.length&&N3t(this.elements[t]);
    )t++;
    return new dm(e, t)
  }
  findSubWordContaining(n){
    if(n<0||n>=this.elements.length||!N3t(this.elements[n]))return;
    let e=n;
    for(;
    e>0&&N3t(this.elements[e-1])&&!iCh(this.elements[e]);
    )e--;
    let t=n;
    for(;
    t<this.elements.length&&N3t(this.elements[t])&&!iCh(this.elements[t]);
    )t++;
    return new dm(e, t)
  }
  countLinesIn(n){
    return this.translateOffset(n.endExclusive).lineNumber-this.translateOffset(n.start).lineNumber
  }
  isStronglyEqual(n, e){
    return this.elements[n]===this.elements[e]
  }
  extendToFullLines(n){
    const e=EFt(this.firstElementOffsetByLineIdx, i=>i<=n.start)??0, t=jeA(this.firstElementOffsetByLineIdx, i=>n.endExclusive<=i)??this.elements.length;
    return new dm(e, t)
  }
}, (function(n){
  n[n.WordLower=0]="WordLower", n[n.WordUpper=1]="WordUpper", n[n.WordNumber=2]="WordNumber", n[n.End=3]="End", n[n.Other=4]="Other", n[n.Separator=5]="Separator", n[n.Space=6]="Space", n[n.LineBreakCR=7]="LineBreakCR", n[n.LineBreakLF=8]="LineBreakLF"
})(oCh||(oCh={
  
})), aCh={
  0:0, 1:0, 2:0, 3:10, 4:2, 5:30, 6:3, 7:10, 8:10
}
}
});
function PdA(n, e, t, i, r, s){
  let{
    moves:o, excludedChanges:a
  }
  =NdA(n, e, t, s);
  if(!s.isValid())return[];
  const l=n.filter(d=>!a.has(d)), u=MdA(l, i, r, e, t, s);
  return n0c(o, u), o=FdA(o), o=o.filter(d=>{
    const m=d.original.toOffsetRange().slice(e).map(g=>g.trim());
    return m.join(`
`).length>=15&&LdA(m, g=>g.length>=2)>=2
  }), o=OdA(n, o), o
}
function LdA(n, e){
  let t=0;
  for(const i of n)e(i)&&t++;
  return t
}
function NdA(n, e, t, i){
  const r=[], s=n.filter(l=>l.modified.isEmpty&&l.original.length>=3).map(l=>new PDc(l.original, e, l)), o=new Set(n.filter(l=>l.original.isEmpty&&l.modified.length>=3).map(l=>new PDc(l.modified, t, l))), a=new Set;
  for(const l of s){
    let u=-1, d;
    for(const m of o){
      const p=l.computeSimilarity(m);
      p>u&&(u=p,d=m)
    }
    if(u>.9&&d&&(o.delete(d), r.push(new Wde(l.range, d.range)), a.add(l.source), a.add(d.source)), !i.isValid())return{
      moves:r,excludedChanges:a
    }
  }
  return{
    moves:r, excludedChanges:a
  }
}
function MdA(n, e, t, i, r, s){
  const o=[], a=new RFt;
  for(const p of n)for(let g=p.original.startLineNumber;
  g<p.original.endLineNumberExclusive-2;
  g++){
    const f=`${e[g-1]}:${e[g+1-1]}:${e[g+2-1]}`;
    a.add(f, {
      range:new rh(g,g+3)
    })
  }
  const l=[];
  n.sort(JP(p=>p.modified.startLineNumber, p9));
  for(const p of n){
    let g=[];
    for(let f=p.modified.startLineNumber;
    f<p.modified.endLineNumberExclusive-2;
    f++){
      const A=`${t[f-1]}:${t[f+1-1]}:${t[f+2-1]}`,w=new rh(f,f+3),C=[];
      a.forEach(A,({
        range:x
      })=>{
        for(const B of g)if(B.originalLineRange.endLineNumberExclusive+1===x.endLineNumberExclusive&&B.modifiedLineRange.endLineNumberExclusive+1===w.endLineNumberExclusive){
          B.originalLineRange=new rh(B.originalLineRange.startLineNumber,x.endLineNumberExclusive),B.modifiedLineRange=new rh(B.modifiedLineRange.startLineNumber,w.endLineNumberExclusive),C.push(B);
          return
        }
        const I={
          modifiedLineRange:w,originalLineRange:x
        };
        l.push(I),C.push(I)
      }),g=C
    }
    if(!s.isValid())return[]
  }
  l.sort(Tnh(JP(p=>p.modifiedLineRange.length, p9)));
  const u=new xVe, d=new xVe;
  for(const p of l){
    const g=p.modifiedLineRange.startLineNumber-p.originalLineRange.startLineNumber, f=u.subtractFrom(p.modifiedLineRange), A=d.subtractFrom(p.originalLineRange).getWithDelta(g), w=f.getIntersection(A);
    for(const C of w.ranges){
      if(C.length<3)continue;
      const x=C,I=C.delta(-g);
      o.push(new Wde(I,x)),u.addRange(x),d.addRange(I)
    }
  }
  o.sort(JP(p=>p.original.startLineNumber, p9));
  const m=new Z_c(n);
  for(let p=0;
  p<o.length;
  p++){
    const g=o[p], f=m.findLastMonotonous(N=>N.original.startLineNumber<=g.original.startLineNumber), A=EFt(n, N=>N.modified.startLineNumber<=g.modified.startLineNumber), w=Math.max(g.original.startLineNumber-f.original.startLineNumber, g.modified.startLineNumber-A.modified.startLineNumber), C=m.findLastMonotonous(N=>N.original.startLineNumber<g.original.endLineNumberExclusive), x=EFt(n, N=>N.modified.startLineNumber<g.modified.endLineNumberExclusive), I=Math.max(C.original.endLineNumberExclusive-g.original.endLineNumberExclusive, x.modified.endLineNumberExclusive-g.modified.endLineNumberExclusive);
    let B;
    for(B=0;
    B<w;
    B++){
      const N=g.original.startLineNumber-B-1,M=g.modified.startLineNumber-B-1;
      if(N>i.length||M>r.length||u.contains(M)||d.contains(N)||!lCh(i[N-1],r[M-1],s))break
    }
    B>0&&(d.addRange(new rh(g.original.startLineNumber-B, g.original.startLineNumber)), u.addRange(new rh(g.modified.startLineNumber-B, g.modified.startLineNumber)));
    let R;
    for(R=0;
    R<I;
    R++){
      const N=g.original.endLineNumberExclusive+R,M=g.modified.endLineNumberExclusive+R;
      if(N>i.length||M>r.length||u.contains(M)||d.contains(N)||!lCh(i[N-1],r[M-1],s))break
    }
    R>0&&(d.addRange(new rh(g.original.endLineNumberExclusive, g.original.endLineNumberExclusive+R)), u.addRange(new rh(g.modified.endLineNumberExclusive, g.modified.endLineNumberExclusive+R))), (B>0||R>0)&&(o[p]=new Wde(new rh(g.original.startLineNumber-B, g.original.endLineNumberExclusive+R), new rh(g.modified.startLineNumber-B, g.modified.endLineNumberExclusive+R)))
  }
  return o
}
function lCh(n, e, t){
  if(n.trim()===e.trim())return!0;
  if(n.length>300&&e.length>300)return!1;
  const r=new w5o().compute(new C3n([n], new Zt(1, 1, 1, n.length), !1), new C3n([e], new Zt(1, 1, 1, e.length), !1), t);
  let s=0;
  const o=H4.invert(r.diffs, n.length);
  for(const d of o)d.seq1Range.forEach(m=>{
    RDc(n.charCodeAt(m))||s++
  });
  function a(d){
    let m=0;
    for(let p=0;
    p<n.length;
    p++)RDc(d.charCodeAt(p))||m++;
    return m
  }
  const l=a(n.length>e.length?n:e);
  return s/l>.6&&l>10
}
function FdA(n){
  if(n.length===0)return n;
  n.sort(JP(t=>t.original.startLineNumber, p9));
  const e=[n[0]];
  for(let t=1;
  t<n.length;
  t++){
    const i=e[e.length-1], r=n[t], s=r.original.startLineNumber-i.original.endLineNumberExclusive, o=r.modified.startLineNumber-i.modified.endLineNumberExclusive;
    if(s>=0&&o>=0&&s+o<=2){
      e[e.length-1]=i.join(r);
      continue
    }
    e.push(r)
  }
  return e
}
function OdA(n, e){
  const t=new Z_c(n);
  return e=e.filter(i=>{
    const r=t.findLastMonotonous(a=>a.original.startLineNumber<i.original.endLineNumberExclusive)||new Wde(new rh(1, 1), new rh(1, 1)), s=EFt(n, a=>a.modified.startLineNumber<i.modified.endLineNumberExclusive);
    return r!==s
  }), e
}
var UdA=