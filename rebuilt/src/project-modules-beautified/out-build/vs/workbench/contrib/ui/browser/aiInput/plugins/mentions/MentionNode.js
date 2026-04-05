"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/aiInput/plugins/mentions/MentionNode.js
// Offset: 31667706 (bundle byte offset)
// Size: 7983 bytes
PT();
J6();
tV();
ri();
mvu = "background-color: color-mix(in srgb, var(--vscode-charts-blue) 20%, transparent)";
pvu = "background-color: color-mix(in srgb, var(--vscode-charts-yellow) 20%, transparent)";
H1t = class jjb extends s8e {
  static getType() {
    return "mention";
  }
  static clone(e) {
    return new jjb(e.__mention, e.__contextIntent, e.__text, e.__key, e.typeaheadType, e.metadata, e.storedKey, e.source);
  }
  static importJSON(e) {
    const t = Hce(e.mentionName, e.contextIntent ? l9t.fromJsonString(e.contextIntent) : undefined, undefined, e.typeaheadType, undefined, e.storedKey, undefined, e.source, e.text);
    if (e.typeaheadType === eo.folder && e.text) {
      const i = e.text.endsWith("/") ? e.text.slice(0, -1).replace(/^@/, "") : e.text.replace(/^@/, "");
      t.setTextContent(i);
    } else if (e.typeaheadType === eo.file || e.typeaheadType === eo.terminal || e.typeaheadType === eo.terminal_selection || e.typeaheadType === eo.link || e.typeaheadType === eo.mcp_attachment || e.typeaheadType === eo.git_diff || e.typeaheadType === eo.git_pr || e.typeaheadType === eo.current_pr || e.typeaheadType === eo.browser) {
      let i = e.text ? e.text.replace(/^@/, "") : e.text;
      if (e.typeaheadType === eo.git_diff && i) {
        i = i.replace(/\s*\(Diff with Main\)\s*$/i, "");
        t.metadata = t.metadata ?? {};
        t.metadata.hoverText = t.metadata.hoverText ?? "Diff with Main";
      }
      t.setTextContent(i);
    } else {
      t.setTextContent(e.text);
    }
    t.setFormat(e.format);
    t.setDetail(e.detail);
    t.setMode(e.mode);
    t.setStyle(e.style);
    t.metadata = e.metadata;
    if (e.typeaheadType) {
      t.typeaheadType = e.typeaheadType;
    }
    return t;
  }
  constructor(e, t, i, r, s, o, a, l) {
    const u = Yca(s);
    const d = i ?? (s === eo.folder || s === eo.file || s === eo.terminal || s === eo.terminal_selection || s === eo.git_diff || s === eo.link || s === eo.mcp_attachment || s === eo.browser ? e : (u ? "/" : "@") + e);
    super(d, r);
    this.storedKey = a ?? this.__key;
    this.__mention = e;
    this.__contextIntent = t;
    this.metadata = o;
    this.typeaheadType = s;
    this.source = l;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      text: this.__text,
      mentionName: this.__mention,
      contextIntent: this.__contextIntent?.toJsonString(),
      type: "mention",
      typeaheadType: this.typeaheadType,
      storedKey: this.storedKey,
      version: 1,
      metadata: this.metadata,
      source: this.source
    };
  }
  setContextIntent(e) {
    const t = this.getWritable();
    t.__contextIntent = e;
  }
  getContextIntent() {
    return this.getLatest().__contextIntent;
  }
  createDOM(e) {
    const t = Yca(this.typeaheadType);
    const i = fCA(this.typeaheadType);
    const r = vCA(this.typeaheadType);
    const s = bCA(this.typeaheadType);
    const o = this.typeaheadType === eo.folder;
    const a = this.typeaheadType === eo.file;
    const l = this.typeaheadType === "ui-element";
    const u = this.typeaheadType === eo.terminal || this.typeaheadType === eo.terminal_selection;
    const d = this.typeaheadType === eo.link;
    const m = this.typeaheadType === eo.mcp_attachment;
    const p = this.typeaheadType === eo.git_diff || this.typeaheadType === "diffs";
    const g = super.createDOM(e);
    if (this.source === "editor.cmdk") {
      g.style.cssText = t ? pvu : mvu;
      g.className = "mention mention-plain";
      g.setAttribute("contenteditable", "false");
      g.textContent = this.getTextContent();
      return g;
    }
    g.style.cssText = t ? pvu : mvu;
    g.className = "mention";
    g.setAttribute("contenteditable", "false");
    if (o) {
      g.textContent = "";
      g.appendChild(Hie("codicon-folder-two", this.__mention));
    }
    if (a) {
      if (Cay()) {
        const N = document.createElement("span");
        N.className = "show-file-icons";
        const M = document.createElement("span");
        M.className = "mention-file-wrapper";
        const O = document.createElement("span");
        O.className = "mention-file-icon-container";
        let $ = this.metadata?.iconClasses;
        if (!$ || !Array.isArray($)) {
          $ = ["file-icon"];
        }
        const H = document.createElement("span");
        H.className = ["monaco-icon-label", "mention-file-icon", "mention-file-icon-theme", "height-override-important", ...$].join(" ");
        O.appendChild(H);
        const W = document.createElement("span");
        W.textContent = this.__mention;
        const z = document.createElement("i");
        z.className = "codicon codicon-close";
        z.setAttribute("data-mention-remove", "true");
        M.appendChild(O);
        M.appendChild(W);
        M.appendChild(z);
        g.textContent = "";
        N.appendChild(M);
        g.appendChild(N);
      } else {
        g.textContent = "";
        g.appendChild(Hie("codicon-file", this.__mention));
      }
    }
    if (l) {
      const N = (this.__text !== undefined ? this.__text : this.__mention).match(/<\s*([a-zA-Z0-9-]+)/);
      const M = N ? `<${N[1]}>` : "<element>";
      g.textContent = "";
      const O = Hie("codicon-inspect", M, "mention-ui-element");
      const $ = O.firstChild;
      $.setAttribute("data-mention-name", this.__mention);
      $.setAttribute("data-mention-key", this.__key);
      $.setAttribute("data-typeahead-type", "ui-element");
      g.appendChild(O);
    }
    if (u) {
      g.textContent = "";
      g.appendChild(Hie("codicon-terminal", this.__mention));
    }
    if (d) {
      g.textContent = "";
      if (this.__mention.startsWith("file://") && this.__mention.toLowerCase().endsWith(".pdf")) {
        const N = this.__mention.replace(/^file:\/\//, "");
        g.appendChild(Hie("codicon-file-pdf", N));
      } else {
        let N = this.__mention.replace(/^https?:\/\//, "").replace(/\/$/, "");
        g.appendChild(Hie("codicon-link", N));
      }
    }
    if (m) {
      g.textContent = "";
      g.appendChild(Hie("codicon-attach", this.__mention));
    }
    if (p) {
      g.textContent = "";
      g.appendChild(Hie("codicon-git-branch", this.__mention));
    }
    if (this.typeaheadType === eo.doc) {
      g.textContent = "";
      g.appendChild(Hie("codicon-book", this.__mention));
    }
    if (this.typeaheadType === eo.playwright_mcp) {
      g.textContent = "";
      g.appendChild(Hie("codicon-globe", this.__mention));
    }
    if (this.typeaheadType === eo.browser) {
      g.textContent = "";
      g.appendChild(Hie("codicon-globe", this.__mention, "mention-browser-selection"));
    }
    if (this.typeaheadType === "console-log") {
      g.textContent = "";
      g.appendChild(Hie("codicon-terminal", this.__mention));
    }
    if (this.typeaheadType === "browser-changes") {
      const R = this.__text || this.__mention;
      g.textContent = "";
      g.appendChild(Hie("codicon-inspect", R, "mention-browser-changes"));
    }
    if (this.typeaheadType === eo.pr_diff) {
      g.textContent = "";
      g.appendChild(Hie("codicon-git-pull-request", this.__mention));
    }
    if (this.typeaheadType === eo.git_pr || this.typeaheadType === eo.current_pr) {
      g.textContent = "";
      g.appendChild(Hie("codicon-git-pull-request", this.__mention));
    }
    if (this.typeaheadType) {
      const R = mNf(this.typeaheadType);
      const N = _ay(R);
      if (N) {
        for (const [M, O] of Object.entries(N)) {
          g.style[M] = O;
        }
      }
      if (R === eo.link || R === eo.file || R === eo.folder || R === eo.cursor_command || R === eo.pr_diff || R === eo.git_pr || R === eo.current_pr || R === eo.mcp_attachment || R === "cursor_skill" || R === "subagent" || R === eo.playwright_mcp) {
        g.classList.add("mention-clickable");
      }
      g.setAttribute("data-mention-name", this.__mention);
      g.setAttribute("data-mention-key", this.__key);
      g.setAttribute("data-typeahead-type", R);
    }
    return g;
  }
  exportDOM() {
    const e = document.createElement("span");
    const t = this.typeaheadType;
    const i = t === eo.folder || t === eo.file || t === eo.terminal || t === eo.terminal_selection || t === eo.git_diff ? `@${this.__text}` : this.__text;
    e.setAttribute("data-mention-key", this.storedKey);
    e.setAttribute("data-lexical-mention", "true");
    e.setAttribute("data-mention-name", this.__mention);
    if (this.typeaheadType) {
      const r = mNf(this.typeaheadType);
      e.setAttribute("data-typeahead-type", r);
    }
    if (this.metadata) {
      const r = this.metadata;
      const s = {
        iconClasses: r.iconClasses || undefined,
        selection: r.selection || undefined,
        selectedOption: undefined,
        hoverText: r.hoverText || undefined,
        uiElementData: r.uiElementData || undefined,
        consoleLogData: r.consoleLogData || undefined,
        prUrl: r.prUrl || undefined,
        filePath: r.filePath || undefined,
        startLine: r.startLine,
        endLine: r.endLine
      };
      const o = JSON.stringify(s);
      e.setAttribute("data-mention-metadata", o);
    }
    e.textContent = i;
    return {
      element: e
    };
  }
  getTextContent() {
    const e = this.typeaheadType;
    if (e === "ui-element") {
      return this.__mention;
    } else if (e === "browser-changes") {
      return this.metadata?.llmText ?? this.__mention;
    } else if (e === eo.mcp_attachment) {
      return this.metadata?.hoverText ?? this.__mention;
    } else if (this.typeaheadType === eo.folder || this.typeaheadType === eo.file || this.typeaheadType === eo.terminal || this.typeaheadType === eo.terminal_selection || this.typeaheadType === eo.git_diff || this.typeaheadType === eo.git_pr || this.typeaheadType === eo.current_pr) {
      return `@${this.__text}`;
    } else {
      return super.getTextContent();
    }
  }
  isSegmented() {
    return false;
  }
  static importDOM() {
    return {
      span: e => e.hasAttribute("data-lexical-mention") ? {
        conversion: way,
        priority: 1
      } : null
    };
  }
  isTextEntity() {
    return true;
  }
  isToken() {
    return true;
  }
};
