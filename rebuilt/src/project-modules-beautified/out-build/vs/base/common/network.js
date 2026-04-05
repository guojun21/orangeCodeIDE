"use strict";

// Module: out-build/vs/base/common/network.js
// Offset: 416431 (bundle byte offset)
// Size: 5647 bytes
_s();
_r();
oa();
Yn();
Hl();
(function (n) {
  n.inMemory = "inmemory";
  n.vscode = "vscode";
  n.internal = "private";
  n.walkThrough = "walkThrough";
  n.walkThroughSnippet = "walkThroughSnippet";
  n.http = "http";
  n.https = "https";
  n.file = "file";
  n.git = "git";
  n.mailto = "mailto";
  n.untitled = "untitled";
  n.data = "data";
  n.command = "command";
  n.vscodeRemote = "vscode-remote";
  n.vscodeRemoteResource = "vscode-remote-resource";
  n.vscodeManagedRemoteResource = "vscode-managed-remote-resource";
  n.vscodeUserData = "vscode-userdata";
  n.vscodeCustomEditor = "vscode-custom-editor";
  n.vscodeNotebook = "vscode-notebook";
  n.vscodeNotebookCell = "vscode-notebook-cell";
  n.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata";
  n.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff";
  n.vscodeNotebookCellOutput = "vscode-notebook-cell-output";
  n.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff";
  n.vscodeNotebookMetadata = "vscode-notebook-metadata";
  n.vscodeInteractiveInput = "vscode-interactive-input";
  n.vscodeSettings = "vscode-settings";
  n.vscodeWorkspaceTrust = "vscode-workspace-trust";
  n.vscodeTerminal = "vscode-terminal";
  n.terminal = "terminal";
  n.vscodeChatCodeBlock = "vscode-chat-code-block";
  n.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block";
  n.vscodeChatSesssion = "vscode-chat-editor";
  n.webviewPanel = "webview-panel";
  n.vscodeWebview = "vscode-webview";
  n.extension = "extension";
  n.aiChat = "cursor.aichat";
  n.contextObject = "cursor.context-object";
  n.composer = "cursor.composer";
  n.aiSettings = "cursor.aisettings";
  n.tinderDiffEditor = "cursor.tinderdiffeditor";
  n.vscodeFileResource = "vscode-file";
  n.tmp = "tmp";
  n.vsls = "vsls";
  n.vscodeSourceControl = "vscode-scm";
  n.commentsInput = "comment";
  n.codeSetting = "code-setting";
  n.cursorDev = "cursor-dev-utils";
  n.outputChannel = "output";
  n.accessibleView = "accessible-view";
  n.backgroundComposer = "cursor.backgroundcomposer";
  n.personalEnvironmentJson = "cursor.personalenvironmentjson";
  n.bugbot = "cursor.bugbot";
  n.aiEditorBox = "aiEditorBox";
  n.backgroundComposerPeek = "background-composer-peek";
  n.cursorPlan = "cursor-plan";
  n.reviewChanges = "cursor.reviewchanges";
  n.reviewPr = "cursor.reviewpr";
  n.allPullRequests = "cursor.allpullrequests";
  n.cursorBlame = "cursor.blame";
  n.cursorFileBlame = "cursor.fileblame";
})(_n ||= {});
Trh = "tkn";
Irh = class {
  constructor() {
    this._hosts = Object.create(null);
    this._ports = Object.create(null);
    this._connectionTokens = Object.create(null);
    this._preferredWebSchema = "http";
    this._delegate = null;
    this._serverRootPath = "/";
  }
  setPreferredWebSchema(n) {
    this._preferredWebSchema = n;
  }
  setDelegate(n) {
    this._delegate = n;
  }
  setServerRootPath(n, e) {
    this._serverRootPath = Rm.join(e ?? "/", mnA(n));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return Rm.join(this._serverRootPath, _n.vscodeRemoteResource);
  }
  set(n, e, t) {
    this._hosts[n] = e;
    this._ports[n] = t;
  }
  setConnectionToken(n, e) {
    this._connectionTokens[n] = e;
  }
  getPreferredWebSchema() {
    return this._preferredWebSchema;
  }
  rewrite(n) {
    if (this._delegate) {
      try {
        return this._delegate(n);
      } catch (o) {
        Gc(o);
        return n;
      }
    }
    const e = n.authority;
    let t = this._hosts[e];
    if (t && t.indexOf(":") !== -1 && t.indexOf("[") === -1) {
      t = `[${t}]`;
    }
    const i = this._ports[e];
    const r = this._connectionTokens[e];
    let s = `path=${encodeURIComponent(n.path)}`;
    if (typeof r == "string") {
      s += `&${Trh}=${encodeURIComponent(r)}`;
    }
    return je.from({
      scheme: Eu ? this._preferredWebSchema : _n.vscodeRemoteResource,
      authority: `${t}:${i}`,
      path: this._remoteResourcesPath,
      query: s
    });
  }
};
ASe = new Irh();
gCc = "vs/../../extensions";
Pze = "vs/../../node_modules";
jFt = "vs/../../node_modules.asar";
fCc = "vs/../../node_modules.asar.unpacked";
bCc = "vscode-app";
Drh = class qGa {
  static {
    this.FALLBACK_AUTHORITY = bCc;
  }
  asBrowserUri(e) {
    const t = this.toUri(e);
    return this.uriToBrowserUri(t);
  }
  uriToBrowserUri(e) {
    if (e.scheme === _n.vscodeRemote) {
      return ASe.rewrite(e);
    } else if (e.scheme === _n.file && (kw || bih === `${_n.vscodeFileResource}://${qGa.FALLBACK_AUTHORITY}`)) {
      return e.with({
        scheme: _n.vscodeFileResource,
        authority: e.authority || qGa.FALLBACK_AUTHORITY,
        query: null,
        fragment: null
      });
    } else {
      return e;
    }
  }
  asFileUri(e) {
    const t = this.toUri(e);
    return this.uriToFileUri(t);
  }
  uriToFileUri(e) {
    if (e.scheme === _n.vscodeFileResource) {
      return e.with({
        scheme: _n.file,
        authority: e.authority !== qGa.FALLBACK_AUTHORITY ? e.authority : null,
        query: null,
        fragment: null
      });
    } else {
      return e;
    }
  }
  toUri(e) {
    if (je.isUri(e)) {
      return e;
    }
    if (globalThis._VSCODE_FILE_ROOT) {
      const t = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(t)) {
        return je.joinPath(je.parse(t, true), e);
      }
      const i = gS(t, e);
      return je.file(i);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
og = new Drh();
pnA = Object.freeze({
  "Cache-Control": "no-cache, no-store"
});
gnA = Object.freeze({
  "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling"
});
(function (n) {
  const e = new Map([["1", {
    "Cross-Origin-Opener-Policy": "same-origin"
  }], ["2", {
    "Cross-Origin-Embedder-Policy": "require-corp"
  }], ["3", {
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Embedder-Policy": "require-corp"
  }]]);
  n.CoopAndCoep = Object.freeze(e.get("3"));
  const t = "vscode-coi";
  function i(s) {
    let o;
    if (typeof s == "string") {
      o = new URL(s).searchParams;
    } else if (s instanceof URL) {
      o = s.searchParams;
    } else if (je.isUri(s)) {
      o = new URL(s.toString(true)).searchParams;
    }
    const a = o?.get(t);
    if (a) {
      return e.get(a);
    }
  }
  n.getHeadersFromQuery = i;
  function r(s, o, a) {
    if (!globalThis.crossOriginIsolated) {
      return;
    }
    const l = o && a ? "3" : a ? "2" : "1";
    if (s instanceof URLSearchParams) {
      s.set(t, l);
    } else {
      s[t] = l;
    }
  }
  n.addSearchParam = r;
})(uFn ||= {});
