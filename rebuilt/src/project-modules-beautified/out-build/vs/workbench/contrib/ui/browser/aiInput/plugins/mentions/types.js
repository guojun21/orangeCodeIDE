"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/aiInput/plugins/mentions/types.js
// Offset: 25027713 (bundle byte offset)
// Size: 7371 bytes
Bc();
gCA();
(function (n) {
  n.none = "none";
  n.doc = "doc";
  n.code = "code";
  n.file = "file";
  n.folder = "folder";
  n.git_commit = "commits";
  n.git_pr = "pr";
  n.git_diff = "diffs";
  n.git = "git";
  n.heading = "heading";
  n.staticheading = "staticheading";
  n.divider = "divider";
  n.link = "link";
  n.current_file = "current_file";
  n.toggle_commit_options = "toggle_commit_options";
  n.commit_notes = "commit_notes";
  n.image = "image";
  n.composer = "composer";
  n.reset = "reset";
  n.summarize = "summarize";
  n.bugbot = "bugbot";
  n.files_and_folders = "files_and_folders";
  n.more = "more";
  n.terminal = "terminal";
  n.terminal_selection = "terminal_selection";
  n.review_changes = "review_changes";
  n.playwright_mcp = "playwright_mcp";
  n.open_browser = "open_browser";
  n.ui_element = "ui-element";
  n.cursor_command = "cursor_command";
  n.pr_diff = "pr_diff";
  n.projects = "projects";
  n.current_pr = "current_pr";
  n.browser = "browser";
  n.mcp_attachment = "mcp-attachment";
})(eo ||= {});
ebg = [eo.code, eo.doc, eo.file, eo.folder, eo.files_and_folders, eo.git, eo.composer, eo.reset, eo.summarize, eo.terminal, eo.playwright_mcp, eo.projects];
dU = {
  [eo.code]: "Code",
  [eo.doc]: "Docs",
  [eo.file]: "Files",
  [eo.folder]: "Folders",
  [eo.git]: "Commits",
  [eo.commit_notes]: "Commit History",
  [eo.composer]: "Past Chats",
  [eo.reset]: "Reset",
  [eo.summarize]: "Summarize",
  [eo.bugbot]: "Agent Review",
  [eo.open_browser]: "Open Browser",
  [eo.files_and_folders]: "Files & Folders",
  [eo.terminal]: "Terminals",
  [eo.playwright_mcp]: "Browser",
  [eo.projects]: "Projects"
};
tbg = [eo.reset, eo.summarize, eo.bugbot, eo.open_browser];
qA = class qWb extends Zfg {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super(e);
    this.type = i;
    this.selectionPrecursor = s;
    this.docSelection = o;
    this.secondaryText = a;
    this.onSettingClick = l;
    this.payload = u;
    this.id = Wr();
    this.name = e;
    this.picture = t;
    this._score = r;
    this.sizeBytes = d;
    this.aliases = m;
    this.isSlash = Yca(i);
    if (u) {
      this.pr = u.pr;
      this.commit = u.commit;
      this.diff = u.diff;
      this.composerId = u.composerId;
      this.cursorRuleFilename = u.cursorRuleFilename;
      this.cursorCommand = u.cursorCommand;
      this.terminalFile = u.terminalFile;
      this.terminalSelection = u.terminalSelection;
      this.consoleLog = u.consoleLog;
      this.browserSelection = u.browserSelection;
      this.isLoadMore = u.isLoadMore;
      this.tooltip = u.tooltip;
    }
  }
  overrideScore(e) {
    this._score = e;
  }
  set score(e) {
    this._score = e;
  }
  get score() {
    return this._score;
  }
  clone() {
    return new qWb(this.name, this.picture, this.type, this._score, this.selectionPrecursor, this.docSelection, this.secondaryText, this.onSettingClick, this.payload, this.sizeBytes, this.aliases);
  }
};
nbg = {
  "cmd-k": ["cmdKDefinitions"],
  generic: [],
  "terminal-cmd-k": []
};
Ypi = {
  insertTextSearch: () => {},
  selectedTextSearches: [],
  removeTextSearch: () => {},
  insertDocs: () => {},
  selectedDocs: [],
  removeDocs: () => {},
  insertSelection: () => {},
  selections: [],
  removeSelection: () => {},
  insertFileSelection: () => {},
  fileSelections: [],
  removeFileSelection: () => {},
  replaceFileSelections: () => {},
  insertImage: () => {},
  imageSelections: [],
  removeImage: () => {},
  insertBrowserSelection: () => {},
  browserSelections: [],
  removeBrowserSelection: () => {},
  insertCommit: () => {},
  commits: [],
  removeCommit: () => {},
  insertPullRequest: () => {},
  pullRequests: [],
  removePullRequest: () => {},
  insertGitDiff: () => {},
  removeGitDiff: () => {},
  gitDiffUuid: undefined,
  insertDiffToMain: () => {},
  removeDiffToMain: () => {},
  diffToMainUuid: undefined,
  addCurrentFile: () => {},
  removeCurrentFile: () => {},
  addPlaywrightMcp: () => {},
  removePlaywrightMcp: () => {},
  insertFolderSelection: () => {},
  folderSelections: [],
  removeFolderSelection: () => {},
  mentionIdToDelete: null,
  setMentionIdToDelete: () => {},
  insertLink: () => {},
  linksSelections: [],
  removeLink: () => {},
  removeMention: () => false,
  insertComposer: () => {},
  composers: [],
  removeComposer: () => {},
  insertCursorRule: () => {},
  cursorRuleIds: [],
  removeCursorRule: () => {},
  insertCursorCommand: () => {},
  cursorCommandIds: [],
  removeCursorCommand: () => {},
  insertSubagent: () => {},
  subagentSelections: [],
  removeSubagent: () => {},
  addUiElement: () => {},
  removeUiElement: () => {},
  insertWorkflow: () => {},
  removeWorkflow: () => {}
};
Zca = "Commit (Diff of Working State)";
Zpi = "Branch (Diff with Main)";
uNe = 32;
Xpi = 3;
ibg = 3;
