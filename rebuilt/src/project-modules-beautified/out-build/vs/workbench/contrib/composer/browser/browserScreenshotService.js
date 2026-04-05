"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/browserScreenshotService.js
// Offset: 33841440 (bundle byte offset)
// Size: 938 bytes
yn();
rt();
Wt();
Er();
t1i = xi("browserScreenshotService");
o$f = class extends at {
  constructor() {
    super(...arguments);
    this.screenshots = new Map();
    this.composerToViewId = new Map();
    this._onScreenshotUpdate = this._register(new Qe());
    this.onScreenshotUpdate = this._onScreenshotUpdate.event;
  }
  getLatestScreenshot(n) {
    return this.screenshots.get(n);
  }
  getViewIdsWithScreenshots() {
    return Array.from(this.screenshots.keys());
  }
  updateScreenshot(n, e, t) {
    const i = {
      viewId: n,
      screenshotData: e,
      timestamp: Date.now(),
      url: t
    };
    this.screenshots.set(n, i);
    this._onScreenshotUpdate.fire(i);
  }
  clearScreenshot(n) {
    this.screenshots.delete(n);
  }
  registerComposerViewId(n, e) {
    this.composerToViewId.set(n, e);
  }
  getViewIdForComposer(n) {
    return this.composerToViewId.get(n);
  }
};
Vi(t1i, o$f, 1, 1);
