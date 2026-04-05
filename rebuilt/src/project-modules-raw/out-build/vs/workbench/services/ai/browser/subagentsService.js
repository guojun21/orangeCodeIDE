// Module: out-build/vs/workbench/services/ai/browser/subagentsService.js
// Offset: 28508774 (bundle byte offset)
// Size: 2773 bytes

yn(), rt(), Mbe(), fnt(), Yn(), hs(), Ime(), ns(), Er(), Wt(), rf(), kr(), ps(), uO(), Wu(), _g(), OJ(), kkt=xi("subagentsService"), RAa=class extends at{
  constructor(e, t, i, r, s, o, a){
    super(), this.fileService=e, this.workspaceContextService=t, this.pathService=i, this.commandService=r, this.storageService=s, this.experimentService=o, this.pluginsProviderService=a, this._subagentsProvider=new wye, this._onDidSubagentsChange=this._register(new Qe), this.onDidSubagentsChange=this._onDidSubagentsChange.event, this.thirdPartyExtensibilityObservable=this._register(hm(this.storageService, "thirdPartyExtensibilityEnabled")), this._register(this.fileService.onDidFilesChange(u=>this.onDidFilesChange(u))), this._register(this.workspaceContextService.onDidChangeWorkspaceFolders(()=>{
      this.initializeWatchedPaths().then(()=>this.reload()).then(()=>{
        this._onDidSubagentsChange.fire()
      })
    }));
    const l=()=>{
      this.reload().then(()=>{
        this._onDidSubagentsChange.fire()
      })
    };
    this._register(this.pluginsProviderService.onDidPluginsChange(l)), this._register(this.pluginsProviderService.onDidPluginsChangeWithoutRefetch(l)), this._register(p3(this.thirdPartyExtensibilityObservable, ()=>{
      this.reload().then(()=>{
        this._onDidSubagentsChange.fire()
      })
    })), this.initializeWatchedPaths()
  }
  async initializeWatchedPaths(){
    const e=await this.pathService.userHome();
    this._userAgentsDir=je.joinPath(e, ".cursor", "agents");
    const t=this.workspaceContextService.getWorkspace();
    t.folders.length>0&&(this._workspaceRulesDir=await iif(t, this.pathService))
  }
  isSubagentRelatedPath(e){
    const t=e.replace(/\\/g, "/");
    return!!(t.includes(".cursor/agents")||t.includes(".cursor/rules")||this._userAgentsDir&&t.startsWith(this._userAgentsDir.path)||this._workspaceRulesDir&&t.startsWith(this._workspaceRulesDir.path))
  }
  onDidFilesChange(e){
    (e.rawAdded.some(i=>this.isSubagentRelatedPath(i.path))||e.rawUpdated.some(i=>this.isSubagentRelatedPath(i.path))||e.rawDeleted.some(i=>this.isSubagentRelatedPath(i.path)))&&this.reload().then(()=>{
      this._onDidSubagentsChange.fire()
    })
  }
  async reload(){
    await(await X3(this._subagentsProvider)).reload()
  }
  async getAllSubagents(){
    const t=await(await X3(this._subagentsProvider)).getAllSubagents(), i=this.thirdPartyExtensibilityObservable.get(), r=this.experimentService.checkFeatureGate("enable_cc_plugin_import"), s=o=>o.replace(/\\/g, "/");
    return t.filter(o=>{
      const a=s(o.fullPath),l=oqe(a);
      return!(!i&&l||!r&&l)
    })
  }
  registerSubagentsProvider(e){
    return this._subagentsProvider.set(e), $i(()=>{
      this._subagentsProvider.clear()
    })
  }
  notifyProviderReady(){
    this._onDidSubagentsChange.fire()
  }
}, RAa=__decorate([__param(0, Gr), __param(1, Lr), __param(2, kp), __param(3, fr), __param(4, Hi), __param(5, Tl), __param(6, uie)], RAa), Vi(kkt, RAa, 1)
}
}), Ekt, xkt, mMe, Ome, wpn, Mye=