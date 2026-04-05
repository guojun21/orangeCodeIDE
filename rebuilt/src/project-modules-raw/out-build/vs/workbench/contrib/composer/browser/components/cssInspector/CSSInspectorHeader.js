// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/CSSInspectorHeader.js
// Offset: 31966999 (bundle byte offset)
// Size: 11320 bytes

Ie(), Ie(), Ie(), $Mf=qe("<div class=css-inspector-header><div class=css-inspector-header-toggle><button type=button>Design</button><button type=button>CSS")
}
});
function acy(n){
  const e=hv, {
    showHover:t, hideHover:i
  }
  =ik(0);
  let r;
  const s=(ee, re)=>{
    if(!ee)return;
    const ne=ee.getBoundingClientRect();
    t({
      content:re,target:{
        targetElements:[ee],x:ne.left+ne.width/2,y:ne.bottom+4
      },position:{
        hoverPosition:2
      },appearance:{
        compact:!0
      },persistence:{
        hideOnHover:!0
      }
    })
  }, o=!!n.onEffectTypeChange, [a, l, u]=RC(null), [d, m]=lt(null), [p, g]=lt(null), [f, A]=lt(null), w=xe(()=>n.hasLayerBlur?.()??!1), C=xe(()=>n.hasBackdropBlur?.()??!1);
  An(()=>{
    w()||g(null)
  }), An(()=>{
    C()||A(null)
  });
  const x=xe(()=>n.shadows().length>0||w()||C()), I=ee=>{
    if(ee.kind==="shadow"){
      const re=n.shadows()[ee.index];
      return re&&re.isInset?"inner-shadow":"drop-shadow"
    }
    return ee.kind==="layer-blur"?"layer-blur":"backdrop-blur"
  }, B=xe(()=>{
    const ee=n.shadows().map((Fe, De)=>({
      key:`shadow-${De}`,target:{
        kind:"shadow",index:De
      },type:Fe.isInset?"inner-shadow":"drop-shadow",isSelected:De===n.selectedShadowIndex(),isVisible:n.isShadowVisible()
    })), re=w()?{
      key:"layer-blur",target:{
        kind:"layer-blur"
      },type:"layer-blur",isSelected:!1,isVisible:n.isLayerBlurVisible?.()??!1
    }
    :null, ne=C()?{
      key:"backdrop-blur",target:{
        kind:"backdrop-blur"
      },type:"backdrop-blur",isSelected:!1,isVisible:n.isBackdropBlurVisible?.()??!1
    }
    :null, pe=[], le=p(), he=f();
    re&&le!==null&&pe.push({
      row:re,position:le
    }), ne&&he!==null&&pe.push({
      row:ne,position:he
    }), pe.sort((Fe, De)=>Fe.position-De.position);
    const be=[];
    let fe=0, ke=0;
    const Se=ee.length+pe.length;
    for(let Fe=0;
    Fe<Se;
    Fe++)ke<pe.length&&pe[ke].position===Fe?(be.push(pe[ke].row), ke++):fe<ee.length&&(be.push(ee[fe]), fe++);
    for(;
    fe<ee.length;
    )be.push(ee[fe]), fe++;
    return re&&le===null&&be.push(re), ne&&he===null&&be.push(ne), be
  }), R=()=>{
    a()&&n.onMenuClose?.(), u(), m(null)
  };
  An(()=>{
    const ee=d();
    if(ee){
      if(ee.kind==="shadow"){
        ee.index>=n.shadows().length&&R();
        return
      }
      if(ee.kind==="layer-blur"&&!w()){
        R();
        return
      }
      ee.kind==="backdrop-blur"&&!C()&&R()
    }
  });
  const N=ee=>{
    ee.stopPropagation()
  }, M=ee=>{
    rCi(ee)&&n.onSelectShadow(ee.index)
  }, O=ee=>{
    const re=I(ee);
    return YMf.map(ne=>{
      const he=(ne.id==="layer-blur"||ne.id==="backdrop-blur"||ne.id!==re&&!rCi(ee))&&!o?!0:!!(!o&&Lvu(ee)&&(ne.id==="drop-shadow"||ne.id==="inner-shadow")),be=ne.id==="layer-blur"&&re!=="layer-blur"&&w()||ne.id==="backdrop-blur"&&re!=="backdrop-blur"&&C(),fe=ne.id===re?!1:he||be;
      return{
        ...ne,disabled:fe
      }
    })
  }, $=(ee, re)=>{
    M(ee);
    const ne=I(ee);
    if(re===ne)return;
    const pe=O(ee).find(le=>le.id===re);
    if(!(!pe||pe.disabled)){
      if(rCi(ee)){
        const le=B().findIndex(he=>he.target.kind==="shadow"&&he.target.index===ee.index);
        re==="layer-blur"?g(le>=0?le:null):re==="backdrop-blur"&&A(le>=0?le:null)
      }
      if(Lvu(ee)&&(ee.kind==="layer-blur"?g(null):ee.kind==="backdrop-blur"&&A(null)),re==="drop-shadow"||re==="inner-shadow"){
        rCi(ee)?n.onEffectTypeChange?n.onEffectTypeChange(ee,re):n.onShadowEffectTypeChange(re):n.onEffectTypeChange?.(ee,re);
        return
      }
      n.onEffectTypeChange?.(ee,re)
    }
  }, H=(ee, re)=>{
    const ne=()=>ee?.()??0, pe=le=>{
      re?.(le)
    };
    return(()=>{
      var le=qMf(),he=le.firstChild,be=he.firstChild,fe=be.firstChild,ke=fe.firstChild,Se=ke.nextSibling,Fe=Se.firstChild,De=Fe.nextSibling;
      return le.addEventListener("click",N),le.addEventListener("mousedown",N),Bs(hv,ke,()=>({
        getValue:ne,onChange:Pe=>{
          re?.(Pe.toString())
        },min:0
      })),Fe.addEventListener("input",Pe=>pe(Pe.currentTarget.value)),Fe.disabled=!re,Bs(hv,De,()=>({
        getValue:ne,onChange:Pe=>{
          re?.(Pe.toString())
        },min:0
      })),tn(()=>Fe.value=`${ne()}`),le
    })()
  }, W=xe(()=>{
    const ee=d();
    return ee?ee.kind==="shadow"?[{
      type:"custom",content:(()=>{
        var re=JMf();
        return re.addEventListener("click",N),re.addEventListener("mousedown",N),ge(re,K(Xe,{
          get when(){
            return n.hasShadow()
          },get children(){
            var ne=HMf(),pe=ne.firstChild,le=pe.firstChild,he=le.firstChild,be=he.nextSibling,fe=be.firstChild,ke=fe.nextSibling,Se=le.nextSibling,Fe=Se.firstChild,De=Fe.nextSibling,Pe=De.firstChild,Ne=Pe.nextSibling,Oe=Se.nextSibling,Ge=Oe.firstChild,Le=Ge.nextSibling,We=Le.firstChild,tt=We.nextSibling,it=Oe.nextSibling,bt=it.firstChild,Nt=bt.nextSibling,ft=Nt.firstChild,_t=ft.nextSibling,It=pe.nextSibling,sn=It.firstChild,Vt=sn.firstChild,Ft=Vt.nextSibling,Xt=Ft.nextSibling,bn=Xt.nextSibling,St=bn.firstChild,Bt=St.nextSibling;
            return Bs(hv,he,()=>({
              getValue:()=>n.boxShadowValues().offsetX,onChange:Jt=>n.onBoxShadowOffsetChange("x",Jt.toString())
            })),fe.addEventListener("input",Jt=>n.onBoxShadowOffsetChange("x",Jt.currentTarget.value)),Bs(hv,ke,()=>({
              getValue:()=>n.boxShadowValues().offsetX,onChange:Jt=>n.onBoxShadowOffsetChange("x",Jt.toString())
            })),Bs(hv,Fe,()=>({
              getValue:()=>n.boxShadowValues().offsetY,onChange:Jt=>n.onBoxShadowOffsetChange("y",Jt.toString())
            })),Pe.addEventListener("input",Jt=>n.onBoxShadowOffsetChange("y",Jt.currentTarget.value)),Bs(hv,Ne,()=>({
              getValue:()=>n.boxShadowValues().offsetY,onChange:Jt=>n.onBoxShadowOffsetChange("y",Jt.toString())
            })),Bs(hv,Ge,()=>({
              getValue:()=>n.boxShadowValues().blur,onChange:Jt=>n.onBoxShadowBlurChange(Jt.toString()),min:0
            })),We.addEventListener("input",Jt=>n.onBoxShadowBlurChange(Jt.currentTarget.value)),Bs(hv,tt,()=>({
              getValue:()=>n.boxShadowValues().blur,onChange:Jt=>n.onBoxShadowBlurChange(Jt.toString()),min:0
            })),Bs(hv,bt,()=>({
              getValue:()=>n.boxShadowValues().spread,onChange:Jt=>n.onBoxShadowSpreadChange(Jt.toString())
            })),ft.addEventListener("input",Jt=>n.onBoxShadowSpreadChange(Jt.currentTarget.value)),Bs(hv,_t,()=>({
              getValue:()=>n.boxShadowValues().spread,onChange:Jt=>n.onBoxShadowSpreadChange(Jt.toString())
            })),Vt.addEventListener("input",Jt=>n.onBoxShadowHexCommit(Jt.currentTarget.value)),Ft.addEventListener("keydown",Jt=>{
              Jt.key==="Enter"&&n.onBoxShadowHexCommit(n.boxShadowHexDraft())
            }),Ft.addEventListener("blur",()=>n.onBoxShadowHexCommit(n.boxShadowHexDraft())),Ft.addEventListener("input",Jt=>n.onBoxShadowHexDraftChange(Jt.currentTarget.value)),St.addEventListener("input",Jt=>n.onBoxShadowOpacityChange(Jt.currentTarget.value)),Bs(hv,Bt,()=>({
              getValue:()=>n.boxShadowColor().alpha,onChange:Jt=>n.onBoxShadowOpacityChange(Math.round(Jt).toString()),min:0,max:100
            })),tn(()=>fe.value=`${n.boxShadowValues().offsetX}`),tn(()=>Pe.value=`${n.boxShadowValues().offsetY}`),tn(()=>We.value=`${n.boxShadowValues().blur}`),tn(()=>ft.value=`${n.boxShadowValues().spread}`),tn(()=>Vt.value=n.boxShadowColor().hex),tn(()=>Ft.value=n.boxShadowHexDraft()),tn(()=>St.value=`${n.boxShadowColor().alpha}`),ne
          }
        })),re
      })()
    }
    ]:ee.kind==="layer-blur"?[{
      type:"custom",content:H(n.layerBlurValue,n.onLayerBlurChange)
    }
    ]:[{
      type:"custom",content:H(n.backdropBlurValue,n.onBackdropBlurChange)
    }
    ]:[]
  }), z=(ee, re)=>{
    if(ee.stopPropagation(), Nvu(d(), re)&&a()){
      R();
      return
    }
    re.kind==="shadow"&&n.onSelectShadow(re.index), a()&&n.onMenuClose?.();
    const pe=ee.currentTarget.getBoundingClientRect();
    m(re), l({
      x:pe.left,y:pe.top-8
    }), n.onMenuOpen?.()
  }, Y=(ee, re)=>{
    const ne=Pvu[I(ee)];
    return re?`Hide ${ne.toLowerCase()}`:`Show ${ne.toLowerCase()}`
  }, j=(ee, re)=>{
    switch(ee.stopPropagation(), re.kind){
      case"shadow":n.onSelectShadow(re.index),n.onToggleShadowVisibility();
      break;
      case"layer-blur":n.onToggleLayerBlurVisibility?.();
      break;
      case"backdrop-blur":n.onToggleBackdropBlurVisibility?.();
      break
    }
  }, X=(ee, re)=>{
    switch(ee.stopPropagation(), re.kind){
      case"shadow":n.onSelectShadow(re.index),n.onRemoveShadow(re.index);
      break;
      case"layer-blur":n.onClearLayerBlur?.();
      break;
      case"backdrop-blur":n.onClearBackdropBlur?.();
      break
    }
  };
  return(()=>{
    var ee=WMf(), re=ee.firstChild, ne=re.firstChild, pe=ne.nextSibling, le=pe.firstChild, he=le.firstChild, be=re.nextSibling;
    re.addEventListener("click", ke=>{
      x()||(ke.stopPropagation(),n.onAddShadow())
    }), Yd(le, "mouseleave", i), le.addEventListener("mouseenter", ()=>s(r, "Add shadow or blur")), le.addEventListener("click", ke=>{
      ke.stopPropagation(),n.onAddShadow()
    });
    var fe=r;
    return typeof fe=="function"?Bs(fe, le):r=le, ge(be, K(Xe, {
      get when(){
        return B().length>0
      },get children(){
        var ke=GMf();
        return ge(ke,K(ia,{
          get each(){
            return B()
          },children:Se=>{
            const Fe=`css-effects-type-select-${Se.key}`;
            return(()=>{
              var De=QMf(),Pe=De.firstChild,Ne=Pe.firstChild,Oe=Ne.firstChild,Ge=Oe.nextSibling,Le=Ge.firstChild,We=Pe.nextSibling;
              return De.addEventListener("click",()=>{
                Se.target.kind==="shadow"&&n.onSelectShadow(Se.target.index)
              }),ge(De,()=>{
                let tt;
                return(()=>{
                  var it=jMf(),bt=it.firstChild;
                  Yd(it,"mouseleave",i),it.addEventListener("mouseenter",()=>s(tt,Se.type==="layer-blur"||Se.type==="backdrop-blur"?"Adjust blur":"Adjust shadow")),it.addEventListener("click",ft=>z(ft,Se.target));
                  var Nt=tt;
                  return typeof Nt=="function"?Bs(Nt,it):tt=it,tn(ft=>{
                    var _t=`css-effects-icon-button ${Se.type==="drop-shadow"?"css-effects-icon-drop-shadow":Se.type==="inner-shadow"?"css-effects-icon-inner-shadow":""}`,It=Nvu(d(),Se.target)&&a()?"true":"false",sn=Qt.asClassName(Se.type==="layer-blur"?Be.layerBlur:Se.type==="backdrop-blur"?Be.backgroundBlur:Be.borderAll);
                    return _t!==ft.e&&Un(it,ft.e=_t),It!==ft.t&&Zr(it,"aria-expanded",ft.t=It),sn!==ft.a&&Un(bt,ft.a=sn),ft
                  },{
                    e:void 0,t:void 0,a:void 0
                  }),it
                })()
              },Pe),Oe.addEventListener("change",tt=>$(Se.target,tt.currentTarget.value)),Oe.addEventListener("pointerdown",()=>M(Se.target)),Oe.addEventListener("focus",()=>M(Se.target)),Zr(Oe,"id",Fe),ge(Oe,K(ia,{
                get each(){
                  return O(Se.target)
                },children:tt=>(()=>{
                  var it=zMf();
                  return ge(it,()=>tt.label),tn(()=>it.disabled=tt.disabled),tn(()=>it.value=tt.id),it
                })()
              })),Ge.addEventListener("pointerdown",()=>M(Se.target)),Zr(Ge,"for",Fe),ge(We,()=>{
                let tt,it;
                return[(()=>{
                  var bt=VMf(),Nt=bt.firstChild;
                  Yd(bt,"mouseleave",i),bt.addEventListener("mouseenter",()=>s(tt,Y(Se.target,Se.isVisible))),bt.addEventListener("click",_t=>j(_t,Se.target));
                  var ft=tt;
                  return typeof ft=="function"?Bs(ft,bt):tt=bt,tn(_t=>{
                    var It=`css-stroke-action ${Se.isVisible?"active":""}`,sn=Qt.asClassName(Se.isVisible?Be.eye:Be.eyeClosed);
                    return It!==_t.e&&Un(bt,_t.e=It),sn!==_t.t&&Un(Nt,_t.t=sn),_t
                  },{
                    e:void 0,t:void 0
                  }),bt
                })(),(()=>{
                  var bt=KMf(),Nt=bt.firstChild;
                  Yd(bt,"mouseleave",i),bt.addEventListener("mouseenter",()=>s(it,Se.type==="layer-blur"||Se.type==="backdrop-blur"?"Remove blur":"Remove shadow")),bt.addEventListener("click",_t=>X(_t,Se.target));
                  var ft=it;
                  return typeof ft=="function"?Bs(ft,bt):it=bt,tn(()=>Un(Nt,Qt.asClassName(Be.chromeMinimize))),bt
                })()]
              }),tn(tt=>{
                var it=Se.isSelected?"true":"false",bt=Pvu[Se.type],Nt=Qt.asClassName(Be.chevronDown);
                return it!==tt.e&&Zr(De,"data-selected",tt.e=it),bt!==tt.t&&Zr(Oe,"title",tt.t=bt),Nt!==tt.a&&Un(Le,tt.a=Nt),tt
              },{
                e:void 0,t:void 0,a:void 0
              }),tn(()=>Oe.value=I(Se.target)),De
            })()
          }
        })),ke
      }
    }), null), ge(be, K(Xe, {
      get when(){
        return a()
      },children:ke=>K(LT,{
        anchor:"top-left",get position(){
          return ke()
        },width:320,maxHeight:360,onClose:R,get sections(){
          return W()
        },get overflowRoot(){
          return n.overflowRoot
        },get style(){
          return n.menuMaxWidth!==void 0?{
            "max-width":`${n.menuMaxWidth-20}px`
          }
          :void 0
        }
      })
    }), null), tn(ke=>{
      var Se=x()?"8px":"0px",Fe=`css-section-header ${x()?"":"clickable"}`,De=Qt.asClassName(Be.add);
      return Se!==ke.e&&((ke.e=Se)!=null?ee.style.setProperty("padding-bottom",Se):ee.style.removeProperty("padding-bottom")),Fe!==ke.t&&Un(re,ke.t=Fe),De!==ke.a&&Un(he,ke.a=De),ke
    }, {
      e:void 0,t:void 0,a:void 0
    }), ee
  })()
}
var qMf, HMf, JMf, GMf, WMf, QMf, jMf, zMf, VMf, KMf, YMf, Pvu, rCi, Lvu, Nvu, ccy=