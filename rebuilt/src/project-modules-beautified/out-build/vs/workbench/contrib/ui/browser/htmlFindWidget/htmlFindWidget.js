"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/htmlFindWidget/htmlFindWidget.js
// Offset: 34146773 (bundle byte offset)
// Size: 3337 bytes
si();
pl();
Id();
ka();
UEt();
q7f = new Sn("htmlFindWidgetFocused", false);
lBa = class extends Grt {
  constructor(e, t, i, r, s) {
    super({
      showCommonFindToggles: true,
      checkImeCompletionState: e.checkImeCompletionState,
      enableSash: true,
      showResultCount: true,
      initialWidth: 419
    }, t, i, r, s);
    this._delegate = e;
    this._findWidgetFocused = q7f.bindTo(i);
    this._register(e.hasFindResult(o => {
      this.updateButtons(o);
      this.focusFindBox();
    }));
    this._register(e.onDidStopFind(() => {
      this.updateButtons(false);
    }));
  }
  async _getResultCount() {
    return this._delegate.getResultCount();
  }
  find(e) {
    const t = this.inputValue;
    if (t) {
      this._delegate.find(t, e);
      this.updateResultCount();
    }
  }
  hide(e = true) {
    super.hide(e);
    this._delegate.stopFind(true);
    this._delegate.focus();
  }
  _onInputChanged() {
    const e = this.inputValue;
    if (e) {
      this._delegate.updateFind(e, {
        isRegex: this._getRegexValue(),
        isCaseSensitive: this._getCaseSensitiveValue(),
        isWholeWord: this._getWholeWordValue()
      });
    } else {
      this._delegate.stopFind(false);
    }
    return false;
  }
  _onFocusTrackerFocus() {
    this._findWidgetFocused.set(true);
  }
  _onFocusTrackerBlur() {
    this._findWidgetFocused.reset();
  }
  _onFindInputFocusTrackerFocus() {}
  _onFindInputFocusTrackerBlur() {}
  findFirst() {
    const e = this.inputValue;
    if (e) {
      this._delegate.find(e, false);
    }
  }
  getSearchString() {
    return this.inputValue;
  }
  getSearchOptions() {
    return {
      isRegex: this._getRegexValue(),
      isCaseSensitive: this._getCaseSensitiveValue(),
      isWholeWord: this._getWholeWordValue()
    };
  }
};
lBa = __decorate([__param(1, sy), __param(2, wi), __param(3, Kc), __param(4, mo)], lBa);
