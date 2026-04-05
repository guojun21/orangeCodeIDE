"use strict";

// Module: out-build/vs/workbench/services/update/browser/updateNotificationService.js
// Offset: 33800754 (bundle byte offset)
// Size: 3341 bytes
rt();
Er();
Wt();
Tw();
rf();
kr();
Vki = xi("updateNotificationService");
oDa = class extends at {
  constructor(e) {
    super();
    this.storageService = e;
    this.showing = this._register(new j_(false));
    this.version = this._register(new j_(undefined));
    this.shouldShowReleaseNotes = this._register(new j_(false));
    this.lastUpdateHiddenTimeInUnixSeconds = this._register(hm(this.storageService, "lastUpdateHiddenTimeInUnixSeconds"));
    this.lastUpdateHiddenVersion = this._register(hm(this.storageService, "lastUpdateHiddenVersion"));
    this.lastPromptTime = this._register(hm(this.storageService, "updatePromptLastPromptTime"));
    this.promptsShownForVersion = this._register(hm(this.storageService, "updatePromptPromptsShownForVersion"));
    this.promptsShownToday = this._register(hm(this.storageService, "updatePromptPromptsShownToday"));
    this.promptsShownTodayDate = this._register(hm(this.storageService, "updatePromptPromptsShownTodayDate"));
    this.snoozedUntilTime = this._register(hm(this.storageService, "updatePromptSnoozedUntilTime"));
    this.forceUpdate = this._register(hm(this.storageService, "updatePromptForceUpdate"));
  }
  setShowing(e) {
    if (this.showing.value !== e) {
      this.showing.change(e);
    }
  }
  setVersion(e) {
    if (this.version.value !== e) {
      this.version.change(e);
    }
  }
  setShouldShowReleaseNotes(e) {
    if (this.shouldShowReleaseNotes.value !== e) {
      this.shouldShowReleaseNotes.change(e);
    }
  }
  recordPromptShown(e) {
    const t = Date.now();
    const i = new Date().toISOString().slice(0, 10);
    if (this.promptsShownTodayDate.get() !== i) {
      this.promptsShownTodayDate.set(i, undefined);
      this.promptsShownToday.set(0, undefined);
    }
    this.lastPromptTime.set(t, undefined);
    this.promptsShownToday.set(this.promptsShownToday.get() + 1, undefined);
    const r = {
      ...this.promptsShownForVersion.get()
    };
    r[e] = (r[e] || 0) + 1;
    this.promptsShownForVersion.set(r, undefined);
  }
  setSnooze(e) {
    const t = Date.now() + e * 60 * 60 * 1000;
    this.snoozedUntilTime.set(t, undefined);
  }
  clearSnooze() {
    this.snoozedUntilTime.set(0, undefined);
  }
  shouldShowPrompt(e, t) {
    const i = Date.now();
    const r = new Date().toISOString().slice(0, 10);
    if (this.promptsShownTodayDate.get() !== r) {
      this.promptsShownTodayDate.set(r, undefined);
      this.promptsShownToday.set(0, undefined);
    }
    const s = this.snoozedUntilTime.get();
    if (s > 0 && i < s) {
      return false;
    }
    const o = this.lastPromptTime.get();
    return (!(o > 0) || !((i - o) / 3600000 < e.min_hours_between_prompts)) && !((this.promptsShownForVersion.get()[t] || 0) >= e.max_prompts_per_version) && !(this.promptsShownToday.get() >= e.max_prompts_per_day);
  }
  setForceUpdate(e) {
    this.forceUpdate.set(e, undefined);
  }
  cleanupOldVersionEntries(e) {
    const t = this.promptsShownForVersion.get();
    if (!t || typeof t != "object") {
      return;
    }
    const i = l => l.split(".").map(u => {
      const d = parseInt(u, 10);
      if (Number.isNaN(d)) {
        return 0;
      } else {
        return d;
      }
    });
    const r = i(e);
    const s = (l, u) => {
      for (let d = 0; d < Math.max(l.length, u.length); d++) {
        const m = l[d] ?? 0;
        const p = u[d] ?? 0;
        if (m < p) {
          return true;
        }
        if (m > p) {
          return false;
        }
      }
      return false;
    };
    const o = {};
    let a = false;
    for (const [l, u] of Object.entries(t)) {
      const d = i(l);
      if (!s(d, r) && l !== e) {
        o[l] = u;
      } else {
        a = true;
      }
    }
    if (a) {
      this.promptsShownForVersion.set(o, undefined);
    }
  }
};
oDa = __decorate([__param(0, Hi)], oDa);
Vi(Vki, oDa, 0);
