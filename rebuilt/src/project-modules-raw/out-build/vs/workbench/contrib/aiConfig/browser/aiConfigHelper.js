// Module: out-build/vs/workbench/contrib/aiConfig/browser/aiConfigHelper.js
// Offset: 33929747 (bundle byte offset)
// Size: 1893 bytes

Ti()
}
});
function xX(n, e){
  const{
    showHover:t, hideHover:i, hoverWidget:r
  }
  =ik({
    delay:n?.delay??0, shouldSkipCleanup:n?.shouldSkipCleanup
  }), s=wr(), [o, a]=lt(void 0);
  let l=[];
  const u=()=>{
    for(const f of l)f.dispose();
    l.length=0
  }, d=(f, A, w=0, C, x)=>{
    a(C);
    const I=document.createElement("div");
    I.style.width="fit-content", l.push(Qv(A, I, s.instantiationService));
    const B=f instanceof HTMLElement?f:f.currentTarget;
    if(!B)return;
    const R=B.closest(".mentions-menu")??void 0, {
      additionalClasses:N,...M
    }
    =n??{
      
    };
    t({
      target:B,appearance:{
        compact:!0,showPointer:!0,skipFadeInAnimation:!0,...e
      },content:I,position:{
        hoverPosition:w
      },container:R??M.container,persistence:{
        hideOnHover:!1,...M.persistence
      },additionalClasses:["composer-thinking-hover-tooltip",...N||[]],...M
    }, x)
  }, m=(f, A, w=0, C, x)=>{
    a(C);
    const I=document.createElement("div");
    I.style.width="fit-content", l.push(Qv(A, I, s.instantiationService));
    const{
      additionalClasses:B,...R
    }
    =n??{
      
    };
    t({
      target:f,appearance:{
        compact:!0,showPointer:!0,skipFadeInAnimation:!0,...e
      },content:I,position:{
        hoverPosition:w
      },container:R.container,persistence:{
        hideOnHover:!1,...R.persistence
      },additionalClasses:["composer-thinking-hover-tooltip",...B||[]],...R
    }, x)
  }, p=(f, A, w=0, C, x)=>{
    a(C);
    const I=f instanceof HTMLElement?f:f.currentTarget;
    if(!I)return;
    const B=I.closest(".mentions-menu")??void 0, {
      additionalClasses:R,...N
    }
    =n??{
      
    };
    t({
      target:I,appearance:{
        compact:!1,showPointer:!0,skipFadeInAnimation:!0,...e
      },content:A,position:{
        hoverPosition:w
      },container:B??N.container,persistence:{
        hideOnHover:!1,...N.persistence
      },additionalClasses:["composer-thinking-hover-tooltip",...R||[]],...N
    }, x)
  }, g=f=>{
    (!f||f===o())&&(i(), a(void 0), u())
  };
  return Ai(()=>{
    n?.shouldSkipCleanup?.()||u()
  }), {
    showLargeHover:p, hideHover:g, currentHoverModel:o, showLargeJSXHover:d, showLargeJSXHoverAtTarget:m, hoverWidget:r
  }
}
var nle=