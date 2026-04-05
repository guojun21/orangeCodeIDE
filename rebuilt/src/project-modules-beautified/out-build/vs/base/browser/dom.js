"use strict";

// Module: out-build/vs/base/browser/dom.js
// Offset: 537815 (bundle byte offset)
// Size: 12309 bytes
Ay();
TBe();
Tb();
h0();
vr();
_s();
yn();
i4t();
rt();
zr();
_r();
Yn();
iw();
iu();
sE();
ml();
piA();
giA();
({
  registerWindow: joh,
  getWindow: As,
  getDocument: lFo,
  getWindows: Obe,
  getWindowsCount: XFn,
  getWindowId: RH,
  getWindowById: Coe,
  hasWindow: Qgt,
  onDidRegisterWindow: ez,
  onWillUnregisterWindow: zoh,
  onDidUnregisterWindow: Voh
} = function () {
  const n = new Map();
  bnh(bi, 1);
  const e = {
    window: bi,
    disposables: new Ut()
  };
  n.set(bi.vscodeWindowId, e);
  const t = new Qe();
  const i = new Qe();
  const r = new Qe();
  function s(o, a) {
    return (typeof o == "number" ? n.get(o) : undefined) ?? (a ? e : undefined);
  }
  return {
    onDidRegisterWindow: t.event,
    onWillUnregisterWindow: r.event,
    onDidUnregisterWindow: i.event,
    registerWindow(o) {
      if (n.has(o.vscodeWindowId)) {
        return at.None;
      }
      const a = new Ut();
      const l = {
        window: o,
        disposables: a.add(new Ut())
      };
      n.set(o.vscodeWindowId, l);
      a.add($i(() => {
        n.delete(o.vscodeWindowId);
        i.fire(o);
      }));
      a.add(ei(o, ir.BEFORE_UNLOAD, () => {
        r.fire(o);
      }));
      t.fire(l);
      return a;
    },
    getWindows() {
      return n.values();
    },
    getWindowsCount() {
      return n.size;
    },
    getWindowId(o) {
      return o.vscodeWindowId;
    },
    hasWindow(o) {
      return n.has(o);
    },
    getWindowById: s,
    getWindow(o) {
      const a = o;
      if (a?.ownerDocument?.defaultView) {
        return a.ownerDocument.defaultView.window;
      }
      const l = o;
      if (l?.view) {
        return l.view.window;
      } else {
        return bi;
      }
    },
    getDocument(o) {
      return As(o).document;
    }
  };
}());
Koh = class {
  constructor(n, e, t, i) {
    this._node = n;
    this._type = e;
    this._handler = t;
    this._options = i || false;
    this._node.addEventListener(this._type, this._handler, this._options);
  }
  dispose() {
    if (this._handler) {
      this._node.removeEventListener(this._type, this._handler, this._options);
      this._node = null;
      this._handler = null;
    }
  }
};
_f = function (e, t, i, r) {
  let s = i;
  if (t === "click" || t === "mousedown" || t === "contextmenu") {
    s = GSc(As(e), i);
  } else if (t === "keydown" || t === "keypress" || t === "keyup") {
    s = fiA(i);
  }
  return ei(e, t, s, r);
};
$Be = function (e, t, i) {
  const r = GSc(As(e), t);
  return nFo(e, r, i);
};
ZSc = function (e, t, i) {
  const r = GSc(As(e), t);
  return zFn(e, r, i);
};
T5e = class extends wCc {
  constructor(n, e) {
    super(n, e);
  }
};
D5e = class extends woe {
  constructor(n) {
    super();
    this.defaultTarget = n && As(n);
  }
  cancelAndSet(n, e, t) {
    return super.cancelAndSet(n, e, t ?? this.defaultTarget);
  }
};
uFo = class {
  constructor(n, e = 0) {
    this._runner = n;
    this.priority = e;
    this._canceled = false;
  }
  dispose() {
    this._canceled = true;
  }
  execute() {
    if (!this._canceled) {
      try {
        this._runner();
      } catch (n) {
        Gc(n);
      }
    }
  }
  static sort(n, e) {
    return e.priority - n.priority;
  }
};
(function () {
  const n = new Map();
  const e = new Map();
  const t = new Map();
  const i = new Map();
  const r = s => {
    t.set(s, false);
    const o = n.get(s) ?? [];
    e.set(s, o);
    n.set(s, []);
    i.set(s, true);
    while (o.length > 0) {
      o.sort(uFo.sort);
      o.shift().execute();
    }
    i.set(s, false);
  };
  r_ = (s, o, a = 0) => {
    const l = RH(s);
    const u = new uFo(o, a);
    let d = n.get(l);
    if (!d) {
      d = [];
      n.set(l, d);
    }
    d.push(u);
    if (!t.get(l)) {
      t.set(l, true);
      s.requestAnimationFrame(() => r(l));
    }
    return u;
  };
  I5e = (s, o, a) => {
    const l = RH(s);
    if (i.get(l)) {
      const u = new uFo(o, a);
      let d = e.get(l);
      if (!d) {
        d = [];
        e.set(l, d);
      }
      d.push(u);
      return u;
    } else {
      return r_(s, o, a);
    }
  };
})();
tz = class Tle {
  static convertToPixels(e, t) {
    return parseFloat(t) || 0;
  }
  static getDimension(e, t) {
    const i = w4t(e);
    const r = i ? i.getPropertyValue(t) : "0";
    return Tle.convertToPixels(e, r);
  }
  static getBorderLeftWidth(e) {
    return Tle.getDimension(e, "border-left-width");
  }
  static getBorderRightWidth(e) {
    return Tle.getDimension(e, "border-right-width");
  }
  static getBorderTopWidth(e) {
    return Tle.getDimension(e, "border-top-width");
  }
  static getBorderBottomWidth(e) {
    return Tle.getDimension(e, "border-bottom-width");
  }
  static getPaddingLeft(e) {
    return Tle.getDimension(e, "padding-left");
  }
  static getPaddingRight(e) {
    return Tle.getDimension(e, "padding-right");
  }
  static getPaddingTop(e) {
    return Tle.getDimension(e, "padding-top");
  }
  static getPaddingBottom(e) {
    return Tle.getDimension(e, "padding-bottom");
  }
  static getMarginLeft(e) {
    return Tle.getDimension(e, "margin-left");
  }
  static getMarginTop(e) {
    return Tle.getDimension(e, "margin-top");
  }
  static getMarginRight(e) {
    return Tle.getDimension(e, "margin-right");
  }
  static getMarginBottom(e) {
    return Tle.getDimension(e, "margin-bottom");
  }
};
Lu = class iNi {
  static {
    this.None = new iNi(0, 0);
  }
  constructor(e, t) {
    this.width = e;
    this.height = t;
  }
  with(e = this.width, t = this.height) {
    if (e !== this.width || t !== this.height) {
      return new iNi(e, t);
    } else {
      return this;
    }
  }
  static is(e) {
    return typeof e == "object" && typeof e.height == "number" && typeof e.width == "number";
  }
  static lift(e) {
    if (e instanceof iNi) {
      return e;
    } else {
      return new iNi(e.width, e.height);
    }
  }
  static equals(e, t) {
    if (e === t) {
      return true;
    } else if (!e || !t) {
      return false;
    } else {
      return e.width === t.width && e.height === t.height;
    }
  }
};
XSc = "parentFlowToElementId";
dFo = new class {
  constructor() {
    this.mutationObservers = new Map();
  }
  observe(n, e, t) {
    let i = this.mutationObservers.get(n);
    if (!i) {
      i = new Map();
      this.mutationObservers.set(n, i);
    }
    const r = VC(t);
    let s = i.get(r);
    if (s) {
      s.users += 1;
    } else {
      const o = new Qe();
      const a = new MutationObserver(u => o.fire(u));
      a.observe(n, t);
      const l = s = {
        users: 1,
        observer: a,
        onDidMutate: o.event
      };
      e.add($i(() => {
        l.users -= 1;
        if (l.users === 0) {
          o.dispose();
          a.disconnect();
          i?.delete(r);
          if (i?.size === 0) {
            this.mutationObservers.delete(n);
          }
        }
      }));
      i.set(r, s);
    }
    return s.onDidMutate;
  }
}();
ir = {
  CLICK: "click",
  AUXCLICK: "auxclick",
  DBLCLICK: "dblclick",
  MOUSE_UP: "mouseup",
  MOUSE_DOWN: "mousedown",
  MOUSE_OVER: "mouseover",
  MOUSE_MOVE: "mousemove",
  MOUSE_OUT: "mouseout",
  MOUSE_ENTER: "mouseenter",
  MOUSE_LEAVE: "mouseleave",
  MOUSE_WHEEL: "wheel",
  POINTER_UP: "pointerup",
  POINTER_DOWN: "pointerdown",
  POINTER_MOVE: "pointermove",
  POINTER_LEAVE: "pointerleave",
  CONTEXT_MENU: "contextmenu",
  WHEEL: "wheel",
  KEY_DOWN: "keydown",
  KEY_PRESS: "keypress",
  KEY_UP: "keyup",
  LOAD: "load",
  BEFORE_UNLOAD: "beforeunload",
  UNLOAD: "unload",
  PAGE_SHOW: "pageshow",
  PAGE_HIDE: "pagehide",
  PASTE: "paste",
  ABORT: "abort",
  ERROR: "error",
  RESIZE: "resize",
  SCROLL: "scroll",
  FULLSCREEN_CHANGE: "fullscreenchange",
  WK_FULLSCREEN_CHANGE: "webkitfullscreenchange",
  SELECT: "select",
  CHANGE: "change",
  SUBMIT: "submit",
  RESET: "reset",
  FOCUS: "focus",
  FOCUS_IN: "focusin",
  FOCUS_OUT: "focusout",
  BLUR: "blur",
  INPUT: "input",
  STORAGE: "storage",
  DRAG_START: "dragstart",
  DRAG: "drag",
  DRAG_ENTER: "dragenter",
  DRAG_LEAVE: "dragleave",
  DRAG_OVER: "dragover",
  DROP: "drop",
  DRAG_END: "dragend",
  ANIMATION_START: wze ? "webkitAnimationStart" : "animationstart",
  ANIMATION_END: wze ? "webkitAnimationEnd" : "animationend",
  ANIMATION_ITERATION: wze ? "webkitAnimationIteration" : "animationiteration"
};
zu = {
  stop: (n, e) => {
    n.preventDefault();
    if (e) {
      n.stopPropagation();
    }
    return n;
  }
};
Yoh = class iad extends at {
  static hasFocusWithin(e) {
    if (wf(e)) {
      const t = Qze(e);
      const i = t ? t.activeElement : e.ownerDocument.activeElement;
      return HS(i, e);
    } else {
      const t = e;
      return HS(t.document.activeElement, t.document);
    }
  }
  constructor(e) {
    super();
    this._onDidFocus = this._register(new Qe());
    this.onDidFocus = this._onDidFocus.event;
    this._onDidBlur = this._register(new Qe());
    this.onDidBlur = this._onDidBlur.event;
    let t = iad.hasFocusWithin(e);
    let i = false;
    const r = () => {
      i = false;
      if (!t) {
        t = true;
        this._onDidFocus.fire();
      }
    };
    const s = () => {
      if (t) {
        i = true;
        (wf(e) ? As(e) : e).setTimeout(() => {
          if (i) {
            i = false;
            t = false;
            this._onDidBlur.fire();
          }
        }, 0);
      }
    };
    this._refreshStateHandler = () => {
      if (iad.hasFocusWithin(e) !== t) {
        if (t) {
          s();
        } else {
          r();
        }
      }
    };
    this._register(ei(e, ir.FOCUS, r, true));
    this._register(ei(e, ir.BLUR, s, true));
    if (wf(e)) {
      this._register(ei(e, ir.FOCUS_IN, () => this._refreshStateHandler()));
      this._register(ei(e, ir.FOCUS_OUT, () => this._refreshStateHandler()));
    }
  }
  refreshState() {
    this._refreshStateHandler();
  }
};
Zoh = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
(function (n) {
  n.HTML = "http://www.w3.org/1999/xhtml";
  n.SVG = "http://www.w3.org/2000/svg";
})(e4n ||= {});
Ct.SVG = function (n, e, ...t) {
  return Joh(e4n.SVG, n, e, ...t);
};
ekc = 780;
tkc = 640;
ASe.setPreferredWebSchema(/^https:/.test(bi.location.href) ? "https" : "http");
(function (n) {
  n[n.DOCUMENT = 1] = "DOCUMENT";
  n[n.BROWSER = 2] = "BROWSER";
})(Xoh ||= {});
eah = [_n.http, _n.https, _n.command];
nkc = Object.freeze(["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "ins", "kbd", "label", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr"]);
tah = Object.freeze({
  ALLOWED_TAGS: ["a", "button", "blockquote", "code", "div", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "input", "label", "li", "p", "pre", "select", "small", "span", "strong", "textarea", "ul", "ol"],
  ALLOWED_ATTR: ["href", "data-href", "data-command", "target", "title", "name", "src", "alt", "class", "id", "role", "tabindex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"],
  RETURN_DOM: false,
  RETURN_DOM_FRAGMENT: false,
  RETURN_TRUSTED_TYPE: true
});
qBe = class Lat extends Qe {
  constructor() {
    super();
    this._subscriptions = new Ut();
    this._keyStatus = {
      altKey: false,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    };
    this._subscriptions.add(In.runAndSubscribe(ez, ({
      window: e,
      disposables: t
    }) => this.registerListeners(e, t), {
      window: bi,
      disposables: this._subscriptions
    }));
  }
  registerListeners(e, t) {
    t.add(ei(e, "keydown", i => {
      if (i.defaultPrevented) {
        return;
      }
      const r = new vh(i);
      if (r.keyCode !== 6 || !i.repeat) {
        if (i.altKey && !this._keyStatus.altKey) {
          this._keyStatus.lastKeyPressed = "alt";
        } else if (i.ctrlKey && !this._keyStatus.ctrlKey) {
          this._keyStatus.lastKeyPressed = "ctrl";
        } else if (i.metaKey && !this._keyStatus.metaKey) {
          this._keyStatus.lastKeyPressed = "meta";
        } else if (i.shiftKey && !this._keyStatus.shiftKey) {
          this._keyStatus.lastKeyPressed = "shift";
        } else if (r.keyCode !== 6) {
          this._keyStatus.lastKeyPressed = undefined;
        } else {
          return;
        }
        this._keyStatus.altKey = i.altKey;
        this._keyStatus.ctrlKey = i.ctrlKey;
        this._keyStatus.metaKey = i.metaKey;
        this._keyStatus.shiftKey = i.shiftKey;
        if (this._keyStatus.lastKeyPressed) {
          this._keyStatus.event = i;
          this.fire(this._keyStatus);
        }
      }
    }, true));
    t.add(ei(e, "keyup", i => {
      if (!i.defaultPrevented) {
        if (!i.altKey && this._keyStatus.altKey) {
          this._keyStatus.lastKeyReleased = "alt";
        } else if (!i.ctrlKey && this._keyStatus.ctrlKey) {
          this._keyStatus.lastKeyReleased = "ctrl";
        } else if (!i.metaKey && this._keyStatus.metaKey) {
          this._keyStatus.lastKeyReleased = "meta";
        } else if (!i.shiftKey && this._keyStatus.shiftKey) {
          this._keyStatus.lastKeyReleased = "shift";
        } else {
          this._keyStatus.lastKeyReleased = undefined;
        }
        if (this._keyStatus.lastKeyPressed !== this._keyStatus.lastKeyReleased) {
          this._keyStatus.lastKeyPressed = undefined;
        }
        this._keyStatus.altKey = i.altKey;
        this._keyStatus.ctrlKey = i.ctrlKey;
        this._keyStatus.metaKey = i.metaKey;
        this._keyStatus.shiftKey = i.shiftKey;
        if (this._keyStatus.lastKeyReleased) {
          this._keyStatus.event = i;
          this.fire(this._keyStatus);
        }
      }
    }, true));
    t.add(ei(e.document.body, "mousedown", () => {
      this._keyStatus.lastKeyPressed = undefined;
    }, true));
    t.add(ei(e.document.body, "mouseup", () => {
      this._keyStatus.lastKeyPressed = undefined;
    }, true));
    t.add(ei(e.document.body, "mousemove", i => {
      if (i.buttons) {
        this._keyStatus.lastKeyPressed = undefined;
      }
    }, true));
    t.add(ei(e, "blur", () => {
      this.resetKeyStatus();
    }));
  }
  get keyStatus() {
    return this._keyStatus;
  }
  get isModifierPressed() {
    return this._keyStatus.altKey || this._keyStatus.ctrlKey || this._keyStatus.metaKey || this._keyStatus.shiftKey;
  }
  resetKeyStatus() {
    this.doResetKeyStatus();
    this.fire(this._keyStatus);
  }
  doResetKeyStatus() {
    this._keyStatus = {
      altKey: false,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    };
  }
  static getInstance() {
    Lat.instance ||= new Lat();
    return Lat.instance;
  }
  static disposeInstance() {
    if (Lat.instance) {
      Lat.instance.dispose();
      Lat.instance = undefined;
    }
  }
  dispose() {
    super.dispose();
    this._subscriptions.dispose();
  }
};
PH = class extends at {
  constructor(n, e) {
    super();
    this.element = n;
    this.callbacks = e;
    this.counter = 0;
    this.dragStartTime = 0;
    this.registerListeners();
  }
  registerListeners() {
    if (this.callbacks.onDragStart) {
      this._register(ei(this.element, ir.DRAG_START, n => {
        this.callbacks.onDragStart?.(n);
      }));
    }
    if (this.callbacks.onDrag) {
      this._register(ei(this.element, ir.DRAG, n => {
        this.callbacks.onDrag?.(n);
      }));
    }
    this._register(ei(this.element, ir.DRAG_ENTER, n => {
      this.counter++;
      this.dragStartTime = n.timeStamp;
      this.callbacks.onDragEnter?.(n);
    }));
    this._register(ei(this.element, ir.DRAG_OVER, n => {
      n.preventDefault();
      this.callbacks.onDragOver?.(n, n.timeStamp - this.dragStartTime);
    }));
    this._register(ei(this.element, ir.DRAG_LEAVE, n => {
      this.counter--;
      if (this.counter === 0) {
        this.dragStartTime = 0;
        this.callbacks.onDragLeave?.(n);
      }
    }));
    this._register(ei(this.element, ir.DRAG_END, n => {
      this.counter = 0;
      this.dragStartTime = 0;
      this.callbacks.onDragEnd?.(n);
    }));
    this._register(ei(this.element, ir.DROP, n => {
      this.counter = 0;
      this.dragStartTime = 0;
      this.callbacks.onDrop?.(n);
    }));
  }
};
ikc = /(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;
rkc = class {
  constructor(n, e, t) {
    this.originX = n;
    this.originY = e;
    this.points = new Int16Array(8);
    const {
      top: i,
      left: r,
      right: s,
      bottom: o
    } = t.getBoundingClientRect();
    const a = this.points;
    let l = 0;
    a[l++] = r;
    a[l++] = i;
    a[l++] = s;
    a[l++] = i;
    a[l++] = r;
    a[l++] = o;
    a[l++] = s;
    a[l++] = o;
  }
  contains(n, e) {
    const {
      points: t,
      originX: i,
      originY: r
    } = this;
    for (let s = 0; s < 4; s++) {
      const o = s * 2;
      const a = (s + 1) % 4 * 2;
      if (SnA(n, e, i, r, t[o], t[o + 1], t[a], t[a + 1])) {
        return true;
      }
    }
    return false;
  }
};
