// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/constants.js
// Offset: 31981737 (bundle byte offset)
// Size: 23930 bytes

qi(), lcy=[{
  value:"left", label:"Align left", codicon:Be.alignLeft, activeCodicon:Be.alignLeftfill
}, {
  value:"center", label:"Align horizontal centers", codicon:Be.alignHcenter, activeCodicon:Be.alignHcenterfill
}, {
  value:"right", label:"Align right", codicon:Be.alignRight, activeCodicon:Be.alignRightfill
}
], ucy=[{
  value:"top", label:"Align top", codicon:Be.alignTop, activeCodicon:Be.alignTopfill
}, {
  value:"middle", label:"Align vertical centers", codicon:Be.alignVcenter, activeCodicon:Be.alignVcenterfill
}, {
  value:"bottom", label:"Align bottom", codicon:Be.alignBottom, activeCodicon:Be.alignBottomfill
}
], ZMf=[{
  value:"left", label:"Align text left", codicon:Be.leftAlign
}, {
  value:"center", label:"Align text center", codicon:Be.centerAlign
}, {
  value:"right", label:"Align text right", codicon:Be.rightAlign
}
], XMf=[{
  value:"top", label:"Align text top", codicon:Be.textTop
}, {
  value:"middle", label:"Align text middle", codicon:Be.textCenter
}, {
  value:"bottom", label:"Align text bottom", codicon:Be.textBottom
}
], e2f=[{
  mode:"wrap", label:"Freeform", codicon:Be.freeform
}, {
  mode:"column", label:"Column", codicon:Be.flowCol
}, {
  mode:"row", label:"Row", codicon:Be.flowRow
}, {
  mode:"grid", label:"Grid", codicon:Be.layoutGrid
}
], y1a=[{
  value:"all", label:"All", codicon:Be.borderAll
}, {
  value:"top", label:"Top", codicon:Be.borderTop
}, {
  value:"bottom", label:"Bottom", codicon:Be.borderBottom
}, {
  value:"left", label:"Left", codicon:Be.borderLeft
}, {
  value:"right", label:"Right", codicon:Be.borderRight
}
], j1t=[{
  value:"solid", label:"Solid"
}, {
  value:"linear", label:"Linear"
}, {
  value:"radial", label:"Radial"
}, {
  value:"conic", label:"Conic"
}
]
}
});
function Mvu(n){
  const[e, t]=lt(n.committedHex.replace("#", "")), [i, r]=lt(!1);
  An(()=>{
    const o=n.committedHex;
    i()||t(o.replace("#", ""))
  });
  const s=()=>{
    i()&&(n.onCommit(e()), r(!1))
  };
  return(()=>{
    var o=t2f();
    return o.addEventListener("keydown", a=>{
      a.key==="Enter"&&s()
    }), o.addEventListener("blur", ()=>s()), o.addEventListener("input", a=>{
      t(a.currentTarget.value),r(!0)
    }), tn(()=>o.value=e()), o
  })()
}
function Fvu(n){
  const e=hv, [t, i]=lt(Math.round(n.committedPosition).toString()), [r, s]=lt(!1), [o, a]=lt(!1);
  An(()=>{
    const u=n.committedPosition;
    !r()&&!o()&&i(Math.round(u).toString())
  });
  const l=()=>{
    if(r()){
      const u=parseInt(t(),10);
      Number.isNaN(u)||n.onCommit(Math.max(0,Math.min(100,u))),s(!1)
    }
  };
  return(()=>{
    var u=n2f(), d=u.firstChild, m=d.nextSibling;
    return d.addEventListener("keydown", p=>{
      p.key==="Enter"&&l()
    }), d.addEventListener("blur", ()=>l()), d.addEventListener("input", p=>{
      i(p.currentTarget.value),s(!0)
    }), Bs(hv, m, ()=>({
      getValue:()=>{
        if(o()){
          const p=parseInt(t(),10);
          return Number.isNaN(p)?n.committedPosition:p
        }
        return n.committedPosition
      },onChange:p=>{
        const g=Math.round(Math.max(0,Math.min(100,p)));
        i(g.toString()),n.onCommit(g)
      },step:1,min:0,max:100,onStart:()=>{
        a(!0),n.onDragStart?.()
      },onEnd:()=>{
        a(!1),s(!1),n.onDragEnd?.()
      }
    })), tn(()=>d.value=t()), u
  })()
}
function Ovu(n){
  const e=hv, [t, i]=lt(n.committedOpacity.toString()), [r, s]=lt(!1), [o, a]=lt(!1);
  An(()=>{
    const u=n.committedOpacity;
    !r()&&!o()&&i(u.toString())
  });
  const l=()=>{
    if(r()){
      const u=parseInt(t(),10);
      Number.isNaN(u)||n.onCommit(Math.max(0,Math.min(100,u))),s(!1)
    }
  };
  return(()=>{
    var u=i2f(), d=u.firstChild, m=d.nextSibling;
    return d.addEventListener("keydown", p=>{
      p.key==="Enter"&&l()
    }), d.addEventListener("blur", ()=>l()), d.addEventListener("input", p=>{
      i(p.currentTarget.value),s(!0)
    }), Bs(hv, m, ()=>({
      getValue:()=>{
        if(o()){
          const p=parseInt(t(),10);
          return Number.isNaN(p)?n.committedOpacity:p
        }
        return n.committedOpacity
      },onChange:p=>{
        const g=Math.round(Math.max(0,Math.min(100,p)));
        i(g.toString()),n.onCommit(g)
      },step:1,min:0,max:100,onStart:()=>{
        a(!0),n.onDragStart?.()
      },onEnd:()=>{
        a(!1),s(!1),n.onDragEnd?.()
      }
    })), tn(()=>d.value=t()), u
  })()
}
function dcy(n){
  const e=hv, {
    showHover:t, hideHover:i
  }
  =ik(0);
  let r, s, o;
  const[a, l]=lt(""), [u, d, m]=RC(null), [p, g, f]=RC(null);
  let A;
  const[w, C]=lt(null), [x, I]=lt(!1);
  let B=[];
  const R=xe(()=>{
    const Ge=n.gradientConfig();
    if(!Ge)return B=[], [];
    const Le=Ge.stops;
    if(x()&&B.length===Le.length)return B.map(tt=>({
      stop:Le[tt],originalIndex:tt
    }));
    const We=Le.map((tt, it)=>({
      stop:tt,originalIndex:it
    })).sort((tt, it)=>tt.stop.position-it.stop.position);
    return B=We.map(tt=>tt.originalIndex), We
  }), N=(Ge, Le)=>{
    if(!Ge)return;
    const We=Ge.getBoundingClientRect();
    t({
      content:Le,target:{
        targetElements:[Ge],x:We.left+We.width/2,y:We.bottom+4
      },position:{
        hoverPosition:2
      },appearance:{
        compact:!0
      },persistence:{
        hideOnHover:!0
      }
    })
  }, M=xe(()=>n.cssVariableColorOptions().length>0), O=xe(()=>{
    const Ge=n.linkedVariable();
    return Ge?n.cssVariableColorOptions().find(tt=>tt.variable===Ge)?.parsed??n.fillColor():n.fillColor()
  }), $=()=>{
    if(n.onClearPreview?.(), !u()){
      l("");
      return
    }
    m(), l(""), n.onMenuClose?.();
    const Ge=window.document.activeElement;
    (!A||!Ge||!A.contains(Ge))&&n.onInteractionToggle?.(!1)
  }, H=()=>{
    p()&&(f(), n.onMenuClose?.())
  }, W=xe(()=>{
    const Ge=n.cssVariableColorOptions(), Le=a().trim();
    if(!Ge.length)return[{
      type:"message",message:n.allCssVariables().length>0?"No parseable color tokens found":"No color tokens detected"
    }
    ];
    const We=ft=>{
      const _t=n.linkedVariable();
      return[{
        type:"items",items:ft.map(({
          option:It,labelMatch:sn,subTitleMatch:Vt
        })=>({
          id:It.variable,title:It.displayName??It.variable,subTitle:It.value,labelMatch:sn,subTitleMatch:Vt,showType:_t===It.variable?"check":void 0,secondaryIcon:()=>(()=>{
            var Ft=r2f();
            return tn(Xt=>(Xt=U1(It.parsed.hex,It.parsed.alpha))!=null?Ft.style.setProperty("--css-inspector-token-color",Xt):Ft.style.removeProperty("--css-inspector-token-color")),Ft
          })(),onMouseEnter:()=>{
            n.onPreviewColor?.(It.parsed.hex,It.parsed.alpha)
          },onMouseLeave:()=>{
            n.onRestorePreview?.()
          },onMouseUp:()=>{
            const Ft=n.committedFillValue?.();
            n.onCommitPreview?.(),n.onFillHexCommit(It.parsed.hex,{
              alpha:It.parsed.alpha,variable:It.variable,explicitOriginalValue:Ft??void 0
            }),$()
          }
        }))
      }
      ]
    };
    if(!Le)return We(Ge.map(ft=>({
      option:ft
    })));
    const tt=Le.toLowerCase(), it=o8(tt), bt=Object.create(null), Nt=Ge.map(ft=>{
      const{
        score:_t,labelMatch:It,descriptionMatch:sn
      }
      =Mq({
        label:ft.displayName??ft.variable,description:ft.value??ft.parsed.hex
      },it,!0,DW,bt);
      return{
        option:ft,score:_t,labelMatch:It,subTitleMatch:sn
      }
    }).filter(ft=>ft.score>0).sort((ft, _t)=>_t.score-ft.score);
    return Nt.length?We(Nt.map(({
      option:ft,labelMatch:_t,subTitleMatch:It
    })=>({
      option:ft,labelMatch:_t,subTitleMatch:It
    }))):[{
      type:"message",message:"No matching tokens"
    }
    ]
  }), z=Ge=>{
    n.hasFill()||(Ge.stopPropagation(), n.onAddFill())
  }, Y=Ge=>{
    !n.hasFill()&&(Ge.key==="Enter"||Ge.key===" ")&&(Ge.preventDefault(), Ge.stopPropagation(), n.onAddFill())
  }, j=Ge=>{
    if(Ge.stopPropagation(), u()){
      $();
      return
    }
    const Le=Ge.currentTarget.getBoundingClientRect();
    l(""), d({
      x:Le.right+4,y:Le.bottom+4
    }), n.onMenuOpen?.(), n.onInteractionToggle?.(!0)
  }, X=Ge=>{
    if(Ge.stopPropagation(), p()){
      H();
      return
    }
    const Le=Ge.currentTarget.getBoundingClientRect();
    g({
      x:Le.left,y:Le.bottom+4
    }), n.onMenuOpen?.(), n.onInteractionToggle?.(!0)
  }, ee=()=>{
    n.onInteractionToggle?.(!0)
  }, re=Ge=>{
    const Le=Ge.relatedTarget;
    Le&&Ge.currentTarget.contains(Le)||u()||p()||n.onInteractionToggle?.(!1)
  }, ne=Ge=>{
    n.onGradientTypeChange(Ge), Ge==="linear"&&!n.gradientConfig()?n.onGradientConfigChange(Pfn({
      startColor:n.fillColor()
    })):Ge==="radial"&&!n.gradientConfig()?n.onGradientConfigChange(Lfn({
      startColor:n.fillColor()
    })):Ge==="conic"&&!n.gradientConfig()&&n.onGradientConfigChange(Nfn({
      startColor:n.fillColor()
    })), H()
  }, pe=Ge=>{
    const Le=n.gradientConfig();
    if(!Le||Le.type!=="linear")return;
    const We={
      ...Le,angle:Ge
    };
    n.onGradientConfigChange(We)
  }, le=(Ge, Le)=>{
    const We=n.gradientConfig();
    if(!We)return;
    const tt=[...We.stops], it=npe(Le);
    tt[Ge]={
      ...tt[Ge],color:{
        ...tt[Ge].color,hex:it
      }
    }, n.onGradientConfigChange({
      ...We,stops:tt
    })
  }, he=(Ge, Le)=>{
    const We=n.gradientConfig();
    if(!We)return;
    const tt=[...We.stops], it=Math.max(0, Math.min(100, Le));
    tt[Ge]={
      ...tt[Ge],position:it
    }, n.onGradientConfigChange({
      ...We,stops:tt
    })
  }, be=(Ge, Le)=>{
    const We=n.gradientConfig();
    if(!We)return;
    const tt=[...We.stops], it=Math.max(0, Math.min(100, Le));
    tt[Ge]={
      ...tt[Ge],color:{
        ...tt[Ge].color,alpha:it
      }
    }, n.onGradientConfigChange({
      ...We,stops:tt
    })
  }, fe=()=>{
    const Ge=n.gradientConfig();
    if(!Ge)return;
    const Le=Ge.stops;
    let We=50;
    if(Le.length>=2){
      let bt=0,Nt=0;
      for(let ft=0;
      ft<Le.length-1;
      ft++){
        const _t=Le[ft+1].position-Le[ft].position;
        _t>bt&&(bt=_t,Nt=Le[ft].position)
      }
      We=Nt+bt/2
    }
    const tt={
      color:{
        hex:"#888888",alpha:100
      },position:We
    }, it=[...Le, tt].sort((bt, Nt)=>bt.position-Nt.position);
    n.onGradientConfigChange({
      ...Ge,stops:it
    })
  }, ke=Ge=>{
    const Le=n.gradientConfig();
    if(!Le||Le.stops.length<=2)return;
    const We=Le.stops.filter((tt, it)=>it!==Ge);
    n.onGradientConfigChange({
      ...Le,stops:We
    })
  }, Se=Ge=>{
    const Le=n.gradientConfig();
    if(!Le||Le.type!=="radial")return;
    const We={
      ...Le,shape:Ge
    };
    n.onGradientConfigChange(We)
  }, Fe=Ge=>{
    const Le=n.gradientConfig();
    if(!Le||Le.type!=="conic")return;
    const We={
      ...Le,angle:Ge
    };
    n.onGradientConfigChange(We)
  }, De=xe(()=>{
    const Ge=n.gradientConfig();
    return Ge?{
      background:_X(Ge)
    }
    :{
      
    }
  }), Pe=xe(()=>n.gradientsDisabled?.()??!1), Ne=xe(()=>{
    const Ge=Pe();
    return[{
      type:"items",items:j1t.map(Le=>({
        id:Le.value,title:Le.label,showType:n.gradientType()===Le.value?"check":void 0,isDisabled:Ge&&Le.value!=="solid",onClick:()=>ne(Le.value),closeMenuOnClick:!0
      }))
    }
    ]
  }), Oe=xe(()=>{
    const Ge=n.gradientType();
    return j1t.find(We=>We.value===Ge)?.label??"Solid"
  });
  return(()=>{
    var Ge=a2f(), Le=Ge.firstChild, We=Le.firstChild, tt=We.nextSibling, it=tt.firstChild, bt=it.firstChild, Nt=it.nextSibling, ft=Nt.firstChild;
    Bs(sn=>{
      A=sn??void 0
    }, Ge), Ge.addEventListener("focusout", re), Ge.addEventListener("focusin", ee), Le.addEventListener("keydown", Y), Le.addEventListener("click", z), Yd(it, "mouseleave", i), it.addEventListener("mouseenter", ()=>{
      const sn=M()?"Choose token":"No color tokens detected";
      N(r,sn)
    }), it.addEventListener("click", j);
    var _t=r;
    typeof _t=="function"?Bs(_t, it):r=it, Yd(Nt, "mouseleave", i), Nt.addEventListener("mouseenter", ()=>N(s, "Add fill")), Nt.addEventListener("click", sn=>{
      sn.stopPropagation(),n.onAddFill()
    });
    var It=s;
    return typeof It=="function"?Bs(It, Nt):s=Nt, ge(Ge, K(Xe, {
      get when(){
        return u()
      },children:sn=>K(LT,{
        get position(){
          return sn()
        },anchor:"top-right",get sections(){
          return W()
        },width:280,maxHeight:280,get shouldShowInput(){
          return M()
        },inputPlaceholder:"Search tokens",get searchTerm(){
          return a()
        },onSearchTermChange:l,onClose:$,scrollPaddingOptions:{
          paddingToBottomEdge:-24
        },get overflowRoot(){
          return n.overflowRoot
        },get style(){
          return n.menuMaxWidth!==void 0?{
            "max-width":`${n.menuMaxWidth}px`
          }
          :void 0
        }
      })
    }), null), ge(Ge, K(Xe, {
      get when(){
        return n.hasFill()
      },get children(){
        var sn=o2f(),Vt=sn.firstChild,Ft=Vt.firstChild,Xt=Ft.firstChild,bn=Xt.nextSibling;
        return Ft.addEventListener("click",X),ge(Xt,Oe),ge(Vt,K(Xe,{
          get when(){
            return p()
          },children:St=>K(LT,{
            get position(){
              return St()
            },anchor:"top-left",get sections(){
              return Ne()
            },width:120,maxHeight:200,onClose:H,get overflowRoot(){
              return n.overflowRoot
            }
          })
        }),null),ge(sn,K(Xe,{
          get when(){
            return n.gradientType()==="solid"
          },get children(){
            var St=s2f(),Bt=St.firstChild,Jt=Bt.firstChild;
            ge(St,K(Xe,{
              get when(){
                return n.linkedVariable()
              },get fallback(){
                return(()=>{
                  var cn=c2f(),Mt=cn.firstChild,Pt=Mt.nextSibling,ut=Pt.nextSibling,ot=ut.nextSibling,Lt=ot.firstChild,Gt=Lt.nextSibling;
                  return Mt.addEventListener("input",jt=>n.onFillHexCommit(jt.currentTarget.value)),Pt.addEventListener("keydown",jt=>{
                    jt.key==="Enter"&&n.onFillHexCommit(n.fillHexDraft())
                  }),Pt.addEventListener("blur",()=>n.onFillHexCommit(n.fillHexDraft())),Pt.addEventListener("input",jt=>n.onFillHexDraftChange(jt.currentTarget.value)),Lt.addEventListener("input",jt=>n.onFillOpacityChange(jt.currentTarget.value)),Bs(hv,Gt,()=>({
                    getValue:()=>n.fillColor().alpha,onChange:jt=>{
                      n.onFillOpacityChange(Math.round(jt).toString())
                    },min:0,max:100
                  })),tn(()=>Mt.value=n.fillColor().hex),tn(()=>Pt.value=n.fillHexDraft()),tn(()=>Lt.value=`${n.fillColor().alpha}`),cn
                })()
              },children:cn=>{
                let Mt,Pt;
                return(()=>{
                  var ut=l2f(),ot=ut.firstChild,Lt=ot.nextSibling,Gt=Lt.nextSibling,jt=Gt.firstChild;
                  ut.addEventListener("keydown",en=>{
                    (en.key==="Enter"||en.key===" ")&&(en.preventDefault(),en.stopPropagation(),j(en))
                  }),ut.addEventListener("click",en=>{
                    en.stopPropagation(),j(en)
                  });
                  var hn=Mt;
                  typeof hn=="function"?Bs(hn,ut):Mt=ut,ge(Lt,cn),Yd(Gt,"mouseleave",i),Gt.addEventListener("mouseenter",en=>{
                    en.stopPropagation(),N(Pt,"Unlink")
                  }),Gt.addEventListener("click",en=>{
                    en.stopPropagation(),n.onUnlinkVariable()
                  });
                  var on=Pt;
                  return typeof on=="function"?Bs(on,Gt):Pt=Gt,tn(en=>{
                    var gt=U1(O().hex,O().alpha),At=Qt.asClassName(Be.unlink);
                    return gt!==en.e&&((en.e=gt)!=null?ot.style.setProperty("--css-inspector-token-color",gt):ot.style.removeProperty("--css-inspector-token-color")),At!==en.t&&Un(jt,en.t=At),en
                  },{
                    e:void 0,t:void 0
                  }),ut
                })()
              }
            }),Bt),Yd(Bt,"mouseleave",i),Bt.addEventListener("mouseenter",()=>N(o,"Remove fill")),Bt.addEventListener("click",cn=>{
              cn.stopPropagation(),n.onClearFill()
            });
            var Ot=o;
            return typeof Ot=="function"?Bs(Ot,Bt):o=Bt,tn(()=>Un(Jt,Qt.asClassName(Be.chromeMinimize))),St
          }
        }),null),ge(sn,K(Xe,{
          get when(){
            return Ui(()=>n.gradientType()==="linear")()&&n.gradientConfig()
          },children:St=>(()=>{
            var Bt=Uvu(),Jt=Bt.firstChild,Ot=Jt.firstChild,cn=Ot.firstChild,Mt=Jt.nextSibling,Pt=Mt.firstChild,ut=Pt.firstChild,ot=ut.nextSibling,Lt=Pt.nextSibling,Gt=Lt.firstChild,jt=Gt.firstChild,hn=Gt.nextSibling,on=hn.firstChild,en=Mt.nextSibling,gt=en.firstChild,At=gt.firstChild,Tt=At.nextSibling,ze=Tt.firstChild;
            ge(Ot,K(ia,{
              get each(){
                return St().stops
              },children:(kt,xt)=>(()=>{
                var un=_1a();
                return un.addEventListener("mousedown",nn=>{
                  nn.preventDefault(),C(xt());
                  const Dn=nn.currentTarget.parentElement;
                  if(!Dn)return;
                  const Bn=Dn.getBoundingClientRect(),Vn=hi=>{
                    const Si=hi.clientX-Bn.left,Xi=Math.max(0,Math.min(100,Si/Bn.width*100));
                    he(xt(),Math.round(Xi))
                  },Xn=()=>{
                    document.removeEventListener("mousemove",Vn),document.removeEventListener("mouseup",Xn)
                  };
                  document.addEventListener("mousemove",Vn),document.addEventListener("mouseup",Xn)
                }),un.addEventListener("click",()=>C(xt())),tn(nn=>{
                  var Dn=`css-gradient-stop-handle ${w()===xt()?"selected":""}`,Bn=`${kt.position}%`,Vn=U1(kt.color.hex,kt.color.alpha);
                  return Dn!==nn.e&&Un(un,nn.e=Dn),Bn!==nn.t&&((nn.t=Bn)!=null?un.style.setProperty("left",Bn):un.style.removeProperty("left")),Vn!==nn.a&&((nn.a=Vn)!=null?un.style.setProperty("background-color",Vn):un.style.removeProperty("background-color")),nn
                },{
                  e:void 0,t:void 0,a:void 0
                }),un
              })()
            }),null),ut.addEventListener("input",kt=>{
              const xt=parseFloat(kt.currentTarget.value);
              Number.isNaN(xt)||pe(Math.round((xt%360+360)%360*100)/100)
            }),Bs(hv,ot,()=>({
              getValue:()=>Math.round(St().angle*100)/100,onChange:kt=>{
                pe(Math.round((kt%360+360)%360*100)/100)
              },step:1
            })),Gt.addEventListener("click",()=>{
              const kt=[...St().stops].map(xt=>({
                ...xt,position:100-xt.position
              })).reverse();
              n.onGradientConfigChange({
                ...St(),stops:kt
              })
            }),Yd(hn,"mouseleave",i),hn.addEventListener("mouseenter",()=>N(o,"Remove fill")),hn.addEventListener("click",kt=>{
              kt.stopPropagation(),n.onClearFill()
            });
            var Yt=o;
            return typeof Yt=="function"?Bs(Yt,hn):o=hn,Tt.addEventListener("click",fe),ge(en,K(ia,{
              get each(){
                return R()
              },children:({
                stop:kt,originalIndex:xt
              })=>(()=>{
                var un=C1a(),nn=un.firstChild,Dn=nn.firstChild,Bn=Dn.nextSibling,Vn=nn.nextSibling,Xn=Vn.firstChild;
                return un.addEventListener("click",()=>C(xt)),ge(un,K(Fvu,{
                  get committedPosition(){
                    return kt.position
                  },onCommit:hi=>he(xt,hi),onDragStart:()=>I(!0),onDragEnd:()=>I(!1)
                }),nn),Dn.addEventListener("change",hi=>le(xt,hi.currentTarget.value)),ge(nn,K(Mvu,{
                  get committedHex(){
                    return kt.color.hex
                  },onCommit:hi=>le(xt,hi)
                }),Bn),ge(nn,K(Ovu,{
                  get committedOpacity(){
                    return kt.color.alpha
                  },onCommit:hi=>be(xt,hi),onDragStart:()=>I(!0),onDragEnd:()=>I(!1)
                }),null),Vn.addEventListener("click",hi=>{
                  hi.stopPropagation(),ke(xt)
                }),tn(hi=>{
                  var Si=`css-gradient-stop-row ${w()===xt?"selected":""}`,Xi=St().stops.length<=2,Ji=Qt.asClassName(Be.chromeMinimize);
                  return Si!==hi.e&&Un(un,hi.e=Si),Xi!==hi.t&&(Vn.disabled=hi.t=Xi),Ji!==hi.a&&Un(Xn,hi.a=Ji),hi
                },{
                  e:void 0,t:void 0,a:void 0
                }),tn(()=>Dn.value=kt.color.hex),un
              })()
            }),null),tn(kt=>{
              var xt=De(),un=De(),nn=Qt.asClassName(Be.arrowSwap),Dn=Qt.asClassName(Be.trash),Bn=Qt.asClassName(Be.add);
              return kt.e=La(Ot,xt,kt.e),kt.t=La(cn,un,kt.t),nn!==kt.a&&Un(jt,kt.a=nn),Dn!==kt.o&&Un(on,kt.o=Dn),Bn!==kt.i&&Un(ze,kt.i=Bn),kt
            },{
              e:void 0,t:void 0,a:void 0,o:void 0,i:void 0
            }),tn(()=>ut.value=Math.round(St().angle*100)/100),Bt
          })()
        }),null),ge(sn,K(Xe,{
          get when(){
            return Ui(()=>n.gradientType()==="radial")()&&n.gradientConfig()
          },children:St=>(()=>{
            var Bt=u2f(),Jt=Bt.firstChild,Ot=Jt.firstChild,cn=Ot.firstChild,Mt=Jt.nextSibling,Pt=Mt.firstChild,ut=Pt.firstChild,ot=ut.nextSibling,Lt=Pt.nextSibling,Gt=Lt.firstChild,jt=Gt.firstChild,hn=Gt.nextSibling,on=hn.firstChild,en=Mt.nextSibling,gt=en.firstChild,At=gt.firstChild,Tt=At.nextSibling,ze=Tt.firstChild;
            ge(Ot,K(ia,{
              get each(){
                return St().stops
              },children:(kt,xt)=>(()=>{
                var un=_1a();
                return un.addEventListener("mousedown",nn=>{
                  nn.preventDefault(),C(xt());
                  const Dn=nn.currentTarget.parentElement;
                  if(!Dn)return;
                  const Bn=Dn.getBoundingClientRect(),Vn=hi=>{
                    const Si=hi.clientX-Bn.left,Xi=Math.max(0,Math.min(100,Si/Bn.width*100));
                    he(xt(),Math.round(Xi))
                  },Xn=()=>{
                    document.removeEventListener("mousemove",Vn),document.removeEventListener("mouseup",Xn)
                  };
                  document.addEventListener("mousemove",Vn),document.addEventListener("mouseup",Xn)
                }),un.addEventListener("click",()=>C(xt())),tn(nn=>{
                  var Dn=`css-gradient-stop-handle ${w()===xt()?"selected":""}`,Bn=`${kt.position}%`,Vn=U1(kt.color.hex,kt.color.alpha);
                  return Dn!==nn.e&&Un(un,nn.e=Dn),Bn!==nn.t&&((nn.t=Bn)!=null?un.style.setProperty("left",Bn):un.style.removeProperty("left")),Vn!==nn.a&&((nn.a=Vn)!=null?un.style.setProperty("background-color",Vn):un.style.removeProperty("background-color")),nn
                },{
                  e:void 0,t:void 0,a:void 0
                }),un
              })()
            }),null),ut.addEventListener("click",()=>Se("circle")),ot.addEventListener("click",()=>Se("ellipse")),Gt.addEventListener("click",()=>{
              const kt=[...St().stops].map(xt=>({
                ...xt,position:100-xt.position
              })).reverse();
              n.onGradientConfigChange({
                ...St(),stops:kt
              })
            }),Yd(hn,"mouseleave",i),hn.addEventListener("mouseenter",()=>N(o,"Remove fill")),hn.addEventListener("click",kt=>{
              kt.stopPropagation(),n.onClearFill()
            });
            var Yt=o;
            return typeof Yt=="function"?Bs(Yt,hn):o=hn,Tt.addEventListener("click",fe),ge(en,K(ia,{
              get each(){
                return R()
              },children:({
                stop:kt,originalIndex:xt
              })=>(()=>{
                var un=C1a(),nn=un.firstChild,Dn=nn.firstChild,Bn=Dn.nextSibling,Vn=nn.nextSibling,Xn=Vn.firstChild;
                return un.addEventListener("click",()=>C(xt)),ge(un,K(Fvu,{
                  get committedPosition(){
                    return kt.position
                  },onCommit:hi=>he(xt,hi),onDragStart:()=>I(!0),onDragEnd:()=>I(!1)
                }),nn),Dn.addEventListener("change",hi=>le(xt,hi.currentTarget.value)),ge(nn,K(Mvu,{
                  get committedHex(){
                    return kt.color.hex
                  },onCommit:hi=>le(xt,hi)
                }),Bn),ge(nn,K(Ovu,{
                  get committedOpacity(){
                    return kt.color.alpha
                  },onCommit:hi=>be(xt,hi),onDragStart:()=>I(!0),onDragEnd:()=>I(!1)
                }),null),Vn.addEventListener("click",hi=>{
                  hi.stopPropagation(),ke(xt)
                }),tn(hi=>{
                  var Si=`css-gradient-stop-row ${w()===xt?"selected":""}`,Xi=St().stops.length<=2,Ji=Qt.asClassName(Be.chromeMinimize);
                  return Si!==hi.e&&Un(un,hi.e=Si),Xi!==hi.t&&(Vn.disabled=hi.t=Xi),Ji!==hi.a&&Un(Xn,hi.a=Ji),hi
                },{
                  e:void 0,t:void 0,a:void 0
                }),tn(()=>Dn.value=kt.color.hex),un
              })()
            }),null),tn(kt=>{
              var xt=De(),un=De(),nn=`css-segmented-button ${St().shape==="circle"?"active":""}`,Dn=`css-segmented-button ${St().shape==="ellipse"?"active":""}`,Bn=Qt.asClassName(Be.arrowSwap),Vn=Qt.asClassName(Be.trash),Xn=Qt.asClassName(Be.add);
              return kt.e=La(Ot,xt,kt.e),kt.t=La(cn,un,kt.t),nn!==kt.a&&Un(ut,kt.a=nn),Dn!==kt.o&&Un(ot,kt.o=Dn),Bn!==kt.i&&Un(jt,kt.i=Bn),Vn!==kt.n&&Un(on,kt.n=Vn),Xn!==kt.s&&Un(ze,kt.s=Xn),kt
            },{
              e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0
            }),Bt
          })()
        }),null),ge(sn,K(Xe,{
          get when(){
            return Ui(()=>n.gradientType()==="conic")()&&n.gradientConfig()
          },children:St=>(()=>{
            var Bt=Uvu(),Jt=Bt.firstChild,Ot=Jt.firstChild,cn=Ot.firstChild,Mt=Jt.nextSibling,Pt=Mt.firstChild,ut=Pt.firstChild,ot=ut.nextSibling,Lt=Pt.nextSibling,Gt=Lt.firstChild,jt=Gt.firstChild,hn=Gt.nextSibling,on=hn.firstChild,en=Mt.nextSibling,gt=en.firstChild,At=gt.firstChild,Tt=At.nextSibling,ze=Tt.firstChild;
            ge(Ot,K(ia,{
              get each(){
                return St().stops
              },children:(kt,xt)=>(()=>{
                var un=_1a();
                return un.addEventListener("mousedown",nn=>{
                  nn.preventDefault(),C(xt());
                  const Dn=nn.currentTarget.parentElement;
                  if(!Dn)return;
                  const Bn=Dn.getBoundingClientRect(),Vn=hi=>{
                    const Si=hi.clientX-Bn.left,Xi=Math.max(0,Math.min(100,Si/Bn.width*100));
                    he(xt(),Math.round(Xi))
                  },Xn=()=>{
                    document.removeEventListener("mousemove",Vn),document.removeEventListener("mouseup",Xn)
                  };
                  document.addEventListener("mousemove",Vn),document.addEventListener("mouseup",Xn)
                }),un.addEventListener("click",()=>C(xt())),tn(nn=>{
                  var Dn=`css-gradient-stop-handle ${w()===xt()?"selected":""}`,Bn=`${kt.position}%`,Vn=U1(kt.color.hex,kt.color.alpha);
                  return Dn!==nn.e&&Un(un,nn.e=Dn),Bn!==nn.t&&((nn.t=Bn)!=null?un.style.setProperty("left",Bn):un.style.removeProperty("left")),Vn!==nn.a&&((nn.a=Vn)!=null?un.style.setProperty("background-color",Vn):un.style.removeProperty("background-color")),nn
                },{
                  e:void 0,t:void 0,a:void 0
                }),un
              })()
            }),null),ut.addEventListener("input",kt=>{
              const xt=parseFloat(kt.currentTarget.value);
              Number.isNaN(xt)||Fe(Math.round((xt%360+360)%360*100)/100)
            }),Bs(hv,ot,()=>({
              getValue:()=>Math.round(St().angle*100)/100,onChange:kt=>{
                Fe(Math.round((kt%360+360)%360*100)/100)
              },step:1
            })),Gt.addEventListener("click",()=>{
              const kt=[...St().stops].map(xt=>({
                ...xt,position:100-xt.position
              })).reverse();
              n.onGradientConfigChange({
                ...St(),stops:kt
              })
            }),Yd(hn,"mouseleave",i),hn.addEventListener("mouseenter",()=>N(o,"Remove fill")),hn.addEventListener("click",kt=>{
              kt.stopPropagation(),n.onClearFill()
            });
            var Yt=o;
            return typeof Yt=="function"?Bs(Yt,hn):o=hn,Tt.addEventListener("click",fe),ge(en,K(ia,{
              get each(){
                return R()
              },children:({
                stop:kt,originalIndex:xt
              })=>(()=>{
                var un=C1a(),nn=un.firstChild,Dn=nn.firstChild,Bn=Dn.nextSibling,Vn=nn.nextSibling,Xn=Vn.firstChild;
                return un.addEventListener("click",()=>C(xt)),ge(un,K(Fvu,{
                  get committedPosition(){
                    return kt.position
                  },onCommit:hi=>he(xt,hi),onDragStart:()=>I(!0),onDragEnd:()=>I(!1)
                }),nn),Dn.addEventListener("change",hi=>le(xt,hi.currentTarget.value)),ge(nn,K(Mvu,{
                  get committedHex(){
                    return kt.color.hex
                  },onCommit:hi=>le(xt,hi)
                }),Bn),ge(nn,K(Ovu,{
                  get committedOpacity(){
                    return kt.color.alpha
                  },onCommit:hi=>be(xt,hi),onDragStart:()=>I(!0),onDragEnd:()=>I(!1)
                }),null),Vn.addEventListener("click",hi=>{
                  hi.stopPropagation(),ke(xt)
                }),tn(hi=>{
                  var Si=`css-gradient-stop-row ${w()===xt?"selected":""}`,Xi=St().stops.length<=2,Ji=Qt.asClassName(Be.chromeMinimize);
                  return Si!==hi.e&&Un(un,hi.e=Si),Xi!==hi.t&&(Vn.disabled=hi.t=Xi),Ji!==hi.a&&Un(Xn,hi.a=Ji),hi
                },{
                  e:void 0,t:void 0,a:void 0
                }),tn(()=>Dn.value=kt.color.hex),un
              })()
            }),null),tn(kt=>{
              var xt=De(),un=De(),nn=Qt.asClassName(Be.arrowSwap),Dn=Qt.asClassName(Be.trash),Bn=Qt.asClassName(Be.add);
              return kt.e=La(Ot,xt,kt.e),kt.t=La(cn,un,kt.t),nn!==kt.a&&Un(jt,kt.a=nn),Dn!==kt.o&&Un(on,kt.o=Dn),Bn!==kt.i&&Un(ze,kt.i=Bn),kt
            },{
              e:void 0,t:void 0,a:void 0,o:void 0,i:void 0
            }),tn(()=>ut.value=Math.round(St().angle*100)/100),Bt
          })()
        }),null),tn(St=>{
          var Bt=p()?"true":"false",Jt=Qt.asClassName(Be.chevronDown);
          return Bt!==St.e&&Zr(Ft,"aria-expanded",St.e=Bt),Jt!==St.t&&Un(bn,St.t=Jt),St
        },{
          e:void 0,t:void 0
        }),sn
      }
    }), null), tn(sn=>{
      var Vt=`css-section-header ${n.hasFill()?"":"clickable"}`,Ft=n.hasFill()?void 0:0,Xt=n.hasFill()?void 0:"button",bn=u()?"true":"false",St=Qt.asClassName(Be.symbolColor),Bt=n.hasFill(),Jt=Qt.asClassName(Be.add);
      return Vt!==sn.e&&Un(Le,sn.e=Vt),Ft!==sn.t&&Zr(Le,"tabindex",sn.t=Ft),Xt!==sn.a&&Zr(Le,"role",sn.a=Xt),bn!==sn.o&&Zr(it,"aria-expanded",sn.o=bn),St!==sn.i&&Un(bt,sn.i=St),Bt!==sn.n&&(Nt.disabled=sn.n=Bt),Jt!==sn.s&&Un(ft,sn.s=Jt),sn
    }, {
      e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0
    }), Ge
  })()
}
var t2f, n2f, i2f, r2f, s2f, o2f, a2f, c2f, l2f, Uvu, _1a, C1a, u2f, hcy=