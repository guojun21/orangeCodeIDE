"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/worktreeSetupScripts.js
// Offset: 30442451 (bundle byte offset)
// Size: 3451 bytes
Ae({
  "out-build/vs/workbench/contrib/composer/browser/worktreeSetupScripts.js"() {
    "use strict";
  }
});
GSf = {};
WN(GSf, {
  ensureWorktreeSetupAndRun: () => Cty
});
function _ty(n) {
  const e = [];
  const t = i => {
    if (typeof i == "string") {
      e.push(i);
      return;
    }
    if (Array.isArray(i)) {
      for (const r of i) {
        t(r);
      }
    }
  };
  t(n);
  return e;
}
async function Cty(n) {
  const {
    composerId: e,
    worktreePath: t,
    rootWorkspacePath: i,
    terminalExecutionService: r,
    composerFileService: s,
    remoteAgentService: o,
    outputService: a
  } = n;
  const l = new h0a(a);
  const u = await o.getEnvironment();
  const d = u?.os === 1 || !u && Sc;
  const m = je.joinPath(je.file(t), ".cursor", "worktrees.json");
  const p = je.joinPath(je.file(i), ".cursor", "worktrees.json");
  l.info("[worktree-setup] checking config", {
    composerId: e,
    worktreePath: t,
    rootWorkspacePath: i,
    worktreeConfigFile: m.toString(),
    rootConfigFile: p.toString(),
    isTargetWindows: d,
    remoteOS: u?.os
  });
  let g;
  let f;
  let A;
  try {
    let C;
    if (await s.exists({
      uri: m,
      composerData: undefined
    })) {
      C = m;
    } else if (await s.exists({
      uri: p,
      composerData: undefined
    })) {
      C = p;
    }
    if (!C) {
      l.info("[worktree-setup] no config file found in worktree or root, skipping");
      return;
    }
    const I = await s.readFile({
      uri: C,
      composerData: undefined
    });
    const B = JSON.parse(I.value.toString());
    let R;
    if (d) {
      if (B["setup-worktree-windows"] !== undefined) {
        R = B["setup-worktree-windows"];
        A = "setup-worktree-windows";
      } else if (B["setup-worktree"] !== undefined) {
        R = B["setup-worktree"];
        A = "setup-worktree";
      }
    } else if (B["setup-worktree-unix"] !== undefined) {
      R = B["setup-worktree-unix"];
      A = "setup-worktree-unix";
    } else if (B["setup-worktree"] !== undefined) {
      R = B["setup-worktree"];
      A = "setup-worktree";
    }
    if (typeof R == "string") {
      const N = R;
      f = ((d ? /^[a-zA-Z]:[\\\/]/.test(N) || N.startsWith("\\\\") : N.startsWith("/")) ? je.file(N) : Wo(Td(C), N)).fsPath;
    } else if (R !== undefined) {
      g = _ty(R);
    }
    l.info("[worktree-setup] selected setup spec", {
      key: A,
      hasCommands: !!g && !!(g.length > 0),
      hasScript: !!f,
      configPath: C.toString()
    });
  } catch (C) {
    l.error("[worktree-setup] failed reading config:", C);
    return;
  }
  if ((!g || g.length === 0) && !f) {
    l.info("[worktree-setup] no setup spec found (commands or script), skipping");
    return;
  }
  let w;
  try {
    const C = Date.now();
    ({
      sessionId: w
    } = await r.startSession(t));
    l.info("[worktree-setup] started terminal session", {
      sessionId: w,
      worktreePath: t
    });
    let x;
    if (g && g.length > 0) {
      const R = g.map(N => N.trim()).filter(N => !!N);
      if (R.length === 0) {
        l.info("[worktree-setup] no commands to execute after filtering, abort");
        return;
      }
      if (d) {
        x = vty({
          worktreePath: t,
          rootWorkspacePath: i,
          commands: R
        });
        l.info("[worktree-setup] executing combined Windows script with per-command logs", {
          worktreePath: t,
          scriptLength: x.length
        });
      } else {
        x = bty({
          worktreePath: t,
          rootWorkspacePath: i,
          commands: R
        });
        l.info("[worktree-setup] executing combined UNIX script with per-command logs", {
          worktreePath: t,
          scriptLength: x.length
        });
      }
    } else if (f) {
      if (d) {
        x = yty({
          worktreePath: t,
          rootWorkspacePath: i,
          scriptPath: f
        });
        l.info("[worktree-setup] executing Windows setup script file", {
          worktreePath: t,
          scriptLength: x.length,
          scriptPath: f
        });
      } else {
        x = Aty({
          worktreePath: t,
          rootWorkspacePath: i,
          scriptPath: f
        });
        l.info("[worktree-setup] executing UNIX setup script file", {
          worktreePath: t,
          scriptLength: x.length,
          scriptPath: f
        });
      }
    }
    if (!x) {
      l.info("[worktree-setup] nothing to execute after normalization, skipping");
      return;
    }
    const I = r.executeStream(w, x);
    for await (const R of I) {
      if (R.type === "update" && R.content) {
        l.append(R.content);
      }
    }
    const B = Date.now() - C;
    l.info("[worktree-setup] all commands finished", {
      durationMs: B
    });
  } catch (C) {
    l.error("[worktree-setup] failed executing setup script:", C);
  } finally {
    if (w) {
      try {
        r.endSession(w);
        l.info("[worktree-setup] ended terminal session", {
          sessionId: w
        });
      } catch (C) {
        l.error("[worktree-setup] failed ending terminal session:", C);
      }
    }
  }
}
