"use strict";

// Module: out-build/vs/base/common/observableInternal/utils.js
// Offset: 501576 (bundle byte offset)
// Size: 5292 bytes
GFn();
w5e();
y5e();
d4t();
f4t();
Fgt();
aoh = class extends NSc {
  constructor(n) {
    super();
    this.value = n;
  }
  get debugName() {
    return this.toString();
  }
  get() {
    return this.value;
  }
  addObserver(n) {}
  removeObserver(n) {}
  log() {
    return this;
  }
  toString() {
    return `Const: ${this.value}`;
  }
};
OBe = class extends Ogt {
  constructor(n, e, t, i, r) {
    super();
    this._debugNameData = n;
    this.event = e;
    this._getValue = t;
    this._getTransaction = i;
    this._equalityComparator = r;
    this._hasValue = false;
    this.handleEvent = s => {
      const o = this._getValue(s);
      const a = this._value;
      const l = !this._hasValue || !this._equalityComparator(a, o);
      let u = false;
      if (l) {
        this._value = o;
        if (this._hasValue) {
          u = true;
          h4t(this._getTransaction(), d => {
            T6()?.handleObservableUpdated(this, {
              oldValue: a,
              newValue: o,
              change: undefined,
              didChange: l,
              hadValue: this._hasValue
            });
            for (const m of this._observers) {
              d.updateObserver(m, this);
              m.handleChange(this, undefined);
            }
          }, () => {
            const d = this.getDebugName();
            return "Event fired" + (d ? `: ${d}` : "");
          });
        }
        this._hasValue = true;
      }
      if (!u) {
        T6()?.handleObservableUpdated(this, {
          oldValue: a,
          newValue: o,
          change: undefined,
          didChange: l,
          hadValue: this._hasValue
        });
      }
    };
  }
  getDebugName() {
    return this._debugNameData.getDebugName(this);
  }
  get debugName() {
    const n = this.getDebugName();
    return "From Event" + (n ? `: ${n}` : "");
  }
  onFirstObserverAdded() {
    this._subscription = this.event(this.handleEvent);
  }
  onLastObserverRemoved() {
    this._subscription.dispose();
    this._subscription = undefined;
    this._hasValue = false;
    this._value = undefined;
  }
  get() {
    if (this._subscription) {
      if (!this._hasValue) {
        this.handleEvent(undefined);
      }
      return this._value;
    } else {
      return this._getValue(undefined);
    }
  }
  debugSetValue(n) {
    this._value = n;
  }
};
(function (n) {
  n.Observer = OBe;
  function e(t, i) {
    let r = false;
    if (OBe.globalTransaction === undefined) {
      OBe.globalTransaction = t;
      r = true;
    }
    try {
      i();
    } finally {
      if (r) {
        OBe.globalTransaction = undefined;
      }
    }
  }
  n.batchEventsGlobally = e;
})(tp ||= {});
coh = class extends Ogt {
  constructor(n, e) {
    super();
    this.event = e;
    this.handleEvent = () => {
      pp(t => {
        for (const i of this._observers) {
          t.updateObserver(i, this);
          i.handleChange(this, undefined);
        }
      }, () => this.debugName);
    };
    this.debugName = typeof n == "string" ? n : n.getDebugName(this) ?? "Observable Signal From Event";
  }
  onFirstObserverAdded() {
    this.subscription = this.event(this.handleEvent);
  }
  onLastObserverRemoved() {
    this.subscription.dispose();
    this.subscription = undefined;
  }
  get() {}
};
USc = class extends Ogt {
  get debugName() {
    return new N4(this._owner, this._debugName, undefined).getDebugName(this) ?? "Observable Signal";
  }
  toString() {
    return this.debugName;
  }
  constructor(n, e) {
    super();
    this._debugName = n;
    this._owner = e;
  }
  trigger(n, e) {
    if (!n) {
      pp(t => {
        this.trigger(t, e);
      }, () => `Trigger signal ${this.debugName}`);
      return;
    }
    for (const t of this._observers) {
      n.updateObserver(t, this);
      t.handleChange(this, e);
    }
  }
  get() {}
};
MnA(b4t);
NnA($gt);
$Sc = class {
  constructor(n, e) {
    this._forceRecompute = n;
    this._handleValue = e;
    this._counter = 0;
  }
  beginUpdate(n) {
    this._counter++;
  }
  endUpdate(n) {
    if (this._counter === 1 && this._forceRecompute) {
      if (this._handleValue) {
        this._handleValue(n.get());
      } else {
        n.reportChanges();
      }
    }
    this._counter--;
  }
  handlePossibleChange(n) {}
  handleChange(n, e) {}
};
qSc = class {
  constructor(n, e) {
    this._map = n;
    this._keySelector = e;
    this._cache = new Map();
    this._items = [];
  }
  dispose() {
    this._cache.forEach(n => n.store.dispose());
    this._cache.clear();
  }
  setItems(n) {
    const e = [];
    const t = new Set(this._cache.keys());
    for (const i of n) {
      const r = this._keySelector ? this._keySelector(i) : i;
      let s = this._cache.get(r);
      if (s) {
        t.delete(r);
      } else {
        const o = new Ut();
        s = {
          out: this._map(i, o),
          store: o
        };
        this._cache.set(r, s);
      }
      e.push(s.out);
    }
    for (const i of t) {
      this._cache.get(i).store.dispose();
      this._cache.delete(i);
    }
    this._items = e;
  }
  getItems() {
    return this._items;
  }
};
qgt = class {
  constructor(n) {
    this.observable = n;
  }
  get onDidChange() {
    return In.fromObservableLight(this.observable);
  }
  get value() {
    return this.observable.get();
  }
};
