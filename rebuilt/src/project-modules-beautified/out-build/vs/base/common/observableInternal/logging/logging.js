"use strict";

// Module: out-build/vs/base/common/observableInternal/logging/logging.js
// Offset: 480919 (bundle byte offset)
// Size: 1949 bytes
Z2o = undefined;
PSc = class {
    constructor(n) {
        this.loggers = n;
    }
    handleObservableCreated(n) {
        for (const e of this.loggers) {
            e.handleObservableCreated(n);
        }
    }
    handleOnListenerCountChanged(n, e) {
        for (const t of this.loggers) {
            t.handleOnListenerCountChanged(n, e);
        }
    }
    handleObservableUpdated(n, e) {
        for (const t of this.loggers) {
            t.handleObservableUpdated(n, e);
        }
    }
    handleAutorunCreated(n) {
        for (const e of this.loggers) {
            e.handleAutorunCreated(n);
        }
    }
    handleAutorunDisposed(n) {
        for (const e of this.loggers) {
            e.handleAutorunDisposed(n);
        }
    }
    handleAutorunDependencyChanged(n, e, t) {
        for (const i of this.loggers) {
            i.handleAutorunDependencyChanged(n, e, t);
        }
    }
    handleAutorunStarted(n) {
        for (const e of this.loggers) {
            e.handleAutorunStarted(n);
        }
    }
    handleAutorunFinished(n) {
        for (const e of this.loggers) {
            e.handleAutorunFinished(n);
        }
    }
    handleDerivedDependencyChanged(n, e, t) {
        for (const i of this.loggers) {
            i.handleDerivedDependencyChanged(n, e, t);
        }
    }
    handleDerivedCleared(n) {
        for (const e of this.loggers) {
            e.handleDerivedCleared(n);
        }
    }
    handleBeginTransaction(n) {
        for (const e of this.loggers) {
            e.handleBeginTransaction(n);
        }
    }
    handleEndTransaction(n) {
        for (const e of this.loggers) {
            e.handleEndTransaction(n);
        }
    }
};
