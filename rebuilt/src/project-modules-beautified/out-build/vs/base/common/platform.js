"use strict";

// Module: out-build/vs/base/common/platform.js
// Offset: 286129 (bundle byte offset)
// Size: 2693 bytes
Ht();
c5e = "en";
NFt = false;
agt = false;
MFt = false;
v0c = false;
A0c = false;
WMo = false;
y0c = false;
QMo = false;
w0c = false;
_0c = false;
FFt = undefined;
K2n = c5e;
jMo = c5e;
C0c = undefined;
EBe = undefined;
xBe = globalThis;
Kj = undefined;
if (typeof xBe.vscode !== "undefined" && typeof xBe.vscode.process !== "undefined") {
  Kj = xBe.vscode.process;
} else if (typeof process !== "undefined" && typeof process?.versions?.node == "string") {
  Kj = process;
}
S0c = typeof Kj?.versions?.electron == "string";
mih = S0c && Kj?.type === "renderer";
if (typeof Kj == "object") {
  NFt = Kj.platform === "win32";
  agt = Kj.platform === "darwin";
  MFt = Kj.platform === "linux";
  v0c = MFt && !!Kj.env.SNAP && !!Kj.env.SNAP_REVISION;
  y0c = S0c;
  w0c = !!Kj.env.CI || !!Kj.env.BUILD_ARTIFACTSTAGINGDIRECTORY;
  FFt = c5e;
  K2n = c5e;
  const n = Kj.env.VSCODE_NLS_CONFIG;
  if (n) {
    try {
      const e = JSON.parse(n);
      FFt = e.userLocale;
      jMo = e.osLocale;
      K2n = e.resolvedLanguage || c5e;
      C0c = e.languagePack?.translationsConfigFile;
    } catch {}
  }
  A0c = true;
} else if (typeof navigator == "object" && !mih) {
  EBe = navigator.userAgent;
  NFt = EBe.indexOf("Windows") >= 0;
  agt = EBe.indexOf("Macintosh") >= 0;
  QMo = (EBe.indexOf("Macintosh") >= 0 || EBe.indexOf("iPad") >= 0 || EBe.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
  MFt = EBe.indexOf("Linux") >= 0;
  _0c = EBe?.indexOf("Mobi") >= 0;
  WMo = true;
  K2n = JMo() || c5e;
  FFt = navigator.language.toLowerCase();
  jMo = FFt;
} else {
  console.error("Unable to resolve platform.");
}
(function (n) {
  n[n.Web = 0] = "Web";
  n[n.Mac = 1] = "Mac";
  n[n.Linux = 2] = "Linux";
  n[n.Windows = 3] = "Windows";
})(pih ||= {});
Y2n = 0;
if (agt) {
  Y2n = 1;
} else if (NFt) {
  Y2n = 3;
} else if (MFt) {
  Y2n = 2;
}
Sc = NFt;
Fs = agt;
xv = MFt;
Z2n = v0c;
kw = A0c;
gih = y0c;
Eu = WMo;
fih = WMo && typeof xBe.importScripts == "function";
bih = fih ? xBe.origin : undefined;
ZL = QMo;
k0c = _0c;
C6 = w0c;
kH = Y2n;
fSe = EBe;
yC = K2n;
(function (n) {
  function e() {
    return yC;
  }
  n.value = e;
  function t() {
    if (yC.length === 2) {
      return yC === "en";
    } else if (yC.length >= 3) {
      return yC[0] === "e" && yC[1] === "n" && yC[2] === "-";
    } else {
      return false;
    }
  }
  n.isDefaultVariant = t;
  function i() {
    return yC === "en";
  }
  n.isDefault = i;
})(Ete ||= {});
E0c = FFt;
vih = jMo;
x0c = C0c;
Aih = typeof xBe.postMessage == "function" && !xBe.importScripts;
l5e = (() => {
  if (Aih) {
    const n = [];
    xBe.addEventListener("message", t => {
      if (t.data && t.data.vscodeScheduleAsyncWork) {
        for (let i = 0, r = n.length; i < r; i++) {
          const s = n[i];
          if (s.id === t.data.vscodeScheduleAsyncWork) {
            n.splice(i, 1);
            s.callback();
            return;
          }
        }
      }
    });
    let e = 0;
    return t => {
      const i = ++e;
      n.push({
        id: i,
        callback: t
      });
      xBe.postMessage({
        vscodeScheduleAsyncWork: i
      }, "*");
    };
  }
  return n => setTimeout(n);
})();
(function (n) {
  n[n.Windows = 1] = "Windows";
  n[n.Macintosh = 2] = "Macintosh";
  n[n.Linux = 3] = "Linux";
})(yih ||= {});
cf = agt || QMo ? 2 : NFt ? 1 : 3;
T0c = true;
I0c = false;
cgt = !!fSe && !!(fSe.indexOf("Chrome") >= 0);
zMo = !!fSe && !!(fSe.indexOf("Firefox") >= 0);
VMo = !cgt && !!fSe && !!(fSe.indexOf("Safari") >= 0);
KMo = !!fSe && !!(fSe.indexOf("Edg/") >= 0);
D0c = !!fSe && !!(fSe.indexOf("Android") >= 0);
YMo = undefined;
Cze = Kj?.arch;
Sze = Kj?.platform;
wih = Kj?.versions?.node;
