"use strict";

// Module: out-build/vs/editor/browser/viewParts/blockDecorations/blockDecorations.js
// Offset: 1612339 (bundle byte offset)
// Size: 1925 bytes
sI();
BcA();
j$();
bAh = class extends yW {
  constructor(n) {
    super(n);
    this.blocks = [];
    this.contentWidth = -1;
    this.contentLeft = 0;
    this.domNode = mw(document.createElement("div"));
    this.domNode.setAttribute("role", "presentation");
    this.domNode.setAttribute("aria-hidden", "true");
    this.domNode.setClassName("blockDecorations-container");
    this.update();
  }
  update() {
    let n = false;
    const t = this._context.configuration.options.get(151);
    const i = t.contentWidth - t.verticalScrollbarWidth;
    if (this.contentWidth !== i) {
      this.contentWidth = i;
      n = true;
    }
    const r = t.contentLeft;
    if (this.contentLeft !== r) {
      this.contentLeft = r;
      n = true;
    }
    return n;
  }
  dispose() {
    super.dispose();
  }
  onConfigurationChanged(n) {
    return this.update();
  }
  onScrollChanged(n) {
    return n.scrollTopChanged || n.scrollLeftChanged;
  }
  onDecorationsChanged(n) {
    return true;
  }
  onZonesChanged(n) {
    return true;
  }
  prepareRender(n) {}
  render(n) {
    let e = 0;
    const t = n.getDecorationsInViewport();
    for (const i of t) {
      if (!i.options.blockClassName) {
        continue;
      }
      let r = this.blocks[e];
      if (!r) {
        r = this.blocks[e] = mw(document.createElement("div"));
        this.domNode.appendChild(r);
      }
      let s;
      let o;
      if (i.options.blockIsAfterEnd) {
        s = n.getVerticalOffsetAfterLineNumber(i.range.endLineNumber, false);
        o = n.getVerticalOffsetAfterLineNumber(i.range.endLineNumber, true);
      } else {
        s = n.getVerticalOffsetForLineNumber(i.range.startLineNumber, true);
        o = i.range.isEmpty() && !i.options.blockDoesNotCollapse ? n.getVerticalOffsetForLineNumber(i.range.startLineNumber, false) : n.getVerticalOffsetAfterLineNumber(i.range.endLineNumber, true);
      }
      const [a, l, u, d] = i.options.blockPadding ?? [0, 0, 0, 0];
      r.setClassName("blockDecorations-block " + i.options.blockClassName);
      r.setLeft(this.contentLeft - d);
      r.setWidth(this.contentWidth + d + l);
      r.setTop(s - n.scrollTop - a);
      r.setHeight(o - s + a + u);
      e++;
    }
    for (let i = e; i < this.blocks.length; i++) {
      this.blocks[i].domNode.remove();
    }
    this.blocks.length = e;
  }
};
