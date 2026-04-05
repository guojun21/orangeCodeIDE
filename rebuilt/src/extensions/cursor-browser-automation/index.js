import fs from 'node:fs';
import path from 'node:path';
import * as vscode from 'vscode';

const SNAPSHOT_BACKFILL_COMMAND = 'cursor.browserAutomation.requestSnapshotBackfill';
const REINJECT_UI_SCRIPT_COMMAND = 'cursor.browserAutomation.reinjectUIScript';
const GET_CANVAS_URL_COMMAND = 'cursor.browserAutomation.getCanvasUrl';

class CursorBrowserAutomationLogger {
  static init() {
    if (!CursorBrowserAutomationLogger.output) {
      CursorBrowserAutomationLogger.output = vscode.window.createOutputChannel('Cursor IDE Browser Automation', { log: true });
    }
  }

  static ensure() {
    CursorBrowserAutomationLogger.init();
    return CursorBrowserAutomationLogger.output;
  }

  static info(message, ...args) {
    CursorBrowserAutomationLogger.ensure()?.info(message, ...args);
  }

  static warn(message, ...args) {
    CursorBrowserAutomationLogger.ensure()?.warn(message, ...args);
  }

  static error(message, ...args) {
    CursorBrowserAutomationLogger.ensure()?.error(message, ...args);
  }
}

class MinimalBrowserAutomationProvider {
  constructor() {
    this.id = 'cursor-ide-browser';
    this.featureGateName = undefined;
    this.instructions = 'The cursor-ide-browser MCP server provides browser automation primitives inside Cursor.';
    this.globalStoragePath = undefined;
  }

  async initialize(globalStoragePath) {
    this.globalStoragePath = globalStoragePath;
    fs.mkdirSync(globalStoragePath, { recursive: true });
    CursorBrowserAutomationLogger.info(`Initialized browser automation provider at ${globalStoragePath}`);
  }

  async listOfferings() {
    return {
      tools: [
        {
          name: 'browser_snapshot',
          description: 'Returns a lightweight browser automation availability snapshot.',
          parameters: JSON.stringify({
            type: 'object',
            properties: {},
            additionalProperties: false,
          }),
        },
      ],
      resources: [],
      prompts: [],
    };
  }

  async callTool(name) {
    CursorBrowserAutomationLogger.info(`Received MCP tool call for ${name}`);
    return {
      content: [
        {
          type: 'text',
          text: `browser automation rebuilt provider acknowledged tool ${name}`,
        },
      ],
    };
  }

  async getCanvasServer() {
    return undefined;
  }

  async dispose() {
    CursorBrowserAutomationLogger.info('Browser automation provider disposed');
  }
}

function getCursorApi() {
  return vscode.cursor ?? undefined;
}

async function registerMcpProvider(context, provider) {
  const cursorApi = getCursorApi();
  if (!cursorApi?.registerMcpProvider) {
    CursorBrowserAutomationLogger.warn('cursor.registerMcpProvider is unavailable in this host');
    return;
  }

  const disposable = cursorApi.registerMcpProvider(provider);
  context.subscriptions.push(disposable);
  CursorBrowserAutomationLogger.info(`Registered MCP provider ${provider.id}`);
}

function registerCommands(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(SNAPSHOT_BACKFILL_COMMAND, () => {
      CursorBrowserAutomationLogger.info('Snapshot backfill requested');
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(REINJECT_UI_SCRIPT_COMMAND, async () => {
      CursorBrowserAutomationLogger.info('Browser UI script reinjection requested');
      return { success: true };
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(GET_CANVAS_URL_COMMAND, async (canvasId, fileName) => {
      CursorBrowserAutomationLogger.info(
        `Canvas URL requested for canvasId=${canvasId ?? 'unknown'} fileName=${fileName ?? 'unknown'}`
      );

      if (!canvasId || !fileName || !path.isAbsolute(String(fileName))) {
        return undefined;
      }

      return vscode.Uri.file(String(fileName)).toString(true);
    })
  );
}

export async function activate(context) {
  CursorBrowserAutomationLogger.init();
  CursorBrowserAutomationLogger.info('Cursor Browser Automation extension activated');

  const provider = new MinimalBrowserAutomationProvider();
  await provider.initialize(context.globalStorageUri.fsPath);
  await registerMcpProvider(context, provider);
  registerCommands(context);

  context.subscriptions.push({
    dispose() {
      void provider.dispose();
    },
  });
}

export async function deactivate() {}
