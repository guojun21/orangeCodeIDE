"use strict";

// Module: out-build/vs/workbench/services/remote/common/remoteAgentService.js
// Offset: 27518235 (bundle byte offset)
// Size: 1083 bytes
Wt();
vr();
Vp = xi("remoteAgentService");
$Ne = new class {
  constructor() {
    this.maxSampleCount = 5;
    this.sampleDelay = 2000;
    this.initial = [];
    this.maxInitialCount = 3;
    this.average = [];
    this.maxAverageCount = 100;
    this.highLatencyMultiple = 2;
    this.highLatencyMinThreshold = 500;
    this.highLatencyMaxThreshold = 1500;
    this.lastMeasurement = undefined;
  }
  get latency() {
    return this.lastMeasurement;
  }
  async measure(n) {
    let e = Infinity;
    for (let i = 0; i < this.maxSampleCount; i++) {
      const r = await n.getRoundTripTime();
      if (r === undefined) {
        return;
      }
      e = Math.min(e, r / 2);
      await Af(this.sampleDelay);
    }
    this.average.push(e);
    if (this.average.length > this.maxAverageCount) {
      this.average.shift();
    }
    let t;
    if (this.initial.length < this.maxInitialCount) {
      this.initial.push(e);
    } else {
      t = this.initial.reduce((i, r) => i + r, 0) / this.initial.length;
    }
    this.lastMeasurement = {
      initial: t,
      current: e,
      average: this.average.reduce((i, r) => i + r, 0) / this.average.length,
      high: typeof t === "undefined" ? false : e > this.highLatencyMaxThreshold || e > this.highLatencyMinThreshold && e > t * this.highLatencyMultiple
    };
    return this.lastMeasurement;
  }
}();
