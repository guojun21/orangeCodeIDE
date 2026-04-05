'use strict';

function updateMarker(markerKey, payload) {
  const current = globalThis[markerKey] ?? {};
  const next = {
    ...current,
    ...payload,
  };
  globalThis[markerKey] = next;
  return next;
}

function serializeError(error) {
  if (!error) {
    return 'Unknown error';
  }

  if (error instanceof Error) {
    return error.stack || error.message;
  }

  return String(error);
}

export function installOriginalWorkerProxy({
  markerKey,
  source,
  originalModuleUrl,
  kind,
}) {
  const previousSelf = globalThis.self;
  const previousPostMessage = globalThis.postMessage;
  const previousOnMessage = globalThis.onmessage;

  if (typeof globalThis.self === 'undefined') {
    globalThis.self = globalThis;
  }

  if (typeof globalThis.postMessage !== 'function') {
    globalThis.postMessage = () => {};
  }

  const queuedMessages = [];
  let delegateHandler = null;

  updateMarker(markerKey, {
    kind,
    source,
    originalModuleUrl,
    loadedAt: new Date().toISOString(),
    queuedMessageCount: 0,
    flushedMessageCount: 0,
    hasOnMessageHandler: false,
  });

  function flushQueuedMessages() {
    if (typeof delegateHandler !== 'function' || queuedMessages.length === 0) {
      return;
    }

    const pending = queuedMessages.splice(0, queuedMessages.length);
    updateMarker(markerKey, {
      queuedMessageCount: 0,
      flushedMessageCount: (globalThis[markerKey]?.flushedMessageCount ?? 0) + pending.length,
      flushedAt: new Date().toISOString(),
    });

    for (const event of pending) {
      delegateHandler.call(globalThis, event);
    }
  }

  function proxyOnMessage(event) {
    if (typeof delegateHandler === 'function') {
      return delegateHandler.call(globalThis, event);
    }

    queuedMessages.push(event);
    updateMarker(markerKey, {
      queuedMessageCount: queuedMessages.length,
      lastQueuedAt: new Date().toISOString(),
    });
    return undefined;
  }

  globalThis.onmessage = proxyOnMessage;

  const ready = import(originalModuleUrl)
    .then((originalModule) => {
      const currentOnMessage = globalThis.onmessage;
      if (currentOnMessage !== proxyOnMessage && typeof currentOnMessage === 'function') {
        delegateHandler = currentOnMessage;
        globalThis.onmessage = proxyOnMessage;
      }

      updateMarker(markerKey, {
        importResolvedAt: new Date().toISOString(),
        hasOnMessageHandler: typeof delegateHandler === 'function',
        originalExportKeys: Object.keys(originalModule),
      });

      flushQueuedMessages();
      return originalModule;
    })
    .catch((error) => {
      updateMarker(markerKey, {
        importFailedAt: new Date().toISOString(),
        importError: serializeError(error),
      });
      throw error;
    });

  ready.finally(() => {
    updateMarker(markerKey, {
      environment: {
        hadSelf: typeof previousSelf !== 'undefined',
        hadPostMessage: typeof previousPostMessage === 'function',
        hadOnMessage: typeof previousOnMessage === 'function',
      },
    });
  });

  return ready;
}
