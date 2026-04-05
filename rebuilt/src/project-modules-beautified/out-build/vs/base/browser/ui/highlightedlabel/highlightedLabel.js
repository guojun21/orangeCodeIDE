"use strict";

// Module: out-build/vs/base/browser/ui/highlightedlabel/highlightedLabel.js
// Offset: 24971332 (bundle byte offset)
// Size: 1598 bytes
ri();
O6();
mb();
bS();
rt();
np();
qx = class OWb extends at {
  constructor(e, t) {
    super();
    this.options = t;
    this.text = "";
    this.title = "";
    this.highlights = [];
    this.didEverRender = false;
    this.supportIcons = t?.supportIcons ?? false;
    this.domNode = Rt(e, Ct("span.monaco-highlighted-label"));
  }
  get element() {
    return this.domNode;
  }
  set(e, t = [], i = "", r) {
    e ||= "";
    if (r) {
      e = OWb.escapeNewLines(e, t);
    }
    if (!this.didEverRender || this.text !== e || this.title !== i || !fv(this.highlights, t)) {
      this.text = e;
      this.title = i;
      this.highlights = t;
      this.render();
    }
  }
  render() {
    const e = [];
    let t = 0;
    for (const i of this.highlights) {
      if (i.end === i.start) {
        continue;
      }
      if (t < i.start) {
        const o = this.text.substring(t, i.start);
        if (this.supportIcons) {
          e.push(...a_(o));
        } else {
          e.push(o);
        }
        t = i.start;
      }
      const r = this.text.substring(t, i.end);
      const s = Ct("span.highlight", undefined, ...(this.supportIcons ? a_(r) : [r]));
      if (i.extraClasses) {
        s.classList.add(...i.extraClasses);
      }
      e.push(s);
      t = i.end;
    }
    if (t < this.text.length) {
      const i = this.text.substring(t);
      if (this.supportIcons) {
        e.push(...a_(i));
      } else {
        e.push(i);
      }
    }
    um(this.domNode, ...e);
    if (this.options?.hoverDelegate?.showNativeHover) {
      this.domNode.title = this.title;
    } else if (!this.customHover && this.title !== "") {
      const i = this.options?.hoverDelegate ?? Sm("mouse");
      this.customHover = this._register(q4().setupManagedHover(i, this.domNode, this.title));
    } else if (this.customHover) {
      this.customHover.update(this.title);
    }
    this.didEverRender = true;
  }
  static escapeNewLines(e, t) {
    let i = 0;
    let r = 0;
    return e.replace(/\r\n|\r|\n/g, (s, o) => {
      r = s === `\r
` ? -1 : 0;
      o += i;
      for (const a of t) {
        if (!(a.end <= o)) {
          if (a.start >= o) {
            a.start += r;
          }
          if (a.end >= o) {
            a.end += r;
          }
        }
      }
      i += r;
      return "⏎";
    });
  }
};
