"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/browserAutomationService.js
// Offset: 30156360 (bundle byte offset)
// Size: 6057 bytes
yn();
rt();
Uc();
Bc();
hs();
si();
Er();
Wt();
So();
kr();
_u();
Op();
UCf();
qkt = xi("browserAutomationService");
U_a = class extends at {
  static {
    Ume = this;
  }
  static {
    this.STORAGE_KEY_LAST_URL = "browserAutomation.lastUrl";
  }
  static {
    this.STORAGE_KEY_ZOOM_LEVEL = "browserAutomation.zoomLevel";
  }
  static {
    this.STORAGE_KEY_HOST_ZOOM = "browserAutomation.hostZoomLevels";
  }
  static {
    this.STORAGE_KEY_BOOKMARKS = "browserAutomation.bookmarks";
  }
  static {
    this.STORAGE_KEY_HISTORY = "browserAutomation.history";
  }
  static {
    this.MAX_HISTORY_ENTRIES = 500;
  }
  constructor(e, t, i, r, s, o) {
    super();
    this.commandService = e;
    this.notificationService = t;
    this.storageService = i;
    this.extensionService = r;
    this.contextKeyService = s;
    this.lifecycleService = o;
    this._onNavigateRequest = this._register(new Qe());
    this.onNavigateRequest = this._onNavigateRequest.event;
    this._onDevToolsRequest = this._register(new Qe());
    this.onDevToolsRequest = this._onDevToolsRequest.event;
    this._pendingDevToolsRequest = false;
    this._onDidAddBookmark = this._register(new Qe());
    this.onDidAddBookmark = this._onDidAddBookmark.event;
    this._onDidRemoveBookmark = this._register(new Qe());
    this.onDidRemoveBookmark = this._onDidRemoveBookmark.event;
    this._onDidReorderBookmarks = this._register(new Qe());
    this.onDidReorderBookmarks = this._onDidReorderBookmarks.event;
    this._onDidChangeBookmarkBar = this._register(new Qe());
    this.onDidChangeBookmarkBar = this._onDidChangeBookmarkBar.event;
    this._onDidChangeHistory = this._register(new Qe());
    this.onDidChangeHistory = this._onDidChangeHistory.event;
    this._settableEnabled = Ua("BrowserAutomationService.enabled", true);
    this.enabled = this._settableEnabled;
    this._settableCssStyleChanges = Ua("BrowserAutomationService.cssStyleChanges", []);
    this.cssStyleChanges = this._settableCssStyleChanges;
    this._enabledContextKey = $hu.bindTo(this.contextKeyService);
    this._enabledContextKey.set(this._settableEnabled.get());
    this.tabState = Ua("BrowserAutomationService.tabState", undefined);
  }
  getStorageKey(e, t) {
    if (e) {
      return `browserAutomation.${e}.${t}`;
    } else {
      return `browserAutomation.${t}`;
    }
  }
  getLastUrl(e) {
    return this.storageService.get(this.getStorageKey(e, "lastUrl"), 1);
  }
  saveLastUrl(e, t) {
    this.storageService.store(this.getStorageKey(t, "lastUrl"), e, 1, 1);
  }
  getSavedZoomLevel(e) {
    const t = this.storageService.getNumber(this.getStorageKey(e, "zoomLevel"), 1);
    if (t !== undefined) {
      return t;
    } else {
      return undefined;
    }
  }
  saveZoomLevel(e, t) {
    this.storageService.store(this.getStorageKey(t, "zoomLevel"), e, 1, 1);
  }
  getHostZoomLevel(e) {
    const t = this.storageService.get(Ume.STORAGE_KEY_HOST_ZOOM, 0);
    if (t) {
      try {
        const i = JSON.parse(t);
        if (typeof i[e] == "number") {
          return i[e];
        } else {
          return undefined;
        }
      } catch {
        return;
      }
    }
  }
  saveHostZoomLevel(e, t) {
    const i = this.storageService.get(Ume.STORAGE_KEY_HOST_ZOOM, 0);
    let r = {};
    if (i) {
      try {
        r = JSON.parse(i);
      } catch {
        r = {};
      }
    }
    if (t === 0) {
      delete r[e];
    } else {
      r[e] = t;
    }
    this.storageService.store(Ume.STORAGE_KEY_HOST_ZOOM, JSON.stringify(r), 0, 1);
  }
  getBookmarkBarItems(e = 1) {
    const t = this.storageService.get(Ume.STORAGE_KEY_BOOKMARKS, e);
    if (!t) {
      return [];
    }
    try {
      const i = JSON.parse(t);
      if (Array.isArray(i)) {
        return i;
      } else {
        return [];
      }
    } catch {
      return [];
    }
  }
  saveBookmarkBarItems(e, t = 1) {
    this.saveItems(e, t);
    this._onDidChangeBookmarkBar.fire();
  }
  createBookmarkFolder(e, t = 1) {
    return {
      type: "folder",
      id: Wr(),
      name: e,
      children: []
    };
  }
  getBookmarks(e = 1) {
    const t = this.getBookmarkBarItems(e);
    const i = [];
    for (const r of t) {
      if (jF(r)) {
        i.push(...r.children);
      } else {
        i.push(r);
      }
    }
    return i;
  }
  addBookmark(e, t, i, r, s = 1) {
    const o = this.getBookmarkBarItems(s);
    if (this.getBookmarks(s).findIndex(u => u.url === e) === -1) {
      const u = {
        url: e,
        title: t,
        favicon: i,
        timestamp: Date.now(),
        customName: r
      };
      o.push(u);
      this.saveItems(o, s);
      this._onDidAddBookmark.fire(u);
    }
  }
  removeBookmark(e, t = 1) {
    const i = this.getBookmarkBarItems(t);
    let r = false;
    const s = i.filter(o => !jF(o) && o.url === e ? (r = true, false) : true).map(o => {
      if (jF(o)) {
        const a = o.children.filter(l => l.url !== e);
        if (a.length !== o.children.length) {
          r = true;
          return {
            ...o,
            children: a
          };
        }
      }
      return o;
    });
    if (r) {
      this.saveItems(s, t);
      this._onDidRemoveBookmark.fire(e);
    }
  }
  reorderBookmarks(e, t = 1) {
    const r = this.getBookmarkBarItems(t).filter(jF);
    const s = new Set();
    for (const l of r) {
      for (const u of l.children) {
        s.add(u.url);
      }
    }
    const o = e.filter(l => !s.has(l.url));
    const a = [...o, ...r];
    this.saveItems(a, t);
    this._onDidReorderBookmarks.fire(o);
  }
  isBookmarked(e, t = 1) {
    return this.getBookmarkBarItems(t).some(r => jF(r) ? r.children.some(s => s.url === e) : r.url === e);
  }
  renameBookmark(e, t, i = 1) {
    const r = this.getBookmarkBarItems(i);
    let s;
    const o = r.map(a => {
      if (!jF(a) && a.url === e) {
        s = {
          ...a,
          customName: t
        };
        return s;
      }
      if (jF(a)) {
        const l = a.children.map(u => u.url === e ? (s = {
          ...u,
          customName: t
        }, s) : u);
        if (s) {
          return {
            ...a,
            children: l
          };
        }
      }
      return a;
    });
    if (s) {
      this.saveItems(o, i);
      this._onDidAddBookmark.fire(s);
    }
  }
  saveItems(e, t) {
    this.storageService.store(Ume.STORAGE_KEY_BOOKMARKS, JSON.stringify(e), t, 1);
  }
  getHistory() {
    const e = this.storageService.get(Ume.STORAGE_KEY_HISTORY, 0);
    if (!e) {
      return [];
    }
    try {
      const t = JSON.parse(e);
      if (Array.isArray(t)) {
        return t;
      } else {
        return [];
      }
    } catch {
      return [];
    }
  }
  addHistoryEntry(e, t, i) {
    if (!e) {
      return;
    }
    const r = this.getHistory();
    const s = r.findIndex(o => o.url === e);
    if (s !== -1) {
      const o = r[s];
      o.visitCount += 1;
      o.lastVisited = Date.now();
      if (t) {
        o.title = t;
      }
      if (i) {
        o.favicon = i;
      }
      r.splice(s, 1);
      r.unshift(o);
    } else {
      const o = {
        url: e,
        title: t || e,
        favicon: i || "",
        visitCount: 1,
        lastVisited: Date.now()
      };
      r.unshift(o);
    }
    if (r.length > Ume.MAX_HISTORY_ENTRIES) {
      r.sort((o, a) => a.lastVisited - o.lastVisited);
      r.length = Ume.MAX_HISTORY_ENTRIES;
    }
    this.storageService.store(Ume.STORAGE_KEY_HISTORY, JSON.stringify(r), 0, 1);
    this._onDidChangeHistory.fire();
  }
  removeHistoryEntry(e) {
    const t = this.getHistory();
    const i = t.filter(r => r.url !== e);
    if (i.length !== t.length) {
      this.storageService.store(Ume.STORAGE_KEY_HISTORY, JSON.stringify(i), 0, 1);
      this._onDidChangeHistory.fire();
    }
  }
  clearHistory() {
    this.storageService.store(Ume.STORAGE_KEY_HISTORY, JSON.stringify([]), 0, 1);
    this._onDidChangeHistory.fire();
  }
  requestNavigation(e, t) {
    this._onNavigateRequest.fire({
      url: e,
      targetBrowserId: t
    });
  }
  requestDevToolsOpen() {
    this._pendingDevToolsRequest = true;
    this._onDevToolsRequest.fire();
  }
  hasPendingDevToolsRequest() {
    return this._pendingDevToolsRequest;
  }
  clearPendingDevToolsRequest() {
    this._pendingDevToolsRequest = false;
  }
  setCssStyleChanges(e) {
    this._settableCssStyleChanges.set(e, undefined);
  }
};
U_a = Ume = __decorate([__param(0, fr), __param(1, ms), __param(2, Hi), __param(3, su), __param(4, wi), __param(5, ap)], U_a);
Vi(qkt, U_a, 1, 1);
