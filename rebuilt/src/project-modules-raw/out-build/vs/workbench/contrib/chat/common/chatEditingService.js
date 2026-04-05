// Module: out-build/vs/workbench/contrib/chat/common/chatEditingService.js
// Offset: 28294498 (bundle byte offset)
// Size: 1516 bytes

Yn(), Ht(), si(), Wt(), kV=xi("chatEditingService"), Zau="chat-editing-snapshot-text-model", (function(n){
  n[n.User=0]="User", n[n.Programmatic=1]="Programmatic"
})(Zef||(Zef={
  
})), (function(n){
  n[n.Modified=0]="Modified", n[n.Accepted=1]="Accepted", n[n.Rejected=2]="Rejected", n[n.Transient=3]="Transient", n[n.Attached=4]="Attached", n[n.Sent=5]="Sent"
})(Xef||(Xef={
  
})), (function(n){
  n[n.WorkingSet=0]="WorkingSet", n[n.Other=1]="Other"
})(etf||(etf={
  
})), (function(n){
  n[n.Initial=0]="Initial", n[n.StreamingEdits=1]="StreamingEdits", n[n.Idle=2]="Idle", n[n.Disposed=3]="Disposed"
})(ttf||(ttf={
  
})), pyi="chat-editing-multi-diff-source", gyi=new Sn("chatEditingWidgetFileState", void 0, _(5624, null)), ntf=new Sn("chatEditingAgentSupportsReadonlyReferences", void 0, _(5625, null)), Xva=new Sn("decidedChatEditingResource", []), eAa=new Sn("chatEditingResource", void 0), Xau=new Sn("inChatEditingSession", void 0), iMe=new Sn("hasUndecidedChatEditingResource", !1), tAa=new Sn("hasAppliedChatEdits", !1), fyi=new Sn("applyingChatEditsFailed", !1), (function(n){
  n[n.Created=0]="Created", n[n.Modified=1]="Modified"
})(itf||(itf={
  
}))
}
});
function z9A(n){
  return!!n&&typeof n=="object"&&"uri"in n&&n.uri instanceof je&&"version"in n&&typeof n.version=="number"&&"ranges"in n&&Array.isArray(n.ranges)&&n.ranges.every(Zt.isIRange)
}
function V9A(n){
  return!!n&&typeof n=="object"&&"documents"in n&&Array.isArray(n.documents)&&n.documents.every(z9A)
}
var Mnt, lpn, upn, kU, rtf, ES, ykt, xS=