// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/AdvancedStylesSection.js
// Offset: 31922586 (bundle byte offset)
// Size: 1517 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), QNf=qe('<div class="css-inspector-properties css-advanced-content">'), jNf=qe("<div class=css-property-edit><input type=text autofocus>"), zNf=qe("<div><div class=css-property-name>"), VNf=qe("<span class=css-priority>!"), KNf=qe("<div class=css-property-value>")
}
});
function Q1t(n){
  let e, t;
  const i=(s, o=[])=>{
    let a=0, l=0;
    return s.replace(/\r\n|\r|\n/g, (u, d)=>{
      l=u===`\r
`?-1:0,d+=a;
      for(const m of o)m.end<=d||(m.start>=d&&(m.start+=l),m.end>=d&&(m.end+=l));
      return a+=l,"\u23CE"
    })
  }, r=()=>{
    if(!e)return;
    const s=n.escapeNewLines?i(n.text, n.highlights):n.text, o=n.highlights||[], a=[];
    let l=0;
    for(const u of o){
      if(u.end===u.start)continue;
      if(l<u.start){
        const p=s.substring(l,u.start);
        n.supportIcons?a.push(...a_(p)):a.push(p),l=u.start
      }
      const d=s.substring(l,u.end),m=Ct("span.highlight",void 0,...n.supportIcons?a_(d):[d]);
      a.push(m),l=u.end
    }
    if(l<s.length){
      const u=s.substring(l);
      n.supportIcons?a.push(...a_(u)):a.push(u)
    }
    um(e, ...a)
  };
  return An(()=>{
    if(r(), n.hoverDelegate?.showNativeHover)e&&(e.title=n.title||"");
    else if(n.title){
      const s=n.hoverDelegate||Sm("mouse");
      t?.dispose(),t=q4().setupManagedHover(s,e,n.title)
    }
  }), Ai(()=>{
    t?.dispose()
  }), (()=>{
    var s=YNf(), o=e;
    return typeof o=="function"?Bs(o, s):e=s, tn(a=>{
      var l=["monaco-highlighted-label",n.class].join(" "),u={
        ...n.style
      };
      return l!==a.e&&Un(s,a.e=l),a.t=La(s,u,a.t),a
    }, {
      e:void 0,t:void 0
    }), s
  })()
}
var YNf, Cvu=