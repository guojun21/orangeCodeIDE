// Module: out-build/vs/platform/extensionResourceLoader/common/extensionResourceLoader.js
// Offset: 30971790 (bundle byte offset)
// Size: 2989 bytes

_r(), oa(), Yn(), Wt(), Bgn(), l8(), zr(), jye(), rt(), mTf="/web-extension-resource/", NMe=xi("extensionResourceLoaderService"), pTf=class extends at{
  constructor(n, e, t, i, r, s, o){
    super(), this._fileService=n, this._storageService=e, this._productService=t, this._environmentService=i, this._configurationService=r, this._extensionGalleryManifestService=s, this._logService=o, this._initPromise=this._init()
  }
  async _init(){
    try{
      const n=await this._extensionGalleryManifestService.getExtensionGalleryManifest();
      this.resolve(n),this._register(this._extensionGalleryManifestService.onDidChangeExtensionGalleryManifest(()=>this.resolve(n)))
    }
    catch(n){
      this._logService.error(n)
    }
  }
  resolve(n){
    this._extensionGalleryResourceUrlTemplate=n?LMe(n, "ExtensionResourceUriTemplate"):void 0, this._extensionGalleryAuthority=this._extensionGalleryResourceUrlTemplate?this._getExtensionGalleryAuthority(je.parse(this._extensionGalleryResourceUrlTemplate)):void 0
  }
  async supportsExtensionGalleryResources(){
    return await this._initPromise, this._extensionGalleryResourceUrlTemplate!==void 0
  }
  async getExtensionGalleryResourceURL({
    publisher:n, name:e, version:t, targetPlatform:i
  }, r){
    if(await this._initPromise, this._extensionGalleryResourceUrlTemplate){
      const s=je.parse(mgt(this._extensionGalleryResourceUrlTemplate,{
        publisher:n,name:e,version:i!==void 0&&i!=="undefined"&&i!=="unknown"&&i!=="universal"?`${t}+${i}`:t,path:"extension"
      }));
      return this._isWebExtensionResourceEndPoint(s)?s.with({
        scheme:ASe.getPreferredWebSchema()
      }):s
    }
  }
  async isExtensionGalleryResource(n){
    return await this._initPromise, !!this._extensionGalleryAuthority&&this._extensionGalleryAuthority===this._getExtensionGalleryAuthority(n)
  }
  async getExtensionGalleryRequestHeaders(){
    const n={
      "X-Client-Name":`${this._productService.applicationName}${Eu?"-web":""}`,"X-Client-Version":this._productService.version
    };
    return knt(this._productService, this._environmentService)&&Ent(this._configurationService)===3&&(n["X-Machine-Id"]=await this._getServiceMachineId()), this._productService.commit&&(n["X-Client-Commit"]=this._productService.commit), n
  }
  _getServiceMachineId(){
    return this._serviceMachineIdPromise||(this._serviceMachineIdPromise=Dgn(this._environmentService, this._fileService, this._storageService)), this._serviceMachineIdPromise
  }
  _getExtensionGalleryAuthority(n){
    if(this._isWebExtensionResourceEndPoint(n))return n.authority;
    const e=n.authority.indexOf(".");
    return e!==-1?n.authority.substring(e+1):void 0
  }
  _isWebExtensionResourceEndPoint(n){
    const e=n.path, t=ASe.getServerRootPath();
    return e.startsWith(t)&&e.startsWith(mTf, t.length)
  }
}
}
});
function Ory(n, e, t){
  return H_(n.watch(e), n.onDidFilesChange(i=>{
    i.affects(e)&&t()
  }))
}
function Ury(n, e){
  const i=n.getLineContent(e.lineNumber).substr(0, e.column-1), r=Math.max(0, i.length-100);
  for(let s=i.length-1;
  s>=r;
  s--){
    const o=i.charAt(s);
    if(/\s/.test(o))return i.substr(s+1)
  }
  return r===0?i:""
}
var RCa, PCa, LCa, NCa, MCa, FCa, gTf=