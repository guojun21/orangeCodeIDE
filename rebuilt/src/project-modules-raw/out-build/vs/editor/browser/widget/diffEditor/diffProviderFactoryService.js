// Module: out-build/vs/editor/browser/widget/diffEditor/diffProviderFactoryService.js
// Offset: 2167666 (bundle byte offset)
// Size: 2472 bytes

Er(), Wt(), yn(), Sx(), Ix(), WY(), Hk(), Pa(), b5o=xi("diffProviderFactoryService"), v5o=class{
  constructor(e){
    this.instantiationService=e
  }
  createDiffProvider(e){
    return this.instantiationService.createInstance(A5o, e)
  }
}, v5o=__decorate([__param(0, ln)], v5o), Vi(b5o, v5o, 1), A5o=class{
  static{
    mbt=this
  }
  static{
    this.diffCache=new Map
  }
  constructor(e, t, i){
    this.editorWorkerService=t, this.telemetryService=i, this.onDidChangeEventEmitter=new Qe, this.onDidChange=this.onDidChangeEventEmitter.event, this.diffAlgorithm="advanced", this.diffAlgorithmOnDidChangeSubscription=void 0, this.setOptions(e)
  }
  dispose(){
    this.diffAlgorithmOnDidChangeSubscription?.dispose()
  }
  async computeDiff(e, t, i, r){
    if(typeof this.diffAlgorithm!="string")return this.diffAlgorithm.computeDiff(e, t, i, r);
    if(e.isDisposed()||t.isDisposed())return{
      changes:[],identical:!0,quitEarly:!1,moves:[]
    };
    if(e.getLineCount()===1&&e.getLineMaxColumn(1)===1)return t.getLineCount()===1&&t.getLineMaxColumn(1)===1?{
      changes:[],identical:!0,quitEarly:!1,moves:[]
    }
    :{
      changes:[new _3(new rh(1,2),new rh(1,t.getLineCount()+1),[new zH(e.getFullModelRange(),t.getFullModelRange())])],identical:!1,quitEarly:!1,moves:[]
    };
    const s=JSON.stringify([e.uri.toString(), t.uri.toString()]), o=JSON.stringify([e.id, t.id, e.getAlternativeVersionId(), t.getAlternativeVersionId(), JSON.stringify(i)]), a=mbt.diffCache.get(s);
    if(a&&a.context===o)return a.result;
    const l=J_.create(), u=await this.editorWorkerService.computeDiff(e.uri, t.uri, i, this.diffAlgorithm), d=l.elapsed();
    if(this.telemetryService.publicLog2("diffEditor.computeDiff", {
      timeMs:d,timedOut:u?.quitEarly??!0,detectedMoves:i.computeMoves?u?.moves.length??0:-1
    }), r.isCancellationRequested)return{
      changes:[],identical:!1,quitEarly:!0,moves:[]
    };
    if(!u)throw new Error("no diff result available");
    return mbt.diffCache.size>10&&mbt.diffCache.delete(mbt.diffCache.keys().next().value), mbt.diffCache.set(s, {
      result:u,context:o
    }), u
  }
  setOptions(e){
    let t=!1;
    e.diffAlgorithm&&this.diffAlgorithm!==e.diffAlgorithm&&(this.diffAlgorithmOnDidChangeSubscription?.dispose(), this.diffAlgorithmOnDidChangeSubscription=void 0, this.diffAlgorithm=e.diffAlgorithm, typeof e.diffAlgorithm!="string"&&(this.diffAlgorithmOnDidChangeSubscription=e.diffAlgorithm.onDidChange(()=>this.onDidChangeEventEmitter.fire())), t=!0), t&&this.onDidChangeEventEmitter.fire()
  }
}, A5o=mbt=__decorate([__param(1, c_), __param(2, ea)], A5o)
}
}), WSe, H4, uKe, R3t, Z0h, pbt=