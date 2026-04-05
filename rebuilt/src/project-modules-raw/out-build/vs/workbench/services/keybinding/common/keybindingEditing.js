// Module: out-build/vs/workbench/services/keybinding/common/keybindingEditing.js
// Offset: 27652403 (bundle byte offset)
// Size: 11505 bytes

Ht(), vr(), aB(), np(), GSt(), rt(), nI(), ts(), db(), td(), si(), ns(), Wt(), Ff(), Er(), Kw(), dnt=xi("keybindingEditingService"), cba=class extends at{
  constructor(e, t, i, r){
    super(), this.textModelResolverService=e, this.textFileService=t, this.fileService=i, this.userDataProfileService=r, this.queue=new yoe
  }
  addKeybinding(e, t, i){
    return this.queue.queue(()=>this.doEditKeybinding(e, t, i, !0))
  }
  addKeybindingRule(e, t, i){
    return this.queue.queue(async()=>{
      const r=await this.resolveAndValidate(),s=r.object.textEditorModel,o=this.asObject(t,e,i,!1),{
        tabSize:a,insertSpaces:l
      }
      =s.getOptions(),u=s.getEOL();
      this.applyEditsToBuffer(oie(s.getValue(),[-1],o,{
        tabSize:a,insertSpaces:l,eol:u
      })[0],s);
      try{
        return await this.save()
      }
      finally{
        r.dispose()
      }
    })
  }
  editKeybinding(e, t, i){
    return this.queue.queue(()=>this.doEditKeybinding(e, t, i, !1))
  }
  resetKeybinding(e){
    return this.queue.queue(()=>this.doResetKeybinding(e))
  }
  removeKeybinding(e){
    return this.queue.queue(()=>this.doRemoveKeybinding(e))
  }
  async doEditKeybinding(e, t, i, r){
    const s=await this.resolveAndValidate(), o=s.object.textEditorModel;
    if(r)this.updateKeybinding(e, t, i, o, -1);
    else{
      const a=L1(o.getValue()),l=this.findUserKeybindingEntryIndex(e,a);
      this.updateKeybinding(e,t,i,o,l),e.isDefault&&e.resolvedKeybinding&&this.removeDefaultKeybinding(e,o)
    }
    try{
      await this.save()
    }
    finally{
      s.dispose()
    }
  }
  async doRemoveKeybinding(e){
    const t=await this.resolveAndValidate(), i=t.object.textEditorModel;
    e.isDefault?this.removeDefaultKeybinding(e, i):this.removeUserKeybinding(e, i);
    try{
      return await this.save()
    }
    finally{
      t.dispose()
    }
  }
  async doResetKeybinding(e){
    const t=await this.resolveAndValidate(), i=t.object.textEditorModel;
    e.isDefault||(this.removeUserKeybinding(e, i), this.removeUnassignedDefaultKeybinding(e, i));
    try{
      return await this.save()
    }
    finally{
      t.dispose()
    }
  }
  save(){
    return this.textFileService.save(this.userDataProfileService.currentProfile.keybindingsResource)
  }
  updateKeybinding(e, t, i, r, s){
    const{
      tabSize:o,insertSpaces:a
    }
    =r.getOptions(), l=r.getEOL();
    if(s!==-1){
      this.applyEditsToBuffer(oie(r.getValue(),[s,"key"],t,{
        tabSize:o,insertSpaces:a,eol:l
      })[0],r);
      const u=oie(r.getValue(),[s,"when"],i,{
        tabSize:o,insertSpaces:a,eol:l
      });
      u.length>0&&this.applyEditsToBuffer(u[0],r)
    }
    else this.applyEditsToBuffer(oie(r.getValue(), [-1], this.asObject(t, e.command, i, !1), {
      tabSize:o,insertSpaces:a,eol:l
    })[0], r)
  }
  removeUserKeybinding(e, t){
    const{
      tabSize:i,insertSpaces:r
    }
    =t.getOptions(), s=t.getEOL(), o=L1(t.getValue()), a=this.findUserKeybindingEntryIndex(e, o);
    a!==-1&&this.applyEditsToBuffer(oie(t.getValue(), [a], void 0, {
      tabSize:i,insertSpaces:r,eol:s
    })[0], t)
  }
  removeDefaultKeybinding(e, t){
    const{
      tabSize:i,insertSpaces:r
    }
    =t.getOptions(), s=t.getEOL(), o=e.resolvedKeybinding?e.resolvedKeybinding.getUserSettingsLabel():null;
    if(o){
      const a=this.asObject(o,e.command,e.when?e.when.serialize():void 0,!0);
      L1(t.getValue()).every(u=>!this.areSame(u,a))&&this.applyEditsToBuffer(oie(t.getValue(),[-1],a,{
        tabSize:i,insertSpaces:r,eol:s
      })[0],t)
    }
  }
  removeUnassignedDefaultKeybinding(e, t){
    const{
      tabSize:i,insertSpaces:r
    }
    =t.getOptions(), s=t.getEOL(), o=L1(t.getValue()), a=this.findUnassignedDefaultKeybindingEntryIndex(e, o).reverse();
    for(const l of a)this.applyEditsToBuffer(oie(t.getValue(), [l], void 0, {
      tabSize:i,insertSpaces:r,eol:s
    })[0], t)
  }
  findUserKeybindingEntryIndex(e, t){
    for(let i=0;
    i<t.length;
    i++){
      const r=t[i];
      if(r.command===e.command){
        if(!r.when&&!e.when)return i;
        if(r.when&&e.when){
          const s=Ee.deserialize(r.when);
          if(s&&s.serialize()===e.when.serialize())return i
        }
      }
    }
    return-1
  }
  findUnassignedDefaultKeybindingEntryIndex(e, t){
    const i=[];
    for(let r=0;
    r<t.length;
    r++)t[r].command===`-${e.command}`&&i.push(r);
    return i
  }
  asObject(e, t, i, r){
    const s={
      key:e
    };
    return t&&(s.command=r?`-${t}`:t), i&&(s.when=i), s
  }
  areSame(e, t){
    if(e.command!==t.command||e.key!==t.key)return!1;
    const i=Ee.deserialize(e.when), r=Ee.deserialize(t.when);
    return!(i&&!r||!i&&r||i&&r&&!i.equals(r)||!fv(e.args, t.args))
  }
  applyEditsToBuffer(e, t){
    const i=t.getPositionAt(e.offset), r=t.getPositionAt(e.offset+e.length), s=new Zt(i.lineNumber, i.column, r.lineNumber, r.column), a=t.getValueInRange(s)?zb.replace(s, e.content):zb.insert(i, e.content);
    t.pushEditOperations([new Vl(i.lineNumber, i.column, i.lineNumber, i.column)], [a], ()=>[])
  }
  async resolveModelReference(){
    return await this.fileService.exists(this.userDataProfileService.currentProfile.keybindingsResource)||await this.textFileService.write(this.userDataProfileService.currentProfile.keybindingsResource, this.getEmptyContent(), {
      encoding:"utf8"
    }), this.textModelResolverService.createModelReference(this.userDataProfileService.currentProfile.keybindingsResource)
  }
  async resolveAndValidate(){
    if(this.textFileService.isDirty(this.userDataProfileService.currentProfile.keybindingsResource))throw new Error(_(14326, null));
    const e=await this.resolveModelReference(), t=e.object.textEditorModel, i=t.getEOL();
    if(t.getValue()){
      const r=this.parse(t);
      if(r.parseErrors.length)throw e.dispose(),new Error(_(14327,null));
      if(r.result){
        if(!Array.isArray(r.result))throw e.dispose(),new Error(_(14328,null))
      }
      else{
        const s=i+"[]";
        this.applyEditsToBuffer({
          content:s,length:s.length,offset:t.getValue().length
        },t)
      }
    }
    else{
      const r=this.getEmptyContent();
      this.applyEditsToBuffer({
        content:r,length:r.length,offset:0
      },t)
    }
    return e
  }
  parse(e){
    const t=[];
    return{
      result:L1(e.getValue(),t,{
        allowTrailingComma:!0,allowEmptyContent:!0
      }),parseErrors:t
    }
  }
  getEmptyContent(){
    return"// "+_(14329, null)+`
[
]`
  }
}, cba=__decorate([__param(0, El), __param(1, Gg), __param(2, Gr), __param(3, Py)], cba), Vi(dnt, cba, 1)
}
}), Qru={
  
};
WN(Qru, {
  AUTORUN_DISCLAIMERS:()=>xmn, AUTO_RUN_MODE:()=>kI, _setRefreshFn:()=>rGg, fetchServerAdminSettings:()=>jru, forceRefreshAutorunSettings:()=>jFA, getAutorunModeDisclaimer:()=>lba, getAutorunSettingsValuesWithLoadingState_reactive:()=>sGg, getAutorunSettingsValues_reactive:()=>wU, initializeAutorunSettings:()=>iGg
});
function JFA(n){
  switch(n){
    case D$e.ENABLED:return"enabled";
    case D$e.DISABLED:return"disabled";
    case D$e.UNSPECIFIED:default:return"disabled"
  }
}
function GFA(n){
  switch(n){
    case Gtt.ALWAYS_DISABLED:return"always_disabled";
    case Gtt.USER_CONTROLLED:case Gtt.UNSPECIFIED:default:return"user_controlled"
  }
}
function WFA(n){
  switch(n){
    case Wtt.ALWAYS_DISABLED:return"always_disabled";
    case Wtt.USER_CONTROLLED:case Wtt.UNSPECIFIED:default:return"user_controlled"
  }
}
function nGg(n){
  const e=n.applicationUserPersistentStorage.composerState;
  return{
    isAdminControlled:!1, isDisabledByAdmin:!1, browserFeatures:!0, allowedCommands:e.yoloCommandAllowlist??[], blockedCommands:e.yoloCommandDenylist??[], deleteFileProtection:e.yoloDeleteFileDisabled??!1, outsideWorkspaceProtection:e.yoloOutsideWorkspaceDisabled??!0, enableRunEverything:e.yoloEnableRunEverything??!1, mcpAllowedTools:e.mcpAllowedTools??[], mcpToolsProtection:e.yoloMcpToolsDisabled??!0, playwrightProtection:e.playwrightProtection??!0
  }
}
async function jru(n, e){
  const t=await n.dashboardClient(), i=n.getTeamId();
  if(i)try{
    const r=await t.getTeamAdminSettings({
      teamId:i
    });
    if(r)try{
      const s=new zhn(r);
      e.store("autorun.cachedAdminSettings",s.toJsonString(),-1,1)
    }
    catch(s){
      console.error("Failed to cache admin settings:",s)
    }
    return r
  }
  catch(r){
    console.error("Failed to fetch team admin settings:", r);
    const s=e.get("autorun.cachedAdminSettings", -1);
    if(s)try{
      return zhn.fromJsonString(s)
    }
    catch(o){
      console.error("Failed to parse cached admin settings:",o)
    }
    throw r
  }
}
async function QFA(n, e, t, i){
  let r;
  try{
    r=await jru(e, i)
  }
  catch(A){
    if(console.error("[AutorunSettings] Failed to fetch admin settings (network error, no cache available):", {
      error:A instanceof Error?{
        name:A.name,message:A.message,stack:A.stack
      }
      :A
    }), HBe(A instanceof Error?A:new Error(String(A)), {
      "autorun.settings.error":"fetch_admin_settings_failed","autorun.settings.cache_available":"false"
    }), Yru()){
      console.warn("[AutorunSettings] Admin settings temporarily unavailable but were previously enforced - keeping existing restrictions");
      return
    }
    r=void 0
  }
  const s=r?.autoRunControls?.enabled??!1;
  cGg(s);
  let o;
  if(s){
    const A=r?.autoRunControls?.allowed??[], w=r?.autoRunControls?.blocked??[], C=r?.autoRunControls?.enableRunEverything??!1, x=r?.autoRunControls?.mcpToolAllowlist??[], I=r?.autoRunControls?.sandboxingControls, B=I?.sandboxing===D$e.ENABLED;
    o={
      isAdminControlled:!0,isDisabledByAdmin:A.length+w.length===0&&!C&&x.length===0&&!B,browserFeatures:r?.browserFeatures??!1,allowedCommands:A,blockedCommands:w,deleteFileProtection:r?.autoRunControls?.deleteFileProtection??!1,enableRunEverything:C,outsideWorkspaceProtection:!0,mcpAllowedTools:x,mcpToolsProtection:r?.autoRunControls?.disableMcpAutoRun??!1,playwrightProtection:r?.autoRunControls?.browserProtection||r?.autoRunControls?.disableMcpAutoRun||!1,sandboxingControls:I?{
        sandboxing:JFA(I.sandboxing),sandboxNetworking:GFA(I.sandboxNetworking),sandboxGit:WFA(I.sandboxGit)
      }
      :void 0
    }
  }
  else{
    const A=nGg(n);
    o={
      ...A,browserFeatures:r?.browserFeatures===!0?!0:A.browserFeatures
    }
  }
  const a=r?.cursorIgnoreControls?.hierarchicalEnabled??!1, l=r?.cursorIgnoreControls?.ignoreSymlinks??!1;
  if(n.applicationUserPersistentStorage.teamAdminSettings){
    const A=n.applicationUserPersistentStorage.teamAdminSettings, w={
      ...A,cursorIgnore:{
        ...A.cursorIgnore,hierarchicalEnabled:a,ignoreSymlinks:l
      },extensionSigningSettings:{
        verificationEnabled:r?.extensionSigningSettings?.verificationEnabled??!1
      }
    };
    n.setApplicationUserPersistentStorage("teamAdminSettings", w)
  }
  Vru(o), Kru(!1);
  const u=r?.workspaceTrustControls?.enabled??!1;
  if(u!==Zru&&u){
    const A="security.workspace.trust.enabled";
    if(t.inspect(A).policyValue===void 0)try{
      await t.updateValue(A,u,2),Zru=u
    }
    catch(C){
      console.error("Failed to update workspace trust setting:",C)
    }
  }
  const d=r?.allowedExtensions, m=d&&d.trim()!==""?d:void 0, p=HSt, g=t.inspect(p);
  if(m!==void 0&&m!==uba)if(g.policyValue===void 0)try{
    const A=JSON.parse(m);
    if(typeof A!="object"||A===null||Array.isArray(A))throw new Error(`Invalid allowedExtensions format: expected object, got ${Array.isArray(A)?"array":typeof A}`);
    const w=A;
    await t.updateValue(p, w, 2), uba=m
  }
  catch(A){
    A instanceof SyntaxError||A instanceof Error&&A.message.includes("Invalid allowedExtensions format")?HBe(A instanceof Error?A:new Error(String(A)), {
      "autorun.settings.error":"parse_allowed_extensions_failed","allowedExtensions.value":m?m.substring(0,100):"undefined"
    }):HBe(A instanceof Error?A:new Error(String(A)), {
      "autorun.settings.error":"update_allowed_extensions_failed"
    })
  }
  else uba=m
}
function iGg(n, e, t, i){
  const r=hm(t, "sandboxNetworkDefault"), s=()=>QFA(n, e, i, t);
  rGg(s), s(), e.addLoginChangedListener(async()=>{
    await new Promise(a=>setTimeout(a, 500)), s()
  }), n.createScoped({
    
  }).onChangeEffect({
    deps:[()=>n.applicationUserPersistentStorage.composerState.yoloCommandAllowlist, ()=>n.applicationUserPersistentStorage.composerState.yoloCommandDenylist, ()=>n.applicationUserPersistentStorage.composerState.yoloDeleteFileDisabled, ()=>n.applicationUserPersistentStorage.composerState.yoloOutsideWorkspaceDisabled, ()=>n.applicationUserPersistentStorage.composerState.yoloEnableRunEverything, ()=>n.applicationUserPersistentStorage.composerState.mcpAllowedTools, ()=>n.applicationUserPersistentStorage.composerState.yoloMcpToolsDisabled, ()=>n.applicationUserPersistentStorage.composerState.playwrightProtection, ()=>r.get()], onChange:()=>{
      Yru()||(Vru(nGg(n)),Kru(!1)),s()
    }
  }), bi.setInterval(s, 300*1e3)
}
function wU(){
  return zru()
}
async function jFA(){
  Xru&&await Xru()
}
function rGg(n){
  Xru=n
}
function sGg(){
  return{
    settings:zru(), isLoading:aGg()
  }
}
function lba(n){
  return n?xmn.SANDBOX_MODE:xmn.ALLOWLIST_MODE
}
var kI, oGg, zru, Vru, aGg, Kru, Yru, cGg, Zru, uba, Xru, xmn, aie=