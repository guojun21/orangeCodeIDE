"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/chatModel.js
// Offset: 28298078 (bundle byte offset)
// Size: 20795 bytes
Vs();
vr();
qi();
yn();
tg();
rt();
UB();
zr();
np();
Uc();
Yr();
Yn();
Bc();
$I();
Tg();
Ht();
jr();
ph();
hR();
Hq();
EV();
xS();
SS();
(function (n) {
  n.icon = Be.error;
  function e(s) {
    return {
      filterUri: s.resource,
      owner: s.owner,
      problemMessage: s.message,
      filterRange: {
        startLineNumber: s.startLineNumber,
        endLineNumber: s.endLineNumber,
        startColumn: s.startColumn,
        endColumn: s.endColumn
      }
    };
  }
  n.fromMarker = e;
  function t(s) {
    return {
      id: i(s),
      name: r(s),
      icon: n.icon,
      value: s,
      kind: "diagnostic",
      range: s.filterRange ? new dm(s.filterRange.startLineNumber, s.filterRange.endLineNumber) : undefined,
      ...s
    };
  }
  n.toEntry = t;
  function i(s) {
    return [s.filterUri, s.owner, s.filterSeverity, s.filterRange?.startLineNumber].join(":");
  }
  n.id = i;
  function r(s) {
    let o;
    (function (l) {
      l[l.MaxChars = 30] = "MaxChars";
      l[l.MaxSpaceLookback = 10] = "MaxSpaceLookback";
    })(o ||= {});
    if (s.problemMessage) {
      if (s.problemMessage.length < 30) {
        return s.problemMessage;
      }
      const l = s.problemMessage.lastIndexOf(" ", 30);
      if (l === -1 || l + 10 < 30) {
        return s.problemMessage.substring(0, 30) + "…";
      } else {
        return s.problemMessage.substring(0, l) + "…";
      }
    }
    let a = _(5635, null);
    if (s.filterUri) {
      a = _(5636, null, ca(s.filterUri));
    }
    return a;
  }
  n.label = r;
})(wkt ||= {});
bie = {
  reason: "other"
};
ncu = class {
  get session() {
    return this._session;
  }
  get username() {
    return this.session.requesterUsername;
  }
  get avatarIconUri() {
    return this.session.requesterAvatarIconUri;
  }
  get attempt() {
    return this._attempt;
  }
  get variableData() {
    return this._variableData;
  }
  set variableData(n) {
    this._variableData = n;
  }
  get confirmation() {
    return this._confirmation;
  }
  get locationData() {
    return this._locationData;
  }
  get attachedContext() {
    return this._attachedContext;
  }
  constructor(n, e, t, i, r = 0, s, o, a, l = false, u, d) {
    this._session = n;
    this.message = e;
    this._variableData = t;
    this.timestamp = i;
    this._attempt = r;
    this._confirmation = s;
    this._locationData = o;
    this._attachedContext = a;
    this.isCompleteAddedRequest = l;
    this.modelId = u;
    this.id = d ?? "request_" + Wr();
  }
  adoptTo(n) {
    this._session = n;
  }
};
icu = class {
  get value() {
    return this._responseParts;
  }
  constructor(n) {
    this._responseRepr = "";
    this._markdownContent = "";
    this._responseParts = n;
    this._updateRepr();
  }
  toString() {
    return this._responseRepr;
  }
  getMarkdown() {
    return this._markdownContent;
  }
  _updateRepr() {
    this._responseRepr = this.partsToRepr(this._responseParts);
    this._markdownContent = this._responseParts.map(n => n.kind === "inlineReference" ? this.inlineRefToRepr(n) : n.kind === "markdownContent" || n.kind === "markdownVuln" ? n.content.value : "").filter(n => n.length > 0).join("");
  }
  partsToRepr(n) {
    const e = [];
    let t = [];
    for (const i of n) {
      let r;
      switch (i.kind) {
        case "treeData":
        case "progressMessage":
        case "codeblockUri":
        case "toolInvocation":
        case "toolInvocationSerialized":
        case "undoStop":
          continue;
        case "inlineReference":
          r = {
            text: this.inlineRefToRepr(i)
          };
          break;
        case "command":
          r = {
            text: i.command.title,
            isBlock: true
          };
          break;
        case "textEditGroup":
        case "notebookEditGroup":
          r = {
            text: _(5637, null),
            isBlock: true
          };
          break;
        case "confirmation":
          r = {
            text: `${i.title}
${i.message}`,
            isBlock: true
          };
          break;
        default:
          r = {
            text: i.content.value
          };
          break;
      }
      if (r.isBlock) {
        if (t.length) {
          e.push(t.join(""));
          t = [];
        }
        e.push(r.text);
      } else {
        t.push(r.text);
      }
    }
    if (t.length) {
      e.push(t.join(""));
    }
    return e.join(`

`);
  }
  inlineRefToRepr(n) {
    if ("uri" in n.inlineReference) {
      return this.uriToRepr(n.inlineReference.uri);
    } else if ("name" in n.inlineReference) {
      return "`" + n.inlineReference.name + "`";
    } else {
      return this.uriToRepr(n.inlineReference);
    }
  }
  uriToRepr(n) {
    if (n.scheme === _n.http || n.scheme === _n.https) {
      return n.toString(false);
    } else {
      return ca(n);
    }
  }
};
ltf = class extends icu {
  constructor(n, e) {
    const t = n.value.findIndex(i => i.kind === "undoStop" && i.id === e);
    super(t === -1 ? n.value.slice() : n.value.slice(0, t));
    this.undoStop = e;
  }
};
utf = class extends icu {
  get onDidChangeValue() {
    return this._onDidChangeValue.event;
  }
  constructor(n) {
    super(aW(n).map(e => bT(e) ? {
      content: e,
      kind: "markdownContent"
    } : "kind" in e ? e : {
      kind: "treeData",
      treeData: e
    }));
    this._onDidChangeValue = new Qe();
    this._citations = [];
  }
  dispose() {
    this._onDidChangeValue.dispose();
  }
  clear() {
    this._responseParts = [];
    this._updateRepr(true);
  }
  updateContent(n, e) {
    if (n.kind === "markdownContent") {
      const t = this._responseParts.filter(i => i.kind !== "textEditGroup").at(-1);
      if (!t || t.kind !== "markdownContent" || !atf(t.content, n.content)) {
        this._responseParts.push(n);
      } else {
        const i = this._responseParts.indexOf(t);
        this._responseParts[i] = {
          ...t,
          content: byi(t.content, n.content)
        };
      }
      this._updateRepr(e);
    } else if (n.kind === "textEdit" || n.kind === "notebookEdit") {
      const i = n.uri.scheme === _n.vscodeNotebookCell && !this._responseParts.find(l => l.kind === "notebookEditGroup") ? undefined : Dg.parse(n.uri)?.notebook;
      const r = i ?? n.uri;
      let s = false;
      const o = n.kind === "textEdit" && !i ? "textEditGroup" : "notebookEditGroup";
      const a = o === "textEditGroup" ? n.edits : n.edits.map(l => Zbe.isTextEdit(l) ? {
        uri: n.uri,
        edit: l
      } : l);
      for (let l = 0; !s && l < this._responseParts.length; l++) {
        const u = this._responseParts[l];
        if (u.kind === o && !u.done && Zc(u.uri, r)) {
          u.edits.push(a);
          u.done = n.done;
          s = true;
        }
      }
      if (!s) {
        this._responseParts.push({
          kind: o,
          uri: r,
          edits: o === "textEditGroup" ? [a] : a,
          done: n.done
        });
      }
      this._updateRepr(e);
    } else if (n.kind === "progressTask") {
      const t = this._responseParts.push(n) - 1;
      this._updateRepr(e);
      const i = n.onDidAddProgress(() => {
        this._updateRepr(false);
      });
      n.task?.().then(r => {
        i.dispose();
        if (typeof r == "string") {
          this._responseParts[t].content = new _c(r);
        }
        this._updateRepr(false);
      });
    } else if (n.kind === "toolInvocation") {
      if (n.confirmationMessages) {
        n.confirmed.p.then(() => {
          this._updateRepr(false);
        });
      }
      n.isCompletePromise.then(() => {
        this._updateRepr(false);
      });
      this._responseParts.push(n);
      this._updateRepr(e);
    } else {
      this._responseParts.push(n);
      this._updateRepr(e);
    }
  }
  addCitation(n) {
    this._citations.push(n);
    this._updateRepr();
  }
  _updateRepr(n) {
    super._updateRepr();
    if (this._onDidChangeValue) {
      this._responseRepr += this._citations.length ? `

${ctf(this._citations)}` : "";
      if (!n) {
        this._onDidChangeValue.fire();
      }
    }
  }
};
vyi = class extends at {
  get session() {
    return this._session;
  }
  get shouldBeRemovedOnSend() {
    return this._shouldBeRemovedOnSend;
  }
  get isComplete() {
    return this._isComplete;
  }
  set shouldBeRemovedOnSend(n) {
    this._shouldBeRemovedOnSend = n;
    this._onDidChange.fire(bie);
  }
  get isCanceled() {
    return this._isCanceled;
  }
  get vote() {
    return this._vote;
  }
  get voteDownReason() {
    return this._voteDownReason;
  }
  get followups() {
    return this._followups;
  }
  get entireResponse() {
    return this._finalizedResponse || this._response;
  }
  get result() {
    return this._result;
  }
  get username() {
    return this.session.responderUsername;
  }
  get avatarIcon() {
    return this.session.responderAvatarIcon;
  }
  get agent() {
    return this._agent;
  }
  get slashCommand() {
    return this._slashCommand;
  }
  get agentOrSlashCommandDetected() {
    return this._agentOrSlashCommandDetected ?? false;
  }
  get usedContext() {
    return this._usedContext;
  }
  get contentReferences() {
    return Array.from(this._contentReferences);
  }
  get codeCitations() {
    return this._codeCitations;
  }
  get progressMessages() {
    return this._progressMessages;
  }
  get isStale() {
    return this._isStale;
  }
  get isPaused() {
    return this._isPaused;
  }
  get isPendingConfirmation() {
    return this._response.value.some(n => n.kind === "toolInvocation" && n.isConfirmed === undefined || n.kind === "confirmation" && n.isUsed === false);
  }
  get response() {
    const n = this._shouldBeRemovedOnSend?.afterUndoStop;
    if (n) {
      if (this._responseView?.undoStop !== n) {
        this._responseView = new ltf(this._response, n);
      }
      return this._responseView;
    } else {
      return this._finalizedResponse || this._response;
    }
  }
  constructor(n, e, t, i, r, s = false, o = false, a, l, u, d, m = false, p = undefined, g) {
    super();
    this._session = e;
    this._agent = t;
    this._slashCommand = i;
    this.requestId = r;
    this._isComplete = s;
    this._isCanceled = o;
    this._vote = a;
    this._voteDownReason = l;
    this._result = u;
    this.isCompleteAddedRequest = m;
    this._shouldBeRemovedOnSend = p;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._contentReferences = [];
    this._codeCitations = [];
    this._progressMessages = [];
    this._isStale = false;
    this._isPaused = Ua("isPaused", false);
    this._isStale = Array.isArray(n) && (n.length !== 0 || bT(n) && n.value.length !== 0);
    this._followups = d ? [...d] : undefined;
    this._response = this._register(new utf(n));
    this._register(this._response.onDidChangeValue(() => this._onDidChange.fire(bie)));
    this.id = g ?? "response_" + Wr();
  }
  updateContent(n, e) {
    this.bufferWhenPaused(() => this._response.updateContent(n, e));
  }
  addUndoStop(n) {
    this.bufferWhenPaused(() => {
      this._onDidChange.fire({
        reason: "undoStop",
        id: n.id
      });
      this._response.updateContent(n, true);
    });
  }
  applyReference(n) {
    if (n.kind === "usedContext") {
      this._usedContext = n;
    } else if (n.kind === "reference") {
      this._contentReferences.push(n);
      this._onDidChange.fire(bie);
    }
  }
  applyCodeCitation(n) {
    this._codeCitations.push(n);
    this._response.addCitation(n);
    this._onDidChange.fire(bie);
  }
  setAgent(n, e) {
    this._agent = n;
    this._slashCommand = e;
    this._agentOrSlashCommandDetected = !n.isDefault || !!e;
    this._onDidChange.fire(bie);
  }
  setResult(n) {
    this._result = n;
    this._onDidChange.fire(bie);
  }
  complete() {
    if (this._result?.errorDetails?.responseIsRedacted) {
      this._response.clear();
    }
    this._isComplete = true;
    this._onDidChange.fire(bie);
  }
  cancel() {
    this._isComplete = true;
    this._isCanceled = true;
    this._onDidChange.fire(bie);
  }
  setFollowups(n) {
    this._followups = n;
    this._onDidChange.fire(bie);
  }
  setVote(n) {
    this._vote = n;
    this._onDidChange.fire(bie);
  }
  setVoteDownReason(n) {
    this._voteDownReason = n;
    this._onDidChange.fire(bie);
  }
  setEditApplied(n, e) {
    if (!this.response.value.includes(n) || !n.state) {
      return false;
    } else {
      n.state.applied = e;
      this._onDidChange.fire(bie);
      return true;
    }
  }
  adoptTo(n) {
    this._session = n;
    this._onDidChange.fire(bie);
  }
  setPaused(n, e) {
    this._isPaused.set(n, e);
    this._onDidChange.fire(bie);
    this.bufferedPauseContent?.forEach(t => t());
    this.bufferedPauseContent = undefined;
  }
  finalizeUndoState() {
    this._finalizedResponse = this.response;
    this._responseView = undefined;
    this._shouldBeRemovedOnSend = undefined;
  }
  bufferWhenPaused(n) {
    if (this._isPaused.get()) {
      this.bufferedPauseContent ??= [];
      this.bufferedPauseContent.push(n);
    } else {
      n();
    }
  }
};
(function (n) {
  n[n.NotPausable = 0] = "NotPausable";
  n[n.Paused = 1] = "Paused";
  n[n.Unpaused = 2] = "Unpaused";
})(dtf ||= {});
(function (n) {
  n[n.Removal = 0] = "Removal";
  n[n.Resend = 1] = "Resend";
  n[n.Adoption = 2] = "Adoption";
})(htf ||= {});
(function (n) {
  n[n.Created = 0] = "Created";
  n[n.Initializing = 1] = "Initializing";
  n[n.Initialized = 2] = "Initialized";
})(vie ||= {});
nAa = tcu = class extends at {
  static getDefaultTitle(e) {
    const t = e.at(0)?.message ?? "";
    return (typeof t == "string" ? t : t.text).split(`
`)[0].substring(0, 50);
  }
  get sampleQuestions() {
    return this._sampleQuestions;
  }
  get sessionId() {
    return this._sessionId;
  }
  get requestInProgress() {
    const e = this.lastRequest;
    if (!e?.response || e.response.isPendingConfirmation) {
      return false;
    } else {
      return !e.response.isComplete;
    }
  }
  get requestPausibility() {
    const e = this.lastRequest;
    if (!e?.response?.agent || e.response.isComplete || e.response.isPendingConfirmation) {
      return 0;
    } else if (e.response.isPaused.get()) {
      return 1;
    } else {
      return 2;
    }
  }
  get hasRequests() {
    return this._requests.length > 0;
  }
  get lastRequest() {
    return this._requests.at(-1);
  }
  get creationDate() {
    return this._creationDate;
  }
  get lastMessageDate() {
    return this._lastMessageDate;
  }
  get _defaultAgent() {
    return this.chatAgentService.getDefaultAgent(zh.Panel);
  }
  get requesterUsername() {
    return this._defaultAgent?.metadata.requester?.name ?? this.initialData?.requesterUsername ?? "";
  }
  get responderUsername() {
    return this._defaultAgent?.fullName ?? this.initialData?.responderUsername ?? "";
  }
  get requesterAvatarIconUri() {
    return this._defaultAgent?.metadata.requester?.icon ?? this._initialRequesterAvatarIconUri;
  }
  get responderAvatarIcon() {
    return this._defaultAgent?.metadata.themeIcon ?? this._initialResponderAvatarIconUri;
  }
  get initState() {
    return this._initState;
  }
  get isImported() {
    return this._isImported;
  }
  get customTitle() {
    return this._customTitle;
  }
  get title() {
    return this._customTitle || tcu.getDefaultTitle(this._requests);
  }
  get initialLocation() {
    return this._initialLocation;
  }
  get editingSessionObs() {
    return this._editingSession;
  }
  get editingSession() {
    return this._editingSession?.promiseResult.get()?.data;
  }
  constructor(e, t, i, r, s) {
    super();
    this.initialData = e;
    this._initialLocation = t;
    this.logService = i;
    this.chatAgentService = r;
    this.chatEditingService = s;
    this._onDidDispose = this._register(new Qe());
    this.onDidDispose = this._onDidDispose.event;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._initState = vie.Created;
    this._isInitializedDeferred = new wy();
    this._isImported = false;
    this._checkpoint = undefined;
    const o = Y9A(e);
    if (e && !o) {
      this.logService.warn(`ChatModel#constructor: Loaded malformed session data: ${JSON.stringify(e)}`);
    }
    this._isImported = !!e && !o || (e?.isImported ?? false);
    this._sessionId = o && e.sessionId || Wr();
    this._requests = e ? this._deserialize(e) : [];
    this._creationDate = o && e.creationDate || Date.now();
    this._lastMessageDate = o && e.lastMessageDate || this._creationDate;
    this._customTitle = o ? e.customTitle : undefined;
    this._initialRequesterAvatarIconUri = e?.requesterAvatarIconUri && je.revive(e.requesterAvatarIconUri);
    this._initialResponderAvatarIconUri = QFt(e?.responderAvatarIconUri) ? je.revive(e.responderAvatarIconUri) : e?.responderAvatarIconUri;
  }
  startEditingSession(e) {
    const t = e ? this.chatEditingService.startOrContinueGlobalEditingSession(this) : this.chatEditingService.createEditingSession(this);
    this._editingSession = new _de(t);
    this._editingSession.promise.then(i => this._store.isDisposed ? i.dispose() : this._register(i));
  }
  _deserialize(e) {
    const t = e.requests;
    if (!Array.isArray(t)) {
      this.logService.error(`Ignoring malformed session data: ${JSON.stringify(e)}`);
      return [];
    }
    try {
      return t.map(i => {
        const r = typeof i.message == "string" ? this.getParsedRequestFromString(i.message) : Z9A(i.message);
        const s = this.reviveVariableData(i.variableData);
        const o = new ncu(this, r, s, i.timestamp ?? -1, undefined, undefined, undefined, undefined, undefined, undefined, i.requestId);
        o.shouldBeRemovedOnSend = i.isHidden ? {
          requestId: i.requestId
        } : i.shouldBeRemovedOnSend;
        if (i.response || i.result || i.responseErrorDetails) {
          const a = i.agent && "metadata" in i.agent ? Yef(i.agent) : undefined;
          const l = "responseErrorDetails" in i ? {
            errorDetails: i.responseErrorDetails
          } : i.result;
          o.response = new vyi(i.response ?? [new _c(i.response)], this, a, i.slashCommand, o.id, true, i.isCanceled, i.vote, i.voteDownReason, l, i.followups, undefined, undefined, i.responseId);
          o.response.shouldBeRemovedOnSend = i.isHidden ? {
            requestId: i.requestId
          } : i.shouldBeRemovedOnSend;
          if (i.usedContext) {
            o.response.applyReference(XT(i.usedContext));
          }
          i.contentReferences?.forEach(u => o.response.applyReference(XT(u)));
          i.codeCitations?.forEach(u => o.response.applyCodeCitation(XT(u)));
        }
        return o;
      });
    } catch (i) {
      this.logService.error("Failed to parse chat data", i);
      return [];
    }
  }
  reviveVariableData(e) {
    const t = e && Array.isArray(e.variables) ? e : {
      variables: []
    };
    t.variables = t.variables.map(i => i && "values" in i && Array.isArray(i.values) ? {
      id: i.id ?? "",
      name: i.name,
      value: i.values[0]?.value,
      range: i.range,
      modelDescription: i.modelDescription,
      references: i.references
    } : i);
    return t;
  }
  getParsedRequestFromString(e) {
    const t = [new Aie(new dm(0, e.length), {
      startColumn: 1,
      startLineNumber: 1,
      endColumn: 1,
      endLineNumber: 1
    }, e)];
    return {
      text: e,
      parts: t
    };
  }
  toggleLastRequestPaused(e) {
    if (this.requestPausibility !== 0 && this.lastRequest?.response?.agent) {
      const t = e ?? !this.lastRequest.response.isPaused.get();
      this.lastRequest.response.setPaused(t);
      this.chatAgentService.setRequestPaused(this.lastRequest.response.agent.id, this.lastRequest.id, t);
      this._onDidChange.fire({
        kind: "changedRequest",
        request: this.lastRequest
      });
    }
  }
  startInitialize() {
    if (this.initState !== vie.Created) {
      throw new Error(`ChatModel is in the wrong state for startInitialize: ${vie[this.initState]}`);
    }
    this._initState = vie.Initializing;
  }
  deinitialize() {
    this._initState = vie.Created;
    this._isInitializedDeferred = new wy();
  }
  initialize(e) {
    if (this.initState !== vie.Initializing) {
      throw new Error(`ChatModel is in the wrong state for initialize: ${vie[this.initState]}`);
    }
    this._initState = vie.Initialized;
    this._sampleQuestions = e;
    this._isInitializedDeferred.complete();
    this._onDidChange.fire({
      kind: "initialize"
    });
  }
  setInitializationError(e) {
    if (this.initState !== vie.Initializing) {
      throw new Error(`ChatModel is in the wrong state for setInitializationError: ${vie[this.initState]}`);
    }
    if (!this._isInitializedDeferred.isSettled) {
      this._isInitializedDeferred.error(e);
    }
  }
  waitForInitialization() {
    return this._isInitializedDeferred.p;
  }
  getRequests() {
    return this._requests;
  }
  get checkpoint() {
    return this._checkpoint;
  }
  setDisabledRequests(e) {
    this._requests.forEach(t => {
      const i = e.find(r => r.requestId === t.id);
      t.shouldBeRemovedOnSend = i;
      if (t.response) {
        t.response.shouldBeRemovedOnSend = i;
      }
    });
    this._onDidChange.fire({
      kind: "setHidden",
      hiddenRequestIds: e
    });
  }
  addRequest(e, t, i, r, s, o, a, l, u, d) {
    const m = new ncu(this, e, t, Date.now(), i, o, a, l, u, d);
    m.response = new vyi([], this, r, s, m.id, undefined, undefined, undefined, undefined, undefined, undefined, u);
    this._requests.push(m);
    this._lastMessageDate = Date.now();
    this._onDidChange.fire({
      kind: "addRequest",
      request: m
    });
    return m;
  }
  setCustomTitle(e) {
    this._customTitle = e;
  }
  updateRequest(e, t) {
    e.variableData = t;
    this._onDidChange.fire({
      kind: "changedRequest",
      request: e
    });
  }
  adoptRequest(e) {
    const t = e.session;
    const i = t._requests.findIndex(r => r.id === e.id);
    if (i !== -1) {
      t._requests.splice(i, 1);
      e.adoptTo(this);
      e.response?.adoptTo(this);
      this._requests.push(e);
      t._onDidChange.fire({
        kind: "removeRequest",
        requestId: e.id,
        responseId: e.response?.id,
        reason: 2
      });
      this._onDidChange.fire({
        kind: "addRequest",
        request: e
      });
    }
  }
  acceptResponseProgress(e, t, i) {
    e.response ||= new vyi([], this, undefined, undefined, e.id);
    if (e.response.isComplete) {
      throw new Error("acceptResponseProgress: Adding progress to a completed response");
    }
    if (t.kind === "markdownContent" || t.kind === "treeData" || t.kind === "inlineReference" || t.kind === "codeblockUri" || t.kind === "markdownVuln" || t.kind === "progressMessage" || t.kind === "command" || t.kind === "textEdit" || t.kind === "notebookEdit" || t.kind === "warning" || t.kind === "progressTask" || t.kind === "confirmation" || t.kind === "toolInvocation") {
      e.response.updateContent(t, i);
    } else if (t.kind === "usedContext" || t.kind === "reference") {
      e.response.applyReference(t);
    } else if (t.kind === "codeCitation") {
      e.response.applyCodeCitation(t);
    } else if (t.kind === "move") {
      this._onDidChange.fire({
        kind: "move",
        target: t.uri,
        range: t.range
      });
    } else if (t.kind === "undoStop") {
      e.response.addUndoStop(t);
    } else {
      this.logService.error(`Couldn't handle progress: ${JSON.stringify(t)}`);
    }
  }
  removeRequest(e, t = 0) {
    const i = this._requests.findIndex(s => s.id === e);
    const r = this._requests[i];
    if (i !== -1) {
      this._onDidChange.fire({
        kind: "removeRequest",
        requestId: r.id,
        responseId: r.response?.id,
        reason: t
      });
      this._requests.splice(i, 1);
      r.response?.dispose();
    }
  }
  cancelRequest(e) {
    if (e.response) {
      e.response.cancel();
    }
  }
  setResponse(e, t) {
    e.response ||= new vyi([], this, undefined, undefined, e.id);
    e.response.setResult(t);
  }
  completeResponse(e) {
    if (!e.response) {
      throw new Error("Call setResponse before completeResponse");
    }
    e.response.complete();
    this._onDidChange.fire({
      kind: "completedRequest",
      request: e
    });
  }
  setFollowups(e, t) {
    if (e.response) {
      e.response.setFollowups(t);
    }
  }
  setResponseModel(e, t) {
    e.response = t;
    this._onDidChange.fire({
      kind: "addResponse",
      response: t
    });
  }
  toExport() {
    return {
      requesterUsername: this.requesterUsername,
      requesterAvatarIconUri: this.requesterAvatarIconUri,
      responderUsername: this.responderUsername,
      responderAvatarIconUri: this.responderAvatarIcon,
      initialLocation: this.initialLocation,
      requests: this._requests.map(e => {
        const t = {
          ...e.message,
          parts: e.message.parts.map(s => s && "toJSON" in s ? s.toJSON() : s)
        };
        const i = e.response?.agent;
        const r = i && "toJSON" in i ? i.toJSON() : i ? {
          ...i
        } : undefined;
        return {
          requestId: e.id,
          message: t,
          variableData: e.variableData,
          response: e.response ? e.response.entireResponse.value.map(s => s.kind === "treeData" ? s.treeData : s.kind === "markdownContent" ? s.content : s) : undefined,
          responseId: e.response?.id,
          shouldBeRemovedOnSend: e.shouldBeRemovedOnSend,
          result: e.response?.result,
          followups: e.response?.followups,
          isCanceled: e.response?.isCanceled,
          vote: e.response?.vote,
          voteDownReason: e.response?.voteDownReason,
          agent: r,
          slashCommand: e.response?.slashCommand,
          usedContext: e.response?.usedContext,
          contentReferences: e.response?.contentReferences,
          codeCitations: e.response?.codeCitations,
          timestamp: e.timestamp
        };
      })
    };
  }
  toJSON() {
    return {
      version: 3,
      ...this.toExport(),
      sessionId: this.sessionId,
      creationDate: this._creationDate,
      isImported: this._isImported,
      lastMessageDate: this._lastMessageDate,
      customTitle: this._customTitle
    };
  }
  dispose() {
    this._requests.forEach(e => e.response?.dispose());
    this._onDidDispose.fire();
    super.dispose();
  }
};
nAa = tcu = __decorate([__param(2, Rr), __param(3, EI), __param(4, kV)], nAa);
