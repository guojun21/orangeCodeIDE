// Module: out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js
// Offset: 34052366 (bundle byte offset)
// Size: 1285 bytes

yn(), Uc(), Avn(), OEt=class{
  get resourcesObservable(){
    return this._resourcesObservable
  }
  constructor(n, e, t){
    this.instantiationService=n, this.composerTextModelService=e, this._onDidChangeResources=new Qe, this._currentResources=[], this._resourcesMap=new Map, this._resourcesObservable=tp(this._onDidChangeResources.event, ()=>this._currentResources), this.resources=new qgt(this._resourcesObservable), this.contextKeys={
      appLayoutMultiDiff:!0,...t?{
        reviewChangesComposerId:t
      }
      :{
        
      }
    }
  }
  updateResources(n){
    const e=new Map(n.map(o=>[this._getResourceKey(o), o]));
    let t=!1;
    const i=[], r=[], s=this._currentResources.filter(o=>{
      const a=this._getResourceKey(o);
      return e.has(a)?!0:(t=!0,this._resourcesMap.delete(a),i.push(o),!1)
    });
    for(const[o, a]of e)if(!this._resourcesMap.has(o)){
      t=!0;
      const u=_N.hydrateSkeleton(a);
      this._resourcesMap.set(o,u),s.push(u),r.push(u)
    }
    if(t){
      for(const o of i)o.dispose();
      this._currentResources=s,this._onDidChangeResources.fire()
    }
    return this._currentResources
  }
  _getResourceKey(n){
    return JSON.stringify([n.modifiedUri?.path, n.originalUri?.path])
  }
  dispose(){
    this._onDidChangeResources.dispose();
    for(const n of this._currentResources)n.dispose();
    this._resourcesMap.clear()
  }
}
}
}), iBa=