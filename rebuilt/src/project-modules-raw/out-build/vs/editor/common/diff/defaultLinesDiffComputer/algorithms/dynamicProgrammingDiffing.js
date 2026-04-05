// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/algorithms/dynamicProgrammingDiffing.js
// Offset: 2175710 (bundle byte offset)
// Size: 1099 bytes

$I(), pbt(), y5o(), eCh=class{
  compute(n, e, t=R3t.instance, i){
    if(n.length===0||e.length===0)return WSe.trivial(n, e);
    const r=new P3t(n.length, e.length), s=new P3t(n.length, e.length), o=new P3t(n.length, e.length);
    for(let g=0;
    g<n.length;
    g++)for(let f=0;
    f<e.length;
    f++){
      if(!t.isValid())return WSe.trivialTimedOut(n,e);
      const A=g===0?0:r.get(g-1,f),w=f===0?0:r.get(g,f-1);
      let C;
      n.getElement(g)===e.getElement(f)?(g===0||f===0?C=0:C=r.get(g-1,f-1),g>0&&f>0&&s.get(g-1,f-1)===3&&(C+=o.get(g-1,f-1)),C+=i?i(g,f):1):C=-1;
      const x=Math.max(A,w,C);
      if(x===C){
        const I=g>0&&f>0?o.get(g-1,f-1):0;
        o.set(g,f,I+1),s.set(g,f,3)
      }
      else x===A?(o.set(g,f,0),s.set(g,f,1)):x===w&&(o.set(g,f,0),s.set(g,f,2));
      r.set(g,f,x)
    }
    const a=[];
    let l=n.length, u=e.length;
    function d(g, f){
      (g+1!==l||f+1!==u)&&a.push(new H4(new dm(g+1,l),new dm(f+1,u))),l=g,u=f
    }
    let m=n.length-1, p=e.length-1;
    for(;
    m>=0&&p>=0;
    )s.get(m, p)===3?(d(m, p), m--, p--):s.get(m, p)===1?m--:p--;
    return d(-1, -1), a.reverse(), new WSe(a, !1)
  }
}
}
}), w5o, NDc, tCh, nCh, MDc=