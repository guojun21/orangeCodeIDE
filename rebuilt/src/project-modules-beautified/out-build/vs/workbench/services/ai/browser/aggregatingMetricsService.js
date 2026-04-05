"use strict";

// Module: out-build/vs/workbench/services/ai/browser/aggregatingMetricsService.js
// Offset: 30182070 (bundle byte offset)
// Size: 3587 bytes
iu();
rt();
_r();
Er();
Wt();
Rl();
Wf();
eu();
W9();
Gkt = xi("aggregatingMetricsService");
$_a = class extends at {
  constructor(e, t, i) {
    super();
    this.productService = e;
    this.remoteAgentService = t;
    this.workbenchEnvironmentService = i;
    this._provider = undefined;
    this._privacyModeEnabled = true;
    this._metricsConfig = undefined;
    this._metricsFifo = Array(1000).fill(null);
    this._metricsFifoIndex = 0;
    this._platform = Sze;
    this._arch = Cze;
    const r = this.productService.urlProtocol;
    const s = this.productService.version;
    if (r === "cursor-dev") {
      this._channel = "debug";
    } else if (s.includes("nightly") || s.includes("-pre")) {
      this._channel = "nightly";
    } else {
      this._channel = "stable";
    }
    this._isBackgroundComposer = Q1e(this.workbenchEnvironmentService.remoteAuthority) !== undefined;
    bi.setInterval(() => {
      if (!this._shouldStoreMetric()) {
        return;
      }
      let o = false;
      const a = this._metricsFifoIndex % 1000;
      for (let l = 0; l < 1000; l++) {
        const u = this._metricsFifo[(a + l) % 1000];
        if (u != null && this._provider) {
          o = true;
          switch (u.method) {
            case "increment":
              this._provider.increment(u.name, u.value, u.tags);
              break;
            case "gauge":
              this._provider.gauge(u.name, u.value, u.tags);
              break;
            case "distribution":
              this._provider.distribution(u.name, u.value, u.tags);
              break;
          }
        }
      }
      if (o) {
        this._metricsFifo = Array(1000).fill(null);
        this._metricsFifoIndex = 0;
      }
    }, 30000);
  }
  _shouldStoreMetric() {
    if (this._metricsConfig) {
      if (this._privacyModeEnabled) {
        return this._metricsConfig.enabledInPrivacyMode === true;
      } else {
        return this._metricsConfig.enabledInNonPrivacyMode === true;
      }
    } else {
      return true;
    }
  }
  _buildTags(e) {
    const i = this.remoteAgentService.getConnection() ? "remote" : "local";
    const r = e.tags;
    let s;
    if (Array.isArray(r)) {
      s = {};
      for (const o of r) {
        const a = o.indexOf(":");
        if (a !== -1) {
          s[o.substring(0, a)] = o.substring(a + 1);
        } else {
          s[o] = "";
        }
      }
    } else {
      s = {
        ...(r || {})
      };
    }
    s.channel = this._channel;
    s.connection_type = i;
    s.is_background_composer = String(this._isBackgroundComposer);
    if (this._platform) {
      s.platform = this._platform;
    }
    if (this._arch) {
      s.arch = this._arch;
    }
    if (this._privacyModeEnabled !== undefined) {
      s.privacy_mode = String(this._privacyModeEnabled);
    }
    return s;
  }
  increment(e) {
    if (!this._shouldStoreMetric()) {
      return;
    }
    const t = this._buildTags(e);
    const i = e.value ?? 1;
    if (this._provider) {
      this._provider.increment(e.stat, i, t);
    } else {
      this._metricsFifo[this._metricsFifoIndex % 1000] = {
        name: e.stat,
        value: i,
        tags: t,
        method: "increment"
      };
      this._metricsFifoIndex++;
    }
  }
  gauge(e) {
    if (!this._shouldStoreMetric()) {
      return;
    }
    const t = this._buildTags(e);
    if (this._provider) {
      this._provider.gauge(e.stat, e.value, t);
    } else {
      this._metricsFifo[this._metricsFifoIndex % 1000] = {
        name: e.stat,
        value: e.value,
        tags: t,
        method: "gauge"
      };
      this._metricsFifoIndex++;
    }
  }
  distribution(e) {
    if (!this._shouldStoreMetric()) {
      return;
    }
    const t = this._buildTags(e);
    if (this._provider) {
      this._provider.distribution(e.stat, e.value, t);
    } else {
      this._metricsFifo[this._metricsFifoIndex % 1000] = {
        name: e.stat,
        value: e.value,
        tags: t,
        method: "distribution"
      };
      this._metricsFifoIndex++;
    }
  }
  registerProvider(e) {
    this._provider = e;
  }
  unregisterProvider() {
    this._provider = undefined;
  }
  setPrivacyMode(e) {
    this._privacyModeEnabled = e;
  }
  setMetricsConfig(e) {
    this._metricsConfig = e;
  }
};
$_a = __decorate([__param(0, za), __param(1, Vp), __param(2, Cc)], $_a);
Vi(Gkt, $_a, 1);
