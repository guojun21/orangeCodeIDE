"use strict";

// Module: out-build/vs/workbench/contrib/inlineChat/common/inlineChat.js
// Offset: 30823375 (bundle byte offset)
// Size: 3416 bytes
Ht();
dr();
Mp();
si();
Ws();
Nl();
(function (n) {
  n.FinishOnType = "inlineChat.finishOnType";
  n.StartWithOverlayWidget = "inlineChat.startWithOverlayWidget";
  n.HoldToSpeech = "inlineChat.holdToSpeech";
  n.AccessibleDiffView = "inlineChat.accessibleDiffView";
  n.LineEmptyHint = "inlineChat.lineEmptyHint";
  n.LineNLHint = "inlineChat.lineNaturalLanguageHint";
})(jEf ||= {});
Di.as(Dh.Configuration).registerConfiguration({
  id: "editor",
  properties: {
    "inlineChat.finishOnType": {
      description: _(8210, null),
      default: false,
      type: "boolean"
    },
    "inlineChat.holdToSpeech": {
      description: _(8211, null),
      default: true,
      type: "boolean"
    },
    "inlineChat.accessibleDiffView": {
      description: _(8212, null),
      default: "auto",
      type: "string",
      enum: ["auto", "on", "off"],
      markdownEnumDescriptions: [_(8213, null), _(8214, null), _(8215, null)]
    },
    "inlineChat.lineEmptyHint": {
      description: _(8216, null),
      default: false,
      type: "boolean",
      tags: ["experimental"]
    },
    "inlineChat.lineNaturalLanguageHint": {
      markdownDescription: _(8217, null),
      default: true,
      type: "boolean",
      tags: ["experimental"]
    }
  }
});
ygn = "interactiveEditor";
(function (n) {
  n.None = "none";
  n.Messages = "messages";
  n.MessagesAndEdits = "messagesAndEdits";
})(zEf ||= {});
VEf = new Sn("inlineChatPossible", false, _(8218, null));
dpu = new Sn("inlineChatHasProvider", false, _(8219, null));
wgn = new Sn("inlineChatHasEditsAgent", false, _(8220, null));
l1t = new Sn("inlineChatVisible", false, _(8221, null));
RV = new Sn("inlineChatFocused", false, _(8222, null));
j0a = new Sn("inlineChatEditing", true, _(8223, null));
KEf = new Sn("inlineChatResponseFocused", false, _(8224, null));
rry = new Sn("inlineChatEmpty", false, _(8225, null));
YEf = new Sn("inlineChatInnerCursorFirst", false, _(8226, null));
ZEf = new Sn("inlineChatInnerCursorLast", false, _(8227, null));
XEf = new Sn("inlineChatOuterCursorPosition", "", _(8228, null));
exf = new Sn("inlineChatHasStashedSession", false, _(8229, null));
txf = new Sn("inlineChatChangeHasDiff", false, _(8230, null));
nxf = new Sn("inlineChatChangeShowsDiff", false, _(8231, null));
_gn = new Sn("inlineChatRequestInProgress", false, _(8232, null));
z0a = new Sn("inlineChatResponseType", "none", _(8233, null));
ixf = "inlineChat.acceptChanges";
rxf = "inlineChat.regenerate";
hpu = "inlineChat.toggleDiff";
sxf = "inlineChat.reportIssue";
mpu = st.for("inlineChatWidget.status");
b_i = st.for("inlineChatWidget.secondary");
oxf = st.for("inlineChatWidget.changesZone");
ppu = st.for("inlineChatWidget.side");
axf = Rn("inlineChat.foreground", H5e, _(8234, null));
gpu = Rn("inlineChat.background", fF, _(8235, null));
sry = Rn("inlineChat.border", cft, _(8236, null));
ory = Rn("inlineChat.shadow", Tde, _(8237, null));
ary = Rn("inlineChatInput.border", cft, _(8238, null));
cry = Rn("inlineChatInput.focusBorder", nN, _(8239, null));
lry = Rn("inlineChatInput.placeholderForeground", R4o, _(8240, null));
ury = Rn("inlineChatInput.background", Ide, _(8241, null));
dry = Rn("inlineChatDiff.inserted", rl(_9, 0.5), _(8242, null));
cxf = Rn("editorOverviewRuler.inlineChatInserted", {
  dark: rl(_9, 0.6),
  light: rl(_9, 0.8),
  hcDark: rl(_9, 0.6),
  hcLight: rl(_9, 0.8)
}, _(8243, null));
lxf = Rn("editorMinimap.inlineChatInserted", {
  dark: rl(_9, 0.6),
  light: rl(_9, 0.8),
  hcDark: rl(_9, 0.6),
  hcLight: rl(_9, 0.8)
}, _(8244, null));
hry = Rn("inlineChatDiff.removed", rl(R6, 0.5), _(8245, null));
mry = Rn("editorOverviewRuler.inlineChatRemoved", {
  dark: rl(R6, 0.6),
  light: rl(R6, 0.8),
  hcDark: rl(R6, 0.6),
  hcLight: rl(R6, 0.8)
}, _(8246, null));
