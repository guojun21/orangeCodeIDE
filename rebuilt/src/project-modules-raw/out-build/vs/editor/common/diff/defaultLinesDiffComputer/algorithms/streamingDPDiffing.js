// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/algorithms/streamingDPDiffing.js
// Offset: 2173903 (bundle byte offset)
// Size: 1491 bytes

$I(), pbt(), y5o(), X0h=class{
  compute(n, e, t=R3t.instance, i){
    if(n.length===0||e.length===0)return WSe.trivial(n, e);
    const r=new P3t(2*n.length+1, e.length+1), s=new P3t(2*n.length+1, e.length+1);
    for(let p=0;
    p<=e.length;
    p++)r.set(0, p, p), p>0?s.set(0, p, !0):s.set(0, p, !1);
    for(let p=0;
    p<=2*n.length;
    p++)r.set(p, 0, Math.floor((p+1)/2)), s.set(p, 0, !1);
    for(let p=1;
    p<=e.length;
    p++)for(let g=1;
    g<=2*n.length;
    g++){
      if(!t.isValid())return WSe.trivialTimedOut(n,e);
      if(g%2===0){
        const f=r.get(g,p-1)+1,A=r.get(g-1,p);
        f<A?(r.set(g,p,f),s.set(g,p,!0)):(r.set(g,p,A),s.set(g,p,!1))
      }
      else{
        const f=r.get(g-1,p)+.4,A=n.getElement(Math.floor(g/2))===e.getElement(p-1)?r.get(g-1,p-1):Number.MAX_VALUE;
        A<f?(r.set(g,p,A),s.set(g,p,!0)):(r.set(g,p,f),s.set(g,p,!1))
      }
    }
    let o=Number.MAX_VALUE, a=-1;
    for(let p=0;
    p<=2*n.length;
    p++){
      const g=r.get(p,e.length);
      g<o&&(o=g,a=p)
    }
    let l=[], u=a, d=e.length;
    u<=2*n.length-2&&l.push(new H4(new dm(Math.floor((u+1)/2), n.length), new dm(d, d)));
    let m;
    for(;
    u>=0&&d>=0;
    )s.get(u, d)?u%2===0?(m===void 0&&(m={
      x:Math.floor(u/2),y:d
    }), d-=1):(m!==void 0&&((m.x!==Math.floor(u/2)+1||m.y!==d)&&l.push(new H4(new dm(Math.floor(u/2)+1, m.x), new dm(d, m.y))), m=void 0), u-=1, d-=1):(u%2, m===void 0&&(m={
      x:Math.floor((u+1)/2),y:d
    }), u-=1);
    return m!==void 0&&((m.x!==Math.floor(u/2)+1||m.y!==d)&&l.push(new H4(new dm(Math.floor(u/2)+1, m.x), new dm(d, m.y))), m=void 0), l.reverse(), new WSe(l, !1)
  }
}
}
}), Voe, LDc, L3t=