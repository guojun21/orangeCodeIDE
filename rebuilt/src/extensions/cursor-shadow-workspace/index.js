import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import * as vscode from 'vscode';

class ShadowWorkspaceLogger {
  static init() {
    if (!ShadowWorkspaceLogger.output) {
      ShadowWorkspaceLogger.output = vscode.window.createOutputChannel('Shadow Workspace', { log: true });
    }
  }

  static info(message) {
    ShadowWorkspaceLogger.init();
    ShadowWorkspaceLogger.output?.info(message);
  }

  static warn(message) {
    ShadowWorkspaceLogger.init();
    ShadowWorkspaceLogger.output?.warn(message);
  }

  static error(message) {
    ShadowWorkspaceLogger.init();
    ShadowWorkspaceLogger.output?.error(message);
  }
}

function getCursorApi() {
  return vscode.cursor ?? undefined;
}

function safeStorageRoot(context) {
  return context.globalStorageUri?.fsPath ?? path.join(os.tmpdir(), 'cursor-shadow-workspace');
}

class ShadowServerProvider {
  constructor(context) {
    this.context = context;
    this.storageRoot = safeStorageRoot(context);
    this.socketPath =
      process.platform === 'win32'
        ? path.join(this.storageRoot, 'shadow-workspace.pipe')
        : path.join(this.storageRoot, 'shadow-workspace.sock');
    this.started = false;
    this._onDidChange = new vscode.EventEmitter();
    this.onDidChange = this._onDidChange.event;
  }

  async ensureStarted() {
    if (this.started) {
      return { socketPath: this.socketPath };
    }

    ShadowWorkspaceLogger.info(`Starting shadow server (socketPath=${this.socketPath})`);

    if (process.platform !== 'win32') {
      const directory = path.dirname(this.socketPath);
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
        ShadowWorkspaceLogger.info(`Created directory for socket path (directory=${directory})`);
      }

      if (fs.existsSync(this.socketPath)) {
        fs.rmSync(this.socketPath, { force: true });
        ShadowWorkspaceLogger.info(`Deleted existing socket file (socketPath=${this.socketPath})`);
      }
    }

    this.started = true;
    this._onDidChange.fire({ socketPath: this.socketPath, state: 'started' });
    ShadowWorkspaceLogger.info(`Listening on socket path (socketPath=${this.socketPath})`);

    return { socketPath: this.socketPath };
  }

  async start() {
    return this.ensureStarted();
  }

  async getServerInfo() {
    return this.ensureStarted();
  }

  async resolveServer() {
    return this.ensureStarted();
  }

  dispose() {
    this._onDidChange.dispose();
    ShadowWorkspaceLogger.info('Disposed shadow server provider');
  }
}

class ShadowClientProvider {
  constructor(serverProvider) {
    this.serverProvider = serverProvider;
    this._onDidChange = new vscode.EventEmitter();
    this.onDidChange = this._onDidChange.event;
  }

  async getConnectionInfo() {
    const serverInfo = await this.serverProvider.ensureStarted();
    this._onDidChange.fire(serverInfo);
    ShadowWorkspaceLogger.info(`Resolved shadow client connection info (socketPath=${serverInfo.socketPath})`);
    return serverInfo;
  }

  async connect() {
    return this.getConnectionInfo();
  }

  async resolveConnection() {
    return this.getConnectionInfo();
  }

  dispose() {
    this._onDidChange.dispose();
    ShadowWorkspaceLogger.info('Disposed shadow client provider');
  }
}

function registerCursorProvider(context, methodName, provider, label) {
  const cursorApi = getCursorApi();
  const register = cursorApi?.[methodName];

  if (typeof register !== 'function') {
    ShadowWorkspaceLogger.warn(`cursor.${methodName} is unavailable in this host`);
    return;
  }

  const disposable = register.call(cursorApi, provider);
  context.subscriptions.push(disposable);
  ShadowWorkspaceLogger.info(`Registered ${label}`);
}

export function activate(context) {
  ShadowWorkspaceLogger.init();
  ShadowWorkspaceLogger.info('cursor-shadow-workspace extension activating');

  const serverProvider = new ShadowServerProvider(context);
  const clientProvider = new ShadowClientProvider(serverProvider);

  context.subscriptions.push(
    ShadowWorkspaceLogger.output,
    serverProvider,
    clientProvider
  );

  registerCursorProvider(context, 'registerShadowClientProvider', clientProvider, 'shadow client provider');
  registerCursorProvider(context, 'registerShadowServerProvider', serverProvider, 'shadow server provider');

  ShadowWorkspaceLogger.info('cursor-shadow-workspace extension activated');
}

export function deactivate() {}
