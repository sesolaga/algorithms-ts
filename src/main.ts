import { fillTree } from './tree-helpers.js';
import { isInTreeUsingRecursiveBfs } from './bfs-recursive.js';
import { isInTreeUsingDfs } from './dfs-recursive.js';

const arr = Array.from({ length: 115}, (_, index) => index + 1);
console.log('arr', arr);

const treeRoot = fillTree(arr, 0);
console.log('treeRoot', treeRoot);
console.log('treeRoot left', treeRoot.left);
console.log('treeRoot right', treeRoot.right);

for (let i = 0; i <= 120; ++i) {
  console.log(`isInTree DFS ${i}`, isInTreeUsingDfs(treeRoot, i));
  console.log(`isInTree BFS ${i}`, isInTreeUsingRecursiveBfs([treeRoot], i));
}