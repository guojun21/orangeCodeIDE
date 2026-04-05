"use strict";

// Module: out-build/vs/editor/browser/widget/diffEditor/delegatingEditorImpl.js
// Offset: 2265433 (bundle byte offset)
// Size: 2593 bytes
yn();
rt();
BCh = class PGb extends at {
  constructor() {
    super(...arguments);
    this._id = ++PGb.idCounter;
    this._onDidDispose = this._register(new Qe());
    this.onDidDispose = this._onDidDispose.event;
  }
  static {
    this.idCounter = 0;
  }
  getId() {
    return this.getEditorType() + ":v2:" + this._id;
  }
  getVisibleColumnFromPosition(e) {
    return this._targetEditor.getVisibleColumnFromPosition(e);
  }
  getStatusbarColumn(e) {
    return this._targetEditor.getStatusbarColumn(e);
  }
  getPosition() {
    return this._targetEditor.getPosition();
  }
  setPosition(e, t = "api") {
    this._targetEditor.setPosition(e, t);
  }
  revealLine(e, t = 0) {
    this._targetEditor.revealLine(e, t);
  }
  revealLineInCenter(e, t = 0) {
    this._targetEditor.revealLineInCenter(e, t);
  }
  revealLineInCenterIfOutsideViewport(e, t = 0) {
    this._targetEditor.revealLineInCenterIfOutsideViewport(e, t);
  }
  revealLineNearTop(e, t = 0) {
    this._targetEditor.revealLineNearTop(e, t);
  }
  revealPosition(e, t = 0) {
    this._targetEditor.revealPosition(e, t);
  }
  revealPositionInCenter(e, t = 0) {
    this._targetEditor.revealPositionInCenter(e, t);
  }
  revealPositionInCenterIfOutsideViewport(e, t = 0) {
    this._targetEditor.revealPositionInCenterIfOutsideViewport(e, t);
  }
  revealPositionNearTop(e, t = 0) {
    this._targetEditor.revealPositionNearTop(e, t);
  }
  getSelection() {
    return this._targetEditor.getSelection();
  }
  getSelections() {
    return this._targetEditor.getSelections();
  }
  setSelection(e, t = "api") {
    this._targetEditor.setSelection(e, t);
  }
  setSelections(e, t = "api") {
    this._targetEditor.setSelections(e, t);
  }
  revealLines(e, t, i = 0) {
    this._targetEditor.revealLines(e, t, i);
  }
  revealLinesInCenter(e, t, i = 0) {
    this._targetEditor.revealLinesInCenter(e, t, i);
  }
  revealLinesInCenterIfOutsideViewport(e, t, i = 0) {
    this._targetEditor.revealLinesInCenterIfOutsideViewport(e, t, i);
  }
  revealLinesNearTop(e, t, i = 0) {
    this._targetEditor.revealLinesNearTop(e, t, i);
  }
  revealRange(e, t = 0, i = false, r = true) {
    this._targetEditor.revealRange(e, t, i, r);
  }
  revealRangeInCenter(e, t = 0) {
    this._targetEditor.revealRangeInCenter(e, t);
  }
  revealRangeInCenterIfOutsideViewport(e, t = 0) {
    this._targetEditor.revealRangeInCenterIfOutsideViewport(e, t);
  }
  revealRangeNearTop(e, t = 0) {
    this._targetEditor.revealRangeNearTop(e, t);
  }
  revealRangeNearTopIfOutsideViewport(e, t = 0) {
    this._targetEditor.revealRangeNearTopIfOutsideViewport(e, t);
  }
  revealRangeAtTop(e, t = 0) {
    this._targetEditor.revealRangeAtTop(e, t);
  }
  getSupportedActions() {
    return this._targetEditor.getSupportedActions();
  }
  focus() {
    this._targetEditor.focus();
  }
  trigger(e, t, i) {
    this._targetEditor.trigger(e, t, i);
  }
  createDecorationsCollection(e) {
    return this._targetEditor.createDecorationsCollection(e);
  }
  changeDecorations(e) {
    return this._targetEditor.changeDecorations(e);
  }
};
