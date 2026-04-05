"use strict";

// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/common/backgroundComposerTypes.js
// Offset: 25607944 (bundle byte offset)
// Size: 1303 bytes
Ae({
  "out-build/vs/workbench/contrib/aiBackgroundComposer/common/backgroundComposerTypes.js"() {
    "use strict";
  }
});
function Xjl(n) {
  const {
    cachedMode: e,
    currentBranch: t,
    defaultBranch: i
  } = n;
  const r = t === "HEAD";
  if (e === rP.DEFAULT || r) {
    return i || "main";
  } else {
    return t || i || "main";
  }
}
function c_g() {
  return {
    dataVersion: m_g,
    lastOpenedBcIds: {}
  };
}
function l_g() {
  return {
    setupPath2: "default",
    terminals: [],
    ranTerminalCommands: [],
    installScript: "",
    startScript: "",
    customDockerfileContents: "",
    isSideBarExpanded: false
  };
}
function u_g() {
  return -1;
}
function d_g(n, e) {
  const t = u_g();
  let i = n.get(e, t);
  let r = c_g();
  if (i) {
    try {
      const s = JSON.parse(i);
      if (s) {
        r = {
          ...c_g(),
          ...s
        };
      }
    } catch (s) {
      console.error("[backgroundComposer] Error parsing stored data:", s);
    }
  }
  return r;
}
function h_g(n, e, t) {
  let r = n.get(t, 1);
  let s = l_g();
  if (r) {
    try {
      const o = JSON.parse(r);
      if (o) {
        s = {
          ...l_g(),
          ...o,
          isSideBarExpanded: false
        };
      }
    } catch (o) {
      console.error("[backgroundComposer] Error parsing stored data:", o);
    }
  }
  return s;
}
function zkA(n) {
  const [e, t] = v3({
    backgroundComposers: [],
    backgroundComposerFollowUpInputData: K9(n.getModelConfig("background-composer")),
    backgroundComposerFollowUpInputBoxDelegate: new Zte(),
    inWindowBackgroundComposer: {},
    setupModalIsOpen: false,
    defaultVmPodStatus: "creating",
    defaultVmPodDisplayMode: "building",
    testingVmPodStatus: "creating",
    testingVmPodDisplayMode: "building",
    viewedBcIds: new Set()
  });
  return [e, t];
}
