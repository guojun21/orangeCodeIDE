// Module: out-build/vs/platform/jsonschemas/common/jsonContributionRegistry.js
// Offset: 755860 (bundle byte offset)
// Size: 2790 bytes

yn(), TrA(), rt(), Ws(), KN={
  JSONContribution:"base.contributions.json"
}, Zch=class extends at{
  constructor(){
    super(...arguments), this.schemasById={
      
    }, this.schemaAssociations={
      
    }, this._onDidChangeSchema=this._register(new Qe), this.onDidChangeSchema=this._onDidChangeSchema.event, this._onDidChangeSchemaAssociations=this._register(new Qe), this.onDidChangeSchemaAssociations=this._onDidChangeSchemaAssociations.event
  }
  registerSchema(n, e, t){
    const i=Ych(n);
    this.schemasById[i]=e, this._onDidChangeSchema.fire(n), t&&t.add($i(()=>{
      delete this.schemasById[i],this._onDidChangeSchema.fire(n)
    }))
  }
  registerSchemaAssociation(n, e){
    const t=Ych(n);
    return this.schemaAssociations[t]||(this.schemaAssociations[t]=[]), this.schemaAssociations[t].includes(e)||(this.schemaAssociations[t].push(e), this._onDidChangeSchemaAssociations.fire()), $i(()=>{
      const i=this.schemaAssociations[t];
      if(i){
        const r=i.indexOf(e);
        r!==-1&&(i.splice(r,1),i.length===0&&delete this.schemaAssociations[t],this._onDidChangeSchemaAssociations.fire())
      }
    })
  }
  notifySchemaChanged(n){
    this._onDidChangeSchema.fire(n)
  }
  getSchemaContributions(){
    return{
      schemas:this.schemasById
    }
  }
  getSchemaContent(n){
    const e=this.schemasById[n];
    return e?ErA(e):void 0
  }
  hasSchemaContent(n){
    return!!this.schemasById[n]
  }
  getSchemaAssociations(){
    return this.schemaAssociations
  }
}, Xch=new Zch, Di.add(KN.JSONContribution, Xch)
}
});
function elh(n){
  return n.startsWith(Zkc)
}
function IrA(n){
  return elh(n)?n.substring(Zkc.length):null
}
function J4t(n){
  const e=[];
  if($$.test(n)){
    let t=Ykc.exec(n);
    for(;
    t?.length;
    ){
      const i=t[1].trim();
      i&&e.push(i),t=Ykc.exec(n)
    }
  }
  return xb(e)
}
function tlh(n){
  return n.reduce((e, t)=>`${e}[${t}]`, "")
}
function jkc(n){
  switch(Array.isArray(n)?n[0]:n){
    case"boolean":return!1;
    case"integer":case"number":return 0;
    case"string":return"";
    case"array":return[];
    case"object":return{
      
    };
    default:return null
  }
}
function nlh(n, e){
  return n.trim()?$$.test(n)?_(1814, null, n):Q4t.getConfigurationProperties()[n]!==void 0?_(1815, null, n):e.policy?.name&&Q4t.getPolicyConfigurations().get(e.policy?.name)!==void 0?_(1816, null, n, e.policy?.name, Q4t.getPolicyConfigurations().get(e.policy?.name)):null:_(1813, null)
}
function DrA(){
  const n=[], e=Q4t.getConfigurationProperties();
  for(const t of Object.keys(e))n.push([t, e[t].scope]);
  return n.push(["launch", 5]), n.push(["task", 5]), n
}
function ilh(n){
  const e={
    
  };
  for(const t of n){
    const i=t.properties;
    if($g(i))for(const r in i)e[r]=i[r];
    t.allOf&&Object.assign(e, ilh(t.allOf))
  }
  return e
}
function rlh(n){
  switch(n){
    case"application":return 1;
    case"machine":return 2;
    case"resource":return 5;
    case"machine-overridable":return 7;
    case"language-overridable":return 6;
    default:return 4
  }
}
var zkc, Dh, slh, rz, G4t, W4t, nft, WBe, QBe, Wbe, U5e, Vkc, w4n, olh, Kkc, Ykc, jBe, $$, Zkc, Q4t, Mp=