// Module: out-build/vs/workbench/contrib/files/common/explorerModel.js
// Offset: 31207822 (bundle byte offset)
// Size: 6698 bytes

Yn(), d2(), Hl(), cu(), oa(), Vs(), rt(), U0(), yn(), Yr(), coy(), Js(), $Df=class{
  constructor(n, e, t, i, r){
    this.contextService=n, this.uriIdentityService=e, this._onDidChangeRoots=new Qe;
    const s=()=>this._roots=this.contextService.getWorkspace().folders.map(o=>new v8(o.uri, t, i, r, void 0, !0, !1, !1, !1, o.name));
    s(), this._listener=this.contextService.onDidChangeWorkspaceFolders(()=>{
      s(),this._onDidChangeRoots.fire()
    })
  }
  get roots(){
    return this._roots
  }
  get onDidChangeRoots(){
    return this._onDidChangeRoots.event
  }
  findAll(n){
    return lh(this.roots.map(e=>e.find(n)))
  }
  findClosest(n){
    const e=this.contextService.getWorkspaceFolder(n);
    if(e){
      const t=this.roots.find(i=>this.uriIdentityService.extUri.isEqual(i.resource,e.uri));
      if(t)return t.find(n)
    }
    return null
  }
  dispose(){
    Bo(this._listener)
  }
}, v8=class GSn{
  constructor(e, t, i, r, s, o, a, l, u, d=GP(e), m, p=!1){
    this.resource=e, this.fileService=t, this.configService=i, this.filesConfigService=r, this._parent=s, this._isDirectory=o, this._isSymbolicLink=a, this._readonly=l, this._locked=u, this._name=d, this._mtime=m, this._unknown=p, this.error=void 0, this._isExcluded=!1, this.markedAsFindResult=!1, this._isDirectoryResolved=!1
  }
  get isExcluded(){
    return this._isExcluded?!0:this._parent?this._parent.isExcluded:!1
  }
  set isExcluded(e){
    this._isExcluded=e
  }
  hasChildren(e){
    return this.hasNests?this.nestedChildren?.some(t=>e(t))??!1:this.isDirectory
  }
  get hasNests(){
    return!!this.nestedChildren?.length
  }
  get isDirectoryResolved(){
    return this._isDirectoryResolved
  }
  get isSymbolicLink(){
    return!!this._isSymbolicLink
  }
  get isDirectory(){
    return!!this._isDirectory
  }
  get isReadonly(){
    return this.filesConfigService.isReadonly(this.resource, {
      resource:this.resource,name:this.name,readonly:this._readonly,locked:this._locked
    })
  }
  get mtime(){
    return this._mtime
  }
  get name(){
    return this._name
  }
  get isUnknown(){
    return this._unknown
  }
  get parent(){
    return this._parent
  }
  get root(){
    return this._parent?this._parent.root:this
  }
  get children(){
    return new Map
  }
  updateName(e){
    this._parent?.removeChild(this), this._name=e, this._parent?.addChild(this)
  }
  getId(){
    let e=this.root.resource.toString()+"::"+this.resource.toString();
    return this.isMarkedAsFiltered()&&(e+="::findFilterResult"), e
  }
  toString(){
    return`ExplorerItem: ${this.name}`
  }
  get isRoot(){
    return this===this.root
  }
  static create(e, t, i, r, s, o){
    const a=new GSn(r.resource, e, t, i, s, r.isDirectory, r.isSymbolicLink, r.readonly, r.locked, r.name, r.mtime, !r.isFile&&!r.isDirectory);
    if(a.isDirectory&&(a._isDirectoryResolved=!!r.children||!!o&&o.some(l=>f9(l, a.resource)), r.children))for(let l=0, u=r.children.length;
    l<u;
    l++){
      const d=GSn.create(e,t,i,r.children[l],a,o);
      a.addChild(d)
    }
    return a
  }
  static mergeLocalWithDisk(e, t){
    if(e.resource.toString()!==t.resource.toString())return;
    const i=e.isDirectory||t.isDirectory;
    if(!(i&&t._isDirectoryResolved&&!e._isDirectoryResolved)&&(t.resource=e.resource, t.isRoot||t.updateName(e.name), t._isDirectory=e.isDirectory, t._mtime=e.mtime, t._isDirectoryResolved=e._isDirectoryResolved, t._isSymbolicLink=e.isSymbolicLink, t.error=e.error, i&&e._isDirectoryResolved)){
      const r=new fu;
      t.children.forEach(s=>{
        r.set(s.resource,s)
      }),t.children.clear(),e.children.forEach(s=>{
        const o=r.get(s.resource);
        o?(GSn.mergeLocalWithDisk(s,o),t.addChild(o),r.delete(s.resource)):t.addChild(s)
      }),r.forEach(s=>{
        s instanceof w0i&&t.addChild(s)
      })
    }
  }
  addChild(e){
    e._parent=this, e.updateResource(!1), this.children.set(this.getPlatformAwareName(e.name), e)
  }
  getChild(e){
    return this.children.get(this.getPlatformAwareName(e))
  }
  fetchChildren(e){
    const t=this.configService.getValue({
      resource:this.root.resource
    }).explorer.fileNesting;
    return t.enabled&&this.nestedChildren?this.nestedChildren:(async()=>{
      if(!this._isDirectoryResolved){
        const r=e==="modified";
        this.error=void 0;
        try{
          const s=await this.fileService.resolve(this.resource,{
            resolveSingleChildDescendants:!0,resolveMetadata:r
          }),o=GSn.create(this.fileService,this.configService,this.filesConfigService,s,this);
          GSn.mergeLocalWithDisk(o,this)
        }
        catch(s){
          throw this.error=s,s
        }
        this._isDirectoryResolved=!0
      }
      const i=[];
      if(t.enabled){
        const r=[],s=[];
        for(const a of this.children.entries())a[1].nestedParent=void 0,a[1].isDirectory?s.push(a):r.push(a);
        const o=this.fileNester.nest(r.map(([a])=>a),this.getPlatformAwareName(this.name));
        for(const[a,l]of r){
          const u=o.get(a);
          if(u!==void 0){
            l.nestedChildren=[];
            for(const d of u.keys()){
              const m=ed(this.children.get(d));
              l.nestedChildren.push(m),m.nestedParent=l
            }
            i.push(l)
          }
          else l.nestedChildren=void 0
        }
        for(const[a,l]of s.values())i.push(l)
      }
      else this.children.forEach(r=>{
        i.push(r)
      });
      return i
    })()
  }
  get fileNester(){
    if(!this.root._fileNester){
      const e=this.configService.getValue({
        resource:this.root.resource
      }).explorer.fileNesting,t=Object.entries(e.patterns).filter(i=>typeof i[0]=="string"&&typeof i[1]=="string"&&i[0]&&i[1]).map(([i,r])=>[this.getPlatformAwareName(i.trim()),r.split(",").map(s=>this.getPlatformAwareName(s.trim().replace(/\u200b/g,"").trim())).filter(s=>s!=="")]);
      this.root._fileNester=new FDf(t)
    }
    return this.root._fileNester
  }
  removeChild(e){
    this.nestedChildren=void 0, this.children.delete(this.getPlatformAwareName(e.name))
  }
  forgetChildren(){
    this.children.clear(), this.nestedChildren=void 0, this._isDirectoryResolved=!1, this._fileNester=void 0
  }
  getPlatformAwareName(e){
    return this.fileService.hasCapability(this.resource, 1024)?e:e.toLowerCase()
  }
  move(e){
    this.nestedParent?.removeChild(this), this._parent?.removeChild(this), e.removeChild(this), e.addChild(this), this.updateResource(!0)
  }
  updateResource(e){
    this._parent&&(this.resource=Wo(this._parent.resource, this.name)), e&&this.isDirectory&&this.children.forEach(t=>{
      t.updateResource(!0)
    })
  }
  rename(e){
    this.updateName(e.name), this._mtime=e.mtime, this.updateResource(!0)
  }
  find(e){
    const t=!this.fileService.hasCapability(e, 1024);
    return e&&this.resource.scheme===e.scheme&&k_(this.resource.authority, e.authority)&&(t?pgt(e.path, this.resource.path):e.path.startsWith(this.resource.path))?this.findByPath(xH(e.path, Rm.sep), this.resource.path.length, t):null
  }
  findByPath(e, t, i){
    if(QtA(xH(this.resource.path, Rm.sep), e, i))return this;
    if(this.isDirectory){
      for(;
      t<e.length&&e[t]===Rm.sep;
      )t++;
      let r=e.indexOf(Rm.sep,t);
      r===-1&&(r=e.length);
      const s=e.substring(t,r),o=this.children.get(this.getPlatformAwareName(s));
      if(o)return o.findByPath(e,r,i)
    }
    return null
  }
  isMarkedAsFiltered(){
    return this.markedAsFindResult
  }
  markItemAndParentsAsFiltered(){
    this.markedAsFindResult=!0, this.parent?.markItemAndParentsAsFiltered()
  }
  unmarkItemAndChildren(){
    this.markedAsFindResult=!1, this.children.forEach(e=>e.unmarkItemAndChildren())
  }
}, __decorate([cl], v8.prototype, "children", null), w0i=class extends v8{
  constructor(n, e, t, i, r){
    super(je.file(""), n, e, t, i, r), this._isDirectoryResolved=!0
  }
}
}
}), fka, loy=