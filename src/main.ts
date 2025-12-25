import { fillTree } from './tree-helpers.js';
import { isInTreeUsingRecursiveBfs } from './bfs-recursive.js';
import { isInTreeUsingNonRecursiveBfs } from './bfs-non-recursive.js';
import { isInTreeUsingRecusiveDfs } from './dfs-recursive.js';

const NODES_NUMBER = 115;
const VALUES_TO_FIND_NUMBER = NODES_NUMBER + 10;

const arr = Array.from({ length: NODES_NUMBER }, (_, index) => index + 1);
console.log('arr', arr);

const treeRoot = fillTree(arr, 0);

const rows = [];

for (let i = 0; i <= VALUES_TO_FIND_NUMBER; ++i) {
  const recDfs = isInTreeUsingRecusiveDfs(treeRoot, i);
  const recBfs = isInTreeUsingRecursiveBfs([treeRoot], i);
  const iterBfs = isInTreeUsingNonRecursiveBfs(treeRoot, i);

  rows.push({
    value: i,
    "DFS (rec)": recDfs,
    "BFS (rec)": recBfs, 
    "BFS (iter)": iterBfs,
    "OK": (recDfs === recBfs && recBfs === iterBfs) ? '✅' : '❌' 
  });
}

console.table(rows);