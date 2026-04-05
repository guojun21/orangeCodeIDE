// Module: out-build/vs/workbench/contrib/composer/browser/composerStorageService.js
// Offset: 30429806 (bundle byte offset)
// Size: 716 bytes

rt(), Er(), Wt(), Tw(), rf(), kr(), Zkt=xi("composerStorageService"), l0a=class extends at{
  update(e){
    this.state.change({
      ...this.state.value,...e
    })
  }
  updateDataHandleTracker(e){
    this.dataHandleTracker.change(e)
  }
  constructor(e){
    super(), this.storageService=e, this.state=this._register(new j_({
      
    })), this.dataHandleTracker=this._register(new j_({
      handleHistory:[],activeHandles:{
        
      }
    })), this.enableDataHandleDebugging=this._register(hm(this.storageService, "enableDataHandleDebugging")), this.visualizeLoadedHandles=this._register(hm(this.storageService, "visualizeLoadedHandles"))
  }
}, l0a=__decorate([__param(0, Hi)], l0a), Vi(Zkt, l0a, 0)
}
}), $Sf, gty=