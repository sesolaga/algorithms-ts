function swap(arr: number[], i: number, j: number) {
    const tmp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = tmp;
}

// low ........ i-1 | i ........ j-1 | j ........ high-1 | pivot
// <= pivot         > pivot          unknown

// At every step of the loop, this is always true:
//   arr[low .. i-1] ≤ pivot
//   arr[i .. j-1] > pivot
//   arr[j .. high-1] = not processed yet
//   pivot untouched at high

// Because:

// When we see a small element, we extend the left region
// When we see a large one, it naturally stays in the middle

function lomutoPartition(arr: number[], low: number, high: number): number {
    // The pivot itself is parked out of the way at the end.
    const pivot = arr[high]!;

    // i always points to where the next small element should go
    let i = low;

    for (let j = low; j < high; ++j) {
        if (arr[j]! <= pivot) {
            swap(arr, i, j);
            ++i;
        }
    }

    // We know:
    // - everything before i ≤ pivot
    // - everything from i to high-1 > pivot
    // - pivot is sitting at high

    // So the only correct place for pivot is index i.
    swap(arr, i, high);

    return i;
}

export function quickSort(arr: number[], low: number = 0, high: number = arr.length - 1) {
    if (low >= high) {
        return;
    }

    const pivotIndex = lomutoPartition(arr, low, high);

    // After partition: [ <= pivot ] pivot [ > pivot ]
    // Pivot is done forever. Recursive calls never touch
    // it again. They operate on smaller arrays, therefore
    // they always terminate.

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
}
