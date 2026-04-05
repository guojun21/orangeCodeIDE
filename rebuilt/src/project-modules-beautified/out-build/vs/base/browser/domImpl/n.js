"use strict";

// Module: out-build/vs/base/browser/domImpl/n.js
// Offset: 523303 (bundle byte offset)
// Size: 14512 bytes
_s();
rt();
Uc();
ri();
(function (n) {
  function e(r = undefined) {
    return (s, o, a) => {
      const l = o.class;
      delete o.class;
      const u = o.ref;
      delete o.ref;
      const d = o.obsRef;
      delete o.obsRef;
      return new Boh(s, u, d, r, l, o, a);
    };
  }
  function t(r, s = undefined) {
    const o = e(s);
    return (a, l) => o(r, a, l);
  }
  n.div = t("div");
  n.elem = e(undefined);
  n.svg = t("svg", "http://www.w3.org/2000/svg");
  n.svgElem = e("http://www.w3.org/2000/svg");
  function i() {
    let r;
    const s = function (o) {
      r = o;
    };
    Object.defineProperty(s, "element", {
      get() {
        if (!r) {
          throw new _m("Make sure the ref is set before accessing the element. Maybe wrong initialization order?");
        }
        return r;
      }
    });
    return s;
  }
  n.ref = i;
})(Mv ||= {});
Ioh = class aJb {
  constructor(e, t, i, r, s, o, a) {
    this._deriveds = [];
    this._element = r ? document.createElementNS(r, e) : document.createElement(e);
    if (t) {
      t(this._element);
    }
    if (i) {
      this._deriveds.push(Ite((u, d) => {
        i(this);
        d.add({
          dispose: () => {
            i(null);
          }
        });
      }));
    }
    if (s) {
      if (koh(s)) {
        this._deriveds.push(Ro(this, u => {
          _oh(this._element, Soh(s, u));
        }));
      } else {
        _oh(this._element, Soh(s, undefined));
      }
    }
    for (const [u, d] of Object.entries(o)) {
      if (u === "style") {
        for (const [m, p] of Object.entries(d)) {
          const g = JSc(m);
          if (Hgt(p)) {
            this._deriveds.push(uF({
              owner: this,
              debugName: () => `set.style.${g}`
            }, f => {
              this._element.style.setProperty(g, Eoh(p.read(f)));
            }));
          } else {
            this._element.style.setProperty(g, Eoh(p));
          }
        }
      } else if (u === "tabIndex") {
        if (Hgt(d)) {
          this._deriveds.push(Ro(this, m => {
            this._element.tabIndex = d.read(m);
          }));
        } else {
          this._element.tabIndex = d;
        }
      } else if (u.startsWith("on")) {
        this._element[u] = d;
      } else if (Hgt(d)) {
        this._deriveds.push(uF({
          owner: this,
          debugName: () => `set.${u}`
        }, m => {
          Toh(this._element, u, d.read(m));
        }));
      } else {
        Toh(this._element, u, d);
      }
    }
    if (a) {
      let u = function (m, p) {
        if (Hgt(p)) {
          return u(m, p.read(m));
        } else if (Array.isArray(p)) {
          return p.flatMap(g => u(m, g));
        } else if (p instanceof aJb) {
          if (m) {
            p.readEffect(m);
          }
          return [p._element];
        } else if (p) {
          return [p];
        } else {
          return [];
        }
      };
      var l = u;
      const d = Ro(this, m => {
        this._element.replaceChildren(...u(m, a));
      });
      this._deriveds.push(d);
      if (!xoh(a)) {
        d.get();
      }
    }
  }
  readEffect(e) {
    for (const t of this._deriveds) {
      t.read(e);
    }
  }
  keepUpdated(e) {
    Ro(t => {
      this.readEffect(t);
    }).recomputeInitiallyAndOnChange(e);
    return this;
  }
  toDisposableLiveElement() {
    const e = new Ut();
    this.keepUpdated(e);
    return new Doh(this._element, e);
  }
};
Doh = class {
  constructor(n, e) {
    this.element = n;
    this._disposable = e;
  }
  dispose() {
    this._disposable.dispose();
  }
};
Boh = class extends Ioh {
  constructor() {
    super(...arguments);
    this._isHovered = undefined;
    this._didMouseMoveDuringHover = undefined;
  }
  get element() {
    return this._element;
  }
  get isHovered() {
    if (!this._isHovered) {
      const n = Ua("hovered", false);
      this._element.addEventListener("mouseenter", e => n.set(true, undefined));
      this._element.addEventListener("mouseleave", e => n.set(false, undefined));
      this._isHovered = n;
    }
    return this._isHovered;
  }
  get didMouseMoveDuringHover() {
    if (!this._didMouseMoveDuringHover) {
      let n = false;
      const e = Ua("didMouseMoveDuringHover", false);
      this._element.addEventListener("mouseenter", t => {
        n = true;
      });
      this._element.addEventListener("mousemove", t => {
        if (n) {
          e.set(true, undefined);
        }
      });
      this._element.addEventListener("mouseleave", t => {
        n = false;
        e.set(false, undefined);
      });
      this._didMouseMoveDuringHover = e;
    }
    return this._didMouseMoveDuringHover;
  }
};
