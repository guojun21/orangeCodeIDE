// Module: out-build/vs/workbench/services/filesConfiguration/common/filesConfigurationService.js
// Offset: 28022750 (bundle byte offset)
// Size: 8720 bytes

Ht(), Wt(), Er(), yn(), rt(), si(), Ei(), ns(), np(), _r(), ps(), $ba(), vr(), _d(), qg(), cu(), xT(), Nu(), ay(), sw(), IAi=new Sn("autoSaveAfterShortDelayContext", !1, !0), (function(n){
  n[n.OFF=0]="OFF", n[n.AFTER_SHORT_DELAY=1]="AFTER_SHORT_DELAY", n[n.AFTER_LONG_DELAY=2]="AFTER_LONG_DELAY", n[n.ON_FOCUS_CHANGE=3]="ON_FOCUS_CHANGE", n[n.ON_WINDOW_CHANGE=4]="ON_WINDOW_CHANGE"
})(iYg||(iYg={
  
})), (function(n){
  n[n.SETTINGS=1]="SETTINGS", n[n.OUT_OF_WORKSPACE=2]="OUT_OF_WORKSPACE", n[n.ERRORS=3]="ERRORS", n[n.DISABLED=4]="DISABLED"
})(rYg||(rYg={
  
})), IC=xi("filesConfigurationService"), qba=class extends at{
  static{
    kEe=this
  }
  static{
    this.DEFAULT_AUTO_SAVE_MODE=Eu?g3.AFTER_DELAY:g3.OFF
  }
  static{
    this.DEFAULT_AUTO_SAVE_DELAY=1e3
  }
  static{
    this.READONLY_MESSAGES={
      providerReadonly:{
        value:_(14273,null),isTrusted:!0
      },sessionReadonly:{
        value:_(14274,null,"workbench.action.files.setActiveEditorWriteableInSession"),isTrusted:!0
      },configuredReadonly:{
        value:_(14275,null,`workbench.action.openSettings?${encodeURIComponent('["files.readonly"]')}`,"workbench.action.files.toggleActiveEditorReadonlyInSession"),isTrusted:!0
      },fileLocked:{
        value:_(14276,null,"workbench.action.files.setActiveEditorWriteableInSession"),isTrusted:!0
      },fileReadonly:{
        value:_(14277,null),isTrusted:!0
      }
    }
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this.configurationService=t, this.contextService=i, this.environmentService=r, this.uriIdentityService=s, this.fileService=o, this.markerService=a, this.textResourceConfigurationService=l, this._onDidChangeAutoSaveConfiguration=this._register(new Qe), this.onDidChangeAutoSaveConfiguration=this._onDidChangeAutoSaveConfiguration.event, this._onDidChangeAutoSaveDisabled=this._register(new Qe), this.onDidChangeAutoSaveDisabled=this._onDidChangeAutoSaveDisabled.event, this._onDidChangeFilesAssociation=this._register(new Qe), this.onDidChangeFilesAssociation=this._onDidChangeFilesAssociation.event, this._onDidChangeReadonly=this._register(new Qe), this.onDidChangeReadonly=this._onDidChangeReadonly.event, this.autoSaveConfigurationCache=new Fb(1e3), this.autoSaveAfterShortDelayOverrides=new fu, this.autoSaveDisabledOverrides=new fu, this.readonlyIncludeMatcher=this._register(new gFn(()=>this.createReadonlyMatcher(K1c))), this.readonlyExcludeMatcher=this._register(new gFn(()=>this.createReadonlyMatcher(Y1c))), this.sessionReadonlyOverrides=new fu(d=>this.uriIdentityService.extUri.getComparisonKey(d)), this.autoSaveAfterShortDelayContext=IAi.bindTo(e);
    const u=t.getValue();
    this.currentGlobalAutoSaveConfiguration=this.computeAutoSaveConfiguration(void 0, u.files), this.currentFilesAssociationConfiguration=u?.files?.associations, this.currentHotExitConfiguration=u?.files?.hotExit||FH.ON_EXIT, this.onFilesConfigurationChange(u, !1), this.registerListeners()
  }
  createReadonlyMatcher(e){
    const t=this._register(new ikt(i=>this.configurationService.getValue(e, {
      resource:i
    }), i=>i.affectsConfiguration(e), this.contextService, this.configurationService));
    return this._register(t.onExpressionChange(()=>this._onDidChangeReadonly.fire())), t
  }
  isReadonly(e, t){
    const i=this.fileService.getProvider(e.scheme);
    if(i&&YsA(i))return i.readOnlyMessage??kEe.READONLY_MESSAGES.providerReadonly;
    const r=this.sessionReadonlyOverrides.get(e);
    return typeof r=="boolean"?r===!0?kEe.READONLY_MESSAGES.sessionReadonly:!1:this.uriIdentityService.extUri.isEqualOrParent(e, this.environmentService.userRoamingDataHome)||this.uriIdentityService.extUri.isEqual(e, this.contextService.getWorkspace().configuration??void 0)?!1:this.readonlyIncludeMatcher.value.matches(e)?this.readonlyExcludeMatcher.value.matches(e)?!1:kEe.READONLY_MESSAGES.configuredReadonly:this.configuredReadonlyFromPermissions&&t?.locked?kEe.READONLY_MESSAGES.fileLocked:t?.readonly?kEe.READONLY_MESSAGES.fileReadonly:!1
  }
  async updateReadonly(e, t){
    if(t==="toggle"){
      let i;
      try{
        i=await this.fileService.resolve(e,{
          resolveMetadata:!0
        })
      }
      catch{
        
      }
      t=!this.isReadonly(e,i)
    }
    t==="reset"?this.sessionReadonlyOverrides.delete(e):this.sessionReadonlyOverrides.set(e, t), this._onDidChangeReadonly.fire()
  }
  registerListeners(){
    this._register(this.configurationService.onDidChangeConfiguration(e=>{
      e.affectsConfiguration("files")&&this.onFilesConfigurationChange(this.configurationService.getValue(),!0)
    }))
  }
  onFilesConfigurationChange(e, t){
    this.currentGlobalAutoSaveConfiguration=this.computeAutoSaveConfiguration(void 0, e.files), this.autoSaveConfigurationCache.clear(), this.autoSaveAfterShortDelayContext.set(this.getAutoSaveMode(void 0).mode===1), t&&this._onDidChangeAutoSaveConfiguration.fire();
    const i=e?.files?.associations;
    fv(this.currentFilesAssociationConfiguration, i)||(this.currentFilesAssociationConfiguration=i, t&&this._onDidChangeFilesAssociation.fire());
    const r=e?.files?.hotExit;
    r===FH.OFF||r===FH.ON_EXIT_AND_WINDOW_CLOSE?this.currentHotExitConfiguration=r:this.currentHotExitConfiguration=FH.ON_EXIT;
    const s=!!e?.files?.readonlyFromPermissions;
    s!==!!this.configuredReadonlyFromPermissions&&(this.configuredReadonlyFromPermissions=s, t&&this._onDidChangeReadonly.fire())
  }
  getAutoSaveConfiguration(e){
    const t=this.toResource(e);
    if(t){
      let i=this.autoSaveConfigurationCache.get(t);
      return i||(i=this.computeAutoSaveConfiguration(t,this.textResourceConfigurationService.getValue(t,"files")),this.autoSaveConfigurationCache.set(t,i)),i
    }
    return this.currentGlobalAutoSaveConfiguration
  }
  computeAutoSaveConfiguration(e, t){
    let i, r, s, o, a, l;
    switch(t?.autoSave??kEe.DEFAULT_AUTO_SAVE_MODE){
      case g3.AFTER_DELAY:{
        i="afterDelay",r=typeof t?.autoSaveDelay=="number"&&t.autoSaveDelay>=0?t.autoSaveDelay:kEe.DEFAULT_AUTO_SAVE_DELAY,l=r<=kEe.DEFAULT_AUTO_SAVE_DELAY;
        break
      }
      case g3.ON_FOCUS_CHANGE:i="onFocusChange";
      break;
      case g3.ON_WINDOW_CHANGE:i="onWindowChange";
      break
    }
    return t?.autoSaveWorkspaceFilesOnly===!0&&(s=!0, e&&!this.contextService.isInsideWorkspace(e)&&(a=!0, l=void 0)), t?.autoSaveWhenNoErrors===!0&&(o=!0, l=void 0), {
      autoSave:i,autoSaveDelay:r,autoSaveWorkspaceFilesOnly:s,autoSaveWhenNoErrors:o,isOutOfWorkspace:a,isShortAutoSaveDelay:l
    }
  }
  toResource(e){
    return e instanceof XS?gp.getOriginalUri(e, {
      supportSideBySide:op.PRIMARY
    }):e
  }
  hasShortAutoSaveDelay(e){
    const t=this.toResource(e);
    return t&&this.autoSaveAfterShortDelayOverrides.has(t)?!0:this.getAutoSaveConfiguration(t).isShortAutoSaveDelay?!t||!this.autoSaveDisabledOverrides.has(t):!1
  }
  getAutoSaveMode(e, t){
    const i=this.toResource(e);
    if(i&&this.autoSaveAfterShortDelayOverrides.has(i))return{
      mode:1
    };
    if(i&&this.autoSaveDisabledOverrides.has(i))return{
      mode:0,reason:4
    };
    const r=this.getAutoSaveConfiguration(i);
    if(typeof r.autoSave>"u")return{
      mode:0,reason:1
    };
    if(typeof t=="number"&&(r.autoSave==="afterDelay"&&t!==2||r.autoSave==="onFocusChange"&&t!==3&&t!==4||r.autoSave==="onWindowChange"&&t!==4))return{
      mode:0,reason:1
    };
    if(i){
      if(r.autoSaveWorkspaceFilesOnly&&r.isOutOfWorkspace)return{
        mode:0,reason:2
      };
      if(r.autoSaveWhenNoErrors&&this.markerService.read({
        resource:i,take:1,severities:Gl.Error
      }).length>0)return{
        mode:0,reason:3
      }
    }
    switch(r.autoSave){
      case"afterDelay":return typeof r.autoSaveDelay=="number"&&r.autoSaveDelay<=kEe.DEFAULT_AUTO_SAVE_DELAY?{
        mode:r.autoSaveWhenNoErrors?2:1
      }
      :{
        mode:2
      };
      case"onFocusChange":return{
        mode:3
      };
      case"onWindowChange":return{
        mode:4
      }
    }
  }
  async toggleAutoSave(){
    const e=this.configurationService.getValue("files.autoSave");
    let t;
    return[g3.AFTER_DELAY, g3.ON_FOCUS_CHANGE, g3.ON_WINDOW_CHANGE].some(i=>i===e)?t=g3.OFF:t=g3.AFTER_DELAY, this.configurationService.updateValue("files.autoSave", t)
  }
  enableAutoSaveAfterShortDelay(e){
    const t=this.toResource(e);
    if(!t)return at.None;
    const i=this.autoSaveAfterShortDelayOverrides.get(t)??0;
    return this.autoSaveAfterShortDelayOverrides.set(t, i+1), $i(()=>{
      const r=this.autoSaveAfterShortDelayOverrides.get(t)??0;
      r<=1?this.autoSaveAfterShortDelayOverrides.delete(t):this.autoSaveAfterShortDelayOverrides.set(t,r-1)
    })
  }
  disableAutoSave(e){
    const t=this.toResource(e);
    if(!t)return at.None;
    const i=this.autoSaveDisabledOverrides.get(t)??0;
    return this.autoSaveDisabledOverrides.set(t, i+1), i===0&&this._onDidChangeAutoSaveDisabled.fire(t), $i(()=>{
      const r=this.autoSaveDisabledOverrides.get(t)??0;
      r<=1?(this.autoSaveDisabledOverrides.delete(t),this._onDidChangeAutoSaveDisabled.fire(t)):this.autoSaveDisabledOverrides.set(t,r-1)
    })
  }
  get isHotExitEnabled(){
    return this.contextService.getWorkspace().transient?!1:this.currentHotExitConfiguration!==FH.OFF
  }
  get hotExitConfiguration(){
    return this.currentHotExitConfiguration
  }
  preventSaveConflicts(e, t){
    return this.configurationService.getValue("files.saveConflictResolution", {
      resource:e,overrideIdentifier:t
    })!=="overwriteFileOnDisk"
  }
}, qba=kEe=__decorate([__param(0, wi), __param(1, Fn), __param(2, Lr), __param(3, lg), __param(4, xl), __param(5, Gr), __param(6, bk), __param(7, uy)], qba), Vi(IC, qba, 0)
}
}), gnt, Hba=