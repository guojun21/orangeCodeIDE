"use strict";

// Module: out-build/vs/editor/contrib/snippet/browser/snippetVariables.js
// Offset: 25266907 (bundle byte offset)
// Size: 6327 bytes
iL();
Hl();
Yr();
oa();
Bc();
QE();
Vde();
Ht();
ps();
OAg = Object.freeze({
  CURRENT_YEAR: true,
  CURRENT_YEAR_SHORT: true,
  CURRENT_MONTH: true,
  CURRENT_DATE: true,
  CURRENT_HOUR: true,
  CURRENT_MINUTE: true,
  CURRENT_SECOND: true,
  CURRENT_DAY_NAME: true,
  CURRENT_DAY_NAME_SHORT: true,
  CURRENT_MONTH_NAME: true,
  CURRENT_MONTH_NAME_SHORT: true,
  CURRENT_SECONDS_UNIX: true,
  CURRENT_TIMEZONE_OFFSET: true,
  SELECTION: true,
  CLIPBOARD: true,
  TM_SELECTED_TEXT: true,
  TM_CURRENT_LINE: true,
  TM_CURRENT_WORD: true,
  TM_LINE_INDEX: true,
  TM_LINE_NUMBER: true,
  TM_FILENAME: true,
  TM_FILENAME_BASE: true,
  TM_DIRECTORY: true,
  TM_FILEPATH: true,
  CURSOR_INDEX: true,
  CURSOR_NUMBER: true,
  RELATIVE_FILEPATH: true,
  BLOCK_COMMENT_START: true,
  BLOCK_COMMENT_END: true,
  LINE_COMMENT: true,
  WORKSPACE_NAME: true,
  WORKSPACE_FOLDER: true,
  RANDOM: true,
  RANDOM_HEX: true,
  UUID: true
});
OQl = class {
  constructor(n) {
    this._delegates = n;
  }
  resolve(n) {
    for (const e of this._delegates) {
      const t = e.resolve(n);
      if (t !== undefined) {
        return t;
      }
    }
  }
};
UQl = class {
  constructor(n, e, t, i) {
    this._model = n;
    this._selection = e;
    this._selectionIdx = t;
    this._overtypingCapturer = i;
  }
  resolve(n) {
    const {
      name: e
    } = n;
    if (e === "SELECTION" || e === "TM_SELECTED_TEXT") {
      let t = this._model.getValueInRange(this._selection) || undefined;
      let i = this._selection.startLineNumber !== this._selection.endLineNumber;
      if (!t && this._overtypingCapturer) {
        const r = this._overtypingCapturer.getLastOvertypedInfo(this._selectionIdx);
        if (r) {
          t = r.value;
          i = r.multiline;
        }
      }
      if (t && i && n.snippet) {
        const r = this._model.getLineContent(this._selection.startLineNumber);
        const s = rE(r, 0, this._selection.startColumn - 1);
        let o = s;
        n.snippet.walk(l => l === n ? false : (l instanceof gz && (o = rE(Zv(l.value).pop())), true));
        const a = voe(o, s);
        t = t.replace(/(\r\n|\r|\n)(.*)/g, (l, u, d) => `${u}${o.substr(a)}${d}`);
      }
      return t;
    } else {
      if (e === "TM_CURRENT_LINE") {
        return this._model.getLineContent(this._selection.positionLineNumber);
      }
      if (e === "TM_CURRENT_WORD") {
        const t = this._model.getWordAtPosition({
          lineNumber: this._selection.positionLineNumber,
          column: this._selection.positionColumn
        });
        return t && t.word || undefined;
      } else {
        if (e === "TM_LINE_INDEX") {
          return String(this._selection.positionLineNumber - 1);
        }
        if (e === "TM_LINE_NUMBER") {
          return String(this._selection.positionLineNumber);
        }
        if (e === "CURSOR_INDEX") {
          return String(this._selectionIdx);
        }
        if (e === "CURSOR_NUMBER") {
          return String(this._selectionIdx + 1);
        }
      }
    }
  }
};
$Ql = class {
  constructor(n, e) {
    this._labelService = n;
    this._model = e;
  }
  resolve(n) {
    const {
      name: e
    } = n;
    if (e === "TM_FILENAME") {
      return fd(this._model.uri.fsPath);
    }
    if (e === "TM_FILENAME_BASE") {
      const t = fd(this._model.uri.fsPath);
      const i = t.lastIndexOf(".");
      if (i <= 0) {
        return t;
      } else {
        return t.slice(0, i);
      }
    } else {
      if (e === "TM_DIRECTORY") {
        if (zN(this._model.uri.fsPath) === ".") {
          return "";
        } else {
          return this._labelService.getUriLabel(Td(this._model.uri));
        }
      }
      if (e === "TM_FILEPATH") {
        return this._labelService.getUriLabel(this._model.uri);
      }
      if (e === "RELATIVE_FILEPATH") {
        return this._labelService.getUriLabel(this._model.uri, {
          relative: true,
          noPrefix: true
        });
      }
    }
  }
};
qQl = class {
  constructor(n, e, t, i) {
    this._readClipboardText = n;
    this._selectionIdx = e;
    this._selectionCount = t;
    this._spread = i;
  }
  resolve(n) {
    if (n.name !== "CLIPBOARD") {
      return;
    }
    const e = this._readClipboardText();
    if (e) {
      if (this._spread) {
        const t = e.split(/\r\n|\n|\r/).filter(i => !E6(i));
        if (t.length === this._selectionCount) {
          return t[this._selectionIdx];
        }
      }
      return e;
    }
  }
};
Sgi = class {
  constructor(e, t, i) {
    this._model = e;
    this._selection = t;
    this._languageConfigurationService = i;
  }
  resolve(e) {
    const {
      name: t
    } = e;
    const i = this._model.getLanguageIdAtPosition(this._selection.selectionStartLineNumber, this._selection.selectionStartColumn);
    const r = this._languageConfigurationService.getLanguageConfiguration(i).comments;
    if (r) {
      if (t === "LINE_COMMENT") {
        return r.lineCommentToken || undefined;
      }
      if (t === "BLOCK_COMMENT_START") {
        return r.blockCommentStartToken || undefined;
      }
      if (t === "BLOCK_COMMENT_END") {
        return r.blockCommentEndToken || undefined;
      }
    }
  }
};
Sgi = __decorate([__param(2, JS)], Sgi);
HQl = class LUr {
  constructor() {
    this._date = new Date();
  }
  static {
    this.dayNames = [_(1546, null), _(1547, null), _(1548, null), _(1549, null), _(1550, null), _(1551, null), _(1552, null)];
  }
  static {
    this.dayNamesShort = [_(1553, null), _(1554, null), _(1555, null), _(1556, null), _(1557, null), _(1558, null), _(1559, null)];
  }
  static {
    this.monthNames = [_(1560, null), _(1561, null), _(1562, null), _(1563, null), _(1564, null), _(1565, null), _(1566, null), _(1567, null), _(1568, null), _(1569, null), _(1570, null), _(1571, null)];
  }
  static {
    this.monthNamesShort = [_(1572, null), _(1573, null), _(1574, null), _(1575, null), _(1576, null), _(1577, null), _(1578, null), _(1579, null), _(1580, null), _(1581, null), _(1582, null), _(1583, null)];
  }
  resolve(e) {
    const {
      name: t
    } = e;
    if (t === "CURRENT_YEAR") {
      return String(this._date.getFullYear());
    }
    if (t === "CURRENT_YEAR_SHORT") {
      return String(this._date.getFullYear()).slice(-2);
    }
    if (t === "CURRENT_MONTH") {
      return String(this._date.getMonth().valueOf() + 1).padStart(2, "0");
    }
    if (t === "CURRENT_DATE") {
      return String(this._date.getDate().valueOf()).padStart(2, "0");
    }
    if (t === "CURRENT_HOUR") {
      return String(this._date.getHours().valueOf()).padStart(2, "0");
    }
    if (t === "CURRENT_MINUTE") {
      return String(this._date.getMinutes().valueOf()).padStart(2, "0");
    }
    if (t === "CURRENT_SECOND") {
      return String(this._date.getSeconds().valueOf()).padStart(2, "0");
    }
    if (t === "CURRENT_DAY_NAME") {
      return LUr.dayNames[this._date.getDay()];
    }
    if (t === "CURRENT_DAY_NAME_SHORT") {
      return LUr.dayNamesShort[this._date.getDay()];
    }
    if (t === "CURRENT_MONTH_NAME") {
      return LUr.monthNames[this._date.getMonth()];
    }
    if (t === "CURRENT_MONTH_NAME_SHORT") {
      return LUr.monthNamesShort[this._date.getMonth()];
    }
    if (t === "CURRENT_SECONDS_UNIX") {
      return String(Math.floor(this._date.getTime() / 1000));
    }
    if (t === "CURRENT_TIMEZONE_OFFSET") {
      const i = this._date.getTimezoneOffset();
      const r = i > 0 ? "-" : "+";
      const s = Math.trunc(Math.abs(i / 60));
      const o = s < 10 ? "0" + s : s;
      const a = Math.abs(i) - s * 60;
      const l = a < 10 ? "0" + a : a;
      return r + o + ":" + l;
    }
  }
};
JQl = class {
  constructor(n) {
    this._workspaceService = n;
  }
  resolve(n) {
    if (!this._workspaceService) {
      return;
    }
    const e = fW(this._workspaceService.getWorkspace());
    if (!fOt(e)) {
      if (n.name === "WORKSPACE_NAME") {
        return this._resolveWorkspaceName(e);
      }
      if (n.name === "WORKSPACE_FOLDER") {
        return this._resoveWorkspacePath(e);
      }
    }
  }
  _resolveWorkspaceName(n) {
    if (oE(n)) {
      return fd(n.uri.path);
    }
    let e = fd(n.configPath.path);
    if (e.endsWith(Noe)) {
      e = e.substr(0, e.length - Noe.length - 1);
    }
    return e;
  }
  _resoveWorkspacePath(n) {
    if (oE(n)) {
      return pz(n.uri.fsPath);
    }
    const e = fd(n.configPath.path);
    let t = n.configPath.fsPath;
    if (t.endsWith(e)) {
      t = t.substr(0, t.length - e.length - 1);
    }
    if (t) {
      return pz(t);
    } else {
      return "/";
    }
  }
};
GQl = class {
  resolve(n) {
    const {
      name: e
    } = n;
    if (e === "RANDOM") {
      return Math.random().toString().slice(-6);
    }
    if (e === "RANDOM_HEX") {
      return Math.random().toString(16).slice(-6);
    }
    if (e === "UUID") {
      return Wr();
    }
  }
};
