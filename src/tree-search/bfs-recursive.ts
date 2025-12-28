import type { NodaValue, Noda } from './types.js';

export function isInTreeUsingRecursiveBfs<T extends NodaValue>(level: Noda<T>[], val: T): boolean {
  if (level.length === 0) {
    return false;
  }

  for (const noda of level) {
    if (noda.val === val) {
      return true;
    }
  }

  return isInTreeUsingRecursiveBfs(
    level.map(n => [n.left, n.right]).
      flat().
      filter((n): n is Noda<T> => typeof n !== 'undefined'),
    val);
}