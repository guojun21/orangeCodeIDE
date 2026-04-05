// Module: out-build/vs/workbench/contrib/ui/browser/scrollableDivMaxHeight.js
// Offset: 31924284 (bundle byte offset)
// Size: 1612 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), CD(), ZNf=qe("<div>"), $V=n=>{
  const[e, t]=lt(null), [i, r]=lt(null), [s, o]=lt(-1), a=()=>{
    const u=i()?.getBoundingClientRect()?.height??0;
    u!==s()&&(o(u), t(u))
  };
  return An(()=>{
    if(n.useResizeObserver){
      const l=i();
      if(l){
        const u=new ResizeObserver(()=>{
          requestAnimationFrame(()=>{
            a()
          })
        });
        u.observe(l),Ai(()=>{
          u.disconnect()
        })
      }
    }
    else{
      const l=n.remeasureTrigger;
      setTimeout(a)
    }
  }), (()=>{
    var l=ZNf();
    return ge(l, K(_D, hb(n, {
      get style(){
        return{
          height:"100%",...n.style,...n.containerStyle
        }
      },get setScrollableRef(){
        return n.setScrollableRef
      },get children(){
        return n.children(r)
      }
    }))), tn(u=>La(l, {
      height:n.maxHeight!==void 0?Math.min(n.maxHeight,e()??n.maxHeight)+"px":"100%",overflow:"hidden",...n.style
    }, u)), l
  })()
}
}
});
function eCi(n, e, t, i, r={
  
}){
  const s=()=>{
    const o=e();
    if(!o)return;
    const a=t();
    if(/\s/.test(a)){
      console.error("useAutoVerticalScroll: id contains a space",a);
      return
    }
    if(a==="")return;
    const l=o.querySelector(`#${a}`);
    if(!l)return;
    const u=o.getBoundingClientRect(), m=l.getBoundingClientRect().top-u.top+n.getCurrentScrollPosition().scrollTop, {
      paddingToEdge:p=0,paddingToTopEdge:g=p,paddingToBottomEdge:f=p
    }
    =r, {
      scrollTop:A
    }
    =n.getCurrentScrollPosition(), {
      height:w,scrollHeight:C
    }
    =n.getScrollDimensions();
    if(w===0)return;
    const x=m+l.offsetHeight;
    let I=A;
    m<A?I=Math.max(0, m-g):x>A+w&&(I=Math.min(C-w, x-w+f)), I!==A&&(n.setScrollPositionNow({
      scrollTop:I
    }), r.onScroll?.())
  };
  return An(Bf(i, ()=>{
    const o=()=>s();
    let a;
    r.shouldRunInNextTick?a=setTimeout(o, 0):o(), Ai(()=>{
      a&&clearTimeout(a)
    })
  })), s
}
var tCi=