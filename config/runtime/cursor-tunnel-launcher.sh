#!/usr/bin/env bash
set -euo pipefail

TARGET="${ORANGECODEIDE_CURSOR_TUNNEL_BIN:-}"

if [[ -z "${TARGET}" && -n "${ORANGECODEIDE_RUNTIME_INPUT_ROOT:-}" ]]; then
  TARGET="${ORANGECODEIDE_RUNTIME_INPUT_ROOT}/bin/cursor-tunnel"
fi

if [[ -z "${TARGET}" ]]; then
  TARGET="__CURSOR_TUNNEL_BINARY__"
fi

if [[ ! -x "${TARGET}" ]]; then
  echo "Error: cursor-tunnel runtime binary not found: ${TARGET}" 1>&2
  echo "Hint: run 'npm run bootstrap:runtime -- --force' to refresh the staged runtime dependency." 1>&2
  exit 1
fi

exec "${TARGET}" "$@"
