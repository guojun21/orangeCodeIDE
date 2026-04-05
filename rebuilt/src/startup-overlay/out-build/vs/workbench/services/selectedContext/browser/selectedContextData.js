"use strict";

// Module: out-build/vs/workbench/services/selectedContext/browser/selectedContextData.js
// Offset: 25043303 (bundle byte offset)
// Size: 8019 bytes
Yn();
tV();
Ebg = ["composers", "selectedCommits", "selectedPullRequests", "gitDiff", "gitDiffFromBranchToMain", "selectedImages", "folderSelections", "fileSelections", "terminalFiles", "selections", "terminalSelections", "selectedDocs", "externalLinks", "diffHistory", "cursorRules", "cursorCommands", "uiElementSelections", "consoleLogs", "ideEditorsState", "gitPRDiffSelections", "subagentSelections", "browserSelections"];
Oet = Ebg;
rV = n => ["selections", "fileSelections", "folderSelections", "selectedDocs", "selectedCommits", "selectedPullRequests", "terminalSelections", "terminalFiles", "externalLinks", "selectedImages", "composers", "cursorRules", "cursorCommands", "gitPRDiffSelections", "subagentSelections", "browserSelections"].includes(n);
xbg = n => JSON.stringify({
  uri: je.revive(n.uri).toString(),
  range: n.range,
  text: n.text
});
Tbg = ["selections", "fileSelections", "folderSelections", "terminalSelections", "terminalFiles", "cursorRules", "cursorCommands", "selectedCommits", "selectedPullRequests", "selectedDocs", "externalLinks", "selectedImages", "composers", "symbols", "gitPRDiffSelections", "uiElementSelections", "consoleLogs", "workflows", "subagentSelections", "browserSelections"];
Ibg = ["gitDiff", "gitDiffFromBranchToMain", "ideEditorsState"];
