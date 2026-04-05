"use strict";

// Module: out-build/vs/base/browser/dnd.js
// Offset: 1953959 (bundle byte offset)
// Size: 753 bytes
ri();
rt();
hF();
IIc = class extends at {
  constructor(n, e) {
    super();
    this._register(ei(n, "dragover", t => {
      t.preventDefault();
      this.timeout ||= setTimeout(() => {
        e();
        this.timeout = null;
      }, 800);
    }));
    ["dragleave", "drop", "dragend"].forEach(t => {
      this._register(ei(n, t, () => {
        this.clearDragTimeout();
      }));
    });
  }
  clearDragTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  dispose() {
    super.dispose();
    this.clearDragTimeout();
  }
};
fT = {
  RESOURCES: "ResourceURLs",
  DOWNLOAD_URL: "DownloadURL",
  FILES: "Files",
  TEXT: NA.text,
  INTERNAL_URI_LIST: "application/vnd.code.uri-list"
};
