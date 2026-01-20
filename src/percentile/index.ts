import { calculatePercentileType6 } from "./percentile-type-6.js";
import { calculatePercentileType7 } from "./percentile-type-7.js";
import { getInclusivePercentileRankOfScore } from "./rank-of-score.js";

console.log('============================= PERCENTILE =============================')

const data = [4, 2, 1, 8, 11, 10, 14, 20, 15, 15];
console.log('arr', data.toSorted());

console.log(
  "20th percentile",
  calculatePercentileType6(data, 20),
  calculatePercentileType7(data, 20),
);
console.log(
  "25th percentile",
  calculatePercentileType7(data, 25),
  calculatePercentileType7(data, 25),
);
console.log(
  "30th percentile",
  calculatePercentileType6(data, 30),
  calculatePercentileType7(data, 30),
);

console.log("rank of score 20", getInclusivePercentileRankOfScore(data, 20));
console.log("rank of score 2", getInclusivePercentileRankOfScore(data, 2));
console.log("rank of score 15", getInclusivePercentileRankOfScore(data, 15));
