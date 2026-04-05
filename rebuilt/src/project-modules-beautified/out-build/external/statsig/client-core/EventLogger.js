"use strict";

// Module: out-build/external/statsig/client-core/EventLogger.js
// Offset: 26679892 (bundle byte offset)
// Size: 5017 bytes
Fpa();
Lhn();
eie();
Opa();
fSt();
n2g();
$bi();
Btt();
s2g();
Wtu();
a2g = 100;
c2g = 10000;
l2g = 1000;
u2g = 600000;
d2g = 500;
Qtu = 200;
Mhn = {};
Hbi = {
  Startup: "startup",
  GainedFocus: "gained_focus"
};
h2g = class LSn {
  static _safeFlushAndForget(e) {
    Mhn[e]?.flush().catch(() => {});
  }
  static _safeRetryFailedLogs(e) {
    Mhn[e]?._retryFailedLogs(Hbi.GainedFocus);
  }
  constructor(e, t, i, r) {
    this._sdkKey = e;
    this._emitter = t;
    this._network = i;
    this._options = r;
    this._queue = [];
    this._lastExposureTimeMap = {};
    this._nonExposedChecks = {};
    this._hasRunQuickFlush = false;
    this._creationTime = Date.now();
    this._loggingEnabled = r?.loggingEnabled ?? (r?.disableLogging === true ? Utu.disabled : Utu.browserOnly);
    if (r?.loggingEnabled && r.disableLogging !== undefined) {
      CI.warn("Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.");
    }
    this._maxQueueSize = r?.loggingBufferMaxSize ?? a2g;
    const s = r?.networkConfig;
    this._logEventUrlConfig = new qtu(Cme._rgstr, s?.logEventUrl, s?.api, s?.logEventFallbackUrls);
  }
  setLogEventCompressionMode(e) {
    this._network.setLogEventCompressionMode(e);
  }
  setLoggingEnabled(e) {
    this._loggingEnabled = e;
  }
  enqueue(e) {
    if (this._shouldLogEvent(e)) {
      this._normalizeAndAppendEvent(e);
      this._quickFlushIfNeeded();
      if (this._queue.length > this._maxQueueSize) {
        LSn._safeFlushAndForget(this._sdkKey);
      }
    }
  }
  incrementNonExposureCount(e) {
    const t = this._nonExposedChecks[e] ?? 0;
    this._nonExposedChecks[e] = t + 1;
  }
  reset() {
    this.flush().catch(() => {});
    this._lastExposureTimeMap = {};
  }
  start() {
    const e = Ubi();
    if (!e || this._options?.loggingEnabled === "always") {
      Mhn[this._sdkKey] = this;
      if (!e) {
        o2g(t => {
          if (t === "background") {
            LSn._safeFlushAndForget(this._sdkKey);
          } else if (t === "foreground") {
            LSn._safeRetryFailedLogs(this._sdkKey);
          }
        });
      }
      this._retryFailedLogs(Hbi.Startup);
      this._startBackgroundFlushInterval();
    }
  }
  async stop() {
    if (this._flushIntervalId) {
      clearInterval(this._flushIntervalId);
      this._flushIntervalId = null;
    }
    delete Mhn[this._sdkKey];
    await this.flush();
  }
  async flush() {
    this._appendAndResetNonExposedChecks();
    if (this._queue.length === 0) {
      return;
    }
    const e = this._queue;
    this._queue = [];
    await this._sendEvents(e);
  }
  _quickFlushIfNeeded() {
    if (!this._hasRunQuickFlush) {
      this._hasRunQuickFlush = true;
      if (!(Date.now() - this._creationTime > Qtu)) {
        setTimeout(() => LSn._safeFlushAndForget(this._sdkKey), Qtu);
      }
    }
  }
  _shouldLogEvent(e) {
    if (this._options?.loggingEnabled !== "always" && Ubi()) {
      return false;
    }
    if (!ZMg(e)) {
      return true;
    }
    const t = e.user ? e.user : {
      statsigEnvironment: undefined
    };
    const i = jMg(this._sdkKey, t);
    const r = e.metadata ? e.metadata : {};
    const s = [e.eventName, i, r.gate, r.config, r.ruleID, r.allocatedExperiment, r.parameterName, String(r.isExplicitParameter), r.reason].join("|");
    const o = this._lastExposureTimeMap[s];
    const a = Date.now();
    if (o && a - o < u2g) {
      return false;
    } else {
      if (Object.keys(this._lastExposureTimeMap).length > l2g) {
        this._lastExposureTimeMap = {};
      }
      this._lastExposureTimeMap[s] = a;
      return true;
    }
  }
  async _sendEvents(e) {
    if (this._loggingEnabled === "disabled") {
      this._saveFailedLogsToStorage(e);
      return false;
    }
    try {
      const i = Gtu() && this._network.isBeaconSupported() && this._options?.networkConfig?.networkOverrideFunc == null;
      this._emitter({
        name: "pre_logs_flushed",
        events: e
      });
      if ((i ? this._sendEventsViaBeacon(e) : await this._sendEventsViaPost(e)).success) {
        this._emitter({
          name: "logs_flushed",
          events: e
        });
        return true;
      } else {
        CI.warn("Failed to flush events.");
        this._saveFailedLogsToStorage(e);
        return false;
      }
    } catch {
      CI.warn("Failed to flush events.");
      return false;
    }
  }
  async _sendEventsViaPost(e) {
    const i = (await this._network.post(this._getRequestData(e)))?.code ?? -1;
    return {
      success: i >= 200 && i < 300
    };
  }
  _sendEventsViaBeacon(e) {
    return {
      success: this._network.beacon(this._getRequestData(e))
    };
  }
  _getRequestData(e) {
    return {
      sdkKey: this._sdkKey,
      data: {
        events: e
      },
      urlConfig: this._logEventUrlConfig,
      retries: 3,
      isCompressable: true,
      params: {
        [v$e.EventCount]: String(e.length)
      },
      credentials: "same-origin"
    };
  }
  _saveFailedLogsToStorage(e) {
    while (e.length > d2g) {
      e.shift();
    }
    const t = this._getStorageKey();
    try {
      Gpa(t, e);
    } catch {
      CI.warn("Unable to save failed logs to storage");
    }
  }
  _retryFailedLogs(e) {
    const t = this._getStorageKey();
    (async () => {
      if (!j3.isReady()) {
        await j3.isReadyResolver();
      }
      const i = Jpa(t);
      if (!i) {
        return;
      }
      if (e === Hbi.Startup) {
        j3.removeItem(t);
      }
      if ((await this._sendEvents(i)) && e === Hbi.GainedFocus) {
        j3.removeItem(t);
      }
    })().catch(() => {
      CI.warn("Failed to flush stored logs");
    });
  }
  _getStorageKey() {
    return `statsig.failed_logs.${Itt(this._sdkKey)}`;
  }
  _normalizeAndAppendEvent(e) {
    if (e.user) {
      e.user = {
        ...e.user
      };
      delete e.user.privateAttributes;
    }
    const t = {};
    const i = this._getCurrentPageUrl();
    if (i) {
      t.statsigMetadata = {
        currentPage: i
      };
    }
    const r = {
      ...e,
      ...t
    };
    CI.debug("Enqueued Event:", r);
    this._queue.push(r);
  }
  _appendAndResetNonExposedChecks() {
    if (Object.keys(this._nonExposedChecks).length !== 0) {
      this._normalizeAndAppendEvent({
        eventName: "statsig::non_exposed_checks",
        user: null,
        time: Date.now(),
        metadata: {
          checks: {
            ...this._nonExposedChecks
          }
        }
      });
      this._nonExposedChecks = {};
    }
  }
  _getCurrentPageUrl() {
    if (this._options?.includeCurrentPageUrlWithEvents !== false) {
      return KMg();
    }
  }
  _startBackgroundFlushInterval() {
    const e = this._options?.loggingIntervalMs ?? c2g;
    const t = setInterval(() => {
      const i = Mhn[this._sdkKey];
      if (!i || i._flushIntervalId !== t) {
        clearInterval(t);
      } else {
        LSn._safeFlushAndForget(this._sdkKey);
      }
    }, e);
    this._flushIntervalId = t;
  }
};
