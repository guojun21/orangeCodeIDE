"use strict";

// Module: out-build/vs/workbench/services/output/common/output.js
// Offset: 28438660 (bundle byte offset)
// Size: 1865 bytes
yn();
Ws();
si();
Wt();
rt();
Fcu = "text/x-code-output";
SAa = "Log";
fpn = "text/x-code-log-output";
kAa = "log";
e1 = "workbench.panel.output";
Ocu = new Sn("inOutput", false);
Rnf = new Sn("activeLogOutput", false);
Ucu = new Sn("activeLogOutput.isLog", false);
$cu = new Sn("activeLogOutput.levelSettable", false);
qcu = new Sn("activeLogOutput.level", "");
Hcu = new Sn("activeLogOutput.levelIsDefault", false);
Jcu = new Sn("outputView.scrollLock", false);
Gcu = new Sn("activeOutputChannel", "");
Wcu = new Sn("output.filter.trace", true);
Qcu = new Sn("output.filter.debug", true);
jcu = new Sn("output.filter.info", true);
zcu = new Sn("output.filter.warning", true);
Vcu = new Sn("output.filter.error", true);
Kcu = new Sn("outputFilterFocus", false);
Ycu = new Sn("output.filter.categories", "");
iS = xi("outputService");
(function (n) {
  n[n.Append = 1] = "Append";
  n[n.Replace = 2] = "Replace";
  n[n.Clear = 3] = "Clear";
})(aX ||= {});
TU = {
  OutputChannels: "workbench.contributions.outputChannels"
};
Pnf = class extends at {
  constructor() {
    super(...arguments);
    this.channels = new Map();
    this._onDidRegisterChannel = this._register(new Qe());
    this.onDidRegisterChannel = this._onDidRegisterChannel.event;
    this._onDidRemoveChannel = this._register(new Qe());
    this.onDidRemoveChannel = this._onDidRemoveChannel.event;
    this._onDidUpdateChannelFiles = this._register(new Qe());
    this.onDidUpdateChannelSources = this._onDidUpdateChannelFiles.event;
  }
  registerChannel(n) {
    if (!this.channels.has(n.id)) {
      this.channels.set(n.id, n);
      this._onDidRegisterChannel.fire(n.id);
    }
  }
  getChannels() {
    const n = [];
    this.channels.forEach(e => n.push(e));
    return n;
  }
  getChannel(n) {
    return this.channels.get(n);
  }
  updateChannelSources(n, e) {
    const t = this.channels.get(n);
    if (t && $nt(t)) {
      t.source = e;
      this._onDidUpdateChannelFiles.fire(t);
    }
  }
  removeChannel(n) {
    const e = this.channels.get(n);
    if (e) {
      this.channels.delete(n);
      this._onDidRemoveChannel.fire(e);
    }
  }
};
Di.add(TU.OutputChannels, new Pnf());
