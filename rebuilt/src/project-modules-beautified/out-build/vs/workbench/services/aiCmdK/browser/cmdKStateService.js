"use strict";

// Module: out-build/vs/workbench/services/aiCmdK/browser/cmdKStateService.js
// Offset: 27521390 (bundle byte offset)
// Size: 4092 bytes
yn();
Wt();
rt();
Er();
si();
mru = new Sn("editcontextbarcursor", false);
I2 = xi("cmdKStateService");
Mfa = class extends at {
  constructor(e) {
    super();
    this.contextKeyService = e;
    this._onDiffAttachmentChanged = this._register(new Qe());
    this.onDiffAttachmentChanged = this._onDiffAttachmentChanged.event;
    this._onPromptBarAdded = this._register(new Qe());
    this.onPromptBarAdded = this._onPromptBarAdded.event;
    this._onPromptBarRemoved = this._register(new Qe());
    this.onPromptBarRemoved = this._onPromptBarRemoved.event;
    this._onPropertyChanged = this._register(new Qe());
    this.onPropertyChanged = this._onPropertyChanged.event;
    this._onDataPropertyChanged = this._register(new Qe());
    this.onDataPropertyChanged = this._onDataPropertyChanged.event;
    this._promptBars = [];
    this._editPromptBarContextKey = mru.bindTo(this.contextKeyService);
  }
  getPromptBars() {
    return this._promptBars;
  }
  addPromptBar(e) {
    this._promptBars.push(e);
    this._onPromptBarAdded.fire(e);
    if (this._promptBars.length === 1) {
      this._editPromptBarContextKey.set(true);
    }
  }
  getPromptBar(e) {
    return this._promptBars.find(t => t.id === e);
  }
  getPromptBarByDiffId(e) {
    return this._promptBars.find(t => t.diffId === e);
  }
  updatePromptBar(e, t, i) {
    const r = this.getPromptBar(e);
    if (r) {
      r[t] = i;
      if (t === "diffId") {
        this._onDiffAttachmentChanged.fire(r);
      }
      this._onPropertyChanged.fire({
        promptBar: r,
        key: t
      });
    }
  }
  updatePromptBarData(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      Object.assign(i.data, t);
      for (const r of Object.keys(t)) {
        this._onDataPropertyChanged.fire({
          promptBar: i,
          key: r
        });
      }
      i.forceRerenderInputBox++;
      this._onPropertyChanged.fire({
        promptBar: i,
        key: "forceRerenderInputBox"
      });
    }
  }
  appendChatResponse(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.chatResponse = i.chatResponse ? i.chatResponse + t : t;
      this._onPropertyChanged.fire({
        promptBar: i,
        key: "chatResponse"
      });
    }
  }
  appendDataSelection(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.selections.push(t);
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "selections"
      });
    }
  }
  removeDataSelection(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.selections.splice(t, 1);
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "selections"
      });
    }
  }
  appendDataCommit(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.selectedCommits ??= [];
      i.data.selectedCommits?.push(t);
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "selectedCommits"
      });
    }
  }
  removeDataCommit(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.selectedCommits?.splice(t, 1);
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "selectedCommits"
      });
    }
  }
  appendDataDoc(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.selectedDocs ??= [];
      i.data.selectedDocs.push(t);
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "selectedDocs"
      });
    }
  }
  removeDataDoc(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.selectedDocs = i.data.selectedDocs?.filter(r => r.docId !== t);
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "selectedDocs"
      });
    }
  }
  appendDataLink(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.selectedLinks ??= [];
      i.data.selectedLinks.push(t);
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "selectedLinks"
      });
    }
  }
  removeDataLink(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.selectedLinks = i.data.selectedLinks?.filter(r => r.uuid !== t);
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "selectedLinks"
      });
    }
  }
  setDataImage(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.images = t ? [t] : [];
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "images"
      });
    }
  }
  updateDataInitText(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.data.initText = t;
      this._onDataPropertyChanged.fire({
        promptBar: i,
        key: "initText"
      });
    }
  }
  prependPreviousStructuredTextsNewestFirst(e, t) {
    const i = this.getPromptBar(e);
    if (i) {
      i.previousStructuredTextsNewestFirst = [...t, ...i.previousStructuredTextsNewestFirst];
      this._onPropertyChanged.fire({
        promptBar: i,
        key: "previousStructuredTextsNewestFirst"
      });
    }
  }
  removePromptBar(e) {
    const t = this._promptBars.findIndex(i => i.id === e);
    if (t !== -1) {
      const i = this._promptBars[t];
      this._promptBars.splice(t, 1);
      if (this._promptBars.length === 0) {
        this._editPromptBarContextKey.set(false);
      }
      this._onPromptBarRemoved.fire(i);
    }
  }
  replacePromptBar(e) {
    const t = this._promptBars.findIndex(i => i.id === e.id);
    if (t !== -1) {
      this._promptBars[t] = e;
    } else {
      this._promptBars.push(e);
    }
  }
};
Mfa = __decorate([__param(0, wi)], Mfa);
Vi(I2, Mfa, 0);
