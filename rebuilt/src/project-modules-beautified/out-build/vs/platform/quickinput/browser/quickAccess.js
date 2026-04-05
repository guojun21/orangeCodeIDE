"use strict";

// Module: out-build/vs/platform/quickinput/browser/quickAccess.js
// Offset: 27604936 (bundle byte offset)
// Size: 3504 bytes
vr();
Po();
yn();
rt();
Wt();
eX();
Kl();
Ws();
$vi = class extends at {
  constructor(e, t) {
    super();
    this.quickInputService = e;
    this.instantiationService = t;
    this.registry = Di.as(kJ.Quickaccess);
    this.mapProviderToDescriptor = new Map();
    this.lastAcceptedPickerValues = new Map();
    this.visibleQuickAccess = undefined;
  }
  pick(e = "", t) {
    return this.doShowOrPick(e, true, t);
  }
  show(e = "", t) {
    this.doShowOrPick(e, false, t);
  }
  doShowOrPick(e, t, i) {
    const [r, s] = this.getOrInstantiateProvider(e, i?.enabledProviderPrefixes);
    const o = this.visibleQuickAccess;
    const a = o?.descriptor;
    if (o && s && a === s) {
      if (e !== s.prefix && !i?.preserveValue) {
        o.picker.value = e;
      }
      this.adjustValueSelection(o.picker, s, i);
      return;
    }
    if (s && !i?.preserveValue) {
      let f;
      if (o && a && a !== s) {
        const A = o.value.substr(a.prefix.length);
        if (A) {
          f = `${s.prefix}${A}`;
        }
      }
      if (!f) {
        const A = r?.defaultFilterValue;
        if (A === vmn.LAST) {
          f = this.lastAcceptedPickerValues.get(s);
        } else if (typeof A == "string") {
          f = `${s.prefix}${A}`;
        }
      }
      if (typeof f == "string") {
        e = f;
      }
    }
    const l = o?.picker?.valueSelection;
    const u = o?.picker?.value;
    const d = new Ut();
    const m = d.add(this.quickInputService.createQuickPick({
      useSeparators: true
    }));
    m.value = e;
    this.adjustValueSelection(m, s, i);
    m.placeholder = i?.placeholder ?? s?.placeholder;
    m.quickNavigate = i?.quickNavigateConfiguration;
    m.hideInput = !!m.quickNavigate && !o;
    if (typeof i?.itemActivation == "number" || i?.quickNavigateConfiguration) {
      m.itemActivation = i?.itemActivation ?? IW.SECOND;
    }
    m.contextKey = s?.contextKey;
    m.filterValue = f => f.substring(s ? s.prefix.length : 0);
    let p;
    if (t) {
      p = new wy();
      d.add(In.once(m.onWillAccept)(f => {
        f.veto();
        m.hide();
      }));
    }
    d.add(this.registerPickerListeners(m, r, s, e, i));
    const g = d.add(new Wc());
    if (r) {
      d.add(r.provide(m, g.token, i?.providerOptions));
    }
    In.once(m.onDidHide)(() => {
      if (m.selectedItems.length === 0) {
        g.cancel();
      }
      d.dispose();
      p?.complete(m.selectedItems.slice(0));
    });
    m.show();
    if (l && u === e) {
      m.valueSelection = l;
    }
    if (t) {
      return p?.p;
    }
  }
  adjustValueSelection(e, t, i) {
    let r;
    if (i?.preserveValue) {
      r = [e.value.length, e.value.length];
    } else {
      r = [t?.prefix.length ?? 0, e.value.length];
    }
    e.valueSelection = r;
  }
  registerPickerListeners(e, t, i, r, s) {
    const o = new Ut();
    const a = this.visibleQuickAccess = {
      picker: e,
      descriptor: i,
      value: r
    };
    o.add($i(() => {
      if (a === this.visibleQuickAccess) {
        this.visibleQuickAccess = undefined;
      }
    }));
    o.add(e.onDidChangeValue(l => {
      const [u] = this.getOrInstantiateProvider(l, s?.enabledProviderPrefixes);
      if (u !== t) {
        this.show(l, {
          enabledProviderPrefixes: s?.enabledProviderPrefixes,
          preserveValue: true,
          providerOptions: s?.providerOptions
        });
      } else {
        a.value = l;
      }
    }));
    if (i) {
      o.add(e.onDidAccept(() => {
        this.lastAcceptedPickerValues.set(i, e.value);
      }));
    }
    return o;
  }
  getOrInstantiateProvider(e, t) {
    const i = this.registry.getQuickAccessProvider(e);
    if (!i || t && !t?.includes(i.prefix)) {
      return [undefined, undefined];
    }
    let r = this.mapProviderToDescriptor.get(i);
    if (!r) {
      r = this.instantiationService.createInstance(i.ctor);
      this.mapProviderToDescriptor.set(i, r);
    }
    return [r, i];
  }
};
$vi = __decorate([__param(0, ha), __param(1, ln)], $vi);
