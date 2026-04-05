"use strict";

// Module: out-build/vs/editor/browser/controller/editContext/textArea/textAreaEditContextState.js
// Offset: 1575442 (bundle byte offset)
// Size: 4057 bytes
oa();
Qoe = false;
_W = class pNi {
  static {
    this.EMPTY = new pNi("", 0, 0, null, undefined);
  }
  constructor(e, t, i, r, s) {
    this.value = e;
    this.selectionStart = t;
    this.selectionEnd = i;
    this.selection = r;
    this.newlineCountBeforeSelection = s;
  }
  toString() {
    return `[ <${this.value}>, selectionStart: ${this.selectionStart}, selectionEnd: ${this.selectionEnd}]`;
  }
  static readFromTextArea(e, t) {
    const i = e.getValue();
    const r = e.getSelectionStart();
    const s = e.getSelectionEnd();
    let o;
    if (t) {
      const a = i.substring(0, r);
      const l = t.value.substring(0, t.selectionStart);
      if (a === l) {
        o = t.newlineCountBeforeSelection;
      }
    }
    return new pNi(i, r, s, null, o);
  }
  collapseSelection() {
    if (this.selectionStart === this.value.length) {
      return this;
    } else {
      return new pNi(this.value, this.value.length, this.value.length, null, undefined);
    }
  }
  isWrittenToTextArea(e, t) {
    const i = this.value === e.getValue();
    if (t) {
      return this.selectionStart === e.getSelectionStart() && this.selectionEnd === e.getSelectionEnd() && i;
    } else {
      return i;
    }
  }
  writeToTextArea(e, t, i) {
    if (Qoe) {
      console.log(`writeToTextArea ${e}: ${this.toString()}`);
    }
    t.setValue(e, this.value);
    if (i) {
      t.setSelectionRange(e, this.selectionStart, this.selectionEnd);
    }
  }
  deduceEditorPosition(e) {
    if (e <= this.selectionStart) {
      const r = this.value.substring(e, this.selectionStart);
      return this._finishDeduceEditorPosition(this.selection?.getStartPosition() ?? null, r, -1);
    }
    if (e >= this.selectionEnd) {
      const r = this.value.substring(this.selectionEnd, e);
      return this._finishDeduceEditorPosition(this.selection?.getEndPosition() ?? null, r, 1);
    }
    const t = this.value.substring(this.selectionStart, e);
    if (t.indexOf("…") === -1) {
      return this._finishDeduceEditorPosition(this.selection?.getStartPosition() ?? null, t, 1);
    }
    const i = this.value.substring(e, this.selectionEnd);
    return this._finishDeduceEditorPosition(this.selection?.getEndPosition() ?? null, i, -1);
  }
  _finishDeduceEditorPosition(e, t, i) {
    let r = 0;
    let s = -1;
    while ((s = t.indexOf(`
`, s + 1)) !== -1) {
      r++;
    }
    return [e, i * t.length, r];
  }
  static deduceInput(e, t, i) {
    if (!e) {
      return {
        text: "",
        replacePrevCharCnt: 0,
        replaceNextCharCnt: 0,
        positionDelta: 0
      };
    }
    if (Qoe) {
      console.log("------------------------deduceInput");
      console.log(`PREVIOUS STATE: ${e.toString()}`);
      console.log(`CURRENT STATE: ${t.toString()}`);
    }
    const r = Math.min(voe(e.value, t.value), e.selectionStart, t.selectionStart);
    const s = Math.min(xze(e.value, t.value), e.value.length - e.selectionEnd, t.value.length - t.selectionEnd);
    const o = e.value.substring(r, e.value.length - s);
    const a = t.value.substring(r, t.value.length - s);
    const l = e.selectionStart - r;
    const u = e.selectionEnd - r;
    const d = t.selectionStart - r;
    const m = t.selectionEnd - r;
    if (Qoe) {
      console.log(`AFTER DIFFING PREVIOUS STATE: <${o}>, selectionStart: ${l}, selectionEnd: ${u}`);
      console.log(`AFTER DIFFING CURRENT STATE: <${a}>, selectionStart: ${d}, selectionEnd: ${m}`);
    }
    if (d === m) {
      const g = e.selectionStart - r;
      if (Qoe) {
        console.log(`REMOVE PREVIOUS: ${g} chars`);
      }
      return {
        text: a,
        replacePrevCharCnt: g,
        replaceNextCharCnt: 0,
        positionDelta: 0
      };
    }
    const p = u - l;
    return {
      text: a,
      replacePrevCharCnt: p,
      replaceNextCharCnt: 0,
      positionDelta: 0
    };
  }
  static deduceAndroidCompositionInput(e, t) {
    if (!e) {
      return {
        text: "",
        replacePrevCharCnt: 0,
        replaceNextCharCnt: 0,
        positionDelta: 0
      };
    }
    if (Qoe) {
      console.log("------------------------deduceAndroidCompositionInput");
      console.log(`PREVIOUS STATE: ${e.toString()}`);
      console.log(`CURRENT STATE: ${t.toString()}`);
    }
    if (e.value === t.value) {
      return {
        text: "",
        replacePrevCharCnt: 0,
        replaceNextCharCnt: 0,
        positionDelta: t.selectionEnd - e.selectionEnd
      };
    }
    const i = Math.min(voe(e.value, t.value), e.selectionEnd);
    const r = Math.min(xze(e.value, t.value), e.value.length - e.selectionEnd);
    const s = e.value.substring(i, e.value.length - r);
    const o = t.value.substring(i, t.value.length - r);
    const a = e.selectionStart - i;
    const l = e.selectionEnd - i;
    const u = t.selectionStart - i;
    const d = t.selectionEnd - i;
    if (Qoe) {
      console.log(`AFTER DIFFING PREVIOUS STATE: <${s}>, selectionStart: ${a}, selectionEnd: ${l}`);
      console.log(`AFTER DIFFING CURRENT STATE: <${o}>, selectionStart: ${u}, selectionEnd: ${d}`);
    }
    return {
      text: o,
      replacePrevCharCnt: l,
      replaceNextCharCnt: s.length - l,
      positionDelta: d - o.length
    };
  }
  static fromScreenReaderContentState(e) {
    return new pNi(e.value, e.selectionStart, e.selectionEnd, e.selection, e.newlineCountBeforeSelection);
  }
};
