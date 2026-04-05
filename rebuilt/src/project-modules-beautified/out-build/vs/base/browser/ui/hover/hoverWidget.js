"use strict";

// Module: out-build/vs/base/browser/ui/hover/hoverWidget.js
// Offset: 4225865 (bundle byte offset)
// Size: 2195 bytes
ri();
Tb();
zI();
rt();
nAA();
Ht();
tUn = Ct;
(function (n) {
  n[n.LEFT = 0] = "LEFT";
  n[n.RIGHT = 1] = "RIGHT";
  n[n.BELOW = 2] = "BELOW";
  n[n.ABOVE = 3] = "ABOVE";
})(KJh ||= {});
A$o = class extends at {
  constructor(n) {
    super();
    this.containerDomNode = document.createElement("div");
    this.containerDomNode.className = "monaco-hover";
    this.containerDomNode.classList.toggle("fade-in", !!n);
    this.containerDomNode.tabIndex = 0;
    this.containerDomNode.setAttribute("role", "tooltip");
    this.contentsDomNode = document.createElement("div");
    this.contentsDomNode.className = "monaco-hover-content";
    this.scrollbar = this._register(new vF(this.contentsDomNode, {
      consumeMouseWheelIfScrollbarIsNeeded: true
    }));
    this.containerDomNode.appendChild(this.scrollbar.getDomNode());
  }
  onContentsChanged() {
    this.scrollbar.scanDomNode();
  }
};
y$o = class rWb extends at {
  static render(e, t, i) {
    return new rWb(e, t, i);
  }
  constructor(e, t, i) {
    super();
    this.actionLabel = t.label;
    this.actionKeybindingLabel = i;
    this.actionContainer = Rt(e, tUn("div.action-container"));
    this.actionContainer.setAttribute("tabindex", "0");
    this.action = Rt(this.actionContainer, tUn("a.action"));
    this.action.setAttribute("role", "button");
    if (t.iconClass) {
      Rt(this.action, tUn(`span.icon.${t.iconClass}`));
    }
    this.actionRenderedLabel = i ? `${t.label} (${i})` : t.label;
    const r = Rt(this.action, tUn("span"));
    r.textContent = this.actionRenderedLabel;
    this._store.add(new R5c(this.actionContainer, t.run));
    this._store.add(new P5c(this.actionContainer, t.run, [3, 10]));
    this.setEnabled(true);
  }
  setEnabled(e) {
    if (e) {
      this.actionContainer.classList.remove("disabled");
      this.actionContainer.removeAttribute("aria-disabled");
    } else {
      this.actionContainer.classList.add("disabled");
      this.actionContainer.setAttribute("aria-disabled", "true");
    }
  }
};
R5c = class extends at {
  constructor(n, e) {
    super();
    this._register(ei(n, ir.CLICK, t => {
      t.stopPropagation();
      t.preventDefault();
      e(n);
    }));
  }
};
P5c = class extends at {
  constructor(n, e, t) {
    super();
    this._register(ei(n, ir.KEY_DOWN, i => {
      const r = new vh(i);
      if (t.some(s => r.equals(s))) {
        i.stopPropagation();
        i.preventDefault();
        e(n);
      }
    }));
  }
};
