"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/attachments/promptAttachments/promptAttachmentWidget.js
// Offset: 31049904 (bundle byte offset)
// Size: 2676 bytes
Ht();
Yn();
ri();
yn();
qi();
Jr();
Mm();
fk();
Yr();
Pd();
h0();
hd();
Id();
rt();
Ku();
ns();
dr();
Yye();
si();
pl();
mb();
dg();
lSa = class extends at {
  get uri() {
    return this.model.reference.uri;
  }
  onDispose(e) {
    this._register(this._onDispose.event(e));
    return this;
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    super();
    this.model = e;
    this.resourceLabels = t;
    this.contextKeyService = i;
    this.contextMenuService = r;
    this.hoverService = s;
    this.labelService = o;
    this.menuService = a;
    this.fileService = l;
    this.languageService = u;
    this.modelService = d;
    this._onDispose = this._register(new Qe());
    this.renderDisposables = this._register(new Ut());
    this.domNode = Ct(".chat-prompt-attachment.chat-attached-context-attachment.show-file-icons.implicit");
    this.render = this.render.bind(this);
    this.dispose = this.dispose.bind(this);
    this.model.onUpdate(this.render);
    this.model.onDispose(this.dispose);
    this.render();
  }
  render() {
    th(this.domNode);
    this.renderDisposables.clear();
    this.domNode.classList.remove("warning", "error", "disabled");
    const {
      topError: e
    } = this.model;
    const t = this.resourceLabels.create(this.domNode, {
      supportIcons: true
    });
    const i = this.model.reference.uri;
    const r = ca(i);
    const s = Td(i);
    const o = `${r} ${s}`;
    const a = _(5159, null, o);
    const l = this.labelService.getUriLabel(i, {
      relative: true
    });
    const u = _(5160, null);
    let d = `${u} ${l}`;
    if (e) {
      const {
        errorSubject: w
      } = e;
      const C = w === "root";
      this.domNode.classList.add(C ? "error" : "warning");
      const x = _(C ? 5161 : 5162, null);
      d += `
[${x}]: ${e.localizedMessage}`;
    }
    const m = lIf(i);
    t.setFile(je.file(m), {
      fileKind: xg.FILE,
      hidePath: true,
      range: undefined,
      title: d,
      icon: Qt.fromId(Be.bookmark.id),
      extraClasses: []
    });
    this.domNode.ariaLabel = a;
    this.domNode.tabIndex = 0;
    const p = Rt(this.domNode, Ct("span.chat-implicit-hint", undefined, u));
    this._register(this.hoverService.setupManagedHover(Sm("element"), p, d));
    const g = this.renderDisposables.add(new pw(this.domNode, {
      supportIcons: true,
      title: _(5163, null)
    }));
    g.icon = Be.close;
    this.renderDisposables.add(g.onDidClick(w => {
      w.stopPropagation();
      this.model.dispose();
    }));
    const f = this.renderDisposables.add(this.contextKeyService.createScoped(this.domNode));
    this.renderDisposables.add(new Ep(f, this.fileService, this.languageService, this.modelService)).set(i);
    this.renderDisposables.add(ei(this.domNode, ir.CONTEXT_MENU, async w => {
      const C = new yy(As(w), w);
      zu.stop(w, true);
      this.contextMenuService.showContextMenu({
        contextKeyService: f,
        getAnchor: () => C,
        getActions: () => {
          const x = this.menuService.getMenuActions(st.ChatInputResourceAttachmentContext, f, {
            arg: i
          });
          return YH(x);
        }
      });
    }));
  }
  dispose() {
    this._onDispose.fire();
    super.dispose();
  }
};
lSa = __decorate([__param(2, wi), __param(3, kc), __param(4, Kc), __param(5, Ol), __param(6, xd), __param(7, Gr), __param(8, Jl), __param(9, Il)], lSa);
