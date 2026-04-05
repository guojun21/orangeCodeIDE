"use strict";

// Module: out-build/vs/base/common/process.js
// Offset: 320088 (bundle byte offset)
// Size: 1807 bytes
_r();
i2o = globalThis.vscode;
if (typeof i2o !== "undefined" && typeof i2o.process !== "undefined") {
    const n = i2o.process;
    ugt = {
        get platform() {
            return n.platform;
        },
        get arch() {
            return n.arch;
        },
        get env() {
            return n.env;
        },
        cwd() {
            return n.cwd();
        }
    };
} else if (typeof process !== "undefined" && typeof process?.versions?.node == "string") {
    ugt = {
        get platform() {
            return process.platform;
        },
        get arch() {
            return process.arch;
        },
        get env() {
            return process.env;
        },
        cwd() {
            return process.env.VSCODE_CWD || process.cwd();
        }
    };
} else {
    ugt = {
        get platform() {
            if (Sc) {
                return "win32";
            } else if (Fs) {
                return "darwin";
            } else {
                return "linux";
            }
        },
        get arch() {},
        get env() {
            return {};
        },
        cwd() {
            return "/";
        }
    };
}
UFt = ugt.cwd;
u2 = ugt.env;
h5e = ugt.platform;
r2o = ugt.arch;
