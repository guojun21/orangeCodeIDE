"use strict";

// Module: out-build/vs/editor/contrib/smartSelect/browser/smartSelect.js
// Offset: 32758593 (bundle byte offset)
// Size: 3636 bytes
Vs();
Po();
_s();
Cu();
tl();
ts();
db();
Qh();
_yg();
qly();
Ht();
dr();
hs();
Cm();
td();
Js();
Yn();
m5f = class gzb {
  constructor(e, t) {
    this.index = e;
    this.ranges = t;
  }
  mov(e) {
    const t = this.index + (e ? 1 : -1);
    if (t < 0 || t >= this.ranges.length) {
      return this;
    }
    const i = new gzb(t, this.ranges);
    if (i.ranges[t].equalsRange(this.ranges[this.index])) {
      return i.mov(e);
    } else {
      return i;
    }
  }
};
Art = class {
  static {
    Lyu = this;
  }
  static {
    this.ID = "editor.contrib.smartSelectController";
  }
  static get(e) {
    return e.getContribution(Lyu.ID);
  }
  constructor(e, t) {
    this._editor = e;
    this._languageFeaturesService = t;
    this._ignoreSelection = false;
  }
  dispose() {
    this._selectionListener?.dispose();
  }
  async run(e) {
    if (!this._editor.hasModel()) {
      return;
    }
    const t = this._editor.getSelections();
    const i = this._editor.getModel();
    if (!this._state) {
      await h5f(this._languageFeaturesService.selectionRangeProvider, i, t.map(s => s.getPosition()), this._editor.getOption(118), Cs.None).then(s => {
        if (!!q_(s) && s.length === t.length && !!this._editor.hasModel() && !!cg(this._editor.getSelections(), t, (o, a) => o.equalsSelection(a))) {
          for (let o = 0; o < s.length; o++) {
            s[o] = s[o].filter(a => a.containsPosition(t[o].getStartPosition()) && a.containsPosition(t[o].getEndPosition()));
            s[o].unshift(t[o]);
          }
          this._state = s.map(o => new m5f(0, o));
          this._selectionListener?.dispose();
          this._selectionListener = this._editor.onDidChangeCursorPosition(() => {
            if (!this._ignoreSelection) {
              this._selectionListener?.dispose();
              this._state = undefined;
            }
          });
        }
      });
    }
    if (!this._state) {
      return;
    }
    this._state = this._state.map(s => s.mov(e));
    const r = this._state.map(s => Vl.fromPositions(s.ranges[s.index].getStartPosition(), s.ranges[s.index].getEndPosition()));
    this._ignoreSelection = true;
    try {
      this._editor.setSelections(r);
    } finally {
      this._ignoreSelection = false;
    }
  }
};
Art = Lyu = __decorate([__param(1, $u)], Art);
Nyu = class extends vu {
  constructor(n, e) {
    super(e);
    this._forward = n;
  }
  async run(n, e) {
    const t = Art.get(e);
    if (t) {
      await t.run(this._forward);
    }
  }
};
p5f = class extends Nyu {
  constructor() {
    super(true, {
      id: "editor.action.smartSelect.expand",
      label: dt(1540, "Expand Selection"),
      precondition: undefined,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 1553,
        mac: {
          primary: 3345,
          secondary: [1297]
        },
        weight: 100
      },
      menuOpts: {
        menuId: st.MenubarSelectionMenu,
        group: "1_basic",
        title: _(1538, null),
        order: 2
      }
    });
  }
};
Ss.registerCommandAlias("editor.action.smartSelect.grow", "editor.action.smartSelect.expand");
g5f = class extends Nyu {
  constructor() {
    super(false, {
      id: "editor.action.smartSelect.shrink",
      label: dt(1541, "Shrink Selection"),
      precondition: undefined,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 1551,
        mac: {
          primary: 3343,
          secondary: [1295]
        },
        weight: 100
      },
      menuOpts: {
        menuId: st.MenubarSelectionMenu,
        group: "1_basic",
        title: _(1539, null),
        order: 3
      }
    });
  }
};
Mg(Art.ID, Art, 4);
ac(p5f);
ac(g5f);
Ss.registerCommand("_executeSelectionRangeProvider", async function (n, ...e) {
  const [t, i] = e;
  Kd(je.isUri(t));
  const r = n.get($u).selectionRangeProvider;
  const s = await n.get(El).createModelReference(t);
  try {
    return h5f(r, s.object.textEditorModel, i, {
      selectLeadingAndTrailingWhitespace: true,
      selectSubwords: true
    }, Cs.None);
  } finally {
    s.dispose();
  }
});
