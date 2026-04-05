"use strict";

// Module: out-build/vs/workbench/services/agentData/browser/mentionsCapabilityService.js
// Offset: 28501257 (bundle byte offset)
// Size: 6533 bytes
iX();
cu();
zr();
Yr();
qg();
Dd();
ps();
IAa();
Vw();
uO();
Wu();
e5();
Byi();
Pf();
Nu();
O8A();
dMe = 25;
clu = class {
  constructor(n) {
    this.workspace = n;
    this.didInitializeAnythingQuickAccessCaches = false;
  }
  getWorkspaceServicesForWorkspace(n) {
    if (n) {
      try {
        return n.instantiationService.invokeFunction(e => {
          const t = r => {
            try {
              return e.get(r);
            } catch {
              return;
            }
          };
          return {
            anythingQuickAccessProvider: t(sqe) ?? (() => {
              if (this.createdAnythingQuickAccessProvider) {
                return this.createdAnythingQuickAccessProvider;
              }
              try {
                this.createdAnythingQuickAccessProvider = n.instantiationService.createInstance(sqe);
                return this.createdAnythingQuickAccessProvider;
              } catch {
                return;
              }
            })(),
            workspaceContextService: t(Lr),
            cursorRulesService: t(FJ),
            aiService: t(Jv),
            terminalService: t(Jb),
            historyService: t(ek),
            reactiveStorageService: t(ku),
            experimentService: t(Tl),
            environmentService: t(lg)
          };
        });
      } catch {
        return;
      }
    }
  }
  getWorkspaceServices() {
    return this.getWorkspaceServicesForWorkspace(this.workspace);
  }
  async getWorkspaceServicesWithFallback(n = []) {
    const e = this.getWorkspaceServices();
    if (!e || !this.workspace) {
      return {
        services: e,
        usedFallbackWorkspace: false
      };
    }
    if ((e.workspaceContextService?.getWorkspace().folders.length ?? 0) > 0) {
      return {
        services: e,
        usedFallbackWorkspace: false
      };
    }
    const i = this.workspace.instantiationService.invokeFunction(a => {
      try {
        return a.get(ypn);
      } catch {
        return;
      }
    });
    if (!i) {
      return {
        services: e,
        usedFallbackWorkspace: false
      };
    }
    const r = i.getDiagnostics();
    const s = new Set();
    const o = [];
    for (const a of n) {
      if (!s.has(a.id)) {
        s.add(a.id);
        o.push(a);
      }
    }
    for (const a of r.workspaces) {
      if (!s.has(a.workspaceId)) {
        s.add(a.workspaceId);
        o.push({
          id: a.workspaceId
        });
      }
    }
    for (const a of o) {
      if (a.id === this.workspace.workspaceIdentifier.id) {
        continue;
      }
      let l;
      try {
        l = await i.createWorkspaceReference(a);
        const u = this.getWorkspaceServicesForWorkspace(l.object);
        const d = u?.workspaceContextService?.getWorkspace().folders.length ?? 0;
        if (!u || d === 0) {
          l.dispose();
          continue;
        }
        return {
          services: u,
          dispose: () => l?.dispose(),
          usedFallbackWorkspace: true
        };
      } catch {
        l?.dispose();
      }
    }
    return {
      services: e,
      usedFallbackWorkspace: false
    };
  }
  buildFileMentionItems(n, e, t) {
    if (!e.workspaceContextService) {
      return [];
    }
    const i = [];
    const r = new Set();
    for (const s of t) {
      const o = s.resource;
      if (!o || !alu(o)) {
        continue;
      }
      const a = o.toString();
      if (r.has(a)) {
        continue;
      }
      r.add(a);
      const l = ca(o);
      const u = e.workspaceContextService.asRelativePath(Td(o));
      const d = e.workspaceContextService.asRelativePath(o);
      const m = u || undefined;
      i.push({
        id: `file:${a}`,
        label: l,
        rawText: d || o.path || l,
        type: "file",
        description: m,
        payload: {
          case: "fileSelection",
          uri: o.toJSON()
        }
      });
      if (i.length >= dMe) {
        break;
      }
    }
    if (!n && i.length < dMe && e.historyService) {
      for (const s of e.historyService.getHistory()) {
        const o = xq(s) ? s.resource : gp.getOriginalUri(s);
        if (!o || !alu(o)) {
          continue;
        }
        const a = o.toString();
        if (r.has(a)) {
          continue;
        }
        r.add(a);
        const l = ca(o);
        const u = e.workspaceContextService.asRelativePath(Td(o));
        const d = e.workspaceContextService.asRelativePath(o);
        const m = u || undefined;
        i.push({
          id: `file:${a}`,
          label: l,
          rawText: d || o.path || l,
          type: "file",
          description: m,
          payload: {
            case: "fileSelection",
            uri: o.toJSON()
          }
        });
        if (i.length >= dMe) {
          break;
        }
      }
    }
    return i;
  }
  buildFolderMentionItems(n, e, t) {
    if (!e.workspaceContextService) {
      return [];
    }
    const i = [];
    const r = new Set();
    for (const s of t) {
      const o = s.resource;
      if (!o || !alu(o)) {
        continue;
      }
      const a = Td(o);
      const u = e.workspaceContextService.asRelativePath(a) || ca(a);
      if (!u || r.has(u)) {
        continue;
      }
      r.add(u);
      const d = ca(a);
      const m = u;
      i.push({
        id: `folder:${u}`,
        label: d,
        rawText: u,
        type: "folder",
        description: m,
        payload: {
          case: "folderSelection",
          relativePath: u
        }
      });
      if (i.length >= dMe) {
        break;
      }
    }
    if (!n && i.length < dMe) {
      for (const s of e.workspaceContextService.getWorkspace().folders) {
        const o = s.uri;
        const l = e.workspaceContextService.asRelativePath(o) || s.name || ca(o);
        if (!!l && !r.has(l) && (r.add(l), i.push({
          id: `folder:${l}`,
          label: s.name || ca(o),
          rawText: l,
          type: "folder",
          description: l,
          payload: {
            case: "folderSelection",
            relativePath: l
          }
        }), i.length >= dMe)) {
          break;
        }
      }
    }
    return i;
  }
  async getSharedMentionFilePicks(n, e, t) {
    if (!e.anythingQuickAccessProvider) {
      return [];
    }
    if (!this.didInitializeAnythingQuickAccessCaches) {
      e.anythingQuickAccessProvider.initializeCaches();
      this.didInitializeAnythingQuickAccessCaches = true;
    }
    let i = await e.anythingQuickAccessProvider.getFilePicks(o8(n), new fu(), t);
    if (!n && i.length === 0) {
      i = await e.anythingQuickAccessProvider.getFilePicks(o8("."), new fu(), t);
    }
    return i;
  }
  async getDocMentionItems(n, e) {
    if (!e.reactiveStorageService || !e.aiService) {
      return [];
    }
    const t = e.reactiveStorageService.applicationUserPersistentStorage.personalDocs.map(s => s.identifier);
    const i = await e.aiService.availableDocs({
      additionalDocIdentifiers: t
    });
    const r = [];
    for (const s of i) {
      const o = s.docIdentifier;
      const a = s.metadata?.docName ?? "";
      if (!o || !a) {
        continue;
      }
      const l = s.metadata?.prefixUrl;
      if (olu(n, a, l) && (r.push({
        id: `doc:${o}`,
        label: a,
        type: "doc",
        description: s.metadata?.public ? "Official" : undefined,
        secondaryText: l,
        payload: {
          case: "docSelection",
          docId: o,
          name: a,
          url: l
        }
      }), r.length >= dMe)) {
        break;
      }
    }
    return r;
  }
  async getCursorRuleMentionItems(n, e) {
    if (!e.cursorRulesService) {
      return [];
    }
    const t = await e.cursorRulesService.getAllRules();
    const i = [];
    for (const r of t) {
      const s = r.filename;
      if (!s.endsWith(".mdc")) {
        continue;
      }
      const o = s.replace(/\.mdc$/i, "");
      if (olu(n, o, r.description) && (i.push({
        id: `cursor-rule:${s}`,
        label: o,
        type: "cursorRule",
        description: r.description,
        payload: {
          case: "cursorRule",
          filename: s
        }
      }), i.length >= dMe)) {
        break;
      }
    }
    return i;
  }
  async getTerminalMentionItems(n, e) {
    if (!e.terminalService) {
      return [];
    }
    const t = [];
    const i = new Set();
    for (const r of e.terminalService.instances) {
      const s = r.resource;
      if (!s) {
        continue;
      }
      const o = s.toString();
      if (i.has(o)) {
        continue;
      }
      i.add(o);
      const a = r.title || "Terminal";
      let l;
      try {
        l = await e.terminalService.getTerminalFilePathFromResource(s);
      } catch {
        l = undefined;
      }
      const u = l || undefined;
      if (olu(n, a, u) && (t.push({
        id: `terminal:${o}`,
        label: a,
        rawText: l || a,
        type: "terminal",
        description: u,
        payload: {
          case: "terminalFile",
          uri: s.toJSON(),
          text: a,
          terminalFilePath: l
        }
      }), t.length >= dMe)) {
        break;
      }
    }
    return t;
  }
  async getMentionItems(n) {
    const {
      services: e,
      dispose: t
    } = await this.getWorkspaceServicesWithFallback();
    const i = e?.environmentService != null ? e.environmentService.isExtensionDevelopment || !e.environmentService.isBuilt : false;
    const r = e?.experimentService != null ? F8A(e.experimentService, {
      forceEnableInDevBuild: i
    }) : true;
    if (!e || !r) {
      t?.();
      return [];
    }
    try {
      if (n.cancellationToken.isCancellationRequested) {
        return [];
      }
      const s = U8A(n.query);
      const o = await this.getSharedMentionFilePicks(s, e, n.cancellationToken).catch(() => []);
      if (n.cancellationToken.isCancellationRequested) {
        return [];
      }
      const a = this.buildFileMentionItems(s, e, o);
      const l = this.buildFolderMentionItems(s, e, o);
      return [...a, ...l];
    } finally {
      t?.();
    }
  }
  getMentionKindLabel(n) {
    switch (n) {
      case "file":
        return "File";
      case "folder":
        return "Folder";
      case "doc":
        return "Doc";
      case "cursorRule":
        return "Cursor Rule";
      case "terminal":
        return "Terminal";
      default:
        {
          const e = n;
          return "Unknown";
        }
    }
  }
};
