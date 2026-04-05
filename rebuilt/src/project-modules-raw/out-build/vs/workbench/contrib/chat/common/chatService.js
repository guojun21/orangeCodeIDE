// Module: out-build/vs/workbench/contrib/chat/common/chatService.js
// Offset: 28296014 (bundle byte offset)
// Size: 2064 bytes

Yn(), ts(), Wt(), (function(n){
  n[n.Info=0]="Info", n[n.Warning=1]="Warning", n[n.Error=2]="Error"
})(Mnt||(Mnt={
  
})), (function(n){
  n[n.Complete=1]="Complete", n[n.Partial=2]="Partial", n[n.Omitted=3]="Omitted"
})(lpn||(lpn={
  
})), (function(n){
  n[n.Down=0]="Down", n[n.Up=1]="Up"
})(upn||(upn={
  
})), (function(n){
  n.IncorrectCode="incorrectCode", n.DidNotFollowInstructions="didNotFollowInstructions", n.IncompleteCode="incompleteCode", n.MissingContext="missingContext", n.PoorlyWrittenOrFormatted="poorlyWrittenOrFormatted", n.RefusedAValidRequest="refusedAValidRequest", n.OffensiveOrUnsafe="offensiveOrUnsafe", n.Other="other", n.WillReportIssue="willReportIssue"
})(kU||(kU={
  
})), (function(n){
  n[n.Action=1]="Action", n[n.Toolbar=2]="Toolbar"
})(rtf||(rtf={
  
})), ES=xi("IChatService"), ykt="accessibility.voice.keywordActivation"
}
});
function stf(n){
  return n.kind==="paste"
}
function otf(n){
  return n.kind==="image"
}
function ecu(n){
  const e=n;
  return!!e&&!!e.edit&&!!e.uri&&je.isUri(e.uri)
}
function K9A(n){
  const e=n;
  return typeof e=="object"&&typeof e.requesterUsername=="string"
}
function Y9A(n){
  const e=n;
  return K9A(n)&&typeof e.creationDate=="number"&&typeof e.sessionId=="string"&&n.requests.every(t=>!t.usedContext||V9A(t.usedContext))
}
function atf(n, e){
  if(n.baseUri&&e.baseUri){
    if(!(n.baseUri.scheme===e.baseUri.scheme&&n.baseUri.authority===e.baseUri.authority&&n.baseUri.path===e.baseUri.path&&n.baseUri.query===e.baseUri.query&&n.baseUri.fragment===e.baseUri.fragment))return!1
  }
  else if(n.baseUri||e.baseUri)return!1;
  return fv(n.isTrusted, e.isTrusted)&&n.supportHtml===e.supportHtml&&n.supportThemeIcons===e.supportThemeIcons
}
function byi(n, e){
  const t=typeof e=="string"?e:e.value;
  return{
    value:n.value+t, isTrusted:n.isTrusted, supportThemeIcons:n.supportThemeIcons, supportHtml:n.supportHtml, baseUri:n.baseUri
  }
}
function ctf(n){
  if(n.length===0)return"";
  const e=n.reduce((i, r)=>i.add(r.license), new Set);
  return e.size===1?_(5638, null, e.size):_(5639, null, e.size)
}
var tcu, wkt, bie, ncu, icu, ltf, utf, vyi, dtf, htf, vie, nAa, Nme=