// Module: out-build/vs/workbench/contrib/chat/common/languageModelToolsService.js
// Offset: 28337336 (bundle byte offset)
// Size: 521 bytes

Yn(), Wt(), zr(), n8A(), (function(n){
  function e(t){
    switch(t.type){
      case"extension":return`extension:${t.extensionId.value}`;
      case"mcp":return`mcp:${t.collectionId}:${t.definitionId}`;
      case"internal":return"internal"
    }
  }
  n.toKey=e
})(cAa||(cAa={
  
})), yie=xi("ILanguageModelToolsService")
}
});
async function iqe(n){
  return(await n.openView(dAa))?.widget
}
async function o8A(n){
  return(await n.openView(ytf))?.widget
}
var M1, lAa, fcu, uAa, dAa, ytf, kk=