"use strict";

// Module: out-build/vs/platform/dialogs/common/dialogs.js
// Offset: 2387469 (bundle byte offset)
// Size: 1696 bytes
Yr();
Vf();
Ht();
Wt();
iL();
_r();
np();
Ml = xi("dialogService");
(function (n) {
  n[n.Confirmation = 1] = "Confirmation";
  n[n.Prompt = 2] = "Prompt";
  n[n.Input = 3] = "Input";
})(yKe ||= {});
bBc = class {
  getConfirmationButtons(n) {
    return this.getButtons(n, yKe.Confirmation);
  }
  getPromptButtons(n) {
    return this.getButtons(n, yKe.Prompt);
  }
  getInputButtons(n) {
    return this.getButtons(n, yKe.Input);
  }
  getButtons(n, e) {
    const t = [];
    switch (e) {
      case yKe.Confirmation:
        {
          const i = n;
          if (i.primaryButton) {
            t.push(i.primaryButton);
          } else {
            t.push(_(1845, null));
          }
          if (i.cancelButton) {
            t.push(i.cancelButton);
          } else {
            t.push(_(1846, null));
          }
          break;
        }
      case yKe.Prompt:
        {
          const i = n;
          if (Array.isArray(i.buttons) && i.buttons.length > 0) {
            t.push(...i.buttons.map(r => r.label));
          }
          if (i.cancelButton) {
            if (i.cancelButton === true) {
              t.push(_(1847, null));
            } else if (typeof i.cancelButton == "string") {
              t.push(i.cancelButton);
            } else if (i.cancelButton.label) {
              t.push(i.cancelButton.label);
            } else {
              t.push(_(1848, null));
            }
          }
          if (t.length === 0) {
            t.push(_(1849, null));
          }
          break;
        }
      case yKe.Input:
        {
          const i = n;
          if (i.primaryButton) {
            t.push(i.primaryButton);
          } else {
            t.push(_(1850, null));
          }
          if (i.cancelButton) {
            t.push(i.cancelButton);
          } else {
            t.push(_(1851, null));
          }
          break;
        }
    }
    return t;
  }
  getDialogType(n) {
    if (typeof n == "string") {
      return n;
    }
    if (typeof n == "number") {
      if (n === Ha.Info) {
        return "info";
      } else if (n === Ha.Error) {
        return "error";
      } else if (n === Ha.Warning) {
        return "warning";
      } else {
        return "none";
      }
    }
  }
  getPromptResult(n, e, t) {
    const i = [...(n.buttons ?? [])];
    if (n.cancelButton && typeof n.cancelButton != "string" && typeof n.cancelButton != "boolean") {
      i.push(n.cancelButton);
    }
    let r = i[e]?.run({
      checkboxChecked: t
    });
    if (!(r instanceof Promise)) {
      r = Promise.resolve(r);
    }
    return {
      result: r,
      checkboxChecked: t
    };
  }
};
oy = xi("fileDialogService");
(function (n) {
  n[n.SAVE = 0] = "SAVE";
  n[n.DONT_SAVE = 1] = "DONT_SAVE";
  n[n.CANCEL = 2] = "CANCEL";
})(SSh ||= {});
q3n = 10;
