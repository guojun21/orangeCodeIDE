// Module: out-build/vs/workbench/services/ai/browser/diffingService.js
// Offset: 33698562 (bundle byte offset)
// Size: 516 bytes

rt(), Er(), Wt(), Kbn=xi("diffingService"), V6f=class extends at{
  constructor(){
    super(), this._diffingProvider=void 0
  }
  async wordDiff(n, e){
    return this._diffingProvider?this._diffingProvider.wordDiff(n, e):(console.error("No diffing provider registered"), {
      changes:[{
        value:e,added:!0
      },{
        value:n,removed:!0
      }
      ]
    })
  }
  registerDiffingProvider(n){
    this._diffingProvider=n
  }
  unregisterDiffingProvider(){
    this._diffingProvider=void 0
  }
}, Vi(Kbn, V6f, 1)
}
}), wxe, b2e=