// Module: out-build/vs/workbench/contrib/ui/browser/simpleButton/simpleButton.js
// Offset: 31369907 (bundle byte offset)
// Size: 2967 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), Moy(), ri(), qi(), Jr(), n7(), es(), UV(), F0i=qe("<div>"), xp=n=>{
  const{
    showHover:e, hideHover:t
  }
  =u5({
    delay:300, additionalClasses:["chat-hover-tooltip"]
  }), i=()=>n.size??"medium", r=s=>K(Xe, {
    get when(){
      return n.codicon&&(s==="left"?!n.renderCodiconOnRight:n.renderCodiconOnRight)
    }, get children(){
      return Ui(()=>typeof n.codicon=="object")()?(()=>{
        var o=F0i();
        return tn(a=>{
          var l={
            "font-size":"12px",...n.codiconStyle
          },u=Qt.asClassName(n.codicon);
          return a.e=La(o,l,a.e),u!==a.t&&Un(o,a.t=u),a
        },{
          e:void 0,t:void 0
        }),o
      })():(()=>{
        var o=F0i();
        return ge(o,()=>n.codicon),tn(a=>La(o,{
          "font-size":"12px",...n.codiconStyle
        },a)),o
      })()
    }
  });
  return(()=>{
    var s=F0i();
    return Bs(o=>n.setRef?.(o), s), s.addEventListener("blur", ()=>n.onBlur?.()), s.addEventListener("keydown", o=>{
      (o.key==="Enter"||o.key===" ")&&(o.preventDefault(),!n.disabled&&n.onClick!=null&&n.onClick(o))
    }), s.addEventListener("mouseleave", ()=>{
      n.onMouseLeave?.(),t()
    }), s.addEventListener("mouseenter", o=>{
      n.onMouseEnter?.(o),n.tooltip&&e(o,n.tooltip)
    }), s.addEventListener("click", o=>{
      !n.disabled&&n.onClick!=null&&n.onClick(o)
    }), $6(s, hb({
      get id(){
        return n.id
      },get class(){
        return[`cursor-button cursor-button-${n.type??"primary"}`,n.isNotClickable?"cursor-button-not-clickable":`cursor-button-${n.type??"primary"}-clickable`,n.type==="disabled"||n.disabled?"disabled":"",n.tabFocusable?"tab-focusable":"",i()==="small"?"cursor-button-small":"",n.class].filter(Boolean).join(" ")
      },get style(){
        return{
          "user-select":"none","flex-shrink":0,...n.style
        }
      },get tabIndex(){
        return n.tabFocusable?0:void 0
      }
    }, ()=>n.extras), !1, !0), ge(s, ()=>r("left"), null), ge(s, ()=>n.title, null), ge(s, ()=>n.children, null), ge(s, K(Xe, {
      get when(){
        return n.keyboardShortcut
      },get children(){
        var o=F0i();
        return o.style.setProperty("font-size","10px"),ge(o,()=>n.keyboardShortcut),tn(a=>(a=n.keyboardShortcutOpacity??.6)!=null?o.style.setProperty("opacity",a):o.style.removeProperty("opacity")),o
      }
    }), null), ge(s, ()=>r("right"), null), ge(s, K(Xe, {
      get when(){
        return n.isLoading
      },get children(){
        return K(y8,{
          get onPrimaryButton(){
            return(n.type??"primary")==="primary"
          },extras:{
            style:{
              "margin-left":"4px"
            }
          },get small(){
            return n.smallSpinner
          }
        })
      }
    }), null), s
  })()
}
}
});
function Ooy(){
  const n=C7e(), e=xe(()=>!!n.backgroundComposerService.bcIdForThisWindow()), t=()=>{
    n.backgroundComposerService.openInWindowBcEditor()
  };
  return K(Xe, {
    get when(){
      return e()
    }, get children(){
      var i=mLf();
      return i.style.setProperty("display","flex"),i.style.setProperty("justify-content","center"),i.style.setProperty("align-items","center"),i.style.setProperty("height","100%"),i.style.setProperty("width","100%"),ge(i,K(xp,{
        type:"secondary",get codicon(){
          return Be.terminalTwo
        },onClick:t,children:"Open Background Agent Overview"
      })),i
    }
  })
}
function Uoy(n, e){
  try{
    return Qv(()=>K(Ooy, {
      
    }), n, e, {
      restrictToServices:pLf
    })
  }
  catch{
    return $i(()=>{
      
    })
  }
}
var mLf, pLf, $oy=