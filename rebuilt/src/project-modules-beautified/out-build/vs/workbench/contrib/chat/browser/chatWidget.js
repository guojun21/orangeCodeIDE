"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatWidget.js
// Offset: 32888494 (bundle byte offset)
// Size: 33244 bytes
ri();
fk();
vr();
qi();
U0();
mk();
yn();
tg();
rt();
cu();
zr();
Uc();
Yr();
Js();
Yn();
Oh();
Ht();
dr();
Ei();
si();
pl();
Wt();
ss();
E_();
Rf();
jr();
AF();
kr();
Pa();
Nl();
XP();
Io();
Txf();
hR();
_E();
Hq();
EV();
Ppu();
xS();
hCa();
Wq();
Pxf();
SS();
kk();
yry();
Gfn();
m9f();
duy();
huy();
muy();
puy();
f9f();
Ckt();
Gie = Ct;
uwu = "chat.welcomeMessageContent";
o2e = class extends at {
  static {
    lwu = this;
  }
  static {
    this.CONTRIBS = [];
  }
  get visible() {
    return this._visible;
  }
  set viewModel(e) {
    if (this._viewModel !== e) {
      this.viewModelDisposables.clear();
      this._viewModel = e;
      if (e) {
        this.viewModelDisposables.add(e);
      }
      this._onDidChangeViewModel.fire();
    }
  }
  get viewModel() {
    return this._viewModel;
  }
  get parsedInput() {
    if (this.parsedChatRequest === undefined) {
      if (!this.viewModel) {
        return {
          text: "",
          parts: []
        };
      }
      this.parsedChatRequest = this.instantiationService.createInstance(m1t).parseChatRequest(this.viewModel.sessionId, this.getInput(), this.location, {
        selectedAgent: this._lastSelectedAgent,
        mode: this.input.currentMode
      });
    }
    return this.parsedChatRequest;
  }
  get scopedContextKeyService() {
    return this.contextKeyService;
  }
  get location() {
    return this._location.location;
  }
  get isUnifiedPanelWidget() {
    return this._location.location === zh.Panel && !!this.viewOptions.supportsChangingModes && this.configurationService.getValue(CV.UnifiedChatView);
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I) {
    super();
    this.viewOptions = i;
    this.styles = r;
    this.configurationService = o;
    this.contextKeyService = a;
    this.instantiationService = l;
    this.chatService = u;
    this.chatAgentService = d;
    this.chatWidgetService = m;
    this.contextMenuService = p;
    this.chatAccessibilityService = g;
    this.logService = f;
    this.themeService = A;
    this.chatSlashCommandService = w;
    this.storageService = x;
    this.telemetryService = I;
    this._onDidSubmitAgent = this._register(new Qe());
    this.onDidSubmitAgent = this._onDidSubmitAgent.event;
    this._onDidChangeAgent = this._register(new Qe());
    this.onDidChangeAgent = this._onDidChangeAgent.event;
    this._onDidFocus = this._register(new Qe());
    this.onDidFocus = this._onDidFocus.event;
    this._onDidChangeViewModel = this._register(new Qe());
    this.onDidChangeViewModel = this._onDidChangeViewModel.event;
    this._onDidScroll = this._register(new Qe());
    this.onDidScroll = this._onDidScroll.event;
    this._onDidClear = this._register(new Qe());
    this.onDidClear = this._onDidClear.event;
    this._onDidAcceptInput = this._register(new Qe());
    this.onDidAcceptInput = this._onDidAcceptInput.event;
    this._onDidHide = this._register(new Qe());
    this.onDidHide = this._onDidHide.event;
    this._onDidChangeParsedInput = this._register(new Qe());
    this.onDidChangeParsedInput = this._onDidChangeParsedInput.event;
    this._onWillMaybeChangeHeight = new Qe();
    this.onWillMaybeChangeHeight = this._onWillMaybeChangeHeight.event;
    this._onDidChangeHeight = this._register(new Qe());
    this.onDidChangeHeight = this._onDidChangeHeight.event;
    this._onDidChangeContentHeight = new Qe();
    this.onDidChangeContentHeight = this._onDidChangeContentHeight.event;
    this.contribs = [];
    this.welcomePart = this._register(new uo());
    this.visibleChangeCount = 0;
    this._visible = false;
    this.previousTreeScrollHeight = 0;
    this.scrollLock = true;
    this.viewModelDisposables = this._register(new Ut());
    this._editingSession = Ua(this, undefined);
    this.viewContext = t ?? {};
    const B = tp(this, this.onDidChangeViewModel, () => this.viewModel);
    if (typeof e == "object") {
      this._location = e;
    } else {
      this._location = {
        location: e
      };
    }
    qa.inChatSession.bindTo(a).set(true);
    qa.location.bindTo(a).set(this._location.location);
    qa.inQuickChat.bindTo(a).set(fuy(this));
    qa.inUnifiedChat.bindTo(a).set(this._location.location === zh.Panel && !!this.viewOptions.supportsChangingModes && this.configurationService.getValue(CV.UnifiedChatView));
    this.agentInInput = qa.inputHasAgent.bindTo(a);
    this.requestInProgress = qa.requestInProgress.bindTo(a);
    this.isRequestPaused = qa.isRequestPaused.bindTo(a);
    this.canRequestBePaused = qa.canRequestBePaused.bindTo(a);
    this._register(eM(Xva, a, N => {
      const M = this._editingSession.read(N);
      if (M) {
        return M.entries.read(N).filter(H => H.state.read(N) !== 0).map(H => H.entryId);
      } else {
        return undefined;
      }
    }));
    this._register(eM(iMe, a, N => (this._editingSession.read(N)?.entries.read(N) ?? []).filter(H => H.state.read(N) === 0).length > 0));
    this._register(eM(tAa, a, N => {
      const M = this._editingSession.read(N);
      if (M) {
        return M.entries.read(N).length > 0;
      } else {
        return false;
      }
    }));
    this._register(eM(Xau, a, N => this._editingSession.read(N) !== null));
    this._register(eM(qa.chatEditingCanUndo, a, N => this._editingSession.read(N)?.canUndo.read(N) || false));
    this._register(eM(qa.chatEditingCanRedo, a, N => this._editingSession.read(N)?.canRedo.read(N) || false));
    this._register(eM(fyi, a, N => {
      const M = B.read(N)?.model;
      if (!this._editingSession.read(N) || !M) {
        return false;
      }
      const $ = tp(this, M.onDidChange, () => M.getRequests().at(-1)?.response).read(N);
      return $?.result?.errorDetails && !$?.result?.errorDetails.responseIsIncomplete;
    }));
    this._codeBlockModelCollection = this._register(l.createInstance(T_i, undefined));
    this._register(this.configurationService.onDidChangeConfiguration(N => {
      if (N.affectsConfiguration("chat.renderRelatedFiles")) {
        this.renderChatEditingSessionState();
      }
    }));
    this._register(M0((N, M) => {
      const O = B.read(N);
      const H = C.editingSessionsObs.read(N).find(W => W.chatSessionId === O?.sessionId);
      this._editingSession.set(undefined, undefined);
      this.renderChatEditingSessionState();
      if (H) {
        this._editingSession.set(H, undefined);
        M.add(H.onDidChange(() => {
          this.renderChatEditingSessionState();
        }));
        M.add(H.onDidDispose(() => {
          this._editingSession.set(undefined, undefined);
          this.renderChatEditingSessionState();
        }));
        M.add(this.onDidChangeParsedInput(() => {
          this.renderChatEditingSessionState();
        }));
        M.add(this.inputEditor.onDidChangeModelContent(() => {
          if (this.getInput() === "") {
            this.refreshParsedInput();
            this.renderChatEditingSessionState();
          }
        }));
        this.renderChatEditingSessionState();
      }
    }));
    this._register(s.registerCodeEditorOpenHandler(async (N, M, O) => {
      const $ = N.resource;
      if ($.scheme !== _n.vscodeChatCodeBlock) {
        return null;
      }
      const H = $.path.split("/").at(1);
      if (!H) {
        return null;
      }
      const W = this.viewModel?.getItems().find(z => z.id === H);
      if (!W) {
        return null;
      }
      this.reveal(W);
      await Af(0);
      for (const z of this.renderer.editorsInUse()) {
        if (Iu.isEqual(z.uri, $, true)) {
          const Y = z.editor;
          let j = 0;
          const X = Y.getDomNode();
          if (X) {
            const ee = _oe(X, "monaco-list-row");
            if (ee) {
              j = x5e(X).top - x5e(ee).top;
            }
          }
          if (N.options?.selection) {
            const ee = Y.getTopForPosition(N.options.selection.startLineNumber, N.options.selection.startColumn);
            j += ee;
            Y.focus();
            Y.setSelection({
              startLineNumber: N.options.selection.startLineNumber,
              startColumn: N.options.selection.startColumn,
              endLineNumber: N.options.selection.endLineNumber ?? N.options.selection.startLineNumber,
              endColumn: N.options.selection.endColumn ?? N.options.selection.startColumn
            });
          }
          this.reveal(W, j);
          return Y;
        }
      }
      return null;
    }));
    const R = x.getObject(`${uwu}.${this.location}`, -1);
    if (Q9A(R)) {
      this.persistedWelcomeMessage = R;
    }
    this._register(this.onDidChangeParsedInput(() => this.updateChatInputContext()));
  }
  set lastSelectedAgent(e) {
    this.parsedChatRequest = undefined;
    this._lastSelectedAgent = e;
    this._onDidChangeParsedInput.fire();
  }
  get lastSelectedAgent() {
    return this._lastSelectedAgent;
  }
  get supportsFileReferences() {
    return !!this.viewOptions.supportsFileReferences;
  }
  get input() {
    return this.inputPart;
  }
  get inputEditor() {
    return this.inputPart.inputEditor;
  }
  get inputUri() {
    return this.inputPart.inputUri;
  }
  get contentHeight() {
    return this.inputPart.contentHeight + this.tree.contentHeight;
  }
  get attachmentModel() {
    return this.inputPart.attachmentModel;
  }
  render(e) {
    const t = "viewId" in this.viewContext ? this.viewContext.viewId : undefined;
    this.editorOptions = this._register(this.instantiationService.createInstance(Jxa, t, this.styles.listForeground, this.styles.inputEditorBackground, this.styles.resultEditorBackground));
    const i = this.viewOptions.renderInputOnTop ?? false;
    const r = this.viewOptions.renderFollowups ?? !i;
    const s = this.viewOptions.renderStyle;
    this.container = Rt(e, Gie(".interactive-session"));
    this.welcomeMessageContainer = Rt(this.container, Gie(".chat-welcome-view-container", {
      style: "display: none"
    }));
    if (i) {
      this.createInput(this.container, {
        renderFollowups: r,
        renderStyle: s
      });
      this.listContainer = Rt(this.container, Gie(".interactive-list"));
    } else {
      this.listContainer = Rt(this.container, Gie(".interactive-list"));
      this.createInput(this.container, {
        renderFollowups: r,
        renderStyle: s
      });
    }
    this.renderWelcomeViewContentIfNeeded();
    this.createList(this.listContainer, {
      ...this.viewOptions.rendererOptions,
      renderStyle: s
    });
    if (this.viewOptions.renderPastChats) {
      this.renderPastChats();
    }
    const o = this._register(new pw(this.listContainer, {
      supportIcons: true,
      buttonBackground: zo(pft),
      buttonForeground: zo(M4o),
      buttonHoverBackground: zo(x1c)
    }));
    o.element.classList.add("chat-scroll-down");
    o.label = `$(${Be.chevronDown.id})`;
    o.setTitle(_(5524, null));
    this._register(o.onDidClick(() => {
      this.scrollLock = true;
      this.scrollToEnd();
    }));
    this._register(this.editorOptions.onDidChange(() => this.onDidStyleChange()));
    this.onDidStyleChange();
    if (this.viewModel) {
      this.onDidChangeItems();
      this.scrollToEnd();
    }
    this.contribs = lwu.CONTRIBS.map(a => {
      try {
        return this._register(this.instantiationService.createInstance(a, this));
      } catch (l) {
        this.logService.error("Failed to instantiate chat widget contrib", Jw(l));
        return;
      }
    }).filter(Ch);
    this._register(this.chatWidgetService.register(this));
  }
  scrollToEnd() {
    if (this.lastItem) {
      const e = Math.max(this.lastItem.currentRenderedHeight ?? 0, 1000000);
      this.tree.reveal(this.lastItem, e);
    }
  }
  getContrib(e) {
    return this.contribs.find(t => t.id === e);
  }
  focusInput() {
    this.inputPart.focus();
    this._onDidFocus.fire();
  }
  hasInputFocus() {
    return this.inputPart.hasFocus();
  }
  refreshParsedInput() {
    if (this.viewModel) {
      this.parsedChatRequest = this.instantiationService.createInstance(m1t).parseChatRequest(this.viewModel.sessionId, this.getInput(), this.location, {
        selectedAgent: this._lastSelectedAgent,
        mode: this.input.currentMode
      });
      this._onDidChangeParsedInput.fire();
    }
  }
  getSibling(e, t) {
    if (!rA(e)) {
      return;
    }
    const i = this.viewModel?.getItems();
    if (!i) {
      return;
    }
    const r = i.filter(a => rA(a));
    const s = r.indexOf(e);
    if (s === undefined) {
      return;
    }
    const o = t === "next" ? s + 1 : s - 1;
    if (!(o < 0) && !(o > r.length - 1)) {
      return r[o];
    }
  }
  clear() {
    if (this._dynamicMessageLayoutData) {
      this._dynamicMessageLayoutData.enabled = true;
    }
    this._onDidClear.fire();
  }
  onDidChangeItems(e) {
    if (this._visible || !this.viewModel) {
      const t = (this.viewModel?.getItems() ?? []).map(i => ({
        element: i,
        collapsed: false,
        collapsible: false
      }));
      this.renderWelcomeViewContentIfNeeded();
      this._onWillMaybeChangeHeight.fire();
      this.lastItem = t.at(-1)?.element;
      qa.lastItemId.bindTo(this.contextKeyService).set(this.lastItem ? [this.lastItem.id] : []);
      this.tree.setChildren(null, t, {
        diffIdentityProvider: {
          getId: i => `${i.dataId}${Gq(i)}${rA(i) && i.renderData ? `_${this.visibleChangeCount}
        ` : ""}${rA(i) ? `_${i.contentReferences.length}` : ""}_${i.shouldBeRemovedOnSend ? `${i.shouldBeRemovedOnSend.afterUndoStop || "1"}
        ` : "0"}${Gq(i) && i.contentReferences ? `_${i.contentReferences?.length}` : ""}${rA(i) && i.model.isPaused.get() ? "_paused" : ""}`
        }
      });
      if (!e && this._dynamicMessageLayoutData) {
        this.layoutDynamicChatTreeItemMode();
      }
      if (this.lastItem && rA(this.lastItem) && this.lastItem.isComplete) {
        this.renderFollowups(this.lastItem.replyFollowups, this.lastItem);
      } else if (!t.length && this.viewModel) {
        this.renderSampleQuestions();
      } else {
        this.renderFollowups(undefined);
      }
    }
  }
  renderWelcomeViewContentIfNeeded() {
    if (this.viewOptions.renderStyle === "compact" || this.viewOptions.renderStyle === "minimal") {
      return;
    }
    const e = this.viewModel?.getItems().length ?? 0;
    const i = this.chatAgentService.getDefaultAgent(this.location, this.input.currentMode)?.metadata.welcomeMessageContent ?? this.persistedWelcomeMessage;
    if (i && !e && (this.welcomeMessageContainer.children.length === 0 || this.chatService.unifiedViewEnabled)) {
      th(this.welcomeMessageContainer);
      const r = this.viewOptions.supportsAdditionalParticipants ? new _c(_(5525, null, "$(attach)", "#", "$(mention)", "/"), {
        supportThemeIcons: true
      }) : new _c(_(5526, null, "$(attach)", "#"), {
        supportThemeIcons: true
      });
      this.welcomePart.value = this.instantiationService.createInstance(FSi, {
        ...i,
        tips: r
      }, {
        location: this.location,
        isWidgetAgentWelcomeViewContent: this.input?.currentMode === iA.Agent
      });
      Rt(this.welcomeMessageContainer, this.welcomePart.value.element);
    }
    if (this.viewModel) {
      UBe(e === 0, this.welcomeMessageContainer);
      UBe(e !== 0, this.listContainer);
    }
  }
  async renderChatEditingSessionState() {
    if (this.inputPart) {
      this.inputPart.renderChatEditingSessionState(this._editingSession.get() ?? null);
      if (this.bodyDimension) {
        this.layout(this.bodyDimension.height, this.bodyDimension.width);
      }
    }
  }
  renderSampleQuestions() {
    if (this.viewModel?.getItems().length === 0) {
      this.renderFollowups(this.input.currentMode === iA.Ask ? this.viewModel.model.sampleQuestions : undefined);
    }
  }
  async renderFollowups(e, t) {
    this.inputPart.renderFollowups(e, t);
    if (this.bodyDimension) {
      this.layout(this.bodyDimension.height, this.bodyDimension.width);
    }
  }
  renderPastChats() {
    if (!this.viewOptions.renderPastChats) {
      this.logService.trace("ChatWidget: renderPastChats disabled via viewOptions");
      return;
    }
    this.logService.trace("ChatWidget: Rendering past chats section");
    const e = Rt(this.container, Gie(".chat-past-chats-container"));
    this.createPastChatsSection(e);
  }
  async createPastChatsSection(e) {
    try {
      const t = await this.chatService.getHistory();
      const i = this.viewModel?.sessionId;
      this.logService.trace(`ChatWidget: Found ${t.length} total chat sessions, current session: ${i}`);
      const r = t.filter(d => d.sessionId !== i && !d.isActive).sort((d, m) => (m.lastMessageDate ?? 0) - (d.lastMessageDate ?? 0)).slice(0, 3);
      this.logService.trace(`ChatWidget: Found ${r.length} past chats to display`);
      if (r.length === 0) {
        this.logService.trace("ChatWidget: No past chats to display, hiding section");
        return;
      }
      const s = Rt(e, Gie(".past-chats-header"));
      s.style.cssText = `
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0.2rem 0.4rem;
				font-size: 0.75rem;
				line-height: 1.2;
				margin-bottom: 0.15rem;
				opacity: 0.8;
				gap: 0.5rem;
				cursor: pointer;
			`;
      const o = Rt(s, Gie(".title-section"));
      o.style.cssText = `
				display: flex;
				align-items: center;
			`;
      const a = Rt(o, Gie(".title-text"));
      a.textContent = "Past Chats";
      a.style.cssText = `
              color: var(--cursor-text-tertiary);
				font-weight: 400;
				flex-shrink: 0;
				margin-right: 0.25rem;
			`;
      const l = Rt(o, Gie(".chevron"));
      l.textContent = "⌄";
      l.style.cssText = `
              color: var(--cursor-text-tertiary);
				font-size: inherit;
			`;
      const u = Rt(e, Gie(".past-chats-list"));
      u.style.cssText = `
				display: flex;
				flex-direction: column;
				gap: 0.15rem;
			`;
      r.forEach(d => {
        const m = Rt(u, Gie(".past-chat-item"));
        m.style.cssText = `
					display: flex;
					outline: none;
					align-items: center;
					padding: 0.2rem 0.4rem;
					border-radius: 0.25rem;
					cursor: pointer;
					justify-content: space-between;
					min-width: 0;
					line-height: 1.2;
					border-radius: 3px;
					transition: background-color 0.1s ease;
					color: var(--cursor-text-secondary);
				`;
        m.addEventListener("mouseenter", () => {
          m.style.backgroundColor = "var(--vscode-list-hoverBackground)";
        });
        m.addEventListener("mouseleave", () => {
          m.style.backgroundColor = "";
        });
        const p = Rt(m, Gie(".chat-title"));
        p.textContent = d.title || "New Chat";
        p.style.cssText = `
					flex-grow: 1;
					flex-shrink: 1;
					min-width: 0;
					font-size: 0.75rem;
					color: var(--cursor-text-secondary);
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				`;
        const g = Rt(m, Gie(".chat-time"));
        const f = this.formatTimeAgo(d.lastMessageDate);
        g.textContent = f;
        g.style.cssText = `
					font-size: 0.75rem;
					color: var(--cursor-text-tertiary);
					margin-left: 0.6rem;
					flex-shrink: 0;
				`;
        m.addEventListener("focus", () => {
          p.style.color = "var(--cursor-text-primary)";
        });
        m.addEventListener("blur", () => {
          p.style.color = "var(--cursor-text-secondary)";
        });
        m.addEventListener("click", () => {
          this.openPastChat(d.sessionId);
        });
      });
      if (t.length > 3) {
        const d = Rt(s, Gie(".view-all-link"));
        d.textContent = "View All";
        d.style.cssText = `
					display: flex;
					align-items: center;
					flex-shrink: 0;
					cursor: pointer;
                  color: var(--cursor-text-tertiary);
					margin-left: 0.5rem;
					text-decoration: none;
				`;
        d.addEventListener("click", m => {
          m.stopPropagation();
          this.contextMenuService.showContextMenu({
            menuId: st.ChatContext,
            getAnchor: () => ({
              x: 0,
              y: 0
            })
          });
        });
        d.addEventListener("mouseenter", () => {
          d.style.textDecoration = "underline";
        });
        d.addEventListener("mouseleave", () => {
          d.style.textDecoration = "none";
        });
      }
    } catch (t) {
      this.logService.error("Failed to render past chats:", t);
    }
  }
  formatTimeAgo(e) {
    if (!e) {
      return "";
    }
    const i = Date.now() - e;
    const r = Math.floor(i / 86400000);
    if (r === 0) {
      return "Today";
    } else if (r === 1) {
      return "Yesterday";
    } else if (r < 7) {
      return `${r} days ago`;
    } else if (r < 30) {
      return `${Math.floor(r / 7)} weeks ago`;
    } else {
      return `${Math.floor(r / 30)} months ago`;
    }
  }
  async openPastChat(e) {
    try {
      if (await this.chatService.getOrRestoreSession(e)) {
        await this.instantiationService.invokeFunction(async i => {
          const r = i.get(yi);
          const s = NEe.getNewEditorUri();
          const o = {
            pinned: true,
            target: {
              sessionId: e
            }
          };
          await r.openEditor({
            resource: s,
            options: o
          });
        });
      }
    } catch (t) {
      this.logService.error("Failed to open past chat:", t);
    }
  }
  setVisible(e) {
    const t = this._visible;
    this._visible = e;
    this.visibleChangeCount++;
    this.renderer.setVisible(e);
    this.input.setVisible(e);
    if (e) {
      this._register(nC(() => {
        if (this._visible) {
          this.onDidChangeItems(true);
        }
      }, 0));
    } else if (t) {
      this._onDidHide.fire();
    }
  }
  createList(e, t) {
    const i = this._register(this.instantiationService.createChild(new EA([wi, this.contextKeyService])));
    const r = i.createInstance(qxa, this.viewOptions.defaultElementHeight ?? 200);
    const s = {
      getListLength: () => this.tree.getNode(null).visibleChildrenCount,
      onDidScroll: this.onDidScroll,
      container: e,
      currentChatMode: () => this.input.currentMode
    };
    const o = document.createElement("div");
    o.classList.add("chat-overflow-widget-container", "monaco-editor");
    e.append(o);
    this.renderer = this._register(i.createInstance(NSi, this.editorOptions, t, s, this._codeBlockModelCollection, o));
    this._register(this.renderer.onDidClickFollowup(a => {
      this.acceptInput(a.message);
    }));
    this._register(this.renderer.onDidClickRerunWithAgentOrCommandDetection(a => {
      const l = this.chatService.getSession(a.sessionId)?.getRequests().find(u => u.id === a.requestId);
      if (l) {
        const u = {
          noCommandDetection: true,
          attempt: l.attempt + 1,
          location: this.location,
          userSelectedModelId: this.input.currentLanguageModel,
          hasInstructionAttachments: this.input.hasInstructionAttachments,
          mode: this.input.currentMode
        };
        this.chatService.resendRequest(l, u).catch(d => this.logService.error("FAILED to rerun request", d));
      }
    }));
    this.tree = this._register(i.createInstance(H1e, "Chat", e, r, [this.renderer], {
      identityProvider: {
        getId: a => a.id
      },
      horizontalScrolling: false,
      alwaysConsumeMouseWheel: false,
      supportDynamicHeights: true,
      hideTwistiesOfChildlessElements: true,
      accessibilityProvider: this.instantiationService.createInstance(mCa),
      keyboardNavigationLabelProvider: {
        getKeyboardNavigationLabel: a => Gq(a) ? a.message : rA(a) ? a.response.value : ""
      },
      setRowLineHeight: false,
      filter: this.viewOptions.filter ? {
        filter: this.viewOptions.filter.bind(this.viewOptions)
      } : undefined,
      scrollToActiveElement: true,
      overrideStyles: {
        listFocusBackground: this.styles.listBackground,
        listInactiveFocusBackground: this.styles.listBackground,
        listActiveSelectionBackground: this.styles.listBackground,
        listFocusAndSelectionBackground: this.styles.listBackground,
        listInactiveSelectionBackground: this.styles.listBackground,
        listHoverBackground: this.styles.listBackground,
        listBackground: this.styles.listBackground,
        listFocusForeground: this.styles.listForeground,
        listHoverForeground: this.styles.listForeground,
        listInactiveFocusForeground: this.styles.listForeground,
        listInactiveSelectionForeground: this.styles.listForeground,
        listActiveSelectionForeground: this.styles.listForeground,
        listFocusAndSelectionForeground: this.styles.listForeground,
        listActiveSelectionIconForeground: undefined,
        listInactiveSelectionIconForeground: undefined
      }
    }));
    this._register(this.tree.onContextMenu(a => this.onContextMenu(a)));
    this._register(this.tree.onDidChangeContentHeight(() => {
      this.onDidChangeTreeContentHeight();
    }));
    this._register(this.renderer.onDidChangeItemHeight(a => {
      this.tree.updateElementHeight(a.element, a.height);
    }));
    this._register(this.tree.onDidFocus(() => {
      this._onDidFocus.fire();
    }));
    this._register(this.tree.onDidScroll(() => {
      this._onDidScroll.fire();
      const a = this.tree.scrollTop >= this.tree.scrollHeight - this.tree.renderHeight - 2;
      this.container.classList.toggle("show-scroll-down", !a && !this.scrollLock);
    }));
  }
  onContextMenu(e) {
    e.browserEvent.preventDefault();
    e.browserEvent.stopPropagation();
    const t = e.element;
    const i = this.contextKeyService.createOverlay([[qa.responseIsFiltered.key, rA(t) && !!t.errorDetails?.responseIsFiltered]]);
    this.contextMenuService.showContextMenu({
      menuId: st.ChatContext,
      menuActionOptions: {
        shouldForwardArgs: true
      },
      contextKeyService: i,
      getAnchor: () => e.anchor,
      getActionsContext: () => t
    });
  }
  onDidChangeTreeContentHeight() {
    if (this.tree.scrollHeight !== this.previousTreeScrollHeight) {
      const e = this.viewModel?.getItems().at(-1);
      if ((!rA(e) || !e.renderData || this.scrollLock) && this.tree.scrollTop + this.tree.renderHeight >= this.previousTreeScrollHeight - 2) {
        r_(As(this.listContainer), () => {
          this.scrollToEnd();
        }, 0);
      }
    }
    this.previousTreeScrollHeight = this.tree.scrollHeight;
    this._onDidChangeContentHeight.fire();
  }
  getWidgetViewKindTag() {
    if (this.viewContext) {
      if ("viewId" in this.viewContext) {
        return "view";
      } else {
        return "quick";
      }
    } else {
      return "editor";
    }
  }
  createInput(e, t) {
    this.inputPart = this._register(this.instantiationService.createInstance(QJ, this.location, {
      renderFollowups: t?.renderFollowups ?? true,
      renderStyle: t?.renderStyle === "minimal" ? "compact" : t?.renderStyle,
      menus: {
        executeToolbar: st.ChatExecute,
        ...this.viewOptions.menus
      },
      editorOverflowWidgetsDomNode: this.viewOptions.editorOverflowWidgetsDomNode,
      enableImplicitContext: this.viewOptions.enableImplicitContext,
      renderWorkingSet: this.viewOptions.enableWorkingSet === "explicit",
      supportsChangingModes: this.viewOptions.supportsChangingModes,
      widgetViewKindTag: this.getWidgetViewKindTag()
    }, this.styles, () => this.collectInputState()));
    this.inputPart.render(e, "", this);
    this._register(this.inputPart.onDidLoadInputState(i => {
      this.contribs.forEach(r => {
        if (r.setInputState) {
          const s = (typeof i == "object" && i?.[r.id]) ?? {};
          r.setInputState(s);
        }
      });
      this.refreshParsedInput();
    }));
    this._register(this.inputPart.onDidFocus(() => this._onDidFocus.fire()));
    this._register(this.inputPart.onDidAcceptFollowup(i => {
      if (!this.viewModel) {
        return;
      }
      let r = "";
      if (i.followup.agentId && i.followup.agentId !== this.chatAgentService.getDefaultAgent(this.location, this.input.currentMode)?.id) {
        const s = this.chatAgentService.getAgent(i.followup.agentId);
        if (!s) {
          return;
        }
        this.lastSelectedAgent = s;
        r = `${Jq}${s.name} `;
        if (i.followup.subCommand) {
          r += `${EU}${i.followup.subCommand} `;
        }
      } else if (!i.followup.agentId && i.followup.subCommand && this.chatSlashCommandService.hasCommand(i.followup.subCommand)) {
        r = `${EU}${i.followup.subCommand} `;
      }
      r += i.followup.message;
      this.acceptInput(r);
      if (i.response) {
        this.chatService.notifyUserAction({
          sessionId: this.viewModel.sessionId,
          requestId: i.response.requestId,
          agentId: i.response.agent?.id,
          command: i.response.slashCommand?.name,
          result: i.response.result,
          action: {
            kind: "followUp",
            followup: i.followup
          }
        });
      }
    }));
    this._register(this.inputPart.onDidChangeHeight(() => {
      if (this.bodyDimension) {
        this.layout(this.bodyDimension.height, this.bodyDimension.width);
      }
      this._onDidChangeContentHeight.fire();
    }));
    this._register(this.inputPart.attachmentModel.onDidChangeContext(() => {
      if (this._editingSession) {
        this.renderChatEditingSessionState();
      }
    }));
    this._register(this.inputEditor.onDidChangeModelContent(() => {
      this.parsedChatRequest = undefined;
      this.updateChatInputContext();
    }));
    this._register(this.chatAgentService.onDidChangeAgents(() => {
      this.parsedChatRequest = undefined;
      this.renderWelcomeViewContentIfNeeded();
    }));
    this._register(this.input.onDidChangeCurrentChatMode(() => {
      this.renderSampleQuestions();
      this.renderWelcomeViewContentIfNeeded();
      this.refreshParsedInput();
    }));
  }
  onDidStyleChange() {
    this.container.style.setProperty("--vscode-interactive-result-editor-background-color", this.editorOptions.configuration.resultEditor.backgroundColor?.toString() ?? "");
    this.container.style.setProperty("--vscode-interactive-session-foreground", this.editorOptions.configuration.foreground?.toString() ?? "");
    this.container.style.setProperty("--vscode-chat-list-background", this.themeService.getColorTheme().getColor(this.styles.listBackground)?.toString() ?? "");
  }
  togglePaused() {
    this.viewModel?.model.toggleLastRequestPaused();
    this.onDidChangeItems();
  }
  setModel(e, t) {
    if (!this.container) {
      throw new Error("Call render() before setModel()");
    }
    if (e.sessionId !== this.viewModel?.sessionId) {
      this._codeBlockModelCollection.clear();
      this.container.setAttribute("data-session-id", e.sessionId);
      this.viewModel = this.instantiationService.createInstance(rAa, e, this._codeBlockModelCollection);
      this.viewModelDisposables.add(In.accumulate(this.viewModel.onDidChange, 0)(i => {
        if (this.viewModel) {
          this.requestInProgress.set(this.viewModel.requestInProgress);
          this.isRequestPaused.set(this.viewModel.requestPausibility === 1);
          this.canRequestBePaused.set(this.viewModel.requestPausibility !== 0);
          this.onDidChangeItems();
          if (i.some(r => r?.kind === "addRequest") && this.visible) {
            this.scrollToEnd();
          }
          if (this._editingSession) {
            this.renderChatEditingSessionState();
          }
        }
      }));
      this.viewModelDisposables.add(this.viewModel.onDidDisposeModel(() => {
        this.inputPart.saveState();
        this.viewModel = undefined;
        this.onDidChangeItems();
      }));
      this.inputPart.initForNewChatModel(t, e.getRequests().length === 0);
      this.contribs.forEach(i => {
        if (i.setInputState && t.inputState?.[i.id]) {
          i.setInputState(t.inputState?.[i.id]);
        }
      });
      this.refreshParsedInput();
      this.viewModelDisposables.add(e.onDidChange(i => {
        if (i.kind === "setAgent") {
          this._onDidChangeAgent.fire({
            agent: i.agent,
            slashCommand: i.command
          });
        }
      }));
      if (this.tree && this.visible) {
        this.onDidChangeItems();
        this.scrollToEnd();
      }
      this.updateChatInputContext();
    }
  }
  getFocus() {
    return this.tree.getFocus()[0] ?? undefined;
  }
  reveal(e, t) {
    this.tree.reveal(e, t);
  }
  focus(e) {
    const i = this.tree.getNode(null).children.find(r => r.element?.id === e.id);
    if (i) {
      this.tree.setFocus([i.element]);
      this.tree.domFocus();
    }
  }
  refilter() {
    this.tree.refilter();
  }
  setInputPlaceholder(e) {
    this.viewModel?.setInputPlaceholder(e);
  }
  resetInputPlaceholder() {
    this.viewModel?.resetInputPlaceholder();
  }
  setInput(e = "") {
    this.inputPart.setValue(e, false);
    this.refreshParsedInput();
  }
  getInput() {
    return this.inputPart.inputEditor.getValue();
  }
  logInputHistory() {
    this.inputPart.logInputHistory();
  }
  async acceptInput(e, t) {
    return this._acceptInput(e ? {
      query: e
    } : undefined, t);
  }
  async rerunLastRequest() {
    if (!this.viewModel) {
      return;
    }
    const e = this.viewModel.sessionId;
    const t = this.chatService.getSession(e)?.getRequests().at(-1);
    if (!t) {
      return;
    }
    const i = {
      attempt: t.attempt + 1,
      location: this.location,
      userSelectedModelId: this.input.currentLanguageModel
    };
    return await this.chatService.resendRequest(t, i);
  }
  collectInputState() {
    const e = {};
    this.contribs.forEach(t => {
      if (t.getInputState) {
        e[t.id] = t.getInputState();
      }
    });
    return e;
  }
  async _acceptInput(e, t) {
    if ((!this.viewModel?.requestInProgress || this.viewModel.requestPausibility === 1) && this.viewModel) {
      this._onDidAcceptInput.fire();
      this.scrollLock = !!xgn(this.input.currentMode, this.viewOptions.autoScroll);
      const i = this.getInput();
      const r = this.chatAccessibilityService.acceptRequest();
      const s = e ? e.query : i;
      const o = !e;
      const {
        promptInstructions: a
      } = this.inputPart.attachmentModel;
      if (a.featureEnabled) {
        const m = performance.now();
        await a.allSettled();
        this.logService.trace(`[\u23F1] instructions tree resolved in ${performance.now() - m}ms`);
      }
      let u = this.inputPart.getAttachedAndImplicitContext(this.viewModel.sessionId);
      if (this.viewOptions.enableWorkingSet !== undefined && this.input.currentMode !== iA.Ask) {
        const m = new lT();
        const p = u;
        const g = this.viewModel.model.getRequests();
        for (const f of g) {
          for (const A of f.variableData.variables) {
            if (je.isUri(A.value) && A.isFile) {
              const w = A.value;
              if (!m.has(w)) {
                p.push(A);
                m.add(A.value);
              }
            }
          }
        }
        u = p;
        this.telemetryService.publicLog2("chatEditing/workingSetSize", {
          originalSize: m.size,
          actualSize: m.size
        });
      }
      this.chatService.cancelCurrentRequestForSession(this.viewModel.sessionId);
      this.input.validateCurrentMode();
      const d = await this.chatService.sendRequest(this.viewModel.sessionId, s, {
        mode: this.inputPart.currentMode,
        userSelectedModelId: this.inputPart.currentLanguageModel,
        location: this.location,
        locationData: this._location.resolveData?.(),
        parserContext: {
          selectedAgent: this._lastSelectedAgent,
          mode: this.inputPart.currentMode
        },
        attachedContext: u,
        noCommandDetection: t?.noCommandDetection,
        hasInstructionAttachments: this.inputPart.hasInstructionAttachments,
        userSelectedTools: this.input.currentMode === iA.Agent ? this.inputPart.selectedToolsModel.tools.get().map(m => m.id) : undefined
      });
      if (d) {
        this.inputPart.acceptInput(o);
        this._onDidSubmitAgent.fire({
          agent: d.agent,
          slashCommand: d.slashCommand
        });
        d.responseCompletePromise.then(() => {
          const m = this.viewModel?.getItems().filter(rA);
          const p = m?.[m.length - 1];
          this.chatAccessibilityService.acceptResponse(p, r, t?.isVoiceInput);
          if (p?.result?.nextQuestion) {
            const {
              prompt: g,
              participant: f,
              command: A
            } = p.result.nextQuestion;
            const w = mtf(this.chatAgentService, this.location, g, f, A);
            if (w) {
              this.input.setValue(w, false);
            }
          }
        });
        return d.responseCreatedPromise;
      }
    }
  }
  getCodeBlockInfosForResponse(e) {
    return this.renderer.getCodeBlockInfosForResponse(e);
  }
  getCodeBlockInfoForEditor(e) {
    return this.renderer.getCodeBlockInfoForEditor(e);
  }
  getFileTreeInfosForResponse(e) {
    return this.renderer.getFileTreeInfosForResponse(e);
  }
  getLastFocusedFileTreeForResponse(e) {
    return this.renderer.getLastFocusedFileTreeForResponse(e);
  }
  focusLastMessage() {
    if (!this.viewModel) {
      return;
    }
    const e = this.tree.getNode(null).children;
    const t = e[e.length - 1];
    if (t) {
      this.tree.setFocus([t.element]);
      this.tree.domFocus();
    }
  }
  layout(e, t) {
    t = Math.min(t, 850);
    this.bodyDimension = new Lu(t, e);
    const i = this._dynamicMessageLayoutData?.enabled ? this._dynamicMessageLayoutData.maxHeight : e;
    this.inputPart.layout(i, t);
    const r = this.inputPart.inputPartHeight;
    const s = this.tree.scrollTop + this.tree.renderHeight >= this.tree.scrollHeight - 2;
    const o = Math.max(0, e - r);
    if (this.viewOptions.renderStyle === "compact" || this.viewOptions.renderStyle === "minimal") {
      this.listContainer.style.removeProperty("--chat-current-response-min-height");
    } else {
      this.listContainer.style.setProperty("--chat-current-response-min-height", o * 0.75 + "px");
    }
    this.tree.layout(o, t);
    this.tree.getHTMLElement().style.height = `${o}px`;
    let a = 0;
    if (this.viewOptions.renderFollowups) {
      a = Math.max(100 - this.inputPart.followupsHeight, 0);
    } else if (this.viewOptions.enableWorkingSet) {
      a = Math.max(100 - this.inputPart.editSessionWidgetHeight, 0);
    }
    this.welcomeMessageContainer.style.height = `${o - a}px`;
    this.welcomeMessageContainer.style.paddingBottom = `${a}px`;
    this.renderer.layout(t);
    const l = this.viewModel?.getItems().at(-1);
    const u = rA(l) && l.renderData;
    if (s && (!u || xgn(this.input.currentMode, this.viewOptions.autoScroll))) {
      this.scrollToEnd();
    }
    this.listContainer.style.height = `${o}px`;
    this._onDidChangeHeight.fire(e);
  }
  setDynamicChatTreeItemLayout(e, t) {
    this._dynamicMessageLayoutData = {
      numOfMessages: e,
      maxHeight: t,
      enabled: true
    };
    this._register(this.renderer.onDidChangeItemHeight(() => this.layoutDynamicChatTreeItemMode()));
    const i = this._register(new uo());
    this._register(this.tree.onDidScroll(r => {
      if (this._dynamicMessageLayoutData?.enabled) {
        i.value = r_(As(this.listContainer), () => {
          if (!r.scrollTopChanged || r.heightChanged || r.scrollHeightChanged) {
            return;
          }
          const s = r.height;
          const o = r.scrollHeight - s - r.scrollTop;
          if (o === 0) {
            return;
          }
          const a = this._dynamicMessageLayoutData?.maxHeight ?? t;
          const l = this.bodyDimension?.width ?? this.container.offsetWidth;
          this.inputPart.layout(a, l);
          const u = this.inputPart.inputPartHeight;
          const d = Math.min(s + o, a - u);
          this.layout(d + u, l);
        });
      }
    }));
  }
  updateDynamicChatTreeItemLayout(e, t) {
    this._dynamicMessageLayoutData = {
      numOfMessages: e,
      maxHeight: t,
      enabled: true
    };
    let i = false;
    let r = this.bodyDimension.height;
    let s = this.bodyDimension.width;
    if (t < this.bodyDimension.height) {
      r = t;
      i = true;
    }
    const o = this.container.offsetWidth;
    if (this.bodyDimension?.width !== o) {
      s = o;
      i = true;
    }
    if (i) {
      this.layout(r, s);
    }
  }
  get isDynamicChatTreeItemLayoutEnabled() {
    return this._dynamicMessageLayoutData?.enabled ?? false;
  }
  set isDynamicChatTreeItemLayoutEnabled(e) {
    if (this._dynamicMessageLayoutData) {
      this._dynamicMessageLayoutData.enabled = e;
    }
  }
  layoutDynamicChatTreeItemMode() {
    if (!this.viewModel || !this._dynamicMessageLayoutData?.enabled) {
      return;
    }
    const e = this.bodyDimension?.width ?? this.container.offsetWidth;
    this.inputPart.layout(this._dynamicMessageLayoutData.maxHeight, e);
    const t = this.inputPart.inputPartHeight;
    const i = this.viewModel.getItems();
    const r = i.slice(-this._dynamicMessageLayoutData.numOfMessages);
    const s = r.some(a => a.currentRenderedHeight === undefined);
    const o = s ? this._dynamicMessageLayoutData.maxHeight : r.reduce((a, l) => a + l.currentRenderedHeight, 0);
    this.layout(Math.min(t + o + (i.length > 2 ? 18 : 0), this._dynamicMessageLayoutData.maxHeight), e);
    if (s || !o) {
      this.scrollToEnd();
    }
  }
  saveState() {
    this.inputPart.saveState();
    const e = this.chatAgentService.getDefaultAgent(this.location, this.input.currentMode)?.metadata.welcomeMessageContent;
    if (e) {
      this.storageService.store(`${uwu}.${this.location}`, e, -1, 1);
    }
  }
  getViewState() {
    return {
      inputValue: this.getInput(),
      inputState: this.inputPart.getViewState()
    };
  }
  updateChatInputContext() {
    const e = this.parsedInput.parts.find(t => t instanceof wQ);
    this.agentInInput.set(!!e);
  }
};
__decorate([cl], o2e.prototype, "isUnifiedPanelWidget", null);
o2e = lwu = __decorate([__param(4, fl), __param(5, Fn), __param(6, wi), __param(7, ln), __param(8, ES), __param(9, EI), __param(10, M1), __param(11, kc), __param(12, fcu), __param(13, Rr), __param(14, bo), __param(15, Tgn), __param(16, kV), __param(17, Hi), __param(18, ea)], o2e);
b9f = class extends at {
  constructor() {
    super(...arguments);
    this._widgets = [];
    this._lastFocusedWidget = undefined;
    this._onDidAddWidget = this._register(new Qe());
    this.onDidAddWidget = this._onDidAddWidget.event;
  }
  get lastFocusedWidget() {
    return this._lastFocusedWidget;
  }
  getAllWidgets() {
    return this._widgets;
  }
  getWidgetsByLocations(n) {
    return this._widgets.filter(e => e.location === n);
  }
  getWidgetByInputUri(n) {
    return this._widgets.find(e => Zc(e.inputUri, n));
  }
  getWidgetBySessionId(n) {
    return this._widgets.find(e => e.viewModel?.sessionId === n);
  }
  setLastFocusedWidget(n) {
    if (n !== this._lastFocusedWidget) {
      this._lastFocusedWidget = n;
    }
  }
  register(n) {
    if (this._widgets.some(e => e === n)) {
      throw new Error("Cannot register the same widget multiple times");
    }
    this._widgets.push(n);
    this._onDidAddWidget.fire(n);
    return H_(n.onDidFocus(() => this.setLastFocusedWidget(n)), $i(() => this._widgets.splice(this._widgets.indexOf(n), 1)));
  }
};
