// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/changeTracking.js
// Offset: 31919844 (bundle byte offset)
// Size: 2742 bytes

i7e=n=>`${n.elementUniqueId?.trim()||n.elementPath?.trim()||n.elementId?.trim()||n.selector?.trim()||`${
  n.elementTagName??"element"
}
:${
  n.elementClassName??""
}
`}::${n.property}`, _vu=(n, e)=>{
  const t=i7e(e);
  let i=n.findIndex(s=>i7e(s)===t);
  if(i<0&&e.selector&&(i=n.findIndex(s=>s.property===e.property&&s.selector===e.selector)), i>=0){
    const s=n[i];
    if(s.newValue===e.newValue)return{
      records:n,changed:!1
    };
    if((s.originalValue??s.oldValue)===e.newValue)return{
      records:[...n.slice(0,i),...n.slice(i+1)],changed:!0
    };
    const a={
      ...s,newValue:e.newValue,timestamp:e.timestamp,domOrderChange:e.domOrderChange??s.domOrderChange,changeType:e.changeType??s.changeType,propChange:e.propChange??s.propChange,originalValue:s.originalValue??s.oldValue
    }, l=[...n];
    return l[i]=a, {
      records:l,changed:!0
    }
  }
  if(e.oldValue===e.newValue)return{
    records:n, changed:!1
  };
  const r={
    ...e, originalValue:e.originalValue??e.oldValue
  };
  return{
    records:[...n, r], changed:!0
  }
}
}
});
function Yay(n){
  const[e, t]=lt(null), [i, r]=lt(""), [s, o]=lt(null), a=xe(()=>{
    const g=n.elementInfo;
    if(!g?.allStyles)return[];
    const f=g.allStyles.effective, A=[];
    for(const[w, C]of Object.entries(f)){
      const x=typeof C=="string"||C===null?C??"":C.value,I=C&&typeof C=="object"?C.priority??null:null;
      A.push({
        name:w,value:x,priority:I
      })
    }
    return A.sort((w, C)=>w.name.localeCompare(C.name)), A
  }), l=g=>{
    const f=n.elementInfo?.allStyles?.inline;
    return f?Object.prototype.hasOwnProperty.call(f, g):!1
  }, u=g=>{
    t(g.name), r(g.value)
  }, d=()=>{
    t(null), r("")
  }, m=g=>{
    const f=i();
    n.onStyleChange(g, f), r(f), o(g), setTimeout(()=>o(null), 300)
  }, p=g=>{
    g&&queueMicrotask(()=>{
      g.focus(),g.select()
    })
  };
  return(()=>{
    var g=QNf();
    return ge(g, K(ia, {
      get each(){
        return a()
      },children:f=>(()=>{
        var A=zNf(),w=A.firstChild;
        return ge(w,()=>f.name),ge(A,K(Xe,{
          get when(){
            return e()===f.name
          },get fallback(){
            return(()=>{
              var C=KNf();
              return C.addEventListener("click",()=>u(f)),ge(C,()=>f.value,null),ge(C,K(Xe,{
                get when(){
                  return f.priority
                },get children(){
                  var x=VNf(),I=x.firstChild;
                  return ge(x,()=>f.priority,null),x
                }
              }),null),C
            })()
          },get children(){
            var C=jNf(),x=C.firstChild;
            return x.addEventListener("keydown",I=>{
              I.key==="Enter"?(I.preventDefault(),m(f.name),queueMicrotask(()=>{
                I.currentTarget.focus()
              })):I.key==="Escape"&&(I.preventDefault(),I.stopPropagation(),d())
            }),x.addEventListener("input",I=>r(I.currentTarget.value)),Bs(p,x),tn(()=>Un(x,`css-property-edit-input ${s()===f.name?"saved":""}`)),tn(()=>x.value=i()),C
          }
        }),null),tn(C=>{
          var x=`css-property-item ${l(f.name)?"inline":""}`,I=l(f.name)?"Has inline style":"";
          return x!==C.e&&Un(A,C.e=x),I!==C.t&&Zr(A,"title",C.t=I),C
        },{
          e:void 0,t:void 0
        }),A
      })()
    })), g
  })()
}
var QNf, jNf, zNf, VNf, KNf, Zay=