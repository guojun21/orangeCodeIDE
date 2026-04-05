"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatSelectedTools.js
// Offset: 32553612 (bundle byte offset)
// Size: 1502 bytes
ri();
bS();
yn();
rt();
Uc();
Js();
Ht();
dg();
dr();
Wt();
n3f();
kr();
wie();
i3f = t3f({
  defaultValue: {},
  key: "chat/selectedTools"
});
kEa = class extends at {
  constructor(e, t, i) {
    super();
    this._selectedTools = this._register(i3f(1, 1, i));
    const r = tp(e.onDidChangeTools, () => Array.from(e.getTools()).filter(l => l.supportsToolPicker));
    const s = this._selectedTools.map(l => (l.disabledBuckets?.length || l.disabledTools?.length) && {
      buckets: new Set(l.disabledBuckets),
      toolIds: new Set(l.disabledTools)
    });
    this.tools = Ro(l => {
      const u = s.read(l);
      const d = r.read(l);
      if (u) {
        return d.filter(m => !u.toolIds.has(m.id) && !u.buckets.has(cAa.toKey(m.source)));
      } else {
        return d;
      }
    });
    const o = Ro(l => {
      const u = r.read(l).length;
      const d = this.tools.read(l).length;
      return {
        count: u,
        enabled: d
      };
    });
    const a = this._store.add(new Qe());
    this.toolsActionItemViewItemProvider = Object.assign((l, u) => {
      if (l instanceof Ub) {
        return t.createInstance(class extends f2 {
          render(d) {
            this.options.icon = false;
            this.options.label = true;
            d.classList.add("chat-mcp");
            super.render(d);
          }
          updateLabel() {
            this._store.add(Oc(d => {
              Kd(this.label);
              const {
                enabled: m,
                count: p
              } = o.read(d);
              const g = p === 0 ? "$(tools)" : m !== p ? _(5424, null, "$(tools)", m, p) : _(5425, null, "$(tools)", p);
              um(this.label, ...a_(g));
              if (this.element?.isConnected) {
                a.fire();
              }
            }));
          }
        }, l, {
          ...u,
          keybindingNotRenderedWithLabel: true
        });
      }
    }, {
      onDidRender: a.event
    });
  }
  update(e, t) {
    this._selectedTools.set({
      disabledBuckets: e.map(cAa.toKey),
      disabledTools: t.map(i => i.id)
    }, undefined);
  }
};
kEa = __decorate([__param(0, yie), __param(1, ln), __param(2, Hi)], kEa);
