"use strict";

// Module: out-build/vs/workbench/services/ui/browser/uiOverlayService.js
// Offset: 2376665 (bundle byte offset)
// Size: 5672 bytes
rt();
Er();
Wt();
Tw();
YD = xi("uiOverlayService");
vSh = class extends at {
  constructor() {
    super();
    this.docsLinkDialog = this._register(new j_(undefined));
    this.mentionLinkToolbar = this._register(new j_(undefined));
    this.inviteModal = this._register(new j_(false));
    this.wrappedModal = this._register(new j_(false));
    this.isTestingChangelogComponent = this._register(new j_(false));
    this.isTestingUpdateButton = this._register(new j_(false));
    this.focusSettingsSearch = this._register(new j_(false));
    this.usageBasedPricingModal = this._register(new j_(undefined));
    this.subscriptionTiersModal = this._register(new j_(false));
    this.upgradeConfirmationModal = this._register(new j_(undefined));
    this.reportFeedbackModal = this._register(new j_(undefined));
    this.starsFeedbackPopups = this._register(new j_({}));
    this.docsModal = this._register(new j_(false));
    this.worktreeSetupConfigModal = this._register(new j_(undefined));
    this.forceComposerDropdownRerender = this._register(new j_(1));
    this.agentLayoutQuickMenuOpen = this._register(new j_(false));
    this.layoutSwitcherOpen = this._register(new j_(false));
    this.menubarMenuActive = this._register(new j_(false));
    this.errorMetadata = this._register(new j_({
      case: null,
      error: undefined
    }));
    this.shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan = 0;
    this.feedbackState = this._register(new j_({
      description: undefined,
      type: undefined,
      screenshots: []
    }));
    this.settingsOpenData = this._register(new j_(undefined));
    this.dialogData = this._register(new j_(undefined));
    this.shareChatModal = this._register(new j_(undefined));
  }
  async showDocsLinkConfirmation(n) {
    this.docsLinkDialog.change({
      link: n
    });
    return new Promise(e => this._docsLinkDialogResolve = e);
  }
  closeDocsLinkConfirmation(n) {
    if (this._docsLinkDialogResolve) {
      this._docsLinkDialogResolve(n);
      this._docsLinkDialogResolve = undefined;
      this.docsLinkDialog.change(undefined);
    }
  }
  showMentionLinkToolbar(n) {
    this.mentionLinkToolbar.change(n);
    return new Promise(e => this._mentionLinkToolbarResolve = e);
  }
  closeMentionLinkToolbar() {
    if (this._mentionLinkToolbarResolve) {
      this._mentionLinkToolbarResolve();
      this._mentionLinkToolbarResolve = undefined;
      this.mentionLinkToolbar.change(undefined);
    }
  }
  showInviteModal() {
    if (!this.inviteModal.value) {
      this.inviteModal.change(true);
    }
  }
  closeInviteModal() {
    if (this.inviteModal.value) {
      this.inviteModal.change(false);
    }
  }
  showWrappedModal() {
    if (!this.wrappedModal.value) {
      this.wrappedModal.change(true);
    }
  }
  closeWrappedModal() {
    if (this.wrappedModal.value) {
      this.wrappedModal.change(false);
    }
  }
  toggleTestingChangelogComponent() {
    this.isTestingChangelogComponent.change(!this.isTestingChangelogComponent.value);
  }
  toggleTestingUpdateButton() {
    this.isTestingUpdateButton.change(!this.isTestingUpdateButton.value);
  }
  setFocusSettingsSearch(n) {
    if (this.focusSettingsSearch.value !== n) {
      this.focusSettingsSearch.change(n);
    }
  }
  showUsageBasedPricingModal(n) {
    this.usageBasedPricingModal.change(n);
  }
  closeUsageBasedPricingModal() {
    if (this.usageBasedPricingModal.value !== undefined) {
      this.usageBasedPricingModal.change(undefined);
    }
  }
  showSubscriptionTiersModal() {
    if (!this.subscriptionTiersModal.value) {
      this.subscriptionTiersModal.change(true);
    }
  }
  closeSubscriptionTiersModal() {
    if (this.subscriptionTiersModal.value) {
      this.subscriptionTiersModal.change(false);
    }
  }
  async showUpgradeConfirmationModal(n) {
    this.upgradeConfirmationModal.change({
      tier: n
    });
    return new Promise(e => this._upgradeConfirmationModalResolve = e);
  }
  closeUpgradeConfirmationModal(n) {
    if (this._upgradeConfirmationModalResolve) {
      this._upgradeConfirmationModalResolve(n);
      this._upgradeConfirmationModalResolve = undefined;
      this.upgradeConfirmationModal.change(undefined);
    }
  }
  showReportFeedbackModal(n) {
    this.reportFeedbackModal.change(n);
  }
  closeReportFeedbackModal() {
    if (this.reportFeedbackModal.value !== undefined) {
      this.reportFeedbackModal.change(undefined);
    }
  }
  setAgentLayoutQuickMenuOpen(n) {
    if (this.agentLayoutQuickMenuOpen.value !== n) {
      this.agentLayoutQuickMenuOpen.change(n);
    }
  }
  setLayoutSwitcherOpen(n) {
    if (this.layoutSwitcherOpen.value !== n) {
      this.layoutSwitcherOpen.change(n);
    }
  }
  setMenubarMenuActive(n) {
    if (this.menubarMenuActive.value !== n) {
      this.menubarMenuActive.change(n);
    }
  }
  showStarsFeedbackPopup(n) {
    const e = this.starsFeedbackPopups.value;
    this.starsFeedbackPopups.change({
      ...e,
      [n.composerId]: n
    });
  }
  closeStarsFeedbackPopup(n) {
    const e = this.starsFeedbackPopups.value;
    if (e[n] !== undefined) {
      const t = {
        ...e
      };
      delete t[n];
      this.starsFeedbackPopups.change(t);
    }
  }
  shakeStarsFeedbackPopup(n) {
    const e = this.starsFeedbackPopups.value;
    const t = e[n];
    if (t) {
      this.starsFeedbackPopups.change({
        ...e,
        [n]: {
          ...t,
          shouldShake: true
        }
      });
      setTimeout(() => {
        const i = this.starsFeedbackPopups.value;
        const r = i[n];
        if (r) {
          this.starsFeedbackPopups.change({
            ...i,
            [n]: {
              ...r,
              shouldShake: false
            }
          });
        }
      }, 500);
    }
  }
  showDocsModal() {
    this.docsModal.change(true);
    return new Promise(n => this._docsModalResolve = n);
  }
  closeDocsModal() {
    if (this._docsModalResolve) {
      this._docsModalResolve();
      this._docsModalResolve = undefined;
    }
    if (this.docsModal.value) {
      this.docsModal.change(false);
    }
  }
  async showWorktreeSetupConfigModal(n) {
    this.worktreeSetupConfigModal.change({
      initialValue: n
    });
    return new Promise(e => this._worktreeSetupConfigResolve = e);
  }
  closeWorktreeSetupConfigModal(n) {
    if (this._worktreeSetupConfigResolve) {
      this._worktreeSetupConfigResolve(n);
      this._worktreeSetupConfigResolve = undefined;
      this.worktreeSetupConfigModal.change(undefined);
    }
  }
  triggerForceComposerDropdownRerender() {
    this.forceComposerDropdownRerender.change(this.forceComposerDropdownRerender.value + 1);
  }
  showErrorMetadata(n) {
    this.errorMetadata.change(n);
  }
  closeErrorMetadata() {
    this.errorMetadata.change({
      case: null,
      error: undefined
    });
  }
  setFeedbackState(n) {
    this.feedbackState.change(n);
  }
  setSettingsOpenData(n) {
    this.settingsOpenData.change(n);
  }
  setDialogData(n, e) {
    this.dialogResolve = e;
    this.dialogData.change(n);
  }
  clearDialogData() {
    this.dialogResolve = undefined;
    this.dialogData.change(undefined);
  }
  showShareChatModal(n) {
    this.shareChatModal.change(n);
  }
  closeShareChatModal() {
    this.shareChatModal.change(undefined);
  }
};
Vi(YD, vSh, 0);
