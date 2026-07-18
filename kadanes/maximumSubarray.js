function maxSubArray(nums) {
  if (nums.length <= 1) {
    return nums[0];
  }
  let max = nums[0];
  let bestEnding = nums[0];
  for (let i = 1; i < nums.length; i++) {
    bestEnding = Math.max(nums[i], nums[i] + bestEnding);
      console.log(
      `nums[i]=${nums[i]} bestEnding = ${bestEnding} max=${max}`,
    );
    console.log(
      `Math.max(max, bestEnding)=${Math.max(max, bestEnding)}`,
    );
    max = Math.max(max, bestEnding);
    console.log(max)
  }
  return max;
}

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const nums = [1];
const nums = [-1, -2];
console.log(maxSubArray(nums));
