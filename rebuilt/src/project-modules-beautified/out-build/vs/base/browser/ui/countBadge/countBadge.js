"use strict";

// Module: out-build/vs/base/browser/ui/countBadge/countBadge.js
// Offset: 24970150 (bundle byte offset)
// Size: 1182 bytes
ri();
oa();
U0A();
rt();
O6();
ume = class extends at {
  constructor(n, e, t) {
    super();
    this.options = e;
    this.styles = t;
    this.count = 0;
    this.hover = this._register(new uo());
    this.element = Rt(n, Ct(".monaco-count-badge"));
    this._register($i(() => n.removeChild(this.element)));
    this.countFormat = this.options.countFormat || "{0}";
    this.titleFormat = this.options.titleFormat || "";
    this.setCount(this.options.count || 0);
    this.updateHover();
  }
  setCount(n) {
    this.count = n;
    this.render();
  }
  setCountFormat(n) {
    this.countFormat = n;
    this.render();
  }
  setTitleFormat(n) {
    this.titleFormat = n;
    this.updateHover();
    this.render();
  }
  updateHover() {
    if (this.titleFormat !== "" && !this.hover.value) {
      this.hover.value = q4().setupDelayedHoverAtMouse(this.element, () => ({
        content: B4(this.titleFormat, this.count),
        appearance: {
          compact: true
        }
      }));
    } else if (this.titleFormat === "" && this.hover.value) {
      this.hover.value = undefined;
    }
  }
  render() {
    this.element.textContent = B4(this.countFormat, this.count);
    this.element.style.backgroundColor = this.styles.badgeBackground ?? "";
    this.element.style.color = this.styles.badgeForeground ?? "";
    if (this.styles.badgeBorder) {
      this.element.style.border = `1px solid ${this.styles.badgeBorder}`;
    }
  }
};
