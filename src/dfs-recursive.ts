import type { NodaValue, Noda } from './types.js';

export function isInTreeUsingDfs<T extends NodaValue>(root: Noda<T>, val: T): boolean {
  if (root.val === val) {
    return true;
  }

  if (root.left) {
    if (isInTreeUsingDfs(root.left, val)) {
      return true;
    }
  }

  if (root.right) {
    if (isInTreeUsingDfs(root.right, val)) {
      return true;
    }
  }

  return false;
}