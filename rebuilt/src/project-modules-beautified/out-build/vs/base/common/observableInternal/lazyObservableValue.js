"use strict";

// Module: out-build/vs/base/common/observableInternal/lazyObservableValue.js
// Offset: 486064 (bundle byte offset)
// Size: 2073 bytes
w5e();
Fgt();
Xsh = class extends Ogt {
  get debugName() {
    return this._debugNameData.getDebugName(this) ?? "LazyObservableValue";
  }
  constructor(n, e, t) {
    super();
    this._debugNameData = n;
    this._equalityComparator = t;
    this._isUpToDate = true;
    this._deltas = [];
    this._updateCounter = 0;
    this._value = e;
  }
  get() {
    this._update();
    return this._value;
  }
  _update() {
    if (!this._isUpToDate) {
      this._isUpToDate = true;
      if (this._deltas.length > 0) {
        for (const n of this._deltas) {
          T6()?.handleObservableUpdated(this, {
            change: n,
            didChange: true,
            oldValue: "(unknown)",
            newValue: this._value,
            hadValue: true
          });
          for (const e of this._observers) {
            e.handleChange(this, n);
          }
        }
        this._deltas.length = 0;
      } else {
        T6()?.handleObservableUpdated(this, {
          change: undefined,
          didChange: true,
          oldValue: "(unknown)",
          newValue: this._value,
          hadValue: true
        });
        for (const n of this._observers) {
          n.handleChange(this, undefined);
        }
      }
    }
  }
  _beginUpdate() {
    this._updateCounter++;
    if (this._updateCounter === 1) {
      for (const n of this._observers) {
        n.beginUpdate(this);
      }
    }
  }
  _endUpdate() {
    this._updateCounter--;
    if (this._updateCounter === 0) {
      this._update();
      const n = [...this._observers];
      for (const e of n) {
        e.endUpdate(this);
      }
    }
  }
  addObserver(n) {
    const e = !this._observers.has(n) && this._updateCounter > 0;
    super.addObserver(n);
    if (e) {
      n.beginUpdate(this);
    }
  }
  removeObserver(n) {
    const e = this._observers.has(n) && this._updateCounter > 0;
    super.removeObserver(n);
    if (e) {
      n.endUpdate(this);
    }
  }
  set(n, e, t) {
    if (t === undefined && this._equalityComparator(this._value, n)) {
      return;
    }
    let i;
    e ||= i = new Ugt(() => {}, () => `Setting ${this.debugName}`);
    try {
      this._isUpToDate = false;
      this._setValue(n);
      if (t !== undefined) {
        this._deltas.push(t);
      }
      e.updateObserver({
        beginUpdate: () => this._beginUpdate(),
        endUpdate: () => this._endUpdate(),
        handleChange: (r, s) => {},
        handlePossibleChange: r => {}
      }, this);
      if (this._updateCounter > 1) {
        for (const r of this._observers) {
          r.handlePossibleChange(this);
        }
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
};
