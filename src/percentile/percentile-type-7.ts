// Hyndman–Fan Type 7 (Excel / NumPy compatible)
// Spreads percentiles evenly across data
export function calculatePercentileType7(
  data: number[],
  percentile: number,
): number | undefined {
  const n = data.length;
  if (n === 0) {
    return undefined;
  }

  const sorted = data.toSorted((a, b) => a - b);

  if (percentile <= 0) {
    return sorted[0];
  }

  if (percentile >= 100) {
    return sorted[n - 1];
  }

  // rank is always between 0 and n - 1
  const rank = (percentile / 100) * (n - 1);
  const lower = Math.floor(rank);

  // upper is always <= n - 1
  const upper = Math.ceil(rank);

  const frac = rank - lower;

  const lowerValue = sorted[lower]!;
  const upperValue = sorted[upper]!;

  return lowerValue * (1 - frac) + upperValue * frac;
}
