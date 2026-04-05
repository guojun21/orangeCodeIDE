// Module: out-build/vs/workbench/services/ai/browser/mcpEnvExpansion.js
// Offset: 30189603 (bundle byte offset)
// Size: 882 bytes

S6(), QCf=/\$\{
  ([^:
}
]+)(?::-([^
}
]*))?\
}
/g
}
});
function Fey(n){
  switch(n.status){
    case"connected":return{
      type:"connected"
    };
    case"degraded":return{
      type:"degraded",reason:n.statusDetail??"Unknown"
    };
    case"disconnected":return{
      type:"disconnected"
    };
    case"error":return{
      type:"error",error:n.statusDetail??"Unknown error"
    };
    case"initializing":return{
      type:"initializing"
    };
    case"needsAuth":return{
      type:"needsAuth",authorizationUrl:n.statusDetail??""
    };
    default:return{
      type:"error",error:`Unknown status: ${n.status}`
    }
  }
}
function Oey(n){
  return n.tools.map(e=>({
    name:e.name, description:e.description??"", inputSchema:e.inputSchema??{
      
    }, outputSchema:e.outputSchema?e.outputSchema:void 0, meta:e._meta
  }))
}
function Uey(n){
  return n.resources.map(e=>({
    uri:e.uri, name:e.name, description:e.description, mimeType:e.mimeType
  }))
}
var $ey=