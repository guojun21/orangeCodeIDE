"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellStatusPart.js
// Offset: 33252454 (bundle byte offset)
// Size: 7489 bytes
ri();
Tb();
$0i();
mk();
yn();
kW();
rt();
kVe();
hs();
Wt();
So();
Pa();
Io();
Sb();
LQ();
l2e();
Id();
Ei();
kEt = Ct;
dki = class extends JV {
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this._notebookEditor = e;
    this._cellContainer = t;
    this._editor = r;
    this._instantiationService = s;
    this._themeService = l;
    this.leftItems = [];
    this.rightItems = [];
    this.width = 0;
    this._onDidClick = this._register(new Qe());
    this.onDidClick = this._onDidClick.event;
    this.statusBarContainer = Rt(i, kEt(".cell-statusbar-container"));
    this.statusBarContainer.tabIndex = -1;
    const u = Rt(this.statusBarContainer, kEt(".cell-status-left"));
    const d = Rt(this.statusBarContainer, kEt(".cell-status-right"));
    this.leftItemsContainer = Rt(u, kEt(".cell-contributed-items.cell-contributed-items-left"));
    this.rightItemsContainer = Rt(d, kEt(".cell-contributed-items.cell-contributed-items-right"));
    this.itemsDisposable = this._register(new Ut());
    this.hoverDelegate = new class {
      constructor() {
        this._lastHoverHideTime = 0;
        this.showHover = m => {
          m.position = m.position ?? {};
          m.position.hoverPosition = 3;
          return o.showInstantHover(m);
        };
        this.placement = "element";
      }
      get delay() {
        if (Date.now() - this._lastHoverHideTime < 200) {
          return 0;
        } else {
          return a.getValue("workbench.hover.delay");
        }
      }
      onDidHideHover() {
        this._lastHoverHideTime = Date.now();
      }
    }();
    this._register(this._themeService.onDidColorThemeChange(() => this.currentContext && this.updateContext(this.currentContext)));
    this._register(ei(this.statusBarContainer, ir.CLICK, m => {
      if (m.target === u || m.target === d || m.target === this.statusBarContainer) {
        this._onDidClick.fire({
          type: 0,
          event: m
        });
      } else {
        const p = m.target;
        let g = false;
        if (p && wf(p)) {
          const f = p;
          if (f.classList.contains("cell-status-item-has-command") || f.parentElement && f.parentElement.classList.contains("cell-status-item-has-command")) {
            g = true;
          }
        }
        if (g) {
          this._onDidClick.fire({
            type: 2,
            event: m
          });
        } else {
          this._onDidClick.fire({
            type: 1,
            event: m
          });
        }
      }
    }));
  }
  didRenderCell(e) {
    if (this._notebookEditor.hasModel()) {
      const t = {
        ui: true,
        cell: e,
        notebookEditor: this._notebookEditor,
        $mid: 13
      };
      this.updateContext(t);
    }
    if (this._editor) {
      const t = () => {
        if (this._editor && (this._editor.hasWidgetFocus() || this.statusBarContainer.ownerDocument.activeElement && this.statusBarContainer.contains(this.statusBarContainer.ownerDocument.activeElement))) {
          e.focusMode = Tk.Editor;
        } else {
          const i = e.focusMode;
          if (i === Tk.ChatInput) {
            e.focusMode = Tk.ChatInput;
          } else if (i === Tk.Output && this._notebookEditor.hasWebviewFocus()) {
            e.focusMode = Tk.Output;
          } else {
            e.focusMode = Tk.Container;
          }
        }
      };
      this.cellDisposables.add(this._editor.onDidFocusEditorWidget(() => {
        t();
      }));
      this.cellDisposables.add(this._editor.onDidBlurEditorWidget(() => {
        if (this._notebookEditor.hasEditorFocus() && (!this.statusBarContainer.ownerDocument.activeElement || !this.statusBarContainer.contains(this.statusBarContainer.ownerDocument.activeElement))) {
          t();
        }
      }));
      this.cellDisposables.add(this.onDidClick(i => {
        if (this.currentCell instanceof jJ && i.type !== 2 && this._editor) {
          const r = this._editor.getTargetAtClientPoint(i.event.clientX, i.event.clientY - this._notebookEditor.notebookOptions.computeEditorStatusbarHeight(this.currentCell.internalMetadata, this.currentCell.uri));
          if (r?.position) {
            this._editor.setPosition(r.position);
            this._editor.focus();
          }
        }
      }));
    }
  }
  updateInternalLayoutNow(e) {
    this._cellContainer.classList.toggle("cell-statusbar-hidden", this._notebookEditor.notebookOptions.computeEditorStatusbarHeight(e.internalMetadata, e.uri) === 0);
    const i = e.layoutInfo.editorWidth;
    if (!i) {
      return;
    }
    this.width = i;
    this.statusBarContainer.style.width = `${i}px`;
    const r = this.getMaxItemWidth();
    this.leftItems.forEach(s => s.maxWidth = r);
    this.rightItems.forEach(s => s.maxWidth = r);
  }
  getMaxItemWidth() {
    return this.width / 2;
  }
  updateContext(e) {
    this.currentContext = e;
    this.itemsDisposable.clear();
    if (this.currentContext) {
      this.itemsDisposable.add(this.currentContext.cell.onDidChangeLayout(() => {
        if (this.currentContext) {
          this.updateInternalLayoutNow(this.currentContext.cell);
        }
      }));
      this.itemsDisposable.add(this.currentContext.cell.onDidChangeCellStatusBarItems(() => this.updateRenderedItems()));
      this.itemsDisposable.add(this.currentContext.notebookEditor.onDidChangeActiveCell(() => this.updateActiveCell()));
      this.updateInternalLayoutNow(this.currentContext.cell);
      this.updateActiveCell();
      this.updateRenderedItems();
    }
  }
  updateActiveCell() {
    const e = this.currentContext.notebookEditor.getActiveCell() === this.currentContext?.cell;
    this.statusBarContainer.classList.toggle("is-active-cell", e);
  }
  updateRenderedItems() {
    const e = this.currentContext.cell.getCellStatusBarItems();
    e.sort((o, a) => (a.priority ?? 0) - (o.priority ?? 0));
    const t = this.getMaxItemWidth();
    const i = e.filter(o => o.alignment === 1);
    const r = e.filter(o => o.alignment === 2).reverse();
    const s = (o, a, l) => {
      if (o.length > a.length) {
        const u = o.splice(a.length, o.length - a.length);
        for (const d of u) {
          d.container.remove();
          d.dispose();
        }
      }
      a.forEach((u, d) => {
        const m = o[d];
        if (m) {
          m.updateItem(u, t);
        } else {
          const p = this._instantiationService.createInstance(ITa, this.currentContext, this.hoverDelegate, this._editor, u, t);
          o.push(p);
          l.appendChild(p.container);
        }
      });
    };
    s(this.leftItems, i, this.leftItemsContainer);
    s(this.rightItems, r, this.rightItemsContainer);
  }
  dispose() {
    super.dispose();
    Bo(this.leftItems);
    Bo(this.rightItems);
  }
};
dki = __decorate([__param(4, ln), __param(5, Kc), __param(6, Fn), __param(7, bo)], dki);
ITa = class extends at {
  set maxWidth(e) {
    this.container.style.maxWidth = e + "px";
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    super();
    this._context = e;
    this._hoverDelegate = t;
    this._editor = i;
    this._telemetryService = o;
    this._commandService = a;
    this._notificationService = l;
    this._themeService = u;
    this._hoverService = d;
    this.container = kEt(".cell-status-item");
    this._itemDisposables = this._register(new Ut());
    this.updateItem(r, s);
  }
  updateItem(e, t) {
    this._itemDisposables.clear();
    if (!this._currentItem || this._currentItem.text !== e.text) {
      this._itemDisposables.add(new sxe(this.container)).text = e.text.replace(/\n/g, " ");
    }
    const i = o => CEc(o) ? this._themeService.getColorTheme().getColor(o.id)?.toString() || "" : o;
    this.container.style.color = e.color ? i(e.color) : "";
    this.container.style.backgroundColor = e.backgroundColor ? i(e.backgroundColor) : "";
    this.container.style.opacity = e.opacity ? e.opacity : "";
    this.container.classList.toggle("cell-status-item-show-when-active", !!e.onlyShowWhenActive);
    if (typeof t == "number") {
      this.maxWidth = t;
    }
    let r;
    let s;
    if (e.accessibilityInformation) {
      r = e.accessibilityInformation.label;
      s = e.accessibilityInformation.role;
    } else {
      r = e.text ? zoe(e.text).trim() : "";
    }
    this.container.setAttribute("aria-label", r);
    this.container.setAttribute("role", s || "");
    if (e.tooltip) {
      const o = typeof e.tooltip == "string" ? e.tooltip : {
        markdown: e.tooltip,
        markdownNotSupportedFallback: undefined
      };
      this._itemDisposables.add(this._hoverService.setupManagedHover(this._hoverDelegate, this.container, o));
    }
    this.container.classList.toggle("cell-status-item-has-command", !!e.command);
    if (e.command) {
      this.container.tabIndex = 0;
      this._itemDisposables.add(ei(this.container, ir.CLICK, o => {
        this.executeCommand();
      }));
      this._itemDisposables.add(ei(this.container, ir.KEY_DOWN, o => {
        const a = new vh(o);
        if (a.equals(10) || a.equals(3)) {
          this.executeCommand();
        }
      }));
    } else {
      this.container.removeAttribute("tabIndex");
    }
    this._currentItem = e;
  }
  async executeCommand() {
    const e = this._currentItem.command;
    if (!e) {
      return;
    }
    const t = typeof e == "string" ? e : e.id;
    const i = typeof e == "string" ? [] : e.arguments ?? [];
    if (typeof e == "string" || !e.arguments || !Array.isArray(e.arguments) || e.arguments.length === 0) {
      i.unshift(this._context);
    }
    this._telemetryService.publicLog2("workbenchActionExecuted", {
      id: t,
      from: "cell status bar"
    });
    try {
      this._editor?.focus();
      await this._commandService.executeCommand(t, ...i);
    } catch (r) {
      this._notificationService.error(Jw(r));
    }
  }
};
ITa = __decorate([__param(5, ea), __param(6, fr), __param(7, ms), __param(8, bo), __param(9, Kc)], ITa);
