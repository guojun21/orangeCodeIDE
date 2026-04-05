"use strict";

// Module: out-build/vs/base/browser/ui/splitview/paneview.js
// Offset: 30829007 (bundle byte offset)
// Size: 11588 bytes
Ay();
dz();
ri();
z$();
Tb();
Dx();
xf();
yn();
rt();
gry();
Ht();
qne();
sbt();
bxf = class gcd extends at {
  static {
    this.HEADER_SIZE = 22;
  }
  get ariaHeaderLabel() {
    return this._ariaHeaderLabel;
  }
  set ariaHeaderLabel(e) {
    this._ariaHeaderLabel = e;
    this.header?.setAttribute("aria-label", this.ariaHeaderLabel);
  }
  get draggableElement() {
    return this.header;
  }
  get dropTargetElement() {
    return this.element;
  }
  get dropBackground() {
    return this.styles.dropBackground;
  }
  get minimumBodySize() {
    return this._minimumBodySize;
  }
  set minimumBodySize(e) {
    this._minimumBodySize = e;
    this._onDidChange.fire(undefined);
  }
  get maximumBodySize() {
    return this._maximumBodySize;
  }
  set maximumBodySize(e) {
    this._maximumBodySize = e;
    this._onDidChange.fire(undefined);
  }
  get headerSize() {
    if (this.headerVisible) {
      return gcd.HEADER_SIZE;
    } else {
      return 0;
    }
  }
  get minimumSize() {
    const e = this.headerSize;
    const i = !this.headerVisible || this.isExpanded() ? this.minimumBodySize : 0;
    return e + i;
  }
  get maximumSize() {
    const e = this.headerSize;
    const i = !this.headerVisible || this.isExpanded() ? this.maximumBodySize : 0;
    return e + i;
  }
  getAriaHeaderLabel(e) {
    return _(29, null, e);
  }
  constructor(e) {
    super();
    this.expandedSize = undefined;
    this._headerVisible = true;
    this._collapsible = true;
    this._bodyRendered = false;
    this.styles = {
      dropBackground: undefined,
      headerBackground: undefined,
      headerBorder: undefined,
      headerForeground: undefined,
      leftBorder: undefined
    };
    this.animationTimer = undefined;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._onDidChangeExpansionState = this._register(new Qe());
    this.onDidChangeExpansionState = this._onDidChangeExpansionState.event;
    this.orthogonalSize = 0;
    this._expanded = typeof e.expanded === "undefined" ? true : !!e.expanded;
    this._orientation = typeof e.orientation === "undefined" ? 0 : e.orientation;
    this._ariaHeaderLabel = this.getAriaHeaderLabel(e.title);
    this._minimumBodySize = typeof e.minimumBodySize == "number" ? e.minimumBodySize : this._orientation === 1 ? 200 : 120;
    this._maximumBodySize = typeof e.maximumBodySize == "number" ? e.maximumBodySize : Number.POSITIVE_INFINITY;
    this.element = Ct(".pane");
  }
  isExpanded() {
    return this._expanded;
  }
  setExpanded(e) {
    if (!e && !this.collapsible || this._expanded === !!e) {
      return false;
    } else {
      this.element?.classList.toggle("expanded", e);
      this._expanded = !!e;
      this.updateHeader();
      if (e) {
        if (!this._bodyRendered) {
          this.renderBody(this.body);
          this._bodyRendered = true;
        }
        if (typeof this.animationTimer == "number") {
          As(this.element).clearTimeout(this.animationTimer);
        }
        Rt(this.element, this.body);
      } else {
        this.animationTimer = As(this.element).setTimeout(() => {
          this.body.remove();
        }, 200);
      }
      this._onDidChangeExpansionState.fire(e);
      this._onDidChange.fire(e ? this.expandedSize : undefined);
      return true;
    }
  }
  get headerVisible() {
    return this._headerVisible;
  }
  set headerVisible(e) {
    if (this._headerVisible !== !!e) {
      this._headerVisible = !!e;
      this.updateHeader();
      this._onDidChange.fire(undefined);
    }
  }
  get collapsible() {
    return this._collapsible;
  }
  set collapsible(e) {
    if (this._collapsible !== !!e) {
      this._collapsible = !!e;
      this.updateHeader();
    }
  }
  get orientation() {
    return this._orientation;
  }
  set orientation(e) {
    if (this._orientation !== e) {
      this._orientation = e;
      if (this.element) {
        this.element.classList.toggle("horizontal", this.orientation === 1);
        this.element.classList.toggle("vertical", this.orientation === 0);
      }
      if (this.header) {
        this.updateHeader();
      }
    }
  }
  render() {
    this.element.classList.toggle("expanded", this.isExpanded());
    this.element.classList.toggle("horizontal", this.orientation === 1);
    this.element.classList.toggle("vertical", this.orientation === 0);
    this.header = Ct(".pane-header");
    Rt(this.element, this.header);
    this.header.setAttribute("tabindex", "0");
    this.header.setAttribute("role", "button");
    this.header.setAttribute("aria-label", this.ariaHeaderLabel);
    this.renderHeader(this.header);
    const e = CC(this.header);
    this._register(e);
    this._register(e.onDidFocus(() => this.header?.classList.add("focused"), null));
    this._register(e.onDidBlur(() => this.header?.classList.remove("focused"), null));
    this.updateHeader();
    const t = this._register(new Ut());
    const i = this._register(new Hg(this.header, "keydown"));
    const r = In.map(i.event, o => new vh(o), t);
    this._register(In.filter(r, o => o.keyCode === 3 || o.keyCode === 10, t)(() => this.setExpanded(!this.isExpanded()), null));
    this._register(In.filter(r, o => o.keyCode === 15, t)(() => this.setExpanded(false), null));
    this._register(In.filter(r, o => o.keyCode === 17, t)(() => this.setExpanded(true), null));
    this._register(E1.addTarget(this.header));
    const s = this.header;
    [ir.CLICK, MA.Tap].forEach(o => {
      this._register(ei(s, o, a => {
        if (!a.defaultPrevented) {
          this.setExpanded(!this.isExpanded());
        }
      }));
    });
    this.body = Rt(this.element, Ct(".pane-body"));
    if (!this._bodyRendered && this.isExpanded()) {
      this.renderBody(this.body);
      this._bodyRendered = true;
    }
    if (!this.isExpanded()) {
      this.body.remove();
    }
  }
  layout(e) {
    const t = this.headerVisible ? gcd.HEADER_SIZE : 0;
    const i = this._orientation === 0 ? this.orthogonalSize : e;
    const r = this._orientation === 0 ? e - t : this.orthogonalSize - t;
    if (this.isExpanded()) {
      this.body.classList.toggle("wide", i >= 600);
      this.layoutBody(r, i);
      this.expandedSize = e;
    }
  }
  style(e) {
    this.styles = e;
    if (this.header) {
      this.updateHeader();
    }
  }
  updateHeader() {
    if (!this.header) {
      return;
    }
    const e = !this.headerVisible || this.isExpanded();
    if (this.collapsible) {
      this.header.setAttribute("tabindex", "0");
      this.header.setAttribute("role", "button");
    } else {
      this.header.removeAttribute("tabindex");
      this.header.removeAttribute("role");
    }
    this.header.style.lineHeight = `${this.headerSize}px`;
    this.header.classList.toggle("hidden", !this.headerVisible);
    this.header.classList.toggle("expanded", e);
    this.header.classList.toggle("not-collapsible", !this.collapsible);
    this.header.setAttribute("aria-expanded", String(e));
    this.header.style.color = this.collapsible ? this.styles.headerForeground ?? "" : "";
    this.header.style.backgroundColor = (this.collapsible ? this.styles.headerBackground : "transparent") ?? "";
    this.header.style.borderTop = this.styles.headerBorder && this.orientation === 0 ? `1px solid ${this.styles.headerBorder}` : "";
    this.element.style.borderLeft = this.styles.leftBorder && this.orientation === 1 ? `1px solid ${this.styles.leftBorder}` : "";
  }
};
vxf = class RQb extends at {
  static {
    this.DefaultDragOverBackgroundColor = new Xr(new Sa(128, 128, 128, 0.5));
  }
  constructor(e, t, i) {
    super();
    this.pane = e;
    this.dnd = t;
    this.context = i;
    this.dragOverCounter = 0;
    this._onDidDrop = this._register(new Qe());
    this.onDidDrop = this._onDidDrop.event;
    e.draggableElement.draggable = true;
    this._register(ei(e.draggableElement, "dragstart", r => this.onDragStart(r)));
    this._register(ei(e.dropTargetElement, "dragenter", r => this.onDragEnter(r)));
    this._register(ei(e.dropTargetElement, "dragleave", r => this.onDragLeave(r)));
    this._register(ei(e.dropTargetElement, "dragend", r => this.onDragEnd(r)));
    this._register(ei(e.dropTargetElement, "drop", r => this.onDrop(r)));
  }
  onDragStart(e) {
    if (!this.dnd.canDrag(this.pane) || !e.dataTransfer) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    const t = this.pane.draggableElement?.textContent || "";
    e.dataTransfer.effectAllowed = "move";
    if (u3) {
      e.dataTransfer?.setData(fT.TEXT, t);
    }
    rbt(e, this.pane.element, t);
    this.context.draggable = this;
  }
  onDragEnter(e) {
    if (!!this.context.draggable && this.context.draggable !== this) {
      if (this.dnd.canDrop(this.context.draggable.pane, this.pane)) {
        this.dragOverCounter++;
        this.render();
      }
    }
  }
  onDragLeave(e) {
    if (!!this.context.draggable && this.context.draggable !== this) {
      if (this.dnd.canDrop(this.context.draggable.pane, this.pane)) {
        this.dragOverCounter--;
        if (this.dragOverCounter === 0) {
          this.render();
        }
      }
    }
  }
  onDragEnd(e) {
    if (this.context.draggable) {
      this.dragOverCounter = 0;
      this.render();
      this.context.draggable = null;
    }
  }
  onDrop(e) {
    if (this.context.draggable) {
      zu.stop(e);
      this.dragOverCounter = 0;
      this.render();
      if (this.dnd.canDrop(this.context.draggable.pane, this.pane) && this.context.draggable !== this) {
        this._onDidDrop.fire({
          from: this.context.draggable.pane,
          to: this.pane
        });
      }
      this.context.draggable = null;
    }
  }
  render() {
    let e = null;
    if (this.dragOverCounter > 0) {
      e = this.pane.dropBackground ?? RQb.DefaultDragOverBackgroundColor.toString();
    }
    this.pane.dropTargetElement.style.backgroundColor = e || "";
  }
};
Axf = class extends at {
  constructor(n, e = {}) {
    super();
    this.dndContext = {
      draggable: null
    };
    this.paneItems = [];
    this.orthogonalSize = 0;
    this.size = 0;
    this.animationTimer = undefined;
    this._onDidDrop = this._register(new Qe());
    this.onDidDrop = this._onDidDrop.event;
    this.dnd = e.dnd;
    this.orientation = e.orientation ?? 0;
    this.element = Rt(n, Ct(".monaco-pane-view"));
    this.splitview = this._register(new Xz(this.element, {
      orientation: this.orientation
    }));
    this.onDidSashReset = this.splitview.onDidSashReset;
    this.onDidSashChange = this.splitview.onDidSashChange;
    this.onDidScroll = this.splitview.onDidScroll;
    const t = this._register(new Ut());
    const i = this._register(new Hg(this.element, "keydown"));
    const r = In.map(In.filter(i.event, s => wf(s.target) && s.target.classList.contains("pane-header"), t), s => new vh(s), t);
    this._register(In.filter(r, s => s.keyCode === 16, t)(() => this.focusPrevious()));
    this._register(In.filter(r, s => s.keyCode === 18, t)(() => this.focusNext()));
  }
  addPane(n, e, t = this.splitview.length) {
    const i = new Ut();
    n.onDidChangeExpansionState(this.setupAnimation, this, i);
    const r = {
      pane: n,
      disposable: i
    };
    this.paneItems.splice(t, 0, r);
    n.orientation = this.orientation;
    n.orthogonalSize = this.orthogonalSize;
    this.splitview.addView(n, e, t);
    if (this.dnd) {
      const s = new vxf(n, this.dnd, this.dndContext);
      i.add(s);
      i.add(s.onDidDrop(this._onDidDrop.fire, this._onDidDrop));
    }
  }
  removePane(n) {
    const e = this.paneItems.findIndex(i => i.pane === n);
    if (e === -1) {
      return;
    }
    this.splitview.removeView(e, n.isExpanded() ? tP.Distribute : undefined);
    this.paneItems.splice(e, 1)[0].disposable.dispose();
  }
  movePane(n, e) {
    const t = this.paneItems.findIndex(s => s.pane === n);
    const i = this.paneItems.findIndex(s => s.pane === e);
    if (t === -1 || i === -1) {
      return;
    }
    const [r] = this.paneItems.splice(t, 1);
    this.paneItems.splice(i, 0, r);
    this.splitview.moveView(t, i);
  }
  resizePane(n, e) {
    const t = this.paneItems.findIndex(i => i.pane === n);
    if (t !== -1) {
      this.splitview.resizeView(t, e);
    }
  }
  getPaneSize(n) {
    const e = this.paneItems.findIndex(t => t.pane === n);
    if (e === -1) {
      return -1;
    } else {
      return this.splitview.getViewSize(e);
    }
  }
  layout(n, e) {
    this.orthogonalSize = this.orientation === 0 ? e : n;
    this.size = this.orientation === 1 ? e : n;
    for (const t of this.paneItems) {
      t.pane.orthogonalSize = this.orthogonalSize;
    }
    this.splitview.layout(this.size);
  }
  setBoundarySashes(n) {
    this.boundarySashes = n;
    this.updateSplitviewOrthogonalSashes(n);
  }
  updateSplitviewOrthogonalSashes(n) {
    if (this.orientation === 0) {
      this.splitview.orthogonalStartSash = n?.left;
      this.splitview.orthogonalEndSash = n?.right;
    } else {
      this.splitview.orthogonalEndSash = n?.bottom;
    }
  }
  flipOrientation(n, e) {
    this.orientation = this.orientation === 0 ? 1 : 0;
    const t = this.paneItems.map(s => this.getPaneSize(s.pane));
    this.splitview.dispose();
    th(this.element);
    this.splitview = this._register(new Xz(this.element, {
      orientation: this.orientation
    }));
    this.updateSplitviewOrthogonalSashes(this.boundarySashes);
    const i = this.orientation === 0 ? e : n;
    const r = this.orientation === 1 ? e : n;
    this.paneItems.forEach((s, o) => {
      s.pane.orthogonalSize = i;
      s.pane.orientation = this.orientation;
      const a = this.size === 0 ? 0 : r * t[o] / this.size;
      this.splitview.addView(s.pane, a, o);
    });
    this.size = r;
    this.orthogonalSize = i;
    this.splitview.layout(this.size);
  }
  setupAnimation() {
    if (typeof this.animationTimer == "number") {
      As(this.element).clearTimeout(this.animationTimer);
    }
    this.element.classList.add("animated");
    this.animationTimer = As(this.element).setTimeout(() => {
      this.animationTimer = undefined;
      this.element.classList.remove("animated");
    }, 200);
  }
  getPaneHeaderElements() {
    return [...this.element.querySelectorAll(".pane-header")];
  }
  focusPrevious() {
    const n = this.getPaneHeaderElements();
    const e = n.indexOf(this.element.ownerDocument.activeElement);
    if (e !== -1) {
      n[Math.max(e - 1, 0)].focus();
    }
  }
  focusNext() {
    const n = this.getPaneHeaderElements();
    const e = n.indexOf(this.element.ownerDocument.activeElement);
    if (e !== -1) {
      n[Math.min(e + 1, n.length - 1)].focus();
    }
  }
  dispose() {
    super.dispose();
    this.paneItems.forEach(n => n.disposable.dispose());
  }
};
