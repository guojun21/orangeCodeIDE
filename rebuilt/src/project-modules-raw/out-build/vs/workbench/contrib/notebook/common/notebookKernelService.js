// Module: out-build/vs/workbench/contrib/notebook/common/notebookKernelService.js
// Offset: 33364162 (bundle byte offset)
// Size: 850 bytes

Wt(), WTa=100, (function(n){
  n[n.Disconnected=1]="Disconnected", n[n.Connected=2]="Connected", n[n.Initializing=3]="Initializing"
})(Q8f||(Q8f={
  
})), NM=xi("INotebookKernelService"), v7e=xi("INotebookKernelHistoryService")
}
});
function yki(n){
  return"kernel"in n
}
function Ldy(n){
  return"kernels"in n
}
function QTa(n){
  return"action"in n
}
function jTa(n){
  return n.id==="installSuggested"&&"extensionIds"in n
}
function j8f(n){
  return n.id==="install"
}
function z8f(n){
  return"command"in n
}
function Ndy(n){
  return"autoRun"in n&&!!n.autoRun
}
function g_u(n, e){
  const t={
    kernel:n, picked:n.id===e?.id, label:n.label, description:n.description, detail:n.detail
  };
  return n.id===e?.id&&(t.description?t.description=_(9504, null, t.description):t.description=_(9503, null)), t
}
var f_u, V8f, Dbn, K8f=