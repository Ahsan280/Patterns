function maxAbsoluteSum(nums) {
  if (nums.length <= 1) {
    return Math.abs(nums[0]);
  }
  let minSum = nums[0];
  let maxSum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(nums[i], nums[i] + maxSum);
    minSum = Math.min(nums[i], nums[i] + minSum);

    max = Math.max(max, maxSum, Math.abs(minSum));
  }
  return max;
}
// const nums = [1, -3, 2, 3, -4];
const nums = [2, -5, 1, -4, 3, -2];
console.log(maxAbsoluteSum(nums));
