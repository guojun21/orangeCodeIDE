// Module: out-build/vs/workbench/services/ai/common/simpleTestService.js
// Offset: 33791925 (bundle byte offset)
// Size: 2515 bytes

Yn(), Er(), Mp(), Wt(), Ws(), Ei(), Ku(), ps(), Hl(), v0u=xi("simpleTestService"), XIa=class{
  registerSimpleTestProvider(e){
    this.simpleTestProviders.push(e)
  }
  constructor(e, t, i){
    this.configurationService=e, this.languageService=t, this.workspaceContextService=i, this.simpleTestProviders=[]
  }
  hasTestConfig(e){
    return this.getTestConfig(e)!==void 0
  }
  get testRunnerConfig(){
    return this.configurationService.getValue(A0u)?.config??[]
  }
  insertDummyTestConfig(e){
    const t=this.languageService.createByFilepathOrFirstLine(e), i=je.file(zN(e.fsPath)), s={
      directory:this.workspaceContextService.asRelativePath(i,!1),language:t.languageId,testingFramework:"vitest",command:'echo "Configure your test command here. The variable $TEST_FILE_NAME will have the file name of the test that should be executed."'
    };
    this.configurationService.updateValue("testRunner.config", [...this.testRunnerConfig, s], 5)
  }
  getTestBoilerplate(e, t, i){
    const r=this.getProvider(e);
    if(r===void 0)return;
    const s=fd(i.fsPath);
    return r.createTestBoilerplate({
      interfaceName:t,interfacePath:s
    })
  }
  getProvider(e){
    const t=this.getTestConfig(e);
    if(t!==void 0)return this.simpleTestProviders.find(i=>i.language===t.language&&i.testingFramework===t.testingFramework)
  }
  getTestConfig(e){
    const t=this.languageService.createByFilepathOrFirstLine(e), i=this.workspaceContextService.asRelativePath(e, !1);
    return this.testRunnerConfig.sort((r, s)=>s.directory.length-r.directory.length).find(r=>{
      if(r.language!==t.languageId)return!1;
      let s=r.directory;
      return s.startsWith("./")&&(s=s.substring(2)),!(s!=="."&&!i.startsWith(s))
    })
  }
}, XIa=__decorate([__param(0, Fn), __param(1, Jl), __param(2, Lr)], XIa), A0u="testRunner", Di.as(Dh.Configuration).registerConfiguration({
  id:A0u, order:15, title:"Test Runner", type:"object", properties:{
    "testRunner.config":{
      type:"array",markdownDescription:"Configure how to run tests from the command-line. This is a light-weight way to let Cursor run tests for you.",items:{
        type:"object",properties:{
          directory:{
            type:"string",description:"The directory that should be matched against."
          },language:{
            type:"string",description:"The language that should be matched against."
          },testingFramework:{
            enum:["vitest","mocha"],description:"The testing framework used by the language in the directory."
          },command:{
            type:"string",description:"The command to run to run the tests. This should be a command that can be run from the command-line, from the root of the workspace."
          }
        }
      },scope:5
    }
  }
}), Vi(v0u, XIa, 1)
}
}), eDa, y0u=