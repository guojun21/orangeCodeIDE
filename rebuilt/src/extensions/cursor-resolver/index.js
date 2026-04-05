import crypto from 'node:crypto';
import * as vscode from 'vscode';

const AUTHORITY_PREFIX = 'background-composer';
const STORAGE_KEY_PREFIX = 'cursor-resolver';

class CursorResolverLogger {
  static init() {
    if (!CursorResolverLogger.output) {
      CursorResolverLogger.output = vscode.window.createOutputChannel('Cursor Resolver');
    }
  }

  static line(message) {
    CursorResolverLogger.init();
    CursorResolverLogger.output?.appendLine(message);
  }

  static info(message) {
    CursorResolverLogger.line(`[INFO]  ${message}`);
  }

  static warn(message) {
    CursorResolverLogger.line(`[WARN]  ${message}`);
  }
}

function getCursorApi() {
  return vscode.cursor ?? undefined;
}

function storageKey(kind, authority) {
  return `${STORAGE_KEY_PREFIX}:${kind}:${authority}`;
}

class ResolverConnectionTokenProvider {
  constructor(context) {
    this.context = context;
  }

  async storeConnectionToken(authority, token, metadata, options) {
    await this.context.globalState.update(storageKey('connectionToken', authority), {
      token,
      metadata: metadata ?? null,
      options: options ?? null,
      storedAt: new Date().toISOString(),
    });
    CursorResolverLogger.info(`Stored connection token (authority=${authority})`);
  }

  getConnectionToken(authority) {
    return this.context.globalState.get(storageKey('connectionToken', authority))?.token;
  }

  async deleteConnectionToken(authority) {
    await this.context.globalState.update(storageKey('connectionToken', authority), undefined);
    CursorResolverLogger.info(`Deleted connection token (authority=${authority})`);
  }

  async getOrCreateConnectionToken(authority, seed = AUTHORITY_PREFIX) {
    const existing = this.getConnectionToken(authority);
    if (existing) {
      return existing;
    }

    const generated = `${seed}:${crypto.randomUUID()}`;
    await this.storeConnectionToken(authority, generated);
    CursorResolverLogger.info(`Created connection token (authority=${authority})`);
    return generated;
  }

  async setCursorServerUrl(authority, serverUrl) {
    await this.context.globalState.update(storageKey('cursorServerUrl', authority), serverUrl);
    CursorResolverLogger.info(`Updated cursor server url (authority=${authority})`);
  }
}

class BackgroundComposerAuthorityResolver {
  constructor(connectTransport, tokenProvider) {
    this.connectTransport = connectTransport;
    this.tokenProvider = tokenProvider;
    this._onDidChangeConnectionData = new vscode.EventEmitter();
    this.onDidChangeConnectionData = this._onDidChangeConnectionData.event;
    CursorResolverLogger.info('RemoteAuthorityResolver constructor');
  }

  async resolve(remoteAuthority) {
    const authority = remoteAuthority || AUTHORITY_PREFIX;
    const connectionToken = await this.tokenProvider.getOrCreateConnectionToken(authority, 'background-composer');
    CursorResolverLogger.info(`resolveRemoteAuthority (authority=${authority})`);

    return {
      host: '127.0.0.1',
      port: 0,
      connectionToken,
      extensionHostEnv: {},
      isTrusted: true,
    };
  }

  async getCanonicalURI(uri) {
    return uri;
  }

  dispose() {
    this._onDidChangeConnectionData.dispose();
  }
}

export function activate(context) {
  CursorResolverLogger.init();
  context.subscriptions.push(CursorResolverLogger.output);

  const isNodeExtensionHost = typeof process !== 'undefined' && Boolean(process.versions?.node);
  CursorResolverLogger.line(
    `[cursor-resolver] Running in ${isNodeExtensionHost ? 'Node.js' : 'web-worker'} extension host`
  );

  const cursorApi = getCursorApi();
  const tokenProvider = new ResolverConnectionTokenProvider(context);
  const resolver = new BackgroundComposerAuthorityResolver(cursorApi?.connectTransport, tokenProvider);

  context.subscriptions.push(resolver);
  context.subscriptions.push(
    vscode.workspace.registerRemoteAuthorityResolver(AUTHORITY_PREFIX, resolver)
  );

  if (
    cursorApi?.glassWorkspaceRole !== 'agentWorkspace' &&
    typeof cursorApi?.registerConnectionTokenProvider === 'function'
  ) {
    context.subscriptions.push(cursorApi.registerConnectionTokenProvider(tokenProvider));
    CursorResolverLogger.info('Registered connection token provider');
  } else {
    CursorResolverLogger.warn('cursor.registerConnectionTokenProvider is unavailable in this host');
  }
}

export function deactivate() {}
