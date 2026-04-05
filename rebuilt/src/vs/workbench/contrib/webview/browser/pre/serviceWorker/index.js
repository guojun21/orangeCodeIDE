'use strict';

const sw = self;
const VERSION = 4;
const resourceCacheName = `vscode-resource-cache-${VERSION}`;
const rootPath = sw.location.pathname.replace(/\/service-worker.js$/, '');
const searchParams = new URL(location.toString()).searchParams;
const remoteAuthority = searchParams.get('remoteAuthority');
const ID = searchParams.get('id');
const resourceBaseAuthority = searchParams.get('vscode-resource-base-authority');
const resolveTimeout = 30_000;

class RequestStore {
  constructor() {
    this.map = new Map();
    this.requestPool = 0;
  }

  create() {
    const requestId = ++this.requestPool;
    let resolve;
    const promise = new Promise((value) => {
      resolve = value;
    });
    const entry = { resolve, promise };
    this.map.set(requestId, entry);

    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      const existingEntry = this.map.get(requestId);
      if (existingEntry === entry) {
        existingEntry.resolve({ status: 'timeout' });
        this.map.delete(requestId);
      }
    }, resolveTimeout);

    return { requestId, promise };
  }

  resolve(requestId, value) {
    const entry = this.map.get(requestId);
    if (!entry) {
      return false;
    }

    entry.resolve({ status: 'ok', value });
    this.map.delete(requestId);
    return true;
  }
}

const resourceRequestStore = new RequestStore();
const localhostRequestStore = new RequestStore();

const unauthorized = () => new Response('Unauthorized', { status: 401 });
const notFound = () => new Response('Not Found', { status: 404 });
const methodNotAllowed = () => new Response('Method Not Allowed', { status: 405 });
const requestTimeout = () => new Response('Request Timeout', { status: 408 });

sw.addEventListener('message', async (event) => {
  switch (event.data.channel) {
    case 'version': {
      const source = event.source;
      sw.clients.get(source.id).then((client) => {
        if (client) {
          client.postMessage({ channel: 'version', version: VERSION });
        }
      });
      return;
    }
    case 'did-load-resource': {
      const response = event.data.data;
      if (!resourceRequestStore.resolve(response.id, response)) {
        console.log('Could not resolve unknown resource', response.path);
      }
      return;
    }
    case 'did-load-localhost': {
      const data = event.data.data;
      if (!localhostRequestStore.resolve(data.id, data.location)) {
        console.log('Could not resolve unknown localhost', data.origin);
      }
      return;
    }
    default: {
      console.log('Unknown message');
      return;
    }
  }
});

sw.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  if (
    typeof resourceBaseAuthority === 'string' &&
    requestUrl.protocol === 'https:' &&
    requestUrl.hostname.endsWith(`.${resourceBaseAuthority}`)
  ) {
    switch (event.request.method) {
      case 'GET':
      case 'HEAD': {
        const firstHostSegment = requestUrl.hostname.slice(
          0,
          requestUrl.hostname.length - (resourceBaseAuthority.length + 1)
        );
        const scheme = firstHostSegment.split('+', 1)[0];
        const authority = firstHostSegment.slice(scheme.length + 1);
        return event.respondWith(
          processResourceRequest(event, {
            scheme,
            authority,
            path: requestUrl.pathname,
            query: requestUrl.search.replace(/^\?/, ''),
          })
        );
      }
      default: {
        return event.respondWith(methodNotAllowed());
      }
    }
  }

  if (requestUrl.origin !== sw.origin && requestUrl.host === remoteAuthority) {
    switch (event.request.method) {
      case 'GET':
      case 'HEAD': {
        return event.respondWith(
          processResourceRequest(event, {
            path: requestUrl.pathname,
            scheme: requestUrl.protocol.slice(0, requestUrl.protocol.length - 1),
            authority: requestUrl.host,
            query: requestUrl.search.replace(/^\?/, ''),
          })
        );
      }
      default: {
        return event.respondWith(methodNotAllowed());
      }
    }
  }

  if (
    requestUrl.origin !== sw.origin &&
    requestUrl.host.match(/^(localhost|127.0.0.1|0.0.0.0):(\d+)$/)
  ) {
    return event.respondWith(processLocalhostRequest(event, requestUrl));
  }
});

sw.addEventListener('install', (event) => {
  event.waitUntil(sw.skipWaiting());
});

sw.addEventListener('activate', (event) => {
  event.waitUntil(sw.clients.claim());
});

async function processResourceRequest(event, requestUrlComponents) {
  let client = await sw.clients.get(event.clientId);
  let webviewId;

  if (client) {
    webviewId = getWebviewIdForClient(client);
  } else {
    client = await getWorkerClientForId(event.clientId);
    if (client) {
      webviewId = getWebviewIdForClient(client);
    } else {
      console.error('Could not find inner client for request');
      return notFound();
    }
  }

  if (!webviewId) {
    console.error('Could not resolve webview id');
    return notFound();
  }

  const shouldCache = event.request.method === 'GET';
  const parentClients = await getOuterIframeClient(webviewId);
  if (!parentClients.length) {
    console.log('Could not find parent client for request');
    return notFound();
  }

  let cachedResponse;
  if (shouldCache) {
    cachedResponse = await (await caches.open(resourceCacheName)).match(event.request);
  }

  const { requestId, promise } = resourceRequestStore.create();
  for (const parentClient of parentClients) {
    parentClient.postMessage({
      channel: 'load-resource',
      id: requestId,
      scheme: requestUrlComponents.scheme,
      authority: requestUrlComponents.authority,
      path: requestUrlComponents.path,
      query: requestUrlComponents.query,
      ifNoneMatch: cachedResponse?.headers.get('ETag'),
    });
  }

  return promise.then((requestResult) => {
    if (requestResult.status === 'timeout') {
      return requestTimeout();
    }

    const response = requestResult.value;
    if (response.status === 304) {
      if (cachedResponse) {
        return cachedResponse.clone();
      }
      throw new Error('No cache found');
    }

    if (response.status === 401) {
      return unauthorized();
    }

    if (response.status !== 200) {
      return notFound();
    }

    const corsHeaders = { 'Access-Control-Allow-Origin': '*' };
    const contentLength = response.data.byteLength;
    const rangeHeader = event.request.headers.get('range');
    if (rangeHeader) {
      const matches = rangeHeader.match(/^bytes\=(\d+)\-(\d+)?$/g);
      if (matches) {
        const start = Number(matches[1]);
        const end = Number(matches[2]) || contentLength - 1;
        return new Response(response.data.slice(start, end + 1), {
          status: 206,
          headers: {
            ...corsHeaders,
            'Content-range': `bytes 0-${end}/${contentLength}`,
          },
        });
      }

      return new Response(null, {
        status: 416,
        headers: {
          ...corsHeaders,
          'Content-range': `*/${contentLength}`,
        },
      });
    }

    const headers = {
      ...corsHeaders,
      'Content-Type': response.mime,
      'Content-Length': contentLength.toString(),
    };

    if (response.etag) {
      headers.ETag = response.etag;
      headers['Cache-Control'] = 'no-cache';
    }

    if (response.mtime) {
      headers['Last-Modified'] = new Date(response.mtime).toUTCString();
    }

    const crossOriginIsolated = new URL(event.request.url).searchParams.get('vscode-coi');
    if (crossOriginIsolated === '3') {
      headers['Cross-Origin-Opener-Policy'] = 'same-origin';
      headers['Cross-Origin-Embedder-Policy'] = 'require-corp';
    } else if (crossOriginIsolated === '2') {
      headers['Cross-Origin-Embedder-Policy'] = 'require-corp';
    } else if (crossOriginIsolated === '1') {
      headers['Cross-Origin-Opener-Policy'] = 'same-origin';
    }

    const outgoingResponse = new Response(response.data, { status: 200, headers });
    if (shouldCache && response.etag) {
      caches.open(resourceCacheName).then((cache) => cache.put(event.request, outgoingResponse));
    }

    return outgoingResponse.clone();
  });
}

async function processLocalhostRequest(event, requestUrl) {
  const client = await sw.clients.get(event.clientId);
  if (!client) {
    return fetch(event.request);
  }

  const webviewId = getWebviewIdForClient(client);
  if (!webviewId) {
    console.error('Could not resolve webview id');
    return fetch(event.request);
  }

  const origin = requestUrl.origin;
  const parentClients = await getOuterIframeClient(webviewId);
  if (!parentClients.length) {
    console.log('Could not find parent client for request');
    return notFound();
  }

  const { requestId, promise } = localhostRequestStore.create();
  for (const parentClient of parentClients) {
    parentClient.postMessage({ channel: 'load-localhost', origin, id: requestId });
  }

  return promise.then(async (requestResult) => {
    if (requestResult.status !== 'ok' || !requestResult.value) {
      return fetch(event.request);
    }

    const rewrittenOrigin = requestResult.value;
    const location = event.request.url.replace(
      new RegExp(`^${requestUrl.origin}(/|$)`),
      `${rewrittenOrigin}$1`
    );

    return new Response(null, {
      status: 302,
      headers: { Location: location },
    });
  });
}

function getWebviewIdForClient(client) {
  if (client.type === 'worker' || client.type === 'sharedworker') {
    return ID;
  }

  return new URL(client.url).searchParams.get('id');
}

async function getOuterIframeClient(id) {
  const clients = await sw.clients.matchAll({ includeUncontrolled: true });
  return clients.filter((client) => {
    const clientUrl = new URL(client.url);
    return (
      (clientUrl.pathname === `${rootPath}/` ||
        clientUrl.pathname === `${rootPath}/index.html` ||
        clientUrl.pathname === `${rootPath}/index-no-csp.html`) &&
      clientUrl.searchParams.get('id') === id
    );
  });
}

async function getWorkerClientForId(id) {
  const workers = await sw.clients.matchAll({ type: 'worker' });
  const sharedWorkers = await sw.clients.matchAll({ type: 'sharedworker' });
  return [...workers, ...sharedWorkers].find((client) => client.id === id);
}
