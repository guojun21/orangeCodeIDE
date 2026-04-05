"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatListRenderer.js
// Offset: 32858509 (bundle byte offset)
// Size: 23738 bytes
ri();
iKe();
Tb();
jde();
mb();
Vs();
qi();
yn();
tg();
Ef();
rt();
cu();
zr();
sE();
Uc();
Jr();
Yn();
Ht();
dg();
vT();
dr();
hs();
Ei();
si();
pl();
Id();
Wt();
E_();
jr();
qI();
Io();
spe();
iAa();
Txf();
_E();
EV();
xS();
Wq();
Ayi();
Pxf();
A9f();
kk();
Iyu();
Ily();
HAu();
Dly();
Bly();
Ply();
K5f();
Kyu();
tuy();
kCi();
nuy();
iuy();
ruy();
suy();
ouy();
Pyu();
uuy();
TSi();
Kce = Ct;
awu = false;
h9f = "chat-most-recent-response";
NSi = class extends at {
  static {
    owu = this;
  }
  static {
    this.ID = "item";
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f) {
    super();
    this.rendererOptions = t;
    this.delegate = i;
    this.codeBlockModelCollection = r;
    this.instantiationService = o;
    this.logService = l;
    this.contextKeyService = u;
    this.themeService = d;
    this.commandService = m;
    this.hoverService = p;
    this.chatWidgetService = g;
    this.chatService = f;
    this.codeBlocksByResponseId = new Map();
    this.codeBlocksByEditorUri = new fu();
    this.fileTreesByResponseId = new Map();
    this.focusedFileTreesByResponseId = new Map();
    this._onDidClickFollowup = this._register(new Qe());
    this.onDidClickFollowup = this._onDidClickFollowup.event;
    this._onDidClickRerunWithAgentOrCommandDetection = new Qe();
    this.onDidClickRerunWithAgentOrCommandDetection = this._onDidClickRerunWithAgentOrCommandDetection.event;
    this._onDidChangeItemHeight = this._register(new Qe());
    this.onDidChangeItemHeight = this._onDidChangeItemHeight.event;
    this._currentLayoutWidth = 0;
    this._isVisible = true;
    this._onDidChangeVisibility = this._register(new Qe());
    this.renderer = this.instantiationService.createInstance($xa, undefined);
    this.markdownDecorationsRenderer = this.instantiationService.createInstance(bSi);
    this._editorPool = this._register(this.instantiationService.createInstance(ISi, e, i, s));
    this._toolEditorPool = this._register(this.instantiationService.createInstance(ISi, e, i, s));
    this._diffEditorPool = this._register(this.instantiationService.createInstance(Bxa, e, i, s));
    this._treePool = this._register(this.instantiationService.createInstance(Nxa, this._onDidChangeVisibility.event));
    this._contentReferencesListPool = this._register(this.instantiationService.createInstance(CCi, this._onDidChangeVisibility.event, undefined));
    this._register(this.instantiationService.createInstance(Cxa));
    this._toolInvocationCodeBlockCollection = this._register(this.instantiationService.createInstance(T_i, "tools"));
  }
  get templateId() {
    return owu.ID;
  }
  editorsInUse() {
    return bl.concat(this._editorPool.inUse(), this._toolEditorPool.inUse());
  }
  traceLayout(e, t) {
    if (awu) {
      this.logService.info(`ChatListItemRenderer#${e}: ${t}`);
    } else {
      this.logService.trace(`ChatListItemRenderer#${e}: ${t}`);
    }
  }
  getProgressiveRenderRate(e) {
    let t;
    (function (i) {
      i[i.Min = 5] = "Min";
      i[i.Max = 80] = "Max";
    })(t ||= {});
    if (e.isComplete || e.isPaused.get()) {
      return 80;
    }
    if (e.contentUpdateTimings && e.contentUpdateTimings.impliedWordLoadRate) {
      const i = e.contentUpdateTimings.impliedWordLoadRate;
      return zA(i, 5, 80);
    }
    return 8;
  }
  getCodeBlockInfosForResponse(e) {
    return this.codeBlocksByResponseId.get(e.id) ?? [];
  }
  getCodeBlockInfoForEditor(e) {
    return this.codeBlocksByEditorUri.get(e);
  }
  getFileTreeInfosForResponse(e) {
    return this.fileTreesByResponseId.get(e.id) ?? [];
  }
  getLastFocusedFileTreeForResponse(e) {
    const t = this.fileTreesByResponseId.get(e.id);
    const i = this.focusedFileTreesByResponseId.get(e.id);
    if (t?.length && i !== undefined && i < t.length) {
      return t[i];
    }
  }
  setVisible(e) {
    this._isVisible = e;
    this._onDidChangeVisibility.fire(e);
  }
  layout(e) {
    const t = e - 40;
    if (t !== this._currentLayoutWidth) {
      this._currentLayoutWidth = t;
      for (const i of this._editorPool.inUse()) {
        i.layout(this._currentLayoutWidth);
      }
      for (const i of this._toolEditorPool.inUse()) {
        i.layout(this._currentLayoutWidth);
      }
      for (const i of this._diffEditorPool.inUse()) {
        i.layout(this._currentLayoutWidth);
      }
    }
  }
  renderTemplate(e) {
    const t = new Ut();
    const i = Rt(e, Kce(".interactive-item-container"));
    if (this.rendererOptions.renderStyle === "compact") {
      i.classList.add("interactive-item-compact");
    }
    let r = i;
    let s = i;
    let o;
    let a;
    if (this.rendererOptions.renderStyle === "minimal") {
      i.classList.add("interactive-item-compact");
      i.classList.add("minimal");
      const $ = Rt(i, Kce(".column.left"));
      const H = Rt(i, Kce(".column.right"));
      r = $;
      o = H;
      s = H;
      a = Rt(i, Kce(".header"));
    }
    const l = Rt(r, Kce(".header"));
    const u = Rt(l, Kce(".user"));
    const d = Rt(u, Kce(".avatar-container"));
    const m = Rt(u, Kce("h3.username"));
    m.tabIndex = 0;
    const p = Rt(o ?? u, Kce("span.detail-container"));
    const g = Rt(p, Kce("span.detail"));
    Rt(p, Kce("span.chat-animated-ellipsis"));
    const f = Rt(s, Kce(".value"));
    const A = new Ut();
    const w = t.add(this.contextKeyService.createScoped(i));
    const C = t.add(this.instantiationService.createChild(new EA([wi, w])));
    let x;
    if (this.rendererOptions.noHeader) {
      l.classList.add("hidden");
    } else {
      x = t.add(C.createInstance(nL, a ?? l, st.ChatMessageTitle, {
        menuOptions: {
          shouldForwardArgs: true
        },
        toolbarOptions: {
          shouldInlineSubmenu: $ => $.actions.length <= 1
        }
      }));
    }
    const I = Rt(i, Kce(".chat-footer-toolbar"));
    const B = t.add(C.createInstance(nL, I, st.ChatMessageFooter, {
      eventDebounceDelay: 0,
      menuOptions: {
        shouldForwardArgs: true,
        renderShortTitle: true
      },
      toolbarOptions: {
        shouldInlineSubmenu: $ => $.actions.length <= 1
      },
      actionViewItemProvider: ($, H) => $ instanceof Ub && $.item.id === ubn ? C.createInstance(MSi, $, H) : GR(C, $, H)
    }));
    const R = t.add(this.instantiationService.createInstance(ibn));
    const N = () => {
      if (rA(O.currentElement) && O.currentElement.agent && !O.currentElement.agent.isDefault) {
        R.setAgent(O.currentElement.agent.id);
        return R.domNode;
      }
    };
    const M = Tyu(() => rA(O.currentElement) ? O.currentElement.agent : undefined, this.commandService);
    t.add(this.hoverService.setupManagedHover(Sm("element"), u, N, M));
    t.add(ei(u, ir.KEY_DOWN, $ => {
      const H = new vh($);
      if (H.equals(10) || H.equals(3)) {
        const W = N();
        if (W) {
          this.hoverService.showInstantHover({
            content: W,
            target: u,
            trapFocus: true,
            actions: M.actions
          }, true);
        }
      } else if (H.equals(9)) {
        this.hoverService.hideHover();
      }
    }));
    const O = {
      avatarContainer: d,
      username: m,
      detail: g,
      value: f,
      rowContainer: i,
      elementDisposables: A,
      templateDisposables: t,
      contextKeyService: w,
      instantiationService: C,
      agentHover: R,
      titleToolbar: x,
      footerToolbar: B
    };
    return O;
  }
  renderElement(e, t, i) {
    this.renderChatTreeItem(e.element, t, i);
  }
  clearRenderedParts(e) {
    if (e.renderedParts) {
      Bo(lh(e.renderedParts));
      e.renderedParts = undefined;
      th(e.value);
    }
  }
  renderChatTreeItem(e, t, i) {
    if (i.currentElement && i.currentElement.id !== e.id) {
      this.traceLayout("renderChatTreeItem", `Rendering a different element into the template, index=${t}`);
      this.clearRenderedParts(i);
    }
    i.currentElement = e;
    const r = Gq(e) ? "request" : rA(e) ? "response" : "welcome";
    this.traceLayout("renderElement", `${r}, index=${t}`);
    qa.isResponse.bindTo(i.contextKeyService).set(rA(e));
    qa.itemId.bindTo(i.contextKeyService).set(e.id);
    qa.isRequest.bindTo(i.contextKeyService).set(Gq(e));
    qa.responseDetectedAgentCommand.bindTo(i.contextKeyService).set(rA(e) && e.agentOrSlashCommandDetected);
    if (rA(e)) {
      qa.responseSupportsIssueReporting.bindTo(i.contextKeyService).set(!!e.agent?.metadata.supportIssueReporting);
      qa.responseVote.bindTo(i.contextKeyService).set(e.vote === upn.Up ? "up" : e.vote === upn.Down ? "down" : "");
    } else {
      qa.responseVote.bindTo(i.contextKeyService).set("");
    }
    if (i.titleToolbar) {
      i.titleToolbar.context = e;
    }
    i.footerToolbar.context = e;
    qa.responseHasError.bindTo(i.contextKeyService).set(rA(e) && !!e.errorDetails);
    const s = !!rA(e) && !!e.errorDetails?.responseIsFiltered;
    qa.responseIsFiltered.bindTo(i.contextKeyService).set(s);
    const o = this.chatWidgetService.getWidgetBySessionId(e.sessionId)?.location;
    i.rowContainer.classList.toggle("editing-session", o && this.chatService.isEditingLocation(o));
    i.rowContainer.classList.toggle("interactive-request", Gq(e));
    i.rowContainer.classList.toggle("interactive-response", rA(e));
    const a = xgn(this.delegate.currentChatMode(), this.rendererOptions.progressMessageAtBottomOfResponse);
    i.rowContainer.classList.toggle("show-detail-progress", rA(e) && !e.isComplete && !e.progressMessages.length && !e.model.isPaused.get() && !a);
    i.username.textContent = e.username;
    if (!this.rendererOptions.noHeader) {
      this.renderAvatar(e, i);
    }
    th(i.detail);
    if (rA(e)) {
      this.renderDetail(e, i);
    }
    i.rowContainer.classList.toggle(h9f, t === this.delegate.getListLength() - 1);
    if (Gq(e) && e.confirmation) {
      this.renderConfirmationAction(e, i);
    }
    if (rA(e) && t === this.delegate.getListLength() - 1 && (!e.isComplete || e.renderData)) {
      this.traceLayout("renderElement", `start progressive render, index=${t}`);
      const l = i.elementDisposables.add(new D5e());
      const u = d => {
        try {
          if (this.doNextProgressiveRender(e, t, i, !!d)) {
            l.cancel();
          }
        } catch (m) {
          l.cancel();
          this.logService.error(m);
        }
      };
      l.cancelAndSet(u, 50, As(i.rowContainer));
      u(true);
    } else if (rA(e)) {
      this.basicRenderElement(e, t, i);
    } else if (Gq(e)) {
      this.basicRenderElement(e, t, i);
    }
  }
  renderDetail(e, t) {
    t.elementDisposables.add(Oc(i => {
      this._renderDetail(e, t);
    }));
  }
  _renderDetail(e, t) {
    th(t.detail);
    if (e.agentOrSlashCommandDetected) {
      const i = e.slashCommand ? _(5367, null, `${EU}${e.slashCommand.name}`) : _(5368, null);
      um(t.detail, nKe(i, {
        className: "agentOrSlashCommandDetected",
        inline: true,
        actionHandler: {
          disposables: t.elementDisposables,
          callback: r => {
            this._onDidClickRerunWithAgentOrCommandDetection.fire(e);
          }
        }
      }));
    } else if (this.rendererOptions.renderStyle !== "minimal" && !e.isComplete && !xgn(this.delegate.currentChatMode(), this.rendererOptions.progressMessageAtBottomOfResponse)) {
      if (e.model.isPaused.get()) {
        t.detail.textContent = _(5369, null);
      } else {
        t.detail.textContent = _(5370, null);
      }
    }
  }
  renderConfirmationAction(e, t) {
    th(t.detail);
    if (e.confirmation) {
      t.detail.textContent = _(5371, null, e.confirmation);
    }
  }
  renderAvatar(e, t) {
    const i = rA(e) ? this.getAgentIcon(e.agent?.metadata) : e.avatarIcon ?? Be.account;
    if (i instanceof je) {
      const r = Ct("img.icon");
      r.src = og.uriToBrowserUri(i).toString(true);
      t.avatarContainer.replaceChildren(Ct(".avatar", undefined, r));
    } else {
      const r = Ct(Qt.asCSSSelector(i));
      t.avatarContainer.replaceChildren(Ct(".avatar.codicon-avatar", undefined, r));
    }
  }
  getAgentIcon(e) {
    if (e?.themeIcon) {
      return e.themeIcon;
    } else if (e?.iconDark && this.themeService.getColorTheme().type === Fv.DARK) {
      return e.iconDark;
    } else if (e?.icon) {
      return e.icon;
    } else {
      return Be.copilot;
    }
  }
  basicRenderElement(e, t, i) {
    i.rowContainer.classList.toggle("chat-response-loading", rA(e) && !e.isComplete);
    let r = [];
    if (Gq(e) && !e.confirmation) {
      const u = "message" in e.message ? e.message.message : this.markdownDecorationsRenderer.convertParsedRequestToMarkdown(e.message);
      r = [{
        content: new _c(u),
        kind: "markdownContent"
      }];
      if (this.rendererOptions.renderStyle === "minimal" && !e.isComplete) {
        i.value.classList.add("inline-progress");
        i.elementDisposables.add($i(() => i.value.classList.remove("inline-progress")));
        r.push({
          content: new _c("<span></span>", {
            supportHtml: true
          }),
          kind: "markdownContent"
        });
      } else {
        i.value.classList.remove("inline-progress");
      }
    } else if (rA(e)) {
      if (e.contentReferences.length) {
        r.push({
          kind: "references",
          references: e.contentReferences
        });
      }
      r.push(...ptf(e.response.value));
      if (e.codeCitations.length) {
        r.push({
          kind: "codeCitations",
          citations: e.codeCitations
        });
      }
    }
    th(i.value);
    if (rA(e)) {
      this.renderDetail(e, i);
    }
    const s = !!rA(e) && !!e.errorDetails?.responseIsFiltered;
    const o = [];
    if (!s) {
      let u = false;
      r.forEach((d, m) => {
        const p = {
          element: e,
          contentIndex: m,
          content: r,
          preceedingContentParts: o
        };
        const g = this.renderChatContentPart(d, i, p);
        if (g) {
          if (this.rendererOptions.renderDetectedCommandsWithRequest && !u && Gq(e) && e.agentOrSlashCommandDetected && e.slashCommand && d.kind === "markdownContent") {
            if (g.domNode) {
              g.domNode.style.display = "inline-flex";
            }
            const f = this.instantiationService.createInstance(cxa, e.slashCommand, () => this._onDidClickRerunWithAgentOrCommandDetection.fire({
              sessionId: e.sessionId,
              requestId: e.id
            }));
            i.value.appendChild(f.domNode);
            o.push(f);
            u = true;
          }
          if (g.domNode) {
            i.value.appendChild(g.domNode);
          }
          o.push(g);
        }
      });
    }
    if (i.renderedParts) {
      Bo(i.renderedParts);
    }
    i.renderedParts = o;
    if (!s && Gq(e) && e.variables.length) {
      const u = this.renderAttachments(e.variables, e.contentReferences, i);
      if (u) {
        if (u.domNode) {
          i.value.appendChild(u.domNode);
        }
        i.elementDisposables.add(u);
      }
    }
    if (rA(e) && e.errorDetails?.message) {
      if (e.errorDetails.isQuotaExceeded) {
        const u = this.instantiationService.createInstance(Txa, e, this.renderer);
        i.elementDisposables.add(u);
        i.value.appendChild(u.domNode);
        i.elementDisposables.add(u.onDidChangeHeight(() => this.updateItemHeight(i)));
      } else {
        const u = e.errorDetails.level ?? (e.errorDetails.responseIsFiltered ? Mnt.Info : Mnt.Error);
        const d = this.instantiationService.createInstance(iwu, u, new _c(e.errorDetails.message), this.renderer);
        i.elementDisposables.add(d);
        i.value.appendChild(d.domNode);
      }
    }
    const a = i.rowContainer.offsetHeight;
    const l = !e.currentRenderedHeight || e.currentRenderedHeight !== a;
    e.currentRenderedHeight = a;
    if (l) {
      const u = i.elementDisposables.add(r_(As(i.value), () => {
        e.currentRenderedHeight = i.rowContainer.offsetHeight;
        u.dispose();
        this._onDidChangeItemHeight.fire({
          element: e,
          height: e.currentRenderedHeight
        });
      }));
    }
  }
  updateItemHeight(e) {
    if (!e.currentElement) {
      return;
    }
    const t = Math.max(e.rowContainer.offsetHeight, 1);
    e.currentElement.currentRenderedHeight = t;
    this._onDidChangeItemHeight.fire({
      element: e.currentElement,
      height: t
    });
  }
  doNextProgressiveRender(e, t, i, r) {
    if (!this._isVisible) {
      return true;
    }
    if (e.isCanceled) {
      this.traceLayout("doNextProgressiveRender", `canceled, index=${t}`);
      e.renderData = undefined;
      this.basicRenderElement(e, t, i);
      return true;
    }
    i.rowContainer.classList.toggle("chat-response-loading", true);
    this.traceLayout("doNextProgressiveRender", `START progressive render, index=${t}, renderData=${JSON.stringify(e.renderData)}`);
    const s = this.getNextProgressiveRenderContent(e);
    const o = this.diff(i.renderedParts ?? [], s.content, e);
    if (o.every(u => u === null)) {
      if (s.moreContentAvailable) {
        this.traceLayout("doNextProgressiveRender", "not rendering any new content this tick, but more available");
        return false;
      }
      if (e.isComplete) {
        this.traceLayout("doNextProgressiveRender", `END progressive render, index=${t} and clearing renderData, response is complete`);
        e.renderData = undefined;
        this.basicRenderElement(e, t, i);
        return true;
      }
      this.traceLayout("doNextProgressiveRender", "caught up with the stream- no new content to render");
      if (!i.renderedParts) {
        const u = i.rowContainer.offsetHeight;
        e.currentRenderedHeight = u;
      }
      return true;
    }
    this.traceLayout("doNextProgressiveRender", `doing progressive render, ${o.length} parts to render`);
    this.renderChatContentDiff(o, s.content, e, i);
    const l = i.rowContainer.offsetHeight;
    e.currentRenderedHeight = l;
    if (!r) {
      this._onDidChangeItemHeight.fire({
        element: e,
        height: l
      });
    }
    return false;
  }
  renderChatContentDiff(e, t, i, r) {
    const s = r.renderedParts ?? [];
    r.renderedParts = s;
    e.forEach((o, a) => {
      if (!o) {
        return;
      }
      const l = r.renderedParts?.[a];
      if (l) {
        l.dispose();
      }
      const u = s.slice(0, a);
      const d = {
        element: i,
        content: t,
        preceedingContentParts: u,
        contentIndex: a
      };
      const m = this.renderChatContentPart(o, r, d);
      if (m) {
        s[a] = m;
        try {
          if (l?.domNode) {
            if (m.domNode) {
              l.domNode.replaceWith(m.domNode);
            } else {
              l.domNode.remove();
            }
          } else if (m.domNode) {
            r.value.appendChild(m.domNode);
          }
        } catch (p) {
          this.logService.error("ChatListItemRenderer#renderChatContentDiff: error replacing part", p);
        }
      } else {
        l?.domNode?.remove();
      }
    });
  }
  getNextProgressiveRenderContent(e) {
    const t = this.getDataForProgressiveRender(e);
    const i = ptf(e.response.value);
    this.traceLayout("getNextProgressiveRenderContent", `Want to render ${t.numWordsToRender} at ${t.rate} words/s, counting...`);
    let r = t.numWordsToRender;
    const s = [];
    s.push({
      kind: "references",
      references: e.contentReferences
    });
    let o = false;
    for (let d = 0; d < i.length; d++) {
      const m = i[d];
      if (m.kind === "markdownContent") {
        const p = ocu(m.content.value, r);
        this.traceLayout("getNextProgressiveRenderContent", `  Chunk ${d}: Want to render ${r} words and found ${p.returnedWordCount} words. Total words in chunk: ${p.totalWordCount}`);
        r -= p.returnedWordCount;
        if (p.isFullString) {
          s.push(m);
          for (const g of i.slice(d + 1)) {
            if (g.kind !== "markdownContent") {
              d++;
              s.push(g);
            } else {
              break;
            }
          }
        } else {
          o = true;
          s.push({
            ...m,
            content: new _c(p.value, m.content)
          });
        }
        if (r <= 0) {
          if (i.slice(d + 1).some(g => g.kind === "markdownContent")) {
            o = true;
          }
          break;
        }
      } else {
        s.push(m);
      }
    }
    const a = e.contentUpdateTimings?.lastWordCount ?? 0;
    const l = t.numWordsToRender - r;
    const u = a - l;
    this.traceLayout("getNextProgressiveRenderContent", `Want to render ${t.numWordsToRender} words. Rendering ${l} words. Buffer: ${u} words`);
    if (l > 0 && l !== e.renderData?.renderedWordCount) {
      e.renderData = {
        lastRenderTime: Date.now(),
        renderedWordCount: l,
        renderedParts: s
      };
    }
    if (this.shouldShowWorkingProgress(e, s)) {
      const d = e.model.isPaused.get();
      s.push({
        kind: "working",
        isPaused: d
      });
    }
    return {
      content: s,
      moreContentAvailable: o
    };
  }
  shouldShowWorkingProgress(e, t) {
    if (e.agentOrSlashCommandDetected || this.rendererOptions.renderStyle === "minimal" || e.isComplete || !xgn(this.delegate.currentChatMode(), this.rendererOptions.progressMessageAtBottomOfResponse)) {
      return false;
    }
    if (e.model.isPaused.get()) {
      return true;
    }
    const i = t.at(-1);
    return !i || i.kind === "references" || i.kind === "toolInvocation" && (!!i.isComplete || i.presentation === "hidden") || (i.kind === "textEditGroup" || i.kind === "notebookEditGroup") && !!i.done && !t.some(r => r.kind === "toolInvocation" && !r.isComplete);
  }
  getDataForProgressiveRender(e) {
    const t = e.renderData ?? {
      lastRenderTime: 0,
      renderedWordCount: 0
    };
    const i = this.getProgressiveRenderRate(e);
    return {
      numWordsToRender: t.lastRenderTime === 0 ? 1 : t.renderedWordCount + Math.floor((Date.now() - t.lastRenderTime) / 1000 * i),
      rate: i
    };
  }
  diff(e, t, i) {
    const r = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s];
      const a = e[s];
      if (!a || !a.hasSameContent(o, t.slice(s + 1), i)) {
        r.push(o);
      } else {
        r.push(null);
      }
    }
    return r;
  }
  renderChatContentPart(e, t, i) {
    if (e.kind === "treeData") {
      return this.renderTreeData(e, t, i);
    } else if (e.kind === "progressMessage") {
      return this.instantiationService.createInstance(yEt, e, this.renderer, i, undefined, undefined, undefined);
    } else if (e.kind === "progressTask") {
      return this.renderProgressTask(e, t, i);
    } else if (e.kind === "command") {
      return this.instantiationService.createInstance(uxa, e, i);
    } else if (e.kind === "textEditGroup") {
      return this.renderTextEdit(i, e, t);
    } else if (e.kind === "confirmation") {
      return this.renderConfirmation(i, e, t);
    } else if (e.kind === "warning") {
      return this.instantiationService.createInstance(iwu, Mnt.Warning, e.content, this.renderer);
    } else if (e.kind === "markdownContent") {
      return this.renderMarkdown(e, t, i);
    } else if (e.kind === "references") {
      return this.renderContentReferencesListData(e, undefined, i, t);
    } else if (e.kind === "codeCitations") {
      return this.renderCodeCitations(e, i, t);
    } else if (e.kind === "toolInvocation" || e.kind === "toolInvocationSerialized") {
      return this.renderToolInvocation(e, i, t);
    } else if (e.kind === "working") {
      return this.renderWorkingProgress(e, i);
    } else if (e.kind === "undoStop") {
      return this.renderUndoStop(e);
    } else {
      return this.renderNoContent(r => e.kind === r.kind);
    }
  }
  renderUndoStop(e) {
    return this.renderNoContent(t => t.kind === e.kind && t.id === e.id);
  }
  renderNoContent(e) {
    return {
      dispose: () => {},
      domNode: undefined,
      hasSameContent: e
    };
  }
  renderTreeData(e, t, i) {
    const r = e.treeData;
    const s = i.preceedingContentParts.filter(a => a instanceof RSi).length;
    const o = this.instantiationService.createInstance(RSi, r, i.element, this._treePool, s);
    o.addDisposable(o.onDidChangeHeight(() => {
      this.updateItemHeight(t);
    }));
    if (rA(i.element)) {
      const a = {
        treeDataId: r.uri.toString(),
        treeIndex: s,
        focus() {
          o.domFocus();
        }
      };
      o.addDisposable(o.onDidFocus(() => {
        this.focusedFileTreesByResponseId.set(i.element.id, a.treeIndex);
      }));
      const l = this.fileTreesByResponseId.get(i.element.id) ?? [];
      l.push(a);
      this.fileTreesByResponseId.set(i.element.id, xb(l, u => u.treeDataId));
      o.addDisposable($i(() => this.fileTreesByResponseId.set(i.element.id, l.filter(u => u.treeDataId !== r.uri.toString()))));
    }
    return o;
  }
  renderContentReferencesListData(e, t, i, r) {
    const s = this.instantiationService.createInstance(vEa, e.references, t, i, this._contentReferencesListPool, {
      expandedWhenEmptyResponse: xgn(this.delegate.currentChatMode(), this.rendererOptions.referencesExpandedWhenEmptyResponse)
    });
    s.addDisposable(s.onDidChangeHeight(() => {
      this.updateItemHeight(r);
    }));
    return s;
  }
  renderCodeCitations(e, t, i) {
    return this.instantiationService.createInstance(lxa, e, t);
  }
  getCodeBlockStartIndex(e) {
    return e.preceedingContentParts.reduce((t, i) => t + (i.codeblocks?.length ?? 0), 0);
  }
  handleRenderedCodeblocks(e, t, i) {
    if (!t.addDisposable || t.codeblocksPartId === undefined) {
      return;
    }
    const r = this.codeBlocksByResponseId.get(e.id) ?? [];
    this.codeBlocksByResponseId.set(e.id, r);
    t.addDisposable($i(() => {
      const s = this.codeBlocksByResponseId.get(e.id);
      if (s) {
        t.codeblocks?.forEach((o, a) => {
          if (s[i + a]?.ownerMarkdownPartId === t.codeblocksPartId) {
            delete s[i + a];
          }
        });
      }
    }));
    t.codeblocks?.forEach((s, o) => {
      r[i + o] = s;
      t.addDisposable(Jnh(s.uriPromise, a => {
        if (a) {
          this.codeBlocksByEditorUri.set(a, s);
          t.addDisposable($i(() => {
            if (this.codeBlocksByEditorUri.get(a)?.ownerMarkdownPartId === t.codeblocksPartId) {
              this.codeBlocksByEditorUri.delete(a);
            }
          }));
        }
      }));
    });
  }
  renderToolInvocation(e, t, i) {
    const r = this.getCodeBlockStartIndex(t);
    const s = this.instantiationService.createInstance(Pxa, e, t, this.renderer, this._contentReferencesListPool, this._toolEditorPool, () => this._currentLayoutWidth, this._toolInvocationCodeBlockCollection, r);
    s.addDisposable(s.onDidChangeHeight(() => {
      this.updateItemHeight(i);
    }));
    this.handleRenderedCodeblocks(t.element, s, r);
    return s;
  }
  renderProgressTask(e, t, i) {
    if (!rA(i.element)) {
      return;
    }
    const r = this.instantiationService.createInstance(Ixa, e, this._contentReferencesListPool, this.renderer, i);
    r.addDisposable(r.onDidChangeHeight(() => {
      this.updateItemHeight(t);
    }));
    return r;
  }
  renderWorkingProgress(e, t) {
    return this.instantiationService.createInstance(xxa, e, this.renderer, t);
  }
  renderConfirmation(e, t, i) {
    const r = this.instantiationService.createInstance(dxa, t, e);
    r.addDisposable(r.onDidChangeHeight(() => this.updateItemHeight(i)));
    return r;
  }
  renderAttachments(e, t, i) {
    return this.instantiationService.createInstance(tEa, e, t, undefined);
  }
  renderTextEdit(e, t, i) {
    const r = this.instantiationService.createInstance(Dxa, t, e, this.rendererOptions, this._diffEditorPool, this._currentLayoutWidth);
    r.addDisposable(r.onDidChangeHeight(() => {
      r.layout(this._currentLayoutWidth);
      this.updateItemHeight(i);
    }));
    return r;
  }
  renderMarkdown(e, t, i) {
    const r = i.element;
    const s = rA(r) && (!r.isComplete || r.isCanceled || r.errorDetails?.responseIsFiltered || r.errorDetails?.responseIsIncomplete || !!r.renderData);
    const o = this.getCodeBlockStartIndex(i);
    const a = t.instantiationService.createInstance(abn, e, i, this._editorPool, s, o, this.renderer, this._currentLayoutWidth, this.codeBlockModelCollection, {});
    a.addDisposable(a.onDidChangeHeight(() => {
      a.layout(this._currentLayoutWidth);
      this.updateItemHeight(t);
    }));
    this.handleRenderedCodeblocks(r, a, o);
    return a;
  }
  disposeElement(e, t, i) {
    this.traceLayout("disposeElement", `Disposing element, index=${t}`);
    i.elementDisposables.clear();
    if (i.titleToolbar) {
      i.titleToolbar.context = undefined;
    }
    i.footerToolbar.context = undefined;
  }
  disposeTemplate(e) {
    e.templateDisposables.dispose();
  }
};
NSi = owu = __decorate([__param(5, ln), __param(6, Fn), __param(7, Rr), __param(8, wi), __param(9, bo), __param(10, fr), __param(11, Kc), __param(12, M1), __param(13, ES)], NSi);
qxa = class {
  constructor(e, t) {
    this.defaultElementHeight = e;
    this.logService = t;
  }
  _traceLayout(e, t) {
    if (awu) {
      this.logService.info(`ChatListDelegate#${e}: ${t}`);
    } else {
      this.logService.trace(`ChatListDelegate#${e}: ${t}`);
    }
  }
  getHeight(e) {
    const t = Gq(e) ? "request" : "response";
    const i = ("currentRenderedHeight" in e ? e.currentRenderedHeight : undefined) ?? this.defaultElementHeight;
    this._traceLayout("getHeight", `${t}, height=${i}`);
    return i;
  }
  getTemplateId(e) {
    return NSi.ID;
  }
  hasDynamicHeight(e) {
    return true;
  }
};
qxa = __decorate([__param(1, Rr)], qxa);
cwu = {
  [kU.IncorrectCode]: _(5372, null),
  [kU.DidNotFollowInstructions]: _(5373, null),
  [kU.MissingContext]: _(5374, null),
  [kU.OffensiveOrUnsafe]: _(5375, null),
  [kU.PoorlyWrittenOrFormatted]: _(5376, null),
  [kU.RefusedAValidRequest]: _(5377, null),
  [kU.IncompleteCode]: _(5378, null),
  [kU.WillReportIssue]: _(5379, null),
  [kU.Other]: _(5380, null)
};
MSi = class extends VH {
  constructor(e, t, i, r, s, o) {
    super(e, {
      getActions: () => this.getActions()
    }, o, {
      ...t,
      classNames: Qt.asClassNameArray(Be.thumbsdown)
    });
    this.commandService = i;
    this.issueService = r;
    this.logService = s;
  }
  getActions() {
    return [this.getVoteDownDetailAction(kU.IncorrectCode), this.getVoteDownDetailAction(kU.DidNotFollowInstructions), this.getVoteDownDetailAction(kU.IncompleteCode), this.getVoteDownDetailAction(kU.MissingContext), this.getVoteDownDetailAction(kU.PoorlyWrittenOrFormatted), this.getVoteDownDetailAction(kU.RefusedAValidRequest), this.getVoteDownDetailAction(kU.OffensiveOrUnsafe), this.getVoteDownDetailAction(kU.Other), {
      id: "reportIssue",
      label: cwu[kU.WillReportIssue],
      tooltip: "",
      enabled: true,
      class: undefined,
      run: async e => {
        if (!rA(e)) {
          this.logService.error("ChatVoteDownButton#run: invalid context");
          return;
        }
        await this.commandService.executeCommand(ubn, e, kU.WillReportIssue);
        await this.issueService.openReporter({
          extensionId: e.agent?.extensionId.value
        });
      }
    }];
  }
  render(e) {
    super.render(e);
    this.element?.classList.toggle("checked", this.action.checked);
  }
  getVoteDownDetailAction(e) {
    const t = cwu[e];
    return {
      id: ubn,
      label: t,
      tooltip: "",
      enabled: true,
      checked: this._context.voteDownReason === e,
      class: undefined,
      run: async i => {
        if (!rA(i)) {
          this.logService.error("ChatVoteDownButton#getVoteDownDetailAction: invalid context");
          return;
        }
        await this.commandService.executeCommand(ubn, i, e);
      }
    };
  }
};
MSi = __decorate([__param(2, fr), __param(3, ZMe), __param(4, Rr), __param(5, kc)], MSi);
