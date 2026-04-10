#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
USER_DATA_DIR="${SHOPEECODE_REBUILT_USER_DATA_DIR:-${ROOT}/.runtime-user-data/rebuilt-main}"
RUNTIME_ROOT_INPUT="${SHOPEECODE_REBUILT_RUNTIME_ROOT:-${ROOT}/recovered/rebuilt/runtime-app}"

if [[ "${RUNTIME_ROOT_INPUT}" = /* ]]; then
  RUNTIME_ROOT="${RUNTIME_ROOT_INPUT}"
else
  RUNTIME_ROOT="${ROOT}/${RUNTIME_ROOT_INPUT}"
fi

mkdir -p "$(dirname "${USER_DATA_DIR}")"
ELECTRON_VERSION="${SHOPEECODEDEV_ELECTRON_VERSION:-39.8.3}"

# shellcheck source=/dev/null
source "${ROOT}/scripts/use-node22.sh"

if [[ "${SHOPEECODE_REBUILT_SKIP_PREPARE:-0}" != "1" ]]; then
  node "${ROOT}/scripts/prepare-rebuilt-runtime.mjs"
fi

export SHOPEECODE_REBUILT_RUNTIME_ROOT="${RUNTIME_ROOT}"
exec npx -y "electron@${ELECTRON_VERSION}" "${ROOT}/scripts/electron-runtime-launcher.mjs" "--user-data-dir=${USER_DATA_DIR}" "$@"
