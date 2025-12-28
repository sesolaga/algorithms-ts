import { areArraysEqual } from '../utils.js';
import { quickSortWithCopying } from './quick-sort-with-copying.js';
import { quickSort as quickSortModifying } from './quick-sort.js';

console.log('============================= SORTING =============================')
const testCases = [
    [9, 3, 0, -3, 1, 2, 883, 45, -3, -3, -4, 5, 0, 0, 12],
    [0],
    [1, 1, 1, -1],
    [1, 0],
    [3, 0, 1],
    [-99, 2, -3, 5],
    [34, 12, -12, 331, -858, 0, -1, 52, -777]
];

const rows: Record<string, any> = [];

testCases.forEach((arr, index) => {
    const sorted = quickSortWithCopying(arr);
    const originalCopy = arr.slice();
    quickSortModifying(originalCopy);

    rows.push({
        value: index,
        'Original array': arr.join(' '),
        'Sorted with copying': sorted.join(' '),
        'Sorted with modifying': originalCopy.join(' '),
        'OK': areArraysEqual(sorted, originalCopy) ? '✅' : '❌'
    });
});

console.table(rows);
