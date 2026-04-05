"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/toolCallHumanReviewService.js
// Offset: 30728207 (bundle byte offset)
// Size: 19146 bytes
Ti();
Vg();
rt();
Yn();
Bc();
Er();
Wt();
Ud();
Q9();
J0();
jk();
cp();
$J();
oP();
KS();
UF();
ghn();
Zwi = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this.composerDataService = e;
    this.composerService = t;
    this.analyticsService = i;
    this.composerPlanService = r;
    this.composerViewsService = s;
    this._reviewModelCache = new Map();
  }
  getReviewModelForLastBubbleUnderReview(e) {
    if (!this.composerDataService.getToolFormer(e)) {
      return;
    }
    let i;
    try {
      i = this.getLastBubbleWithReviewStatusFromLast2Bubbles(e);
    } catch {
      return;
    }
    return this.getReviewModelForBubbleWithReview(e, i);
  }
  getReviewModelForLastBubbleUnderReviewUntracked(e) {
    return sc(() => this.getReviewModelForLastBubbleUnderReview(e));
  }
  getReviewModelForBubbleWithReview(e, t) {
    if (t === undefined) {
      return;
    }
    const i = this.composerDataService.getToolFormer(e);
    if (!i) {
      return;
    }
    const r = this._reviewModelCache.get(t.bubbleId);
    if (r !== undefined) {
      return r;
    }
    if (t.bubbleTool === an.EDIT_FILE || t.bubbleTool === an.EDIT_FILE_V2) {
      if (!this.isToolformerCurrentlyWaitingForEditReview(e)) {
        return;
      }
      const s = new Xwi(i, t.bubbleId, this.composerService);
      this._reviewModelCache.set(t.bubbleId, s);
      return s;
    }
    if (t.bubbleTool === an.RUN_TERMINAL_COMMAND_V2) {
      if (!this.isToolformerCurrentlyWaitingForTerminalReview(e)) {
        return;
      }
      const s = new e_i(i, t.bubbleId, this.composerService, this.analyticsService);
      this._reviewModelCache.set(t.bubbleId, s);
      return s;
    }
    if (t.bubbleTool === an.MCP) {
      if (!this.isToolformerCurrentlyWaitingForMCPReview(e)) {
        return;
      }
      const s = new lgn(i, t.bubbleId);
      this._reviewModelCache.set(t.bubbleId, s);
      return s;
    }
    if (t.bubbleTool === an.WEB_FETCH) {
      if (!this.isToolformerCurrentlyWaitingForWebFetchReview(e)) {
        return;
      }
      const s = new ugn(i, t.bubbleId);
      this._reviewModelCache.set(t.bubbleId, s);
      return s;
    }
    if (t.bubbleTool === an.CREATE_PLAN) {
      const o = i.getBubbleData(t.bubbleId)?.additionalData?.planUri;
      if (o) {
        try {
          const l = dEe(o);
          if (!this.composerPlanService.isPlanPendingByUri(l)) {
            return;
          }
        } catch {
          return;
        }
      }
      const a = new i1t(i, t.bubbleId, this.composerDataService, e, this.composerPlanService, this.composerViewsService);
      this._reviewModelCache.set(t.bubbleId, a);
      return a;
    }
  }
  getReviewModelForBubble(e, t) {
    const i = this.composerDataService.getToolFormer(e);
    if (!i) {
      return;
    }
    const r = this._reviewModelCache.get(t);
    if (r !== undefined) {
      return r;
    }
    const s = i.getBubbleData(t);
    if (s) {
      if (s.tool === an.EDIT_FILE || s.tool === an.EDIT_FILE_V2) {
        const o = new Xwi(i, t, this.composerService);
        this._reviewModelCache.set(t, o);
        return o;
      }
      if (s.tool === an.RUN_TERMINAL_COMMAND_V2) {
        const o = new e_i(i, t, this.composerService, this.analyticsService);
        this._reviewModelCache.set(t, o);
        return o;
      }
      if (s.tool === an.MCP || s.tool === an.CALL_MCP_TOOL) {
        const o = new lgn(i, t);
        this._reviewModelCache.set(t, o);
        return o;
      }
      if (s.tool === an.WEB_FETCH) {
        const o = new ugn(i, t);
        this._reviewModelCache.set(t, o);
        return o;
      }
      if (s.tool === an.CREATE_PLAN) {
        const o = new i1t(i, t, this.composerDataService, e, this.composerPlanService, this.composerViewsService);
        this._reviewModelCache.set(t, o);
        return o;
      }
    }
  }
  getEditReviewModelForBubble(e, t) {
    const i = this.composerDataService.getToolFormer(e);
    if (!i) {
      return;
    }
    const r = this._reviewModelCache.get(t);
    if (r !== undefined) {
      return r;
    }
    const s = i.getBubbleData(t);
    if (s && (s.tool === an.EDIT_FILE || s.tool === an.EDIT_FILE_V2)) {
      const o = new Xwi(i, t, this.composerService);
      this._reviewModelCache.set(t, o);
      return o;
    }
  }
  getTerminalReviewModelForBubble(e, t) {
    const i = this.composerDataService.getToolFormer(e);
    if (!i) {
      return;
    }
    const r = this._reviewModelCache.get(t);
    if (r !== undefined) {
      return r;
    }
    const s = i.getBubbleData(t);
    if (s && s.tool === an.RUN_TERMINAL_COMMAND_V2) {
      const o = new e_i(i, t, this.composerService, this.analyticsService);
      this._reviewModelCache.set(t, o);
      return o;
    }
  }
  getMCPReviewModelForBubble(e, t) {
    const i = this.composerDataService.getToolFormer(e);
    if (!i) {
      return;
    }
    const r = this._reviewModelCache.get(t);
    if (r !== undefined && r instanceof lgn) {
      return r;
    }
    const s = i.getBubbleData(t);
    if (s && (s.tool === an.MCP || s.tool === an.CALL_MCP_TOOL)) {
      const o = new lgn(i, t);
      this._reviewModelCache.set(t, o);
      return o;
    }
  }
  getPlanReviewModelForBubble(e, t) {
    const i = this.composerDataService.getToolFormer(e);
    if (!i) {
      return;
    }
    const r = this._reviewModelCache.get(t);
    if (r !== undefined && r instanceof i1t) {
      return r;
    }
    const s = i.getBubbleData(t);
    if (s && s.tool === an.CREATE_PLAN) {
      const o = new i1t(i, t, this.composerDataService, e, this.composerPlanService, this.composerViewsService);
      this._reviewModelCache.set(t, o);
      return o;
    }
  }
  getWebFetchReviewModelForBubble(e, t) {
    const i = this.composerDataService.getToolFormer(e);
    if (!i) {
      return;
    }
    const r = this._reviewModelCache.get(t);
    if (r !== undefined && r instanceof ugn) {
      return r;
    }
    const s = i.getBubbleData(t);
    if (s && s.tool === an.WEB_FETCH) {
      const o = new ugn(i, t);
      this._reviewModelCache.set(t, o);
      return o;
    }
  }
  cleanUpReviewModels(e) {
    const t = this.composerDataService.getLoadedConversationById(e);
    for (const i of t) {
      const r = this._reviewModelCache.get(i.bubbleId);
      if (r && !(r instanceof i1t)) {
        r.reset();
      }
    }
    this._reviewModelCache.clear();
  }
  isToolformerCurrentlyWaitingForReview(e) {
    return this.isToolformerCurrentlyWaitingForEditReview(e);
  }
  isToolformerCurrentlyWaitingForEditReview(e) {
    const t = this.composerDataService.getToolFormer(e);
    if (t) {
      return t.pendingDecisions().userInteractionBubbleIds.some(r => {
        const s = t.getBubbleData(r);
        return s && (s.tool === an.EDIT_FILE || s.tool === an.EDIT_FILE_V2) && s?.additionalData?.reviewData?.status === DA.REQUESTED;
      });
    } else {
      return false;
    }
  }
  isToolformerCurrentlyWaitingForTerminalReview(e) {
    const t = this.composerDataService.getToolFormer(e);
    if (t) {
      return t.pendingDecisions().userInteractionBubbleIds.some(r => {
        const s = sc(() => t.getBubbleData(r));
        return s && s.tool === an.RUN_TERMINAL_COMMAND_V2 && s?.additionalData?.reviewData?.status === DA.REQUESTED;
      });
    } else {
      return false;
    }
  }
  isToolformerCurrentlyWaitingForMCPReview(e) {
    const t = this.composerDataService.getToolFormer(e);
    if (t) {
      return t.pendingDecisions().userInteractionBubbleIds.some(r => {
        const s = sc(() => t.getBubbleData(r));
        return s && (s.tool === an.MCP || s.tool === an.CALL_MCP_TOOL) && s?.additionalData?.reviewData?.status === DA.REQUESTED;
      });
    } else {
      return false;
    }
  }
  isToolformerCurrentlyWaitingForPlanReview(e) {
    const t = this.composerDataService.getToolFormer(e);
    if (t) {
      return t.pendingDecisions().userInteractionBubbleIds.some(r => {
        const s = sc(() => t.getBubbleData(r));
        return s && s.tool === an.CREATE_PLAN && s?.additionalData?.reviewData?.status === DA.REQUESTED;
      });
    } else {
      return false;
    }
  }
  isToolformerCurrentlyWaitingForWebFetchReview(e) {
    const t = this.composerDataService.getToolFormer(e);
    if (t) {
      return t.pendingDecisions().userInteractionBubbleIds.some(r => {
        const s = sc(() => t.getBubbleData(r));
        return s && s.tool === an.WEB_FETCH && s?.additionalData?.reviewData?.status === DA.REQUESTED;
      });
    } else {
      return false;
    }
  }
  getLastBubbleWithReviewStatusFromLast2Bubbles(e) {
    const t = this.composerDataService.getComposerData(e);
    const i = this.composerDataService.getToolFormer(e);
    if (t?.fullConversationHeadersOnly.length === 0) {
      return;
    }
    const r = sc(() => t?.fullConversationHeadersOnly.slice(-2).map(o => o.bubbleId));
    if (t === undefined || i === undefined || r === undefined) {
      return;
    }
    const s = o => {
      if (o.capabilityType !== i.type) {
        return false;
      }
      const a = o.toolFormerData;
      if (!a || a.tool !== an.EDIT_FILE && a.tool !== an.EDIT_FILE_V2 && a.tool !== an.RUN_TERMINAL_COMMAND_V2 && a.tool !== an.MCP && a.tool !== an.CALL_MCP_TOOL && a.tool !== an.CREATE_PLAN && a.tool !== an.WEB_FETCH) {
        return false;
      }
      const l = o?.toolFormerData?.additionalData?.reviewData;
      return !!l && l.status === DA.REQUESTED;
    };
    for (const o of r.slice().reverse()) {
      const a = t.conversationMap[o];
      if (a !== undefined && s(a)) {
        return {
          bubbleId: a.bubbleId,
          bubbleTool: a.toolFormerData.tool
        };
      }
    }
  }
};
Zwi = __decorate([__param(0, Oa), __param(1, ag), __param(2, uh), __param(3, IV), __param(4, rw)], Zwi);
WEe = xi("toolCallHumanReviewService");
Vi(WEe, Zwi, 1);
(function (n) {
  n.ACCEPT = "accept";
  n.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY = "rejectAndTellWhatToDoDifferently";
  n.SKIP = "skip";
  n.NONE = "none";
  n.ACCEPT_AND_ALLOW_FOLDER = "acceptAndAllowFolder";
})(dX ||= {});
(function (n) {
  n.RUN = "run";
  n.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY = "rejectAndTellWhatToDoDifferently";
  n.ALLOWLIST_COMMANDS = "allowlistCommands";
  n.SKIP = "skip";
  n.NONE = "none";
})(DV ||= {});
(function (n) {
  n.RUN = "run";
  n.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY = "rejectAndTellWhatToDoDifferently";
  n.ALLOWLIST_TOOL = "allowlistTool";
  n.SKIP = "skip";
  n.NONE = "none";
})(EQ ||= {});
n1t = class {
  getIsShowingInput() {
    const n = this.getHumanReviewData();
    if (n) {
      return n.isShowingInput;
    } else {
      return false;
    }
  }
  setIsShowingInput(n) {
    this.updateReviewData({
      isShowingInput: n
    });
  }
  submitFeedbackText(n, e) {
    this.updateReviewData({
      status: DA.DONE,
      finalFeedbackText: n,
      finalFeedbackBubbleId: e
    });
  }
  closeInputBox() {
    this.updateReviewData({
      isShowingInput: false
    });
  }
  getHighlightedOption() {
    const n = this.getHumanReviewData();
    if (n) {
      return n.highlightedOption;
    }
  }
  setHighlightedOption(n) {
    this.updateReviewData({
      highlightedOption: n
    });
  }
  selectHighlightedOption() {
    const n = this.getHighlightedOption();
    if (n !== undefined) {
      this.setSelectedOption(n);
    }
  }
  setStatus(n) {
    this.updateReviewData({
      status: n
    });
  }
  getOrCreateInputBoxBubble(n) {
    const e = this.getHumanReviewData();
    if (!e) {
      return;
    }
    if (e.inputBoxBubbleId) {
      return e.inputBoxBubbleId;
    }
    const t = Wr();
    const i = {
      ...h_(),
      text: "",
      bubbleId: t,
      context: sR(),
      isReviewEditsFollowup: true
    };
    n.setData("conversationMap", t, i);
    this.updateReviewData({
      inputBoxBubbleId: t
    });
    return t;
  }
  highlightOptionAbove() {
    const n = this.getHighlightedOption();
    if (n === undefined) {
      return false;
    }
    const e = this.getCurrentlyDisplayedOptions();
    const t = e.indexOf(n);
    const i = t === 0 ? e.length - 1 : t - 1;
    this.setHighlightedOption(e[i]);
    return true;
  }
  highlightOptionBelow() {
    const n = this.getHighlightedOption();
    if (n === undefined) {
      return false;
    }
    const e = this.getCurrentlyDisplayedOptions();
    const t = e.indexOf(n);
    const i = t === e.length - 1 ? 0 : t + 1;
    this.setHighlightedOption(e[i]);
    return true;
  }
  reset() {
    this.updateReviewData(this.getDefaultReviewData());
  }
  getKeyboardShortcut(n, e) {
    if (e) {
      return "⏎";
    } else {
      return "";
    }
  }
  handleComposerShortcut(n, e) {
    return false;
  }
};
Xwi = class extends n1t {
  constructor(n, e, t) {
    super();
    this.toolFormer = n;
    this.editFileBubbleId = e;
    this.composerService = t;
    this.bubbleId = e;
  }
  getHumanReviewData() {
    const n = this.toolFormer.getBubbleData(this.editFileBubbleId);
    if (!!n && (n.tool === an.EDIT_FILE || n.tool === an.EDIT_FILE_V2)) {
      return n.additionalData?.reviewData;
    }
  }
  updateReviewData(n) {
    const e = this.toolFormer.getBubbleData(this.editFileBubbleId);
    if (!e || e.tool !== an.EDIT_FILE && e.tool !== an.EDIT_FILE_V2) {
      return;
    }
    const t = e.additionalData?.reviewData;
    this.toolFormer.setBubbleData(this.editFileBubbleId, {
      additionalData: {
        reviewData: {
          ...this.getDefaultReviewData(),
          ...t,
          ...n
        }
      }
    });
  }
  setSelectedOption(n) {
    this.updateReviewData({
      selectedOption: n
    });
    if (n === n8.ACCEPT || n === n8.ACCEPT_AND_ALLOW_FOLDER || n === n8.SWITCH_TO_DEFAULT_AGENT_MODE || n === n8.SKIP) {
      this.setStatus(DA.DONE);
    }
    if (n === n8.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY) {
      this.setStatus(DA.DONE);
      this.setIsShowingInput(true);
      this.composerService.cancelCurrentStep(this.toolFormer.composerId, {
        focusBottomInput: true
      });
    }
  }
  completeWithRunAction() {
    if (this.getHumanReviewData()?.status === DA.REQUESTED) {
      this.setSelectedOption(n8.ACCEPT);
    }
  }
  getSelectedOption() {
    const n = this.getHumanReviewData();
    if (n) {
      return n.selectedOption;
    } else {
      return n8.ACCEPT;
    }
  }
  toggleRejectInputBox() {
    if (this.getIsShowingInput()) {
      this.closeInputBox();
    } else {
      this.setSelectedOption(n8.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY);
    }
  }
  getCurrentlyDisplayedOptions() {
    return [n8.ACCEPT, n8.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY, n8.SWITCH_TO_DEFAULT_AGENT_MODE];
  }
  getDefaultReviewData() {
    return {
      status: DA.NONE,
      selectedOption: n8.ACCEPT,
      isShowingInput: false,
      highlightedOption: undefined,
      firstTimeReviewMode: false
    };
  }
  getIsFirstTimeReviewMode() {
    const n = this.getHumanReviewData();
    if (n) {
      return n.firstTimeReviewMode;
    } else {
      return false;
    }
  }
  setIsFirstTimeReviewMode(n) {
    this.updateReviewData({
      firstTimeReviewMode: n
    });
  }
  getHeaderText() {
    return "Keep this edit?";
  }
  getKind() {
    return aV.EDIT;
  }
  isExecutionBlocking() {
    return true;
  }
};
e_i = class extends n1t {
  constructor(n, e, t, i) {
    super();
    this.toolFormer = n;
    this.terminalToolBubbleId = e;
    this.composerService = t;
    this.analyticsService = i;
    this.bubbleId = e;
  }
  getHumanReviewData() {
    const n = this.toolFormer.getBubbleData(this.terminalToolBubbleId);
    if (!!n && n.tool === an.RUN_TERMINAL_COMMAND_V2) {
      return n.additionalData?.reviewData;
    }
  }
  updateReviewData(n) {
    const e = this.toolFormer.getBubbleData(this.terminalToolBubbleId);
    if (!e || e.tool !== an.RUN_TERMINAL_COMMAND_V2) {
      return;
    }
    const t = e.additionalData?.reviewData;
    this.toolFormer.setBubbleData(this.terminalToolBubbleId, {
      additionalData: {
        reviewData: {
          ...this.getDefaultReviewData(),
          ...t,
          ...n
        }
      }
    });
  }
  setSelectedOption(n) {
    const t = this.getHumanReviewData()?.approvalType;
    const i = t && t !== phn.NONE ? t : phn.USER;
    this.updateReviewData({
      selectedOption: n,
      approvalType: i
    });
    if (n === dD.RUN || n === dD.ALLOWLIST_COMMANDS || n === dD.SKIP) {
      this.setStatus(DA.DONE);
    }
    if (n === dD.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY) {
      this.setStatus(DA.DONE);
      this.setIsShowingInput(false);
      this.composerService.cancelCurrentStep(this.toolFormer.composerId, {
        focusBottomInput: true
      });
      this.analyticsService.trackEvent("composer.cancel_chat", {
        composerId: this.toolFormer.composerId,
        source: "composer_cancel_button"
      });
    }
  }
  completeWithRunAction() {
    if (this.getHumanReviewData()?.status === DA.REQUESTED) {
      this.setSelectedOption(dD.RUN);
    }
  }
  getSelectedOption() {
    const n = this.getHumanReviewData();
    if (n) {
      return n.selectedOption;
    } else {
      return dD.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY;
    }
  }
  toggleRejectInputBox() {
    this.setSelectedOption(dD.SKIP);
  }
  getCurrentlyDisplayedOptions() {
    const n = this.getHumanReviewData();
    if (n?.candidatesForAllowlist && n.candidatesForAllowlist.length > 0) {
      return [dD.RUN, dD.SKIP, dD.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY, dD.ALLOWLIST_COMMANDS];
    } else {
      return [dD.RUN, dD.SKIP, dD.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY];
    }
  }
  getDefaultReviewData() {
    return {
      status: DA.NONE,
      selectedOption: dD.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
      isShowingInput: false,
      highlightedOption: undefined
    };
  }
  getIsFirstTimeReviewMode() {
    return false;
  }
  setIsFirstTimeReviewMode() {}
  getHeaderText() {
    const n = this.getHumanReviewData();
    if (n?.isRetry === true) {
      return "Rerun command?";
    }
    const e = n?.candidatesForAllowlist;
    if (Array.isArray(e) && e.length > 0) {
      return `Run '${e.join(", ")}'?`;
    } else {
      return "Run command?";
    }
  }
  getKind() {
    return aV.TERMINAL;
  }
  isExecutionBlocking() {
    return true;
  }
};
lgn = class extends n1t {
  constructor(n, e) {
    super();
    this.toolFormer = n;
    this.bubbleId = e;
  }
  getHumanReviewData() {
    const n = this.toolFormer.getBubbleData(this.bubbleId);
    if (!!n && (n.tool === an.MCP || n.tool === an.CALL_MCP_TOOL)) {
      return n.additionalData?.reviewData;
    }
  }
  updateReviewData(n) {
    const e = this.toolFormer.getBubbleData(this.bubbleId);
    if (!e || e.tool !== an.MCP && e.tool !== an.CALL_MCP_TOOL) {
      return;
    }
    const t = e.additionalData?.reviewData;
    this.toolFormer.setBubbleData(this.bubbleId, {
      additionalData: {
        reviewData: {
          ...this.getDefaultReviewData(),
          ...t,
          ...n
        }
      }
    });
  }
  setSelectedOption(n) {
    this.updateReviewData({
      selectedOption: n
    });
    if (n === _I.RUN || n === _I.ALLOWLIST_TOOL || n === _I.SKIP) {
      this.setStatus(DA.DONE);
    }
    if (n === _I.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY) {
      this.setStatus(DA.DONE);
      this.setIsShowingInput(false);
    }
  }
  completeWithRunAction() {
    if (this.getHumanReviewData()?.status === DA.REQUESTED) {
      this.setSelectedOption(_I.RUN);
    }
  }
  getSelectedOption() {
    return this.getHumanReviewData()?.selectedOption ?? _I.RUN;
  }
  getCurrentlyDisplayedOptions() {
    const n = [_I.RUN, _I.SKIP, _I.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY];
    const e = this.toolFormer.getBubbleData(this.bubbleId);
    if ((e?.tool === an.MCP || e?.tool === an.CALL_MCP_TOOL) && e.params) {
      let t;
      if (e.tool === an.MCP) {
        t = e.params.tools?.[0]?.name;
      } else {
        t = e.params.toolName;
      }
      if (t) {
        n.push(_I.ALLOWLIST_TOOL);
      }
    }
    return n;
  }
  getDefaultReviewData() {
    return {
      status: DA.NONE,
      selectedOption: _I.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
      isShowingInput: false,
      highlightedOption: undefined
    };
  }
  getIsFirstTimeReviewMode() {
    return false;
  }
  setIsFirstTimeReviewMode() {}
  toggleRejectInputBox() {
    if (this.getIsShowingInput()) {
      this.closeInputBox();
    } else {
      this.setSelectedOption(_I.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY);
    }
  }
  getHeaderText() {
    const n = this.toolFormer.getBubbleData(this.bubbleId);
    if ((n?.tool === an.MCP || n?.tool === an.CALL_MCP_TOOL) && n.params) {
      let e;
      let t;
      if (n.tool === an.MCP) {
        e = n.params.tools?.[0]?.name;
        t = n.params.tools?.[0]?.serverName;
      } else {
        e = n.params.toolName;
        t = n.params.server;
      }
      if (e) {
        const i = t ? ` on ${t}` : "";
        return `Run ${e}${i}?`;
      }
    }
    return "Run MCP tool?";
  }
  getKind() {
    return aV.MCP;
  }
  isExecutionBlocking() {
    return true;
  }
};
ugn = class extends n1t {
  constructor(n, e) {
    super();
    this.toolFormer = n;
    this.bubbleId = e;
  }
  getHumanReviewData() {
    const n = this.toolFormer.getBubbleData(this.bubbleId);
    if (!!n && n.tool === an.WEB_FETCH) {
      return n.additionalData?.reviewData;
    }
  }
  updateReviewData(n) {
    const e = this.toolFormer.getBubbleData(this.bubbleId);
    if (!e || e.tool !== an.WEB_FETCH) {
      return;
    }
    const t = e.additionalData?.reviewData;
    this.toolFormer.setBubbleData(this.bubbleId, {
      additionalData: {
        reviewData: {
          ...this.getDefaultReviewData(),
          ...t,
          ...n
        }
      }
    });
  }
  setSelectedOption(n) {
    this.updateReviewData({
      selectedOption: n
    });
    if (n === cV.RUN || n === cV.ALLOWLIST_DOMAIN || n === cV.SKIP) {
      this.setStatus(DA.DONE);
    }
  }
  completeWithRunAction() {
    if (this.getHumanReviewData()?.status === DA.REQUESTED) {
      this.setSelectedOption(cV.RUN);
    }
  }
  getSelectedOption() {
    return this.getHumanReviewData()?.selectedOption ?? cV.RUN;
  }
  getCurrentlyDisplayedOptions() {
    return [cV.RUN, cV.SKIP, cV.ALLOWLIST_DOMAIN];
  }
  getDefaultReviewData() {
    return {
      status: DA.NONE,
      selectedOption: cV.RUN,
      isShowingInput: false,
      highlightedOption: undefined
    };
  }
  getIsFirstTimeReviewMode() {
    return false;
  }
  setIsFirstTimeReviewMode() {}
  toggleRejectInputBox() {
    this.setSelectedOption(cV.SKIP);
  }
  getHeaderText() {
    return "Fetch URL?";
  }
  getKind() {
    return aV.WEB_FETCH;
  }
  isExecutionBlocking() {
    return true;
  }
};
i1t = class extends n1t {
  constructor(n, e, t, i, r, s) {
    super();
    this.toolFormer = n;
    this.bubbleId = e;
    this.composerDataService = t;
    this.composerPlanService = r;
    this.composerViewsService = s;
    this.composerId = i.data.composerId;
  }
  getFreshHandle() {
    return this.composerDataService.getHandleIfLoaded(this.composerId);
  }
  getHumanReviewData() {
    const n = this.toolFormer.getBubbleData(this.bubbleId);
    if (!!n && n.tool === an.CREATE_PLAN) {
      return n.additionalData?.reviewData;
    }
  }
  updateReviewData(n) {
    const e = this.toolFormer.getBubbleData(this.bubbleId);
    if (!e || e.tool !== an.CREATE_PLAN) {
      return;
    }
    const t = e.additionalData?.reviewData;
    this.toolFormer.setBubbleData(this.bubbleId, {
      additionalData: {
        reviewData: {
          ...this.getDefaultReviewData(),
          ...t,
          ...n
        }
      }
    });
  }
  setSelectedOption(n, e) {
    this.updateReviewData({
      selectedOption: n
    });
    const t = this.getFreshHandle();
    if (n === cQ.APPROVE) {
      if (!t) {
        console.warn("[PlanReviewModel] Cannot approve plan: composer handle not available for", this.composerId);
        return;
      }
      const r = this.toolFormer.getBubbleData(this.bubbleId)?.additionalData?.planUri;
      if (!r) {
        console.warn("[PlanReviewModel] No plan URI in bubble data for", this.bubbleId);
        return;
      }
      const s = je.parse(r);
      this.setStatus(DA.DONE);
      this.composerPlanService.acceptPlan(t, s, this.bubbleId, "manual", {
        unifiedMode: e
      });
    }
    if (n === cQ.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY) {
      this.setIsShowingInput(true);
      this.composerViewsService.focus(this.composerId, true);
    }
    if (n === cQ.EDIT) {
      this.setStatus(DA.DONE);
      const i = this.toolFormer.getBubbleData(this.bubbleId);
      if (i?.tool === an.CREATE_PLAN) {
        const r = i.additionalData?.planUri;
        if (r) {
          const s = dEe(r);
          this.composerPlanService.openPlanInEditor(s, {
            stealFocus: true,
            composerId: this.composerId
          });
        }
      }
    }
  }
  completeWithRunAction() {
    const n = this.getHumanReviewData();
    if (n?.status === DA.REQUESTED) {
      this.setSelectedOption(cQ.APPROVE, n.preferredUnifiedMode);
    }
  }
  getSelectedOption() {
    return this.getHumanReviewData()?.selectedOption ?? cQ.NONE;
  }
  getCurrentlyDisplayedOptions() {
    return [cQ.APPROVE, cQ.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY, cQ.EDIT];
  }
  getDefaultReviewData() {
    return {
      status: DA.NONE,
      selectedOption: cQ.NONE,
      isShowingInput: false,
      highlightedOption: undefined
    };
  }
  getIsFirstTimeReviewMode() {
    return false;
  }
  setIsFirstTimeReviewMode() {}
  toggleRejectInputBox() {
    if (this.getIsShowingInput()) {
      this.closeInputBox();
      this.setSelectedOption(cQ.NONE);
    }
  }
  getHeaderText() {
    return "Approve this plan?";
  }
  getKind() {
    return aV.PLAN;
  }
  isExecutionBlocking() {
    return false;
  }
  getKeyboardShortcut(n, e) {
    switch (n) {
      case cQ.APPROVE:
        return nce("⏎");
      case cQ.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY:
        return "Esc";
      default:
        if (e) {
          return nce("⏎");
        } else {
          return "";
        }
    }
  }
};
