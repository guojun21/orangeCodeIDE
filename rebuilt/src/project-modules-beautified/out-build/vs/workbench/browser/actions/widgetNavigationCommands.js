"use strict";

// Module: out-build/vs/workbench/browser/actions/widgetNavigationCommands.js
// Offset: 33220229 (bundle byte offset)
// Size: 1787 bytes
si();
Hw();
Rf();
rt();
Ac();
jr();
Ei();
kTa = new Sn("navigableContainerFocused", false);
Srt = class {
  static {
    STa = this;
  }
  static {
    this.ID = "workbench.contrib.navigableContainerManager";
  }
  constructor(e, t, i) {
    this.logService = t;
    this.configurationService = i;
    this.containers = new Set();
    this.focused = kTa.bindTo(e);
    STa.INSTANCE = this;
  }
  dispose() {
    this.containers.clear();
    this.focused.reset();
    STa.INSTANCE = undefined;
  }
  get debugEnabled() {
    return this.configurationService.getValue("workbench.navigibleContainer.enableDebug");
  }
  log(e, ...t) {
    if (this.debugEnabled) {
      this.logService.debug(e, ...t);
    }
  }
  static register(e) {
    const t = this.INSTANCE;
    if (t) {
      t.containers.add(e);
      t.log("NavigableContainerManager.register", e.name);
      return H_(idy(e.focusNotifiers, i => {
        if (i) {
          t.log("NavigableContainerManager.focus", e.name);
          t.focused.set(true);
          t.lastContainer = e;
        } else {
          t.log("NavigableContainerManager.blur", e.name, t.lastContainer?.name);
          if (t.lastContainer === e) {
            t.focused.set(false);
            t.lastContainer = undefined;
          }
        }
      }, (i, r) => {
        t.log("NavigableContainerManager.partFocusChange", e.name, i, r);
      }), $i(() => {
        t.containers.delete(e);
        t.log("NavigableContainerManager.unregister", e.name, t.lastContainer?.name);
        if (t.lastContainer === e) {
          t.focused.set(false);
          t.lastContainer = undefined;
        }
      }));
    } else {
      return at.None;
    }
  }
  static getActive() {
    return this.INSTANCE?.lastContainer;
  }
};
Srt = STa = __decorate([__param(0, wi), __param(1, Rr), __param(2, Fn)], Srt);
Hc(Srt.ID, Srt, 1);
qo.registerCommandAndKeybindingRule({
  id: "widgetNavigation.focusPrevious",
  weight: 200,
  when: Ee.and(kTa, Ee.or(D1?.negate(), iWl)),
  primary: 2064,
  handler: () => {
    Srt.getActive()?.focusPreviousWidget();
  }
});
qo.registerCommandAndKeybindingRule({
  id: "widgetNavigation.focusNext",
  weight: 200,
  when: Ee.and(kTa, Ee.or(D1?.negate(), rWl)),
  primary: 2066,
  handler: () => {
    Srt.getActive()?.focusNextWidget();
  }
});
