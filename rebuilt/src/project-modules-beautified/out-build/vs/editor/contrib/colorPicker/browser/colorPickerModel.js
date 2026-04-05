"use strict";

// Module: out-build/vs/editor/contrib/colorPicker/browser/colorPickerModel.js
// Offset: 24737895 (bundle byte offset)
// Size: 2456 bytes
yn();
Zmg = class {
  get color() {
    return this._color;
  }
  set color(n) {
    if (!this._color.equals(n)) {
      this._color = n;
      this._onDidChangeColor.fire(n);
    }
  }
  get presentation() {
    return this.colorPresentations[this.presentationIndex];
  }
  get colorPresentations() {
    return this._colorPresentations;
  }
  set colorPresentations(n) {
    this._colorPresentations = n;
    if (this.presentationIndex > n.length - 1) {
      this.presentationIndex = 0;
    }
    this._onDidChangePresentation.fire(this.presentation);
  }
  constructor(n, e, t) {
    this.presentationIndex = t;
    this._onColorFlushed = new Qe();
    this.onColorFlushed = this._onColorFlushed.event;
    this._onDidChangeColor = new Qe();
    this.onDidChangeColor = this._onDidChangeColor.event;
    this._onDidChangePresentation = new Qe();
    this.onDidChangePresentation = this._onDidChangePresentation.event;
    this.originalColor = n;
    this._color = n;
    this._colorPresentations = e;
  }
  selectNextColorPresentation() {
    this.presentationIndex = (this.presentationIndex + 1) % this.colorPresentations.length;
    this.flushColor();
    this._onDidChangePresentation.fire(this.presentation);
  }
  guessColorPresentation(n, e) {
    let t = -1;
    for (let i = 0; i < this.colorPresentations.length; i++) {
      if (e.toLowerCase() === this.colorPresentations[i].label) {
        t = i;
        break;
      }
    }
    if (t === -1) {
      const i = e.split("(")[0].toLowerCase();
      for (let r = 0; r < this.colorPresentations.length; r++) {
        if (this.colorPresentations[r].label.toLowerCase().startsWith(i)) {
          t = r;
          break;
        }
      }
    }
    if (t !== -1 && t !== this.presentationIndex) {
      this.presentationIndex = t;
      this._onDidChangePresentation.fire(this.presentation);
    }
  }
  flushColor() {
    this._onColorFlushed.fire(this._color);
  }
};
