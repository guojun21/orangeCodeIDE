"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/languageModelStats.js
// Offset: 28336001 (bundle byte offset)
// Size: 976 bytes
rt();
Wt();
kr();
aO();
Ws();
Ht();
qi();
mcu = xi("ILanguageModelStatsService");
aAa = class extends at {
  constructor(e, t) {
    super();
    this.extensionFeaturesManagementService = e;
    for (const i in t.keys(-1, 0)) {
      if (i.startsWith("languageModelStats.") || i.startsWith("languageModelAccess.")) {
        t.remove(i, -1);
      }
    }
  }
  async update(e, t, i, r) {
    await this.extensionFeaturesManagementService.getAccess(t, pcu);
  }
};
aAa = __decorate([__param(0, Mme), __param(1, Hi)], aAa);
pcu = "copilot";
Di.as(hP.ExtensionFeaturesRegistry).registerExtensionFeature({
  id: pcu,
  label: _(5649, null),
  description: _(5650, null),
  icon: Be.copilot,
  access: {
    canToggle: false
  },
  accessDataLabel: _(5651, null)
});
