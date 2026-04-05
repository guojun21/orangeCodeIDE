"use strict";

// Module: out-build/vs/base/common/event.js
// Offset: 267725 (bundle byte offset)
// Size: 15179 bytes
Ate();
_s();
wH();
rt();
l2();
Sx();
l0c = false;
Xnh = false;
(function (n) {
  n.None = () => at.None;
  function e(X) {
    if (Xnh) {
      const {
        onDidAddListener: ee
      } = X;
      const re = UMo.create();
      let ne = 0;
      X.onDidAddListener = () => {
        if (++ne === 2) {
          console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here");
          re.print();
        }
        ee?.();
      };
    }
  }
  function t(X, ee) {
    return g(X, () => {}, 0, undefined, true, undefined, ee);
  }
  n.defer = t;
  function i(X) {
    return (ee, re = null, ne) => {
      let pe = false;
      let le;
      le = X(he => {
        if (!pe) {
          if (le) {
            le.dispose();
          } else {
            pe = true;
          }
          return ee.call(re, he);
        }
      }, null, ne);
      if (pe) {
        le.dispose();
      }
      return le;
    };
  }
  n.once = i;
  function r(X, ee) {
    return n.once(n.filter(X, ee));
  }
  n.onceIf = r;
  function s(X, ee, re) {
    return m((ne, pe = null, le) => X(he => ne.call(pe, ee(he)), null, le), re);
  }
  n.map = s;
  function o(X, ee, re) {
    return m((ne, pe = null, le) => X(he => {
      ee(he);
      ne.call(pe, he);
    }, null, le), re);
  }
  n.forEach = o;
  function a(X, ee, re) {
    return m((ne, pe = null, le) => X(he => ee(he) && ne.call(pe, he), null, le), re);
  }
  n.filter = a;
  function l(X) {
    return X;
  }
  n.signal = l;
  function u(...X) {
    return (ee, re = null, ne) => {
      const pe = H_(...X.map(le => le(he => ee.call(re, he))));
      return p(pe, ne);
    };
  }
  n.any = u;
  function d(X, ee, re, ne) {
    let pe = re;
    return s(X, le => {
      pe = ee(pe, le);
      return pe;
    }, ne);
  }
  n.reduce = d;
  function m(X, ee) {
    let re;
    const ne = {
      onWillAddFirstListener() {
        re = X(pe.fire, pe);
      },
      onDidRemoveLastListener() {
        re?.dispose();
      }
    };
    if (!ee) {
      e(ne);
    }
    const pe = new Qe(ne);
    ee?.add(pe);
    return pe.event;
  }
  function p(X, ee) {
    if (ee instanceof Array) {
      ee.push(X);
    } else if (ee) {
      ee.add(X);
    }
    return X;
  }
  function g(X, ee, re = 100, ne = false, pe = false, le, he) {
    let be;
    let fe;
    let ke;
    let Se = 0;
    let Fe;
    const De = {
      leakWarningThreshold: le,
      onWillAddFirstListener() {
        be = X(Ne => {
          Se++;
          fe = ee(fe, Ne);
          if (ne && !ke) {
            Pe.fire(fe);
            fe = undefined;
          }
          Fe = () => {
            const Oe = fe;
            fe = undefined;
            ke = undefined;
            if (!ne || Se > 1) {
              Pe.fire(Oe);
            }
            Se = 0;
          };
          if (typeof re == "number") {
            clearTimeout(ke);
            ke = setTimeout(Fe, re);
          } else if (ke === undefined) {
            ke = 0;
            queueMicrotask(Fe);
          }
        });
      },
      onWillRemoveListener() {
        if (pe && Se > 0) {
          Fe?.();
        }
      },
      onDidRemoveLastListener() {
        Fe = undefined;
        be.dispose();
      }
    };
    if (!he) {
      e(De);
    }
    const Pe = new Qe(De);
    he?.add(Pe);
    return Pe.event;
  }
  n.debounce = g;
  function f(X, ee = 0, re) {
    return n.debounce(X, (ne, pe) => ne ? (ne.push(pe), ne) : [pe], ee, undefined, true, undefined, re);
  }
  n.accumulate = f;
  function A(X, ee = (ne, pe) => ne === pe, re) {
    let ne = true;
    let pe;
    return a(X, le => {
      const he = ne || !ee(le, pe);
      ne = false;
      pe = le;
      return he;
    }, re);
  }
  n.latch = A;
  function w(X, ee, re) {
    return [n.filter(X, ee, re), n.filter(X, ne => !ee(ne), re)];
  }
  n.split = w;
  function C(X, ee = false, re = [], ne) {
    let pe = re.slice();
    let le = X(fe => {
      if (pe) {
        pe.push(fe);
      } else {
        be.fire(fe);
      }
    });
    if (ne) {
      ne.add(le);
    }
    const he = () => {
      pe?.forEach(fe => be.fire(fe));
      pe = null;
    };
    const be = new Qe({
      onWillAddFirstListener() {
        if (!le) {
          le = X(fe => be.fire(fe));
          if (ne) {
            ne.add(le);
          }
        }
      },
      onDidAddFirstListener() {
        if (pe) {
          if (ee) {
            setTimeout(he);
          } else {
            he();
          }
        }
      },
      onDidRemoveLastListener() {
        if (le) {
          le.dispose();
        }
        le = null;
      }
    });
    if (ne) {
      ne.add(be);
    }
    return be.event;
  }
  n.buffer = C;
  function x(X, ee) {
    return (ne, pe, le) => {
      const he = ee(new B());
      return X(function (be) {
        const fe = he.evaluate(be);
        if (fe !== I) {
          ne.call(pe, fe);
        }
      }, undefined, le);
    };
  }
  n.chain = x;
  const I = Symbol("HaltChainable");
  class B {
    constructor() {
      this.steps = [];
    }
    map(ee) {
      this.steps.push(ee);
      return this;
    }
    forEach(ee) {
      this.steps.push(re => {
        ee(re);
        return re;
      });
      return this;
    }
    filter(ee) {
      this.steps.push(re => ee(re) ? re : I);
      return this;
    }
    reduce(ee, re) {
      let ne = re;
      this.steps.push(pe => {
        ne = ee(ne, pe);
        return ne;
      });
      return this;
    }
    latch(ee = (re, ne) => re === ne) {
      let re = true;
      let ne;
      this.steps.push(pe => {
        const le = re || !ee(pe, ne);
        re = false;
        ne = pe;
        if (le) {
          return pe;
        } else {
          return I;
        }
      });
      return this;
    }
    evaluate(ee) {
      for (const re of this.steps) {
        ee = re(ee);
        if (ee === I) {
          break;
        }
      }
      return ee;
    }
  }
  function R(X, ee, re = ne => ne) {
    const ne = (...be) => he.fire(re(...be));
    const pe = () => X.on(ee, ne);
    const le = () => X.removeListener(ee, ne);
    const he = new Qe({
      onWillAddFirstListener: pe,
      onDidRemoveLastListener: le
    });
    return he.event;
  }
  n.fromNodeEventEmitter = R;
  function N(X) {
    let ee;
    const re = () => {
      ee = X.subscribe(le => pe.fire(le));
    };
    const ne = () => {
      ee?.unsubscribe();
      ee = undefined;
    };
    const pe = new Qe({
      onWillAddFirstListener: re,
      onDidRemoveLastListener: ne
    });
    return pe.event;
  }
  n.fromRxJS = N;
  function M(X, ee, re = ne => ne) {
    const ne = (...be) => he.fire(re(...be));
    const pe = () => X.addEventListener(ee, ne);
    const le = () => X.removeEventListener(ee, ne);
    const he = new Qe({
      onWillAddFirstListener: pe,
      onDidRemoveLastListener: le
    });
    return he.event;
  }
  n.fromDOMEventEmitter = M;
  function O(X, ee) {
    return new Promise(re => i(X)(re, null, ee));
  }
  n.toPromise = O;
  function $(X) {
    const ee = new Qe();
    X.then(re => {
      ee.fire(re);
    }, () => {
      ee.fire(undefined);
    }).finally(() => {
      ee.dispose();
    });
    return ee.event;
  }
  n.fromPromise = $;
  function H(X, ee) {
    return X(re => ee.fire(re));
  }
  n.forward = H;
  function W(X, ee, re) {
    ee(re);
    return X(ne => ee(ne));
  }
  n.runAndSubscribe = W;
  class z {
    constructor(ee, re) {
      this._observable = ee;
      this._counter = 0;
      this._hasChanged = false;
      const ne = {
        onWillAddFirstListener: () => {
          ee.addObserver(this);
          this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          ee.removeObserver(this);
        }
      };
      if (!re) {
        e(ne);
      }
      this.emitter = new Qe(ne);
      if (re) {
        re.add(this.emitter);
      }
    }
    beginUpdate(ee) {
      this._counter++;
    }
    handlePossibleChange(ee) {}
    handleChange(ee, re) {
      this._hasChanged = true;
    }
    endUpdate(ee) {
      this._counter--;
      if (this._counter === 0) {
        this._observable.reportChanges();
        if (this._hasChanged) {
          this._hasChanged = false;
          this.emitter.fire(this._observable.get());
        }
      }
    }
  }
  function Y(X, ee) {
    return new z(X, ee).emitter.event;
  }
  n.fromObservable = Y;
  function j(X) {
    return (ee, re, ne) => {
      let pe = 0;
      let le = false;
      const he = {
        beginUpdate() {
          pe++;
        },
        endUpdate() {
          pe--;
          if (pe === 0) {
            X.reportChanges();
            if (le) {
              le = false;
              ee.call(re);
            }
          }
        },
        handlePossibleChange() {},
        handleChange() {
          le = true;
        }
      };
      X.addObserver(he);
      X.reportChanges();
      const be = {
        dispose() {
          X.removeObserver(he);
        }
      };
      if (ne instanceof Ut) {
        ne.add(be);
      } else if (Array.isArray(ne)) {
        ne.push(be);
      }
      return be;
    };
  }
  n.fromObservableLight = j;
})(In ||= {});
OMo = class tad {
  static {
    this.all = new Set();
  }
  static {
    this._idPool = 0;
  }
  constructor(e) {
    this.listenerCount = 0;
    this.invocationCount = 0;
    this.elapsedOverall = 0;
    this.durations = [];
    this.name = `${e}_${tad._idPool++}`;
    tad.all.add(this);
  }
  start(e) {
    this._stopWatch = new J_();
    this.listenerCount = e;
  }
  stop() {
    if (this._stopWatch) {
      const e = this._stopWatch.elapsed();
      this.durations.push(e);
      this.elapsedOverall += e;
      this.invocationCount += 1;
      this._stopWatch = undefined;
    }
  }
};
u0c = -1;
eih = class eJb {
  static {
    this._idPool = 1;
  }
  constructor(e, t, i = (eJb._idPool++).toString(16).padStart(3, "0")) {
    this._errorHandler = e;
    this.threshold = t;
    this.name = i;
    this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const i = this.threshold;
    if (i <= 0 || t < i) {
      return;
    }
    this._stacks ||= new Map();
    const r = this._stacks.get(e.value) || 0;
    this._stacks.set(e.value, r + 1);
    this._warnCountdown -= 1;
    if (this._warnCountdown <= 0) {
      this._warnCountdown = i * 0.5;
      const [s, o] = this.getMostFrequentStack();
      const a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
      console.warn(a);
      console.warn(s);
      const l = new tih(a, s);
      this._errorHandler(l);
    }
    return () => {
      const s = this._stacks.get(e.value) || 0;
      this._stacks.set(e.value, s - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) {
      return;
    }
    let e;
    let t = 0;
    for (const [i, r] of this._stacks) {
      if (!e || t < r) {
        e = [i, r];
        t = r;
      }
    }
    return e;
  }
};
UMo = class tJb {
  static create() {
    const e = new Error();
    return new tJb(e.stack ?? "");
  }
  constructor(e) {
    this.value = e;
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
};
tih = class extends Error {
  constructor(n, e) {
    super(n);
    this.name = "ListenerLeakError";
    this.stack = e;
  }
};
nih = class extends Error {
  constructor(n, e) {
    super(n);
    this.name = "ListenerRefusalError";
    this.stack = e;
  }
};
iih = 0;
Q2n = class {
  constructor(n) {
    this.value = n;
    this.id = iih++;
  }
};
rih = 2;
d0c = (n, e) => {
  if (n instanceof Q2n) {
    e(n);
  } else {
    for (let t = 0; t < n.length; t++) {
      const i = n[t];
      if (i) {
        e(i);
      }
    }
  }
};
Qe = class {
  constructor(n) {
    this._size = 0;
    this._options = n;
    this._leakageMon = u0c > 0 || this._options?.leakWarningThreshold ? new eih(n?.onListenerError ?? Gc, this._options?.leakWarningThreshold ?? u0c) : undefined;
    this._perfMon = this._options?._profName ? new OMo(this._options._profName) : undefined;
    this._deliveryQueue = this._options?.deliveryQueue;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      if (this._deliveryQueue?.current === this) {
        this._deliveryQueue.reset();
      }
      if (this._listeners) {
        if (l0c) {
          const n = this._listeners;
          queueMicrotask(() => {
            d0c(n, e => e.stack?.print());
          });
        }
        this._listeners = undefined;
        this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.();
      this._leakageMon?.dispose();
    }
  }
  get event() {
    this._event ??= (n, e, t) => {
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        const a = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(a);
        const l = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1];
        const u = new nih(`${a}. HINT: Stack shows most frequent listener (${l[1]}-times)`, l[0]);
        (this._options?.onListenerError || Gc)(u);
        return at.None;
      }
      if (this._disposed) {
        return at.None;
      }
      if (e) {
        n = n.bind(e);
      }
      const i = new Q2n(n);
      let r;
      let s;
      if (this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2)) {
        i.stack = UMo.create();
        r = this._leakageMon.check(i.stack, this._size + 1);
      }
      if (l0c) {
        i.stack = s ?? UMo.create();
      }
      if (this._listeners) {
        if (this._listeners instanceof Q2n) {
          this._deliveryQueue ??= new h0c();
          this._listeners = [this._listeners, i];
        } else {
          this._listeners.push(i);
        }
      } else {
        this._options?.onWillAddFirstListener?.(this);
        this._listeners = i;
        this._options?.onDidAddFirstListener?.(this);
      }
      this._options?.onDidAddListener?.(this);
      this._size++;
      const o = $i(() => {
        r?.();
        this._removeListener(i);
      });
      if (t instanceof Ut) {
        t.add(o);
      } else if (Array.isArray(t)) {
        t.push(o);
      }
      return o;
    };
    return this._event;
  }
  _removeListener(n) {
    this._options?.onWillRemoveListener?.(this);
    if (!this._listeners) {
      return;
    }
    if (this._size === 1) {
      this._listeners = undefined;
      this._options?.onDidRemoveLastListener?.(this);
      this._size = 0;
      return;
    }
    const e = this._listeners;
    const t = e.indexOf(n);
    if (t === -1) {
      console.log("disposed?", this._disposed);
      console.log("size?", this._size);
      console.log("arr?", JSON.stringify(this._listeners));
      throw new Error("Attempted to dispose unknown listener");
    }
    this._size--;
    e[t] = undefined;
    const i = this._deliveryQueue.current === this;
    if (this._size * rih <= e.length) {
      let r = 0;
      for (let s = 0; s < e.length; s++) {
        if (e[s]) {
          e[r++] = e[s];
        } else if (i && r < this._deliveryQueue.end) {
          this._deliveryQueue.end--;
          if (r < this._deliveryQueue.i) {
            this._deliveryQueue.i--;
          }
        }
      }
      e.length = r;
    }
  }
  _deliver(n, e) {
    if (!n) {
      return;
    }
    const t = this._options?.onListenerError || Gc;
    if (!t) {
      n.value(e);
      return;
    }
    try {
      n.value(e);
    } catch (i) {
      t(i);
    }
  }
  _deliverQueue(n) {
    const e = n.current._listeners;
    while (n.i < n.end) {
      this._deliver(e[n.i++], n.value);
    }
    n.reset();
  }
  fire(n) {
    if (this._deliveryQueue?.current) {
      this._deliverQueue(this._deliveryQueue);
      this._perfMon?.stop();
    }
    this._perfMon?.start(this._size);
    if (this._listeners) {
      if (this._listeners instanceof Q2n) {
        this._deliver(this._listeners, n);
      } else {
        const e = this._deliveryQueue;
        e.enqueue(this, n, this._listeners.length);
        this._deliverQueue(e);
      }
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
};
sih = () => new h0c();
h0c = class {
  constructor() {
    this.i = -1;
    this.end = 0;
  }
  enqueue(n, e, t) {
    this.i = 0;
    this.end = t;
    this.current = n;
    this.value = e;
  }
  reset() {
    this.i = this.end;
    this.current = undefined;
    this.value = undefined;
  }
};
j2n = class extends Qe {
  async fireAsync(n, e, t) {
    if (this._listeners) {
      this._asyncDeliveryQueue ||= new WD();
      d0c(this._listeners, i => this._asyncDeliveryQueue.push([i.value, n]));
      while (this._asyncDeliveryQueue.size > 0 && !e.isCancellationRequested) {
        const [i, r] = this._asyncDeliveryQueue.shift();
        const s = [];
        const o = {
          ...r,
          token: e,
          waitUntil: a => {
            if (Object.isFrozen(s)) {
              throw new Error("waitUntil can NOT be called asynchronous");
            }
            if (t) {
              a = t(a, i);
            }
            s.push(a);
          }
        };
        try {
          i(o);
        } catch (a) {
          Gc(a);
          continue;
        }
        Object.freeze(s);
        await Promise.allSettled(s).then(a => {
          for (const l of a) {
            if (l.status === "rejected") {
              Gc(l.reason);
            }
          }
        });
      }
    }
  }
};
zj = class extends Qe {
  get isPaused() {
    return this._isPaused !== 0;
  }
  constructor(n) {
    super(n);
    this._isPaused = 0;
    this._eventQueue = new WD();
    this._mergeFn = n?.merge;
  }
  pause() {
    this._isPaused++;
  }
  resume() {
    if (this._isPaused !== 0 && --this._isPaused === 0) {
      if (this._mergeFn) {
        if (this._eventQueue.size > 0) {
          const n = Array.from(this._eventQueue);
          this._eventQueue.clear();
          super.fire(this._mergeFn(n));
        }
      } else {
        while (!this._isPaused && this._eventQueue.size !== 0) {
          super.fire(this._eventQueue.shift());
        }
      }
    }
  }
  fire(n) {
    if (this._size) {
      if (this._isPaused !== 0) {
        this._eventQueue.push(n);
      } else {
        super.fire(n);
      }
    }
  }
};
$Mo = class extends zj {
  constructor(n) {
    super(n);
    this._delay = n.delay ?? 100;
  }
  fire(n) {
    if (!this._handle) {
      this.pause();
      this._handle = setTimeout(() => {
        this._handle = undefined;
        this.resume();
      }, this._delay);
    }
    super.fire(n);
  }
};
oih = class extends Qe {
  constructor(n) {
    super(n);
    this._queuedEvents = [];
    this._mergeFn = n?.merge;
  }
  fire(n) {
    if (this.hasListeners()) {
      this._queuedEvents.push(n);
      if (this._queuedEvents.length === 1) {
        queueMicrotask(() => {
          if (this._mergeFn) {
            super.fire(this._mergeFn(this._queuedEvents));
          } else {
            this._queuedEvents.forEach(e => super.fire(e));
          }
          this._queuedEvents = [];
        });
      }
    }
  }
};
foe = class {
  constructor() {
    this.hasListeners = false;
    this.events = [];
    this.emitter = new Qe({
      onWillAddFirstListener: () => this.onFirstListenerAdd(),
      onDidRemoveLastListener: () => this.onLastListenerRemove()
    });
  }
  get event() {
    return this.emitter.event;
  }
  add(n) {
    const e = {
      event: n,
      listener: null
    };
    this.events.push(e);
    if (this.hasListeners) {
      this.hook(e);
    }
    return $i(_6(() => {
      if (this.hasListeners) {
        this.unhook(e);
      }
      const i = this.events.indexOf(e);
      this.events.splice(i, 1);
    }));
  }
  onFirstListenerAdd() {
    this.hasListeners = true;
    this.events.forEach(n => this.hook(n));
  }
  onLastListenerRemove() {
    this.hasListeners = false;
    this.events.forEach(n => this.unhook(n));
  }
  hook(n) {
    n.listener = n.event(e => this.emitter.fire(e));
  }
  unhook(n) {
    n.listener?.dispose();
    n.listener = null;
  }
  dispose() {
    this.emitter.dispose();
    for (const n of this.events) {
      n.listener?.dispose();
    }
    this.events = [];
  }
};
qMo = class {
  constructor(n, e, t, i) {
    this._store = new Ut();
    const r = this._store.add(new foe());
    const s = this._store.add(new mp());
    function o(a) {
      s.set(a, r.add(i(a)));
    }
    for (const a of n) {
      o(a);
    }
    this._store.add(e(a => {
      o(a);
    }));
    this._store.add(t(a => {
      s.deleteAndDispose(a);
    }));
    this.event = r.event;
  }
  dispose() {
    this._store.dispose();
  }
};
LFt = class {
  constructor() {
    this.data = [];
  }
  wrapEvent(n, e, t) {
    return (i, r, s) => n(o => {
      const a = this.data[this.data.length - 1];
      if (!e) {
        if (a) {
          a.buffers.push(() => i.call(r, o));
        } else {
          i.call(r, o);
        }
        return;
      }
      const l = a;
      if (!l) {
        i.call(r, e(t, o));
        return;
      }
      l.items ??= [];
      l.items.push(o);
      if (l.buffers.length === 0) {
        a.buffers.push(() => {
          l.reducedResult ??= t ? l.items.reduce(e, t) : l.items.reduce(e);
          i.call(r, l.reducedResult);
        });
      }
    }, undefined, s);
  }
  bufferEvents(n) {
    const e = {
      buffers: new Array()
    };
    this.data.push(e);
    const t = n();
    this.data.pop();
    e.buffers.forEach(i => i());
    return t;
  }
};
CH = class {
  constructor() {
    this.listening = false;
    this.inputEvent = In.None;
    this.inputEventListener = at.None;
    this.emitter = new Qe({
      onDidAddFirstListener: () => {
        this.listening = true;
        this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter);
      },
      onDidRemoveLastListener: () => {
        this.listening = false;
        this.inputEventListener.dispose();
      }
    });
    this.event = this.emitter.event;
  }
  set input(n) {
    this.inputEvent = n;
    if (this.listening) {
      this.inputEventListener.dispose();
      this.inputEventListener = n(this.emitter.fire, this.emitter);
    }
  }
  dispose() {
    this.inputEventListener.dispose();
    this.emitter.dispose();
  }
};
aih = class {
  static const(n) {
    return new cih(n);
  }
  constructor(n) {
    this._value = n;
    this._onDidChange = new Qe();
    this.onDidChange = this._onDidChange.event;
  }
  get value() {
    return this._value;
  }
  set value(n) {
    if (n !== this._value) {
      this._value = n;
      this._onDidChange.fire(undefined);
    }
  }
};
cih = class {
  constructor(n) {
    this.value = n;
    this.onDidChange = In.None;
  }
};
