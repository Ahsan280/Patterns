function merge(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  const sorted = intervals.sort((a, b) => a[0] - b[0]);

  let result = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const currentInterval = sorted[i];
    let lastMerged = result[result.length - 1];
    if (lastMerged[1] >= currentInterval[0]) {
      lastMerged[1] = Math.max(currentInterval[1], lastMerged[1]);
    } else {
      result.push(currentInterval);
    }
  }
  return result;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

// const intervals = [
//   [1, 4],
//   [0, 2],
//   [3, 5],
// ];

// const intervals = [
//   [1, 4],
//   [5, 6],
// ];

console.log(merge(intervals));
