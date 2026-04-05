"use strict";

// Module: out-build/vs/workbench/contrib/comments/browser/timestamp.js
// Offset: 33190464 (bundle byte offset)
// Size: 1388 bytes
ri();
mb();
A9();
rt();
_r();
tki();
fTa = class extends at {
  constructor(n, e, t, i) {
    super();
    this.configurationService = n;
    this._date = Rt(t, Ct("span.timestamp"));
    this._date.style.display = "none";
    this._useRelativeTime = this.useRelativeTimeSetting;
    this.hover = this._register(e.setupManagedHover(Sm("mouse"), this._date, ""));
    this.setTimestamp(i);
  }
  get useRelativeTimeSetting() {
    return this.configurationService.getValue(_bn).useRelativeTime;
  }
  async setTimestamp(n) {
    if (n !== this._timestamp || this.useRelativeTimeSetting !== this._useRelativeTime) {
      this.updateDate(n);
    }
    this._timestamp = n;
    this._useRelativeTime = this.useRelativeTimeSetting;
  }
  updateDate(n) {
    if (!n) {
      this._date.textContent = "";
      this._date.style.display = "none";
    } else if (n !== this._timestamp || this.useRelativeTimeSetting !== this._useRelativeTime) {
      this._date.style.display = "";
      let e;
      let t;
      if (this.useRelativeTimeSetting) {
        e = this.getRelative(n);
        t = this.getDateString(n);
      } else {
        e = this.getDateString(n);
      }
      this._date.textContent = e;
      this.hover.update(t ?? "");
    }
  }
  getRelative(n) {
    return m2(n, true, true);
  }
  getDateString(n) {
    return n.toLocaleString(yC);
  }
};
