// Module: out-build/vs/workbench/services/environment/browser/environmentService.js
// Offset: 30171592 (bundle byte offset)
// Size: 10388 bytes

zr(), Yr(), Yn(), qg(), U0(), _s(), d2(), jr(), Js(), Wt(), qhu(), dO=lg, B_=class{
  get remoteAuthority(){
    return this.options.remoteAuthority
  }
  get expectsResolverExtension(){
    return!!this.options.remoteAuthority?.includes("+")&&!this.options.webSocketFactory
  }
  get isBuilt(){
    return!!this.productService.commit
  }
  get shadowWindowForWorkspaceId(){
    
  }
  get logLevel(){
    const n=this.payload?.get("logLevel");
    return n?n.split(",").find(e=>!Kpn.test(e)):this.options.developmentOptions?.logLevel!==void 0?Hbe(this.options.developmentOptions?.logLevel):void 0
  }
  get extensionLogLevel(){
    const n=this.payload?.get("logLevel");
    if(n){
      const e=[];
      for(const t of n.split(",")){
        const i=Kpn.exec(t);
        i&&i[1]&&i[2]&&e.push([i[1],i[2]])
      }
      return e.length?e:void 0
    }
    return this.options.developmentOptions?.extensionLogLevel!==void 0?this.options.developmentOptions?.extensionLogLevel.map(([e, t])=>[e, Hbe(t)]):void 0
  }
  get profDurationMarkers(){
    const n=this.payload?.get("profDurationMarkers");
    if(n){
      const e=[];
      for(const t of n.split(","))e.push(t);
      return e.length===2?e:void 0
    }
  }
  get windowLogsPath(){
    return this.logsHome
  }
  get logFile(){
    return Wo(this.windowLogsPath, "window.log")
  }
  get userRoamingDataHome(){
    return je.file("/User").with({
      scheme:_n.vscodeUserData
    })
  }
  get argvResource(){
    return Wo(this.userRoamingDataHome, "argv.json")
  }
  get cacheHome(){
    return Wo(this.userRoamingDataHome, "caches")
  }
  get workspaceStorageHome(){
    return Wo(this.userRoamingDataHome, "workspaceStorage")
  }
  get localHistoryHome(){
    return Wo(this.userRoamingDataHome, "History")
  }
  get stateResource(){
    return Wo(this.userRoamingDataHome, "State", "storage.json")
  }
  get userDataSyncHome(){
    return Wo(this.userRoamingDataHome, "sync", this.workspaceId)
  }
  get sync(){
    
  }
  get keyboardLayoutResource(){
    return Wo(this.userRoamingDataHome, "keyboardLayout.json")
  }
  get untitledWorkspacesHome(){
    return Wo(this.userRoamingDataHome, "Workspaces")
  }
  get serviceMachineIdResource(){
    return Wo(this.userRoamingDataHome, "machineid")
  }
  get extHostLogsPath(){
    return Wo(this.logsHome, "exthost")
  }
  get debugExtensionHost(){
    return this.extensionHostDebugEnvironment||(this.extensionHostDebugEnvironment=this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.params
  }
  get isExtensionDevelopment(){
    return this.extensionHostDebugEnvironment||(this.extensionHostDebugEnvironment=this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.isExtensionDevelopment
  }
  get extensionDevelopmentLocationURI(){
    return this.extensionHostDebugEnvironment||(this.extensionHostDebugEnvironment=this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.extensionDevelopmentLocationURI
  }
  get extensionDevelopmentLocationKind(){
    return this.extensionHostDebugEnvironment||(this.extensionHostDebugEnvironment=this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.extensionDevelopmentKind
  }
  get extensionTestsLocationURI(){
    return this.extensionHostDebugEnvironment||(this.extensionHostDebugEnvironment=this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.extensionTestsLocationURI
  }
  get extensionEnabledProposedApi(){
    return this.extensionHostDebugEnvironment||(this.extensionHostDebugEnvironment=this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.extensionEnabledProposedApi
  }
  get debugRenderer(){
    return this.extensionHostDebugEnvironment||(this.extensionHostDebugEnvironment=this.resolveExtensionHostDebugEnvironment()), this.extensionHostDebugEnvironment.debugRenderer
  }
  get enableSmokeTestDriver(){
    return this.options.developmentOptions?.enableSmokeTestDriver
  }
  get testFeatureFlags(){
    return this.options.developmentOptions?.testFeatureFlags
  }
  get testDynamicConfigs(){
    return this.options.developmentOptions?.testDynamicConfigs
  }
  get isGlass(){
    return!1
  }
  get glassWorkspaceRole(){
    
  }
  get disableExtensions(){
    return this.payload?.get("disableExtensions")==="true"
  }
  get enableExtensions(){
    return this.options.enabledExtensions
  }
  get webviewExternalEndpoint(){
    const n=this.options.webviewEndpoint||this.productService.webviewContentExternalBaseUrlTemplate||"https://{{uuid}}.vscode-cdn.net/{{quality}}/{{commit}}/out/vs/workbench/contrib/webview/browser/pre/", e=this.payload?.get("webviewExternalEndpointCommit");
    return n.replace("{{commit}}", e??this.productService.commit??"ef65ac1ba57f57f2a3961bfe94aa20481caca4c6").replace("{{quality}}", (e?"insider":this.productService.quality)??"insider")
  }
  get extensionTelemetryLogResource(){
    return Wo(this.logsHome, "extensionTelemetry.log")
  }
  get disableTelemetry(){
    return!1
  }
  get verbose(){
    return this.payload?.get("verbose")==="true"
  }
  get logExtensionHostCommunication(){
    return this.payload?.get("logExtensionHostCommunication")==="true"
  }
  get skipReleaseNotes(){
    return this.payload?.get("skipReleaseNotes")==="true"
  }
  get skipWelcome(){
    return this.payload?.get("skipWelcome")==="true"
  }
  get skipOnboarding(){
    return this.payload?.get("skipOnboarding")==="true"
  }
  get suppressPopupsOnStartup(){
    return this.payload?.get("suppressPopupsOnStartup")==="true"
  }
  get overrideCursorAuthToken(){
    return this.payload?.get("overrideCursorAuthToken")
  }
  get disableWorkspaceTrust(){
    return!this.options.enableWorkspaceTrust
  }
  get profile(){
    return this.payload?.get("profile")
  }
  get editSessionId(){
    return this.options.editSessionId
  }
  constructor(n, e, t, i){
    if(this.workspaceId=n, this.logsHome=e, this.options=t, this.productService=i, this.extensionHostDebugEnvironment=void 0, t.workspaceProvider&&Array.isArray(t.workspaceProvider.payload))try{
      this.payload=new Map(t.workspaceProvider.payload)
    }
    catch(r){
      Gc(r)
    }
  }
  resolveExtensionHostDebugEnvironment(){
    const n={
      params:{
        port:null,break:!1
      },debugRenderer:!1,isExtensionDevelopment:!1,extensionDevelopmentLocationURI:void 0,extensionDevelopmentKind:void 0
    };
    if(this.payload)for(const[t, i]of this.payload)switch(t){
      case"extensionDevelopmentPath":n.extensionDevelopmentLocationURI||(n.extensionDevelopmentLocationURI=[]),n.extensionDevelopmentLocationURI.push(je.parse(i)),n.isExtensionDevelopment=!0;
      break;
      case"extensionDevelopmentKind":n.extensionDevelopmentKind=[i];
      break;
      case"extensionTestsPath":n.extensionTestsLocationURI=je.parse(i);
      break;
      case"debugRenderer":n.debugRenderer=i==="true";
      break;
      case"debugId":n.params.debugId=i;
      break;
      case"inspect-brk-extensions":n.params.port=parseInt(i),n.params.break=!0;
      break;
      case"inspect-extensions":n.params.port=parseInt(i);
      break;
      case"enableProposedApi":n.extensionEnabledProposedApi=[];
      break
    }
    const e=this.options.developmentOptions;
    return e&&!n.isExtensionDevelopment&&(e.extensions?.length&&(n.extensionDevelopmentLocationURI=e.extensions.map(t=>je.revive(t)), n.isExtensionDevelopment=!0), e.extensionTestsPath&&(n.extensionTestsLocationURI=je.revive(e.extensionTestsPath))), n
  }
  get filesToOpenOrCreate(){
    if(this.payload){
      const n=this.payload.get("openFile");
      if(n){
        const e=je.parse(n);
        if(this.payload.has("gotoLineMode")){
          const t=jtA(e.path);
          return[{
            fileUri:e.with({
              path:t.path
            }),options:{
              selection:Df(t.line)?void 0:{
                startLineNumber:t.line,startColumn:t.column||1
              }
            }
          }
          ]
        }
        return[{
          fileUri:e
        }
        ]
      }
    }
  }
  get filesToDiff(){
    if(this.payload){
      const n=this.payload.get("diffFilePrimary"),e=this.payload.get("diffFileSecondary");
      if(n&&e)return[{
        fileUri:je.parse(e)
      },{
        fileUri:je.parse(n)
      }
      ]
    }
  }
  get filesToMerge(){
    if(this.payload){
      const n=this.payload.get("mergeFile1"),e=this.payload.get("mergeFile2"),t=this.payload.get("mergeFileBase"),i=this.payload.get("mergeFileResult");
      if(n&&e&&t&&i)return[{
        fileUri:je.parse(n)
      },{
        fileUri:je.parse(e)
      },{
        fileUri:je.parse(t)
      },{
        fileUri:je.parse(i)
      }
      ]
    }
  }
}, __decorate([cl], B_.prototype, "remoteAuthority", null), __decorate([cl], B_.prototype, "expectsResolverExtension", null), __decorate([cl], B_.prototype, "isBuilt", null), __decorate([cl], B_.prototype, "shadowWindowForWorkspaceId", null), __decorate([cl], B_.prototype, "logLevel", null), __decorate([cl], B_.prototype, "windowLogsPath", null), __decorate([cl], B_.prototype, "logFile", null), __decorate([cl], B_.prototype, "userRoamingDataHome", null), __decorate([cl], B_.prototype, "argvResource", null), __decorate([cl], B_.prototype, "cacheHome", null), __decorate([cl], B_.prototype, "workspaceStorageHome", null), __decorate([cl], B_.prototype, "localHistoryHome", null), __decorate([cl], B_.prototype, "stateResource", null), __decorate([cl], B_.prototype, "userDataSyncHome", null), __decorate([cl], B_.prototype, "sync", null), __decorate([cl], B_.prototype, "keyboardLayoutResource", null), __decorate([cl], B_.prototype, "untitledWorkspacesHome", null), __decorate([cl], B_.prototype, "serviceMachineIdResource", null), __decorate([cl], B_.prototype, "extHostLogsPath", null), __decorate([cl], B_.prototype, "debugExtensionHost", null), __decorate([cl], B_.prototype, "isExtensionDevelopment", null), __decorate([cl], B_.prototype, "extensionDevelopmentLocationURI", null), __decorate([cl], B_.prototype, "extensionDevelopmentLocationKind", null), __decorate([cl], B_.prototype, "extensionTestsLocationURI", null), __decorate([cl], B_.prototype, "extensionEnabledProposedApi", null), __decorate([cl], B_.prototype, "debugRenderer", null), __decorate([cl], B_.prototype, "enableSmokeTestDriver", null), __decorate([cl], B_.prototype, "testFeatureFlags", null), __decorate([cl], B_.prototype, "testDynamicConfigs", null), __decorate([cl], B_.prototype, "isGlass", null), __decorate([cl], B_.prototype, "glassWorkspaceRole", null), __decorate([cl], B_.prototype, "disableExtensions", null), __decorate([cl], B_.prototype, "enableExtensions", null), __decorate([cl], B_.prototype, "webviewExternalEndpoint", null), __decorate([cl], B_.prototype, "extensionTelemetryLogResource", null), __decorate([cl], B_.prototype, "disableTelemetry", null), __decorate([cl], B_.prototype, "verbose", null), __decorate([cl], B_.prototype, "logExtensionHostCommunication", null), __decorate([cl], B_.prototype, "skipReleaseNotes", null), __decorate([cl], B_.prototype, "skipWelcome", null), __decorate([cl], B_.prototype, "skipOnboarding", null), __decorate([cl], B_.prototype, "suppressPopupsOnStartup", null), __decorate([cl], B_.prototype, "overrideCursorAuthToken", null), __decorate([cl], B_.prototype, "disableWorkspaceTrust", null), __decorate([cl], B_.prototype, "profile", null), __decorate([cl], B_.prototype, "editSessionId", null), __decorate([cl], B_.prototype, "filesToOpenOrCreate", null), __decorate([cl], B_.prototype, "filesToDiff", null), __decorate([cl], B_.prototype, "filesToMerge", null)
}
});
function Knt(n){
  const t=n.replace(/\s/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "").replace(/\.+/g, ".");
  return t==="."||t===".."?t.replace(/\./g, "_"):t.length===0?"_":t
}
var Hhu=