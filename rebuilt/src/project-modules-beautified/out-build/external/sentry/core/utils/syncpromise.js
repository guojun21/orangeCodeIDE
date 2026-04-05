"use strict";

// Module: out-build/external/sentry/core/utils/syncpromise.js
// Offset: 66328 (bundle byte offset)
// Size: 1239 bytes
h9();
yNo = 0;
Tyc = 1;
Iyc = 2;
wNo = class Zod {
  constructor(e) {
    this._state = yNo;
    this._handlers = [];
    this._runExecutor(e);
  }
  then(e, t) {
    return new Zod((i, r) => {
      this._handlers.push([false, s => {
        if (!e) {
          i(s);
        } else {
          try {
            i(e(s));
          } catch (o) {
            r(o);
          }
        }
      }, s => {
        if (!t) {
          r(s);
        } else {
          try {
            i(t(s));
          } catch (o) {
            r(o);
          }
        }
      }]);
      this._executeHandlers();
    });
  }
  catch(e) {
    return this.then(t => t, e);
  }
  finally(e) {
    return new Zod((t, i) => {
      let r;
      let s;
      return this.then(o => {
        s = false;
        r = o;
        if (e) {
          e();
        }
      }, o => {
        s = true;
        r = o;
        if (e) {
          e();
        }
      }).then(() => {
        if (s) {
          i(r);
          return;
        }
        t(r);
      });
    });
  }
  _executeHandlers() {
    if (this._state === yNo) {
      return;
    }
    const e = this._handlers.slice();
    this._handlers = [];
    e.forEach(t => {
      if (!t[0]) {
        if (this._state === Tyc) {
          t[1](this._value);
        }
        if (this._state === Iyc) {
          t[2](this._value);
        }
        t[0] = true;
      }
    });
  }
  _runExecutor(e) {
    const t = (s, o) => {
      if (this._state === yNo) {
        if (Zje(o)) {
          o.then(i, r);
          return;
        }
        this._state = s;
        this._value = o;
        this._executeHandlers();
      }
    };
    const i = s => {
      t(Tyc, s);
    };
    const r = s => {
      t(Iyc, s);
    };
    try {
      e(i, r);
    } catch (s) {
      r(s);
    }
  }
};
