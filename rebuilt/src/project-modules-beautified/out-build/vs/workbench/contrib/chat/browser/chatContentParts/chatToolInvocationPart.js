"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatToolInvocationPart.js
// Offset: 32837909 (bundle byte offset)
// Size: 10806 bytes
ri();
qi();
yn();
tg();
rt();
Jr();
Ku();
hd();
Ht();
si();
Wt();
ka();
_E();
wie();
$_i();
cIf();
QOf();
n5f();
K5f();
Kyu();
kCi();
Pxa = class extends at {
  get codeblocks() {
    return this.subPart?.codeblocks ?? [];
  }
  get codeblocksPartId() {
    return this.subPart?.codeblocksPartId;
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    super();
    this.toolInvocation = e;
    this._onDidChangeHeight = this._register(new Qe());
    this.onDidChangeHeight = this._onDidChangeHeight.event;
    this.domNode = Ct(".chat-tool-invocation-part");
    if (e.presentation === "hidden") {
      return;
    }
    const d = this._register(new Ut());
    const m = () => {
      th(this.domNode);
      d.clear();
      this.subPart = d.add(u.createInstance(Lxa, e, t, i, r, s, o, a, l));
      this.domNode.appendChild(this.subPart.domNode);
      d.add(this.subPart.onDidChangeHeight(() => this._onDidChangeHeight.fire()));
      d.add(this.subPart.onNeedsRerender(() => {
        m();
        this._onDidChangeHeight.fire();
      }));
    };
    m();
  }
  hasSameContent(e, t, i) {
    return (e.kind === "toolInvocation" || e.kind === "toolInvocationSerialized") && this.toolInvocation.toolCallId === e.toolCallId;
  }
  addDisposable(e) {
    this._register(e);
  }
};
Pxa = __decorate([__param(8, ln)], Pxa);
Lxa = class extends at {
  static {
    twu = this;
  }
  static {
    this.idPool = 0;
  }
  get codeblocks() {
    return this.markdownPart?.codeblocks ?? this._codeblocks;
  }
  get codeblocksPartId() {
    return this.markdownPart?.codeblocksPartId ?? this._codeblocksPartId;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f) {
    super();
    this.toolInvocation = e;
    this.context = t;
    this.renderer = i;
    this.listPool = r;
    this.editorPool = s;
    this.currentWidthDelegate = o;
    this.codeBlockModelCollection = a;
    this.codeBlockStartIndex = l;
    this.instantiationService = u;
    this.keybindingService = d;
    this.modelService = m;
    this.languageService = p;
    this.contextKeyService = g;
    this.languageModelToolsService = f;
    this._codeblocksPartId = "tool-" + twu.idPool++;
    this._onNeedsRerender = this._register(new Qe());
    this.onNeedsRerender = this._onNeedsRerender.event;
    this._onDidChangeHeight = this._register(new Qe());
    this.onDidChangeHeight = this._onDidChangeHeight.event;
    this._codeblocks = [];
    if (e.kind === "toolInvocation" && e.confirmationMessages) {
      if (e.toolSpecificData?.kind === "terminal") {
        this.domNode = this.createTerminalConfirmationWidget(e, e.toolSpecificData);
      } else {
        this.domNode = this.createConfirmationWidget(e);
      }
    } else if (e.toolSpecificData?.kind === "terminal") {
      this.domNode = this.createTerminalMarkdownProgressPart(e, e.toolSpecificData);
    } else if (Array.isArray(e.resultDetails) && e.resultDetails?.length) {
      this.domNode = this.createResultList(e.pastTenseMessage ?? e.invocationMessage, e.resultDetails);
    } else if (i8A(e.resultDetails)) {
      this.domNode = this.createInputOutputMarkdownProgressPart(e.pastTenseMessage ?? e.invocationMessage, e.resultDetails);
    } else {
      this.domNode = this.createProgressPart();
    }
    if (e.kind === "toolInvocation" && !e.isComplete) {
      e.isCompletePromise.then(() => this._onNeedsRerender.fire());
    }
  }
  createConfirmationWidget(e) {
    if (!e.confirmationMessages) {
      throw new Error("Confirmation messages are missing");
    }
    const t = e.confirmationMessages.title;
    const i = e.confirmationMessages.message;
    const r = e.confirmationMessages.allowAutoConfirm;
    const s = _(5235, null);
    const o = this.keybindingService.lookupKeybinding(Rgu)?.getLabel();
    const a = o ? `${s} (${o})` : s;
    const l = _(5236, null);
    const u = this.keybindingService.lookupKeybinding(GCa)?.getLabel();
    const d = u ? `${l} (${u})` : l;
    let m;
    (function (A) {
      A[A.Allow = 0] = "Allow";
      A[A.Disallow = 1] = "Disallow";
      A[A.AllowWorkspace = 2] = "AllowWorkspace";
      A[A.AllowGlobally = 3] = "AllowGlobally";
      A[A.AllowSession = 4] = "AllowSession";
    })(m ||= {});
    const p = [{
      label: s,
      data: 0,
      tooltip: a,
      moreActions: r ? [{
        label: _(5237, null),
        data: 4,
        tooltip: _(5238, null)
      }, {
        label: _(5239, null),
        data: 2,
        tooltip: _(5240, null)
      }, {
        label: _(5241, null),
        data: 3,
        tooltip: _(5242, null)
      }] : undefined
    }, {
      label: _(5243, null),
      data: 1,
      isSecondary: true,
      tooltip: d
    }];
    let g;
    if (typeof i == "string") {
      g = this._register(this.instantiationService.createInstance(mSi, t, i, p));
    } else {
      const A = {
        kind: "markdownContent",
        content: i
      };
      const w = {
        hideToolbar: true,
        reserveWidth: 19,
        verticalPadding: 5,
        editorOptions: {
          wordWrap: "on"
        }
      };
      const C = kl("div", [kl(".message@message"), kl(".editor@editor")]);
      if (e.toolSpecificData?.kind === "input") {
        const x = e.toolSpecificData;
        const I = {
          hideToolbar: true,
          reserveWidth: 19,
          maxHeightInLines: 13,
          verticalPadding: 5,
          editorOptions: {
            wordWrap: "on",
            readOnly: false
          }
        };
        const B = this.languageService.getLanguageIdByLanguageName("json");
        const R = this._register(this.modelService.createModel(JSON.stringify(x.rawInput, undefined, 2), this.languageService.createById(B), s8A(e.toolId)));
        const N = this._register(this.editorPool.get());
        N.object.render({
          codeBlockIndex: this.codeBlockStartIndex,
          codeBlockPartIndex: 0,
          element: this.context.element,
          languageId: B ?? "json",
          renderOptions: I,
          textModel: Promise.resolve(R)
        }, this.currentWidthDelegate());
        this._codeblocks.push({
          codeBlockIndex: this.codeBlockStartIndex,
          codemapperUri: undefined,
          elementId: this.context.element.id,
          focus: () => N.object.focus(),
          isStreaming: false,
          ownerMarkdownPartId: this.codeblocksPartId,
          uri: R.uri,
          uriPromise: Promise.resolve(R.uri)
        });
        this._register(N.object.onDidChangeContentHeight(() => {
          N.object.layout(this.currentWidthDelegate());
          this._onDidChangeHeight.fire();
        }));
        this._register(R.onDidChangeContent(M => {
          try {
            x.rawInput = JSON.parse(R.getValue());
          } catch {}
        }));
        C.editor.append(N.object.element);
      }
      this.markdownPart = this._register(this.instantiationService.createInstance(abn, A, this.context, this.editorPool, false, this.codeBlockStartIndex, this.renderer, this.currentWidthDelegate(), this.codeBlockModelCollection, {
        codeBlockRenderOptions: w
      }));
      C.message.append(this.markdownPart.domNode);
      this._register(this.markdownPart.onDidChangeHeight(() => this._onDidChangeHeight.fire()));
      g = this._register(this.instantiationService.createInstance(pSi, t, C.root, e.toolSpecificData?.kind === "input", p));
    }
    const f = qa.Editing.hasToolConfirmation.bindTo(this.contextKeyService);
    f.set(true);
    this._register(g.onDidClick(A => {
      switch (A.data) {
        case 3:
          this.languageModelToolsService.setToolAutoConfirmation(e.toolId, "profile", true);
          e.confirmed.complete(true);
          break;
        case 2:
          this.languageModelToolsService.setToolAutoConfirmation(e.toolId, "workspace", true);
          e.confirmed.complete(true);
          break;
        case 4:
          this.languageModelToolsService.setToolAutoConfirmation(e.toolId, "memory", true);
          e.confirmed.complete(true);
          break;
        case 0:
          e.confirmed.complete(true);
          break;
        case 1:
          e.confirmed.complete(false);
          break;
      }
    }));
    this._register(g.onDidChangeHeight(() => this._onDidChangeHeight.fire()));
    this._register($i(() => f.reset()));
    e.confirmed.p.then(() => {
      f.reset();
      this._onNeedsRerender.fire();
    });
    return g.domNode;
  }
  createTerminalConfirmationWidget(e, t) {
    if (!e.confirmationMessages) {
      throw new Error("Confirmation messages are missing");
    }
    const i = e.confirmationMessages.title;
    const r = e.confirmationMessages.message;
    const s = _(5244, null);
    const o = this.keybindingService.lookupKeybinding(Rgu)?.getLabel();
    const a = o ? `${s} (${o})` : s;
    const l = _(5245, null);
    const u = this.keybindingService.lookupKeybinding(GCa)?.getLabel();
    const d = u ? `${l} (${u})` : l;
    const m = [{
      label: s,
      data: true,
      tooltip: a
    }, {
      label: l,
      data: false,
      isSecondary: true,
      tooltip: d
    }];
    const p = this._register(this.renderer.render(typeof r == "string" ? new _c(r) : r, {
      asyncRenderCallback: () => this._onDidChangeHeight.fire()
    }));
    const g = {
      hideToolbar: true,
      reserveWidth: 19,
      verticalPadding: 5,
      editorOptions: {
        wordWrap: "on",
        readOnly: false
      }
    };
    const f = this.languageService.getLanguageIdByLanguageName(t.language ?? "sh") ?? "shellscript";
    const A = this.modelService.createModel(t.command, this.languageService.createById(f));
    const w = this._register(this.editorPool.get());
    w.object.render({
      codeBlockIndex: this.codeBlockStartIndex,
      codeBlockPartIndex: 0,
      element: this.context.element,
      languageId: f,
      renderOptions: g,
      textModel: Promise.resolve(A)
    }, this.currentWidthDelegate());
    this._codeblocks.push({
      codeBlockIndex: this.codeBlockStartIndex,
      codemapperUri: undefined,
      elementId: this.context.element.id,
      focus: () => w.object.focus(),
      isStreaming: false,
      ownerMarkdownPartId: this.codeblocksPartId,
      uri: A.uri,
      uriPromise: Promise.resolve(A.uri)
    });
    this._register(w.object.onDidChangeContentHeight(() => {
      w.object.layout(this.currentWidthDelegate());
      this._onDidChangeHeight.fire();
    }));
    this._register(A.onDidChangeContent(I => {
      t.command = A.getValue();
    }));
    const C = Ct("");
    Rt(C, w.object.element);
    Rt(C, p.element);
    const x = this._register(this.instantiationService.createInstance(pSi, i, C, false, m));
    qa.Editing.hasToolConfirmation.bindTo(this.contextKeyService).set(true);
    this._register(x.onDidClick(I => {
      e.confirmed.complete(I.data);
    }));
    this._register(x.onDidChangeHeight(() => this._onDidChangeHeight.fire()));
    e.confirmed.p.then(() => {
      qa.Editing.hasToolConfirmation.bindTo(this.contextKeyService).set(false);
      this._onNeedsRerender.fire();
    });
    return x.domNode;
  }
  createProgressPart() {
    let e;
    if (this.toolInvocation.isComplete && this.toolInvocation.isConfirmed !== false && this.toolInvocation.pastTenseMessage) {
      e = typeof this.toolInvocation.pastTenseMessage == "string" ? new _c().appendText(this.toolInvocation.pastTenseMessage) : this.toolInvocation.pastTenseMessage;
    } else {
      e = typeof this.toolInvocation.invocationMessage == "string" ? new _c().appendText(this.toolInvocation.invocationMessage + "…") : _c.lift(this.toolInvocation.invocationMessage).appendText("…");
    }
    const t = {
      kind: "progressMessage",
      content: e
    };
    const i = this.toolInvocation.isConfirmed ? this.toolInvocation.isComplete ? Be.check : undefined : Be.error;
    return this._register(this.instantiationService.createInstance(yEt, t, this.renderer, this.context, undefined, true, i)).domNode;
  }
  createTerminalMarkdownProgressPart(e, t) {
    const r = {
      kind: "markdownContent",
      content: new _c(`\`\`\`${t.language}
${t.command}
\`\`\``)
    };
    const s = {
      hideToolbar: true,
      reserveWidth: 19,
      verticalPadding: 5,
      editorOptions: {
        wordWrap: "on"
      }
    };
    this.markdownPart = this._register(this.instantiationService.createInstance(abn, r, this.context, this.editorPool, false, this.codeBlockStartIndex, this.renderer, this.currentWidthDelegate(), this.codeBlockModelCollection, {
      codeBlockRenderOptions: s
    }));
    this._register(this.markdownPart.onDidChangeHeight(() => this._onDidChangeHeight.fire()));
    const o = this.toolInvocation.isConfirmed ? this.toolInvocation.isComplete ? Be.check : Qt.modify(Be.loading, "spin") : Be.error;
    return this.instantiationService.createInstance(Z5f, this.markdownPart.domNode, o).domNode;
  }
  createInputOutputMarkdownProgressPart(e, t) {
    const i = this._register(this.modelService.createModel(`${t.input}

${t.output}`, this.languageService.createById("json")));
    const r = this._register(this.instantiationService.createInstance(fEa, e, this.context, this.editorPool, Promise.resolve(i), i.getLanguageId(), {
      hideToolbar: true,
      reserveWidth: 19,
      maxHeightInLines: 13,
      verticalPadding: 5,
      editorOptions: {
        wordWrap: "on"
      }
    }, {
      codeBlockIndex: this.codeBlockStartIndex,
      codemapperUri: undefined,
      elementId: this.context.element.id,
      focus: () => {},
      isStreaming: false,
      ownerMarkdownPartId: this.codeblocksPartId,
      uri: i.uri,
      uriPromise: Promise.resolve(i.uri)
    }));
    this._register(r.onDidChangeHeight(() => this._onDidChangeHeight.fire()));
    return r.domNode;
  }
  createResultList(e, t) {
    const i = this._register(this.instantiationService.createInstance(Jfn, t.map(r => ({
      kind: "reference",
      reference: r
    })), e, this.context, this.listPool));
    this._register(i.onDidChangeHeight(() => this._onDidChangeHeight.fire()));
    return i.domNode;
  }
};
Lxa = twu = __decorate([__param(8, ln), __param(9, mo), __param(10, Il), __param(11, Jl), __param(12, wi), __param(13, yie)], Lxa);
