/*
 a = [1, 5],  b = [3, 8];
 [1, 2, 3, 4, 5]
 [3, 4, 5, 6, 7, 8]

 ANS = [3, 5]

 a = [3, 8],  b = [1, 5];
 [3, 4, 5, 6, 7, 8]
 [1, 2, 3, 4, 5]

 ANS = [3, 5]
 */

const a = [1, 5];
const b = [3, 8];

function intersect(array1, array2) {
  return [Math.max(array1[0], array2[0]), Math.min(array1[1], array2[1])];
}

function intervalIntersection(firstList, secondList) {
  let left = 0;
  let right = 0;
  let result = [];
  while (left < firstList.length && right < secondList.length) {
    let smaller = Math.min(firstList[left][0], secondList[right][0]);
    if (smaller === firstList[left][0]) {
      if (firstList[left][1] >= secondList[right][0]) {
        result.push(intersect(firstList[left], secondList[right]));
      }
      if (firstList[left][1] > secondList[right][1]) {
        right++;
      } else {
        left++;
      }
    } else if (smaller === secondList[right][0]) {
      if (secondList[right][1] >= firstList[left][0]) {
        result.push(intersect(firstList[left], secondList[right]));
      }
      if (firstList[left][1] > secondList[right][1]) {
        right++;
      } else {
        left++;
      }
    }
  }
  return result;
}

const firstList = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
];
const secondList = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
];

// const firstList = [[8, 15]];
// const secondList = [
//   [2, 6],
//   [8, 10],
//   [12, 20],
// ];

// const firstList = [
//   [1, 3],
//   [5, 9],
// ];
// const secondList = [];

console.log(intervalIntersection(firstList, secondList));
