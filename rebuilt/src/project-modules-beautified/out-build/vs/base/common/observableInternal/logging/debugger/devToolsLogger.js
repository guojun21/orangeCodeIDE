"use strict";

// Module: out-build/vs/base/common/observableInternal/logging/debugger/devToolsLogger.js
// Offset: 512503 (bundle byte offset)
// Size: 7821 bytes
GFn();
w5e();
f4t();
loh();
siA();
aiA();
Js();
Mbe();
_s();
goh = class nNi {
  static {
    this._instance = undefined;
  }
  static getInstance() {
    if (nNi._instance === undefined) {
      nNi._instance = new nNi();
    }
    return nNi._instance;
  }
  getTransactionState() {
    const e = [];
    const t = [...this._activeTransactions];
    if (t.length === 0) {
      return;
    }
    const i = t.flatMap(s => s.debugGetUpdatingObservers() ?? []).map(s => s.observer);
    const r = new Set();
    while (i.length > 0) {
      const s = i.shift();
      if (r.has(s)) {
        continue;
      }
      r.add(s);
      const o = this._getInfo(s, a => {
        if (!r.has(a)) {
          i.push(a);
        }
      });
      if (o) {
        e.push(o);
      }
    }
    return {
      names: t.map(s => s.getDebugName() ?? "tx"),
      affected: e
    };
  }
  _getObservableInfo(e) {
    const t = this._instanceInfos.get(e);
    if (!t) {
      Gc(new _m("No info found"));
      return;
    }
    return t;
  }
  _getAutorunInfo(e) {
    const t = this._instanceInfos.get(e);
    if (!t) {
      Gc(new _m("No info found"));
      return;
    }
    return t;
  }
  _getInfo(e, t) {
    if (e instanceof TY) {
      const i = [...e.debugGetObservers()];
      for (const l of i) {
        t(l);
      }
      const r = this._getObservableInfo(e);
      if (!r) {
        return;
      }
      const s = e.debugGetState();
      const o = {
        name: e.debugName,
        instanceId: r.instanceId,
        updateCount: s.updateCount
      };
      const a = [...r.changedObservables].map(l => this._instanceInfos.get(l)?.instanceId).filter(Ch);
      if (s.isComputing) {
        return {
          ...o,
          type: "observable/derived",
          state: "updating",
          changedDependencies: a,
          initialComputation: false
        };
      }
      switch (s.state) {
        case 0:
          return {
            ...o,
            type: "observable/derived",
            state: "noValue"
          };
        case 3:
          return {
            ...o,
            type: "observable/derived",
            state: "upToDate"
          };
        case 2:
          return {
            ...o,
            type: "observable/derived",
            state: "stale",
            changedDependencies: a
          };
        case 1:
          return {
            ...o,
            type: "observable/derived",
            state: "possiblyStale"
          };
      }
    } else if (e instanceof g4t) {
      const i = this._getAutorunInfo(e);
      if (!i) {
        return;
      }
      const r = {
        name: e.debugName,
        instanceId: i.instanceId,
        updateCount: i.updateCount
      };
      const s = [...i.changedObservables].map(o => this._instanceInfos.get(o).instanceId);
      if (e.debugGetState().isRunning) {
        return {
          ...r,
          type: "autorun",
          state: "updating",
          changedDependencies: s
        };
      }
      switch (e.debugGetState().state) {
        case 3:
          return {
            ...r,
            type: "autorun",
            state: "upToDate"
          };
        case 2:
          return {
            ...r,
            type: "autorun",
            state: "stale",
            changedDependencies: s
          };
        case 1:
          return {
            ...r,
            type: "autorun",
            state: "possiblyStale"
          };
      }
    }
  }
  _formatObservable(e) {
    const t = this._getObservableInfo(e);
    if (t) {
      return {
        name: e.debugName,
        instanceId: t.instanceId
      };
    }
  }
  _formatObserver(e) {
    if (e instanceof TY) {
      return {
        name: e.toString(),
        instanceId: this._getObservableInfo(e)?.instanceId
      };
    }
    const t = this._getAutorunInfo(e);
    if (t) {
      return {
        name: e.toString(),
        instanceId: t.instanceId
      };
    }
  }
  constructor() {
    this._declarationId = 0;
    this._instanceId = 0;
    this._declarations = new Map();
    this._instanceInfos = new WeakMap();
    this._aliveInstances = new Map();
    this._activeTransactions = new Set();
    this._channel = iiA("observableDevTools", () => ({
      notifications: {
        setDeclarationIdFilter: e => {},
        logObservableValue: e => {
          console.log("logObservableValue", e);
        },
        flushUpdates: () => {
          this._flushUpdates();
        },
        resetUpdates: () => {
          this._pendingChanges = null;
          this._channel.api.notifications.handleChange(this._fullState, true);
        }
      },
      requests: {
        getDeclarations: () => {
          const e = {};
          for (const t of this._declarations.values()) {
            e[t.id] = t;
          }
          return {
            decls: e
          };
        },
        getSummarizedInstances: () => null,
        getObservableValueInfo: e => ({
          observers: [...this._aliveInstances.get(e).debugGetObservers()].map(i => this._formatObserver(i)).filter(Ch)
        }),
        getDerivedInfo: e => {
          const t = this._aliveInstances.get(e);
          return {
            dependencies: [...t.debugGetState().dependencies].map(i => this._formatObservable(i)).filter(Ch),
            observers: [...t.debugGetObservers()].map(i => this._formatObserver(i)).filter(Ch)
          };
        },
        getAutorunInfo: e => ({
          dependencies: [...this._aliveInstances.get(e).debugGetState().dependencies].map(i => this._formatObservable(i)).filter(Ch)
        }),
        getTransactionState: () => this.getTransactionState(),
        setValue: (e, t) => {
          const i = this._aliveInstances.get(e);
          if (i instanceof TY) {
            i.debugSetValue(t);
          } else if (i instanceof Gze) {
            i.debugSetValue(t);
          } else if (i instanceof OBe) {
            i.debugSetValue(t);
          } else {
            throw new _m("Observable is not supported");
          }
          const r = [...i.debugGetObservers()];
          for (const s of r) {
            s.beginUpdate(i);
          }
          for (const s of r) {
            s.handleChange(i, undefined);
          }
          for (const s of r) {
            s.endUpdate(i);
          }
        },
        getValue: e => {
          const t = this._aliveInstances.get(e);
          if (t instanceof TY) {
            return S5e(t.debugGetState().value, 200);
          }
          if (t instanceof Gze) {
            return S5e(t.debugGetState().value, 200);
          }
        }
      }
    }));
    this._pendingChanges = null;
    this._changeThrottler = new poh();
    this._fullState = {};
    this._flushUpdates = () => {
      if (this._pendingChanges !== null) {
        this._channel.api.notifications.handleChange(this._pendingChanges, false);
        this._pendingChanges = null;
      }
    };
  }
  _handleChange(e) {
    moh(this._fullState, e);
    if (this._pendingChanges === null) {
      this._pendingChanges = e;
    } else {
      hoh(this._pendingChanges, e);
    }
    this._changeThrottler.throttle(this._flushUpdates, 10);
  }
  _getDeclarationId(e) {
    let t = true;
    let i;
    const r = Error;
    while (true) {
      const o = r.stackTraceLimit;
      r.stackTraceLimit = t ? 6 : 20;
      const a = new Error().stack;
      r.stackTraceLimit = o;
      let l = doh(a, /[/\\]observableInternal[/\\]|\.observe|[/\\]util(s)?\./);
      if (!t && !l) {
        l = doh(a, /[/\\]observableInternal[/\\]|\.observe/);
      }
      if (l) {
        i = l;
        break;
      }
      if (!t) {
        console.error("Could not find location for declaration", new Error().stack);
        i = {
          fileName: "unknown",
          line: 0,
          column: 0,
          id: "unknown"
        };
        break;
      }
      t = false;
    }
    let s = this._declarations.get(i.id);
    if (s === undefined) {
      s = {
        id: this._declarationId++,
        type: e,
        url: i.fileName,
        line: i.line,
        column: i.column
      };
      this._declarations.set(i.id, s);
      this._handleChange({
        decls: {
          [s.id]: s
        }
      });
    }
    return s.id;
  }
  handleObservableCreated(e) {
    const i = {
      declarationId: this._getDeclarationId("observable/value"),
      instanceId: this._instanceId++,
      listenerCount: 0,
      lastValue: undefined,
      updateCount: 0,
      changedObservables: new Set()
    };
    this._instanceInfos.set(e, i);
  }
  handleOnListenerCountChanged(e, t) {
    const i = this._getObservableInfo(e);
    if (i) {
      if (i.listenerCount === 0 && t > 0) {
        const r = e instanceof TY ? "observable/derived" : "observable/value";
        this._aliveInstances.set(i.instanceId, e);
        this._handleChange({
          instances: {
            [i.instanceId]: {
              instanceId: i.instanceId,
              declarationId: i.declarationId,
              formattedValue: i.lastValue,
              type: r,
              name: e.debugName
            }
          }
        });
      } else if (i.listenerCount > 0 && t === 0) {
        this._handleChange({
          instances: {
            [i.instanceId]: null
          }
        });
        this._aliveInstances.delete(i.instanceId);
      }
      i.listenerCount = t;
    }
  }
  handleObservableUpdated(e, t) {
    if (e instanceof TY) {
      this._handleDerivedRecomputed(e, t);
      return;
    }
    const i = this._getObservableInfo(e);
    if (i && t.didChange) {
      i.lastValue = S5e(t.newValue, 30);
      if (i.listenerCount > 0) {
        this._handleChange({
          instances: {
            [i.instanceId]: {
              formattedValue: i.lastValue
            }
          }
        });
      }
    }
  }
  handleAutorunCreated(e) {
    const i = {
      declarationId: this._getDeclarationId("autorun"),
      instanceId: this._instanceId++,
      updateCount: 0,
      changedObservables: new Set()
    };
    this._instanceInfos.set(e, i);
    this._aliveInstances.set(i.instanceId, e);
    if (i) {
      this._handleChange({
        instances: {
          [i.instanceId]: {
            instanceId: i.instanceId,
            declarationId: i.declarationId,
            runCount: 0,
            type: "autorun",
            name: e.debugName
          }
        }
      });
    }
  }
  handleAutorunDisposed(e) {
    const t = this._getAutorunInfo(e);
    if (t) {
      this._handleChange({
        instances: {
          [t.instanceId]: null
        }
      });
      this._instanceInfos.delete(e);
      this._aliveInstances.delete(t.instanceId);
    }
  }
  handleAutorunDependencyChanged(e, t, i) {
    const r = this._getAutorunInfo(e);
    if (r) {
      r.changedObservables.add(t);
    }
  }
  handleAutorunStarted(e) {}
  handleAutorunFinished(e) {
    const t = this._getAutorunInfo(e);
    if (t) {
      t.changedObservables.clear();
      t.updateCount++;
      this._handleChange({
        instances: {
          [t.instanceId]: {
            runCount: t.updateCount
          }
        }
      });
    }
  }
  handleDerivedDependencyChanged(e, t, i) {
    const r = this._getObservableInfo(e);
    if (r) {
      r.changedObservables.add(t);
    }
  }
  _handleDerivedRecomputed(e, t) {
    const i = this._getObservableInfo(e);
    if (!i) {
      return;
    }
    const r = S5e(t.newValue, 30);
    i.updateCount++;
    i.changedObservables.clear();
    i.lastValue = r;
    if (i.listenerCount > 0) {
      this._handleChange({
        instances: {
          [i.instanceId]: {
            formattedValue: r,
            recomputationCount: i.updateCount
          }
        }
      });
    }
  }
  handleDerivedCleared(e) {
    const t = this._getObservableInfo(e);
    if (t) {
      t.lastValue = undefined;
      t.changedObservables.clear();
      if (t.listenerCount > 0) {
        this._handleChange({
          instances: {
            [t.instanceId]: {
              formattedValue: undefined
            }
          }
        });
      }
    }
  }
  handleBeginTransaction(e) {
    this._activeTransactions.add(e);
  }
  handleEndTransaction(e) {
    this._activeTransactions.delete(e);
  }
};
