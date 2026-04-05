// Module: out-build/vs/platform/assignment/common/assignmentService.js
// Offset: 30913264 (bundle byte offset)
// Size: 1751 bytes

l8(), xry(), KEe(), Gxf=class{
  get experimentsEnabled(){
    return!0
  }
  constructor(n, e, t, i, r, s){
    this.machineId=n, this.configurationService=e, this.productService=t, this.environmentService=i, this.telemetry=r, this.keyValueStorage=s, this.networkInitialized=!1, !(i.extensionTestsLocationURI!==void 0)&&t.tasConfig&&this.experimentsEnabled&&Ent(this.configurationService)===3&&(this.tasClient=this.setupTASClient());
    const a=this.configurationService.getValue("experiments.overrideDelay"), l=typeof a=="number"?a:0;
    this.overrideInitDelay=new Promise(u=>setTimeout(u, l))
  }
  async getTreatment(n){
    await this.overrideInitDelay;
    const e=this.configurationService.getValue("experiments.override."+n);
    if(e!==void 0)return e;
    if(!this.tasClient||!this.experimentsEnabled)return;
    let t;
    const i=await this.tasClient;
    return this.networkInitialized?t=i.getTreatmentVariable("vscode", n):t=await i.getTreatmentVariableAsync("vscode", n, !0), t=i.getTreatmentVariable("vscode", n), t
  }
  async setupTASClient(){
    const n=this.productService.quality==="stable"?B_i.Public:this.productService.quality==="exploration"?B_i.Exploration:B_i.Insiders, e=new $xf(this.productService.version, this.productService.nameLong, this.machineId, n), t=this.productService.tasConfig, i=new(await DQ("tas-client-umd", "lib/tas-client-umd.js")).ExperimentationService({
      filterProviders:[e],telemetry:this.telemetry,storageKey:Oxf,keyValueStorage:this.keyValueStorage,assignmentContextTelemetryPropertyName:t.assignmentContextTelemetryPropertyName,telemetryEventName:t.telemetryEventName,endpoint:t.endpoint,refetchInterval:Uxf
    });
    return await i.initializePromise, i.initialFetch.then(()=>this.networkInitialized=!0), i
  }
}
}
}), xqe, Wxf, Qxf, yCa, jxf, fit=