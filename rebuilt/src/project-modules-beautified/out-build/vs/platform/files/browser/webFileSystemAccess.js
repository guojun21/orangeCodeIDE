"use strict";

// Module: out-build/vs/platform/files/browser/webFileSystemAccess.js
// Offset: 2389165 (bundle byte offset)
// Size: 603 bytes
(function(n) {
    function e(s) {
        return typeof s?.showDirectoryPicker == "function";
    }
    n.supported = e;

    function t(s) {
        const o = s;
        if (o) {
            return typeof o.kind == "string" && typeof o.queryPermission == "function" && typeof o.requestPermission == "function";
        } else {
            return false;
        }
    }
    n.isFileSystemHandle = t;

    function i(s) {
        return s.kind === "file";
    }
    n.isFileSystemFileHandle = i;

    function r(s) {
        return s.kind === "directory";
    }
    n.isFileSystemDirectoryHandle = r;
})(zde ||= {});
(function(n) {
    function e(t) {
        return typeof t?.FileSystemObserver == "function";
    }
    n.supported = e;
})(vBc ||= {});
