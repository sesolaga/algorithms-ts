export function getInclusivePercentileRankOfScore(
  data: number[],
  score: number,
): number | undefined {
  const n = data.length;
  if (n === 0) {
    return undefined;
  }

  const sorted = data.toSorted((a, b) => a - b);

  const numberOfValuesBelowScore = sorted.filter((x) => x <= score).length;

  return (numberOfValuesBelowScore / sorted.length) * 100;
}
