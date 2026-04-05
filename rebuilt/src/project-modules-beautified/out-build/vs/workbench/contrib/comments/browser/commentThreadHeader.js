"use strict";

// Module: out-build/vs/workbench/contrib/comments/browser/commentThreadHeader.js
// Offset: 33214379 (bundle byte offset)
// Size: 2965 bytes
ri();
Ov();
nl();
qi();
rt();
oa();
Ht();
dg();
si();
Wt();
Pm();
Jr();
pl();
h0();
f8f = us("review-comment-collapse", Be.chevronUp, _(6012, null));
Gwu = "expand-review-action " + Qt.asClassName(f8f);
b8f = "expand-review-action " + Qt.asClassName(Be.trashcan);
ATa = class extends at {
  constructor(e, t, i, r, s, o, a) {
    super();
    this._delegate = t;
    this._commentMenus = i;
    this._commentThread = r;
    this._contextKeyService = s;
    this._instantiationService = o;
    this._contextMenuService = a;
    this._headElement = Ct(".head");
    e.appendChild(this._headElement);
    this._register($i(() => this._headElement.remove()));
    this._fillHead();
  }
  _fillHead() {
    const e = Rt(this._headElement, Ct(".review-title"));
    this._headingLabel = Rt(e, Ct("span.filename"));
    this.createThreadLabel();
    const t = Rt(this._headElement, Ct(".review-actions"));
    this._actionbarWidget = new Gf(t, {
      actionViewItemProvider: GR.bind(undefined, this._instantiationService)
    });
    this._register(this._actionbarWidget);
    const i = Jwu(this._commentThread.comments) ? Gwu : b8f;
    this._collapseAction = new Hs("workbench.action.hideComment", _(6013, null), i, true, () => this._delegate.collapse());
    if (!Jwu(this._commentThread.comments)) {
      const s = this._register(new uo());
      s.value = this._commentThread.onDidChangeComments(() => {
        if (Jwu(this._commentThread.comments)) {
          this._collapseAction.class = Gwu;
          s.clear();
        }
      });
    }
    const r = this._commentMenus.getCommentThreadTitleActions(this._contextKeyService);
    this._register(r);
    this.setActionBarActions(r);
    this._register(r);
    this._register(r.onDidChange(s => {
      this.setActionBarActions(r);
    }));
    this._register(ei(this._headElement, ir.CONTEXT_MENU, s => this.onContextMenu(s)));
    this._actionbarWidget.context = this._commentThread;
  }
  setActionBarActions(e) {
    const t = e.getActions({
      shouldForwardArgs: true
    }).reduce((i, [, r]) => [...i, ...r], []);
    this._actionbarWidget.clear();
    this._actionbarWidget.push([...t, this._collapseAction], {
      label: false,
      icon: true
    });
  }
  updateCommentThread(e) {
    this._commentThread = e;
    this._actionbarWidget.context = this._commentThread;
    this.createThreadLabel();
  }
  createThreadLabel() {
    let e;
    e = this._commentThread.label;
    if (e === undefined) {
      if (!this._commentThread.comments || !this._commentThread.comments.length) {
        e = _(6014, null);
      }
    }
    if (e) {
      this._headingLabel.textContent = LA(e);
      this._headingLabel.setAttribute("aria-label", e);
    }
  }
  updateHeight(e) {
    this._headElement.style.height = `${e}px`;
    this._headElement.style.lineHeight = this._headElement.style.height;
  }
  onContextMenu(e) {
    const t = this._commentMenus.getCommentThreadTitleContextActions(this._contextKeyService);
    if (!t.length) {
      return;
    }
    const i = new yy(As(this._headElement), e);
    this._contextMenuActionRunner ||= this._register(new jD());
    this._contextMenuService.showContextMenu({
      getAnchor: () => i,
      getActions: () => t,
      actionRunner: this._contextMenuActionRunner,
      getActionsContext: () => ({
        commentControlHandle: this._commentThread.controllerHandle,
        commentThreadHandle: this._commentThread.commentThreadHandle,
        $mid: 7
      })
    });
  }
};
ATa = __decorate([__param(4, wi), __param(5, ln), __param(6, kc)], ATa);
