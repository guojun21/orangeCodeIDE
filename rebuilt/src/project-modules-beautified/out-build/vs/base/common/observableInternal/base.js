"use strict";

// Module: out-build/vs/base/common/observableInternal/base.js
// Offset: 482868 (bundle byte offset)
// Size: 3196 bytes
y5e();
d4t();
Fgt();
_s();
NSc = class {
  get TChange() {
    return null;
  }
  reportChanges() {
    this.get();
  }
  read(n) {
    if (n) {
      return n.readObservable(this);
    } else {
      return this.get();
    }
  }
  map(n, e) {
    const t = e === undefined ? undefined : n;
    const i = e === undefined ? n : e;
    return LSc({
      owner: t,
      debugName: () => {
        const r = ESc(i);
        if (r !== undefined) {
          return r;
        }
        const o = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/.exec(i.toString());
        if (o) {
          return `${this.debugName}.${o[2]}`;
        }
        if (!t) {
          return `${this.debugName} (mapped)`;
        }
      },
      debugReferenceFn: i
    }, r => i(this.read(r), r));
  }
  flatten() {
    return LSc({
      owner: undefined,
      debugName: () => `${this.debugName} (flattened)`
    }, n => this.read(n).read(n));
  }
  recomputeInitiallyAndOnChange(n, e) {
    n.add(Ksh(this, e));
    return this;
  }
  keepObserved(n) {
    n.add(Ysh(this));
    return this;
  }
  get debugValue() {
    return this.get();
  }
};
Ogt = class extends NSc {
  constructor() {
    super();
    this._observers = new Set();
    T6()?.handleObservableCreated(this);
  }
  addObserver(n) {
    const e = this._observers.size;
    this._observers.add(n);
    if (e === 0) {
      this.onFirstObserverAdded();
    }
    if (e !== this._observers.size) {
      T6()?.handleOnListenerCountChanged(this, this._observers.size);
    }
  }
  removeObserver(n) {
    const e = this._observers.delete(n);
    if (e && this._observers.size === 0) {
      this.onLastObserverRemoved();
    }
    if (e) {
      T6()?.handleOnListenerCountChanged(this, this._observers.size);
    }
  }
  onFirstObserverAdded() {}
  onLastObserverRemoved() {}
  log() {
    const n = !!T6();
    LnA(this);
    if (!n) {
      T6()?.handleObservableCreated(this);
    }
    return this;
  }
  debugGetObservers() {
    return this._observers;
  }
};
JFn = undefined;
Ugt = class {
  constructor(n, e) {
    this._fn = n;
    this._getDebugName = e;
    this._updatingObservers = [];
    T6()?.handleBeginTransaction(this);
  }
  getDebugName() {
    if (this._getDebugName) {
      return this._getDebugName();
    } else {
      return ESc(this._fn);
    }
  }
  updateObserver(n, e) {
    if (!this._updatingObservers) {
      Vsh("Transaction already finished!");
      pp(t => {
        t.updateObserver(n, e);
      });
      return;
    }
    this._updatingObservers.push({
      observer: n,
      observable: e
    });
    n.beginUpdate(e);
  }
  finish() {
    const n = this._updatingObservers;
    if (!n) {
      Vsh("transaction.finish() has already been called!");
      return;
    }
    for (let e = 0; e < n.length; e++) {
      const {
        observer: t,
        observable: i
      } = n[e];
      t.endUpdate(i);
    }
    this._updatingObservers = null;
    T6()?.handleEndTransaction(this);
  }
  debugGetUpdatingObservers() {
    return this._updatingObservers;
  }
};
Gze = class extends Ogt {
  get debugName() {
    return this._debugNameData.getDebugName(this) ?? "ObservableValue";
  }
  constructor(n, e, t) {
    super();
    this._debugNameData = n;
    this._equalityComparator = t;
    this._value = e;
    T6()?.handleObservableUpdated(this, {
      hadValue: false,
      newValue: e,
      change: undefined,
      didChange: true,
      oldValue: undefined
    });
  }
  get() {
    return this._value;
  }
  set(n, e, t) {
    if (t === undefined && this._equalityComparator(this._value, n)) {
      return;
    }
    let i;
    e ||= i = new Ugt(() => {}, () => `Setting ${this.debugName}`);
    try {
      const r = this._value;
      this._setValue(n);
      T6()?.handleObservableUpdated(this, {
        oldValue: r,
        newValue: n,
        change: t,
        didChange: true,
        hadValue: true
      });
      for (const s of this._observers) {
        e.updateObserver(s, this);
        s.handleChange(this, t);
      }
    } finally {
      if (i) {
        i.finish();
      }
    }
  }
  toString() {
    return `${this.debugName}: ${this._value}`;
  }
  _setValue(n) {
    this._value = n;
  }
  debugGetState() {
    return {
      value: this._value
    };
  }
  debugSetValue(n) {
    this._value = n;
  }
};
Zsh = class extends Gze {
  _setValue(n) {
    if (this._value !== n) {
      if (this._value) {
        this._value.dispose();
      }
      this._value = n;
    }
  }
  dispose() {
    this._value?.dispose();
  }
};
