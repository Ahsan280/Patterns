function maxProduct(nums) {
  if (nums.length <= 1) {
    return nums[0];
  }
  let maxEnding = nums[0];
  let minEnding = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempMin = minEnding;
    minEnding = Math.min(nums[i], nums[i] * minEnding, nums[i] * maxEnding);
    maxEnding = Math.max(nums[i], nums[i] * maxEnding, nums[i] * tempMin);

    max = Math.max(max, minEnding, maxEnding);
  }
  return max;
}

// const nums = [2, 3, -2, 4];
// const nums = [-2, 3, -4];
const nums = [2, -5, -2, -4, 3];

console.log(maxProduct(nums));
