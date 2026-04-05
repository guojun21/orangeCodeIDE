// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/FillSection.js
// Offset: 32005667 (bundle byte offset)
// Size: 33254 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), qi(), iX(), Jr(), Kl(), Ek(), mB(), _L(), w1a(), jit(), t2f=qe("<input class=css-hex-input type=text>"), n2f=qe('<div class="css-input-group css-gradient-stop-position-input"><input class=css-number-input type=number min=0 max=100><span class="css-input-suffix css-input-suffix-draggable">%'), i2f=qe('<div class="css-opacity-input-inline css-input-field"><input class=css-number-input type=number min=0 max=100><span class="css-input-suffix css-input-suffix-draggable">%'), r2f=qe("<span class=css-color-token-swatch>"), s2f=qe("<div class=css-fill-row><button type=button class=css-stroke-action><i>"), o2f=qe("<div class=css-fill-controls><div class=css-gradient-type-row><button type=button class=css-gradient-type-button aria-haspopup=menu><span class=css-gradient-type-label></span><i>"), a2f=qe("<section class=css-inspector-section><div><div class=css-section-title>Background</div><div class=css-section-actions><button type=button class=css-section-action aria-haspopup=menu><i></i></button><button type=button class=css-section-action><i>"), c2f=qe('<div class=css-color-input-container><input class=css-color-swatch-inline type=color><input class=css-hex-input type=text><div class=css-input-separator></div><div class="css-opacity-input-inline css-input-field"><input class=css-number-input type=number min=0 max=100><span class="css-input-suffix css-input-suffix-draggable"title="Drag to adjust opacity"aria-label="Drag to adjust opacity">%'), l2f=qe("<div role=button tabindex=0 class=css-color-token-button><span class=css-color-token-swatch></span><span class=css-color-token-name></span><button type=button class=css-color-token-unlink><i>"), Uvu=qe('<div class=css-gradient-controls><div class=css-gradient-preview-container><div class=css-gradient-preview><div class=css-gradient-preview-track></div></div></div><div class=css-gradient-angle-row><div class="css-input-group css-gradient-angle-input"><input class=css-number-input type=number min=0 max=360><span class="css-input-suffix css-input-suffix-draggable"title="Drag to adjust angle"aria-label="Drag to adjust angle">\xB0</span></div><div class=css-gradient-header-actions><button type=button class=css-gradient-action-btn title="Reverse gradient"><i></i></button><button type=button class=css-gradient-action-btn title="Remove fill"><i></i></button></div></div><div class=css-gradient-stops><div class=css-gradient-stops-header><label class=css-control-label>Stops</label><button type=button class=css-gradient-add-stop title="Add color stop"><i>'), _1a=qe("<div>"), C1a=qe('<div><div class=css-gradient-stop-color-container><input class=css-color-swatch-inline type=color><div class=css-input-separator></div></div><button type=button class=css-gradient-stop-remove title="Remove stop"><i>'), u2f=qe('<div class=css-gradient-controls><div class=css-gradient-preview-container><div class=css-gradient-preview><div class=css-gradient-preview-track></div></div></div><div class=css-gradient-shape-row><div class=css-button-group><button type=button>Circle</button><button type=button>Ellipse</button></div><div class=css-gradient-header-actions><button type=button class=css-gradient-action-btn title="Reverse gradient"><i></i></button><button type=button class=css-gradient-action-btn title="Remove fill"><i></i></button></div></div><div class=css-gradient-stops><div class=css-gradient-stops-header><label class=css-control-label>Stops</label><button type=button class=css-gradient-add-stop title="Add color stop"><i>')
}
});
function mcy(n){
  const e=hv, [t, i]=lt(null), [r, s]=lt(null), [o, a]=lt(null), [l, u]=lt(!1), [d, m]=lt(n.isAutoGap()?"auto":`${Math.round(n.gapValue())}`);
  let p=!1;
  An(()=>{
    const Y=n.isAutoGap(), j=n.gapValue();
    l()||m(Y?"auto":`${Math.round(j)}`)
  });
  const g=()=>n.isAutoGap(), f=()=>n.layoutMode()==="row", A=()=>{
    const Y=n.justifyContent(), j=n.alignItems();
    let X=0;
    Y==="center"?X=1:Y==="flex-end"&&(X=2);
    let ee=0;
    return j==="center"?ee=1:j==="flex-end"&&(ee=2), {
      row:X,col:ee
    }
  }, w=()=>{
    const Y=n.alignItems();
    return Y==="center"?1:Y==="flex-end"?2:0
  }, C=()=>{
    const Y=n.alignItems();
    return Y==="center"?1:Y==="flex-end"?2:0
  }, x=(Y, j)=>{
    g()?f()?n.onAlignItemsChange(z1t[Y]):n.onAlignItemsChange(z1t[j]):(n.onJustifyContentChange(Gvu[Y]), n.onAlignItemsChange(z1t[j]))
  }, I=(Y, j)=>{
    if(g())return!1;
    const X=A();
    return X.row===Y&&X.col===j
  }, B=Y=>w()===Y, R=Y=>r()===Y, N=Y=>C()===Y, M=Y=>o()===Y, O=(Y, j)=>{
    if(g())return!1;
    const X=t();
    return X!==null&&X.row===Y&&X.col===j
  }, $=Y=>{
    m(Y)
  }, H=()=>{
    const Y=d().trim().toLowerCase();
    if(Y==="auto")m("auto"), n.onGapChange("auto"), n.onJustifyContentChange("space-between");
    else{
      const j=parseFloat(Y);
      if(!isNaN(j)&&j>=0){
        const X=Math.round(j);
        n.isAutoGap()&&n.onJustifyContentChange("flex-start"),m(`${X}`),n.onGapChange(`${X}`)
      }
      else m(n.isAutoGap()?"auto":`${Math.round(n.gapValue())}`)
    }
  }, W=()=>{
    if(p){
      p=!1,u(!1);
      return
    }
    H(), u(!1)
  }, z=(Y, j)=>{
    const X=()=>I(Y, j), ee=()=>O(Y, j), re=()=>g()&&!f()&&B(j), ne=()=>g()&&!f()&&R(j), pe=()=>g()&&f()&&N(Y), le=()=>g()&&f()&&M(Y), he=U2f[j], be=()=>X()||ee()||re()||ne()||pe()||le();
    return(()=>{
      var fe=h2f();
      return fe.addEventListener("mouseleave",()=>{
        g()?f()?a(null):s(null):i(null)
      }),fe.addEventListener("mouseenter",()=>{
        g()?f()?a(Y):s(j):i({
          row:Y,col:j
        })
      }),fe.addEventListener("click",()=>x(Y,j)),ge(fe,K(Xe,{
        get when(){
          return be()
        },get children(){
          var ke=$vu();
          return tn(Se=>{
            var Fe=`css-alignment-grid-icon ${Qt.asClassName(he)}`,De=X()||re()||pe()?"true":void 0;
            return Fe!==Se.e&&Un(ke,Se.e=Fe),De!==Se.t&&Zr(ke,"data-selected",Se.t=De),Se
          },{
            e:void 0,t:void 0
          }),ke
        }
      }),null),ge(fe,K(Xe,{
        get when(){
          return!be()
        },get children(){
          return d2f()
        }
      }),null),tn(ke=>{
        var Se=X()?"true":void 0,Fe=ee()?"true":void 0,De=re()?"true":void 0,Pe=ne()?"true":void 0,Ne=pe()?"true":void 0,Oe=le()?"true":void 0,Ge=g()?`align-items: ${f()?z1t[Y]:z1t[j]}`:`justify-content: ${Gvu[Y]}, align-items: ${z1t[j]}`;
        return Se!==ke.e&&Zr(fe,"data-selected",ke.e=Se),Fe!==ke.t&&Zr(fe,"data-hovered",ke.t=Fe),De!==ke.a&&Zr(fe,"data-column-selected",ke.a=De),Pe!==ke.o&&Zr(fe,"data-column-hovered",ke.o=Pe),Ne!==ke.i&&Zr(fe,"data-row-selected",ke.i=Ne),Oe!==ke.n&&Zr(fe,"data-row-hovered",ke.n=Oe),Ge!==ke.s&&Zr(fe,"aria-label",ke.s=Ge),ke
      },{
        e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0
      }),fe
    })()
  };
  return(()=>{
    var Y=m2f(), j=Y.firstChild, X=j.firstChild, ee=X.nextSibling, re=j.nextSibling, ne=re.firstChild, pe=ne.nextSibling, le=pe.firstChild, he=le.firstChild, be=le.nextSibling, fe=be.firstChild, ke=fe.nextSibling;
    return ge(ee, ()=>z(0, 0), null), ge(ee, ()=>z(0, 1), null), ge(ee, ()=>z(0, 2), null), ge(ee, ()=>z(1, 0), null), ge(ee, ()=>z(1, 1), null), ge(ee, ()=>z(1, 2), null), ge(ee, ()=>z(2, 0), null), ge(ee, ()=>z(2, 1), null), ge(ee, ()=>z(2, 2), null), Bs(hv, le, ()=>({
      getValue:()=>Math.round(n.gapValue()),onChange:Se=>{
        const Fe=Math.round(Se);
        n.isAutoGap()&&n.onJustifyContentChange("flex-start"),m(`${Fe}`),n.onGapChange(`${Fe}`)
      },min:0
    })), fe.addEventListener("keydown", Se=>{
      Se.key==="Enter"&&(p=!0,H(),Se.currentTarget.blur())
    }), fe.addEventListener("blur", W), fe.addEventListener("input", Se=>$(Se.currentTarget.value)), fe.addEventListener("focus", ()=>u(!0)), tn(Se=>{
      var Fe=g()?"true":void 0,De=g()?"Gap (auto = space-between)":"Gap",Pe=Qt.asClassName(Be.gap),Ne=`css-number-input ${g()?"css-number-input--mode-token":""}`,Oe=g()?"true":void 0;
      return Fe!==Se.e&&Zr(ee,"data-space-between",Se.e=Fe),De!==Se.t&&Zr(le,"title",Se.t=De),Pe!==Se.a&&Un(he,Se.a=Pe),Ne!==Se.o&&Un(fe,Se.o=Ne),Oe!==Se.i&&Zr(ke,"data-hidden",Se.i=Oe),Se
    }, {
      e:void 0,t:void 0,a:void 0,o:void 0,i:void 0
    }), tn(()=>fe.value=d()), Y
  })()
}
function pcy(n){
  const e=hv, [t, i]=lt(!1), [r, s]=lt(null), [o, a]=lt(null), [l, u]=lt(n.gridColumns().toString()), [d, m]=lt(n.gridRows().toString());
  let p;
  An(()=>{
    u(n.gridColumns().toString())
  }), An(()=>{
    m(n.gridRows().toString())
  });
  const g=R=>{
    R.preventDefault(), R.stopPropagation();
    const N=R.currentTarget.getBoundingClientRect();
    s({
      x:N.left,y:N.bottom+4
    }), i(!0), n.onMenuOpen?.()
  }, f=()=>{
    t()&&n.onMenuClose?.(), i(!1), s(null), a(null)
  }, A=(R, N)=>{
    n.onGridColumnsChange(R), n.onGridRowsChange(N), f()
  }, w=()=>{
    const R=parseInt(l(), 10);
    !isNaN(R)&&R>=1?n.onGridColumnsChange(R):u(n.gridColumns().toString())
  }, C=()=>{
    const R=parseInt(d(), 10);
    !isNaN(R)&&R>=1?n.onGridRowsChange(R):m(n.gridRows().toString())
  }, x=()=>{
    const R=o(), N=parseInt(l(), 10)||1, M=parseInt(d(), 10)||1;
    return{
      selectionCol:R!==null?R.col:N,selectionRow:R!==null?R.row:M
    }
  }, I=xe(()=>{
    const R=[];
    for(let N=1;
    N<=q2f;
    N++)for(let M=1;
    M<=$2f;
    M++)R.push({
      col:M,row:N
    });
    return R
  }), B=()=>K(ia, {
    get each(){
      return I()
    }, children:R=>{
      const N=()=>{
        const{
          selectionCol:M,selectionRow:O
        }
        =x();
        return R.col<=M&&R.row<=O
      };
      return(()=>{
        var M=p2f();
        return M.addEventListener("click",()=>A(R.col,R.row)),M.addEventListener("mouseenter",()=>a({
          col:R.col,row:R.row
        })),tn(()=>Zr(M,"data-selected",N()?"true":void 0)),M
      })()
    }
  });
  return(()=>{
    var R=f2f(), N=R.firstChild, M=N.firstChild, O=M.nextSibling, $=O.firstChild, H=$.firstChild, W=N.nextSibling, z=W.firstChild, Y=z.nextSibling, j=Y.firstChild, X=j.firstChild, ee=X.firstChild, re=X.nextSibling, ne=re.firstChild, pe=j.nextSibling, le=pe.firstChild, he=le.firstChild, be=le.nextSibling, fe=be.firstChild;
    O.addEventListener("click", g);
    var ke=p;
    return typeof ke=="function"?Bs(ke, O):p=O, ge($, ()=>n.gridColumns(), H), ge($, ()=>n.gridRows(), null), Bs(hv, X, ()=>({
      getValue:()=>Math.round(n.columnGapValue()),onChange:Se=>{
        n.onColumnGapChange(Math.round(Se).toString())
      },min:0
    })), ne.addEventListener("input", Se=>n.onColumnGapChange(Se.currentTarget.value)), Bs(hv, le, ()=>({
      getValue:()=>Math.round(n.rowGapValue()),onChange:Se=>{
        n.onRowGapChange(Math.round(Se).toString())
      },min:0
    })), fe.addEventListener("input", Se=>n.onRowGapChange(Se.currentTarget.value)), ge(R, K(Xe, {
      get when(){
        return Ui(()=>!!t())()&&r()
      },get children(){
        return K(Xme,{
          class:"css-grid-picker-menu",width:280,get position(){
            return r()
          },close:f,shouldMountInPortal:!0,shouldAutoFocus:!1,marginToOverflowRoot:4,anchor:"top-left",get overflowRoot(){
            return n.overflowRoot
          },get style(){
            return n.menuMaxWidth!==void 0?{
              "max-width":`${n.menuMaxWidth}px`
            }
            :void 0
          },get children(){
            var Se=g2f(),Fe=Se.firstChild,De=Fe.firstChild,Pe=De.nextSibling,Ne=Pe.firstChild,Oe=Ne.firstChild,Ge=Oe.firstChild,Le=Oe.nextSibling,We=Ne.nextSibling,tt=We.nextSibling,it=tt.firstChild,bt=it.firstChild,Nt=it.nextSibling,ft=Fe.nextSibling;
            return Bs(hv,Oe,()=>({
              getValue:()=>{
                const _t=parseInt(l(),10);
                return isNaN(_t)?1:_t
              },onChange:_t=>{
                const It=Math.max(1,Math.round(_t));
                u(It.toString()),n.onGridColumnsChange(It)
              },min:1
            })),Le.addEventListener("keydown",_t=>{
              _t.key==="Enter"&&(w(),_t.currentTarget.blur())
            }),Le.addEventListener("blur",w),Le.addEventListener("input",_t=>u(_t.currentTarget.value)),Bs(hv,it,()=>({
              getValue:()=>{
                const _t=parseInt(d(),10);
                return isNaN(_t)?1:_t
              },onChange:_t=>{
                const It=Math.max(1,Math.round(_t));
                m(It.toString()),n.onGridRowsChange(It)
              },min:1
            })),Nt.addEventListener("keydown",_t=>{
              _t.key==="Enter"&&(C(),_t.currentTarget.blur())
            }),Nt.addEventListener("blur",C),Nt.addEventListener("input",_t=>m(_t.currentTarget.value)),ft.addEventListener("mouseleave",()=>a(null)),ge(ft,B,null),ge(ft,K(Xe,{
              get when(){
                return o()
              },children:_t=>(()=>{
                var sn=b2f(),Vt=sn.firstChild;
                return ge(sn,()=>_t().col,Vt),ge(sn,()=>_t().row,null),tn(Ft=>{
                  var Xt=`${(_t().col-.5)*20}px`,bn=`${_t().row*20+4}px`;
                  return Xt!==Ft.e&&((Ft.e=Xt)!=null?sn.style.setProperty("left",Xt):sn.style.removeProperty("left")),bn!==Ft.t&&((Ft.t=bn)!=null?sn.style.setProperty("top",bn):sn.style.removeProperty("top")),Ft
                },{
                  e:void 0,t:void 0
                }),sn
              })()
            }),null),tn(_t=>{
              var It=Qt.asClassName(Be.gridCol),sn=Qt.asClassName(Be.gridRow);
              return It!==_t.e&&Un(Ge,_t.e=It),sn!==_t.t&&Un(bt,_t.t=sn),_t
            },{
              e:void 0,t:void 0
            }),tn(()=>Le.value=l()),tn(()=>Nt.value=d()),Se
          }
        })
      }
    }), null), tn(Se=>{
      var Fe=t(),De=Qt.asClassName(Be.gap),Pe=Qt.asClassName(Be.gap);
      return Fe!==Se.e&&Zr(O,"aria-expanded",Se.e=Fe),De!==Se.t&&Un(ee,Se.t=De),Pe!==Se.a&&Un(he,Se.a=Pe),Se
    }, {
      e:void 0,t:void 0,a:void 0
    }), tn(()=>ne.value=`${Math.round(n.columnGapValue())}`), tn(()=>fe.value=`${Math.round(n.rowGapValue())}`), R
  })()
}
function gcy(n){
  const e=hv, {
    showHover:t, hideHover:i
  }
  =ik(0), [r, s]=lt(!1), [o, a]=lt(!1), [l, u]=lt("0"), [d, m]=lt("0"), [p, g]=lt(!1), [f, A]=lt(!1), [w, C]=lt("0"), [x, I]=lt("0"), [B, R]=lt("0"), [N, M]=lt("0"), [O, $]=lt(!1), [H, W]=lt(!1), [z, Y]=lt(!1), [j, X]=lt(!1), [ee, re, ne]=RC(null), [pe, le, he]=RC(null), [be, fe, ke]=RC(null), [Se, Fe, De]=RC(null), [Pe, Ne, Oe]=RC(null), [Ge, Le, We]=RC(null);
  let tt, it, bt, Nt;
  const ft=(rr, Ys)=>{
    if(!rr)return;
    const Fo=rr.getBoundingClientRect();
    t({
      content:Ys,target:{
        targetElements:[rr],x:Fo.left+Fo.width/2-60,y:Fo.bottom+4
      },position:{
        hoverPosition:2
      },appearance:{
        compact:!0
      },persistence:{
        hideOnHover:!0
      }
    })
  }, _t={
    width:{
      position:ee,setPosition:re,resetPosition:ne
    }, height:{
      position:pe,setPosition:le,resetPosition:he
    }
  }, It={
    "min-width":{
      position:be,setPosition:fe,resetPosition:ke
    }, "max-width":{
      position:Se,setPosition:Fe,resetPosition:De
    }, "min-height":{
      position:Pe,setPosition:Ne,resetPosition:Oe
    }, "max-height":{
      position:Ge,setPosition:Le,resetPosition:We
    }
  }, sn={
    "min-width":n.minWidthValue, "max-width":n.maxWidthValue, "min-height":n.minHeightValue, "max-height":n.maxHeightValue
  }, Vt=["min-width", "max-width", "min-height", "max-height"], [Ft, Xt]=lt(new Set), bn=rr=>{
    Xt(Ys=>{
      if(Ys.has(rr))return Ys;
      const Fo=new Set(Ys);
      return Fo.add(rr),Fo
    })
  }, St=rr=>{
    Xt(Ys=>{
      if(!Ys.has(rr))return Ys;
      const Fo=new Set(Ys);
      return Fo.delete(rr),Fo
    })
  }, Bt=rr=>Ft().has(rr), Jt=rr=>rr==="width"?n.widthValue():n.heightValue(), Ot=rr=>rr==="width"?n.widthMode():n.heightMode(), cn=(rr, Ys)=>{
    const[Fo, Wa]=lt(rr()), [ll, Xc]=lt(!1), [Ns, Yi]=lt(0);
    An(()=>{
      ll()||Ns()>0||Wa(rr())
    });
    const Qr=()=>{
      Xc(!0)
    }, fs=()=>{
      const Ts=Fo();
      Ts!==rr()&&Ys.onCommit(Ts)
    };
    return{
      value:Fo,setValue:Wa,handleFocus:Qr,handleBlur:()=>{
        Xc(!1),!(Ns()>0)&&(fs(),Wa(rr()))
      },handleInput:Ts=>{
        Wa(Ts)
      },handleKeyDown:Ts=>{
        if(Ts.key==="Enter"){
          Ts.preventDefault(),fs(),Ts.currentTarget.blur();
          return
        }
        Ts.key==="Escape"&&(Ts.preventDefault(),Ts.stopPropagation(),Wa(rr()),Ts.currentTarget.blur())
      },beginExternalEdit:()=>{
        Yi(Ts=>Ts+1)
      },endExternalEdit:()=>{
        Yi(Ts=>{
          const xc=Math.max(0,Ts-1);
          return xc===0&&Wa(rr()),xc
        })
      }
    }
  }, Mt=rr=>{
    const Ys=Ot(rr);
    return Ys==="fixed"?`${Math.round(Jt(rr))}`:Ys==="fit"?"Fit":"Fill"
  }, Pt={
    width:cn(()=>Mt("width"), {
      onCommit:rr=>{
        n.onDimensionChange("width",rr)
      }
    }), height:cn(()=>Mt("height"), {
      onCommit:rr=>{
        n.onDimensionChange("height",rr)
      }
    })
  }, ut=rr=>sn[rr]()??null, ot=rr=>{
    const Ys=zit[rr], Fo=ut(rr), Wa=Jt(Ys.dimension);
    return`${Math.round(Fo??Wa)}`
  }, Lt={
    "min-width":cn(()=>ot("min-width"), {
      onCommit:rr=>{
        n.onConstraintChange("min-width",rr)
      }
    }), "max-width":cn(()=>ot("max-width"), {
      onCommit:rr=>{
        n.onConstraintChange("max-width",rr)
      }
    }), "min-height":cn(()=>ot("min-height"), {
      onCommit:rr=>{
        n.onConstraintChange("min-height",rr)
      }
    }), "max-height":cn(()=>ot("max-height"), {
      onCommit:rr=>{
        n.onConstraintChange("max-height",rr)
      }
    })
  }, Gt=rr=>ut(rr)!==null, jt=rr=>Gt(rr)||Bt(rr);
  An(()=>{
    for(const rr of Vt)Gt(rr)?bn(rr):St(rr)
  });
  const hn=rr=>zit[rr].dimension, on=rr=>!jt(rr), en=(rr, Ys)=>{
    if(rr.preventDefault(), rr.stopPropagation(), Ys.position()){
      n.onMenuClose?.(),Ys.resetPosition();
      return
    }
    const Fo=rr.currentTarget.getBoundingClientRect();
    Ys.setPosition({
      x:Fo.right,y:Fo.bottom+4
    }), n.onMenuOpen?.()
  }, gt=rr=>{
    rr.position()&&n.onMenuClose?.(), rr.resetPosition()
  }, At=(rr, Ys)=>{
    n.onDimensionModeChange(rr, Ys), gt(_t[rr])
  }, Tt=rr=>{
    bn(rr), n.onConstraintAdd(rr), gt(_t[hn(rr)])
  }, ze=rr=>{
    n.onConstraintSetToCurrent(rr), gt(It[rr])
  }, Yt=rr=>zit[rr].longLabel.replace(/\b\w/g, Ys=>Ys.toUpperCase()), kt=rr=>{
    St(rr), n.onConstraintRemove(rr), gt(It[rr])
  };
  An(Bf(()=>n.elementPath(), ()=>{
    const rr=Bn("vertical")||Bn("horizontal");
    s(rr);
    const Ys=Xn("vertical")||Xn("horizontal");
    a(Ys)
  }, {
    defer:!1
  }));
  const xt=rr=>{
    switch(rr){
      case"top":return n.paddingTopValue();
      case"right":return n.paddingRightValue();
      case"bottom":return n.paddingBottomValue();
      case"left":return n.paddingLeftValue()
    }
  }, un=rr=>{
    switch(rr){
      case"top":return n.marginTopValue();
      case"right":return n.marginRightValue();
      case"bottom":return n.marginBottomValue();
      case"left":return n.marginLeftValue()
    }
  }, nn=rr=>un(rr)==="auto", Dn=rr=>{
    const Ys=un(rr);
    return Ys==="auto"?0:Ys
  }, Bn=rr=>rr==="vertical"?Math.round(n.paddingTopValue())!==Math.round(n.paddingBottomValue()):Math.round(n.paddingLeftValue())!==Math.round(n.paddingRightValue()), Vn=rr=>{
    if(rr==="vertical"){
      const Wa=Math.round(n.paddingTopValue()),ll=Math.round(n.paddingBottomValue());
      return`Padding top ${Wa}px \xB7 bottom ${ll}px`
    }
    const Ys=Math.round(n.paddingLeftValue()), Fo=Math.round(n.paddingRightValue());
    return`Padding left ${Ys}px \xB7 right ${Fo}px`
  }, Xn=rr=>{
    if(rr==="vertical"){
      const Wa=n.marginTopValue(),ll=n.marginBottomValue();
      return Wa!==ll
    }
    const Ys=n.marginLeftValue(), Fo=n.marginRightValue();
    return Ys!==Fo
  }, hi=rr=>{
    const Ys=ll=>ll==="auto"?"auto":`${Math.round(ll)}px`;
    if(rr==="vertical"){
      const ll=Ys(n.marginTopValue()),Xc=Ys(n.marginBottomValue());
      return`Margin top ${ll} \xB7 bottom ${Xc}`
    }
    const Fo=Ys(n.marginLeftValue()), Wa=Ys(n.marginRightValue());
    return`Margin left ${Fo} \xB7 right ${Wa}`
  }, Si=rr=>{
    const Ys=rr==="vertical"?n.marginTopValue():n.marginLeftValue();
    return Ys==="auto"?"auto":`${Math.round(Ys)}`
  }, Xi=rr=>(rr==="vertical"?n.marginTopValue():n.marginLeftValue())==="auto";
  An(()=>{
    if(!p()){
      const rr=n.marginTopValue();
      u(rr==="auto"?"auto":`${Math.round(rr)}`)
    }
  }), An(()=>{
    if(!f()){
      const rr=n.marginLeftValue();
      m(rr==="auto"?"auto":`${Math.round(rr)}`)
    }
  }), An(()=>{
    if(!O()){
      const rr=n.marginTopValue();
      C(rr==="auto"?"auto":`${Math.round(rr)}`)
    }
  }), An(()=>{
    if(!H()){
      const rr=n.marginRightValue();
      I(rr==="auto"?"auto":`${Math.round(rr)}`)
    }
  }), An(()=>{
    if(!z()){
      const rr=n.marginBottomValue();
      R(rr==="auto"?"auto":`${Math.round(rr)}`)
    }
  }), An(()=>{
    if(!j()){
      const rr=n.marginLeftValue();
      M(rr==="auto"?"auto":`${Math.round(rr)}`)
    }
  });
  const Ji=rr=>rr==="vertical"?`${Math.round(n.paddingTopValue())}`:`${Math.round(n.paddingLeftValue())}`, qr=rr=>(()=>{
    var Ys=qvu(), Fo=Ys.firstChild, Wa=Fo.firstChild, ll=Fo.nextSibling, Xc=ll.firstChild;
    return Bs(hv, Fo, ()=>({
      getValue:()=>Math.round(rr==="vertical"?n.paddingTopValue():n.paddingLeftValue()),onChange:Ns=>{
        n.onLinkedPaddingChange(rr,Math.round(Math.max(0,Ns)).toString())
      },min:0
    })), Zr(Fo, "aria-label", rr==="vertical"?"Padding top and bottom":"Padding left and right"), Xc.addEventListener("input", Ns=>n.onLinkedPaddingChange(rr, Ns.currentTarget.value)), tn(Ns=>{
      var Yi=Vn(rr),Qr=Bn(rr)?"true":void 0,fs=Qt.asClassName(N2f[rr]);
      return Yi!==Ns.e&&Zr(Fo,"title",Ns.e=Yi),Qr!==Ns.t&&Zr(Fo,"data-mismatch",Ns.t=Qr),fs!==Ns.a&&Un(Wa,Ns.a=fs),Ns
    }, {
      e:void 0,t:void 0,a:void 0
    }), tn(()=>Xc.value=Ji(rr)), Ys
  })(), Ni=rr=>(()=>{
    var Ys=qvu(), Fo=Ys.firstChild, Wa=Fo.firstChild, ll=Fo.nextSibling, Xc=ll.firstChild;
    return Bs(hv, Fo, ()=>({
      getValue:()=>Math.round(xt(rr)),onChange:Ns=>{
        n.onPaddingChange(rr,Math.round(Math.max(0,Ns)).toString())
      },min:0
    })), Zr(Fo, "aria-label", `Padding ${rr}`), Zr(Fo, "title", `Padding ${rr}`), Xc.addEventListener("input", Ns=>n.onPaddingChange(rr, Ns.currentTarget.value)), tn(()=>Un(Wa, Qt.asClassName(M2f[rr]))), tn(()=>Xc.value=`${Math.round(xt(rr))}`), Ys
  })(), Ii=rr=>{
    const Ys=rr==="vertical"?l():d(), Fo=rr==="vertical"?u:m, Wa=Ys.trim().toLowerCase();
    if(Wa==="auto")n.onLinkedMarginChange(rr, "auto");
    else{
      const ll=parseFloat(Wa);
      isNaN(ll)?Fo(Si(rr)):n.onLinkedMarginChange(rr,Math.round(ll).toString())
    }
  }, Ar=rr=>{
    const Ys=rr==="vertical"?l:d, Fo=rr==="vertical"?u:m, Wa=rr==="vertical"?g:A;
    return(()=>{
      var ll=Hvu(),Xc=ll.firstChild,Ns=Xc.firstChild,Yi=Xc.nextSibling,Qr=Yi.firstChild,fs=Qr.nextSibling;
      return Bs(hv,Xc,()=>({
        getValue:()=>{
          const pr=rr==="vertical"?n.marginTopValue():n.marginLeftValue();
          return pr==="auto"?0:Math.round(pr)
        },onChange:pr=>{
          n.onLinkedMarginChange(rr,Math.round(pr).toString())
        }
      })),Zr(Xc,"aria-label",rr==="vertical"?"Margin top and bottom":"Margin left and right"),Qr.addEventListener("keydown",pr=>{
        pr.key==="Enter"&&(Ii(rr),pr.currentTarget.blur())
      }),Qr.addEventListener("blur",()=>{
        Ii(rr),Wa(!1)
      }),Qr.addEventListener("input",pr=>Fo(pr.currentTarget.value)),Qr.addEventListener("focus",()=>Wa(!0)),tn(pr=>{
        var Dr=hi(rr),mi=Xn(rr)?"true":void 0,vo=Qt.asClassName(F2f[rr]),tr=`css-number-input ${Xi(rr)?"css-number-input--mode-token":""}`,Ts=Xi(rr)?"true":void 0;
        return Dr!==pr.e&&Zr(Xc,"title",pr.e=Dr),mi!==pr.t&&Zr(Xc,"data-mismatch",pr.t=mi),vo!==pr.a&&Un(Ns,pr.a=vo),tr!==pr.o&&Un(Qr,pr.o=tr),Ts!==pr.i&&Zr(fs,"data-hidden",pr.i=Ts),pr
      },{
        e:void 0,t:void 0,a:void 0,o:void 0,i:void 0
      }),tn(()=>Qr.value=Ys()),ll
    })()
  }, er=rr=>{
    switch(rr){
      case"top":return{
        inputValue:w,setInputValue:C,setIsFocused:$
      };
      case"right":return{
        inputValue:x,setInputValue:I,setIsFocused:W
      };
      case"bottom":return{
        inputValue:B,setInputValue:R,setIsFocused:Y
      };
      case"left":return{
        inputValue:N,setInputValue:M,setIsFocused:X
      }
    }
  }, Sr=rr=>{
    const{
      inputValue:Ys,setInputValue:Fo
    }
    =er(rr), Wa=Ys().trim().toLowerCase();
    if(Wa==="auto")n.onMarginChange(rr, "auto");
    else{
      const ll=parseFloat(Wa);
      if(!isNaN(ll))n.onMarginChange(rr,Math.round(ll).toString());
      else{
        const Xc=un(rr);
        Fo(Xc==="auto"?"auto":`${Math.round(Xc)}`)
      }
    }
  }, Es=rr=>{
    const{
      inputValue:Ys,setInputValue:Fo,setIsFocused:Wa
    }
    =er(rr);
    return(()=>{
      var ll=Hvu(),Xc=ll.firstChild,Ns=Xc.firstChild,Yi=Xc.nextSibling,Qr=Yi.firstChild,fs=Qr.nextSibling;
      return Bs(hv,Xc,()=>({
        getValue:()=>Dn(rr),onChange:pr=>{
          n.onMarginChange(rr,Math.round(pr).toString())
        }
      })),Zr(Xc,"aria-label",`Margin ${rr}`),Zr(Xc,"title",`Margin ${rr}`),Qr.addEventListener("keydown",pr=>{
        pr.key==="Enter"&&(Sr(rr),pr.currentTarget.blur())
      }),Qr.addEventListener("blur",()=>{
        Sr(rr),Wa(!1)
      }),Qr.addEventListener("input",pr=>Fo(pr.currentTarget.value)),Qr.addEventListener("focus",()=>Wa(!0)),tn(pr=>{
        var Dr=Qt.asClassName(O2f[rr]),mi=`css-number-input ${nn(rr)?"css-number-input--mode-token":""}`,vo=nn(rr)?"true":void 0;
        return Dr!==pr.e&&Un(Ns,pr.e=Dr),mi!==pr.t&&Un(Qr,pr.t=mi),vo!==pr.a&&Zr(fs,"data-hidden",pr.a=vo),pr
      },{
        e:void 0,t:void 0,a:void 0
      }),tn(()=>Qr.value=Ys()),ll
    })()
  };
  function Pi(rr){
    const Ys=rr.dimension, Fo=Ys==="width"?"W":"H", Wa=_t[Ys], ll=Pt[Ys], Xc=xe(()=>Ot(Ys)), Ns=xe(()=>Xc()==="fixed"), Yi=xe(()=>Ns()?ll.value():Mt(Ys));
    let Qr;
    const fs=pr=>{
      if(pr.preventDefault(),pr.stopPropagation(),Wa.position()){
        n.onMenuClose?.(),Wa.resetPosition();
        return
      }
      const mi=(Ys==="width"&&Qr?Qr:pr.currentTarget).getBoundingClientRect();
      Wa.setPosition({
        x:Ys==="width"?mi.left:mi.right,y:mi.bottom+4
      }),n.onMenuOpen?.()
    };
    return(()=>{
      var pr=v2f(),Dr=pr.firstChild,mi=Dr.nextSibling,vo=mi.firstChild,tr=vo.nextSibling,Ts=tr.nextSibling,xc=Ts.firstChild;
      Bs(hv,Dr,()=>({
        getValue:()=>{
          const Ra=parseFloat(ll.value());
          return Number.isNaN(Ra)?Math.round(Jt(Ys)):Ra
        },onChange:Ra=>{
          const Vh=`${Math.round(Math.max(0,Ra))}`;
          ll.setValue(Vh),n.onDimensionChange(Ys,Vh)
        },min:0,onStart:()=>ll.beginExternalEdit(),onEnd:()=>ll.endExternalEdit()
      })),ge(Dr,Fo);
      var Ea=Qr;
      return typeof Ea=="function"?Bs(Ea,mi):Qr=mi,vo.addEventListener("keydown",Ra=>ll.handleKeyDown(Ra)),vo.addEventListener("input",Ra=>{
        ll.handleInput(Ra.currentTarget.value)
      }),vo.addEventListener("blur",()=>ll.handleBlur()),vo.addEventListener("focus",()=>ll.handleFocus()),Ts.addEventListener("click",fs),tn(Ra=>{
        var gm=sCi[Ys],Vh=Xc(),Lc=`css-number-input ${Ns()?"":"css-number-input--mode-token"}`,Bu=Ns()?"number":"text",Mh=Ns()?"numeric":"text",no=Ns()?"0":void 0,Sl=!Ns(),Zd=Ns()?void 0:"true",pa=`Open ${sCi[Ys]} menu`,Wl=Qt.asClassName(Be.chevronDown);
        return gm!==Ra.e&&Zr(Dr,"aria-label",Ra.e=gm),Vh!==Ra.t&&Zr(mi,"data-dimension-mode",Ra.t=Vh),Lc!==Ra.a&&Un(vo,Ra.a=Lc),Bu!==Ra.o&&Zr(vo,"type",Ra.o=Bu),Mh!==Ra.i&&Zr(vo,"inputmode",Ra.i=Mh),no!==Ra.n&&Zr(vo,"min",Ra.n=no),Sl!==Ra.s&&(vo.readOnly=Ra.s=Sl),Zd!==Ra.h&&Zr(tr,"data-hidden",Ra.h=Zd),pa!==Ra.r&&Zr(Ts,"aria-label",Ra.r=pa),Wl!==Ra.d&&Un(xc,Ra.d=Wl),Ra
      },{
        e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0
      }),tn(()=>vo.value=Yi()),pr
    })()
  }
  const gi=rr=>{
    const Ys=Jvu[rr];
    return(()=>{
      var Fo=A2f();
      return ge(Fo,K(Pi,{
        dimension:rr
      }),null),ge(Fo,K(ia,{
        each:Ys,children:Wa=>K(Xe,{
          get when(){
            return Bt(Wa)
          },get children(){
            return K(_i,{
              constraint:Wa
            })
          }
        })
      }),null),Fo
    })()
  };
  function _i(rr){
    const Ys=rr.constraint, Fo=zit[Ys], Wa=It[Ys], ll=Lt[Ys], Xc=xe(()=>ot(Ys)), Ns=Fo.longLabel.replace(/\b\w/g, Yi=>Yi.toUpperCase());
    return(()=>{
      var Yi=y2f(),Qr=Yi.firstChild,fs=Qr.nextSibling,pr=fs.firstChild,Dr=pr.firstChild,mi=pr.nextSibling,vo=mi.firstChild,tr=vo.nextSibling,Ts=tr.nextSibling,xc=Ts.firstChild;
      return ge(Qr,Ns),Bs(hv,pr,()=>({
        getValue:()=>{
          const Ea=parseFloat(ll.value());
          if(!Number.isNaN(Ea))return Ea;
          const Ra=parseFloat(Xc());
          return Number.isNaN(Ra)?0:Ra
        },onChange:Ea=>{
          const Ra=Math.round(Math.max(0,Ea)).toString();
          ll.setValue(Ra),n.onConstraintChange(Ys,Ra)
        },min:0,onStart:()=>ll.beginExternalEdit(),onEnd:()=>ll.endExternalEdit()
      })),vo.addEventListener("keydown",Ea=>ll.handleKeyDown(Ea)),vo.addEventListener("input",Ea=>{
        ll.handleInput(Ea.currentTarget.value)
      }),vo.addEventListener("blur",()=>ll.handleBlur()),vo.addEventListener("focus",()=>ll.handleFocus()),Ts.addEventListener("click",Ea=>en(Ea,Wa)),tn(Ea=>{
        var Ra=Fo.ariaLabel,gm=Fo.ariaLabel,Vh=Qt.asClassName(Fo.icon),Lc=Fo.rotateIcon?{
          transform:"rotate(90deg)"
        }
        :void 0,Bu=`Open ${Fo.longLabel} menu`,Mh=Qt.asClassName(Be.chevronDown);
        return Ra!==Ea.e&&Zr(pr,"aria-label",Ea.e=Ra),gm!==Ea.t&&Zr(pr,"title",Ea.t=gm),Vh!==Ea.a&&Un(Dr,Ea.a=Vh),Ea.o=La(Dr,Lc,Ea.o),Bu!==Ea.i&&Zr(Ts,"aria-label",Ea.i=Bu),Mh!==Ea.n&&Un(xc,Ea.n=Mh),Ea
      },{
        e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0
      }),tn(()=>vo.value=ll.value()),Yi
    })()
  }
  const Wi=rr=>{
    const Ys=_t[rr], Fo=Ot(rr), Wa=Math.round(Jt(rr)), ll=Jvu[rr].filter(Yi=>on(Yi)), Xc=rr==="height", Ns=[{
      mode:"fixed",label:`Fixed ${sCi[rr]}`,measurement:`(${Wa})`,icon:Be.fixed,rotateIcon:Xc
    }, {
      mode:"fit",label:"Fit contents",icon:Be.hug
    }, {
      mode:"fill",label:"Fill container",icon:Be.fillWidth,rotateIcon:Xc
    }
    ];
    return K(Xme, {
      class:"css-dimension-menu-surface",width:180,get position(){
        return Ys.position()
      },close:()=>gt(Ys),shouldMountInPortal:!0,shouldAutoFocus:!1,marginToOverflowRoot:4,anchor:rr==="width"?"top-left":"top-right",get overflowRoot(){
        return n.overflowRoot
      },get style(){
        return n.menuMaxWidth!==void 0?{
          "max-width":`${n.menuMaxWidth}px`
        }
        :void 0
      },get children(){
        var Yi=_2f();
        return ge(Yi,K(ia,{
          each:Ns,children:Qr=>(()=>{
            var fs=S2f(),pr=fs.firstChild,Dr=pr.firstChild,mi=Dr.nextSibling;
            return fs.addEventListener("click",vo=>{
              vo.stopPropagation(),At(rr,Qr.mode)
            }),ge(mi,()=>Qr.label,null),ge(mi,K(Xe,{
              get when(){
                return Qr.measurement
              },get children(){
                var vo=C2f(),tr=vo.firstChild;
                return ge(vo,()=>Qr.measurement,null),vo
              }
            }),null),ge(fs,K(Xe,{
              get when(){
                return Fo===Qr.mode
              },get children(){
                var vo=$vu();
                return tn(()=>Un(vo,Qt.asClassName(Be.check))),vo
              }
            }),null),tn(vo=>{
              var tr=`css-dimension-menu-item ${Fo===Qr.mode?"active":""}`,Ts=`css-dimension-menu-icon ${Qt.asClassName(Qr.icon)}`,xc=Qr.rotateIcon?{
                transform:"rotate(90deg)"
              }
              :void 0;
              return tr!==vo.e&&Un(fs,vo.e=tr),Ts!==vo.t&&Un(Dr,vo.t=Ts),vo.a=La(Dr,xc,vo.a),vo
            },{
              e:void 0,t:void 0,a:void 0
            }),fs
          })()
        }),null),ge(Yi,K(Xe,{
          get when(){
            return ll.length>0
          },get children(){
            return[w2f(),K(ia,{
              each:ll,children:Qr=>(()=>{
                var fs=k2f(),pr=fs.firstChild,Dr=pr.firstChild,mi=Dr.nextSibling;
                return fs.addEventListener("click",vo=>{
                  vo.stopPropagation(),Tt(Qr)
                }),ge(mi,()=>`Add ${Yt(Qr)}`),tn(vo=>{
                  var tr=`css-dimension-menu-icon ${Qt.asClassName(zit[Qr].icon)}`,Ts=zit[Qr].rotateIcon?{
                    transform:"rotate(90deg)"
                  }
                  :void 0;
                  return tr!==vo.e&&Un(Dr,vo.e=tr),vo.t=La(Dr,Ts,vo.t),vo
                },{
                  e:void 0,t:void 0
                }),fs
              })()
            })]
          }
        }),null),Yi
      }
    })
  }, Kr=rr=>{
    const Ys=It[rr], Fo=sCi[hn(rr)];
    return K(Xme, {
      class:"css-dimension-menu-surface",width:200,get position(){
        return Ys.position()
      },close:()=>gt(Ys),shouldMountInPortal:!0,shouldAutoFocus:!1,marginToOverflowRoot:4,anchor:"top-right",get overflowRoot(){
        return n.overflowRoot
      },get style(){
        return n.menuMaxWidth!==void 0?{
          "max-width":`${n.menuMaxWidth}px`
        }
        :void 0
      },get children(){
        var Wa=E2f(),ll=Wa.firstChild,Xc=ll.firstChild,Ns=Xc.firstChild,Yi=Ns.nextSibling,Qr=ll.nextSibling,fs=Qr.firstChild,pr=fs.firstChild,Dr=pr.nextSibling;
        return ll.addEventListener("click",mi=>{
          mi.stopPropagation(),ze(rr)
        }),ge(Yi,()=>`Set to current ${Fo.toLowerCase()}`),Qr.addEventListener("click",mi=>{
          mi.stopPropagation(),kt(rr)
        }),ge(Dr,()=>`Remove ${zit[rr].longLabel}`),tn(mi=>{
          var vo=`css-dimension-menu-icon ${Qt.asClassName(Be.remove)}`,tr=`css-dimension-menu-icon ${Qt.asClassName(Be.removeWidth)}`;
          return vo!==mi.e&&Un(Ns,mi.e=vo),tr!==mi.t&&Un(pr,mi.t=tr),mi
        },{
          e:void 0,t:void 0
        }),Wa
      }
    })
  };
  return(()=>{
    var rr=I2f(), Ys=rr.firstChild, Fo=Ys.nextSibling, Wa=Fo.firstChild, ll=Wa.firstChild, Xc=ll.nextSibling, Ns=Wa.nextSibling, Yi=Ns.firstChild, Qr=Yi.nextSibling, fs=Ns.nextSibling, pr=fs.firstChild, Dr=pr.firstChild, mi=Dr.nextSibling, vo=mi.firstChild, tr=fs.nextSibling, Ts=tr.firstChild, xc=Ts.firstChild, Ea=tr.nextSibling, Ra=Ea.firstChild, gm=Ra.firstChild, Vh=gm.nextSibling, Lc=Vh.firstChild, Bu=Ea.nextSibling, Mh=Bu.firstChild, no=Mh.firstChild;
    ge(Xc, K(ia, {
      each:e2f,children:pa=>{
        let Wl;
        return(()=>{
          var ih=D2f(),Eh=ih.firstChild,Tp=Eh.firstChild;
          ih.addEventListener("click",Kg=>{
            Kg.stopPropagation(),n.onLayoutModeChange(pa.mode)
          }),Yd(ih,"mouseleave",i),ih.addEventListener("mouseenter",()=>{
            if(Wl){
              const Kg=Wl.getBoundingClientRect();
              t({
                content:pa.label,target:{
                  targetElements:[Wl],x:Kg.left+Kg.width/2,y:Kg.bottom+4
                },position:{
                  hoverPosition:2
                },appearance:{
                  compact:!0
                },persistence:{
                  hideOnHover:!0
                }
              })
            }
          });
          var yA=Wl;
          return typeof yA=="function"?Bs(yA,ih):Wl=ih,tn(Kg=>{
            var zy=n.layoutMode()===pa.mode,rp=Qt.asClassName(pa.codicon);
            return zy!==Kg.e&&ih.classList.toggle("active",Kg.e=zy),rp!==Kg.t&&Un(Tp,Kg.t=rp),Kg
          },{
            e:void 0,t:void 0
          }),ih
        })()
      }
    })), ge(Qr, ()=>gi("width"), null), ge(Qr, ()=>gi("height"), null), ge(Fo, K(Xe, {
      get when(){
        return n.layoutMode()==="row"||n.layoutMode()==="column"
      },get children(){
        return K(mcy,{
          get layoutMode(){
            return n.layoutMode
          },get justifyContent(){
            return n.justifyContent
          },get alignItems(){
            return n.alignItems
          },get gapValue(){
            return n.gapValue
          },get isAutoGap(){
            return n.isAutoGap
          },get onJustifyContentChange(){
            return n.onJustifyContentChange
          },get onAlignItemsChange(){
            return n.onAlignItemsChange
          },get onGapChange(){
            return n.onGapChange
          }
        })
      }
    }), fs), ge(Fo, K(Xe, {
      get when(){
        return n.layoutMode()==="grid"
      },get children(){
        return K(pcy,{
          get gridColumns(){
            return n.gridColumns
          },get gridRows(){
            return n.gridRows
          },get rowGapValue(){
            return n.rowGapValue
          },get columnGapValue(){
            return n.columnGapValue
          },get onGridColumnsChange(){
            return n.onGridColumnsChange
          },get onGridRowsChange(){
            return n.onGridRowsChange
          },get onRowGapChange(){
            return n.onRowGapChange
          },get onColumnGapChange(){
            return n.onColumnGapChange
          },get onMenuOpen(){
            return n.onMenuOpen
          },get onMenuClose(){
            return n.onMenuClose
          },get menuMaxWidth(){
            return n.menuMaxWidth
          },get overflowRoot(){
            return n.overflowRoot
          }
        })
      }
    }), fs), Yd(mi, "mouseleave", i), mi.addEventListener("mouseenter", ()=>{
      const pa=r()?"Edit vertical/horizontal":"Edit sides";
      ft(bt,pa)
    }), mi.addEventListener("click", pa=>{
      pa.stopPropagation(),s(!r())
    });
    var Sl=bt;
    typeof Sl=="function"?Bs(Sl, mi):bt=mi, ge(fs, K(Xe, {
      get when(){
        return r()
      },get fallback(){
        return(()=>{
          var pa=B2f();
          return ge(pa,()=>qr("vertical"),null),ge(pa,()=>qr("horizontal"),null),pa
        })()
      },get children(){
        var pa=x2f();
        return ge(pa,K(ia,{
          each:P2f,children:Wl=>Ni(Wl)
        })),pa
      }
    }), null), Ts.addEventListener("click", ()=>{
      n.onClipContentToggle(!n.isClipContentEnabled()),tt?.focus()
    }), ge(Ts, K(uxe, {
      get value(){
        return n.isClipContentEnabled()
      },get onChange(){
        return n.onClipContentToggle
      },tabFocusable:!0,size:"small",ariaLabel:"Toggle clip content",elementRef:pa=>{
        tt=pa
      }
    }), xc), Yd(Vh, "mouseleave", i), Vh.addEventListener("mouseenter", ()=>{
      const pa=o()?"Edit vertical/horizontal":"Edit sides";
      ft(Nt,pa)
    }), Vh.addEventListener("click", pa=>{
      pa.stopPropagation(),a(!o())
    });
    var Zd=Nt;
    return typeof Zd=="function"?Bs(Zd, Vh):Nt=Vh, ge(Ea, K(Xe, {
      get when(){
        return o()
      },get fallback(){
        return(()=>{
          var pa=R2f();
          return ge(pa,()=>Ar("vertical"),null),ge(pa,()=>Ar("horizontal"),null),pa
        })()
      },get children(){
        var pa=T2f();
        return ge(pa,K(ia,{
          each:L2f,children:Wl=>Es(Wl)
        })),pa
      }
    }), null), Mh.addEventListener("click", ()=>{
      n.onBoxSizingToggle(!n.isBorderBoxSizing()),it?.focus()
    }), ge(Mh, K(uxe, {
      get value(){
        return n.isBorderBoxSizing()
      },get onChange(){
        return n.onBoxSizingToggle
      },tabFocusable:!0,size:"small",ariaLabel:"Toggle border-box sizing",elementRef:pa=>{
        it=pa
      }
    }), no), ge(rr, K(Xe, {
      get when(){
        return ee()
      },get children(){
        return Wi("width")
      }
    }), null), ge(rr, K(Xe, {
      get when(){
        return pe()
      },get children(){
        return Wi("height")
      }
    }), null), ge(rr, K(Xe, {
      get when(){
        return be()
      },get children(){
        return Kr("min-width")
      }
    }), null), ge(rr, K(Xe, {
      get when(){
        return Se()
      },get children(){
        return Kr("max-width")
      }
    }), null), ge(rr, K(Xe, {
      get when(){
        return Pe()
      },get children(){
        return Kr("min-height")
      }
    }), null), ge(rr, K(Xe, {
      get when(){
        return Ge()
      },get children(){
        return Kr("max-height")
      }
    }), null), tn(pa=>{
      var Wl=`css-padding-mode-toggle ${r()?"active":""}`,ih=Qt.asClassName(Be.padAll),Eh=`css-margin-mode-toggle ${o()?"active":""}`,Tp=Qt.asClassName(Be.padAll);
      return Wl!==pa.e&&Un(mi,pa.e=Wl),ih!==pa.t&&Un(vo,pa.t=ih),Eh!==pa.a&&Un(Vh,pa.a=Eh),Tp!==pa.o&&Un(Lc,pa.o=Tp),pa
    }, {
      e:void 0,t:void 0,a:void 0,o:void 0
    }), rr
  })()
}
var $vu, d2f, h2f, m2f, p2f, g2f, f2f, b2f, qvu, Hvu, v2f, A2f, y2f, w2f, _2f, C2f, S2f, k2f, E2f, x2f, T2f, I2f, D2f, B2f, R2f, P2f, L2f, N2f, M2f, F2f, O2f, sCi, zit, Jvu, Gvu, z1t, U2f, $2f, q2f, fcy=