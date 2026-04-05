// Module: out-build/vs/workbench/services/extensionManagement/common/extensionFeatures.js
// Offset: 28335268 (bundle byte offset)
// Size: 733 bytes

Wt(), Ws(), (function(n){
  n.ExtensionFeaturesRegistry="workbench.registry.extensionFeatures"
})(hP||(hP={
  
})), Mme=xi("IExtensionFeaturesManagementService"), vtf=class{
  constructor(){
    this.extensionFeatures=new Map
  }
  registerExtensionFeature(n){
    if(this.extensionFeatures.has(n.id))throw new Error(`Extension feature with id '${n.id}' already exists`);
    return this.extensionFeatures.set(n.id, n), {
      dispose:()=>this.extensionFeatures.delete(n.id)
    }
  }
  getExtensionFeature(n){
    return this.extensionFeatures.get(n)
  }
  getExtensionFeatures(){
    return Array.from(this.extensionFeatures.values())
  }
}, Di.add(hP.ExtensionFeaturesRegistry, new vtf)
}
}), mcu, aAa, pcu, gcu=