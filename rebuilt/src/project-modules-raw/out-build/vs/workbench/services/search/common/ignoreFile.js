// Module: out-build/vs/workbench/services/search/common/ignoreFile.js
// Offset: 32467898 (bundle byte offset)
// Size: 1863 bytes

iR(), OOf=class{
  constructor(n, e, t){
    if(this.location=e, this.parent=t, e[e.length-1]==="\\")throw Error("Unexpected path format, do not use trailing backslashes");
    e[e.length-1]!=="/"&&(e+="/"), this.isPathIgnored=this.parseIgnoreFile(n, this.location, this.parent)
  }
  updateContents(n){
    this.isPathIgnored=this.parseIgnoreFile(n, this.location, this.parent)
  }
  isPathIncludedInTraversal(n, e){
    if(n[0]!=="/"||n[n.length-1]==="/")throw Error("Unexpected path format, expectred to begin with slash and end without. got:"+n);
    return!this.isPathIgnored(n, e)
  }
  isArbitraryPathIgnored(n, e){
    if(n[0]!=="/"||n[n.length-1]==="/")throw Error("Unexpected path format, expectred to begin with slash and end without. got:"+n);
    const t=n.split("/").filter(s=>s);
    let i=!1, r="";
    for(let s=0;
    s<t.length;
    s++){
      const o=s===t.length-1,a=t[s];
      if(r=r+"/"+a,!this.isPathIncludedInTraversal(r,o?e:!0)){
        i=!0;
        break
      }
    }
    return i
  }
  gitignoreLinesToExpression(n, e, t){
    const i=n.map(s=>this.gitignoreLineToGlob(s, e)), r=Object.create(null);
    for(const s of i)r[s]=!0;
    return jae(r, {
      trimForExclusions:t
    })
  }
  parseIgnoreFile(n, e, t){
    const i=n.split(`
`).map(f=>f.trim()).filter(f=>f&&f[0]!=="#"), r=i.filter(f=>!f.endsWith("/")), s=r.filter(f=>!f.includes("!")), o=this.gitignoreLinesToExpression(s, e, !0), a=r.filter(f=>f.includes("!")).map(f=>f.replace(/!/g, "")), l=this.gitignoreLinesToExpression(a, e, !1), u=i.filter(f=>!f.includes("!")), d=this.gitignoreLinesToExpression(u, e, !0), m=i.filter(f=>f.includes("!")).map(f=>f.replace(/!/g, "")), p=this.gitignoreLinesToExpression(m, e, !1);
    return(f, A)=>f.startsWith(e)?A&&d(f)&&!p(f)||o(f)&&!l(f)?!0:t?t.isPathIgnored(f, A):!1:!1
  }
  gitignoreLineToGlob(n, e){
    const t=n.indexOf("/");
    return t===-1||t===n.length-1?n="**/"+n:(t===0?e.slice(-1)==="/"&&(n=n.slice(1)):e.slice(-1)!=="/"&&(n="/"+n), n=e+n), n
  }
}
}
}), UOf, $Of, oEa, sly=