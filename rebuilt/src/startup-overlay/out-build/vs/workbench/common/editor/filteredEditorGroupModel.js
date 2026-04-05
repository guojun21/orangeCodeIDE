"use strict";

// Module: out-build/vs/workbench/common/editor/filteredEditorGroupModel.js
// Offset: 31455155 (bundle byte offset)
// Size: 4099 bytes
yn();
rt();
tvu = class extends at {
  constructor(n) {
    super();
    this.model = n;
    this._onDidModelChange = this._register(new Qe());
    this.onDidModelChange = this._onDidModelChange.event;
    this._register(this.model.onDidModelChange(e => {
      const t = e.editorIndex ?? e.editor;
      if (t === undefined || !!this.filter(t)) {
        this._onDidModelChange.fire(e);
      }
    }));
  }
  get id() {
    return this.model.id;
  }
  get isLocked() {
    return this.model.isLocked;
  }
  get stickyCount() {
    return this.model.stickyCount;
  }
  get hasHadEditors() {
    return this.model.hasHadEditors;
  }
  get activeEditor() {
    if (this.model.activeEditor && this.filter(this.model.activeEditor)) {
      return this.model.activeEditor;
    } else {
      return null;
    }
  }
  get previewEditor() {
    if (this.model.previewEditor && this.filter(this.model.previewEditor)) {
      return this.model.previewEditor;
    } else {
      return null;
    }
  }
  get selectedEditors() {
    return this.model.selectedEditors.filter(n => this.filter(n));
  }
  isPinned(n) {
    return this.model.isPinned(n);
  }
  isTransient(n) {
    return this.model.isTransient(n);
  }
  isSticky(n) {
    return this.model.isSticky(n);
  }
  isActive(n) {
    return this.model.isActive(n);
  }
  isSelected(n) {
    return this.model.isSelected(n);
  }
  isFirst(n) {
    return this.model.isFirst(n, this.getEditors(1));
  }
  isLast(n) {
    return this.model.isLast(n, this.getEditors(1));
  }
  getEditors(n, e) {
    return this.model.getEditors(n, e).filter(i => this.filter(i));
  }
  findEditor(n, e) {
    const t = this.model.findEditor(n, e);
    if (t) {
      if (this.filter(t[1])) {
        return t;
      } else {
        return undefined;
      }
    }
  }
};
nvu = class extends tvu {
  get count() {
    return this.model.stickyCount;
  }
  getEditors(n, e) {
    if (e?.excludeSticky) {
      return [];
    } else if (n === 1) {
      return this.model.getEditors(1).slice(0, this.model.stickyCount);
    } else {
      return super.getEditors(n, e);
    }
  }
  isSticky(n) {
    return true;
  }
  getEditorByIndex(n) {
    if (n < this.count) {
      return this.model.getEditorByIndex(n);
    } else {
      return undefined;
    }
  }
  indexOf(n, e, t) {
    const i = this.model.indexOf(n, e, t);
    if (i < 0 || i >= this.model.stickyCount) {
      return -1;
    } else {
      return i;
    }
  }
  contains(n, e) {
    const t = this.model.indexOf(n, undefined, e);
    return t >= 0 && t < this.model.stickyCount;
  }
  filter(n) {
    return this.model.isSticky(n);
  }
};
ivu = class extends tvu {
  get count() {
    return this.model.count - this.model.stickyCount;
  }
  get stickyCount() {
    return 0;
  }
  isSticky(n) {
    return false;
  }
  getEditors(n, e) {
    if (n === 1) {
      return this.model.getEditors(1).slice(this.model.stickyCount);
    } else {
      return super.getEditors(n, e);
    }
  }
  getEditorByIndex(n) {
    if (n >= 0) {
      return this.model.getEditorByIndex(n + this.model.stickyCount);
    } else {
      return undefined;
    }
  }
  indexOf(n, e, t) {
    const i = this.model.indexOf(n, e, t);
    if (i < this.model.stickyCount || i >= this.model.count) {
      return -1;
    } else {
      return i - this.model.stickyCount;
    }
  }
  contains(n, e) {
    const t = this.model.indexOf(n, undefined, e);
    return t >= this.model.stickyCount && t < this.model.count;
  }
  filter(n) {
    return !this.model.isSticky(n);
  }
};
