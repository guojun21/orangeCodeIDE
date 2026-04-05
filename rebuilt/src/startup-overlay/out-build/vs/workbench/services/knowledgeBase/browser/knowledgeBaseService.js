"use strict";

// Module: out-build/vs/workbench/services/knowledgeBase/browser/knowledgeBaseService.js
// Offset: 30366480 (bundle byte offset)
// Size: 6465 bytes
Wt();
rt();
Er();
Vw();
gT();
sB();
Dd();
Rb();
t0a();
yn();
jkt = xi("knowledgeBaseService");
n0a = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this.gitContextService = e;
    this.cursorAuthenticationService = t;
    this.reactiveStorageService = i;
    this.aiClientService = r;
    this.aiService = s;
    this._onDidChangeItems = this._register(new Qe());
    this.onDidChangeItems = this._onDidChangeItems.event;
    this._cachedGitUpstreamURL = undefined;
    [this.state, this.setState] = v3({
      items: [],
      isLoading: false
    });
    this.cursorAuthenticationService.addLoginChangedListener(async () => {
      this._cachedGitUpstreamURL = undefined;
      await this.refresh(true);
    });
    this.refresh(true);
    this.maybeAddOldUserRules();
  }
  get items() {
    return this.state.items;
  }
  get isLoading() {
    return this.state.isLoading;
  }
  dispose() {
    super.dispose();
  }
  async getGitUpstreamUrl() {
    if (this._cachedGitUpstreamURL === undefined) {
      try {
        const e = await this.gitContextService.getGitUpstreamURL();
        this._cachedGitUpstreamURL = e;
      } catch (e) {
        console.error("[KnowledgeBaseService] Error fetching git upstream URL:", e);
        this._cachedGitUpstreamURL = undefined;
      }
    }
    return this._cachedGitUpstreamURL ?? undefined;
  }
  async refresh(e = false) {
    this.setState("isLoading", true);
    try {
      const t = await this.aiClientService.aiClient();
      const i = await this.getGitUpstreamUrl();
      const s = (await t.knowledgeBaseList({
        gitOrigin: i,
        limit: 100
      })).allResults.map(o => ({
        id: o.id ?? "",
        title: o.title ?? "",
        knowledge: o.knowledge ?? "",
        createdAt: o.createdAt ?? undefined,
        isGenerated: o.isGenerated ?? false
      }));
      this.setState({
        items: s,
        isLoading: false
      });
      this.notifyItemsChanged();
      console.log("[KnowledgeBaseService] Successfully refreshed knowledge base:", s.length, "items");
    } catch (t) {
      console.error("[KnowledgeBaseService] Failed to fetch knowledge:", t);
      this.setState("isLoading", false);
    }
  }
  async addItem(e, t, i) {
    try {
      const r = await this.aiClientService.aiClient();
      const s = await this.getGitUpstreamUrl();
      const o = await r.knowledgeBaseAdd({
        title: e.trim() || "[Untitled]",
        knowledge: t,
        gitOrigin: s,
        composerId: i
      });
      const a = {
        id: o.id ?? "",
        title: e.trim() || "[Untitled]",
        knowledge: t,
        createdAt: new Date().toISOString(),
        isGenerated: !!i
      };
      this.setState("items", l => [a, ...l]);
      this.notifyItemsChanged();
      console.log("[KnowledgeBaseService] Successfully added knowledge item:", o.id);
      return o.id;
    } catch (r) {
      console.error("[KnowledgeBaseService] Failed to add knowledge:", r);
      throw r;
    }
  }
  async updateItem(e, t, i) {
    const r = this.state.items.find(o => o.id === e);
    if (!r) {
      throw new Error("Knowledge item not found");
    }
    const s = {
      ...r
    };
    this.setState("items", o => o.map(a => a.id === e ? {
      ...a,
      title: t.trim() || "[Untitled]",
      knowledge: i
    } : a));
    this.notifyItemsChanged();
    try {
      if (!(await (await this.aiClientService.aiClient()).knowledgeBaseUpdate({
        id: e,
        title: t.trim() || "[Untitled]",
        knowledge: i
      })).success) {
        throw new Error("Failed to update knowledge item");
      }
      console.log("[KnowledgeBaseService] Successfully updated knowledge item:", e);
    } catch (o) {
      console.error("[KnowledgeBaseService] Failed to update knowledge:", o);
      this.setState("items", a => a.map(l => l.id === e ? s : l));
      this.notifyItemsChanged();
      throw o;
    }
  }
  async removeItem(e) {
    const t = this.state.items.find(i => i.id === e);
    if (t) {
      this.setState("items", i => i.filter(r => r.id !== e));
      this.notifyItemsChanged();
      try {
        await (await this.aiClientService.aiClient()).knowledgeBaseRemove({
          id: e
        });
        console.log("[KnowledgeBaseService] Successfully removed knowledge item:", e);
      } catch (i) {
        console.error("[KnowledgeBaseService] Failed to delete knowledge:", i);
        this.setState("items", r => [...r, t].sort((s, o) => (s.createdAt ?? "") < (o.createdAt ?? "") ? 1 : -1));
        this.notifyItemsChanged();
        throw i;
      }
    }
  }
  async removeAll() {
    const e = [...this.state.items];
    if (e.length !== 0) {
      this.setState("items", []);
      this.notifyItemsChanged();
      try {
        const t = await this.aiClientService.aiClient();
        await Promise.all(e.map(i => t.knowledgeBaseRemove({
          id: i.id
        })));
        console.log("[KnowledgeBaseService] Successfully removed all knowledge items");
      } catch (t) {
        console.error("[KnowledgeBaseService] Failed to delete all knowledge:", t);
        this.setState("items", e);
        this.notifyItemsChanged();
        throw t;
      }
    }
  }
  addOptimisticMemory(e, t) {
    const r = {
      id: `temp-memory-${Date.now()}`,
      title: "Generated Memory",
      knowledge: e,
      createdAt: new Date().toISOString(),
      isGenerated: true
    };
    this.setState("items", s => [r, ...s]);
    this.notifyItemsChanged();
  }
  notifyItemsChanged() {
    this._onDidChangeItems.fire(this.state.items.map(e => ({
      ...e
    })));
  }
  async maybeAddOldUserRules() {
    const e = this.aiService.getPersonalContext();
    if (!!e && e.trim() !== "") {
      try {
        const t = await this.aiClientService.aiClient();
        const i = await this.getGitUpstreamUrl();
        await t.knowledgeBaseAdd({
          title: "Migrated User Rules",
          knowledge: e,
          gitOrigin: i
        });
        console.log("[KnowledgeBaseService Migration] Successfully migrated old user rules");
      } catch (t) {
        console.error("[KnowledgeBaseService Migration] Failed to migrate old user rules:", t);
      }
    }
  }
};
n0a = __decorate([__param(0, AE), __param(1, wg), __param(2, ku), __param(3, Rwi), __param(4, Jv)], n0a);
Vi(jkt, n0a, 1);
