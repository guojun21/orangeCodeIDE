"use strict";

// Module: out-build/vs/base/common/map.js
// Offset: 245299 (bundle byte offset)
// Size: 8626 bytes
Nnh = class {
  constructor(n, e) {
    this.uri = n;
    this.value = e;
  }
};
fu = class ZLi {
  static {
    this.defaultToKey = e => e.toString();
  }
  constructor(e, t) {
    this[Rnh] = "ResourceMap";
    if (e instanceof ZLi) {
      this.map = new Map(e.map);
      this.toKey = t ?? ZLi.defaultToKey;
    } else if (rtA(e)) {
      this.map = new Map();
      this.toKey = t ?? ZLi.defaultToKey;
      for (const [i, r] of e) {
        this.set(i, r);
      }
    } else {
      this.map = new Map();
      this.toKey = e ?? ZLi.defaultToKey;
    }
  }
  set(e, t) {
    this.map.set(this.toKey(e), new Nnh(e, t));
    return this;
  }
  get(e) {
    return this.map.get(this.toKey(e))?.value;
  }
  has(e) {
    return this.map.has(this.toKey(e));
  }
  get size() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  delete(e) {
    return this.map.delete(this.toKey(e));
  }
  forEach(e, t) {
    if (typeof t !== "undefined") {
      e = e.bind(t);
    }
    for (const [i, r] of this.map) {
      e(r.value, r.uri, this);
    }
  }
  *values() {
    for (const e of this.map.values()) {
      yield e.value;
    }
  }
  *keys() {
    for (const e of this.map.values()) {
      yield e.uri;
    }
  }
  *entries() {
    for (const e of this.map.values()) {
      yield [e.uri, e.value];
    }
  }
  *[(Rnh = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, e] of this.map) {
      yield [e.uri, e.value];
    }
  }
};
lT = class {
  constructor(n, e) {
    this[Pnh] = "ResourceSet";
    if (!n || typeof n == "function") {
      this._map = new fu(n);
    } else {
      this._map = new fu(e);
      n.forEach(this.add, this);
    }
  }
  get size() {
    return this._map.size;
  }
  add(n) {
    this._map.set(n, n);
    return this;
  }
  clear() {
    this._map.clear();
  }
  delete(n) {
    return this._map.delete(n);
  }
  forEach(n, e) {
    this._map.forEach((t, i) => n.call(e, i, i, this));
  }
  has(n) {
    return this._map.has(n);
  }
  entries() {
    return this._map.entries();
  }
  keys() {
    return this._map.keys();
  }
  values() {
    return this._map.keys();
  }
  [(Pnh = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
};
(function (n) {
  n[n.None = 0] = "None";
  n[n.AsOld = 1] = "AsOld";
  n[n.AsNew = 2] = "AsNew";
})(Mnh ||= {});
BFt = class {
  constructor() {
    this[Lnh] = "LinkedMap";
    this._map = new Map();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
    this._state = 0;
  }
  clear() {
    this._map.clear();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
    this._state++;
  }
  isEmpty() {
    return !this._head && !this._tail;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._head?.value;
  }
  get last() {
    return this._tail?.value;
  }
  has(n) {
    return this._map.has(n);
  }
  get(n, e = 0) {
    const t = this._map.get(n);
    if (t) {
      if (e !== 0) {
        this.touch(t, e);
      }
      return t.value;
    }
  }
  set(n, e, t = 0) {
    let i = this._map.get(n);
    if (i) {
      i.value = e;
      if (t !== 0) {
        this.touch(i, t);
      }
    } else {
      i = {
        key: n,
        value: e,
        next: undefined,
        previous: undefined
      };
      switch (t) {
        case 0:
          this.addItemLast(i);
          break;
        case 1:
          this.addItemFirst(i);
          break;
        case 2:
          this.addItemLast(i);
          break;
        default:
          this.addItemLast(i);
          break;
      }
      this._map.set(n, i);
      this._size++;
    }
    return this;
  }
  delete(n) {
    return !!this.remove(n);
  }
  remove(n) {
    const e = this._map.get(n);
    if (e) {
      this._map.delete(n);
      this.removeItem(e);
      this._size--;
      return e.value;
    }
  }
  shift() {
    if (!this._head && !this._tail) {
      return;
    }
    if (!this._head || !this._tail) {
      throw new Error("Invalid list");
    }
    const n = this._head;
    this._map.delete(n.key);
    this.removeItem(n);
    this._size--;
    return n.value;
  }
  forEach(n, e) {
    const t = this._state;
    let i = this._head;
    while (i) {
      if (e) {
        n.bind(e)(i.value, i.key, this);
      } else {
        n(i.value, i.key, this);
      }
      if (this._state !== t) {
        throw new Error("LinkedMap got modified during iteration.");
      }
      i = i.next;
    }
  }
  keys() {
    const n = this;
    const e = this._state;
    let t = this._head;
    const i = {
      [Symbol.iterator]() {
        return i;
      },
      next() {
        if (n._state !== e) {
          throw new Error("LinkedMap got modified during iteration.");
        }
        if (t) {
          const r = {
            value: t.key,
            done: false
          };
          t = t.next;
          return r;
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }
    };
    return i;
  }
  values() {
    const n = this;
    const e = this._state;
    let t = this._head;
    const i = {
      [Symbol.iterator]() {
        return i;
      },
      next() {
        if (n._state !== e) {
          throw new Error("LinkedMap got modified during iteration.");
        }
        if (t) {
          const r = {
            value: t.value,
            done: false
          };
          t = t.next;
          return r;
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }
    };
    return i;
  }
  entries() {
    const n = this;
    const e = this._state;
    let t = this._head;
    const i = {
      [Symbol.iterator]() {
        return i;
      },
      next() {
        if (n._state !== e) {
          throw new Error("LinkedMap got modified during iteration.");
        }
        if (t) {
          const r = {
            value: [t.key, t.value],
            done: false
          };
          t = t.next;
          return r;
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }
    };
    return i;
  }
  [(Lnh = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(n) {
    if (n >= this.size) {
      return;
    }
    if (n === 0) {
      this.clear();
      return;
    }
    let e = this._head;
    let t = this.size;
    while (e && t > n) {
      this._map.delete(e.key);
      e = e.next;
      t--;
    }
    this._head = e;
    this._size = t;
    if (e) {
      e.previous = undefined;
    }
    this._state++;
  }
  trimNew(n) {
    if (n >= this.size) {
      return;
    }
    if (n === 0) {
      this.clear();
      return;
    }
    let e = this._tail;
    let t = this.size;
    while (e && t > n) {
      this._map.delete(e.key);
      e = e.previous;
      t--;
    }
    this._tail = e;
    this._size = t;
    if (e) {
      e.next = undefined;
    }
    this._state++;
  }
  addItemFirst(n) {
    if (!this._head && !this._tail) {
      this._tail = n;
    } else if (this._head) {
      n.next = this._head;
      this._head.previous = n;
    } else {
      throw new Error("Invalid list");
    }
    this._head = n;
    this._state++;
  }
  addItemLast(n) {
    if (!this._head && !this._tail) {
      this._head = n;
    } else if (this._tail) {
      n.previous = this._tail;
      this._tail.next = n;
    } else {
      throw new Error("Invalid list");
    }
    this._tail = n;
    this._state++;
  }
  removeItem(n) {
    if (n === this._head && n === this._tail) {
      this._head = undefined;
      this._tail = undefined;
    } else if (n === this._head) {
      if (!n.next) {
        throw new Error("Invalid list");
      }
      n.next.previous = undefined;
      this._head = n.next;
    } else if (n === this._tail) {
      if (!n.previous) {
        throw new Error("Invalid list");
      }
      n.previous.next = undefined;
      this._tail = n.previous;
    } else {
      const e = n.next;
      const t = n.previous;
      if (!e || !t) {
        throw new Error("Invalid list");
      }
      e.previous = t;
      t.next = e;
    }
    n.next = undefined;
    n.previous = undefined;
    this._state++;
  }
  touch(n, e) {
    if (!this._head || !this._tail) {
      throw new Error("Invalid list");
    }
    if (e === 1 || e === 2) {
      if (e === 1) {
        if (n === this._head) {
          return;
        }
        const t = n.next;
        const i = n.previous;
        if (n === this._tail) {
          i.next = undefined;
          this._tail = i;
        } else {
          t.previous = i;
          i.next = t;
        }
        n.previous = undefined;
        n.next = this._head;
        this._head.previous = n;
        this._head = n;
        this._state++;
      } else if (e === 2) {
        if (n === this._tail) {
          return;
        }
        const t = n.next;
        const i = n.previous;
        if (n === this._head) {
          t.previous = undefined;
          this._head = t;
        } else {
          t.previous = i;
          i.next = t;
        }
        n.next = undefined;
        n.previous = this._tail;
        this._tail.next = n;
        this._tail = n;
        this._state++;
      }
    }
  }
  toJSON() {
    const n = [];
    this.forEach((e, t) => {
      n.push([t, e]);
    });
    return n;
  }
  fromJSON(n) {
    this.clear();
    for (const [e, t] of n) {
      this.set(e, t);
    }
  }
};
i0c = class extends BFt {
  constructor(n, e = 1) {
    super();
    this._limit = n;
    this._ratio = Math.min(Math.max(0, e), 1);
  }
  get limit() {
    return this._limit;
  }
  set limit(n) {
    this._limit = n;
    this.checkTrim();
  }
  get ratio() {
    return this._ratio;
  }
  set ratio(n) {
    this._ratio = Math.min(Math.max(0, n), 1);
    this.checkTrim();
  }
  get(n, e = 2) {
    return super.get(n, e);
  }
  peek(n) {
    return super.get(n, 0);
  }
  set(n, e) {
    super.set(n, e, 2);
    return this;
  }
  checkTrim() {
    if (this.size > this._limit) {
      this.trim(Math.round(this._limit * this._ratio));
    }
  }
};
Fb = class extends i0c {
  constructor(n, e = 1) {
    super(n, e);
  }
  trim(n) {
    this.trimOld(n);
  }
  set(n, e) {
    super.set(n, e);
    this.checkTrim();
    return this;
  }
};
Fnh = class extends i0c {
  constructor(n, e = 1) {
    super(n, e);
  }
  trim(n) {
    this.trimNew(n);
  }
  set(n, e) {
    if (this._limit <= this.size && !this.has(n)) {
      this.trim(Math.round(this._limit * this._ratio) - 1);
    }
    super.set(n, e);
    return this;
  }
};
r0c = class {
  constructor() {
    this.map = new Map();
  }
  add(n) {
    this.map.set(n, (this.map.get(n) || 0) + 1);
    return this;
  }
  delete(n) {
    let e = this.map.get(n) || 0;
    if (e === 0) {
      return false;
    } else {
      e--;
      if (e === 0) {
        this.map.delete(n);
      } else {
        this.map.set(n, e);
      }
      return true;
    }
  }
  has(n) {
    return this.map.has(n);
  }
};
Onh = class {
  constructor(n) {
    this._m1 = new Map();
    this._m2 = new Map();
    if (n) {
      for (const [e, t] of n) {
        this.set(e, t);
      }
    }
  }
  clear() {
    this._m1.clear();
    this._m2.clear();
  }
  set(n, e) {
    this._m1.set(n, e);
    this._m2.set(e, n);
  }
  get(n) {
    return this._m1.get(n);
  }
  getKey(n) {
    return this._m2.get(n);
  }
  delete(n) {
    const e = this._m1.get(n);
    if (e === undefined) {
      return false;
    } else {
      this._m1.delete(n);
      this._m2.delete(e);
      return true;
    }
  }
  forEach(n, e) {
    this._m1.forEach((t, i) => {
      n.call(e, t, i, this);
    });
  }
  keys() {
    return this._m1.keys();
  }
  values() {
    return this._m1.values();
  }
};
RFt = class {
  constructor() {
    this.map = new Map();
  }
  add(n, e) {
    let t = this.map.get(n);
    if (!t) {
      t = new Set();
      this.map.set(n, t);
    }
    t.add(e);
  }
  delete(n, e) {
    const t = this.map.get(n);
    if (t) {
      t.delete(e);
      if (t.size === 0) {
        this.map.delete(n);
      }
    }
  }
  forEach(n, e) {
    const t = this.map.get(n);
    if (t) {
      t.forEach(e);
    }
  }
  get(n) {
    const e = this.map.get(n);
    return e || new Set();
  }
};
H2n = class {
  constructor() {
    this._data = new Map();
  }
  set(n, ...e) {
    let t = this._data;
    for (let i = 0; i < e.length - 1; i++) {
      if (!t.has(e[i])) {
        t.set(e[i], new Map());
      }
      t = t.get(e[i]);
    }
    t.set(e[e.length - 1], n);
  }
  get(...n) {
    let e = this._data;
    for (let t = 0; t < n.length - 1; t++) {
      if (!e.has(n[t])) {
        return;
      }
      e = e.get(n[t]);
    }
    return e.get(n[n.length - 1]);
  }
  clear() {
    this._data.clear();
  }
  *values() {
    function* n(e) {
      for (const t of e.values()) {
        if (t instanceof Map) {
          yield* n(t);
        } else {
          yield t;
        }
      }
    }
    yield* n(this._data);
  }
  toString() {
    const n = (e, t) => {
      let i = "";
      for (const [r, s] of e) {
        i += `${"  ".repeat(t)}${r}: `;
        if (s instanceof Map) {
          i += `
${n(s, t + 1)}`;
        } else {
          i += `${s}
`;
        }
      }
      return i;
    };
    return n(this._data, 0);
  }
};
