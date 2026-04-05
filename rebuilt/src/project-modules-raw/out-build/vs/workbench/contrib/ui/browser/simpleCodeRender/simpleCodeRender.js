// Module: out-build/vs/workbench/contrib/ui/browser/simpleCodeRender/simpleCodeRender.js
// Offset: 32055956 (bundle byte offset)
// Size: 8890 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), qi(), Jr(), Yn(), es(), eEe(), Acy(), Wvu=qe("<div>"), Qvu=qe("<span>"), J2f=qe("<div class=input-box-code-selection-collapse-toggle>")
}
});
function jvu(n){
  return typeof n=="object"&&n!==null&&n.__type==="function"&&typeof n.source=="string"
}
function S1a(n, e=0, t=4){
  if(n===null)return"null";
  if(n===void 0)return"undefined";
  if(typeof n=="string")return`"${n}"`;
  if(typeof n=="number"||typeof n=="boolean")return String(n);
  if(typeof n=="function")return"\u0192()";
  if(jvu(n))return n.source;
  if(e>=t){
    if(Array.isArray(n))return`[\u2026${n.length}]`;
    if(typeof n=="object")return"{\u2026}"
  }
  if(Array.isArray(n))return n.length===0?"[]":`[${n.map(r=>S1a(r,e+1,t)).join(", ")}]`;
  if(typeof n=="object"){
    const i=Object.keys(n);
    return i.length===0?"{}":`{ ${i.map(s=>{const o=n[s];return`${
      s
    }
    : ${
      S1a(o,e+1,t)
    }
    `}).join(", ")} }`
  }
  return String(n)
}
function G2f(n){
  return n.length===0?"[]":`[${n.map(t=>S1a(t)).join(", ")}]`
}
function W2f(n){
  const e=Object.keys(n);
  return e.length===0?"{}":`{ ${e.map(i=>{const r=n[i];return`${
    i
  }
  : ${
    S1a(r)
  }
  `}).join(", ")} }`
}
function zvu(n){
  if(n===null)return"null";
  if(Array.isArray(n))return"array";
  if(typeof n=="function"||jvu(n)||typeof n=="string"&&n==="[Function]")return"function";
  const e=typeof n;
  return e==="string"||e==="number"||e==="boolean"||e==="object"?e:"string"
}
function Q2f(n, e=""){
  return!n||typeof n!="object"?[]:Object.entries(n).map(([t, i])=>({
    key:t, value:i, path:e?`${e}.${t}`:t, type:zvu(i)
  }))
}
function ycy(n){
  if(!n||typeof n!="object")return!1;
  const e=n;
  return"type"in e&&(typeof e.type=="string"||typeof e.type=="function"||typeof e.type=="object"&&e.type!==null)
}
function wcy(n){
  if(typeof n=="string")return n;
  if(typeof n=="function"){
    const e=n;
    return e.displayName??e.name??"Component"
  }
  if(typeof n=="object"&&n!==null){
    const e=n;
    return e.displayName??e.name??"Component"
  }
  return"Unknown"
}
function Vvu(n, e=0, t=0, i={
  count:0
}){
  if(e>dFf||i.count>=k1a)return[];
  const r=[];
  if(Array.isArray(n)){
    for(let s=0;
    s<n.length&&!(i.count>=k1a);
    s++){
      const o=Vvu(n[s],e,s,i);
      r.push(...o)
    }
    return r
  }
  if(ycy(n)){
    i.count++;
    const s=wcy(n.type), o=n.props??{
      
    }, l=Object.entries(o).filter(([u])=>u!=="children").slice(0, hFf).map(([u, d])=>({
      key:u,value:d,path:`children[${t}].props.${u}`,type:zvu(d)
    }));
    if(r.push({
      depth:e,componentName:s,props:l,key:n.key??null,childIndex:t
    }), o.children!==void 0){
      const u=Vvu(o.children,e+1,0,i);
      r.push(...u)
    }
  }
  return r
}
function _cy(n){
  const[e, t]=lt(!1), i=xe(()=>n.child.props.length>0), r=xe(()=>n.child.key!==null?` key="${n.child.key}"`:"");
  return(()=>{
    var s=K2f(), o=s.firstChild, a=o.firstChild, l=a.firstChild, u=l.nextSibling, d=u.nextSibling;
    return ge(o, K(Xe, {
      get when(){
        return i()
      },get children(){
        var m=j2f(),p=m.firstChild;
        return m.addEventListener("click",()=>t(!e())),tn(g=>{
          var f=e(),A=Qt.asClassName(e()?Be.chevronDown:Be.chevronRight);
          return f!==g.e&&Zr(m,"aria-expanded",g.e=f),A!==g.t&&Un(p,g.t=A),g
        },{
          e:void 0,t:void 0
        }),m
      }
    }), a), ge(a, ()=>n.child.componentName, u), ge(a, r, u), ge(o, K(Xe, {
      get when(){
        return i()
      },get children(){
        var m=z2f(),p=m.firstChild,g=p.nextSibling,f=g.nextSibling;
        return ge(m,()=>n.child.props.length,g),m
      }
    }), null), ge(s, K(Xe, {
      get when(){
        return e()
      },get children(){
        var m=V2f();
        return ge(m,K(Xe,{
          get when(){
            return i()
          },get fallback(){
            return Y2f()
          },get children(){
            return K(ia,{
              get each(){
                return n.child.props
              },children:p=>K(Kvu,{
                prop:p,get onPropChange(){
                  return n.onPropChange
                },depth:1
              })
            })
          }
        })),m
      }
    }), null), tn(m=>(m=`${n.child.depth*12}px`)!=null?s.style.setProperty("padding-left", m):s.style.removeProperty("padding-left")), s
  })()
}
function Kvu(n){
  const[e, t]=lt(!1), [i, r]=lt(""), [s, o]=lt(!1), [a, l]=lt(void 0), u=()=>n.depth??0, d=xe(()=>{
    const I=n.prop.value;
    return n.prop.type==="object"&&I&&typeof I=="object"?Q2f(I, n.prop.path):n.prop.type==="array"&&Array.isArray(I)?I.map((B, R)=>({
      key:`[${R}]`,value:B,path:`${n.prop.path}[${R}]`,type:zvu(B)
    })):[]
  }), m=xe(()=>{
    const I=a();
    if(I!==void 0){
      const B=n.prop.value;
      return B===I||String(B)===String(I)?B:I
    }
    return n.prop.value
  });
  An(()=>{
    const I=a();
    if(I!==void 0){
      const B=n.prop.value;
      (B===I||String(B)===String(I))&&l(void 0)
    }
  });
  const p=xe(()=>{
    const I=m(), B=n.prop.type;
    if(B==="null")return"null";
    if(B==="function")return jvu(I)?I.source:typeof I=="string"?I:"[Function]";
    if(B==="array")return G2f(I);
    if(B==="object")return W2f(I);
    if(B==="string"&&typeof I=="string"){
      const R=I.trim();
      if(R==="[object Object]"||R==="[Object]"||R==="[Object object]")return"{ /* object data not available */ }";
      if(R==="[object Array]"||R==="[Array]"||R==="[Object Array]")return"[ /* array data not available */ ]";
      if(R.startsWith("{")&&R.endsWith("}")||R.startsWith("[")&&R.endsWith("]"))try{
        const N=JSON.parse(R);
        if(Array.isArray(N))return G2f(N);
        if(typeof N=="object"&&N!==null)return W2f(N)
      }
      catch{
        
      }
    }
    return String(I)
  }), g=()=>{
    const I=m();
    n.prop.type==="string"?r(I):n.prop.type==="number"&&r(String(I)), o(!0)
  }, f=()=>{
    const I=i();
    let B=I;
    if(n.prop.type==="number"){
      const R=parseFloat(I);
      isNaN(R)||(B=R,n.onPropChange?.(n.prop.path,R))
    }
    else n.onPropChange?.(n.prop.path, I);
    l(B), o(!1)
  }, A=()=>{
    o(!1), r("")
  }, w=I=>{
    const B=I.currentTarget.value==="true";
    I.currentTarget.blur(), l(B), n.onPropChange?.(n.prop.path, B)
  }, C=xe(()=>n.prop.type==="object"||n.prop.type==="array"), x=xe(()=>n.prop.type==="number"||n.prop.type==="string");
  return(()=>{
    var I=iFf(), B=I.firstChild, R=B.firstChild, N=R.firstChild, M=N.firstChild;
    return N.addEventListener("click", ()=>t(!e())), ge(M, ()=>n.prop.key), ge(N, K(Xe, {
      get when(){
        return C()
      },get children(){
        var O=Z2f();
        return tn(()=>Un(O,Qt.asClassName(e()?Be.chevronDown:Be.chevronRight))),O
      }
    }), null), ge(R, K(Xe, {
      get when(){
        return n.prop.type==="boolean"
      },get children(){
        var O=X2f(),$=O.firstChild,H=$.firstChild,W=H.nextSibling,z=W.firstChild;
        return H.addEventListener("change",w),tn(()=>Un(z,Qt.asClassName(Be.chevronDown))),tn(()=>H.value=m()?"true":"false"),O
      }
    }), null), ge(R, K(Xe, {
      get when(){
        return x()
      },get children(){
        var O=eFf(),$=O.firstChild,H=$.firstChild;
        return H.addEventListener("blur",f),H.addEventListener("keydown",W=>{
          W.key==="Enter"?(W.preventDefault(),f(),W.currentTarget.blur()):W.key==="Escape"&&(W.preventDefault(),W.stopPropagation(),A(),W.currentTarget.blur())
        }),H.addEventListener("input",W=>r(W.currentTarget.value)),H.addEventListener("focus",g),tn(()=>Zr(H,"type",n.prop.type==="number"?"number":"text")),tn(()=>H.value=s()?i():p()),O
      }
    }), null), ge(R, K(Xe, {
      get when(){
        return Ui(()=>n.prop.type!=="boolean"&&n.prop.type!=="string"&&n.prop.type!=="number")()&&!C()
      },get children(){
        return K(Xe,{
          get when(){
            return n.prop.type==="function"
          },get fallback(){
            return K(Xe,{
              get when(){
                return p()
              },get children(){
                var O=rFf();
                return ge(O,p),tn(()=>Un(O,`css-react-prop-value css-react-prop-value--${n.prop.type}`)),O
              }
            })
          },get children(){
            var O=tFf();
            return ge(O,K(oCi,{
              get text(){
                return p()
              },language:"javascript",autoHeightForModelChanges:!0,style:{
                "padding-right":"20px","padding-left":"4px",width:"100%"
              },nonReactiveEditorOptions:{
                scrollbar:{
                  horizontal:"hidden",horizontalScrollbarSize:6,ignoreHorizontalScrollbarInContentHeight:!0,alwaysConsumeMouseWheel:!1,vertical:"auto",verticalScrollbarSize:8
                },wordWrap:"off",rulers:[],overviewRulerBorder:!1,overviewRulerLanes:0,automaticLayout:!1
              }
            })),O
          }
        })
      }
    }), null), ge(I, K(Xe, {
      get when(){
        return e()
      },get children(){
        var O=nFf();
        return ge(O,K(Xe,{
          get when(){
            return d().length>0
          },get fallback(){
            return sFf()
          },get children(){
            return K(ia,{
              get each(){
                return d()
              },children:$=>K(Kvu,{
                prop:$,get onPropChange(){
                  return n.onPropChange
                },get depth(){
                  return u()+1
                }
              })
            })
          }
        })),O
      }
    }), null), tn(O=>{
      var $=`${u()*8}px`,H=`css-control-label-row ${C()?"clickable":""}`;
      return $!==O.e&&((O.e=$)!=null?I.style.setProperty("padding-left",$):I.style.removeProperty("padding-left")),H!==O.t&&Un(N,O.t=H),O
    }, {
      e:void 0,t:void 0
    }), I
  })()
}
function Ccy(n){
  const e=xe(()=>n.elementInfo()?.reactComponent), t=xe(()=>{
    const o=e();
    return o?.props?Q2f(o.props):[]
  }), i=xe(()=>t().filter(o=>o.key!=="children")), r=xe(()=>{
    const o=e();
    return o?.props?.children?Vvu(o.props.children):[]
  }), s=xe(()=>r().length>=k1a);
  return K(Xe, {
    get when(){
      return e()
    }, get children(){
      return[(()=>{
        var o=aFf(),a=o.firstChild;
        return ge(o,K(Xe,{
          get when(){
            return i().length>0
          },get fallback(){
            return uFf()
          },get children(){
            var l=oFf();
            return ge(l,K(ia,{
              get each(){
                return i()
              },children:u=>K(Kvu,{
                prop:u,get onPropChange(){
                  return n.onPropChange
                }
              })
            })),l
          }
        }),null),o
      })(),K(Xe,{
        get when(){
          return r().length>0
        },get children(){
          var o=lFf(),a=o.firstChild,l=a.firstChild,u=l.firstChild,d=u.nextSibling,m=d.nextSibling,p=a.nextSibling;
          return ge(l,()=>r().length,d),ge(l,()=>s()?"+":"",d),ge(p,K(ia,{
            get each(){
              return r()
            },children:g=>K(_cy,{
              child:g,get onPropChange(){
                return n.onPropChange
              }
            })
          }),null),ge(p,K(Xe,{
            get when(){
              return s()
            },get children(){
              return cFf()
            }
          }),null),o
        }
      })]
    }
  })
}
var j2f, z2f, V2f, K2f, Y2f, Z2f, X2f, eFf, tFf, nFf, iFf, rFf, sFf, oFf, aFf, cFf, lFf, uFf, dFf, k1a, hFf, Scy=