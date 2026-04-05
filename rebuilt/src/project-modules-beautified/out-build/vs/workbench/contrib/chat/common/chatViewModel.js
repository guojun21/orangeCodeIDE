"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/chatViewModel.js
// Offset: 28324877 (bundle byte offset)
// Size: 7325 bytes
yn();
iw();
rt();
vRe();
Wt();
jr();
iAa();
hR();
Nme();
Ayi();
rAa = class extends at {
  get inputPlaceholder() {
    return this._inputPlaceholder;
  }
  get model() {
    return this._model;
  }
  setInputPlaceholder(e) {
    this._inputPlaceholder = e;
    this._onDidChange.fire({
      kind: "changePlaceholder"
    });
  }
  resetInputPlaceholder() {
    this._inputPlaceholder = undefined;
    this._onDidChange.fire({
      kind: "changePlaceholder"
    });
  }
  get sessionId() {
    return this._model.sessionId;
  }
  get requestInProgress() {
    return this._model.requestInProgress;
  }
  get requestPausibility() {
    return this._model.requestPausibility;
  }
  get initState() {
    return this._model.initState;
  }
  constructor(e, t, i) {
    super();
    this._model = e;
    this.codeBlockModelCollection = t;
    this.instantiationService = i;
    this._onDidDisposeModel = this._register(new Qe());
    this.onDidDisposeModel = this._onDidDisposeModel.event;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._items = [];
    this._inputPlaceholder = undefined;
    e.getRequests().forEach((r, s) => {
      const o = this.instantiationService.createInstance(ccu, r);
      this._items.push(o);
      this.updateCodeBlockTextModels(o);
      if (r.response) {
        this.onAddResponse(r.response);
      }
    });
    this._register(e.onDidDispose(() => this._onDidDisposeModel.fire()));
    this._register(e.onDidChange(r => {
      if (r.kind === "addRequest") {
        const o = this.instantiationService.createInstance(ccu, r.request);
        this._items.push(o);
        this.updateCodeBlockTextModels(o);
        if (r.request.response) {
          this.onAddResponse(r.request.response);
        }
      } else if (r.kind === "addResponse") {
        this.onAddResponse(r.response);
      } else if (r.kind === "removeRequest") {
        const o = this._items.findIndex(l => Gq(l) && l.id === r.requestId);
        if (o >= 0) {
          this._items.splice(o, 1);
        }
        const a = r.responseId && this._items.findIndex(l => rA(l) && l.id === r.responseId);
        if (typeof a == "number" && a >= 0) {
          const u = this._items.splice(a, 1)[0];
          if (u instanceof _kt) {
            u.dispose();
          }
        }
      }
      const s = r.kind === "addRequest" ? {
        kind: "addRequest"
      } : r.kind === "initialize" ? {
        kind: "initialize"
      } : r.kind === "setHidden" ? {
        kind: "setHidden"
      } : null;
      this._onDidChange.fire(s);
    }));
  }
  onAddResponse(e) {
    const t = this.instantiationService.createInstance(_kt, e, this);
    this._register(t.onDidChange(() => {
      if (t.isComplete) {
        this.updateCodeBlockTextModels(t);
      }
      return this._onDidChange.fire(null);
    }));
    this._items.push(t);
    this.updateCodeBlockTextModels(t);
  }
  getItems() {
    return this._items.filter(e => !e.shouldBeRemovedOnSend || e.shouldBeRemovedOnSend.afterUndoStop);
  }
  dispose() {
    super.dispose();
    Bo(this._items.filter(e => e instanceof _kt));
  }
  updateCodeBlockTextModels(e) {
    let t;
    if (Gq(e)) {
      t = e.messageText;
    } else {
      t = e8A(e.response.value).map(r => r.content.value).join("");
    }
    let i = 0;
    i0h(cbt(t), r => {
      if (r.type === "code") {
        const s = r.lang || "";
        const o = r.text;
        this.codeBlockModelCollection.update(this._model.sessionId, e, i++, {
          text: o,
          languageId: s,
          isComplete: true
        });
      }
    });
  }
};
rAa = __decorate([__param(2, ln)], rAa);
ccu = class {
  get id() {
    return this._model.id;
  }
  get dataId() {
    return `${this.id}_${vie[this._model.session.initState]}_${VC(this.variables)}_${VC(this.isComplete)}`;
  }
  get sessionId() {
    return this._model.session.sessionId;
  }
  get username() {
    return this._model.username;
  }
  get avatarIcon() {
    return this._model.avatarIconUri;
  }
  get message() {
    return this._model.message;
  }
  get messageText() {
    return this.message.text;
  }
  get attempt() {
    return this._model.attempt;
  }
  get variables() {
    return this._model.variableData.variables;
  }
  get contentReferences() {
    return this._model.response?.contentReferences;
  }
  get confirmation() {
    return this._model.confirmation;
  }
  get isComplete() {
    return this._model.response?.isComplete ?? false;
  }
  get isCompleteAddedRequest() {
    return this._model.isCompleteAddedRequest;
  }
  get shouldBeRemovedOnSend() {
    return this._model.shouldBeRemovedOnSend;
  }
  get slashCommand() {
    return this._model.response?.slashCommand;
  }
  get agentOrSlashCommandDetected() {
    return this._model.response?.agentOrSlashCommandDetected ?? false;
  }
  constructor(n) {
    this._model = n;
  }
};
_kt = class extends at {
  get model() {
    return this._model;
  }
  get id() {
    return this._model.id;
  }
  get dataId() {
    return `${this._model.id}_${this._modelChangeCount}_${vie[this._model.session.initState]}${this.isLast ? "_last" : ""}`;
  }
  get sessionId() {
    return this._model.session.sessionId;
  }
  get username() {
    if (this.agent) {
      if (this.chatAgentNameService.getAgentNameRestriction(this.agent)) {
        return this.agent.fullName || this.agent.name;
      } else {
        return dyi(this.agent);
      }
    } else {
      return this._model.username;
    }
  }
  get avatarIcon() {
    return this._model.avatarIcon;
  }
  get agent() {
    return this._model.agent;
  }
  get slashCommand() {
    return this._model.slashCommand;
  }
  get agentOrSlashCommandDetected() {
    return this._model.agentOrSlashCommandDetected;
  }
  get response() {
    return this._model.response;
  }
  get usedContext() {
    return this._model.usedContext;
  }
  get contentReferences() {
    return this._model.contentReferences;
  }
  get codeCitations() {
    return this._model.codeCitations;
  }
  get progressMessages() {
    return this._model.progressMessages;
  }
  get isComplete() {
    return this._model.isComplete;
  }
  get isCanceled() {
    return this._model.isCanceled;
  }
  get shouldBeRemovedOnSend() {
    return this._model.shouldBeRemovedOnSend;
  }
  get isCompleteAddedRequest() {
    return this._model.isCompleteAddedRequest;
  }
  get replyFollowups() {
    return this._model.followups?.filter(e => e.kind === "reply");
  }
  get result() {
    return this._model.result;
  }
  get errorDetails() {
    return this.result?.errorDetails;
  }
  get vote() {
    return this._model.vote;
  }
  get voteDownReason() {
    return this._model.voteDownReason;
  }
  get requestId() {
    return this._model.requestId;
  }
  get isStale() {
    return this._model.isStale;
  }
  get isLast() {
    return this._chatViewModel.getItems().at(-1) === this;
  }
  get usedReferencesExpanded() {
    if (typeof this._usedReferencesExpanded == "boolean") {
      return this._usedReferencesExpanded;
    }
  }
  set usedReferencesExpanded(e) {
    this._usedReferencesExpanded = e;
  }
  get vulnerabilitiesListExpanded() {
    return this._vulnerabilitiesListExpanded;
  }
  set vulnerabilitiesListExpanded(e) {
    this._vulnerabilitiesListExpanded = e;
  }
  get contentUpdateTimings() {
    return this._contentUpdateTimings;
  }
  get isPaused() {
    return this._model.isPaused;
  }
  constructor(e, t, i, r) {
    super();
    this._model = e;
    this._chatViewModel = t;
    this.logService = i;
    this.chatAgentNameService = r;
    this._modelChangeCount = 0;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this.renderData = undefined;
    this._vulnerabilitiesListExpanded = false;
    this._contentUpdateTimings = undefined;
    if (!e.isComplete) {
      this._contentUpdateTimings = {
        totalTime: 0,
        lastUpdateTime: Date.now(),
        impliedWordLoadRate: 0,
        lastWordCount: 0
      };
    }
    this._register(e.onDidChange(() => {
      if (this._contentUpdateTimings) {
        const s = Date.now();
        const o = acu(e.entireResponse.getMarkdown());
        if (o === this._contentUpdateTimings.lastWordCount) {
          this.trace("onDidChange", "Update- no new words");
        } else {
          if (this._contentUpdateTimings.lastWordCount === 0) {
            this._contentUpdateTimings.lastUpdateTime = s;
          }
          const a = Math.min(s - this._contentUpdateTimings.lastUpdateTime, 1000);
          const l = Math.max(this._contentUpdateTimings.totalTime + a, 250);
          const u = o / (l / 1000);
          this.trace("onDidChange", `Update- got ${o} words over last ${l}ms = ${u} words/s`);
          this._contentUpdateTimings = {
            totalTime: this._contentUpdateTimings.totalTime !== 0 || this.response.value.some(d => d.kind === "markdownContent") ? l : this._contentUpdateTimings.totalTime,
            lastUpdateTime: s,
            impliedWordLoadRate: u,
            lastWordCount: o
          };
        }
      }
      this._modelChangeCount++;
      this._onDidChange.fire();
    }));
  }
  trace(e, t) {
    this.logService.trace(`ChatResponseViewModel#${e}: ${t}`);
  }
  setVote(e) {
    this._modelChangeCount++;
    this._model.setVote(e);
  }
  setVoteDownReason(e) {
    this._modelChangeCount++;
    this._model.setVoteDownReason(e);
  }
  setEditApplied(e, t) {
    this._modelChangeCount++;
    this._model.setEditApplied(e, t);
  }
};
_kt = __decorate([__param(2, Rr), __param(3, cpn)], _kt);
