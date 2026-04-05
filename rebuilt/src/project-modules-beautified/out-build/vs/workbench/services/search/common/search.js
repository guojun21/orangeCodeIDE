"use strict";

// Module: out-build/vs/workbench/services/search/common/search.js
// Offset: 28176980 (bundle byte offset)
// Size: 3313 bytes
Vs();
iR();
np();
d2();
oa();
Wt();
Hl();
_s();
$Xg();
vr();
hva = "workbench.view.search";
hie = "workbench.view.search";
Ant = "search-result";
iau = "search.exclude";
zmn = 20000;
QAi = {};
rau = "⟪ ";
sau = " characters skipped ⟫";
JXg = (rau.length + sau.length + 5) * 2;
bQ = xi("searchService");
(function (n) {
  n[n.file = 0] = "file";
  n[n.text = 1] = "text";
  n[n.aiText = 2] = "aiText";
})(GXg ||= {});
(function (n) {
  n[n.File = 1] = "File";
  n[n.Text = 2] = "Text";
  n[n.aiText = 3] = "aiText";
})(WXg ||= {});
(function (n) {
  n[n.Normal = 0] = "Normal";
  n[n.NewSearchStarted = 1] = "NewSearchStarted";
})(QXg ||= {});
jXg = class {
  constructor(n) {
    this.resource = n;
    this.results = [];
  }
};
mva = class {
  constructor(n, e, t, i) {
    this.rangeLocations = [];
    this.webviewIndex = i;
    const r = Array.isArray(e) ? e : [e];
    if (t && t.matchLines === 1 && w9A(r)) {
      n = $tA(n, t.matchLines);
      let s = "";
      let o = 0;
      let a = 0;
      const l = Math.floor(t.charsPerLine / 5);
      for (const u of r) {
        const d = Math.max(u.startColumn - l, 0);
        const m = u.startColumn + t.charsPerLine;
        if (d > a + l + JXg) {
          const p = rau + (d - a) + sau;
          s += p + n.slice(d, m);
          o += d - (a + p.length);
        } else {
          s += n.slice(a, m);
        }
        a = m;
        this.rangeLocations.push({
          source: u,
          preview: new aau(0, u.startColumn - o, u.endColumn - o)
        });
      }
      this.previewText = s;
    } else {
      const s = Array.isArray(e) ? e[0].startLineNumber : e.startLineNumber;
      const o = ttA(e, a => ({
        preview: new oau(a.startLineNumber - s, a.startColumn, a.endLineNumber - s, a.endColumn),
        source: a
      }));
      this.rangeLocations = Array.isArray(o) ? o : [o];
      this.previewText = n;
    }
  }
};
oau = class {
  constructor(n, e, t, i) {
    this.startLineNumber = n;
    this.startColumn = e;
    this.endLineNumber = t;
    this.endColumn = i;
  }
};
aau = class extends oau {
  constructor(n, e, t) {
    super(n, e, n, t);
  }
};
(function (n) {
  n.List = "list";
  n.Tree = "tree";
})(zXg ||= {});
(function (n) {
  n.Default = "default";
  n.FileNames = "fileNames";
  n.Type = "type";
  n.Modified = "modified";
  n.CountDescending = "countDescending";
  n.CountAscending = "countAscending";
})(VXg ||= {});
(function (n) {
  n[n.unknownEncoding = 1] = "unknownEncoding";
  n[n.regexParseError = 2] = "regexParseError";
  n[n.globParseError = 3] = "globParseError";
  n[n.invalidLiteral = 4] = "invalidLiteral";
  n[n.rgProcessError = 5] = "rgProcessError";
  n[n.other = 6] = "other";
  n[n.canceled = 7] = "canceled";
})(YNe ||= {});
pva = class extends Error {
  constructor(n, e) {
    super(n);
    this.code = e;
  }
};
