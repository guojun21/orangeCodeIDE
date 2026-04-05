"use strict";

// Module: out-build/external/statsig/client-core/StatsigClientBase.js
// Offset: 26706073 (bundle byte offset)
// Size: 3050 bytes
Ttt();
Ttt();
k2g();
m2g();
eie();
T2g();
fSt();
lnu();
tga();
$bi();
Btt();
K2g = 3000;
Y2g = class {
  constructor(n, e, t, i) {
    this.loadingStatus = "Uninitialized";
    this._initializePromise = null;
    this._listeners = {};
    const r = this.$emt.bind(this);
    if (i?.logLevel != null) {
      CI.level = i.logLevel;
    }
    if (i?.disableStorage) {
      j3._setDisabled(true);
    }
    if (i?.initialSessionID) {
      rga.overrideInitialSessionID(i.initialSessionID, n);
    }
    if (i?.storageProvider) {
      j3._setProvider(i.storageProvider);
    }
    if (i?.enableCookies) {
      TNe._setCookiesEnabled(n, i.enableCookies);
    }
    if (i?.disableStableID) {
      TNe._setDisabled(n, true);
    }
    this._sdkKey = n;
    this._options = i ?? {};
    this._memoCache = {};
    this.overrideAdapter = i?.overrideAdapter ?? null;
    this._logger = new h2g(n, r, t, i);
    this._errorBoundary = new S2g(n, i, r);
    this._errorBoundary.wrap(this);
    this._errorBoundary.wrap(e);
    this._errorBoundary.wrap(this._logger);
    t.setErrorBoundary(this._errorBoundary);
    this.dataAdapter = e;
    this.dataAdapter.attach(n, i, t);
    this.storageProvider = j3;
    this.overrideAdapter?.loadFromStorage?.()?.catch(s => this._errorBoundary.logError("OA::loadFromStorage", s));
    this._primeReadyRipcord();
    MMA(n, this);
  }
  updateRuntimeOptions(n) {
    if (n.loggingEnabled) {
      this._options.loggingEnabled = n.loggingEnabled;
      this._logger.setLoggingEnabled(n.loggingEnabled);
    } else if (n.disableLogging != null) {
      this._options.disableLogging = n.disableLogging;
      this._logger.setLoggingEnabled(n.disableLogging ? "disabled" : "browser-only");
    }
    if (n.disableStorage != null) {
      this._options.disableStorage = n.disableStorage;
      j3._setDisabled(n.disableStorage);
    }
    if (n.enableCookies != null) {
      this._options.enableCookies = n.enableCookies;
      TNe._setCookiesEnabled(this._sdkKey, n.enableCookies);
    }
    if (n.logEventCompressionMode) {
      this._logger.setLogEventCompressionMode(n.logEventCompressionMode);
    } else if (n.disableCompression) {
      this._logger.setLogEventCompressionMode(Dtt.Disabled);
    }
  }
  flush() {
    return this._logger.flush();
  }
  async shutdown() {
    this.$emt({
      name: "pre_shutdown"
    });
    this._setStatus("Uninitialized", null);
    this._initializePromise = null;
    await this._logger.stop();
  }
  on(n, e) {
    this._listeners[n] ||= [];
    this._listeners[n].push(e);
  }
  off(n, e) {
    if (this._listeners[n]) {
      const t = this._listeners[n].indexOf(e);
      if (t !== -1) {
        this._listeners[n].splice(t, 1);
      }
    }
  }
  $on(n, e) {
    e.__isInternal = true;
    this.on(n, e);
  }
  $emt(n) {
    const e = t => {
      try {
        t(n);
      } catch (i) {
        if (t.__isInternal === true) {
          this._errorBoundary.logError(`__emit:${n.name}`, i);
          return;
        }
        CI.error("An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.", n);
      }
    };
    if (this._listeners[n.name]) {
      this._listeners[n.name].forEach(t => e(t));
    }
    this._listeners["*"]?.forEach(e);
  }
  _setStatus(n, e) {
    this.loadingStatus = n;
    this._memoCache = {};
    this.$emt({
      name: "values_updated",
      status: n,
      values: e
    });
  }
  _enqueueExposure(n, e, t) {
    if (t?.disableExposureLog === true) {
      this._logger.incrementNonExposureCount(n);
      return;
    }
    this._logger.enqueue(e);
  }
  _memoize(n, e) {
    return (t, i) => {
      if (this._options.disableEvaluationMemoization) {
        return e(t, i);
      }
      const r = hMA(n, t, i);
      if (r) {
        if (!(r in this._memoCache)) {
          if (Object.keys(this._memoCache).length >= K2g) {
            this._memoCache = {};
          }
          this._memoCache[r] = e(t, i);
        }
        return this._memoCache[r];
      } else {
        return e(t, i);
      }
    };
  }
};
