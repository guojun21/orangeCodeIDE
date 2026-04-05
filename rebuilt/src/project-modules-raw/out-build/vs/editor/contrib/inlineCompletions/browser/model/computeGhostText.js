// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/computeGhostText.js
// Offset: 25299278 (bundle byte offset)
// Size: 1905 bytes

Cpi(), oa(), ts(), EW(), Fla(), Dgi(), Bgi=void 0
}
});
function ASA(n, e){
  if(n=n.normalize(), e=e.normalize(), n.isEmpty)return e;
  if(e.isEmpty)return n;
  const t=[...n.edits], i=[];
  let r=0;
  for(const s of e.edits){
    for(;
    ;
    ){
      const u=t[0];
      if(!u||u.replaceRange.start+r+u.newText.length>=s.replaceRange.start)break;
      t.shift(),i.push(u),r+=u.newText.length-u.replaceRange.length
    }
    const o=r;
    let a, l;
    for(;
    ;
    ){
      const u=t[0];
      if(!u||u.replaceRange.start+r>s.replaceRange.endExclusive)break;
      a||(a=u),l=u,t.shift(),r+=u.newText.length-u.replaceRange.length
    }
    if(!a)i.push(new E2(s.replaceRange.delta(-r), s.newText));
    else{
      let u="";
      const d=s.replaceRange.start-(a.replaceRange.start+o);
      d>0&&(u=a.newText.slice(0,d));
      const m=l.replaceRange.endExclusive+r-s.replaceRange.endExclusive;
      if(m>0){
        const f=new E2(dm.ofStartAndLength(l.replaceRange.endExclusive,0),l.newText.slice(-m));
        t.unshift(f),r-=f.newText.length-f.replaceRange.length
      }
      const p=u+s.newText,g=new dm(Math.min(a.replaceRange.start,s.replaceRange.start-o),s.replaceRange.endExclusive-r);
      i.push(new E2(g,p))
    }
  }
  for(;
  ;
  ){
    const s=t.shift();
    if(!s)break;
    i.push(s)
  }
  return new Vae(i).normalize()
}
function ySA(n, e){
  n=n.slice();
  const t=[];
  let i=0;
  for(const r of e.edits){
    for(;
    ;
    ){
      const o=n[0];
      if(!o||o.endExclusive>=r.replaceRange.start)break;
      n.shift(),t.push(o.delta(i))
    }
    const s=[];
    for(;
    ;
    ){
      const o=n[0];
      if(!o||!o.intersectsOrTouches(r.replaceRange))break;
      n.shift(),s.push(o)
    }
    for(let o=s.length-1;
    o>=0;
    o--){
      let a=s[o];
      const l=a.intersect(r.replaceRange).length;
      a=a.deltaEnd(-l+(o===0?r.newText.length:0));
      const u=a.start-r.replaceRange.start;
      u>0&&(a=a.delta(-u)),o!==0&&(a=a.delta(r.newText.length)),a=a.delta(-(r.newText.length-r.replaceRange.length)),n.unshift(a)
    }
    i+=r.newText.length-r.replaceRange.length
  }
  for(;
  ;
  ){
    const r=n[0];
    if(!r)break;
    n.shift(), t.push(r.delta(i))
  }
  return t
}
var Vae, E2, Y1e=