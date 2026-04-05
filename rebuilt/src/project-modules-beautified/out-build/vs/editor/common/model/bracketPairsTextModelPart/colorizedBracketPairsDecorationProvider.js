"use strict";

// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/colorizedBracketPairsDecorationProvider.js
// Offset: 1107201 (bundle byte offset)
// Size: 1984 bytes
yn();
rt();
ts();
az();
Io();
Mph = class extends at {
  constructor(n) {
    super();
    this.textModel = n;
    this.colorProvider = new $Ec();
    this.onDidChangeEmitter = new Qe();
    this.onDidChange = this.onDidChangeEmitter.event;
    this.colorizationOptions = n.getOptions().bracketPairColorizationOptions;
    this._register(n.bracketPairs.onDidChange(e => {
      this.onDidChangeEmitter.fire();
    }));
  }
  handleDidChangeOptions(n) {
    this.colorizationOptions = this.textModel.getOptions().bracketPairColorizationOptions;
  }
  getDecorationsInRange(n, e, t, i) {
    if (i) {
      return [];
    } else if (e === undefined) {
      return [];
    } else if (this.colorizationOptions.enabled) {
      return this.textModel.bracketPairs.getBracketsInRange(n, true).map(s => ({
        id: `bracket${s.range.toString()}-${s.nestingLevel}`,
        options: {
          description: "BracketPairColorization",
          inlineClassName: this.colorProvider.getInlineClassName(s, this.colorizationOptions.independentColorPoolPerBracketType)
        },
        ownerId: 0,
        range: s.range
      })).toArray();
    } else {
      return [];
    }
  }
  getAllDecorations(n, e) {
    if (n === undefined) {
      return [];
    } else if (this.colorizationOptions.enabled) {
      return this.getDecorationsInRange(new Zt(1, 1, this.textModel.getLineCount(), 1), n, e);
    } else {
      return [];
    }
  }
};
$Ec = class {
  constructor() {
    this.unexpectedClosingBracketClassName = "unexpected-closing-bracket";
  }
  getInlineClassName(n, e) {
    if (n.isInvalid) {
      return this.unexpectedClosingBracketClassName;
    } else {
      return this.getInlineClassNameOfLevel(e ? n.nestingLevelOfEqualBracketType : n.nestingLevel);
    }
  }
  getInlineClassNameOfLevel(n) {
    return `bracket-highlighting-${n % 30}`;
  }
};
HI((n, e) => {
  const t = [bEc, vEc, AEc, yEc, wEc, _Ec];
  const i = new $Ec();
  e.addRule(`.monaco-editor .${i.unexpectedClosingBracketClassName} { color: ${n.getColor(Mmh)}; }`);
  const r = t.map(s => n.getColor(s)).filter(s => !!s).filter(s => !s.isTransparent());
  for (let s = 0; s < 30; s++) {
    const o = r[s % r.length];
    e.addRule(`.monaco-editor .${i.getInlineClassNameOfLevel(s)} { color: ${o}; }`);
  }
});
