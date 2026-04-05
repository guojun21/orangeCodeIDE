"use strict";

// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/backgroundComposer.js
// Offset: 26900737 (bundle byte offset)
// Size: 480 bytes
Wt();
rx = xi("backgroundComposerService");
qtt = n => {
  let e = n.trim();
  if (e.startsWith("https://")) {
    e = e.substring(8);
  }
  if (e.startsWith("http://")) {
    e = e.substring(7);
  }
  if (e.startsWith("ssh://")) {
    e = e.substring(6).replace(/:(?!\/)/, "/");
  }
  if (e.includes("@")) {
    e = e.split("@")[1].replace(/:(?!\/)/, "/");
  }
  if (e.endsWith(".git")) {
    e = e.substring(0, e.length - 4);
  }
  return e;
};
