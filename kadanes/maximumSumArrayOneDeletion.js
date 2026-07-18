function maximumSum(arr) {
  let noDeletion = arr[0];
  let oneDeletion = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let prevNoDeletion = noDeletion;
    noDeletion = Math.max(arr[i], arr[i] + noDeletion);
    oneDeletion = Math.max(prevNoDeletion, arr[i] + oneDeletion);
    max = Math.max(max, noDeletion, oneDeletion);
  }

  return max;
}

// const nums = [1, -2, 0, 3];
const nums = [1, -4, -5, -2, 5, 0, -1, 2];
// const nums = [1, -2, -2, 3];
// const nums = [-1, -1, -1, -1];
console.log(maximumSum(nums));

/* 
1
-2 ---> 1 - 2 = -1.  bestEnding 1 skip 1 --- normal bestEnding -1
0 ----> 1 + 0 = 1.   bestEnding 1 skip 1
3 ----> 3 + 1 = 4 bestEnding 4


[1, -4, -5, -2, 5, 0, -1, 2];
1
-4 ----> 1 - 4 = -3 bestEnding 1 skip 1
-5 ----> 1 - 5 = -4 bestEnding -4 skip 0
-2 ----> -4 -2 = -6 bestEnding -4 skip 1
5 -----> 5 - 4 = 1 bestEnding 5 skip 0
0 -----> 0 + 5 = 5 bestEnding 5 skip 0
-1 -----> -1 + 5 = 4 bestEnding 5  skip 1
2 ------> 2 + 5 = 7 bestEnding 7 skip 1


max is 7
*/
