"use strict";

// Module: out-build/vs/workbench/common/views.js
// Offset: 26860587 (bundle byte offset)
// Size: 6703 bytes
yn();
Ht();
Wt();
rt();
cu();
Ws();
np();
qi();
Pm();
ml();
Tga = "views";
Iga = _(4559, null);
Dga = us("default-view-icon", Be.window, _(4560, null));
(function (n) {
  n.ViewContainersRegistry = "workbench.registry.view.containers";
  n.ViewsRegistry = "workbench.registry.view";
})(Fg ||= {});
(function (n) {
  n[n.Sidebar = 0] = "Sidebar";
  n[n.Panel = 1] = "Panel";
  n[n.AuxiliaryBar = 2] = "AuxiliaryBar";
})(EFg ||= {});
Tnu = [0, 1, 2];
xFg = class extends at {
  constructor() {
    super(...arguments);
    this.registeredViewContainerDeletions = new Map();
    this.viewContainerStatuses = new Map();
    this._onDidChangeViewContainerStatus = this._register(new Qe());
    this.onDidChangeViewContainerStatus = this._onDidChangeViewContainerStatus.event;
    this._onDidRegister = this._register(new Qe());
    this.onDidRegister = this._onDidRegister.event;
    this._onDidDeregister = this._register(new Qe());
    this.onDidDeregister = this._onDidDeregister.event;
    this.viewContainers = new Map();
    this.defaultViewContainers = [];
  }
  registerViewContainerDeletion(n, e) {
    this.registeredViewContainerDeletions.set(n, e);
  }
  hasViewContainerDeletion(n) {
    return this.registeredViewContainerDeletions.has(n);
  }
  getViewContainerDeletion(n) {
    return this.registeredViewContainerDeletions.get(n);
  }
  deregisterViewContainerDeletion(n) {
    this.registeredViewContainerDeletions.delete(n);
  }
  setViewContainerStatus(n, e) {
    const t = this.viewContainerStatuses.get(n);
    if (e === undefined) {
      this.viewContainerStatuses.delete(n);
    } else {
      this.viewContainerStatuses.set(n, e);
    }
    this._onDidChangeViewContainerStatus.fire({
      containerId: n,
      status: e,
      oldStatus: t
    });
  }
  getViewContainerStatus(n) {
    return this.viewContainerStatuses.get(n);
  }
  get all() {
    return [...this.viewContainers.values()].flat();
  }
  registerViewContainer(n, e, t) {
    const i = this.get(n.id);
    if (i) {
      return i;
    }
    const r = n;
    r.openCommandActionDescriptor = t?.doNotRegisterOpenCommand ? undefined : r.openCommandActionDescriptor ?? {
      id: r.id
    };
    Xpt(this.viewContainers, e, []).push(r);
    if (t?.isDefault) {
      this.defaultViewContainers.push(r);
    }
    this._onDidRegister.fire({
      viewContainer: r,
      viewContainerLocation: e
    });
    return r;
  }
  deregisterViewContainer(n) {
    for (const e of this.viewContainers.keys()) {
      const t = this.viewContainers.get(e);
      const i = t?.indexOf(n);
      if (i !== -1) {
        t?.splice(i, 1);
        if (t.length === 0) {
          this.viewContainers.delete(e);
        }
        this.viewContainerStatuses.delete(n.id);
        this.registeredViewContainerDeletions.delete(n.id);
        this._onDidDeregister.fire({
          viewContainer: n,
          viewContainerLocation: e
        });
        return;
      }
    }
  }
  get(n) {
    return this.all.filter(e => e.id === n)[0];
  }
  getViewContainers(n) {
    return [...(this.viewContainers.get(n) || [])];
  }
  getViewContainerLocation(n) {
    return [...this.viewContainers.keys()].filter(e => this.getViewContainers(e).filter(t => t?.id === n.id).length > 0)[0];
  }
  getDefaultViewContainer(n) {
    if (Pgt.isBcIdWindow && n === 0) {
      const e = this.get(r4t);
      if (e) {
        return e;
      }
    }
    return this.defaultViewContainers.find(e => this.getViewContainerLocation(e) === n);
  }
};
Di.add(Fg.ViewContainersRegistry, new xFg());
(function (n) {
  n.Open = "2_open";
  n.Debug = "4_debug";
  n.SCM = "5_scm";
  n.More = "9_more";
})(oce ||= {});
TFg = class extends at {
  constructor() {
    super(...arguments);
    this._onViewsRegistered = this._register(new Qe());
    this.onViewsRegistered = this._onViewsRegistered.event;
    this._onViewsDeregistered = this._register(new Qe());
    this.onViewsDeregistered = this._onViewsDeregistered.event;
    this._onDidChangeContainer = this._register(new Qe());
    this.onDidChangeContainer = this._onDidChangeContainer.event;
    this._onDidChangeViewWelcomeContent = this._register(new Qe());
    this.onDidChangeViewWelcomeContent = this._onDidChangeViewWelcomeContent.event;
    this._viewContainers = [];
    this._views = new Map();
    this._viewWelcomeContents = new RFt();
  }
  registerViews(n, e) {
    this.registerViews2([{
      views: n,
      viewContainer: e
    }]);
  }
  registerViews2(n) {
    n.forEach(({
      views: e,
      viewContainer: t
    }) => this.addViews(e, t));
    this._onViewsRegistered.fire(n);
  }
  deregisterViews(n, e) {
    const t = this.removeViews(n, e);
    if (t.length) {
      this._onViewsDeregistered.fire({
        views: t,
        viewContainer: e
      });
    }
  }
  moveViews(n, e) {
    for (const t of this._views.keys()) {
      if (t !== e) {
        const i = this.removeViews(n, t);
        if (i.length) {
          this.addViews(i, e);
          this._onDidChangeContainer.fire({
            views: i,
            from: t,
            to: e
          });
        }
      }
    }
  }
  getViews(n) {
    return this._views.get(n) || [];
  }
  getView(n) {
    for (const e of this._viewContainers) {
      const t = (this._views.get(e) || []).filter(i => i.id === n)[0];
      if (t) {
        return t;
      }
    }
    return null;
  }
  getViewContainer(n) {
    for (const e of this._viewContainers) {
      if ((this._views.get(e) || []).filter(i => i.id === n)[0]) {
        return e;
      }
    }
    return null;
  }
  registerViewWelcomeContent(n, e) {
    this._viewWelcomeContents.add(n, e);
    this._onDidChangeViewWelcomeContent.fire(n);
    return $i(() => {
      this._viewWelcomeContents.delete(n, e);
      this._onDidChangeViewWelcomeContent.fire(n);
    });
  }
  registerViewWelcomeContent2(n, e) {
    const t = new Map();
    for (const [i, r] of e) {
      this._viewWelcomeContents.add(n, r);
      t.set(i, $i(() => {
        this._viewWelcomeContents.delete(n, r);
        this._onDidChangeViewWelcomeContent.fire(n);
      }));
    }
    this._onDidChangeViewWelcomeContent.fire(n);
    return t;
  }
  getViewWelcomeContent(n) {
    const e = [];
    this._viewWelcomeContents.forEach(n, t => e.push(t));
    return e.sort(p2A);
  }
  addViews(n, e) {
    let t = this._views.get(e);
    if (!t) {
      t = [];
      this._views.set(e, t);
      this._viewContainers.push(e);
    }
    for (const i of n) {
      if (this.getView(i.id) !== null) {
        throw new Error(_(4561, null, i.id));
      }
      t.push(i);
    }
  }
  removeViews(n, e) {
    const t = this._views.get(e);
    if (!t) {
      return [];
    }
    const i = [];
    const r = [];
    for (const s of t) {
      if (n.includes(s)) {
        i.push(s);
      } else {
        r.push(s);
      }
    }
    if (i.length) {
      if (r.length) {
        this._views.set(e, r);
      } else {
        this._views.delete(e);
        this._viewContainers.splice(this._viewContainers.indexOf(e), 1);
      }
    }
    return i;
  }
};
Di.add(Fg.ViewsRegistry, new TFg());
fp = xi("viewDescriptorService");
(function (n) {
  n[n.Default = 0] = "Default";
  n[n.Expand = 1] = "Expand";
})(Utt ||= {});
(function (n) {
  n[n.None = 0] = "None";
  n[n.Collapsed = 1] = "Collapsed";
  n[n.Expanded = 2] = "Expanded";
})(P1 ||= {});
Ohn = class {
  constructor(n, e) {
    this.resolved = false;
    this._hasResolve = false;
    f3(this, n);
    this._hasResolve = !!e;
    this.resolve = async t => {
      if (e && !this.resolved) {
        const i = await e(t);
        if (i) {
          this.tooltip = this.tooltip ?? i.tooltip;
          this.command = this.command ?? i.command;
        }
      }
      if (!t.isCancellationRequested) {
        this.resolved = true;
      }
    };
  }
  get hasResolve() {
    return this._hasResolve;
  }
  resetResolve() {
    this.resolved = false;
  }
  asTreeItem() {
    return {
      handle: this.handle,
      parentHandle: this.parentHandle,
      collapsibleState: this.collapsibleState,
      label: this.label,
      description: this.description,
      icon: this.icon,
      iconDark: this.iconDark,
      themeIcon: this.themeIcon,
      resourceUri: this.resourceUri,
      tooltip: this.tooltip,
      contextValue: this.contextValue,
      command: this.command,
      children: this.children,
      accessibilityInformation: this.accessibilityInformation
    };
  }
};
IFg = class extends Error {
  constructor(n) {
    super(_(4562, null, n));
    this.name = "NoTreeViewError";
  }
  static is(n) {
    return !!n && n.name === "NoTreeViewError";
  }
};
