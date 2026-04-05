"use strict";

// Module: out-build/vs/editor/browser/widget/diffEditor/components/diffEditorViewZones/inlineDiffDeletedCodeMargin.js
// Offset: 2210570 (bundle byte offset)
// Size: 4578 bytes
ri();
nl();
qi();
rt();
_r();
Jr();
Ht();
bCh = class extends at {
  get visibility() {
    return this._visibility;
  }
  set visibility(n) {
    if (this._visibility !== n) {
      this._visibility = n;
      this._diffActions.style.visibility = n ? "visible" : "hidden";
    }
  }
  constructor(n, e, t, i, r, s, o, a, l) {
    super();
    this._getViewZoneId = n;
    this._marginDomNode = e;
    this._modifiedEditor = t;
    this._diff = i;
    this._editor = r;
    this._viewLineCounts = s;
    this._originalTextModel = o;
    this._contextMenuService = a;
    this._clipboardService = l;
    this._visibility = false;
    this._marginDomNode.style.zIndex = "10";
    this._diffActions = document.createElement("div");
    if (!this._editor.getModifiedEditor()?.getIsMultiDiffEditor?.()) {
      this._diffActions.className = Qt.asClassName(Be.lightBulb) + " lightbulb-glyph";
    }
    this._diffActions.style.position = "absolute";
    const u = this._modifiedEditor.getOption(68);
    this._diffActions.style.right = "0px";
    this._diffActions.style.visibility = "hidden";
    this._diffActions.style.height = `${u}px`;
    this._diffActions.style.lineHeight = `${u}px`;
    this._marginDomNode.appendChild(this._diffActions);
    let d = 0;
    const m = t.getOption(132) && !ZL;
    const p = (g, f) => {
      this._contextMenuService.showContextMenu({
        domForShadowRoot: m ? t.getDomNode() ?? undefined : undefined,
        getAnchor: () => ({
          x: g,
          y: f
        }),
        getActions: () => {
          const A = [];
          const w = i.modified.isEmpty;
          A.push(new Hs("diff.clipboard.copyDeletedContent", w ? i.original.length > 1 ? _(232, null) : _(233, null) : i.original.length > 1 ? _(234, null) : _(235, null), undefined, true, async () => {
            const x = this._originalTextModel.getValueInRange(i.original.toExclusiveRange());
            await this._clipboardService.writeText(x);
          }));
          if (i.original.length > 1) {
            A.push(new Hs("diff.clipboard.copyDeletedLineContent", _(w ? 236 : 237, null, i.original.startLineNumber + d), undefined, true, async () => {
              let x = this._originalTextModel.getLineContent(i.original.startLineNumber + d);
              if (x === "") {
                x = this._originalTextModel.getEndOfLineSequence() === 0 ? `
` : `\r
`;
              }
              await this._clipboardService.writeText(x);
            }));
          }
          if (!t.getOption(96)) {
            A.push(new Hs("diff.inline.revertChange", _(238, null), undefined, true, async () => {
              this._editor.revert(this._diff);
            }));
          }
          return A;
        },
        autoSelectFirstItem: true
      });
    };
    this._register(_f(this._diffActions, "mousedown", g => {
      if (!g.leftButton) {
        return;
      }
      const {
        top: f,
        height: A
      } = qS(this._diffActions);
      const w = Math.floor(u / 3);
      g.preventDefault();
      p(g.posx, f + A + w);
    }));
    this._register(t.onMouseMove(g => {
      if ((g.target.type === 8 || g.target.type === 5) && g.target.detail.viewZoneId === this._getViewZoneId()) {
        d = this._updateLightBulbPosition(this._marginDomNode, g.event.browserEvent.y, u);
        this.visibility = true;
      } else {
        this.visibility = false;
      }
    }));
    this._register(t.onMouseDown(g => {
      if (g.event.rightButton && (g.target.type === 8 || g.target.type === 5) && g.target.detail.viewZoneId === this._getViewZoneId()) {
        g.event.preventDefault();
        d = this._updateLightBulbPosition(this._marginDomNode, g.event.browserEvent.y, u);
        p(g.event.posx, g.event.posy + u);
      }
    }));
  }
  _updateLightBulbPosition(n, e, t) {
    const {
      top: i
    } = qS(n);
    const r = e - i;
    const s = Math.floor(r / t);
    const o = s * t;
    this._diffActions.style.top = `${o}px`;
    if (this._viewLineCounts) {
      let a = 0;
      for (let l = 0; l < this._viewLineCounts.length; l++) {
        a += this._viewLineCounts[l];
        if (s < a) {
          return l;
        }
      }
    }
    return s;
  }
};
