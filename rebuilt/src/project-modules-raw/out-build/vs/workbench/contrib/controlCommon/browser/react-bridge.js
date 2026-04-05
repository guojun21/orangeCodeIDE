// Module: out-build/vs/workbench/contrib/controlCommon/browser/react-bridge.js
// Offset: 31664339 (bundle byte offset)
// Size: 930 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Od(), gs(), gke(), avu(), Ti(), Tfn(), hNf=qe("<div>"), Y0i(), d1a=!1, i7=n=>{
  let e, t, i, r;
  const s=()=>{
    if(!e)return;
    const a=e, l=Cd.createElement(n.reactComponent, n.reactProps), u=n.portalRoot!==void 0?Cd.createElement(P6t, {
      root:n.portalRoot,children:l
    }):l;
    Aay(()=>{
      a.render(u)
    })
  }, o=a=>{
    e=u1a.createRoot(a), sc(()=>{
      s(),t=n.reactProps,i=n.reactComponent,r=n.portalRoot
    })
  };
  return An(Bf(()=>[n.reactComponent, n.reactProps, n.portalRoot], ()=>{
    const a=n.reactComponent!==i, l=!yay(n.reactProps, t), u=n.portalRoot!==r;
    (a||l||u)&&(i=n.reactComponent, t=n.reactProps, r=n.portalRoot, s())
  }, {
    defer:!0
  })), Ai(()=>{
    e&&(e.unmount(), e=void 0), t=void 0, i=void 0, r=void 0
  }), (()=>{
    var a=hNf();
    return Bs(o, a), tn(l=>{
      var u=n.class,d={
        display:"contents",...n.style
      };
      return u!==l.e&&Un(a,l.e=u),l.t=La(a,d,l.t),l
    }, {
      e:void 0,t:void 0
    }), a
  })()
}
}
}), PT=