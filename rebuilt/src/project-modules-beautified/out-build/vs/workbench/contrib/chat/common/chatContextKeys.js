"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/chatContextKeys.js
// Offset: 28259206 (bundle byte offset)
// Size: 7343 bytes
Ht();
si();
Av();
Mm();
SS();
(function (n) {
  n.responseVote = new Sn("chatSessionResponseVote", "", {
    type: "string",
    description: _(5591, null)
  });
  n.responseDetectedAgentCommand = new Sn("chatSessionResponseDetectedAgentOrCommand", false, {
    type: "boolean",
    description: _(5592, null)
  });
  n.responseSupportsIssueReporting = new Sn("chatResponseSupportsIssueReporting", false, {
    type: "boolean",
    description: _(5593, null)
  });
  n.responseIsFiltered = new Sn("chatSessionResponseFiltered", false, {
    type: "boolean",
    description: _(5594, null)
  });
  n.responseHasError = new Sn("chatSessionResponseError", false, {
    type: "boolean",
    description: _(5595, null)
  });
  n.requestInProgress = new Sn("chatSessionRequestInProgress", false, {
    type: "boolean",
    description: _(5596, null)
  });
  n.isRequestPaused = new Sn("chatRequestIsPaused", false, {
    type: "boolean",
    description: _(5597, null)
  });
  n.canRequestBePaused = new Sn("chatCanRequestBePaused", false, {
    type: "boolean",
    description: _(5598, null)
  });
  n.isResponse = new Sn("chatResponse", false, {
    type: "boolean",
    description: _(5599, null)
  });
  n.isRequest = new Sn("chatRequest", false, {
    type: "boolean",
    description: _(5600, null)
  });
  n.itemId = new Sn("chatItemId", "", {
    type: "string",
    description: _(5601, null)
  });
  n.lastItemId = new Sn("chatLastItemId", [], {
    type: "string",
    description: _(5602, null)
  });
  n.editApplied = new Sn("chatEditApplied", false, {
    type: "boolean",
    description: _(5603, null)
  });
  n.inputHasText = new Sn("chatInputHasText", false, {
    type: "boolean",
    description: _(5604, null)
  });
  n.inputHasFocus = new Sn("chatInputHasFocus", false, {
    type: "boolean",
    description: _(5605, null)
  });
  n.inChatInput = new Sn("inChatInput", false, {
    type: "boolean",
    description: _(5606, null)
  });
  n.inChatSession = new Sn("inChat", false, {
    type: "boolean",
    description: _(5607, null)
  });
  n.inUnifiedChat = new Sn("inUnifiedChat", false, {
    type: "boolean",
    description: _(5608, null)
  });
  n.instructionsAttached = new Sn("chatInstructionsAttached", false, {
    type: "boolean",
    description: _(5609, null)
  });
  n.chatMode = new Sn("chatMode", iA.Ask, {
    type: "string",
    description: _(5610, null)
  });
  n.supported = Ee.or(uU.toNegated(), REe.notEqualsTo(""));
  n.enabled = new Sn("chatIsEnabled", false, {
    type: "boolean",
    description: _(5611, null)
  });
  n.panelParticipantRegistered = new Sn("chatPanelParticipantRegistered", false, {
    type: "boolean",
    description: _(5612, null)
  });
  n.editingParticipantRegistered = new Sn("chatEditingParticipantRegistered", false, {
    type: "boolean",
    description: _(5613, null)
  });
  n.chatEditingCanUndo = new Sn("chatEditingCanUndo", false, {
    type: "boolean",
    description: _(5614, null)
  });
  n.chatEditingCanRedo = new Sn("chatEditingCanRedo", false, {
    type: "boolean",
    description: _(5615, null)
  });
  n.extensionInvalid = new Sn("chatExtensionInvalid", false, {
    type: "boolean",
    description: _(5616, null)
  });
  n.inputCursorAtTop = new Sn("chatCursorAtTop", false);
  n.inputHasAgent = new Sn("chatInputHasAgent", false);
  n.location = new Sn("chatLocation", undefined);
  n.inQuickChat = new Sn("quickChatHasFocus", false, {
    type: "boolean",
    description: _(5617, null)
  });
  n.hasFileAttachments = new Sn("chatHasFileAttachments", false, {
    type: "boolean",
    description: _(5618, null)
  });
  n.languageModelsAreUserSelectable = new Sn("chatModelsAreUserSelectable", false, {
    type: "boolean",
    description: _(5619, null)
  });
  n.Setup = {
    hidden: new Sn("chatSetupHidden", false, true),
    installed: new Sn("chatSetupInstalled", false, true),
    fromDialog: Ee.has("config.chat.setupFromDialog")
  };
  n.Entitlement = {
    signedOut: new Sn("chatSetupSignedOut", false, true),
    canSignUp: new Sn("chatPlanCanSignUp", false, true),
    limited: new Sn("chatPlanLimited", false, true),
    pro: new Sn("chatPlanPro", false, true)
  };
  n.SetupViewKeys = new Set([n.Setup.hidden.key, n.Setup.installed.key, n.Entitlement.signedOut.key, n.Entitlement.canSignUp.key, ...n.Setup.fromDialog.keys()]);
  n.SetupViewCondition = Ee.and(n.Setup.fromDialog.negate(), Ee.or(Ee.and(n.Setup.hidden.negate(), n.Setup.installed.negate()), Ee.and(n.Entitlement.canSignUp, n.Setup.installed), Ee.and(n.Entitlement.signedOut, n.Setup.installed)));
  n.chatQuotaExceeded = new Sn("chatQuotaExceeded", false, true);
  n.completionsQuotaExceeded = new Sn("completionsQuotaExceeded", false, true);
  n.Editing = {
    hasToolsAgent: new Sn("chatHasToolsAgent", false, {
      type: "boolean",
      description: _(5620, null)
    }),
    agentModeDisallowed: new Sn("chatAgentModeDisallowed", undefined, {
      type: "boolean",
      description: _(5621, null)
    }),
    hasToolConfirmation: new Sn("chatHasToolConfirmation", false, {
      type: "boolean",
      description: _(5622, null)
    })
  };
  n.Tools = {
    toolsCount: new Sn("toolsCount", 0, {
      type: "number",
      description: _(5623, null)
    })
  };
})(qa ||= {});
(function (n) {
  n.unifiedChatEnabled = Ee.has(`config.${CV.UnifiedChatView}`);
  n.inEditsOrUnified = Ee.or(qa.location.isEqualTo(zh.EditingSession), qa.inUnifiedChat);
  n.inNonUnifiedPanel = Ee.and(qa.location.isEqualTo(zh.Panel), qa.inUnifiedChat.negate());
  n.inEditingMode = Ee.or(qa.chatMode.isEqualTo(iA.Edit), qa.chatMode.isEqualTo(iA.Agent));
})(apn ||= {});
