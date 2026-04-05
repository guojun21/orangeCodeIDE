// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/computeMovedLines.js
// Offset: 2186919 (bundle byte offset)
// Size: 5689 bytes

pbt(), WY(), Vs(), GD(), cu(), Ix(), cCh(), y5o(), MDc(), ts()
}
});
function FDc(n, e, t){
  let i=t;
  return i=uCh(n, e, i), i=uCh(n, e, i), i=$dA(n, e, i), i
}
function uCh(n, e, t){
  if(t.length===0)return t;
  const i=[];
  i.push(t[0]);
  for(let s=1;
  s<t.length;
  s++){
    const o=i[i.length-1];
    let a=t[s];
    if(a.seq1Range.isEmpty||a.seq2Range.isEmpty){
      const l=a.seq1Range.start-o.seq1Range.endExclusive;
      let u;
      for(u=1;
      u<=l&&!(n.getElement(a.seq1Range.start-u)!==n.getElement(a.seq1Range.endExclusive-u)||e.getElement(a.seq2Range.start-u)!==e.getElement(a.seq2Range.endExclusive-u));
      u++);
      if(u--,u===l){
        i[i.length-1]=new H4(new dm(o.seq1Range.start,a.seq1Range.endExclusive-l),new dm(o.seq2Range.start,a.seq2Range.endExclusive-l));
        continue
      }
      a=a.delta(-u)
    }
    i.push(a)
  }
  const r=[];
  for(let s=0;
  s<i.length-1;
  s++){
    const o=i[s+1];
    let a=i[s];
    if(a.seq1Range.isEmpty||a.seq2Range.isEmpty){
      const l=o.seq1Range.start-a.seq1Range.endExclusive;
      let u;
      for(u=0;
      u<l&&!(!n.isStronglyEqual(a.seq1Range.start+u,a.seq1Range.endExclusive+u)||!e.isStronglyEqual(a.seq2Range.start+u,a.seq2Range.endExclusive+u));
      u++);
      if(u===l){
        i[s+1]=new H4(new dm(a.seq1Range.start+l,o.seq1Range.endExclusive),new dm(a.seq2Range.start+l,o.seq2Range.endExclusive));
        continue
      }
      u>0&&(a=a.delta(u))
    }
    r.push(a)
  }
  return i.length>0&&r.push(i[i.length-1]), r
}
function $dA(n, e, t){
  if(!n.getBoundaryScore||!e.getBoundaryScore)return t;
  for(let i=0;
  i<t.length;
  i++){
    const r=i>0?t[i-1]:void 0, s=t[i], o=i+1<t.length?t[i+1]:void 0, a=new dm(r?r.seq1Range.endExclusive+1:0, o?o.seq1Range.start-1:n.length), l=new dm(r?r.seq2Range.endExclusive+1:0, o?o.seq2Range.start-1:e.length);
    s.seq1Range.isEmpty?t[i]=dCh(s, n, e, a, l):s.seq2Range.isEmpty&&(t[i]=dCh(s.swap(), e, n, l, a).swap())
  }
  return t
}
function dCh(n, e, t, i, r){
  let o=1;
  for(;
  n.seq1Range.start-o>=i.start&&n.seq2Range.start-o>=r.start&&t.isStronglyEqual(n.seq2Range.start-o, n.seq2Range.endExclusive-o)&&o<100;
  )o++;
  o--;
  let a=0;
  for(;
  n.seq1Range.start+a<i.endExclusive&&n.seq2Range.endExclusive+a<r.endExclusive&&t.isStronglyEqual(n.seq2Range.start+a, n.seq2Range.endExclusive+a)&&a<100;
  )a++;
  if(o===0&&a===0)return n;
  let l=0, u=-1;
  for(let d=-o;
  d<=a;
  d++){
    const m=n.seq2Range.start+d, p=n.seq2Range.endExclusive+d, g=n.seq1Range.start+d, f=e.getBoundaryScore(g)+t.getBoundaryScore(m)+t.getBoundaryScore(p);
    f>u&&(u=f, l=d)
  }
  return n.delta(l)
}
function qdA(n, e, t){
  const i=[];
  for(const r of t){
    const s=i[i.length-1];
    if(!s){
      i.push(r);
      continue
    }
    r.seq1Range.start-s.seq1Range.endExclusive<=2||r.seq2Range.start-s.seq2Range.endExclusive<=2?i[i.length-1]=new H4(s.seq1Range.join(r.seq1Range), s.seq2Range.join(r.seq2Range)):i.push(r)
  }
  return i
}
function hCh(n, e, t, i, r=!1){
  const s=H4.invert(t, n.length), o=[];
  let a=new uKe(0, 0);
  function l(d, m){
    if(d.offset1<a.offset1||d.offset2<a.offset2)return;
    const p=i(n, d.offset1), g=i(e, d.offset2);
    if(!p||!g)return;
    let f=new H4(p, g);
    const A=f.intersect(m);
    let w=A.seq1Range.length, C=A.seq2Range.length;
    for(;
    s.length>0;
    ){
      const x=s[0];
      if(!(x.seq1Range.intersects(f.seq1Range)||x.seq2Range.intersects(f.seq2Range)))break;
      const B=i(n,x.seq1Range.start),R=i(e,x.seq2Range.start),N=new H4(B,R),M=N.intersect(x);
      if(w+=M.seq1Range.length,C+=M.seq2Range.length,f=f.join(N),f.seq1Range.endExclusive>=x.seq1Range.endExclusive)s.shift();
      else break
    }
    (r&&w+C<f.seq1Range.length+f.seq2Range.length||w+C<(f.seq1Range.length+f.seq2Range.length)*2/3)&&o.push(f), a=f.getEndExclusives()
  }
  for(;
  s.length>0;
  ){
    const d=s.shift();
    d.seq1Range.isEmpty||(l(d.getStarts(), d), l(d.getEndExclusives().delta(-1), d))
  }
  return HdA(t, o)
}
function HdA(n, e){
  const t=[];
  for(;
  n.length>0||e.length>0;
  ){
    const i=n[0], r=e[0];
    let s;
    i&&(!r||i.seq1Range.start<r.seq1Range.start)?s=n.shift():s=e.shift(), t.length>0&&t[t.length-1].seq1Range.endExclusive>=s.seq1Range.start?t[t.length-1]=t[t.length-1].join(s):t.push(s)
  }
  return t
}
function JdA(n, e, t){
  let i=t;
  if(i.length===0)return i;
  let r=0, s;
  do{
    s=!1;
    const a=[i[0]];
    for(let l=1;
    l<i.length;
    l++){
      let u=function(g,f){
        const A=new dm(m.seq1Range.endExclusive,d.seq1Range.start);
        return n.getText(A).replace(/\s/g,"").length<=4&&(g.seq1Range.length+g.seq2Range.length>5||f.seq1Range.length+f.seq2Range.length>5)
      };
      var o=u;
      const d=i[l],m=a[a.length-1];
      u(m,d)?(s=!0,a[a.length-1]=a[a.length-1].join(d)):a.push(d)
    }
    i=a
  }
  while(r++<10&&s);
  return i
}
function GdA(n, e, t){
  let i=t;
  if(i.length===0)return i;
  let r=0, s;
  do{
    s=!1;
    const l=[i[0]];
    for(let u=1;
    u<i.length;
    u++){
      let d=function(f,A){
        const w=new dm(p.seq1Range.endExclusive,m.seq1Range.start);
        if(n.countLinesIn(w)>5||w.length>500)return!1;
        const x=n.getText(w).trim();
        if(x.length>20||x.split(/\r\n|\r|\n/).length>1)return!1;
        const I=n.countLinesIn(f.seq1Range),B=f.seq1Range.length,R=e.countLinesIn(f.seq2Range),N=f.seq2Range.length,M=n.countLinesIn(A.seq1Range),O=A.seq1Range.length,$=e.countLinesIn(A.seq2Range),H=A.seq2Range.length,W=130;
        function z(Y){
          return Math.min(Y,W)
        }
        return Math.pow(Math.pow(z(I*40+B),1.5)+Math.pow(z(R*40+N),1.5),1.5)+Math.pow(Math.pow(z(M*40+O),1.5)+Math.pow(z($*40+H),1.5),1.5)>(W**1.5)**1.5*1.3
      };
      var o=d;
      const m=i[u],p=l[l.length-1];
      d(p,m)?(s=!0,l[l.length-1]=l[l.length-1].join(m)):l.push(m)
    }
    i=l
  }
  while(r++<10&&s);
  const a=[];
  return VeA(i, (l, u, d)=>{
    let m=u;
    function p(x){
      return x.length>0&&x.trim().length<=3&&u.seq1Range.length+u.seq2Range.length>100
    }
    const g=n.extendToFullLines(u.seq1Range), f=n.getText(new dm(g.start, u.seq1Range.start));
    p(f)&&(m=m.deltaStart(-f.length));
    const A=n.getText(new dm(u.seq1Range.endExclusive, g.endExclusive));
    p(A)&&(m=m.deltaEnd(A.length));
    const w=H4.fromOffsetPairs(l?l.getEndExclusives():uKe.zero, d?d.getStarts():uKe.max), C=m.intersect(w);
    a.length>0&&C.getStarts().equals(a[a.length-1].getEndExclusives())?a[a.length-1]=a[a.length-1].join(C):a.push(C)
  }), a
}
var mCh=