import crypto from 'node:crypto';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { once } from 'node:events';
import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';
import * as vscode from 'vscode';

const DEFAULT_PORT_RANGE_START = 7242;
const DEFAULT_PORT_RANGE_END = 7942;
const SESSION_ID_PATTERN = /^[a-zA-Z0-9-]+$/;
const NEWLINE = 10;

class NdjsonIngestLogger {
  static init() {
    NdjsonIngestLogger.output = vscode.window.createOutputChannel('NDJSON Ingest', { log: true });
  }

  static ensure() {
    if (!NdjsonIngestLogger.output) {
      NdjsonIngestLogger.init();
    }
  }

  static error(message, ...args) {
    NdjsonIngestLogger.ensure();
    NdjsonIngestLogger.output?.error(message, ...args);
  }

  static warn(message, ...args) {
    NdjsonIngestLogger.ensure();
    NdjsonIngestLogger.output?.warn(message, ...args);
  }

  static info(message, ...args) {
    NdjsonIngestLogger.ensure();
    NdjsonIngestLogger.output?.info(message, ...args);
  }
}

function resolveLogger(logger) {
  return logger ?? {
    info() {},
    warn() {},
    error() {},
  };
}

async function isPortAvailable(port, bindAddress) {
  return new Promise((resolve) => {
    const server = http.createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close(() => resolve(true));
    });
    server.listen(port, bindAddress);
  });
}

function sanitizeSessionId(sessionId, logger) {
  if (!sessionId) {
    return undefined;
  }
  if (SESSION_ID_PATTERN.test(sessionId)) {
    return sessionId;
  }
  logger.warn('Rejected unsafe X-Debug-Session-Id header value');
  return undefined;
}

function ensureTrailingNewline() {
  let lastByte = NEWLINE;
  return new Transform({
    transform(chunk, _encoding, callback) {
      if (chunk.length > 0) {
        lastByte = chunk[chunk.length - 1];
      }
      callback(null, chunk);
    },
    flush(callback) {
      if (lastByte !== NEWLINE) {
        this.push(Buffer.from('\n'));
      }
      callback();
    },
  });
}

async function chooseNdjsonPort({
  bindAddress,
  configuredPort = 0,
  previouslyAllocatedPort = 0,
  rangeStart = DEFAULT_PORT_RANGE_START,
  rangeEnd = DEFAULT_PORT_RANGE_END,
  onAutoAllocatedPort,
  logger,
}) {
  if (configuredPort !== 0) {
    return configuredPort;
  }
  if (previouslyAllocatedPort !== 0) {
    return previouslyAllocatedPort;
  }
  if (rangeStart > rangeEnd) {
    throw new Error(`Invalid port range ${rangeStart}-${rangeEnd}`);
  }

  const resolvedLogger = resolveLogger(logger);
  const portCount = rangeEnd - rangeStart + 1;
  const randomOffset = Math.floor(Math.random() * portCount);
  for (let index = 0; index < portCount; index += 1) {
    const candidate = rangeStart + ((randomOffset + index) % portCount);
    if (await isPortAvailable(candidate, bindAddress)) {
      await onAutoAllocatedPort?.(candidate);
      resolvedLogger.info(`Auto-allocated port ${candidate} and saved to internal storage`);
      return candidate;
    }
  }

  throw new Error(`No available ports in range ${rangeStart}-${rangeEnd}`);
}

class NdjsonServerStartError extends Error {
  constructor({ message, port, code, cause }) {
    super(message);
    this.name = 'NdjsonServerStartError';
    this.port = port;
    this.code = code;
    if (cause !== undefined) {
      this.cause = cause;
    }
  }
}

function extractErrorCode(error) {
  if (error && typeof error === 'object' && 'code' in error && typeof error.code === 'string') {
    return error.code;
  }
  return undefined;
}

class NdjsonIngestServer {
  constructor(options) {
    this.options = options;
    this.logger = resolveLogger(options.logger);
    this.server = undefined;
    this.currentPort = 0;
    this.writeQueue = Promise.resolve();
  }

  getLoopbackUrl() {
    if (!this.currentPort) {
      return undefined;
    }
    return `http://${this.options.bindAddress}:${this.currentPort}/ingest/${this.options.ingestPathId}`;
  }

  getLogPathForSession(sessionId) {
    const safeSessionId = sanitizeSessionId(sessionId, this.logger);
    if (safeSessionId) {
      return path.join(this.options.logDirectory, `debug-${safeSessionId}.log`);
    }
    return path.join(this.options.logDirectory, 'debug.log');
  }

  async start() {
    if (this.server) {
      return this.buildStartResult();
    }

    fs.mkdirSync(this.options.logDirectory, { recursive: true });
    const server = http.createServer((request, response) => {
      this.handleRequest(request, response).catch((error) => {
        this.logger.error('NDJSON ingest write error:', error);
        response.writeHead(500);
        response.end('write-failed');
      });
    });

    try {
      await this.listen(server);
    } catch (error) {
      server.removeAllListeners();
      throw new NdjsonServerStartError({
        message: error instanceof Error ? error.message : `Failed to start NDJSON server on port ${this.options.port}`,
        port: this.options.port,
        code: extractErrorCode(error),
        cause: error,
      });
    }

    this.server = server;
    const address = server.address();
    this.currentPort = address?.port ?? 0;
    this.logger.info(`NDJSON ingest server started on port ${this.currentPort}`);
    return this.buildStartResult();
  }

  async stop() {
    if (!this.server) {
      return;
    }
    const server = this.server;
    server.closeAllConnections?.();
    server.close();
    await once(server, 'close');
    this.server = undefined;
    this.currentPort = 0;
  }

  async listen(server) {
    server.listen(this.options.port, this.options.bindAddress);
    await once(server, 'listening');
  }

  async appendExclusive(request, filePath) {
    const work = async () => {
      const writeStream = fs.createWriteStream(filePath, { flags: 'a' });
      await pipeline(request, ensureTrailingNewline(), writeStream);
    };

    const next = this.writeQueue.then(work, work);
    this.writeQueue = next.catch((error) => {
      this.logger.error('Error appending to log file:', error);
    });
    await next;
  }

  buildStartResult() {
    const loopbackUrl = this.getLoopbackUrl();
    if (!loopbackUrl) {
      throw new Error('NDJSON server is not listening');
    }
    return {
      loopbackUrl,
      defaultLogPath: this.getLogPathForSession(),
    };
  }

  async handleRequest(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Debug-Session-Id');

    if (request.method === 'OPTIONS') {
      response.writeHead(200);
      response.end();
      return;
    }

    if (request.method !== 'POST' || request.url !== `/ingest/${this.options.ingestPathId}`) {
      response.writeHead(404);
      response.end();
      return;
    }

    const sessionHeader = typeof request.headers['x-debug-session-id'] === 'string'
      ? request.headers['x-debug-session-id']
      : undefined;
    const logPath = this.getLogPathForSession(sessionHeader);
    await this.appendExclusive(request, logPath);
    response.writeHead(204);
    response.end();
  }
}

let server;
let externalUrl = '';
let serial = Promise.resolve();

function queue(operation) {
  const next = serial.then(operation, operation);
  serial = next.catch(() => {});
  return next;
}

function promptPortSettings(message) {
  vscode.window.showErrorMessage(message, 'Change Port').then((choice) => {
    if (choice === 'Change Port') {
      vscode.commands.executeCommand('workbench.action.openWorkspaceSettings', 'ndjson.port');
    }
  });
}

async function startServer(serverInstance) {
  const startResult = await serverInstance.start();
  server = serverInstance;
  const loopbackUri = vscode.Uri.parse(startResult.loopbackUrl);
  try {
    externalUrl = (await vscode.env.asExternalUri(loopbackUri)).toString();
  } catch (error) {
    NdjsonIngestLogger.error('asExternalUri failed; using loopback URL', error);
    externalUrl = loopbackUri.toString();
  }
  return {
    externalUrl,
    logPath: startResult.defaultLogPath,
  };
}

async function stopServer() {
  NdjsonIngestLogger.info('Stopping NDJSON ingest server');
  if (server) {
    await server.stop().catch((error) => {
      NdjsonIngestLogger.error('Error stopping NDJSON ingest server:', error);
    });
    server = undefined;
    externalUrl = '';
  }
}

function handleServerStartError(error, isAutoAllocated) {
  if (!(error instanceof NdjsonServerStartError)) {
    const message = error instanceof Error ? error.message : String(error);
    NdjsonIngestLogger.error('NDJSON ingest server listen error:', error);
    vscode.window.showErrorMessage(`NDJSON Ingest: Server error - ${message}`);
    return `Server error - ${message}`;
  }

  switch (error.code) {
    case 'EADDRINUSE':
      NdjsonIngestLogger.error(`Port ${error.port} is already in use`);
      if (isAutoAllocated) {
        vscode.window.showErrorMessage(`NDJSON Ingest: Cannot start server - port ${error.port} became unavailable. Please try again.`);
      } else {
        promptPortSettings(`NDJSON Ingest: Cannot start server - port ${error.port} is already in use. Try changing the port in settings or stopping the other service.`);
      }
      return 'Port is already in use';
    case 'EACCES':
      NdjsonIngestLogger.error(`Permission denied for port ${error.port}`);
      if (isAutoAllocated) {
        vscode.window.showErrorMessage(`NDJSON Ingest: Permission denied for port ${error.port}. This is unexpected for auto-allocated ports.`);
      } else {
        promptPortSettings(`NDJSON Ingest: Permission denied for port ${error.port}. Try using a port number greater than 1024.`);
      }
      return `Permission denied for port ${error.port}`;
    default:
      NdjsonIngestLogger.error('NDJSON ingest server listen error:', error);
      vscode.window.showErrorMessage(`NDJSON Ingest: Server error - ${error.message}`);
      return `Server error - ${error.message}`;
  }
}

async function startCommand(context) {
  return queue(async () => {
    if (!vscode.workspace.isTrusted) {
      vscode.window.showWarningMessage('debug mode disabled in untrusted workspace.');
      return;
    }

    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
      vscode.window.showErrorMessage('No workspace storage available (open a folder/workspace).');
      return;
    }

    if (server) {
      const url = externalUrl || server.getLoopbackUrl();
      if (url) {
        return {
          externalUrl: url,
          logPath: server.getLogPathForSession(),
        };
      }
      NdjsonIngestLogger.warn('Server was set but no URL was available; stopping stale server.');
      await stopServer();
    }

    const logDirectory = vscode.Uri.joinPath(workspaceFolder.uri, '.cursor');
    const config = vscode.workspace.getConfiguration('ndjson');
    const bindAddress = config.get('bindAddress', '127.0.0.1');
    const configuredPort = config.get('port', 0);
    const isAutoAllocated = configuredPort === 0;
    const stickyPort = context.workspaceState.get('allocatedPort', 0);

    let selectedPort;
    try {
      selectedPort = await chooseNdjsonPort({
        bindAddress,
        configuredPort,
        previouslyAllocatedPort: stickyPort,
        onAutoAllocatedPort: async (allocatedPort) => {
          await context.workspaceState.update('allocatedPort', allocatedPort);
        },
        logger: NdjsonIngestLogger,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      NdjsonIngestLogger.error('Failed to choose port:', error);
      vscode.window.showErrorMessage(`NDJSON Ingest: ${message}`);
      return message;
    }

    const targetId = context.workspaceState.get('ndjson.targetId', crypto.randomUUID());
    await context.workspaceState.update('ndjson.targetId', targetId);

    const nextServer = new NdjsonIngestServer({
      bindAddress,
      port: selectedPort,
      ingestPathId: targetId,
      logDirectory: logDirectory.fsPath,
      logger: NdjsonIngestLogger,
    });

    const reusedStickyPort = isAutoAllocated && stickyPort !== 0 && selectedPort === stickyPort;
    try {
      return await startServer(nextServer);
    } catch (error) {
      let finalError = error;
      if (error instanceof NdjsonServerStartError && error.code === 'EADDRINUSE' && reusedStickyPort) {
        NdjsonIngestLogger.info(`Sticky port ${selectedPort} busy, retrying after brief delay...`);
        await new Promise((resolve) => setTimeout(resolve, 300));
        try {
          return await startServer(nextServer);
        } catch (retryError) {
          finalError = retryError;
        }
      }
      return handleServerStartError(finalError, isAutoAllocated);
    }
  });
}

function stopCommand() {
  return queue(() => stopServer());
}

async function copyCurlCommand() {
  if (!externalUrl) {
    vscode.window.showWarningMessage('Server is not running.');
    return;
  }
  const curl = `curl -sS -H "Content-Type: application/x-ndjson" --data-binary '{"hello":"world"}' "${externalUrl}"`;
  await vscode.env.clipboard.writeText(curl);
  vscode.window.showInformationMessage('NDJSON Ingest: curl command copied to clipboard.');
}

function showStatusCommand() {
  if (externalUrl) {
    vscode.window.showInformationMessage(`URL: ${externalUrl}`);
  } else {
    vscode.window.showInformationMessage('NDJSON: server not running.');
  }
}

export async function activate(context) {
  NdjsonIngestLogger.init();
  context.subscriptions.push(vscode.commands.registerCommand('cursor.ndjsonIngest.start', () => startCommand(context)));
  context.subscriptions.push(vscode.commands.registerCommand('cursor.ndjsonIngest.stop', () => stopCommand()));
  context.subscriptions.push(vscode.commands.registerCommand('cursor.ndjsonIngest.copyCurl', () => copyCurlCommand()));
  context.subscriptions.push(vscode.commands.registerCommand('cursor.ndjsonIngest.showStatus', () => showStatusCommand()));
}

export async function deactivate() {
  await stopCommand();
}
