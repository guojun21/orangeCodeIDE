"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerEventService.js
// Offset: 26913350 (bundle byte offset)
// Size: 8498 bytes
Wt();
rt();
Er();
yn();
fE();
So();
BA = xi("composerEventService");
Jga = class extends at {
  static {
    qnu = this;
  }
  static {
    this.MAX_PENDING_TIMING_AGE_MS = 100000;
  }
  constructor(e, t) {
    super();
    this._metricsService = e;
    this._notificationService = t;
    this._onContextRemovedEmitter = this._register(new Qe());
    this.onContextRemoved = this._onContextRemovedEmitter.event;
    this._onShouldShowPreviewEmitter = this._register(new Qe());
    this.onShouldShowPreview = this._onShouldShowPreviewEmitter.event;
    this._onShouldForceTextEmitter = this._register(new Qe());
    this.onShouldForceText = this._onShouldForceTextEmitter.event;
    this._onDidAiEditFileEmitter = this._register(new Qe());
    this.onDidAiEditFile = this._onDidAiEditFileEmitter.event;
    this._onDidAcceptDiffWithoutInlineEmitter = this._register(new Qe());
    this.onDidAcceptDiffWithoutInline = this._onDidAcceptDiffWithoutInlineEmitter.event;
    this._onDidPatchGraphDiffDisplayedEmitter = this._register(new Qe());
    this.onDidPatchGraphDiffDisplayed = this._onDidPatchGraphDiffDisplayedEmitter.event;
    this._onDidPatchGraphDiffAcceptedEmitter = this._register(new Qe());
    this.onDidPatchGraphDiffAccepted = this._onDidPatchGraphDiffAcceptedEmitter.event;
    this._onDidPatchGraphDiffRejectedEmitter = this._register(new Qe());
    this.onDidPatchGraphDiffRejected = this._onDidPatchGraphDiffRejectedEmitter.event;
    this._onDidFinishAiEditToolCallEmitter = this._register(new Qe());
    this.onDidFinishAiEditToolCall = this._onDidFinishAiEditToolCallEmitter.event;
    this._onDidSendRequestEmitter = this._register(new Qe());
    this.onDidSendRequest = this._onDidSendRequestEmitter.event;
    this._onMaybeRunOnComposerSettledEmitter = this._register(new Qe());
    this.onMaybeRunOnComposerSettled = this._onMaybeRunOnComposerSettledEmitter.event;
    this._onDidContextChangeEmitter = this._register(new Qe());
    this.onDidContextChange = this._onDidContextChangeEmitter.event;
    this._onDidPasteEmitter = this._register(new Qe());
    this.onDidPaste = this._onDidPasteEmitter.event;
    this._onDidPasteImageEmitter = this._register(new Qe());
    this.onDidPasteImage = this._onDidPasteImageEmitter.event;
    this._onShouldSwapComposersEmitter = this._register(new Qe());
    this.onShouldSwapComposers = this._onShouldSwapComposersEmitter.event;
    this._onDidChangeUnifiedModeEmitter = this._register(new Qe());
    this.onDidChangeUnifiedMode = this._onDidChangeUnifiedModeEmitter.event;
    this._onDidComposerViewsServiceFinishInitializingEmitter = this._register(new Qe());
    this.onDidComposerViewsServiceFinishInitializing = this._onDidComposerViewsServiceFinishInitializingEmitter.event;
    this._onDidComposerServiceFinishInitializingEmitter = this._register(new Qe());
    this.onDidComposerServiceFinishInitializing = this._onDidComposerServiceFinishInitializingEmitter.event;
    this._onWindowInWindowChangedTitleBarEmitter = this._register(new Qe());
    this.onWindowInWindowChangedTitleBar = this._onWindowInWindowChangedTitleBarEmitter.event;
    this._onDidRegisterNewCodeBlockEmitter = this._register(new Qe());
    this.onDidRegisterNewCodeBlock = this._onDidRegisterNewCodeBlockEmitter.event;
    this._onResetComposerEmitter = this._register(new Qe());
    this.onResetComposer = this._onResetComposerEmitter.event;
    this._onDidFinishStreamChatEmitter = this._register(new Qe());
    this.onDidFinishStreamChat = this._onDidFinishStreamChatEmitter.event;
    this._onDidDeleteFileToolCallEmitter = this._register(new Qe());
    this.onDidDeleteFileToolCall = this._onDidDeleteFileToolCallEmitter.event;
    this._onDidFilesChangeEmitter = this._register(new Qe());
    this.onDidFilesChange = this._onDidFilesChangeEmitter.event;
    this._onNewFileDeletedEmitter = this._register(new Qe());
    this.onNewFileDeleted = this._onNewFileDeletedEmitter.event;
    this._onToRemoveDiffsEmitter = this._register(new Qe());
    this.onToRemoveDiffs = this._onToRemoveDiffsEmitter.event;
    this._onDidUpdateAgentLayoutPaneEmitter = this._register(new Qe());
    this.onDidUpdateAgentLayoutPane = this._onDidUpdateAgentLayoutPaneEmitter.event;
    this._onDidRequestComposerLocationChangeEmitter = this._register(new Qe());
    this.onDidRequestComposerLocationChange = this._onDidRequestComposerLocationChangeEmitter.event;
    this._onDidRequestOpenBranchMenuEmitter = this._register(new Qe());
    this.onDidRequestOpenBranchMenu = this._onDidRequestOpenBranchMenuEmitter.event;
    this._onDidRequestSwitchSubComposerTabEmitter = this._register(new Qe());
    this.onDidRequestSwitchSubComposerTab = this._onDidRequestSwitchSubComposerTabEmitter.event;
    this._onDidRequestSelectSubComposerTabByIndexEmitter = this._register(new Qe());
    this.onDidRequestSelectSubComposerTabByIndex = this._onDidRequestSelectSubComposerTabByIndexEmitter.event;
    this._onDidLoadComposerEmitter = this._register(new Qe());
    this.onDidLoadComposer = this._onDidLoadComposerEmitter.event;
    this._onDidComposerStopGeneratingEmitter = this._register(new Qe());
    this.onDidComposerStopGenerating = this._onDidComposerStopGeneratingEmitter.event;
    this._isComposerViewsServiceInitialized = false;
    this._isComposerServiceInitialized = false;
    this._pendingChatLoadTimings = new Map();
  }
  fireContextRemoved(e) {
    this._onContextRemovedEmitter.fire(e);
  }
  fireShouldShowPreview(e) {
    this._onShouldShowPreviewEmitter.fire(e);
  }
  fireShouldForceText(e) {
    this._onShouldForceTextEmitter.fire(e);
  }
  fireDidAiEditFile(e) {
    this._onDidAiEditFileEmitter.fire(e);
  }
  fireDidAcceptDiffWithoutInline(e) {
    this._onDidAcceptDiffWithoutInlineEmitter.fire(e);
  }
  fireDidPatchGraphDiffDisplayed(e) {
    this._onDidPatchGraphDiffDisplayedEmitter.fire(e);
  }
  fireDidPatchGraphDiffAccepted(e) {
    this._onDidPatchGraphDiffAcceptedEmitter.fire(e);
  }
  fireDidPatchGraphDiffRejected(e) {
    this._onDidPatchGraphDiffRejectedEmitter.fire(e);
  }
  fireDidFinishAiEditToolCall(e) {
    this._onDidFinishAiEditToolCallEmitter.fire(e);
  }
  fireDidSendRequest(e) {
    this._onDidSendRequestEmitter.fire(e);
  }
  fireMaybeRunOnComposerSettled(e) {
    this._onMaybeRunOnComposerSettledEmitter.fire(e);
  }
  fireDidContextChange(e) {
    this._onDidContextChangeEmitter.fire(e);
  }
  fireDidPaste(e) {
    this._onDidPasteEmitter.fire(e);
  }
  fireDidPasteImage(e) {
    this._onDidPasteImageEmitter.fire(e);
  }
  fireShouldSwapComposers(e) {
    this._onShouldSwapComposersEmitter.fire(e);
  }
  fireOnDidChangeUnifiedMode(e) {
    this._onDidChangeUnifiedModeEmitter.fire(e);
  }
  fireDidComposerViewsServiceFinishInitializing() {
    this._isComposerViewsServiceInitialized = true;
    this._onDidComposerViewsServiceFinishInitializingEmitter.fire();
  }
  fireDidComposerServiceFinishInitializing() {
    this._isComposerServiceInitialized = true;
    this._onDidComposerServiceFinishInitializingEmitter.fire();
  }
  fireDidRegisterNewCodeBlock(e) {
    this._onDidRegisterNewCodeBlockEmitter.fire(e);
  }
  fireResetComposer() {
    this._onResetComposerEmitter.fire();
  }
  fireWindowInWindowChangedTitleBar() {
    this._onWindowInWindowChangedTitleBarEmitter.fire();
  }
  fireDidFinishStreamChat(e) {
    this._onDidFinishStreamChatEmitter.fire(e);
  }
  fireDidDeleteFileToolCall(e) {
    this._onDidDeleteFileToolCallEmitter.fire(e);
  }
  fireDidComposerStopGenerating(e) {
    this._onDidComposerStopGeneratingEmitter.fire(e);
  }
  fireNewFileDeleted(e) {
    this._onNewFileDeletedEmitter.fire(e);
  }
  isComposerViewsServiceInitialized() {
    return this._isComposerViewsServiceInitialized;
  }
  isComposerServiceInitialized() {
    return this._isComposerServiceInitialized;
  }
  fireDidFilesChange(e) {
    this._onDidFilesChangeEmitter.fire(e);
  }
  fireToRemoveDiffs(e) {
    this._onToRemoveDiffsEmitter.fire(e);
  }
  fireDidUpdateAgentLayoutPane(e) {
    this._onDidUpdateAgentLayoutPaneEmitter.fire(e);
  }
  fireDidRequestComposerLocationChange(e) {
    this._onDidRequestComposerLocationChangeEmitter.fire(e);
  }
  fireDidRequestOpenBranchMenu(e) {
    this._onDidRequestOpenBranchMenuEmitter.fire(e);
  }
  fireDidRequestSwitchSubComposerTab(e) {
    this._onDidRequestSwitchSubComposerTabEmitter.fire(e);
  }
  fireDidRequestSelectSubComposerTabByIndex(e) {
    this._onDidRequestSelectSubComposerTabByIndexEmitter.fire(e);
  }
  fireDidLoadComposer(e) {
    this._onDidLoadComposerEmitter.fire(e);
  }
  markChatLoadStart(e) {
    this._cleanupStaleTimings();
    this._pendingChatLoadTimings.set(e, performance.now());
  }
  markChatLoadComplete(e, t) {
    const i = this._pendingChatLoadTimings.get(e);
    if (i === undefined) {
      return;
    }
    const r = performance.now() - i;
    this._pendingChatLoadTimings.delete(e);
    this._metricsService.distribution({
      stat: "composer.time_to_chat_load_ms",
      value: r,
      tags: {
        chat_type: t
      }
    });
  }
  _cleanupStaleTimings() {
    const e = performance.now();
    for (const [t, i] of this._pendingChatLoadTimings) {
      if (e - i > qnu.MAX_PENDING_TIMING_AGE_MS) {
        this._pendingChatLoadTimings.delete(t);
      }
    }
  }
};
Jga = qnu = __decorate([__param(0, R1), __param(1, ms)], Jga);
Vi(BA, Jga, 0, 1);
