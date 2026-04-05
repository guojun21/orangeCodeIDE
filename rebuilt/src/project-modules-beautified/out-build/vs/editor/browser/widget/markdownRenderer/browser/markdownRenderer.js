"use strict";

// Module: out-build/vs/editor/browser/widget/markdownRenderer/browser/markdownRenderer.js
// Offset: 2427070 (bundle byte offset)
// Size: 1413 bytes
y3();
ive();
_s();
rt();
Fc();
Ku();
WE();
LSe();
HY();
BhA();
sL = class {
  static {
    IBc = this;
  }
  static {
    this._ttpTokenizer = nve("tokenizeToString", {
      createHTML(e) {
        return e;
      }
    });
  }
  constructor(e, t, i) {
    this._options = e;
    this._languageService = t;
    this._openerService = i;
  }
  render(e, t, i) {
    if (!e) {
      return {
        element: document.createElement("span"),
        dispose: () => {}
      };
    }
    const r = new Ut();
    const s = r.add(Jde(e, {
      ...this._getRenderOptions(e, r),
      ...t
    }, i));
    s.element.classList.add("rendered-markdown");
    return {
      element: s.element,
      dispose: () => r.dispose()
    };
  }
  _getRenderOptions(e, t) {
    return {
      codeBlockRenderer: async (i, r) => {
        let s;
        if (i) {
          s = this._languageService.getLanguageIdByLanguageName(i);
        } else if (this._options.editor) {
          s = this._options.editor.getModel()?.getLanguageId();
        }
        s ||= o_;
        const o = await Oft(this._languageService, r, s);
        const a = document.createElement("span");
        a.innerHTML = IBc._ttpTokenizer?.createHTML(o) ?? o;
        if (this._options.editor) {
          const l = this._options.editor.getOption(52);
          bF(a, l);
        } else if (this._options.codeBlockFontFamily) {
          a.style.fontFamily = this._options.codeBlockFontFamily;
        }
        if (this._options.codeBlockFontSize !== undefined) {
          a.style.fontSize = this._options.codeBlockFontSize;
        }
        return a;
      },
      actionHandler: {
        callback: i => this.openMarkdownLink(i, e),
        disposables: t
      }
    };
  }
  async openMarkdownLink(e, t) {
    await Y3t(this._openerService, e, t.isTrusted);
  }
};
sL = IBc = __decorate([__param(1, Jl), __param(2, Ja)], sL);
