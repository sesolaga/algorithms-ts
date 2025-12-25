import type { NodaValue, Noda } from './types.js';

export function isInTreeUsingRecusiveDfs<T extends NodaValue>(root: Noda<T>, val: T): boolean {
  if (root.val === val) {
    return true;
  }

  if (root.left) {
    if (isInTreeUsingRecusiveDfs(root.left, val)) {
      return true;
    }
  }

  if (root.right) {
    if (isInTreeUsingRecusiveDfs(root.right, val)) {
      return true;
    }
  }

  return false;
}