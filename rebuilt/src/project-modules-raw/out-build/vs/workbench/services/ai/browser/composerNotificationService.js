// Module: out-build/vs/workbench/services/ai/browser/composerNotificationService.js
// Offset: 26610512 (bundle byte offset)
// Size: 4127 bytes

yn(), Er(), Wt(), Ud(), htu(), g$e=xi("composerNotificationService"), (function(n){
  n.MCP="mcp", n.NetworkAccess="network_access", n.GitHubAuth="github_auth", n.ModeNudge="mode_nudge", n.NoInlineDiffsSuggestion="no_inline_diffs_suggestion", n.PluginSuggestion="plugin_suggestion"
})(_S||(_S={
  
})), xNe={
  INFO:300, ACTION:600, WARN:900
}, UNg=1e3, Cpa=class{
  constructor(e){
    this.analyticsService=e, this._onAcceptNotification=new Qe, this.onAcceptNotification=this._onAcceptNotification.event, [this.notification_reactive, this.setNotification]=lt()
  }
  hasHigherOrEqualPriority(e, t){
    return e===void 0?!0:t===void 0?!1:e>=t
  }
  showNotification(e){
    this.pendingNotification!==void 0&&!this.hasHigherOrEqualPriority(e.priority, this.pendingNotification.priority)||(this.pendingNotification=e, this.debounceTimeout!==void 0&&clearTimeout(this.debounceTimeout), this.debounceTimeout=setTimeout(()=>{
      this.flushPendingNotification()
    }, UNg))
  }
  flushPendingNotification(){
    this.debounceTimeout=void 0;
    const e=this.pendingNotification;
    if(this.pendingNotification=void 0, e===void 0)return;
    const t=this.notification_reactive();
    t!==void 0&&!this.hasHigherOrEqualPriority(e.priority, t.priority)||this.setNotification(e)
  }
  dismissNotification(){
    const e=this.notification_reactive();
    e&&e.type!==_S.PluginSuggestion&&this.analyticsService.trackEvent("composer_notification.dismissed", {
      type:e.type
    }), this.clearPendingState(), this.setNotification(void 0)
  }
  clearNotification(e){
    this.clearPendingState(e);
    const t=this.notification_reactive();
    (e===void 0||t?.type===e)&&this.setNotification(void 0)
  }
  clearPendingState(e){
    (e===void 0||this.pendingNotification?.type===e)&&(this.debounceTimeout!==void 0&&(clearTimeout(this.debounceTimeout), this.debounceTimeout=void 0), this.pendingNotification=void 0)
  }
  getCurrentNotification(){
    return this.notification_reactive()
  }
  acceptNotification(){
    this.notification_reactive()!==void 0&&this._onAcceptNotification.fire()
  }
}, Cpa=__decorate([__param(0, uh)], Cpa), Vi(g$e, Cpa, 1)
}
}), Spa={
  
};
WN(Spa, {
  createPlanFile:()=>aNA, getPlanFileUri:()=>qNg, getUserPlansDir:()=>lV, isPlanFile:()=>Rq, parsePlanUriString:()=>dEe, updatePlanFile:()=>lNA
});
function dEe(n){
  const e=/^[a-zA-Z]:[/\\]/.test(n), t=/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(n);
  return e&&!t||n.startsWith("/")&&!t?je.file(n):je.parse(n)
}
function lV(n){
  return Wo(n, ".cursor", "plans")
}
function Rq(n, e){
  if(n.scheme===_n.cursorPlan)return!0;
  const t=n.path.toLowerCase();
  return t.endsWith(".plan.md")?!!(t.includes("/.cursor/plans/")||e&&Iu.isEqualOrParent(n, e)):!1
}
async function aNA(n, e, t, i){
  const{
    plan:r, title:s, name:o, composerId:a, bubbleId:l
  }
  =n;
  try{
    const u=t.getWorkspace();
    if(!u.folders.length)return i.error("No workspace folder found"), null;
    const d=u.folders[0].uri, m=je.joinPath(d, ".cursor"), p=je.joinPath(m, "plans");
    try{
      await e.createFolder(m)
    }
    catch{
      
    }
    await cNA(e, m);
    try{
      await e.createFolder(p)
    }
    catch{
      
    }
    const g=$Ng(o||s||"Plan", a), f=je.joinPath(p, g);
    if(!await e.exists(f)){
      const w=l?`<!-- ${a} ${l} -->
${r}`:`<!-- ${a} -->
${r}`;
      await e.writeFile(f,Ms.fromString(w))
    }
    return f
  }
  catch(u){
    return console.error(`Failed to save plan: ${u}`), null
  }
}
async function cNA(n, e){
  const t=je.joinPath(e, ".gitignore");
  try{
    let i="";
    try{
      i=(await n.readFile(t)).value.toString()
    }
    catch{
      
    }
    if(!i.includes("plans/")){
      const r=i.trim()+(i.trim()?`
`:"")+`plans/
`;
      await n.writeFile(t,Ms.fromString(r))
    }
  }
  catch{
    
  }
}
function $Ng(n, e){
  const t=n.replace(/[^a-zA-Z0-9-_ ]/g, "").trim(), i=e.substring(0, 8);
  return`${t}-${i}.plan.md`
}
function qNg(n, e, t, i){
  const r=n.getWorkspace();
  if(!r.folders.length)return null;
  const s=r.folders[0].uri, o=$Ng(i||e||"Plan", t);
  return je.joinPath(s, ".cursor", "plans", o)
}
async function lNA(n, e, t){
  const{
    plan:i, title:r, name:s, composerId:o, bubbleId:a
  }
  =n;
  try{
    const l=qNg(t, r, o, s);
    if(!l||!await e.exists(l))return!1;
    let d;
    try{
      const f=(await e.readFile(l)).value.toString().split(`
`)[0];
      f.startsWith("<!--")&&f.includes(o)&&(d=f)
    }
    catch{
      
    }
    d||(d=a?`<!-- ${o} ${a} -->`:`<!-- ${o} -->`);
    const m=`${d}
${i}`;
    return await e.writeFile(l, Ms.fromString(m)), !0
  }
  catch(l){
    return console.error(`Failed to update plan file: ${l}`), !1
  }
}
var UF=