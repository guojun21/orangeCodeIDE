"use strict";

// Module: out-build/vs/platform/accessibilitySignal/browser/accessibilitySignalService.js
// Offset: 1934466 (bundle byte offset)
// Size: 15657 bytes
nFn();
Nbe();
rt();
zr();
Yn();
Uc();
Ht();
zg();
Ei();
Wt();
AF();
Pa();
fS = xi("accessibilitySignalService");
m3t = Symbol("AcknowledgeDocCommentsToken");
C3o = class extends at {
  constructor(e, t, i) {
    super();
    this.configurationService = e;
    this.accessibilityService = t;
    this.telemetryService = i;
    this.playingCustomSounds = new Set();
    this.sounds = new Map();
    this.screenReaderAttached = tp(this, this.accessibilityService.onDidChangeScreenReaderOptimized, () => this.accessibilityService.isScreenReaderOptimized());
    this.sentTelemetry = new Set();
    this.playingSounds = new Set();
    this._signalConfigValue = new $Ft(r => C9(r.settingsKey, {
      sound: "off",
      announcement: "off"
    }, this.configurationService));
    this._signalEnabledState = new $Ft({
      getCacheKey: RnA
    }, r => Ro(s => {
      const o = this._signalConfigValue.get(r.signal).read(s);
      return (r.modality === "sound" || r.modality === undefined) && !!Cwh(o.sound, () => this.screenReaderAttached.read(s), r.userGesture) || (r.modality === "announcement" || r.modality === undefined) && !!Cwh(o.announcement, () => this.screenReaderAttached.read(s), r.userGesture);
    }).recomputeInitiallyAndOnChange(this._store));
  }
  getEnabledState(e, t, i) {
    return new qgt(this._signalEnabledState.get({
      signal: e,
      userGesture: t,
      modality: i
    }));
  }
  async playSignal(e, t = {}) {
    const i = t.modality === "announcement" || t.modality === undefined;
    const r = e.announcementMessage;
    if (i && this.isAnnouncementEnabled(e, t.userGesture) && r) {
      this.accessibilityService.status(r);
    }
    if ((t.modality === "sound" || t.modality === undefined) && this.isSoundEnabled(e, t.userGesture)) {
      this.sendSignalTelemetry(e, t.source);
      await this.playSound(e.sound.getSound(), t.allowManyInParallel);
    }
  }
  async playSignals(e) {
    for (const s of e) {
      this.sendSignalTelemetry("signal" in s ? s.signal : s, "source" in s ? s.source : undefined);
    }
    const t = e.map(s => "signal" in s ? s.signal : s);
    const i = t.filter(s => this.isAnnouncementEnabled(s)).map(s => s.announcementMessage);
    if (i.length) {
      this.accessibilityService.status(i.join(", "));
    }
    const r = new Set(t.filter(s => this.isSoundEnabled(s)).map(s => s.sound.getSound()));
    await Promise.all(Array.from(r).map(s => this.playSound(s, true)));
  }
  sendSignalTelemetry(e, t) {
    const i = this.accessibilityService.isScreenReaderOptimized();
    const r = e.name + (t ? `::${t}` : "") + (i ? "{screenReaderOptimized}" : "");
    if (!this.sentTelemetry.has(r) && this.getVolumeInPercent() !== 0) {
      this.sentTelemetry.add(r);
      this.telemetryService.publicLog2("signal.played", {
        signal: e.name,
        source: t ?? "",
        isScreenReaderOptimized: i
      });
    }
  }
  getVolumeInPercent() {
    const e = this.configurationService.getValue("accessibility.signalOptions.volume");
    if (typeof e != "number") {
      return 50;
    } else {
      return Math.max(Math.min(e, 100), 0);
    }
  }
  async playSound(e, t = false) {
    if (!t && this.playingSounds.has(e)) {
      return;
    }
    this.playingSounds.add(e);
    const i = og.asBrowserUri(`vs/platform/accessibilitySignal/browser/media/${e.fileName}`).toString(true);
    try {
      const r = this.sounds.get(i);
      if (r) {
        r.volume = this.getVolumeInPercent() / 100;
        r.currentTime = 0;
        await r.play();
      } else {
        const s = await Swh(i, this.getVolumeInPercent() / 100);
        this.sounds.set(i, s);
      }
    } catch (r) {
      if (!r.message.includes("play() can only be initiated by a user gesture")) {
        console.error("Error while playing sound", r);
      }
    } finally {
      this.playingSounds.delete(e);
    }
  }
  async playCustomSound(e, t = false) {
    if (!e || !t && this.playingCustomSounds.has(e)) {
      return;
    }
    this.playingCustomSounds.add(e);
    let i;
    if (e.startsWith("http://") || e.startsWith("https://")) {
      i = e;
    } else {
      let r;
      if (e.startsWith("file://")) {
        r = je.parse(e);
      } else {
        if (!e.startsWith("/")) {
          /^[a-zA-Z]:/.test(e);
        }
        r = je.file(e);
      }
      i = og.uriToBrowserUri(r).toString(true);
    }
    try {
      const r = this.sounds.get(i);
      if (r) {
        r.volume = this.getVolumeInPercent() / 100;
        r.currentTime = 0;
        await r.play();
      } else {
        const s = await Swh(i, this.getVolumeInPercent() / 100);
        this.sounds.set(i, s);
      }
    } catch (r) {
      if (!(r instanceof Error ? r.message : String(r)).includes("play() can only be initiated by a user gesture")) {
        console.error("Error while playing custom sound", r);
      }
      throw r;
    } finally {
      this.playingCustomSounds.delete(e);
    }
  }
  playSignalLoop(e, t) {
    let i = true;
    const r = () => {
      if (i) {
        this.playSignal(e, {
          allowManyInParallel: true
        }).finally(() => {
          setTimeout(() => {
            if (i) {
              r();
            }
          }, t);
        });
      }
    };
    r();
    return $i(() => i = false);
  }
  isAnnouncementEnabled(e, t) {
    if (e.announcementMessage) {
      return this._signalEnabledState.get({
        signal: e,
        userGesture: !!t,
        modality: "announcement"
      }).get();
    } else {
      return false;
    }
  }
  isSoundEnabled(e, t) {
    return this._signalEnabledState.get({
      signal: e,
      userGesture: !!t,
      modality: "sound"
    }).get();
  }
  onSoundEnabledChanged(e) {
    return this.getEnabledState(e, false).onDidChange;
  }
  getDelayMs(e, t, i) {
    if (!this.configurationService.getValue("accessibility.signalOptions.debouncePositionChanges")) {
      return 0;
    }
    let r;
    if (e.name === rb.errorAtPosition.name && i === "positional") {
      r = this.configurationService.getValue("accessibility.signalOptions.experimental.delays.errorAtPosition");
    } else if (e.name === rb.warningAtPosition.name && i === "positional") {
      r = this.configurationService.getValue("accessibility.signalOptions.experimental.delays.warningAtPosition");
    } else {
      r = this.configurationService.getValue("accessibility.signalOptions.experimental.delays.general");
    }
    if (t === "sound") {
      return r.sound;
    } else {
      return r.announcement;
    }
  }
};
C3o = __decorate([__param(0, Fn), __param(1, Cf), __param(2, ea)], C3o);
gk = class RL {
  static register(e) {
    return new RL(e.fileName);
  }
  static {
    this.error = RL.register({
      fileName: "error.mp3"
    });
  }
  static {
    this.warning = RL.register({
      fileName: "warning.mp3"
    });
  }
  static {
    this.success = RL.register({
      fileName: "success.mp3"
    });
  }
  static {
    this.foldedArea = RL.register({
      fileName: "foldedAreas.mp3"
    });
  }
  static {
    this.break = RL.register({
      fileName: "break.mp3"
    });
  }
  static {
    this.quickFixes = RL.register({
      fileName: "quickFixes.mp3"
    });
  }
  static {
    this.taskCompleted = RL.register({
      fileName: "taskCompleted.mp3"
    });
  }
  static {
    this.taskFailed = RL.register({
      fileName: "taskFailed.mp3"
    });
  }
  static {
    this.terminalBell = RL.register({
      fileName: "terminalBell.mp3"
    });
  }
  static {
    this.diffLineInserted = RL.register({
      fileName: "diffLineInserted.mp3"
    });
  }
  static {
    this.diffLineDeleted = RL.register({
      fileName: "diffLineDeleted.mp3"
    });
  }
  static {
    this.diffLineModified = RL.register({
      fileName: "diffLineModified.mp3"
    });
  }
  static {
    this.requestSent = RL.register({
      fileName: "requestSent.mp3"
    });
  }
  static {
    this.responseReceived1 = RL.register({
      fileName: "responseReceived1.mp3"
    });
  }
  static {
    this.responseReceived2 = RL.register({
      fileName: "responseReceived2.mp3"
    });
  }
  static {
    this.responseReceived3 = RL.register({
      fileName: "responseReceived3.mp3"
    });
  }
  static {
    this.responseReceived4 = RL.register({
      fileName: "responseReceived4.mp3"
    });
  }
  static {
    this.clear = RL.register({
      fileName: "clear.mp3"
    });
  }
  static {
    this.save = RL.register({
      fileName: "save.mp3"
    });
  }
  static {
    this.format = RL.register({
      fileName: "format.mp3"
    });
  }
  static {
    this.voiceRecordingStarted = RL.register({
      fileName: "voiceRecordingStarted.mp3"
    });
  }
  static {
    this.voiceRecordingStopped = RL.register({
      fileName: "voiceRecordingStopped.mp3"
    });
  }
  static {
    this.progress = RL.register({
      fileName: "progress.mp3"
    });
  }
  static {
    this.chatEditModifiedFile = RL.register({
      fileName: "chatEditModifiedFile.mp3"
    });
  }
  static {
    this.editsKept = RL.register({
      fileName: "editsKept.mp3"
    });
  }
  static {
    this.editsUndone = RL.register({
      fileName: "editsUndone.mp3"
    });
  }
  static {
    this.done1 = RL.register({
      fileName: "done1.mp3"
    });
  }
  constructor(e) {
    this.fileName = e;
  }
};
kwh = class {
  constructor(n) {
    this.randomOneOf = n;
  }
  getSound(n = false) {
    if (n || this.randomOneOf.length === 1) {
      return this.randomOneOf[0];
    }
    {
      const e = Math.floor(Math.random() * this.randomOneOf.length);
      return this.randomOneOf[e];
    }
  }
};
rb = class Yx {
  constructor(e, t, i, r, s, o) {
    this.sound = e;
    this.name = t;
    this.legacySoundSettingsKey = i;
    this.settingsKey = r;
    this.legacyAnnouncementSettingsKey = s;
    this.announcementMessage = o;
  }
  static {
    this._signals = new Set();
  }
  static register(e) {
    const t = new kwh("randomOneOf" in e.sound ? e.sound.randomOneOf : [e.sound]);
    const i = new Yx(t, e.name, e.legacySoundSettingsKey, e.settingsKey, e.legacyAnnouncementSettingsKey, e.announcementMessage);
    Yx._signals.add(i);
    return i;
  }
  static get allAccessibilitySignals() {
    return [...this._signals];
  }
  static {
    this.errorAtPosition = Yx.register({
      name: _(1715, null),
      sound: gk.error,
      announcementMessage: _(1716, null),
      settingsKey: "accessibility.signals.positionHasError",
      delaySettingsKey: "accessibility.signalOptions.delays.errorAtPosition"
    });
  }
  static {
    this.warningAtPosition = Yx.register({
      name: _(1717, null),
      sound: gk.warning,
      announcementMessage: _(1718, null),
      settingsKey: "accessibility.signals.positionHasWarning",
      delaySettingsKey: "accessibility.signalOptions.delays.warningAtPosition"
    });
  }
  static {
    this.errorOnLine = Yx.register({
      name: _(1719, null),
      sound: gk.error,
      legacySoundSettingsKey: "audioCues.lineHasError",
      legacyAnnouncementSettingsKey: "accessibility.alert.error",
      announcementMessage: _(1720, null),
      settingsKey: "accessibility.signals.lineHasError"
    });
  }
  static {
    this.warningOnLine = Yx.register({
      name: _(1721, null),
      sound: gk.warning,
      legacySoundSettingsKey: "audioCues.lineHasWarning",
      legacyAnnouncementSettingsKey: "accessibility.alert.warning",
      announcementMessage: _(1722, null),
      settingsKey: "accessibility.signals.lineHasWarning"
    });
  }
  static {
    this.foldedArea = Yx.register({
      name: _(1723, null),
      sound: gk.foldedArea,
      legacySoundSettingsKey: "audioCues.lineHasFoldedArea",
      legacyAnnouncementSettingsKey: "accessibility.alert.foldedArea",
      announcementMessage: _(1724, null),
      settingsKey: "accessibility.signals.lineHasFoldedArea"
    });
  }
  static {
    this.break = Yx.register({
      name: _(1725, null),
      sound: gk.break,
      legacySoundSettingsKey: "audioCues.lineHasBreakpoint",
      legacyAnnouncementSettingsKey: "accessibility.alert.breakpoint",
      announcementMessage: _(1726, null),
      settingsKey: "accessibility.signals.lineHasBreakpoint"
    });
  }
  static {
    this.inlineSuggestion = Yx.register({
      name: _(1727, null),
      sound: gk.quickFixes,
      legacySoundSettingsKey: "audioCues.lineHasInlineSuggestion",
      settingsKey: "accessibility.signals.lineHasInlineSuggestion"
    });
  }
  static {
    this.terminalQuickFix = Yx.register({
      name: _(1728, null),
      sound: gk.quickFixes,
      legacySoundSettingsKey: "audioCues.terminalQuickFix",
      legacyAnnouncementSettingsKey: "accessibility.alert.terminalQuickFix",
      announcementMessage: _(1729, null),
      settingsKey: "accessibility.signals.terminalQuickFix"
    });
  }
  static {
    this.onDebugBreak = Yx.register({
      name: _(1730, null),
      sound: gk.break,
      legacySoundSettingsKey: "audioCues.onDebugBreak",
      legacyAnnouncementSettingsKey: "accessibility.alert.onDebugBreak",
      announcementMessage: _(1731, null),
      settingsKey: "accessibility.signals.onDebugBreak"
    });
  }
  static {
    this.noInlayHints = Yx.register({
      name: _(1732, null),
      sound: gk.error,
      legacySoundSettingsKey: "audioCues.noInlayHints",
      legacyAnnouncementSettingsKey: "accessibility.alert.noInlayHints",
      announcementMessage: _(1733, null),
      settingsKey: "accessibility.signals.noInlayHints"
    });
  }
  static {
    this.taskCompleted = Yx.register({
      name: _(1734, null),
      sound: gk.taskCompleted,
      legacySoundSettingsKey: "audioCues.taskCompleted",
      legacyAnnouncementSettingsKey: "accessibility.alert.taskCompleted",
      announcementMessage: _(1735, null),
      settingsKey: "accessibility.signals.taskCompleted"
    });
  }
  static {
    this.taskFailed = Yx.register({
      name: _(1736, null),
      sound: gk.taskFailed,
      legacySoundSettingsKey: "audioCues.taskFailed",
      legacyAnnouncementSettingsKey: "accessibility.alert.taskFailed",
      announcementMessage: _(1737, null),
      settingsKey: "accessibility.signals.taskFailed"
    });
  }
  static {
    this.terminalCommandFailed = Yx.register({
      name: _(1738, null),
      sound: gk.error,
      legacySoundSettingsKey: "audioCues.terminalCommandFailed",
      legacyAnnouncementSettingsKey: "accessibility.alert.terminalCommandFailed",
      announcementMessage: _(1739, null),
      settingsKey: "accessibility.signals.terminalCommandFailed"
    });
  }
  static {
    this.terminalCommandSucceeded = Yx.register({
      name: _(1740, null),
      sound: gk.success,
      announcementMessage: _(1741, null),
      settingsKey: "accessibility.signals.terminalCommandSucceeded"
    });
  }
  static {
    this.terminalBell = Yx.register({
      name: _(1742, null),
      sound: gk.terminalBell,
      legacySoundSettingsKey: "audioCues.terminalBell",
      legacyAnnouncementSettingsKey: "accessibility.alert.terminalBell",
      announcementMessage: _(1743, null),
      settingsKey: "accessibility.signals.terminalBell"
    });
  }
  static {
    this.notebookCellCompleted = Yx.register({
      name: _(1744, null),
      sound: gk.taskCompleted,
      legacySoundSettingsKey: "audioCues.notebookCellCompleted",
      legacyAnnouncementSettingsKey: "accessibility.alert.notebookCellCompleted",
      announcementMessage: _(1745, null),
      settingsKey: "accessibility.signals.notebookCellCompleted"
    });
  }
  static {
    this.notebookCellFailed = Yx.register({
      name: _(1746, null),
      sound: gk.taskFailed,
      legacySoundSettingsKey: "audioCues.notebookCellFailed",
      legacyAnnouncementSettingsKey: "accessibility.alert.notebookCellFailed",
      announcementMessage: _(1747, null),
      settingsKey: "accessibility.signals.notebookCellFailed"
    });
  }
  static {
    this.diffLineInserted = Yx.register({
      name: _(1748, null),
      sound: gk.diffLineInserted,
      legacySoundSettingsKey: "audioCues.diffLineInserted",
      settingsKey: "accessibility.signals.diffLineInserted"
    });
  }
  static {
    this.diffLineDeleted = Yx.register({
      name: _(1749, null),
      sound: gk.diffLineDeleted,
      legacySoundSettingsKey: "audioCues.diffLineDeleted",
      settingsKey: "accessibility.signals.diffLineDeleted"
    });
  }
  static {
    this.diffLineModified = Yx.register({
      name: _(1750, null),
      sound: gk.diffLineModified,
      legacySoundSettingsKey: "audioCues.diffLineModified",
      settingsKey: "accessibility.signals.diffLineModified"
    });
  }
  static {
    this.chatEditModifiedFile = Yx.register({
      name: _(1751, null),
      sound: gk.chatEditModifiedFile,
      announcementMessage: _(1752, null),
      settingsKey: "accessibility.signals.chatEditModifiedFile"
    });
  }
  static {
    this.chatRequestSent = Yx.register({
      name: _(1753, null),
      sound: gk.requestSent,
      legacySoundSettingsKey: "audioCues.chatRequestSent",
      legacyAnnouncementSettingsKey: "accessibility.alert.chatRequestSent",
      announcementMessage: _(1754, null),
      settingsKey: "accessibility.signals.chatRequestSent"
    });
  }
  static {
    this.chatResponseReceived = Yx.register({
      name: _(1755, null),
      legacySoundSettingsKey: "audioCues.chatResponseReceived",
      sound: {
        randomOneOf: [gk.responseReceived1, gk.responseReceived2, gk.responseReceived3, gk.responseReceived4]
      },
      settingsKey: "accessibility.signals.chatResponseReceived"
    });
  }
  static {
    this.codeActionTriggered = Yx.register({
      name: _(1756, null),
      sound: gk.voiceRecordingStarted,
      legacySoundSettingsKey: "audioCues.codeActionRequestTriggered",
      legacyAnnouncementSettingsKey: "accessibility.alert.codeActionRequestTriggered",
      announcementMessage: _(1757, null),
      settingsKey: "accessibility.signals.codeActionTriggered"
    });
  }
  static {
    this.codeActionApplied = Yx.register({
      name: _(1758, null),
      legacySoundSettingsKey: "audioCues.codeActionApplied",
      sound: gk.voiceRecordingStopped,
      settingsKey: "accessibility.signals.codeActionApplied"
    });
  }
  static {
    this.progress = Yx.register({
      name: _(1759, null),
      sound: gk.progress,
      legacySoundSettingsKey: "audioCues.chatResponsePending",
      legacyAnnouncementSettingsKey: "accessibility.alert.progress",
      announcementMessage: _(1760, null),
      settingsKey: "accessibility.signals.progress"
    });
  }
  static {
    this.clear = Yx.register({
      name: _(1761, null),
      sound: gk.clear,
      legacySoundSettingsKey: "audioCues.clear",
      legacyAnnouncementSettingsKey: "accessibility.alert.clear",
      announcementMessage: _(1762, null),
      settingsKey: "accessibility.signals.clear"
    });
  }
  static {
    this.save = Yx.register({
      name: _(1763, null),
      sound: gk.save,
      legacySoundSettingsKey: "audioCues.save",
      legacyAnnouncementSettingsKey: "accessibility.alert.save",
      announcementMessage: _(1764, null),
      settingsKey: "accessibility.signals.save"
    });
  }
  static {
    this.format = Yx.register({
      name: _(1765, null),
      sound: gk.format,
      legacySoundSettingsKey: "audioCues.format",
      legacyAnnouncementSettingsKey: "accessibility.alert.format",
      announcementMessage: _(1766, null),
      settingsKey: "accessibility.signals.format"
    });
  }
  static {
    this.voiceRecordingStarted = Yx.register({
      name: _(1767, null),
      sound: gk.voiceRecordingStarted,
      legacySoundSettingsKey: "audioCues.voiceRecordingStarted",
      settingsKey: "accessibility.signals.voiceRecordingStarted"
    });
  }
  static {
    this.voiceRecordingStopped = Yx.register({
      name: _(1768, null),
      sound: gk.voiceRecordingStopped,
      legacySoundSettingsKey: "audioCues.voiceRecordingStopped",
      settingsKey: "accessibility.signals.voiceRecordingStopped"
    });
  }
  static {
    this.editsKept = Yx.register({
      name: _(1769, null),
      sound: gk.editsKept,
      announcementMessage: _(1770, null),
      settingsKey: "accessibility.signals.editsKept"
    });
  }
  static {
    this.editsUndone = Yx.register({
      name: _(1771, null),
      sound: gk.editsUndone,
      announcementMessage: _(1772, null),
      settingsKey: "accessibility.signals.editsUndone"
    });
  }
};
