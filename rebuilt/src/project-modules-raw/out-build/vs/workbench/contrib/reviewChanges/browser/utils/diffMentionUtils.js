// Module: out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js
// Offset: 34057646 (bundle byte offset)
// Size: 387 bytes

gNe(), ACu=400, yCu=12e4
}
});
function bqf(n){
  if(!n)return!1;
  const e=n.split(/[/\\]/).pop()||n;
  if(wCu.includes(e))return!0;
  for(const t of wCu)if(t.includes("*")){
    const i=t.replace(/[.+?^${
      
    }
    ()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    if(new RegExp(`^${i}$`).test(e))return!0
  }
  return!1
}
var wCu, vqf=