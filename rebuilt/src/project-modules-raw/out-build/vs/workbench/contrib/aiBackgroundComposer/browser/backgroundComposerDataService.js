// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/backgroundComposerDataService.js
// Offset: 26851209 (bundle byte offset)
// Size: 3745 bytes

Wt(), rt(), Er(), kr(), ps(), vNe(), ml(), gT(), zbi(), Dd(), W9(), eu(), ns(), Yn(), fN(), Cnu(), Yk=xi("backgroundComposerDataService"), gga=class extends at{
  bcIdForThisWindow(){
    const e=this.workbenchEnvironmentService.remoteAuthority;
    if(e)return Q1e(e)
  }
  isBackgroundWindow(){
    return this.bcIdForThisWindow()!==void 0
  }
  constructor(e, t, i, r, s, o){
    super(), this.storageService=e, this.workspaceContextService=t, this.reactiveStorageService=i, this.workbenchEnvironmentService=r, this.fileService=s, [this.data, this.setData]=zkA(o);
    const a=d_g(e, OFn), [l, u]=v3(a);
    this.persistentData=l, this.setPersistentData=u;
    const d=h_g(e, t, UFn), [m, p]=v3(d);
    this.workspacePersistentData=m, this.setWorkspacePersistentData=p, this._register(this.storageService.onDidChangeValue(-1, OFn, this._register(new Ut))(g=>{
      const f=d_g(e,OFn);
      this.setPersistentData(f)
    })), this._register(this.storageService.onDidChangeValue(1, UFn, this._register(new Ut))(g=>{
      const f=h_g(e,t,UFn);
      this.setWorkspacePersistentData(f)
    })), this.setupEnvironmentJsonWatcher()
  }
  setupEnvironmentJsonWatcher(){
    const e=this.workspaceContextService.getWorkspace().folders.at(0)?.uri;
    if(!e){
      this.setData("hasEnvironmentJsonOnDisk",!1);
      return
    }
    const t=je.joinPath(e, ".cursor/environment.json");
    if(!t){
      this.setData("hasEnvironmentJsonOnDisk",!1);
      return
    }
    this.environmentJsonUri=t, this.checkEnvironmentJsonExists(), this._register(this.fileService.watch(t)), this._register(this.fileService.onDidFilesChange(i=>{
      (i.contains(t,1)||i.contains(t,2))&&this.checkEnvironmentJsonExists()
    }))
  }
  async checkEnvironmentJsonExists(){
    if(!this.environmentJsonUri){
      this.setData("hasEnvironmentJsonOnDisk",!1);
      return
    }
    try{
      const e=await this.fileService.exists(this.environmentJsonUri);
      this.setData("hasEnvironmentJsonOnDisk",e)
    }
    catch(e){
      console.error(`[Environment JSON] Error checking if environment.json exists: ${e}`),this.setData("hasEnvironmentJsonOnDisk",!1)
    }
  }
  getBackgroundComposerEnv(){
    return this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerEnv??"prod"
  }
  saveWorkspacePersistentData(){
    this.storageService.store(UFn, JSON.stringify(this.workspacePersistentData), 1, 1)
  }
  savePersistentData(){
    try{
      const e=u_g();
      this.storageService.store(OFn,JSON.stringify(this.persistentData),e,1)
    }
    catch(e){
      console.warn(`Error saving background composer data: ${e}`)
    }
  }
  getBackgroundComposerFollowUpInputDataHandle(){
    if(!this.data.backgroundComposerFollowUpInputData)throw new Error("No background composer follow up input data");
    return dga(this.data.backgroundComposerFollowUpInputData)
  }
  focusBackgroundComposerFollowUp(){
    this.data.isBranchSelectorOpen||this.data.backgroundComposerFollowUpInputBoxDelegate.focus()
  }
  doesInWindowBCHaveDiffsReactive(){
    const e=this.data.inWindowBackgroundComposer?.detailedDiff;
    return(e&&(e.diff&&e.diff.diffs&&e.diff.diffs.length>0||e.submoduleDiffs&&e.submoduleDiffs.some(i=>i.diff&&i.diff.diffs&&i.diff.diffs.length>0)))??!1
  }
  getInWindowBcData(){
    if(this.bcIdForThisWindow())return this.data.inWindowBackgroundComposer
  }
  getBcDataInMainWindow(e){
    if(this.bcIdForThisWindow()){
      console.error("getBcDataInMainWindow called in bc window. use getInWindowBcData instead");
      return
    }
    return this.data.backgroundComposers.find(i=>i.bcId===e)
  }
  setDisplayPreference(e, t){
    this.setData("backgroundComposers", i=>i.bcId===e, {
      displayPreference:t
    })
  }
  getDisplayPreference(e){
    const t=this.data.backgroundComposers.find(i=>i.bcId===e)?.displayPreference??(this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerState.defaultDisplayPreference4||_nu);
    return t==="peek"?"chat":t
  }
}, gga=__decorate([__param(0, Hi), __param(1, Lr), __param(2, ku), __param(3, Cc), __param(4, Gr), __param(5, ix)], gga), Vi(Yk, gga, 2)
}
}), pm, Sme=