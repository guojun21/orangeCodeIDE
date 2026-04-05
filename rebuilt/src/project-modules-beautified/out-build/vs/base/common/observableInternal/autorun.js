"use strict";

// Module: out-build/vs/base/common/observableInternal/autorun.js
// Offset: 489388 (bundle byte offset)
// Size: 3572 bytes
y5e();
d4t();
Fgt();
(function (n) {
  n[n.dependenciesMightHaveChanged = 1] = "dependenciesMightHaveChanged";
  n[n.stale = 2] = "stale";
  n[n.upToDate = 3] = "upToDate";
})(eoh ||= {});
g4t = class {
  get debugName() {
    return this._debugNameData.getDebugName(this) ?? "(anonymous)";
  }
  constructor(n, e, t, i) {
    this._debugNameData = n;
    this._runFn = e;
    this.createChangeSummary = t;
    this._handleChange = i;
    this._state = 2;
    this._updateCount = 0;
    this._disposed = false;
    this._dependencies = new Set();
    this._dependenciesToBeRemoved = new Set();
    this._isRunning = false;
    this._changeSummary = this.createChangeSummary?.();
    T6()?.handleAutorunCreated(this);
    this._run();
    tgt(this);
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      for (const n of this._dependencies) {
        n.removeObserver(this);
      }
      this._dependencies.clear();
      T6()?.handleAutorunDisposed(this);
      ngt(this);
    }
  }
  _run() {
    const n = this._dependenciesToBeRemoved;
    this._dependenciesToBeRemoved = this._dependencies;
    this._dependencies = n;
    this._state = 3;
    try {
      if (!this._disposed) {
        T6()?.handleAutorunStarted(this);
        const e = this._changeSummary;
        try {
          this._changeSummary = this.createChangeSummary?.();
          this._isRunning = true;
          this._runFn(this, e);
        } catch (t) {
          IMo(t);
        } finally {
          this._isRunning = false;
        }
      }
    } finally {
      if (!this._disposed) {
        T6()?.handleAutorunFinished(this);
      }
      for (const e of this._dependenciesToBeRemoved) {
        e.removeObserver(this);
      }
      this._dependenciesToBeRemoved.clear();
    }
  }
  toString() {
    return `Autorun<${this.debugName}>`;
  }
  beginUpdate(n) {
    if (this._state === 3) {
      this._state = 1;
    }
    this._updateCount++;
  }
  endUpdate(n) {
    try {
      if (this._updateCount === 1) {
        do {
          if (this._state === 1) {
            this._state = 3;
            for (const e of this._dependencies) {
              e.reportChanges();
              if (this._state === 2) {
                break;
              }
            }
          }
          if (this._state !== 3) {
            this._run();
          }
        } while (this._state !== 3);
      }
    } finally {
      this._updateCount--;
    }
    _te(() => this._updateCount >= 0);
  }
  handlePossibleChange(n) {
    if (this._state === 3 && this._isDependency(n)) {
      this._state = 1;
    }
  }
  handleChange(n, e) {
    if (this._isDependency(n)) {
      T6()?.handleAutorunDependencyChanged(this, n, e);
      try {
        if (this._handleChange ? this._handleChange({
          changedObservable: n,
          change: e,
          didChange: i => i === n
        }, this._changeSummary) : true) {
          this._state = 2;
        }
      } catch (t) {
        IMo(t);
      }
    }
  }
  _isDependency(n) {
    return this._dependencies.has(n) && !this._dependenciesToBeRemoved.has(n);
  }
  readObservable(n) {
    if (!this._isRunning) {
      throw new _m("The reader object cannot be used outside its compute function!");
    }
    if (this._disposed) {
      return n.get();
    }
    n.addObserver(this);
    const e = n.get();
    this._dependencies.add(n);
    this._dependenciesToBeRemoved.delete(n);
    return e;
  }
  debugGetState() {
    return {
      isRunning: this._isRunning,
      updateCount: this._updateCount,
      dependencies: this._dependencies,
      state: this._state
    };
  }
  debugRerun() {
    if (this._isRunning) {
      this._state = 2;
    } else {
      this._run();
    }
  }
};
(function (n) {
  n.Observer = g4t;
})(Oc ||= {});
