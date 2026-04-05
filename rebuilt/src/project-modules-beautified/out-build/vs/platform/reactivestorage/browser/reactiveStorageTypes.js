"use strict";

// Module: out-build/vs/platform/reactivestorage/browser/reactiveStorageTypes.js
// Offset: 4144133 (bundle byte offset)
// Size: 7729 bytes
GRe();
V_();
ri();
Vg();
iu();
(function (n) {
  n[n.None = 0] = "None";
  n[n.Code = 1] = "Code";
  n[n.File = 2] = "File";
  n[n.Failure = 3] = "Failure";
  n[n.Image = 4] = "Image";
  n[n.Folder = 5] = "Folder";
  n[n.Docs = 6] = "Docs";
  n[n.CursorRule = 7] = "CursorRule";
  n[n.GitDiff = 8] = "GitDiff";
})(uI ||= {});
Zte = class {
  constructor() {
    this._ref = undefined;
    this._editor = undefined;
    this._unregisterEditorUpdateListener = undefined;
    this._lastIsEmpty = undefined;
    this.promisedFocus = false;
    this._triggerScrollToBottom = undefined;
    this._pendingSuggestion = false;
    this._pendingSuggestionReqId = undefined;
    this._suggestion = undefined;
    this._bufferedSuggestion = undefined;
    this._suggestionListeners = new Set();
  }
  registerTextAreaElement(n, e) {
    this._ref = n;
    this._unregisterEditorUpdateListener?.();
    this._unregisterEditorUpdateListener = undefined;
    this._lastIsEmpty = undefined;
    this._editor = e;
    if (this._editor) {
      this._unregisterEditorUpdateListener = this._editor.registerUpdateListener(() => {
        const t = this.isEmpty();
        if (this._lastIsEmpty === undefined) {
          this._lastIsEmpty = t;
        }
        if (this._lastIsEmpty !== t && this._suggestion !== undefined) {
          this._notifySuggestionListeners();
        }
        this._lastIsEmpty = t;
      });
    }
    if (this.promisedFocus) {
      this.focus(undefined, true);
    }
  }
  detachTextAreaElement() {
    this._ref = undefined;
    this._editor = undefined;
    this._unregisterEditorUpdateListener?.();
    this._unregisterEditorUpdateListener = undefined;
    this._lastIsEmpty = undefined;
    this.promisedFocus = false;
  }
  runEditorUpdate(n) {
    if (this._editor) {
      this._editor.update(() => {
        n();
      });
    }
  }
  registerScrollToBottomTrigger(n) {
    this._triggerScrollToBottom = n;
  }
  clearScrollToBottomTrigger() {
    this._triggerScrollToBottom = undefined;
  }
  insertAtSymbol() {
    if (this._editor) {
      this._editor.update(() => {
        const n = OA(" @");
        const e = lf();
        let t = e.getLastChild();
        if (t === null) {
          t = Lx();
          e.append(t);
        }
        t.append(n);
        e.selectEnd();
      });
    }
  }
  isEmpty() {
    if (this._editor) {
      const n = this._editor.getEditorState();
      let e = true;
      n.read(() => {
        const t = lf();
        const i = o => {
          if (jd(o)) {
            return o.getTextContent();
          }
          if (x3(o)) {
            return `
`;
          }
          if (kd(o)) {
            let a = "";
            for (const l of o.getChildren()) {
              a += i(l);
            }
            return a;
          }
          return o.getTextContent();
        };
        e = i(t).replace(/[\u200B\uFEFF]/g, "").trim().length === 0;
      });
      return e;
    }
    return true;
  }
  setText(n) {
    if (this._editor) {
      this._editor.update(() => {
        const e = lf();
        e.clear();
        const t = Lx();
        t.append(OA(n));
        e.append(t);
        e.selectEnd();
      });
    }
  }
  setTextIfEmpty(n) {
    if (this.isEmpty()) {
      this.setText(n);
      return true;
    } else {
      return false;
    }
  }
  enablePendingSuggestion() {
    this._pendingSuggestion = true;
    if (this._bufferedSuggestion && this.isEmpty()) {
      if (this._pendingSuggestionReqId === undefined || this._bufferedSuggestion.reqId === undefined || this._bufferedSuggestion.reqId === this._pendingSuggestionReqId) {
        this._suggestion = {
          text: this._bufferedSuggestion.text,
          reqId: this._bufferedSuggestion.reqId ?? this._pendingSuggestionReqId
        };
        this._bufferedSuggestion = undefined;
        this._pendingSuggestionReqId = undefined;
        this._pendingSuggestion = false;
        this._notifySuggestionListeners();
        return;
      }
      this._bufferedSuggestion = undefined;
    }
    if (this._suggestion !== undefined) {
      this._suggestion = undefined;
      this._notifySuggestionListeners();
    }
  }
  setPendingSuggestionReqId(n) {
    this._pendingSuggestionReqId = n;
  }
  disablePendingSuggestion() {
    this._pendingSuggestion = false;
    this._bufferedSuggestion = undefined;
    this._pendingSuggestionReqId = undefined;
    this.clearSuggestionText();
  }
  setSuggestionText(n, e) {
    if (this._pendingSuggestion && this.isEmpty()) {
      this._suggestion = {
        text: n,
        reqId: e ?? this._pendingSuggestionReqId
      };
      this._pendingSuggestionReqId = undefined;
      this._pendingSuggestion = false;
      this._notifySuggestionListeners();
    } else if (!this._pendingSuggestion && this.isEmpty()) {
      this._bufferedSuggestion = {
        text: n,
        reqId: e
      };
    }
  }
  getSuggestionText() {
    if (this.isEmpty()) {
      return this._suggestion?.text;
    }
  }
  getSuggestionReqId() {
    if (this.isEmpty()) {
      return this._suggestion?.reqId;
    }
  }
  clearSuggestionText() {
    if (this._suggestion !== undefined) {
      this._suggestion = undefined;
      this._notifySuggestionListeners();
    }
  }
  onSuggestionChange(n) {
    this._suggestionListeners.add(n);
    return () => this._suggestionListeners.delete(n);
  }
  _notifySuggestionListeners() {
    for (const n of this._suggestionListeners) {
      n();
    }
  }
  focus(n, e, t) {
    if (!this._ref) {
      this.promisedFocus = true;
    } else {
      this.promisedFocus = false;
      const i = () => {
        this._ref?.focus();
        this._editor?.update(() => {
          const a = lf();
          if (t) {
            a.selectStart();
          } else {
            a.selectEnd();
          }
          n?.();
          this._triggerScrollToBottom?.();
        });
      };
      const r = a => {
        setTimeout(() => {
          if (!a || !this.isFocused()) {
            i();
          }
        }, 25);
      };
      const o = $c() === bi;
      if (e || !o) {
        i();
        if (e && o) {
          r(false);
        }
      } else {
        r();
      }
    }
  }
  isFocused() {
    return this._ref && this._ref === As(this._ref).document.activeElement;
  }
  getRef() {
    return this._ref;
  }
};
GHh = Object.keys(V9e.clusters);
WHh = [...GHh].sort(cvA);
QHh = ["runnerStandalone", "prod", ...WHh];
jHh = "pane";
J4 = {
  alwaysKeepComposerInBound: true,
  location2: jHh,
  defaultCapabilities: [],
  autoApplyFilesOutsideContext: true,
  yoloCommandAllowlist: [],
  yoloCommandDenylist: [],
  smartAllowlistEnabled: false,
  smartAllowlistDenylist: [],
  yoloMcpToolsDisabled: false,
  doNotShowYoloModeWarningAgain: false,
  doNotShowFullYoloModeWarningAgain: false,
  selectedFakeStreamerId: null,
  yoloDeleteFileDisabled: false,
  yoloOutsideWorkspaceDisabled: true,
  yoloEnableRunEverything: false,
  isWebSearchToolEnabled: true,
  isWebSearchToolEnabled2: false,
  isWebSearchToolEnabled3: null,
  autoAcceptWebSearchTool: false,
  isWebFetchToolEnabled: null,
  webFetchDomainAllowlist: [],
  autoApprovedModeTransitions: [],
  autoRejectedModeTransitions: [],
  backgroundComposerEnv: "dev",
  useLegacyTerminalTool: false,
  modes4: [{
    id: "agent",
    name: "Agent",
    actionId: "composerMode.agent",
    icon: "infinity",
    description: "Plan, search, make edits, run commands",
    thinkingLevel: "none",
    shouldAutoApplyIfNoEditTool: true,
    autoFix: true,
    autoRun: true,
    fullAutoRun: false,
    enabledTools: [],
    enabledMcpServers: []
  }, {
    id: "triage",
    name: "Triage",
    actionId: "composerMode.triage",
    icon: "rocket",
    description: "Coordinate long-horizon tasks with delegated subagents",
    thinkingLevel: "none",
    shouldAutoApplyIfNoEditTool: false,
    autoFix: false,
    autoRun: true,
    fullAutoRun: false,
    enabledTools: [an.TASK_V2, an.APPLY_AGENT_DIFF],
    enabledMcpServers: []
  }, {
    id: "plan",
    name: "Plan",
    actionId: "composerMode.plan",
    icon: "todos",
    description: "Create detailed plans for accomplishing tasks",
    thinkingLevel: "none",
    shouldAutoApplyIfNoEditTool: false,
    autoFix: false,
    autoRun: false,
    enabledTools: [],
    enabledMcpServers: []
  }, {
    id: "spec",
    name: "Spec",
    actionId: "composerMode.spec",
    icon: "checklist",
    description: "Create structured plans with implementation steps",
    thinkingLevel: "none",
    shouldAutoApplyIfNoEditTool: false,
    autoFix: false,
    autoRun: false,
    enabledTools: [],
    enabledMcpServers: []
  }, {
    id: "debug",
    name: "Debug",
    actionId: "composerMode.debug",
    icon: "bug",
    description: "Systematically diagnose and fix bugs using runtime traces",
    thinkingLevel: "none",
    shouldAutoApplyIfNoEditTool: true,
    autoFix: false,
    autoRun: false,
    enabledTools: [],
    enabledMcpServers: []
  }, {
    id: "chat",
    name: "Ask",
    actionId: "composerMode.chat",
    icon: "chat",
    description: "Ask Cursor questions about your codebase",
    thinkingLevel: "none",
    shouldAutoApplyIfNoEditTool: false,
    autoFix: true,
    autoRun: false,
    enabledTools: [],
    enabledMcpServers: []
  }, {
    id: "project",
    name: "Project",
    actionId: "composerMode.project",
    icon: "folder",
    description: "Special conversation mode for project-level discussions",
    thinkingLevel: "none",
    shouldAutoApplyIfNoEditTool: false,
    autoFix: false,
    autoRun: false,
    enabledTools: [],
    enabledMcpServers: []
  }],
  codeBlockDisplayPreference: "collapsed",
  thinkingLevel: "none",
  composerMigrationVersion: false,
  maxOpenTabsMode: "custom",
  maxOpenTabsCustomValue: undefined
};
B9t = [];
(function (n) {
  n.NO_ERROR = "NO_ERROR";
  n.NO_REPO = "NO_REPO";
  n.EXTENSION_ERROR = "EXTENSION_ERROR";
})(zHh ||= {});
VHh = {
  cppModels: []
};
