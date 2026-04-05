// Module: out-build/vs/workbench/contrib/ui/browser/vsMarkdown.js
// Offset: 34020550 (bundle byte offset)
// Size: 984 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), oN(), es(), epy(), sqf=qe("<div>"), YDa=n=>{
  const e=wr();
  let t, i=null;
  const[r, s]=lt(!1), o=()=>{
    if(!t)return;
    s(!0), i&&(i.dispose(), i=null), t.replaceChildren();
    const a=typeof n.content=="string"?{
      value:n.content,supportThemeIcons:n.supportThemeIcons??!0,supportHtml:n.supportHtml??!1,isTrusted:n.isTrusted??!1
    }
    :n.content, u=e.instantiationService.createInstance(sL, n.rendererOptions??{
      
    }).render(a);
    i=u, t.appendChild(u.element), n.onRenderComplete?.(u.element), s(!1)
  };
  return An(()=>{
    n.content, n.rendererOptions, n.isTrusted, n.supportThemeIcons, n.supportHtml, o()
  }), Ai(()=>{
    i&&(i.dispose(), i=null)
  }), (()=>{
    var a=sqf(), l=t;
    return typeof l=="function"?Bs(l, a):t=a, tn(u=>{
      var d=`vs-markdown-container ${n.class??""}`,m=n.style,p=r();
      return d!==u.e&&Un(a,u.e=d),u.t=La(a,m,u.t),p!==u.a&&Zr(a,"data-rendering",u.a=p),u
    }, {
      e:void 0,t:void 0,a:void 0
    }), a
  })()
}
}
}), ZDa, oqf, XDa, eBa, mCu, pCu=