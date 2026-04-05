"use strict";

// Module: out-build/vs/platform/actionWidget/browser/actionList.js
// Offset: 2445971 (bundle byte offset)
// Size: 5187 bytes
ri();
Kde();
SW();
Po();
qi();
rt();
_r();
Jr();
jSh();
Ht();
pl();
ka();
$b();
Nl();
Px();
PBc = "acceptSelectedCodeAction";
LBc = "previewSelectedCodeAction";
(function (n) {
  n.Action = "action";
  n.Header = "header";
})(VSh ||= {});
KSh = class {
  get templateId() {
    return "header";
  }
  renderTemplate(n) {
    n.classList.add("group-header");
    const e = document.createElement("span");
    n.append(e);
    return {
      container: n,
      text: e
    };
  }
  renderElement(n, e, t) {
    t.text.textContent = n.group?.title ?? "";
  }
  disposeTemplate(n) {}
};
t9o = class {
  get templateId() {
    return "action";
  }
  constructor(e, t) {
    this._supportsPreview = e;
    this._keybindingService = t;
  }
  renderTemplate(e) {
    e.classList.add(this.templateId);
    const t = document.createElement("div");
    t.className = "icon";
    e.append(t);
    const i = document.createElement("span");
    i.className = "title";
    e.append(i);
    const r = new Xoe(e, cf);
    return {
      container: e,
      icon: t,
      text: i,
      keybinding: r
    };
  }
  renderElement(e, t, i) {
    if (e.group?.icon) {
      i.icon.className = Qt.asClassName(e.group.icon);
      if (e.group.icon.color) {
        i.icon.style.color = zo(e.group.icon.color.id);
      }
    } else {
      i.icon.className = Qt.asClassName(Be.lightBulb);
      i.icon.style.color = "var(--vscode-editorLightBulb-foreground)";
    }
    if (!e.item || !e.label) {
      return;
    }
    UBe(!e.hideIcon, i.icon);
    i.text.textContent = zSh(e.label);
    i.keybinding.set(e.keybinding);
    UBe(!!e.keybinding, i.keybinding.element);
    const r = this._keybindingService.lookupKeybinding(PBc)?.getLabel();
    const s = this._keybindingService.lookupKeybinding(LBc)?.getLabel();
    i.container.classList.toggle("option-disabled", e.disabled);
    if (e.disabled) {
      i.container.title = e.label;
    } else if (r && s) {
      if (this._supportsPreview && e.canPreview) {
        i.container.title = _(1796, null, r, s);
      } else {
        i.container.title = _(1797, null, r);
      }
    } else {
      i.container.title = "";
    }
  }
  disposeTemplate(e) {
    e.keybinding.dispose();
  }
};
t9o = __decorate([__param(1, mo)], t9o);
YSh = class extends UIEvent {
  constructor() {
    super("acceptSelectedAction");
  }
};
NBc = class extends UIEvent {
  constructor() {
    super("previewSelectedAction");
  }
};
n9o = class extends at {
  constructor(e, t, i, r, s, o, a) {
    super();
    this._delegate = r;
    this._contextViewService = s;
    this._keybindingService = o;
    this._layoutService = a;
    this._actionLineHeight = 24;
    this._headerLineHeight = 26;
    this.cts = this._register(new Wc());
    this.domNode = document.createElement("div");
    this.domNode.classList.add("actionList");
    const l = {
      getHeight: u => u.kind === "header" ? this._headerLineHeight : this._actionLineHeight,
      getTemplateId: u => u.kind
    };
    this._list = this._register(new JR(e, this.domNode, l, [new t9o(t, this._keybindingService), new KSh()], {
      keyboardSupport: false,
      typeNavigationEnabled: true,
      keyboardNavigationLabelProvider: {
        getKeyboardNavigationLabel: NhA
      },
      accessibilityProvider: {
        getAriaLabel: u => {
          if (u.kind === "action") {
            let d = u.label ? zSh(u?.label) : "";
            if (u.disabled) {
              d = _(1798, null, d, u.disabled);
            }
            return d;
          }
          return null;
        },
        getWidgetAriaLabel: () => _(1799, null),
        getRole: u => u.kind === "action" ? "option" : "separator",
        getWidgetRole: () => "listbox"
      }
    }));
    this._list.style(Abt);
    this._register(this._list.onMouseClick(u => this.onListClick(u)));
    this._register(this._list.onMouseOver(u => this.onListHover(u)));
    this._register(this._list.onDidChangeFocus(() => this.onFocus()));
    this._register(this._list.onDidChangeSelection(u => this.onListSelection(u)));
    this._allMenuItems = i;
    this._list.splice(0, this._list.length, this._allMenuItems);
    if (this._list.length) {
      this.focusNext();
    }
  }
  focusCondition(e) {
    return !e.disabled && e.kind === "action";
  }
  hide(e) {
    this._delegate.onHide(e);
    this.cts.cancel();
    this._contextViewService.hideContextView();
  }
  layout(e) {
    const t = this._allMenuItems.filter(l => l.kind === "header").length;
    const r = this._allMenuItems.length * this._actionLineHeight + t * this._headerLineHeight - t * this._actionLineHeight;
    this._list.layout(r);
    let s = e;
    if (this._allMenuItems.length >= 50) {
      s = 380;
    } else {
      const l = this._allMenuItems.map((u, d) => {
        const m = this.domNode.ownerDocument.getElementById(this._list.getElementID(d));
        if (m) {
          m.style.width = "auto";
          const p = m.getBoundingClientRect().width;
          m.style.width = "";
          return p;
        }
        return 0;
      });
      s = Math.max(...l, e);
    }
    const a = Math.min(r, this._layoutService.getContainer(As(this.domNode)).clientHeight * 0.7);
    this._list.layout(a, s);
    this.domNode.style.height = `${a}px`;
    this._list.domFocus();
    return s;
  }
  focusPrevious() {
    this._list.focusPrevious(1, true, undefined, this.focusCondition);
  }
  focusNext() {
    this._list.focusNext(1, true, undefined, this.focusCondition);
  }
  acceptSelected(e) {
    const t = this._list.getFocus();
    if (t.length === 0) {
      return;
    }
    const i = t[0];
    const r = this._list.element(i);
    if (!this.focusCondition(r)) {
      return;
    }
    const s = e ? new NBc() : new YSh();
    this._list.setSelection([i], s);
  }
  onListSelection(e) {
    if (!e.elements.length) {
      return;
    }
    const t = e.elements[0];
    if (t.item && this.focusCondition(t)) {
      this._delegate.onSelect(t.item, e.browserEvent instanceof NBc);
    } else {
      this._list.setSelection([]);
    }
  }
  onFocus() {
    const e = this._list.getFocus();
    if (e.length === 0) {
      return;
    }
    const t = e[0];
    const i = this._list.element(t);
    this._delegate.onFocus?.(i.item);
  }
  async onListHover(e) {
    const t = e.element;
    if (t && t.item && this.focusCondition(t)) {
      if (this._delegate.onHover && !t.disabled && t.kind === "action") {
        const i = await this._delegate.onHover(t.item, this.cts.token);
        t.canPreview = i ? i.canPreview : undefined;
      }
      if (e.index) {
        this._list.splice(e.index, 1, [t]);
      }
    }
    this._list.setFocus(typeof e.index == "number" ? [e.index] : []);
  }
  onListClick(e) {
    if (e.element && this.focusCondition(e.element)) {
      this._list.setFocus([]);
    }
  }
};
n9o = __decorate([__param(4, sy), __param(5, mo), __param(6, vS)], n9o);
