import type { NodaValue, Noda } from './types.js';

export function fillTree<T extends NodaValue>(arr: T[], defaultVal: T): Noda<T> {
  const root: Noda<T> = {
    val: defaultVal
  };

  if (arr.length === 0) {
    return root; 
  }

  root.val = arr[0]!;
  const queue: Noda<T>[] = [root];

  let i = 1;
  let cur = queue.shift();
  while (cur && i < arr.length) {
    if (i < arr.length) {
      cur.left = { val: arr[i++] ?? defaultVal };
      queue.push(cur.left);
    }

    if (i < arr.length) {
      cur.right = { val: arr[i++] ?? defaultVal };
      queue.push(cur.right);
    }

    cur = queue.shift();
  }

  return root;
}