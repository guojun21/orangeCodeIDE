"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatAttachmentsContentPart.js
// Offset: 32453874 (bundle byte offset)
// Size: 6345 bytes
ri();
h0();
mb();
yn();
rt();
Hl();
Yn();
ts();
Qh();
Ku();
Cm();
hd();
td();
Ht();
dg();
dr();
hs();
si();
pl();
sN();
ns();
Id();
Wt();
Pd();
Fc();
Io();
A8();
zF();
Mm();
X1a();
Nme();
xS();
zgn();
ACi = new Sn("chatAttachmentResource", undefined, {
  type: "URI",
  description: _(5196, null)
});
tEa = class extends at {
  constructor(e, t = [], i = Ct(".chat-attached-context"), r, s, o, a, l, u, d) {
    super();
    this.variables = e;
    this.contentReferences = t;
    this.domNode = i;
    this.contextKeyService = r;
    this.instantiationService = s;
    this.openerService = o;
    this.hoverService = a;
    this.commandService = l;
    this.themeService = u;
    this.labelService = d;
    this.attachedContextDisposables = this._register(new Ut());
    this._onDidChangeVisibility = this._register(new Qe());
    this._contextResourceLabels = this._register(this.instantiationService.createInstance(c5, {
      onDidChangeVisibility: this._onDidChangeVisibility.event
    }));
    this.initAttachedContext(i);
    if (!i.childElementCount) {
      this.domNode = undefined;
    }
  }
  initAttachedContext(e) {
    th(e);
    this.attachedContextDisposables.clear();
    const t = this.attachedContextDisposables.add(F6());
    this.variables.forEach(async i => {
      let r = je.isUri(i.value) ? i.value : i.value && typeof i.value == "object" && "uri" in i.value && je.isUri(i.value.uri) ? i.value.uri : undefined;
      let s = i.value && typeof i.value == "object" && "range" in i.value && Zt.isIRange(i.value.range) ? i.value.range : undefined;
      const o = Rt(e, Ct(".chat-attached-context-attachment.show-file-icons"));
      const a = this._contextResourceLabels.create(o, {
        supportIcons: true,
        hoverDelegate: t,
        hoverTargetOverride: o
      });
      this.attachedContextDisposables.add(a);
      const l = this.contentReferences.find(g => typeof g.reference == "object" && "variableName" in g.reference && g.reference.variableName === i.name || je.isUri(g.reference) && fd(g.reference.path) === i.name);
      const u = l?.options?.status?.kind === lpn.Omitted;
      const d = u || l?.options?.status?.kind === lpn.Partial;
      let m;
      if (r && (i.isFile || i.isDirectory)) {
        const g = fd(r.path);
        const f = zN(r.path);
        const A = `${g} ${f}`;
        if (u) {
          m = s ? _(5197, null, A, s.startLineNumber, s.endLineNumber) : _(5198, null, A);
        } else if (d) {
          m = s ? _(5199, null, A, s.startLineNumber, s.endLineNumber) : _(5200, null, A);
        } else {
          m = s ? _(5201, null, A, s.startLineNumber, s.endLineNumber) : _(5202, null, A);
        }
        if (i.isOmitted) {
          this.customAttachment(o, A, t, m, u);
        } else {
          const w = {
            hidePath: true,
            title: l?.options?.status?.description
          };
          a.setFile(r, i.isFile ? {
            ...w,
            fileKind: xg.FILE,
            range: s
          } : {
            ...w,
            fileKind: xg.FOLDER,
            icon: this.themeService.getFileIconTheme().hasFolderIcons ? undefined : mVe
          });
        }
        this.instantiationService.invokeFunction(w => {
          if (r) {
            this.attachedContextDisposables.add(eEa(w, o, r));
          }
        });
      } else if (i.isImage) {
        m = _(5203, null, i.name);
        const g = otf(i) && i.isURL;
        const f = this.customAttachment(o, i.name, t, m, u, i.isImage, g, i.value);
        if (i.references) {
          o.style.cursor = "pointer";
          const A = () => {
            if (i.references && je.isUri(i.references[0].reference)) {
              this.openResource(i.references[0].reference, false, undefined);
            }
          };
          this.attachedContextDisposables.add(ei(o, "click", A));
        }
        if (!d) {
          const A = i.value;
          this.createImageElements(A, o, f);
          this.attachedContextDisposables.add(this.hoverService.setupManagedHover(t, o, f, {
            trapFocus: false
          }));
        }
        o.style.position = "relative";
      } else if (stf(i)) {
        m = _(5204, null, i.name);
        const g = ["file-icon", `${i.language}-lang-file-icon`];
        if (i.copiedFrom) {
          r = i.copiedFrom.uri;
          s = i.copiedFrom.range;
          const A = fd(r.path);
          a.setLabel(A, undefined, {
            extraClasses: g
          });
        } else {
          a.setLabel(i.fileName, undefined, {
            extraClasses: g
          });
        }
        o.appendChild(Ct("span.attachment-additional-info", {}, `Pasted ${i.pastedLines}`));
        o.style.position = "relative";
        const f = {
          markdown: {
            value: `**${i.copiedFrom ? this.labelService.getUriLabel(i.copiedFrom.uri, {
              relative: true
            }) : i.fileName}**

---

\`\`\`${i.language}
${i.code}
\`\`\``
          },
          markdownNotSupportedFallback: i.code
        };
        if (!this.attachedContextDisposables.isDisposed) {
          this.attachedContextDisposables.add(this.hoverService.setupManagedHover(t, o, f, {
            trapFocus: true
          }));
          const A = i.copiedFrom?.uri;
          if (A) {
            this.attachedContextDisposables.add(this.instantiationService.invokeFunction(w => eEa(w, o, A)));
          }
        }
      } else {
        const g = i.fullName ?? i.name;
        const f = i.icon?.id ? `$(${i.icon.id}) ${g}` : g;
        a.setLabel(f, l?.options?.status?.description);
        m = _(5205, null, i.name);
      }
      if (i.kind === "symbol") {
        const g = this.attachedContextDisposables.add(this.contextKeyService.createScoped(o));
        this.attachedContextDisposables.add(this.instantiationService.invokeFunction(f => qAu(f, o, g, {
          ...i,
          kind: i.symbolKind
        }, st.ChatInputSymbolAttachmentContext)));
      }
      if (d) {
        o.classList.add("warning");
      }
      const p = l?.options?.status?.description;
      if (d) {
        m = `${m}${p ? ` ${p}
      ` : ""}`;
        for (const g of [".monaco-icon-suffix-container", ".monaco-icon-name-container"]) {
          const f = a.element.querySelector(g);
          if (f) {
            f.classList.add("warning");
          }
        }
      }
      if (!this.attachedContextDisposables.isDisposed) {
        if (r) {
          o.style.cursor = "pointer";
          if (!this.attachedContextDisposables.isDisposed) {
            this.attachedContextDisposables.add(ei(o, ir.CLICK, async g => {
              zu.stop(g, true);
              if (i.isDirectory) {
                this.openResource(r, true);
              } else {
                this.openResource(r, false, s);
              }
            }));
          }
        }
        o.ariaLabel = m;
        o.tabIndex = 0;
      }
    });
  }
  customAttachment(e, t, i, r, s, o, a, l) {
    const u = Ct("div.chat-attached-context-pill", {}, Ct(s ? "span.codicon.codicon-warning" : "span.codicon.codicon-file-media"));
    const d = Ct("span.chat-attached-context-custom-text", {}, t);
    e.appendChild(u);
    e.appendChild(d);
    const m = Ct("div.chat-attached-context-hover");
    m.setAttribute("aria-label", r);
    if (a && !s && l) {
      m.textContent = _(5206, null, Esy(l));
      this.attachedContextDisposables.add(this.hoverService.setupManagedHover(i, e, m, {
        trapFocus: true
      }));
    }
    if (s) {
      e.classList.add("warning");
      m.textContent = _(5207, null, o ? "image" : "file");
      this.attachedContextDisposables.add(this.hoverService.setupManagedHover(i, e, m, {
        trapFocus: true
      }));
    }
    return m;
  }
  openResource(e, t, i) {
    if (t) {
      this.commandService.executeCommand(V1t.id, e);
      return;
    }
    const s = {
      fromUserGesture: true,
      editorOptions: i ? {
        selection: i
      } : undefined
    };
    this.openerService.open(e, s);
  }
  async createImageElements(e, t, i) {
    const r = new Blob([e], {
      type: "image/png"
    });
    const s = URL.createObjectURL(r);
    const o = Ct("img.chat-attached-context-image", {
      src: s,
      alt: ""
    });
    const a = Ct("img.chat-attached-context-pill-image", {
      src: s,
      alt: ""
    });
    const l = Ct("div.chat-attached-context-pill", {}, a);
    const u = t.querySelector(".chat-attached-context-pill");
    if (u) {
      u.replaceWith(l);
    }
    i.appendChild(o);
    o.onload = () => {
      URL.revokeObjectURL(s);
    };
    o.onerror = () => {
      const d = Ct("div.chat-attached-context-pill", {}, Ct("span.codicon.codicon-file-media"));
      const m = Ct("div.chat-attached-context-pill", {}, d);
      const p = t.querySelector(".chat-attached-context-pill");
      if (p) {
        p.replaceWith(m);
      }
    };
  }
};
tEa = __decorate([__param(3, wi), __param(4, ln), __param(5, Ja), __param(6, Kc), __param(7, fr), __param(8, bo), __param(9, Ol)], tEa);
