'use strict';

(function () {
  const { ipcRenderer, contextBridge, webFrame } = require('electron');

  const IS_MAC = process.platform === 'darwin';
  const LOCAL_NETWORK_ALLOWED_SUFFIXES = [
    '.okta.com',
    '.okta-emea.com',
    '.oktapreview.com',
    '.duosecurity.com',
    '.duo.com',
    '.login.microsoftonline.com',
    '.onelogin.com',
    '.auth0.com',
    '.pingidentity.com',
    '.pingone.com',
    '.rippling.com',
  ];

  const BRIDGE_CHANNELS = new Set([
    'focus-url-bar',
    'element-selected',
    'element-updated',
    'area-screenshot-selected',
    'style-changes-confirmed',
    'css-inspector-style-change',
    'open-url-side-group',
    'open-url-new-tab',
    'focus-composer-input',
    'css-inspector-undo',
    'css-inspector-redo',
    'show-dialog',
    'show-dialog-dummy',
    'passkey-request-stalled',
    'browser-error-action',
  ]);

  function injectLocalNetworkAccessPolyfill() {
    try {
      const hostname = window.location.hostname.toLowerCase();
      const isAllowedHost = LOCAL_NETWORK_ALLOWED_SUFFIXES.some(
        (suffix) => hostname === suffix.slice(1) || hostname.endsWith(suffix)
      );

      if (!isAllowedHost) {
        return;
      }

      webFrame.executeJavaScript(`
        (function() {
          if (typeof navigator === 'undefined' || !navigator.permissions || !navigator.permissions.query) {
            return;
          }
          if (navigator.permissions.__localNetworkPolyfillApplied) {
            return;
          }
          navigator.permissions.__localNetworkPolyfillApplied = true;

          const originalQuery = navigator.permissions.query.bind(navigator.permissions);
          navigator.permissions.query = async function(descriptor) {
            if (descriptor && (descriptor.name === 'local-network-access' || descriptor.name === 'local-network')) {
              return {
                state: 'granted',
                name: descriptor.name,
                onchange: null,
                addEventListener: function() {},
                removeEventListener: function() {},
                dispatchEvent: function() { return true; }
              };
            }
            return originalQuery(descriptor);
          };
        })();
      `);
    } catch (error) {
      console.error('[WebviewBrowser Preload] Failed to inject local network access polyfill:', error);
    }
  }

  function injectWebAuthnPolyfill() {
    try {
      webFrame.executeJavaScript(`
        (function() {
          if (typeof navigator === 'undefined' || !navigator.credentials) {
            return;
          }
          if (navigator.credentials.__webAuthnPolyfillApplied) {
            return;
          }
          navigator.credentials.__webAuthnPolyfillApplied = true;

          var WEBAUTHN_NOTIFY_DELAY_MS = 10000;
          var WEBAUTHN_ABORT_DELAY_MS = 45000;
          var lastNotifiedPasskeyAt = 0;

          function notify() {
            var now = Date.now();
            if (now - lastNotifiedPasskeyAt < WEBAUTHN_NOTIFY_DELAY_MS) {
              return;
            }
            lastNotifiedPasskeyAt = now;
            try {
              if (window.cursorBrowser && window.cursorBrowser.send) {
                window.cursorBrowser.send('passkey-request-stalled');
              }
            } catch (error) {
              console.debug('[WebviewBrowser Preload] Failed to notify passkey support status:', error);
            }
          }

          function createNotSupportedError() {
            return new DOMException(
              'WebAuthn is not supported in the Cursor browser.',
              'NotSupportedError'
            );
          }

          function createAbortError() {
            return new DOMException('The operation was aborted.', 'AbortError');
          }

          function createTimeoutError() {
            return new DOMException(
              'The WebAuthn request timed out in the Cursor browser.',
              'TimeoutError'
            );
          }

          function wrapWebAuthnRequest(originalMethod, options, args) {
            if (!originalMethod) {
              return Promise.reject(createNotSupportedError());
            }

            var callerSignal = options && options.signal;
            if (callerSignal && callerSignal.aborted) {
              return Promise.reject(callerSignal.reason || createAbortError());
            }

            var abortController = typeof AbortController === 'function'
              ? new AbortController()
              : undefined;
            var abortListener;
            var requestArgs = Array.prototype.slice.call(args);
            if (abortController) {
              requestArgs[0] = Object.assign({}, options, { signal: abortController.signal });
            }

            var notifyTimeout;
            var abortTimeout;
            var didFinish = false;
            var didNotify = false;

            function notifyIfNeeded() {
              if (didNotify) {
                return;
              }
              didNotify = true;
              notify();
            }

            function cleanup() {
              clearTimeout(notifyTimeout);
              clearTimeout(abortTimeout);
              if (callerSignal && abortListener) {
                callerSignal.removeEventListener('abort', abortListener);
              }
            }

            return new Promise(function(resolve, reject) {
              function resolveIfActive(value) {
                if (didFinish) {
                  return;
                }
                didFinish = true;
                cleanup();
                resolve(value);
              }

              function rejectIfActive(error) {
                if (didFinish) {
                  return;
                }
                didFinish = true;
                cleanup();
                reject(error);
              }

              if (callerSignal && callerSignal.addEventListener) {
                abortListener = function() {
                  if (abortController) {
                    abortController.abort();
                  }
                  rejectIfActive(callerSignal.reason || createAbortError());
                };
                callerSignal.addEventListener('abort', abortListener, { once: true });
              }

              notifyTimeout = setTimeout(function() {
                if (!didFinish) {
                  notifyIfNeeded();
                }
              }, WEBAUTHN_NOTIFY_DELAY_MS);

              abortTimeout = setTimeout(function() {
                if (didFinish) {
                  return;
                }
                notifyIfNeeded();
                if (abortController) {
                  abortController.abort();
                }
                rejectIfActive(createTimeoutError());
              }, WEBAUTHN_ABORT_DELAY_MS);

              Promise.resolve()
                .then(function() {
                  return originalMethod.apply(navigator.credentials, requestArgs);
                })
                .then(resolveIfActive, rejectIfActive);
            });
          }

          var originalCreate = navigator.credentials.create;
          var originalGet = navigator.credentials.get;

          navigator.credentials.create = function(options) {
            if (options && options.publicKey) {
              return wrapWebAuthnRequest(originalCreate, options, arguments);
            }
            return originalCreate
              ? originalCreate.apply(navigator.credentials, arguments)
              : Promise.reject(createNotSupportedError());
          };

          navigator.credentials.get = function(options) {
            if (options && options.publicKey) {
              return wrapWebAuthnRequest(originalGet, options, arguments);
            }
            return originalGet
              ? originalGet.apply(navigator.credentials, arguments)
              : Promise.reject(createNotSupportedError());
          };

          if (typeof PublicKeyCredential !== 'undefined') {
            PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable = function() {
              return Promise.resolve(false);
            };
            if (typeof PublicKeyCredential.isConditionalMediationAvailable === 'function') {
              PublicKeyCredential.isConditionalMediationAvailable = function() {
                return Promise.resolve(false);
              };
            }
          }
        })();
      `);
    } catch (error) {
      console.error('[WebviewBrowser Preload] Failed to inject WebAuthn polyfill:', error);
    }
  }

  function installDialogOverrides() {
    const source = `
      (function() {
        if (window.__cursorDialogOverridesApplied) {
          return;
        }
        window.__cursorDialogOverridesApplied = true;

        window.__cursorDialogConfig = {
          confirmResult: true,
          promptResult: null,
          dialogHistory: []
        };

        window.__cursorSetDialogConfig = function(config) {
          if (typeof config.confirmResult === 'boolean') {
            window.__cursorDialogConfig.confirmResult = config.confirmResult;
          }
          if (config.promptResult !== undefined) {
            window.__cursorDialogConfig.promptResult = config.promptResult;
          }
        };

        window.__cursorGetDialogHistory = function() {
          return window.__cursorDialogConfig.dialogHistory.slice();
        };

        window.__cursorClearDialogHistory = function() {
          window.__cursorDialogConfig.dialogHistory = [];
        };

        window.alert = function(message) {
          const msg = String(message ?? '');
          console.log('[CursorBrowser] Dialog suppressed: alert - ' + msg);
          window.__cursorDialogConfig.dialogHistory.push({ type: 'alert', message: msg, timestamp: Date.now() });
          return undefined;
        };

        window.confirm = function(message) {
          const msg = String(message ?? '');
          const result = window.__cursorDialogConfig.confirmResult;
          console.log('[CursorBrowser] Dialog suppressed: confirm - ' + msg + ' (returning ' + result + ')');
          window.__cursorDialogConfig.dialogHistory.push({ type: 'confirm', message: msg, result: result, timestamp: Date.now() });
          return result;
        };

        window.prompt = function(message, defaultValue) {
          const msg = String(message ?? '');
          const defVal = defaultValue ?? '';
          const configuredResult = window.__cursorDialogConfig.promptResult;
          const result = configuredResult !== null ? configuredResult : defVal;
          console.log('[CursorBrowser] Dialog suppressed: prompt - ' + msg + ' (returning: ' + result + ')');
          window.__cursorDialogConfig.dialogHistory.push({ type: 'prompt', message: msg, defaultValue: defVal, result: result, timestamp: Date.now() });
          return result;
        };

        console.log('[CursorBrowser] Native dialog overrides installed - dialogs are now non-blocking');
      })();
    `;

    try {
      webFrame.executeJavaScript(source);
    } catch (error) {
      console.error('[WebviewBrowser Preload] Failed to inject early dialog overrides:', error);
    }
  }

  injectLocalNetworkAccessPolyfill();
  injectWebAuthnPolyfill();
  installDialogOverrides();

  const bridge = {
    send(channel, ...args) {
      if (BRIDGE_CHANNELS.has(channel)) {
        ipcRenderer.sendToHost(channel, ...args);
      }
    },
  };

  try {
    contextBridge.exposeInMainWorld('cursorBrowser', bridge);
  } catch (error) {
    console.error('[WebviewBrowser Preload] Failed to expose bridge:', error);
  }

  window.addEventListener('DOMContentLoaded', () => {
    installDialogOverrides();

    document.addEventListener(
      'click',
      (event) => {
        if (!event.altKey) {
          return;
        }

        const anchor = event.target.closest('a[href]');
        if (!anchor) {
          return;
        }

        const url = anchor.href;
        if (!url || url.startsWith('javascript:')) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        ipcRenderer.sendToHost('open-url-side-group', { url });
      },
      true
    );
  });

  document.addEventListener(
    'keydown',
    (event) => {
      if (!event.isTrusted) {
        return;
      }

      const primaryModifier = IS_MAC ? event.metaKey : event.ctrlKey;
      const shift = event.shiftKey;
      const alt = event.altKey;
      const key = event.key.toLowerCase();
      let shortcut;

      if (primaryModifier && !shift && !alt) {
        switch (key) {
          case 'r':
            shortcut = 'reload-page';
            break;
          case 'l':
            shortcut = 'focus-url-bar';
            break;
          case 't':
            shortcut = 'new-browser-tab';
            break;
          case 'i':
            shortcut = 'focus-composer';
            break;
          case 'b':
            shortcut = 'toggle-sidebar';
            break;
          case 'w':
            shortcut = 'close-browser-tab';
            break;
          case '=':
          case '+':
            shortcut = 'zoom-in';
            break;
          case '-':
            shortcut = 'zoom-out';
            break;
          case '0':
            shortcut = 'zoom-reset';
            break;
          case 'z':
            shortcut = 'undo';
            break;
          case 'a':
            shortcut = 'select-all';
            break;
          case 'c':
            shortcut = 'copy';
            break;
          case 'v':
            shortcut = 'paste';
            break;
          case 'x':
            shortcut = 'cut';
            break;
          case '[':
            shortcut = 'navigate-back';
            break;
          case ']':
            shortcut = 'navigate-forward';
            break;
          case 'd':
            shortcut = 'toggle-bookmark';
            break;
        }
      }

      if (primaryModifier && shift && !alt) {
        switch (key) {
          case 'i':
            shortcut = 'open-devtools';
            break;
          case 'z':
            shortcut = 'redo';
            break;
        }
      }

      if (alt && !primaryModifier && !shift) {
        switch (key) {
          case 'arrowleft':
            shortcut = 'navigate-back';
            break;
          case 'arrowright':
            shortcut = 'navigate-forward';
            break;
        }
      }

      if (!primaryModifier && !shift && !alt) {
        switch (key) {
          case 'f5':
            shortcut = 'reload-page';
            break;
          case 'f12':
            shortcut = 'open-devtools';
            break;
        }
      }

      if (IS_MAC && event.metaKey && event.altKey && !shift) {
        switch (key) {
          case 'i':
          case 'c':
          case 'j':
            shortcut = 'open-devtools';
            break;
        }
      }

      if (shortcut) {
        event.preventDefault();
        ipcRenderer.sendToHost('keyboard-shortcut', { shortcut });
      }

      ipcRenderer.sendToHost('did-keydown', {
        key: event.key,
        keyCode: event.keyCode,
        code: event.code,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        metaKey: event.metaKey,
        repeat: event.repeat,
      });
    },
    true
  );
}());
