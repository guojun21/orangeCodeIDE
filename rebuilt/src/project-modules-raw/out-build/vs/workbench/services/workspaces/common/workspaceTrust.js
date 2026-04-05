// Module: out-build/vs/workbench/services/workspaces/common/workspaceTrust.js
// Offset: 32619020 (bundle byte offset)
// Size: 15275 bytes

yn(), rt(), l2(), zr(), Yn(), Ei(), Er(), LM(), zAe(), hce(), kr(), ps(), EE(), Qq(), eu(), _d(), Yr(), _r(), ns(), vr(), UCi="security.workspace.trust.enabled", gyu="security.workspace.trust.startupPrompt", fyu="security.workspace.trust.banner", $Ci="security.workspace.trust.untrustedFiles", MEa="security.workspace.trust.emptyWindow", byu="extensions.supportUntrustedWorkspaces", J3f="content.trust.model.key", G3f=class{
  constructor(n, e, t){
    this.originalWorkspace=n, this.canonicalFolderUris=e, this.canonicalConfiguration=t
  }
  get folders(){
    return this.originalWorkspace.folders.map((n, e)=>({
      index:n.index,name:n.name,toResource:n.toResource,uri:this.canonicalFolderUris[e]
    }))
  }
  get transient(){
    return this.originalWorkspace.transient
  }
  get configuration(){
    return this.canonicalConfiguration??this.originalWorkspace.configuration
  }
  get id(){
    return this.originalWorkspace.id
  }
}, FEa=class extends at{
  constructor(e, t){
    super(), this.configurationService=e, this.environmentService=t
  }
  isWorkspaceTrustEnabled(){
    return this.environmentService.disableWorkspaceTrust?!1:!!this.configurationService.getValue(UCi)
  }
}, FEa=__decorate([__param(0, Fn), __param(1, Cc)], FEa), OEa=class extends at{
  constructor(e, t, i, r, s, o, a, l){
    super(), this.configurationService=e, this.remoteAuthorityResolverService=t, this.storageService=i, this.uriIdentityService=r, this.environmentService=s, this.workspaceService=o, this.workspaceTrustEnablementService=a, this.fileService=l, this.storageKey=J3f, this._onDidChangeTrust=this._register(new Qe), this.onDidChangeTrust=this._onDidChangeTrust.event, this._onDidChangeTrustedFolders=this._register(new Qe), this.onDidChangeTrustedFolders=this._onDidChangeTrustedFolders.event, this._canonicalStartupFiles=[], this._canonicalUrisResolved=!1, this._canonicalWorkspace=this.workspaceService.getWorkspace(), {
      promise:this._workspaceResolvedPromise,resolve:this._workspaceResolvedPromiseResolve
    }
    =PBe(), {
      promise:this._workspaceTrustInitializedPromise,resolve:this._workspaceTrustInitializedPromiseResolve
    }
    =PBe(), this._storedTrustState=new Q3f(Eu&&this.isEmptyWorkspace()?void 0:this.storageService), this._trustTransitionManager=this._register(new W3f), this._trustStateInfo=this.loadTrustInfo(), this._isTrusted=this.calculateWorkspaceTrust(), this.initializeWorkspaceTrust(), this.registerListeners()
  }
  initializeWorkspaceTrust(){
    this.resolveCanonicalUris().then(async()=>{
      this._canonicalUrisResolved=!0,await this.updateWorkspaceTrust()
    }).finally(()=>{
      this._workspaceResolvedPromiseResolve(),this.environmentService.remoteAuthority||this._workspaceTrustInitializedPromiseResolve()
    }), this.environmentService.remoteAuthority&&this.remoteAuthorityResolverService.resolveAuthority(this.environmentService.remoteAuthority).then(async e=>{
      this._remoteAuthority=e,await this.fileService.activateProvider(_n.vscodeRemote),await this.updateWorkspaceTrust()
    }).finally(()=>{
      this._workspaceTrustInitializedPromiseResolve()
    }), this.isEmptyWorkspace()&&this._workspaceTrustInitializedPromise.then(()=>{
      this._storedTrustState.isEmptyWorkspaceTrusted===void 0&&(this._storedTrustState.isEmptyWorkspaceTrusted=this.isWorkspaceTrusted())
    })
  }
  registerListeners(){
    this._register(this.workspaceService.onDidChangeWorkspaceFolders(async()=>await this.updateWorkspaceTrust())), this._register(this.storageService.onDidChangeValue(-1, this.storageKey, this._store)(async()=>{
      JSON.stringify(this._trustStateInfo)!==JSON.stringify(this.loadTrustInfo())&&(this._trustStateInfo=this.loadTrustInfo(),this._onDidChangeTrustedFolders.fire(),await this.updateWorkspaceTrust())
    }))
  }
  async getCanonicalUri(e){
    let t=e;
    if(this.environmentService.remoteAuthority&&e.scheme===_n.vscodeRemote)t=await this.remoteAuthorityResolverService.getCanonicalURI(e);
    else if(e.scheme==="vscode-vfs"){
      const i=e.authority.indexOf("+");
      i!==-1&&(t=e.with({
        authority:e.authority.substr(0,i)
      }))
    }
    return t.with({
      query:null,fragment:null
    })
  }
  async resolveCanonicalUris(){
    const e=[];
    if(this.environmentService.filesToOpenOrCreate&&e.push(...this.environmentService.filesToOpenOrCreate), this.environmentService.filesToDiff&&e.push(...this.environmentService.filesToDiff), this.environmentService.filesToMerge&&e.push(...this.environmentService.filesToMerge), e.length){
      const s=e.filter(a=>!!a.fileUri).map(a=>a.fileUri),o=await Promise.all(s.map(a=>this.getCanonicalUri(a)));
      this._canonicalStartupFiles.push(...o.filter(a=>this._canonicalStartupFiles.every(l=>!this.uriIdentityService.extUri.isEqual(a,l))))
    }
    const t=this.workspaceService.getWorkspace().folders.map(s=>s.uri), i=await Promise.all(t.map(s=>this.getCanonicalUri(s)));
    let r=this.workspaceService.getWorkspace().configuration;
    r&&q4o(r, this.environmentService)&&(r=await this.getCanonicalUri(r)), this._canonicalWorkspace=new G3f(this.workspaceService.getWorkspace(), i, r)
  }
  loadTrustInfo(){
    const e=this.storageService.get(this.storageKey, -1);
    let t;
    try{
      e&&(t=JSON.parse(e))
    }
    catch{
      
    }
    return t||(t={
      uriTrustInfo:[]
    }), t.uriTrustInfo||(t.uriTrustInfo=[]), t.uriTrustInfo=t.uriTrustInfo.map(i=>({
      uri:je.revive(i.uri),trusted:i.trusted
    })), t.uriTrustInfo=t.uriTrustInfo.filter(i=>i.trusted), t
  }
  async saveTrustInfo(){
    this.storageService.store(this.storageKey, JSON.stringify(this._trustStateInfo), -1, 1), this._onDidChangeTrustedFolders.fire(), await this.updateWorkspaceTrust()
  }
  getWorkspaceUris(){
    const e=this._canonicalWorkspace.folders.map(i=>i.uri), t=this._canonicalWorkspace.configuration;
    return t&&q4o(t, this.environmentService)&&e.push(t), e
  }
  calculateWorkspaceTrust(){
    return this.workspaceTrustEnablementService.isWorkspaceTrustEnabled()?this._canonicalUrisResolved?this.environmentService.remoteAuthority&&this._remoteAuthority?.options?.isTrusted?this._remoteAuthority.options.isTrusted:this.isEmptyWorkspace()?this._storedTrustState.isEmptyWorkspaceTrusted!==void 0?this._storedTrustState.isEmptyWorkspaceTrusted:this._canonicalStartupFiles.length?this.getUrisTrust(this._canonicalStartupFiles):!!this.configurationService.getValue(MEa):this.getUrisTrust(this.getWorkspaceUris()):!1:!0
  }
  async updateWorkspaceTrust(e){
    this.workspaceTrustEnablementService.isWorkspaceTrustEnabled()&&(e===void 0&&(await this.resolveCanonicalUris(), e=this.calculateWorkspaceTrust()), this.isWorkspaceTrusted()!==e&&(this.isTrusted=e, await this._trustTransitionManager.participate(e), this._onDidChangeTrust.fire(e)))
  }
  getUrisTrust(e){
    let t=!0;
    for(const i of e){
      const{
        trusted:r
      }
      =this.doGetUriTrustInfo(i);
      if(!r)return t=r,t
    }
    return t
  }
  doGetUriTrustInfo(e){
    if(!this.workspaceTrustEnablementService.isWorkspaceTrustEnabled())return{
      trusted:!0,uri:e
    };
    if(this.isTrustedVirtualResource(e))return{
      trusted:!0,uri:e
    };
    if(this.isTrustedByRemote(e))return{
      trusted:!0,uri:e
    };
    let t=!1, i=-1, r=e;
    for(const s of this._trustStateInfo.uriTrustInfo)if(this.uriIdentityService.extUri.isEqualOrParent(e, s.uri)){
      const o=s.uri.fsPath;
      o.length>i&&(i=o.length,t=s.trusted,r=s.uri)
    }
    return{
      trusted:t,uri:r
    }
  }
  async doSetUrisTrust(e, t){
    let i=!1;
    for(const r of e)if(t){
      if(this.isTrustedVirtualResource(r)||this.isTrustedByRemote(r))continue;
      this._trustStateInfo.uriTrustInfo.find(o=>this.uriIdentityService.extUri.isEqual(o.uri,r))||(this._trustStateInfo.uriTrustInfo.push({
        uri:r,trusted:!0
      }),i=!0)
    }
    else{
      const s=this._trustStateInfo.uriTrustInfo.length;
      this._trustStateInfo.uriTrustInfo=this._trustStateInfo.uriTrustInfo.filter(o=>!this.uriIdentityService.extUri.isEqual(o.uri,r)),s!==this._trustStateInfo.uriTrustInfo.length&&(i=!0)
    }
    i&&await this.saveTrustInfo()
  }
  isEmptyWorkspace(){
    if(this.workspaceService.getWorkbenchState()===1)return!0;
    const e=this.workspaceService.getWorkspace();
    return e?iRe(this.workspaceService.getWorkspace())&&e.folders.length===0:!1
  }
  isTrustedVirtualResource(e){
    return Mvi(e)&&e.scheme!=="vscode-vfs"
  }
  isTrustedByRemote(e){
    return!this.environmentService.remoteAuthority||!this._remoteAuthority?!1:Lze(vgi(e), this._remoteAuthority.authority.authority)&&!!this._remoteAuthority.options?.isTrusted
  }
  set isTrusted(e){
    this._isTrusted=e, e||(this._storedTrustState.acceptsOutOfWorkspaceFiles=!1), this.isEmptyWorkspace()&&(this._storedTrustState.isEmptyWorkspaceTrusted=e)
  }
  get workspaceResolved(){
    return this._workspaceResolvedPromise
  }
  get workspaceTrustInitialized(){
    return this._workspaceTrustInitializedPromise
  }
  get acceptsOutOfWorkspaceFiles(){
    return this._storedTrustState.acceptsOutOfWorkspaceFiles
  }
  set acceptsOutOfWorkspaceFiles(e){
    this._storedTrustState.acceptsOutOfWorkspaceFiles=e
  }
  isWorkspaceTrusted(){
    return this._isTrusted
  }
  isWorkspaceTrustForced(){
    return!!(this.environmentService.remoteAuthority&&this._remoteAuthority&&this._remoteAuthority.options?.isTrusted!==void 0||this.getWorkspaceUris().filter(t=>!this.isTrustedVirtualResource(t)).length===0)
  }
  canSetParentFolderTrust(){
    const e=fW(this._canonicalWorkspace);
    if(!oE(e)||e.uri.scheme!==_n.file&&e.uri.scheme!==_n.vscodeRemote)return!1;
    const t=this.uriIdentityService.extUri.dirname(e.uri);
    return!this.uriIdentityService.extUri.isEqual(e.uri, t)
  }
  async setParentFolderTrust(e){
    if(this.canSetParentFolderTrust()){
      const t=fW(this._canonicalWorkspace).uri,i=this.uriIdentityService.extUri.dirname(t);
      await this.setUrisTrust([i],e)
    }
  }
  canSetWorkspaceTrust(){
    if(this.environmentService.remoteAuthority&&(!this._remoteAuthority||this._remoteAuthority.options?.isTrusted!==void 0))return!1;
    if(this.isEmptyWorkspace())return!0;
    if(this.getWorkspaceUris().filter(r=>!this.isTrustedVirtualResource(r)).length===0)return!1;
    if(!this.isWorkspaceTrusted())return!0;
    const t=fW(this._canonicalWorkspace);
    if(!oE(t)||t.uri.scheme!==_n.file&&t.uri.scheme!=="vscode-vfs")return!1;
    const i=this.doGetUriTrustInfo(t.uri);
    if(!i.trusted||!this.uriIdentityService.extUri.isEqual(t.uri, i.uri))return!1;
    if(this.canSetParentFolderTrust()){
      const r=this.uriIdentityService.extUri.dirname(t.uri);
      if(this.doGetUriTrustInfo(r).trusted)return!1
    }
    return!0
  }
  async setWorkspaceTrust(e){
    if(this.isEmptyWorkspace()){
      await this.updateWorkspaceTrust(e);
      return
    }
    const t=this.getWorkspaceUris();
    await this.setUrisTrust(t, e)
  }
  async getUriTrustInfo(e){
    return this.workspaceTrustEnablementService.isWorkspaceTrustEnabled()?this.isTrustedByRemote(e)?{
      trusted:!0,uri:e
    }
    :this.doGetUriTrustInfo(await this.getCanonicalUri(e)):{
      trusted:!0,uri:e
    }
  }
  async setUrisTrust(e, t){
    this.doSetUrisTrust(await Promise.all(e.map(i=>this.getCanonicalUri(i))), t)
  }
  getTrustedUris(){
    return this._trustStateInfo.uriTrustInfo.map(e=>e.uri)
  }
  async setTrustedUris(e){
    this._trustStateInfo.uriTrustInfo=[];
    for(const t of e){
      const i=await this.getCanonicalUri(t),r=this.uriIdentityService.extUri.removeTrailingPathSeparator(i);
      let s=!1;
      for(const o of this._trustStateInfo.uriTrustInfo)if(this.uriIdentityService.extUri.isEqual(o.uri,r)){
        s=!0;
        break
      }
      s||this._trustStateInfo.uriTrustInfo.push({
        trusted:!0,uri:r
      })
    }
    await this.saveTrustInfo()
  }
  addWorkspaceTrustTransitionParticipant(e){
    return this._trustTransitionManager.addWorkspaceTrustTransitionParticipant(e)
  }
}, OEa=__decorate([__param(0, Fn), __param(1, fO), __param(2, Hi), __param(3, xl), __param(4, Cc), __param(5, Lr), __param(6, t7e), __param(7, Gr)], OEa), UEa=class extends at{
  constructor(e, t){
    super(), this.configurationService=e, this.workspaceTrustManagementService=t, this._onDidInitiateOpenFilesTrustRequest=this._register(new Qe), this.onDidInitiateOpenFilesTrustRequest=this._onDidInitiateOpenFilesTrustRequest.event, this._onDidInitiateWorkspaceTrustRequest=this._register(new Qe), this.onDidInitiateWorkspaceTrustRequest=this._onDidInitiateWorkspaceTrustRequest.event, this._onDidInitiateWorkspaceTrustRequestOnStartup=this._register(new Qe), this.onDidInitiateWorkspaceTrustRequestOnStartup=this._onDidInitiateWorkspaceTrustRequestOnStartup.event
  }
  get untrustedFilesSetting(){
    return this.configurationService.getValue($Ci)
  }
  set untrustedFilesSetting(e){
    this.configurationService.updateValue($Ci, e)
  }
  async completeOpenFilesTrustRequest(e, t){
    this._openFilesTrustRequestResolver&&(e===1&&(this.workspaceTrustManagementService.acceptsOutOfWorkspaceFiles=!0), t&&(e===1&&(this.untrustedFilesSetting="open"), e===2&&(this.untrustedFilesSetting="newWindow")), this._openFilesTrustRequestResolver(e), this._openFilesTrustRequestResolver=void 0, this._openFilesTrustRequestPromise=void 0)
  }
  async requestOpenFilesTrust(e){
    if(!this.workspaceTrustManagementService.isWorkspaceTrusted()||(await Promise.all(e.map(i=>this.workspaceTrustManagementService.getUriTrustInfo(i)))).map(i=>i.trusted).every(i=>i))return 1;
    if(this.untrustedFilesSetting!=="prompt"){
      if(this.untrustedFilesSetting==="newWindow")return 2;
      if(this.untrustedFilesSetting==="open")return 1
    }
    if(this.workspaceTrustManagementService.acceptsOutOfWorkspaceFiles)return 1;
    if(!this._openFilesTrustRequestPromise)this._openFilesTrustRequestPromise=new Promise(i=>{
      this._openFilesTrustRequestResolver=i
    });
    else return this._openFilesTrustRequestPromise;
    return this._onDidInitiateOpenFilesTrustRequest.fire(), this._openFilesTrustRequestPromise
  }
  resolveWorkspaceTrustRequest(e){
    this._workspaceTrustRequestResolver&&(this._workspaceTrustRequestResolver(e??this.workspaceTrustManagementService.isWorkspaceTrusted()), this._workspaceTrustRequestResolver=void 0, this._workspaceTrustRequestPromise=void 0)
  }
  cancelWorkspaceTrustRequest(){
    this._workspaceTrustRequestResolver&&(this._workspaceTrustRequestResolver(void 0), this._workspaceTrustRequestResolver=void 0, this._workspaceTrustRequestPromise=void 0)
  }
  async completeWorkspaceTrustRequest(e){
    if(e===void 0||e===this.workspaceTrustManagementService.isWorkspaceTrusted()){
      this.resolveWorkspaceTrustRequest(e);
      return
    }
    In.once(this.workspaceTrustManagementService.onDidChangeTrust)(t=>this.resolveWorkspaceTrustRequest(t)), await this.workspaceTrustManagementService.setWorkspaceTrust(e)
  }
  async requestWorkspaceTrust(e){
    if(this.workspaceTrustManagementService.isWorkspaceTrusted())return this.workspaceTrustManagementService.isWorkspaceTrusted();
    if(!this._workspaceTrustRequestPromise)this._workspaceTrustRequestPromise=new Promise(t=>{
      this._workspaceTrustRequestResolver=t
    });
    else return this._workspaceTrustRequestPromise;
    return this._onDidInitiateWorkspaceTrustRequest.fire(e), this._workspaceTrustRequestPromise
  }
  requestWorkspaceTrustOnStartup(){
    this._workspaceTrustRequestPromise||(this._workspaceTrustRequestPromise=new Promise(e=>{
      this._workspaceTrustRequestResolver=e
    })), this._onDidInitiateWorkspaceTrustRequestOnStartup.fire()
  }
}, UEa=__decorate([__param(0, Fn), __param(1, Wx)], UEa), W3f=class extends at{
  constructor(){
    super(...arguments), this.participants=new WD
  }
  addWorkspaceTrustTransitionParticipant(n){
    const e=this.participants.push(n);
    return $i(()=>e())
  }
  async participate(n){
    for(const e of this.participants)await e.participate(n)
  }
  dispose(){
    this.participants.clear(), super.dispose()
  }
}, Q3f=class{
  constructor(n){
    this._acceptsOutOfWorkspaceFilesKey="acceptsOutOfWorkspaceFiles", this._isEmptyWorkspaceTrustedKey="isEmptyWorkspaceTrusted", n?(this._memento=new EM("workspaceTrust", n), this._mementoObject=this._memento.getMemento(1, 1)):this._mementoObject={
      
    }
  }
  get acceptsOutOfWorkspaceFiles(){
    return this._mementoObject[this._acceptsOutOfWorkspaceFilesKey]??!1
  }
  set acceptsOutOfWorkspaceFiles(n){
    this._mementoObject[this._acceptsOutOfWorkspaceFilesKey]=n, this._memento?.saveMemento()
  }
  get isEmptyWorkspaceTrusted(){
    return this._mementoObject[this._isEmptyWorkspaceTrustedKey]
  }
  set isEmptyWorkspaceTrusted(n){
    this._mementoObject[this._isEmptyWorkspaceTrustedKey]=n, this._memento?.saveMemento()
  }
}, Vi(yX, UEa, 1)
}
}), h5, qEa, SX=