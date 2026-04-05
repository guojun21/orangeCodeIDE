// Module: out-build/vs/workbench/contrib/chat/common/promptFileReferenceErrors.js
// Offset: 31054255 (bundle byte offset)
// Size: 1921 bytes

Hl(), Lv(), uIf=class extends Error{
  constructor(n, e){
    super(n, e)
  }
  sameTypeAs(n){
    return n==null?!1:n instanceof this.constructor
  }
  equal(n){
    return this.sameTypeAs(n)
  }
}, x1t=class extends uIf{
  constructor(n, e, t){
    super(e, t), this.uri=n
  }
}, dSa=class extends x1t{
  constructor(n, e, t=`Failed to resolve prompt contents stream for '${n.toString()}': ${e}.`){
    super(n, t), this.originalError=e, this.errorType="FailedToResolveContentsStream"
  }
}, Lgu=class extends dSa{
  constructor(n, e){
    super(n, e, `Failed to open '${n.fsPath}': ${e}.`), this.errorType="OpenError"
  }
}, Ngu=" -> ", hSa=class extends x1t{
  constructor(n, e){
    Qb(e.length>=2, `Recursive path must contain at least two paths, got '${e.length}'.`), super(n, "Recursive references found."), this.recursivePath=e, this.errorType="RecursiveReferenceError"
  }
  get message(){
    return`${super.message} ${this.getRecursivePathString("fullpath")}`
  }
  getRecursivePathString(n, e=Ngu){
    const t=n==="fullpath"&&e===Ngu;
    if(t&&this.defaultPathStringCache!==void 0)return this.defaultPathStringCache;
    const i=this.recursivePath.map(r=>{
      if(n==="fullpath")return`'${r}'`;
      if(n==="basename")return`'${fd(r)}'`;
      QN(n,`Unknown filename format '${n}'.`)
    }).join(e);
    return t&&(this.defaultPathStringCache=i), i
  }
  equal(n){
    if(!this.sameTypeAs(n)||this.uri.toString()!==n.uri.toString()||this.recursivePath.length!==n.recursivePath.length)return!1;
    const e=this.getRecursivePathString("fullpath"), t=n.getRecursivePathString("fullpath");
    return e.length!==t.length?!1:e===t
  }
  toString(){
    return`"${this.message}"(${this.uri})`
  }
}, Nqe=class extends x1t{
  constructor(n, e=""){
    const t=e?`: ${e}`:"";
    super(n, `Resource at ${n.path} is not a prompt file${t}`), this.errorType="NotPromptFileError"
  }
}, mSa=class extends Nqe{
  constructor(n, e=""){
    const t=e?`: ${e}`:"";
    super(n, `Entity at '${n.path}' is a folder${t}`), this.errorType="FolderReferenceError"
  }
}
}
}), Mgu, usy=