// Module: out-build/vs/workbench/contrib/controlCommon/browser/uiPackageStyles.js
// Offset: 31662740 (bundle byte offset)
// Size: 1599 bytes

Od(), ri(), KC(), iu(), rt(), pk(), uay(), cvu="anysphere-ui-styles", lvu="anysphere-ui-tokens", uvu="--cursor-spinner-sync-epoch-ms", dvu=!1, hvu=[["keyword", ["keyword"]], ["string", ["string"]], ["function", ["entity.name.function", "support.function", "variable.function"]], ["number", ["constant.numeric"]], ["comment", ["comment"]], ["constant", ["constant"]], ["parameter", ["variable.parameter", "variable"]], ["punctuation", ["punctuation", "punctuation.definition", "meta.brace"]], ["link", ["markup.underline.link"]], ["string-expression", ["string"]], ["tag", ["entity.name.tag"]], ["attribute", ["entity.other.attribute-name"]], ["property", ["variable.other.property", "support.variable.property"]], ["type", ["entity.name.type", "support.type"]], ["variable", ["variable.other.readwrite", "variable"]], ["class", ["entity.name.class", "support.class"]], ["language-variable", ["variable.language"]], ["constant-variable", ["variable.other.constant"]]], dNf=new Set(["parameter", "punctuation"])
}
});
function Aay(n){
  if(d1a){
    n();
    return
  }
  d1a=!0;
  try{
    rUn(n)
  }
  finally{
    d1a=!1
  }
}
function yay(n, e){
  if(n===e)return!0;
  if(!n||!e)return!1;
  const t=Object.keys(n), i=Object.keys(e);
  if(t.length!==i.length)return!1;
  for(const r of t)if(!(typeof n[r]=="function"&&typeof e[r]=="function")&&n[r]!==e[r])return!1;
  return!0
}
function r1(n){
  return e=>{
    const[t, i]=Bft(e, ["style", "class", "portalRoot"]);
    return K(i7, {
      reactComponent:n,get reactProps(){
        return{
          ...i
        }
      },get class(){
        return t.class
      },get style(){
        return t.style
      },get portalRoot(){
        return t.portalRoot
      }
    })
  }
}
var hNf, d1a, i7, X_=