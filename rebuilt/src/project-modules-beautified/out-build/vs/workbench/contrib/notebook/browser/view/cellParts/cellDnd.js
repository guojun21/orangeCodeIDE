"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellDnd.js
// Offset: 33021915 (bundle byte offset)
// Size: 6982 bytes
ri();
vr();
rt();
_r();
Sb();
LQ();
f7e();
ph();
W1e();
U9f = Ct;
wwu = "cell-dragging";
rTa = "global-drag-active";
_wu = class extends JV {
  constructor(n) {
    super();
    this.container = n;
  }
  didRenderCell(n) {
    this.update(n);
  }
  updateState(n, e) {
    if (e.dragStateChanged) {
      this.update(n);
    }
  }
  update(n) {
    this.container.classList.toggle(wwu, n.dragging);
  }
};
$9f = class extends at {
  constructor(n, e) {
    super();
    this.notebookEditor = n;
    this.notebookListContainer = e;
    this.draggedCells = [];
    this.isScrolling = false;
    this.listOnWillScrollListener = this._register(new uo());
    this.listInsertionIndicator = Rt(e, U9f(".cell-list-insertion-indicator"));
    this._register(ei(e.ownerDocument.body, ir.DRAG_START, this.onGlobalDragStart.bind(this), true));
    this._register(ei(e.ownerDocument.body, ir.DRAG_END, this.onGlobalDragEnd.bind(this), true));
    const t = (i, r, s = false) => {
      this._register(ei(n.getDomNode(), i, o => {
        const a = this.toCellDragEvent(o);
        if (a) {
          r(a);
        }
      }, s));
    };
    t(ir.DRAG_OVER, i => {
      if (this.currentDraggedCell) {
        i.browserEvent.preventDefault();
        this.onCellDragover(i);
      }
    }, true);
    t(ir.DROP, i => {
      if (this.currentDraggedCell) {
        i.browserEvent.preventDefault();
        this.onCellDrop(i);
      }
    });
    t(ir.DRAG_LEAVE, i => {
      i.browserEvent.preventDefault();
      this.onCellDragLeave(i);
    });
    this.scrollingDelayer = this._register(new Nv(200));
  }
  setList(n) {
    this.list = n;
    this.listOnWillScrollListener.value = this.list.onWillScroll(e => {
      if (e.scrollTopChanged) {
        this.setInsertIndicatorVisibility(false);
        this.isScrolling = true;
        this.scrollingDelayer.trigger(() => {
          this.isScrolling = false;
        });
      }
    });
  }
  setInsertIndicatorVisibility(n) {
    this.listInsertionIndicator.style.opacity = n ? "1" : "0";
  }
  toCellDragEvent(n) {
    const e = this.notebookListContainer.getBoundingClientRect().top;
    const t = this.list.scrollTop + n.clientY - e;
    const i = this.list.elementAt(t);
    if (!i) {
      return;
    }
    const r = this.list.getCellViewScrollTop(i);
    const s = this.list.elementHeight(i);
    const a = (t - r) / s;
    return {
      browserEvent: n,
      draggedOverCell: i,
      cellTop: r,
      cellHeight: s,
      dragPosRatio: a
    };
  }
  clearGlobalDragState() {
    this.notebookEditor.getDomNode().classList.remove(rTa);
  }
  onGlobalDragStart() {
    this.notebookEditor.getDomNode().classList.add(rTa);
  }
  onGlobalDragEnd() {
    this.notebookEditor.getDomNode().classList.remove(rTa);
  }
  onCellDragover(n) {
    if (!n.browserEvent.dataTransfer) {
      return;
    }
    if (!this.currentDraggedCell) {
      n.browserEvent.dataTransfer.dropEffect = "none";
      return;
    }
    if (this.isScrolling || this.currentDraggedCell === n.draggedOverCell) {
      this.setInsertIndicatorVisibility(false);
      return;
    }
    const e = this.getDropInsertDirection(n.dragPosRatio);
    const t = e === "above" ? n.cellTop : n.cellTop + n.cellHeight;
    this.updateInsertIndicator(e, t);
  }
  updateInsertIndicator(n, e) {
    const {
      bottomToolbarGap: t
    } = this.notebookEditor.notebookOptions.computeBottomToolbarDimensions(this.notebookEditor.textModel?.viewType);
    const i = e - this.list.scrollTop + t / 2;
    if (i >= 0) {
      this.listInsertionIndicator.style.top = `${i}px`;
      this.setInsertIndicatorVisibility(true);
    } else {
      this.setInsertIndicatorVisibility(false);
    }
  }
  getDropInsertDirection(n) {
    if (n < 0.5) {
      return "above";
    } else {
      return "below";
    }
  }
  onCellDrop(n) {
    const e = this.currentDraggedCell;
    if (this.isScrolling || this.currentDraggedCell === n.draggedOverCell) {
      return;
    }
    this.dragCleanup();
    const t = this.getDropInsertDirection(n.dragPosRatio);
    this._dropImpl(e, t, n.browserEvent, n.draggedOverCell);
  }
  getCellRangeAroundDragTarget(n) {
    const e = this.notebookEditor.getSelections();
    const i = Gki(this.notebookEditor, e).find(r => r.start <= n && n < r.end);
    return i || {
      start: n,
      end: n + 1
    };
  }
  _dropImpl(n, e, t, i) {
    const r = this.list.getCellViewScrollTop(i);
    const s = this.list.elementHeight(i);
    const o = e === "above" ? r : r + s;
    const {
      bottomToolbarGap: a
    } = this.notebookEditor.notebookOptions.computeBottomToolbarDimensions(this.notebookEditor.textModel?.viewType);
    const l = o - this.list.scrollTop + a / 2;
    const u = this.notebookEditor.getDomNode().getBoundingClientRect().height;
    if (l < 0 || l > u) {
      return;
    }
    const d = t.ctrlKey && !Fs || t.altKey && Fs;
    if (!this.notebookEditor.hasModel()) {
      return;
    }
    const m = this.notebookEditor.textModel;
    if (d) {
      const p = this.notebookEditor.getCellIndex(n);
      const g = this.getCellRangeAroundDragTarget(p);
      let f = this.notebookEditor.getCellIndex(i);
      if (e === "below") {
        const C = this.notebookEditor.getCellIndex(i);
        f = this.notebookEditor.getNextVisibleCellIndex(C);
      }
      let A;
      let w;
      if (f <= g.start) {
        A = {
          start: f,
          end: f + g.end - g.start
        };
        w = {
          start: f + p - g.start,
          end: f + p - g.start + 1
        };
      } else {
        const C = f - g.start;
        A = {
          start: g.start + C,
          end: g.end + C
        };
        w = {
          start: p + C,
          end: p + C + 1
        };
      }
      m.applyEdits([{
        editType: 1,
        index: f,
        count: 0,
        cells: Qne([g]).map(C => _Et(this.notebookEditor.cellAt(C).model))
      }], true, {
        kind: Wy.Index,
        focus: this.notebookEditor.getFocus(),
        selections: this.notebookEditor.getSelections()
      }, () => ({
        kind: Wy.Index,
        focus: w,
        selections: [A]
      }), undefined, true);
      this.notebookEditor.revealCellRangeInView(A);
    } else {
      Euy(this.notebookEditor, n, e, i);
    }
  }
  onCellDragLeave(n) {
    if (!n.browserEvent.relatedTarget || !HS(n.browserEvent.relatedTarget, this.notebookEditor.getDomNode())) {
      this.setInsertIndicatorVisibility(false);
    }
  }
  dragCleanup() {
    if (this.currentDraggedCell) {
      this.draggedCells.forEach(n => n.dragging = false);
      this.currentDraggedCell = undefined;
      this.draggedCells = [];
    }
    this.setInsertIndicatorVisibility(false);
  }
  registerDragHandle(n, e, t, i) {
    const r = n.container;
    for (const a of t) {
      a.setAttribute("draggable", "true");
    }
    const s = () => {
      if (!!this.notebookEditor.notebookOptions.getDisplayOptions().dragAndDropEnabled && !this.notebookEditor.isReadOnly) {
        r.classList.remove(wwu);
        this.dragCleanup();
      }
    };
    for (const a of t) {
      n.templateDisposables.add(ei(a, ir.DRAG_END, s));
    }
    const o = a => {
      if (!a.dataTransfer || !this.notebookEditor.notebookOptions.getDisplayOptions().dragAndDropEnabled || this.notebookEditor.isReadOnly) {
        return;
      }
      this.currentDraggedCell = n.currentRenderedCell;
      this.draggedCells = this.notebookEditor.getSelections().map(u => this.notebookEditor.getCellsInRange(u)).flat();
      this.draggedCells.forEach(u => u.dragging = true);
      const l = i();
      e.parentElement.appendChild(l);
      a.dataTransfer.setDragImage(l, 0, 0);
      setTimeout(() => l.remove(), 0);
    };
    for (const a of t) {
      n.templateDisposables.add(ei(a, ir.DRAG_START, o));
    }
  }
  startExplicitDrag(n, e) {
    if (!!this.notebookEditor.notebookOptions.getDisplayOptions().dragAndDropEnabled && !this.notebookEditor.isReadOnly) {
      this.currentDraggedCell = n;
      this.setInsertIndicatorVisibility(true);
    }
  }
  explicitDrag(n, e) {
    if (!this.notebookEditor.notebookOptions.getDisplayOptions().dragAndDropEnabled || this.notebookEditor.isReadOnly) {
      return;
    }
    const t = this.list.elementAt(e);
    if (t && t !== n) {
      const l = this.list.getCellViewScrollTop(t);
      const u = this.list.elementHeight(t);
      const d = this.getExplicitDragDropDirection(e, l, u);
      const m = d === "above" ? l : l + u;
      this.updateInsertIndicator(d, m);
    }
    if (this.currentDraggedCell !== n) {
      return;
    }
    const i = this.notebookEditor.getDomNode().getBoundingClientRect();
    const r = e - this.list.scrollTop;
    const s = 0.2;
    const o = 20;
    const a = r / i.height;
    if (a < s) {
      this.list.scrollTop -= o * (1 - a / s);
    } else if (a > 1 - s) {
      this.list.scrollTop += o * (1 - (1 - a) / s);
    }
  }
  endExplicitDrag(n) {
    this.setInsertIndicatorVisibility(false);
  }
  explicitDrop(n, e) {
    this.currentDraggedCell = undefined;
    this.setInsertIndicatorVisibility(false);
    const t = this.list.elementAt(e.dragOffsetY);
    if (!t || t === n) {
      return;
    }
    const i = this.list.getCellViewScrollTop(t);
    const r = this.list.elementHeight(t);
    const s = this.getExplicitDragDropDirection(e.dragOffsetY, i, r);
    this._dropImpl(n, s, e, t);
  }
  getExplicitDragDropDirection(n, e, t) {
    const r = (n - e) / t;
    return this.getDropInsertDirection(r);
  }
  dispose() {
    this.notebookEditor = null;
    super.dispose();
  }
};
