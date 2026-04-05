// Module: out-build/vs/workbench/contrib/ui/browser/menu/useMenuPosition.js
// Offset: 31687683 (bundle byte offset)
// Size: 2609 bytes

Ti(), zet(), es(), INf()
}
});
function Xme(n){
  const e=wr();
  let t, i=!1;
  const r=xe(()=>n.additionalCollisionRects?.()??[]), {
    actualPosition:s, actualAnchor:o
  }
  =May({
    position:()=>n.position, menuRef:()=>t, additionalCollisionRects:r, positioningProps:n
  });
  An(()=>{
    n.reactiveCloser&&i&&n.close()
  }), Ic(()=>{
    i=!0
  }), An(()=>{
    n.shouldAutoFocus&&t?.focus()
  }), An(()=>{
    const l=n.close, u=d=>{
      d.key==="Escape"&&(d.preventDefault(),d.stopPropagation(),l())
    };
    e.window.document.addEventListener("keydown", u), Ai(()=>{
      e.window.document.removeEventListener("keydown",u)
    })
  }), ANf(()=>t, l=>{
    if(!l||!n.strictNonBlockingRoot&&n.nonBlockingRoot&&(typeof n.nonBlockingRoot=="string"?e.window.document.querySelector(n.nonBlockingRoot):n.nonBlockingRoot)?.contains(l.target))return;
    if(n.allowedOutsideClickElements)for(const d of n.allowedOutsideClickElements){
      const m=e.window.document.querySelectorAll(d);
      if(Array.from(m).some(g=>g.contains(l.target)))return
    }
    if(n.preventClickOutsideClose?.())return;
    t?.querySelector(".toolcall-human-review-menu")?.getAttribute?.("data-blocking-run-command")==="true"||n.close(!0)
  }, CNf);
  const a=(()=>{
    var l=fvu();
    return Bs(u=>{
      n.setRef?.(u),t=u
    }, l), $6(l, hb(n, {
      get class(){
        return(n.animationType==="scale"?"scale-in-fast":n.animationType==="fade"?"fade-in-fast":"")+(n.class?` ${n.class}`:"")
      },get style(){
        return{
          "box-sizing":"border-box","border-radius":"6px","background-color":"var(--vscode-dropdown-background)",border:"1px solid var(--vscode-dropdown-border)","align-items":"stretch","font-size":"10px",display:"flex","flex-direction":"column",position:n.isRelative?"absolute":"fixed",visibility:s()?"visible":"hidden",top:s()?`${s().y}px`:void 0,left:s()?`${s().x}px`:void 0,transform:Tay(o())||void 0,"transform-origin":o().replace("-"," "),width:typeof n.width=="number"?`${n.width}px`:n.width,height:typeof n.height=="number"?`${n.height}px`:n.height,"box-shadow":"0px 16px 23px 0px rgba(0, 0, 0, 0.10)",padding:"2px",gap:"0px","z-index":_Nf+(n.zIndexModifier??0),...typeof n.style=="string"?{
            
          }
          :n.style??{
            
          }
        }
      }
    }), !1, !0), ge(l, ()=>n.children), l
  })();
  return[K(Xe, {
    get when(){
      return n.shouldUseBackdrop??!1
    }, get children(){
      var l=fvu();
      return l.addEventListener("click",()=>n.close()),tn(u=>La(l,{
        "z-index":100+(n.zIndexModifier??0)-1,position:"fixed",top:0,left:0,bottom:0,right:0,...n.shouldShadeOverlay?{
          "background-color":"rgba(0, 0, 0, 0.3)"
        }
        :{
          
        }
      },u)),l
    }
  }), K(Xe, {
    get when(){
      return n.shouldMountInPortal
    }, fallback:a, get children(){
      return K(Ebt,{
        get mount(){
          return n.portalRoot??e.portalElement
        },children:a
      })
    }
  })]
}
var fvu, dxe=