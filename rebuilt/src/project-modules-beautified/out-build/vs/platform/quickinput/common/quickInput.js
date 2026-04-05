"use strict";

// Module: out-build/vs/platform/quickinput/common/quickInput.js
// Offset: 2382337 (bundle byte offset)
// Size: 4652 bytes
Wt();
zr();
ASh = {
  ctrlCmd: false,
  alt: false,
  shift: false
};
(function (n) {
  n[n.Blur = 1] = "Blur";
  n[n.Gesture = 2] = "Gesture";
  n[n.Other = 3] = "Other";
})(I9e ||= {});
(function (n) {
  n.QuickPick = "quickPick";
  n.InputBox = "inputBox";
  n.QuickWidget = "quickWidget";
})(ySh ||= {});
(function (n) {
  n[n.NONE = 0] = "NONE";
  n[n.FIRST = 1] = "FIRST";
  n[n.SECOND = 2] = "SECOND";
  n[n.LAST = 3] = "LAST";
})(IW ||= {});
(function (n) {
  n[n.First = 1] = "First";
  n[n.Second = 2] = "Second";
  n[n.Last = 3] = "Last";
  n[n.Next = 4] = "Next";
  n[n.Previous = 5] = "Previous";
  n[n.NextPage = 6] = "NextPage";
  n[n.PreviousPage = 7] = "PreviousPage";
  n[n.NextSeparator = 8] = "NextSeparator";
  n[n.PreviousSeparator = 9] = "PreviousSeparator";
})(zE ||= {});
(function (n) {
  n[n.Title = 1] = "Title";
  n[n.Inline = 2] = "Inline";
  n[n.Left = 3] = "Left";
})(Q3t ||= {});
hBc = class {
  constructor(n) {
    this.options = n;
  }
  getItemLabel(n) {
    return n.label;
  }
  getItemDescription(n) {
    if (!this.options?.skipDescription) {
      return n.description;
    }
  }
  getItemPath(n) {
    if (!this.options?.skipPath) {
      if (n.resource?.scheme === _n.file) {
        return n.resource.fsPath;
      } else {
        return n.resource?.path;
      }
    }
  }
};
DW = new hBc();
ha = xi("quickInputService");
