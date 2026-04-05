// Module: out-build/vs/workbench/contrib/snippets/browser/snippetsFile.js
// Offset: 30917056 (bundle byte offset)
// Size: 3639 bytes

aB(), Ht(), Hl(), Vde(), UAg(), Yr(), Js(), Ef(), ri(), zxf=class{
  constructor(n){
    this.isBogous=!1, this.isTrivial=!1, this.usesClipboardVariable=!1, this.usesSelectionVariable=!1, this.codeSnippet=n;
    const e=new Ute().parse(n, !1), t=new Map;
    let i=0;
    for(const s of e.placeholders)i=Math.max(i, s.index);
    if(e.placeholders.length===0)this.isTrivial=!0;
    else if(i===0){
      const s=e.children.at(-1);
      this.isTrivial=s instanceof Zoe&&s.isFinalTabstop
    }
    const r=[...e.children];
    for(;
    r.length>0;
    ){
      const s=r.shift();
      if(s instanceof j3n){
        if(s.children.length===0&&!OAg[s.name]){
          const o=t.has(s.name)?t.get(s.name):++i;
          t.set(s.name,o);
          const a=new Zoe(o).appendChild(new gz(s.name));
          e.replace(s,[a]),this.isBogous=!0
        }
        switch(s.name){
          case"CLIPBOARD":this.usesClipboardVariable=!0;
          break;
          case"SELECTION":case"TM_SELECTED_TEXT":this.usesSelectionVariable=!0;
          break
        }
      }
      else r.push(...s.children)
    }
    this.isBogous&&(this.codeSnippet=e.toTextmateString())
  }
}, wCa=class{
  constructor(n, e, t, i, r, s, o, a, l, u){
    this.isFileTemplate=n, this.scopes=e, this.name=t, this.prefix=i, this.description=r, this.body=s, this.source=o, this.snippetSource=a, this.snippetIdentifier=l, this.extensionId=u, this.prefixLow=i.toLowerCase(), this._bodyInsights=new T5e($c(), ()=>new zxf(this.body))
  }
  get codeSnippet(){
    return this._bodyInsights.value.codeSnippet
  }
  get isBogous(){
    return this._bodyInsights.value.isBogous
  }
  get isTrivial(){
    return this._bodyInsights.value.isTrivial
  }
  get needsClipboard(){
    return this._bodyInsights.value.usesClipboardVariable
  }
  get usesSelection(){
    return this._bodyInsights.value.usesSelectionVariable
  }
}, (function(n){
  n[n.User=1]="User", n[n.Workspace=2]="Workspace", n[n.Extension=3]="Extension"
})(Vxf||(Vxf={
  
})), _Ca=class{
  constructor(n, e, t, i, r, s){
    this.source=n, this.location=e, this.defaultScopes=t, this._extension=i, this._fileService=r, this._extensionResourceLoaderService=s, this.data=[], this.isGlobalSnippets=QD(e.path)===".code-snippets", this.isUserSnippets=!this._extension
  }
  select(n, e){
    this.isGlobalSnippets||!this.isUserSnippets?this._scopeSelect(n, e):this._filepathSelect(n, e)
  }
  _filepathSelect(n, e){
    n+".json"===fd(this.location.path)&&e.push(...this.data)
  }
  _scopeSelect(n, e){
    for(const i of this.data){
      const r=i.scopes.length;
      if(r===0)e.push(i);
      else for(let s=0;
      s<r;
      s++)if(i.scopes[s]===n){
        e.push(i);
        break
      }
    }
    const t=n.lastIndexOf(".");
    t>=0&&this._scopeSelect(n.substring(0, t), e)
  }
  async _load(){
    return this._extension?this._extensionResourceLoaderService.readExtensionResource(this.location):(await this._fileService.readFile(this.location)).value.toString()
  }
  load(){
    return this._loadPromise||(this._loadPromise=Promise.resolve(this._load()).then(n=>{
      const e=L1(n);
      if(SEe(e)==="object")for(const[t,i]of Object.entries(e))if(Iry(i))this._parseSnippet(t,i,this.data);
      else for(const[r,s]of Object.entries(i))this._parseSnippet(r,s,this.data);
      return this
    })), this._loadPromise
  }
  reset(){
    this._loadPromise=void 0, this.data.length=0
  }
  _parseSnippet(n, e, t){
    let{
      isFileTemplate:i,prefix:r,body:s,description:o
    }
    =e;
    if(r||(r=""), Array.isArray(s)&&(s=s.join(`
`)), typeof s!="string")return;
    Array.isArray(o)&&(o=o.join(`
`));
    let a;
    this.defaultScopes?a=this.defaultScopes:typeof e.scope=="string"?a=e.scope.split(",").map(u=>u.trim()).filter(Boolean):a=[];
    let l;
    this._extension?l=this._extension.displayName||this._extension.name:this.source===2?l=_(10885, null):this.isGlobalSnippets?l=_(10886, null):l=_(10887, null);
    for(const u of bl.wrap(r))t.push(new wCa(!!i, a, n, u, o, s, l, this.source, this._extension?`${eN(this._extension.extensionLocation,this.location)}/${n}`:`${fd(this.location.path)}/${n}`, this._extension?.identifier))
  }
}
}
}), Kxf, bit, Jpu=