"use strict";

// Module: out-build/vs/editor/contrib/find/browser/findState.js
// Offset: 25159676 (bundle byte offset)
// Size: 4611 bytes
yn();
rt();
ts();
YUe();
(function (n) {
  n[n.NotSet = 0] = "NotSet";
  n[n.True = 1] = "True";
  n[n.False = 2] = "False";
})(hvg ||= {});
pgi = class extends at {
  get searchString() {
    return this._searchString;
  }
  get replaceString() {
    return this._replaceString;
  }
  get isRevealed() {
    return this._isRevealed;
  }
  get isReplaceRevealed() {
    return this._isReplaceRevealed;
  }
  get isRegex() {
    return yla(this._isRegexOverride, this._isRegex);
  }
  get wholeWord() {
    return yla(this._wholeWordOverride, this._wholeWord);
  }
  get matchCase() {
    return yla(this._matchCaseOverride, this._matchCase);
  }
  get preserveCase() {
    return yla(this._preserveCaseOverride, this._preserveCase);
  }
  get actualIsRegex() {
    return this._isRegex;
  }
  get actualWholeWord() {
    return this._wholeWord;
  }
  get actualMatchCase() {
    return this._matchCase;
  }
  get actualPreserveCase() {
    return this._preserveCase;
  }
  get searchScope() {
    return this._searchScope;
  }
  get matchesPosition() {
    return this._matchesPosition;
  }
  get matchesCount() {
    return this._matchesCount;
  }
  get currentMatch() {
    return this._currentMatch;
  }
  get isSearching() {
    return this._isSearching;
  }
  get filters() {
    return this._filters;
  }
  constructor() {
    super();
    this._onFindReplaceStateChange = this._register(new Qe());
    this.onFindReplaceStateChange = this._onFindReplaceStateChange.event;
    this._searchString = "";
    this._replaceString = "";
    this._isRevealed = false;
    this._isReplaceRevealed = false;
    this._isRegex = false;
    this._isRegexOverride = 0;
    this._wholeWord = false;
    this._wholeWordOverride = 0;
    this._matchCase = false;
    this._matchCaseOverride = 0;
    this._preserveCase = false;
    this._preserveCaseOverride = 0;
    this._searchScope = null;
    this._matchesPosition = 0;
    this._matchesCount = 0;
    this._currentMatch = null;
    this._loop = true;
    this._isSearching = false;
    this._filters = null;
  }
  changeMatchInfo(n, e, t) {
    const i = {
      moveCursor: false,
      updateHistory: false,
      searchString: false,
      replaceString: false,
      isRevealed: false,
      isReplaceRevealed: false,
      isRegex: false,
      wholeWord: false,
      matchCase: false,
      preserveCase: false,
      searchScope: false,
      matchesPosition: false,
      matchesCount: false,
      currentMatch: false,
      loop: false,
      isSearching: false,
      filters: false
    };
    let r = false;
    if (e === 0) {
      n = 0;
    }
    if (n > e) {
      n = e;
    }
    if (this._matchesPosition !== n) {
      this._matchesPosition = n;
      i.matchesPosition = true;
      r = true;
    }
    if (this._matchesCount !== e) {
      this._matchesCount = e;
      i.matchesCount = true;
      r = true;
    }
    if (typeof t !== "undefined") {
      if (!Zt.equalsRange(this._currentMatch, t)) {
        this._currentMatch = t;
        i.currentMatch = true;
        r = true;
      }
    }
    if (r) {
      this._onFindReplaceStateChange.fire(i);
    }
  }
  change(n, e, t = true) {
    const i = {
      moveCursor: e,
      updateHistory: t,
      searchString: false,
      replaceString: false,
      isRevealed: false,
      isReplaceRevealed: false,
      isRegex: false,
      wholeWord: false,
      matchCase: false,
      preserveCase: false,
      searchScope: false,
      matchesPosition: false,
      matchesCount: false,
      currentMatch: false,
      loop: false,
      isSearching: false,
      filters: false
    };
    let r = false;
    const s = this.isRegex;
    const o = this.wholeWord;
    const a = this.matchCase;
    const l = this.preserveCase;
    if (typeof n.searchString !== "undefined" && this._searchString !== n.searchString) {
      this._searchString = n.searchString;
      i.searchString = true;
      r = true;
    }
    if (typeof n.replaceString !== "undefined" && this._replaceString !== n.replaceString) {
      this._replaceString = n.replaceString;
      i.replaceString = true;
      r = true;
    }
    if (typeof n.isRevealed !== "undefined" && this._isRevealed !== n.isRevealed) {
      this._isRevealed = n.isRevealed;
      i.isRevealed = true;
      r = true;
    }
    if (typeof n.isReplaceRevealed !== "undefined" && this._isReplaceRevealed !== n.isReplaceRevealed) {
      this._isReplaceRevealed = n.isReplaceRevealed;
      i.isReplaceRevealed = true;
      r = true;
    }
    if (typeof n.isRegex !== "undefined") {
      this._isRegex = n.isRegex;
    }
    if (typeof n.wholeWord !== "undefined") {
      this._wholeWord = n.wholeWord;
    }
    if (typeof n.matchCase !== "undefined") {
      this._matchCase = n.matchCase;
    }
    if (typeof n.preserveCase !== "undefined") {
      this._preserveCase = n.preserveCase;
    }
    if (typeof n.searchScope !== "undefined") {
      if (!n.searchScope?.every(u => this._searchScope?.some(d => !Zt.equalsRange(d, u)))) {
        this._searchScope = n.searchScope;
        i.searchScope = true;
        r = true;
      }
    }
    if (typeof n.loop !== "undefined" && this._loop !== n.loop) {
      this._loop = n.loop;
      i.loop = true;
      r = true;
    }
    if (typeof n.isSearching !== "undefined" && this._isSearching !== n.isSearching) {
      this._isSearching = n.isSearching;
      i.isSearching = true;
      r = true;
    }
    if (typeof n.filters !== "undefined") {
      if (this._filters) {
        this._filters.update(n.filters);
      } else {
        this._filters = n.filters;
      }
      i.filters = true;
      r = true;
    }
    this._isRegexOverride = typeof n.isRegexOverride !== "undefined" ? n.isRegexOverride : 0;
    this._wholeWordOverride = typeof n.wholeWordOverride !== "undefined" ? n.wholeWordOverride : 0;
    this._matchCaseOverride = typeof n.matchCaseOverride !== "undefined" ? n.matchCaseOverride : 0;
    this._preserveCaseOverride = typeof n.preserveCaseOverride !== "undefined" ? n.preserveCaseOverride : 0;
    if (s !== this.isRegex) {
      r = true;
      i.isRegex = true;
    }
    if (o !== this.wholeWord) {
      r = true;
      i.wholeWord = true;
    }
    if (a !== this.matchCase) {
      r = true;
      i.matchCase = true;
    }
    if (l !== this.preserveCase) {
      r = true;
      i.preserveCase = true;
    }
    if (r) {
      this._onFindReplaceStateChange.fire(i);
    }
  }
  canNavigateBack() {
    return this.canNavigateInLoop() || this.matchesPosition !== 1;
  }
  canNavigateForward() {
    return this.canNavigateInLoop() || this.matchesPosition < this.matchesCount;
  }
  canNavigateInLoop() {
    return this._loop || this.matchesCount >= mNe;
  }
};
