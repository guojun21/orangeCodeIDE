// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/ReactComponentInfo.js
// Offset: 32064846 (bundle byte offset)
// Size: 28255 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), qi(), Jr(), aCi(), j2f=qe("<button type=button class=css-react-prop-expand><i>"), z2f=qe("<span class=css-react-child-props-count>(<!> props)"), V2f=qe("<div class=css-react-child-props>"), K2f=qe("<div class=css-react-child-entry><div class=css-react-child-row><span class=css-react-child-name>&lt;<!> />"), Y2f=qe("<span class=css-react-empty-placeholder>No props"), Z2f=qe("<i>"), X2f=qe("<div class=css-react-prop-select-wrapper><div class=css-react-prop-select-container><select class=css-react-prop-select><option value=true>true</option><option value=false>false</option></select><span class=css-react-prop-select-adornment><i>"), eFf=qe('<div class="css-input-group css-react-prop-input-group"><div class=css-input-field><input class=css-number-input>'), tFf=qe('<div class="css-react-prop-value css-react-prop-value--function">'), nFf=qe("<div class=css-react-prop-children>"), iFf=qe('<div class=css-react-prop-field><div class=css-react-prop-row><div class="css-control-block css-react-prop-control"><div><span class=css-control-label>'), rFf=qe("<span>"), sFf=qe("<span class=css-react-empty-placeholder>Empty"), oFf=qe('<div class="css-section-body css-react-props-list">'), aFf=qe('<div class="css-inspector-section css-react-section"><div class=css-section-header><div class=css-section-title>Properties'), cFf=qe("<div class=css-react-truncated-notice>Showing first 100 children (max depth: 10)"), lFf=qe('<div class="css-inspector-section css-react-section css-react-children-section"><div class=css-section-header><div class=css-section-title>Children (<!>)</div></div><div class="css-section-body css-react-children-list">'), uFf=qe("<div class=css-react-no-props>No props"), dFf=10, k1a=100, hFf=20
}
});
function Yvu(n){
  const[e, t]=lt(n.committedHex.replace("#", "")), [i, r]=lt(!1);
  An(()=>{
    const o=n.committedHex;
    i()||t(o.replace("#", ""))
  });
  const s=()=>{
    i()&&(n.onCommit(e()), r(!1))
  };
  return(()=>{
    var o=mFf();
    return o.addEventListener("keydown", a=>{
      a.key==="Enter"&&s()
    }), o.addEventListener("blur", ()=>s()), o.addEventListener("input", a=>{
      t(a.currentTarget.value),r(!0)
    }), tn(()=>o.value=e()), o
  })()
}
function Zvu(n){
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
    var u=pFf(), d=u.firstChild, m=d.nextSibling;
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
function Xvu(n){
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
    var u=gFf(), d=u.firstChild, m=d.nextSibling;
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
function kcy(n){
  const e=hv, {
    showHover:t, hideHover:i
  }
  =ik(0);
  let r, s, o, a, l, u;
  const[d, m]=lt(""), [p, g, f]=RC(null), [A, w, C]=RC(null);
  let x;
  const[I, B]=lt(null), [R, N]=lt(!1);
  let M=[];
  const O=xe(()=>{
    const _t=n.gradientConfig();
    if(!_t)return M=[], [];
    const It=_t.stops;
    if(R()&&M.length===It.length)return M.map(Vt=>({
      stop:It[Vt],originalIndex:Vt
    }));
    const sn=It.map((Vt, Ft)=>({
      stop:Vt,originalIndex:Ft
    })).sort((Vt, Ft)=>Vt.stop.position-Ft.stop.position);
    return M=sn.map(Vt=>Vt.originalIndex), sn
  }), $=(_t, It)=>{
    if(!_t)return;
    const sn=_t.getBoundingClientRect();
    t({
      content:It,target:{
        targetElements:[_t],x:sn.left+sn.width/2,y:sn.bottom+4
      },position:{
        hoverPosition:2
      },appearance:{
        compact:!0
      },persistence:{
        hideOnHover:!0
      }
    })
  }, H=xe(()=>n.cssVariableColorOptions().length>0), W=xe(()=>{
    const _t=n.linkedVariable();
    return _t?n.cssVariableColorOptions().find(Vt=>Vt.variable===_t)?.parsed??n.strokeColor():n.strokeColor()
  }), z=xe(()=>y1a.find(It=>It.value===n.selectedStrokeSide())?.label??"All"), Y=xe(()=>y1a.find(It=>It.value===n.selectedStrokeSide())?.codicon??Be.borderAll), j=()=>{
    if(n.onClearPreview?.(), !p()){
      m("");
      return
    }
    f(), m(""), n.onMenuClose?.();
    const _t=window.document.activeElement;
    (!x||!_t||!x.contains(_t))&&n.onInteractionToggle?.(!1)
  }, X=()=>{
    A()&&(C(), n.onMenuClose?.())
  }, ee=xe(()=>{
    const _t=n.cssVariableColorOptions(), It=d().trim();
    if(!_t.length)return[{
      type:"message",message:n.allCssVariables().length>0?"No parseable color tokens found":"No color tokens detected"
    }
    ];
    const sn=St=>{
      const Bt=n.linkedVariable();
      return[{
        type:"items",items:St.map(({
          option:Jt,labelMatch:Ot,subTitleMatch:cn
        })=>({
          id:Jt.variable,title:Jt.displayName??Jt.variable,subTitle:Jt.value,labelMatch:Ot,subTitleMatch:cn,showType:Bt===Jt.variable?"check":void 0,secondaryIcon:()=>(()=>{
            var Mt=fFf();
            return tn(Pt=>(Pt=U1(Jt.parsed.hex,Jt.parsed.alpha))!=null?Mt.style.setProperty("--css-inspector-token-color",Pt):Mt.style.removeProperty("--css-inspector-token-color")),Mt
          })(),onMouseEnter:()=>{
            n.onPreviewColor?.(Jt.parsed.hex,Jt.parsed.alpha)
          },onMouseLeave:()=>{
            n.onRestorePreview?.()
          },onMouseUp:()=>{
            const Mt=n.committedStrokeValue?.();
            n.onCommitPreview?.(),n.hasStroke()||n.onAddStroke(),n.onStrokeHexCommit(Jt.parsed.hex,{
              alpha:Jt.parsed.alpha,variable:Jt.variable,explicitOriginalValue:Mt??void 0
            }),j()
          }
        }))
      }
      ]
    };
    if(!It)return sn(_t.map(St=>({
      option:St
    })));
    const Vt=It.toLowerCase(), Ft=o8(Vt), Xt=Object.create(null), bn=_t.map(St=>{
      const{
        score:Bt,labelMatch:Jt,descriptionMatch:Ot
      }
      =Mq({
        label:St.displayName??St.variable,description:St.value??St.parsed.hex
      },Ft,!0,DW,Xt);
      return{
        option:St,score:Bt,labelMatch:Jt,subTitleMatch:Ot
      }
    }).filter(St=>St.score>0).sort((St, Bt)=>Bt.score-St.score);
    return bn.length?sn(bn.map(({
      option:St,labelMatch:Bt,subTitleMatch:Jt
    })=>({
      option:St,labelMatch:Bt,subTitleMatch:Jt
    }))):[{
      type:"message",message:"No matching tokens"
    }
    ]
  }), re=_t=>{
    if(_t.stopPropagation(), p()){
      j();
      return
    }
    const It=_t.currentTarget.getBoundingClientRect();
    m(""), g({
      x:It.right+4,y:It.bottom+4
    }), n.onMenuOpen?.(), n.onInteractionToggle?.(!0)
  }, ne=_t=>{
    if(_t.stopPropagation(), A()){
      X();
      return
    }
    const It=_t.currentTarget.getBoundingClientRect();
    w({
      x:It.left,y:It.bottom+4
    }), n.onMenuOpen?.(), n.onInteractionToggle?.(!0)
  }, pe=()=>{
    n.onInteractionToggle?.(!0)
  }, le=_t=>{
    const It=_t.relatedTarget;
    It&&_t.currentTarget.contains(It)||p()||A()||n.onInteractionToggle?.(!1)
  }, [he, be, fe]=RC(null), ke=(_t=!1)=>{
    fe(), _t&&n.onStrokeMenuClose()
  }, Se=_t=>{
    if(_t.stopPropagation(), he()){
      ke(!0);
      return
    }
    j();
    const It=_t.currentTarget.getBoundingClientRect();
    be({
      x:It.right+4,y:It.bottom+4
    }), n.onStrokeMenuOpen()
  };
  An(_t=>{
    const It=n.strokeMenuOpen();
    return _t&&!It&&fe(), It
  });
  const Fe=xe(()=>[{
    type:"items", items:y1a.map(_t=>({
      id:_t.value,title:_t.label,icon:_t.codicon,showType:n.selectedStrokeSide()===_t.value?"check":void 0,onClick:()=>{
        n.onSelectStrokeSide(_t.value),ke(!0)
      }
    }))
  }
  ]), De=_t=>{
    n.onGradientTypeChange(_t), _t==="linear"&&!n.gradientConfig()?n.onGradientConfigChange(Pfn({
      startColor:n.strokeColor()
    })):_t==="radial"&&!n.gradientConfig()?n.onGradientConfigChange(Lfn({
      startColor:n.strokeColor()
    })):_t==="conic"&&!n.gradientConfig()&&n.onGradientConfigChange(Nfn({
      startColor:n.strokeColor()
    })), X()
  }, Pe=_t=>{
    const It=n.gradientConfig();
    if(!It||It.type!=="linear")return;
    const sn={
      ...It,angle:_t
    };
    n.onGradientConfigChange(sn)
  }, Ne=(_t, It)=>{
    const sn=n.gradientConfig();
    if(!sn)return;
    const Vt=[...sn.stops], Ft=npe(It);
    Vt[_t]={
      ...Vt[_t],color:{
        ...Vt[_t].color,hex:Ft
      }
    }, n.onGradientConfigChange({
      ...sn,stops:Vt
    })
  }, Oe=(_t, It)=>{
    const sn=n.gradientConfig();
    if(!sn)return;
    const Vt=[...sn.stops], Ft=Math.max(0, Math.min(100, It));
    Vt[_t]={
      ...Vt[_t],position:Ft
    }, n.onGradientConfigChange({
      ...sn,stops:Vt
    })
  }, Ge=(_t, It)=>{
    const sn=n.gradientConfig();
    if(!sn)return;
    const Vt=[...sn.stops], Ft=Math.max(0, Math.min(100, It));
    Vt[_t]={
      ...Vt[_t],color:{
        ...Vt[_t].color,alpha:Ft
      }
    }, n.onGradientConfigChange({
      ...sn,stops:Vt
    })
  }, Le=()=>{
    const _t=n.gradientConfig();
    if(!_t)return;
    const It=_t.stops;
    let sn=50;
    if(It.length>=2){
      let Xt=0,bn=0;
      for(let St=0;
      St<It.length-1;
      St++){
        const Bt=It[St+1].position-It[St].position;
        Bt>Xt&&(Xt=Bt,bn=It[St].position)
      }
      sn=bn+Xt/2
    }
    const Vt={
      color:{
        hex:"#888888",alpha:100
      },position:sn
    }, Ft=[...It, Vt].sort((Xt, bn)=>Xt.position-bn.position);
    n.onGradientConfigChange({
      ..._t,stops:Ft
    })
  }, We=_t=>{
    const It=n.gradientConfig();
    if(!It||It.stops.length<=2)return;
    const sn=It.stops.filter((Vt, Ft)=>Ft!==_t);
    n.onGradientConfigChange({
      ...It,stops:sn
    })
  }, tt=_t=>{
    const It=n.gradientConfig();
    if(!It||It.type!=="radial")return;
    const sn={
      ...It,shape:_t
    };
    n.onGradientConfigChange(sn)
  }, it=_t=>{
    const It=n.gradientConfig();
    if(!It||It.type!=="conic")return;
    const sn={
      ...It,angle:_t
    };
    n.onGradientConfigChange(sn)
  }, bt=xe(()=>{
    const _t=n.gradientConfig();
    return _t?{
      background:_X(_t)
    }
    :{
      
    }
  }), Nt=xe(()=>[{
    type:"items", items:j1t.map(_t=>({
      id:_t.value,title:_t.label,showType:n.gradientType()===_t.value?"check":void 0,onClick:()=>De(_t.value),closeMenuOnClick:!0
    }))
  }
  ]), ft=xe(()=>{
    const _t=n.gradientType();
    return j1t.find(sn=>sn.value===_t)?.label??"Solid"
  });
  return(()=>{
    var _t=yFf(), It=_t.firstChild, sn=It.firstChild, Vt=sn.nextSibling, Ft=Vt.firstChild, Xt=Ft.firstChild, bn=Ft.nextSibling, St=bn.firstChild;
    Bs(Ot=>{
      x=Ot??void 0
    }, _t), _t.addEventListener("focusout", le), _t.addEventListener("focusin", pe), It.addEventListener("click", Ot=>{
      n.hasStroke()||(Ot.stopPropagation(),n.onAddStroke())
    }), Yd(Ft, "mouseleave", i), Ft.addEventListener("mouseenter", ()=>{
      const Ot=H()?"Choose from available color tokens":"No color tokens detected";
      $(r,Ot)
    }), Ft.addEventListener("click", re);
    var Bt=r;
    typeof Bt=="function"?Bs(Bt, Ft):r=Ft, Yd(bn, "mouseleave", i), bn.addEventListener("mouseenter", ()=>$(s, "Add stroke")), bn.addEventListener("click", Ot=>{
      Ot.stopPropagation(),n.onAddStroke()
    });
    var Jt=s;
    return typeof Jt=="function"?Bs(Jt, bn):s=bn, ge(_t, K(Xe, {
      get when(){
        return p()
      },children:Ot=>K(LT,{
        get position(){
          return Ot()
        },anchor:"top-right",get sections(){
          return ee()
        },width:280,maxHeight:280,get shouldShowInput(){
          return H()
        },inputPlaceholder:"Search tokens",get searchTerm(){
          return d()
        },onSearchTermChange:m,onClose:j,scrollPaddingOptions:{
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
    }), null), ge(_t, K(Xe, {
      get when(){
        return n.hasStroke()
      },get children(){
        var Ot=AFf(),cn=Ot.firstChild,Mt=cn.firstChild,Pt=Mt.firstChild,ut=Pt.nextSibling;
        return Mt.addEventListener("click",ne),ge(Pt,ft),ge(cn,K(Xe,{
          get when(){
            return A()
          },children:ot=>K(LT,{
            get position(){
              return ot()
            },anchor:"top-left",get sections(){
              return Nt()
            },width:120,maxHeight:200,onClose:X,get overflowRoot(){
              return n.overflowRoot
            }
          })
        }),null),ge(Ot,K(Xe,{
          get when(){
            return n.gradientType()==="solid"
          },get children(){
            return[(()=>{
              var ot=bFf(),Lt=ot.firstChild,Gt=Lt.firstChild,jt=Gt.firstChild,hn=Gt.nextSibling,on=hn.firstChild;
              ge(ot,K(Xe,{
                get when(){
                  return n.linkedVariable()
                },get fallback(){
                  return(()=>{
                    var At=wFf(),Tt=At.firstChild,ze=Tt.nextSibling,Yt=ze.nextSibling,kt=Yt.nextSibling,xt=kt.firstChild,un=xt.nextSibling;
                    return Tt.addEventListener("input",nn=>n.onStrokeHexCommit(nn.currentTarget.value)),ze.addEventListener("keydown",nn=>{
                      nn.key==="Enter"&&n.onStrokeHexCommit(n.strokeHexDraft())
                    }),ze.addEventListener("blur",()=>n.onStrokeHexCommit(n.strokeHexDraft())),ze.addEventListener("input",nn=>n.onStrokeHexDraftChange(nn.currentTarget.value)),xt.addEventListener("input",nn=>n.onStrokeOpacityChange(nn.currentTarget.value)),Bs(hv,un,()=>({
                      getValue:()=>n.strokeColor().alpha,onChange:nn=>{
                        n.onStrokeOpacityChange(Math.round(nn).toString())
                      },min:0,max:100
                    })),tn(()=>Tt.value=n.strokeColor().hex),tn(()=>ze.value=n.strokeHexDraft()),tn(()=>xt.value=`${n.strokeColor().alpha}`),At
                  })()
                },children:At=>{
                  let Tt,ze;
                  return(()=>{
                    var Yt=_Ff(),kt=Yt.firstChild,xt=kt.nextSibling,un=xt.nextSibling,nn=un.firstChild;
                    Yt.addEventListener("keydown",Vn=>{
                      (Vn.key==="Enter"||Vn.key===" ")&&(Vn.preventDefault(),Vn.stopPropagation(),re(Vn))
                    }),Yt.addEventListener("click",Vn=>{
                      Vn.stopPropagation(),re(Vn)
                    });
                    var Dn=Tt;
                    typeof Dn=="function"?Bs(Dn,Yt):Tt=Yt,ge(xt,At),Yd(un,"mouseleave",i),un.addEventListener("mouseenter",Vn=>{
                      Vn.stopPropagation(),$(ze,"Unlink")
                    }),un.addEventListener("click",Vn=>{
                      Vn.stopPropagation(),n.onUnlinkVariable()
                    });
                    var Bn=ze;
                    return typeof Bn=="function"?Bs(Bn,un):ze=un,tn(Vn=>{
                      var Xn=U1(W().hex,W().alpha),hi=Qt.asClassName(Be.unlink);
                      return Xn!==Vn.e&&((Vn.e=Xn)!=null?kt.style.setProperty("--css-inspector-token-color",Xn):kt.style.removeProperty("--css-inspector-token-color")),hi!==Vn.t&&Un(nn,Vn.t=hi),Vn
                    },{
                      e:void 0,t:void 0
                    }),Yt
                  })()
                }
              }),Lt),Yd(Gt,"mouseleave",i),Gt.addEventListener("mouseenter",()=>{
                const At=n.strokeVisible()?"Hide stroke":"Show stroke";
                $(o,At)
              }),Gt.addEventListener("click",At=>{
                At.stopPropagation(),n.onToggleStrokeVisibility()
              });
              var en=o;
              typeof en=="function"?Bs(en,Gt):o=Gt,Yd(hn,"mouseleave",i),hn.addEventListener("mouseenter",()=>$(a,"Remove stroke")),hn.addEventListener("click",At=>{
                At.stopPropagation(),n.onClearStroke()
              });
              var gt=a;
              return typeof gt=="function"?Bs(gt,hn):a=hn,tn(At=>{
                var Tt=`css-stroke-action ${n.strokeVisible()?"active":""}`,ze=Qt.asClassName(n.strokeVisible()?Be.eye:Be.eyeClosed),Yt=Qt.asClassName(Be.chromeMinimize);
                return Tt!==At.e&&Un(Gt,At.e=Tt),ze!==At.t&&Un(jt,At.t=ze),Yt!==At.a&&Un(on,At.a=Yt),At
              },{
                e:void 0,t:void 0,a:void 0
              }),ot
            })(),(()=>{
              var ot=vFf(),Lt=ot.firstChild,Gt=Lt.firstChild,jt=Gt.nextSibling,hn=jt.firstChild,on=hn.firstChild,en=hn.nextSibling,gt=Lt.nextSibling,At=gt.firstChild,Tt=At.firstChild;
              Bs(hv,hn,()=>({
                getValue:()=>Math.max(0,Math.round(n.strokeWeightValue())),onChange:kt=>{
                  n.onStrokeWeightChange(Math.max(0,Math.round(kt)).toString())
                },min:0
              })),Yd(hn,"mouseleave",i),hn.addEventListener("mouseenter",()=>$(l,"Drag to adjust stroke weight"));
              var ze=l;
              typeof ze=="function"?Bs(ze,hn):l=hn,en.addEventListener("input",kt=>n.onStrokeWeightChange(kt.currentTarget.value)),Yd(At,"mouseleave",i),At.addEventListener("mouseenter",()=>$(u,`Apply stroke to ${z()}`)),At.addEventListener("click",Se);
              var Yt=u;
              return typeof Yt=="function"?Bs(Yt,At):u=At,ge(gt,K(Xe,{
                get when(){
                  return he()
                },children:kt=>K(LT,{
                  anchor:"top-right",get position(){
                    return kt()
                  },width:180,maxHeight:200,get sections(){
                    return Fe()
                  },onClose:()=>ke(!0),get overflowRoot(){
                    return n.overflowRoot
                  },get style(){
                    return n.menuMaxWidth!==void 0?{
                      "max-width":`${n.menuMaxWidth}px`
                    }
                    :void 0
                  }
                })
              }),null),tn(kt=>{
                var xt=Qt.asClassName(Be.weight),un=Qt.asClassName(Y());
                return xt!==kt.e&&Un(on,kt.e=xt),un!==kt.t&&Un(Tt,kt.t=un),kt
              },{
                e:void 0,t:void 0
              }),tn(()=>en.value=`${Math.max(0,Math.round(n.strokeWeightValue()))}`),ot
            })()]
          }
        }),null),ge(Ot,K(Xe,{
          get when(){
            return Ui(()=>n.gradientType()==="linear")()&&n.gradientConfig()
          },children:ot=>(()=>{
            var Lt=CFf(),Gt=Lt.firstChild,jt=Gt.firstChild,hn=jt.firstChild,on=Gt.nextSibling,en=on.firstChild,gt=en.firstChild,At=gt.nextSibling,Tt=en.nextSibling,ze=Tt.firstChild,Yt=ze.firstChild,kt=ze.nextSibling,xt=kt.firstChild,un=on.nextSibling,nn=un.firstChild,Dn=nn.firstChild,Bn=Dn.nextSibling,Vn=Bn.firstChild,Xn=un.nextSibling,hi=Xn.firstChild,Si=hi.firstChild,Xi=Si.nextSibling,Ji=Xi.firstChild,qr=Ji.firstChild,Ni=Ji.nextSibling;
            ge(jt,K(ia,{
              get each(){
                return ot().stops
              },children:(er,Sr)=>(()=>{
                var Es=E1a();
                return Es.addEventListener("mousedown",Pi=>{
                  Pi.preventDefault(),B(Sr());
                  const gi=Pi.currentTarget.parentElement;
                  if(!gi)return;
                  const _i=gi.getBoundingClientRect(),Wi=rr=>{
                    const Ys=rr.clientX-_i.left,Fo=Math.max(0,Math.min(100,Ys/_i.width*100));
                    Oe(Sr(),Math.round(Fo))
                  },Kr=()=>{
                    document.removeEventListener("mousemove",Wi),document.removeEventListener("mouseup",Kr)
                  };
                  document.addEventListener("mousemove",Wi),document.addEventListener("mouseup",Kr)
                }),Es.addEventListener("click",()=>B(Sr())),tn(Pi=>{
                  var gi=`css-gradient-stop-handle ${I()===Sr()?"selected":""}`,_i=`${er.position}%`,Wi=U1(er.color.hex,er.color.alpha);
                  return gi!==Pi.e&&Un(Es,Pi.e=gi),_i!==Pi.t&&((Pi.t=_i)!=null?Es.style.setProperty("left",_i):Es.style.removeProperty("left")),Wi!==Pi.a&&((Pi.a=Wi)!=null?Es.style.setProperty("background-color",Wi):Es.style.removeProperty("background-color")),Pi
                },{
                  e:void 0,t:void 0,a:void 0
                }),Es
              })()
            }),null),gt.addEventListener("input",er=>{
              const Sr=parseFloat(er.currentTarget.value);
              Number.isNaN(Sr)||Pe(Math.round((Sr%360+360)%360*100)/100)
            }),Bs(hv,At,()=>({
              getValue:()=>Math.round(ot().angle*100)/100,onChange:er=>{
                Pe(Math.round((er%360+360)%360*100)/100)
              },step:1
            })),ze.addEventListener("click",()=>{
              const er=[...ot().stops].map(Sr=>({
                ...Sr,position:100-Sr.position
              })).reverse();
              n.onGradientConfigChange({
                ...ot(),stops:er
              })
            }),Yd(kt,"mouseleave",i),kt.addEventListener("mouseenter",()=>$(a,"Remove stroke")),kt.addEventListener("click",er=>{
              er.stopPropagation(),n.onClearStroke()
            });
            var Ii=a;
            typeof Ii=="function"?Bs(Ii,kt):a=kt,Bn.addEventListener("click",Le),ge(un,K(ia,{
              get each(){
                return O()
              },children:({
                stop:er,originalIndex:Sr
              })=>(()=>{
                var Es=x1a(),Pi=Es.firstChild,gi=Pi.firstChild,_i=gi.nextSibling,Wi=Pi.nextSibling,Kr=Wi.firstChild;
                return Es.addEventListener("click",()=>B(Sr)),ge(Es,K(Zvu,{
                  get committedPosition(){
                    return er.position
                  },onCommit:rr=>Oe(Sr,rr),onDragStart:()=>N(!0),onDragEnd:()=>N(!1)
                }),Pi),gi.addEventListener("change",rr=>Ne(Sr,rr.currentTarget.value)),ge(Pi,K(Yvu,{
                  get committedHex(){
                    return er.color.hex
                  },onCommit:rr=>Ne(Sr,rr)
                }),_i),ge(Pi,K(Xvu,{
                  get committedOpacity(){
                    return er.color.alpha
                  },onCommit:rr=>Ge(Sr,rr),onDragStart:()=>N(!0),onDragEnd:()=>N(!1)
                }),null),Wi.addEventListener("click",rr=>{
                  rr.stopPropagation(),We(Sr)
                }),tn(rr=>{
                  var Ys=`css-gradient-stop-row ${I()===Sr?"selected":""}`,Fo=ot().stops.length<=2,Wa=Qt.asClassName(Be.chromeMinimize);
                  return Ys!==rr.e&&Un(Es,rr.e=Ys),Fo!==rr.t&&(Wi.disabled=rr.t=Fo),Wa!==rr.a&&Un(Kr,rr.a=Wa),rr
                },{
                  e:void 0,t:void 0,a:void 0
                }),tn(()=>gi.value=er.color.hex),Es
              })()
            }),null),Bs(hv,Ji,()=>({
              getValue:()=>Math.max(0,Math.round(n.strokeWeightValue())),onChange:er=>{
                n.onStrokeWeightChange(Math.max(0,Math.round(er)).toString())
              },min:0
            })),Yd(Ji,"mouseleave",i),Ji.addEventListener("mouseenter",()=>$(l,"Drag to adjust stroke weight"));
            var Ar=l;
            return typeof Ar=="function"?Bs(Ar,Ji):l=Ji,Ni.addEventListener("input",er=>n.onStrokeWeightChange(er.currentTarget.value)),tn(er=>{
              var Sr=bt(),Es=bt(),Pi=Qt.asClassName(Be.arrowSwap),gi=Qt.asClassName(Be.trash),_i=Qt.asClassName(Be.add),Wi=Qt.asClassName(Be.weight);
              return er.e=La(jt,Sr,er.e),er.t=La(hn,Es,er.t),Pi!==er.a&&Un(Yt,er.a=Pi),gi!==er.o&&Un(xt,er.o=gi),_i!==er.i&&Un(Vn,er.i=_i),Wi!==er.n&&Un(qr,er.n=Wi),er
            },{
              e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0
            }),tn(()=>gt.value=Math.round(ot().angle*100)/100),tn(()=>Ni.value=`${Math.max(0,Math.round(n.strokeWeightValue()))}`),Lt
          })()
        }),null),ge(Ot,K(Xe,{
          get when(){
            return Ui(()=>n.gradientType()==="radial")()&&n.gradientConfig()
          },children:ot=>(()=>{
            var Lt=SFf(),Gt=Lt.firstChild,jt=Gt.firstChild,hn=jt.firstChild,on=Gt.nextSibling,en=on.firstChild,gt=en.firstChild,At=gt.nextSibling,Tt=en.nextSibling,ze=Tt.firstChild,Yt=ze.firstChild,kt=ze.nextSibling,xt=kt.firstChild,un=on.nextSibling,nn=un.firstChild,Dn=nn.firstChild,Bn=Dn.nextSibling,Vn=Bn.firstChild,Xn=un.nextSibling,hi=Xn.firstChild,Si=hi.firstChild,Xi=Si.nextSibling,Ji=Xi.firstChild,qr=Ji.firstChild,Ni=Ji.nextSibling;
            ge(jt,K(ia,{
              get each(){
                return ot().stops
              },children:(er,Sr)=>(()=>{
                var Es=E1a();
                return Es.addEventListener("mousedown",Pi=>{
                  Pi.preventDefault(),B(Sr());
                  const gi=Pi.currentTarget.parentElement;
                  if(!gi)return;
                  const _i=gi.getBoundingClientRect(),Wi=rr=>{
                    const Ys=rr.clientX-_i.left,Fo=Math.max(0,Math.min(100,Ys/_i.width*100));
                    Oe(Sr(),Math.round(Fo))
                  },Kr=()=>{
                    document.removeEventListener("mousemove",Wi),document.removeEventListener("mouseup",Kr)
                  };
                  document.addEventListener("mousemove",Wi),document.addEventListener("mouseup",Kr)
                }),Es.addEventListener("click",()=>B(Sr())),tn(Pi=>{
                  var gi=`css-gradient-stop-handle ${I()===Sr()?"selected":""}`,_i=`${er.position}%`,Wi=U1(er.color.hex,er.color.alpha);
                  return gi!==Pi.e&&Un(Es,Pi.e=gi),_i!==Pi.t&&((Pi.t=_i)!=null?Es.style.setProperty("left",_i):Es.style.removeProperty("left")),Wi!==Pi.a&&((Pi.a=Wi)!=null?Es.style.setProperty("background-color",Wi):Es.style.removeProperty("background-color")),Pi
                },{
                  e:void 0,t:void 0,a:void 0
                }),Es
              })()
            }),null),gt.addEventListener("click",()=>tt("circle")),At.addEventListener("click",()=>tt("ellipse")),ze.addEventListener("click",()=>{
              const er=[...ot().stops].map(Sr=>({
                ...Sr,position:100-Sr.position
              })).reverse();
              n.onGradientConfigChange({
                ...ot(),stops:er
              })
            }),Yd(kt,"mouseleave",i),kt.addEventListener("mouseenter",()=>$(a,"Remove stroke")),kt.addEventListener("click",er=>{
              er.stopPropagation(),n.onClearStroke()
            });
            var Ii=a;
            typeof Ii=="function"?Bs(Ii,kt):a=kt,Bn.addEventListener("click",Le),ge(un,K(ia,{
              get each(){
                return O()
              },children:({
                stop:er,originalIndex:Sr
              })=>(()=>{
                var Es=x1a(),Pi=Es.firstChild,gi=Pi.firstChild,_i=gi.nextSibling,Wi=Pi.nextSibling,Kr=Wi.firstChild;
                return Es.addEventListener("click",()=>B(Sr)),ge(Es,K(Zvu,{
                  get committedPosition(){
                    return er.position
                  },onCommit:rr=>Oe(Sr,rr),onDragStart:()=>N(!0),onDragEnd:()=>N(!1)
                }),Pi),gi.addEventListener("change",rr=>Ne(Sr,rr.currentTarget.value)),ge(Pi,K(Yvu,{
                  get committedHex(){
                    return er.color.hex
                  },onCommit:rr=>Ne(Sr,rr)
                }),_i),ge(Pi,K(Xvu,{
                  get committedOpacity(){
                    return er.color.alpha
                  },onCommit:rr=>Ge(Sr,rr),onDragStart:()=>N(!0),onDragEnd:()=>N(!1)
                }),null),Wi.addEventListener("click",rr=>{
                  rr.stopPropagation(),We(Sr)
                }),tn(rr=>{
                  var Ys=`css-gradient-stop-row ${I()===Sr?"selected":""}`,Fo=ot().stops.length<=2,Wa=Qt.asClassName(Be.chromeMinimize);
                  return Ys!==rr.e&&Un(Es,rr.e=Ys),Fo!==rr.t&&(Wi.disabled=rr.t=Fo),Wa!==rr.a&&Un(Kr,rr.a=Wa),rr
                },{
                  e:void 0,t:void 0,a:void 0
                }),tn(()=>gi.value=er.color.hex),Es
              })()
            }),null),Bs(hv,Ji,()=>({
              getValue:()=>Math.max(0,Math.round(n.strokeWeightValue())),onChange:er=>{
                n.onStrokeWeightChange(Math.max(0,Math.round(er)).toString())
              },min:0
            })),Yd(Ji,"mouseleave",i),Ji.addEventListener("mouseenter",()=>$(l,"Drag to adjust stroke weight"));
            var Ar=l;
            return typeof Ar=="function"?Bs(Ar,Ji):l=Ji,Ni.addEventListener("input",er=>n.onStrokeWeightChange(er.currentTarget.value)),tn(er=>{
              var Sr=bt(),Es=bt(),Pi=`css-segmented-button ${ot().shape==="circle"?"active":""}`,gi=`css-segmented-button ${ot().shape==="ellipse"?"active":""}`,_i=Qt.asClassName(Be.arrowSwap),Wi=Qt.asClassName(Be.trash),Kr=Qt.asClassName(Be.add),rr=Qt.asClassName(Be.weight);
              return er.e=La(jt,Sr,er.e),er.t=La(hn,Es,er.t),Pi!==er.a&&Un(gt,er.a=Pi),gi!==er.o&&Un(At,er.o=gi),_i!==er.i&&Un(Yt,er.i=_i),Wi!==er.n&&Un(xt,er.n=Wi),Kr!==er.s&&Un(Vn,er.s=Kr),rr!==er.h&&Un(qr,er.h=rr),er
            },{
              e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0
            }),tn(()=>Ni.value=`${Math.max(0,Math.round(n.strokeWeightValue()))}`),Lt
          })()
        }),null),ge(Ot,K(Xe,{
          get when(){
            return Ui(()=>n.gradientType()==="conic")()&&n.gradientConfig()
          },children:ot=>(()=>{
            var Lt=kFf(),Gt=Lt.firstChild,jt=Gt.firstChild,hn=jt.firstChild,on=Gt.nextSibling,en=on.firstChild,gt=en.firstChild,At=gt.nextSibling,Tt=en.nextSibling,ze=Tt.firstChild,Yt=ze.firstChild,kt=ze.nextSibling,xt=kt.firstChild,un=on.nextSibling,nn=un.firstChild,Dn=nn.firstChild,Bn=Dn.nextSibling,Vn=Bn.firstChild,Xn=un.nextSibling,hi=Xn.firstChild,Si=hi.firstChild,Xi=Si.nextSibling,Ji=Xi.firstChild,qr=Ji.firstChild,Ni=Ji.nextSibling;
            ge(jt,K(ia,{
              get each(){
                return ot().stops
              },children:(er,Sr)=>(()=>{
                var Es=E1a();
                return Es.addEventListener("mousedown",Pi=>{
                  Pi.preventDefault(),B(Sr());
                  const gi=Pi.currentTarget.parentElement;
                  if(!gi)return;
                  const _i=gi.getBoundingClientRect(),Wi=rr=>{
                    const Ys=rr.clientX-_i.left,Fo=Math.max(0,Math.min(100,Ys/_i.width*100));
                    Oe(Sr(),Math.round(Fo))
                  },Kr=()=>{
                    document.removeEventListener("mousemove",Wi),document.removeEventListener("mouseup",Kr)
                  };
                  document.addEventListener("mousemove",Wi),document.addEventListener("mouseup",Kr)
                }),Es.addEventListener("click",()=>B(Sr())),tn(Pi=>{
                  var gi=`css-gradient-stop-handle ${I()===Sr()?"selected":""}`,_i=`${er.position}%`,Wi=U1(er.color.hex,er.color.alpha);
                  return gi!==Pi.e&&Un(Es,Pi.e=gi),_i!==Pi.t&&((Pi.t=_i)!=null?Es.style.setProperty("left",_i):Es.style.removeProperty("left")),Wi!==Pi.a&&((Pi.a=Wi)!=null?Es.style.setProperty("background-color",Wi):Es.style.removeProperty("background-color")),Pi
                },{
                  e:void 0,t:void 0,a:void 0
                }),Es
              })()
            }),null),Bs(hv,gt,()=>({
              getValue:()=>Math.round(ot().angle*100)/100,onChange:er=>{
                it(Math.round((er%360+360)%360*100)/100)
              },step:1
            })),At.addEventListener("input",er=>{
              const Sr=parseFloat(er.currentTarget.value);
              Number.isNaN(Sr)||it(Math.round((Sr%360+360)%360*100)/100)
            }),ze.addEventListener("click",()=>{
              const er=[...ot().stops].map(Sr=>({
                ...Sr,position:100-Sr.position
              })).reverse();
              n.onGradientConfigChange({
                ...ot(),stops:er
              })
            }),Yd(kt,"mouseleave",i),kt.addEventListener("mouseenter",()=>$(a,"Remove stroke")),kt.addEventListener("click",er=>{
              er.stopPropagation(),n.onClearStroke()
            });
            var Ii=a;
            typeof Ii=="function"?Bs(Ii,kt):a=kt,Bn.addEventListener("click",Le),ge(un,K(ia,{
              get each(){
                return O()
              },children:({
                stop:er,originalIndex:Sr
              })=>(()=>{
                var Es=x1a(),Pi=Es.firstChild,gi=Pi.firstChild,_i=gi.nextSibling,Wi=Pi.nextSibling,Kr=Wi.firstChild;
                return Es.addEventListener("click",()=>B(Sr)),ge(Es,K(Zvu,{
                  get committedPosition(){
                    return er.position
                  },onCommit:rr=>Oe(Sr,rr),onDragStart:()=>N(!0),onDragEnd:()=>N(!1)
                }),Pi),gi.addEventListener("change",rr=>Ne(Sr,rr.currentTarget.value)),ge(Pi,K(Yvu,{
                  get committedHex(){
                    return er.color.hex
                  },onCommit:rr=>Ne(Sr,rr)
                }),_i),ge(Pi,K(Xvu,{
                  get committedOpacity(){
                    return er.color.alpha
                  },onCommit:rr=>Ge(Sr,rr),onDragStart:()=>N(!0),onDragEnd:()=>N(!1)
                }),null),Wi.addEventListener("click",rr=>{
                  rr.stopPropagation(),We(Sr)
                }),tn(rr=>{
                  var Ys=`css-gradient-stop-row ${I()===Sr?"selected":""}`,Fo=ot().stops.length<=2,Wa=Qt.asClassName(Be.chromeMinimize);
                  return Ys!==rr.e&&Un(Es,rr.e=Ys),Fo!==rr.t&&(Wi.disabled=rr.t=Fo),Wa!==rr.a&&Un(Kr,rr.a=Wa),rr
                },{
                  e:void 0,t:void 0,a:void 0
                }),tn(()=>gi.value=er.color.hex),Es
              })()
            }),null),Bs(hv,Ji,()=>({
              getValue:()=>Math.max(0,Math.round(n.strokeWeightValue())),onChange:er=>{
                n.onStrokeWeightChange(Math.max(0,Math.round(er)).toString())
              },min:0
            })),Yd(Ji,"mouseleave",i),Ji.addEventListener("mouseenter",()=>$(l,"Drag to adjust stroke weight"));
            var Ar=l;
            return typeof Ar=="function"?Bs(Ar,Ji):l=Ji,Ni.addEventListener("input",er=>n.onStrokeWeightChange(er.currentTarget.value)),tn(er=>{
              var Sr=bt(),Es=bt(),Pi=Qt.asClassName(Be.arrowSwap),gi=Qt.asClassName(Be.trash),_i=Qt.asClassName(Be.add),Wi=Qt.asClassName(Be.weight);
              return er.e=La(jt,Sr,er.e),er.t=La(hn,Es,er.t),Pi!==er.a&&Un(Yt,er.a=Pi),gi!==er.o&&Un(xt,er.o=gi),_i!==er.i&&Un(Vn,er.i=_i),Wi!==er.n&&Un(qr,er.n=Wi),er
            },{
              e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0
            }),tn(()=>At.value=Math.round(ot().angle*100)/100),tn(()=>Ni.value=`${Math.max(0,Math.round(n.strokeWeightValue()))}`),Lt
          })()
        }),null),tn(ot=>{
          var Lt=A()?"true":"false",Gt=Qt.asClassName(Be.chevronDown);
          return Lt!==ot.e&&Zr(Mt,"aria-expanded",ot.e=Lt),Gt!==ot.t&&Un(ut,ot.t=Gt),ot
        },{
          e:void 0,t:void 0
        }),Ot
      }
    }), null), tn(Ot=>{
      var cn=`css-section-header ${n.hasStroke()?"":"clickable"}`,Mt=p()?"true":"false",Pt=Qt.asClassName(Be.symbolColor),ut=n.hasStroke(),ot=Qt.asClassName(Be.add);
      return cn!==Ot.e&&Un(It,Ot.e=cn),Mt!==Ot.t&&Zr(Ft,"aria-expanded",Ot.t=Mt),Pt!==Ot.a&&Un(Xt,Ot.a=Pt),ut!==Ot.o&&(bn.disabled=Ot.o=ut),ot!==Ot.i&&Un(St,Ot.i=ot),Ot
    }, {
      e:void 0,t:void 0,a:void 0,o:void 0,i:void 0
    }), _t
  })()
}
var mFf, pFf, gFf, fFf, bFf, vFf, AFf, yFf, wFf, _Ff, CFf, E1a, x1a, SFf, kFf, Ecy=