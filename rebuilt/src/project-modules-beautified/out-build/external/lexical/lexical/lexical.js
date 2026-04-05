"use strict";

// Module: out-build/external/lexical/lexical/lexical.js
// Offset: 4091703 (bundle byte offset)
// Size: 52430 bytes
aqh();
YOc();
uqh();
ri();
iu();
_r();
xA = 0;
lI = 1;
Cve = 3;
uhe = 4;
C7h = class {
  constructor(n, e, t, i, r, s, o) {
    this._parentEditor = e;
    this._rootElement = null;
    this._editorState = n;
    this._pendingEditorState = null;
    this._compositionKey = null;
    this._deferred = [];
    this._keyToDOMMap = new Map();
    this._updates = [];
    this._updating = false;
    this._listeners = {
      decorator: new Set(),
      editable: new Set(),
      mutation: new Map(),
      root: new Set(),
      textcontent: new Set(),
      update: new Set()
    };
    this._commands = new Map();
    this._config = i;
    this._nodes = t;
    this._decorators = {};
    this._pendingDecorators = null;
    this._dirtyType = fYe;
    this._cloneNotNeeded = new Set();
    this._dirtyLeaves = new Set();
    this._dirtyElements = new Map();
    this._normalizedNodes = new Set();
    this._updateTags = new Set();
    this._observer = null;
    this._key = u7h();
    this._onError = r;
    this._htmlConversions = s;
    this._editable = o;
    this._headless = e !== null && e._headless;
    this._window = null;
    this._blockCursorElement = null;
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(n) {
    const e = this._listeners.update;
    e.add(n);
    return () => {
      e.delete(n);
    };
  }
  registerEditableListener(n) {
    const e = this._listeners.editable;
    e.add(n);
    return () => {
      e.delete(n);
    };
  }
  registerDecoratorListener(n) {
    const e = this._listeners.decorator;
    e.add(n);
    return () => {
      e.delete(n);
    };
  }
  registerTextContentListener(n) {
    const e = this._listeners.textcontent;
    e.add(n);
    return () => {
      e.delete(n);
    };
  }
  registerRootListener(n) {
    const e = this._listeners.root;
    n(this._rootElement, null);
    e.add(n);
    return () => {
      n(null, this._rootElement);
      e.delete(n);
    };
  }
  registerCommand(n, e, t) {
    if (t === undefined) {
      Yg(false, "Listener for type \"command\" requires a \"priority\".");
    }
    const i = this._commands;
    if (!i.has(n)) {
      i.set(n, [new Set(), new Set(), new Set(), new Set(), new Set()]);
    }
    const r = i.get(n);
    if (r === undefined) {
      Yg(false, "registerCommand: Command %s not found in command map", String(n));
    }
    const s = r[t];
    s.add(e);
    return () => {
      s.delete(e);
      if (r.every(o => o.size === 0)) {
        i.delete(n);
      }
    };
  }
  registerMutationListener(n, e) {
    if (this._nodes.get(n.getType()) === undefined) {
      Yg(false, "Node %s has not been registered. Ensure node has been passed to createEditor.", n.name);
    }
    const i = this._listeners.mutation;
    i.set(e, n);
    return () => {
      i.delete(e);
    };
  }
  registerNodeTransformToKlass(n, e) {
    const t = n.getType();
    const i = this._nodes.get(t);
    if (i === undefined) {
      Yg(false, "Node %s has not been registered. Ensure node has been passed to createEditor.", n.name);
    }
    i.transforms.add(e);
    return i;
  }
  registerNodeTransform(n, e) {
    const t = this.registerNodeTransformToKlass(n, e);
    const i = [t];
    const r = t.replaceWithKlass;
    if (r != null) {
      const s = this.registerNodeTransformToKlass(r, e);
      i.push(s);
    }
    ubA(this, n.getType());
    return () => {
      i.forEach(s => s.transforms.delete(e));
    };
  }
  hasNodes(n) {
    for (let e = 0; e < n.length; e++) {
      const i = n[e].getType();
      if (!this._nodes.has(i)) {
        return false;
      }
    }
    return true;
  }
  dispatchCommand(n, e) {
    return Fd(this, n, e);
  }
  getDecorators() {
    return this._decorators;
  }
  getRootElement() {
    return this._rootElement;
  }
  getKey() {
    return this._key;
  }
  setRootElement(n) {
    const e = this._rootElement;
    if (n !== e) {
      const t = _6n(this._config.theme, "root");
      const i = this._pendingEditorState || this._editorState;
      this._rootElement = n;
      dqh(this, e, n, i);
      if (e !== null) {
        if (!this._config.disableEvents) {
          wfA(e);
        }
        if (t != null) {
          e.classList.remove(...t);
        }
      }
      if (n !== null) {
        const r = JbA(n);
        const s = n.style;
        s.userSelect = "text";
        s.whiteSpace = "pre-wrap";
        s.wordBreak = "break-word";
        n.setAttribute("data-lexical-editor", "true");
        this._window = r;
        this._dirtyType = Evt;
        kqh(this);
        this._updateTags.add("history-merge");
        gvt(this);
        if (!this._config.disableEvents) {
          yfA(n, this);
        }
        if (t != null) {
          n.classList.add(...t);
        }
      } else {
        this._window = null;
      }
      b6n("root", this, false, n, e);
    }
  }
  getElementByKey(n) {
    return this._keyToDOMMap.get(n) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(n, e) {
    if (n.isEmpty()) {
      Yg(false, "setEditorState: the editor state is empty. Ensure the editor state's root node never becomes empty.");
    }
    Sqh(this);
    const t = this._pendingEditorState;
    const i = this._updateTags;
    const r = e !== undefined ? e.tag : null;
    if (t !== null && !t.isEmpty()) {
      if (r != null) {
        i.add(r);
      }
      gvt(this);
    }
    this._pendingEditorState = n;
    this._dirtyType = Evt;
    this._dirtyElements.set("root", false);
    this._compositionKey = null;
    if (r != null) {
      i.add(r);
    }
    gvt(this);
  }
  parseEditorState(n, e) {
    const t = typeof n == "string" ? JSON.parse(n) : n;
    return ZfA(t, this, e);
  }
  update(n, e) {
    ahe(this, n, e);
  }
  focus(n, e = {}) {
    const t = this._rootElement;
    if (t !== null) {
      t.setAttribute("autocapitalize", "off");
      ahe(this, () => {
        const i = Wd();
        const r = lf();
        if (i !== null) {
          i.dirty = true;
        } else if (r.getChildrenSize() !== 0) {
          if (e.defaultSelection === "rootStart") {
            r.selectStart();
          } else {
            r.selectEnd();
          }
        }
      }, {
        onUpdate: () => {
          t.removeAttribute("autocapitalize");
          if (n) {
            n();
          }
        },
        tag: "focus"
      });
      if (this._pendingEditorState === null) {
        t.removeAttribute("autocapitalize");
      }
    }
  }
  blur() {
    const n = this._rootElement;
    if (n !== null) {
      n.blur();
    }
    const e = Y9e(this);
    if (e !== null) {
      e.removeAllRanges();
    }
  }
  isEditable() {
    return this._editable;
  }
  setEditable(n) {
    if (this._editable !== n) {
      this._editable = n;
      b6n("editable", this, true, n);
    }
  }
  toJSON() {
    return {
      editorState: this._editorState.toJSON()
    };
  }
};
B3c = class VGb {
  constructor(e, t) {
    this._nodeMap = e;
    this._selection = t || null;
    this._flushSync = false;
    this._readOnly = false;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(e) {
    return Yqh(this, e);
  }
  clone(e) {
    const t = new VGb(this._nodeMap, e === undefined ? this._selection : e);
    t._readOnly = true;
    return t;
  }
  toJSON() {
    return Yqh(this, () => ({
      root: mqh(lf())
    }));
  }
};
zRe = Object.freeze({});
yUo = 30;
wUo = [["keydown", AfA], ["keyup", vfA], ["pointerdown", dfA], ["compositionstart", ffA], ["compositionend", bfA], ["input", gfA], ["click", ufA], ["cut", zRe], ["copy", zRe], ["dragstart", zRe], ["dragover", zRe], ["dragend", zRe], ["paste", zRe], ["focus", zRe], ["blur", zRe], ["drop", zRe]];
if (hvt) {
  wUo.push(["beforeinput", (n, e) => pfA(n, e)]);
}
w9t = 0;
R3c = 0;
P3c = 0;
vvt = null;
_9t = new WeakMap();
_Uo = new WeakMap();
CUo = false;
SUo = false;
C9t = false;
S9t = false;
L3c = [0, "", 0, "root", 0];
Avt = new Map();
S7h = 100;
kUo = false;
EUo = 0;
E6n = class {
  static getType() {
    Yg(false, "LexicalNode: Node %s does not implement .getType().", this.name);
  }
  static clone(n) {
    Yg(false, "LexicalNode: Node %s does not implement .clone().", this.name);
  }
  constructor(n) {
    this.__type = this.constructor.getType();
    this.__parent = null;
    this.__prev = null;
    this.__next = null;
    i7h(this, n);
  }
  getType() {
    return this.__type;
  }
  isAttached() {
    let n = this.__key;
    while (n !== null) {
      if (n === "root") {
        return true;
      }
      const e = jB(n);
      if (e === null) {
        break;
      }
      n = e.__parent;
    }
    return false;
  }
  isSelected(n) {
    const e = n || Wd();
    if (e == null) {
      return false;
    }
    const t = e.getNodes().some(i => i.__key === this.__key);
    if (jd(this)) {
      return t;
    } else if (dd(e) && e.anchor.type === "element" && e.focus.type === "element" && e.anchor.key === e.focus.key && e.anchor.offset === e.focus.offset) {
      return false;
    } else {
      return t;
    }
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    const n = this.getParent();
    if (n === null) {
      return -1;
    }
    let e = n.getFirstChild();
    let t = 0;
    while (e !== null) {
      if (this.is(e)) {
        return t;
      }
      t++;
      e = e.getNextSibling();
    }
    return -1;
  }
  getParent() {
    const n = this.getLatest().__parent;
    if (n === null) {
      return null;
    } else {
      return jB(n);
    }
  }
  getParentOrThrow() {
    const n = this.getParent();
    if (n === null) {
      Yg(false, "Expected node %s to have a parent.", this.__key);
    }
    return n;
  }
  getTopLevelElement() {
    let n = this;
    while (n !== null) {
      const e = n.getParent();
      if (zte(e)) {
        return n;
      }
      n = e;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const n = this.getTopLevelElement();
    if (n === null) {
      Yg(false, "Expected node %s to have a top parent element.", this.__key);
    }
    return n;
  }
  getParents() {
    const n = [];
    let e = this.getParent();
    while (e !== null) {
      n.push(e);
      e = e.getParent();
    }
    return n;
  }
  getParentKeys() {
    const n = [];
    let e = this.getParent();
    while (e !== null) {
      n.push(e.__key);
      e = e.getParent();
    }
    return n;
  }
  getPreviousSibling() {
    const e = this.getLatest().__prev;
    if (e === null) {
      return null;
    } else {
      return jB(e);
    }
  }
  getPreviousSiblings() {
    const n = [];
    const e = this.getParent();
    if (e === null) {
      return n;
    }
    let t = e.getFirstChild();
    while (t !== null && !t.is(this)) {
      n.push(t);
      t = t.getNextSibling();
    }
    return n;
  }
  getNextSibling() {
    const e = this.getLatest().__next;
    if (e === null) {
      return null;
    } else {
      return jB(e);
    }
  }
  getNextSiblings() {
    const n = [];
    let e = this.getNextSibling();
    while (e !== null) {
      n.push(e);
      e = e.getNextSibling();
    }
    return n;
  }
  getCommonAncestor(n) {
    const e = this.getParents();
    const t = n.getParents();
    if (kd(this)) {
      e.unshift(this);
    }
    if (kd(n)) {
      t.unshift(n);
    }
    const i = e.length;
    const r = t.length;
    if (i === 0 || r === 0 || e[i - 1] !== t[r - 1]) {
      return null;
    }
    const s = new Set(t);
    for (let o = 0; o < i; o++) {
      const a = e[o];
      if (s.has(a)) {
        return a;
      }
    }
    return null;
  }
  is(n) {
    if (n == null) {
      return false;
    } else {
      return this.__key === n.__key;
    }
  }
  isBefore(n) {
    if (this === n) {
      return false;
    }
    if (n.isParentOf(this)) {
      return true;
    }
    if (this.isParentOf(n)) {
      return false;
    }
    const e = this.getCommonAncestor(n);
    let t = 0;
    let i = 0;
    let r = this;
    while (true) {
      const s = r.getParentOrThrow();
      if (s === e) {
        t = r.getIndexWithinParent();
        break;
      }
      r = s;
    }
    for (r = n;;) {
      const s = r.getParentOrThrow();
      if (s === e) {
        i = r.getIndexWithinParent();
        break;
      }
      r = s;
    }
    return t < i;
  }
  isParentOf(n) {
    const e = this.__key;
    if (e === n.__key) {
      return false;
    }
    let t = n;
    while (t !== null) {
      if (t.__key === e) {
        return true;
      }
      t = t.getParent();
    }
    return false;
  }
  getNodesBetween(n) {
    const e = this.isBefore(n);
    const t = [];
    const i = new Set();
    let r = this;
    while (true) {
      const s = r.__key;
      if (!i.has(s)) {
        i.add(s);
        t.push(r);
      }
      if (r === n) {
        break;
      }
      const o = kd(r) ? e ? r.getFirstChild() : r.getLastChild() : null;
      if (o !== null) {
        r = o;
        continue;
      }
      const a = e ? r.getNextSibling() : r.getPreviousSibling();
      if (a !== null) {
        r = a;
        continue;
      }
      const l = r.getParentOrThrow();
      if (!i.has(l.__key)) {
        t.push(l);
      }
      if (l === n) {
        break;
      }
      let u = null;
      let d = l;
      do {
        if (d === null) {
          Yg(false, "getNodesBetween: ancestor is null");
        }
        u = e ? d.getNextSibling() : d.getPreviousSibling();
        d = d.getParent();
        if (d !== null && u === null && !i.has(d.__key)) {
          t.push(d);
        }
      } while (u === null);
      r = u;
    }
    if (!e) {
      t.reverse();
    }
    return t;
  }
  isDirty() {
    const e = G6()._dirtyLeaves;
    return e !== null && e.has(this.__key);
  }
  getLatest() {
    const n = jB(this.__key);
    if (n === null) {
      Yg(false, "Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editorState.read/editor.update.");
    }
    return n;
  }
  getWritable() {
    aae();
    const n = K9e();
    const e = G6();
    const t = n._nodeMap;
    const i = this.__key;
    const r = this.getLatest();
    const s = r.__parent;
    const o = e._cloneNotNeeded;
    const a = Wd();
    if (a !== null) {
      a._cachedNodes = null;
    }
    if (o.has(i)) {
      gUo(r);
      return r;
    }
    const u = r.constructor.clone(r);
    u.__parent = s;
    u.__next = r.__next;
    u.__prev = r.__prev;
    if (kd(r) && kd(u)) {
      u.__first = r.__first;
      u.__last = r.__last;
      u.__size = r.__size;
      u.__indent = r.__indent;
      u.__format = r.__format;
      u.__dir = r.__dir;
    } else if (jd(r) && jd(u)) {
      u.__format = r.__format;
      u.__style = r.__style;
      u.__mode = r.__mode;
      u.__detail = r.__detail;
    }
    o.add(i);
    u.__key = i;
    gUo(u);
    t.set(i, u);
    return u;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(n, e) {
    Yg(false, "createDOM: base method not extended");
  }
  updateDOM(n, e, t) {
    Yg(false, "updateDOM: base method not extended");
  }
  exportDOM(n) {
    return {
      element: this.createDOM(n._config, n)
    };
  }
  exportJSON() {
    Yg(false, "exportJSON: base method not extended");
  }
  static importJSON(n) {
    Yg(false, "LexicalNode: Node %s does not implement .importJSON().", this.name);
  }
  static transform() {
    return null;
  }
  remove(n) {
    t3c(this, true, n);
  }
  replace(n, e) {
    aae();
    let t = Wd();
    if (t !== null) {
      t = t.clone();
    }
    k3c(this, n);
    const i = this.getLatest();
    const r = this.__key;
    const s = n.__key;
    const o = n.getWritable();
    const a = this.getParentOrThrow().getWritable();
    const l = a.__size;
    fvt(o);
    const u = i.getPreviousSibling();
    const d = i.getNextSibling();
    const m = i.__prev;
    const p = i.__next;
    const g = i.__parent;
    t3c(i, false, true);
    if (u === null) {
      a.__first = s;
    } else {
      const f = u.getWritable();
      f.__next = s;
    }
    o.__prev = m;
    if (d === null) {
      a.__last = s;
    } else {
      const f = d.getWritable();
      f.__prev = s;
    }
    o.__next = p;
    o.__parent = g;
    a.__size = l;
    if (e) {
      this.getChildren().forEach(f => {
        o.append(f);
      });
    }
    if (dd(t)) {
      cae(t);
      const f = t.anchor;
      const A = t.focus;
      if (f.key === r) {
        Mqh(f, o);
      }
      if (A.key === r) {
        Mqh(A, o);
      }
    }
    if (oYe() === r) {
      YY(s);
    }
    return o;
  }
  insertAfter(n, e = true) {
    aae();
    k3c(this, n);
    const t = this.getWritable();
    const i = n.getWritable();
    const r = i.getParent();
    const s = Wd();
    let o = false;
    let a = false;
    if (r !== null) {
      const p = n.getIndexWithinParent();
      fvt(i);
      if (dd(s)) {
        const g = r.__key;
        const f = s.anchor;
        const A = s.focus;
        o = f.type === "element" && f.key === g && f.offset === p + 1;
        a = A.type === "element" && A.key === g && A.offset === p + 1;
      }
    }
    const l = this.getNextSibling();
    const u = this.getParentOrThrow().getWritable();
    const d = i.__key;
    const m = t.__next;
    if (l === null) {
      u.__last = d;
    } else {
      const p = l.getWritable();
      p.__prev = d;
    }
    u.__size++;
    t.__next = d;
    i.__next = m;
    i.__prev = t.__key;
    i.__parent = t.__parent;
    if (e && dd(s)) {
      const p = this.getIndexWithinParent();
      hUo(s, u, p + 1);
      const g = u.__key;
      if (o) {
        s.anchor.set(g, p + 2, "element");
      }
      if (a) {
        s.focus.set(g, p + 2, "element");
      }
    }
    return n;
  }
  insertBefore(n, e = true) {
    aae();
    k3c(this, n);
    const t = this.getWritable();
    const i = n.getWritable();
    const r = i.__key;
    fvt(i);
    const s = this.getPreviousSibling();
    const o = this.getParentOrThrow().getWritable();
    const a = t.__prev;
    const l = this.getIndexWithinParent();
    if (s === null) {
      o.__first = r;
    } else {
      const d = s.getWritable();
      d.__next = r;
    }
    o.__size++;
    t.__prev = r;
    i.__prev = a;
    i.__next = t.__key;
    i.__parent = t.__parent;
    const u = Wd();
    if (e && dd(u)) {
      const d = this.getParentOrThrow();
      hUo(u, d, l);
    }
    return n;
  }
  isParentRequired() {
    return false;
  }
  createParentElementNode() {
    return Lx();
  }
  selectPrevious(n, e) {
    aae();
    const t = this.getPreviousSibling();
    const i = this.getParentOrThrow();
    if (t === null) {
      return i.select(0, 0);
    }
    if (kd(t)) {
      return t.select();
    }
    if (!jd(t)) {
      const r = t.getIndexWithinParent() + 1;
      return i.select(r, r);
    }
    return t.select(n, e);
  }
  selectNext(n, e) {
    aae();
    const t = this.getNextSibling();
    const i = this.getParentOrThrow();
    if (t === null) {
      return i.select();
    }
    if (kd(t)) {
      return t.select(0, 0);
    }
    if (!jd(t)) {
      const r = t.getIndexWithinParent();
      return i.select(r, r);
    }
    return t.select(n, e);
  }
  markDirty() {
    this.getWritable();
  }
};
Y$ = "";
XY = "";
VRe = "";
N3c = false;
xUo = false;
T6n = null;
k7h = "40px";
E7h = class {
  constructor(n, e, t) {
    this._selection = null;
    this.key = n;
    this.offset = e;
    this.type = t;
  }
  is(n) {
    return this.key === n.key && this.offset === n.offset && this.type === n.type;
  }
  isBefore(n) {
    let e = this.getNode();
    let t = n.getNode();
    const i = this.offset;
    const r = n.offset;
    if (kd(e)) {
      const s = e.getDescendantByIndex(i);
      e = s ?? e;
    }
    if (kd(t)) {
      const s = t.getDescendantByIndex(r);
      t = s ?? t;
    }
    if (e === t) {
      return i < r;
    } else {
      return e.isBefore(t);
    }
  }
  getNode() {
    const n = this.key;
    const e = jB(n);
    if (e === null) {
      Yg(false, "Point.getNode: node not found");
    }
    return e;
  }
  set(n, e, t) {
    const i = this._selection;
    const r = this.key;
    this.key = n;
    this.offset = e;
    this.type = t;
    if (!A9t()) {
      if (oYe() === r) {
        YY(n);
      }
      if (i !== null) {
        i._cachedNodes = null;
        i.dirty = true;
      }
    }
  }
};
U3c = class KGb {
  constructor(e) {
    this.dirty = false;
    this._nodes = e;
    this._cachedNodes = null;
  }
  is(e) {
    if (!jte(e)) {
      return false;
    }
    const t = this._nodes;
    const i = e._nodes;
    return t.size === i.size && Array.from(t).every(r => i.has(r));
  }
  add(e) {
    this.dirty = true;
    this._nodes.add(e);
    this._cachedNodes = null;
  }
  delete(e) {
    this.dirty = true;
    this._nodes.delete(e);
    this._cachedNodes = null;
  }
  clear() {
    this.dirty = true;
    this._nodes.clear();
    this._cachedNodes = null;
  }
  has(e) {
    return this._nodes.has(e);
  }
  clone() {
    return new KGb(new Set(this._nodes));
  }
  getStartEndPoints() {
    return null;
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(e) {}
  insertText() {}
  insertNodes(e, t) {
    const i = this.getNodes();
    const r = i.length;
    const s = i[r - 1];
    let o;
    if (jd(s)) {
      o = s.select();
    } else {
      const a = s.getIndexWithinParent() + 1;
      o = s.getParentOrThrow().select(a, a);
    }
    o.insertNodes(e, t);
    for (let a = 0; a < r; a++) {
      i[a].remove();
    }
    return true;
  }
  getNodes() {
    const e = this._cachedNodes;
    if (e !== null) {
      return e;
    }
    const t = this._nodes;
    const i = [];
    for (const r of t) {
      const s = jB(r);
      if (s !== null) {
        i.push(s);
      }
    }
    if (!A9t()) {
      this._cachedNodes = i;
    }
    return i;
  }
  getTextContent() {
    const e = this.getNodes();
    let t = "";
    for (let i = 0; i < e.length; i++) {
      t += e[i].getTextContent();
    }
    return t;
  }
};
$3c = class YGb {
  constructor(e, t, i) {
    this.gridKey = e;
    this.anchor = t;
    this.focus = i;
    this.dirty = false;
    this._cachedNodes = null;
    t._selection = this;
    i._selection = this;
  }
  is(e) {
    if (pvt(e)) {
      return this.gridKey === e.gridKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
    } else {
      return false;
    }
  }
  set(e, t, i) {
    this.dirty = true;
    this.gridKey = e;
    this.anchor.key = t;
    this.focus.key = i;
    this._cachedNodes = null;
  }
  clone() {
    return new YGb(this.gridKey, this.anchor, this.focus);
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
  isCollapsed() {
    return false;
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getCharacterOffsets() {
    return uUo(this);
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(e) {}
  insertText() {}
  insertNodes(e, t) {
    const i = this.focus.getNode();
    return n3c(i.select(0, i.getChildrenSize())).insertNodes(e, t);
  }
  getShape() {
    const e = jB(this.anchor.key);
    Yg(e !== null, "getNodes: expected to find AnchorNode");
    const t = e.getIndexWithinParent();
    const i = e.getParentOrThrow().getIndexWithinParent();
    const r = jB(this.focus.key);
    Yg(r !== null, "getNodes: expected to find FocusNode");
    const s = r.getIndexWithinParent();
    const o = r.getParentOrThrow().getIndexWithinParent();
    const a = Math.min(t, s);
    const l = Math.max(t, s);
    const u = Math.min(i, o);
    const d = Math.max(i, o);
    return {
      fromX: Math.min(a, l),
      fromY: Math.min(u, d),
      toX: Math.max(a, l),
      toY: Math.max(u, d)
    };
  }
  getNodes() {
    const e = this._cachedNodes;
    if (e !== null) {
      return e;
    }
    const t = this.anchor.getNode();
    const i = this.focus.getNode();
    const r = b7h(t, _ve);
    const s = b7h(i, _ve);
    Yg(_ve(r), "Expected GridSelection anchor to be (or a child of) GridCellNode");
    Yg(_ve(s), "Expected GridSelection focus to be (or a child of) GridCellNode");
    const o = r.getParent();
    Yg(bvt(o), "Expected anchorCell to have a parent GridRowNode");
    const a = o.getParent();
    Yg(k6n(a), "Expected tableNode to have a parent GridNode");
    const [l, u, d] = zfA(a, r, s);
    let m = Math.min(u.startColumn, d.startColumn);
    let p = Math.min(u.startRow, d.startRow);
    let g = Math.max(u.startColumn + u.cell.__colSpan - 1, d.startColumn + d.cell.__colSpan - 1);
    let f = Math.max(u.startRow + u.cell.__rowSpan - 1, d.startRow + d.cell.__rowSpan - 1);
    let A = m;
    let w = p;
    let C = m;
    let x = p;
    function I(N) {
      const {
        cell: M,
        startColumn: O,
        startRow: $
      } = N;
      m = Math.min(m, O);
      p = Math.min(p, $);
      g = Math.max(g, O + M.__colSpan - 1);
      f = Math.max(f, $ + M.__rowSpan - 1);
    }
    while (m < A || p < w || g > C || f > x) {
      if (m < A) {
        const N = x - w;
        const M = A - 1;
        for (let O = 0; O <= N; O++) {
          I(l[w + O][M]);
        }
        A = M;
      }
      if (p < w) {
        const N = C - A;
        const M = w - 1;
        for (let O = 0; O <= N; O++) {
          I(l[M][A + O]);
        }
        w = M;
      }
      if (g > C) {
        const N = x - w;
        const M = C + 1;
        for (let O = 0; O <= N; O++) {
          I(l[w + O][M]);
        }
        C = M;
      }
      if (f > x) {
        const N = C - A;
        const M = x + 1;
        for (let O = 0; O <= N; O++) {
          I(l[M][A + O]);
        }
        x = M;
      }
    }
    const B = [a];
    let R = null;
    for (let N = p; N <= f; N++) {
      for (let M = m; M <= g; M++) {
        const {
          cell: O
        } = l[N][M];
        const $ = O.getParent();
        Yg(bvt($), "Expected GridCellNode parent to be a GridRowNode");
        if ($ !== R) {
          B.push($);
        }
        B.push(O, ...zbA(O));
        R = $;
      }
    }
    if (!A9t()) {
      this._cachedNodes = B;
    }
    return B;
  }
  getTextContent() {
    const e = this.getNodes();
    let t = "";
    for (let i = 0; i < e.length; i++) {
      t += e[i].getTextContent();
    }
    return t;
  }
};
k9t = class ZGb {
  constructor(e, t, i, r) {
    this.anchor = e;
    this.focus = t;
    this.dirty = false;
    this.format = i;
    this.style = r;
    this._cachedNodes = null;
    e._selection = this;
    t._selection = this;
  }
  is(e) {
    if (dd(e)) {
      return this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
    } else {
      return false;
    }
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
  getNodes() {
    const e = this._cachedNodes;
    if (e !== null) {
      return e;
    }
    const t = this.anchor;
    const i = this.focus;
    const r = t.isBefore(i);
    const s = r ? t : i;
    const o = r ? i : t;
    let a = s.getNode();
    let l = o.getNode();
    const u = s.offset;
    const d = o.offset;
    if (kd(a)) {
      const p = a.getDescendantByIndex(u);
      a = p ?? a;
    }
    if (kd(l)) {
      let p = l.getDescendantByIndex(d);
      if (p !== null && p !== a && l.getChildAtIndex(d) === p) {
        p = p.getPreviousSibling();
      }
      l = p ?? l;
    }
    let m;
    if (a.is(l)) {
      if (kd(a) && a.getChildrenSize() > 0) {
        m = [];
      } else {
        m = [a];
      }
    } else {
      m = a.getNodesBetween(l);
    }
    if (!A9t()) {
      this._cachedNodes = m;
    }
    return m;
  }
  setTextNodeRange(e, t, i, r) {
    sYe(this.anchor, e.__key, t, "text");
    sYe(this.focus, i.__key, r, "text");
    this._cachedNodes = null;
    this.dirty = true;
  }
  getTextContent() {
    const e = this.getNodes();
    if (e.length === 0) {
      return "";
    }
    const t = e[0];
    const i = e[e.length - 1];
    const r = this.anchor;
    const s = this.focus;
    const o = r.isBefore(s);
    const [a, l] = uUo(this);
    let u = "";
    let d = true;
    for (let m = 0; m < e.length; m++) {
      const p = e[m];
      if (kd(p) && !p.isInline()) {
        if (!d) {
          u += `
`;
        }
        if (p.isEmpty()) {
          d = false;
        } else {
          d = true;
        }
      } else {
        d = false;
        if (jd(p)) {
          let g = p.getTextContent();
          if (p === t) {
            if (p === i) {
              if (r.type !== "element" || s.type !== "element" || s.offset === r.offset) {
                g = a < l ? g.slice(a, l) : g.slice(l, a);
              }
            } else {
              g = o ? g.slice(a) : g.slice(l);
            }
          } else if (p === i) {
            g = o ? g.slice(0, l) : g.slice(0, a);
          }
          u += g;
        } else if ((ZD(p) || x3(p)) && (p !== i || !this.isCollapsed())) {
          u += p.getTextContent();
        }
      }
    }
    return u;
  }
  applyDOMRange(e) {
    const t = G6();
    const r = t.getEditorState()._selection;
    const s = Jqh(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, r);
    if (s === null) {
      return;
    }
    const [o, a] = s;
    sYe(this.anchor, o.key, o.offset, o.type);
    sYe(this.focus, a.key, a.offset, a.type);
    this._cachedNodes = null;
  }
  clone() {
    const e = this.anchor;
    const t = this.focus;
    return new ZGb(QRe(e.key, e.offset, e.type), QRe(t.key, t.offset, t.type), this.format, this.style);
  }
  toggleFormat(e) {
    this.format = n7h(this.format, e, null);
    this.dirty = true;
  }
  setStyle(e) {
    this.style = e;
    this.dirty = true;
  }
  hasFormat(e) {
    const t = bYe[e];
    return (this.format & t) !== 0;
  }
  insertRawText(e) {
    const t = e.split(/(\r?\n|\t)/);
    const i = [];
    const r = t.length;
    for (let s = 0; s < r; s++) {
      const o = t[s];
      if (o === `
` || o === `\r
`) {
        i.push(lhe());
      } else if (o === "\t") {
        i.push(Vte());
      } else {
        i.push(OA(o));
      }
    }
    this.insertNodes(i);
  }
  insertText(e) {
    const t = this.anchor;
    const i = this.focus;
    const r = this.isCollapsed() || t.isBefore(i);
    const s = this.format;
    const o = this.style;
    if (r && t.type === "element") {
      Fqh(t, i, s, o);
    } else if (!r && i.type === "element") {
      Fqh(i, t, s, o);
    }
    const a = this.getNodes();
    const l = a.length;
    const u = r ? t : i;
    const d = r ? i : t;
    const m = u.offset;
    const p = d.offset;
    let g = a[0];
    if (!jd(g)) {
      Yg(false, "insertText: first node is not a text node");
    }
    const A = g.getTextContent().length;
    const w = g.getParentOrThrow();
    const C = l - 1;
    let x = a[C];
    if (this.isCollapsed() && m === A && (g.isSegmented() || g.isToken() || !g.canInsertTextAfter() || !w.canInsertTextAfter() && g.getNextSibling() === null)) {
      let I = g.getNextSibling();
      if (!jd(I) || !I.canInsertTextBefore() || p3c(I)) {
        I = OA();
        I.setFormat(s);
        if (w.canInsertTextAfter()) {
          g.insertAfter(I);
        } else {
          w.insertAfter(I);
        }
      }
      I.select(0, 0);
      g = I;
      if (e !== "") {
        this.insertText(e);
        return;
      }
    } else if (this.isCollapsed() && m === 0 && (g.isSegmented() || g.isToken() || !g.canInsertTextBefore() || !w.canInsertTextBefore() && g.getPreviousSibling() === null)) {
      let I = g.getPreviousSibling();
      if (!jd(I) || p3c(I)) {
        I = OA();
        I.setFormat(s);
        if (w.canInsertTextBefore()) {
          g.insertBefore(I);
        } else {
          w.insertBefore(I);
        }
      }
      I.select();
      g = I;
      if (e !== "") {
        this.insertText(e);
        return;
      }
    } else if (g.isSegmented() && m !== A) {
      const I = OA(g.getTextContent());
      I.setFormat(s);
      g.replace(I);
      g = I;
    } else if (!this.isCollapsed() && e !== "") {
      const I = x.getParent();
      if (!w.canInsertTextBefore() || !w.canInsertTextAfter() || kd(I) && (!I.canInsertTextBefore() || !I.canInsertTextAfter())) {
        this.insertText("");
        Hqh(this.anchor, this.focus, null);
        this.insertText(e);
        return;
      }
    }
    if (l === 1) {
      if (g.isToken()) {
        const N = OA(e);
        N.select();
        g.replace(N);
        return;
      }
      const I = g.getFormat();
      const B = g.getStyle();
      if (m === p && (I !== s || B !== o)) {
        if (g.getTextContent() === "") {
          g.setFormat(s);
          g.setStyle(o);
        } else {
          const N = OA(e);
          N.setFormat(s);
          N.setStyle(o);
          N.select();
          if (m === 0) {
            g.insertBefore(N, false);
          } else {
            const [M] = g.splitText(m);
            M.insertAfter(N, false);
          }
          if (N.isComposing() && this.anchor.type === "text") {
            this.anchor.offset -= e.length;
          }
          return;
        }
      }
      const R = p - m;
      g = g.spliceText(m, R, e, true);
      if (g.getTextContent() === "") {
        g.remove();
      } else if (this.anchor.type === "text") {
        if (g.isComposing()) {
          this.anchor.offset -= e.length;
        } else {
          this.format = I;
          this.style = B;
        }
      }
    } else {
      const I = new Set([...g.getParentKeys(), ...x.getParentKeys()]);
      const B = kd(g) ? g : g.getParentOrThrow();
      let R = kd(x) ? x : x.getParentOrThrow();
      let N = x;
      if (!B.is(R) && R.isInline()) {
        do {
          N = R;
          R = R.getParentOrThrow();
        } while (R.isInline());
      }
      if (d.type === "text" && (p !== 0 || x.getTextContent() === "") || d.type === "element" && x.getIndexWithinParent() < p) {
        if (jd(x) && !x.isToken() && p !== x.getTextContentSize()) {
          if (x.isSegmented()) {
            const W = OA(x.getTextContent());
            x.replace(W);
            x = W;
          }
          x = x.spliceText(0, p, "");
          I.add(x.__key);
        } else {
          const W = x.getParentOrThrow();
          if (!W.canBeEmpty() && W.getChildrenSize() === 1) {
            W.remove();
          } else {
            x.remove();
          }
        }
      } else {
        I.add(x.__key);
      }
      const M = R.getChildren();
      const O = new Set(a);
      const $ = B.is(R);
      const H = B.isInline() && g.getNextSibling() === null ? B : g;
      for (let W = M.length - 1; W >= 0; W--) {
        const z = M[W];
        if (z.is(g) || kd(z) && z.isParentOf(g)) {
          break;
        }
        if (z.isAttached()) {
          if (!O.has(z) || z.is(N)) {
            if (!$) {
              H.insertAfter(z, false);
            }
          } else {
            z.remove();
          }
        }
      }
      if (!$) {
        let W = R;
        let z = null;
        while (W !== null) {
          const Y = W.getChildren();
          const j = Y.length;
          if (j === 0 || Y[j - 1].is(z)) {
            I.delete(W.__key);
            z = W;
          }
          W = W.getParent();
        }
      }
      if (!g.isToken()) {
        g = g.spliceText(m, A - m, e, true);
        if (g.getTextContent() === "") {
          g.remove();
        } else if (g.isComposing() && this.anchor.type === "text") {
          this.anchor.offset -= e.length;
        }
      } else if (m === A) {
        g.select();
      } else {
        const W = OA(e);
        W.select();
        g.replace(W);
      }
      for (let W = 1; W < l; W++) {
        const z = a[W];
        const Y = z.__key;
        if (!I.has(Y)) {
          z.remove();
        }
      }
    }
  }
  removeText() {
    this.insertText("");
  }
  formatText(e) {
    if (this.isCollapsed()) {
      this.toggleFormat(e);
      YY(null);
      return;
    }
    const t = this.getNodes();
    const i = [];
    for (const x of t) {
      if (jd(x)) {
        i.push(x);
      }
    }
    const r = i.length;
    if (r === 0) {
      this.toggleFormat(e);
      YY(null);
      return;
    }
    const s = this.anchor;
    const o = this.focus;
    const a = this.isBackward();
    const l = a ? o : s;
    const u = a ? s : o;
    let d = 0;
    let m = i[0];
    let p = l.type === "element" ? 0 : l.offset;
    if (l.type === "text" && p === m.getTextContentSize()) {
      d = 1;
      m = i[1];
      p = 0;
    }
    if (m == null) {
      return;
    }
    const g = m.getFormatFlags(e, null);
    const f = r - 1;
    let A = i[f];
    const w = u.type === "text" ? u.offset : A.getTextContentSize();
    if (m.is(A)) {
      if (p === w) {
        return;
      }
      if (p === 0 && w === m.getTextContentSize()) {
        m.setFormat(g);
      } else {
        const x = m.splitText(p, w);
        const I = p === 0 ? x[0] : x[1];
        I.setFormat(g);
        if (l.type === "text") {
          l.set(I.__key, 0, "text");
        }
        if (u.type === "text") {
          u.set(I.__key, w - p, "text");
        }
      }
      this.format = g;
      return;
    }
    if (p !== 0) {
      [, m] = m.splitText(p);
      p = 0;
    }
    m.setFormat(g);
    const C = A.getFormatFlags(e, g);
    if (w > 0) {
      if (w !== A.getTextContentSize()) {
        [A] = A.splitText(w);
      }
      A.setFormat(C);
    }
    for (let x = d + 1; x < f; x++) {
      const I = i[x];
      if (!I.isToken()) {
        const B = I.getFormatFlags(e, C);
        I.setFormat(B);
      }
    }
    if (l.type === "text") {
      l.set(m.__key, p, "text");
    }
    if (u.type === "text") {
      u.set(A.__key, w, "text");
    }
    this.format = g | C;
  }
  insertNodes(e, t) {
    if (!this.isCollapsed()) {
      const f = this.isBackward() ? this.anchor : this.focus;
      const A = f.getNode().getNextSibling();
      const w = A ? A.getKey() : null;
      const C = f.getNode().getPreviousSibling();
      const x = C ? C.getKey() : null;
      this.removeText();
      if (this.isCollapsed() && this.focus.type === "element") {
        let I;
        if (this.focus.key === w && this.focus.offset === 0) {
          I = OA();
          this.focus.getNode().insertBefore(I);
        } else if (this.focus.key === x && this.focus.offset === this.focus.getNode().getChildrenSize()) {
          I = OA();
          this.focus.getNode().insertAfter(I);
        }
        if (I) {
          this.focus.set(I.__key, 0, "text");
          this.anchor.set(I.__key, 0, "text");
        }
      }
    }
    const i = this.anchor;
    const r = i.offset;
    const s = i.getNode();
    let o = s;
    if (i.type === "element") {
      const f = i.getNode();
      const A = f.getChildAtIndex(r - 1);
      if (A === null) {
        o = f;
      } else {
        o = A;
      }
    }
    const a = [];
    const l = s.getNextSiblings();
    const u = zte(s) ? null : s.getTopLevelElementOrThrow();
    if (jd(s)) {
      const A = s.getTextContent().length;
      if (r === 0 && A !== 0) {
        const w = s.getPreviousSibling();
        if (w !== null) {
          o = w;
        } else {
          o = s.getParentOrThrow();
        }
        a.push(s);
      } else if (r === A) {
        o = s;
      } else {
        if (s.isToken()) {
          return false;
        }
        {
          let w;
          [o, w] = s.splitText(r);
          a.push(w);
        }
      }
    }
    const d = o;
    a.push(...l);
    const m = e[0];
    let p = false;
    let g = null;
    for (let f = 0; f < e.length; f++) {
      const A = e[f];
      if (!zte(o) && !ZD(o) && kd(A) && !A.isInline()) {
        if (A.is(m)) {
          if (kd(o) && o.isEmpty() && o.canReplaceWith(A)) {
            o.replace(A);
            o = A;
            p = true;
            continue;
          }
          const w = A.getFirstDescendant();
          if (g3c(w)) {
            let C = w.getParentOrThrow();
            while (C.isInline()) {
              C = C.getParentOrThrow();
            }
            const x = C.getChildren();
            const I = x.length;
            if (kd(o)) {
              let B = o.getFirstChild();
              for (let R = 0; R < I; R++) {
                const N = x[R];
                if (B === null) {
                  o.append(N);
                } else {
                  B.insertAfter(N);
                }
                B = N;
              }
            } else {
              for (let B = I - 1; B >= 0; B--) {
                o.insertAfter(x[B]);
              }
              o = o.getParentOrThrow();
            }
            g = x[I - 1];
            C.remove();
            p = true;
            if (C.is(A)) {
              continue;
            }
          }
        }
        if (jd(o)) {
          if (u === null) {
            Yg(false, "insertNode: topLevelElement is root node");
          }
          o = u;
        }
      } else if (p && !kd(A) && !ZD(A) && zte(o.getParent())) {
        Yg(false, "insertNodes: cannot insert a non-element into a root node");
      }
      p = false;
      if (kd(o) && !o.isInline()) {
        g = A;
        if (ZD(A) && !A.isInline()) {
          o = o.insertAfter(A, false);
        } else if (kd(A)) {
          if (!A.canBeEmpty() && A.isEmpty()) {
            continue;
          }
          if (ZY(o)) {
            const w = o.getChildAtIndex(r);
            if (w !== null) {
              w.insertBefore(A);
            } else {
              o.append(A);
            }
            o = A;
          } else if (A.isInline()) {
            o.append(A);
            o = A;
          } else {
            o = o.insertAfter(A, false);
          }
        } else {
          const w = o.getFirstChild();
          if (w !== null) {
            w.insertBefore(A);
          } else {
            o.append(A);
          }
          o = A;
        }
      } else if (!kd(A) || kd(A) && A.isInline() || ZD(o) && !o.isInline()) {
        g = A;
        if (dd(this) && ZD(A) && (kd(o) || jd(o)) && !A.isInline()) {
          let w;
          let C;
          if (jd(o)) {
            w = o.getParentOrThrow();
            const [I] = o.splitText(r);
            C = I.getIndexWithinParent() + 1;
          } else {
            w = o;
            C = r;
          }
          const [, x] = f7h(w, C);
          o = x.insertBefore(A);
        } else {
          o = o.insertAfter(A, false);
        }
      } else {
        const w = o.getParentOrThrow();
        if (x3(o)) {
          o.remove();
        }
        o = w;
        f--;
        continue;
      }
    }
    if (t) {
      if (jd(d)) {
        d.select();
      } else {
        const f = o.getPreviousSibling();
        if (jd(f)) {
          f.select();
        } else {
          const A = o.getIndexWithinParent();
          o.getParentOrThrow().select(A, A);
        }
      }
    }
    if (kd(o)) {
      const f = jd(g) ? g : kd(g) && g.isInline() ? g.getLastDescendant() : o.getLastDescendant();
      if (!t) {
        if (f === null) {
          o.select();
        } else if (jd(f)) {
          if (f.getTextContent() === "") {
            f.selectPrevious();
          } else {
            f.select();
          }
        } else {
          f.selectNext();
        }
      }
      if (a.length !== 0) {
        const A = o;
        for (let w = a.length - 1; w >= 0; w--) {
          const C = a[w];
          const x = C.getParentOrThrow();
          if (kd(o) && !c3c(C) && (!ZD(C) || !!C.isInline() && !C.isIsolated())) {
            if (A === o) {
              o.append(C);
            } else {
              o.insertBefore(C);
            }
            o = C;
          } else if (!kd(o) && !c3c(C)) {
            o.insertBefore(C);
            o = C;
          } else if (kd(C) && !C.canInsertAfter(o)) {
            const I = x.constructor.clone(x);
            if (!kd(I)) {
              Yg(false, "insertNodes: cloned parent clone is not an element");
            }
            I.append(C);
            o.insertAfter(I);
          } else {
            o.insertAfter(C);
          }
          if (x.isEmpty() && !x.canBeEmpty()) {
            x.remove();
          }
        }
      }
    } else if (!t) {
      if (jd(o)) {
        o.select();
      } else {
        const f = o.getParentOrThrow();
        const A = o.getIndexWithinParent() + 1;
        f.select(A, A);
      }
    }
    return true;
  }
  insertParagraph() {
    if (!this.isCollapsed()) {
      this.removeText();
    }
    const e = this.anchor;
    const t = e.offset;
    let i;
    let r = [];
    let s = [];
    if (e.type === "text") {
      const l = e.getNode();
      r = l.getNextSiblings().reverse();
      i = l.getParentOrThrow();
      const u = i.isInline();
      const d = u ? i.getTextContentSize() : l.getTextContentSize();
      if (t === 0) {
        r.push(l);
      } else {
        if (u) {
          s = i.getNextSiblings();
        }
        if (t !== d && (!u || t !== l.getTextContentSize())) {
          const [, m] = l.splitText(t);
          r.push(m);
        }
      }
    } else {
      i = e.getNode();
      if (zte(i)) {
        const l = Lx();
        const u = i.getChildAtIndex(t);
        l.select();
        if (u !== null) {
          u.insertBefore(l, false);
        } else {
          i.append(l);
        }
        return;
      }
      r = i.getChildren().slice(t).reverse();
    }
    const o = r.length;
    if (t === 0 && o > 0 && i.isInline()) {
      const l = i.getParentOrThrow();
      const u = l.insertNewAfter(this, false);
      if (kd(u)) {
        const d = l.getChildren();
        for (let m = 0; m < d.length; m++) {
          u.append(d[m]);
        }
      }
      return;
    }
    const a = i.insertNewAfter(this, false);
    if (a === null) {
      this.insertLineBreak();
    } else if (kd(a)) {
      const l = i.getFirstChild();
      if (t === 0 && (i.is(e.getNode()) || l && l.is(e.getNode())) && o > 0) {
        i.insertBefore(a);
        return;
      }
      let d = null;
      const m = s.length;
      const p = a.getParentOrThrow();
      if (m > 0) {
        for (let g = 0; g < m; g++) {
          const f = s[g];
          p.append(f);
        }
      }
      if (o !== 0) {
        for (let g = 0; g < o; g++) {
          const f = r[g];
          if (d === null) {
            a.append(f);
          } else {
            d.insertBefore(f);
          }
          d = f;
        }
      }
      if (!a.canBeEmpty() && a.getChildrenSize() === 0) {
        a.selectPrevious();
        a.remove();
      } else {
        a.selectStart();
      }
    }
  }
  insertLineBreak(e) {
    const t = lhe();
    const i = this.anchor;
    if (i.type === "element") {
      const r = i.getNode();
      if (ZY(r)) {
        this.insertParagraph();
      }
    }
    if (e) {
      this.insertNodes([t], true);
    } else if (this.insertNodes([t])) {
      t.selectNext(0, 0);
    }
  }
  getCharacterOffsets() {
    return uUo(this);
  }
  extract() {
    const e = this.getNodes();
    const t = e.length;
    const i = t - 1;
    const r = this.anchor;
    const s = this.focus;
    let o = e[0];
    let a = e[i];
    const [l, u] = uUo(this);
    if (t === 0) {
      return [];
    }
    if (t === 1) {
      if (jd(o) && !this.isCollapsed()) {
        const m = l > u ? u : l;
        const p = l > u ? l : u;
        const g = o.splitText(m, p);
        const f = m === 0 ? g[0] : g[1];
        if (f != null) {
          return [f];
        } else {
          return [];
        }
      }
      return [o];
    }
    const d = r.isBefore(s);
    if (jd(o)) {
      const m = d ? l : u;
      if (m === o.getTextContentSize()) {
        e.shift();
      } else if (m !== 0) {
        [, o] = o.splitText(m);
        e[0] = o;
      }
    }
    if (jd(a)) {
      const p = a.getTextContent().length;
      const g = d ? u : l;
      if (g === 0) {
        e.pop();
      } else if (g !== p) {
        [a] = a.splitText(g);
        e[i] = a;
      }
    }
    return e;
  }
  modify(e, t, i) {
    const r = this.focus;
    const s = this.anchor;
    const o = e === "move";
    const a = C6n(r, t);
    if (ZD(a) && !a.isIsolated()) {
      if (o && a.isKeyboardSelectable()) {
        const g = u3c();
        g.add(a.__key);
        cae(g);
        return;
      }
      const p = t ? a.getPreviousSibling() : a.getNextSibling();
      if (jd(p)) {
        const g = p.__key;
        const f = t ? p.getTextContent().length : 0;
        r.set(g, f, "text");
        if (o) {
          s.set(g, f, "text");
        }
        return;
      } else {
        const g = a.getParentOrThrow();
        let f;
        let A;
        if (kd(p)) {
          A = p.__key;
          f = t ? p.getChildrenSize() : 0;
        } else {
          f = a.getIndexWithinParent();
          A = g.__key;
          if (!t) {
            f++;
          }
        }
        r.set(A, f, "element");
        if (o) {
          s.set(A, f, "element");
        }
        return;
      }
    }
    const l = G6();
    const u = Y9e(l);
    if (!u) {
      return;
    }
    const d = l._blockCursorElement;
    const m = l._rootElement;
    if (m !== null && d !== null && kd(a) && !a.isInline() && !a.canBeEmpty()) {
      x3c(d, l, m);
    }
    qfA(u, e, t ? "backward" : "forward", i);
    if (u.rangeCount > 0) {
      const p = u.getRangeAt(0);
      const g = this.anchor.getNode();
      const f = ZY(g) ? g : GbA(g);
      this.applyDOMRange(p);
      this.dirty = true;
      if (!o) {
        const A = this.getNodes();
        const w = [];
        let C = false;
        for (let x = 0; x < A.length; x++) {
          const I = A[x];
          if (S3c(I, f)) {
            w.push(I);
          } else {
            C = true;
          }
        }
        if (C && w.length > 0) {
          if (t) {
            const x = w[0];
            if (kd(x)) {
              x.selectStart();
            } else {
              x.getParentOrThrow().selectStart();
            }
          } else {
            const x = w[w.length - 1];
            if (kd(x)) {
              x.selectEnd();
            } else {
              x.getParentOrThrow().selectEnd();
            }
          }
        }
        if (u.anchorNode !== p.startContainer || u.anchorOffset !== p.startOffset) {
          $fA(this);
        }
      }
    }
  }
  deleteCharacter(e) {
    const t = this.isCollapsed();
    if (this.isCollapsed()) {
      const i = this.anchor;
      const r = this.focus;
      let s = i.getNode();
      if (!e && (i.type === "element" && kd(s) && i.offset === s.getChildrenSize() || i.type === "text" && i.offset === s.getTextContentSize())) {
        const a = s.getParent();
        const l = s.getNextSibling() || (a === null ? null : a.getNextSibling());
        if (kd(l) && l.isShadowRoot()) {
          return;
        }
      }
      const o = C6n(r, e);
      if (ZD(o) && !o.isIsolated()) {
        if (o.isKeyboardSelectable() && kd(s) && s.getChildrenSize() === 0) {
          s.remove();
          const a = u3c();
          a.add(o.__key);
          cae(a);
        } else {
          o.remove();
          G6().dispatchCommand(B6n, undefined);
        }
        return;
      } else if (!e && kd(o) && kd(s) && s.isEmpty()) {
        s.remove();
        o.selectStart();
        return;
      }
      this.modify("extend", e, "character");
      if (this.isCollapsed()) {
        if (e && i.offset === 0 && (i.type === "element" ? i.getNode() : i.getNode().getParentOrThrow()).collapseAtStart(this)) {
          return;
        }
      } else {
        const a = r.type === "text" ? r.getNode() : null;
        s = i.type === "text" ? i.getNode() : null;
        if (a !== null && a.isSegmented()) {
          const l = r.offset;
          const u = a.getTextContentSize();
          if (a.is(s) || e && l !== u || !e && l !== 0) {
            Uqh(a, e, l);
            return;
          }
        } else if (s !== null && s.isSegmented()) {
          const l = i.offset;
          const u = s.getTextContentSize();
          if (s.is(a) || e && l !== 0 || !e && l !== u) {
            Uqh(s, e, l);
            return;
          }
        }
        HfA(this, e);
      }
    }
    this.removeText();
    if (e && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const i = this.anchor.getNode();
      if (i.isEmpty() && ZY(i.getParent()) && i.getIndexWithinParent() === 0) {
        i.collapseAtStart(this);
      }
    }
  }
  deleteLine(e) {
    if (this.isCollapsed()) {
      if (this.anchor.type === "text") {
        this.modify("extend", e, "lineboundary");
      }
      if ((e ? this.focus : this.anchor).offset === 0) {
        this.modify("extend", e, "character");
      }
    }
    this.removeText();
  }
  deleteWord(e) {
    if (this.isCollapsed()) {
      this.modify("extend", e, "word");
    }
    this.removeText();
  }
};
tJ = null;
nJ = null;
Yte = false;
IUo = false;
D6n = 0;
q3c = {
  characterData: true,
  childList: true,
  subtree: true
};
x7h = 1;
rvA = Array.isArray;
T7h = typeof queueMicrotask == "function" ? queueMicrotask : n => {
  Promise.resolve().then(n);
};
B6n = Uh("SELECTION_CHANGE_COMMAND");
DUo = Uh("CLICK_COMMAND");
Sve = Uh("DELETE_CHARACTER_COMMAND");
X9e = Uh("INSERT_LINE_BREAK_COMMAND");
wvt = Uh("INSERT_PARAGRAPH_COMMAND");
dYe = Uh("CONTROLLED_TEXT_INSERTION_COMMAND");
hYe = Uh("PASTE_COMMAND");
R6n = Uh("REMOVE_TEXT_COMMAND");
e8e = Uh("DELETE_WORD_COMMAND");
mYe = Uh("DELETE_LINE_COMMAND");
t8e = Uh("FORMAT_TEXT_COMMAND");
E9t = Uh("UNDO_COMMAND");
x9t = Uh("REDO_COMMAND");
pYe = Uh("KEYDOWN_COMMAND");
P6n = Uh("KEY_ARROW_RIGHT_COMMAND");
H3c = Uh("MOVE_TO_END");
L6n = Uh("KEY_ARROW_LEFT_COMMAND");
J3c = Uh("MOVE_TO_START");
n8e = Uh("KEY_ARROW_UP_COMMAND");
i8e = Uh("KEY_ARROW_DOWN_COMMAND");
I7h = Uh("KEY_COMMAND_ARROW_DOWN_COMMAND");
D7h = Uh("KEY_COMMAND_ARROW_UP_COMMAND");
B7h = Uh("KEY_COMMAND_ARROW_LEFT_COMMAND");
R7h = Uh("KEY_COMMAND_ARROW_RIGHT_COMMAND");
KRe = Uh("KEY_ENTER_COMMAND");
G3c = Uh("KEY_SPACE_COMMAND");
T9t = Uh("KEY_BACKSPACE_COMMAND");
kve = Uh("KEY_ESCAPE_COMMAND");
N6n = Uh("KEY_DELETE_COMMAND");
W3c = Uh("KEY_ALT_ARROW_UP_COMMAND");
Q3c = Uh("KEY_ALT_ARROW_DOWN_COMMAND");
YRe = Uh("KEY_COMMAND_ENTER_COMMAND");
P7h = Uh("KEY_COMMAND_ABORT_COMMAND");
L7h = Uh("KEY_COMMAND_K_COMMAND");
N7h = Uh("KEY_COMMAND_Y_COMMAND");
M7h = Uh("KEY_COMMAND_D_COMMAND");
F7h = Uh("KEY_COMMAND_E_COMMAND");
O7h = Uh("KEY_COMMAND_C_COMMAND");
U7h = Uh("KEY_COMMAND_H_COMMAND");
$7h = Uh("KEY_COMMAND_1_COMMAND");
q7h = Uh("KEY_COMMAND_2_COMMAND");
H7h = Uh("KEY_COMMAND_3_COMMAND");
J7h = Uh("KEY_COMMAND_4_COMMAND");
G7h = Uh("KEY_COMMAND_5_COMMAND");
W7h = Uh("KEY_COMMAND_6_COMMAND");
Q7h = Uh("KEY_COMMAND_7_COMMAND");
j7h = Uh("KEY_COMMAND_8_COMMAND");
z7h = Uh("KEY_COMMAND_9_COMMAND");
V7h = Uh("KEY_COMMAND_0_COMMAND");
K7h = Uh("KEY_COMMAND_SHIFT_K_COMMAND");
Y7h = Uh("KEY_COMMAND_SHIFT_D_COMMAND");
Z7h = Uh("KEY_COMMAND_SHIFT_S_COMMAND");
X7h = Uh("KEY_COMMAND_S_COMMAND");
eHh = Uh("KEY_COMMAND_J_COMMAND");
tHh = Uh("KEY_COMMAND_Y_COMMAND");
nHh = Uh("KEY_COMMAND_U_COMMAND");
iHh = Uh("KEY_COMMAND_I_COMMAND");
rHh = Uh("KEY_COMMAND_L_COMMAND");
svA = Uh("KEY_COMMAND_Z_COMMAND");
sHh = Uh("KEY_COMMAND_T_COMMAND");
oHh = Uh("KEY_COMMAND_P_COMMAND");
aHh = Uh("KEY_COMMAND_B_COMMAND");
cHh = Uh("KEY_COMMAND_A_COMMAND");
ovA = Uh("KEY_COMMAND_SHIFT_Z_COMMAND");
j3c = Uh("KEY_COMMAND_N_COMMAND");
lHh = Uh("KEY_COMMAND_M_COMMAND");
uHh = Uh("KEY_COMMAND_G_COMMAND");
dHh = Uh("KEY_COMMAND_W_COMMAND");
z3c = Uh("KEY_COMMAND_R_COMMAND");
V3c = Uh("KEY_COMMAND_V_COMMAND");
hHh = Uh("KEY_COMMAND_SLASH_COMMAND");
K3c = Uh("KEY_COMMAND_DOT_COMMAND");
mHh = Uh("KEY_COMMAND_SHIFT_SLASH_COMMAND");
M6n = Uh("KEY_BACKSPACE_DELETE_COMMAND");
pHh = Uh("KEY_COMMAND_LEFT_BRACKET_COMMAND");
gHh = Uh("KEY_COMMAND_RIGHT_BRACKET_COMMAND");
ZRe = Uh("KEY_TAB_COMMAND");
fHh = Uh("KEY_ALT_COMMAND");
Y3c = Uh("KEY_ALT_UP_COMMAND");
bHh = Uh("KEY_COMMAND_COMMAND");
vHh = Uh("KEY_COMMAND_UP_COMMAND");
AHh = Uh("KEY_ALT_1_COMMAND");
yHh = Uh("KEY_ALT_2_COMMAND");
wHh = Uh("KEY_ALT_3_COMMAND");
_Hh = Uh("KEY_ALT_4_COMMAND");
CHh = Uh("KEY_ALT_5_COMMAND");
avA = Uh("KEY_COMMAND_ESCAPE_COMMAND");
SHh = Uh("KEY_SHIFT_DOWN_COMMAND");
kHh = Uh("KEY_SHIFT_UP_COMMAND");
F6n = Uh("INSERT_TAB_COMMAND");
r8e = Uh("INDENT_CONTENT_COMMAND");
gYe = Uh("OUTDENT_CONTENT_COMMAND");
I9t = Uh("DROP_COMMAND");
EHh = Uh("FORMAT_ELEMENT_COMMAND");
BUo = Uh("DRAGSTART_COMMAND");
RUo = Uh("DRAGOVER_COMMAND");
xHh = Uh("DRAGEND_COMMAND");
_vt = Uh("COPY_COMMAND");
Cvt = Uh("CUT_COMMAND");
Z3c = Uh("CLEAR_EDITOR_COMMAND");
X3c = Uh("CLEAR_HISTORY_COMMAND");
Svt = Uh("CAN_REDO_COMMAND");
kvt = Uh("CAN_UNDO_COMMAND");
O6n = Uh("FOCUS_COMMAND");
PUo = Uh("BLUR_COMMAND");
THh = Uh("KEY_MODIFIER_COMMAND");
D9t = 1;
XRe = 3;
fYe = 0;
e5c = 1;
Evt = 2;
t5c = 0;
LUo = 1;
NUo = 2;
MUo = 1;
FUo = 2;
U6n = 4;
$6n = 8;
OUo = 16;
UUo = 32;
$Uo = 64;
qUo = 128;
IHh = MUo | FUo | U6n | $6n | OUo | UUo | $Uo | qUo;
HUo = 1;
q6n = 2;
JUo = 1;
GUo = 2;
WUo = 3;
QUo = 4;
jUo = 5;
zUo = 6;
n5c = "\xA0";
DHh = "​";
H6n = g9t || f9t || b9t ? n5c : DHh;
ePe = `

`;
BHh = rYe ? n5c : H6n;
i5c = "֑-߿יִ-﷽ﹰ-ﻼ";
r5c = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿";
RHh = new RegExp("^[^" + r5c + "]*[" + i5c + "]");
PHh = new RegExp("^[^" + i5c + "]*[" + r5c + "]");
bYe = {
  bold: MUo,
  code: OUo,
  highlight: qUo,
  italic: FUo,
  strikethrough: U6n,
  subscript: UUo,
  superscript: $Uo,
  underline: $6n
};
LHh = {
  directionless: HUo,
  unmergeable: q6n
};
s5c = {
  center: GUo,
  end: zUo,
  justify: QUo,
  left: JUo,
  right: WUo,
  start: jUo
};
NHh = {
  [GUo]: "center",
  [zUo]: "end",
  [QUo]: "justify",
  [JUo]: "left",
  [WUo]: "right",
  [jUo]: "start"
};
MHh = {
  normal: t5c,
  segmented: NUo,
  token: LUo
};
FHh = {
  [t5c]: "normal",
  [NUo]: "segmented",
  [LUo]: "token"
};
s8e = class XGb extends E6n {
  static getType() {
    return "text";
  }
  static clone(e) {
    return new XGb(e.__text, e.__key);
  }
  constructor(e, t) {
    super(t);
    this.__text = e;
    this.__format = 0;
    this.__style = "";
    this.__mode = 0;
    this.__detail = 0;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    const e = this.getLatest();
    return FHh[e.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === LUo;
  }
  isComposing() {
    return this.__key === oYe();
  }
  isSegmented() {
    return this.getLatest().__mode === NUo;
  }
  isDirectionless() {
    return (this.getLatest().__detail & HUo) !== 0;
  }
  isUnmergeable() {
    return (this.getLatest().__detail & q6n) !== 0;
  }
  hasFormat(e) {
    const t = bYe[e];
    return (this.getFormat() & t) !== 0;
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(e, t) {
    const r = this.getLatest().__format;
    return n7h(r, e, t);
  }
  createDOM(e) {
    const t = this.__format;
    const i = I3c(this, t);
    const r = D3c(this, t);
    const s = i === null ? r : i;
    const o = bi.document.createElement(s);
    let a = o;
    if (i !== null) {
      a = bi.document.createElement(r);
      o.appendChild(a);
    }
    const l = this.__text;
    y7h(a, this, r, t, l, e);
    const u = this.__style;
    if (u !== "") {
      o.style.cssText = u;
    }
    return o;
  }
  updateDOM(e, t, i) {
    const r = this.__text;
    const s = e.__format;
    const o = this.__format;
    const a = I3c(this, s);
    const l = I3c(this, o);
    const u = D3c(this, s);
    const d = D3c(this, o);
    if ((a === null ? u : a) !== (l === null ? d : l)) {
      return true;
    }
    if (a === l && u !== d) {
      const x = t.firstChild;
      if (x == null) {
        Yg(false, "updateDOM: prevInnerDOM is null or undefined");
      }
      const I = bi.document.createElement(d);
      y7h(I, this, d, o, r, i);
      t.replaceChild(I, x);
      return false;
    }
    let g = t;
    if (l !== null && a !== null) {
      g = t.firstChild;
      if (g == null) {
        Yg(false, "updateDOM: innerDOM is null or undefined");
      }
    }
    A7h(r, g, this);
    const A = i.theme.text;
    if (A !== undefined && s !== o) {
      v7h(d, s, o, g, A);
    }
    const w = e.__style;
    const C = this.__style;
    if (w !== C) {
      t.style.cssText = C;
    }
    return false;
  }
  static importDOM() {
    return {
      "#text": () => ({
        conversion: evA,
        priority: 0
      }),
      b: () => ({
        conversion: YbA,
        priority: 0
      }),
      code: () => ({
        conversion: aYe,
        priority: 0
      }),
      em: () => ({
        conversion: aYe,
        priority: 0
      }),
      i: () => ({
        conversion: aYe,
        priority: 0
      }),
      s: () => ({
        conversion: aYe,
        priority: 0
      }),
      span: () => ({
        conversion: KbA,
        priority: 0
      }),
      strong: () => ({
        conversion: aYe,
        priority: 0
      }),
      sub: () => ({
        conversion: aYe,
        priority: 0
      }),
      sup: () => ({
        conversion: aYe,
        priority: 0
      }),
      u: () => ({
        conversion: aYe,
        priority: 0
      })
    };
  }
  static importJSON(e) {
    const t = OA(e.text);
    t.setFormat(e.format);
    t.setDetail(e.detail);
    t.setMode(e.mode);
    t.setStyle(e.style);
    return t;
  }
  exportDOM(e) {
    let {
      element: t
    } = super.exportDOM(e);
    if (t !== null) {
      if (this.hasFormat("bold")) {
        t = AUo(t, "b");
      }
      if (this.hasFormat("italic")) {
        t = AUo(t, "i");
      }
      if (this.hasFormat("strikethrough")) {
        t = AUo(t, "s");
      }
      if (this.hasFormat("underline")) {
        t = AUo(t, "u");
      }
    }
    return {
      element: t
    };
  }
  exportJSON() {
    return {
      detail: this.getDetail(),
      format: this.getFormat(),
      mode: this.getMode(),
      style: this.getStyle(),
      text: this.getTextContent(),
      type: "text",
      version: 1
    };
  }
  selectionTransform(e, t) {}
  setFormat(e) {
    const t = this.getWritable();
    t.__format = typeof e == "string" ? bYe[e] : e;
    return t;
  }
  setDetail(e) {
    const t = this.getWritable();
    t.__detail = typeof e == "string" ? LHh[e] : e;
    return t;
  }
  setStyle(e) {
    const t = this.getWritable();
    t.__style = e;
    return t;
  }
  toggleFormat(e) {
    const t = bYe[e];
    return this.setFormat(this.getFormat() ^ t);
  }
  toggleDirectionless() {
    const e = this.getWritable();
    e.__detail ^= HUo;
    return e;
  }
  toggleUnmergeable() {
    const e = this.getWritable();
    e.__detail ^= q6n;
    return e;
  }
  setMode(e) {
    const t = MHh[e];
    if (this.__mode === t) {
      return this;
    }
    const i = this.getWritable();
    i.__mode = t;
    return i;
  }
  setTextContent(e) {
    if (this.__text === e) {
      return this;
    }
    const t = this.getWritable();
    t.__text = e;
    return t;
  }
  select(e, t) {
    aae();
    let i = e;
    let r = t;
    const s = Wd();
    const o = this.getTextContent();
    const a = this.__key;
    if (typeof o == "string") {
      const l = o.length;
      if (i === undefined) {
        i = l;
      }
      if (r === undefined) {
        r = l;
      }
    } else {
      i = 0;
      r = 0;
    }
    if (dd(s)) {
      const l = oYe();
      if (l === s.anchor.key || l === s.focus.key) {
        YY(a);
      }
      s.setTextNodeRange(this, i, this, r);
    } else {
      return Gqh(a, i, a, r, "text", "text");
    }
    return s;
  }
  spliceText(e, t, i, r) {
    const s = this.getWritable();
    const o = s.__text;
    const a = i.length;
    let l = e;
    if (l < 0) {
      l = a + l;
      if (l < 0) {
        l = 0;
      }
    }
    const u = Wd();
    if (r && dd(u)) {
      const m = e + a;
      u.setTextNodeRange(s, m, s, m);
    }
    const d = o.slice(0, l) + i + o.slice(l + t);
    s.__text = d;
    return s;
  }
  canInsertTextBefore() {
    return true;
  }
  canInsertTextAfter() {
    return true;
  }
  splitText(...e) {
    aae();
    const t = this.getLatest();
    const i = t.getTextContent();
    const r = t.__key;
    const s = oYe();
    const o = new Set(e);
    const a = [];
    const l = i.length;
    let u = "";
    for (let M = 0; M < l; M++) {
      if (u !== "" && o.has(M)) {
        a.push(u);
        u = "";
      }
      u += i[M];
    }
    if (u !== "") {
      a.push(u);
    }
    const d = a.length;
    if (d === 0) {
      return [];
    }
    if (a[0] === i) {
      return [t];
    }
    const m = a[0];
    const p = t.getParentOrThrow();
    let g;
    const f = t.getFormat();
    const A = t.getStyle();
    const w = t.__detail;
    let C = false;
    if (t.isSegmented()) {
      g = OA(m);
      g.__format = f;
      g.__style = A;
      g.__detail = w;
      C = true;
    } else {
      g = t.getWritable();
      g.__text = m;
    }
    const x = Wd();
    const I = [g];
    let B = m.length;
    for (let M = 1; M < d; M++) {
      const O = a[M];
      const $ = O.length;
      const H = OA(O).getWritable();
      H.__format = f;
      H.__style = A;
      H.__detail = w;
      const W = H.__key;
      const z = B + $;
      if (dd(x)) {
        const Y = x.anchor;
        const j = x.focus;
        if (Y.key === r && Y.type === "text" && Y.offset > B && Y.offset <= z) {
          Y.key = W;
          Y.offset -= B;
          x.dirty = true;
        }
        if (j.key === r && j.type === "text" && j.offset > B && j.offset <= z) {
          j.key = W;
          j.offset -= B;
          x.dirty = true;
        }
      }
      if (s === r) {
        YY(W);
      }
      B = z;
      I.push(H);
    }
    lbA(this);
    const R = p.getWritable();
    const N = this.getIndexWithinParent();
    if (C) {
      R.splice(N, 0, I);
      this.remove();
    } else {
      R.splice(N, 1, I);
    }
    if (dd(x)) {
      hUo(x, p, N, d - 1);
    }
    return I;
  }
  mergeWithSibling(e) {
    const t = e === this.getPreviousSibling();
    if (!t && e !== this.getNextSibling()) {
      Yg(false, "mergeWithSibling: sibling must be a previous or next sibling");
    }
    const i = this.__key;
    const r = e.__key;
    const s = this.__text;
    const o = s.length;
    if (oYe() === r) {
      YY(i);
    }
    const l = Wd();
    if (dd(l)) {
      const p = l.anchor;
      const g = l.focus;
      if (p !== null && p.key === r) {
        Qqh(p, t, i, e, o);
        l.dirty = true;
      }
      if (g !== null && g.key === r) {
        Qqh(g, t, i, e, o);
        l.dirty = true;
      }
    }
    const u = e.__text;
    const d = t ? u + s : s + u;
    this.setTextContent(d);
    const m = this.getWritable();
    e.remove();
    return m;
  }
  isTextEntity() {
    return false;
  }
};
o5c = new WeakMap();
OHh = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/, "i");
UHh = {
  code: "code",
  em: "italic",
  i: "italic",
  s: "strikethrough",
  strong: "bold",
  sub: "subscript",
  sup: "superscript",
  u: "underline"
};
J6n = class eWb extends s8e {
  static getType() {
    return "tab";
  }
  static clone(e) {
    const t = new eWb(e.__key);
    t.__text = e.__text;
    t.__format = e.__format;
    t.__style = e.__style;
    return t;
  }
  constructor(e) {
    super("\t", e);
    this.__detail = q6n;
  }
  static importDOM() {
    return null;
  }
  static importJSON(e) {
    const t = Vte();
    t.setFormat(e.format);
    t.setStyle(e.style);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "tab",
      version: 1
    };
  }
  setTextContent(e) {
    Yg(false, "TabNode does not support setTextContent");
  }
  setDetail(e) {
    Yg(false, "TabNode does not support setDetail");
  }
  setMode(e) {
    Yg(false, "TabNode does not support setMode");
  }
  canInsertTextBefore() {
    return false;
  }
  canInsertTextAfter() {
    return false;
  }
};
Eve = class extends E6n {
  constructor(n) {
    super(n);
    this.__first = null;
    this.__last = null;
    this.__size = 0;
    this.__format = 0;
    this.__indent = 0;
    this.__dir = null;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    const n = this.getFormat();
    return NHh[n] || "";
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    const n = [];
    let e = this.getFirstChild();
    while (e !== null) {
      n.push(e);
      e = e.getNextSibling();
    }
    return n;
  }
  getChildrenKeys() {
    const n = [];
    let e = this.getFirstChild();
    while (e !== null) {
      n.push(e.__key);
      e = e.getNextSibling();
    }
    return n;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0;
  }
  isDirty() {
    const e = G6()._dirtyElements;
    return e !== null && e.has(this.__key);
  }
  isLastChild() {
    const n = this.getLatest();
    const e = this.getParentOrThrow().getLastChild();
    return e !== null && e.is(n);
  }
  getAllTextNodes() {
    const n = [];
    let e = this.getFirstChild();
    while (e !== null) {
      if (jd(e)) {
        n.push(e);
      }
      if (kd(e)) {
        const t = e.getAllTextNodes();
        n.push(...t);
      }
      e = e.getNextSibling();
    }
    return n;
  }
  getFirstDescendant() {
    let n = this.getFirstChild();
    while (n !== null) {
      if (kd(n)) {
        const e = n.getFirstChild();
        if (e !== null) {
          n = e;
          continue;
        }
      }
      break;
    }
    return n;
  }
  getLastDescendant() {
    let n = this.getLastChild();
    while (n !== null) {
      if (kd(n)) {
        const e = n.getLastChild();
        if (e !== null) {
          n = e;
          continue;
        }
      }
      break;
    }
    return n;
  }
  getDescendantByIndex(n) {
    const e = this.getChildren();
    const t = e.length;
    if (n >= t) {
      const r = e[t - 1];
      return kd(r) && r.getLastDescendant() || r || null;
    }
    const i = e[n];
    return kd(i) && i.getFirstDescendant() || i || null;
  }
  getFirstChild() {
    const e = this.getLatest().__first;
    if (e === null) {
      return null;
    } else {
      return jB(e);
    }
  }
  getFirstChildOrThrow() {
    const n = this.getFirstChild();
    if (n === null) {
      Yg(false, "Expected node %s to have a first child.", this.__key);
    }
    return n;
  }
  getLastChild() {
    const e = this.getLatest().__last;
    if (e === null) {
      return null;
    } else {
      return jB(e);
    }
  }
  getLastChildOrThrow() {
    const n = this.getLastChild();
    if (n === null) {
      Yg(false, "Expected node %s to have a last child.", this.__key);
    }
    return n;
  }
  getChildAtIndex(n) {
    const e = this.getChildrenSize();
    let t;
    let i;
    if (n < e / 2) {
      t = this.getFirstChild();
      i = 0;
      while (t !== null && i <= n) {
        if (i === n) {
          return t;
        }
        t = t.getNextSibling();
        i++;
      }
      return null;
    }
    t = this.getLastChild();
    i = e - 1;
    while (t !== null && i >= n) {
      if (i === n) {
        return t;
      }
      t = t.getPreviousSibling();
      i--;
    }
    return null;
  }
  getTextContent() {
    let n = "";
    const e = this.getChildren();
    const t = e.length;
    for (let i = 0; i < t; i++) {
      const r = e[i];
      n += r.getTextContent();
      if (kd(r) && i !== t - 1 && !r.isInline()) {
        n += ePe;
      }
    }
    return n;
  }
  getTextContentSize() {
    let n = 0;
    const e = this.getChildren();
    const t = e.length;
    for (let i = 0; i < t; i++) {
      const r = e[i];
      n += r.getTextContentSize();
      if (kd(r) && i !== t - 1 && !r.isInline()) {
        n += ePe.length;
      }
    }
    return n;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  hasFormat(n) {
    if (n !== "") {
      const e = s5c[n];
      return (this.getFormat() & e) !== 0;
    }
    return false;
  }
  select(n, e) {
    aae();
    const t = Wd();
    let i = n;
    let r = e;
    const s = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (n === 0 && e === 0) {
        const a = this.getFirstChild();
        if (jd(a) || kd(a)) {
          return a.select(0, 0);
        }
      } else if ((n === undefined || n === s) && (e === undefined || e === s)) {
        const a = this.getLastChild();
        if (jd(a) || kd(a)) {
          return a.select();
        }
      }
    }
    if (i === undefined) {
      i = s;
    }
    if (r === undefined) {
      r = s;
    }
    const o = this.__key;
    if (dd(t)) {
      t.anchor.set(o, i, "element");
      t.focus.set(o, r, "element");
      t.dirty = true;
    } else {
      return Gqh(o, i, o, r, "element", "element");
    }
    return t;
  }
  selectStart() {
    const n = this.getFirstDescendant();
    if (kd(n) || jd(n)) {
      return n.select(0, 0);
    } else if (n !== null) {
      return n.selectPrevious();
    } else {
      return this.select(0, 0);
    }
  }
  selectEnd() {
    const n = this.getLastDescendant();
    if (kd(n) || jd(n)) {
      return n.select();
    } else if (n !== null) {
      return n.selectNext();
    } else {
      return this.select();
    }
  }
  clear() {
    const n = this.getWritable();
    this.getChildren().forEach(t => t.remove());
    return n;
  }
  append(...n) {
    return this.splice(this.getChildrenSize(), 0, n);
  }
  setDirection(n) {
    const e = this.getWritable();
    e.__dir = n;
    return e;
  }
  setFormat(n) {
    const e = this.getWritable();
    e.__format = n !== "" ? s5c[n] : 0;
    return this;
  }
  setIndent(n) {
    const e = this.getWritable();
    e.__indent = n;
    return this;
  }
  splice(n, e, t) {
    const i = t.length;
    const r = this.getChildrenSize();
    const s = this.getWritable();
    const o = s.__key;
    const a = [];
    const l = [];
    const u = this.getChildAtIndex(n + e);
    let d = null;
    let m = r - e + i;
    if (n !== 0) {
      if (n === r) {
        d = this.getLastChild();
      } else {
        const g = this.getChildAtIndex(n);
        if (g !== null) {
          d = g.getPreviousSibling();
        }
      }
    }
    if (e > 0) {
      let g = d === null ? this.getFirstChild() : d.getNextSibling();
      for (let f = 0; f < e; f++) {
        if (g === null) {
          Yg(false, "splice: sibling not found");
        }
        const A = g.getNextSibling();
        const w = g.__key;
        const C = g.getWritable();
        fvt(C);
        l.push(w);
        g = A;
      }
    }
    let p = d;
    for (let g = 0; g < i; g++) {
      const f = t[g];
      if (p !== null && f.is(p)) {
        d = p = p.getPreviousSibling();
      }
      const A = f.getWritable();
      if (A.__parent === o) {
        m--;
      }
      fvt(A);
      const w = f.__key;
      if (p === null) {
        s.__first = w;
        A.__prev = null;
      } else {
        const C = p.getWritable();
        C.__next = w;
        A.__prev = C.__key;
      }
      if (f.__key === o) {
        Yg(false, "append: attempting to append self");
      }
      A.__parent = o;
      a.push(w);
      p = f;
    }
    if (n + e === r) {
      if (p !== null) {
        const g = p.getWritable();
        g.__next = null;
        s.__last = p.__key;
      }
    } else if (u !== null) {
      const g = u.getWritable();
      if (p !== null) {
        const f = p.getWritable();
        g.__prev = p.__key;
        f.__next = u.__key;
      } else {
        g.__prev = null;
      }
    }
    s.__size = m;
    if (l.length) {
      const g = Wd();
      if (dd(g)) {
        const f = new Set(l);
        const A = new Set(a);
        const {
          anchor: w,
          focus: C
        } = g;
        if (_7h(w, f, A)) {
          mUo(w, w.getNode(), this, d, u);
        }
        if (_7h(C, f, A)) {
          mUo(C, C.getNode(), this, d, u);
        }
        if (m === 0 && !this.canBeEmpty() && !zte(this)) {
          this.remove();
        }
      }
    }
    return s;
  }
  exportJSON() {
    return {
      children: [],
      direction: this.getDirection(),
      format: this.getFormatType(),
      indent: this.getIndent(),
      type: "element",
      version: 1
    };
  }
  insertNewAfter(n, e) {
    return null;
  }
  canIndent() {
    return true;
  }
  collapseAtStart(n) {
    return false;
  }
  excludeFromCopy(n) {
    return false;
  }
  canExtractContents() {
    return true;
  }
  canReplaceWith(n) {
    return true;
  }
  canInsertAfter(n) {
    return true;
  }
  canBeEmpty() {
    return true;
  }
  canInsertTextBefore() {
    return true;
  }
  canInsertTextAfter() {
    return true;
  }
  isInline() {
    return false;
  }
  isShadowRoot() {
    return false;
  }
  canMergeWith(n) {
    return false;
  }
  extractWithChild(n, e, t) {
    return false;
  }
};
G6n = class tWb extends E6n {
  static getType() {
    return "linebreak";
  }
  static clone(e) {
    return new tWb(e.__key);
  }
  constructor(e) {
    super(e);
  }
  getTextContent() {
    return `
`;
  }
  createDOM() {
    return bi.document.createElement("br");
  }
  updateDOM() {
    return false;
  }
  static importDOM() {
    return {
      br: e => {
        const t = e.parentElement;
        let i;
        let r;
        if (t !== null && ((i = t.firstChild) === e || i.nextSibling === e && i.nodeType === XRe && (i.textContent || "").match(/^[\s|\r?\n|\t]+$/) !== null) && ((r = t.lastChild) === e || r.previousSibling === e && r.nodeType === XRe && (r.textContent || "").match(/^[\s|\r?\n|\t]+$/) !== null)) {
          return null;
        } else {
          return {
            conversion: tvA,
            priority: 0
          };
        }
      }
    };
  }
  static importJSON(e) {
    return lhe();
  }
  exportJSON() {
    return {
      type: "linebreak",
      version: 1
    };
  }
};
$Hh = class extends Eve {};
qHh = class extends Eve {
  constructor(n, e) {
    super(e);
    this.__colSpan = n;
    this.__rowSpan = 1;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      colSpan: this.__colSpan,
      rowSpan: this.__rowSpan
    };
  }
  getColSpan() {
    return this.__colSpan;
  }
  setColSpan(n) {
    this.getWritable().__colSpan = n;
    return this;
  }
  getRowSpan() {
    return this.__rowSpan;
  }
  setRowSpan(n) {
    this.getWritable().__rowSpan = n;
    return this;
  }
};
HHh = class extends Eve {};
W6n = class extends E6n {
  constructor(n) {
    super(n);
  }
  decorate(n, e) {
    Yg(false, "decorate: base method not extended");
  }
  isIsolated() {
    return false;
  }
  isInline() {
    return true;
  }
  isKeyboardSelectable() {
    return true;
  }
};
VUo = class nWb extends Eve {
  static getType() {
    return "root";
  }
  static clone() {
    return new nWb();
  }
  constructor() {
    super("root");
    this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    Yg(false, "getTopLevelElementOrThrow: root nodes are not top level elements");
  }
  getTextContent() {
    const e = this.__cachedText;
    if ((A9t() || G6()._dirtyType === fYe) && e !== null) {
      return e;
    } else {
      return super.getTextContent();
    }
  }
  remove() {
    Yg(false, "remove: cannot be called on root nodes");
  }
  replace(e) {
    Yg(false, "replace: cannot be called on root nodes");
  }
  insertBefore(e) {
    Yg(false, "insertBefore: cannot be called on root nodes");
  }
  insertAfter(e) {
    Yg(false, "insertAfter: cannot be called on root nodes");
  }
  updateDOM(e, t) {
    return false;
  }
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      const i = e[t];
      if (!kd(i) && !ZD(i)) {
        Yg(false, "rootNode.append: Only element or decorator nodes can be appended to the root node");
      }
    }
    return super.append(...e);
  }
  static importJSON(e) {
    const t = lf();
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  exportJSON() {
    return {
      children: [],
      direction: this.getDirection(),
      format: this.getFormatType(),
      indent: this.getIndent(),
      type: "root",
      version: 1
    };
  }
  collapseAtStart() {
    return true;
  }
};
o8e = class iWb extends Eve {
  static getType() {
    return "paragraph";
  }
  static clone(e) {
    return new iWb(e.__key);
  }
  createDOM(e) {
    const t = bi.document.createElement("p");
    const i = _6n(e.theme, "paragraph");
    if (i !== undefined) {
      t.classList.add(...i);
    }
    return t;
  }
  updateDOM(e, t, i) {
    return false;
  }
  static importDOM() {
    return {
      p: e => ({
        conversion: ivA,
        priority: 0
      })
    };
  }
  exportDOM(e) {
    const {
      element: t
    } = super.exportDOM(e);
    if (t && this.isEmpty()) {
      t.append(bi.document.createElement("br"));
    }
    if (t) {
      const i = this.getFormatType();
      t.style.textAlign = i;
      const r = this.getDirection();
      if (r) {
        t.dir = r;
      }
      const s = this.getIndent();
      if (s > 0) {
        t.style.textIndent = `${s * 20}px`;
      }
    }
    return {
      element: t
    };
  }
  static importJSON(e) {
    const t = Lx();
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "paragraph",
      version: 1
    };
  }
  insertNewAfter(e, t) {
    const i = Lx();
    const r = this.getDirection();
    i.setDirection(r);
    this.insertAfter(i, t);
    return i;
  }
  collapseAtStart() {
    const e = this.getChildren();
    if (e.length === 0 || jd(e[0]) && e[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) {
        this.selectNext();
        this.remove();
        return true;
      }
      if (this.getPreviousSibling() !== null) {
        this.selectPrevious();
        this.remove();
        return true;
      }
    }
    return false;
  }
};
