"use strict";

// Module: out-build/vs/platform/theme/common/themeService.js
// Offset: 906667 (bundle byte offset)
// Size: 2181 bytes
qi();
yn();
rt();
Wt();
Ws();
qI();
bo = xi("themeService");
$1c = Be.file;
mVe = Be.folder;
j4n = {
  ThemingContribution: "base.contributions.theming"
};
Rdh = class extends at {
  constructor() {
    super();
    this.themingParticipants = [];
    this.themingParticipants = [];
    this.onThemingParticipantAddedEmitter = this._register(new Qe());
  }
  onColorThemeChange(n) {
    this.themingParticipants.push(n);
    this.onThemingParticipantAddedEmitter.fire(n);
    return $i(() => {
      const e = this.themingParticipants.indexOf(n);
      this.themingParticipants.splice(e, 1);
    });
  }
  get onThemingParticipantAdded() {
    return this.onThemingParticipantAddedEmitter.event;
  }
  getThemingParticipants() {
    return this.themingParticipants;
  }
};
q1c = new Rdh();
Di.add(j4n.ThemingContribution, q1c);
NH = class extends at {
  constructor(n) {
    super();
    this.themeService = n;
    this.theme = n.getColorTheme();
    this._register(this.themeService.onDidColorThemeChange(e => this.onThemeChange(e)));
  }
  onThemeChange(n) {
    this.theme = n;
    this.updateStyles();
  }
  updateStyles() {}
  getColor(n, e) {
    let t = this.theme.getColor(n);
    if (t && e) {
      t = e(t, this.theme);
    }
    if (t) {
      return t.toString();
    } else {
      return null;
    }
  }
};
