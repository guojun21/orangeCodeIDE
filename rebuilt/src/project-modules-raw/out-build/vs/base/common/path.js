// Module: out-build/vs/base/common/path.js
// Offset: 321895 (bundle byte offset)
// Size: 10503 bytes

S6(), Nih=65, Mih=97, Fih=90, Oih=122, kze=46, EH=47, xte=92, IBe=58, Uih=63, q0c=class extends Error{
  constructor(n, e, t){
    let i;
    typeof e=="string"&&e.indexOf("not ")===0?(i="must not be", e=e.replace(/^not /, "")):i="must be";
    const r=n.indexOf(".")!==-1?"property":"argument";
    let s=`The "${n}" ${r} ${i} of type ${e}`;
    s+=`. Received type ${typeof t}`, super(s), this.code="ERR_INVALID_ARG_TYPE"
  }
}, Tte=h5e==="win32", iE={
  resolve(...n){
    let e="", t="", i=!1;
    for(let r=n.length-1;
    r>=-1;
    r--){
      let s;
      if(r>=0){
        if(s=n[r],g9(s,`paths[${r}]`),s.length===0)continue
      }
      else e.length===0?s=UFt():(s=u2[`=${e}`]||UFt(),(s===void 0||s.slice(0,2).toLowerCase()!==e.toLowerCase()&&s.charCodeAt(2)===xte)&&(s=`${e}\\`));
      const o=s.length;
      let a=0,l="",u=!1;
      const d=s.charCodeAt(0);
      if(o===1)$S(d)&&(a=1,u=!0);
      else if($S(d))if(u=!0,$S(s.charCodeAt(1))){
        let m=2,p=m;
        for(;
        m<o&&!$S(s.charCodeAt(m));
        )m++;
        if(m<o&&m!==p){
          const g=s.slice(p,m);
          for(p=m;
          m<o&&$S(s.charCodeAt(m));
          )m++;
          if(m<o&&m!==p){
            for(p=m;
            m<o&&!$S(s.charCodeAt(m));
            )m++;
            (m===o||m!==p)&&(l=`\\\\${g}\\${s.slice(p,m)}`,a=m)
          }
        }
      }
      else a=1;
      else m5e(d)&&s.charCodeAt(1)===IBe&&(l=s.slice(0,2),a=2,o>2&&$S(s.charCodeAt(2))&&(u=!0,a=3));
      if(l.length>0)if(e.length>0){
        if(l.toLowerCase()!==e.toLowerCase())continue
      }
      else e=l;
      if(i){
        if(e.length>0)break
      }
      else if(t=`${s.slice(a)}\\${t}`,i=u,u&&e.length>0)break
    }
    return t=s2o(t, !i, "\\", $S), i?`${e}\\${t}`:`${e}${t}`||"."
  }, normalize(n){
    g9(n, "path");
    const e=n.length;
    if(e===0)return".";
    let t=0, i, r=!1;
    const s=n.charCodeAt(0);
    if(e===1)return $0c(s)?"\\":n;
    if($S(s))if(r=!0, $S(n.charCodeAt(1))){
      let a=2,l=a;
      for(;
      a<e&&!$S(n.charCodeAt(a));
      )a++;
      if(a<e&&a!==l){
        const u=n.slice(l,a);
        for(l=a;
        a<e&&$S(n.charCodeAt(a));
        )a++;
        if(a<e&&a!==l){
          for(l=a;
          a<e&&!$S(n.charCodeAt(a));
          )a++;
          if(a===e)return`\\\\${u}\\${n.slice(l)}\\`;
          a!==l&&(i=`\\\\${u}\\${n.slice(l,a)}`,t=a)
        }
      }
    }
    else t=1;
    else m5e(s)&&n.charCodeAt(1)===IBe&&(i=n.slice(0, 2), t=2, e>2&&$S(n.charCodeAt(2))&&(r=!0, t=3));
    let o=t<e?s2o(n.slice(t), !r, "\\", $S):"";
    if(o.length===0&&!r&&(o="."), o.length>0&&$S(n.charCodeAt(e-1))&&(o+="\\"), !r&&i===void 0&&n.includes(":")){
      if(o.length>=2&&m5e(o.charCodeAt(0))&&o.charCodeAt(1)===IBe)return`.\\${o}`;
      let a=n.indexOf(":");
      do if(a===e-1||$S(n.charCodeAt(a+1)))return`.\\${o}`;
      while((a=n.indexOf(":",a+1))!==-1)
    }
    return i===void 0?r?`\\${o}`:o:r?`${i}\\${o}`:`${i}${o}`
  }, isAbsolute(n){
    g9(n, "path");
    const e=n.length;
    if(e===0)return!1;
    const t=n.charCodeAt(0);
    return $S(t)||e>2&&m5e(t)&&n.charCodeAt(1)===IBe&&$S(n.charCodeAt(2))
  }, join(...n){
    if(n.length===0)return".";
    let e, t;
    for(let s=0;
    s<n.length;
    ++s){
      const o=n[s];
      g9(o,"path"),o.length>0&&(e===void 0?e=t=o:e+=`\\${o}`)
    }
    if(e===void 0)return".";
    let i=!0, r=0;
    if(typeof t=="string"&&$S(t.charCodeAt(0))){
      ++r;
      const s=t.length;
      s>1&&$S(t.charCodeAt(1))&&(++r,s>2&&($S(t.charCodeAt(2))?++r:i=!1))
    }
    if(i){
      for(;
      r<e.length&&$S(e.charCodeAt(r));
      )r++;
      r>=2&&(e=`\\${e.slice(r)}`)
    }
    return iE.normalize(e)
  }, relative(n, e){
    if(g9(n, "from"), g9(e, "to"), n===e)return"";
    const t=iE.resolve(n), i=iE.resolve(e);
    if(t===i||(n=t.toLowerCase(), e=i.toLowerCase(), n===e))return"";
    if(t.length!==n.length||i.length!==e.length){
      const f=t.split("\\"),A=i.split("\\");
      f[f.length-1]===""&&f.pop(),A[A.length-1]===""&&A.pop();
      const w=f.length,C=A.length,x=w<C?w:C;
      let I;
      for(I=0;
      I<x&&f[I].toLowerCase()===A[I].toLowerCase();
      I++);
      return I===0?i:I===x?C>x?A.slice(I).join("\\"):w>x?"..\\".repeat(w-1-I)+"..":"":"..\\".repeat(w-I)+A.slice(I).join("\\")
    }
    let r=0;
    for(;
    r<n.length&&n.charCodeAt(r)===xte;
    )r++;
    let s=n.length;
    for(;
    s-1>r&&n.charCodeAt(s-1)===xte;
    )s--;
    const o=s-r;
    let a=0;
    for(;
    a<e.length&&e.charCodeAt(a)===xte;
    )a++;
    let l=e.length;
    for(;
    l-1>a&&e.charCodeAt(l-1)===xte;
    )l--;
    const u=l-a, d=o<u?o:u;
    let m=-1, p=0;
    for(;
    p<d;
    p++){
      const f=n.charCodeAt(r+p);
      if(f!==e.charCodeAt(a+p))break;
      f===xte&&(m=p)
    }
    if(p!==d){
      if(m===-1)return i
    }
    else{
      if(u>d){
        if(e.charCodeAt(a+p)===xte)return i.slice(a+p+1);
        if(p===2)return i.slice(a+p)
      }
      o>d&&(n.charCodeAt(r+p)===xte?m=p:p===2&&(m=3)),m===-1&&(m=0)
    }
    let g="";
    for(p=r+m+1;
    p<=s;
    ++p)(p===s||n.charCodeAt(p)===xte)&&(g+=g.length===0?"..":"\\..");
    return a+=m, g.length>0?`${g}${i.slice(a,l)}`:(i.charCodeAt(a)===xte&&++a, i.slice(a, l))
  }, toNamespacedPath(n){
    if(typeof n!="string"||n.length===0)return n;
    const e=iE.resolve(n);
    if(e.length<=2)return n;
    if(e.charCodeAt(0)===xte){
      if(e.charCodeAt(1)===xte){
        const t=e.charCodeAt(2);
        if(t!==Uih&&t!==kze)return`\\\\?\\UNC\\${e.slice(2)}`
      }
    }
    else if(m5e(e.charCodeAt(0))&&e.charCodeAt(1)===IBe&&e.charCodeAt(2)===xte)return`\\\\?\\${e}`;
    return e
  }, dirname(n){
    g9(n, "path");
    const e=n.length;
    if(e===0)return".";
    let t=-1, i=0;
    const r=n.charCodeAt(0);
    if(e===1)return $S(r)?n:".";
    if($S(r)){
      if(t=i=1,$S(n.charCodeAt(1))){
        let a=2,l=a;
        for(;
        a<e&&!$S(n.charCodeAt(a));
        )a++;
        if(a<e&&a!==l){
          for(l=a;
          a<e&&$S(n.charCodeAt(a));
          )a++;
          if(a<e&&a!==l){
            for(l=a;
            a<e&&!$S(n.charCodeAt(a));
            )a++;
            if(a===e)return n;
            a!==l&&(t=i=a+1)
          }
        }
      }
    }
    else m5e(r)&&n.charCodeAt(1)===IBe&&(t=e>2&&$S(n.charCodeAt(2))?3:2, i=t);
    let s=-1, o=!0;
    for(let a=e-1;
    a>=i;
    --a)if($S(n.charCodeAt(a))){
      if(!o){
        s=a;
        break
      }
    }
    else o=!1;
    if(s===-1){
      if(t===-1)return".";
      s=t
    }
    return n.slice(0, s)
  }, basename(n, e){
    e!==void 0&&g9(e, "suffix"), g9(n, "path");
    let t=0, i=-1, r=!0, s;
    if(n.length>=2&&m5e(n.charCodeAt(0))&&n.charCodeAt(1)===IBe&&(t=2), e!==void 0&&e.length>0&&e.length<=n.length){
      if(e===n)return"";
      let o=e.length-1,a=-1;
      for(s=n.length-1;
      s>=t;
      --s){
        const l=n.charCodeAt(s);
        if($S(l)){
          if(!r){
            t=s+1;
            break
          }
        }
        else a===-1&&(r=!1,a=s+1),o>=0&&(l===e.charCodeAt(o)?--o===-1&&(i=s):(o=-1,i=a))
      }
      return t===i?i=a:i===-1&&(i=n.length),n.slice(t,i)
    }
    for(s=n.length-1;
    s>=t;
    --s)if($S(n.charCodeAt(s))){
      if(!r){
        t=s+1;
        break
      }
    }
    else i===-1&&(r=!1, i=s+1);
    return i===-1?"":n.slice(t, i)
  }, extname(n){
    g9(n, "path");
    let e=0, t=-1, i=0, r=-1, s=!0, o=0;
    n.length>=2&&n.charCodeAt(1)===IBe&&m5e(n.charCodeAt(0))&&(e=i=2);
    for(let a=n.length-1;
    a>=e;
    --a){
      const l=n.charCodeAt(a);
      if($S(l)){
        if(!s){
          i=a+1;
          break
        }
        continue
      }
      r===-1&&(s=!1,r=a+1),l===kze?t===-1?t=a:o!==1&&(o=1):t!==-1&&(o=-1)
    }
    return t===-1||r===-1||o===0||o===1&&t===r-1&&t===i+1?"":n.slice(t, r)
  }, format:Lih.bind(null, "\\"), parse(n){
    g9(n, "path");
    const e={
      root:"",dir:"",base:"",ext:"",name:""
    };
    if(n.length===0)return e;
    const t=n.length;
    let i=0, r=n.charCodeAt(0);
    if(t===1)return $S(r)?(e.root=e.dir=n, e):(e.base=e.name=n, e);
    if($S(r)){
      if(i=1,$S(n.charCodeAt(1))){
        let m=2,p=m;
        for(;
        m<t&&!$S(n.charCodeAt(m));
        )m++;
        if(m<t&&m!==p){
          for(p=m;
          m<t&&$S(n.charCodeAt(m));
          )m++;
          if(m<t&&m!==p){
            for(p=m;
            m<t&&!$S(n.charCodeAt(m));
            )m++;
            m===t?i=m:m!==p&&(i=m+1)
          }
        }
      }
    }
    else if(m5e(r)&&n.charCodeAt(1)===IBe){
      if(t<=2)return e.root=e.dir=n,e;
      if(i=2,$S(n.charCodeAt(2))){
        if(t===3)return e.root=e.dir=n,e;
        i=3
      }
    }
    i>0&&(e.root=n.slice(0, i));
    let s=-1, o=i, a=-1, l=!0, u=n.length-1, d=0;
    for(;
    u>=i;
    --u){
      if(r=n.charCodeAt(u),$S(r)){
        if(!l){
          o=u+1;
          break
        }
        continue
      }
      a===-1&&(l=!1,a=u+1),r===kze?s===-1?s=u:d!==1&&(d=1):s!==-1&&(d=-1)
    }
    return a!==-1&&(s===-1||d===0||d===1&&s===a-1&&s===o+1?e.base=e.name=n.slice(o, a):(e.name=n.slice(o, s), e.base=n.slice(o, a), e.ext=n.slice(s, a))), o>0&&o!==i?e.dir=n.slice(0, o-1):e.dir=e.root, e
  }, sep:"\\", delimiter:";", win32:null, posix:null
}, $ih=(()=>{
  if(Tte){
    const n=/\\/g;
    return()=>{
      const e=UFt().replace(n,"/");
      return e.slice(e.indexOf("/"))
    }
  }
  return()=>UFt()
})(), Rm={
  resolve(...n){
    let e="", t=!1;
    for(let i=n.length-1;
    i>=0&&!t;
    i--){
      const r=n[i];
      g9(r,`paths[${i}]`),r.length!==0&&(e=`${r}/${e}`,t=r.charCodeAt(0)===EH)
    }
    if(!t){
      const i=$ih();
      e=`${i}/${e}`,t=i.charCodeAt(0)===EH
    }
    return e=s2o(e, !t, "/", $0c), t?`/${e}`:e.length>0?e:"."
  }, normalize(n){
    if(g9(n, "path"), n.length===0)return".";
    const e=n.charCodeAt(0)===EH, t=n.charCodeAt(n.length-1)===EH;
    return n=s2o(n, !e, "/", $0c), n.length===0?e?"/":t?"./":".":(t&&(n+="/"), e?`/${n}`:n)
  }, isAbsolute(n){
    return g9(n, "path"), n.length>0&&n.charCodeAt(0)===EH
  }, join(...n){
    if(n.length===0)return".";
    const e=[];
    for(let t=0;
    t<n.length;
    ++t){
      const i=n[t];
      g9(i,"path"),i.length>0&&e.push(i)
    }
    return e.length===0?".":Rm.normalize(e.join("/"))
  }, relative(n, e){
    if(g9(n, "from"), g9(e, "to"), n===e||(n=Rm.resolve(n), e=Rm.resolve(e), n===e))return"";
    const t=1, i=n.length, r=i-t, s=1, o=e.length-s, a=r<o?r:o;
    let l=-1, u=0;
    for(;
    u<a;
    u++){
      const m=n.charCodeAt(t+u);
      if(m!==e.charCodeAt(s+u))break;
      m===EH&&(l=u)
    }
    if(u===a)if(o>a){
      if(e.charCodeAt(s+u)===EH)return e.slice(s+u+1);
      if(u===0)return e.slice(s+u)
    }
    else r>a&&(n.charCodeAt(t+u)===EH?l=u:u===0&&(l=0));
    let d="";
    for(u=t+l+1;
    u<=i;
    ++u)(u===i||n.charCodeAt(u)===EH)&&(d+=d.length===0?"..":"/..");
    return`${d}${e.slice(s+l)}`
  }, toNamespacedPath(n){
    return n
  }, dirname(n){
    if(g9(n, "path"), n.length===0)return".";
    const e=n.charCodeAt(0)===EH;
    let t=-1, i=!0;
    for(let r=n.length-1;
    r>=1;
    --r)if(n.charCodeAt(r)===EH){
      if(!i){
        t=r;
        break
      }
    }
    else i=!1;
    return t===-1?e?"/":".":e&&t===1?"//":n.slice(0, t)
  }, basename(n, e){
    e!==void 0&&g9(e, "suffix"), g9(n, "path");
    let t=0, i=-1, r=!0, s;
    if(e!==void 0&&e.length>0&&e.length<=n.length){
      if(e===n)return"";
      let o=e.length-1,a=-1;
      for(s=n.length-1;
      s>=0;
      --s){
        const l=n.charCodeAt(s);
        if(l===EH){
          if(!r){
            t=s+1;
            break
          }
        }
        else a===-1&&(r=!1,a=s+1),o>=0&&(l===e.charCodeAt(o)?--o===-1&&(i=s):(o=-1,i=a))
      }
      return t===i?i=a:i===-1&&(i=n.length),n.slice(t,i)
    }
    for(s=n.length-1;
    s>=0;
    --s)if(n.charCodeAt(s)===EH){
      if(!r){
        t=s+1;
        break
      }
    }
    else i===-1&&(r=!1, i=s+1);
    return i===-1?"":n.slice(t, i)
  }, extname(n){
    g9(n, "path");
    let e=-1, t=0, i=-1, r=!0, s=0;
    for(let o=n.length-1;
    o>=0;
    --o){
      const a=n[o];
      if(a==="/"){
        if(!r){
          t=o+1;
          break
        }
        continue
      }
      i===-1&&(r=!1,i=o+1),a==="."?e===-1?e=o:s!==1&&(s=1):e!==-1&&(s=-1)
    }
    return e===-1||i===-1||s===0||s===1&&e===i-1&&e===t+1?"":n.slice(e, i)
  }, format:Lih.bind(null, "/"), parse(n){
    g9(n, "path");
    const e={
      root:"",dir:"",base:"",ext:"",name:""
    };
    if(n.length===0)return e;
    const t=n.charCodeAt(0)===EH;
    let i;
    t?(e.root="/", i=1):i=0;
    let r=-1, s=0, o=-1, a=!0, l=n.length-1, u=0;
    for(;
    l>=i;
    --l){
      const d=n.charCodeAt(l);
      if(d===EH){
        if(!a){
          s=l+1;
          break
        }
        continue
      }
      o===-1&&(a=!1,o=l+1),d===kze?r===-1?r=l:u!==1&&(u=1):r!==-1&&(u=-1)
    }
    if(o!==-1){
      const d=s===0&&t?1:s;
      r===-1||u===0||u===1&&r===o-1&&r===s+1?e.base=e.name=n.slice(d,o):(e.name=n.slice(d,r),e.base=n.slice(d,o),e.ext=n.slice(r,o))
    }
    return s>0?e.dir=n.slice(0, s-1):t&&(e.dir="/"), e
  }, sep:"/", delimiter:":", win32:null, posix:null
}, Rm.win32=iE.win32=iE, Rm.posix=iE.posix=Rm, k6=Tte?iE.normalize:Rm.normalize, FR=Tte?iE.isAbsolute:Rm.isAbsolute, gS=Tte?iE.join:Rm.join, dgt=Tte?iE.resolve:Rm.resolve, DBe=Tte?iE.relative:Rm.relative, zN=Tte?iE.dirname:Rm.dirname, fd=Tte?iE.basename:Rm.basename, QD=Tte?iE.extname:Rm.extname, StA=Tte?iE.format:Rm.format, hgt=Tte?iE.parse:Rm.parse, ktA=Tte?iE.toNamespacedPath:Rm.toNamespacedPath, C1=Tte?iE.sep:Rm.sep, EtA=Tte?iE.delimiter:Rm.delimiter
}
});
function qih(n){
  return n
}
var o2o, H0c, $Ft, nFn=