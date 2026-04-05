import path from 'node:path';
import * as vscode from 'vscode';

const MCP_UPDATE_STATUS_COMMAND = 'mcp.updateStatus';
const MCP_RELOAD_CLIENT_COMMAND = 'mcp.reloadClient';
const MCP_LIST_SERVERS_COMMAND = 'mcp.listServers';

class McpLogger {
  static init() {
    if (!McpLogger.output) {
      McpLogger.output = vscode.window.createOutputChannel('MCP Logs', { log: true });
    }
  }

  static info(message) {
    McpLogger.init();
    McpLogger.output?.info(message);
  }

  static warn(message) {
    McpLogger.init();
    McpLogger.output?.warn(message);
  }

  static error(message) {
    McpLogger.init();
    McpLogger.output?.error(message);
  }

  static getLogger(identifier) {
    return {
      info: (message) => McpLogger.info(`[${identifier}] ${message}`),
      warn: (message) => McpLogger.warn(`[${identifier}] ${message}`),
      error: (message) => McpLogger.error(`[${identifier}] ${message}`),
    };
  }
}

class SnapshotPushRuntime {
  constructor(context) {
    this.context = context;
    this.state = {
      initializedAt: new Date().toISOString(),
      pushCount: 0,
    };
  }

  init() {
    McpLogger.info('Initialized MCP snapshot push runtime');
  }

  getState() {
    return { ...this.state };
  }
}

class SharedMcpManager {
  constructor(context) {
    this.context = context;
    this.providers = new Map();
    this.statuses = new Map();
    this.snapshotRuntime = new SnapshotPushRuntime(context);
  }

  async initialize() {
    this.snapshotRuntime.init();
    McpLogger.info('Initialized shared MCP manager');
  }

  registerProvider(identifier, provider) {
    this.providers.set(identifier, provider);
    McpLogger.info(`Registered MCP provider (${identifier})`);
    return new vscode.Disposable(() => {
      this.providers.delete(identifier);
      McpLogger.info(`Disposed MCP provider (${identifier})`);
    });
  }

  updateStatus(identifier, status) {
    this.statuses.set(identifier, status);
    McpLogger.info(`Updated MCP status (${identifier}, type=${status?.type ?? 'unknown'})`);
  }

  async reloadClient(identifier, serverInfo) {
    McpLogger.info(
      `Reloading MCP client (${identifier}, serverType=${serverInfo?.type ?? 'unknown'})`
    );
    return {
      identifier,
      serverInfo,
      reloadedAt: new Date().toISOString(),
    };
  }

  listServers() {
    return [...this.providers.keys()];
  }
}

class VscodeHostEnvironment {
  constructor(context) {
    this.context = context;
  }

  getOAuthContext() {
    return {
      globalState: this.context.globalState,
      workspaceState: this.context.workspaceState,
    };
  }

  getAppRoot() {
    return this.context.extension.extensionPath;
  }

  async executeCommand(command, ...args) {
    return vscode.commands.executeCommand(command, ...args);
  }
}

class VscodeMcpLease {
  constructor(context, manager) {
    this.context = context;
    this.manager = manager;
    this.createdAt = new Date().toISOString();
  }

  getSnapshotState() {
    return this.manager.snapshotRuntime.getState();
  }
}

let initialized = false;
let sharedManager;
let sharedLease;

function decodeOAuthState(rawState) {
  if (!rawState) {
    return null;
  }

  try {
    const decoded = Buffer.from(rawState, 'base64url').toString('utf8');
    const parsed = JSON.parse(decoded);
    if (parsed && typeof parsed.id === 'string') {
      return parsed;
    }
  } catch {}

  return null;
}

async function initializeMcpCommands(context) {
  if (initialized) {
    return sharedManager;
  }

  initialized = true;
  const hostEnvironment = new VscodeHostEnvironment(context);
  sharedManager = new SharedMcpManager(context);
  await sharedManager.initialize();

  const cursorApi = vscode.cursor ?? undefined;
  try {
    const v2Enabled = (await cursorApi?.checkFeatureGate?.('mcp_commands_v2')) === true;
    if (v2Enabled) {
      McpLogger.info('[MCP] V2 wiring layer enabled (mcp_commands_v2 gate)');
    } else {
      McpLogger.info('[MCP] Legacy wiring layer enabled');
    }
  } catch (error) {
    McpLogger.warn(
      `[MCP] Failed to evaluate feature gate mcp_commands_v2 (${error instanceof Error ? error.message : String(error)})`
    );
  }

  context.subscriptions.push(
    vscode.commands.registerCommand(MCP_UPDATE_STATUS_COMMAND, async ({ identifier, status }) => {
      sharedManager.updateStatus(identifier ?? 'unknown', status ?? { type: 'unknown' });
    }),
    vscode.commands.registerCommand(MCP_RELOAD_CLIENT_COMMAND, async ({ identifier, serverInfo }) => {
      return sharedManager.reloadClient(identifier ?? 'unknown', serverInfo ?? {});
    }),
    vscode.commands.registerCommand(MCP_LIST_SERVERS_COMMAND, async () => {
      return sharedManager.listServers();
    })
  );

  if (typeof cursorApi?.registerMcpProvider === 'function') {
    const providerDisposable = cursorApi.registerMcpProvider({
      getMcpLease: () => sharedLease,
    });
    context.subscriptions.push(providerDisposable);
    McpLogger.info('Registered MCP provider with cursor host');
  } else {
    McpLogger.warn('cursor.registerMcpProvider is unavailable in this host');
  }

  McpLogger.info(`Resolved MCP host environment (appRoot=${hostEnvironment.getAppRoot()})`);
  return sharedManager;
}

function createOAuthUriHandler(context) {
  return {
    async handleUri(uri) {
      try {
        const [, scope, action] = uri.path.split('/');
        if (scope !== 'oauth' || action !== 'callback') {
          void vscode.window.showWarningMessage('Unrecognized deep link. Try updating Cursor');
          return;
        }

        const params = new URLSearchParams(uri.query);
        const rawState = params.get('state');
        if (!rawState) {
          McpLogger.error('OAuth callback received without state parameter');
          void vscode.window.showErrorMessage(
            'OAuth callback is missing required state parameter. Please try again.'
          );
          return;
        }

        const state = decodeOAuthState(rawState);
        if (!state) {
          McpLogger.error('OAuth callback received with invalid state parameter');
          void vscode.window.showErrorMessage(
            'OAuth callback has invalid state parameter. Please try again.'
          );
          return;
        }

        const identifier = state.id;
        const authLogger = McpLogger.getLogger(identifier);
        const authorizationCode = params.get('code');
        if (!authorizationCode) {
          authLogger.warn('OAuth callback received without code parameter');
          return;
        }

        const serverUrl = context.globalState.get(`[${identifier}] mcp_server_url`);
        if (!serverUrl) {
          authLogger.error('No stored server URL for OAuth flow');
          return;
        }

        await vscode.commands.executeCommand(MCP_UPDATE_STATUS_COMMAND, {
          identifier,
          status: { type: 'initializing' },
        });
        authLogger.info('Received OAuth callback with code');

        await vscode.commands.executeCommand(MCP_RELOAD_CLIENT_COMMAND, {
          identifier,
          serverInfo: { type: 'streamableHttp', serverUrl },
        });

        authLogger.info('OAuth authorization completed');
      } catch (error) {
        McpLogger.error(
          `Error handling OAuth callback URI (${error instanceof Error ? error.message : String(error)})`
        );
      }
    },
  };
}

export async function activate(context) {
  McpLogger.init();
  McpLogger.info('cursor-mcp extension activating');

  const manager = await initializeMcpCommands(context);
  sharedLease = new VscodeMcpLease(context, manager);

  const uriHandlerDisposable = vscode.window.registerUriHandler(createOAuthUriHandler(context));
  context.subscriptions.push(McpLogger.output, uriHandlerDisposable);

  McpLogger.info('cursor-mcp extension activated');

  return {
    getMcpLease: () => sharedLease,
  };
}

export async function deactivate() {}
