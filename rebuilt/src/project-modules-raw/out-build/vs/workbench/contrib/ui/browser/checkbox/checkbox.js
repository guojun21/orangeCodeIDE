// Module: out-build/vs/workbench/contrib/ui/browser/checkbox/checkbox.js
// Offset: 31680077 (bundle byte offset)
// Size: 1625 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), kay(), vNf=qe("<div role=checkbox>"), uxe=n=>{
  const e=xe(()=>n.size||"medium"), t=i=>{
    (i.key===" "||i.key==="Enter")&&(i.preventDefault(), n.onChange(!n.value))
  };
  return(()=>{
    var i=vNf();
    return Bs(r=>{
      n.elementRef&&n.elementRef(r)
    }, i), i.addEventListener("keydown", r=>{
      n.tabFocusable&&t(r)
    }), i.addEventListener("click", r=>{
      r.stopPropagation(),n.onChange(!n.value)
    }), tn(r=>{
      var s=`cursor-setting-value-checkbox codicon codicon-check${n.value?" checked":""} ${e()} ${n.highlightedBorder?"highlighted-border":""} ${n.noBackground?"no-background":""} ${n.filled?"filled":""} outline-hidden`,o=n.value,a=n.ariaLabel,l=n.ariaLabelledBy,u=n.ariaDescribedBy,d=n.style,m=n.tabFocusable?0:void 0;
      return s!==r.e&&Un(i,r.e=s),o!==r.t&&Zr(i,"aria-checked",r.t=o),a!==r.a&&Zr(i,"aria-label",r.a=a),l!==r.o&&Zr(i,"aria-labelledby",r.o=l),u!==r.i&&Zr(i,"aria-describedby",r.i=u),r.n=La(i,d,r.n),m!==r.s&&Zr(i,"tabindex",r.s=m),r
    }, {
      e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0
    }), i
  })()
}
}
});
function RC(n=null){
  const[e, t]=lt(n);
  return[e, o=>{
    t(()=>o)
  }, ()=>{
    t(()=>null)
  }, ()=>{
    t(o=>o?null:n)
  }
  ]
}
function ANf(n, e, t=100, i=()=>!1){
  const r=wr();
  let s, o=!1;
  const a=u=>{
    const d=n();
    d&&(d.contains(u.target)||e(u))
  }, l=()=>{
    s!==void 0&&(clearTimeout(s), s=void 0), o&&r.window?.document&&(r.window.document.removeEventListener("mouseup", a), o=!1)
  };
  return An(()=>{
    if(i()){
      l();
      return
    }
    const u=()=>{
      r.window?.document&&(r.window.document.addEventListener("mouseup",a),o=!0)
    };
    l(), Ic(()=>{
      t>0?s=setTimeout(u,t):u()
    }), Ai(l)
  }), l
}
var mB=