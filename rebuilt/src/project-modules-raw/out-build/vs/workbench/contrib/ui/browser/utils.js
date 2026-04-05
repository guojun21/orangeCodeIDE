// Module: out-build/vs/workbench/contrib/ui/browser/utils.js
// Offset: 33875304 (bundle byte offset)
// Size: 1646 bytes

V_(), ri(), iu(), Yn(), f$f=()=>bi.vscodeWindowId!==$c()?.vscodeWindowId
}
});
function Cmy(n){
  return!b$f.includes(n)
}
function Qv(n, e, t, i){
  const r=bi.document.createElement("div");
  return r.style.height="100%", r.style.width="100%", i?.additionalStyles&&Object.assign(r.style, i.additionalStyles), t.invokeFunction(()=>{
    const s=V0u(), o=i?.restrictToServices??Object.keys(s), a=new Ut, l=new Set(o), u=new Map, d=(f, A)=>{
      v$f(A)&&a.add(f)
    }, m=DRe(()=>rfh(()=>K(y$f.Provider, {
      get value(){
        return{
          close:i?.onClose
        }
      },get children(){
        return K(S7e.Provider,{
          value:{
            get window(){
              return As(e)
            },get portalElement(){
              if(f$f()){
                const w=$c();
                return vye.has(w)||vye.set(w,$fa()),vye.get(w)??w.document.body
              }
              const A=As(e);
              return vye.get(A)??A.document.body
            },instantiationService:t,[Q0u]:l,[c1i]:u,[j0u]:d
          },get children(){
            return n()
          }
        })
      }
    }), f=>{
      f instanceof DOMException&&f.name==="DataCloneError"||(console.error("ERROR WHEN RENDERING SOLID COMPONENT",f),SSe(f))
    }), r);
    return e.appendChild(r), {
      dispose:()=>{
        m(),r.remove(),a.dispose()
      },focus:()=>{
        r.focus()
      }
    }
  })
}
function wr(){
  const n=yb(S7e), e=z0u.get(n);
  if(e)return e;
  const t=new Proxy(n, {
    get(i, r, s){
      if(typeof r=="symbol"||r in i)return Reflect.get(i,r,s);
      const o=r,a=i;
      if(!a[Q0u]?.has(o))return;
      if(a[c1i]?.has(o))return a[c1i].get(o);
      const u=V0u();
      let d;
      return Cmy(o)?d=i.instantiationService.invokeFunction(m=>m.get(u[o])):(d=u[o](i.instantiationService),a[j0u]?.(d,o)),a[c1i]?.set(o,d),d
    }
  });
  return z0u.set(n, t), t
}
function C7e(){
  return wr()
}
function Smy(n, e, t){
  n.invokeFunction(i=>{
    const r=i.get(e);
    t(r)
  })
}
var W0u, b$f, v$f, Q0u, c1i, j0u, z0u, A$f, V0u, S7e, y$f, kmy, es=