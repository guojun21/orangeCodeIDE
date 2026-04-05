// Module: out-build/vs/workbench/contrib/ui/browser/menu/menu.js
// Offset: 31690292 (bundle byte offset)
// Size: 3256 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), Ie(), es(), mB(), Eay(), INf(), Fay(), fvu=qe("<div>")
}
});
function Dfn(n){
  const e=wr(), [t, i, r]=RC(), [s, o]=lt(null), [a, l]=lt(null), [u, d]=lt(void 0);
  let m, p=[];
  const g=()=>{
    m!==void 0&&(e.window.clearTimeout(m), m=void 0)
  }, f=(x, I)=>{
    let B, R, N;
    typeof x=="object"&&"target"in x?(B=x.target, R=x.content, N=x.width):(B=x, R=I), g();
    const M=()=>{
      const $=B.getBoundingClientRect(),H=n?.position??0,W=typeof H=="function"?H():H,z=n?.anchorAlignment??"center",Y=n?.offsetY??0;
      let j=0,X=0;
      switch(W){
        case 0:j=$.left-4,X=$.top+$.height/2;
        break;
        case 1:j=$.right+4,X=$.top+$.height/2;
        break;
        case 3:z==="start"?j=$.left:z==="end"?j=$.right:j=$.left+$.width/2,X=$.top+Y;
        break;
        case 2:z==="start"?j=$.left:z==="end"?j=$.right:j=$.left+$.width/2,X=$.bottom+Y;
        break
      }
      i({
        x:j,y:X
      }),o(R),l(B),d(N??n?.width)
    }, O=n?.delay??0;
    O>0?m=e.window.setTimeout(M, O):M()
  }, A=()=>{
    g(), r(), o(null), l(null), d(void 0), p.forEach(x=>x.dispose()), p.length=0
  };
  Ai(()=>{
    A()
  });
  const w=x=>{
    const I=n?.anchorAlignment??"center";
    switch(x){
      case 0:return"right";
      case 1:return"left";
      case 3:return I==="start"?"bottom-left":I==="end"?"bottom-right":"bottom";
      case 2:return I==="start"?"top-left":I==="end"?"top-right":"top";
      default:return"left"
    }
  };
  return{
    showMenuHover:f, hideMenuHover:A, MenuHoverPortal:()=>{
      const x=()=>{
        const B=n?.position??0;
        return typeof B=="function"?B():B
      },I=xe(()=>{
        if(!t())return"left";
        const R=x();
        return w(R)
      });
      return K(Xe,{
        get when(){
          return Ui(()=>!!(t()&&s()))()&&a()
        },get children(){
          return K(Ebt,{
            get mount(){
              return e.portalElement
            },get children(){
              return K(Xme,{
                get position(){
                  return t()
                },close:A,width:"auto",get anchor(){
                  return I()
                },nonBlockingRoot:null,nonBlockingDirection:"vertical",animationType:"fade",zIndexModifier:2,shouldMountInPortal:!1,get style(){
                  return{
                    "border-radius":"6px",padding:"0px","background-color":"transparent",border:"none","box-shadow":"0 2px 8px var(--vscode-widget-shadow)","max-width":n?.compact===!1?"700px":"400px","font-size":n?.compact===!1?"13px":"12px","line-height":n?.compact===!1?"19px":"16px"
                  }
                },class:"workbench-hover-container composer-thinking-hover-tooltip",get children(){
                  return K(Xe,{
                    get when(){
                      return typeof s()=="string"
                    },get fallback(){
                      return K(Xe,{
                        get when(){
                          return s()instanceof HTMLElement
                        },get fallback(){
                          return K(Xe,{
                            get when(){
                              return typeof s()=="function"
                            },get fallback(){
                              return(()=>{
                                var B=p1a();
                                return ge(B,s),tn(R=>(R=u()??void 0)!=null?B.style.setProperty("width",R):B.style.removeProperty("width")),B
                              })()
                            },get children(){
                              var B=DNf();
                              return Bs(R=>{
                                An(()=>{
                                  const N=s();
                                  if(typeof N=="function"){
                                    R.replaceChildren(),p.forEach($=>$.dispose()),p.length=0;
                                    const M=document.createElement("div");
                                    M.classList.add("hover-contents");
                                    const O=u();
                                    O&&(M.style.width=O),p.push(Qv(N,M,e.instantiationService)),R.appendChild(M)
                                  }
                                })
                              },B),B
                            }
                          })
                        },get children(){
                          var B=p1a();
                          return Bs(R=>{
                            An(()=>{
                              const N=s();
                              R.replaceChildren(),N instanceof HTMLElement&&R.appendChild(N)
                            })
                          },B),tn(R=>(R=u()??void 0)!=null?B.style.setProperty("width",R):B.style.removeProperty("width")),B
                        }
                      })
                    },get children(){
                      var B=p1a();
                      return ge(B,s),tn(R=>(R=u()??void 0)!=null?B.style.setProperty("width",R):B.style.removeProperty("width")),B
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  }
}
var p1a, DNf, g1a=