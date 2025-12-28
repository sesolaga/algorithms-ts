export function quickSortWithCopying(numbers: number[]): number[] {
    const len = numbers.length;
    if (len <= 1) {
        return numbers.slice();
    }

    const pivotIndex = Math.floor(len / 2);
    const pivot = numbers[pivotIndex]!;
    const left: number[] = []
    const right: number[] = [];

    numbers.forEach((n, index) => {
        if (index === pivotIndex) {
            return;
        }

        if (n <= pivot) {
            left.push(n);
        }

        if (n > pivot) {
            right.push(n);
        }
    });

    return [...quickSortWithCopying(left), pivot, ...quickSortWithCopying(right)];
}