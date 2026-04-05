"use strict";

// Module: out-build/vs/editor/browser/controller/editContext/textArea/textAreaEditContextInput.js
// Offset: 1579499 (bundle byte offset)
// Size: 11633 bytes
Ay();
ri();
z$();
Tb();
dTc();
vr();
yn();
rt();
oa();
db();
zg();
jr();
VOn();
rAh();
(function (n) {
  n.Tap = "-monaco-textarea-synthetic-tap";
})(u3o ||= {});
sAh = class {
  constructor() {
    this._lastTypeTextLength = 0;
  }
  handleCompositionUpdate(n) {
    n = n || "";
    const e = {
      text: n,
      replacePrevCharCnt: this._lastTypeTextLength,
      replaceNextCharCnt: 0,
      positionDelta: 0
    };
    this._lastTypeTextLength = n.length;
    return e;
  }
};
d3o = class extends at {
  get textAreaState() {
    return this._textAreaState;
  }
  constructor(e, t, i, r, s, o) {
    super();
    this._host = e;
    this._textArea = t;
    this._OS = i;
    this._browser = r;
    this._accessibilityService = s;
    this._logService = o;
    this._onFocus = this._register(new Qe());
    this.onFocus = this._onFocus.event;
    this._onBlur = this._register(new Qe());
    this.onBlur = this._onBlur.event;
    this._onKeyDown = this._register(new Qe());
    this.onKeyDown = this._onKeyDown.event;
    this._onKeyUp = this._register(new Qe());
    this.onKeyUp = this._onKeyUp.event;
    this._onCut = this._register(new Qe());
    this.onCut = this._onCut.event;
    this._onPaste = this._register(new Qe());
    this.onPaste = this._onPaste.event;
    this._onType = this._register(new Qe());
    this.onType = this._onType.event;
    this._onCompositionStart = this._register(new Qe());
    this.onCompositionStart = this._onCompositionStart.event;
    this._onCompositionUpdate = this._register(new Qe());
    this.onCompositionUpdate = this._onCompositionUpdate.event;
    this._onCompositionEnd = this._register(new Qe());
    this.onCompositionEnd = this._onCompositionEnd.event;
    this._onSelectionChangeRequest = this._register(new Qe());
    this.onSelectionChangeRequest = this._onSelectionChangeRequest.event;
    this._asyncFocusGainWriteScreenReaderContent = this._register(new uo());
    this._asyncTriggerCut = this._register(new Hu(() => this._onCut.fire(), 0));
    this._textAreaState = _W.EMPTY;
    this._selectionChangeListener = null;
    if (this._accessibilityService.isScreenReaderOptimized()) {
      this.writeNativeTextAreaContent("ctor");
    }
    this._register(In.runAndSubscribe(this._accessibilityService.onDidChangeScreenReaderOptimized, () => {
      if (this._accessibilityService.isScreenReaderOptimized() && !this._asyncFocusGainWriteScreenReaderContent.value) {
        this._asyncFocusGainWriteScreenReaderContent.value = this._register(new Hu(() => this.writeNativeTextAreaContent("asyncFocusGain"), 0));
      } else {
        this._asyncFocusGainWriteScreenReaderContent.clear();
      }
    }));
    this._hasFocus = false;
    this._currentComposition = null;
    let a = null;
    this._register(this._textArea.onKeyDown(l => {
      const u = new vh(l);
      if (u.keyCode === 114 || this._currentComposition && u.keyCode === 1) {
        u.stopPropagation();
      }
      if (u.equals(9)) {
        u.preventDefault();
      }
      a = u;
      this._onKeyDown.fire(u);
    }));
    this._register(this._textArea.onKeyUp(l => {
      const u = new vh(l);
      this._onKeyUp.fire(u);
    }));
    this._register(this._textArea.onCompositionStart(l => {
      if (Qoe) {
        console.log("[compositionstart]", l);
      }
      const u = new sAh();
      if (this._currentComposition) {
        this._currentComposition = u;
        return;
      }
      this._currentComposition = u;
      if (this._OS === 2 && a && a.equals(114) && this._textAreaState.selectionStart === this._textAreaState.selectionEnd && this._textAreaState.selectionStart > 0 && this._textAreaState.value.substr(this._textAreaState.selectionStart - 1, 1) === l.data && (a.code === "ArrowRight" || a.code === "ArrowLeft")) {
        if (Qoe) {
          console.log("[compositionstart] Handling long press case on macOS + arrow key", l);
        }
        u.handleCompositionUpdate("x");
        this._onCompositionStart.fire({
          data: l.data
        });
        return;
      }
      if (this._browser.isAndroid) {
        this._onCompositionStart.fire({
          data: l.data
        });
        return;
      }
      this._onCompositionStart.fire({
        data: l.data
      });
    }));
    this._register(this._textArea.onCompositionUpdate(l => {
      if (Qoe) {
        console.log("[compositionupdate]", l);
      }
      const u = this._currentComposition;
      if (!u) {
        return;
      }
      if (this._browser.isAndroid) {
        const m = _W.readFromTextArea(this._textArea, this._textAreaState);
        const p = _W.deduceAndroidCompositionInput(this._textAreaState, m);
        this._textAreaState = m;
        this._onType.fire(p);
        this._onCompositionUpdate.fire(l);
        return;
      }
      const d = u.handleCompositionUpdate(l.data);
      this._textAreaState = _W.readFromTextArea(this._textArea, this._textAreaState);
      this._onType.fire(d);
      this._onCompositionUpdate.fire(l);
    }));
    this._register(this._textArea.onCompositionEnd(l => {
      if (Qoe) {
        console.log("[compositionend]", l);
      }
      const u = this._currentComposition;
      if (!u) {
        return;
      }
      this._currentComposition = null;
      if (this._browser.isAndroid) {
        const m = _W.readFromTextArea(this._textArea, this._textAreaState);
        const p = _W.deduceAndroidCompositionInput(this._textAreaState, m);
        this._textAreaState = m;
        this._onType.fire(p);
        this._onCompositionEnd.fire();
        return;
      }
      const d = u.handleCompositionUpdate(l.data);
      this._textAreaState = _W.readFromTextArea(this._textArea, this._textAreaState);
      this._onType.fire(d);
      this._onCompositionEnd.fire();
    }));
    this._register(this._textArea.onInput(l => {
      if (Qoe) {
        console.log("[input]", l);
      }
      this._textArea.setIgnoreSelectionChangeTime("received input event");
      if (this._currentComposition) {
        return;
      }
      const u = _W.readFromTextArea(this._textArea, this._textAreaState);
      const d = _W.deduceInput(this._textAreaState, u, this._OS === 2);
      if (d.replacePrevCharCnt !== 0 || d.text.length !== 1 || !d3(d.text.charCodeAt(0)) && d.text.charCodeAt(0) !== 127) {
        this._textAreaState = u;
        if (d.text !== "" || d.replacePrevCharCnt !== 0 || d.replaceNextCharCnt !== 0 || d.positionDelta !== 0) {
          this._onType.fire(d);
        }
      }
    }));
    this._register(this._textArea.onCut(l => {
      this._textArea.setIgnoreSelectionChangeTime("received cut event");
      this._ensureClipboardGetsEditorSelection(l);
      this._asyncTriggerCut.schedule();
    }));
    this._register(this._textArea.onCopy(l => {
      this._ensureClipboardGetsEditorSelection(l);
    }));
    this._register(this._textArea.onPaste(l => {
      this._textArea.setIgnoreSelectionChangeTime("received paste event");
      l.preventDefault();
      if (!l.clipboardData) {
        return;
      }
      let [u, d] = i3t.getTextData(l.clipboardData);
      if (u) {
        d = d || n3t.INSTANCE.get(u);
        this._onPaste.fire({
          text: u,
          metadata: d
        });
      }
    }));
    this._register(this._textArea.onFocus(() => {
      const l = this._hasFocus;
      this._setHasFocus(true);
      if (this._accessibilityService.isScreenReaderOptimized() && this._browser.isSafari && !l && this._hasFocus) {
        this._asyncFocusGainWriteScreenReaderContent.value ||= new Hu(() => this.writeNativeTextAreaContent("asyncFocusGain"), 0);
        this._asyncFocusGainWriteScreenReaderContent.value.schedule();
      }
    }));
    this._register(this._textArea.onBlur(() => {
      if (this._currentComposition) {
        this._currentComposition = null;
        this.writeNativeTextAreaContent("blurWithoutCompositionEnd");
        this._onCompositionEnd.fire();
      }
      this._setHasFocus(false);
    }));
    this._register(this._textArea.onSyntheticTap(() => {
      if (this._browser.isAndroid && this._currentComposition) {
        this._currentComposition = null;
        this.writeNativeTextAreaContent("tapWithoutCompositionEnd");
        this._onCompositionEnd.fire();
      }
    }));
  }
  _initializeFromTest() {
    this._hasFocus = true;
    this._textAreaState = _W.readFromTextArea(this._textArea, null);
  }
  _installSelectionChangeListener() {
    let e = 0;
    return ei(this._textArea.ownerDocument, "selectionchange", t => {
      d9e.onSelectionChange();
      if (!this._hasFocus || this._currentComposition || !this._browser.isChrome) {
        return;
      }
      const i = Date.now();
      const r = i - e;
      e = i;
      if (r < 5) {
        return;
      }
      const s = i - this._textArea.getIgnoreSelectionChangeTime();
      this._textArea.resetSelectionChangeTime();
      if (s < 100 || !this._textAreaState.selection) {
        return;
      }
      const o = this._textArea.getValue();
      if (this._textAreaState.value !== o) {
        return;
      }
      const a = this._textArea.getSelectionStart();
      const l = this._textArea.getSelectionEnd();
      if (this._textAreaState.selectionStart === a && this._textAreaState.selectionEnd === l) {
        return;
      }
      const u = this._textAreaState.deduceEditorPosition(a);
      const d = this._host.deduceModelPosition(u[0], u[1], u[2]);
      const m = this._textAreaState.deduceEditorPosition(l);
      const p = this._host.deduceModelPosition(m[0], m[1], m[2]);
      const g = new Vl(d.lineNumber, d.column, p.lineNumber, p.column);
      this._onSelectionChangeRequest.fire(g);
    });
  }
  dispose() {
    super.dispose();
    if (this._selectionChangeListener) {
      this._selectionChangeListener.dispose();
      this._selectionChangeListener = null;
    }
  }
  focusTextArea() {
    this._setHasFocus(true);
    this.refreshFocusState();
  }
  isFocused() {
    return this._hasFocus;
  }
  refreshFocusState() {
    this._setHasFocus(this._textArea.hasFocus());
  }
  _setHasFocus(e) {
    if (this._hasFocus !== e) {
      this._hasFocus = e;
      if (this._selectionChangeListener) {
        this._selectionChangeListener.dispose();
        this._selectionChangeListener = null;
      }
      if (this._hasFocus) {
        this._selectionChangeListener = this._installSelectionChangeListener();
      }
      if (this._hasFocus) {
        this.writeNativeTextAreaContent("focusgain");
      }
      if (this._hasFocus) {
        this._onFocus.fire();
      } else {
        this._onBlur.fire();
      }
    }
  }
  _setAndWriteTextAreaState(e, t) {
    if (!this._hasFocus) {
      t = t.collapseSelection();
    }
    if (!t.isWrittenToTextArea(this._textArea, this._hasFocus)) {
      this._logService.trace(`writeTextAreaState(reason: ${e})`);
    }
    t.writeToTextArea(e, this._textArea, this._hasFocus);
    this._textAreaState = t;
  }
  writeNativeTextAreaContent(e) {
    if ((!!this._accessibilityService.isScreenReaderOptimized() || e !== "render") && !this._currentComposition) {
      this._setAndWriteTextAreaState(e, this._host.getScreenReaderContent());
    }
  }
  _ensureClipboardGetsEditorSelection(e) {
    const t = this._host.getDataToCopy();
    const i = {
      version: 1,
      isFromEmptySelection: t.isFromEmptySelection,
      multicursorText: t.multicursorText,
      mode: t.mode
    };
    n3t.INSTANCE.set(this._browser.isFirefox ? t.text.replace(/\r\n/g, `
`) : t.text, i);
    e.preventDefault();
    if (e.clipboardData) {
      i3t.setTextData(e.clipboardData, t.text, t.html, i);
    }
  }
};
d3o = __decorate([__param(4, Cf), __param(5, Rr)], d3o);
oAh = class extends at {
  get ownerDocument() {
    return this._actual.ownerDocument;
  }
  constructor(n) {
    super();
    this._actual = n;
    this._onSyntheticTap = this._register(new Qe());
    this.onSyntheticTap = this._onSyntheticTap.event;
    this.onKeyDown = this._register(new Hg(this._actual, "keydown")).event;
    this.onKeyPress = this._register(new Hg(this._actual, "keypress")).event;
    this.onKeyUp = this._register(new Hg(this._actual, "keyup")).event;
    this.onCompositionStart = this._register(new Hg(this._actual, "compositionstart")).event;
    this.onCompositionUpdate = this._register(new Hg(this._actual, "compositionupdate")).event;
    this.onCompositionEnd = this._register(new Hg(this._actual, "compositionend")).event;
    this.onBeforeInput = this._register(new Hg(this._actual, "beforeinput")).event;
    this.onInput = this._register(new Hg(this._actual, "input")).event;
    this.onCut = this._register(new Hg(this._actual, "cut")).event;
    this.onCopy = this._register(new Hg(this._actual, "copy")).event;
    this.onPaste = this._register(new Hg(this._actual, "paste")).event;
    this.onFocus = this._register(new Hg(this._actual, "focus")).event;
    this.onBlur = this._register(new Hg(this._actual, "blur")).event;
    this._ignoreSelectionChangeTime = 0;
    this._register(this.onKeyDown(() => d9e.onKeyDown()));
    this._register(this.onBeforeInput(() => d9e.onBeforeInput()));
    this._register(this.onInput(() => d9e.onInput()));
    this._register(this.onKeyUp(() => d9e.onKeyUp()));
    this._register(ei(this._actual, u3o.Tap, () => this._onSyntheticTap.fire()));
  }
  hasFocus() {
    const n = Qze(this._actual);
    if (n) {
      return n.activeElement === this._actual;
    } else if (this._actual.isConnected) {
      return _C() === this._actual;
    } else {
      return false;
    }
  }
  setIgnoreSelectionChangeTime(n) {
    this._ignoreSelectionChangeTime = Date.now();
  }
  getIgnoreSelectionChangeTime() {
    return this._ignoreSelectionChangeTime;
  }
  resetSelectionChangeTime() {
    this._ignoreSelectionChangeTime = 0;
  }
  getValue() {
    return this._actual.value;
  }
  setValue(n, e) {
    const t = this._actual;
    if (t.value !== e) {
      this.setIgnoreSelectionChangeTime("setValue");
      t.value = e;
    }
  }
  getSelectionStart() {
    if (this._actual.selectionDirection === "backward") {
      return this._actual.selectionEnd;
    } else {
      return this._actual.selectionStart;
    }
  }
  getSelectionEnd() {
    if (this._actual.selectionDirection === "backward") {
      return this._actual.selectionStart;
    } else {
      return this._actual.selectionEnd;
    }
  }
  setSelectionRange(n, e, t) {
    const i = this._actual;
    let r = null;
    const s = Qze(i);
    if (s) {
      r = s.activeElement;
    } else {
      r = _C();
    }
    const o = As(r);
    const a = r === i;
    const l = i.selectionStart;
    const u = i.selectionEnd;
    if (a && l === e && u === t) {
      if (u3 && o.parent !== o) {
        i.focus();
      }
      return;
    }
    if (a) {
      this.setIgnoreSelectionChangeTime("setSelectionRange");
      i.setSelectionRange(e, t);
      if (u3 && o.parent !== o) {
        i.focus();
      }
      return;
    }
    try {
      const d = SiA(i);
      this.setIgnoreSelectionChangeTime("setSelectionRange");
      i.focus();
      i.setSelectionRange(e, t);
      kiA(i, d);
    } catch {}
  }
};
