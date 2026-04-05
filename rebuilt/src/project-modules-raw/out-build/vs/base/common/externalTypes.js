// Module: out-build/vs/base/common/externalTypes.js
// Offset: 28033364 (bundle byte offset)
// Size: 1947 bytes

Ka(), Dou=-(2**31), Bou=2**31-1
}
});
function Kb(n, e, t, i, r=1){
  const s={
    "X-Request-ID":n, "X-Amzn-Trace-Id":`Root=${n}`
  };
  if(e!=null&&(t=e.spanContext()?.traceId??t, i=e.spanContext()?.spanId??i), t&&i){
    const o=`00-${t}-${i}-${r===1?"01":"00"}`;
    s.traceparent=o, s["backend-traceparent"]=o
  }
  return s
}
function MOA(n, e){
  if(!n)return{
    
  };
  const t={
    "X-Cursor-RetryInterceptor-Enabled":"true"
  };
  return e?.maxRetries!==void 0&&(t["X-Cursor-RetryInterceptor-MaxRetries"]=String(e.maxRetries)), e?.baseDelayMs!==void 0&&(t["X-Cursor-RetryInterceptor-BaseDelayMs"]=String(e.baseDelayMs)), e?.maxDelayMs!==void 0&&(t["X-Cursor-RetryInterceptor-MaxDelayMs"]=String(e.maxDelayMs)), t
}
function DAi(n){
  return![_n.walkThrough, _n.walkThroughSnippet, _n.vscodeCustomEditor, _n.vscodeNotebook, _n.vscodeNotebookCell, _n.vscodeNotebookCellMetadata, _n.vscodeNotebookCellMetadataDiff, _n.vscodeNotebookCellOutput, _n.vscodeNotebookCellOutputDiff, _n.vscodeNotebookMetadata, _n.vscodeInteractiveInput, _n.vscodeSettings, _n.vscodeWorkspaceTrust, _n.vscodeTerminal, _n.vscodeChatCodeBlock, _n.vscodeChatCodeCompareBlock, _n.vscodeChatSesssion, _n.webviewPanel, _n.vscodeWebview, _n.aiChat, _n.contextObject, _n.composer, _n.aiSettings, _n.tinderDiffEditor, _n.bugbot, _n.backgroundComposer, _n.backgroundComposerPeek, _n.mailto, _n.commentsInput, _n.outputChannel].includes(n)
}
async function*FOA(n){
  for await(const e of n)yield e
}
function OOA(n){
  const e=QD(n.path).toLowerCase();
  return[".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(e)
}
function sYg(n){
  if(n[0]===255&&n[1]===216&&n[2]===255)return"image/jpeg";
  if(n[0]===137&&n[1]===80&&n[2]===78&&n[3]===71)return"image/png";
  if(n[0]===71&&n[1]===73&&n[2]===70)return"image/gif";
  if(n.length>=12&&n[0]===82&&n[1]===73&&n[2]===70&&n[3]===70&&n[8]===87&&n[9]===69&&n[10]===66&&n[11]===80)return"image/webp";
  throw new Error("Unsupported image type: supported formats are jpeg, png, gif, or webp.")
}
var Rou, aP=