'use strict';

(function () {
  const { ipcRenderer, contextBridge, webFrame } = require('electron');

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

  const FORWARDED_CHANNELS = new Set([
    'focus-url-bar',
    'element-selected',
    'element-updated',
    'element-picked',
    'keyboard-shortcut',
    'area-screenshot-selected',
    'style-changes-confirmed',
    'css-inspector-style-change',
    'passkey-request-stalled',
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
      console.error('[BrowserView Preload] Failed to inject local network access polyfill:', error);
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
              console.debug('[BrowserView Preload] Failed to notify passkey support status:', error);
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

          var origCreate = navigator.credentials.create;
          var origGet = navigator.credentials.get;

          function wrapWebAuthnRequest(originalMethod, options, args) {
            if (!originalMethod) {
              return Promise.reject(createNotSupportedError());
            }

            var callerSignal = options && options.signal;
            if (callerSignal && callerSignal.aborted) {
              return Promise.reject(callerSignal.reason || createAbortError());
            }

            var abortController = typeof AbortController === 'function' ? new AbortController() : undefined;
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

          navigator.credentials.create = function(options) {
            if (options && options.publicKey) {
              return wrapWebAuthnRequest(origCreate, options, arguments);
            }
            return origCreate
              ? origCreate.apply(navigator.credentials, arguments)
              : Promise.reject(createNotSupportedError());
          };

          navigator.credentials.get = function(options) {
            if (options && options.publicKey) {
              return wrapWebAuthnRequest(origGet, options, arguments);
            }
            return origGet
              ? origGet.apply(navigator.credentials, arguments)
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
      console.error('[BrowserView Preload] Failed to inject WebAuthn polyfill:', error);
    }
  }

  injectLocalNetworkAccessPolyfill();
  injectWebAuthnPolyfill();

  const bridge = {
    send(channel, ...args) {
      if (FORWARDED_CHANNELS.has(channel)) {
        ipcRenderer.send('vscode:browser-view-message', channel, ...args);
      }
    },
  };

  try {
    contextBridge.exposeInMainWorld('cursorBrowser', bridge);
  } catch (error) {
    console.error('[BrowserView Preload] Failed to expose bridge:', error);
  }

  window.addEventListener('DOMContentLoaded', () => {
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
        ipcRenderer.send('vscode:browser-view-message', 'open-url-side-group', { url });
      },
      true
    );
  });
}());
