// Module: out-build/vs/workbench/contrib/composer/browser/composerViews.js
// Offset: 27470441 (bundle byte offset)
// Size: 686 bytes

Wt(), rw=xi("composerViewsService")
}
});
function oJg(n){
  return typeof n=="object"&&n!==null
}
function H2A(n){
  return oJg(n)&&typeof n.id=="string"&&typeof n.value=="string"
}
function J2A(n){
  return oJg(n)&&typeof n.modelId=="string"&&Array.isArray(n.params)&&n.params.every(H2A)
}
function G2A(n){
  let e;
  try{
    e=JSON.parse(n)
  }
  catch{
    return
  }
  if(J2A(e))return[{
    modelId:e.modelId, parameters:e.params
  }
  ]
}
function W2A(n){
  const e=typeof n?.modelSlug=="string"&&n.modelSlug.length>0?n.modelSlug:void 0;
  if(e)return{
    modelName:e, selectedModels:n?.modelIdWithParams?G2A(n.modelIdWithParams):void 0
  }
}
var vU, Efa, aJg, xfa, Tfa, SJ=