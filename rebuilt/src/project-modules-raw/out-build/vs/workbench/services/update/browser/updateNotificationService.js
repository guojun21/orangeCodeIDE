// Module: out-build/vs/workbench/services/update/browser/updateNotificationService.js
// Offset: 33800754 (bundle byte offset)
// Size: 3341 bytes

rt(), Er(), Wt(), Tw(), rf(), kr(), Vki=xi("updateNotificationService"), oDa=class extends at{
  constructor(e){
    super(), this.storageService=e, this.showing=this._register(new j_(!1)), this.version=this._register(new j_(void 0)), this.shouldShowReleaseNotes=this._register(new j_(!1)), this.lastUpdateHiddenTimeInUnixSeconds=this._register(hm(this.storageService, "lastUpdateHiddenTimeInUnixSeconds")), this.lastUpdateHiddenVersion=this._register(hm(this.storageService, "lastUpdateHiddenVersion")), this.lastPromptTime=this._register(hm(this.storageService, "updatePromptLastPromptTime")), this.promptsShownForVersion=this._register(hm(this.storageService, "updatePromptPromptsShownForVersion")), this.promptsShownToday=this._register(hm(this.storageService, "updatePromptPromptsShownToday")), this.promptsShownTodayDate=this._register(hm(this.storageService, "updatePromptPromptsShownTodayDate")), this.snoozedUntilTime=this._register(hm(this.storageService, "updatePromptSnoozedUntilTime")), this.forceUpdate=this._register(hm(this.storageService, "updatePromptForceUpdate"))
  }
  setShowing(e){
    this.showing.value!==e&&this.showing.change(e)
  }
  setVersion(e){
    this.version.value!==e&&this.version.change(e)
  }
  setShouldShowReleaseNotes(e){
    this.shouldShowReleaseNotes.value!==e&&this.shouldShowReleaseNotes.change(e)
  }
  recordPromptShown(e){
    const t=Date.now(), i=new Date().toISOString().slice(0, 10);
    this.promptsShownTodayDate.get()!==i&&(this.promptsShownTodayDate.set(i, void 0), this.promptsShownToday.set(0, void 0)), this.lastPromptTime.set(t, void 0), this.promptsShownToday.set(this.promptsShownToday.get()+1, void 0);
    const r={
      ...this.promptsShownForVersion.get()
    };
    r[e]=(r[e]||0)+1, this.promptsShownForVersion.set(r, void 0)
  }
  setSnooze(e){
    const t=Date.now()+e*60*60*1e3;
    this.snoozedUntilTime.set(t, void 0)
  }
  clearSnooze(){
    this.snoozedUntilTime.set(0, void 0)
  }
  shouldShowPrompt(e, t){
    const i=Date.now(), r=new Date().toISOString().slice(0, 10);
    this.promptsShownTodayDate.get()!==r&&(this.promptsShownTodayDate.set(r, void 0), this.promptsShownToday.set(0, void 0));
    const s=this.snoozedUntilTime.get();
    if(s>0&&i<s)return!1;
    const o=this.lastPromptTime.get();
    return!(o>0&&(i-o)/36e5<e.min_hours_between_prompts||(this.promptsShownForVersion.get()[t]||0)>=e.max_prompts_per_version||this.promptsShownToday.get()>=e.max_prompts_per_day)
  }
  setForceUpdate(e){
    this.forceUpdate.set(e, void 0)
  }
  cleanupOldVersionEntries(e){
    const t=this.promptsShownForVersion.get();
    if(!t||typeof t!="object")return;
    const i=l=>l.split(".").map(u=>{
      const d=parseInt(u,10);
      return Number.isNaN(d)?0:d
    }), r=i(e), s=(l, u)=>{
      for(let d=0;
      d<Math.max(l.length,u.length);
      d++){
        const m=l[d]??0,p=u[d]??0;
        if(m<p)return!0;
        if(m>p)return!1
      }
      return!1
    }, o={
      
    };
    let a=!1;
    for(const[l, u]of Object.entries(t)){
      const d=i(l);
      !s(d,r)&&l!==e?o[l]=u:a=!0
    }
    a&&this.promptsShownForVersion.set(o, void 0)
  }
}, oDa=__decorate([__param(0, Hi)], oDa), Vi(Vki, oDa, 0)
}
});
async function hmy(n, e){
  let t;
  try{
    t=await n.createModelReference(e);
    const i=async()=>t.object.textEditorModel?.getLanguageId()??"plaintext";
    let r=await i();
    for(let s=0;
    s<5&&r==="plaintext";
    s++)await new Promise(o=>setTimeout(o, 2e3)), r=await i();
    return r
  }
  catch(i){
    return console.error(`[aiApplyToFileActions] Error getting language id for ${e.toString()}:`, i), "plaintext"
  }
  finally{
    t&&t.dispose()
  }
}
var T0u, aDa, mmy=