"use strict";

// Module: out-build/vs/base/common/async.js
// Offset: 428270 (bundle byte offset)
// Size: 27090 bytes
Po();
_s();
yn();
rt();
Yr();
_r();
VFt();
L0();
fde = class {
  constructor() {
    this.isDisposed = false;
    this.activePromise = null;
    this.queuedPromise = null;
    this.queuedPromiseFactory = null;
  }
  queue(n) {
    if (this.isDisposed) {
      return Promise.reject(new Error("Throttler is disposed"));
    }
    if (this.activePromise) {
      this.queuedPromiseFactory = n;
      if (!this.queuedPromise) {
        const e = () => {
          this.queuedPromise = null;
          if (this.isDisposed) {
            return;
          }
          const t = this.queue(this.queuedPromiseFactory);
          this.queuedPromiseFactory = null;
          return t;
        };
        this.queuedPromise = new Promise(t => {
          this.activePromise.then(e, e).then(t);
        });
      }
      return new Promise((e, t) => {
        this.queuedPromise.then(e, t);
      });
    }
    this.activePromise = n();
    return new Promise((e, t) => {
      this.activePromise.then(i => {
        this.activePromise = null;
        e(i);
      }, i => {
        this.activePromise = null;
        t(i);
      });
    });
  }
  dispose() {
    this.isDisposed = true;
  }
};
bde = class {
  constructor() {
    this.current = Promise.resolve(null);
  }
  queue(n) {
    return this.current = this.current.then(() => n(), () => n());
  }
};
KFt = class {
  constructor() {
    this.promiseMap = new Map();
  }
  queue(n, e) {
    const i = (this.promiseMap.get(n) ?? Promise.resolve()).catch(() => {}).then(e).finally(() => {
      if (this.promiseMap.get(n) === i) {
        this.promiseMap.delete(n);
      }
    });
    this.promiseMap.set(n, i);
    return i;
  }
  keys() {
    return this.promiseMap.keys();
  }
};
Lrh = (n, e) => {
  let t = true;
  const i = setTimeout(() => {
    t = false;
    e();
  }, n);
  return {
    isTriggered: () => t,
    dispose: () => {
      clearTimeout(i);
      t = false;
    }
  };
};
Nrh = n => {
  let e = true;
  queueMicrotask(() => {
    if (e) {
      e = false;
      n();
    }
  });
  return {
    isTriggered: () => e,
    dispose: () => {
      e = false;
    }
  };
};
Nv = class {
  constructor(n) {
    this.defaultDelay = n;
    this.deferred = null;
    this.completionPromise = null;
    this.doResolve = null;
    this.doReject = null;
    this.task = null;
  }
  trigger(n, e = this.defaultDelay) {
    this.task = n;
    this.cancelTimeout();
    this.completionPromise ||= new Promise((i, r) => {
      this.doResolve = i;
      this.doReject = r;
    }).then(() => {
      this.completionPromise = null;
      this.doResolve = null;
      if (this.task) {
        const i = this.task;
        this.task = null;
        return i();
      }
    });
    const t = () => {
      this.deferred = null;
      this.doResolve?.(null);
    };
    this.deferred = e === Sgt ? Nrh(t) : Lrh(e, t);
    return this.completionPromise;
  }
  isTriggered() {
    return !!this.deferred?.isTriggered();
  }
  cancel() {
    this.cancelTimeout();
    if (this.completionPromise) {
      this.doReject?.(new vf());
      this.completionPromise = null;
    }
  }
  cancelTimeout() {
    this.deferred?.dispose();
    this.deferred = null;
  }
  dispose() {
    this.cancel();
  }
};
L4 = class {
  constructor(n) {
    this.delayer = new Nv(n);
    this.throttler = new fde();
  }
  trigger(n, e) {
    return this.delayer.trigger(() => this.throttler.queue(n), e);
  }
  isTriggered() {
    return this.delayer.isTriggered();
  }
  cancel() {
    this.delayer.cancel();
  }
  dispose() {
    this.delayer.dispose();
    this.throttler.dispose();
  }
};
x6 = class {
  constructor() {
    this._isOpen = false;
    this._promise = new Promise((n, e) => {
      this._completePromise = n;
    });
  }
  isOpen() {
    return this._isOpen;
  }
  open() {
    this._isOpen = true;
    this._completePromise(true);
  }
  wait() {
    return this._promise;
  }
};
mFn = class extends x6 {
  constructor(n) {
    super();
    this._timeout = setTimeout(() => this.open(), n);
  }
  open() {
    clearTimeout(this._timeout);
    super.open();
  }
};
wSe = class {
  constructor(n) {
    this._size = 0;
    this._isDisposed = false;
    this.maxDegreeOfParalellism = n;
    this.outstandingPromises = [];
    this.runningPromises = 0;
    this._onDrained = new Qe();
  }
  whenIdle() {
    if (this.size > 0) {
      return In.toPromise(this.onDrained);
    } else {
      return Promise.resolve();
    }
  }
  get onDrained() {
    return this._onDrained.event;
  }
  get size() {
    return this._size;
  }
  queue(n) {
    if (this._isDisposed) {
      throw new Error("Object has been disposed");
    }
    this._size++;
    return new Promise((e, t) => {
      this.outstandingPromises.push({
        factory: n,
        c: e,
        e: t
      });
      this.consume();
    });
  }
  consume() {
    while (this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism) {
      const n = this.outstandingPromises.shift();
      this.runningPromises++;
      const e = n.factory();
      e.then(n.c, n.e);
      e.then(() => this.consumed(), () => this.consumed());
    }
  }
  consumed() {
    if (!this._isDisposed) {
      this.runningPromises--;
      if (--this._size === 0) {
        this._onDrained.fire();
      }
      if (this.outstandingPromises.length > 0) {
        this.consume();
      }
    }
  }
  clear() {
    if (this._isDisposed) {
      throw new Error("Object has been disposed");
    }
    this.outstandingPromises.length = 0;
    this._size = this.runningPromises;
  }
  dispose() {
    this._isDisposed = true;
    this.outstandingPromises.length = 0;
    this._size = 0;
    this._onDrained.dispose();
  }
};
yoe = class extends wSe {
  constructor() {
    super(1);
  }
};
Mrh = class {
  constructor() {
    this.sequentializer = new b2o();
    this.tasks = 0;
  }
  queue(n) {
    if (this.sequentializer.isRunning()) {
      return this.sequentializer.queue(() => this.sequentializer.run(this.tasks++, n()));
    } else {
      return this.sequentializer.run(this.tasks++, n());
    }
  }
};
YFt = class {
  constructor() {
    this.queues = new Map();
    this.drainers = new Set();
    this.drainListeners = undefined;
    this.drainListenerCount = 0;
  }
  async whenDrained() {
    if (this.isDrained()) {
      return;
    }
    const n = new wy();
    this.drainers.add(n);
    return n.p;
  }
  isDrained() {
    for (const [, n] of this.queues) {
      if (n.size > 0) {
        return false;
      }
    }
    return true;
  }
  queueSize(n, e = Iu) {
    const t = e.getComparisonKey(n);
    return this.queues.get(t)?.size ?? 0;
  }
  queueFor(n, e, t = Iu) {
    const i = t.getComparisonKey(n);
    let r = this.queues.get(i);
    if (!r) {
      r = new yoe();
      const s = this.drainListenerCount++;
      const o = In.once(r.onDrained)(() => {
        r?.dispose();
        this.queues.delete(i);
        this.onDidQueueDrain();
        this.drainListeners?.deleteAndDispose(s);
        if (this.drainListeners?.size === 0) {
          this.drainListeners.dispose();
          this.drainListeners = undefined;
        }
      });
      this.drainListeners ||= new mp();
      this.drainListeners.set(s, o);
      this.queues.set(i, r);
    }
    return r.queue(e);
  }
  onDidQueueDrain() {
    if (this.isDrained()) {
      this.releaseDrainers();
    }
  }
  releaseDrainers() {
    for (const n of this.drainers) {
      n.complete();
    }
    this.drainers.clear();
  }
  dispose() {
    for (const [, n] of this.queues) {
      n.dispose();
    }
    this.queues.clear();
    this.releaseDrainers();
    this.drainListeners?.dispose();
  }
};
O$ = class {
  constructor(n, e) {
    this._isDisposed = false;
    this._token = -1;
    if (typeof n == "function" && typeof e == "number") {
      this.setIfNotSet(n, e);
    }
  }
  dispose() {
    this.cancel();
    this._isDisposed = true;
  }
  cancel() {
    if (this._token !== -1) {
      clearTimeout(this._token);
      this._token = -1;
    }
  }
  cancelAndSet(n, e) {
    if (this._isDisposed) {
      throw new _m("Calling 'cancelAndSet' on a disposed TimeoutTimer");
    }
    this.cancel();
    this._token = setTimeout(() => {
      this._token = -1;
      n();
    }, e);
  }
  setIfNotSet(n, e) {
    if (this._isDisposed) {
      throw new _m("Calling 'setIfNotSet' on a disposed TimeoutTimer");
    }
    if (this._token === -1) {
      this._token = setTimeout(() => {
        this._token = -1;
        n();
      }, e);
    }
  }
};
woe = class {
  constructor() {
    this.disposable = undefined;
    this.isDisposed = false;
  }
  cancel() {
    this.disposable?.dispose();
    this.disposable = undefined;
  }
  cancelAndSet(n, e, t = globalThis) {
    if (this.isDisposed) {
      throw new _m("Calling 'cancelAndSet' on a disposed IntervalTimer");
    }
    this.cancel();
    const i = t.setInterval(() => {
      n();
    }, e);
    this.disposable = $i(() => {
      t.clearInterval(i);
      this.disposable = undefined;
    });
  }
  dispose() {
    this.cancel();
    this.isDisposed = true;
  }
};
Hu = class {
  constructor(n, e) {
    this.timeoutToken = -1;
    this.runner = n;
    this.timeout = e;
    this.timeoutHandler = this.onTimeout.bind(this);
  }
  dispose() {
    this.cancel();
    this.runner = null;
  }
  cancel() {
    if (this.isScheduled()) {
      clearTimeout(this.timeoutToken);
      this.timeoutToken = -1;
    }
  }
  schedule(n = this.timeout) {
    this.cancel();
    this.timeoutToken = setTimeout(this.timeoutHandler, n);
  }
  get delay() {
    return this.timeout;
  }
  set delay(n) {
    this.timeout = n;
  }
  isScheduled() {
    return this.timeoutToken !== -1;
  }
  flush() {
    if (this.isScheduled()) {
      this.cancel();
      this.doRun();
    }
  }
  onTimeout() {
    this.timeoutToken = -1;
    if (this.runner) {
      this.doRun();
    }
  }
  doRun() {
    this.runner?.();
  }
};
ZFt = class extends Hu {
  constructor(n, e) {
    super(n, e);
    this.units = [];
  }
  work(n) {
    this.units.push(n);
    if (!this.isScheduled()) {
      this.schedule();
    }
  }
  doRun() {
    const n = this.units;
    this.units = [];
    this.runner?.(n);
  }
  dispose() {
    this.units = [];
    super.dispose();
  }
};
(function () {
  if (typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function") {
    pFn = (n, e, t) => {
      l5e(() => {
        if (i) {
          return;
        }
        const r = Date.now() + 15;
        e(Object.freeze({
          didTimeout: true,
          timeRemaining() {
            return Math.max(0, r - Date.now());
          }
        }));
      });
      let i = false;
      return {
        dispose() {
          i ||= true;
        }
      };
    };
  } else {
    pFn = (n, e, t) => {
      const i = n.requestIdleCallback(e, typeof t == "number" ? {
        timeout: t
      } : undefined);
      let r = false;
      return {
        dispose() {
          if (!r) {
            r = true;
            n.cancelIdleCallback(i);
          }
        }
      };
    };
  }
  Mze = (n, e) => pFn(globalThis, n, e);
})();
wCc = class {
  constructor(n, e) {
    this._didRun = false;
    this._executor = () => {
      try {
        this._value = e();
      } catch (t) {
        this._error = t;
      } finally {
        this._didRun = true;
      }
    };
    this._handle = pFn(n, () => this._executor());
  }
  dispose() {
    this._handle.dispose();
  }
  get value() {
    if (!this._didRun) {
      this._handle.dispose();
      this._executor();
    }
    if (this._error) {
      throw this._error;
    }
    return this._value;
  }
  get isInitialized() {
    return this._didRun;
  }
};
gFn = class extends wCc {
  constructor(n) {
    super(globalThis, n);
  }
};
b2o = class {
  isRunning(n) {
    if (typeof n == "number") {
      return this._running?.taskId === n;
    } else {
      return !!this._running;
    }
  }
  get running() {
    return this._running?.promise;
  }
  cancelRunning() {
    this._running?.cancel();
  }
  run(n, e, t) {
    this._running = {
      taskId: n,
      cancel: () => t?.(),
      promise: e
    };
    e.then(() => this.doneRunning(n), () => this.doneRunning(n));
    return e;
  }
  doneRunning(n) {
    if (this._running && n === this._running.taskId) {
      this._running = undefined;
      this.runQueued();
    }
  }
  runQueued() {
    if (this._queued) {
      const n = this._queued;
      this._queued = undefined;
      n.run().then(n.promiseResolve, n.promiseReject);
    }
  }
  queue(n) {
    if (this._queued) {
      this._queued.run = n;
    } else {
      const {
        promise: e,
        resolve: t,
        reject: i
      } = PBe();
      this._queued = {
        run: n,
        promise: e,
        promiseResolve: t,
        promiseReject: i
      };
    }
    return this._queued.promise;
  }
  hasQueued() {
    return !!this._queued;
  }
  async join() {
    return this._queued?.promise ?? this._running?.promise;
  }
};
Frh = class {
  constructor(n, e = () => Date.now()) {
    this.interval = n;
    this.nowFn = e;
    this.lastIncrementTime = 0;
    this.value = 0;
  }
  increment() {
    const n = this.nowFn();
    if (n - this.lastIncrementTime > this.interval) {
      this.lastIncrementTime = n;
      this.value = 0;
    }
    this.value++;
    return this.value;
  }
};
(function (n) {
  n[n.Resolved = 0] = "Resolved";
  n[n.Rejected = 1] = "Rejected";
})(Orh ||= {});
wy = class {
  get isRejected() {
    return this.outcome?.outcome === 1;
  }
  get isResolved() {
    return this.outcome?.outcome === 0;
  }
  get isSettled() {
    return !!this.outcome;
  }
  get value() {
    if (this.outcome?.outcome === 0) {
      return this.outcome?.value;
    } else {
      return undefined;
    }
  }
  constructor() {
    this.p = new Promise((n, e) => {
      this.completeCallback = n;
      this.errorCallback = e;
    });
  }
  complete(n) {
    return new Promise(e => {
      this.completeCallback(n);
      this.outcome = {
        outcome: 0,
        value: n
      };
      e();
    });
  }
  error(n) {
    return new Promise(e => {
      this.errorCallback(n);
      this.outcome = {
        outcome: 1,
        value: n
      };
      e();
    });
  }
  cancel() {
    return this.error(new vf());
  }
};
(function (n) {
  async function e(i) {
    let r;
    const s = await Promise.all(i.map(o => o.then(a => a, a => {
      r ||= a;
    })));
    if (typeof r !== "undefined") {
      throw r;
    }
    return s;
  }
  n.settled = e;
  function t(i) {
    return new Promise(async (r, s) => {
      try {
        await i(r, s);
      } catch (o) {
        s(o);
      }
    });
  }
  n.withAsyncBody = t;
})(ib ||= {});
Urh = class {
  get value() {
    return this._value;
  }
  get error() {
    return this._error;
  }
  get isResolved() {
    return this._isResolved;
  }
  constructor(n) {
    this._value = undefined;
    this._error = undefined;
    this._isResolved = false;
    this.promise = n.then(e => {
      this._value = e;
      this._isResolved = true;
      return e;
    }, e => {
      this._error = e;
      this._isResolved = true;
      throw e;
    });
  }
  requireValue() {
    if (!this._isResolved) {
      throw new _m("Promise is not resolved yet");
    }
    if (this._error) {
      throw this._error;
    }
    return this._value;
  }
};
$rh = class {
  constructor(n) {
    this._compute = n;
    this._promise = new Ob(() => new Urh(this._compute()));
  }
  requireValue() {
    return this._promise.value.requireValue();
  }
  getPromise() {
    return this._promise.value.promise;
  }
  get currentValue() {
    return this._promise.rawValue?.value;
  }
};
(function (n) {
  n[n.Initial = 0] = "Initial";
  n[n.DoneOK = 1] = "DoneOK";
  n[n.DoneError = 2] = "DoneError";
})(qrh ||= {});
IH = class rge {
  static fromArray(e) {
    return new rge(t => {
      t.emitMany(e);
    });
  }
  static fromPromise(e) {
    return new rge(async t => {
      t.emitMany(await e);
    });
  }
  static fromPromisesResolveOrder(e) {
    return new rge(async t => {
      await Promise.all(e.map(async i => t.emitOne(await i)));
    });
  }
  static merge(e) {
    return new rge(async t => {
      await Promise.all(e.map(async i => {
        for await (const r of i) {
          t.emitOne(r);
        }
      }));
    });
  }
  static {
    this.EMPTY = rge.fromArray([]);
  }
  constructor(e, t) {
    this._state = 0;
    this._results = [];
    this._error = null;
    this._onReturn = t;
    this._onStateChanged = new Qe();
    queueMicrotask(async () => {
      const i = {
        emitOne: r => this.emitOne(r),
        emitMany: r => this.emitMany(r),
        reject: r => this.reject(r)
      };
      try {
        await Promise.resolve(e(i));
        this.resolve();
      } catch (r) {
        this.reject(r);
      } finally {
        i.emitOne = undefined;
        i.emitMany = undefined;
        i.reject = undefined;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let e = 0;
    return {
      next: async () => {
        do {
          if (this._state === 2) {
            throw this._error;
          }
          if (e < this._results.length) {
            return {
              done: false,
              value: this._results[e++]
            };
          }
          if (this._state === 1) {
            return {
              done: true,
              value: undefined
            };
          }
          await In.toPromise(this._onStateChanged.event);
        } while (true);
      },
      return: async () => {
        this._onReturn?.();
        return {
          done: true,
          value: undefined
        };
      }
    };
  }
  static map(e, t) {
    return new rge(async i => {
      for await (const r of e) {
        i.emitOne(t(r));
      }
    });
  }
  map(e) {
    return rge.map(this, e);
  }
  static filter(e, t) {
    return new rge(async i => {
      for await (const r of e) {
        if (t(r)) {
          i.emitOne(r);
        }
      }
    });
  }
  filter(e) {
    return rge.filter(this, e);
  }
  static coalesce(e) {
    return rge.filter(e, t => !!t);
  }
  coalesce() {
    return rge.coalesce(this);
  }
  static async toPromise(e) {
    const t = [];
    for await (const i of e) {
      t.push(i);
    }
    return t;
  }
  toPromise() {
    return rge.toPromise(this);
  }
  emitOne(e) {
    if (this._state === 0) {
      this._results.push(e);
      this._onStateChanged.fire();
    }
  }
  emitMany(e) {
    if (this._state === 0) {
      this._results = this._results.concat(e);
      this._onStateChanged.fire();
    }
  }
  resolve() {
    if (this._state === 0) {
      this._state = 1;
      this._onStateChanged.fire();
    }
  }
  reject(e) {
    if (this._state === 0) {
      this._state = 2;
      this._error = e;
      this._onStateChanged.fire();
    }
  }
};
Hrh = class extends IH {
  constructor(n, e) {
    super(e);
    this._source = n;
  }
  cancel() {
    this._source.cancel();
  }
};
v2o = class {
  constructor(n) {
    this._deferred = new wy();
    this._asyncIterable = new IH(i => {
      if (e) {
        i.reject(e);
        return;
      }
      if (t) {
        i.emitMany(t);
      }
      this._errorFn = r => i.reject(r);
      this._emitFn = r => i.emitOne(r);
      return this._deferred.p;
    }, n);
    let e;
    let t;
    this._emitFn = i => {
      t ||= [];
      t.push(i);
    };
    this._errorFn = i => {
      e ||= i;
    };
  }
  get asyncIterable() {
    return this._asyncIterable;
  }
  resolve() {
    this._deferred.complete();
  }
  reject(n) {
    this._errorFn(n);
    this._deferred.complete();
  }
  emitOne(n) {
    this._emitFn(n);
  }
};
