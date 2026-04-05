"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatViewPane.js
// Offset: 32921738 (bundle byte offset)
// Size: 7284 bytes
ri();
Po();
rt();
Ei();
si();
pl();
Id();
Wt();
E_();
ka();
Px();
jr();
Fc();
kr();
Nl();
Io();
nk();
Qq();
ky();
jh();
hR();
_E();
Nme();
lcu();
xS();
SS();
lbn();
f9f();
OSi = "workbench.panel.chat";
USi = "workbench.panel.chatEditing";
$Si = class extends BT {
  get widget() {
    return this._widget;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w) {
    super(t, i, r, s, o, a, l, u, d, m);
    this.chatOptions = e;
    this.storageService = p;
    this.chatService = g;
    this.chatAgentService = f;
    this.logService = A;
    this.layoutService = w;
    this.modelDisposables = this._register(new Ut());
    this.defaultParticipantRegistrationFailed = false;
    this.didUnregisterProvider = false;
    this.isInitialized = false;
    this.memento = new EM("interactive-session-view-" + yyi + (this.chatOptions.location === zh.EditingSession ? "-edits" : ""), this.storageService);
    this.viewState = this.memento.getMemento(1, 1);
    if (this.chatService.unifiedViewEnabled && this.chatOptions.location === zh.Panel && !this.viewState.hasMigratedCurrentSession) {
      const x = new EM("interactive-session-view-" + yyi + "-edits", this.storageService).getMemento(1, 1);
      if (x.sessionId) {
        this.logService.trace(`ChatViewPane: last edits session was ${x.sessionId}`);
        if (!this.chatService.isPersistedSessionEmpty(x.sessionId)) {
          this.logService.info(`ChatViewPane: migrating ${x.sessionId} to unified view`);
          this.viewState.sessionId = x.sessionId;
          this.viewState.inputValue = x.inputValue;
          this.viewState.inputState = {
            ...x.inputState,
            chatMode: x.inputState?.chatMode ?? iA.Edit
          };
          this.viewState.hasMigratedCurrentSession = true;
        }
      }
    }
    this._register(this.chatAgentService.onDidChangeAgents(() => {
      if (this.chatAgentService.getDefaultAgent(this.chatOptions?.location)) {
        if (!this._widget?.viewModel && !this._restoringSession) {
          const C = this.getTransferredOrPersistedSessionInfo();
          this._restoringSession = (C.sessionId ? this.chatService.getOrRestoreSession(C.sessionId) : Promise.resolve(undefined)).then(async x => {
            const I = this._widget.visible;
            try {
              this._widget.setVisible(false);
              await this.updateModel(x, C.inputValue || C.mode ? {
                inputState: {
                  chatMode: C.mode
                },
                inputValue: C.inputValue
              } : undefined);
              this.defaultParticipantRegistrationFailed = false;
              this.didUnregisterProvider = false;
              this._onDidChangeViewWelcomeState.fire();
            } finally {
              this.widget.setVisible(I);
            }
          });
          this._restoringSession.finally(() => this._restoringSession = undefined);
        }
      } else if (this._widget?.viewModel?.initState === vie.Initialized) {
        this.didUnregisterProvider = true;
      }
      this._onDidChangeViewWelcomeState.fire();
    }));
    this._register(this.contextKeyService.onDidChangeContext(C => {
      if (C.affectsSome(qa.SetupViewKeys)) {
        this._onDidChangeViewWelcomeState.fire();
      }
    }));
  }
  getActionsContext() {
    if (this.widget?.viewModel) {
      return {
        sessionId: this.widget.viewModel.sessionId,
        $mid: 19
      };
    } else {
      return undefined;
    }
  }
  async updateModel(e, t) {
    this.modelDisposables.clear();
    e = e ?? (this.chatService.transferredSessionData?.sessionId && this.chatService.transferredSessionData?.location === this.chatOptions.location ? await this.chatService.getOrRestoreSession(this.chatService.transferredSessionData.sessionId) : this.chatService.startSession(this.chatOptions.location, Cs.None));
    if (!e) {
      throw new Error("Could not start chat session");
    }
    if (t) {
      this.updateViewState(t);
    }
    this.viewState.sessionId = e.sessionId;
    this._widget.setModel(e, {
      ...this.viewState
    });
    this.updateActions();
  }
  shouldShowWelcome() {
    const e = this.contextKeyService.contextMatchesRules(qa.SetupViewCondition);
    const t = !this.chatService.hasSessions();
    const i = this.chatAgentService.getAgents().some(s => s.isCore && s.locations.includes(this.chatOptions.location));
    const r = !i && (this.didUnregisterProvider || !this._widget?.viewModel && t || this.defaultParticipantRegistrationFailed || e);
    this.logService.trace(`ChatViewPane#shouldShowWelcome(${this.chatOptions.location}) = ${r}: hasCoreAgent=${i} didUnregister=${this.didUnregisterProvider} || noViewModel=${!this._widget?.viewModel} && noPersistedSessions=${t} || defaultParticipantRegistrationFailed=${this.defaultParticipantRegistrationFailed} || showSetup=${e}`);
    return !!r;
  }
  getTransferredOrPersistedSessionInfo() {
    if (this.chatService.transferredSessionData?.location === this.chatOptions.location) {
      return {
        sessionId: this.chatService.transferredSessionData.sessionId,
        inputValue: this.chatService.transferredSessionData.inputValue,
        mode: this.chatService.transferredSessionData.mode
      };
    } else {
      return {
        sessionId: this.viewState.sessionId
      };
    }
  }
  async renderBody(e) {
    try {
      super.renderBody(e);
      this._register(this.instantiationService.createInstance(Wxa, e, this, this.chatOptions.location));
      const t = this._register(this.instantiationService.createChild(new EA([wi, this.scopedContextKeyService])));
      const i = this.getLocationBasedColors();
      const r = this.layoutService.getContainer(As(e)).appendChild(Ct(".chat-editor-overflow.monaco-editor"));
      this._register({
        dispose: () => r.remove()
      });
      this._widget = this._register(t.createInstance(o2e, this.chatOptions.location, {
        viewId: this.id
      }, {
        autoScroll: l => l !== iA.Ask,
        renderFollowups: this.chatOptions.location === zh.Panel,
        supportsFileReferences: true,
        supportsAdditionalParticipants: this.chatOptions.location === zh.Panel,
        rendererOptions: {
          renderTextEditsAsSummary: l => this.chatService.isEditingLocation(this.chatOptions.location),
          referencesExpandedWhenEmptyResponse: !this.chatService.isEditingLocation(this.chatOptions.location),
          progressMessageAtBottomOfResponse: l => l !== iA.Ask
        },
        editorOverflowWidgetsDomNode: r,
        enableImplicitContext: this.chatOptions.location === zh.Panel || this.chatService.isEditingLocation(this.chatOptions.location),
        enableWorkingSet: this.chatService.isEditingLocation(this.chatOptions.location) ? "explicit" : undefined,
        supportsChangingModes: this.chatService.isEditingLocation(this.chatOptions.location)
      }, {
        listForeground: s1t,
        listBackground: i.background,
        overlayBackground: i.overlayBackground,
        inputEditorBackground: i.background,
        resultEditorBackground: Wm
      }));
      this._register(this.onDidChangeBodyVisibility(l => {
        this._widget.setVisible(l);
      }));
      this._register(this._widget.onDidClear(() => this.clear()));
      this._widget.render(e);
      const s = this.getTransferredOrPersistedSessionInfo();
      const o = this._register(this.chatService.onDidDisposeSession(l => {
        if (l.reason === "initializationFailed") {
          this.defaultParticipantRegistrationFailed = true;
          o?.dispose();
          this._onDidChangeViewWelcomeState.fire();
        }
      }));
      const a = s.sessionId ? await this.chatService.getOrRestoreSession(s.sessionId) : undefined;
      await this.updateModel(a, s.inputValue || s.mode ? {
        inputState: {
          chatMode: s.mode
        },
        inputValue: s.inputValue
      } : undefined);
    } catch (t) {
      this.logService.error(t);
      throw t;
    }
  }
  acceptInput(e) {
    this._widget.acceptInput(e);
  }
  async clear() {
    if (this.widget.viewModel) {
      await this.chatService.clearSession(this.widget.viewModel.sessionId);
    }
    this.updateViewState();
    await this.updateModel(undefined);
    this.updateActions();
  }
  async loadSession(e, t) {
    if (this.widget.viewModel) {
      await this.chatService.clearSession(this.widget.viewModel.sessionId);
    }
    const i = await this.chatService.getOrRestoreSession(e);
    await this.updateModel(i, t);
  }
  focusInput() {
    this._widget.focusInput();
  }
  focus() {
    super.focus();
    this._widget.focusInput();
  }
  layoutBody(e, t) {
    super.layoutBody(e, t);
    this._widget.layout(e, t);
  }
  saveState() {
    if (this._widget) {
      this._widget.saveState();
      this.updateViewState();
      this.memento.saveMemento();
    }
    super.saveState();
  }
  updateViewState(e) {
    const t = e ?? this._widget.getViewState();
    for (const [i, r] of Object.entries(t)) {
      this.viewState[i] = r;
    }
  }
};
$Si = __decorate([__param(2, mo), __param(3, kc), __param(4, Fn), __param(5, wi), __param(6, fp), __param(7, ln), __param(8, Ja), __param(9, bo), __param(10, Kc), __param(11, Hi), __param(12, ES), __param(13, EI), __param(14, Rr), __param(15, vS)], $Si);
