"use strict";

// Module: out-build/vs/workbench/contrib/terminal/common/terminalContextKey.js
// Offset: 31307287 (bundle byte offset)
// Size: 4115 bytes
Ht();
si();
ax();
(function (n) {
  n.IsOpen = "terminalIsOpen";
  n.Count = "terminalCount";
  n.GroupCount = "terminalGroupCount";
  n.TabsNarrow = "isTerminalTabsNarrow";
  n.HasFixedWidth = "terminalHasFixedWidth";
  n.ProcessSupported = "terminalProcessSupported";
  n.Focus = "terminalFocus";
  n.FocusInAny = "terminalFocusInAny";
  n.AccessibleBufferFocus = "terminalAccessibleBufferFocus";
  n.AccessibleBufferOnLastLine = "terminalAccessibleBufferOnLastLine";
  n.EditorFocus = "terminalEditorFocus";
  n.TabsFocus = "terminalTabsFocus";
  n.WebExtensionContributedProfile = "terminalWebExtensionContributedProfile";
  n.TerminalHasBeenCreated = "terminalHasBeenCreated";
  n.TerminalEditorActive = "terminalEditorActive";
  n.TabsMouse = "terminalTabsMouse";
  n.AltBufferActive = "terminalAltBufferActive";
  n.SuggestWidgetVisible = "terminalSuggestWidgetVisible";
  n.A11yTreeFocus = "terminalA11yTreeFocus";
  n.ViewShowing = "terminalViewShowing";
  n.TextSelected = "terminalTextSelected";
  n.TextSelectedInFocused = "terminalTextSelectedInFocused";
  n.FindVisible = "terminalFindVisible";
  n.FindInputFocused = "terminalFindInputFocused";
  n.FindFocused = "terminalFindFocused";
  n.TabsSingularSelection = "terminalTabsSingularSelection";
  n.SplitTerminal = "terminalSplitTerminal";
  n.ShellType = "terminalShellType";
  n.InTerminalRunCommandPicker = "inTerminalRunCommandPicker";
  n.TerminalShellIntegrationEnabled = "terminalShellIntegrationEnabled";
  n.PromptBarVisible = "terminalPromptBarVisible";
})(wRf ||= {});
(function (n) {
  n.isOpen = new Sn("terminalIsOpen", false, true);
  n.focus = new Sn("terminalFocus", false, _(11785, null));
  n.focusInAny = new Sn("terminalFocusInAny", false, _(11786, null));
  n.editorFocus = new Sn("terminalEditorFocus", false, _(11787, null));
  n.count = new Sn("terminalCount", 0, _(11788, null));
  n.groupCount = new Sn("terminalGroupCount", 0, true);
  n.tabsNarrow = new Sn("isTerminalTabsNarrow", false, true);
  n.terminalHasFixedWidth = new Sn("terminalHasFixedWidth", false, true);
  n.tabsFocus = new Sn("terminalTabsFocus", false, _(11789, null));
  n.webExtensionContributedProfile = new Sn("terminalWebExtensionContributedProfile", false, true);
  n.terminalHasBeenCreated = new Sn("terminalHasBeenCreated", false, true);
  n.terminalEditorActive = new Sn("terminalEditorActive", false, true);
  n.tabsMouse = new Sn("terminalTabsMouse", false, true);
  n.shellType = new Sn("terminalShellType", undefined, {
    type: "string",
    description: _(11790, null)
  });
  n.altBufferActive = new Sn("terminalAltBufferActive", false, _(11791, null));
  n.suggestWidgetVisible = new Sn("terminalSuggestWidgetVisible", false, _(11792, null));
  n.notFocus = n.focus.toNegated();
  n.viewShowing = new Sn("terminalViewShowing", false, _(11793, null));
  n.textSelected = new Sn("terminalTextSelected", false, _(11794, null));
  n.textSelectedInFocused = new Sn("terminalTextSelectedInFocused", false, _(11795, null));
  n.notTextSelected = n.textSelected.toNegated();
  n.findVisible = new Sn("terminalFindVisible", false, true);
  n.notFindVisible = n.findVisible.toNegated();
  n.findInputFocus = new Sn("terminalFindInputFocused", false, true);
  n.findFocus = new Sn("terminalFindFocused", false, true);
  n.notFindFocus = n.findInputFocus.toNegated();
  n.processSupported = new Sn("terminalProcessSupported", false, _(11796, null));
  n.tabsSingularSelection = new Sn("terminalTabsSingularSelection", false, _(11797, null));
  n.splitTerminal = new Sn("terminalSplitTerminal", false, _(11798, null));
  n.inTerminalRunCommandPicker = new Sn("inTerminalRunCommandPicker", false, _(11799, null));
  n.terminalShellIntegrationEnabled = new Sn("terminalShellIntegrationEnabled", false, _(11800, null));
  n.promptBarVisible = new Sn("terminalPromptBarVisible", false, _(11801, null));
  n.shouldShowViewInlineActions = Ee.and(Ee.equals("view", yD), Ee.notEquals("config.terminal.integrated.tabs.hideCondition", "never"), Ee.or(Ee.not("config.terminal.integrated.tabs.enabled"), Ee.and(Ee.equals("config.terminal.integrated.tabs.showActions", "singleTerminal"), Ee.equals("terminalGroupCount", 1)), Ee.and(Ee.equals("config.terminal.integrated.tabs.showActions", "singleTerminalOrNarrow"), Ee.or(Ee.equals("terminalGroupCount", 1), Ee.has("isTerminalTabsNarrow"))), Ee.and(Ee.equals("config.terminal.integrated.tabs.showActions", "singleGroup"), Ee.equals("terminalGroupCount", 1)), Ee.equals("config.terminal.integrated.tabs.showActions", "always")));
})(lo ||= {});
