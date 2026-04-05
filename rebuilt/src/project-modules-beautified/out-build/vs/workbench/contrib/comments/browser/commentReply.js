"use strict";

// Module: out-build/vs/workbench/contrib/comments/browser/commentReply.js
// Offset: 33180306 (bundle byte offset)
// Size: 8638 bytes
ri();
mb();
a3t();
rt();
zr();
Yn();
Bc();
td();
Ht();
Ei();
ka();
Nwu();
cwe();
u2e();
rki();
Id();
pl();
tl();
h8f = 0;
$wu = "commenteditordecoration";
gTa = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x) {
    super();
    this.owner = e;
    this._parentEditor = i;
    this._commentThread = r;
    this._scopedInstatiationService = s;
    this._contextKeyService = o;
    this._commentMenus = a;
    this._commentOptions = l;
    this._pendingComment = u;
    this._parentThread = d;
    this._actionRunDelegate = p;
    this.commentService = g;
    this.keybindingService = A;
    this.contextMenuService = w;
    this.hoverService = C;
    this.textModelService = x;
    this._commentThreadDisposables = [];
    this._editorHeight = kbn;
    this._container = Rt(t, Ct(".comment-form-container"));
    this._form = Rt(this._container, Ct(".comment-form"));
    this.commentEditor = this._register(this._scopedInstatiationService.createInstance(d2e, this._form, d2e.getEditorOptions(f), o, this._parentThread));
    this.commentEditorIsEmpty = SD.commentIsEmpty.bindTo(this._contextKeyService);
    this.commentEditorIsEmpty.set(!this._pendingComment);
    this.initialize(m);
  }
  async initialize(e) {
    this.avatar = Rt(this._form, Ct(".avatar-container"));
    this.updateAuthorInfo();
    const t = this._commentThread.comments && this._commentThread.comments.length > 0;
    const i = Wr() + "-" + (t ? this._commentThread.threadId : ++h8f);
    const r = JSON.stringify({
      extensionId: this._commentThread.extensionId,
      commentThreadId: this._commentThread.threadId
    });
    let s = je.from({
      scheme: _n.commentsInput,
      path: `/${this._commentThread.extensionId}/commentinput-${i}.md?${r}`
    });
    const o = this.commentService.getCommentController(this.owner);
    if (o) {
      s = s.with({
        authority: o.id
      });
    }
    const a = await this.textModelService.createModelReference(s);
    a.object.textEditorModel.setValue(this._pendingComment?.body || "");
    this._register(a);
    this.commentEditor.setModel(a.object.textEditorModel);
    if (this._pendingComment) {
      this.commentEditor.setPosition(this._pendingComment.cursor);
    }
    this.calculateEditorHeight();
    this._register(a.object.textEditorModel.onDidChangeContent(() => {
      this.setCommentEditorDecorations();
      this.commentEditorIsEmpty?.set(!this.commentEditor.getValue());
      if (this.calculateEditorHeight()) {
        this.commentEditor.layout({
          height: this._editorHeight,
          width: this.commentEditor.getLayoutInfo().width
        });
        this.commentEditor.render(true);
      }
    }));
    this.createTextModelListener(this.commentEditor, this._form);
    this.setCommentEditorDecorations();
    if (this._pendingComment) {
      this.expandReplyArea();
    } else if (t) {
      this.createReplyButton(this.commentEditor, this._form);
    } else if (e && this._commentThread.comments && this._commentThread.comments.length === 0) {
      this.expandReplyArea();
    }
    this._error = Rt(this._container, Ct(".validation-error.hidden"));
    const l = Rt(this._container, Ct(".form-actions"));
    this._formActions = Rt(l, Ct(".other-actions"));
    this.createCommentWidgetFormActions(this._formActions, a.object.textEditorModel);
    this._editorActions = Rt(l, Ct(".editor-actions"));
    this.createCommentWidgetEditorActions(this._editorActions, a.object.textEditorModel);
  }
  calculateEditorHeight() {
    const e = u8f(this._parentEditor, this.commentEditor, this._editorHeight);
    if (e !== this._editorHeight) {
      this._editorHeight = e;
      return true;
    } else {
      return false;
    }
  }
  updateCommentThread(e) {
    const t = this.commentEditor.hasTextFocus();
    const i = !this._commentThread.comments?.length && !e.comments?.length;
    if (!this._reviewThreadReplyButton) {
      this.createReplyButton(this.commentEditor, this._form);
    }
    if (this._commentThread.comments && this._commentThread.comments.length === 0 && !i) {
      this.expandReplyArea();
    }
    if (t) {
      this.commentEditor.focus();
    }
  }
  getPendingComment() {
    const e = this.commentEditor.getModel();
    if (e && e.getValueLength() > 0) {
      return {
        body: e.getValue(),
        cursor: this.commentEditor.getPosition() ?? new ar(1, 1)
      };
    }
  }
  setPendingComment(e) {
    this._pendingComment = e;
    this.expandReplyArea();
    this.commentEditor.setValue(e.body);
    this.commentEditor.setPosition(e.cursor);
  }
  layout(e) {
    this.commentEditor.layout({
      height: this._editorHeight,
      width: e - 54
    });
  }
  focusIfNeeded() {
    if (!this._commentThread.comments || !this._commentThread.comments.length) {
      this.commentEditor.focus();
    } else if ((this.commentEditor.getModel()?.getValueLength() ?? 0) > 0) {
      this.expandReplyArea();
    }
  }
  focusCommentEditor() {
    this.commentEditor.focus();
  }
  expandReplyAreaAndFocusCommentEditor() {
    this.expandReplyArea();
    this.commentEditor.focus();
  }
  isCommentEditorFocused() {
    return this.commentEditor.hasWidgetFocus();
  }
  updateAuthorInfo() {
    this.avatar.textContent = "";
    if (typeof this._commentThread.canReply != "boolean" && this._commentThread.canReply.iconPath) {
      this.avatar.style.display = "block";
      const e = Rt(this.avatar, Ct("img.avatar"));
      e.src = og.uriToBrowserUri(je.revive(this._commentThread.canReply.iconPath)).toString(true);
    } else {
      this.avatar.style.display = "none";
    }
  }
  updateCanReply() {
    this.updateAuthorInfo();
    if (this._commentThread.canReply) {
      this._container.style.display = "block";
    } else {
      this._container.style.display = "none";
    }
  }
  async submitComment() {
    await this._commentFormActions?.triggerDefaultAction();
    this._pendingComment = undefined;
  }
  setCommentEditorDecorations() {
    const t = this._commentThread.comments && this._commentThread.comments.length > 0 ? this._commentOptions?.placeHolder || _(5903, null) : this._commentOptions?.placeHolder || _(5904, null);
    this.commentEditor.updateOptions({
      placeholder: t
    });
  }
  createTextModelListener(e, t) {
    this._commentThreadDisposables.push(e.onDidFocusEditorWidget(() => {
      this._commentThread.input = {
        uri: e.getModel().uri,
        value: e.getValue()
      };
      this.commentService.setActiveEditingCommentThread(this._commentThread);
      this.commentService.setActiveCommentAndThread(this.owner, {
        thread: this._commentThread
      });
    }));
    this._commentThreadDisposables.push(e.getModel().onDidChangeContent(() => {
      const i = e.getValue();
      if (this._commentThread.input && this._commentThread.input.uri === e.getModel().uri && this._commentThread.input.value !== i) {
        const r = this._commentThread.input;
        r.value = i;
        this._commentThread.input = r;
      }
      this.commentService.setActiveEditingCommentThread(this._commentThread);
    }));
    this._commentThreadDisposables.push(this._commentThread.onDidChangeInput(i => {
      const r = this._commentThread;
      const s = e.getModel();
      if (!r.input || !s || r.input.uri === s.uri) {
        if (i && e.getValue() !== i.value) {
          e.setValue(i.value);
          if (i.value === "") {
            this._pendingComment = {
              body: "",
              cursor: new ar(1, 1)
            };
            t.classList.remove("expand");
            e.getDomNode().style.outline = "";
            this._error.textContent = "";
            this._error.classList.add("hidden");
          }
        }
      }
    }));
  }
  createCommentWidgetFormActions(e, t) {
    const i = this._commentMenus.getCommentThreadActions(this._contextKeyService);
    this._register(i);
    this._register(i.onDidChange(() => {
      this._commentFormActions.setActions(i);
    }));
    this._commentFormActions = new Sbn(this.keybindingService, this._contextKeyService, this.contextMenuService, e, async r => {
      await this._actionRunDelegate?.();
      await r.run({
        thread: this._commentThread,
        text: this.commentEditor.getValue(),
        $mid: 9
      });
      this.hideReplyArea();
    });
    this._register(this._commentFormActions);
    this._commentFormActions.setActions(i);
  }
  createCommentWidgetEditorActions(e, t) {
    const i = this._commentMenus.getCommentEditorActions(this._contextKeyService);
    this._register(i);
    this._register(i.onDidChange(() => {
      this._commentEditorActions.setActions(i, true);
    }));
    this._commentEditorActions = new Sbn(this.keybindingService, this._contextKeyService, this.contextMenuService, e, async r => {
      this._actionRunDelegate?.();
      r.run({
        thread: this._commentThread,
        text: this.commentEditor.getValue(),
        $mid: 9
      });
      this.focusCommentEditor();
    });
    this._register(this._commentEditorActions);
    this._commentEditorActions.setActions(i, true);
  }
  get isReplyExpanded() {
    return this._container.classList.contains("expand");
  }
  expandReplyArea() {
    if (!this.isReplyExpanded) {
      this._container.classList.add("expand");
      this.commentEditor.focus();
      this.commentEditor.layout();
    }
  }
  clearAndExpandReplyArea() {
    if (!this.isReplyExpanded) {
      this.commentEditor.setValue("");
      this.expandReplyArea();
    }
  }
  hideReplyArea() {
    const e = this.commentEditor.getDomNode();
    if (e) {
      e.style.outline = "";
    }
    this.commentEditor.setValue("");
    this._pendingComment = {
      body: "",
      cursor: new ar(1, 1)
    };
    this._container.classList.remove("expand");
    this._error.textContent = "";
    this._error.classList.add("hidden");
  }
  createReplyButton(e, t) {
    this._reviewThreadReplyButton = Rt(t, Ct(`button.review-thread-reply-button.${USe}`));
    this._register(this.hoverService.setupManagedHover(Sm("mouse"), this._reviewThreadReplyButton, this._commentOptions?.prompt || _(5905, null)));
    this._reviewThreadReplyButton.textContent = this._commentOptions?.prompt || _(5906, null);
    this._register(ei(this._reviewThreadReplyButton, "click", i => this.clearAndExpandReplyArea()));
    this._register(ei(this._reviewThreadReplyButton, "focus", i => this.clearAndExpandReplyArea()));
    this._register(e.onDidBlurEditorWidget(() => {
      if (e.getModel().getValueLength() === 0 && t.classList.contains("expand")) {
        t.classList.remove("expand");
      }
    }));
  }
  dispose() {
    super.dispose();
    Bo(this._commentThreadDisposables);
  }
};
gTa = __decorate([__param(12, QV), __param(13, Fn), __param(14, mo), __param(15, kc), __param(16, Kc), __param(17, El)], gTa);
