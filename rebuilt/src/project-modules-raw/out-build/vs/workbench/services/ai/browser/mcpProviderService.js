// Module: out-build/vs/workbench/services/ai/browser/mcpProviderService.js
// Offset: 30185801 (bundle byte offset)
// Size: 784 bytes

yn(), rt(), Er(), Wt(), Wu(), q_a=xi("mcpProviderService"), H_a=class extends at{
  constructor(e){
    super(), this.experimentService=e, this._providers=new Map, this._onDidChangeProviders=this._register(new Qe), this.onDidChangeProviders=this._onDidChangeProviders.event
  }
  registerMcpProvider(e){
    e.featureGateName&&!this.experimentService.checkFeatureGate(e.featureGateName)||(this._providers.set(e.id, e), this._onDidChangeProviders.fire())
  }
  unregisterMcpProvider(e){
    this._providers.delete(e)&&this._onDidChangeProviders.fire()
  }
  getAllProviders(){
    return Array.from(this._providers.values())
  }
  getMcpProvider(e){
    return this._providers.get(e)
  }
}, H_a=__decorate([__param(0, Tl)], H_a), Vi(q_a, H_a, 1)
}
}), HCf, JCf, Qhu, GCf, WCf, Ley=