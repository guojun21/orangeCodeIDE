// Module: out-build/vs/editor/contrib/gotoSymbol/browser/goToSymbol.js
// Offset: 24715007 (bundle byte offset)
// Size: 2311 bytes

Vs(), Po(), _s(), zr(), Cu(), Cm(), eCt(), VA(), RY("_executeDefinitionProvider", (n, e, t)=>{
  const i=n.get($u), r=F1e(i.definitionProvider, e, t, !1, Cs.None);
  return RAe(()=>r)
}), RY("_executeDefinitionProvider_recursive", (n, e, t)=>{
  const i=n.get($u), r=F1e(i.definitionProvider, e, t, !0, Cs.None);
  return RAe(()=>r)
}), RY("_executeTypeDefinitionProvider", (n, e, t)=>{
  const i=n.get($u), r=pca(i.typeDefinitionProvider, e, t, !1, Cs.None);
  return RAe(()=>r)
}), RY("_executeTypeDefinitionProvider_recursive", (n, e, t)=>{
  const i=n.get($u), r=pca(i.typeDefinitionProvider, e, t, !0, Cs.None);
  return RAe(()=>r)
}), RY("_executeDeclarationProvider", (n, e, t)=>{
  const i=n.get($u), r=fGl(i.declarationProvider, e, t, !1, Cs.None);
  return RAe(()=>r)
}), RY("_executeDeclarationProvider_recursive", (n, e, t)=>{
  const i=n.get($u), r=fGl(i.declarationProvider, e, t, !0, Cs.None);
  return RAe(()=>r)
}), RY("_executeReferenceProvider", (n, e, t)=>{
  const i=n.get($u), r=hpi(i.referenceProvider, e, t, !1, !1, Cs.None);
  return RAe(()=>r)
}), RY("_executeReferenceProvider_recursive", (n, e, t)=>{
  const i=n.get($u), r=hpi(i.referenceProvider, e, t, !1, !0, Cs.None);
  return RAe(()=>r)
}), RY("_executeImplementationProvider", (n, e, t)=>{
  const i=n.get($u), r=dpi(i.implementationProvider, e, t, !1, Cs.None);
  return RAe(()=>r)
}), RY("_executeImplementationProvider_recursive", (n, e, t)=>{
  const i=n.get($u), r=dpi(i.implementationProvider, e, t, !0, Cs.None);
  return RAe(()=>r)
})
}
});
function V_A(n, e, t, i, r){
  e.sort(JP(o=>o.ordinal, p9));
  const s=[];
  for(const o of e)s.push(Mmg(t, o, i, r, n.onContentsChanged));
  return new nPe(s)
}
function Mmg(n, e, t, i, r){
  const s=new Ut, o=PAe("div.hover-row"), a=PAe("div.hover-row-contents");
  o.appendChild(a);
  const l=e.contents;
  for(const d of l){
    if(y3t(d))continue;
    const m=PAe("div.markdown-hover"), p=Rt(m, PAe("div.hover-contents")), g=new sL({
      editor:n
    }, t, i), f=s.add(g.render(d, {
      asyncRenderCallback:()=>{
        p.className="hover-contents code-hover-contents",r()
      }
    }));
    p.appendChild(f.element), a.appendChild(m)
  }
  return{
    hoverPart:e, hoverElement:o, dispose(){
      s.dispose()
    }
  }
}
function Fmg(n, e){
  switch(e){
    case b3.Increase:{
      const t=n.lookupKeybinding(Lvt);
      return t?_(1280,null,t.getLabel()):_(1281,null)
    }
    case b3.Decrease:{
      const t=n.lookupKeybinding(Nvt);
      return t?_(1282,null,t.getLabel()):_(1283,null)
    }
  }
}
var PAe, Omg, Umg, cme, bGl, wun, mpi, $mg, ppi=