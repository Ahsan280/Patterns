function insert(intervals, newInterval) {
  let result = [];
  let inserted = false;
  for (let i = 0; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    if (
      currentInterval[1] >= newInterval[0] &&
      currentInterval[0] <= newInterval[1]
    ) {
      newInterval[0] = Math.min(newInterval[0], currentInterval[0]);
      newInterval[1] = Math.max(newInterval[1], currentInterval[1]);
    } else if (currentInterval[0] > newInterval[1]) {
      if (!inserted) {
        result.push(newInterval);
        inserted = true;
      }
      result.push(currentInterval);
    } else {
      result.push(currentInterval);
    }
  }
  if (!inserted) {
    result.push(newInterval);
  }
  return result;
}

// const intervals = [
//   [1, 3],
//   [6, 9],
// ];
// const newInterval = [2, 5];

const intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
const newInterval = [4, 8];

// const intervals = [[1, 5]];
// const newInterval = [2, 7];
console.log(insert(intervals, newInterval));
