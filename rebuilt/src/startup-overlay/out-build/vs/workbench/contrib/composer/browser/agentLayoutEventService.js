"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/agentLayoutEventService.js
// Offset: 33839771 (bundle byte offset)
// Size: 1669 bytes
yn();
rt();
Wt();
Er();
NEt = xi("agentLayoutEventService");
s$f = class Xcd extends at {
  constructor() {
    super(...arguments);
    this._onDidChangeActiveComposer = this._register(new Qe());
    this.onDidChangeActiveComposer = this._onDidChangeActiveComposer.event;
    this._onDidNavigateAgents = this._register(new Qe());
    this.onDidNavigateAgents = this._onDidNavigateAgents.event;
    this._onDidFinalizeNavigation = this._register(new Qe());
    this.onDidFinalizeNavigation = this._onDidFinalizeNavigation.event;
    this._onDidRequestFocusSearchInput = this._register(new Qe());
    this.onDidRequestFocusSearchInput = this._onDidRequestFocusSearchInput.event;
    this._isInNavigationMode = false;
    this._mruList = [];
  }
  static {
    this.MAX_MRU_SIZE = 10;
  }
  isInNavigationMode() {
    return this._isInNavigationMode;
  }
  enterNavigationMode() {
    this._isInNavigationMode = true;
  }
  exitNavigationMode() {
    this._isInNavigationMode = false;
  }
  fireDidChangeActiveComposer(e) {
    this.recordAgentVisit(e.currentComposerId, e.currentType);
    this._onDidChangeActiveComposer.fire(e);
  }
  fireDidNavigateAgents(e) {
    this._onDidNavigateAgents.fire(e);
  }
  fireDidFinalizeNavigation() {
    this._onDidFinalizeNavigation.fire({});
  }
  fireDidRequestFocusSearchInput() {
    this._onDidRequestFocusSearchInput.fire({});
  }
  getMRUList() {
    return this._mruList;
  }
  recordAgentVisit(e, t) {
    const i = this._mruList.findIndex(r => r.composerId === e);
    if (i !== -1) {
      this._mruList.splice(i, 1);
    }
    this._mruList.unshift({
      composerId: e,
      type: t,
      timestamp: Date.now()
    });
    if (this._mruList.length > Xcd.MAX_MRU_SIZE) {
      this._mruList.length = Xcd.MAX_MRU_SIZE;
    }
  }
  removeFromMRU(e) {
    const t = this._mruList.findIndex(i => i.composerId === e);
    if (t !== -1) {
      this._mruList.splice(t, 1);
    }
  }
};
Vi(NEt, s$f, 1);
