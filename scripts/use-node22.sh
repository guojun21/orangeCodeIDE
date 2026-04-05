#!/usr/bin/env bash
set -euo pipefail

NODE_VERSION="${SHOPEECODEDEV_NODE_VERSION:-22.22.2}"

if [[ ! -s "${HOME}/.nvm/nvm.sh" ]]; then
  echo "Missing ${HOME}/.nvm/nvm.sh; cannot switch to Node ${NODE_VERSION}." >&2
  return 1 2>/dev/null || exit 1
fi

if [[ -n "${npm_config_prefix:-}" ]]; then
  unset npm_config_prefix
fi

# shellcheck source=/dev/null
source "${HOME}/.nvm/nvm.sh"

nvm use "${NODE_VERSION}" >/dev/null

CURRENT_NODE_VERSION="$(node -p 'process.versions.node')"

if [[ "${CURRENT_NODE_VERSION}" != "${NODE_VERSION}" ]]; then
  echo "Expected Node ${NODE_VERSION}, got ${CURRENT_NODE_VERSION}." >&2
  return 1 2>/dev/null || exit 1
fi

if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
  if [[ $# -eq 0 ]]; then
    node -p 'process.versions.node'
  else
    exec "$@"
  fi
fi
