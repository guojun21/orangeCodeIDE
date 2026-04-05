// Module: out-build/vs/workbench/services/ui/browser/uiOverlayService.js
// Offset: 2376665 (bundle byte offset)
// Size: 5672 bytes

rt(), Er(), Wt(), Tw(), YD=xi("uiOverlayService"), vSh=class extends at{
  constructor(){
    super(), this.docsLinkDialog=this._register(new j_(void 0)), this.mentionLinkToolbar=this._register(new j_(void 0)), this.inviteModal=this._register(new j_(!1)), this.wrappedModal=this._register(new j_(!1)), this.isTestingChangelogComponent=this._register(new j_(!1)), this.isTestingUpdateButton=this._register(new j_(!1)), this.focusSettingsSearch=this._register(new j_(!1)), this.usageBasedPricingModal=this._register(new j_(void 0)), this.subscriptionTiersModal=this._register(new j_(!1)), this.upgradeConfirmationModal=this._register(new j_(void 0)), this.reportFeedbackModal=this._register(new j_(void 0)), this.starsFeedbackPopups=this._register(new j_({
      
    })), this.docsModal=this._register(new j_(!1)), this.worktreeSetupConfigModal=this._register(new j_(void 0)), this.forceComposerDropdownRerender=this._register(new j_(1)), this.agentLayoutQuickMenuOpen=this._register(new j_(!1)), this.layoutSwitcherOpen=this._register(new j_(!1)), this.menubarMenuActive=this._register(new j_(!1)), this.errorMetadata=this._register(new j_({
      case:null,error:void 0
    })), this.shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan=0, this.feedbackState=this._register(new j_({
      description:void 0,type:void 0,screenshots:[]
    })), this.settingsOpenData=this._register(new j_(void 0)), this.dialogData=this._register(new j_(void 0)), this.shareChatModal=this._register(new j_(void 0))
  }
  async showDocsLinkConfirmation(n){
    return this.docsLinkDialog.change({
      link:n
    }), new Promise(e=>this._docsLinkDialogResolve=e)
  }
  closeDocsLinkConfirmation(n){
    this._docsLinkDialogResolve&&(this._docsLinkDialogResolve(n), this._docsLinkDialogResolve=void 0, this.docsLinkDialog.change(void 0))
  }
  showMentionLinkToolbar(n){
    return this.mentionLinkToolbar.change(n), new Promise(e=>this._mentionLinkToolbarResolve=e)
  }
  closeMentionLinkToolbar(){
    this._mentionLinkToolbarResolve&&(this._mentionLinkToolbarResolve(), this._mentionLinkToolbarResolve=void 0, this.mentionLinkToolbar.change(void 0))
  }
  showInviteModal(){
    this.inviteModal.value||this.inviteModal.change(!0)
  }
  closeInviteModal(){
    this.inviteModal.value&&this.inviteModal.change(!1)
  }
  showWrappedModal(){
    this.wrappedModal.value||this.wrappedModal.change(!0)
  }
  closeWrappedModal(){
    this.wrappedModal.value&&this.wrappedModal.change(!1)
  }
  toggleTestingChangelogComponent(){
    this.isTestingChangelogComponent.change(!this.isTestingChangelogComponent.value)
  }
  toggleTestingUpdateButton(){
    this.isTestingUpdateButton.change(!this.isTestingUpdateButton.value)
  }
  setFocusSettingsSearch(n){
    this.focusSettingsSearch.value!==n&&this.focusSettingsSearch.change(n)
  }
  showUsageBasedPricingModal(n){
    this.usageBasedPricingModal.change(n)
  }
  closeUsageBasedPricingModal(){
    this.usageBasedPricingModal.value!==void 0&&this.usageBasedPricingModal.change(void 0)
  }
  showSubscriptionTiersModal(){
    this.subscriptionTiersModal.value||this.subscriptionTiersModal.change(!0)
  }
  closeSubscriptionTiersModal(){
    this.subscriptionTiersModal.value&&this.subscriptionTiersModal.change(!1)
  }
  async showUpgradeConfirmationModal(n){
    return this.upgradeConfirmationModal.change({
      tier:n
    }), new Promise(e=>this._upgradeConfirmationModalResolve=e)
  }
  closeUpgradeConfirmationModal(n){
    this._upgradeConfirmationModalResolve&&(this._upgradeConfirmationModalResolve(n), this._upgradeConfirmationModalResolve=void 0, this.upgradeConfirmationModal.change(void 0))
  }
  showReportFeedbackModal(n){
    this.reportFeedbackModal.change(n)
  }
  closeReportFeedbackModal(){
    this.reportFeedbackModal.value!==void 0&&this.reportFeedbackModal.change(void 0)
  }
  setAgentLayoutQuickMenuOpen(n){
    this.agentLayoutQuickMenuOpen.value!==n&&this.agentLayoutQuickMenuOpen.change(n)
  }
  setLayoutSwitcherOpen(n){
    this.layoutSwitcherOpen.value!==n&&this.layoutSwitcherOpen.change(n)
  }
  setMenubarMenuActive(n){
    this.menubarMenuActive.value!==n&&this.menubarMenuActive.change(n)
  }
  showStarsFeedbackPopup(n){
    const e=this.starsFeedbackPopups.value;
    this.starsFeedbackPopups.change({
      ...e,[n.composerId]:n
    })
  }
  closeStarsFeedbackPopup(n){
    const e=this.starsFeedbackPopups.value;
    if(e[n]!==void 0){
      const t={
        ...e
      };
      delete t[n],this.starsFeedbackPopups.change(t)
    }
  }
  shakeStarsFeedbackPopup(n){
    const e=this.starsFeedbackPopups.value, t=e[n];
    t&&(this.starsFeedbackPopups.change({
      ...e,[n]:{
        ...t,shouldShake:!0
      }
    }), setTimeout(()=>{
      const i=this.starsFeedbackPopups.value,r=i[n];
      r&&this.starsFeedbackPopups.change({
        ...i,[n]:{
          ...r,shouldShake:!1
        }
      })
    }, 500))
  }
  showDocsModal(){
    return this.docsModal.change(!0), new Promise(n=>this._docsModalResolve=n)
  }
  closeDocsModal(){
    this._docsModalResolve&&(this._docsModalResolve(), this._docsModalResolve=void 0), this.docsModal.value&&this.docsModal.change(!1)
  }
  async showWorktreeSetupConfigModal(n){
    return this.worktreeSetupConfigModal.change({
      initialValue:n
    }), new Promise(e=>this._worktreeSetupConfigResolve=e)
  }
  closeWorktreeSetupConfigModal(n){
    this._worktreeSetupConfigResolve&&(this._worktreeSetupConfigResolve(n), this._worktreeSetupConfigResolve=void 0, this.worktreeSetupConfigModal.change(void 0))
  }
  triggerForceComposerDropdownRerender(){
    this.forceComposerDropdownRerender.change(this.forceComposerDropdownRerender.value+1)
  }
  showErrorMetadata(n){
    this.errorMetadata.change(n)
  }
  closeErrorMetadata(){
    this.errorMetadata.change({
      case:null,error:void 0
    })
  }
  setFeedbackState(n){
    this.feedbackState.change(n)
  }
  setSettingsOpenData(n){
    this.settingsOpenData.change(n)
  }
  setDialogData(n, e){
    this.dialogResolve=e, this.dialogData.change(n)
  }
  clearDialogData(){
    this.dialogResolve=void 0, this.dialogData.change(void 0)
  }
  showShareChatModal(n){
    this.shareChatModal.change(n)
  }
  closeShareChatModal(){
    this.shareChatModal.change(void 0)
  }
}, Vi(YD, vSh, 0)
}
}), ASh, I9e, ySh, IW, zE, Q3t, hBc, DW, ha, Kl=