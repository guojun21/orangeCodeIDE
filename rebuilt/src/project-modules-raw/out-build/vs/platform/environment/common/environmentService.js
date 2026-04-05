// Module: out-build/vs/platform/environment/common/environmentService.js
// Offset: 30165978 (bundle byte offset)
// Size: 5614 bytes

A9(), U0(), zr(), Hl(), S6(), Yr(), Yn(), _r(), Kpn=/^([^.]+\..+)[:=](.+)$/, uB=class{
  get appRoot(){
    return zN(og.asFileUri("").fsPath)
  }
  get userHome(){
    return je.file(this.paths.homeDir)
  }
  get userDataPath(){
    return this.paths.userDataDir
  }
  get appSettingsHome(){
    return je.file(gS(this.userDataPath, "User"))
  }
  get tmpDir(){
    return je.file(this.paths.tmpDir)
  }
  get cacheHome(){
    return je.file(this.userDataPath)
  }
  get stateResource(){
    return Wo(this.appSettingsHome, "globalStorage", "storage.json")
  }
  get userRoamingDataHome(){
    return this.appSettingsHome.with({
      scheme:_n.vscodeUserData
    })
  }
  get userDataSyncHome(){
    return Wo(this.appSettingsHome, "sync")
  }
  get logsHome(){
    if(!this.args.logsPath){
      const n=_ch(new Date).replace(/-|:|\.\d+Z$/g,"");
      this.args.logsPath=gS(this.userDataPath,"logs",n)
    }
    return je.file(this.args.logsPath)
  }
  get sync(){
    return this.args.sync
  }
  get machineSettingsResource(){
    return Wo(je.file(gS(this.userDataPath, "Machine")), "settings.json")
  }
  get workspaceStorageHome(){
    return Wo(this.appSettingsHome, "workspaceStorage")
  }
  get localHistoryHome(){
    return Wo(this.appSettingsHome, "History")
  }
  get keyboardLayoutResource(){
    return Wo(this.userRoamingDataHome, "keyboardLayout.json")
  }
  get argvResource(){
    const n=u2.VSCODE_PORTABLE;
    return n?je.file(gS(n, "argv.json")):Wo(this.userHome, this.productService.dataFolderName, "argv.json")
  }
  get isExtensionDevelopment(){
    return!!this.args.extensionDevelopmentPath
  }
  get untitledWorkspacesHome(){
    return je.file(gS(this.userDataPath, "Workspaces"))
  }
  get builtinExtensionsPath(){
    const n=this.args["builtin-extensions-dir"];
    return n?dgt(n):k6(gS(og.asFileUri("").fsPath, "..", "extensions"))
  }
  get extensionsDownloadLocation(){
    const n=this.args["extensions-download-dir"];
    return n?je.file(dgt(n)):je.file(gS(this.userDataPath, "CachedExtensionVSIXs"))
  }
  get extensionsPath(){
    const n=this.args["extensions-dir"];
    if(n)return dgt(n);
    const e=u2.VSCODE_EXTENSIONS;
    if(e)return e;
    const t=u2.VSCODE_PORTABLE;
    return t?gS(t, "extensions"):Wo(this.userHome, this.productService.dataFolderName, "extensions").fsPath
  }
  get extensionDevelopmentLocationURI(){
    const n=this.args.extensionDevelopmentPath;
    if(Array.isArray(n))return n.map(e=>/^[^:/?#]+?:\/\//.test(e)?je.parse(e):je.file(k6(e)))
  }
  get extensionDevelopmentKind(){
    return this.args.extensionDevelopmentKind?.map(n=>n==="ui"||n==="workspace"||n==="web"?n:"workspace")
  }
  get extensionTestsLocationURI(){
    const n=this.args.extensionTestsPath;
    if(n)return/^[^:/?#]+?:\/\//.test(n)?je.parse(n):je.file(k6(n))
  }
  get disableExtensions(){
    if(this.args["disable-extensions"])return!0;
    const n=this.args["disable-extension"];
    if(n){
      if(typeof n=="string")return[n];
      if(Array.isArray(n)&&n.length>0)return n
    }
    return!1
  }
  get debugExtensionHost(){
    return Iey(this.args, this.isBuilt)
  }
  get debugRenderer(){
    return!!this.args.debugRenderer
  }
  get isBuilt(){
    return!u2.VSCODE_DEV
  }
  get verbose(){
    return!!this.args.verbose
  }
  get logLevel(){
    return this.args.log?.find(n=>!Kpn.test(n))
  }
  get extensionLogLevel(){
    const n=[];
    for(const e of this.args.log||[]){
      const t=Kpn.exec(e);
      t&&t[1]&&t[2]&&n.push([t[1],t[2]])
    }
    return n.length?n:void 0
  }
  get serviceMachineIdResource(){
    return Wo(je.file(this.userDataPath), "machineid")
  }
  get crashReporterId(){
    return this.args["crash-reporter-id"]
  }
  get crashReporterDirectory(){
    return this.args["crash-reporter-directory"]
  }
  get disableTelemetry(){
    return!!this.args["disable-telemetry"]
  }
  get disableWorkspaceTrust(){
    return!!this.args["disable-workspace-trust"]
  }
  get useInMemorySecretStorage(){
    return!!this.args["use-inmemory-secretstorage"]
  }
  get policyFile(){
    if(this.args["__enable-file-policy"]||xv){
      const n=u2.VSCODE_PORTABLE;
      return n?je.file(gS(n,"policy.json")):Wo(this.userHome,this.productService.dataFolderName,"policy.json")
    }
  }
  get editSessionId(){
    return this.args.editSessionId
  }
  get continueOn(){
    return this.args.continueOn
  }
  set continueOn(n){
    this.args.continueOn=n
  }
  get args(){
    return this._args
  }
  constructor(n, e, t){
    this._args=n, this.paths=e, this.productService=t
  }
}, __decorate([cl], uB.prototype, "appRoot", null), __decorate([cl], uB.prototype, "userHome", null), __decorate([cl], uB.prototype, "userDataPath", null), __decorate([cl], uB.prototype, "appSettingsHome", null), __decorate([cl], uB.prototype, "tmpDir", null), __decorate([cl], uB.prototype, "cacheHome", null), __decorate([cl], uB.prototype, "stateResource", null), __decorate([cl], uB.prototype, "userRoamingDataHome", null), __decorate([cl], uB.prototype, "userDataSyncHome", null), __decorate([cl], uB.prototype, "sync", null), __decorate([cl], uB.prototype, "machineSettingsResource", null), __decorate([cl], uB.prototype, "workspaceStorageHome", null), __decorate([cl], uB.prototype, "localHistoryHome", null), __decorate([cl], uB.prototype, "keyboardLayoutResource", null), __decorate([cl], uB.prototype, "argvResource", null), __decorate([cl], uB.prototype, "isExtensionDevelopment", null), __decorate([cl], uB.prototype, "untitledWorkspacesHome", null), __decorate([cl], uB.prototype, "builtinExtensionsPath", null), __decorate([cl], uB.prototype, "extensionsPath", null), __decorate([cl], uB.prototype, "extensionDevelopmentLocationURI", null), __decorate([cl], uB.prototype, "extensionDevelopmentKind", null), __decorate([cl], uB.prototype, "extensionTestsLocationURI", null), __decorate([cl], uB.prototype, "debugExtensionHost", null), __decorate([cl], uB.prototype, "logLevel", null), __decorate([cl], uB.prototype, "extensionLogLevel", null), __decorate([cl], uB.prototype, "serviceMachineIdResource", null), __decorate([cl], uB.prototype, "disableTelemetry", null), __decorate([cl], uB.prototype, "disableWorkspaceTrust", null), __decorate([cl], uB.prototype, "useInMemorySecretStorage", null), __decorate([cl], uB.prototype, "policyFile", null)
}
}), dO, B_, DU=