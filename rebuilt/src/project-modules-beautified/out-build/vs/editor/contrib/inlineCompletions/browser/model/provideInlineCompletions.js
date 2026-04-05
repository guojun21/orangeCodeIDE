"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/provideInlineCompletions.js
// Offset: 25317755 (bundle byte offset)
// Size: 3594 bytes
Lv();
vr();
Po();
cu();
_s();
Bc();
Y1e();
$I();
tl();
ts();
CSA();
EW();
q3t();
Vde();
Tgi();
vr();
Po();
rt();
Tg();
ejl = class {
  constructor(n, e, t) {
    this.completions = n;
    this.hashs = e;
    this.providerResults = t;
  }
  has(n) {
    return this.hashs.has(n.hash());
  }
  isEmpty() {
    return this.completions.length === 0 || this.completions.every(n => n.range.isEmpty() && n.insertText.length === 0);
  }
  dispose() {
    for (const n of this.providerResults) {
      n.removeRef();
    }
  }
};
cyg = class {
  constructor(n, e) {
    this.inlineCompletions = n;
    this.provider = e;
    this.refCount = 1;
  }
  addRef() {
    this.refCount++;
  }
  removeRef() {
    this.refCount--;
    if (this.refCount === 0) {
      this.provider.freeInlineCompletions(this.inlineCompletions);
    }
  }
};
lyg = class _Wa {
  static from(e, t, i, r, s) {
    let o;
    let a;
    let l = e.range ? Zt.lift(e.range) : i;
    if (typeof e.insertText == "string") {
      o = e.insertText;
      if (s && e.completeBracketPairs) {
        o = ayg(o, l.getStartPosition(), r, s);
        const u = o.length - e.insertText.length;
        if (u !== 0) {
          l = new Zt(l.startLineNumber, l.startColumn, l.endLineNumber, l.endColumn + u);
        }
      }
      a = undefined;
    } else if ("snippet" in e.insertText) {
      const u = e.insertText.snippet.length;
      if (s && e.completeBracketPairs) {
        e.insertText.snippet = ayg(e.insertText.snippet, l.getStartPosition(), r, s);
        const m = e.insertText.snippet.length - u;
        if (m !== 0) {
          l = new Zt(l.startLineNumber, l.startColumn, l.endLineNumber, l.endColumn + m);
        }
      }
      const d = new Ute().parse(e.insertText.snippet);
      if (d.children.length === 1 && d.children[0] instanceof gz) {
        o = d.children[0].value;
        a = undefined;
      } else {
        o = d.toString();
        a = {
          snippet: e.insertText.snippet,
          range: l
        };
      }
    } else {
      QN(e.insertText);
    }
    return new _Wa(o, e.command, e.shownCommand, e.action, l, o, a, Zt.lift(e.showRange) ?? undefined, e.additionalTextEdits || lSA(), e, t);
  }
  static {
    this.ID = 1;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p = `InlineCompletion:${_Wa.ID++}`) {
    this.filterText = e;
    this.command = t;
    this.shownCommand = i;
    this.action = r;
    this.range = s;
    this.insertText = o;
    this.snippetInfo = a;
    this.cursorShowRange = l;
    this.additionalTextEdits = u;
    this.sourceInlineCompletion = d;
    this.source = m;
    this.id = p;
    this._didCallShow = false;
  }
  get isInlineEdit() {
    return this.sourceInlineCompletion.isInlineEdit;
  }
  get didShow() {
    return this._didCallShow;
  }
  markAsShown() {
    this._didCallShow = true;
  }
  withRangeInsertTextAndFilterText(e, t, i) {
    return new _Wa(i, this.command, this.shownCommand, this.action, e, t, this.snippetInfo, this.cursorShowRange, this.additionalTextEdits, this.sourceInlineCompletion, this.source, this.id);
  }
  hash() {
    return JSON.stringify({
      insertText: this.insertText,
      range: this.range.toString()
    });
  }
  toSingleTextEdit() {
    return new cI(this.range, this.insertText);
  }
};
