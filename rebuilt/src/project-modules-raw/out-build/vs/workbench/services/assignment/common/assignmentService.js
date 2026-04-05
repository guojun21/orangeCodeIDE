// Module: out-build/vs/workbench/services/assignment/common/assignmentService.js
// Offset: 30915015 (bundle byte offset)
// Size: 1720 bytes

Ht(), Wt(), Qq(), Pa(), kr(), Er(), Ei(), Rl(), Ws(), Try(), uP(), Mp(), qg(), xqe=xi("WorkbenchAssignmentService"), Wxf=class{
  constructor(n){
    this.memento=n, this.mementoObj=n.getMemento(-1, 1)
  }
  async getValue(n, e){
    return await this.mementoObj[n]||e
  }
  setValue(n, e){
    this.mementoObj[n]=e, this.memento.saveMemento()
  }
}, Qxf=class{
  constructor(n, e){
    this.telemetryService=n, this.productService=e
  }
  get assignmentContext(){
    return this._lastAssignmentContext?.split(";")
  }
  setSharedProperty(n, e){
    n===this.productService.tasConfig?.assignmentContextTelemetryPropertyName&&(this._lastAssignmentContext=e), this.telemetryService.setExperimentProperty(n, e)
  }
  postEvent(n, e){
    const t={
      
    };
    for(const[i, r]of e.entries())t[i]=r;
    this.telemetryService.publicLog(n, t)
  }
}, yCa=class extends Gxf{
  constructor(e, t, i, r, s){
    super(e.machineId, i, r, s, new Qxf(e, r), new Wxf(new EM("experiment.service.memento", t))), this.telemetryService=e
  }
  get experimentsEnabled(){
    return this.configurationService.getValue("workbench.enableExperiments")===!0
  }
  async getTreatment(e){
    const t=await super.getTreatment(e);
    return this.telemetryService.publicLog2("tasClientReadTreatmentComplete", {
      treatmentName:e,treatmentValue:JSON.stringify(t)
    }), t
  }
  async getCurrentExperiments(){
    if(this.tasClient&&this.experimentsEnabled)return await this.tasClient, this.telemetry?.assignmentContext
  }
}, yCa=__decorate([__param(0, ea), __param(1, Hi), __param(2, Fn), __param(3, za), __param(4, lg)], yCa), Vi(xqe, yCa, 1), jxf=Di.as(Dh.Configuration), jxf.registerConfiguration({
  ...vQ, properties:{
    "workbench.enableExperiments":{
      type:"boolean",description:_(13661,null),default:!0,scope:1,restricted:!0,tags:["usesOnlineServices"]
    }
  }
})
}
}), Gye, Tqe=