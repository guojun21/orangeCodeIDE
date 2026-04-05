"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellDragRenderer.js
// Offset: 33235666 (bundle byte offset)
// Size: 3614 bytes
ri();
ive();
xf();
_r();
ts();
Tg();
LSe();
C8f = class Szb {
  static {
    this._ttPolicy = nve("cellRendererEditorText", {
      createHTML(e) {
        return e;
      }
    });
  }
  getRichText(e, t) {
    const i = e.getModel();
    if (!i) {
      return null;
    }
    const r = this.getDefaultColorMap();
    const s = e.getOptions().get(52);
    const o = "--notebook-editor-font-family";
    const a = "--notebook-editor-font-size";
    const l = "--notebook-editor-font-weight";
    const u = `color: ${r[1]};background-color: ${r[2]};font-family: var(${o});font-weight: var(${l});font-size: var(${a});line-height: ${s.lineHeight}px;white-space: pre;`;
    const d = Ct("div", {
      style: u
    });
    const m = s.fontSize;
    const p = s.fontWeight;
    d.style.setProperty(o, s.fontFamily);
    d.style.setProperty(a, `${m}px`);
    d.style.setProperty(l, p);
    const g = this.getRichTextLinesAsHtml(i, t, r);
    d.innerHTML = g;
    return d;
  }
  getRichTextLinesAsHtml(e, t, i) {
    const r = t.startLineNumber;
    const s = t.startColumn;
    const o = t.endLineNumber;
    const a = t.endColumn;
    const l = e.getOptions().tabSize;
    let u = "";
    for (let d = r; d <= o; d++) {
      const m = e.tokenization.getLineTokens(d);
      const p = m.getLineContent();
      const g = d === r ? s - 1 : 0;
      const f = d === o ? a - 1 : p.length;
      if (p === "") {
        u += "<br>";
      } else {
        u += ybh(p, m.inflate(), i, g, f, l, Sc);
      }
    }
    return Szb._ttPolicy?.createHTML(u) ?? u;
  }
  getDefaultColorMap() {
    const e = pT.getColorMap();
    const t = ["#000000"];
    if (e) {
      for (let i = 1, r = e.length; i < r; i++) {
        t[i] = Xr.Format.CSS.formatHex(e[i]);
      }
    }
    return t;
  }
};
S8f = class {
  getDragImage(n, e, t) {
    let i = this.getDragImageImpl(n, e, t);
    if (!i) {
      i = document.createElement("div");
      i.textContent = "1 cell";
    }
    return i;
  }
  getDragImageImpl(n, e, t) {
    const i = n.container.cloneNode(true);
    i.classList.forEach(o => i.classList.remove(o));
    i.classList.add("cell-drag-image", "monaco-list-row", "focused", `${t}-cell-row`);
    const r = i.querySelector(".cell-editor-container");
    if (!r) {
      return null;
    }
    const s = new C8f().getRichText(e, new Zt(1, 1, 1, 1000));
    if (s) {
      um(r, s);
      return i;
    } else {
      return null;
    }
  }
};
