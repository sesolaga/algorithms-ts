// Hyndman–Fan Type 6
// Pulls low percentiles toward the minimum
export function calculatePercentileType6(
  data: number[],
  percentile: number,
): number | undefined {
  const sorted = data.toSorted((a, b) => a - b);

  const n = sorted.length;

  if (percentile <= 0) {
    return sorted[0];
  }

  if (percentile >= 100) {
    return sorted[n - 1];
  }

  // Find the rank (position)
  const rank = (percentile / 100) * (n + 1);

  if (Number.isInteger(rank)) {
    const idx = rank - 1; // -1 because array indexing starts with 0

    return sorted[Math.min(Math.max(idx, 0), n - 1)];
  }

  // Interpolate
  const whole = Math.floor(rank);
  const frac = rank - whole;

  const lower = whole - 1; // -1 because array indexing starts with 0
  const upper = lower + 1;

  if (lower < 0) {
    return sorted[0];
  }

  if (upper >= n) {
    return sorted[n - 1];
  }

  const valueAtLeftIndex = sorted[lower]!;
  const valueAtRightIndex = sorted[upper]!;

  return valueAtLeftIndex + frac * (valueAtRightIndex - valueAtLeftIndex);
}
