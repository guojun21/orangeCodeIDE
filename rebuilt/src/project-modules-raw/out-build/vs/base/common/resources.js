// Module: out-build/vs/base/common/resources.js
// Offset: 422078 (bundle byte offset)
// Size: 3702 bytes

d2(), zr(), Hl(), _r(), oa(), Yn(), dFn=class{
  constructor(n){
    this._ignorePathCasing=n
  }
  compare(n, e, t=!1){
    return n===e?0:R4(this.getComparisonKey(n, t), this.getComparisonKey(e, t))
  }
  isEqual(n, e, t=!1){
    return n===e?!0:!n||!e?!1:this.getComparisonKey(n, t)===this.getComparisonKey(e, t)
  }
  getComparisonKey(n, e=!1){
    return n.with({
      path:this._ignorePathCasing(n)?n.path.toLowerCase():void 0,fragment:e?null:void 0
    }).toString()
  }
  ignorePathCasing(n){
    return this._ignorePathCasing(n)
  }
  isEqualOrParent(n, e, t=!1){
    if(n.scheme===e.scheme){
      if(n.scheme===_n.file)return aFn(RBe(n),RBe(e),this._ignorePathCasing(n))&&n.query===e.query&&(t||n.fragment===e.fragment);
      if(Lze(n.authority,e.authority))return aFn(n.path,e.path,this._ignorePathCasing(n),"/")&&n.query===e.query&&(t||n.fragment===e.fragment)
    }
    return!1
  }
  joinPath(n, ...e){
    return je.joinPath(n, ...e)
  }
  basenameOrAuthority(n){
    return ca(n)||n.authority
  }
  basename(n){
    return Rm.basename(n.path)
  }
  extname(n){
    return Rm.extname(n.path)
  }
  dirname(n){
    if(n.path.length===0)return n;
    let e;
    return n.scheme===_n.file?e=je.file(zN(RBe(n))).path:(e=Rm.dirname(n.path), n.authority&&e.length&&e.charCodeAt(0)!==47&&(console.error(`dirname("${n.toString})) resulted in a relative path`), e="/")), n.with({
      path:e
    })
  }
  normalizePath(n){
    if(!n.path.length)return n;
    let e;
    return n.scheme===_n.file?e=je.file(k6(RBe(n))).path:e=Rm.normalize(n.path), n.with({
      path:e
    })
  }
  relativePath(n, e){
    if(n.scheme!==e.scheme||!Lze(n.authority, e.authority))return;
    if(n.scheme===_n.file){
      const r=DBe(RBe(n),RBe(e));
      return Sc?vgt(r):r
    }
    let t=n.path||"/";
    const i=e.path||"/";
    if(this._ignorePathCasing(n)){
      let r=0;
      for(const s=Math.min(t.length,i.length);
      r<s&&!(t.charCodeAt(r)!==i.charCodeAt(r)&&t.charAt(r).toLowerCase()!==i.charAt(r).toLowerCase());
      r++);
      t=i.substr(0,r)+t.substr(r)
    }
    return Rm.relative(t, i)
  }
  resolvePath(n, e){
    if(n.scheme===_n.file){
      const t=je.file(dgt(RBe(n),e));
      return n.with({
        authority:t.authority,path:t.path
      })
    }
    return e=orh(e), n.with({
      path:Rm.resolve(n.path,e)
    })
  }
  isAbsolutePath(n){
    return!!n.path&&n.path[0]==="/"
  }
  isEqualAuthority(n, e){
    return n===e||n!==void 0&&e!==void 0&&k_(n, e)
  }
  hasTrailingPathSeparator(n, e=C1){
    if(n.scheme===_n.file){
      const t=RBe(n);
      return t.length>arh(t).length&&t[t.length-1]===e
    }
    else{
      const t=n.path;
      return t.length>1&&t.charCodeAt(t.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(n.fsPath)
    }
  }
  removeTrailingPathSeparator(n, e=C1){
    return hFn(n, e)?n.with({
      path:n.path.substr(0,n.path.length-1)
    }):n
  }
  addTrailingPathSeparator(n, e=C1){
    let t=!1;
    if(n.scheme===_n.file){
      const i=RBe(n);
      t=i!==void 0&&i.length===arh(i).length&&i[i.length-1]===e
    }
    else{
      e="/";
      const i=n.path;
      t=i.length===1&&i.charCodeAt(i.length-1)===47
    }
    return!t&&!hFn(n, e)?n.with({
      path:n.path+"/"
    }):n
  }
}, Iu=new dFn(()=>!1), Brh=new dFn(n=>n.scheme===_n.file?!xv:!0), ySe=new dFn(n=>!0), Zc=Iu.isEqual.bind(Iu), f9=Iu.isEqualOrParent.bind(Iu), fnA=Iu.getComparisonKey.bind(Iu), GP=Iu.basenameOrAuthority.bind(Iu), ca=Iu.basename.bind(Iu), hk=Iu.extname.bind(Iu), Td=Iu.dirname.bind(Iu), Wo=Iu.joinPath.bind(Iu), g2o=Iu.normalizePath.bind(Iu), eN=Iu.relativePath.bind(Iu), ACc=Iu.resolvePath.bind(Iu), yCc=Iu.isAbsolutePath.bind(Iu), Lze=Iu.isEqualAuthority.bind(Iu), hFn=Iu.hasTrailingPathSeparator.bind(Iu), zFt=Iu.removeTrailingPathSeparator.bind(Iu), f5e=Iu.addTrailingPathSeparator.bind(Iu), (function(n){
  n.META_DATA_LABEL="label", n.META_DATA_DESCRIPTION="description", n.META_DATA_SIZE="size", n.META_DATA_MIME="mime";
  function e(t){
    const i=new Map;
    t.path.substring(t.path.indexOf(";")+1, t.path.lastIndexOf(";")).split(";").forEach(o=>{
      const[a,l]=o.split(":");
      a&&l&&i.set(a,l)
    });
    const s=t.path.substring(0, t.path.indexOf(";"));
    return s&&i.set(n.META_DATA_MIME, s), i
  }
  n.parseMetaData=e
})(Nze||(Nze={
  
}))
}
}), Sgt, VFt=