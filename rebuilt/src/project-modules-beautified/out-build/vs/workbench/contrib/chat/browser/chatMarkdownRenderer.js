"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatMarkdownRenderer.js
// Offset: 32857168 (bundle byte offset)
// Size: 1341 bytes
mb();
rt();
Yn();
oN();
Ku();
hs();
ns();
Id();
Fc();
UMe();
LSi();
d9f = ["b", "blockquote", "br", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "li", "ol", "p", "pre", "strong", "sub", "sup", "table", "tbody", "td", "th", "thead", "tr", "ul", "a", "img", "span", "div"];
$xa = class extends sL {
  constructor(e, t, i, r, s, o, a) {
    super(e ?? {}, t, i);
    this.trustedDomainService = r;
    this.hoverService = s;
    this.fileService = o;
    this.commandService = a;
  }
  render(e, t, i) {
    t = {
      ...t,
      remoteImageIsAllowed: o => this.trustedDomainService.isValid(o),
      sanitizerOptions: {
        replaceWithPlaintext: true,
        allowedTags: d9f
      }
    };
    const r = e && e.supportHtml ? {
      ...e,
      value: `<body>

${e.value}</body>`
    } : e;
    const s = super.render(r, t, i);
    return this.attachCustomHover(s);
  }
  attachCustomHover(e) {
    const t = new Ut();
    e.element.querySelectorAll("a").forEach(i => {
      if (i.title) {
        const r = i.title;
        i.title = "";
        t.add(this.hoverService.setupManagedHover(Sm("element"), i, r));
      }
    });
    return {
      element: e.element,
      dispose: () => {
        e.dispose();
        t.dispose();
      }
    };
  }
  async openMarkdownLink(e, t) {
    try {
      const i = je.parse(e);
      if ((await this.fileService.stat(i)).isDirectory) {
        return this.commandService.executeCommand(Vgn, i);
      }
    } catch {}
    return super.openMarkdownLink(e, t);
  }
};
$xa = __decorate([__param(1, Jl), __param(2, Ja), __param(3, cbn), __param(4, Kc), __param(5, Gr), __param(6, fr)], $xa);
