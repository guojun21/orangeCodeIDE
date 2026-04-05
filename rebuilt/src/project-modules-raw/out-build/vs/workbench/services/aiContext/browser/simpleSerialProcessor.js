// Module: out-build/vs/workbench/services/aiContext/browser/simpleSerialProcessor.js
// Offset: 33815696 (bundle byte offset)
// Size: 1976 bytes

e$f=class{
  constructor(n, e, t, i){
    this.processDelayMs=i, this.processPromises=new Map, this.counter=0, this.simpleSerialProcessor=new Zki(n, e, (r, s)=>r<s, t, i, r=>this.resolveProcessPromises(r))
  }
  resolveProcessPromises(n){
    this.processPromises.forEach((e, t)=>{
      t<=n&&(e.resolve(),this.processPromises.delete(t))
    })
  }
  async process(n){
    const e=this.counter++, t=this.simpleSerialProcessor.process({
      state:e,runEvenIfAlreadyProcessing:n.runEvenIfAlreadyProcessing,tryAgainCount:n.tryAgainCount
    });
    n.waitUntilProcessed?await new Promise((i, r)=>{
      this.processPromises.set(e,{
        resolve:i,reject:r
      })
    }):await t
  }
}, Zki=class{
  constructor(n, e, t, i, r, s){
    this.run=n, this.signal=e, this.shouldProcess=t, this.errorCallback=i, this.processDelayMs=r, this.onDidProcessState=s, this.latestState=void 0, this.processedState=void 0, this.processingAbortController=void 0
  }
  async process(n){
    if(this.latestState=n.state, this.signal.aborted)return;
    if(n.tryAgainCount!==void 0&&n.tryAgainCount>5){
      this.errorCallback(new Error("SimpleSerialProcessor: tried 5 times and failed, giving up"));
      return
    }
    if(this.processedState!==void 0&&!this.shouldProcess(this.processedState, this.latestState)||!n.runEvenIfAlreadyProcessing&&this.processingAbortController!==void 0)return;
    this.processingAbortController?.abort(), this.processingAbortController=new AbortController;
    const e=()=>{
      this.processingAbortController?.abort()
    };
    this.signal.addEventListener("abort", e);
    let t=!0;
    try{
      (await this.run(this.processingAbortController.signal)).ok()&&(this.processedState=n.state,this.onDidProcessState?.(this.processedState))
    }
    catch(i){
      this.errorCallback(i),t=!1
    }
    finally{
      await new Promise(i=>setTimeout(i,this.processDelayMs)),this.signal.removeEventListener("abort",e),this.processingAbortController=void 0,t&&this.process({
        state:this.latestState,runEvenIfAlreadyProcessing:!1,tryAgainCount:this.latestState===n.state?(n.tryAgainCount??0)+1:0
      })
    }
  }
}
}
}), hDa, ymy=