"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/actions/chatToolActions.js
// Offset: 31042987 (bundle byte offset)
// Size: 4070 bytes
Lv();
qi();
Ate();
yn();
Ef();
rt();
Jr();
Ht();
dr();
hs();
si();
HA();
Kl();
Pa();
_u();
v0();
oIf();
Rqe();
_E();
Wq();
SS();
wie();
kk();
Ice();
Rgu = "workbench.action.chat.acceptTool";
aIf = class sjb extends rn {
  static {
    this.id = "workbench.action.chat.attachTools";
  }
  constructor() {
    super({
      id: sjb.id,
      title: _(5127, null),
      icon: Be.tools,
      f1: false,
      category: cO,
      precondition: qa.chatMode.isEqualTo(iA.Agent),
      menu: {
        when: qa.chatMode.isEqualTo(iA.Agent),
        id: st.ChatInputAttachmentToolbar,
        group: "navigation",
        order: 1
      },
      keybinding: {
        when: Ee.and(qa.inChatInput, qa.chatMode.isEqualTo(iA.Agent)),
        primary: 3162,
        weight: 100
      }
    });
  }
  async run(e, ...t) {
    const i = e.get(ha);
    const r = e.get(Vye);
    const s = e.get(yie);
    const o = e.get(su);
    const a = e.get(M1);
    const l = e.get(ea);
    const u = e.get(fr);
    const d = e.get(Em);
    let m = a.lastFocusedWidget;
    if (!m) {
      let j = function (ee) {
        return ee && typeof ee == "object" && ee.widget;
      };
      var p = j;
      const X = t[0];
      if (j(X)) {
        m = X.widget;
      }
    }
    if (!m) {
      return;
    }
    const g = new Map();
    for (const j of r.servers.get()) {
      for (const X of j.tools.get()) {
        g.set(X.id, j);
      }
    }
    let f;
    (function (j) {
      j[j.Extension = 0] = "Extension";
      j[j.Mcp = 1] = "Mcp";
      j[j.Other = 2] = "Other";
    })(f ||= {});
    const A = {
      type: "item",
      label: _(5128, null),
      iconClass: Qt.asClassName(Be.add),
      pickable: false,
      run: () => u.executeCommand(Bgu.ID)
    };
    const w = {
      type: "item",
      label: _(5129, null),
      iconClass: Qt.asClassName(Be.add),
      pickable: false,
      run: () => d.openSearch("@tag:language-model-tools")
    };
    const C = {
      type: "item",
      label: _(5130, null),
      iconClass: Qt.asClassName(Be.add),
      pickable: false,
      run: async () => {
        (await i.pick([A, w], {
          canPickMany: false,
          title: _(5131, null)
        }))?.run();
      }
    };
    const x = {
      type: "item",
      children: [],
      label: _(5132, null),
      source: {
        type: "internal"
      },
      ordinal: 2,
      picked: true
    };
    const I = new Set(m.input.selectedToolsModel.tools.get());
    const B = new Map();
    for (const j of s.getTools()) {
      if (!j.supportsToolPicker) {
        continue;
      }
      let X;
      if (j.source.type === "mcp") {
        const re = g.get(j.id);
        if (!re) {
          continue;
        }
        X = B.get(re.definition.id) ?? {
          type: "item",
          label: _(5133, null, re?.definition.label),
          status: _(5134, null, re.collection.label, Gme.toString(re.connectionState.get())),
          ordinal: 1,
          source: j.source,
          picked: false,
          children: []
        };
        B.set(re.definition.id, X);
      } else if (j.source.type === "extension") {
        const re = j.source.extensionId;
        const ne = o.extensions.find(pe => $h.equals(pe.identifier, re));
        if (!ne) {
          continue;
        }
        X = B.get($h.toKey(re)) ?? {
          type: "item",
          label: ne.displayName ?? ne.name,
          ordinal: 0,
          picked: false,
          source: j.source,
          children: []
        };
        B.set($h.toKey(ne.identifier), X);
      } else if (j.source.type === "internal") {
        X = x;
      } else {
        QN(j.source);
      }
      const ee = I.has(j);
      X.children.push({
        tool: j,
        parent: X,
        type: "item",
        label: j.displayName,
        description: j.userDescription,
        picked: ee,
        indented: true
      });
      if (ee) {
        X.picked = true;
      }
    }
    function R(j) {
      return !!j.children;
    }
    function N(j) {
      return !!j.tool;
    }
    function M(j) {
      return !!j.run;
    }
    const O = new Ut();
    const $ = [];
    for (const j of Array.from(B.values()).sort((X, ee) => X.ordinal - ee.ordinal)) {
      $.push({
        type: "separator",
        label: j.status
      });
      $.push(j);
      $.push(...j.children);
    }
    const H = O.add(i.createQuickPick({
      useSeparators: true
    }));
    H.placeholder = _(5135, null);
    H.canSelectMany = true;
    H.keepScrollPosition = true;
    H.matchOnDescription = true;
    if ($.length === 0) {
      H.placeholder = _(5136, null);
      H.canSelectMany = false;
      $.push(A, w);
    } else {
      $.push({
        type: "separator"
      }, C);
    }
    let W = new Set();
    let z = false;
    const Y = () => {
      z = true;
      try {
        const j = $.filter(re => re.type === "item" && !!re.picked);
        W = new Set(j);
        H.selectedItems = j;
        const X = [];
        const ee = [];
        for (const re of $) {
          if (re.type === "item" && !re.picked) {
            if (R(re)) {
              X.push(re.source);
            } else if (N(re) && re.parent.picked) {
              ee.push(re.tool);
            }
          }
        }
        m.input.selectedToolsModel.update(X, ee);
      } finally {
        z = false;
      }
    };
    Y();
    H.items = $;
    H.show();
    O.add(H.onDidChangeSelection(j => {
      if (z) {
        return;
      }
      const X = j.find(M);
      if (X) {
        X.run();
        H.hide();
        return;
      }
      const {
        added: ee,
        removed: re
      } = _Ft(W, new Set(j));
      for (const ne of ee) {
        ne.picked = true;
        if (R(ne)) {
          for (const pe of ne.children) {
            pe.picked = true;
          }
        } else if (N(ne)) {
          ne.parent.picked = true;
        }
      }
      for (const ne of re) {
        ne.picked = false;
        if (R(ne)) {
          for (const pe of ne.children) {
            pe.picked = false;
          }
        } else if (N(ne) && ne.parent.children.every(pe => !pe.picked)) {
          ne.parent.picked = false;
        }
      }
      Y();
    }));
    O.add(H.onDidAccept(() => {
      H.activeItems.find(M)?.run();
    }));
    await Promise.race([In.toPromise(In.any(H.onDidAccept, H.onDidHide))]);
    l.publicLog2("chat/selectedTools", {
      enabled: m.input.selectedToolsModel.tools.get().length,
      total: bl.length(s.getTools())
    });
    O.dispose();
  }
};
