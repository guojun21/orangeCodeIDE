"use strict";

// Module: out-build/vs/editor/contrib/colorPicker/browser/defaultDocumentColorProvider.js
// Offset: 4199890 (bundle byte offset)
// Size: 1622 bytes
xf();
rt();
Cm();
Hk();
H9t = class {
  constructor(e) {
    this._editorWorkerService = e;
  }
  async provideDocumentColors(e, t) {
    return this._editorWorkerService.computeDefaultDocumentColors(e.uri);
  }
  provideColorPresentations(e, t, i) {
    const r = t.range;
    const s = t.color;
    const o = s.alpha;
    const a = new Xr(new Sa(Math.round(s.red * 255), Math.round(s.green * 255), Math.round(s.blue * 255), o));
    const l = o ? Xr.Format.CSS.formatRGB(a) : Xr.Format.CSS.formatRGBA(a);
    const u = o ? Xr.Format.CSS.formatHSL(a) : Xr.Format.CSS.formatHSLA(a);
    const d = o ? Xr.Format.CSS.formatHex(a) : Xr.Format.CSS.formatHexA(a);
    const m = [];
    m.push({
      label: l,
      textEdit: {
        range: r,
        text: l
      }
    });
    m.push({
      label: u,
      textEdit: {
        range: r,
        text: u
      }
    });
    m.push({
      label: d,
      textEdit: {
        range: r,
        text: d
      }
    });
    return m;
  }
};
H9t = __decorate([__param(0, c_)], H9t);
c$o = class extends at {
  constructor(e, t) {
    super();
    this._register(e.colorProvider.register("*", new H9t(t)));
  }
};
c$o = __decorate([__param(0, $u), __param(1, c_)], c$o);
