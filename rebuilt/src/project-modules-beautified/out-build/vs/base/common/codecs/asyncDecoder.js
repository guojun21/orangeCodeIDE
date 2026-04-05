"use strict";

// Module: out-build/vs/base/common/codecs/asyncDecoder.js
// Offset: 31057623 (bundle byte offset)
// Size: 740 bytes
rt();
hIf = class extends at {
  constructor(n) {
    super();
    this.decoder = n;
    this.messages = [];
    this._register(n);
  }
  async *[Symbol.asyncIterator]() {
    const n = e => {
      if (e !== undefined) {
        this.messages.push(e);
      } else {
        this.decoder.removeListener("data", n);
        this.decoder.removeListener("end", n);
      }
      if (this.resolveOnNewEvent) {
        this.resolveOnNewEvent();
        delete this.resolveOnNewEvent;
      }
    };
    this.decoder.on("data", n);
    this.decoder.on("end", n);
    this.decoder.start();
    while (true) {
      const e = this.messages.shift();
      if (e !== undefined) {
        yield e;
        continue;
      }
      if (this.decoder.ended) {
        this.dispose();
        return null;
      }
      await new Promise(t => {
        this.resolveOnNewEvent = t;
      });
    }
  }
};
