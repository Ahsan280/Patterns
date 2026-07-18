function maxSumFlip(a, n) {
  let totalSum = a.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  let minSum = a[0];
  let minEnding = a[0];

  for (let i = 1; i < n; i++) {
    minEnding = Math.min(a[i], minEnding + a[i]);
    minSum = Math.min(minSum, minEnding);
  }
  return Math.max(totalSum, totalSum - minSum + -minSum);
}
// const nums = [-2, 3, -1, -4, -2];
const nums = [1, 2, -10, 2, -20];
console.log(maxSumFlip(nums, nums.length));
