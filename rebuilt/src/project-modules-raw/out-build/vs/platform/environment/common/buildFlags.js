// Module: out-build/vs/platform/environment/common/buildFlags.js
// Offset: 551307 (bundle byte offset)
// Size: 576 bytes

Ube={
  extensionIsDev:!1, developmentTooling:!1, enableTraceSpanCollection:!0, enableEmbeddingsModelToggle:!1, enableCPPControlTokenToggle:!1, cursorPredictionOptions:!1
}
}
});
function nah(n){
  let e;
  const t=[];
  let i;
  return bBe(n, (r, s)=>{
    if(s==="event"||s==="transaction"||s==="feedback")e=Array.isArray(r)?r[1]:void 0;
    else if(s==="attachment"){
      const[o,a]=r;
      t.push({
        filename:o.filename,attachmentType:o.attachment_type,contentType:o.content_type,data:a
      })
    }
    else s==="profile"&&(i=r[1])
  }), e?[e, t, i]:void 0
}
var PiA=