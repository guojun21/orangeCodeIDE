"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellFocusIndicator.js
// Offset: 33248209 (bundle byte offset)
// Size: 3049 bytes
ri();
sI();
LQ();
ph();
e_u = class extends JV {
  constructor(n, e, t, i, r, s) {
    super();
    this.notebookEditor = n;
    this.titleToolbar = e;
    this.top = t;
    this.left = i;
    this.right = r;
    this.bottom = s;
    this.codeFocusIndicator = new qH(Rt(this.left.domNode, Ct(".codeOutput-focus-indicator-container", undefined, Ct(".codeOutput-focus-indicator.code-focus-indicator"))));
    this.outputFocusIndicator = new qH(Rt(this.left.domNode, Ct(".codeOutput-focus-indicator-container", undefined, Ct(".codeOutput-focus-indicator.output-focus-indicator"))));
    this._register(ei(this.codeFocusIndicator.domNode, ir.CLICK, () => {
      if (this.currentCell) {
        this.currentCell.isInputCollapsed = !this.currentCell.isInputCollapsed;
      }
    }));
    this._register(ei(this.outputFocusIndicator.domNode, ir.CLICK, () => {
      if (this.currentCell) {
        this.currentCell.isOutputCollapsed = !this.currentCell.isOutputCollapsed;
      }
    }));
    this._register(ei(this.left.domNode, ir.DBLCLICK, o => {
      if (!this.currentCell || !this.notebookEditor.hasModel() || o.target !== this.left.domNode) {
        return;
      }
      if (o.offsetY < this.currentCell.layoutInfo.outputContainerOffset) {
        this.currentCell.isInputCollapsed = !this.currentCell.isInputCollapsed;
      } else {
        this.currentCell.isOutputCollapsed = !this.currentCell.isOutputCollapsed;
      }
    }));
    this._register(this.titleToolbar.onDidUpdateActions(() => {
      this.updateFocusIndicatorsForTitleMenu();
    }));
  }
  updateInternalLayoutNow(n) {
    if (n.cellKind === zd.Markup) {
      const e = this.notebookEditor.notebookOptions.computeIndicatorPosition(n.layoutInfo.totalHeight, n.layoutInfo.foldHintHeight, this.notebookEditor.textModel?.viewType);
      this.bottom.domNode.style.transform = `translateY(${e.bottomIndicatorTop + 6}px)`;
      this.left.setHeight(e.verticalIndicatorHeight);
      this.right.setHeight(e.verticalIndicatorHeight);
      this.codeFocusIndicator.setHeight(e.verticalIndicatorHeight - this.getIndicatorTopMargin() * 2 - n.layoutInfo.chatHeight);
    } else {
      const e = n;
      const t = this.notebookEditor.notebookOptions.getLayoutConfiguration();
      const i = this.notebookEditor.notebookOptions.computeBottomToolbarDimensions(this.notebookEditor.textModel?.viewType);
      const r = e.layoutInfo.codeIndicatorHeight + e.layoutInfo.outputIndicatorHeight + e.layoutInfo.commentHeight;
      this.left.setHeight(r);
      this.right.setHeight(r);
      this.codeFocusIndicator.setHeight(e.layoutInfo.codeIndicatorHeight);
      this.outputFocusIndicator.setHeight(Math.max(e.layoutInfo.outputIndicatorHeight - e.viewContext.notebookOptions.getLayoutConfiguration().focusIndicatorGap, 0));
      this.bottom.domNode.style.transform = `translateY(${e.layoutInfo.totalHeight - i.bottomToolbarGap - t.cellBottomMargin}px)`;
    }
    this.updateFocusIndicatorsForTitleMenu();
  }
  updateFocusIndicatorsForTitleMenu() {
    const n = (this.currentCell?.layoutInfo.chatHeight ?? 0) + this.getIndicatorTopMargin();
    this.left.domNode.style.transform = `translateY(${n}px)`;
    this.right.domNode.style.transform = `translateY(${n}px)`;
  }
  getIndicatorTopMargin() {
    const n = this.notebookEditor.notebookOptions.getLayoutConfiguration();
    if (this.titleToolbar.hasActions) {
      return n.editorToolbarHeight + n.cellTopMargin;
    } else {
      return n.cellTopMargin;
    }
  }
};
