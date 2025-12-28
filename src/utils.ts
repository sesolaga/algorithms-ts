export function areArraysEqual<T>(first: T[], second: T[]): boolean {
    return first.length === second.length && first.every((val, index) => val === second[index]);
}