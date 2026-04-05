"use strict";

// Module: out-build/vs/editor/common/codecs/markdownCodec/markdownDecoder.js
// Offset: 31082667 (bundle byte offset)
// Size: 1019 bytes
gSa();
t0i();
msy();
CSa();
_Sa();
pSa();
bsy();
Asy();
wIf();
DIf = class extends V_i {
  constructor(n) {
    super(new TIf(n));
  }
  onStreamData(n) {
    if (n instanceof Qgn && !this.current) {
      this.current = new jgu(n);
      return;
    }
    if (n instanceof D1t && !this.current) {
      this.current = new Vgu(n);
      return;
    }
    if (n instanceof Sit && !this.current) {
      this.current = new zgu(n);
      return;
    }
    if (!this.current) {
      this._onData.fire(n);
      return;
    }
    const e = this.current.accept(n);
    if (e.result === "success") {
      const {
        nextParser: t
      } = e;
      if (t instanceof K_i) {
        this._onData.fire(t);
        delete this.current;
      } else {
        this.current = t;
      }
    } else {
      for (const t of this.current.tokens) {
        this._onData.fire(t);
        delete this.current;
      }
    }
    if (!e.wasTokenConsumed) {
      this.onStreamData(n);
    }
  }
  onStreamEnd() {
    if (this.current) {
      if (this.current instanceof TSa) {
        this._onData.fire(this.current.asMarkdownComment());
        delete this.current;
        return this.onStreamEnd();
      }
      const {
        tokens: n
      } = this.current;
      delete this.current;
      for (const e of [...n]) {
        this._onData.fire(e);
      }
    }
    super.onStreamEnd();
  }
};
