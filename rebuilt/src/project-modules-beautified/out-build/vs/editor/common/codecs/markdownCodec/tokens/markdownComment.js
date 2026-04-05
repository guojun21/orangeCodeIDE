"use strict";

// Module: out-build/vs/editor/common/codecs/markdownCodec/tokens/markdownComment.js
// Offset: 31080263 (bundle byte offset)
// Size: 474 bytes
gSa();
Lv();
IIf = class hjb extends K_i {
  constructor(e, t) {
    Qb(t.startsWith("<!--"), `The comment must start with '<!--', got '${t.substring(0, 10)}'.`);
    super(e);
    this.text = t;
  }
  get hasEndMarker() {
    return this.text.endsWith("-->");
  }
  equals(e) {
    if (!super.sameRange(e.range) || !(e instanceof hjb)) {
      return false;
    } else {
      return this.text === e.text;
    }
  }
  toString() {
    return `md-comment("${this.text}")${this.range}`;
  }
};
