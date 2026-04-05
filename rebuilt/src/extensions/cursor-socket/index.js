import net from 'net';
import tls from 'tls';
import * as vscode from 'vscode';

const output = vscode.window.createOutputChannel('Cursor Socket', { log: true });

let nextSocketOrServerId = 1;
let nextAcceptedConnectionId = 1;

function createSocketHandle(socketId, protocol, destination, socket, onDidReceiveData, onDidClose) {
  return {
    onDidReceiveData: onDidReceiveData.event,
    onDidClose: onDidClose.event,
    send(data) {
      socket.write(data);
    },
    close() {
      output.info(`[socket ${socketId}] close requested — ${protocol} ${destination}`);
      socket.end();
    },
  };
}

function attachSocketListeners(socketId, protocol, destination, socket, onDidReceiveData, onDidClose, onInitialError) {
  let settled = false;

  socket.on('data', (data) => {
    onDidReceiveData.fire(new Uint8Array(data));
  });

  socket.on('close', (hadError) => {
    output.info(`[socket ${socketId}] closed (hadError=${hadError}) — ${protocol} ${destination}`);
    onDidClose.fire(hadError ? new Error('Socket closed with error') : undefined);
    onDidReceiveData.dispose();
    onDidClose.dispose();
  });

  socket.on('error', (error) => {
    output.error(`[socket ${socketId}] error: ${error.message} — ${protocol} ${destination}`);
    if (!settled) {
      settled = true;
      onInitialError(error);
    }
  });

  return () => {
    settled = true;
  };
}

function provideConnection(options) {
  const socketId = nextSocketOrServerId++;
  const protocol = options.tls ? 'tls' : 'tcp';
  const destination = `${options.host}:${options.port}`;

  output.info(`[socket ${socketId}] opening ${protocol} connection to ${destination}`);

  return new Promise((resolve, reject) => {
    const onDidReceiveData = new vscode.EventEmitter();
    const onDidClose = new vscode.EventEmitter();
    let socket;

    const markSettled = (error) => {
      reject(error);
    };

    if (options.tls) {
      socket = tls.connect(
        {
          host: options.host,
          port: options.port,
          rejectUnauthorized: options.tls.rejectUnauthorized ?? true,
          servername: options.tls.servername ?? options.host,
          ca: options.tls.ca,
          cert: options.tls.cert,
          key: options.tls.key,
        },
        () => {
          markConnected();
          output.info(`[socket ${socketId}] connected (tls) to ${destination}`);
          resolve(createSocketHandle(socketId, protocol, destination, socket, onDidReceiveData, onDidClose));
        }
      );
    } else {
      socket = net.createConnection(
        {
          host: options.host,
          port: options.port,
        },
        () => {
          markConnected();
          output.info(`[socket ${socketId}] connected (tcp) to ${destination}`);
          resolve(createSocketHandle(socketId, protocol, destination, socket, onDidReceiveData, onDidClose));
        }
      );
    }

    const markConnected = attachSocketListeners(
      socketId,
      protocol,
      destination,
      socket,
      onDidReceiveData,
      onDidClose,
      markSettled
    );
  });
}

function listen(server, host, port, serverId) {
  return new Promise((resolve, reject) => {
    const onError = (error) => {
      server.off('listening', onListening);
      output.warn(`[server ${serverId}] listen failed on ${host}:${port}: ${error.message}`);
      reject(error);
    };
    const onListening = () => {
      server.off('error', onError);
      resolve();
    };

    server.once('error', onError);
    server.once('listening', onListening);
    server.listen(port, host);
  });
}

function probeBindable(host, port) {
  return new Promise((resolve) => {
    const probe = net.createServer();
    const cleanup = () => {
      probe.removeAllListeners('error');
      probe.removeAllListeners('listening');
    };

    probe.once('error', (error) => {
      cleanup();
      if (error.code === 'EADDRINUSE') {
        resolve('in-use');
        return;
      }
      resolve('unsupported');
    });

    probe.once('listening', () => {
      cleanup();
      probe.close(() => resolve('bindable'));
    });

    probe.listen({
      host,
      port,
      exclusive: true,
      ipv6Only: host.includes(':') || undefined,
    });
  });
}

async function isPortInUseLocally(port) {
  const checks = await Promise.all([
    probeBindable('127.0.0.1', port),
    probeBindable('0.0.0.0', port),
    probeBindable('::1', port),
    probeBindable('::', port),
  ]);

  return checks.includes('in-use');
}

function provideServer(host, preferredPort) {
  const serverId = nextSocketOrServerId++;

  return new Promise((resolve, reject) => {
    const onDidAccept = new vscode.EventEmitter();
    const onDidReceiveData = new vscode.EventEmitter();
    const onDidCloseConnection = new vscode.EventEmitter();
    const connections = new Map();

    const server = net.createServer((socket) => {
      const connectionId = nextAcceptedConnectionId++;
      connections.set(connectionId, socket);
      output.info(`[server ${serverId}] accepted connection ${connectionId}`);

      socket.on('data', (data) => {
        onDidReceiveData.fire({ connectionId, data: new Uint8Array(data) });
      });
      socket.on('close', () => {
        connections.delete(connectionId);
        onDidCloseConnection.fire({ connectionId, error: undefined });
      });
      socket.on('error', (error) => {
        connections.delete(connectionId);
        onDidCloseConnection.fire({ connectionId, error: error.message });
      });

      onDidAccept.fire({ connectionId });
    });

    (async () => {
      try {
        try {
          if (preferredPort !== 0 && (await isPortInUseLocally(preferredPort))) {
            throw new Error('EADDRINUSE_LOCAL_BIND_PROBE');
          }
          await listen(server, host, preferredPort, serverId);
        } catch (error) {
          output.warn(
            `[server ${serverId}] failed to listen on ${host}:${preferredPort}, retrying on ephemeral port: ${error.message}`
          );
          await listen(server, host, 0, serverId);
        }

        resolve({
          localPort: server.address().port,
          onDidAccept: onDidAccept.event,
          onDidReceiveData: onDidReceiveData.event,
          onDidCloseConnection: onDidCloseConnection.event,
          write(connectionId, data) {
            connections.get(connectionId)?.write(data);
          },
          closeConnection(connectionId) {
            const socket = connections.get(connectionId);
            if (!socket) {
              return;
            }
            socket.end();
            connections.delete(connectionId);
          },
          close() {
            output.info(`[server ${serverId}] closing`);
            for (const socket of connections.values()) {
              socket.destroy();
            }
            connections.clear();
            server.close();
            onDidAccept.dispose();
            onDidReceiveData.dispose();
            onDidCloseConnection.dispose();
          },
        });
      } catch (error) {
        output.error(`[server ${serverId}] error: ${error.message}`);
        reject(error);
      }
    })();
  });
}

export function activate(context) {
  output.info('cursor-socket extension activating');
  context.subscriptions.push(
    output,
    vscode.cursor.registerSocketConnectionProvider({
      provideConnection: async (options) => provideConnection(options),
    }),
    vscode.cursor.registerSocketServerProvider({
      provideServer: async (host, port) => provideServer(host, port),
    })
  );
  output.info('cursor-socket extension activated');
}

export function deactivate() {
  output.info('cursor-socket extension deactivating');
}
