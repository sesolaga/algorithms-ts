import type { NodaValue, Noda } from './types.js';

function isInTreeUsingNonRecursiveBfs<T extends NodaValue>(
  root: Noda<T>,
  val: T
): boolean {
  const queue: Noda<T>[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (node.val === val) {
      return true;
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return false;
}