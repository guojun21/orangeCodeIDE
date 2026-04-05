#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
USER_DATA_DIR="${SHOPEECODEDEV_USER_DATA_DIR:-/tmp/shopeecode-dev-user}"
ELECTRON_VERSION="${SHOPEECODEDEV_ELECTRON_VERSION:-39.8.3}"

# shellcheck source=/dev/null
source "${ROOT}/scripts/use-node22.sh"

exec npx -y "electron@${ELECTRON_VERSION}" "${ROOT}" "--user-data-dir=${USER_DATA_DIR}" "$@"
