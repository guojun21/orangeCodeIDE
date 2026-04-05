"use strict";

// Module: out-build/vs/base/browser/broadcast.js
// Offset: 31346314 (bundle byte offset)
// Size: 3652 bytes
iu();
_s();
yn();
rt();
aLf = class extends at {
  constructor(n) {
    super();
    this.channelName = n;
    this._onDidReceiveData = this._register(new Qe());
    this.onDidReceiveData = this._onDidReceiveData.event;
    if ("BroadcastChannel" in bi) {
      try {
        this.broadcastChannel = new BroadcastChannel(n);
        const e = t => {
          this._onDidReceiveData.fire(t.data);
        };
        this.broadcastChannel.addEventListener("message", e);
        this._register($i(() => {
          if (this.broadcastChannel) {
            this.broadcastChannel.removeEventListener("message", e);
            this.broadcastChannel.close();
          }
        }));
      } catch (e) {
        console.warn("Error while creating broadcast channel. Falling back to localStorage.", ov(e));
      }
    }
    if (!this.broadcastChannel) {
      this.channelName = `BroadcastDataChannel.${n}`;
      this.createBroadcastChannel();
    }
  }
  createBroadcastChannel() {
    const n = e => {
      if (e.key === this.channelName && e.newValue) {
        this._onDidReceiveData.fire(JSON.parse(e.newValue));
      }
    };
    bi.addEventListener("storage", n);
    this._register($i(() => bi.removeEventListener("storage", n)));
  }
  postData(n) {
    if (this.broadcastChannel) {
      this.broadcastChannel.postMessage(n);
    } else {
      localStorage.removeItem(this.channelName);
      localStorage.setItem(this.channelName, JSON.stringify(n));
    }
  }
};
