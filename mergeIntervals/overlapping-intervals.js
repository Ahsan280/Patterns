function isIntersect(intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  let previousInterval = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (previousInterval[1] >= sorted[i][0]) {
      return true;
    }
    previousInterval = sorted[i];
  }
  return false;
}

const intervals = [
  [1, 3],
  [5, 7],
  [2, 4],
  [6, 8],
];
console.log(isIntersect(intervals));
