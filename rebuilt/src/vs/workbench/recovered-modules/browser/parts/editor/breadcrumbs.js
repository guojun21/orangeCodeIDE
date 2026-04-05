"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/breadcrumbs.js
// Offset: 31421326 (bundle byte offset)
// Size: 4544 bytes
yn();
Ht();
Mp();
Er();
Wt();
Ws();
oxe = xi("IEditorBreadcrumbsService");
JLf = class {
  constructor() {
    this._map = new Map();
  }
  register(n, e) {
    if (this._map.has(n)) {
      throw new Error(`group (${n}) has already a widget`);
    }
    this._map.set(n, e);
    return {
      dispose: () => this._map.delete(n)
    };
  }
  getWidget(n) {
    return this._map.get(n);
  }
};
Vi(oxe, JLf, 1);
axe = class CJe {
  constructor() {}
  static {
    this.IsEnabled = CJe._stub("breadcrumbs.enabled");
  }
  static {
    this.UseQuickPick = CJe._stub("breadcrumbs.useQuickPick");
  }
  static {
    this.FilePath = CJe._stub("breadcrumbs.filePath");
  }
  static {
    this.SymbolPath = CJe._stub("breadcrumbs.symbolPath");
  }
  static {
    this.SymbolSortOrder = CJe._stub("breadcrumbs.symbolSortOrder");
  }
  static {
    this.Icons = CJe._stub("breadcrumbs.icons");
  }
  static {
    this.TitleScrollbarSizing = CJe._stub("workbench.editor.titleScrollbarSizing");
  }
  static {
    this.FileExcludes = CJe._stub("files.exclude");
  }
  static _stub(e) {
    return {
      bindTo(t) {
        const i = new Qe();
        const r = t.onDidChangeConfiguration(s => {
          if (s.affectsConfiguration(e)) {
            i.fire(undefined);
          }
        });
        return new class {
          constructor() {
            this.name = e;
            this.onDidChange = i.event;
          }
          getValue(s) {
            if (s) {
              return t.getValue(e, s);
            } else {
              return t.getValue(e);
            }
          }
          updateValue(s, o) {
            if (o) {
              return t.updateValue(e, s, o);
            } else {
              return t.updateValue(e, s);
            }
          }
          dispose() {
            r.dispose();
            i.dispose();
          }
        }();
      }
    };
  }
};
Di.as(Dh.Configuration).registerConfiguration({
  id: "breadcrumbs",
  title: _(3348, null),
  order: 101,
  type: "object",
  properties: {
    "breadcrumbs.enabled": {
      description: _(3349, null),
      type: "boolean",
      default: true
    },
    "breadcrumbs.filePath": {
      description: _(3350, null),
      type: "string",
      default: "on",
      enum: ["on", "off", "last"],
      enumDescriptions: [_(3351, null), _(3352, null), _(3353, null)]
    },
    "breadcrumbs.symbolPath": {
      description: _(3354, null),
      type: "string",
      default: "on",
      enum: ["on", "off", "last"],
      enumDescriptions: [_(3355, null), _(3356, null), _(3357, null)]
    },
    "breadcrumbs.symbolSortOrder": {
      description: _(3358, null),
      type: "string",
      default: "position",
      scope: 6,
      enum: ["position", "name", "type"],
      enumDescriptions: [_(3359, null), _(3360, null), _(3361, null)]
    },
    "breadcrumbs.icons": {
      description: _(3362, null),
      type: "boolean",
      default: true
    },
    "breadcrumbs.showFiles": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3363, null)
    },
    "breadcrumbs.showModules": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3364, null)
    },
    "breadcrumbs.showNamespaces": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3365, null)
    },
    "breadcrumbs.showPackages": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3366, null)
    },
    "breadcrumbs.showClasses": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3367, null)
    },
    "breadcrumbs.showMethods": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3368, null)
    },
    "breadcrumbs.showProperties": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3369, null)
    },
    "breadcrumbs.showFields": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3370, null)
    },
    "breadcrumbs.showConstructors": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3371, null)
    },
    "breadcrumbs.showEnums": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3372, null)
    },
    "breadcrumbs.showInterfaces": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3373, null)
    },
    "breadcrumbs.showFunctions": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3374, null)
    },
    "breadcrumbs.showVariables": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3375, null)
    },
    "breadcrumbs.showConstants": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3376, null)
    },
    "breadcrumbs.showStrings": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3377, null)
    },
    "breadcrumbs.showNumbers": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3378, null)
    },
    "breadcrumbs.showBooleans": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3379, null)
    },
    "breadcrumbs.showArrays": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3380, null)
    },
    "breadcrumbs.showObjects": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3381, null)
    },
    "breadcrumbs.showKeys": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3382, null)
    },
    "breadcrumbs.showNull": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3383, null)
    },
    "breadcrumbs.showEnumMembers": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3384, null)
    },
    "breadcrumbs.showStructs": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3385, null)
    },
    "breadcrumbs.showEvents": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3386, null)
    },
    "breadcrumbs.showOperators": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3387, null)
    },
    "breadcrumbs.showTypeParameters": {
      type: "boolean",
      default: true,
      scope: 6,
      markdownDescription: _(3388, null)
    }
  }
});
