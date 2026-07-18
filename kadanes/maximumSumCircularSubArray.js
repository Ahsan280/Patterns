function maxSubarraySumCircular(nums) {
  let totalSum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  let maxEnding = nums[0];
  let minEnding = nums[0];

  let max = nums[0];
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEnding = Math.max(nums[i], maxEnding + nums[i]);
    minEnding = Math.min(nums[i], minEnding + nums[i]);
    min = Math.min(min, minEnding);
    max = Math.max(max, maxEnding);
  }
  if (max < 0) {
    return max;
  }
  return Math.max(max, totalSum - min);
}

// const nums = [1, -2, 3, -2];
const nums = [5, -3, 5];
// const nums = [-3, -2, -3];
console.log(maxSubarraySumCircular(nums));
