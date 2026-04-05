// Module: out-build/vs/workbench/contrib/ui/browser/menu/positioningUtils.js
// Offset: 31685071 (bundle byte offset)
// Size: 2612 bytes

zet(), _Nf=2548, gvu=2, CNf=300, SNf=10, kNf={
  top:"top", bottom:"bottom", left:"center", right:"center", "top-left":"top", "top-right":"top", "bottom-left":"bottom", "bottom-right":"bottom"
}, ENf={
  top:"center", bottom:"center", left:"left", right:"right", "top-left":"left", "top-right":"right", "bottom-left":"left", "bottom-right":"right"
}, xNf={
  top:"bottom", bottom:"top", "top-left":"bottom-left", "top-right":"bottom-right", "bottom-left":"top-left", "bottom-right":"top-right", left:"left", right:"right"
}, TNf={
  left:"right", right:"left", "top-left":"top-right", "top-right":"top-left", "bottom-left":"bottom-right", "bottom-right":"bottom-left", top:"top", bottom:"bottom"
}
}
});
function May(n){
  const e=wr(), [t, i]=lt(void 0), [r, s]=lt(n.positioningProps.anchor??"top-left"), o=xe(()=>{
    const l=e.window, u=n.positioningProps.overflowRoot??l.document.body, d=x2.fromLeftTopWidthHeight(0, 0, l.innerWidth, l.innerHeight), m=Z0i(u?.getBoundingClientRect()??new DOMRect(0, 0, 0, 0)), g=!n.positioningProps.overflowRoot||u===l.document.body||u===l.document.documentElement||u===l.document.scrollingElement?d:m.intersect(d)??d, f=e.workbenchLayoutService?.getWorkbenchInsets?.(), A={
      left:f?.left??0,right:f?.right??0,top:f?.top??0,bottom:f?.bottom??0
    };
    return Iay(g, A)
  }), a=()=>{
    const l=n.position();
    if(!l){
      i(void 0);
      return
    }
    const u=n.positioningProps.preventOverflow??!0, d=n.positioningProps.anchor??"top-left", m=n.positioningProps.isRelative??!1, p=n.positioningProps.marginToOverflowRoot??gvu, g=n.positioningProps.marginToNonBlockingRoot??gvu, f=n.positioningProps.nonBlockingDirection??"vertical";
    if(!u){
      i(l),s(d);
      return
    }
    const A=n.menuRef(), w=A?.getBoundingClientRect(), C=w?Z0i(w):x2.fromLeftTopWidthHeight(0, 0, 0, 0), x=[];
    if(n.positioningProps.nonBlockingRoot){
      const N=e.window,M=typeof n.positioningProps.nonBlockingRoot=="string"?N.document.querySelector(n.positioningProps.nonBlockingRoot)?.getBoundingClientRect():n.positioningProps.nonBlockingRoot.getBoundingClientRect();
      M&&x.push({
        rect:Z0i(M),direction:f,margin:g
      })
    }
    const I=n.additionalCollisionRects?.()??[];
    for(const N of I)x.push({
      rect:Z0i(N),direction:void 0,margin:g
    });
    const B=m&&A?.parentElement?Z0i(A.parentElement.getBoundingClientRect()):void 0, R=Nay({
      position:l,anchor:d,menuRect:C,overflowRect:o(),isRelative:m,parentRect:B,marginToOverflow:p
    }, x);
    i(R.position), s(R.anchor)
  };
  return Ic(()=>{
    const l=n.menuRef();
    if(!l)return;
    const u=new ResizeObserver(()=>{
      a()
    });
    u.observe(l), Ai(()=>u.disconnect())
  }), An(Bf(()=>[n.position(), n.positioningProps.anchor], a)), {
    actualPosition:t, actualAnchor:r, recalculate:a
  }
}
var Fay=